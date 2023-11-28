document.addEventListener("alpine:init", () => {
    Alpine.store("accommodation", {
        rooms: [
          {
            type: 'SUPERIOR ROOM',
            price: 25000,
          },
          {
            type: 'PANORAMIC ROOM',
            price: 50000,
          },
          {
            type: 'LUXURY ROOM',
            price: 75000,
          },
          {
            type: 'LUXURY PANORAMIC ROOM',
            price: 100000,
          }, 
          {
            type: 'DELUXE ROOM',
            price: 125000,
          }, 
          {
            type: 'SUITE',
            price: 200000,
          },  
          {
            type: 'LUXURY SUITE',
            price: 250000,
          },  
          {
            type: 'ROYAL SUITE',
            price: 300000,
          }, 
        ]
    });
  });
  