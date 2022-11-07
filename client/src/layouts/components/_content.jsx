function Content() {
  return (
    <main className="flex-1">
      <div className="flex flex-col items-center justify-center flex-1 h-full min-h-screen p-4 overflow-x-hidden overflow-y-auto">
        <h1 className="mb-4 text-2xl font-semibold text-center md:text-3xl">
          Mini + One Columns Sidebar
        </h1>
        <div className="mb-4">
          <div className="relative flex p-1 space-x-1 bg-white shadow-md w-80 h-72 dark:bg-darker">
            <div className="w-6 h-full bg-gray-200 dark:bg-dark"></div>
            <div className="w-16 h-full bg-gray-200 dark:bg-dark"></div>
            <div className="flex-1 h-full bg-gray-100 dark:bg-dark"></div>
          </div>
        </div>
        <div>
          <p className="text-center">See full project</p>
          <a
            href="https://kamona-wd.github.io/kwd-dashboard/"
            className="text-base text-blue-600 hover:underline"
          >
            Live
          </a>
          <a
            href="https://github.com/Kamona-WD/kwd-dashboard"
            className="ml-4 text-base text-blue-600 hover:underline"
          >
            Github repo
          </a>
        </div>
      </div>
    </main>
  );
}

export default Content;
