import { Link, useRouter } from "@tanstack/router";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Feed", href: "/feed" },
  { name: "Users", href: "/users" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const TopNav = () => {
  const {
    state: {
      currentLocation: { pathname },
    },
  } = useRouter();

  return (
    <div className="bg-slate-800  px-2 sm:px-6 lg:px-8 w-full">
      <div className="relative flex h-16 items-center justify-between">
        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div className="flex flex-shrink-0 items-center">
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
              alt="Your Company"
            />
          </div>
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={classNames(
                    pathname === item.href
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "rounded-md px-3 py-2 text-sm font-medium"
                  )}
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
