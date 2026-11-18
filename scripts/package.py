#!/usr/bin/env python3
"""
Deligo Technologies - Production Deployment Packager
Generates the clean, production-ready deligo-technologies-production.zip
with hardened security, Apache configurations, and database auto-installers.
"""

import os
import zipfile

OUTPUT_ZIP = "deligo-technologies-production.zip"

FILES_TO_INCLUDE = [
    # Core SPA Application
    ("index.html", "index.html"),
    ("app.bundle.js", "app.bundle.js"),
    ("CNAME", "CNAME"),
    ("robots.txt", "robots.txt"),
    ("sitemap.xml", "sitemap.xml"),
    (".nojekyll", ".nojekyll"),
    (".htaccess", ".htaccess"),
    ("README-HOSTING.txt", "README-HOSTING.txt"),
    ("admin/index.html", "admin/index.html"),
]

DIRECTORIES_TO_INCLUDE = [
    ("vendor", "vendor"),
    ("backend/api", "api"),
    ("backend/config", "config"),
]

def build_package():
    if os.path.exists(OUTPUT_ZIP):
        os.remove(OUTPUT_ZIP)

    with zipfile.ZipFile(OUTPUT_ZIP, "w", zipfile.ZIP_DEFLATED) as z:
        # Add root files
        for src, arc in FILES_TO_INCLUDE:
            if os.path.exists(src):
                z.write(src, arc)
                print(f"  + Added file: {arc}")

        # Add directories
        for src_dir, arc_prefix in DIRECTORIES_TO_INCLUDE:
            for root, _, files in os.walk(src_dir):
                for f in files:
                    if f.startswith(".") and f != ".htaccess":
                        continue
                    if f.endswith(".pyc") or f.endswith(".sqlite-journal"):
                        continue
                    full_p = os.path.join(root, f)
                    rel_p = os.path.relpath(full_p, src_dir)
                    arc_p = os.path.join(arc_prefix, rel_p)
                    z.write(full_p, arc_p)
                    print(f"  + Added: {arc_p}")

        # Add data directory with .htaccess protection
        if os.path.exists("backend/data/.htaccess"):
            z.write("backend/data/.htaccess", "data/.htaccess")
            print("  + Added: data/.htaccess")

    size_kb = os.path.getsize(OUTPUT_ZIP) / 1024
    print(f"\nSuccessfully generated {OUTPUT_ZIP} ({size_kb:.1f} KB)")

if __name__ == "__main__":
    build_package()
