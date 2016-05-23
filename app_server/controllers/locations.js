/*GET Home page*/
module.exports.homelist = function(req,res){
	res.render('locations-list', {
		title:'Loc8r - find a place to work with wifi',
 		pageHeader: {
		 title: 'Loc8r',
		 strapline: "Find Your Patient's Best Option"
		 } ,
		 sidebar: "Let Loc8r find the right Facility for your Patient and then Facilitate the conversation for you.",
		 locations: [{
			name: 'Memorial Hermman',
			address: '125 High Street, Reading, RG6 1PS',
			rating: 3,
			facilities: ['Hot drinks', 'Food', 'Premium wifi'],
			distance: '100m'
			},{
			name: 'Kindred Health',
			address: '125 High Street, Reading, RG6 1PS',
			rating: 4,
			facilities: ['Hot drinks', 'Food', 'Premium wifi'],
			distance: '200m'
			},{
			name: 'Not Dead Yet',
			address: '125 High Street, Reading, RG6 1PS',
			rating: 2,
			facilities: ['Food', 'Premium wifi'],
			distance: '250m'
 			}]
 	});
};

/*GET Location Info page*/
module.exports.locationInfo = function(req,res){
	res.render('location-info', {title:'Location info',
	sidebar: "Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you're looking for.",
	locations:[{
		name:"BRC",
		rating: 3,
		address: "123 Main Street",
		weekhours: "Monday - Friday : 7:00am - 7:00pm",
		weekendhours: "Saturday : 8:00am - 5:00pm",
		facilities: ['Hot drinks', 'Food', 'Premium wifi'],
		reviews:[{
			author:"Dan Wilden",
			timestamp: "05/22/2016",
			story:"Good Enough",
			rating: 4
		},{
			author:"Eli Wilden",
			timestamp: "05/22/2016",
			story:"Kind of Sucks",
			rating: 2
		}]
	}]
	});
};

/*GET Add Review page*/
module.exports.addReview = function(req,res){
	res.render('location-review-form', {title:'Add review'});
};