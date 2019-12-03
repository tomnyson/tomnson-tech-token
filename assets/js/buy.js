var abi;
var address;

// $.getJSON('assets/js/vexareum.json', function(data){
//   address = data.caddress;
//   abi = data.cabi;
// });

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

async function buyshit() {
  console.log("hello here");
  var modal = document.getElementById("myModal");

  if (typeof web3 === "undefined") {
    document.getElementById("popmsg").innerHTML =
      "Unable to find web3. Please run MetaMask (or something else that injects web3)";
    modal.style.display = "inline-block";
  } else {
    if (web3.version.network != 1) {
      // document.getElementById("popmsg").innerHTML ="Wrong network detected. Please switch to the Ethereum Main Network";
      //   modal.style.display = "inline-block";
      console.log("you are choose rinkeyby test", web3.version.network);
    }
    if (web3.version.network == 42) {
      // document.getElementById("popmsg").innerHTML ="Wrong network detected. Please switch to the Ethereum Main Network";
      // modal.style.display = "inline-block";
      if (web3.currentProvider.isMetaMask) {
        let x = await ethereum.enable();
      }
      buymessageKovan();
      console.log("you are choose rinkeyby test");
    }
    if (web3.version.network == 4) {
      // document.getElementById("popmsg").innerHTML ="Wrong network detected. Please switch to the Ethereum Main Network";
      // modal.style.display = "inline-block";
      if (web3.currentProvider.isMetaMask) {
        let x = await ethereum.enable();
      }
      buymessageKovan();
      console.log("you are choose rinkeyby test");
    } else {
      if (web3.currentProvider.isMetaMask) {
        let x = await ethereum.enable();
      }
      buymessage();
    }
  }
  function buymessage() {
    var myContract = web3.eth.contract(abi).at(address);
    var _eth = Number(document.getElementById("shitbuy").value);
    _eth = Math.floor(_eth * 100);
    _eth = _eth * 1e16;
    console.log("myContract", myContract);
    myContract.tokenSale.estimateGas(
      refer,
      { from: ethereum.selectedAddress, value: _eth },
      function(err, result) {
        if (!err) {
          var _gas = result + 5000;
          myContract.tokenSale(
            refer,
            { from: ethereum.selectedAddress, gas: _gas, value: _eth },
            function(err, result) {
              if (!err) {
                document.getElementById("popmsg").innerHTML =
                  "Buy Vexareum successfull. TX ID: " + result;
                modal.style.display = "inline-block";
                console.log(result);
              } else console.error(err);
            }
          );
        } else console.error(err);
      }
    );
  }
  function buymessageKovan() {
    const transactionParameters = {
      nonce: "0xa", // ignored by MetaMask
      gasPrice: "0x26be36800", // customizable by user during MetaMask confirmation.
      gas: "200000", // customizable by user during MetaMask confirmation.
      to: "0xdfc521d08f315e08d349078e83ff1f0343bef154", // Required except during contract publications.
      from: web3.eth.accounts[0], // must match user's active address.
      value: "0x2386f26fc10000", // Only required to send ether to the recipient from the initiating external account.
      data: "0x", // Optional, but used for defining smart contract creation and interaction.
      chainId: 4 // Used to prevent transaction reuse across blockchains. Auto-filled by MetaMask.
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
}
