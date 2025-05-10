export const Selected = () => {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Filled center circle */}
      <circle
        cx="13"
        cy="13"
        r="7"
        fill="url(#paint0_linear)"
      />
      {/* Outer stroke ring */}
      <circle
        cx="13"
        cy="13"
        r="9.5"
        stroke="url(#paint1_linear)"
        strokeWidth="1.5"
        fill="none"
      />
      <defs>
        <linearGradient id="paint0_linear" x1="13" y1="6" x2="13" y2="20" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00B2FF" />
          <stop offset="0.15" stopColor="#0AA9FA" />
          <stop offset="1" stopColor="#4670DA" />
        </linearGradient>
        <linearGradient id="paint1_linear" x1="13" y1="3.5" x2="13" y2="22.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00B2FF" />
          <stop offset="0.15" stopColor="#0AA9FA" />
          <stop offset="1" stopColor="#4670DA" />
        </linearGradient>
      </defs>
    </svg>
  );
};
