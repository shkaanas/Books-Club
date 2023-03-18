export default function Auhtorization() {
  return (
    <div className="relative">
      <div
        className="absolute flex"
        style={{
          height: '100vh',
          width: '100%',
          top: '-100px',
          backgroundColor: '#637562',
          zIndex: '-10',
        }}
      >
        <div className="m-auto flex flex-col ">
          <h3 className="heading heading_alt heading_alt__white text-center">
            Sign up
          </h3>
          <form className="flex flex-col items-center">
            <input
              type="email"
              placeholder="Email..."
              className="input input_alt"
            />
            <input
              type="password"
              placeholder="Password..."
              className="input input_alt"
            />
            <button className="btn_form btn_form_alt">Log in now</button>
            <button className="btn_form">Log in</button>
          </form>
        </div>
      </div>
    </div>
  );
}
