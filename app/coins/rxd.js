var Decimal = require("decimal.js");
Decimal8 = Decimal.clone({ precision:8, rounding:8 });

var currencyUnits = [
	{
		type:"native",
		name:"RXD",
		multiplier:1,
		default:true,
		values:["", "rxd", "RXD"],
		decimalPlaces:8
	},
	{
		type:"native",
		name:"mRXD",
		multiplier:1000,
		values:["mrxd"],
		decimalPlaces:5
	},
	{
		type:"native",
		name:"bits",
		multiplier:1000000,
		values:["bits"],
		decimalPlaces:2
	},
	{
		type:"native",
		name:"sat",
		multiplier:100000000,
		values:["sat", "satoshi"],
		decimalPlaces:0
	},
	{
		type:"exchanged",
		name:"USD",
		multiplier:"usd",
		values:["usd"],
		decimalPlaces:2,
		symbol:"$"
	},
	{
		type:"exchanged",
		name:"EUR",
		multiplier:"eur",
		values:["eur"],
		decimalPlaces:2,
		symbol:"€"
	},
	{
		type:"exchanged",
		name:"ARS",
		multiplier:"ars",
		values:["ars"],
		decimalPlaces:2,
		symbol:"$",
		isExtendedRate: true
	},
];

module.exports = {
	name:"Radiant Blockchain",
	ticker:"RXD",
	logoUrl:"/img/logo/rxd.png",
	faviconUrl:"/img/logo/rxd.ico",
	siteTitle:"Radiant Blockchain Explorer",
	siteTitleHtml:"Radiant Blockchain Explorer",
	siteDescriptionHtml:"<b>Radiant RXD Explorer</b> is <a href='https://github.com/radiantblockchain/radiant-rpc-explorer). If you run your own [Radiant Blockchain Full Node](https://radiantblockchain.org), **RAD Explorer** can easily run alongside it, communicating via RPC calls. See the project [ReadMe](https://github.com/radiantblockchain/radiant-rpc-explorer) for a list of features and instructions for running.",
	nodeTitle:"Radiant Blockchain Full Node",
	nodeUrl:"https://radiantblockchain.org",
	demoSiteUrl: "https://radiantblockchain.org",
	miningPoolsConfigUrls:[
 
	],
	maxBlockSizeByNetwork: {
		"main":   512000000,
		"test":   32000000,
		"test4":   2000000,
		"scale": 256000000
	},
	difficultyAdjustmentBlockOffset: 1008,
	difficultyAdjustmentBlockCount: 4,
	maxSupplyByNetwork: {
		"main": new Decimal(20999817.31308491), // ref: https://bitcoin.stackexchange.com/a/38998
		"test": new Decimal(21000000),
		"test4": new Decimal(21000000),
		"scale": new Decimal(21000000),
		"regtest": new Decimal(21000000)
	},
	targetBlockTimeSeconds: 600,
	targetBlockTimeMinutes: 10,
	currencyUnits:currencyUnits,
	currencyUnitsByName:{"RXD":currencyUnits[0], "mRXD":currencyUnits[1], "bits":currencyUnits[2], "sat":currencyUnits[3]},
	baseCurrencyUnit:currencyUnits[3],
	defaultCurrencyUnit:currencyUnits[0],
	feeSatoshiPerByteBucketMaxima: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 25, 50, 75, 100, 150],
	genesisBlockHashesByNetwork:{
		"main":    "000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f",
		"test":    "000000000933ea01ad0ee984209779baaec3ced90fa3f408719526f8d77f4943",
		"test4":   "000000001dd410c49a788668ce26751718cc797474d3152a5fc073dd44fd9f7b",
		"scale":   "00000000e6453dc2dfe1ffa19023f86002eb11dbb8e87d0291a4599f0430be52",
		"regtest": "0f9188f13cb7b2c71f2a335e3a4fc328bf5beb436012afca590b1a11466e2206"
	},
	genesisCoinbaseTransactionIdsByNetwork: {
		"main":    "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b",
		"test":    "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b",
		"test4":   "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b",
		"scale":   "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b",
		"regtest": "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b"
	},
	genesisCoinbaseTransactionsByNetwork:{
		"main": {
			"hex": "01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff0804ffff001d02fd04ffffffff0100f2052a01000000434104f5eeb2b10c944c6b9fbcfff94c35bdeecd93df977882babc7f3a2cf7f5c81d3b09a68db7f0e04f21de5d4230e75e6dbe7ad16eefe0d4325a62067dc6f369446aac00000000",
			"txid": "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b",
			"hash": "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b",
			"size": 204,
			"version": 1,
			"confirmations":618235,
			"vin": [
				{
					"coinbase": "04ffff001d0104455468652054696d65732030332f4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66207365636f6e64206261696c6f757420666f722062616e6b73",
					"sequence": 4294967295
				}
			],
			"vout": [
				{
					"value": 50,
					"n": 0,
					"scriptPubKey": {
						"asm": "04f5eeb2b10c944c6b9fbcfff94c35bdeecd93df977882babc7f3a2cf7f5c81d3b09a68db7f0e04f21de5d4230e75e6dbe7ad16eefe0d4325a62067dc6f369446a OP_CHECKSIG",
						"hex": "4104f5eeb2b10c944c6b9fbcfff94c35bdeecd93df977882babc7f3a2cf7f5c81d3b09a68db7f0e04f21de5d4230e75e6dbe7ad16eefe0d4325a62067dc6f369446aac",
						"reqSigs": 1,
						"type": "pubkey",
						"addresses": [
							"1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"
						]
					}
				}
			],
			"blockhash": "000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f",
			"time": 1230988505,
			"blocktime": 1230988505
		},
		"test": {
			"hex": "01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff4d04ffff001d0104455468652054696d65732030332f4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66207365636f6e64206261696c6f757420666f722062616e6b73ffffffff0100f2052a01000000434104678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5fac00000000",
			"txid": "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b",
			"hash": "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b",
			"version": 1,
			"size": 204,
			"locktime": 0,
			"vin": [
				{
					"coinbase": "04ffff001d0104455468652054696d65732030332f4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66207365636f6e64206261696c6f757420666f722062616e6b73",
					"sequence": 4294967295
				}
			],
			"vout": [
				{
					"value": 50.00000000,
					"n": 0,
					"scriptPubKey": {
						"asm": "04678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5f OP_CHECKSIG",
						"hex": "4104678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5fac",
						"reqSigs": 1,
						"type": "pubkey",
						"addresses": [
							"mpXwg4jMtRhuSpVq4xS3HFHmCmWp9NyGKt"
						]
					}
				}
			],
			"blockhash": "000000000933ea01ad0ee984209779baaec3ced90fa3f408719526f8d77f4943",
			"time": 1296688602,
			"blocktime": 1296688602
		},
		"test4": {
			"hex": "01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff4d04ffff001d0104455468652054696d65732030332f4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66207365636f6e64206261696c6f757420666f722062616e6b73ffffffff0100f2052a01000000434104678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5fac00000000",
			"txid": "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b",
			"hash": "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b",
			"version": 1,
			"size": 204,
			"locktime": 0,
			"vin": [
				{
					"coinbase": "04ffff001d0104455468652054696d65732030332f4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66207365636f6e64206261696c6f757420666f722062616e6b73",
					"sequence": 4294967295
				}
			],
			"vout": [
				{
					"value": 50.00000000,
					"n": 0,
					"scriptPubKey": {
						"asm": "04678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5f OP_CHECKSIG",
						"hex": "4104678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5fac",
						"reqSigs": 1,
						"type": "pubkey",
						"addresses": [
							"mpXwg4jMtRhuSpVq4xS3HFHmCmWp9NyGKt"
						]
					}
				}
			],
			"blockhash": "000000001dd410c49a788668ce26751718cc797474d3152a5fc073dd44fd9f7b",
			"time": 1597811185,
			"blocktime": 1597811185
		},
		"scale": {
			"hex": "01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff4d04ffff001d0104455468652054696d65732030332f4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66207365636f6e64206261696c6f757420666f722062616e6b73ffffffff0100f2052a01000000434104678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5fac00000000",
			"txid": "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b",
			"hash": "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b",
			"version": 1,
			"size": 204,
			"locktime": 0,
			"vin": [
				{
					"coinbase": "04ffff001d0104455468652054696d65732030332f4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66207365636f6e64206261696c6f757420666f722062616e6b73",
					"sequence": 4294967295
				}
			],
			"vout": [
				{
					"value": 50.00000000,
					"n": 0,
					"scriptPubKey": {
						"asm": "04678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5f OP_CHECKSIG",
						"hex": "4104678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5fac",
						"reqSigs": 1,
						"type": "pubkey",
						"addresses": [
							"mpXwg4jMtRhuSpVq4xS3HFHmCmWp9NyGKt"
						]
					}
				}
			],
			"blockhash": "00000000e6453dc2dfe1ffa19023f86002eb11dbb8e87d0291a4599f0430be52",
			"time": 1598282438,
			"blocktime": 1598282438
		},
		"regtest": {
			"hex": "01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff4d04ffff001d0104455468652054696d65732030332f4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66207365636f6e64206261696c6f757420666f722062616e6b73ffffffff0100f2052a01000000434104678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5fac00000000",
			"txid": "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b",
			"hash": "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b",
			"version": 1,
			"size": 204,
			"locktime": 0,
			"vin": [
				{
					"coinbase": "04ffff001d0104455468652054696d65732030332f4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66207365636f6e64206261696c6f757420666f722062616e6b73",
					"sequence": 4294967295
				}
			],
			"vout": [
				{
					"value": 50.00000000,
					"n": 0,
					"scriptPubKey": {
						"asm": "04678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5f OP_CHECKSIG",
						"hex": "4104678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5fac",
						"type": "pubkey"
					}
				}
			],
			"blockhash": "0f9188f13cb7b2c71f2a335e3a4fc328bf5beb436012afca590b1a11466e2206",
			"time": 1296688602,
			"blocktime": 1296688602
		}
	},
	genesisBlockStatsByNetwork:{
		"main": {
			"avgfee": 0,
			"avgfeerate": 0,
			"avgtxsize": 0,
			"blockhash": "000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f",
			"feerate_percentiles": [
				0,
				0,
				0,
				0,
				0
			],
			"height": 0,
			"ins": 0,
			"maxfee": 0,
			"maxfeerate": 0,
			"maxtxsize": 0,
			"medianfee": 0,
			"mediantime": 1231006505,
			"mediantxsize": 0,
			"minfee": 0,
			"minfeerate": 0,
			"mintxsize": 0,
			"outs": 1,
			"subsidy": 50,
			"time": 1231006505,
			"total_out": 0,
			"total_size": 0,
			"totalfee": 0,
			"txs": 1,
			"utxo_increase": 1,
			"utxo_size_inc": 117
		},
		"test": {
			"avgfee": 0,
			"avgfeerate": 0,
			"avgtxsize": 0,
			"blockhash": "000000000933ea01ad0ee984209779baaec3ced90fa3f408719526f8d77f4943",
			"feerate_percentiles": [
				0,
				0,
				0,
				0,
				0
			],
			"height": 0,
			"ins": 0,
			"maxfee": 0,
			"maxfeerate": 0,
			"maxtxsize": 0,
			"medianfee": 0,
			"mediantime": 1296688602,
			"mediantxsize": 0,
			"minfee": 0,
			"minfeerate": 0,
			"mintxsize": 0,
			"outs": 1,
			"subsidy": 50,
			"time": 1296688602,
			"total_out": 0,
			"total_size": 0,
			"totalfee": 0,
			"txs": 1,
			"utxo_increase": 1,
			"utxo_size_inc": 117
		},
		"test4": {
			"avgfee": 0,
			"avgfeerate": 0,
			"avgtxsize": 0,
			"blockhash": "000000001dd410c49a788668ce26751718cc797474d3152a5fc073dd44fd9f7b",
			"feerate_percentiles": [
				0,
				0,
				0,
				0,
				0
			],
			"height": 0,
			"ins": 0,
			"maxfee": 0,
			"maxfeerate": 0,
			"maxtxsize": 0,
			"medianfee": 0,
			"mediantime": 1296688602,
			"mediantxsize": 0,
			"minfee": 0,
			"minfeerate": 0,
			"mintxsize": 0,
			"outs": 1,
			"subsidy": 50,
			"time": 1296688602,
			"total_out": 0,
			"total_size": 0,
			"totalfee": 0,
			"txs": 1,
			"utxo_increase": 1,
			"utxo_size_inc": 117
		},
		"scale": {
			"avgfee": 0,
			"avgfeerate": 0,
			"avgtxsize": 0,
			"blockhash": "00000000e6453dc2dfe1ffa19023f86002eb11dbb8e87d0291a4599f0430be52",
			"feerate_percentiles": [
				0,
				0,
				0,
				0,
				0
			],
			"height": 0,
			"ins": 0,
			"maxfee": 0,
			"maxfeerate": 0,
			"maxtxsize": 0,
			"medianfee": 0,
			"mediantime": 1296688602,
			"mediantxsize": 0,
			"minfee": 0,
			"minfeerate": 0,
			"mintxsize": 0,
			"outs": 1,
			"subsidy": 50,
			"time": 1296688602,
			"total_out": 0,
			"total_size": 0,
			"totalfee": 0,
			"txs": 1,
			"utxo_increase": 1,
			"utxo_size_inc": 117
		}
	},
	genesisCoinbaseOutputAddressScripthash:"8b01df4e368ea28f8dc0423bcf7a4923e3a12d307c875e47a0cfbf90b5c39161",
	historicalData: [
		{
			type: "blockheight",
			date: "2022-06-18",
			chain: "main",
			blockHeight: 0,
			blockHash: "000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f",
			summary: "The Radiant Blockchain Genesis Block.",
			alertBodyHtml: "This is the first block in the Bitcoin blockchain, known as the 'Genesis Block'. This block was mined by Bitcoin's creator Satoshi Nakamoto. You can read more about <a href='https://en.bitcoin.it/wiki/Genesis_block'>the genesis block</a>.",
			referenceUrl: "https://en.bitcoin.it/wiki/Genesis_block"
		},
		{
			type: "tx",
			date: "2009-01-03",
			chain: "main",
			txid: "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b",
			summary: "The coinbase transaction of the Genesis Block.",
			alertBodyHtml: "This transaction doesn't really exist! This is the coinbase transaction of the <a href='/block/000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f'>Bitcoin Genesis Block</a>. For more background about this special-case transaction, you can read <a href='https://github.com/bitcoin/bitcoin/issues/3303'>this brief discussion</a> among some of the <a href='https://bitcoin.org'>Bitcoin</a> developers.",
			referenceUrl: "https://github.com/bitcoin/bitcoin/issues/3303"
		},

		// testnet
		{
			type: "blockheight",
			date: "2011-02-02",
			chain: "test",
			blockHeight: 0,
			blockHash: "000000000933ea01ad0ee984209779baaec3ced90fa3f408719526f8d77f4943",
			summary: "The Bitcoin (regtest) Genesis Block.",
			alertBodyHtml: "This is the first block in the Bitcoin blockchain, known as the 'Genesis Block'. You can read more about <a href='https://en.bitcoin.it/wiki/Genesis_block'>the genesis block</a>.",
			referenceUrl: "https://en.bitcoin.it/wiki/Genesis_block"
		},
		{
			type: "tx",
			date: "2011-02-02",
			chain: "test",
			txid: "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b",
			summary: "The coinbase transaction of the Genesis Block.",
			alertBodyHtml: "This transaction doesn't really exist! This is the coinbase transaction of the <a href='/block/000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f'>Bitcoin Genesis Block</a>. For more background about this special-case transaction, you can read <a href='https://github.com/bitcoin/bitcoin/issues/3303'>this brief discussion</a> among some of the <a href='https://bitcoin.org'>Bitcoin</a> developers.",
			referenceUrl: "https://github.com/bitcoin/bitcoin/issues/3303"
		},

		// regtest
		{
			type: "blockheight",
			date: "2011-02-02",
			chain: "regtest",
			blockHeight: 0,
			blockHash: "0f9188f13cb7b2c71f2a335e3a4fc328bf5beb436012afca590b1a11466e2206",
			summary: "The Bitcoin (regtest) Genesis Block.",
			alertBodyHtml: "This is the first block in the Bitcoin blockchain, known as the 'Genesis Block'. You can read more about <a href='https://en.bitcoin.it/wiki/Genesis_block'>the genesis block</a>.",
			referenceUrl: "https://en.bitcoin.it/wiki/Genesis_block"
		},
		{
			type: "tx",
			date: "2011-02-02",
			chain: "regtest",
			txid: "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b",
			summary: "The coinbase transaction of the Genesis Block.",
			alertBodyHtml: "This transaction doesn't really exist! This is the coinbase transaction of the <a href='/block/000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f'>Bitcoin Genesis Block</a>. For more background about this special-case transaction, you can read <a href='https://github.com/bitcoin/bitcoin/issues/3303'>this brief discussion</a> among some of the <a href='https://bitcoin.org'>Bitcoin</a> developers.",
			referenceUrl: "https://github.com/bitcoin/bitcoin/issues/3303"
		},
	],
	exchangeRateData:{
		// see https://www.kraken.com/features/api#get-ticker-info for doc on that API
		// endoint. What we need in "jq" syntax is:
		// jq ."result"."BCHUSD"."c"[0] and jq ."result"."BCHEUR"."c"[0]
		// the above will return back the last trade closed at the time the url
		// has been fetched
		jsonUrl:"https://api.kraken.com/0/public/Ticker?pair=RXDUSD,RXDEUR",
		responseBodySelectorFunction:function(responseBody) {
			//console.log("Exchange Rate Response: " + JSON.stringify(responseBody));

			var exchangedCurrencies = ["RXDUSD", "RXDEUR"];

			if (responseBody.result) {
				var exchangeRates = {};

				for (var i = 0; i < exchangedCurrencies.length; i++) {
					if (responseBody.result[exchangedCurrencies[i]]) {
						var key = exchangedCurrencies[i].replace("BCH", "");
						exchangeRates[key.toLowerCase()] = responseBody.result[exchangedCurrencies[i]]["c"][0];
					}
				}

				return exchangeRates;
			}

			return null;
		}
	},
	exchangeRateDataExtension:[
		{
			jsonUrl:"https://api.yadio.io/exrates",
			responseBodySelectorFunction:function(responseBody) {
				//console.log("Exchange Rate Response: " + JSON.stringify(responseBody));

				var exchangedCurrencies = ["ARS"];
				
				if (responseBody.base) {
					var exchangeRates = {};
					
					for (var i = 0; i < exchangedCurrencies.length; i++) {
						var key = exchangedCurrencies[i];
						if (responseBody['USD']) {
							// If found duped currency units for the same api source then skip all instead of retrieve wrong rates.
							var applicableUnit = currencyUnits.filter(x => x.name === key).length == 1 ? currencyUnits.find(x => x.name === key) : undefined;
							if (applicableUnit) {
								exchangeRates[key.toLowerCase()] = parseFloat(responseBody['USD'][key]).toString();
							}
						}
					}
					return exchangeRates;
				}
	
				return null;
			}
		}
	],
	blockRewardFunction:function(blockHeight, chain) {
		var eras = [ new Decimal8(50000) ];
		for (var i = 1; i < 34; i++) {
			var previous = eras[i - 1];
			eras.push(new Decimal8(previous).dividedBy(2));
		}

		var halvingBlockInterval = (chain == "regtest" ? 150 : 210000);
		var index = Math.floor(blockHeight / halvingBlockInterval);

		return eras[index];
	}
};
