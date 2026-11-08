
import {
    Search,
    Trash2,
    UserPlus,
    UsersRound,
} from "lucide-react";

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

// Demo Data
const users = [
    {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        role: "Admin",
        status: "Active",
        avatar: "",
    },
    {
        id: 2,
        name: "Sarah Wilson",
        email: "sarah@example.com",
        role: "User",
        status: "Active",
        avatar: "",
    },
    {
        id: 3,
        name: "Michael Brown",
        email: "michael@example.com",
        role: "User",
        status: "Inactive",
        avatar: "",
    },
    {
        id: 4,
        name: "Emily Davis",
        email: "emily@example.com",
        role: "Manager",
        status: "Active",
        avatar: "",
    },
    {
        id: 5,
        name: "David Miller",
        email: "david@example.com",
        role: "User",
        status: "Active",
        avatar: "",
    },
    {
        id: 6,
        name: "Olivia Taylor",
        email: "olivia@example.com",
        role: "User",
        status: "Inactive",
        avatar: "",
    },
];

export default function Users() {
    return (
        <main className="min-h-screen bg-background">
            <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

                {/* Page Header */}
                <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                    <div>
                        <Badge
                            variant="secondary"
                            className="mb-3 rounded-full"
                        >
                            <UsersRound className="mr-1 size-3.5" />
                            User Management
                        </Badge>

                        <h1 className="text-3xl font-bold tracking-tight">
                            Users
                        </h1>

                        <p className="mt-2 text-sm text-muted-foreground">
                            View and manage all registered users.
                        </p>
                    </div>

                    <Button className="rounded-xl">
                        <UserPlus className="mr-2 size-4" />
                        Add User
                    </Button>
                </div>

                {/* Users Card */}
                <Card className="gap-0 overflow-hidden rounded-2xl shadow-sm">

                    <CardHeader className="flex flex-col gap-4 border-b pb-6 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <CardTitle className="text-lg">
                                All Users
                            </CardTitle>

                            <CardDescription className="mt-1">
                                A list of all users in your application.
                            </CardDescription>
                        </div>

                        {/* Search UI Only */}
                        <div className="relative w-full sm:w-72">
                            <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />

                            <Input
                                placeholder="Search users..."
                                className="h-10 rounded-xl pl-9"
                                readOnly
                            />
                        </div>
                    </CardHeader>

                    <CardContent className="p-0">
                        <div className="overflow-x-auto">
                            <Table>
                                <TableHeader>
                                    <TableRow className="bg-muted/40">
                                        <TableHead className="pl-6">
                                            User
                                        </TableHead>

                                        <TableHead>Role</TableHead>

                                        <TableHead>Status</TableHead>

                                        <TableHead className="text-right pr-6">
                                            Actions
                                        </TableHead>
                                    </TableRow>
                                </TableHeader>

                                <TableBody>
                                    {users.map((user) => (
                                        <TableRow
                                            key={user.id}
                                            className="hover:bg-muted/30"
                                        >
                                            {/* User Info */}
                                            <TableCell className="py-4 pl-6">
                                                <div className="flex items-center gap-3">
                                                    <Avatar className="size-10">
                                                        <AvatarImage
                                                            src={user.avatar}
                                                            alt={user.name}
                                                        />

                                                        <AvatarFallback className="bg-primary/10 text-xs font-semibold text-primary">
                                                            {user.name
                                                                .split(" ")
                                                                .map((name) => name[0])
                                                                .join("")}
                                                        </AvatarFallback>
                                                    </Avatar>

                                                    <div>
                                                        <p className="font-medium">
                                                            {user.name}
                                                        </p>

                                                        <p className="text-xs text-muted-foreground">
                                                            {user.email}
                                                        </p>
                                                    </div>
                                                </div>
                                            </TableCell>

                                            {/* Role */}
                                            <TableCell>
                                                <Badge
                                                    variant="outline"
                                                    className="rounded-lg font-medium"
                                                >
                                                    {user.role}
                                                </Badge>
                                            </TableCell>

                                            {/* Status */}
                                            <TableCell>
                                                <Badge
                                                    variant={
                                                        user.status === "Active"
                                                            ? "default"
                                                            : "secondary"
                                                    }
                                                    className="rounded-full"
                                                >
                                                    <span
                                                        className={`mr-1.5 size-1.5 rounded-full ${user.status === "Active"
                                                                ? "bg-primary-foreground"
                                                                : "bg-muted-foreground"
                                                            }`}
                                                    />

                                                    {user.status}
                                                </Badge>
                                            </TableCell>

                                            {/* Remove Button */}
                                            <TableCell className="pr-6 text-right">
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="rounded-lg text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
                                                    aria-label={`Remove ${user.name}`}
                                                >
                                                    <Trash2 className="size-4" />
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>

                        {/* Footer */}
                        <div className="flex items-center justify-between border-t px-6 py-4">
                            <p className="text-sm text-muted-foreground">
                                Showing {users.length} users
                            </p>

                            <span className="text-xs text-muted-foreground">
                                Total: {users.length}
                            </span>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </main>
    );
}
