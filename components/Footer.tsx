import Image from "next/image";
import { footerLinks } from "@/constant";
import Link from "next/link";

type ColumProps = {
  title: string;
  links: Array<string>;
};

const FooterColumn = ({ title, links }: ColumProps) => (
  <div className="footer_column">
    <h4 className="font-semibold">{title}</h4>
    <ul className="flex flex-col gap-2 font-normal">
      {links.map((link) => (
        <Link href="/" key={link}>
          {link}
        </Link>
      ))}
    </ul>
  </div>
);

export const Footer = () => {
  return (
    <footer className="flexStart footer">
      <div className="flex flex-col gap-12 w-full">
        <div className="flex items-start flex-col">
          <Image
            src="/logo-accent.svg"
            width={104}
            height={24}
            alt="diffusible"
          />
          <p className="text-start text-sm font-normal mt-5 max-w-xs">
            Diffusible is the premier community for content creators to share,
            grow, and connect.
          </p>
        </div>
        <div className="flex flex-wrap gap-12">
          <FooterColumn
            title={footerLinks[0].title}
            links={footerLinks[0].links}
          />
        </div>
        <div className="flexBetween footer_copyright">
          <p>@2023 Diffusible. All rights reserved</p>
          <p className="text-gray">
            <span className="text-black">10,021</span> projects submitted
          </p>
        </div>
      </div>
    </footer>
  );
};
