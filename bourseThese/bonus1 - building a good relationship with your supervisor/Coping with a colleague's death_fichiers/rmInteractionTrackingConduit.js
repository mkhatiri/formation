function RMInteractionTrackingConduit(siteid, adid, clickRedirect)
{
	this.id = RMInteractionTrackingConduit.Instances.length;	
	RMInteractionTrackingConduit.Instances[this.id] = this;
	
	this.myBSConduit = new BluestreakConduit(siteid, adid, clickRedirect);
	var actionMap = {"total expansions":{"number":500},
			"unique expansions": {"number":501, "oncePerSessionOnly":true},
			"total collapses": {"number":502},
			"unique collapses": {"number":503, "oncePerSessionOnly":true},
			"unique expansions 10 seconds": {"number":504, "oncePerSessionOnly":true},
			"unique expansions 20 seconds": {"number":505, "oncePerSessionOnly":true},
			"unique expansions 30 seconds": {"number":506, "oncePerSessionOnly":true},
			"unique expansions 40 seconds": {"number":507, "oncePerSessionOnly":true},
			"unique expansions 50 seconds": {"number":508, "oncePerSessionOnly":true},
			"unique expansions 60 seconds": {"number":509, "oncePerSessionOnly":true},
			"unique expansions 70 seconds": {"number":510, "oncePerSessionOnly":true},
			"unique expansions 80 seconds": {"number":511, "oncePerSessionOnly":true},
			"unique expansions 90 seconds": {"number":512, "oncePerSessionOnly":true},
			"unique expansions 100 seconds": {"number":513, "oncePerSessionOnly":true},
			"unique expansions 110 seconds": {"number":514, "oncePerSessionOnly":true},
			"unique expansions 120 seconds": {"number":515, "oncePerSessionOnly":true},
			"unique expansions 130 seconds": {"number":516, "oncePerSessionOnly":true},
			"unique expansions 140 seconds": {"number":517, "oncePerSessionOnly":true},
			"unique expansions 150 seconds": {"number":518, "oncePerSessionOnly":true},
			"total video starts": {"number":519},
			"unique video starts": {"number":520, "oncePerSessionOnly":true},
			"unique low bandwidth": {"number":521, "oncePerSessionOnly":true},
			"unique medium bandwidth": {"number":522, "oncePerSessionOnly":true},
			"unique high bandwidth": {"number":523, "oncePerSessionOnly":true},
			"unique video 20%": {"number":524, "oncePerSessionOnly":true},
			"unique video 40%": {"number":525, "oncePerSessionOnly":true},
			"unique video 60%": {"number":526, "oncePerSessionOnly":true},
			"unique video 80%": {"number":527, "oncePerSessionOnly":true},
			"unique video 100%": {"number":528, "oncePerSessionOnly":true},
			"total video replays": {"number":529},
			"total video manual stops": {"number":530},			
			"unique video manual stops": {"number":531, "oncePerSessionOnly":true},						
			"total hover begins": {"number":546, "oncePerSessionOnly":false},
			"unique hover begins": {"number":547, "oncePerSessionOnly":true},
			"total hover ends": {"number":548, "oncePerSessionOnly":false},
			"unique hover ends": {"number":549, "oncePerSessionOnly":true},
			"unique hover 10 seconds": {"number":550, "oncePerSessionOnly":true},
			"unique hover 20 seconds": {"number":551, "oncePerSessionOnly":true},
			"unique hover 30 seconds": {"number":552, "oncePerSessionOnly":true},
			"unique hover 40 seconds": {"number":553, "oncePerSessionOnly":true},
			"unique hover 50 seconds": {"number":554, "oncePerSessionOnly":true},
			"unique hover 60 seconds": {"number":555, "oncePerSessionOnly":true},
			"unique hover 70 seconds": {"number":556, "oncePerSessionOnly":true},
			"unique hover 80 seconds": {"number":557, "oncePerSessionOnly":true},
			"unique hover 90 seconds": {"number":558, "oncePerSessionOnly":true},
			"unique hover 100 seconds": {"number":559, "oncePerSessionOnly":true},
			"unique hover 110 seconds": {"number":560, "oncePerSessionOnly":true},
			"unique hover 120 seconds": {"number":561, "oncePerSessionOnly":true},
			"unique hover 130 seconds": {"number":562, "oncePerSessionOnly":true},
			"unique hover 140 seconds": {"number":563, "oncePerSessionOnly":true},
			"unique hover 150 seconds": {"number":564, "oncePerSessionOnly":true}};
			
	this.myBSConduit.setActionMap(actionMap);
}

RMInteractionTrackingConduit.Instances = new Array();


//EXPANSION TRACKING

RMInteractionTrackingConduit.prototype.trackingTotalExpandedTime = 0;
RMInteractionTrackingConduit.prototype.trackingPreviousExpandedTime = 0;
RMInteractionTrackingConduit.prototype.trackingExpansionTimerID = 0;
RMInteractionTrackingConduit.prototype.trackingLastExpansionStartedTime = new Date();
RMInteractionTrackingConduit.prototype.trackingCurrentlyExpanded = false;	
			
