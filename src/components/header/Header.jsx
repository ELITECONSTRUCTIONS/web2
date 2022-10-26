export function HeaderWeb() {
    return (
        <header class="text-gray-600 body-font">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span class="ml-3 text-xl">Tailblocks</span>
                </a>
                <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <a class="mr-6 hover:text-gray-900">Home</a>
                    <a class="mr-6 hover:text-gray-900">About Us</a>
                    <a class="mr-6 hover:text-gray-900">Services</a>
                    <a class="mr-6 hover:text-gray-900">Our Projects</a>
                    <a class="mr-6 hover:text-gray-900">Contact Us</a>
                    <div class="group inline-block">
                        <button
                            class="outline-none focus:outline-none border px-3 py-1 bg-white rounded-sm flex items-center min-w-32"
                        >
                            <span class="pr-1 font-semibold flex-1">Dropdown</span>
                            <span>
                                <svg
                                    class="fill-current h-4 w-4 transform group-hover:-rotate-180
        transition duration-150 ease-in-out"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                                    />
                                </svg>
                            </span>
                        </button>
                        <ul
                            class="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
  transition duration-150 ease-in-out origin-top min-w-32"
                        >
                            <li class="rounded-sm px-3 py-1 hover:bg-gray-100">Programming</li>
                            <li class="rounded-sm px-3 py-1 hover:bg-gray-100">DevOps</li>
                            <li class="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                                <button
                                    class="w-full text-left flex items-center outline-none focus:outline-none"
                                >
                                    <span class="pr-1 flex-1">Langauges</span>
                                    <span class="mr-auto">
                                        <svg
                                            class="fill-current h-4 w-4
            transition duration-150 ease-in-out"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                                            />
                                        </svg>
                                    </span>
                                </button>
                                <ul
                                    class="bg-white border rounded-sm absolute top-0 right-0 
  transition duration-150 ease-in-out origin-top-left
  min-w-32
  "
                                >
                                    <li class="px-3 py-1 hover:bg-gray-100">Javascript</li>
                                    <li class="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                                        <button
                                            class="w-full text-left flex items-center outline-none focus:outline-none"
                                        >
                                            <span class="pr-1 flex-1">Python</span>
                                            <span class="mr-auto">
                                                <svg
                                                    class="fill-current h-4 w-4
                transition duration-150 ease-in-out"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path
                                                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                                                    />
                                                </svg>
                                            </span>
                                        </button>
                                        <ul
                                            class="bg-white border rounded-sm absolute top-0 right-0 
      transition duration-150 ease-in-out origin-top-left
      min-w-32
      "
                                        >
                                            <li class="px-3 py-1 hover:bg-gray-100">2.7</li>
                                            <li class="px-3 py-1 hover:bg-gray-100">3+</li>
                                        </ul>
                                    </li>
                                    <li class="px-3 py-1 hover:bg-gray-100">Go</li>
                                    <li class="px-3 py-1 hover:bg-gray-100">Rust</li>
                                </ul>
                            </li>
                            <li class="rounded-sm px-3 py-1 hover:bg-gray-100">Testing</li>
                        </ul>
                    </div>

                </nav>
            </div>
        </header>
    );
}