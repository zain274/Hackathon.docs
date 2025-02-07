export default {
    name: 'vehicle',
    type: 'document',
    title: 'Vehicle',
    fields: [
      { name: 'name', type: 'string', title: 'Vehicle Name' },
      { name: 'type', type: 'string', title: 'Vehicle Type', options: { list: ['car', 'SUV', 'van', 'truck'] } },
      { name: 'brand', type: 'string', title: 'Brand' },
      { name: 'model', type: 'string', title: 'Model' },
      { name: 'registrationNumber', type: 'string', title: 'Registration Number' },
      { name: 'availability', type: 'boolean', title: 'Availability' },
      { name: 'pricePerDay', type: 'number', title: 'Price Per Day' },
      { name: 'conditionStatus', type: 'string', title: 'Condition Status' },
    ],
  };
  