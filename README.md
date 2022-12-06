
# DJTX JS CLI Tools
A collection of scripts.

## Prerequisites

NodeJs v12.14.1

## Running

### Step 1: Installation
1) `git clone https://github.com/lasthyphen/dijets-account-helper.git`
2) `cd dijets-account-helper/`
3) `npm install`

### Step 2: Generating a Mnemonic Phrase
If you are in need of a mnemonic phrase, type the following commands in your terminal:

`node mnemonic.js`

### Step 3: Deriving HD Addresses fromt a mnemonic Phrase
To generate your deterministic Dijets (DJTX) addresses, type the following commands in your terminal:

`node address_gen.js`

In the first prompt, enter how many addresses you want to generate. In the second prompt, paste your mnemonic phrase.

## Ethereum Key to Dijets Key
Given an ethereum private key, it will display the corresponding dijets address and private key.
`node eth_convert.js`