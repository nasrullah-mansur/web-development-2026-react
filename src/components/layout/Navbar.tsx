
import { Button } from "@/components/ui/button";
import { Layers3, ShoppingCart } from "lucide-react";
import { NavLink } from "react-router";

export default function Navbar() {
    return (
        <header className="w-full border-b bg-background">
            <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

                {/* Logo */}
                <div className="flex items-center gap-2.5">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                        <Layers3 className="size-5" />
                    </div>

                    <span className="text-xl font-bold tracking-tight">
                        TaskFlow
                    </span>
                </div>

                {/* Navigation */}
                <div className="flex items-center gap-4 sm:gap-8">

                    <nav className="flex items-center gap-4 sm:gap-7">
                        <NavLink
                            to="/"
                            className="text-sm font-semibold text-foreground transition-colors hover:text-primary"
                        >
                            Home
                        </NavLink>

                        <NavLink
                            to="/users"
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                        >
                            Users
                        </NavLink>
                    </nav>

                    {/* Cart */}
                    <NavLink to={"/cart"}>
                        <Button
                            variant="outline"
                            size="icon"
                            className="relative size-10 rounded-xl"
                        >
                            <ShoppingCart className="size-5" />
                            <span className="sr-only">Shopping Cart</span>
                        </Button>
                    </NavLink>

                </div>
            </div>
        </header>
    );
}
