//debugging div
var debugTimeout=0;
function debugDiv(text){
  
  if(typeof(debugConsole) == 'undefined') return;
  if(debugConsole != true) return;
  
  if (debugTimeout==0){
    
    var styleData = 'position: absolute; top: 100px; left: 600px; width: 400px; height: 400px; padding:2px 3px 2px 3px;background-color: rgb(0, 0, 0); overflow-y: scroll; font-family: Courier, "Courier New", monospace; color: #cccccc';
    
    var debugID = "debugDiv";  
    var newdiv = document.createElement('div');
    newdiv.innerHTML = new Date() + " <span style=\"color:#00CC00\">" + text + "</span>";
    
    newdiv.setAttribute('id', debugID);
    newdiv.setAttribute('style', styleData);
    //if (newdiv.getAttribute('style') != styleData)newdiv.setAttribute('cssText', styleData);
    
    document.body.appendChild(newdiv);
    debugTimeout = setTimeout('removeDiv()', 10000);
  }
  else{
    clearTimeout(debugTimeout);
    var currDiv = document.getElementById("debugDiv");
    currDiv.innerHTML = currDiv.innerHTML + "<br>" + new Date() + " <span style=\"color:#00CC00\">" + text + "</span>";
	currDiv.scrollTop = currDiv.scrollHeight;
    debugTimeout = setTimeout('removeDiv()', 10000);
  }
}

function removeDiv(){
    document.body.removeChild(document.getElementById("debugDiv"));
    debugTimeout=0;
}

//Core functionality
function BluestreakConduit(siteid, adid, clickRedirect){
	this.subDomain = "http://s0b.bluestreak.com/";
	this.siteid = siteid;
	this.adid = adid;
	this.clickRedirect = clickRedirect;
	this.totalOutboundCalls = 0;
	this.totalOutboundCallsMax = 500;
}

BluestreakConduit.prototype.setActionMap = function setActionMap(actionMap)
{
	this.actionMap = actionMap;
}

BluestreakConduit.prototype.click = function click(url, clickTarget){
	
  if (typeof(inDapIF) != "undefined") {
    var i = new Image(1,1);
    i.src = this.clickRedirect;
	this.totalOutboundCalls++;
    if(clickTarget == "new" || clickTarget == "_blank"){
          window.open(this.subDomain + 'ix.e?tr&s=' + this.siteid + '&a=' + this.adid + '&u=' + escape(url), '', '');
    } 
    else parent.window.location.href = 'http://' + this.subDomain + '/ix.e?tr&s=' + this.siteid + '&a=' + this.adid + '&u=' + escape(url);	
  } 
  else {
    if(clickTarget == "new" || clickTarget == "_blank"){
          window.open(this.subDomain + 'ix.e?tr&s=' + this.siteid + '&a=' + this.adid + '&u=' + escape(url),'','');
    }
    else top.window.location.href = 'http://' + this.subDomain + 'ix.e?hr&s=' + this.siteid + '&a=' + this.adid + '&u=' + escape(url);
  }
}


BluestreakConduit.prototype.sendStat = BluestreakConduit.prototype.action = function sendStat(actionNum)
{
    if(typeof(turnOffRMInteractionTracking) != "undefined" && turnOffRMInteractionTracking == true) return;
	if(this.totalOutboundCalls >= this.totalOutboundCallsMax)
		return;
    var i = new Image(1,1);
    debugDiv("Action: " + actionNum);
    i.src = this.subDomain + "ix.e?px&s=" + this.siteid + "&a=" + this.adid + "&t=" + actionNum + "&rand=" + 1000*Math.random();
	
	this.totalOutboundCalls++;
}

BluestreakConduit.prototype.mappedAction = function mappedAction(actionName){
	if(typeof(turnOffRMInteractionTracking) != "undefined" && turnOffRMInteractionTracking == true) return;
	if(this.totalOutboundCalls >= this.totalOutboundCallsMax)
		return;
	
	if(typeof(this.actionMap[actionName]) != "undefined")
	{
		if(!(this.actionMap[actionName].oncePerSessionOnly && this.actionMap[actionName]._alreadyCalled))
		{
			//if(window.console)window.console.log("BluestreakConduit.prototype.mappedAction("+actionName+")");
		    var i = new Image(1,1);
			var actionNum  = this.actionMap[actionName].number;
			
			debugDiv('Action: "' + actionName + '" (ID: ' + actionNum + ')');
			i.src = this.subDomain + "ix.e?px&s=" + this.siteid + "&a=" + this.adid + "&t=" + actionNum + "&rand=" + 1000*Math.random();
			
			this.actionMap[actionName]._alreadyCalled = true;
			this.totalOutboundCalls++;
		}
	}
}