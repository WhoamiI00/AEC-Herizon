import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-2 ">
      <div className="flex items-center px-10 ">
        <Link href="/">
          {/* <Image src="/aec-logo.png" alt="AEC Horizon Logo" width={100} height={35} /> */}
          <svg width="87" height="56" viewBox="0 0 87 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.8242 43.2516H18.0675V48.6388C20.0107 48.5832 21.9538 48.5269 23.8964 48.4792V43.2437H25.1397V55.0318C24.723 55.0557 24.3132 55.0795 23.8964 55.0954V49.6599C21.9533 49.7155 20.0101 49.7877 18.0675 49.8592V55.4543C17.6507 55.4861 17.241 55.51 16.8242 55.5424V43.251V43.2516Z" fill="url(#paint0_linear_1_134)" />
            <path d="M32.5559 54.8249C31.7857 54.8567 31.0793 54.7369 30.4222 54.4819C29.7651 54.2263 29.193 53.8436 28.6983 53.3324C28.2036 52.8299 27.822 52.2148 27.5465 51.497C27.271 50.7785 27.1367 49.9806 27.1367 49.1026C27.1367 48.2246 27.278 47.4188 27.5465 46.6845C27.822 45.9502 28.2036 45.3198 28.6983 44.7927C29.193 44.2657 29.7651 43.8591 30.4222 43.5717C31.0793 43.2844 31.7927 43.1407 32.5629 43.1407C33.3332 43.1407 34.0255 43.2844 34.6826 43.5638C35.3397 43.8432 35.9118 44.2425 36.3995 44.753C36.8872 45.2635 37.2688 45.8707 37.5443 46.5726C37.8198 47.2751 37.954 48.0492 37.954 48.9033C37.954 49.7575 37.8127 50.5315 37.5443 51.242C37.2688 51.9525 36.8872 52.5669 36.3995 53.0934C35.9118 53.6204 35.3397 54.035 34.6826 54.3382C34.0255 54.6415 33.3191 54.809 32.5629 54.8329L32.5559 54.8249ZM32.5559 53.6761C33.3332 53.6522 34.0325 53.4364 34.6544 53.0377C35.2763 52.6385 35.7705 52.0882 36.131 51.3857C36.4915 50.6832 36.675 49.8535 36.675 48.9033C36.675 47.9532 36.4915 47.1155 36.131 46.4209C35.7705 45.7264 35.2763 45.1999 34.6544 44.8245C34.0325 44.4577 33.3332 44.2657 32.5559 44.2736C31.7716 44.2736 31.0582 44.465 30.4363 44.8484C29.8073 45.2317 29.3132 45.782 28.9527 46.5004C28.5922 47.2189 28.4087 48.073 28.4087 49.0543C28.4087 50.0357 28.5852 50.866 28.9527 51.5685C29.3132 52.271 29.8073 52.7975 30.4363 53.1649C31.0653 53.5238 31.7716 53.692 32.5559 53.6675V53.6755V53.6761Z" fill="url(#paint1_linear_1_134)" />
            <path d="M43.755 43.2522C44.6027 43.2522 45.3025 43.4038 45.8465 43.6992C46.3905 43.9945 46.8002 44.3937 47.0687 44.8884C47.3372 45.383 47.4714 45.9339 47.4714 46.5484C47.4714 46.9874 47.4005 47.3946 47.2592 47.7932C47.1179 48.1845 46.8987 48.5355 46.5951 48.8467C46.2914 49.1579 45.9098 49.4055 45.4433 49.581C44.9767 49.7644 44.4186 49.8604 43.7615 49.8604C42.8923 49.8604 42.0305 49.8763 41.1613 49.8843V54.4657C40.7445 54.4657 40.3347 54.4816 39.918 54.4895V43.2437H43.7404L43.7545 43.2516L43.755 43.2522ZM46.207 46.5484C46.207 45.8776 46.0165 45.3512 45.6349 44.952C45.2533 44.5606 44.6243 44.3613 43.7556 44.3613H41.1764V48.7513C42.0457 48.7434 42.9074 48.7354 43.7767 48.7275C44.3488 48.7275 44.8083 48.6315 45.1688 48.4481C45.5293 48.2646 45.7908 48.0091 45.9602 47.682C46.1296 47.3548 46.2146 46.9715 46.2146 46.5325L46.2075 46.5484H46.207ZM44.6525 49.3738C45.656 51.0497 46.666 52.7176 47.6695 54.3862C47.1959 54.3862 46.7228 54.3862 46.2562 54.3941C45.2744 52.7262 44.299 51.0503 43.3171 49.3817C43.7621 49.3817 44.2075 49.3817 44.6525 49.3738Z" fill="url(#paint2_linear_1_134)" />
            <path d="M49.6406 43.2437H50.8839V54.3776H49.6406V43.2437Z" fill="url(#paint3_linear_1_134)" />
            <path d="M60.5372 44.2653C58.5377 47.298 56.5383 50.2994 54.5383 53.2924C56.5588 53.3083 58.5799 53.34 60.6005 53.3804V54.506C58.0993 54.4504 55.5911 54.41 53.0898 54.3941V53.3883C55.0823 50.3875 57.0817 47.3946 59.0741 44.3693C57.1028 44.3693 55.1245 44.3693 53.1532 44.3613V43.2437H60.5366V44.2653H60.5372Z" fill="url(#paint4_linear_1_134)" />
            <path d="M67.5708 54.8335C66.8005 54.8017 66.0942 54.6421 65.43 54.3388C64.7729 54.0356 64.1938 53.6204 63.7061 53.094C63.2114 52.567 62.8298 51.9525 62.5543 51.242C62.2788 50.5315 62.1445 49.7575 62.1445 48.9033C62.1445 48.0492 62.2788 47.283 62.5543 46.5726C62.8298 45.8701 63.2114 45.2635 63.7061 44.753C64.2008 44.2425 64.7729 43.8432 65.43 43.5638C66.0871 43.2844 66.8005 43.1407 67.5637 43.1407C68.3269 43.1407 69.0262 43.2844 69.6833 43.5717C70.3404 43.8591 70.9126 44.2663 71.4002 44.7927C71.8879 45.3198 72.2695 45.9502 72.545 46.6845C72.8205 47.4188 72.9548 48.2246 72.9548 49.1026C72.9548 49.9806 72.8205 50.7865 72.545 51.497C72.2695 52.2154 71.8879 52.8299 71.4002 53.3325C70.9126 53.835 70.3404 54.2184 69.6833 54.4819C69.0262 54.7454 68.3199 54.8573 67.5637 54.8249L67.5708 54.8329V54.8335ZM67.5708 53.684C68.348 53.7079 69.0473 53.5483 69.6693 53.1814C70.2912 52.8225 70.7854 52.2875 71.1459 51.585C71.5063 50.8825 71.6898 50.0448 71.6898 49.0708C71.6898 48.0968 71.5063 47.2354 71.1459 46.5169C70.7854 45.7985 70.2912 45.2476 69.6693 44.8649C69.0473 44.4815 68.348 44.2901 67.5708 44.2901C66.7935 44.2901 66.0731 44.4736 65.4511 44.841C64.8222 45.2079 64.3275 45.7429 63.9675 46.4375C63.607 47.132 63.4236 47.9538 63.4236 48.9198C63.4236 49.8859 63.607 50.6917 63.9675 51.4022C64.328 52.1047 64.8227 52.655 65.4511 53.0543C66.0801 53.4535 66.7865 53.6608 67.5708 53.6926V53.6846V53.684Z" fill="url(#paint5_linear_1_134)" />
            <path d="M83.2536 43.2516V55.543C82.8368 55.5112 82.413 55.4874 81.9957 55.4549C80.0595 51.9992 78.124 48.6627 76.1808 45.4142V55.0954C75.764 55.0716 75.3543 55.0477 74.9375 55.0318V43.2437H76.1954C78.1315 46.4683 80.0742 49.7803 82.0103 53.2043V43.2437H83.2536V43.2516Z" fill="url(#paint6_linear_1_134)" />
            <path d="M83.2419 0.00572205L82.1328 1.25852L85.4351 4.9888L86.5442 3.736L83.2419 0.00572205Z" fill="url(#paint7_radial_1_134)" />
            <path d="M9.79418 24.9336H0.0507812V26.522H9.79418V24.9336Z" fill="url(#paint8_linear_1_134)" />
            <path d="M83.2473 43.2593H82.004V1.59581H1.41325V26.5137H0V0H83.2473V43.2593Z" fill="url(#paint9_linear_1_134)" />
            <path d="M86.603 3.75319H85.0625V49.7333C85.5783 49.7174 86.0871 49.6935 86.603 49.6856V3.75319Z" fill="url(#paint10_radial_1_134)" />
            <path d="M76.7625 10.0079C75.3352 10.0079 74.1758 8.69882 74.1758 7.0865C74.1758 5.47418 75.3352 4.16513 76.7625 4.16513C78.1898 4.16513 79.3476 5.47418 79.3476 7.0865C79.3476 8.69882 78.1898 10.0079 76.7625 10.0079ZM76.7625 5.93764C76.2045 5.93764 75.7449 6.45674 75.7449 7.08711C75.7449 7.71749 76.2039 8.23658 76.7625 8.23658C77.3211 8.23658 77.7801 7.71749 77.7801 7.08711C77.7801 6.45674 77.3211 5.93764 76.7625 5.93764Z" fill="url(#paint11_radial_1_134)" />
            <path d="M14.2558 21.4988L6.55459 37.3334H0.0117188L10.5816 15.5766H17.1386L14.2558 21.4988Z" fill="url(#paint12_linear_1_134)" />
            <path d="M13.5237 21.4988L21.2324 37.3334H27.7683L17.2054 15.5766H10.6484L13.5242 21.4988H13.5237Z" fill="url(#paint13_linear_1_134)" />
            <path d="M30.3203 20.8538C30.3203 20.8538 29.8894 16.0731 35.4358 15.6659H50.3938V20.8538H30.3208H30.3203Z" fill="url(#paint14_linear_1_134)" />
            <path d="M32.658 26.4386L30.27 28.9925V32.0092C30.27 32.0092 30.1146 37.221 35.7032 37.2687H50.3993V32.0092H38.4799C38.4799 32.0092 35.7952 32.4403 36.1411 28.9925H50.3922V23.733H35.0954L32.658 26.4306V26.4386Z" fill="url(#paint15_linear_1_134)" />
            <path d="M30.2695 28.9925L32.6576 26.4386L35.1025 23.733H50.3994V28.9925H30.2695Z" fill="url(#paint16_linear_1_134)" />
            <path d="M56.949 20.345C56.9139 20.9436 56.8927 21.1747 56.8998 21.2151V32.6762C56.9139 37.0979 63.2234 37.002 63.2234 37.002H76.8954V31.7664H64.4175C62.2627 31.7664 62.6086 29.0529 62.6086 29.0529V23.6577C62.5804 20.3053 64.601 20.5933 64.601 20.5933H76.8948V15.4053H63.506C63.1385 15.4292 60.9128 15.549 60.9128 15.549L56.9561 20.3377L56.949 20.3456V20.345Z" fill="url(#paint17_linear_1_134)" />
            <mask
  id="mask0_1_134"
  maskUnits="userSpaceOnUse"
  x="56"
  y="15"
  width="21"
  height="23"
  {...{ "mask-type": "luminance" }}
