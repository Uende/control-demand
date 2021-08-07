

let clients = [
    {_id: "19", name: "Uende", email: "uendeteles1608@gmail.com", phone: "71984044375", password: "123456", demandName: "Portfólio"},
    {_id: "51", name: "Jane", email: "janeteles@gmail.com", phone: "71986141232", password: "123456", demandName: "Site Empresarial - URT"},
    {_id: "18", name: "Júnior", email: "jr@gmail.com", phone: "7198329402", password: "123456", demandName: "Site Gmaer - Gaspar"}
]


export const resolvers = {
    Query: {
        clients: (_, args) => {
                if(args._id){
                    const clientId = clients.find((client) => client._id === args._id)
                    return [clientId]
                }else{
                    return clients
                }
            },
        demands: () => [],
        admin: () => {},
        getClientId: (_, args) => {
            const clientId = clients.find((client) => client._id === args._id)
            return clientId
        }
    },

    Mutation: {
        createClient: (_, args) => {
            const newClient = {
                _id: args.input._id, 
                name: args.input.name, 
                email: args.input.email, 
                phone: args.input.phone, 
                password: args.input.password, 
                demandName: args.input.demandName
            }

            clients.push(newClient)

            return newClient
        },

        updateClient: (_, args) => {
            const client = clients.find((client) => client._id === args.input._id)
            client.name = args.input.name ? args.input.name : client.name
            client.email = args.input.email ? args.input.email : client.email
            client.phone = args.input.phone ? args.input.phone : client.phone
            client.password = args.input.password ? args.input.password : client.password
            client.demandName = args.input.demandName ? args.input.demandName : client.demandName
            
            return client
        },

        deleteClient: (_, args) => {
            const clientsUpdate = clients.filter((client) => client._id !== args.input._id)
            clients = clientsUpdate
            return true
        }
    }
}