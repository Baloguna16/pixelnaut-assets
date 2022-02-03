// import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const Navbar = () => {
  return (
    <nav className="navbar navbar-light">
      <div className="container-fluid">
        <img src="/static/orca_logo.png" alt="" width="30" height="30" className="d-inline-block align-text-top" />
        <p className="my-1 mx-2 fs-4">Pixelator</p>
        <ul className="navbar-nav flex-row flex-wrap ms-md-auto">
          <li className="nav-item mb-2 mx-auto">
            {/* <WalletMultiButton /> */}
            <button className='btn btn-primary' role='button' disabled>Fake Connect Wallet</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
