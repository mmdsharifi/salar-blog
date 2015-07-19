angular.module('firstApp', [])

.controller('mainController',function () {
	var vm = this;
	
	vm.message = "محمد شریفی";
	
	vm.posts = [
		{title:'آموزش انگیولار جی اس',content:'سلام در این آموزش انگیولار جی اس را معرفی می کنیم و ...'},
		{title:'بخش دوم آموزش انگیلار جی اس',content:'سلام در این آموزش انگیولار جی اس را معرفی می کنیم و ...'},
		{title:'بخش دوم آموزش انگیلار جی اس',content:'سلام در این آموزش انگیولار جی اس را معرفی می کنیم و ...'}
	];
	vm.addPost = function () {
		vm.posts.push({
			title:vm.postdata.title,
			content : vm.postdata.content
		});
		postdata = {};
	};
});