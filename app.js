

var hoursOps = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];

var pikePlace = {
	location: 'Pike Place Market', 
	minCustHour: 17,
	maxCustHour: 88,
	avgCookiesCust: 5.2,
	randCustHour: function(min, max) {							//calcuate our random number of cust/hour based on min/max
		return Math.floor(Math.random() * (max - min +1)) + min;
	},
	totalCookieHour: function() {
        return (Math.floor(this.randCustHour(this.minCustHour, this.maxCustHour) * this.avgCookiesCust));
    },
    makeUL: function(array) {
        for(var i = 0; i < array.length; i++) {

        // connect the list to the JS; this is where your list will appear
        var ul = document.getElementById('pike');

        // Create the list item:
        var item = document.createElement('li');

        // Set its contents:
        item.appendChild(document.createTextNode(array[i] + ': ' + this.totalCookieHour() + ' cookies'));

        // Add it to the list:
        ul.appendChild(item);
    }
}

};

var seaTac = {
    location: 'SeaTac Airport', 
    minCustHour: 6,
    maxCustHour: 44,
    avgCookiesCust: 1.2,
    randCustHour: function(min, max) {                          //calcuate our random number of cust/hour based on min/max
        return Math.floor(Math.random() * (max - min +1)) + min;
    },
    totalCookieHour: function() {
        return (Math.floor(this.randCustHour(this.minCustHour, this.maxCustHour) * this.avgCookiesCust));
    },
    makeUL: function(array) {
        for(var i = 0; i < array.length; i++) {

        // connect the list to the JS; this is where your list will appear
        var ul = document.getElementById('seatac');

        // Create the list item:
        var item = document.createElement('li');

        // Set its contents:
        item.appendChild(document.createTextNode(array[i] + ': ' + this.totalCookieHour() + ' cookies'));

        // Add it to the list:
        ul.appendChild(item);
    }
}

};

var southCenter = {
    location: 'South Center Mall', 
    minCustHour: 11,
    maxCustHour: 38,
    avgCookiesCust: 1.9,
    randCustHour: function(min, max) {                          //calcuate our random number of cust/hour based on min/max
        return Math.floor(Math.random() * (max - min +1)) + min;
    },
    totalCookieHour: function() {
        return (Math.floor(this.randCustHour(this.minCustHour, this.maxCustHour) * this.avgCookiesCust));
    },
    makeUL: function(array) {
        for(var i = 0; i < array.length; i++) {

        // connect the list to the JS; this is where your list will appear
        var ul = document.getElementById('southcenter');

        // Create the list item:
        var item = document.createElement('li');

        // Set its contents:
        item.appendChild(document.createTextNode(array[i] + ': ' + this.totalCookieHour() + ' cookies'));

        // Add it to the list:
        ul.appendChild(item);
    }
}

};

var bellSquare = {
    location: 'Bellevue Square', 
    minCustHour: 20,
    maxCustHour: 48,
    avgCookiesCust: 3.3,
    randCustHour: function(min, max) {                          //calcuate our random number of cust/hour based on min/max
        return Math.floor(Math.random() * (max - min +1)) + min;
    },
    totalCookieHour: function() {
        return (Math.floor(this.randCustHour(this.minCustHour, this.maxCustHour) * this.avgCookiesCust));
    },
    makeUL: function(array) {
        for(var i = 0; i < array.length; i++) {

        // connect the list to the JS; this is where your list will appear
        var ul = document.getElementById('bellevue');

        // Create the list item:
        var item = document.createElement('li');

        // Set its contents:
        item.appendChild(document.createTextNode(array[i] + ': ' + this.totalCookieHour() + ' cookies'));

        // Add it to the list:
        ul.appendChild(item);
    }
}

};

var alki = {
    location: 'Alki', 
    minCustHour: 3,
    maxCustHour: 24,
    avgCookiesCust: 2.6,
    randCustHour: function(min, max) {                          //calcuate our random number of cust/hour based on min/max
        return Math.floor(Math.random() * (max - min +1)) + min;
    },
    totalCookieHour: function() {
        return (Math.floor(this.randCustHour(this.minCustHour, this.maxCustHour) * this.avgCookiesCust));
    },
    makeUL: function(array) {
        for(var i = 0; i < array.length; i++) {

        // connect the list to the JS; this is where your list will appear
        var ul = document.getElementById('alki');

        // Create the list item:
        var item = document.createElement('li');

        // Set its contents:
        item.appendChild(document.createTextNode(array[i] + ': ' + this.totalCookieHour() + ' cookies'));

        // Add it to the list:
        ul.appendChild(item);
    }
}

};

pikePlace.makeUL(hoursOps);
seaTac.makeUL(hoursOps);
southCenter.makeUL(hoursOps);
bellSquare.makeUL(hoursOps);
alki.makeUL(hoursOps);