>

              <path d="M56.9256 20.353C56.8904 20.9516 56.8693 21.1827 56.8763 21.223V32.6841C56.8904 37.1059 63.2 37.0099 63.2 37.0099H76.8719V31.7743H64.394C62.2393 31.7743 62.5851 29.0608 62.5851 29.0608V23.6657C62.557 20.3132 64.5775 20.6012 64.5775 20.6012H76.8714V15.4133H63.4825C63.115 15.4372 60.8893 15.557 60.8893 15.557L56.9326 20.3456L56.9256 20.3536V20.353Z" fill="white" />
            </mask>
            <g mask="url(#mask0_1_134)">
              <path d="M76.8951 15.4101H56.8984V20.598H76.8951V15.4101Z" fill="url(#paint18_linear_1_134)" />
            </g>
            <defs>
              <linearGradient id="paint0_linear_1_134" x1="21.943" y1="44.5386" x2="17.7141" y2="60.4182" gradientUnits="userSpaceOnUse">
                <stop stop-color="#47099F" />
                <stop offset="1" stop-color="#F8AD1D" />
              </linearGradient>
              <linearGradient id="paint1_linear_1_134" x1="33.2644" y1="44.2681" x2="30.2331" y2="59.8455" gradientUnits="userSpaceOnUse">
                <stop stop-color="#47099F" />
                <stop offset="1" stop-color="#F8AD1D" />
              </linearGradient>
              <linearGradient id="paint2_linear_1_134" x1="44.692" y1="44.4286" x2="40.8893" y2="58.9843" gradientUnits="userSpaceOnUse">
                <stop stop-color="#47099F" />
                <stop offset="1" stop-color="#F8AD1D" />
              </linearGradient>
              <linearGradient id="paint3_linear_1_134" x1="52.1873" y1="47.2876" x2="45.2913" y2="51.5651" gradientUnits="userSpaceOnUse">
                <stop stop-color="#47099F" />
                <stop offset="1" stop-color="#F8AD1D" />
              </linearGradient>
              <linearGradient id="paint4_linear_1_134" x1="57.8119" y1="44.4567" x2="53.8935" y2="58.97" gradientUnits="userSpaceOnUse">
                <stop stop-color="#47099F" />
                <stop offset="1" stop-color="#F8AD1D" />
              </linearGradient>
              <linearGradient id="paint5_linear_1_134" x1="68.275" y1="44.27" x2="65.2416" y2="59.8459" gradientUnits="userSpaceOnUse">
                <stop stop-color="#47099F" />
                <stop offset="1" stop-color="#F8AD1D" />
              </linearGradient>
              <linearGradient id="paint6_linear_1_134" x1="80.1055" y1="44.5521" x2="75.8773" y2="60.4317" gradientUnits="userSpaceOnUse">
                <stop stop-color="#47099F" />
                <stop offset="1" stop-color="#F8AD1D" />
              </linearGradient>
              <radialGradient id="paint7_radial_1_134" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(84.3385 2.49787) scale(8.09523 9.14441)">
                <stop stop-color="#47099F" />
                <stop offset="0.15" stop-color="#4A0C9C" />
                <stop offset="0.3" stop-color="#561793" />
                <stop offset="0.45" stop-color="#6A2A84" />
                <stop offset="0.6" stop-color="#87446F" />
                <stop offset="0.75" stop-color="#AB6555" />
                <stop offset="0.9" stop-color="#D68E35" />
                <stop offset="1" stop-color="#F8AD1D" />
              </radialGradient>
              <linearGradient id="paint8_linear_1_134" x1="0.0507812" y1="25.7278" x2="9.79418" y2="25.7278" gradientUnits="userSpaceOnUse">
                <stop stop-color="#C7D0EA" />
                <stop offset="1" stop-color="#7F6DC0" />
              </linearGradient>
              <linearGradient id="paint9_linear_1_134" x1="-0.347496" y1="42.0725" x2="98.4497" y2="4.36065" gradientUnits="userSpaceOnUse">
                <stop stop-color="#DDDFF1" />
                <stop offset="0.09" stop-color="#C1B9E1" />
                <stop offset="0.23" stop-color="#C1B8DF" />
                <stop offset="0.29" stop-color="#C3B8D7" />
                <stop offset="0.33" stop-color="#C6B7CB" />
                <stop offset="0.37" stop-color="#CBB6BA" />
                <stop offset="0.4" stop-color="#D2B5A3" />
                <stop offset="0.42" stop-color="#DAB387" />
                <stop offset="0.45" stop-color="#E3B165" />
                <stop offset="0.47" stop-color="#EEAF40" />
                <stop offset="0.49" stop-color="#F8AD1D" />
                <stop offset="0.5" stop-color="#E2982C" />
                <stop offset="0.53" stop-color="#BD7747" />
                <stop offset="0.56" stop-color="#9D595F" />
                <stop offset="0.59" stop-color="#824073" />
                <stop offset="0.63" stop-color="#6C2B83" />
                <stop offset="0.67" stop-color="#5B1B8F" />
                <stop offset="0.72" stop-color="#4F1198" />
                <stop offset="0.8" stop-color="#480A9D" />
                <stop offset="1" stop-color="#47099F" />
              </linearGradient>
              <radialGradient id="paint10_radial_1_134" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(85.5946 16.3592) scale(14.4015 45.7133)">
                <stop stop-color="#47099F" />
                <stop offset="0.15" stop-color="#4A0C9C" />
                <stop offset="0.3" stop-color="#561793" />
                <stop offset="0.45" stop-color="#6A2A84" />
                <stop offset="0.6" stop-color="#87446F" />
                <stop offset="0.75" stop-color="#AB6555" />
                <stop offset="0.9" stop-color="#D68E35" />
                <stop offset="1" stop-color="#F8AD1D" />
              </radialGradient>
              <radialGradient id="paint11_radial_1_134" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(76.762 7.08711) scale(2.58619 2.92137)">
                <stop stop-color="#C7D0EA" />
                <stop offset="1" stop-color="#7F6DC0" />
              </radialGradient>
              <linearGradient id="paint12_linear_1_134" x1="8.57515" y1="15.5772" x2="8.57515" y2="37.334" gradientUnits="userSpaceOnUse">
                <stop stop-color="#C7D0EA" />
                <stop offset="1" stop-color="#7F6DC0" />
              </linearGradient>
              <linearGradient id="paint13_linear_1_134" x1="10.6571" y1="26.4373" x2="37.8976" y2="26.4852" gradientUnits="userSpaceOnUse">
                <stop stop-color="#47099F" />
                <stop offset="1" stop-color="#F8AD1D" />
              </linearGradient>
              <linearGradient id="paint14_linear_1_134" x1="30.3125" y1="18.2599" x2="50.3938" y2="18.2599" gradientUnits="userSpaceOnUse">
                <stop stop-color="#533EB0" />
                <stop offset="1" stop-color="#8372C2" />
              </linearGradient>
              <linearGradient id="paint15_linear_1_134" x1="40.3343" y1="23.733" x2="40.3343" y2="37.2693" gradientUnits="userSpaceOnUse">
                <stop stop-color="#C7D0EA" />
                <stop offset="1" stop-color="#7F6DC0" />
              </linearGradient>
              <linearGradient id="paint16_linear_1_134" x1="30.2701" y1="26.2576" x2="62.2977" y2="26.5307" gradientUnits="userSpaceOnUse">
                <stop stop-color="#47099F" />
                <stop offset="1" stop-color="#F8AD1D" />
              </linearGradient>
              <linearGradient id="paint17_linear_1_134" x1="66.897" y1="15.4047" x2="66.897" y2="37.002" gradientUnits="userSpaceOnUse">
                <stop stop-color="#C7D0EA" />
                <stop offset="1" stop-color="#7F6DC0" />
              </linearGradient>
              <linearGradient id="paint18_linear_1_134" x1="56.8984" y1="18.0037" x2="88.7446" y2="18.0037" gradientUnits="userSpaceOnUse">
                <stop stop-color="#47099F" />
                <stop offset="1" stop-color="#F8AD1D" />
              </linearGradient>
            </defs>
          </svg>

        </Link>
      </div>

      <div className="flex space-x-10 py-3 px-8 bg-[#FFFFFF78] rounded-full border-1 border-white">
        <Link href="/" className="text-[#424770] hover:underline hover:decoration-[#4B336D] font-medium font-inter text-l">
          Home
        </Link>
        <Link href="/why-us" className="text-[#424770] hover:underline hover:decoration-[#4B336D] font-medium font-inter text-l">
          Why Us
        </Link>
        <Link href="/services" className="text-[#424770] hover:underline hover:decoration-[#4B336D] font-medium font-inter text-l">
          Services
        </Link>
        <Link href="/experts" className="text-[#424770] hover:underline hover:decoration-[#4B336D] font-medium font-inter text-l">
          Our Experts
        </Link>
        <Link href="/pricing" className="text-[#424770] hover:underline hover:decoration-[#4B336D] font-medium font-inter text-l">
          Pricing
        </Link>
      </div>

      <div>
        <Link href="/contact" className="px-6 mx-8 py-3 bg-[#FFFFFF78] text-[#424770] rounded-full font-medium font-inter text-l hover:underline hover:decoration-[#4B336D] border-1 border-white">
          Contact
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
