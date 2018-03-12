/* GET 'home' page */
module.exports.homelist = function(req, res) {
    res.render('locations-list', {
        title: 'Organizer',
        pageHeader: {
            title: 'Course Work Organizer',
            strapline: 'Helping You Help Yourself'
        },
        
        locations: [{
            name: 'MEGN553',
            course: 'Computational Fluid Dynamics',
            professor: 'G. Bogin',
        }, {
            name: 'MEGN466',
            course: 'Internal Combustion Engines',
            professor: 'G. Bogin',
        }]
    });
};

/* GET 'Location info' page */
module.exports.locationInfo = function(req, res) {
    res.render('location-info', {
        title: 'MEGN553',
        pageHeader: {
            title: 'MEGN553 Computational Fluid Dynamics'
        },
        location: {
            name: 'MEGN553',
            room: 'Room: BB316B',
            students: 'Students: 50',
            reviews: [{
                assignment: 'Homework 2',
                duedate: '15 March 2018',
                points: '50',
                status: 'Not Started'
            }, {
                assignment: 'Term Project',
                duedate: '3 May 2018',
                points: '100',
                status: 'In Progress'
            }]
        }
    });
};

/* GET 'Add review' page */
module.exports.addReview = function(req, res) {
    res.render('location-review-form', {
        title: 'New Assignment',
        pageHeader: {
            title: 'Add Assignment for MEGN553'
        }
    });
};