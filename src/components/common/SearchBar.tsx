export function SearchBar() {
  return (
    <div className="order-3 sm:order-2 w-full lg:max-w-lg sm:w-full sm:mx-0">
      <div className="relative">
        <form method="GET" action="#">
          <input
            type="search"
            id="search-navbar"
            className="dark:bg-neutral-900 rounded-md w-full h-8 px-4 focus:outline-none focus:ring focus:ring-primary placeholder-neutral-400 text-sm dark:placeholder-neutral-600 text-center focus:text-left focus:pl-12 border dark:border-neutral-800"
            placeholder="Busca comidas, restaurants..."
            name="search"
            // defaultValue={new URLSearchParams(window.location.search).get("search")}
          />
          <div className="absolute rounded-md inset-y-0 left-0 p-4 flex items-center pointer-events-none">
            {/* <MagnifyingGlassIcon className="h-4 w-4" /> */}
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center p-4">
            <span className="text-xs font-bold text-neutral-500">CTRL K</span>
          </div>
        </form>
      </div>
    </div>
  );
}
