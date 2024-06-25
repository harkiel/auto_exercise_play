import { Shared } from "../pages/Shared"

export type User = {
    titleMr: boolean
    ,titleMrs: boolean
    ,name: string
    ,email: string
    ,password: string
    ,birthDay: number
    ,birthMonth: number
    ,birthYear: number
    ,newsletter: boolean
    ,specialOffers: boolean
    ,firstName: string
    ,lastName: string
    ,company: string
    ,address: string
    ,address2: string
    ,country: string
    ,state: string
    ,city: string
    ,zipcode: string
    ,mobileNumber: string
}

export class UsersData {
    users: {existingUser: User, newUser: User} = {
        existingUser: {
            titleMr: true
            ,titleMrs: false
            ,name: 'Kaniel Outis'
            ,email: 'harkiel2@gmail.com'
            ,password: Shared.PASSWORD_1
            ,birthDay: 6
            ,birthMonth: 6
            ,birthYear: 1995
            ,newsletter: false
            ,specialOffers: false
            ,firstName: 'Kaniel'
            ,lastName: 'Outis'
            ,company: 'Breakingout'
            ,address: '2323 Scape Rd'
            ,address2: 'Next to the taco stand'
            ,country: 'New Zealand'
            ,state: 'Tijuana'
            ,city: 'Palote'
            ,zipcode: '11745'
            ,mobileNumber: '8093556644'
        },
        newUser: {
            titleMr: true
            ,titleMrs: false
            ,name: 'Kaniel Outis'
            ,email: 'DoUpdateThisField'
            ,password: Shared.PASSWORD_1
            ,birthDay: 6
            ,birthMonth: 6
            ,birthYear: 1995
            ,newsletter: false
            ,specialOffers: false
            ,firstName: 'Kaniel'
            ,lastName: 'Outis'
            ,company: 'Breakingout'
            ,address: '2323 Scape Rd'
            ,address2: 'Next to the taco stand'
            ,country: 'New Zealand'
            ,state: 'Tijuana'
            ,city: 'Palote'
            ,zipcode: '11745'
            ,mobileNumber: '8093556644'
        }
    }
}

