---
title: "Troubleshooting domains"
description: "What to check when a domain won't verify or a subdomain doesn't load."
weight: 50
---

## "TXT record not found or value doesn't match"

- **Wait a little.** DNS changes can take up to an hour to spread. You can check again every 5 minutes.
- **Check the name.** It should be `_sfs-hostname`, under your domain. If your provider adds the domain automatically and you typed the full name, the record may have ended up as `_sfs-hostname.yourbusiness.com.yourbusiness.com`. Edit it to just `_sfs-hostname`.
- **Check the value.** Copy it again with the copy button on the domain's settings page; a missing character is enough to fail.
- **Check you're editing the right DNS.** If your domain's nameservers point to another provider (for example Cloudflare), add the record there, not at the company you bought the domain from.

## "This domain is already verified on another account"

Only one account can verify a domain. If it's on another PresenceWave account you have access to, delete it there first. Otherwise, [contact us](mailto:sushrut@presencewave.com).

## A subdomain shows "Pending Verification" or doesn't load

- Make sure there's a **CNAME** record for that subdomain (or a wildcard `*`) with exactly the value shown on the domain's settings page, then click **Refresh**.
- **Cloudflare users:** set the record to **DNS only** (grey cloud), not **Proxied**. A proxied record hides the CNAME, so PresenceWave can't check it or set up the secure (HTTPS) address.
- Remove any older **A** or **CNAME** record for the same subdomain. Two records for one name conflict.

## A domain that worked has stopped

If your free trial or plan ended, your custom domains and the widgets on them stop being served after a grace period. Your dashboard shows a banner, and the Billing page shows your status. See [Your billing status](/docs/billing/account-status/).

## "Domain limit reached"

All your domain slots are in use. Delete a domain you no longer need, add a slot, or choose a plan. See [Domain slots](/docs/billing/domain-slots/).
