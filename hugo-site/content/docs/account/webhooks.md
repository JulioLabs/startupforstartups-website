---
title: "Webhooks"
description: "Send each form submission and questionnaire response to Slack, Zapier or your own system as it arrives."
weight: 30
---

A webhook sends a message to an address you choose each time something happens on a domain, for example a contact form submission. Use it to post to a Slack channel, start a Zapier or Make workflow, or save the data in your own system.

## Create a webhook

1. Open the domain's **Settings** from the sidebar, find **Webhooks**, and click **Manage Webhooks**.
2. Click **Create Webhook**.
3. Fill in:
   - **Name**, for example "Slack notifications".
   - **URL**: where to send the events. It must start with `https://`.
   - **Signing Secret (optional)**: any secret text. See [Check the signature](#check-the-signature).
   - **Subscribed Events**: the events to send.
4. Save, then click **Send Test** to send a test event.

Each webhook belongs to one domain. To get events from several domains, add a webhook on each.

## Events

| Event | Sent when |
|---|---|
| `contact_form.submission` | A visitor sends a contact form widget |
| `form.submission` | A visitor sends a form widget |
| `survey.submission` | A visitor answers a survey widget |
| `feedback.submission` | A visitor sends a feedback widget |
| `questionnaire.response` | Someone completes a questionnaire |

**Send Test** sends a `test.webhook` event.

## Slack

Paste a Slack incoming webhook URL (`https://hooks.slack.com/…`) as the URL. PresenceWave notices it and sends a formatted Slack message instead of JSON: a title, each field and its value, and the page or questionnaire it came from.

## What's sent

Every other URL gets an HTTP `POST` with a JSON body and these headers:

- `Content-Type: application/json`
- `User-Agent: PresenceWave-Webhook/1.0`
- `X-Signature`, if the webhook has a signing secret

A contact form submission looks like this:

```json
{
  "id": "6f1c2a9e-3b7d-4a51-9c0e-2d8f4b6a1e37",
  "event_type": "contact_form.submission",
  "created_at": "2026-11-13T09:41:12.345Z",
  "entity_type": "WidgetSubmission",
  "entity_id": "911000000000000003",
  "entity_name": "Widget Response (contact)",
  "action": "created",
  "metadata": {
    "widgetName": "Contact us",
    "widgetType": "CONTACT_FORM",
    "submissionType": "contact",
    "pageUrl": "https://yourbusiness.com/contact",
    "formDataKeys": ["widgetId", "name", "email", "message"],
    "userAgent": "Mozilla/5.0 ..."
  },
  "data": {
    "widgetId": "911000000000000002",
    "name": "Ana Lopez",
    "email": "ana@example.com",
    "message": "Do you deliver on Saturdays?"
  },
  "domain_id": "911000000000000001",
  "widget_id": "911000000000000002",
  "page_url": "https://yourbusiness.com/contact"
}
```

- `id` is unique to the event and stays the same when a delivery is retried, so you can use it to ignore duplicates.
- `data` holds what the visitor sent: the fields of your form, plus the widget's ID in `widgetId`.
- Questionnaire responses have `questionnaire_id` and `respondent_email` instead of `domain_id`, `widget_id` and `page_url`. Their `data` maps each question's label to the answer.

## Delivery and retries

Your server must reply with a `2xx` status within 10 seconds. Redirects aren't followed.

If it doesn't, the delivery is retried up to 4 more times: about 1 minute, 5 minutes, 30 minutes and 2 hours after each failed try. After the fifth failed try, that event is given up.

Click **Delivery Logs** next to a webhook to see each delivery: its status, event, HTTP response code, attempt number, duration and time.

## Check the signature

With a signing secret, each request has an `X-Signature` header:

```
X-Signature: sha256=5d5b09f6dcb2d53a5fffc60c4ac0d55fabdf556069d6631545f42aa6e3500f2e
```

The hex part is the HMAC-SHA256 of the raw request body, using your secret as the key. Compute it on your server and compare. If they differ, the request didn't come from PresenceWave. For example, in Node.js:

```js
const crypto = require("crypto");

function isFromPresenceWave(rawBody, signatureHeader, secret) {
  const expected = "sha256=" + crypto.createHmac("sha256", secret).update(rawBody).digest("hex");
  return signatureHeader.length === expected.length &&
    crypto.timingSafeEqual(Buffer.from(signatureHeader), Buffer.from(expected));
}
```

Use the body exactly as received, before parsing the JSON.

When you edit a webhook, leave **Signing Secret** empty to keep the current one.

## Pause or delete a webhook

- **Deactivate** stops sending events. **Activate** starts again. Events that happen while a webhook is inactive aren't sent later.
- **Delete** removes the webhook and stops all deliveries.
