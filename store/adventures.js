document.addEventListener("alpine:init", () => {
  Alpine.store("adventures", {
    diving: {
      name: "Scuba Diving",
      local: [
        {
          type: "adult",
          price: 5000,
        },
        {
          type: "child",
          price: 2000,
        },
      ],
      foreign: [
        {
          type: "adult",
          price: 10000,
        },
        {
          type: "child",
          price: 5000,
        },
      ],
      guide: {
        adult: 1000,
        child: 500,
      },
    },

    offroad: {
      name: "Off Road Adventure",
      local: [
        {
          type: "adult",
          price: 5000,
        },
        {
          type: "child",
          price: 2000,
        },
      ],
      foreign: [
        {
          type: "adult",
          price: 10000,
        },
        {
          type: "child",
          price: 5000,
        },
      ],
      guide: {
        adult: 1000,
        child: 500,
      },
    },
  });
});
