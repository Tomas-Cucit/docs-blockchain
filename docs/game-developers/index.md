---
title: 'Getting Started'

outline: [0, 5]
order: 0
prev: false
layout: 'doc'
---

# Getting Started with Integrating Ultra

First, we must define what type of app you have and what tech stack you are using. With this information, we can help guide you as to what type of integration you'll need to successfully integrate into Ultra's ecosystem.

## Are you web-based?

If your app is web-based, next you will need to decide whether or not you need verified user identification. This boils down to whether you need to know if the user who has connected to your app is who he says he is, or whether him being able to sign a transaction is enough.

For any app that is not embedded in the Ultra client directly, it is sufficient to simply allow users to sign transactions. A good example of an app that requires user verification is Ultra Arena, which is deeply integrated into Ultra's ecosystem.

-   If your app is deeply integrated into Ultra's ecosystem, you must follow our [Ultra SSO integration guide](./web/index.md).
-   If your app is a web-based app that a user will connect to via their browser, you should follow our [Wallet Extension guide](../products/ultra-wallet/index.md).

## Are you building with Unity?

If you're building with Unity, we have a set of helpful examples and a plugin which will help you get started. You should check our [Ultra Unity integration guide](./unity/index.md) which houses the details for where to get the Unity plugin, and how to use it.

## Are you building with Unreal?

If you're building with Unreal, we have a set of helpful examples and a plugin which will help you get started. You should check our [Ultra Unreal Subsystem integration guide](./unreal/index.md) which houses the details for where to get the Unreal Subsystem, and how to use it.

Many developers use Epic's Online Service for multiplayer so that they can unify their player base across all deployments. We have put [together a document](./web/index.md) that specifies exactly how to do that so that your game can connect Ultra's users to those of other platforms.

We currently do not have a subsystem that you can use to connect to the Ultra client.
