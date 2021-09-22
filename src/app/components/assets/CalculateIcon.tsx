import React from 'react';

export default function CalculateIcon(
  props: React.SVGProps<SVGSVGElement>
): JSX.Element {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="black"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M23.75 3.75H6.25C4.875 3.75 3.75 4.875 3.75 6.25V23.75C3.75 25.125 4.875 26.25 6.25 26.25H23.75C25.125 26.25 26.25 25.125 26.25 23.75V6.25C26.25 4.875 25.125 3.75 23.75 3.75ZM16.2875 8.825L17.6125 7.5L19.375 9.2625L21.1375 7.5L22.4625 8.825L20.7 10.5875L22.4625 12.35L21.1375 13.675L19.375 11.925L17.6125 13.6875L16.2875 12.3625L18.05 10.6L16.2875 8.825V8.825ZM7.8125 9.65H14.0625V11.525H7.8125V9.65V9.65ZM14.375 20H11.875V22.5H10V20H7.5V18.125H10V15.625H11.875V18.125H14.375V20ZM22.5 21.5625H16.25V19.6875H22.5V21.5625ZM22.5 18.4375H16.25V16.5625H22.5V18.4375Z" />
    </svg>
  );
}
