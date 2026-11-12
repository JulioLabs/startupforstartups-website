---
title: "Add your own domain"
description: "Connect a domain you own, such as yourbusiness.com, and verify it with a DNS record."
weight: 20
---

Connecting your own domain lets your blog, job board, links page and other services live on addresses like `blog.yourbusiness.com`. It takes two steps: add the domain in PresenceWave, then prove you own it with a DNS record at the company where you bought the domain (your registrar or DNS provider).

Adding a domain uses one [domain slot](/docs/billing/domain-slots/).

## 1. Add the domain

1. In the dashboard, open **Settings**.
2. Under **Domain Management**, type your domain, for example `yourbusiness.com`, in **Domain Name**.
3. Click **Add Domain**.

The domain appears in the list as pending verification. Click it to open its settings page, which shows the DNS records to add.

If all your slots are in use, you'll see "All your domain slots are in use" with a link to the Billing page.

## 2. Verify that you own it

On the domain's settings page, **TXT Record Verification** shows the record to add:

| Type | Name | Value |
|---|---|---|
| TXT | `_sfs-hostname` | the code shown on the page (use the copy button) |

1. Sign in to your registrar or DNS provider and open the DNS settings for your domain.
2. Add a new **TXT** record with the name and value from the page.
   - Most providers add your domain to the name for you, so enter just `_sfs-hostname`. If yours asks for the full name, enter `_sfs-hostname.yourbusiness.com`.
3. Save the record.
4. Back on the domain's settings page, click **Check Verification Status**.

When the record is found, the page says "Domain is verified and ready to use." and the status changes to **Verified**. Secure (HTTPS) addresses are then set up for you automatically.

**Not verified yet?** DNS changes can take a while to spread, sometimes up to an hour. You can check again every 5 minutes. See [Troubleshooting](/docs/domains/troubleshooting/) if it still doesn't verify.

## 3. Point your subdomains at PresenceWave

Verifying proves you own the domain. To make an address like `blog.yourbusiness.com` load your blog, it also needs a CNAME record. See [Subdomains and CNAME records](/docs/domains/subdomains-and-cname-records/).

Your main website at `yourbusiness.com` itself stays wherever it's hosted today: PresenceWave only uses the subdomains you choose.
