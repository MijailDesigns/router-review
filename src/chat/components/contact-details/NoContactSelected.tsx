const NoContactSelected = () => {
  return (
    <div
      className="bg-orange-200 border border-orange-500 text-orange-800 px-4 py-3 rounded shadow-md"
      role="alert"
    >
      <div className="flex items-center">
        <svg
          className="h-5 w-5 text-orange-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke-width="2"
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span className="ml-3 block sm:inline">¡Atención!</span>
        <span className="ml-2 block sm:inline">
          Por favor, seleccione un cliente para iniciar una conversación
        </span>
        <svg
          className="h-5 w-5 text-orange-500 ml-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      </div>
    </div>
  );
};

export default NoContactSelected;
