# Event Flow

**Estimated time:** 4 Hours

In this hands-on workshop, we’ll learn how to design, build, and ship an application complete with GraphQL API. We'll cover topics from event-driven architecture, low-code, GraphQL, and more.

## Project:

We'll create a tool that lets users register for an event, confirm their email, and then be scanned in via QR code.

### The event flow will be:

1. `Trigger`: Signup for event
2. `On signup`: Send confirmation email
3. `On confirm link`: send QR code
4. `On scan code`: mark attendee as present

### The service stack is:

1. Hasura Cloud
2. Retool
3. Fake mail provider
   a. Signup: https://ethereal.email/

## The parts we need

### Data Model

https://dbdiagram.io/d/63570a2efa2755667d634e0b

1. Add verified boolean on event_signup
2. Add is_present boolean event_signup

### Dashboard to view signups

### Signup Form

### Email to ask for confirmation

### Email to send QR Code

https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=test

### QR Code Scanner
