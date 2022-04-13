// Automatically generated with Reach 0.1.9 (d3fd55fe)
/* eslint-disable */
export const _version = '0.1.9';
export const _versionHash = '0.1.9 (d3fd55fe)';
export const _backendVersion = 11;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1],
      2: [ctc0, ctc1],
      3: [ctc0, ctc1, ctc0],
      4: [ctc0, ctc1, ctc0, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function APond(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for APond expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for APond expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Address;
  
  
  const v84 = stdlib.protect(ctc0, interact.bait, 'for APond\'s interact field bait');
  const v85 = stdlib.protect(ctc0, interact.fish, 'for APond\'s interact field fish');
  const v86 = stdlib.protect(ctc0, interact.pool, 'for APond\'s interact field pool');
  
  const txn1 = await (ctc.sendrecv({
    args: [v84],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:22:5:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:22:5:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v92], secs: v94, time: v93, didSend: v31, from: v91 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v92], secs: v94, time: v93, didSend: v31, from: v91 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v91, v92, v86],
    evt_cnt: 1,
    funcNum: 1,
    lct: v93,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:24:5:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v96], secs: v98, time: v97, didSend: v37, from: v95 } = txn2;
      
      ;
      const v99 = stdlib.addressEq(v91, v95);
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v96], secs: v98, time: v97, didSend: v37, from: v95 } = txn2;
  ;
  const v99 = stdlib.addressEq(v91, v95);
  stdlib.assert(v99, {
    at: './index.rsh:24:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'APond'
    });
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 2,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v104, time: v103, didSend: v46, from: v102 } = txn3;
  ;
  const txn4 = await (ctc.sendrecv({
    args: [v91, v92, v102, v85],
    evt_cnt: 1,
    funcNum: 3,
    lct: v103,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:41:7:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v110], secs: v112, time: v111, didSend: v55, from: v109 } = txn4;
      
      ;
      const v113 = stdlib.addressEq(v91, v109);
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc0, ctc1, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v110], secs: v112, time: v111, didSend: v55, from: v109 } = txn4;
  ;
  const v113 = stdlib.addressEq(v91, v109);
  stdlib.assert(v113, {
    at: './index.rsh:41:7:dot',
    fs: [],
    msg: 'sender correct',
    who: 'APond'
    });
  const txn5 = await (ctc.sendrecv({
    args: [v91, v92, v102, v110],
    evt_cnt: 0,
    funcNum: 4,
    lct: v111,
    onlyIf: true,
    out_tys: [],
    pay: [v110, []],
    sim_p: (async (txn5) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v118, time: v117, didSend: v65, from: v116 } = txn5;
      
      sim_r.txns.push({
        amt: v110,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v121 = stdlib.addressEq(v91, v116);
      ;
      sim_r.txns.push({
        amt: v92,
        kind: 'from',
        to: v91,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        amt: v110,
        kind: 'from',
        to: v102,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc0, ctc1, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v118, time: v117, didSend: v65, from: v116 } = txn5;
  ;
  const v121 = stdlib.addressEq(v91, v116);
  stdlib.assert(v121, {
    at: './index.rsh:65:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'APond'
    });
  ;
  ;
  return;
  
  
  
  
  
  
  
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v92], secs: v94, time: v93, didSend: v31, from: v91 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v96], secs: v98, time: v97, didSend: v37, from: v95 } = txn2;
  ;
  const v99 = stdlib.addressEq(v91, v95);
  stdlib.assert(v99, {
    at: './index.rsh:24:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  stdlib.protect(ctc1, await interact.buy(v92), {
    at: './index.rsh:28:17:application',
    fs: ['at ./index.rsh:27:9:application call to [unknown function] (defined at: ./index.rsh:27:13:function exp)'],
    msg: 'buy',
    who: 'Bob'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v91, v92],
    evt_cnt: 0,
    funcNum: 2,
    lct: v97,
    onlyIf: true,
    out_tys: [],
    pay: [v92, []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v104, time: v103, didSend: v46, from: v102 } = txn3;
      
      sim_r.txns.push({
        amt: v92,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v104, time: v103, didSend: v46, from: v102 } = txn3;
  ;
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 3,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v110], secs: v112, time: v111, didSend: v55, from: v109 } = txn4;
  ;
  const v113 = stdlib.addressEq(v91, v109);
  stdlib.assert(v113, {
    at: './index.rsh:41:7:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  stdlib.protect(ctc1, await interact.hooked(v110), {
    at: './index.rsh:48:20:application',
    fs: ['at ./index.rsh:47:9:application call to [unknown function] (defined at: ./index.rsh:47:13:function exp)'],
    msg: 'hooked',
    who: 'Bob'
    });
  
  const txn5 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 4,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v118, time: v117, didSend: v65, from: v116 } = txn5;
  ;
  const v121 = stdlib.addressEq(v91, v116);
  stdlib.assert(v121, {
    at: './index.rsh:65:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  ;
  ;
  return;
  
  
  
  
  
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAGAAEEIAIDJgIBAAAiNQAxGEECJilkSSJbNQGBCFs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIQQMQAEQSSEFDEAAwEkkDEAAXSQSRCQ0ARJENARJIhJMNAISEUQoZEk1A0lXACA1/4FIWzX+gASRJzTzsDT+iAHENP8xABJEsSKyATQDJVuyCCOyEDT/sgezsSKyATT+sggjshA0A1coILIHs0IBPUghBTQBEkQ0BEkiEkw0AhIRRChkSTUDSUlXACA1/yVbNf5XKCA1/Uk1BRc1/IAE1Axs1jT8FlCwNP8xABJENP80/hZQNP1QNPwWUChLAVcAUGdIJDUBMgY1AkIA/EghBDQBEkQ0BEkiEkw0AhIRRChkSTUDSVcAIDX/JVs1/oAEQbFATbA0/ogBDDT/NP4WUDEAUChLAVcASGdIIQU1ATIGNQJCALNJIwxAAFBIIzQBEkQ0BEkiEkw0AhIRRChkSTUDSVcAIDX/JVs1/kk1BRc1/YAE1RUZFDT9FlCwNP8xABJENP80/hZQKEsBVwAoZ0ghBDUBMgY1AkIAXUgiNAESRDQESSISTDQCEhFESTUFFzX/gASCxGH+NP8WULCBoI0GiABxMQA0/xZQKEsBVwAoZ0gjNQEyBjUCQgAcMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iNQEiNQJC/8M0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 80,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v92",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v92",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v96",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v110",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v96",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v110",
                "type": "uint256"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162000e8d38038062000e8d8339810160408190526200002691620001b0565b6000805543600355604080518251815260208084015151908201527fd2fa1fac07e66d08cb46271d2f3a2585d9761d2d591a51cc30a2056942bc38db910160405180910390a16200007a34156007620000e0565b604080518082018252600060208083018281523380855286830151518252600193849055439093558451808301939093525182850152835180830385018152606090920190935280519192620000d792600292909101906200010a565b5050506200028f565b81620001065760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001189062000252565b90600052602060002090601f0160209004810192826200013c576000855562000187565b82601f106200015757805160ff191683800117855562000187565b8280016001018555821562000187579182015b82811115620001875782518255916020019190600101906200016a565b506200019592915062000199565b5090565b5b808211156200019557600081556001016200019a565b6000818303604080821215620001c557600080fd5b80518082016001600160401b038082118383101715620001f557634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156200020f57600080fd5b8351945060208501915084821081831117156200023c57634e487b7160e01b600052604160045260246000fd5b5090915260209384015182529283015250919050565b600181811c908216806200026757607f821691505b602082108114156200028957634e487b7160e01b600052602260045260246000fd5b50919050565b610bee806200029f6000396000f3fe60806040526004361061006e5760003560e01c8063873779a11161004b578063873779a1146100c3578063a7661d54146100d6578063ab53f2c6146100e9578063f4cedab01461010c57005b80631e93b0f1146100775780637eea518c1461009b57806383230757146100ae57005b3661007557005b005b34801561008357600080fd5b506003545b6040519081526020015b60405180910390f35b6100756100a9366004610965565b61011f565b3480156100ba57600080fd5b50600154610088565b6100756100d1366004610965565b6102be565b6100756100e4366004610965565b61043d565b3480156100f557600080fd5b506100fe610606565b604051610092929190610988565b61007561011a366004610965565b6106a3565b61012f600260005414600d610852565b6101498135158061014257506001548235145b600e610852565b60008080556002805461015b906109e5565b80601f0160208091040260200160405190810160405280929190818152602001828054610187906109e5565b80156101d45780601f106101a9576101008083540402835291602001916101d4565b820191906000526020600020905b8154815290600101906020018083116101b757829003601f168201915b50505050508060200190518101906101ec9190610a36565b90507f82e152e8b1d7e41adffbddbd5b2fe2e130356df9b7ab7d06526a80d7888af3e18260405161021d9190610a9b565b60405180910390a161023681602001513414600c610852565b60408051606080820183526000808352602080840182815284860183815287516001600160a01b0390811680885289850151845233835260039095554360015587519384019490945290519582019590955293511690830152906080015b604051602081830303815290604052600290805190602001906102b8929190610877565b50505050565b6102ce600160005414600a610852565b6102e8813515806102e157506001548235145b600b610852565b6000808055600280546102fa906109e5565b80601f0160208091040260200160405190810160405280929190818152602001828054610326906109e5565b80156103735780601f1061034857610100808354040283529160200191610373565b820191906000526020600020905b81548152906001019060200180831161035657829003601f168201915b505050505080602001905181019061038b9190610a36565b6040805184358152602080860135908201529192507f7df13b968ce0c210e3dcbfe64599eb5a3348cfa173e4eb2d8ee13c767a060b02910160405180910390a16103d734156008610852565b80516103ef906001600160a01b031633146009610852565b6040805180820182526000808252602080830182815285516001600160a01b031680855286830151825260029093554360015584519182019290925290519281019290925290606001610294565b61044d6004600054146015610852565b6104678135158061046057506001548235145b6016610852565b600080805560028054610479906109e5565b80601f01602080910402602001604051908101604052809291908181526020018280546104a5906109e5565b80156104f25780601f106104c7576101008083540402835291602001916104f2565b820191906000526020600020905b8154815290600101906020018083116104d557829003601f168201915b505050505080602001905181019061050a9190610ac5565b90507fbe072b3e7ff68f92e7d9d05168a4666cd1ba2609e77c14d9feaf0d14991875d18260405161053b9190610a9b565b60405180910390a1610554816060015134146013610852565b805161056c906001600160a01b031633146014610852565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156105a9573d6000803e3d6000fd5b5080604001516001600160a01b03166108fc82606001519081150290604051600060405180830381858888f193505050501580156105eb573d6000803e3d6000fd5b5060008080556001819055610602906002906108fb565b5050565b60006060600054600280805461061b906109e5565b80601f0160208091040260200160405190810160405280929190818152602001828054610647906109e5565b80156106945780601f1061066957610100808354040283529160200191610694565b820191906000526020600020905b81548152906001019060200180831161067757829003601f168201915b50505050509050915091509091565b6106b36003600054146011610852565b6106cd813515806106c657506001548235145b6012610852565b6000808055600280546106df906109e5565b80601f016020809104026020016040519081016040528092919081815260200182805461070b906109e5565b80156107585780601f1061072d57610100808354040283529160200191610758565b820191906000526020600020905b81548152906001019060200180831161073b57829003601f168201915b50505050508060200190518101906107709190610b45565b6040805184358152602080860135908201529192507fb586755d90ded52ac0645858b09d27f42fbe59c32320b3b1d760dd0397cb5714910160405180910390a16107bc3415600f610852565b80516107d4906001600160a01b031633146010610852565b604080516080808201835260008083526020808401828152848601838152606080870185815289516001600160a01b03908116808a528b87015186528b8b0151821685528c8701358352600490975543600155895195860196909652925197840197909752519092169481019490945251908301529060a001610294565b816106025760405163100960cb60e01b81526004810182905260240160405180910390fd5b828054610883906109e5565b90600052602060002090601f0160209004810192826108a557600085556108eb565b82601f106108be57805160ff19168380011785556108eb565b828001600101855582156108eb579182015b828111156108eb5782518255916020019190600101906108d0565b506108f7929150610938565b5090565b508054610907906109e5565b6000825580601f10610917575050565b601f0160209004906000526020600020908101906109359190610938565b50565b5b808211156108f75760008155600101610939565b60006040828403121561095f57600080fd5b50919050565b60006040828403121561097757600080fd5b610981838361094d565b9392505050565b82815260006020604081840152835180604085015260005b818110156109bc578581018301518582016060015282016109a0565b818111156109ce576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c908216806109f957607f821691505b6020821081141561095f57634e487b7160e01b600052602260045260246000fd5b80516001600160a01b0381168114610a3157600080fd5b919050565b600060408284031215610a4857600080fd5b6040516040810181811067ffffffffffffffff82111715610a7957634e487b7160e01b600052604160045260246000fd5b604052610a8583610a1a565b8152602083015160208201528091505092915050565b81358152604081016020830135801515808214610ab757600080fd5b806020850152505092915050565b600060808284031215610ad757600080fd5b6040516080810181811067ffffffffffffffff82111715610b0857634e487b7160e01b600052604160045260246000fd5b604052610b1483610a1a565b815260208301516020820152610b2c60408401610a1a565b6040820152606083015160608201528091505092915050565b600060608284031215610b5757600080fd5b6040516060810181811067ffffffffffffffff82111715610b8857634e487b7160e01b600052604160045260246000fd5b604052610b9483610a1a565b815260208301516020820152610bac60408401610a1a565b6040820152939250505056fea26469706673582212202216cc7c90cc7f2ee7d2d991a19bcdcc520416a8be5eb5e6f7b1df153e1f6bfd64736f6c634300080c0033`,
  BytecodeLen: 3725,
  Which: `oD`,
  version: 6,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:23:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:25:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:35:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:44:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:68:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "APond": APond,
  "Bob": Bob
  };
export const _APIs = {
  };
