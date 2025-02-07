export default {
    name: 'booking',
    type: 'document',
    title: 'Booking',
    fields: [
      { name: 'vehicle', type: 'reference', to: [{ type: 'vehicle' }], title: 'Vehicle' },
      { name: 'customer', type: 'reference', to: [{ type: 'customer' }], title: 'Customer' },
      { name: 'rentalDuration', type: 'string', title: 'Rental Duration' },
      { name: 'depositAmount', type: 'number', title: 'Deposit Amount' },
      { name: 'status', type: 'string', title: 'Booking Status', options: { list: ['pending', 'confirmed', 'completed'] } },
      { name: 'createdAt', type: 'datetime', title: 'Created At' },
      { name: 'returnDate', type: 'datetime', title: 'Return Date' },
    ],
  };
  