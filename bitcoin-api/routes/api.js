const express = require("express");
const router = express.Router();
var request = require("request");

const dotenv = require("dotenv");
dotenv.config();

const USER = process.env.RPC_USER;
const PASS = process.env.RPC_PASSWORD;
const NODEIP = process.env.LOCAL_NODE_IP;

const headers = {
  "content-type": "text/plain;"
};

router.get("/test", (req, res) => res.json({ msg: "backend works" }));


// getblockcount route
//
// Returns the height of the most-work fully-validated chain.
//
router.get("/getblockcount", (req, res) => {
    var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getblockcount","params":[]}`;
    var options = {
      url: `http://${USER}:${PASS}@${NODEIP}:8332/`,
      method: "POST",
      headers: headers,
      body: dataString
    };
    
    callback = (error, response, body) => {
      if (!error && response.statusCode == 200) {
        const data = JSON.parse(body);
        res.send(data);
      }
    };
    request(options, callback);
  });


// getbestblockhash route
//
// Returns the hash of the best (tip) block in the most-work fully-validated chain (hex encoded).
//
router.get("/getbestblockhash", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getbestblockhash","params":[]}`;
  var options = {
    url: `http://${USER}:${PASS}@${NODEIP}:8332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});


// getconnectioncount route
//
// Returns the number of connections to other nodes.
//
router.get("/getconnectioncount", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getconnectioncount","params":[]}`;
  var options = {
    url: `http://${USER}:${PASS}@${NODEIP}:8332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});


// getdifficulty route
//
// Returns the proof-of-work difficulty as a multiple of the minimum difficulty.
//
router.get("/getdifficulty", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getdifficulty","params":[]}`;
  var options = {
    url: `http://${USER}:${PASS}@${NODEIP}:8332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});

// getblockchaininfo route
//
// Returns an object containing various state info regarding blockchain processing.
/*
Result:
{                                         (json object)
  "chain" : "str",                        (string) current network name (main, test, signet, regtest)
  "blocks" : n,                           (numeric) the height of the most-work fully-validated chain. The genesis block has height 0
  "headers" : n,                          (numeric) the current number of headers we have validated
  "bestblockhash" : "str",                (string) the hash of the currently best block
  "difficulty" : n,                       (numeric) the current difficulty
  "time" : xxx,                           (numeric) The block time expressed in UNIX epoch time
  "mediantime" : xxx,                     (numeric) The median block time expressed in UNIX epoch time
  "verificationprogress" : n,             (numeric) estimate of verification progress [0..1]
  "initialblockdownload" : true|false,    (boolean) (debug information) estimate of whether this node is in Initial Block Download mode
  "chainwork" : "hex",                    (string) total amount of work in active chain, in hexadecimal
  "size_on_disk" : n,                     (numeric) the estimated size of the block and undo files on disk
  "pruned" : true|false,                  (boolean) if the blocks are subject to pruning
  "pruneheight" : n,                      (numeric, optional) height of the last block pruned, plus one (only present if pruning is enabled)
  "automatic_pruning" : true|false,       (boolean, optional) whether automatic pruning is enabled (only present if pruning is enabled)
  "prune_target_size" : n,                (numeric, optional) the target size used by pruning (only present if automatic pruning is enabled)
  "warnings" : "str"                      (string) any network and blockchain warnings
}
*/
router.get("/getblockchaininfo", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getblockchaininfo","params":[]}`;
  var options = {
    url: `http://${USER}:${PASS}@${NODEIP}:8332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});


// getmininginfo route
// Returns a json object containing mining-related information.
/* 
Result:
{                              (json object)
  "blocks" : n,                (numeric) The current block
  "currentblockweight" : n,    (numeric, optional) The block weight of the last assembled block (only present if a block was ever assembled)
  "currentblocktx" : n,        (numeric, optional) The number of block transactions of the last assembled block (only present if a block was ever assembled)
  "difficulty" : n,            (numeric) The current difficulty
  "networkhashps" : n,         (numeric) The network hashes per second
  "pooledtx" : n,              (numeric) The size of the mempool
  "chain" : "str",             (string) current network name (main, test, signet, regtest)
  "warnings" : "str"           (string) any network and blockchain warnings
}
*/
router.get("/getmininginfo", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getmininginfo","params":[]}`;
  var options = {
    url: `http://${USER}:${PASS}@${NODEIP}:8332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});


// getpeerinfo
//
// Returns data about each connected network peer as a json array of objects.
/*
Result:
[                                         (json array)
  {                                       (json object)
    "id" : n,                             (numeric) Peer index
    "addr" : "str",                       (string) (host:port) The IP address and port of the peer
    "addrbind" : "str",                   (string, optional) (ip:port) Bind address of the connection to the peer
    "addrlocal" : "str",                  (string, optional) (ip:port) Local address as reported by the peer
    "network" : "str",                    (string) Network (ipv4, ipv6, onion, i2p, cjdns, not_publicly_routable)
    "mapped_as" : n,                      (numeric, optional) The AS in the BGP route to the peer used for diversifying
                                          peer selection (only available if the asmap config flag is set)
    "services" : "hex",                   (string) The services offered
    "servicesnames" : [                   (json array) the services offered, in human-readable form
      "str",                              (string) the service name if it is recognised
      ...
    ],
    "relaytxes" : true|false,             (boolean, optional) Whether peer has asked us to relay transactions to it
    "lastsend" : xxx,                     (numeric) The UNIX epoch time of the last send
    "lastrecv" : xxx,                     (numeric) The UNIX epoch time of the last receive
    "last_transaction" : xxx,             (numeric) The UNIX epoch time of the last valid transaction received from this peer
    "last_block" : xxx,                   (numeric) The UNIX epoch time of the last block received from this peer
    "bytessent" : n,                      (numeric) The total bytes sent
    "bytesrecv" : n,                      (numeric) The total bytes received
    "conntime" : xxx,                     (numeric) The UNIX epoch time of the connection
    "timeoffset" : n,                     (numeric) The time offset in seconds
    "pingtime" : n,                       (numeric, optional) ping time (if available)
    "minping" : n,                        (numeric, optional) minimum observed ping time (if any at all)
    "pingwait" : n,                       (numeric, optional) ping wait (if non-zero)
    "version" : n,                        (numeric) The peer version, such as 70001
    "subver" : "str",                     (string) The string version
    "inbound" : true|false,               (boolean) Inbound (true) or Outbound (false)
    "bip152_hb_to" : true|false,          (boolean) Whether we selected peer as (compact blocks) high-bandwidth peer
    "bip152_hb_from" : true|false,        (boolean) Whether peer selected us as (compact blocks) high-bandwidth peer
    "startingheight" : n,                 (numeric, optional) The starting height (block) of the peer
    "presynced_headers" : n,              (numeric, optional) The current height of header pre-synchronization with this peer, or -1 if no low-work sync is in progress
    "synced_headers" : n,                 (numeric, optional) The last header we have in common with this peer
    "synced_blocks" : n,                  (numeric, optional) The last block we have in common with this peer
    "inflight" : [                        (json array, optional)
      n,                                  (numeric) The heights of blocks we're currently asking from this peer
      ...
    ],
    "addr_relay_enabled" : true|false,    (boolean, optional) Whether we participate in address relay with this peer
    "addr_processed" : n,                 (numeric, optional) The total number of addresses processed, excluding those dropped due to rate limiting
    "addr_rate_limited" : n,              (numeric, optional) The total number of addresses dropped due to rate limiting
    "permissions" : [                     (json array) Any special permissions that have been granted to this peer
      "str",                              (string) bloomfilter (allow requesting BIP37 filtered blocks and transactions),
                                          noban (do not ban for misbehavior; implies download),
                                          forcerelay (relay transactions that are already in the mempool; implies relay),
                                          relay (relay even in -blocksonly mode, and unlimited transaction announcements),
                                          mempool (allow requesting BIP35 mempool contents),
                                          download (allow getheaders during IBD, no disconnect after maxuploadtarget limit),
                                          addr (responses to GETADDR avoid hitting the cache and contain random records with the most up-to-date info).

      ...
    ],
    "minfeefilter" : n,                   (numeric, optional) The minimum fee rate for transactions this peer accepts
    "bytessent_per_msg" : {               (json object)
      "msg" : n,                          (numeric) The total bytes sent aggregated by message type
                                          When a message type is not listed in this json object, the bytes sent are 0.
                                          Only known message types can appear as keys in the object.
      ...
    },
    "bytesrecv_per_msg" : {               (json object)
      "msg" : n,                          (numeric) The total bytes received aggregated by message type
                                          When a message type is not listed in this json object, the bytes received are 0.
                                          Only known message types can appear as keys in the object and all bytes received
                                          of unknown message types are listed under '*other*'.
      ...
    },
    "connection_type" : "str"             (string) Type of connection:
                                          outbound-full-relay (default automatic connections),
                                          block-relay-only (does not relay transactions or addresses),
                                          inbound (initiated by the peer),
                                          manual (added via addnode RPC or -addnode/-connect configuration options),
                                          addr-fetch (short-lived automatic connection for soliciting addresses),
                                          feeler (short-lived automatic connection for testing addresses).
                                          Please note this output is unlikely to be stable in upcoming releases as we iterate to
                                          best capture connection behaviors.
  },
  ...
]
*/
router.get("/getpeerinfo", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getpeerinfo","params":[]}`;
  var options = {
    url: `http://${USER}:${PASS}@${NODEIP}:8332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});


// getrawmempool route
//
// Returns all transaction ids in memory pool as a json array of string transaction ids.
/*
Result (for verbose = false):
[           (json array)
  "hex",    (string) The transaction id
  ...
]
*/
router.get("/getrawmempool", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getrawmempool","params":[]}`;
  var options = {
    url: `http://${USER}:${PASS}@${NODEIP}:8332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});


// getblock route
//
// Returns an Object with information about block <hash> (verbosity = 1).
/*
Result (for verbosity = 1):
{                                 (json object)
  "hash" : "hex",                 (string) the block hash (same as provided)
  "confirmations" : n,            (numeric) The number of confirmations, or -1 if the block is not on the main chain
  "size" : n,                     (numeric) The block size
  "strippedsize" : n,             (numeric) The block size excluding witness data
  "weight" : n,                   (numeric) The block weight as defined in BIP 141
  "height" : n,                   (numeric) The block height or index
  "version" : n,                  (numeric) The block version
  "versionHex" : "hex",           (string) The block version formatted in hexadecimal
  "merkleroot" : "hex",           (string) The merkle root
  "tx" : [                        (json array) The transaction ids
    "hex",                        (string) The transaction id
    ...
  ],
  "time" : xxx,                   (numeric) The block time expressed in UNIX epoch time
  "mediantime" : xxx,             (numeric) The median block time expressed in UNIX epoch time
  "nonce" : n,                    (numeric) The nonce
  "bits" : "hex",                 (string) The bits
  "difficulty" : n,               (numeric) The difficulty
  "chainwork" : "hex",            (string) Expected number of hashes required to produce the chain up to this block (in hex)
  "nTx" : n,                      (numeric) The number of transactions in the block
  "previousblockhash" : "hex",    (string, optional) The hash of the previous block (if available)
  "nextblockhash" : "hex"         (string, optional) The hash of the next block (if available)
}
*/
router.get("/getblock/:hash", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getblock","params":["${
    req.params.hash
  }"]}`;
  var options = {
    url: `http://${USER}:${PASS}@${NODEIP}:8332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});

// getblockhash route
//
// Returns hash of block in best-block-chain at height provided (hex encoded).
//
router.get("/getblockhash/:index", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getblockhash","params":[${
    req.params.index
  }]}`;
  var options = {
    url: `http://${USER}:${PASS}@${NODEIP}:8332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});


// getrawtransaction route
//
// Return the raw transaction data (verbose = false, txindex enabled).
/*
Result:
"str"    (string) The serialized, hex-encoded data for 'txid'
*/
router.get("/getrawtransaction/:id", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getrawtransaction","params":["${
    req.params.id
  }"]}`;
  var options = {
    url: `http://${USER}:${PASS}@${NODEIP}:8332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});


// decoderawtransation route
//
// Return a JSON object representing the serialized, hex-encoded transaction.
/*
Result:
{                             (json object)
  "txid" : "hex",             (string) The transaction id
  "hash" : "hex",             (string) The transaction hash (differs from txid for witness transactions)
  "size" : n,                 (numeric) The serialized transaction size
  "vsize" : n,                (numeric) The virtual transaction size (differs from size for witness transactions)
  "weight" : n,               (numeric) The transaction's weight (between vsize*4-3 and vsize*4)
  "version" : n,              (numeric) The version
  "locktime" : xxx,           (numeric) The lock time
  "vin" : [                   (json array)
    {                         (json object)
      "coinbase" : "hex",     (string, optional) The coinbase value (only if coinbase transaction)
      "txid" : "hex",         (string, optional) The transaction id (if not coinbase transaction)
      "vout" : n,             (numeric, optional) The output number (if not coinbase transaction)
      "scriptSig" : {         (json object, optional) The script (if not coinbase transaction)
        "asm" : "str",        (string) Disassembly of the signature script
        "hex" : "hex"         (string) The raw signature script bytes, hex-encoded
      },
      "txinwitness" : [       (json array, optional)
        "hex",                (string) hex-encoded witness data (if any)
        ...
      ],
      "sequence" : n          (numeric) The script sequence number
    },
    ...
  ],
  "vout" : [                  (json array)
    {                         (json object)
      "value" : n,            (numeric) The value in BTC
      "n" : n,                (numeric) index
      "scriptPubKey" : {      (json object)
        "asm" : "str",        (string) Disassembly of the public key script
        "desc" : "str",       (string) Inferred descriptor for the output
        "hex" : "hex",        (string) The raw public key script bytes, hex-encoded
        "type" : "str",       (string) The type, eg 'pubkeyhash'
        "address" : "str"     (string, optional) The Bitcoin address (only if a well-defined address exists)
      }
    },
    ...
  ]
}
*/
router.get("/decoderawtransaction/:hex", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"decoderawtransaction","params":["${
    req.params.hex
  }"]}`;
  var options = {
    url: `http://${USER}:${PASS}@${NODEIP}:8332/`,
    method: "POST",
    headers: headers,
    body: dataString
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});

module.exports = router;