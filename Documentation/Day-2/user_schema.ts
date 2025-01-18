export default {
    name: 'user',
    type: 'document',
    title: 'User',
    fields: [
      { name: 'name', type: 'string', title: 'Full Name' },
      { name: 'email', type: 'string', title: 'Email Address' },
      { name: 'address', type: 'string', title: 'Shipping Address' },
      { name: 'phone', type: 'string', title: 'Phone Number' },
      { name: 'role', type: 'string', title: 'User Role', options: { list: ['customer', 'admin'] } }
    ]
  };
  