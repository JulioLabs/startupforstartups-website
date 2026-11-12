---
title: "Add a widget to your website"
description: "Create a widget, copy its embed code and paste it into any website."
weight: 10
---

Widgets are small pieces like a contact form, a banner or a survey that you add to the website you already have. You build them in PresenceWave, paste a short piece of code into your site once, and change them from the dashboard afterwards without touching your site again.

## Before you start

Each widget belongs to one of your domains, and it only appears on that domain's pages. So:

- **Connect your domain first.** Your domain must be [added and verified](/docs/domains/add-a-custom-domain/). A widget on an unverified domain doesn't appear.
- **Create the widget on the domain your website uses.** A widget made for `yourbusiness.com` appears on `yourbusiness.com` and `www.yourbusiness.com`. It won't appear on another domain, or on another account's site.

## 1. Create the widget

1. Click **Create** in the sidebar.
2. Under **Create Widgets**, pick a widget type. See [Widget types](/docs/widgets/widget-types/).
3. Choose the **Domain** your website uses, give the widget a name, fill in its text and pick a theme. (Links and questionnaire widgets have no domain choice: they belong to the domain of the page or questionnaire they show.)
4. Save. The **Styles** page opens next, where you can change its colors and fonts.

## 2. Copy the embed code

Open the widget from **Widgets** in the sidebar. The **Embed Code** section (also under **Get Embed Code** in the widgets list) has two parts.

**Head code.** Paste this once into the `<head>` of your website. It's the same for every widget on the domain, so if you add more widgets later you don't need to add it again.

```html
<script>
  window.SFSConfig = {
    clientId: 'your domain ID'
  };
</script>
<script src="https://app.presencewave.com/loader/loader.js" async></script>
```

**Widget code.** Paste this where you want the widget to appear. Each widget has its own.

```html
<div data-widget="CONTACT_FORM" data-widget-id="your widget ID"></div>
```

Use the copy buttons in the dashboard rather than typing these out: they contain your own IDs.

## 3. Paste it into your site

Where to paste depends on how your site is built:

- **Plain HTML**: put the head code just before `</head>`, and the widget code where the widget should go.
- **Website builders and CMSs** (WordPress, Webflow, Squarespace, Wix, Shopify and others): look for a setting to add code to the site header (often called "custom code", "code injection" or "header scripts") for the head code. For the widget code, use the builder's "HTML", "embed" or "custom code" block on the page.

Some widgets don't stay where you paste them: the top banner sits at the top of the window, and the consent banner, survey and feedback button float at the bottom of it. Their widget code can go anywhere on the page, for example just before `</body>`. See [Widget types](/docs/widgets/widget-types/).

## 4. Check that it works

Open your website. The widget appears within a moment of the page loading. If it doesn't:

- **Is your domain verified**, and is the widget on that domain? Check under **Settings**.
- **Is the head code on the page?** Without it, no widgets load.
- **Is your plan active?** When a trial or plan has ended and your domain is [switched off](/docs/billing/account-status/), its widgets stop appearing.
- **Look in the browser console** (right-click the page, **Inspect**, then **Console**). If a widget can't be found, a message starting "Widget System:" says so: the widget may have been deleted, or it belongs to another domain.

## Changing a widget later

Changes you save in the dashboard show on your website straight away, with no new code needed.

**Moving a widget to another domain** (change its **Domain** and save) breaks the embed code already on your site, because the widget no longer belongs to that site's domain. You'll be asked to confirm before it moves.
