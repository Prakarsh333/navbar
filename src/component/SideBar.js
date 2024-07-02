import React, { useState } from "react";
import { NavLink } from "react-router-dom";


function MenuItem({ iconSrc, text, alt, isIndented, link, handleOpenSideBar }) {
  return (
    <NavLink
      to={link}
      className={({ isActive }) =>
        isActive
          ? "flex gap-2 bg-indigo-100 px-4 py-2 mx-6 mt-2 font-medium text-blue-500 rounded-md max-md:mx-2.5"
          : "flex gap-2 hover:bg-indigo-100 px-4 py-2 mx-6 mt-2 font-medium text-blue-500 rounded-md max-md:mx-2.5"
      }
      onClick={handleOpenSideBar}
    >
      <div>
        <div className="flex gap-2">
          <img
            loading="lazy"
            src={iconSrc}
            alt={alt}
            className="shrink-0 w-6 aspect-square "
          />
          <div className="my-auto">{text}</div>
        </div>
        {isIndented && (
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/15942853cf34cab4046955c9e02f0abb7259475c0c984cfd41d04e048f72b006?apiKey=d07d3de89fb2406f80b717f88505014b&"
            alt=""
            className="shrink-0 my-auto aspect-square fill-white w-[18px]"
          />
        )}
      </div>
    </NavLink>
  );
}

function SidebarItem({ iconSrc, text, alt, isActive }) {
  return (
    <div
      className={`${
        isActive ? "bg-blue-500 text-white" : "bg-indigo-50 text-blue-500"
      } flex gap-2 justify-between font-semibold text-base py-2 px-4 mx-6 mt-6 tracking-wide shadow-sm rounded-lg max-md:mx-2.5 `}
    >
      <div className="flex gap-2">
        <img
          loading="lazy"
          src={iconSrc}
          alt={alt}
          class="shrink-0 w-6 aspect-square"
        />
        <div className="my-auto">{text}</div>
      </div>
      {
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/15942853cf34cab4046955c9e02f0abb7259475c0c984cfd41d04e048f72b006?apiKey=d07d3de89fb2406f80b717f88505014b&"
          alt=""
          className="shrink-0 my-auto aspect-square fill-white w-[18px]"
        />
      }
    </div>
  );
}

function DocumentMenu({ documents, handleOpenSideBar }) {
  return (
    <section>
      {documents.map((doc, idx) => (
        <NavLink>
          <MenuItem
            key={idx}
            iconSrc={doc.iconSrc}
            text={doc.text}
            alt={doc.alt}
            isIndented={doc.isIndented}
            link={doc.link}
            handleOpenSideBar={handleOpenSideBar}
          />
        </NavLink>
      ))}
    </section>
  );
}

const Indentdocuments = [
  {
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/398e837d8ab86d02e47f81ccdfe69738d9c39439bc83dad3c90c2329f058a0ff?apiKey=d07d3de89fb2406f80b717f88505014b&",
    text: "Draft",
    alt: "Draft Icon",
    isIndented: false,
    link: "/Draft",
  },
  {
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/3607fc6160e071f2a1ad88db35e7d40e9fe8a724670cc167bfb2bc8808882f3b?apiKey=d07d3de89fb2406f80b717f88505014b&",
    text: "Raised to Stores",
    alt: "Raised to Stores Icon",
    isIndented: false,
    link: "/RaisedToStore",
  },
  {
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e4ffc02422f694fee593746b5ea4228b622b9c35f91d7333751ed54c792cc5f6?apiKey=d07d3de89fb2406f80b717f88505014b&",
    text: "Approved by HOD",
    alt: "Approved by HOD Icon",
    isIndented: false,
    link: "/ApprovedByHOD",
  },
  {
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e29565572781ba0510fe456424743bfa63285b609de86ef8320043496f8dbe5a?apiKey=d07d3de89fb2406f80b717f88505014b&",
    text: "Issued by Stores",
    alt: "Issued by Stores Icon",
    isIndented: false,
    link: "/IssuedByStore",
  },
  {
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/24e3385e9daa6ce9a1a6fd0811df32fba08af2d083ec56294aea7bca580832e0?apiKey=d07d3de89fb2406f80b717f88505014b&",
    text: "History",
    alt: "History Icon",
    isIndented: false,
    link: "/History",
  },
];
const MVPdocuments = [
  {
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/398e837d8ab86d02e47f81ccdfe69738d9c39439bc83dad3c90c2329f058a0ff?apiKey=d07d3de89fb2406f80b717f88505014b&",
    text: "New",
    alt: "New Icon",
    isIndented: false,
    link: "/Draft",
  },
  {
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/3607fc6160e071f2a1ad88db35e7d40e9fe8a724670cc167bfb2bc8808882f3b?apiKey=d07d3de89fb2406f80b717f88505014b&",
    text: "Draft",
    alt: "Draft Icon",
    isIndented: false,
    link: "/RaisedToStore",
  },
  {
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e4ffc02422f694fee593746b5ea4228b622b9c35f91d7333751ed54c792cc5f6?apiKey=d07d3de89fb2406f80b717f88505014b&",
    text: "Raised to Stores",
    alt: "Raised to Stores Icon",
    isIndented: false,
    link: "/ApprovedByStore",
  },
  {
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/24e3385e9daa6ce9a1a6fd0811df32fba08af2d083ec56294aea7bca580832e0?apiKey=d07d3de89fb2406f80b717f88505014b&",
    text: "History",
    alt: "History Icon",
    isIndented: false,
    link: "/History",
  },
];
const PurchaseOrderdocuments = [
  {
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/398e837d8ab86d02e47f81ccdfe69738d9c39439bc83dad3c90c2329f058a0ff?apiKey=d07d3de89fb2406f80b717f88505014b&",
    text: "New",
    alt: "New Icon",
    isIndented: false,
  },
  {
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/398e837d8ab86d02e47f81ccdfe69738d9c39439bc83dad3c90c2329f058a0ff?apiKey=d07d3de89fb2406f80b717f88505014b&",
    text: "Auto",
    alt: "Auto Icon",
    isIndented: false,
  },
  {
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/398e837d8ab86d02e47f81ccdfe69738d9c39439bc83dad3c90c2329f058a0ff?apiKey=d07d3de89fb2406f80b717f88505014b&",
    text: "Draft",
    alt: "Draft Icon",
    isIndented: false,
  },
  {
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e4ffc02422f694fee593746b5ea4228b622b9c35f91d7333751ed54c792cc5f6?apiKey=d07d3de89fb2406f80b717f88505014b&",
    text: "Confirm Invoice",
    alt: "Confirm Invoice Icon",
    isIndented: false,
  },
  {
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e29565572781ba0510fe456424743bfa63285b609de86ef8320043496f8dbe5a?apiKey=d07d3de89fb2406f80b717f88505014b&",
    text: "Confirm Delivery",
    alt: "Confirm Delivery Icon",
    isIndented: false,
  },
  {
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/24e3385e9daa6ce9a1a6fd0811df32fba08af2d083ec56294aea7bca580832e0?apiKey=d07d3de89fb2406f80b717f88505014b&",
    text: "History",
    alt: "History Icon",
    isIndented: false,
  },
];

