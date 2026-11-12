---
title: "Mailing lists"
description: "Collect subscribers, send them emails and set up automatic email sequences."
weight: 50
---

A mailing list has a public sign-up page, a list of subscribers, and the emails you send them.

## Sending email

Emails go out through **your own Amazon SES account** (Amazon's email sending service), from an address on your domain. Set this up once per domain, before you send anything:

1. Open the domain's **Settings** in the sidebar.
2. In the AWS email settings, enter the **Default Display Name** and **Default Email ID** (the address emails come from), and your **AWS Access Key**, **AWS Secret Key** and **AWS Region**.
3. Enter a **Test Email Address**. A test email with a link is sent to it: click the link to confirm the settings work.

Until this is done, the domain isn't offered when you create a mailing list, and you can't send emails from it.

## Set up a list

Click **Create**, then **Mailing List**. You set:

- a **Name** and **Description**;
- the **Domain** and **Subdomain**, and an optional **Path prefix**, so the sign-up page can be at an address like `news.yourbusiness.com/updates`;
- **Require email confirmation for new subscribers**: new subscribers must click a link in an email before they're added;
- **Enable email tracking**: see which subscribers open your emails;
- the wording of the confirmation and unsubscribe emails.

People can also join from a [launch page](/docs/services/launch-page/).

## Subscribers

Open the list and go to **Subscribers** to see everyone on it. Search by email or name.

## Send an email

Open the list and go to its emails to write one and send it to the list. Emails include an unsubscribe link.

## Email sequences

A sequence is a series of emails sent automatically to each subscriber, with a wait of a set number of days and hours between them, for example a welcome series. Open the list and go to its email sequences to create one, then add the emails in order and set each delay.

Confirmed subscribers are added to the sequence when you create it, and new subscribers are added once they confirm.
