function Clock(){

	this.html_element = null;
	this.hours = 0;
	this.minutes = 0;
	this.seconds = 0;
	
	this.startClock = startClock;
	this.timer = timer;

	function startClock(html_element_id, offset){
		this.html_element = document.getElementById(html_element_id);
		var now = new Date();
		// Use GMT + gmtOffset
		var offsetNow = new Date(now.valueOf() + (offset * 1000 * 60 * 60));
		this.hours = offsetNow.getUTCHours();
		this.minutes = offsetNow.getUTCMinutes();
		this.seconds = offsetNow.getUTCSeconds();
		this.timer();
	}

	function timer()
	{
		if(this.seconds == 60){
			this.seconds = 0;
			this.minutes++;
		}
		if(this.minutes == 60){
			this.minutes = 0;
			this.hours++;
		}
		if(this.hours == 24){
			this.hours = 0;
		}
		if(this.seconds < 10){
			seconds_str = '0'+this.seconds;
		}else{
			seconds_str = ''+this.seconds;
		}
		if(this.minutes < 10){
			minutes_str = '0'+this.minutes;
		}else{
			minutes_str = ''+this.minutes;
		}
		if(this.hours < 10){
			hours_str = '0'+this.hours;
		}else{
			hours_str = ''+this.hours;
		}
		this.html_element.innerHTML = hours_str+':'+minutes_str+':'+seconds_str;
		var foo = this;
		setTimeout(function() { foo.timer(); }, 1000);
		this.seconds++;
	}
}