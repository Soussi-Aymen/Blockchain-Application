const Blockchain = require("./blockchain");

const bitcoin =new Blockchain()
//bitcoin.createNewBlock(112,"bhr","hzvjhfvfbzkvfzbf")
//bitcoin.createNewTransaction(100,"seifisigdsgsggS","aymenyuz2615")

var test ={
    "chain": [
        {
            "index": 1,
            "timestamp": 1545698723648,
            "transactions": [],
            "nonce": 100,
            "hash": "0",
            "previousBlockHash": "0"
        },
        {
            "index": 2,
            "timestamp": 1545698736906,
            "transactions": [
                {
                    "amount": 30,
                    "sender": "dgsfxhbfbsivvbuiol",
                    "recipient": "hgfujfvbhjsbvjlenglje"
                }
            ],
            "nonce": 102962,
            "hash": "000082058df5dc75dbd66f2502785fd0eb40536725ccc865649b73e7c6515861",
            "previousBlockHash": "0"
        },
        {
            "index": 3,
            "timestamp": 1545698750434,
            "transactions": [
                {
                    "amount": 12.5,
                    "sender": "00",
                    "recipient": "5d09104007de11e9845021b527d3a03b",
                    "transactionId": "64f3bc6007de11e9845021b527d3a03b"
                },
                {
                    "amount": 40,
                    "sender": "dgsfxhbfbsivvbuiol",
                    "recipient": "hgfujfvbhjsbvjlenglje"
                },
                {
                    "amount": 50,
                    "sender": "dgsfxhbfbsivvbuiol",
                    "recipient": "hgfujfvbhjsbvjlenglje"
                }
            ],
            "nonce": 43407,
            "hash": "00002bffc5c6f7314cf857efca0770fdecae3db1ff0d549754b584fc161252a1",
            "previousBlockHash": "000082058df5dc75dbd66f2502785fd0eb40536725ccc865649b73e7c6515861"
        },
        {
            "index": 4,
            "timestamp": 1545698781422,
            "transactions": [
                {
                    "amount": 12.5,
                    "sender": "00",
                    "recipient": "5d09104007de11e9845021b527d3a03b",
                    "transactionId": "6cfffa4007de11e9845021b527d3a03b"
                },
                {
                    "amount": 60,
                    "sender": "dgsfxhbfbsivvbuiol",
                    "recipient": "hgfujfvbhjsbvjlenglje"
                },
                {
                    "amount": 70,
                    "sender": "dgsfxhbfbsivvbuiol",
                    "recipient": "hgfujfvbhjsbvjlenglje"
                },
                {
                    "amount": 80,
                    "sender": "dgsfxhbfbsivvbuiol",
                    "recipient": "hgfujfvbhjsbvjlenglje"
                },
                {
                    "amount": 90,
                    "sender": "dgsfxhbfbsivvbuiol",
                    "recipient": "hgfujfvbhjsbvjlenglje"
                }
            ],
            "nonce": 170495,
            "hash": "000002db9f4a36376f8f601ddcd0d10d755d8d44164f05a8dc5c74816eafbe16",
            "previousBlockHash": "00002bffc5c6f7314cf857efca0770fdecae3db1ff0d549754b584fc161252a1"
        }
    ],
    "pendingTransactions": [
        {
            "amount": 12.5,
            "sender": "00",
            "recipient": "5d09104007de11e9845021b527d3a03b",
            "transactionId": "7f785f0007de11e9845021b527d3a03b"
        }
    ],
    "currentNodeUrl": "http://localhost:3001",
    "networkNodes": []
}

console.log("Valid: ",bitcoin.chainIsValid(test.chain))
