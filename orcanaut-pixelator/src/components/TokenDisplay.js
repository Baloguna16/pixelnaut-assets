import React, { useCallback, useState } from 'react';
import MintAddresses from './defaults/mint-addresses.json';

import Canvas from './Canvas';

const mintListSet = new Set();
MintAddresses.map(m => mintListSet.add(m));

const convertTraitName = (traitName) => traitName.toLowerCase()
  .replace('-',' ')
  .replace(',','')
  .replace(' ','_');

const createTraitObject = (traits) => {
  let traitObject = {};
  traits.map(t => traitObject = {...traitObject, [t.trait_type]: convertTraitName(t.value)});
  return traitObject;
}

const TokenDisplay = (props) => {
    // const { publicKey } = useWallet();
    // const { connection } = useConnection();

    const [nfts, setNfts] = useState([
      {
        'traits': {
          'body': 'blue',
          'eyes': 'basic',
          'hat': 'baseball_cap',
          'mouth': 'basic',
          'background': 'basic_mellow',
          'accessory': 'phantom_ghost',
        },
        'name': 'Orcanauts #0000',
        // 'image': ...from Arweave
      },
      // {'traits': {...}, 'name': 'Orcanauts #N', 'image': ...}
      // {'traits': {...}, 'name': 'Orcanauts #N', 'image': ...}
      // {'traits': {...}, 'name': 'Orcanauts #N', 'image': ...}
    ]);

    /*
    const onConnect = useCallback(async () => {
        if (publicKey == null) return;
        setNfts([]);

        const mintAddresses = await connection.getParsedTokenAccountsByOwner(
            publicKey,
            { programId: new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA") },
            "confirmed"
          )
          .then(accounts => accounts.value.map(a => a.account.data.parsed.info.mint));

        mintAddresses.filter(m => mintListSet.has(m.toString()))
          .map(m => (
            axios.get(`https://api-mainnet.magiceden.io/rpc/getNFTByMintAddress/${m}`))
            .then(r => {
              setNfts(nfts => [
                ...nfts, {
                name: r.data.results['title'],
                image: r.data.results['img'],
                traits: r.data.results['attributes']
              }]);
          }));
    }, [connection, publicKey, setNfts]);
    */

    return (
      <div className="container-md my-3">
        <div
          className="row justify-content-center"
          hidden={nfts.length === 0}
        >
          <h1 className='text-center mt-5 mb-1'>Pixelnaut</h1>
          <h1 className='text-center mt-1 mb-5'>Generation Demo</h1>
          {nfts.map((nft) => (
            <div className="col-sm-4" key={nft.name}>
              <div className="card border-dark border-4 my-3">
                <div className="card-body">
                  <Canvas
                    trait_hat={nft.traits.hat}
                    trait_body={nft.traits.body}
                    trait_eyes={nft.traits.eyes}
                    trait_mouth={nft.traits.mouth}
                    trait_background={nft.traits.background}
                    trait_accessory={nft.traits.accessory}
                  />
                  {/* If reading traits from wallet: <Canvas {...createTraitObject(nft.traits)} /> */}
                  <p className="card-title text-center fs-4 my-2">{nft.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* -- How you would build in wallet connect --
          <div className="row" hidden={nfts.length > 0}>
            <h1 className='text-center my-5'>Pixelate your Orcanauts!</h1>
            <div className="col-sm-2"></div>
            <div className="col-sm-4 mb-3">
              <Logo />
            </div>
            <div className="col-sm-4 mb-3">
              <p className="fs-3">
                Curious what your Orcanaut looks like as an animated GIF...
                Connect your wallet and 'Pixelate Orcanauts' to find out...
              </p>
              <button
                className={"wallet-adapter-button"}
                onClick={onConnect}
                disabled={!publicKey}
              >
              <span>{!publicKey ? "Connect Your Wallet First..." : "Pixelate Orcanauts"}</span>
              </button>
            </div>
            <div className="col-sm-2"></div>
          </div>
        */}
      </div>
    );
}

export default TokenDisplay;
