export default {
    name: 'admin',
    type: 'document',
    title: 'Admin',
    fields: [
    {   name: 'fullName',
        type: 'string',
        title: 'Full Name'
    },
    {   name: 'email',
        type: 'string',
        title: 'Email'
    },
    {   name: 'password',
        type: 'string', title: 'Password'
    },
    {   name: 'role',
        type: 'string',
        title: 'Role',
        options:
         { list: ['superadmin',
                    'manager'
                ] 
    } },
    {   name: 'phone',
        type: 'string',
        title: 'Phone Number'
    },
    {   name: 'permissions',
        type: 'array',
        title: 'Permissions',
        of:
            [{
             type: 'string'
             }],
        options:
         { list:
             ['manageUsers', 'manageVehicles',
                'approveBookings', 'viewReports',

             ] 

    } },
    {   name: 'createdAt',
        type: 'datetime',
        title: 'Created At'
    },
    {   name: 'lastLogin',
        type: 'datetime',
        title: 'Last Login'
    },
    ],
  };
  