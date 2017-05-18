var React = require('react');
var {Link} = require('react-router');

var Schedule = React.createClass({

	test: function(){


		// function Teacher(name, subject) {
		//   this.name = name;
		//   this.subject = subject;
		//   this.mw = ['','','','lunch',''];
		//   this.tth = ['','','','lunch',''];
		// }

		// function Student(name, grade){
		//   this.name = name;
		//   this.grade = grade;
		  
		// }

		var hagge = {
			name: 'hagge',
			prep: false,
			allClasses: [
				{subject: 'english9a', count: 24}, 'english10a', 'english1010', 'english12', 'elect1'
			],
			// schedule: {
			// 	mw: [
			// 		{'period': 1, 'class': this.allClasses[0], 'grade': '9', 'students': 24},
			// 		{'period': 2, 'class': this.allClasses[1], 'grade': '10', 'students': 24},
			// 		{'period': 3, 'class': this.allClasses[2], 'grade': '11-12', 'students': 24},
			// 		{'period': 4, 'class': 'lunch', 'grade': 'lunch', 'students': 0},
			// 		{'period': 5, 'class': 'break', 'grade': 'break', 'students': 24}
			// 	],
			// 	tth: [
			// 		{'period': 1, 'class': this.allClasses[0], 'grade': '9', 'students': 24},
			// 		{'period': 2, 'class': this.allClasses[3], 'grade': '12', 'students': 24},
			// 		{'period': 3, 'class': this.allClasses[0], 'grade': '9', 'students': 24},
			// 		{'period': 4, 'class': 'lunch', 'grade': 'lunch', 'students': 0},
			// 		{'period': 5, 'class': this.allClasses[4], 'grade': '9', 'students': 24}
			// 	]
			// }
		};

		var ard = {
			name: 'ard',
			prep: false,
			allClasses: [
				{subject: 'math', count: 24}
			]
		}


		var req9 = {
		  'english': 'english9',
		  'math': 'math1',
		  'science': 'earth science',
		  'pe': 'participation skills',
		  'history': 'geography',
		  'elect1': '',
		  'elect2': ''
		}

		var elect9 = {
		  'languages': [
		      'spanish1', 'french1', 'french2'
		  ],
		  'art': [
		    'yearbook', 'art9-10'
		  ],
		  'music': [
		    'music9'
		  ],
		  'history': [
		    'communications'
		  ]
		}

		// Student.prototype.requiredCoursesByGrade = function () {
		//   if (this.grade == 9) {
		//     console.log('freshman');
		//   } else if (this.grade == 10) {
		//     console.log('sophmore');
		//   }
		// };

		 var teachers = [];

		 teachers.push(hagge);
		 teachers.push(ard);
		// teachers.push(new Teacher('ard', ['math']));
		// teachers.push(new Teacher('black', ['science']));
		// teachers.push(new Teacher('hagge', ['english9', 'english10', 'english1010', 'english12']));

		// var bill = new Student('bill', 10);
		// bill.requiredCoursesByGrade();

		// var freshmenTot = 53;
		// var sophTot = 53;
		// var junTot = 16;
		// var senTot = 13;

		// var total = freshmenTot + sophTot + junTot + senTot;

		// console.log(total);

		return teachers;

	},


	render: function(){
		var teachers = this.test();
		// console.log(this.test().name + this.test().allClasses[0].subject);
		teachers.forEach(function(t, i){
			console.log(t.prep);
		})



		return (
			<div className="row">
				<div className="columns medium-8 large-8 small-centered">
					<h2 className="text-center page-title">Class Schedule Demo</h2>
					<hr />
					<div className="mw">
						<div className="zbox">
							<div className="teach">
								
							</div>
						</div>
						<div className="zbox">
							<div className="teach">
								{this.test().name}
							</div>
						</div>
						<div className="zbox">
							<div className="teach">
								{this.test().name}
							</div>
						</div>
						<div className="zbox">
							<div className="teach">
								LUNCH
							</div>
						</div>
						<div className="zbox">
							<div className="teach">
								{this.test().name}
							</div>
						</div>
					</div>

					<div className="tth">
						<div className="zbox">
							<div className="teach">
								{this.test().name}
							</div>
						</div>
						<div className="zbox">
							<div className="teach">
								{this.test().name}
							</div>
						</div>
						<div className="zbox">
							<div className="teach">
								{this.test().name}
							</div>
						</div>
						<div className="zbox">
							<div className="teach">
								LUNCH
							</div>
						</div>
						<div className="zbox">
							<div className="teach">
								{this.test().name}
							</div>
						</div>
					</div>

					<div className="f">
						<div className="zbox">
							<div className="teach">
								{this.test().name}
							</div>
						</div>
						<div className="zbox">
							<div className="teach">
								{this.test().name}
							</div>
						</div>
						<div className="zbox">
							<div className="teach">
								{this.test().name}
							</div>
						</div>
						<div className="zbox">
							<div className="teach">
								LUNCH
							</div>
						</div>
						<div className="zbox">
							<div className="teach">
								{this.test().name}
							</div>
						</div>
					</div>

				</div>
			</div>
		);
	}


});

module.exports = Schedule;