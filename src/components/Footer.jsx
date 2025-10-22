const Footer = () => {
  return (
    <>
      <footer className="flex h-96 font-sans bg-[#ffff]">
        <div className="lg:flex flex-col gap-40 px-20 capitalize pt-24">
          <div className="flex flex-col gap-2">
            <h1 className="font-[650] text-xl">Quick Links</h1>
            <ul className="flex flex-col gap-2 cursor-pointer">
              <li className="hover:text-blue-400">Home</li>
              <li className="hover:text-blue-400">About</li>
              <li className="hover:text-blue-400">My Account</li>
              <li className="hover:text-blue-400">Cart</li>
              <li className="hover:text-blue-400">Contact</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-[650] text-xl">For Her</h1>
            <ul className="flex flex-col gap-2 cursor-pointer">
              <li className="hover:text-blue-400">women jeans</li>
              <li className="hover:text-blue-400">Tops shirts</li>
              <li className="hover:text-blue-400">women jackets</li>
              <li className="hover:text-blue-400">heels and flats</li>
              <li className="hover:text-blue-400">women Accessories</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-[650] text-xl">for him</h1>
            <ul className="flex flex-col gap-2 cursor-pointer">
              <li className="hover:text-blue-400">men jeans</li>
              <li className="hover:text-blue-400">men shirt</li>
              <li className="hover:text-blue-400">Men shoes</li>
              <li className="hover:text-blue-400">men Accessories</li>
              <li className="hover:text-blue-400">men jackets</li>
            </ul>
          </div>
          <div className="flex flex-col gap-10">
            <h1 className="font-[650] text-xl">for him</h1>
            <img
              src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/playstore-free-img.png"
              className="w-[150px] cursor-pointer"
            ></img>
          </div>
        </div>
      </footer>

      <section className="h-28 bg-[#f5f7f9]">
        <div className="flex justify-between px-20 pt-10 capitalize text-gray-600">
          <h2>Copyright &copy; 2025 brandstore</h2>
          <h3>powered by brandstore</h3>
        </div>
      </section>
    </>
  );
};

export default Footer;
