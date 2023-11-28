document.addEventListener("alpine:init", () => {
  Alpine.store("hotel", {
    name: "Heritance Kandalama",
    location: "Dambulla",
    rating: 5,
    facilities: [
        "Spa", 
        "Gym", 
        "Pool", 
        "Free Wifi", 
        "Free Parking", 
        "Restaurant",
        "Bar",
        "Airport Shuttle",
        "Family Rooms"        
    ],
  });
});
