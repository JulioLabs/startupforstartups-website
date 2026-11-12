---
title: "Subdomains and CNAME records"
description: "Put your services on subdomains like blog.yourbusiness.com and point them at PresenceWave."
weight: 30
---

Each service lives on a **subdomain** of one of your domains: your blog could be `blog.yourbusiness.com`, your job board `jobs.yourbusiness.com` and your short links `go.yourbusiness.com`. You choose the domain and subdomain when you set up the service, and you can change them later in its settings.

Subdomains don't use extra [domain slots](/docs/billing/domain-slots/), and there's no limit on how many you use.

## Add a CNAME record for each subdomain

For a subdomain to load your service, your DNS needs a **CNAME** record pointing it at PresenceWave. The domain's settings page (open **Settings**, then click the domain) shows the record under **CNAME Record Setup**:

| Type | Name | Value |
|---|---|---|
| CNAME | the subdomain, for example `blog` | the value shown on the page (use the copy button) |

Add one record for each subdomain you use, at your registrar or DNS provider. The **Subdomains** section of the same page lists your subdomains and shows which ones are verified. Click **Refresh** at the top of the page to check again after adding records.

## Or one record for everything

A **wildcard** CNAME named `*` (that is, `*.yourbusiness.com`) with the same value covers every subdomain at once, including ones you add later. Separate records per subdomain give you more control, so we recommend them unless you add subdomains often.

A wildcard also sends any other subdomain of your domain to PresenceWave, so don't add one if you already use other subdomains elsewhere, for example `shop.yourbusiness.com` on another platform. Records you've set up for specific subdomains still take priority over the wildcard.

## Your main website isn't affected

These records only touch the subdomains you choose. Your main website at `yourbusiness.com` and your email keep working as before.
