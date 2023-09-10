---
sidebar_position: 2
slug: /terminology
tags:
  - definitions
  - terminology
custom_edit_url: null
---

# Terminology

- _Account_: The owner of a HNS domain name. Generally, the owner would be a [Hedera Account ID](https://docs.hedera.com/hedera/core-concepts/accounts/account-properties#account-id).
- _Domain (Name)_: A HNS identifier such as `hns.hbar`. A domain may consist of multiple parts, called subdomains, separated by dots.
- _Namehash_: The algorithm used to process a HNS domain name and returns an object with a human-readable domain name, a subdomain hash, and a top-level domain hash.
- _Operator_: The account that may edit the records of a domain name.
- _Subdomain (SLD)_: An individual component of a domain name, such as `hns` in `hns.hbar`.
- _Subdomain Hash_: The keccak256 hash of an individual subdomain.
- _Top-level Domain (TLD)_: The last part of a domain name, such as `hbar` in `hns.hbar`.
- _Owner_: The owner of a domain is the entity referenced in the HNS registry's `account_id` field. Also see **_Account_**.
- _Registrar_: A registrar is a contract responsible for allocating subdomains. The owner field of the registry points to registrars.
- _Registration_: A registration is a registrar's record of an account's ownership of a domain name.
- _Registrant_: See **_Account_**.
- _Registry_: The HNS smart contracts and HCS topic IDs that maintains a mapping from domain name to account and domain registration details (e.g. expiration, namehash, etc).
- _Resolver_: The HNS resolver is in the form of an API (coming soon) and an [SDK](https://www.npmjs.com/package/hashgraph-name-resolution-sdk) that returns one or more domain names owned by a specified account.