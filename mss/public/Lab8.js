$(document).ready(()=>{ // jQuery main
    let repo = new createjs.LoadQueue();
	 
	
		// add your repo initialization code here
        function setup() {
        	repo.loadManifest([
        	{id:'video',src:"/assets/v1.mp4"},	
        	{id:'video1',src:"/assets/v1.mp4"},
        	{id:'video2',src:"/assets/v2.mp4"},
        	{id:'video3',src:"/assets/v3.mp4"}
        	]);
        	repo.on('complete', start);
        	}

	
	function start(){
        let v2 = repo.getResult('video2');
        let v3 = repo.getResult('video3');
        let v = repo.getResult('video');

        $('#video').append($(v));
       
        v.controls = true;
       v.width = 400;
        v.play();
       
       
        
		setTimeout(function() {
		   v.pause();
		   v.src = v1.src;
		   v.currentTime = 0;
		   v.play();
	    }, 5000);
			
		setTimeout(function() {
		   v.pause();	
		   v.src = v2.src;
		   v.currentTime = 0;
		   v.play();
		}, 10000);
		
		setTimeout(function() {
		   v.pause();	
		   v.src = v3.src;
		   v.currentTime = 0;
		   v.play();
		}, 15000);
		setTimeout(function() {
			   v.pause();	
		}, 20000);
		
			
	}
	
	setup();
});