
var indexPage = new Vue({
	el: "#mainApp",
	data: function () {
		return{
			social_media_array:["fa fa-instagram" ,"fa fa-telegram" ,"fa fa-facebook"],
			// inputvalue:'',
			navbar_array:[{
				"name":"Home",
				"id":"home"
			},
			{
				"name":"About",
				"id":"about"
			},
			{
				"name":"Gallery",
				"id":"gallery"
			},
			{
				"name":"Feedback",
				"id":"feedback"
			},
			{
				"name":"Contact",
				"id":"contact"
			},
			],
			
			blogArray:[
			{
				"id":1,
				"img":"./img/image5.jpg",
				
			},
			{
				
				"id":1,
				"img":"./img/image5.jpg",
			},
			{
				
				"id":1,
				"img":"./img/image5.jpg",
			},
		    {
				
				"id":1,
				"img":"./img/image5.jpg",
			},
			
			{
				"id":1,
			    "img":"./img/image5.jpg",
			}
	        ]
	
        }
	},
	created: function () {

	},
	mounted: function () {
		
	},
	methods:{
		
		goToMenubarFun(event) {
		window.location = '#home'
		}
    }
});
