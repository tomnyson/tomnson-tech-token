var abi;
var address;
// var web3 = new Web3('kovan.infura.io/v3/1c37394c71d748369948038cfbc3e794')
// $.getJSON('assets/js/vexareum.json', function(data){
//   address = data.caddress;
//   abi = data.cabi;
// });
var config = {
  constractAddress: "0x6b7C4fB444Bf61DbD9fFECEfe6a85d1DB8C2F4CB",
  abi: [
    {
      inputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "constructor"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address"
        },
        {
          indexed: true,
          internalType: "address",
          name: "spender",
          type: "address"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256"
        }
      ],
      name: "Approval",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "previousOwner",
          type: "address"
        },
        {
          indexed: true,
          internalType: "address",
          name: "newOwner",
          type: "address"
        }
      ],
      name: "OwnershipTransferred",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "from",
          type: "address"
        },
        { indexed: true, internalType: "address", name: "to", type: "address" },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256"
        }
      ],
      name: "Transfer",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "_from",
          type: "address"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "_eth",
          type: "uint256"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "_amount",
          type: "uint256"
        }
      ],
      name: "_clam",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "_from",
          type: "address"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "_eth",
          type: "uint256"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "_amount",
          type: "uint256"
        }
      ],
      name: "_deposit",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "_from",
          type: "address"
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "_amount",
          type: "uint256"
        }
      ],
      name: "_withdraw",
      type: "event"
    },
    { payable: true, stateMutability: "payable", type: "fallback" },
    {
      constant: false,
      inputs: [],
      name: "ClamFree",
      outputs: [],
      payable: true,
      stateMutability: "payable",
      type: "function"
    },
    {
      constant: true,
      inputs: [
        { internalType: "address", name: "owner", type: "address" },
        { internalType: "address", name: "spender", type: "address" }
      ],
      name: "allowance",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        { internalType: "address", name: "spender", type: "address" },
        { internalType: "uint256", name: "value", type: "uint256" }
      ],
      name: "approve",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: true,
      inputs: [{ internalType: "address", name: "owner", type: "address" }],
      name: "balanceOf",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "ceoAddress",
      outputs: [{ internalType: "address payable", name: "", type: "address" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        { internalType: "address payable", name: "_address", type: "address" }
      ],
      name: "changeCeo",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "decimals",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "isOwner",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "locked",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        { internalType: "address", name: "to", type: "address" },
        { internalType: "uint256", name: "value", type: "uint256" }
      ],
      name: "mint",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "name",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "owner",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "rate",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "rateClam",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: false,
      inputs: [],
      name: "renounceOwnership",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: false,
      inputs: [{ internalType: "bool", name: "_locked", type: "bool" }],
      name: "setLocked",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        { internalType: "bool", name: "_locked", type: "bool" },
        { internalType: "address", name: "to", type: "address" }
      ],
      name: "setLockedAddress",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        { internalType: "uint256", name: "_rate", type: "uint256" },
        { internalType: "uint256", name: "_clamFree", type: "uint256" }
      ],
      name: "setRate",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "symbol",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "totalSupply",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        { internalType: "address", name: "to", type: "address" },
        { internalType: "uint256", name: "value", type: "uint256" }
      ],
      name: "transfer",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        { internalType: "address", name: "from", type: "address" },
        { internalType: "address", name: "to", type: "address" },
        { internalType: "uint256", name: "value", type: "uint256" }
      ],
      name: "transferFrom",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: false,
      inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
      name: "transferOwnership",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: false,
      inputs: [{ internalType: "uint256", name: "_amount", type: "uint256" }],
      name: "withdraw",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    }
  ]
};
var urlParams;
(window.onpopstate = function() {
  var match,
    pl = /\+/g, // Regex for replacing addition symbol with a space
    search = /([^&=]+)=?([^&]*)/g,
    decode = function(s) {
      return decodeURIComponent(s.replace(pl, " "));
    },
    query = window.location.search.substring(1);

  urlParams = {};
  while ((match = search.exec(query)))
    urlParams[decode(match[1])] = decode(match[2]);
})();

