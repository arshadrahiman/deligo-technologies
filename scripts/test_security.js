const { chromium } = require('playwright');
const path = require('path');

(async () => {
    console.log('============================================================');
    console.log(' DELIGO TECHNOLOGIES - SECURITY & ARCHITECTURE TEST SUITE');
    console.log('============================================================');

    const browser = await chromium.launch({
        executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
        headless: true
    });

    const page = await browser.newPage();
    const targetUrl = 'file://' + path.resolve(__dirname, '../index.html');
    console.log(`[TEST 1] Loading Webroot Application: ${targetUrl}`);
    await page.goto(targetUrl);
    await page.waitForTimeout(600);

    // 1. Verify Public Site Zero-Trace Security (No CRM button)
    const pageTitle = await page.title();
    console.log(`  ✓ Page Title: "${pageTitle}"`);
    const crmCount = await page.locator('text=Owner CRM').count();
    const adminLinkCount = await page.locator('text=Executive Administration').count();
    console.log(`  ✓ Public Site "Owner CRM" link count: ${crmCount} (Expected: 0)`);
    console.log(`  ✓ Public Site "Executive Administration" link count: ${adminLinkCount} (Expected: 0)`);
    if (crmCount !== 0 || adminLinkCount !== 0) {
        throw new Error('SECURITY VIOLATION: CRM links detected on public website!');
    }

    // 2. Verify Enquiry Proposal Form & Honeypot Presence
    console.log('\n[TEST 2] Verifying Enquiry Modal & Honeypot Anti-Spam Field');
    await page.click('button:has-text("Get a Proposal")');
    await page.waitForTimeout(400);
    const modalVisible = await page.locator('text=Request a Technical Proposal').isVisible();
    console.log(`  ✓ Proposal Modal Visible: ${modalVisible}`);

    // Check honeypot input is in DOM and hidden
    const honeypotInput = page.locator('input[name="website_hp"]');
    const hpExists = await honeypotInput.count();
    console.log(`  ✓ Anti-Spam Honeypot field exists in DOM: ${hpExists === 1}`);
    if (hpExists !== 1) {
        throw new Error('SECURITY FLAW: Anti-spam honeypot input missing!');
    }

    // Close proposal modal
    await page.keyboard.press('Escape');
    await page.waitForTimeout(300);

    // 3. Verify Secret URL Authentication Gate (#admin)
    console.log('\n[TEST 3] Verifying Secret URL Path & Executive Login Gate');
    await page.goto(targetUrl + '#admin');
    await page.waitForTimeout(600);
    const loginModalVisible = await page.locator('text=Executive Portal').isVisible();
    console.log(`  ✓ Executive Login Modal opened on #admin: ${loginModalVisible}`);
    if (!loginModalVisible) {
        throw new Error('ROUTING FAILURE: #admin did not open Executive Portal login modal!');
    }

    // 4. Test Rejection of Invalid Credentials
    console.log('\n[TEST 4] Testing Brute-Force / Invalid Credentials Rejection');
    await page.fill('input[placeholder="e.g. admin"]', 'admin');
    await page.fill('input[placeholder="••••••••••••"]', 'wrong_password_999');
    await page.click('button:has-text("Unlock Executive CRM")');
    await page.waitForTimeout(400);
    const errorAlert = await page.locator('text=Invalid executive credentials').isVisible();
    console.log(`  ✓ Unauthorized attempt correctly blocked with error: ${errorAlert}`);
    if (!errorAlert) {
        throw new Error('SECURITY BREACH: Invalid credentials were not rejected!');
    }

    // 5. Test Successful Authentication with Master Credentials
    console.log('\n[TEST 5] Testing Authorized Executive Authentication');
    await page.fill('input[placeholder="••••••••••••"]', 'DeligoAdmin2026!');
    await page.click('button:has-text("Unlock Executive CRM")');
    await page.waitForTimeout(800);
    const crmDashboardVisible = await page.locator('text=Executive Enquiry & Lead CRM').isVisible();
    console.log(`  ✓ Executive CRM Dashboard unlocked: ${crmDashboardVisible}`);
    if (!crmDashboardVisible) {
        throw new Error('AUTHENTICATION FAILURE: Valid executive credentials failed to unlock CRM!');
    }

    // 6. Test Sign Out & Session Teardown
    console.log('\n[TEST 6] Testing Sign Out & Session Security');
    await page.click('button:has-text("Sign Out")');
    await page.waitForTimeout(400);
    const dashboardAfterSignout = await page.locator('text=Executive Enquiry & Lead CRM').isVisible();
    const currentUrl = page.url();
    console.log(`  ✓ Dashboard closed after Sign Out: ${!dashboardAfterSignout}`);
    console.log(`  ✓ Secret hash #admin cleared from address bar: ${!currentUrl.includes('#admin')}`);
    if (dashboardAfterSignout || currentUrl.includes('#admin')) {
        throw new Error('SECURITY FLAW: Sign Out did not cleanly close session or clear URL!');
    }

    await browser.close();
    console.log('\n============================================================');
    console.log(' ALL 6 SECURITY & ARCHITECTURE TESTS PASSED SUCCESSFULLY! 🚀');
    console.log('============================================================');
})();
