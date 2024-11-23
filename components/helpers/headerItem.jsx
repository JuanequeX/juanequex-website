"use client"

import { Link } from "react-scroll";
import { sora } from '@/app/fonts'

const HeaderItem = ({ goTo, text, itemClass }) => {
  return (
    <>
      <Link
        className={`${itemClass} ${sora.className}`}
        duration={500}
        offset={20}
        smooth={true}
        spy={true}
        to={goTo}
      >
        {text}
      </Link>
    </>
  );
};

export default HeaderItem;
