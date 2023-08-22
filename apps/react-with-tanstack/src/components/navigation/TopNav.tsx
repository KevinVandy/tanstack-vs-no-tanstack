import { Link, RegisteredRoutesInfo } from "@tanstack/react-router";

const navigation: Array<{
  href: RegisteredRoutesInfo["routePaths"];
  name: string;
}> = [
  { name: "Home", href: "/" },
  { name: "Feed", href: "/feed" },
  { name: "Users", href: "/users" },
];

export const TopNav = () => {
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
                  className="rounded-md px-3 py-2 text-sm font-medium"
                  key={item.name}
                  to={item.href}
                  activeProps={{
                    "aria-current": true,
                    className: "bg-gray-900 text-white",
                  }}
                  inactiveProps={{
                    "aria-current": false,
                    className:
                      "text-gray-300 hover:bg-gray-700 hover:text-white",
                  }}
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
