// import React from "react";

// const GATEWAY_URL = process.env.NEXT_PUBLIC_GATEWAY_URL
//   ? process.env.NEXT_PUBLIC_GATEWAY_URL
//   : "https://gateway.pinata.cloud";

// export default function Files(props) {
//   return (
//     <div className="file-viewer">
//       <p>Your IPFS CID:</p>
//       <p>{props.cid}</p>
//       <a
//         href={`${GATEWAY_URL}/ipfs/${props.cid}?pinataGatewayToken=${process.env.NEXT_PUBLIC_GATEWAY_TOKEN}`}
//         rel="noopener noreferrer"
//         target="_blank"
//         className="border-b-2 border-solid border-accent bg-gradient-to-r from-purple-600 to-pink-400 bg-clip-text text-transparent animate-animategradient hover:scale-110 transition-all duration-300 ease-in-out"
//       >
//         View file
//       </a>
//     </div>
//   );
// }
import React from "react";
import { useState } from "react";

const GATEWAY_URL = process.env.NEXT_PUBLIC_GATEWAY_URL
  ? process.env.NEXT_PUBLIC_GATEWAY_URL
  : "https://gateway.pinata.cloud";

export default function Files({ cid }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  const viewFileUrl = `${GATEWAY_URL}/ipfs/${cid}?pinataGatewayToken=${process.env.NEXT_PUBLIC_GATEWAY_TOKEN}`;

  return (
    <div className="file-viewer">
      <p className="mb-2">Your IPFS CID:</p>
      <p className="mb-4 text-lg font-semibold">{cid}</p>
      <a
        href={viewFileUrl}
        rel="noopener noreferrer"
        target="_blank"
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
        className={`block py-2 px-4 rounded-lg text-center font-semibold uppercase 
          ${isHovered ? "bg-gradient-to-r from-purple-600 to-pink-400 bg-clip-text text-transparent" : "bg-accent text-white"}
          animate-animategradient hover:scale-110 transition-all duration-300 ease-in-out`}
      >
        {isHovered ? "Open in new tab" : "View file"}
      </a>
    </div>
  );
}
