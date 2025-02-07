export default {
    name: 'customer',
    type: 'document',
    title: 'Customer',
    fields: [
      { name: 'fullName',
         type: 'string',
          title: 'Full Name'
         },
      { name: 'email',
         type: 'string',
          title: 'Email'
         },
      { name: 'phone',
         type: 'string',
          title: 'Phone Number'
         },
      { name: 'address',
         type: 'text',
          title: 'Address'
         },
      { name: 'user',
         type: 'reference',
          to:
           [{ type: 'user' }],
            title: 'User' },
    ],
  };
  