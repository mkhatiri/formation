(function() {
  var creativeDefinition = {
    customScriptUrl: '',
    isDynamic: false,
    delayedImpression: false,
    standardEventIds: {
      DISPLAY_TIMER: '72',
      INTERACTION_TIMER: '73',
      INTERACTIVE_IMPRESSION: '74',
      MANUAL_CLOSE: '75',
      BACKUP_IMAGE_IMPRESSION: '76',
      EXPAND_TIMER: '77',
      FULL_SCREEN: '78',
      VIDEO_PLAY: '79',
      VIDEO_VIEW_TIMER: '80',
      VIDEO_COMPLETE: '81',
      VIDEO_INTERACTION: '82',
      VIDEO_PAUSE: '83',
      VIDEO_MUTE: '84',
      VIDEO_REPLAY: '85',
      VIDEO_MIDPOINT: '86',
      VIDEO_STOP: '87',
      VIDEO_UNMUTE: '88',
      DYNAMIC_CREATIVE_IMPRESSION: '',
      HTML5_CREATIVE_IMPRESSION: ''
    },
    exitEvents: [
      {
        name: 'Get Involved',
        reportingId: '23131226',
        url: 'http://partners.wsj.com/metlife/multipliers/',
        targetWindow: '_blank',
        windowProperties: ''
      },
      {
        name: 'Multipliers of Prosperity clicked',
        reportingId: '23130986',
        url: 'http://partners.wsj.com/metlife/multipliers/',
        targetWindow: '_blank',
        windowProperties: ''
      }
    ],
    timerEvents: [
    ],
    counterEvents: [
      {
        name: 'Played Video',
        reportingId: '23130746',
        videoData: null
      }
    ],
    childFiles: [
      {
        name: 'btn_cta.gif',
        url: '/ads/richmedia/studio/pv2/42822264/20160427120058716/img/btn_cta.gif',
        isVideo: false,
        transcodeInformation: null
      },
      {
        name: 'bkgd.jpg',
        url: '/ads/richmedia/studio/pv2/42822264/20160427120058716/img/bkgd.jpg',
        isVideo: false,
        transcodeInformation: null
      },
      {
        name: 'main.css',
        url: '/ads/richmedia/studio/pv2/42822264/20160427120058716/css/main.css',
        isVideo: false,
        transcodeInformation: null
      },
      {
        name: 'video-poster.jpg',
        url: '/ads/richmedia/studio/pv2/42822264/20160427120058716/img/video-poster.jpg',
        isVideo: false,
        transcodeInformation: null
      },
      {
        name: 'ic_restore_black_24px.svg',
        url: '/ads/richmedia/studio/pv2/42822264/20160427120058716/img/ic_restore_black_24px.svg',
        isVideo: false,
        transcodeInformation: null
      },
      {
        name: 'normalize.min.css',
        url: '/ads/richmedia/studio/pv2/42822264/20160427120058716/css/normalize.min.css',
        isVideo: false,
        transcodeInformation: null
      },
      {
        name: 'backup.jpg',
        url: '/ads/richmedia/studio/pv2/42822264/20160427120058716/img/backup.jpg',
        isVideo: false,
        transcodeInformation: null
      },
      {
        name: 'btn_cta_over.gif',
        url: '/ads/richmedia/studio/pv2/42822264/20160427120058716/img/btn_cta_over.gif',
        isVideo: false,
        transcodeInformation: null
      },
      {
        name: 'ic_volume_up_black_24px.svg',
        url: '/ads/richmedia/studio/pv2/42822264/20160427120058716/img/ic_volume_up_black_24px.svg',
        isVideo: false,
        transcodeInformation: null
      },
      {
        name: 'main.js',
        url: '/ads/richmedia/studio/pv2/42822264/20160427120058716/js/main.js',
        isVideo: false,
        transcodeInformation: null
      },
      {
        name: 'ic_volume_off_black_24px.svg',
        url: '/ads/richmedia/studio/pv2/42822264/20160427120058716/img/ic_volume_off_black_24px.svg',
        isVideo: false,
        transcodeInformation: null
      }
    ],
    videoFiles: [
    ],
    videoEntries: [
    ],
    primaryAssets: [
      {
        id: '42822832',
        artworkType: 'HTML5',
        displayType: 'BANNER',
        width: '300',
        height: '1050',
        servingPath: '/ads/richmedia/studio/pv2/42822264/20160427120058716/index.html',
        zIndex: '1000000',
        customCss: '',
        flashArtworkTypeData: null,
        htmlArtworkTypeData: {
          isTransparent: false,
          sdkVersion: '01_113' // Duplicating sdk version in subsequent field as version format not the same.
        },
        floatingDisplayTypeData: null,
        expandingDisplayTypeData: null,
        imageGalleryTypeData: null,
        pageSettings:null,
layoutsConfig: null,
layoutsApi: null
      }
    ]
  }
  var rendererDisplayType = '';
  rendererDisplayType += 'html_';
  var rendererFormat = 'inpage';
  var rendererName = rendererDisplayType + rendererFormat;

  var creativeId = '103166899466';
  var adId = '0';
  var templateVersion = '200_129';
  var studioObjects = window['studioV2'] = window['studioV2'] || {};
  var creativeObjects = studioObjects['creatives'] = studioObjects['creatives'] || {};
  var creativeKey = [creativeId, adId].join('_');
  var creative = creativeObjects[creativeKey] = creativeObjects[creativeKey] || {};
  creative['creativeDefinition'] = creativeDefinition;
  var adResponses = creative['adResponses'] || [];
  for (var i = 0; i < adResponses.length; i++) {
    adResponses[i].creativeDto && adResponses[i].creativeDto.csiEvents &&
        (adResponses[i].creativeDto.csiEvents['pe'] =
            adResponses[i].creativeDto.csiEvents['pe'] || (+new Date));
  }
  var loadedLibraries = studioObjects['loadedLibraries'] = studioObjects['loadedLibraries'] || {};
  var versionedLibrary = loadedLibraries[templateVersion] = loadedLibraries[templateVersion] || {};
  var typedLibrary = versionedLibrary[rendererName] = versionedLibrary[rendererName] || {};
  if (typedLibrary['bootstrap']) {
    typedLibrary.bootstrap();
  }
})();
