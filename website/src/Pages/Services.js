import React from "react";

export const Services = () => {
    return (
        <div className="mt-20">
            <div className="flex flex-col items-center justify-center h-full p-6  dark:bg-gray-900">
                <h1 class="mb-8 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white">
                    Our Services
                </h1>
                <p className="mb-12 text-lg font-normal text-gray-500 dark:text-gray-400">
                    Explore the various services we offer to help you grow your
                    blog and reach your audience effectively.
                </p>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Content Creation
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            We provide high-quality content creation services
                            tailored to your niche, ensuring your blog stands
                            out.
                        </p>
                    </div>

                    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            SEO Optimization
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Our SEO experts will optimize your blog to improve
                            visibility and drive organic traffic.
                        </p>
                    </div>

                    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Social Media Management
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            We manage your social media presence to engage your
                            audience and promote your blog effectively.
                        </p>
                    </div>

                    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Email Marketing
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Our email marketing services help you connect with
                            your audience and keep them updated with your latest
                            posts.
                        </p>
                    </div>

                    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Analytics &amp; Reporting
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            We provide detailed analytics and reporting to help
                            you understand your audience and improve your
                            content strategy.
                        </p>
                    </div>

                    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            A Content Management System (CMS)
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            We provide users to create, manage, and modify
                            digital content without needing specialized
                            technical knowledge
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
