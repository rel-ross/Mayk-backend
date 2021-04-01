
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('materials').del()
    .then(function () {
      // Inserts seed entries
      return knex('materials').insert([
        {name: "lumber",
        size: '2x4x8',
        quantity: 3,
        purchased: false
      },
      {name: "green paing",
      size: 'gallon',
      quantity: 1,
      purchased: false
    }
      ]);
    });
};

