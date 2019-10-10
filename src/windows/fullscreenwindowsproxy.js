cordova.commandProxy.add("screenResize", {
	uwp: function (successCallback, errorCallback, args) {
		if (cordova.platformId == 'windows') {
			FullscreenWindows.FullscreenWindowsClass.performFullscreen(); 
		} 
	}
}); 