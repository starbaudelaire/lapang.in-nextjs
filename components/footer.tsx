import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      {/* Main Content Grid */}
      <div className="max-w-screen-xl mx-auto px-4 w-full py-10 md:py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Column 1: About */}
          <div>
            <Link href="/" className="mb-6 block">
              <Image src="/logolap.png" width={128} height={49} alt="logo" />
            </Link>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur accusantium perferendis dolore repellendus quas dolor,
              quisquam ipsa, labore porro vel unde perspiciatis vitae iure
              expedita magnam quia dolorem consequatur tenetur.
            </p>
          </div>

          {/* Column 2: Links & Legal */}
          <div className="space-y-8">
            {/* Links Section */}
            <div className="flex gap-4">
              <h4 className="text-xl font-semibold text-white flex-shrink-0 w-20">
                Links
              </h4>
              <ul className="flex flex-col space-y-3 flex-1">
                <li>
                  <Link href="/" className="hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/room" className="hover:text-white">
                    Rooms
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal Section */}
            <div className="flex gap-4">
              <h4 className="text-xl font-semibold text-white flex-shrink-0 w-20">
                Legal
              </h4>
              <ul className="flex flex-col space-y-3 flex-1">
                <li>
                  <Link href="/#" className="hover:text-white">
                    Legal
                  </Link>
                </li>
                <li>
                  <Link href="/#" className="hover:text-white">
                    Term & Condition
                  </Link>
                </li>
                <li>
                  <Link href="/#" className="hover:text-white">
                    Payment Method
                  </Link>
                </li>
                <li>
                  <Link href="/#" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3: Newsletter */}
          <div>
            <h4 className="mb-4 text-xl font-semibold text-white">
              Newsletter
            </h4>
            <p className="mb-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod hic
              quo eligendi aperiam, laborum soluta.
            </p>
            <form action="" className="mt-5">
              <div className="flex flex-col md:flex-row md:gap-2">
                <div className="mb-2 md:mb-0 flex-grow">
                  <input
                    type="text"
                    name="email"
                    className="w-full p-3 rounded-sm bg-white text-gray-900"
                    placeholder="lapang-in@gmail.com"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-orange-400 p-3 font-bold text-white w-full md:w-auto 
                             rounded-sm hover:bg-orange-500"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div
        className="max-w-screen-xl mx-auto px-4 border-t border-gray-700 py-8 text-center
                 text-base text-gray-500"
      >
        &copy; Copyright 2025 | Lapang-In | All Right Reserved
      </div>
    </footer>
  );
}

export default Footer;
