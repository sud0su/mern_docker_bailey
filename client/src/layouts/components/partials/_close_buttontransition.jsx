function CloseButtonTransition() {
  return (
    <div className="absolute right-0 p-2 transform translate-x-full">
      {/* <!-- Close button --> */}
      {/* @click="isSearchPanelOpen = false"  */}
      <button className="p-2 text-white rounded-md focus:outline-none focus:ring">
        <svg
          className="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
    </div>
  );
}

export default CloseButtonTransition;
