export default {
    name: 'order',
    type: 'document',
    title: 'Order',
    fields: [
      { name: 'order_id', type: 'string', title: 'Order ID' },
      { name: 'user_id', type: 'reference', to: [{ type: 'user' }], title: 'User' },
      { name: 'status', type: 'string', title: 'Order Status', options: { list: ['pending', 'processing', 'shipped', 'delivered'] } },
      { name: 'total', type: 'number', title: 'Total Price' },
      { name: 'items', type: 'array', of: [{ type: 'object', fields: [
        { name: 'product_id', type: 'reference', to: [{ type: 'product' }], title: 'Product' },
        { name: 'quantity', type: 'number', title: 'Quantity' }
      ]}], title: 'Ordered Products' }
    ]
  };