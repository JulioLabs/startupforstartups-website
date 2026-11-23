---
title: "Assets"
description: "Upload images and files once, then use them in your blog, links page, job board and more."
weight: 40
---

Assets are the images and files you upload to PresenceWave. Each one gets a public address, so you can use it in your services and anywhere on the web.

## Upload files

Open **Assets** in the sidebar, then drag files onto the page, or click **Upload Assets** or **Select Files**. You can upload several files at once.

You can also upload while you work, without opening Assets first. Every image picker has its own upload option: for example a blog's **Banner Image** and **Logo**, a post's **Featured Image** and images in the post editor, the logo of a links page, job board or questionnaire, the domain's **Favicon**, a QR code's logo, and your blog author picture in **Settings**.

## Limits

<!-- Storage: tenant.limits.assets in application.yml. Upload size: spring.servlet.multipart.max-request-size. -->

- **Storage:** 1 GB per account. The bar at the top of the Assets page, and **Usage** in **Settings**, show how much you've used. An upload that would go over the limit is refused as a whole; delete some assets or upload fewer files.
- **Upload size:** up to 10 MB per upload. When you upload several files at once, they share the 10 MB.

## Find and use an asset

- Use **Search assets** to find one by name, and the type filter for **Images Only**, **Documents Only** or **Other Files**.
- Sort the list by file name, type, size or upload date.
- Hover over an image to see a larger preview.
- Click **Copy link** to copy the file's public address, or **Download** to save it.

## Where files are served from

Files are served over HTTPS from PresenceWave's file storage, at an address that doesn't change. Anyone with the address can open the file, so don't upload anything private.

## Delete an asset

Click **Delete** and confirm. The file is removed straight away and can't be recovered.

Deleting doesn't check where the file is used. Pages that show it, such as a blog post or links page, will show a broken image, so replace it there first.

## Upload with the API

The [API](/docs/account/api-tokens/) can upload assets too. It skips a file you've already uploaded (same name, size and type), so sending a whole folder again is safe.
