---
title: "Blog, links and questionnaire widgets"
description: "Show your blog posts, a links page or a questionnaire inside your own website."
weight: 60
---

These widgets bring something you've built in PresenceWave into your own website. They stay in sync: when you publish a post or edit the page, the widget shows the change.

## Blog widget

Shows your latest published posts as cards. You choose:

- the **Blog** to show posts from;
- **Posts Per Row** (1 to 4) and **Rows** (1 to 5). For example, 3 per row and 2 rows shows your 6 newest posts.

To show only one category, put its name in the `data-category` part of the widget code, written exactly as on your posts:

```html
<div data-widget="BLOG_WIDGET" data-widget-id="your widget ID" data-category="Announcements"></div>
```

Leave it empty (`data-category=""`) to show posts from every category.

## Links widget

Shows one of your [links pages](/docs/services/links-page/) inside your site, with the page's own theme and styles. Choose the **Links Page** when you create the widget.

The widget takes the full width of the space you paste it into. To make it narrower, put the code inside a narrower element, or change the `width` in the widget code.

## Questionnaire widget

Shows one of your [questionnaires](/docs/services/questionnaires/) inside your site. Choose the **Questionnaire** when you create the widget. It's shown in a frame that grows and shrinks to fit each page of the questionnaire, so visitors don't need to scroll inside it.

Responses are saved with the questionnaire, the same as when people answer it on its own address.

## Which website they appear on

Like every widget, these belong to a domain and only appear on that domain's website:

- A **blog widget** belongs to the domain you choose for it, and can show a blog from any of your domains.
- A **links widget** or **questionnaire widget** belongs to the domain of the links page or questionnaire it shows. To show one on `yourbusiness.com`, put the links page or questionnaire on `yourbusiness.com` (or one of its subdomains) first.