if (urlParams.ref === undefined) {
  urlParams.ref = "0x0000000000000000000000000000000000000000";
}

var refer = urlParams.ref;

async function getAirdrop() {
  console.log("call this function");
  var modal = document.getElementById("myModal");
  if (typeof web3 === "undefined") {
    document.getElementById("popmsg").innerHTML =
      "Unable to find web3. Please run MetaMask (or something else that injects web3)";
    modal.style.display = "inline-block";
  } else {
    if (web3.version.network == 42) {
      console.log("send test next");
      if (web3.currentProvider.isMetaMask) {
        let x = await ethereum.enable();
      }
      console.log(0.1 * 10e18);

      sendmessageKovan();
    }
    if (web3.version.network != 1) {
      // document.getElementById("popmsg").innerHTML ="Wrong network detected. Please switch to the Ethereum Main Network";
      //   modal.style.display = "inline-block";
    } else {
      if (web3.currentProvider.isMetaMask) {
        let x = await ethereum.enable();
      }
      sendmessage();
    }
  }
  function sendmessage() {
    var myContract = web3.eth.contract(abi).at(address);
    console.log("myContract", myContract);
    myContract.getAirdrop.estimateGas(
      refer,
      { from: ethereum.selectedAddress },
      function(err, result) {
        if (!err) {
          var _gas = result + 5000;
          myContract.getAirdrop(
            refer,
            { from: ethereum.selectedAddress, gas: _gas },
            function(err, result) {
              if (!err) {
                document.getElementById("popmsg").innerHTML =
                  "Claim Vexareum Successfull. TX ID: " + result;
                modal.style.display = "inline-block";
                console.log(result);
              } else console.error(err);
            }
          );
        } else console.error(err);
      }
    );
  }
  function sendmessageKovan() {
    const transactionParameters = {
      nonce: "0x6", // ignored by MetaMask
      gasPrice: "0x26be36800", // customizable by user during MetaMask confirmation.
      gas: "100000", // customizable by user during MetaMask confirmation.
      to: "0x6b7C4fB444Bf61DbD9fFECEfe6a85d1DB8C2F4CB", // Required except during contract publications.
      from: web3.eth.accounts[0], // must match user's active address.
      value: "0xaf13e61e88000", // Only required to send ether to the recipient from the initiating external account.
      data: "0x983f0ed2", // Optional, but used for defining smart contract creation and interaction.
      chainId: 42 // Used to prevent transaction reuse across blockchains. Auto-filled by MetaMask.
    };
    ethereum.sendAsync(
      {
        method: "eth_sendTransaction",
        params: [transactionParameters],
        from: ethereum.selectedAddress
      },
      (err, result) => {
        if (err) {
          console.log("da bi loi");
        }
        console.log("transaction success", result);
      }
    );
  }
  function getNone() {
    return new Promise((resolve, reject) => {
      web3.eth.getTransactionCount(
        ethereum.selectedAddress,
        (error, result) => {
          if (error) {
            reject(error);
          }
          resolve(result);
        }
      );
    });
  }
  function callGetDataWeb3(contract, method, value) {
    const dataTx = contract[method].getData(...value);
    console.log("dataTx", dataTx);
    return dataTx;
  }
  function estimateGas(rawTransaction) {
    return new Promise(async (resolve, reject) => {
      web3.eth.estimateGas(rawTransaction, (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }
  function convertBalanceToWei(strValue, iDecimal = 18) {
    var multiplyNum = new BigNumber(Math.pow(10, iDecimal));
    var convertValue = new new BigNumber(String(strValue))();
    return multiplyNum
      .multiply(convertValue)
      .toString()
      .split(".")[0];
  }
}
