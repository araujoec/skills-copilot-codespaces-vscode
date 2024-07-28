function skillsMember() {
  var member = {
    name: "Dylan",
    age: 25,
    skills: ["HTML", "CSS", "JS"],
    greet: function () {
      console.log("Hi, I'm " + this.name);
    },
  };
  return member;
}