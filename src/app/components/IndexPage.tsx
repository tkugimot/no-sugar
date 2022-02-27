import React from "react";

export const IndexPage = () => {
    return (
        <div className="md:container sm:px-100">
            <header className="pt-4 pb-9 sm:pb-16 text-center"><h1
                className="mb-4 text-3xl sm:text-4xl tracking-tight text-slate-900 font-extrabold dark:text-slate-600">Blog</h1>
                <p className="text-lg text-slate-700 dark:text-slate-500">All the blog posts by the administrator.</p>
            </header>

            <div className="max-w-5xl mx-auto px-4 pb-28 sm:px-6 md:px-8 xl:px-12 xl:max-w-6xl">
                <div className="mt-6 mb-12">
                    <article className="relative flex flex-col max-w-3xl lg:ml-auto xl:max-w-none xl:w-[50rem]"><h3
                        className="mb-4 text-xl text-slate-900 tracking-tight font-mono font-bold dark:text-slate-800"><a
                        href="/blog/headless-ui-v1-5">このブログについて</a></h3>
                        {/*<div className="mb-6 prose prose-slate dark:prose-dark"><p>We just released Headless UI v1.5, which*/}
                        {/*    includes a brand new <code>Combobox</code> component. Comboboxes are like select controls but*/}
                        {/*    with*/}
                        {/*    autocomplete/typeahead functionality, and are a great alternative to a regular select when*/}
                        {/*    you’re*/}
                        {/*    working with large datasets and want to quickly filter for the right option.</p></div>*/}
                        <div className="mt-auto flex flex-row-reverse items-center justify-end">
                            <dl>
                                <dt className="sr-only">Date</dt>
                                <dd className="text-sm leading-6 dark:text-slate-800 lg:absolute lg:top-0 lg:right-full lg:mr-8 lg:whitespace-nowrap">
                                    <time dateTime="2022-02-24T12:00:00.000Z">Febuary 24, 2022</time>
                                </dd>
                            </dl>
                            {/*<svg width="2" height="2" fill="currentColor" className="mx-4 text-slate-700 lg:hidden">*/}
                            {/*    <circle cx="1" cy="1" r="1"></circle>*/}
                            {/*</svg>*/}
                            {/*<a className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500"*/}
                            {/*   href="/blog/headless-ui-v1-5">Read more<span className="sr-only">, Headless UI v1.5: The One With Comboboxes</span>*/}
                            {/*    <svg*/}
                            {/*        className="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400 dark:text-slate-500 dark:group-hover:text-slate-400"*/}
                            {/*        width="3" height="6" viewBox="0 0 3 6" fill="none">*/}
                            {/*        <path d="M0 0L3 3L0 6"></path>*/}
                            {/*    </svg>*/}
                            {/*</a>*/}
                        </div>
                    </article>
                </div>
                <div className="mt-6 mb-12">
                    <article className="relative flex flex-col max-w-3xl lg:ml-auto xl:max-w-none xl:w-[50rem]"><h3
                        className="mb-4 text-xl text-slate-900 tracking-tight font-mono font-bold dark:text-slate-800"><a
                        href="/blog/headless-ui-v1-5">このブログについて</a></h3>
                        {/*<div className="mb-6 prose prose-slate dark:prose-dark"><p>We just released Headless UI v1.5, which*/}
                        {/*    includes a brand new <code>Combobox</code> component. Comboboxes are like select controls but*/}
                        {/*    with*/}
                        {/*    autocomplete/typeahead functionality, and are a great alternative to a regular select when*/}
                        {/*    you’re*/}
                        {/*    working with large datasets and want to quickly filter for the right option.</p></div>*/}
                        <div className="mt-auto flex flex-row-reverse items-center justify-end">
                            <dl>
                                <dt className="sr-only">Date</dt>
                                <dd className="text-sm leading-6 dark:text-slate-800 lg:absolute lg:top-0 lg:right-full lg:mr-8 lg:whitespace-nowrap">
                                    <time dateTime="2022-02-24T12:00:00.000Z">Febuary 24, 2022</time>
                                </dd>
                            </dl>
                            {/*<svg width="2" height="2" fill="currentColor" className="mx-4 text-slate-700 lg:hidden">*/}
                            {/*    <circle cx="1" cy="1" r="1"></circle>*/}
                            {/*</svg>*/}
                            {/*<a className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500"*/}
                            {/*   href="/blog/headless-ui-v1-5">Read more<span className="sr-only">, Headless UI v1.5: The One With Comboboxes</span>*/}
                            {/*    <svg*/}
                            {/*        className="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400 dark:text-slate-500 dark:group-hover:text-slate-400"*/}
                            {/*        width="3" height="6" viewBox="0 0 3 6" fill="none">*/}
                            {/*        <path d="M0 0L3 3L0 6"></path>*/}
                            {/*    </svg>*/}
                            {/*</a>*/}
                        </div>
                    </article>
                </div>

            </div>
        </div>
    );
}