function SideBar() {
  const [dropDownIndent, setdropDownIndent] = useState(false);
  const [dropDownMVP, setdropDownMVP] = useState(false);
  const [dropDownPurchaseOrder, setdropDownPurchaseOrder] = useState(false);

  const toggleDropdownIndent = () => {
    setdropDownIndent(!dropDownIndent);
    setdropDownMVP(false);
    setdropDownPurchaseOrder(false);
  };

  const toggleDropdownMVP = () => {
    setdropDownMVP(!dropDownMVP);
    setdropDownIndent(false);
    setdropDownPurchaseOrder(false);
  };

  const toggleDropdownPurchaseOrder = () => {
    setdropDownPurchaseOrder(!dropDownPurchaseOrder);
    setdropDownIndent(false);
    setdropDownMVP(false);
  };

  return (
    <>
      <div class="flex-row shadow-lg bg-white shadow-blue-300 h-screen w-[280px]">

      <section className="flex flex-col justify-center text-sm font-semibold text-center text-white max-w-[360px] h-[114px]">
          <header className="flex justify-center items-center px-0 py-6 w-full bg-blue-500">
            <div className="flex flex-col items-center max-w-full w-[146px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc8430b248b8458ce9cd02956c0432cc02df68213036ac841e9296c9ab3ec321?apiKey=d07d3de89fb2406f80b717f88505014b&"
                alt="Location: Jubilee Hills"
                className="w-full aspect-[3.03]"
              />
              <p className="mt-2">Jubilee Hills</p>
            </div>
          </header>
        </section>

        <div className="flex gap-0 justify-between bg-white flex-wrap w-full pt-5">
          <section className="flex flex-col pb-1 text-base font-semibold bg-white w-[280px] h-auto">
            <NavLink to="/">
              <div onClick={toggleDropdownIndent}>
                <SidebarItem
                  iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/1309be01885a17f7c817cd1714568e71a6a8760a280ea1cc05ada94afbc1270c?apiKey=d07d3de89fb2406f80b717f88505014b&"
                  text="Indent"
                  alt="Indent Icon"
                  isActive={dropDownIndent}
                />
              </div>
            </NavLink>

            {dropDownIndent && (
              <DocumentMenu
                documents={Indentdocuments}
              />
            )}

            <NavLink to="/">
              <div onClick={toggleDropdownMVP}>
                <SidebarItem
                  iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/1309be01885a17f7c817cd1714568e71a6a8760a280ea1cc05ada94afbc1270c?apiKey=d07d3de89fb2406f80b717f88505014b&"
                  text="Order Request"
                  alt="MVP Order Request Sheet Icon"
                  isActive={dropDownMVP}
                />
              </div>
            </NavLink>

            {dropDownMVP && (
              <DocumentMenu
                documents={MVPdocuments}
              />
            )}

            <NavLink to="/">
              <div onClick={toggleDropdownPurchaseOrder}>
                <SidebarItem
                  iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/1309be01885a17f7c817cd1714568e71a6a8760a280ea1cc05ada94afbc1270c?apiKey=d07d3de89fb2406f80b717f88505014b&"
                  text="Purchase Order"
                  alt="Purchase Order Icon"
                  isActive={dropDownPurchaseOrder}
                />
              </div>
            </NavLink>

            {dropDownPurchaseOrder && (
              <DocumentMenu
                documents={PurchaseOrderdocuments}
              />
            )}

            <div className="flex gap-5 justify-between px-4 py-2.5 mx-6 mt-12 tracking-wide whitespace-nowrap bg-red-100 rounded-lg max-md:mx-2.5 max-md:mt-10">
              <div className="my-auto text-red-400">Alert</div>
              <div className="flex flex-col justify-center text-red-100">
                <div className="justify-center items-center w-6 h-6 bg-red-500 rounded-full">
                  05
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default SideBar;