RMInteractionTrackingConduit.prototype.trackExpansionStart = function()
{

	//Total Expansions
	this.myBSConduit.mappedAction('total expansions');
	
	//Unique Expansions
	this.myBSConduit.mappedAction('unique expansions');
	
	//Expansion Timer Start
	this.trackingPreviousExpandedTime = this.trackingTotalExpandedTime;
	this.trackingLastExpansionStartedTime = new Date();
	if(this.trackingExpansionTimerID != -1)
	{
		clearTimeout(this.trackingExpansionTimerID);
		this.trackingExpansionTimerID = -1;
	}
	
	var thisObject = this;
	var _trackingExpansionTimerCallback = function(thisObject)
	{
		if(!thisObject.trackingCurrentlyExpanded)
		{clearInterval(thisObject.trackingExpansionTimerID); return;}

		thisObject.trackingTotalExpandedTime = thisObject.trackingPreviousExpandedTime + ((new Date()).getTime() - thisObject.trackingLastExpansionStartedTime.getTime());

		for(i = 10; i <= 150;i+=10)
			if(thisObject.trackingTotalExpandedTime >= i*1000) {	
				thisObject.myBSConduit.mappedAction('unique expansions ' + i + ' seconds');
			} 
	
//		debugDiv("Total Expanded Time: " + thisObject.trackingTotalExpandedTime);
	}
	
	this.trackingExpansionTimerID = setInterval(function(){ _trackingExpansionTimerCallback(thisObject)}, 1000);
	
	this.trackingCurrentlyExpanded = true;
}

RMInteractionTrackingConduit.prototype.trackExpansionStop = function()
{
	//Total Expansions
	this.myBSConduit.mappedAction('total collapses');
	
	//Unique Expansions
	this.myBSConduit.mappedAction('unique collapses');
	
	//Expansion Timer Stop
	clearInterval(this.trackingExpansionTimerID);
	this.trackingExpansionTimerID = -1;
	
	this.trackingCurrentlyExpanded = false;
}

//HOVER TRACKING

RMInteractionTrackingConduit.prototype.trackingTotalHoverTime = 0;
RMInteractionTrackingConduit.prototype.trackingPreviousHoverTime = 0;
RMInteractionTrackingConduit.prototype.trackingHoverTimerID = 0;
RMInteractionTrackingConduit.prototype.trackingLastHoverStartedTime;
RMInteractionTrackingConduit.prototype.trackingCurrentlyHovering = false;

//parent.bsTrackingHoverBegin = function(){
//	bsTrackingHoverBegin();
//}

RMInteractionTrackingConduit.prototype.trackHoverBegin = function(){

	//Total Hover Begins
	this.myBSConduit.mappedAction('total hover begins');
	
	//Unique Hover Begins
	this.myBSConduit.mappedAction('unique hover begins');
	
	//Hover Timer Start
	this.trackingPreviousHoverTime = this.trackingTotalHoverTime;
	this.trackingLastHoverStartedTime = new Date();
	if(this.trackingHoverTimerID != -1)
	{
		clearTimeout(this.trackingHoverTimerID);
		this.trackingHoverTimerID = -1;
	}

	//It is necessary to copy this object in order for the callback to have acess to the necessary variables
	
	var thisObject = this;
	var _trackingHoverTimerCallback = function(thisObject)
	{
		if(!thisObject.trackingCurrentlyHovering)
			{clearInterval(thisObject.trackingHoverTimerID); return;}

		thisObject.trackingTotalHoverTime = thisObject.trackingPreviousHoverTime + ((new Date()).getTime() - thisObject.trackingLastHoverStartedTime.getTime());

		for(i = 10; i <= 150;i+=10)
			if(thisObject.trackingTotalHoverTime >= i*1000) {	
				thisObject.myBSConduit.mappedAction('unique hover ' + i + ' seconds');
			} 
			
		//debugDiv("Total Hover Time: " + thisObject.trackingTotalHoverTime);			
	}
	
	this.trackingHoverTimerID = setInterval(function() {_trackingHoverTimerCallback(thisObject)}, 1000);
	
	this.trackingCurrentlyHovering = true;
}

RMInteractionTrackingConduit.prototype.trackHoverEnd = function() {
	//Total Hovers
	this.myBSConduit.mappedAction('total hover ends');
	
	//Unique Hovers
	this.myBSConduit.mappedAction('unique hover ends');
	
	//Hover Timer Stop
	clearInterval(this.trackingHoverTimerID);
	this.trackingHoverTimerID = -1;
	
	this.trackingCurrentlyHovering = false;
}



// VIDEO TRACKING



RMInteractionTrackingConduit.prototype.trackVideoStart = function()
{
	this.myBSConduit.mappedAction('total video starts');
	this.myBSConduit.mappedAction('unique video starts');
}

RMInteractionTrackingConduit.prototype.trackVideoBandwidth = function(rate)
{
	if(rate == 'low')
		this.myBSConduit.mappedAction('unique low bandwidth');
	if(rate == 'medium')
		this.myBSConduit.mappedAction('unique medium bandwidth');
	if(rate == 'high')
		this.myBSConduit.mappedAction('unique high bandwidth');
}

RMInteractionTrackingConduit.prototype.trackVideoProgress = function(percentComplete)
{
	if(percentComplete == 100)
		this.myBSConduit.mappedAction('unique video 100%');
	else if(percentComplete >= 80)
		this.myBSConduit.mappedAction('unique video 80%');
	else if(percentComplete >= 60)
		this.myBSConduit.mappedAction('unique video 60%');
	else if(percentComplete >= 40)
		this.myBSConduit.mappedAction('unique video 40%');
	else if(percentComplete >= 20)
		this.myBSConduit.mappedAction('unique video 20%');
}

RMInteractionTrackingConduit.prototype.trackVideoManualStop = function()
{
	this.myBSConduit.mappedAction('total video manual stops');
	this.myBSConduit.mappedAction('unique video manual stops');
}

RMInteractionTrackingConduit.prototype.trackVideoManualReplay = function()
{
	this.myBSConduit.mappedAction('total video replays');
}

//CLICK-TRACKING
RMInteractionTrackingConduit.prototype.trackClick = function()
{
	if(typeof(clickTarget) != "undefined")
		this.myBSConduit.click(clickURL,  clickTarget);
	else
		this.myBSConduit.click(clickURL);
}
