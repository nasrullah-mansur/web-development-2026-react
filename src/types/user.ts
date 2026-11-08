
// export enum Role {
//     "Admin" = "Admin",
//     "User" = "User",
//     "Manager" = "Manager",
// }


// enum Status {
//     "Inactive" = "Inactive",
//     "Active" = "Active",
// }


type Role = "Admin"
    | "User"
    | "Manager";

type Status = "Active"
    | "Inactive";

export type IUser = {
    id: string | number;
    name: string;
    email: string;
    role: Role;
    status: Status;
    avatar: string | null;
}