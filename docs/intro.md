---
sidebar_position: 1
slug: /
tags:
  - intro
custom_edit_url: null
---

# Introduction

The Hedera Name Service (HNS) is a distributed, open, and extensible naming system based on Hedera Hashgraph.

HNS maps human-readable names like `hns.hbar` to machine-readable identifiers such as [Hedera Accounts](https://docs.hedera.com/hedera/core-concepts/accounts/account-properties#account-id), [Contract IDs](https://docs.hedera.com/hedera/sdks-and-apis/sdks/smart-contracts/delegate-contract-id), [Transaction IDs](https://docs.hedera.com/hedera/sdks-and-apis/sdks/transactions/transaction-id), etc. 

HNS, like the Internet's Domain Name Service (DNS), operates on a system of dot-separated hierarchical names called domains. Top-level domains (TLDs), like `.hbar`, `.boo`, and `.cream` (which are currently supported by HNS), are owned by smart contracts that allocate their subdomains (SLDs). 

HNS is deployed on the Hedera Mainnet only. 

## HNS Architecture

HNS has two components:

- registry
- resolver


### Registry

The HNS registry consists of multiple smart contracts that maintain a list of domains and subdomains. Each TLD is also mapped to its respective HCS topic to keep track of registered names on the Hedera Mainnet. The registry stores three critical pieces of information:

> - The owner of the domain (including the TLD and SLD)
> - The NFT serial number associated with the subdomain
> - The expiration of the registered subdomain

:::info

A domain registry example

```json
{
  "transactionId": "1627681495.589028475",
  "nameHash": {
    "domain": "hns.hbar",
    "tldHash": "0b8bd8e9fedcbba67c5f70533607e716a6c39617aa9ac55b33de5ad074030395",
    "sldHash": "c0ebbcb56a39e31aa8a7918dc038475d2e1ed42acf493966c422b04ffa04f239"
  },
  "nftId": "0.0.1234567:00001",
  "expiration": 1774316891,
  "provider": "hedera name service",
  "providerData": {
    "contractId": "0.0.1503730"
  }
}
```

:::

Owners of domains in the HNS registry may:

> - Transfer ownership of the domain to another account
> - Change the ownership of subdomains

The HNS registry exists to map names to the resolver responsible for it.

### Resolvers

Resolvers are responsible for the process of translating domains into accounts. Resolving a name in HNS is a two-step process:

1. Ask the registry what resolver is responsible for the domain (based on the name's TLD)
2. Ask the resolver to return the registered domain(s), if any

## Namehash

Namehash is used to derive a hash from a name because interacting directly with human-readable names is inefficient. From the above example, the namehash of `hns.hbar` is represented by the SLD hash `c0ebbcb56a39e31aa8a7918dc038475d2e1ed42acf493966c422b04ffa04f239` and the TLD hash `0b8bd8e9fedcbba67c5f70533607e716a6c39617aa9ac55b33de5ad074030395`. 

HNS uses the [eth-ens-namehash](https://www.npmjs.com/package/eth-ens-namehash) npm package to generate namehashes.

## Reference

- [HIP-791: Hedera Name Protocol](https://github.com/mcbosserton/hedera-improvement-proposal/blob/mcbosserton-patch-1/hip-791.md)