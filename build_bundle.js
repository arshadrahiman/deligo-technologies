const fs = require('fs');
const path = require('path');
const babel = require('/Users/arshadulrahman/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/lib/transform/babelBundle.js');

const html = fs.readFileSync('frontend/index.html', 'utf-8');
const match = html.match(/<script type="text\/babel">([\s\S]*?)<\/script>/);
if (!match) {
    console.error('No script found');
    process.exit(1);
}

let code = match[1];

// Update API_BASE so that it connects to port 8080 or current host
code = code.replace(
    /const API_BASE = window\.location\.protocol === 'file:' \? 'http:\/\/localhost:\d+' : '';/,
    "const API_BASE = window.location.protocol === 'file:' ? 'http://localhost:8080' : '';"
);

// Replace icon tags
code = code.replace(/<i\s+([^>]*?)data-lucide=([\"'][^\"']+[\"']|\{[^}]+\})([^>]*?)><\/i>/g, (m, before, name, after) => {
    let attrs = (before + ' ' + after).trim();
    return '<Icon name=' + name + ' ' + attrs + ' />';
});

code = code.replace(/<i\s+([^>]*?)data-lucide=([\"'][^\"']+[\"']|\{[^}]+\})([^>]*?)\/>/g, (m, before, name, after) => {
    let attrs = (before + ' ' + after).trim();
    return '<Icon name=' + name + ' ' + attrs + ' />';
});

// Remove window.lucide.createIcons calls which are no longer needed
code = code.replace(/if\s*\(window\.lucide\)\s*\{\s*window\.lucide\.createIcons\(\);\s*\}/g, '/* native icons */');
code = code.replace(/if\s*\(window\.lucide\)\s*\{\s*setTimeout\(\(\)\s*=>\s*window\.lucide\.createIcons\(\),\s*\d+\);\s*\}/g, '/* native icons */');

const iconComponentCode = `
function Icon({ name, className = 'w-4 h-4', ...props }) {
    const icons = window.DELIGO_ICONS || {};
    const iconDef = icons[name] || icons['sparkles'] || null;
    if (!iconDef) return null;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className={\`lucide lucide-\${name} \${className}\`}
            {...props}
        >
            {iconDef.map(([tag, attrs], idx) => {
                const TagName = tag;
                return <TagName key={idx} {...attrs} />;
            })}
        </svg>
    );
}
`;

code = iconComponentCode + '\n' + code;

const res = babel.babelTransform(code, 'app.jsx', false, [], []);

const bundleHeader = `/**
 * Deligo Technologies - High Performance Production React 18 Application Bundle
 * Pre-compiled bundle: Zero Babel runtime latency, 100% offline & local server capable.
 */
(function() {
    'use strict';
    const React = window.React;
    const ReactDOM = window.ReactDOM;
    if (!React || !ReactDOM) {
        console.error('Deligo Technologies: React 18 / ReactDOM not loaded!');
        return;
    }

    const _jsxRuntime = {
        jsx: function(type, props, key) {
            const { children, ...rest } = props || {};
            if (key !== undefined) rest.key = key;
            if (children === undefined) return React.createElement(type, rest);
            if (Array.isArray(children)) return React.createElement(type, rest, ...children);
            return React.createElement(type, rest, children);
        },
        jsxs: function(type, props, key) {
            const { children, ...rest } = props || {};
            if (key !== undefined) rest.key = key;
            if (children === undefined) return React.createElement(type, rest);
            if (Array.isArray(children)) return React.createElement(type, rest, ...children);
            return React.createElement(type, rest, children);
        },
        Fragment: React.Fragment
    };

    function require(mod) {
        if (mod === 'react/jsx-runtime') return _jsxRuntime;
        if (mod === 'react') return window.React;
        if (mod === 'react-dom') return window.ReactDOM;
        return {};
    }
`;

const bundleFooter = `
})();
`;

let compiledBody = res.code
    .replace(/^"use strict";\s*/, '')
    .replace(/var _jsxRuntime = require\("react\/jsx-runtime"\);\s*/, '');

fs.writeFileSync('frontend/app.bundle.js', bundleHeader + compiledBody + bundleFooter);
console.log('Successfully written frontend/app.bundle.js (size:', fs.statSync('frontend/app.bundle.js').size, 'bytes)');

