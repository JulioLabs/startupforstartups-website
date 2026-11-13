---
title: "API tokens"
description: "Create tokens to use the PresenceWave API from your own code, scripts and tools."
weight: 20
---

The PresenceWave API lets your own code publish blog posts, upload assets, manage subscribers, short links and more. Every request needs an API token.

## Create a token

1. Open **Settings** in the sidebar and find **API Token**.
2. Click **Create API Token**.
3. Give it a **Token Name**, for example the tool that will use it.
4. Optionally set **Expires in (days)**. Leave it empty for a token that never expires.
5. Click **Create Token**, then copy the token.

**This is the only time you can see the token.** Store it somewhere safe, such as your password manager or your tool's secret settings. PresenceWave can't show it again.

You can have up to 10 tokens at a time, for example one per tool, so you can replace or delete one without affecting the others.

## Use a token

Send the token in the `Authorization` header of every request:

```
Authorization: Bearer YOUR_TOKEN
```

A token gives full API access to your whole account. The [API reference](https://static.presencewave.com/docs/api/index.html) lists every endpoint.

A missing or wrong token gets a `401` response with the error code `MISSING_TOKEN` or `INVALID_TOKEN`. An expired or deleted token is treated as wrong.

## Manage your tokens

The list shows each token's name, when it was created, when it was last used and when it expires.

- **Regenerate** replaces a token with a new one with the same name and expiry date. The old token stops working straight away.
- **Delete** stops a token working straight away. This can't be undone.

Each time a token is created, regenerated or deleted, an email is sent to your account's email address, so you'll know if someone else does it.

## Keep tokens safe

- Never put a token in a web page or in code visitors can see. Use it only from servers, scripts and tools you control.
- If a token may have leaked, regenerate or delete it.
