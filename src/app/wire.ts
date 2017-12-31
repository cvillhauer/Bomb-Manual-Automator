export class Wire {
    id: number;
    color: string;
    connection: string;
    cut: boolean;
    status: string;

    constructor(id: number) {
        this.id = id;
        this.cut = false;
        this.color = "none";
        this.connection = "none";
        this.status = "active";
    }

    setColor(color: string) {
        this.color = color;
        if(color == "none")
        {
            this.connection = "none";
        }
    }

    setConnection(connection: string) {
        this.connection = connection;
        if(connection == "none")
        {
            this.color = "none";
        }
    }
}