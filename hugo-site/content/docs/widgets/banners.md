---
title: "Top banner and cookie banner"
description: "Announce offers at the top of your site, and tell visitors you use cookies."
weight: 30
---

## Top banner

A top banner runs across the top of the window, with your page moved down below it. Use it for a sale, an event or news.

| Setting | What it does |
|---|---|
| **Line 1** | The main message (required) |
| **Line 2** | A second, smaller line (optional) |
| **CTA Button Text** | The button label. Leave it empty for no button. |
| **CTA Button URL** | Where the button goes. It opens in a new tab. |

The theme settings add three switches:

- **Sticky**: keep the banner in view as visitors scroll.
- **Show close button**: let visitors close the banner.
- **Remember closed**: once a visitor closes it, keep it closed for them in that browser. Without this, it comes back on the next page.

### Different text on different pages

You can change the text for one page without making another banner. Add any of these to the widget code on that page:

```html
<div data-widget="TOP_BANNER" data-widget-id="your widget ID"
     data-line1="Free shipping this week"
     data-line2="On all orders"
     data-cta-text="Shop now"
     data-cta-url="https://yourbusiness.com/shop"></div>
```

Anything you leave out uses the text set in the dashboard.

## Cookie banner

A cookie banner runs across the bottom of the window with a short notice and a button. You set:

- the **notice text**;
- the **button text** (by default "I Understand");
- an optional **privacy policy link**: switch it on and give the address and the link text.

When a visitor clicks the button, the banner stays hidden for them in that browser.

**The cookie banner is a notice only.** It tells visitors that your site uses cookies. It doesn't block cookies or other scripts before visitors agree, and it doesn't offer choices by category. If the law where you or your visitors are requires that, use a dedicated consent tool.
