# Event Flow

**Estimated time:** 4 Hours

In this hands-on workshop, we’ll learn how to design, build, and ship an application complete with GraphQL API. We'll cover topics from event-driven architecture, low-code, GraphQL, and more.

## TOC What we’ll cover

1. Speed-run the demo to gain a high-level overview
2. Discuss the data model and event model
3. Signup for our service stack
  a. Hasura Cloud
  b. Retool
  c. n8n (via Railway)
  d. Mailjet
    i. Credentials: https://app.mailjet.com/account/apikeys
4. Provision our Postgres database and connect it to Hasura
5. 

## Speed-run the demo to gain a high-level overview

1. Load the Dashboard.
2. Scan this QR code.
3. Fill out the form.
4. Confirm you got the email.

What happened? What was the difference between the popup messages and the growing list? Let's discuss event-driven architecture and real-time data.

## Provision our Postgres database and connect it to Hasura

1. Clone this repo
   a. Look at architecture
   b. Discuss what NextJS does
   c. Look at API routes
   d. Look at what Zustand does
   e. Look at what codegen is (briefly)
2. Create an account at [Railway](https://railway.app/)
   a. Create new postgres service
   b. Import database schema
   c. Look at design / functions
3. Create an account at [Hasura Cloud](https://cloud.hasura.io/)
   a. Create database environment Variable
   b. Paste connection string from railway
   c. Launch console
   d. Add default datbase via Environment Vairable
   e. Enable relations
   f. Test queries
4. Create an account at Postmark
5. Populate .envs

## Generating our typed SDK

1. Enabling GraphQL Codegen
2. Generate our types
   a. Look at output
3. Enable permissions on Hasura
   a. Unauthed
   b. User
   c. Admin

## Connecting our API to our front-end

1. Connect Hasura to our front-end
2. Look at subscriptions
3. Look at streaming subscriptions

## Connecting our API to a back-end

1. Connecting custom business logic to Hasura
2. Connecting a REST API to Hasura

## Creating business logic to verify accounts

1. Working with the SDK from our backend

## Bonus: Connecting Zapier, Retool, or other hosted dashboards
