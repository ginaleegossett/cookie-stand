var CookieStand = function(place, minCustHour, maxCustHour, avgCookiesCust, dailyCookies, ul) {
    this.place = place;
    this.minCustHour = minCustHour;
    this.maxCustHour = maxCustHour;
    this.avgCookiesCust = avgCookiesCust;
    this.dailyCookies = dailyCookies;
    this.cookiesByHourList = [];
    this.ul = ul;

	this.randCustHour = function(min, max) {							//calcuate our random number of cust/hour based on min/max
		return Math.floor(Math.random() * (max - min +1)) + min;
	};
	this.totalCookiesHour = function() {
        return (Math.floor(this.randCustHour(this.minCustHour, this.maxCustHour) * this.avgCookiesCust));
    };
    this.totalCookiesDay = function () {
        for (var i = 0; i < 8; i++) {
            this.cookiesByHourList.push(this.totalCookiesHour());
            this.dailyCookies = this.dailyCookies + this.cookiesByHourList[i];
        }
        return this.dailyCookies;
    };

    this.makeUL = function(array) {
        this.totalCookiesDay();

        var ul = document.getElementById(this.ul);

        for(var i = 0; i < 8; i++) {
            var li1 = document.createElement('li');
            li1.appendChild(document.createTextNode(array[i] + ': ' + this.cookiesByHourList[i] + ' cookies'));
            ul.appendChild(li1);
        }

        var li2 = document.createElement('li');
        li2.appendChild(document.createTextNode(array[8] + ': ' + this.dailyCookies + ' cookies'));
        ul.appendChild(li2);
    };   
};

var hoursOps = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', 'Total'];

var pikePlace = new CookieStand('Pike Place Market', 17, 88, 5.2, 0, 'pike');
pikePlace.makeUL(hoursOps);

var seaTac = new CookieStand('SeaTac Airport', 6, 44, 1.2, 0, 'seatac');
seaTac.makeUL(hoursOps);

var southCenter = new CookieStand('Southcenter Mall', 11, 38, 1.9, 0, 'southcenter');
southCenter.makeUL(hoursOps);

var bellSquare = new CookieStand('Bellevue Square', 20, 48, 3.3, 0, 'bellevue');
bellSquare.makeUL(hoursOps); 

var alki = new CookieStand('Alki Beach', 3, 24, 2.6, 0, 'alki');
alki.makeUL(hoursOps);
