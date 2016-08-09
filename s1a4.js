function Person(age, name, city) {
	this.age = age;
	this.name = name;
	this.city = city;
}

var displayDetails = ( function() {
	return function() {
		age = document.getElementById('age').value;
		name = document.getElementById('name').value;
		city = document.getElementById('city').value;

		var person = new Person(age, name, city);

		var myDiv = document.getElementById("myDiv");
		myDiv.innerHTML = "<p>Age : " + person.age + "<p>" + "<p>Name : " + person.name + "<p>" + "<p>City : " + person.city + "<p>" ;
	}
})();