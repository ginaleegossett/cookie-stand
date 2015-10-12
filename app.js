var hoursOps = ['Location', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', 'Total'];

var CookieStand = function(place, minCustHour, maxCustHour, avgCookiesCust) {
    this.place = place;
    this.minCustHour = minCustHour;
    this.maxCustHour = maxCustHour;
    this.avgCookiesCust = avgCookiesCust;
    this.cookiesByHourList = [];


	this.randCustHour = function(min, max) {							//calcuate our random number of cust/hour based on min/max
		return Math.floor(Math.random() * (max - min +1)) + min;
	};
	this.totalCookiesHour = function() {
        return (Math.floor(this.randCustHour(this.minCustHour, this.maxCustHour) * this.avgCookiesCust));
    };
    this.totalCookiesDay = function () {
        var myStupidCookies = 0
        for (var i = 0; i < 8; i++) {
            this.cookiesByHourList.push(this.totalCookiesHour());
            myStupidCookies = myStupidCookies + this.cookiesByHourList[i];
        }
        return myStupidCookies;
    };

    // this will make our table for our sales.html
    this.makeTable = function(array) {
        this.totalCookiesDay();

        var salesTable = document.getElementById('stupidTable');

        var stupidRow = document.createElement('tr');

        var where = document.createElement('td');
            where.appendChild(document.createTextNode(this.place));
            stupidRow.appendChild(where);
            where.className = "where"
            

        for (var j = 0; j < this.cookiesByHourList.length; j++) {
            var where = document.createElement('td');
            where.appendChild(document.createTextNode(this.cookiesByHourList[j]));
            stupidRow.appendChild(where);
        }

        var where = document.createElement('td');
        where.appendChild(document.createTextNode(this.totalCookiesDay()));
        stupidRow.appendChild(where);

        stupidTable.appendChild(stupidRow);

    };

};

var newLocation = function(event) {
    event.preventDefault();
    var locName = document.getElementById('locName');
    var minCust = document.getElementById('minCust');
    var maxCust = document.getElementById('maxCust');
    var avgCookies = document.getElementById('avgCookies');

    if (!locName) {
        return alert ('You must enter a location name');
    }

    else if (minCust.value < maxCust.value) {
        return alert ('Please make sure the maximum customer number is larger than minimum');
    }

    console.log(locName.value);
    console.log(minCust.value);
    console.log(maxCust.value);
    console.log(avgCookies.value);

    var newStore = new CookieStand(locName.value, minCust.value, maxCust.value, avgCookies.value);

    newStore.makeTable();
};


var newButton = document.getElementById('newLocInfo');
newButton.addEventListener('click', newLocation);


var pikePlace = new CookieStand('Pike Place Market', 17, 88, 5.2, 'pike');

var seaTac = new CookieStand('SeaTac Airport', 6, 44, 1.2, 'seatac');

var southCenter = new CookieStand('Southcenter Mall', 11, 38, 1.9, 'southcenter');

var bellSquare = new CookieStand('Bellevue Square', 20, 48, 3.3, 'bellevue');

var alki = new CookieStand('Alki Beach', 3, 24, 2.6, 'alki');

pikePlace.makeTable();
seaTac.makeTable();
southCenter.makeTable();
bellSquare.makeTable();
alki.makeTable();

