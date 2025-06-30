"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["102"], {
941: (function (module, __unused_webpack_exports, __webpack_require__) {
/**
 * Webflow: Interactions 2
 */ 
var Webflow = __webpack_require__(3949);
var ix2 = __webpack_require__(6011);
ix2.setEnv(Webflow.env);
Webflow.define('ix2', module.exports = function() {
    return ix2;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYmZsb3ctaXgyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV2ViZmxvdzogSW50ZXJhY3Rpb25zIDJcbiAqL1xudmFyIFdlYmZsb3cgPSByZXF1aXJlKCcuL3dlYmZsb3ctbGliJyk7XG52YXIgaXgyID0gcmVxdWlyZSgnQHBhY2thZ2VzL3N5c3RlbXMvaXgyL2VuZ2luZScpO1xuXG5peDIuc2V0RW52KFdlYmZsb3cuZW52KTtcblxuV2ViZmxvdy5kZWZpbmUoXG4gICdpeDInLFxuICAobW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGl4MjtcbiAgfSlcbik7XG4iXSwibmFtZXMiOlsiV2ViZmxvdyIsInJlcXVpcmUiLCJpeDIiLCJzZXRFbnYiLCJlbnYiLCJkZWZpbmUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Q0FFQztBQUNELElBQUlBLFVBQVVDLFFBQVE7QUFDdEIsSUFBSUMsTUFBTUQsUUFBUTtBQUVsQkMsSUFBSUMsTUFBTSxDQUFDSCxRQUFRSSxHQUFHO0FBRXRCSixRQUFRSyxNQUFNLENBQ1osT0FDQ0MsT0FBT0MsT0FBTyxHQUFHO0lBQ2hCLE9BQU9MO0FBQ1QifQ==

}),
3946: (function (__unused_webpack_module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    actionListPlaybackChanged: function() {
        return actionListPlaybackChanged;
    },
    animationFrameChanged: function() {
        return animationFrameChanged;
    },
    clearRequested: function() {
        return clearRequested;
    },
    elementStateChanged: function() {
        return elementStateChanged;
    },
    eventListenerAdded: function() {
        return eventListenerAdded;
    },
    eventStateChanged: function() {
        return eventStateChanged;
    },
    instanceAdded: function() {
        return instanceAdded;
    },
    instanceRemoved: function() {
        return instanceRemoved;
    },
    instanceStarted: function() {
        return instanceStarted;
    },
    mediaQueriesDefined: function() {
        return mediaQueriesDefined;
    },
    parameterChanged: function() {
        return parameterChanged;
    },
    playbackRequested: function() {
        return playbackRequested;
    },
    previewRequested: function() {
        return previewRequested;
    },
    rawDataImported: function() {
        return rawDataImported;
    },
    sessionInitialized: function() {
        return sessionInitialized;
    },
    sessionStarted: function() {
        return sessionStarted;
    },
    sessionStopped: function() {
        return sessionStopped;
    },
    stopRequested: function() {
        return stopRequested;
    },
    testFrameRendered: function() {
        return testFrameRendered;
    },
    viewportWidthChanged: function() {
        return viewportWidthChanged;
    }
});
const _sharedconstants = __webpack_require__(7087);
const _shared = __webpack_require__(9468);
const { IX2_RAW_DATA_IMPORTED, IX2_SESSION_INITIALIZED, IX2_SESSION_STARTED, IX2_SESSION_STOPPED, IX2_PREVIEW_REQUESTED, IX2_PLAYBACK_REQUESTED, IX2_STOP_REQUESTED, IX2_CLEAR_REQUESTED, IX2_EVENT_LISTENER_ADDED, IX2_TEST_FRAME_RENDERED, IX2_EVENT_STATE_CHANGED, IX2_ANIMATION_FRAME_CHANGED, IX2_PARAMETER_CHANGED, IX2_INSTANCE_ADDED, IX2_INSTANCE_STARTED, IX2_INSTANCE_REMOVED, IX2_ELEMENT_STATE_CHANGED, IX2_ACTION_LIST_PLAYBACK_CHANGED, IX2_VIEWPORT_WIDTH_CHANGED, IX2_MEDIA_QUERIES_DEFINED } = _sharedconstants.IX2EngineActionTypes;
const { reifyState } = _shared.IX2VanillaUtils;
const rawDataImported = (rawData)=>({
        type: IX2_RAW_DATA_IMPORTED,
        payload: {
            ...reifyState(rawData)
        }
    });
const sessionInitialized = ({ hasBoundaryNodes, reducedMotion })=>({
        type: IX2_SESSION_INITIALIZED,
        payload: {
            hasBoundaryNodes,
            reducedMotion
        }
    });
const sessionStarted = ()=>({
        type: IX2_SESSION_STARTED
    });
const sessionStopped = ()=>({
        type: IX2_SESSION_STOPPED
    });
const previewRequested = ({ rawData, defer })=>({
        type: IX2_PREVIEW_REQUESTED,
        payload: {
            defer,
            rawData
        }
    });
const playbackRequested = ({ actionTypeId = _sharedconstants.ActionTypeConsts.GENERAL_START_ACTION, actionListId, actionItemId, eventId, allowEvents, immediate, testManual, verbose, rawData })=>({
        type: IX2_PLAYBACK_REQUESTED,
        payload: {
            actionTypeId,
            actionListId,
            actionItemId,
            testManual,
            eventId,
            allowEvents,
            immediate,
            verbose,
            rawData
        }
    });
const stopRequested = (actionListId)=>({
        type: IX2_STOP_REQUESTED,
        payload: {
            actionListId
        }
    });
const clearRequested = ()=>({
        type: IX2_CLEAR_REQUESTED
    });
const eventListenerAdded = (target, listenerParams)=>({
        type: IX2_EVENT_LISTENER_ADDED,
        payload: {
            target,
            listenerParams
        }
    });
const testFrameRendered = (step = 1)=>({
        type: IX2_TEST_FRAME_RENDERED,
        payload: {
            step
        }
    });
const eventStateChanged = (stateKey, newState)=>({
        type: IX2_EVENT_STATE_CHANGED,
        payload: {
            stateKey,
            newState
        }
    });
const animationFrameChanged = (now, parameters)=>({
        type: IX2_ANIMATION_FRAME_CHANGED,
        payload: {
            now,
            parameters
        }
    });
const parameterChanged = (key, value)=>({
        type: IX2_PARAMETER_CHANGED,
        payload: {
            key,
            value
        }
    });
const instanceAdded = (options)=>({
        type: IX2_INSTANCE_ADDED,
        payload: {
            ...options
        }
    });
const instanceStarted = (instanceId, time)=>({
        type: IX2_INSTANCE_STARTED,
        payload: {
            instanceId,
            time
        }
    });
const instanceRemoved = (instanceId)=>({
        type: IX2_INSTANCE_REMOVED,
        payload: {
            instanceId
        }
    });
const elementStateChanged = (elementId, actionTypeId, current, actionItem)=>({
        type: IX2_ELEMENT_STATE_CHANGED,
        payload: {
            elementId,
            actionTypeId,
            current,
            actionItem
        }
    });
const actionListPlaybackChanged = ({ actionListId, isPlaying })=>({
        type: IX2_ACTION_LIST_PLAYBACK_CHANGED,
        payload: {
            actionListId,
            isPlaying
        }
    });
const viewportWidthChanged = ({ width, mediaQueries })=>({
        type: IX2_VIEWPORT_WIDTH_CHANGED,
        payload: {
            width,
            mediaQueries
        }
    });
const mediaQueriesDefined = ()=>({
        type: IX2_MEDIA_QUERIES_DEFINED
    });

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIklYMkVuZ2luZUFjdGlvbnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWN0aW9uVHlwZUNvbnN0cyxcbiAgSVgyRW5naW5lQWN0aW9uVHlwZXMsXG59IGZyb20gJ0BwYWNrYWdlcy9zeXN0ZW1zL2l4Mi9zaGFyZWQtY29uc3RhbnRzJztcblxuaW1wb3J0IHtJWDJWYW5pbGxhVXRpbHN9IGZyb20gJ0BwYWNrYWdlcy9zeXN0ZW1zL2l4Mi9zaGFyZWQnO1xuXG5pbXBvcnQgdHlwZSB7XG4gIEFjdGlvbkxpc3RJZCxcbiAgQWN0aW9uSWQsXG4gIEV2ZW50SWQsXG4gIENvbnRpbnVvdXNQYXJhbWV0ZXJHcm91cElkLFxuICBBY3Rpb25UeXBlSWRUeXBlLFxuICBBY3Rpb25MaXN0c1R5cGUsXG4gIEV2ZW50c1R5cGUsXG4gIEV2ZW50VHlwZSxcbn0gZnJvbSAnQHBhY2thZ2VzL3N5c3RlbXMvaXgyL3R5cGVzLWNvcmUnO1xuaW1wb3J0IHtCcmVha3BvaW50SUR9IGZyb20gJ0BwYWNrYWdlcy9zeXN0ZW1zL3N0eWxlL3R5cGVzJztcblxuY29uc3Qge1xuICBJWDJfUkFXX0RBVEFfSU1QT1JURUQsXG4gIElYMl9TRVNTSU9OX0lOSVRJQUxJWkVELFxuICBJWDJfU0VTU0lPTl9TVEFSVEVELFxuICBJWDJfU0VTU0lPTl9TVE9QUEVELFxuICBJWDJfUFJFVklFV19SRVFVRVNURUQsXG4gIElYMl9QTEFZQkFDS19SRVFVRVNURUQsXG4gIElYMl9TVE9QX1JFUVVFU1RFRCxcbiAgSVgyX0NMRUFSX1JFUVVFU1RFRCxcbiAgSVgyX0VWRU5UX0xJU1RFTkVSX0FEREVELFxuICBJWDJfVEVTVF9GUkFNRV9SRU5ERVJFRCxcbiAgSVgyX0VWRU5UX1NUQVRFX0NIQU5HRUQsXG4gIElYMl9BTklNQVRJT05fRlJBTUVfQ0hBTkdFRCxcbiAgSVgyX1BBUkFNRVRFUl9DSEFOR0VELFxuICBJWDJfSU5TVEFOQ0VfQURERUQsXG4gIElYMl9JTlNUQU5DRV9TVEFSVEVELFxuICBJWDJfSU5TVEFOQ0VfUkVNT1ZFRCxcbiAgSVgyX0VMRU1FTlRfU1RBVEVfQ0hBTkdFRCxcbiAgSVgyX0FDVElPTl9MSVNUX1BMQVlCQUNLX0NIQU5HRUQsXG4gIElYMl9WSUVXUE9SVF9XSURUSF9DSEFOR0VELFxuICBJWDJfTUVESUFfUVVFUklFU19ERUZJTkVELFxufSA9IElYMkVuZ2luZUFjdGlvblR5cGVzO1xuXG5jb25zdCB7cmVpZnlTdGF0ZX0gPSBJWDJWYW5pbGxhVXRpbHM7XG5cbmV4cG9ydCB0eXBlIElYMlJhd0RhdGEgPSB7XG4gIGV2ZW50czogRXZlbnRzVHlwZTtcbiAgYWN0aW9uTGlzdHM6IEFjdGlvbkxpc3RzVHlwZTtcbiAgc2l0ZToge21lZGlhUXVlcmllczoge2tleTogQnJlYWtwb2ludElEOyBtaW46IG51bWJlcjsgbWF4OiBudW1iZXJ9W119O1xufTtcblxuZXhwb3J0IHR5cGUgcmF3RGF0YUltcG9ydGVkUGF5bG9hZCA9IHtcbiAgaXhEYXRhOiB7XG4gICAgZXZlbnRzOiBFdmVudHNUeXBlIHwgdW5kZWZpbmVkO1xuICAgIGFjdGlvbkxpc3RzOiBBY3Rpb25MaXN0c1R5cGUgfCB1bmRlZmluZWQ7XG4gICAgZXZlbnRUeXBlTWFwOiB7W2sgaW4gRXZlbnRUeXBlWydldmVudFR5cGVJZCddXToge1trZXk6IHN0cmluZ106IEV2ZW50VHlwZX19O1xuICAgIG1lZGlhUXVlcmllczogSVgyUmF3RGF0YVsnc2l0ZSddWydtZWRpYVF1ZXJpZXMnXTtcbiAgICBtZWRpYVF1ZXJ5S2V5czogQnJlYWtwb2ludElEW107XG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgcmF3RGF0YUltcG9ydGVkID0gKHJhd0RhdGE6IElYMlJhd0RhdGEpID0+ICh7XG4gIHR5cGU6IElYMl9SQVdfREFUQV9JTVBPUlRFRCxcbiAgcGF5bG9hZDoge1xuICAgIC4uLnJlaWZ5U3RhdGUocmF3RGF0YSksXG4gIH0sXG59KTtcblxuZXhwb3J0IHR5cGUgc2Vzc2lvbkluaXRpYWxpemVkUGF5bG9hZCA9IHtcbiAgaGFzQm91bmRhcnlOb2RlczogYm9vbGVhbjtcbiAgcmVkdWNlZE1vdGlvbjogYm9vbGVhbjtcbn07XG5cbmV4cG9ydCBjb25zdCBzZXNzaW9uSW5pdGlhbGl6ZWQgPSAoe1xuICBoYXNCb3VuZGFyeU5vZGVzLFxuICByZWR1Y2VkTW90aW9uLFxufTogc2Vzc2lvbkluaXRpYWxpemVkUGF5bG9hZCkgPT4gKHtcbiAgdHlwZTogSVgyX1NFU1NJT05fSU5JVElBTElaRUQsXG4gIHBheWxvYWQ6IHtcbiAgICBoYXNCb3VuZGFyeU5vZGVzLFxuICAgIHJlZHVjZWRNb3Rpb24sXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IHNlc3Npb25TdGFydGVkID0gKCkgPT4gKHtcbiAgdHlwZTogSVgyX1NFU1NJT05fU1RBUlRFRCxcbn0pO1xuXG5leHBvcnQgY29uc3Qgc2Vzc2lvblN0b3BwZWQgPSAoKSA9PiAoe1xuICB0eXBlOiBJWDJfU0VTU0lPTl9TVE9QUEVELFxufSk7XG5cbmV4cG9ydCB0eXBlIHByZXZpZXdSZXF1ZXN0ZWRQYXlsb2FkID0ge1xuICByYXdEYXRhOiBJWDJSYXdEYXRhO1xuICBkZWZlcjogYm9vbGVhbjtcbn07XG5cbmV4cG9ydCBjb25zdCBwcmV2aWV3UmVxdWVzdGVkID0gKHtcbiAgcmF3RGF0YSxcbiAgZGVmZXIsXG59OiBwcmV2aWV3UmVxdWVzdGVkUGF5bG9hZCkgPT4gKHtcbiAgdHlwZTogSVgyX1BSRVZJRVdfUkVRVUVTVEVELFxuICBwYXlsb2FkOiB7XG4gICAgZGVmZXIsXG4gICAgcmF3RGF0YSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgdHlwZSBwbGF5YmFja1JlcXVlc3RlZFBheWxvYWQgPSB7XG4gIGFjdGlvblR5cGVJZDpcbiAgICB8IHR5cGVvZiBBY3Rpb25UeXBlQ29uc3RzLkdFTkVSQUxfU1RBUlRfQUNUSU9OXG4gICAgfCB0eXBlb2YgQWN0aW9uVHlwZUNvbnN0cy5HRU5FUkFMX0NPTlRJTlVPVVNfQUNUSU9OO1xuICBhY3Rpb25MaXN0SWQ6IEFjdGlvbkxpc3RJZDtcbiAgYWN0aW9uSXRlbUlkOiBBY3Rpb25JZDtcbiAgZXZlbnRJZDogRXZlbnRJZDtcbiAgYWxsb3dFdmVudHM6IGJvb2xlYW47XG4gIGltbWVkaWF0ZTogYm9vbGVhbjtcbiAgdGVzdE1hbnVhbD86IGJvb2xlYW47XG4gIHZlcmJvc2U6IGJvb2xlYW47XG4gIHJhd0RhdGE6IElYMlJhd0RhdGE7XG59O1xuXG5leHBvcnQgY29uc3QgcGxheWJhY2tSZXF1ZXN0ZWQgPSAoe1xuICBhY3Rpb25UeXBlSWQgPSBBY3Rpb25UeXBlQ29uc3RzLkdFTkVSQUxfU1RBUlRfQUNUSU9OLFxuICBhY3Rpb25MaXN0SWQsXG4gIGFjdGlvbkl0ZW1JZCxcbiAgZXZlbnRJZCxcbiAgYWxsb3dFdmVudHMsXG4gIGltbWVkaWF0ZSxcbiAgdGVzdE1hbnVhbCxcbiAgdmVyYm9zZSxcbiAgcmF3RGF0YSxcbn06IHBsYXliYWNrUmVxdWVzdGVkUGF5bG9hZCkgPT4gKHtcbiAgdHlwZTogSVgyX1BMQVlCQUNLX1JFUVVFU1RFRCxcbiAgcGF5bG9hZDoge1xuICAgIGFjdGlvblR5cGVJZCxcbiAgICBhY3Rpb25MaXN0SWQsXG4gICAgYWN0aW9uSXRlbUlkLFxuICAgIHRlc3RNYW51YWwsXG4gICAgZXZlbnRJZCxcbiAgICBhbGxvd0V2ZW50cyxcbiAgICBpbW1lZGlhdGUsXG4gICAgdmVyYm9zZSxcbiAgICByYXdEYXRhLFxuICB9LFxufSk7XG5cbmV4cG9ydCB0eXBlIHN0b3BSZXF1ZXN0ZWRQYXlsb2FkID0ge1xuICBhY3Rpb25MaXN0SWQ6IEFjdGlvbkxpc3RJZDtcbn07XG5cbmV4cG9ydCBjb25zdCBzdG9wUmVxdWVzdGVkID0gKFxuICBhY3Rpb25MaXN0SWQ6IHN0b3BSZXF1ZXN0ZWRQYXlsb2FkWydhY3Rpb25MaXN0SWQnXVxuKSA9PiAoe1xuICB0eXBlOiBJWDJfU1RPUF9SRVFVRVNURUQsXG4gIHBheWxvYWQ6IHtcbiAgICBhY3Rpb25MaXN0SWQsXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IGNsZWFyUmVxdWVzdGVkID0gKCkgPT4gKHtcbiAgdHlwZTogSVgyX0NMRUFSX1JFUVVFU1RFRCxcbn0pO1xuXG5leHBvcnQgdHlwZSBldmVudExpc3RlbmVyQWRkZWRQYXlsb2FkID0ge1xuICB0YXJnZXQ6IGFueTtcbiAgbGlzdGVuZXJQYXJhbXM6IGFueTtcbn07XG5cbmV4cG9ydCBjb25zdCBldmVudExpc3RlbmVyQWRkZWQgPSAoXG4gIHRhcmdldDogZXZlbnRMaXN0ZW5lckFkZGVkUGF5bG9hZFsndGFyZ2V0J10sXG4gIGxpc3RlbmVyUGFyYW1zOiBldmVudExpc3RlbmVyQWRkZWRQYXlsb2FkWydsaXN0ZW5lclBhcmFtcyddXG4pID0+ICh7XG4gIHR5cGU6IElYMl9FVkVOVF9MSVNURU5FUl9BRERFRCxcbiAgcGF5bG9hZDoge1xuICAgIHRhcmdldCxcbiAgICBsaXN0ZW5lclBhcmFtcyxcbiAgfSxcbn0pO1xuXG5leHBvcnQgdHlwZSB0ZXN0RnJhbWVSZW5kZXJlZFBheWxvYWQgPSB7XG4gIHN0ZXA/OiBudW1iZXI7XG59O1xuXG5leHBvcnQgY29uc3QgdGVzdEZyYW1lUmVuZGVyZWQgPSAoXG4gIHN0ZXA6IHRlc3RGcmFtZVJlbmRlcmVkUGF5bG9hZFsnc3RlcCddID0gMVxuKSA9PiAoe1xuICB0eXBlOiBJWDJfVEVTVF9GUkFNRV9SRU5ERVJFRCxcbiAgcGF5bG9hZDoge1xuICAgIHN0ZXAsXG4gIH0sXG59KTtcblxuZXhwb3J0IHR5cGUgZXZlbnRTdGF0ZUNoYW5nZWRQYXlsb2FkID0ge1xuICBzdGF0ZUtleTogYW55O1xuICBuZXdTdGF0ZTogYW55O1xufTtcblxuZXhwb3J0IGNvbnN0IGV2ZW50U3RhdGVDaGFuZ2VkID0gKFxuICBzdGF0ZUtleTogZXZlbnRTdGF0ZUNoYW5nZWRQYXlsb2FkWydzdGF0ZUtleSddLFxuICBuZXdTdGF0ZTogZXZlbnRTdGF0ZUNoYW5nZWRQYXlsb2FkWyduZXdTdGF0ZSddXG4pID0+ICh7XG4gIHR5cGU6IElYMl9FVkVOVF9TVEFURV9DSEFOR0VELFxuICBwYXlsb2FkOiB7XG4gICAgc3RhdGVLZXksXG4gICAgbmV3U3RhdGUsXG4gIH0sXG59KTtcblxuZXhwb3J0IHR5cGUgYW5pbWF0aW9uRnJhbWVDaGFuZ2VkUGF5bG9hZCA9IHtcbiAgbm93OiBudW1iZXI7XG4gIHBhcmFtZXRlcnM6IGFueTtcbn07XG5cbmV4cG9ydCBjb25zdCBhbmltYXRpb25GcmFtZUNoYW5nZWQgPSAoXG4gIG5vdzogYW5pbWF0aW9uRnJhbWVDaGFuZ2VkUGF5bG9hZFsnbm93J10sXG4gIHBhcmFtZXRlcnM6IGFuaW1hdGlvbkZyYW1lQ2hhbmdlZFBheWxvYWRbJ3BhcmFtZXRlcnMnXVxuKSA9PiAoe1xuICB0eXBlOiBJWDJfQU5JTUFUSU9OX0ZSQU1FX0NIQU5HRUQsXG4gIHBheWxvYWQ6IHtcbiAgICBub3csXG4gICAgcGFyYW1ldGVycyxcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgcGFyYW1ldGVyQ2hhbmdlZCA9IChcbiAga2V5OiBDb250aW51b3VzUGFyYW1ldGVyR3JvdXBJZCxcbiAgdmFsdWU6IG51bWJlclxuKSA9PiAoe1xuICB0eXBlOiBJWDJfUEFSQU1FVEVSX0NIQU5HRUQsXG4gIHBheWxvYWQ6IHtcbiAgICBrZXksXG4gICAgdmFsdWUsXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IGluc3RhbmNlQWRkZWQgPSAob3B0aW9uczogYW55KSA9PiAoe1xuICB0eXBlOiBJWDJfSU5TVEFOQ0VfQURERUQsXG4gIHBheWxvYWQ6IHtcbiAgICAuLi5vcHRpb25zLFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBpbnN0YW5jZVN0YXJ0ZWQgPSAoaW5zdGFuY2VJZDogc3RyaW5nLCB0aW1lOiBudW1iZXIpID0+ICh7XG4gIHR5cGU6IElYMl9JTlNUQU5DRV9TVEFSVEVELFxuICBwYXlsb2FkOiB7XG4gICAgaW5zdGFuY2VJZCxcbiAgICB0aW1lLFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBpbnN0YW5jZVJlbW92ZWQgPSAoaW5zdGFuY2VJZDogc3RyaW5nKSA9PiAoe1xuICB0eXBlOiBJWDJfSU5TVEFOQ0VfUkVNT1ZFRCxcbiAgcGF5bG9hZDoge1xuICAgIGluc3RhbmNlSWQsXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IGVsZW1lbnRTdGF0ZUNoYW5nZWQgPSAoXG4gIGVsZW1lbnRJZDogYW55LFxuICBhY3Rpb25UeXBlSWQ6IEFjdGlvblR5cGVJZFR5cGUsXG4gIGN1cnJlbnQ6IGFueSxcbiAgYWN0aW9uSXRlbTogYW55XG4pID0+ICh7XG4gIHR5cGU6IElYMl9FTEVNRU5UX1NUQVRFX0NIQU5HRUQsXG4gIHBheWxvYWQ6IHtcbiAgICBlbGVtZW50SWQsXG4gICAgYWN0aW9uVHlwZUlkLFxuICAgIGN1cnJlbnQsXG4gICAgYWN0aW9uSXRlbSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgdHlwZSBhY3Rpb25MaXN0UGxheWJhY2tDaGFuZ2VkUGF5bG9hZCA9IHtcbiAgYWN0aW9uTGlzdElkOiBBY3Rpb25MaXN0SWQ7XG4gIGlzUGxheWluZzogYm9vbGVhbjtcbn07XG5cbmV4cG9ydCBjb25zdCBhY3Rpb25MaXN0UGxheWJhY2tDaGFuZ2VkID0gKHtcbiAgYWN0aW9uTGlzdElkLFxuICBpc1BsYXlpbmcsXG59OiBhY3Rpb25MaXN0UGxheWJhY2tDaGFuZ2VkUGF5bG9hZCkgPT4gKHtcbiAgdHlwZTogSVgyX0FDVElPTl9MSVNUX1BMQVlCQUNLX0NIQU5HRUQsXG4gIHBheWxvYWQ6IHtcbiAgICBhY3Rpb25MaXN0SWQsXG4gICAgaXNQbGF5aW5nLFxuICB9LFxufSk7XG5cbmV4cG9ydCB0eXBlIHZpZXdwb3J0V2lkdGhDaGFuZ2VkUGF5bG9hZCA9IHtcbiAgd2lkdGg6IG51bWJlcjtcbiAgbWVkaWFRdWVyaWVzOiBhbnk7XG59O1xuXG5leHBvcnQgY29uc3Qgdmlld3BvcnRXaWR0aENoYW5nZWQgPSAoe1xuICB3aWR0aCxcbiAgbWVkaWFRdWVyaWVzLFxufTogdmlld3BvcnRXaWR0aENoYW5nZWRQYXlsb2FkKSA9PiAoe1xuICB0eXBlOiBJWDJfVklFV1BPUlRfV0lEVEhfQ0hBTkdFRCxcbiAgcGF5bG9hZDoge1xuICAgIHdpZHRoLFxuICAgIG1lZGlhUXVlcmllcyxcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgbWVkaWFRdWVyaWVzRGVmaW5lZCA9ICgpID0+ICh7XG4gIHR5cGU6IElYMl9NRURJQV9RVUVSSUVTX0RFRklORUQsXG59KTtcbiJdLCJuYW1lcyI6WyJhY3Rpb25MaXN0UGxheWJhY2tDaGFuZ2VkIiwiYW5pbWF0aW9uRnJhbWVDaGFuZ2VkIiwiY2xlYXJSZXF1ZXN0ZWQiLCJlbGVtZW50U3RhdGVDaGFuZ2VkIiwiZXZlbnRMaXN0ZW5lckFkZGVkIiwiZXZlbnRTdGF0ZUNoYW5nZWQiLCJpbnN0YW5jZUFkZGVkIiwiaW5zdGFuY2VSZW1vdmVkIiwiaW5zdGFuY2VTdGFydGVkIiwibWVkaWFRdWVyaWVzRGVmaW5lZCIsInBhcmFtZXRlckNoYW5nZWQiLCJwbGF5YmFja1JlcXVlc3RlZCIsInByZXZpZXdSZXF1ZXN0ZWQiLCJyYXdEYXRhSW1wb3J0ZWQiLCJzZXNzaW9uSW5pdGlhbGl6ZWQiLCJzZXNzaW9uU3RhcnRlZCIsInNlc3Npb25TdG9wcGVkIiwic3RvcFJlcXVlc3RlZCIsInRlc3RGcmFtZVJlbmRlcmVkIiwidmlld3BvcnRXaWR0aENoYW5nZWQiLCJJWDJfUkFXX0RBVEFfSU1QT1JURUQiLCJJWDJfU0VTU0lPTl9JTklUSUFMSVpFRCIsIklYMl9TRVNTSU9OX1NUQVJURUQiLCJJWDJfU0VTU0lPTl9TVE9QUEVEIiwiSVgyX1BSRVZJRVdfUkVRVUVTVEVEIiwiSVgyX1BMQVlCQUNLX1JFUVVFU1RFRCIsIklYMl9TVE9QX1JFUVVFU1RFRCIsIklYMl9DTEVBUl9SRVFVRVNURUQiLCJJWDJfRVZFTlRfTElTVEVORVJfQURERUQiLCJJWDJfVEVTVF9GUkFNRV9SRU5ERVJFRCIsIklYMl9FVkVOVF9TVEFURV9DSEFOR0VEIiwiSVgyX0FOSU1BVElPTl9GUkFNRV9DSEFOR0VEIiwiSVgyX1BBUkFNRVRFUl9DSEFOR0VEIiwiSVgyX0lOU1RBTkNFX0FEREVEIiwiSVgyX0lOU1RBTkNFX1NUQVJURUQiLCJJWDJfSU5TVEFOQ0VfUkVNT1ZFRCIsIklYMl9FTEVNRU5UX1NUQVRFX0NIQU5HRUQiLCJJWDJfQUNUSU9OX0xJU1RfUExBWUJBQ0tfQ0hBTkdFRCIsIklYMl9WSUVXUE9SVF9XSURUSF9DSEFOR0VEIiwiSVgyX01FRElBX1FVRVJJRVNfREVGSU5FRCIsIklYMkVuZ2luZUFjdGlvblR5cGVzIiwicmVpZnlTdGF0ZSIsIklYMlZhbmlsbGFVdGlscyIsInJhd0RhdGEiLCJ0eXBlIiwicGF5bG9hZCIsImhhc0JvdW5kYXJ5Tm9kZXMiLCJyZWR1Y2VkTW90aW9uIiwiZGVmZXIiLCJhY3Rpb25UeXBlSWQiLCJBY3Rpb25UeXBlQ29uc3RzIiwiR0VORVJBTF9TVEFSVF9BQ1RJT04iLCJhY3Rpb25MaXN0SWQiLCJhY3Rpb25JdGVtSWQiLCJldmVudElkIiwiYWxsb3dFdmVudHMiLCJpbW1lZGlhdGUiLCJ0ZXN0TWFudWFsIiwidmVyYm9zZSIsInRhcmdldCIsImxpc3RlbmVyUGFyYW1zIiwic3RlcCIsInN0YXRlS2V5IiwibmV3U3RhdGUiLCJub3ciLCJwYXJhbWV0ZXJzIiwia2V5IiwidmFsdWUiLCJvcHRpb25zIiwiaW5zdGFuY2VJZCIsInRpbWUiLCJlbGVtZW50SWQiLCJjdXJyZW50IiwiYWN0aW9uSXRlbSIsImlzUGxheWluZyIsIndpZHRoIiwibWVkaWFRdWVyaWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQXFSYUEseUJBQXlCO2VBQXpCQTs7SUFoRUFDLHFCQUFxQjtlQUFyQkE7O0lBdERBQyxjQUFjO2VBQWRBOztJQWtHQUMsbUJBQW1CO2VBQW5CQTs7SUF6RkFDLGtCQUFrQjtlQUFsQkE7O0lBNkJBQyxpQkFBaUI7ZUFBakJBOztJQXNDQUMsYUFBYTtlQUFiQTs7SUFlQUMsZUFBZTtlQUFmQTs7SUFSQUMsZUFBZTtlQUFmQTs7SUE4REFDLG1CQUFtQjtlQUFuQkE7O0lBaEZBQyxnQkFBZ0I7ZUFBaEJBOztJQXZHQUMsaUJBQWlCO2VBQWpC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

}),
6011: (function (__unused_webpack_module, exports, __webpack_require__) {
// Array.includes needed for IE11 @packages/systems/ix2/shared-utils/quick-effects

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    actions: function() {
        return _IX2EngineActions;
    },
    destroy: function() {
        return destroy;
    },
    init: function() {
        return init;
    },
    setEnv: function() {
        return setEnv;
    },
    store: function() {
        return store;
    }
});
const _redux = __webpack_require__(9516);
const _IX2Reducer = /*#__PURE__*/ _interop_require_default(__webpack_require__(7243));
const _IX2VanillaEngine = __webpack_require__(1970);
const _IX2EngineActions = /*#__PURE__*/ _interop_require_wildcard(__webpack_require__(3946));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
const store = (0, _redux.createStore)(_IX2Reducer.default);
function setEnv(env) {
    if (env()) {
        (0, _IX2VanillaEngine.observeRequests)(store);
    }
}
function init(rawData) {
    destroy();
    (0, _IX2VanillaEngine.startEngine)({
        store,
        rawData,
        allowEvents: true
    });
}
function destroy() {
    (0, _IX2VanillaEngine.stopEngine)(store);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEFycmF5LmluY2x1ZGVzIG5lZWRlZCBmb3IgSUUxMSBAcGFja2FnZXMvc3lzdGVtcy9peDIvc2hhcmVkLXV0aWxzL3F1aWNrLWVmZmVjdHNcbmltcG9ydCAnY29yZS1qcy9mZWF0dXJlcy9hcnJheS9pbmNsdWRlcyc7XG5cbmltcG9ydCB7Y3JlYXRlU3RvcmV9IGZyb20gJ3JlZHV4JztcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4vcmVkdWNlcnMvSVgyUmVkdWNlcic7XG5pbXBvcnQge1xuICBzdGFydEVuZ2luZSxcbiAgc3RvcEVuZ2luZSxcbiAgb2JzZXJ2ZVJlcXVlc3RzLFxufSBmcm9tICcuL2xvZ2ljL0lYMlZhbmlsbGFFbmdpbmUnO1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuL2FjdGlvbnMvSVgyRW5naW5lQWN0aW9ucyc7XG5pbXBvcnQge1xuICB0eXBlIElYMlJhd0RhdGEsXG4gIHR5cGUgcmF3RGF0YUltcG9ydGVkUGF5bG9hZCxcbn0gZnJvbSAnLi9hY3Rpb25zL0lYMkVuZ2luZUFjdGlvbnMnO1xuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIpO1xuXG5mdW5jdGlvbiBzZXRFbnYoZW52OiAoYXJnMT86IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IGJvb2xlYW4pIHtcbiAgaWYgKGVudigpKSB7XG4gICAgb2JzZXJ2ZVJlcXVlc3RzKHN0b3JlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbml0KHJhd0RhdGE6IElYMlJhd0RhdGEpIHtcbiAgZGVzdHJveSgpO1xuXG4gIHN0YXJ0RW5naW5lKHtzdG9yZSwgcmF3RGF0YSwgYWxsb3dFdmVudHM6IHRydWV9KTtcbn1cblxuZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgc3RvcEVuZ2luZShzdG9yZSk7XG59XG5cbmV4cG9ydCB7XG4gIHNldEVudixcbiAgaW5pdCxcbiAgZGVzdHJveSxcbiAgc3RvcmUsXG4gIGFjdGlvbnMsXG4gIHR5cGUgSVgyUmF3RGF0YSxcbiAgdHlwZSByYXdEYXRhSW1wb3J0ZWRQYXlsb2FkLFxufTtcbiJdLCJuYW1lcyI6WyJhY3Rpb25zIiwiZGVzdHJveSIsImluaXQiLCJzZXRFbnYiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwicmVkdWNlciIsImVudiIsIm9ic2VydmVSZXF1ZXN0cyIsInJhd0RhdGEiLCJzdGFydEVuZ2luZSIsImFsbG93RXZlbnRzIiwic3RvcEVuZ2luZSJdLCJtYXBwaW5ncyI6IkFBQUEsa0ZBQWtGOzs7Ozs7Ozs7Ozs7SUF1Q2hGQSxPQUFPO2VBQVBBOztJQUZBQyxPQUFPO2VBQVBBOztJQURBQyxJQUFJO2VBQUpBOztJQURBQyxNQUFNO2VBQU5BOztJQUdBQyxLQUFLO2VBQUxBOzs7dUJBbkN3QjttRUFDTjtrQ0FLYjswRUFDa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXpCLE1BQU1BLFFBQVFDLElBQUFBLGtCQUFXLEVBQUNDLG1CQUFPO0FBRWpDLFNBQVNILE9BQU9JLEdBQWtEO0lBQ2hFLElBQUlBLE9BQU87UUFDVEMsSUFBQUEsaUNBQWUsRUFBQ0o7SUFDbEI7QUFDRjtBQUVBLFNBQVNGLEtBQUtPLE9BQW1CO0lBQy9CUjtJQUVBUyxJQUFBQSw2QkFBVyxFQUFDO1FBQUNOO1FBQU9LO1FBQVNFLGFBQWE7SUFBSTtBQUNoRDtBQUVBLFNBQVNWO0lBQ1BXLElBQUFBLDRCQUFVLEVBQUNSO0FBQ2IifQ==

}),
5012: (function (__unused_webpack_module, exports, __webpack_require__) {
/* eslint-env browser */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    elementContains: function() {
        return elementContains;
    },
    getChildElements: function() {
        return getChildElements;
    },
    getClosestElement: function() {
        return getClosestElement;
    },
    getProperty: function() {
        return getProperty;
    },
    getQuerySelector: function() {
        return getQuerySelector;
    },
    getRefType: function() {
        return getRefType;
    },
    getSiblingElements: function() {
        return getSiblingElements;
    },
    getStyle: function() {
        return getStyle;
    },
    getValidDocument: function() {
        return getValidDocument;
    },
    isSiblingNode: function() {
        return isSiblingNode;
    },
    matchSelector: function() {
        return matchSelector;
    },
    queryDocument: function() {
        return queryDocument;
    },
    setStyle: function() {
        return setStyle;
    }
});
const _shared = __webpack_require__(9468);
const _sharedconstants = __webpack_require__(7087);
const { ELEMENT_MATCHES } = _shared.IX2BrowserSupport;
const { IX2_ID_DELIMITER, HTML_ELEMENT, PLAIN_OBJECT, WF_PAGE } = _sharedconstants.IX2EngineConstants;
function setStyle(element, prop, value) {
    // @ts-expect-error - TS7015 - Element implicitly has an 'any' type because index expression is not of type 'number'.
    element.style[prop] = value;
}
function getStyle(element, prop) {
    if (prop.startsWith('--')) {
        return window.getComputedStyle(document.documentElement).getPropertyValue(prop);
    }
    if (element.style instanceof CSSStyleDeclaration) {
        // @ts-expect-error - TS7015 - Element implicitly has an 'any' type because index expression is not of type 'number'.
        return element.style[prop];
    }
}
function getProperty(element, prop) {
    // @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'HTMLElement'.
    return element[prop];
}
function matchSelector(selector) {
    // @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'any' can't be used to index type 'HTMLElement'.
    return (element)=>element[ELEMENT_MATCHES](selector);
}
function getQuerySelector({ id, selector }) {
    if (id) {
        let nodeId = id;
        if (id.indexOf(IX2_ID_DELIMITER) !== -1) {
            const pair = id.split(IX2_ID_DELIMITER);
            const pageId = pair[0];
            // @ts-expect-error - TS2322 - Type 'string | undefined' is not assignable to type 'string'.
            nodeId = pair[1];
            // Short circuit query if we're on the wrong page
            if (pageId !== document.documentElement.getAttribute(WF_PAGE)) {
                return null;
            }
        }
        return `[data-w-id="${nodeId}"], [data-w-id^="${nodeId}_instance"]`;
    }
    return selector;
}
function getValidDocument(pageId) {
    if (pageId == null || pageId === document.documentElement.getAttribute(WF_PAGE)) {
        return document;
    }
    return null;
}
function queryDocument(baseSelector, descendantSelector) {
    return Array.prototype.slice.call(document.querySelectorAll(descendantSelector ? baseSelector + ' ' + descendantSelector : baseSelector));
}
function elementContains(parent, child) {
    return parent.contains(child);
}
function isSiblingNode(a, b) {
    return a !== b && a.parentNode === b.parentNode;
}
function getChildElements(// @ts-expect-error - TS2315 - Type 'NodeList' is not generic.
sourceElements) {
    const childElements = [];
    for(let i = 0, { length } = sourceElements || []; i < length; i++){
        const { children } = sourceElements[i];
        const { length: childCount } = children;
        if (!childCount) {
            continue;
        }
        for(let j = 0; j < childCount; j++){
            childElements.push(children[j]);
        }
    }
    return childElements;
}
function getSiblingElements(sourceElements = []) {
    const elements = [];
    const parentCache = [];
    for(let i = 0, { length } = sourceElements; i < length; i++){
        // @ts-expect-error - TS2339 - Property 'parentNode' does not exist on type 'undefined'.
        const { parentNode } = sourceElements[i];
        if (!parentNode || !parentNode.children || !parentNode.children.length) {
            continue;
        }
        if (parentCache.indexOf(parentNode) !== -1) {
            continue;
        }
        parentCache.push(parentNode);
        let el = parentNode.firstElementChild;
        while(el != null){
            // @ts-expect-error - TS2345 - Argument of type 'any' is not assignable to parameter of type 'never'.
            if (sourceElements.indexOf(el) === -1) {
                elements.push(el);
            }
            el = el.nextElementSibling;
        }
    }
    return elements;
}
const getClosestElement = Element.prototype.closest ? (element, selector)=>{
    if (!document.documentElement.contains(element)) {
        return null;
    }
    return element.closest(selector);
} : (element, selector)=>{
    if (!document.documentElement.contains(element)) {
        return null;
    }
    let el = element;
    do {
        // @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'any' can't be used to index type 'HTMLElement'. | TS7053 - Element implicitly has an 'any' type because expression of type 'any' can't be used to index type 'HTMLElement'.
        if (el[ELEMENT_MATCHES] && el[ELEMENT_MATCHES](selector)) {
            return el;
        }
        // @ts-expect-error - TS2322 - Type 'ParentNode | null' is not assignable to type 'HTMLElement'.
        el = el.parentNode;
    }while (el != null);
    return null;
};
function getRefType(ref) {
    if (ref != null && typeof ref == 'object') {
        return ref instanceof Element ? HTML_ELEMENT : PLAIN_OBJECT;
    }
    return null;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIklYMkJyb3dzZXJBcGkudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWVudiBicm93c2VyICovXG5pbXBvcnQge0lYMkJyb3dzZXJTdXBwb3J0fSBmcm9tICdAcGFja2FnZXMvc3lzdGVtcy9peDIvc2hhcmVkJztcbmltcG9ydCB7SVgyRW5naW5lQ29uc3RhbnRzfSBmcm9tICdAcGFja2FnZXMvc3lzdGVtcy9peDIvc2hhcmVkLWNvbnN0YW50cyc7XG5jb25zdCB7RUxFTUVOVF9NQVRDSEVTfSA9IElYMkJyb3dzZXJTdXBwb3J0O1xuY29uc3Qge0lYMl9JRF9ERUxJTUlURVIsIEhUTUxfRUxFTUVOVCwgUExBSU5fT0JKRUNULCBXRl9QQUdFfSA9XG4gIElYMkVuZ2luZUNvbnN0YW50cztcblxuZXhwb3J0IGZ1bmN0aW9uIHNldFN0eWxlKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBwcm9wOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpIHtcbiAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTNzAxNSAtIEVsZW1lbnQgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZSBiZWNhdXNlIGluZGV4IGV4cHJlc3Npb24gaXMgbm90IG9mIHR5cGUgJ251bWJlcicuXG4gIGVsZW1lbnQuc3R5bGVbcHJvcF0gPSB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0eWxlKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBwcm9wOiBzdHJpbmcpIHtcbiAgaWYgKHByb3Auc3RhcnRzV2l0aCgnLS0nKSkge1xuICAgIHJldHVybiB3aW5kb3dcbiAgICAgIC5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudClcbiAgICAgIC5nZXRQcm9wZXJ0eVZhbHVlKHByb3ApO1xuICB9XG5cbiAgaWYgKGVsZW1lbnQuc3R5bGUgaW5zdGFuY2VvZiBDU1NTdHlsZURlY2xhcmF0aW9uKSB7XG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTNzAxNSAtIEVsZW1lbnQgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZSBiZWNhdXNlIGluZGV4IGV4cHJlc3Npb24gaXMgbm90IG9mIHR5cGUgJ251bWJlcicuXG4gICAgcmV0dXJuIGVsZW1lbnQuc3R5bGVbcHJvcF07XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb3BlcnR5KGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBwcm9wOiBzdHJpbmcpIHtcbiAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTNzA1MyAtIEVsZW1lbnQgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZSBiZWNhdXNlIGV4cHJlc3Npb24gb2YgdHlwZSAnc3RyaW5nJyBjYW4ndCBiZSB1c2VkIHRvIGluZGV4IHR5cGUgJ0hUTUxFbGVtZW50Jy5cbiAgcmV0dXJuIGVsZW1lbnRbcHJvcF07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXRjaFNlbGVjdG9yKFxuICBzZWxlY3Rvcjogc3RyaW5nXG4pOiAoYXJnMTogSFRNTEVsZW1lbnQpID0+IGJvb2xlYW4ge1xuICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFM3MDUzIC0gRWxlbWVudCBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlIGJlY2F1c2UgZXhwcmVzc2lvbiBvZiB0eXBlICdhbnknIGNhbid0IGJlIHVzZWQgdG8gaW5kZXggdHlwZSAnSFRNTEVsZW1lbnQnLlxuICByZXR1cm4gKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiBlbGVtZW50W0VMRU1FTlRfTUFUQ0hFU10oc2VsZWN0b3IpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UXVlcnlTZWxlY3Rvcih7XG4gIGlkLFxuICBzZWxlY3Rvcixcbn06IHtcbiAgaWQ6IG51bGwgfCB1bmRlZmluZWQgfCBzdHJpbmc7XG4gIHNlbGVjdG9yOiBzdHJpbmc7XG59KSB7XG4gIGlmIChpZCkge1xuICAgIGxldCBub2RlSWQgPSBpZDtcbiAgICBpZiAoaWQuaW5kZXhPZihJWDJfSURfREVMSU1JVEVSKSAhPT0gLTEpIHtcbiAgICAgIGNvbnN0IHBhaXIgPSBpZC5zcGxpdChJWDJfSURfREVMSU1JVEVSKTtcbiAgICAgIGNvbnN0IHBhZ2VJZCA9IHBhaXJbMF07XG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFMyMzIyIC0gVHlwZSAnc3RyaW5nIHwgdW5kZWZpbmVkJyBpcyBub3QgYXNzaWduYWJsZSB0byB0eXBlICdzdHJpbmcnLlxuICAgICAgbm9kZUlkID0gcGFpclsxXTtcbiAgICAgIC8vIFNob3J0IGNpcmN1aXQgcXVlcnkgaWYgd2UncmUgb24gdGhlIHdyb25nIHBhZ2VcbiAgICAgIGlmIChwYWdlSWQgIT09IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoV0ZfUEFHRSkpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBgW2RhdGEtdy1pZD1cIiR7bm9kZUlkfVwiXSwgW2RhdGEtdy1pZF49XCIke25vZGVJZH1faW5zdGFuY2VcIl1gO1xuICB9XG4gIHJldHVybiBzZWxlY3Rvcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFZhbGlkRG9jdW1lbnQocGFnZUlkPzogbnVsbCB8IHN0cmluZykge1xuICBpZiAoXG4gICAgcGFnZUlkID09IG51bGwgfHxcbiAgICBwYWdlSWQgPT09IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoV0ZfUEFHRSlcbiAgKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50O1xuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVlcnlEb2N1bWVudChcbiAgYmFzZVNlbGVjdG9yOiBzdHJpbmcsXG4gIGRlc2NlbmRhbnRTZWxlY3Rvcj86IG51bGwgfCBzdHJpbmdcbikge1xuICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgIGRlc2NlbmRhbnRTZWxlY3RvclxuICAgICAgICA/IGJhc2VTZWxlY3RvciArICcgJyArIGRlc2NlbmRhbnRTZWxlY3RvclxuICAgICAgICA6IGJhc2VTZWxlY3RvclxuICAgIClcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVsZW1lbnRDb250YWlucyhcbiAgcGFyZW50OiBIVE1MRWxlbWVudCxcbiAgY2hpbGQ6IEhUTUxFbGVtZW50XG4pOiBib29sZWFuIHtcbiAgcmV0dXJuIHBhcmVudC5jb250YWlucyhjaGlsZCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1NpYmxpbmdOb2RlKGE6IEhUTUxFbGVtZW50LCBiOiBIVE1MRWxlbWVudCk6IGJvb2xlYW4ge1xuICByZXR1cm4gYSAhPT0gYiAmJiBhLnBhcmVudE5vZGUgPT09IGIucGFyZW50Tm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENoaWxkRWxlbWVudHMoXG4gIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzIzMTUgLSBUeXBlICdOb2RlTGlzdCcgaXMgbm90IGdlbmVyaWMuXG4gIHNvdXJjZUVsZW1lbnRzOiBBcnJheTxIVE1MRWxlbWVudD4gfCBOb2RlTGlzdDxIVE1MRWxlbWVudD5cbikge1xuICBjb25zdCBjaGlsZEVsZW1lbnRzOiBBcnJheTxIVE1MRWxlbWVudCB8IGFueT4gPSBbXTtcblxuICBmb3IgKGxldCBpID0gMCwge2xlbmd0aH0gPSBzb3VyY2VFbGVtZW50cyB8fCBbXTsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qge2NoaWxkcmVufSA9IHNvdXJjZUVsZW1lbnRzW2ldO1xuICAgIGNvbnN0IHtsZW5ndGg6IGNoaWxkQ291bnR9ID0gY2hpbGRyZW47XG4gICAgaWYgKCFjaGlsZENvdW50KSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBjaGlsZENvdW50OyBqKyspIHtcbiAgICAgIGNoaWxkRWxlbWVudHMucHVzaChjaGlsZHJlbltqXSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBjaGlsZEVsZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2libGluZ0VsZW1lbnRzKHNvdXJjZUVsZW1lbnRzID0gW10pIHtcbiAgY29uc3QgZWxlbWVudHM6IEFycmF5PGFueT4gPSBbXTtcbiAgY29uc3QgcGFyZW50Q2FjaGU6IEFycmF5PGFueT4gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDAsIHtsZW5ndGh9ID0gc291cmNlRWxlbWVudHM7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzIzMzkgLSBQcm9wZXJ0eSAncGFyZW50Tm9kZScgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSAndW5kZWZpbmVkJy5cbiAgICBjb25zdCB7cGFyZW50Tm9kZX0gPSBzb3VyY2VFbGVtZW50c1tpXTtcbiAgICBpZiAoIXBhcmVudE5vZGUgfHwgIXBhcmVudE5vZGUuY2hpbGRyZW4gfHwgIXBhcmVudE5vZGUuY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKHBhcmVudENhY2hlLmluZGV4T2YocGFyZW50Tm9kZSkgIT09IC0xKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgcGFyZW50Q2FjaGUucHVzaChwYXJlbnROb2RlKTtcbiAgICBsZXQgZWwgPSBwYXJlbnROb2RlLmZpcnN0RWxlbWVudENoaWxkO1xuICAgIHdoaWxlIChlbCAhPSBudWxsKSB7XG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFMyMzQ1IC0gQXJndW1lbnQgb2YgdHlwZSAnYW55JyBpcyBub3QgYXNzaWduYWJsZSB0byBwYXJhbWV0ZXIgb2YgdHlwZSAnbmV2ZXInLlxuICAgICAgaWYgKHNvdXJjZUVsZW1lbnRzLmluZGV4T2YoZWwpID09PSAtMSkge1xuICAgICAgICBlbGVtZW50cy5wdXNoKGVsKTtcbiAgICAgIH1cbiAgICAgIGVsID0gZWwubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZWxlbWVudHM7XG59XG5cbi8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzI3NzQgLSBUaGlzIGNvbmRpdGlvbiB3aWxsIGFsd2F5cyByZXR1cm4gdHJ1ZSBzaW5jZSB0aGlzIGZ1bmN0aW9uIGlzIGFsd2F5cyBkZWZpbmVkLiBEaWQgeW91IG1lYW4gdG8gY2FsbCBpdCBpbnN0ZWFkP1xuZXhwb3J0IGNvbnN0IGdldENsb3Nlc3RFbGVtZW50ID0gRWxlbWVudC5wcm90b3R5cGUuY2xvc2VzdFxuICA/IChlbGVtZW50OiBIVE1MRWxlbWVudCwgc2VsZWN0b3I6IHN0cmluZykgPT4ge1xuICAgICAgaWYgKCFkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY29udGFpbnMoZWxlbWVudCkpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBlbGVtZW50LmNsb3Nlc3Qoc2VsZWN0b3IpIGFzIEhUTUxFbGVtZW50IHwgbnVsbCB8IHVuZGVmaW5lZDtcbiAgICB9XG4gIDogKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBzZWxlY3Rvcjogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAoIWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jb250YWlucyhlbGVtZW50KSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgbGV0IGVsID0gZWxlbWVudDtcblxuICAgICAgZG8ge1xuICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFM3MDUzIC0gRWxlbWVudCBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlIGJlY2F1c2UgZXhwcmVzc2lvbiBvZiB0eXBlICdhbnknIGNhbid0IGJlIHVzZWQgdG8gaW5kZXggdHlwZSAnSFRNTEVsZW1lbnQnLiB8IFRTNzA1MyAtIEVsZW1lbnQgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZSBiZWNhdXNlIGV4cHJlc3Npb24gb2YgdHlwZSAnYW55JyBjYW4ndCBiZSB1c2VkIHRvIGluZGV4IHR5cGUgJ0hUTUxFbGVtZW50Jy5cbiAgICAgICAgaWYgKGVsW0VMRU1FTlRfTUFUQ0hFU10gJiYgZWxbRUxFTUVOVF9NQVRDSEVTXShzZWxlY3RvcikpIHtcbiAgICAgICAgICByZXR1cm4gZWw7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTMjMyMiAtIFR5cGUgJ1BhcmVudE5vZGUgfCBudWxsJyBpcyBub3QgYXNzaWduYWJsZSB0byB0eXBlICdIVE1MRWxlbWVudCcuXG4gICAgICAgIGVsID0gZWwucGFyZW50Tm9kZTtcbiAgICAgIH0gd2hpbGUgKGVsICE9IG51bGwpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJlZlR5cGUocmVmOiBhbnkpIHtcbiAgaWYgKHJlZiAhPSBudWxsICYmIHR5cGVvZiByZWYgPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gcmVmIGluc3RhbmNlb2YgRWxlbWVudCA/IEhUTUxfRUxFTUVOVCA6IFBMQUlOX09CSkVDVDtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cbiJdLCJuYW1lcyI6WyJlbGVtZW50Q29udGFpbnMiLCJnZXRDaGlsZEVsZW1lbnRzIiwiZ2V0Q2xvc2VzdEVsZW1lbnQiLCJnZXRQcm9wZXJ0eSIsImdldFF1ZXJ5U2VsZWN0b3IiLCJnZXRSZWZUeXBlIiwiZ2V0U2libGluZ0VsZW1lbnRzIiwiZ2V0U3R5bGUiLCJnZXRWYWxpZERvY3VtZW50IiwiaXNTaWJsaW5nTm9kZSIsIm1hdGNoU2VsZWN0b3IiLCJxdWVyeURvY3VtZW50Iiwic2V0U3R5bGUiLCJFTEVNRU5UX01BVENIRVMiLCJJWDJCcm93c2VyU3VwcG9ydCIsIklYMl9JRF9ERUxJTUlURVIiLCJIVE1MX0VMRU1FTlQiLCJQTEFJTl9PQkpFQ1QiLCJXRl9QQUdFIiwiSVgyRW5naW5lQ29uc3RhbnRzIiwiZWxlbWVudCIsInByb3AiLCJ2YWx1ZSIsInN0eWxlIiwic3RhcnRzV2l0aCIsIndpbmRvdyIsImdldENvbXB1dGVkU3R5bGUiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImdldFByb3BlcnR5VmFsdWUiLCJDU1NTdHlsZURlY2xhcmF0aW9uIiwic2VsZWN0b3IiLCJpZCIsIm5vZGVJZCIsImluZGV4T2YiLCJwYWlyIiwic3BsaXQiLCJwYWdlSWQiLCJnZXRBdHRyaWJ1dGUiLCJiYXNlU2VsZWN0b3IiLCJkZXNjZW5kYW50U2VsZWN0b3IiLCJBcnJheSIsInByb3RvdHlwZSIsInNsaWNlIiwiY2FsbCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwYXJlbnQiLCJjaGlsZCIsImNvbnRhaW5zIiwiYSIsImIiLCJwYXJlbnROb2RlIiwic291cmNlRWxlbWVudHMiLCJjaGlsZEVsZW1lbnRzIiwiaSIsImxlbmd0aCIsImNoaWxkcmVuIiwiY2hpbGRDb3VudCIsImoiLCJwdXNoIiwiZWxlbWVudHMiLCJwYXJlbnRDYWNoZSIsImVsIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJFbGVtZW50IiwiY2xvc2VzdCIsInJlZiJdLCJtYXBwaW5ncyI6IkFBQUEsc0JBQXNCOzs7Ozs7Ozs7OztJQW9GTkEsZUFBZTtlQUFmQTs7SUFXQUMsZ0JBQWdCO2VBQWhCQTs7SUE2Q0hDLGlCQUFpQjtlQUFqQkE7O0lBbkhHQyxXQUFXO2VBQVhBOztJQVlBQyxnQkFBZ0I7ZUFBaEJBOztJQWlJQUMsVUFBVTtlQUFWQTs7SUFwREFDLGtCQUFrQjtlQUFsQkE7O0lBdEdBQyxRQUFRO2VBQVJBOztJQWlEQUMsZ0JBQWdCO2VBQWhCQTs7SUE4QkFDLGFBQWE7ZUFBYkE7O0lBN0RBQyxhQUFhO2VBQWJBOztJQXlDQUMsYUFBYTtlQUFiQTs7SUFoRUFDLFFBQVE7ZUFBUkE7Ozt3QkFOZ0I7aUNBQ0M7QUFDakMsTUFBTSxFQUFDQyxlQUFlLEVBQUMsR0FBR0MseUJBQWlCO0FBQzNDLE1BQU0sRUFBQ0MsZ0JBQWdCLEVBQUVDLFlBQVksRUFBRUMsWUFBWSxFQUFFQyxPQUFPLEVBQUMsR0FDM0RDLG1DQUFrQjtBQUViLFNBQVNQLFNBQVNRLE9BQW9CLEVBQUVDLElBQVksRUFBRUMsS0FBYTtJQUN4RSxxSEFBcUg7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

}),
1970: (function (__unused_webpack_module, exports, __webpack_require__) {
/* eslint-env browser */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    observeRequests: function() {
        return observeRequests;
    },
    startActionGroup: function() {
        return startActionGroup;
    },
    startEngine: function() {
        return startEngine;
    },
    stopActionGroup: function() {
        return stopActionGroup;
    },
    stopAllActionGroups: function() {
        return stopAllActionGroups;
    },
    stopEngine: function() {
        return stopEngine;
    }
});
const _find = /*#__PURE__*/ _interop_require_default(__webpack_require__(9777));
const _get = /*#__PURE__*/ _interop_require_default(__webpack_require__(4738));
const _size = /*#__PURE__*/ _interop_require_default(__webpack_require__(4659));
const _omitBy = /*#__PURE__*/ _interop_require_default(__webpack_require__(3452));
const _isEmpty = /*#__PURE__*/ _interop_require_default(__webpack_require__(6633));
const _mapValues = /*#__PURE__*/ _interop_require_default(__webpack_require__(3729));
const _forEach = /*#__PURE__*/ _interop_require_default(__webpack_require__(2397));
const _throttle = /*#__PURE__*/ _interop_require_default(__webpack_require__(5082));
const _sharedconstants = __webpack_require__(7087);
const _shared = __webpack_require__(9468);
const _IX2EngineActions = __webpack_require__(3946);
const _IX2BrowserApi = /*#__PURE__*/ _interop_require_wildcard(__webpack_require__(5012));
const _IX2VanillaEvents = /*#__PURE__*/ _interop_require_default(__webpack_require__(8955));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
const QuickEffectsIdList = Object.keys(_sharedconstants.QuickEffectIds);
const isQuickEffect = (actionTypeId)=>QuickEffectsIdList.includes(actionTypeId);
const { COLON_DELIMITER, BOUNDARY_SELECTOR, HTML_ELEMENT, RENDER_GENERAL, W_MOD_IX } = _sharedconstants.IX2EngineConstants;
const { getAffectedElements, getElementId, getDestinationValues, observeStore, getInstanceId, renderHTMLElement, clearAllStyles, getMaxDurationItemIndex, getComputedStyle, getInstanceOrigin, reduceListToGroup, shouldNamespaceEventParameter, getNamespacedParameterId, shouldAllowMediaQuery, cleanupHTMLElement, clearObjectCache, stringifyTarget, mediaQueriesEqual, shallowEqual } = _shared.IX2VanillaUtils;
const { isPluginType, createPluginInstance, getPluginDuration } = _shared.IX2VanillaPlugins;
const ua = navigator.userAgent;
const IS_MOBILE_SAFARI = ua.match(/iPad/i) || ua.match(/iPhone/);
// Keep throttled events at ~80fps to reduce reflows while maintaining render accuracy
const THROTTLED_EVENT_WAIT = 12;
function observeRequests(store) {
    observeStore({
        store,
        select: ({ ixRequest })=>ixRequest.preview,
        onChange: handlePreviewRequest
    });
    observeStore({
        store,
        select: ({ ixRequest })=>ixRequest.playback,
        onChange: handlePlaybackRequest
    });
    observeStore({
        store,
        select: ({ ixRequest })=>ixRequest.stop,
        onChange: handleStopRequest
    });
    observeStore({
        store,
        select: ({ ixRequest })=>ixRequest.clear,
        onChange: handleClearRequest
    });
}
function observeMediaQueryChange(store) {
    observeStore({
        store,
        select: ({ ixSession })=>ixSession.mediaQueryKey,
        onChange: ()=>{
            stopEngine(store);
            clearAllStyles({
                store,
                elementApi: _IX2BrowserApi
            });
            startEngine({
                store,
                allowEvents: true
            });
            dispatchPageUpdateEvent();
        }
    });
}
function observeOneRenderTick(store, onTick) {
    const unsubscribe = observeStore({
        store,
        select: ({ ixSession })=>ixSession.tick,
        // @ts-expect-error - TS7006 - Parameter 'tick' implicitly has an 'any' type.
        onChange: (tick)=>{
            onTick(tick);
            unsubscribe();
        }
    });
}
function handlePreviewRequest({ rawData, defer }, store) {
    const start = ()=>{
        startEngine({
            store,
            rawData,
            allowEvents: true
        });
        dispatchPageUpdateEvent();
    };
    defer ? setTimeout(start, 0) : start();
}
function dispatchPageUpdateEvent() {
    document.dispatchEvent(new CustomEvent('IX2_PAGE_UPDATE'));
}
function handlePlaybackRequest(playback, store) {
    const { actionTypeId, actionListId, actionItemId, eventId, allowEvents, immediate, testManual, verbose = true } = playback;
    let { rawData } = playback;
    if (actionListId && actionItemId && rawData && immediate) {
        const actionList = rawData.actionLists[actionListId];
        if (actionList) {
            rawData = reduceListToGroup({
                actionList,
                actionItemId,
                rawData
            });
        }
    }
    startEngine({
        store,
        rawData,
        allowEvents,
        testManual
    });
    if (actionListId && actionTypeId === _sharedconstants.ActionTypeConsts.GENERAL_START_ACTION || isQuickEffect(actionTypeId)) {
        // @ts-expect-error - TS2345 - Argument of type '{ store: any; actionListId: any; }' is not assignable to parameter of type '{ store: any; eventId: any; eventTarget: any; eventStateKey: any; actionListId: any; }'.
        stopActionGroup({
            store,
            actionListId
        });
        renderInitialGroup({
            store,
            actionListId,
            eventId
        });
        // @ts-expect-error - TS2345 - Argument of type '{ store: any; eventId: any; actionListId: any; immediate: any; verbose: any; }' is not assignable to parameter of type '{ store: any; eventId: any; eventTarget: any; eventStateKey: any; actionListId: any; groupIndex?: number | undefined; immediate: any; verbose: any; }'.
        const started = startActionGroup({
            store,
            eventId,
            actionListId,
            immediate,
            verbose
        });
        if (verbose && started) {
            store.dispatch((0, _IX2EngineActions.actionListPlaybackChanged)({
                actionListId,
                isPlaying: !immediate
            }));
        }
    }
}
function handleStopRequest({ actionListId }, store) {
    if (actionListId) {
        // @ts-expect-error - TS2345 - Argument of type '{ store: any; actionListId: any; }' is not assignable to parameter of type '{ store: any; eventId: any; eventTarget: any; eventStateKey: any; actionListId: any; }'.
        stopActionGroup({
            store,
            actionListId
        });
    } else {
        stopAllActionGroups({
            store
        });
    }
    stopEngine(store);
}
function handleClearRequest(state, store) {
    stopEngine(store);
    clearAllStyles({
        store,
        elementApi: _IX2BrowserApi
    });
}
function startEngine({ store, rawData, allowEvents, testManual }) {
    const { ixSession } = store.getState();
    if (rawData) {
        store.dispatch((0, _IX2EngineActions.rawDataImported)(rawData));
    }
    if (!ixSession.active) {
        store.dispatch((0, _IX2EngineActions.sessionInitialized)({
            hasBoundaryNodes: Boolean(document.querySelector(BOUNDARY_SELECTOR)),
            reducedMotion: document.body.hasAttribute('data-wf-ix-vacation') && window.matchMedia('(prefers-reduced-motion)').matches
        }));
        if (allowEvents) {
            bindEvents(store);
            addDocumentClass();
            if (store.getState().ixSession.hasDefinedMediaQueries) {
                observeMediaQueryChange(store);
            }
        }
        store.dispatch((0, _IX2EngineActions.sessionStarted)());
        startRenderLoop(store, testManual);
    }
}
function addDocumentClass() {
    const { documentElement } = document;
    if (documentElement.className.indexOf(W_MOD_IX) === -1) {
        documentElement.className += ` ${W_MOD_IX}`;
    }
}
function startRenderLoop(store, testManual) {
    const handleFrame = (now)=>{
        const { ixSession, ixParameters } = store.getState();
        if (ixSession.active) {
            store.dispatch((0, _IX2EngineActions.animationFrameChanged)(now, ixParameters));
            if (testManual) {
                observeOneRenderTick(store, handleFrame);
            } else {
                requestAnimationFrame(handleFrame);
            }
        }
    };
    handleFrame(window.performance.now());
}
function stopEngine(store) {
    const { ixSession } = store.getState();
    if (ixSession.active) {
        const { eventListeners } = ixSession;
        eventListeners.forEach(clearEventListener);
        clearObjectCache();
        store.dispatch((0, _IX2EngineActions.sessionStopped)());
    }
}
// @ts-expect-error - TS7031 - Binding element 'target' implicitly has an 'any' type. | TS7031 - Binding element 'listenerParams' implicitly has an 'any' type.
function clearEventListener({ target, listenerParams }) {
    // eslint-disable-next-line prefer-spread
    target.removeEventListener.apply(target, listenerParams);
}
function createGroupInstances({ // @ts-expect-error - TS7031 - Binding element 'store' implicitly has an 'any' type.
store, // @ts-expect-error - TS7031 - Binding element 'eventStateKey' implicitly has an 'any' type.
eventStateKey, // @ts-expect-error - TS7031 - Binding element 'eventTarget' implicitly has an 'any' type.
eventTarget, // @ts-expect-error - TS7031 - Binding element 'eventId' implicitly has an 'any' type.
eventId, // @ts-expect-error - TS7031 - Binding element 'eventConfig' implicitly has an 'any' type.
eventConfig, // @ts-expect-error - TS7031 - Binding element 'actionListId' implicitly has an 'any' type.
actionListId, // @ts-expect-error - TS7031 - Binding element 'parameterGroup' implicitly has an 'any' type.
parameterGroup, // @ts-expect-error - TS7031 - Binding element 'smoothing' implicitly has an 'any' type.
smoothing, // @ts-expect-error - TS7031 - Binding element 'restingValue' implicitly has an 'any' type.
restingValue }) {
    const { ixData, ixSession } = store.getState();
    const { events } = ixData;
    const event = events[eventId];
    const { eventTypeId } = event;
    const targetCache = {};
    const instanceActionGroups = {};
    const instanceConfigs = [];
    const { continuousActionGroups } = parameterGroup;
    let { id: parameterId } = parameterGroup;
    if (shouldNamespaceEventParameter(eventTypeId, eventConfig)) {
        parameterId = getNamespacedParameterId(eventStateKey, parameterId);
    }
    // Limit affected elements when event target is within a boundary node
    const eventElementRoot = ixSession.hasBoundaryNodes && eventTarget ? _IX2BrowserApi.getClosestElement(eventTarget, BOUNDARY_SELECTOR) : null;
    // @ts-expect-error - TS7006 - Parameter 'actionGroup' implicitly has an 'any' type.
    continuousActionGroups.forEach((actionGroup)=>{
        const { keyframe, actionItems } = actionGroup;
        // @ts-expect-error - TS7006 - Parameter 'actionItem' implicitly has an 'any' type.
        actionItems.forEach((actionItem)=>{
            const { actionTypeId } = actionItem;
            const { target } = actionItem.config;
            if (!target) {
                return;
            }
            const elementRoot = target.boundaryMode ? eventElementRoot : null;
            const key = stringifyTarget(target) + COLON_DELIMITER + actionTypeId;
            instanceActionGroups[key] = appendActionItem(instanceActionGroups[key], keyframe, actionItem);
            if (!targetCache[key]) {
                targetCache[key] = true;
                const { config } = actionItem;
                getAffectedElements({
                    config,
                    event,
                    eventTarget,
                    elementRoot,
                    elementApi: _IX2BrowserApi
                }).forEach((element)=>{
                    instanceConfigs.push({
                        element,
                        key
                    });
                });
            }
        });
    });
    instanceConfigs.forEach(({ element, key })=>{
        const actionGroups = instanceActionGroups[key];
        const actionItem = (0, _get.default)(actionGroups, `[0].actionItems[0]`, {});
        const { actionTypeId } = actionItem;
        const shouldUsePlugin = // If it's targeted by class, don't query the element by pluginElementId
        actionTypeId === _sharedconstants.ActionTypeConsts.PLUGIN_RIVE ? (actionItem.config?.target?.selectorGuids || []).length === 0 : isPluginType(actionTypeId);
        const pluginInstance = shouldUsePlugin ? createPluginInstance(actionTypeId)?.(element, actionItem) : null;
        const destination = getDestinationValues({
            element,
            actionItem,
            elementApi: _IX2BrowserApi
        }, // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        pluginInstance);
        createInstance({
            store,
            element,
            eventId,
            actionListId,
            actionItem,
            destination,
            continuous: true,
            parameterId,
            actionGroups,
            smoothing,
            restingValue,
            pluginInstance
        });
    });
}
function appendActionItem(actionGroups = [], keyframe, actionItem) {
    const newActionGroups = [
        ...actionGroups
    ];
    let groupIndex;
    newActionGroups.some((group, index)=>{
        // @ts-expect-error - TS2339 - Property 'keyframe' does not exist on type 'never'.
        if (group.keyframe === keyframe) {
            groupIndex = index;
            return true;
        }
        return false;
    });
    if (groupIndex == null) {
        groupIndex = newActionGroups.length;
        // @ts-expect-error - TS2345 - Argument of type '{ keyframe: any; actionItems: never[]; }' is not assignable to parameter of type 'never'.
        newActionGroups.push({
            keyframe,
            actionItems: []
        });
    }
    // @ts-expect-error - TS2339 - Property 'actionItems' does not exist on type 'never'.
    newActionGroups[groupIndex].actionItems.push(actionItem);
    return newActionGroups;
}
function bindEvents(store) {
    const { ixData } = store.getState();
    const { eventTypeMap } = ixData;
    updateViewportWidth(store);
    (0, _forEach.default)(eventTypeMap, (events, key)=>{
        // @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'string' can't be used to index type '{ SLIDER_ACTIVE: { handler: (options: any, state: any) => any; types: string; }; SLIDER_INACTIVE: { handler: (options: any, state: any) => any; types: string; }; DROPDOWN_OPEN: { handler: (options: any, state: any) => any; types: string; }; ... 21 more ...; PAGE_START: { ...; }; }'.
        const logic = _IX2VanillaEvents.default[key];
        if (!logic) {
            console.warn(`IX2 event type not configured: ${key}`);
            return;
        }
        bindEventType({
            // @ts-expect-error - TS7031 - Binding element 'logic' implicitly has an 'any' type.
            logic,
            store,
            events
        });
    });
    const { ixSession } = store.getState();
    if (ixSession.eventListeners.length) {
        bindResizeEvents(store);
    }
}
const WINDOW_RESIZE_EVENTS = [
    'resize',
    'orientationchange'
];
function bindResizeEvents(store) {
    const handleResize = ()=>{
        updateViewportWidth(store);
    };
    WINDOW_RESIZE_EVENTS.forEach((type)=>{
        window.addEventListener(type, handleResize);
        store.dispatch((0, _IX2EngineActions.eventListenerAdded)(window, [
            type,
            handleResize
        ]));
    });
    handleResize();
}
function updateViewportWidth(store) {
    const { ixSession, ixData } = store.getState();
    const width = window.innerWidth;
    if (width !== ixSession.viewportWidth) {
        const { mediaQueries } = ixData;
        store.dispatch((0, _IX2EngineActions.viewportWidthChanged)({
            width,
            mediaQueries
        }));
    }
}
const mapFoundValues = (object, iteratee)=>(0, _omitBy.default)((0, _mapValues.default)(object, iteratee), _isEmpty.default);
const forEachEventTarget = (eventTargets, eventCallback)=>{
    (0, _forEach.default)(eventTargets, (elements, eventId)=>{
        // @ts-expect-error - TS7006 - Parameter 'element' implicitly has an 'any' type. | TS7006 - Parameter 'index' implicitly has an 'any' type.
        elements.forEach((element, index)=>{
            const eventStateKey = eventId + COLON_DELIMITER + index;
            eventCallback(element, eventId, eventStateKey);
        });
    });
};
const getAffectedForEvent = (event)=>{
    const config = {
        target: event.target,
        targets: event.targets
    };
    return getAffectedElements({
        config,
        elementApi: _IX2BrowserApi
    });
};
// @ts-expect-error - TS7031 - Binding element 'logic' implicitly has an 'any' type. | TS7031 - Binding element 'store' implicitly has an 'any' type. | TS7031 - Binding element 'events' implicitly has an 'any' type.
function bindEventType({ logic, store, events }) {
    injectBehaviorCSSFixes(events);
    const { types: eventTypes, handler: eventHandler } = logic;
    const { ixData } = store.getState();
    const { actionLists } = ixData;
    const eventTargets = mapFoundValues(events, getAffectedForEvent);
    if (!(0, _size.default)(eventTargets)) {
        return;
    }
    (0, _forEach.default)(eventTargets, (elements, key)=>{
        const event = events[key];
        const { action: eventAction, id: eventId, mediaQueries = ixData.mediaQueryKeys } = event;
        const { actionListId } = eventAction.config;
        if (!mediaQueriesEqual(mediaQueries, ixData.mediaQueryKeys)) {
            store.dispatch((0, _IX2EngineActions.mediaQueriesDefined)());
        }
        if (eventAction.actionTypeId === _sharedconstants.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION) {
            const configs = Array.isArray(event.config) ? event.config : [
                event.config
            ];
            // @ts-expect-error - TS7006 - Parameter 'eventConfig' implicitly has an 'any' type.
            configs.forEach((eventConfig)=>{
                const { continuousParameterGroupId } = eventConfig;
                const paramGroups = (0, _get.default)(actionLists, `${actionListId}.continuousParameterGroups`, []);
                const parameterGroup = (0, _find.default)(paramGroups, ({ id })=>id === continuousParameterGroupId);
                const smoothing = (eventConfig.smoothing || 0) / 100;
                const restingValue = (eventConfig.restingState || 0) / 100;
                if (!parameterGroup) {
                    return;
                }
                elements.forEach((eventTarget, index)=>{
                    const eventStateKey = eventId + COLON_DELIMITER + index;
                    createGroupInstances({
                        store,
                        eventStateKey,
                        eventTarget,
                        eventId,
                        eventConfig,
                        actionListId,
                        parameterGroup,
                        smoothing,
                        restingValue
                    });
                });
            });
        }
        if (eventAction.actionTypeId === _sharedconstants.ActionTypeConsts.GENERAL_START_ACTION || isQuickEffect(eventAction.actionTypeId)) {
            renderInitialGroup({
                store,
                actionListId,
                eventId
            });
        }
    });
    const handleEvent = (nativeEvent)=>{
        const { ixSession } = store.getState();
        forEachEventTarget(eventTargets, (element, eventId, eventStateKey)=>{
            const event = events[eventId];
            const oldState = ixSession.eventState[eventStateKey];
            const { action: eventAction, mediaQueries = ixData.mediaQueryKeys } = event;
            // Bypass event handler if current media query is not listed in event config
            if (!shouldAllowMediaQuery(mediaQueries, ixSession.mediaQueryKey)) {
                return;
            }
            const handleEventWithConfig = (eventConfig = {})=>{
                const newState = eventHandler({
                    store,
                    element,
                    event,
                    eventConfig,
                    nativeEvent,
                    eventStateKey
                }, oldState);
                if (!shallowEqual(newState, oldState)) {
                    store.dispatch((0, _IX2EngineActions.eventStateChanged)(eventStateKey, newState));
                }
            };
            if (eventAction.actionTypeId === _sharedconstants.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION) {
                const configs = Array.isArray(event.config) ? event.config : [
                    event.config
                ];
                configs.forEach(handleEventWithConfig);
            } else {
                handleEventWithConfig();
            }
        });
    };
    const handleEventThrottled = (0, _throttle.default)(handleEvent, THROTTLED_EVENT_WAIT);
    const addListeners = ({ target = document, // @ts-expect-error - TS7031 - Binding element 'types' implicitly has an 'any' type.
    types, // @ts-expect-error - TS7031 - Binding element 'shouldThrottle' implicitly has an 'any' type.
    throttle: shouldThrottle })=>{
        types.split(' ').filter(Boolean)// @ts-expect-error - TS7006 - Parameter 'type' implicitly has an 'any' type.
        .forEach((type)=>{
            const handlerFunc = shouldThrottle ? handleEventThrottled : handleEvent;
            target.addEventListener(type, handlerFunc);
            store.dispatch((0, _IX2EngineActions.eventListenerAdded)(target, [
                type,
                handlerFunc
            ]));
        });
    };
    if (Array.isArray(eventTypes)) {
        eventTypes.forEach(addListeners);
    } else if (typeof eventTypes === 'string') {
        addListeners(logic);
    }
}
/**
 * Injects CSS into the document to fix behavior issues across
 * different devices.
 */ function injectBehaviorCSSFixes(events) {
    if (!IS_MOBILE_SAFARI) {
        return;
    }
    const injectedSelectors = {};
    let cssText = '';
    for(const eventId in events){
        const { eventTypeId, target } = events[eventId];
        const selector = _IX2BrowserApi.getQuerySelector(target);
        // @ts-expect-error - TS2538 - Type 'null' cannot be used as an index type.
        if (injectedSelectors[selector]) {
            continue;
        }
        // add a "cursor: pointer" style rule to ensure that CLICK events get fired for IOS devices
        if (eventTypeId === _sharedconstants.EventTypeConsts.MOUSE_CLICK || eventTypeId === _sharedconstants.EventTypeConsts.MOUSE_SECOND_CLICK) {
            // @ts-expect-error - TS2538 - Type 'null' cannot be used as an index type.
            injectedSelectors[selector] = true;
            cssText += selector + '{' + 'cursor: pointer;' + 'touch-action: manipulation;' + '}';
        }
    }
    if (cssText) {
        const style = document.createElement('style');
        style.textContent = cssText;
        document.body.appendChild(style);
    }
}
function renderInitialGroup({ store, actionListId, eventId }) {
    const { ixData, ixSession } = store.getState();
    const { actionLists, events } = ixData;
    // @ts-expect-error - TS18048 - 'events' is possibly 'undefined'.
    const event = events[eventId];
    // @ts-expect-error - TS18048 - 'actionLists' is possibly 'undefined'.
    const actionList = actionLists[actionListId];
    // @ts-expect-error - Property 'useFirstGroupAsInitialState' does not exist on type 'ActionListType'.
    if (actionList && actionList.useFirstGroupAsInitialState) {
        const initialStateItems = (0, _get.default)(actionList, 'actionItemGroups[0].actionItems', []);
        // Bypass initial state render if current media query is not listed in event config
        const mediaQueries = (0, _get.default)(event, 'mediaQueries', ixData.mediaQueryKeys);
        if (!shouldAllowMediaQuery(mediaQueries, ixSession.mediaQueryKey)) {
            return;
        }
        initialStateItems.forEach((actionItem)=>{
            const { config: itemConfig, actionTypeId } = actionItem;
            const config = // When useEventTarget is explicitly true, use event target/targets to query elements
            // However, skip this condition when objectId is defined
            // @ts-expect-error - Property 'target' does not exist on type 'never'.
            itemConfig?.target?.useEventTarget === true && // @ts-expect-error - Property 'target' does not exist on type 'never'.
            itemConfig?.target?.objectId == null ? {
                target: event.target,
                targets: event.targets
            } : itemConfig;
            const itemElements = getAffectedElements({
                config,
                event,
                elementApi: _IX2BrowserApi
            });
            const shouldUsePlugin = isPluginType(actionTypeId);
            itemElements.forEach((element)=>{
                const pluginInstance = shouldUsePlugin ? createPluginInstance(actionTypeId)?.(element, actionItem) : null;
                createInstance({
                    destination: getDestinationValues({
                        element,
                        actionItem,
                        elementApi: _IX2BrowserApi
                    }, // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-expect-error
                    pluginInstance),
                    immediate: true,
                    store,
                    element,
                    eventId,
                    actionItem,
                    actionListId,
                    pluginInstance
                });
            });
        });
    }
}
function stopAllActionGroups({ store }) {
    const { ixInstances } = store.getState();
    (0, _forEach.default)(ixInstances, (instance)=>{
        if (!instance.continuous) {
            const { actionListId, verbose } = instance;
            removeInstance(instance, store);
            if (verbose) {
                store.dispatch((0, _IX2EngineActions.actionListPlaybackChanged)({
                    actionListId,
                    isPlaying: false
                }));
            }
        }
    });
}
function stopActionGroup({ // @ts-expect-error - TS7031 - Binding element 'store' implicitly has an 'any' type.
store, // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
eventId, // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
eventTarget, // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
eventStateKey, // @ts-expect-error - TS7031 - Binding element 'actionListId' implicitly has an 'any' type.
actionListId }) {
    const { ixInstances, ixSession } = store.getState();
    // Check for element boundary before stopping engine instances
    const eventElementRoot = ixSession.hasBoundaryNodes && eventTarget ? _IX2BrowserApi.getClosestElement(eventTarget, BOUNDARY_SELECTOR) : null;
    (0, _forEach.default)(ixInstances, (instance)=>{
        const boundaryMode = (0, _get.default)(instance, 'actionItem.config.target.boundaryMode');
        // Validate event key if eventStateKey was provided, otherwise default to true
        const validEventKey = eventStateKey ? instance.eventStateKey === eventStateKey : true;
        // Remove engine instances that match the required ids
        if (instance.actionListId === actionListId && instance.eventId === eventId && validEventKey) {
            // Avoid removal when root boundary does not contain instance element
            if (eventElementRoot && boundaryMode && !_IX2BrowserApi.elementContains(eventElementRoot, instance.element)) {
                return;
            }
            removeInstance(instance, store);
            if (instance.verbose) {
                store.dispatch((0, _IX2EngineActions.actionListPlaybackChanged)({
                    actionListId,
                    isPlaying: false
                }));
            }
        }
    });
}
function startActionGroup({ // @ts-expect-error - TS7031 - Binding element 'store' implicitly has an 'any' type.
store, // @ts-expect-error - TS7031 - Binding element 'eventId' implicitly has an 'any' type.
eventId, // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
eventTarget, // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
eventStateKey, // @ts-expect-error - TS7031 - Binding element 'actionListId' implicitly has an 'any' type.
actionListId, groupIndex = 0, // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
immediate, // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
verbose }) {
    const { ixData, ixSession } = store.getState();
    const { events } = ixData;
    const event = events[eventId] || {};
    const { mediaQueries = ixData.mediaQueryKeys } = event;
    const actionList = (0, _get.default)(ixData, `actionLists.${actionListId}`, {});
    const { actionItemGroups, useFirstGroupAsInitialState } = actionList;
    // Abort playback if no action groups
    if (!actionItemGroups || !actionItemGroups.length) {
        return false;
    }
    // Reset to first group when event loop is configured
    if (groupIndex >= actionItemGroups.length && (0, _get.default)(event, 'config.loop')) {
        groupIndex = 0;
    }
    // Skip initial state group during action list playback, as it should already be applied
    if (groupIndex === 0 && useFirstGroupAsInitialState) {
        groupIndex++;
    }
    // Identify first animated group and apply the initial QuickEffect delay
    const isFirstGroup = groupIndex === 0 || groupIndex === 1 && useFirstGroupAsInitialState;
    const instanceDelay = isFirstGroup && isQuickEffect(event.action?.actionTypeId) ? event.config.delay : undefined;
    // Abort playback if no action items exist at group index
    const actionItems = (0, _get.default)(actionItemGroups, [
        groupIndex,
        'actionItems'
    ], []);
    if (!actionItems.length) {
        return false;
    }
    // Abort playback if current media query is not listed in event config
    if (!shouldAllowMediaQuery(mediaQueries, ixSession.mediaQueryKey)) {
        return false;
    }
    // Limit affected elements when event target is within a boundary node
    const eventElementRoot = ixSession.hasBoundaryNodes && eventTarget ? _IX2BrowserApi.getClosestElement(eventTarget, BOUNDARY_SELECTOR) : null;
    const carrierIndex = getMaxDurationItemIndex(actionItems);
    let groupStartResult = false;
    // @ts-expect-error - TS7006 - Parameter 'actionItem' implicitly has an 'any' type. | TS7006 - Parameter 'actionIndex' implicitly has an 'any' type.
    actionItems.forEach((actionItem, actionIndex)=>{
        const { config, actionTypeId } = actionItem;
        const shouldUsePlugin = isPluginType(actionTypeId);
        const { target } = config;
        if (!target) {
            return;
        }
        const elementRoot = target.boundaryMode ? eventElementRoot : null;
        const elements = getAffectedElements({
            config,
            event,
            eventTarget,
            elementRoot,
            elementApi: _IX2BrowserApi
        });
        elements.forEach((element, elementIndex)=>{
            const pluginInstance = shouldUsePlugin ? createPluginInstance(actionTypeId)?.(element, actionItem) : null;
            const pluginDuration = shouldUsePlugin ? getPluginDuration(actionTypeId)(element, actionItem) : null;
            groupStartResult = true;
            const isCarrier = carrierIndex === actionIndex && elementIndex === 0;
            const computedStyle = getComputedStyle({
                element,
                actionItem
            });
            const destination = getDestinationValues({
                element,
                actionItem,
                elementApi: _IX2BrowserApi
            }, // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            pluginInstance);
            createInstance({
                store,
                element,
                actionItem,
                eventId,
                eventTarget,
                eventStateKey,
                actionListId,
                groupIndex,
                isCarrier,
                computedStyle,
                destination,
                immediate,
                verbose,
                pluginInstance,
                pluginDuration,
                instanceDelay
            });
        });
    });
    return groupStartResult;
}
// @ts-expect-error - TS7006 - Parameter 'options' implicitly has an 'any' type.
function createInstance(options) {
    const { store, computedStyle, ...rest } = options;
    const { element, actionItem, immediate, pluginInstance, continuous, restingValue, eventId } = rest;
    const autoStart = !continuous;
    const instanceId = getInstanceId();
    const { ixElements, ixSession, ixData } = store.getState();
    const elementId = getElementId(ixElements, element);
    const { refState } = ixElements[elementId] || {};
    const refType = _IX2BrowserApi.getRefType(element);
    const skipMotion = // @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'any' can't be used to index type '{ readonly TRANSFORM_MOVE: true; readonly TRANSFORM_SCALE: true; readonly TRANSFORM_ROTATE: true; readonly TRANSFORM_SKEW: true; readonly STYLE_SIZE: true; readonly STYLE_FILTER: true; readonly STYLE_FONT_VARIATION: true; }'.
    ixSession.reducedMotion && _sharedconstants.ReducedMotionTypes[actionItem.actionTypeId];
    let skipToValue;
    if (skipMotion && continuous) {
        switch(ixData.events[eventId]?.eventTypeId){
            case _sharedconstants.EventTypeConsts.MOUSE_MOVE:
            case _sharedconstants.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
                skipToValue = restingValue;
                break;
            default:
                skipToValue = 0.5;
                break;
        }
    }
    const origin = getInstanceOrigin(element, refState, computedStyle, actionItem, _IX2BrowserApi, // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    pluginInstance);
    store.dispatch((0, _IX2EngineActions.instanceAdded)({
        instanceId,
        elementId,
        origin,
        refType,
        skipMotion,
        skipToValue,
        ...rest
    }));
    dispatchCustomEvent(document.body, 'ix2-animation-started', instanceId);
    if (immediate) {
        renderImmediateInstance(store, instanceId);
        return;
    }
    observeStore({
        store,
        // @ts-expect-error - TS7031 - Binding element 'ixInstances' implicitly has an 'any' type.
        select: ({ ixInstances })=>ixInstances[instanceId],
        onChange: handleInstanceChange
    });
    if (autoStart) {
        store.dispatch((0, _IX2EngineActions.instanceStarted)(instanceId, ixSession.tick));
    }
}
function removeInstance(instance, store) {
    dispatchCustomEvent(document.body, 'ix2-animation-stopping', {
        instanceId: instance.id,
        state: store.getState()
    });
    const { elementId, actionItem } = instance;
    const { ixElements } = store.getState();
    const { ref, refType } = ixElements[elementId] || {};
    if (refType === HTML_ELEMENT) {
        cleanupHTMLElement(ref, actionItem, _IX2BrowserApi);
    }
    store.dispatch((0, _IX2EngineActions.instanceRemoved)(instance.id));
}
function dispatchCustomEvent(element, eventName, detail) {
    const event = document.createEvent('CustomEvent');
    event.initCustomEvent(eventName, true, true, detail);
    // @ts-expect-error - TS18047 - 'element' is possibly 'null'.
    element.dispatchEvent(event);
}
function renderImmediateInstance(store, instanceId) {
    const { ixParameters } = store.getState();
    store.dispatch((0, _IX2EngineActions.instanceStarted)(instanceId, 0));
    store.dispatch((0, _IX2EngineActions.animationFrameChanged)(performance.now(), ixParameters));
    const { ixInstances } = store.getState();
    handleInstanceChange(ixInstances[instanceId], store);
}
function handleInstanceChange(instance, store) {
    const { active, continuous, complete, elementId, actionItem, actionTypeId, renderType, current, groupIndex, eventId, eventTarget, eventStateKey, actionListId, isCarrier, styleProp, verbose, pluginInstance } = instance;
    // Bypass render if current media query is not listed in event config
    const { ixData, ixSession } = store.getState();
    const { events } = ixData;
    const event = events && events[eventId] ? events[eventId] : {};
    // @ts-expect-error - TS2339 -  Property 'mediaQueries' does not exist on type '{} | undefined'.
    const { mediaQueries = ixData.mediaQueryKeys } = event;
    if (!shouldAllowMediaQuery(mediaQueries, ixSession.mediaQueryKey)) {
        return;
    }
    if (continuous || active || complete) {
        if (current || renderType === RENDER_GENERAL && complete) {
            // Render current values to ref state and grab latest
            store.dispatch((0, _IX2EngineActions.elementStateChanged)(elementId, actionTypeId, current, actionItem));
            const { ixElements } = store.getState();
            const { ref, refType, refState } = ixElements[elementId] || {};
            const actionState = refState && refState[actionTypeId];
            // Render HTML and plugin elements
            if (refType === HTML_ELEMENT || isPluginType(actionTypeId)) {
                renderHTMLElement(ref, refState, actionState, eventId, actionItem, styleProp, _IX2BrowserApi, renderType, pluginInstance);
            }
        }
        if (complete) {
            if (isCarrier) {
                // @ts-expect-error - TS2345 - Argument of type '{ store: any; eventId: any; eventTarget: any; eventStateKey: any; actionListId: any; groupIndex: any; verbose: any; }' is not assignable to parameter of type '{ store: any; eventId: any; eventTarget: any; eventStateKey: any; actionListId: any; groupIndex?: number | undefined; immediate: any; verbose: any; }'.
                const started = startActionGroup({
                    store,
                    eventId,
                    eventTarget,
                    eventStateKey,
                    actionListId,
                    groupIndex: groupIndex + 1,
                    verbose
                });
                if (verbose && !started) {
                    store.dispatch((0, _IX2EngineActions.actionListPlaybackChanged)({
                        actionListId,
                        isPlaying: false
                    }));
                }
            }
            removeInstance(instance, store);
        }
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIklYMlZhbmlsbGFFbmdpbmUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWVudiBicm93c2VyICovXG5pbXBvcnQgZmluZCBmcm9tICdsb2Rhc2gvZmluZCc7XG5pbXBvcnQgZ2V0IGZyb20gJ2xvZGFzaC9nZXQnO1xuaW1wb3J0IHNpemUgZnJvbSAnbG9kYXNoL3NpemUnO1xuaW1wb3J0IG9taXRCeSBmcm9tICdsb2Rhc2gvb21pdEJ5JztcbmltcG9ydCBpc0VtcHR5IGZyb20gJ2xvZGFzaC9pc0VtcHR5JztcbmltcG9ydCBtYXBWYWx1ZXMgZnJvbSAnbG9kYXNoL21hcFZhbHVlcyc7XG5pbXBvcnQgZm9yRWFjaCBmcm9tICdsb2Rhc2gvZm9yRWFjaCc7XG5pbXBvcnQgdGhyb3R0bGUgZnJvbSAnbG9kYXNoL3Rocm90dGxlJztcbmltcG9ydCB7XG4gIEV2ZW50VHlwZUNvbnN0cyxcbiAgQWN0aW9uVHlwZUNvbnN0cyxcbiAgSVgyRW5naW5lQ29uc3RhbnRzLFxuICBRdWlja0VmZmVjdElkcyxcbiAgUmVkdWNlZE1vdGlvblR5cGVzLFxufSBmcm9tICdAcGFja2FnZXMvc3lzdGVtcy9peDIvc2hhcmVkLWNvbnN0YW50cyc7XG5cbmNvbnN0IFF1aWNrRWZmZWN0c0lkTGlzdCA9IE9iamVjdC5rZXlzKFF1aWNrRWZmZWN0SWRzKTtcblxuY29uc3QgaXNRdWlja0VmZmVjdCA9IChhY3Rpb25UeXBlSWQ6IHN0cmluZykgPT5cbiAgUXVpY2tFZmZlY3RzSWRMaXN0LmluY2x1ZGVzKGFjdGlvblR5cGVJZCk7XG5cbmltcG9ydCB7SVgyVmFuaWxsYVV0aWxzLCBJWDJWYW5pbGxhUGx1Z2luc30gZnJvbSAnQHBhY2thZ2VzL3N5c3RlbXMvaXgyL3NoYXJlZCc7XG5cbmNvbnN0IHtcbiAgQ09MT05fREVMSU1JVEVSLFxuICBCT1VOREFSWV9TRUxFQ1RPUixcbiAgSFRNTF9FTEVNRU5ULFxuICBSRU5ERVJfR0VORVJBTCxcbiAgV19NT0RfSVgsXG59ID0gSVgyRW5naW5lQ29uc3RhbnRzO1xuXG5jb25zdCB7XG4gIGdldEFmZmVjdGVkRWxlbWVudHMsXG4gIGdldEVsZW1lbnRJZCxcbiAgZ2V0RGVzdGluYXRpb25WYWx1ZXMsXG4gIG9ic2VydmVTdG9yZSxcbiAgZ2V0SW5zdGFuY2VJZCxcbiAgcmVuZGVySFRNTEVsZW1lbnQsXG4gIGNsZWFyQWxsU3R5bGVzLFxuICBnZXRNYXhEdXJhdGlvbkl0ZW1JbmRleCxcbiAgZ2V0Q29tcHV0ZWRTdHlsZSxcbiAgZ2V0SW5zdGFuY2VPcmlnaW4sXG4gIHJlZHVjZUxpc3RUb0dyb3VwLFxuICBzaG91bGROYW1lc3BhY2VFdmVudFBhcmFtZXRlcixcbiAgZ2V0TmFtZXNwYWNlZFBhcmFtZXRlcklkLFxuICBzaG91bGRBbGxvd01lZGlhUXVlcnksXG4gIGNsZWFudXBIVE1MRWxlbWVudCxcbiAgY2xlYXJPYmplY3RDYWNoZSxcbiAgc3RyaW5naWZ5VGFyZ2V0LFxuICBtZWRpYVF1ZXJpZXNFcXVhbCxcbiAgc2hhbGxvd0VxdWFsLFxufSA9IElYMlZhbmlsbGFVdGlscztcbmNvbnN0IHtpc1BsdWdpblR5cGUsIGNyZWF0ZVBsdWdpbkluc3RhbmNlLCBnZXRQbHVnaW5EdXJhdGlvbn0gPVxuICBJWDJWYW5pbGxhUGx1Z2lucztcblxuaW1wb3J0IHtcbiAgcmF3RGF0YUltcG9ydGVkLFxuICBzZXNzaW9uSW5pdGlhbGl6ZWQsXG4gIHNlc3Npb25TdGFydGVkLFxuICBzZXNzaW9uU3RvcHBlZCxcbiAgZXZlbnRMaXN0ZW5lckFkZGVkLFxuICBldmVudFN0YXRlQ2hhbmdlZCxcbiAgYW5pbWF0aW9uRnJhbWVDaGFuZ2VkLFxuICBpbnN0YW5jZUFkZGVkLFxuICBpbnN0YW5jZVN0YXJ0ZWQsXG4gIGluc3RhbmNlUmVtb3ZlZCxcbiAgZWxlbWVudFN0YXRlQ2hhbmdlZCxcbiAgYWN0aW9uTGlzdFBsYXliYWNrQ2hhbmdlZCxcbiAgdmlld3BvcnRXaWR0aENoYW5nZWQsXG4gIG1lZGlhUXVlcmllc0RlZmluZWQsXG4gIElYMlJhd0RhdGEsXG59IGZyb20gJy4uL2FjdGlvbnMvSVgyRW5naW5lQWN0aW9ucyc7XG5cbmltcG9ydCAqIGFzIGVsZW1lbnRBcGkgZnJvbSAnLi9JWDJCcm93c2VyQXBpJztcblxuaW1wb3J0IElYMlZhbmlsbGFFdmVudHMgZnJvbSAnLi9JWDJWYW5pbGxhRXZlbnRzJztcbmltcG9ydCB7XG4gIElYMkVuZ2luZVJlZHVjZXJTdGF0ZVNoYXBlLFxuICBJWDJFbmdpbmVSZWR1Y2VyU3RvcmUsXG59IGZyb20gJy4uL3JlZHVjZXJzL0lYMlJlZHVjZXInO1xuaW1wb3J0IHtBY3Rpb25MaXN0SWR9IGZyb20gJ0BwYWNrYWdlcy9zeXN0ZW1zL2l4Mi90eXBlcy1jb3JlJztcblxuY29uc3QgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuY29uc3QgSVNfTU9CSUxFX1NBRkFSSSA9IHVhLm1hdGNoKC9pUGFkL2kpIHx8IHVhLm1hdGNoKC9pUGhvbmUvKTtcblxuLy8gS2VlcCB0aHJvdHRsZWQgZXZlbnRzIGF0IH44MGZwcyB0byByZWR1Y2UgcmVmbG93cyB3aGlsZSBtYWludGFpbmluZyByZW5kZXIgYWNjdXJhY3lcbmNvbnN0IFRIUk9UVExFRF9FVkVOVF9XQUlUID0gMTI7XG5cbmV4cG9ydCBmdW5jdGlvbiBvYnNlcnZlUmVxdWVzdHMoc3RvcmU6IElYMkVuZ2luZVJlZHVjZXJTdG9yZSkge1xuICBvYnNlcnZlU3RvcmUoe1xuICAgIHN0b3JlLFxuICAgIHNlbGVjdDogKHtcbiAgICAgIGl4UmVxdWVzdCxcbiAgICB9OiB7XG4gICAgICBpeFJlcXVlc3Q6IElYMkVuZ2luZVJlZHVjZXJTdGF0ZVNoYXBlWydpeFJlcXVlc3QnXTtcbiAgICB9KSA9PiBpeFJlcXVlc3QucHJldmlldyxcbiAgICBvbkNoYW5nZTogaGFuZGxlUHJldmlld1JlcXVlc3QsXG4gIH0pO1xuICBvYnNlcnZlU3RvcmUoe1xuICAgIHN0b3JlLFxuICAgIHNlbGVjdDogKHtcbiAgICAgIGl4UmVxdWVzdCxcbiAgICB9OiB7XG4gICAgICBpeFJlcXVlc3Q6IElYMkVuZ2luZVJlZHVjZXJTdGF0ZVNoYXBlWydpeFJlcXVlc3QnXTtcbiAgICB9KSA9PiBpeFJlcXVlc3QucGxheWJhY2ssXG4gICAgb25DaGFuZ2U6IGhhbmRsZVBsYXliYWNrUmVxdWVzdCxcbiAgfSk7XG4gIG9ic2VydmVTdG9yZSh7XG4gICAgc3RvcmUsXG4gICAgc2VsZWN0OiAoe1xuICAgICAgaXhSZXF1ZXN0LFxuICAgIH06IHtcbiAgICAgIGl4UmVxdWVzdDogSVgyRW5naW5lUmVkdWNlclN0YXRlU2hhcGVbJ2l4UmVxdWVzdCddO1xuICAgIH0pID0+IGl4UmVxdWVzdC5zdG9wLFxuICAgIG9uQ2hhbmdlOiBoYW5kbGVTdG9wUmVxdWVzdCxcbiAgfSk7XG4gIG9ic2VydmVTdG9yZSh7XG4gICAgc3RvcmUsXG4gICAgc2VsZWN0OiAoe1xuICAgICAgaXhSZXF1ZXN0LFxuICAgIH06IHtcbiAgICAgIGl4UmVxdWVzdDogSVgyRW5naW5lUmVkdWNlclN0YXRlU2hhcGVbJ2l4UmVxdWVzdCddO1xuICAgIH0pID0+IGl4UmVxdWVzdC5jbGVhcixcbiAgICBvbkNoYW5nZTogaGFuZGxlQ2xlYXJSZXF1ZXN0LFxuICB9KTtcbn1cblxuZnVuY3Rpb24gb2JzZXJ2ZU1lZGlhUXVlcnlDaGFuZ2Uoc3RvcmU6IElYMkVuZ2luZVJlZHVjZXJTdG9yZSkge1xuICBvYnNlcnZlU3RvcmUoe1xuICAgIHN0b3JlLFxuICAgIHNlbGVjdDogKHtcbiAgICAgIGl4U2Vzc2lvbixcbiAgICB9OiB7XG4gICAgICBpeFNlc3Npb246IElYMkVuZ2luZVJlZHVjZXJTdGF0ZVNoYXBlWydpeFNlc3Npb24nXTtcbiAgICB9KSA9PiBpeFNlc3Npb24ubWVkaWFRdWVyeUtleSxcbiAgICBvbkNoYW5nZTogKCkgPT4ge1xuICAgICAgc3RvcEVuZ2luZShzdG9yZSk7XG4gICAgICBjbGVhckFsbFN0eWxlcyh7c3RvcmUsIGVsZW1lbnRBcGl9KTtcbiAgICAgIHN0YXJ0RW5naW5lKHtzdG9yZSwgYWxsb3dFdmVudHM6IHRydWV9KTtcbiAgICAgIGRpc3BhdGNoUGFnZVVwZGF0ZUV2ZW50KCk7XG4gICAgfSxcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG9ic2VydmVPbmVSZW5kZXJUaWNrKFxuICBzdG9yZTogSVgyRW5naW5lUmVkdWNlclN0b3JlLFxuICBvblRpY2s6IChub3c6IGFueSB8IG51bWJlcikgPT4gdm9pZFxuKSB7XG4gIGNvbnN0IHVuc3Vic2NyaWJlID0gb2JzZXJ2ZVN0b3JlKHtcbiAgICBzdG9yZSxcbiAgICBzZWxlY3Q6ICh7XG4gICAgICBpeFNlc3Npb24sXG4gICAgfToge1xuICAgICAgaXhTZXNzaW9uOiBJWDJFbmdpbmVSZWR1Y2VyU3RhdGVTaGFwZVsnaXhTZXNzaW9uJ107XG4gICAgfSkgPT4gaXhTZXNzaW9uLnRpY2ssXG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTNzAwNiAtIFBhcmFtZXRlciAndGljaycgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS5cbiAgICBvbkNoYW5nZTogKHRpY2spID0+IHtcbiAgICAgIG9uVGljayh0aWNrKTtcbiAgICAgIHVuc3Vic2NyaWJlKCk7XG4gICAgfSxcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVByZXZpZXdSZXF1ZXN0KFxuICB7cmF3RGF0YSwgZGVmZXJ9OiB7cmF3RGF0YTogSVgyUmF3RGF0YTsgZGVmZXI6IGJvb2xlYW59LFxuICBzdG9yZTogSVgyRW5naW5lUmVkdWNlclN0b3JlXG4pIHtcbiAgY29uc3Qgc3RhcnQgPSAoKSA9PiB7XG4gICAgc3RhcnRFbmdpbmUoe3N0b3JlLCByYXdEYXRhLCBhbGxvd0V2ZW50czogdHJ1ZX0pO1xuICAgIGRpc3BhdGNoUGFnZVVwZGF0ZUV2ZW50KCk7XG4gIH07XG4gIGRlZmVyID8gc2V0VGltZW91dChzdGFydCwgMCkgOiBzdGFydCgpO1xufVxuXG5mdW5jdGlvbiBkaXNwYXRjaFBhZ2VVcGRhdGVFdmVudCgpIHtcbiAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ0lYMl9QQUdFX1VQREFURScpKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlUGxheWJhY2tSZXF1ZXN0KHBsYXliYWNrOiBhbnksIHN0b3JlOiBJWDJFbmdpbmVSZWR1Y2VyU3RvcmUpIHtcbiAgY29uc3Qge1xuICAgIGFjdGlvblR5cGVJZCxcbiAgICBhY3Rpb25MaXN0SWQsXG4gICAgYWN0aW9uSXRlbUlkLFxuICAgIGV2ZW50SWQsXG4gICAgYWxsb3dFdmVudHMsXG4gICAgaW1tZWRpYXRlLFxuICAgIHRlc3RNYW51YWwsXG4gICAgdmVyYm9zZSA9IHRydWUsXG4gIH0gPSBwbGF5YmFjaztcbiAgbGV0IHtyYXdEYXRhfSA9IHBsYXliYWNrO1xuXG4gIGlmIChhY3Rpb25MaXN0SWQgJiYgYWN0aW9uSXRlbUlkICYmIHJhd0RhdGEgJiYgaW1tZWRpYXRlKSB7XG4gICAgY29uc3QgYWN0aW9uTGlzdCA9IHJhd0RhdGEuYWN0aW9uTGlzdHNbYWN0aW9uTGlzdElkXTtcblxuICAgIGlmIChhY3Rpb25MaXN0KSB7XG4gICAgICByYXdEYXRhID0gcmVkdWNlTGlzdFRvR3JvdXAoe1xuICAgICAgICBhY3Rpb25MaXN0LFxuICAgICAgICBhY3Rpb25JdGVtSWQsXG4gICAgICAgIHJhd0RhdGEsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBzdGFydEVuZ2luZSh7c3RvcmUsIHJhd0RhdGEsIGFsbG93RXZlbnRzLCB0ZXN0TWFudWFsfSk7XG5cbiAgaWYgKFxuICAgIChhY3Rpb25MaXN0SWQgJiYgYWN0aW9uVHlwZUlkID09PSBBY3Rpb25UeXBlQ29uc3RzLkdFTkVSQUxfU1RBUlRfQUNUSU9OKSB8fFxuICAgIGlzUXVpY2tFZmZlY3QoYWN0aW9uVHlwZUlkKVxuICApIHtcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFMyMzQ1IC0gQXJndW1lbnQgb2YgdHlwZSAneyBzdG9yZTogYW55OyBhY3Rpb25MaXN0SWQ6IGFueTsgfScgaXMgbm90IGFzc2lnbmFibGUgdG8gcGFyYW1ldGVyIG9mIHR5cGUgJ3sgc3RvcmU6IGFueTsgZXZlbnRJZDogYW55OyBldmVudFRhcmdldDogYW55OyBldmVudFN0YXRlS2V5OiBhbnk7IGFjdGlvbkxpc3RJZDogYW55OyB9Jy5cbiAgICBzdG9wQWN0aW9uR3JvdXAoe3N0b3JlLCBhY3Rpb25MaXN0SWR9KTtcbiAgICByZW5kZXJJbml0aWFsR3JvdXAoe3N0b3JlLCBhY3Rpb25MaXN0SWQsIGV2ZW50SWR9KTtcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFMyMzQ1IC0gQXJndW1lbnQgb2YgdHlwZSAneyBzdG9yZTogYW55OyBldmVudElkOiBhbnk7IGFjdGlvbkxpc3RJZDogYW55OyBpbW1lZGlhdGU6IGFueTsgdmVyYm9zZTogYW55OyB9JyBpcyBub3QgYXNzaWduYWJsZSB0byBwYXJhbWV0ZXIgb2YgdHlwZSAneyBzdG9yZTogYW55OyBldmVudElkOiBhbnk7IGV2ZW50VGFyZ2V0OiBhbnk7IGV2ZW50U3RhdGVLZXk6IGFueTsgYWN0aW9uTGlzdElkOiBhbnk7IGdyb3VwSW5kZXg/OiBudW1iZXIgfCB1bmRlZmluZWQ7IGltbWVkaWF0ZTogYW55OyB2ZXJib3NlOiBhbnk7IH0nLlxuICAgIGNvbnN0IHN0YXJ0ZWQgPSBzdGFydEFjdGlvbkdyb3VwKHtcbiAgICAgIHN0b3JlLFxuICAgICAgZXZlbnRJZCxcbiAgICAgIGFjdGlvbkxpc3RJZCxcbiAgICAgIGltbWVkaWF0ZSxcbiAgICAgIHZlcmJvc2UsXG4gICAgfSk7XG4gICAgaWYgKHZlcmJvc2UgJiYgc3RhcnRlZCkge1xuICAgICAgc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgIGFjdGlvbkxpc3RQbGF5YmFja0NoYW5nZWQoe2FjdGlvbkxpc3RJZCwgaXNQbGF5aW5nOiAhaW1tZWRpYXRlfSlcbiAgICAgICk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVN0b3BSZXF1ZXN0KFxuICB7YWN0aW9uTGlzdElkfToge2FjdGlvbkxpc3RJZDogQWN0aW9uTGlzdElkfSxcbiAgc3RvcmU6IElYMkVuZ2luZVJlZHVjZXJTdG9yZVxuKSB7XG4gIGlmIChhY3Rpb25MaXN0SWQpIHtcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFMyMzQ1IC0gQXJndW1lbnQgb2YgdHlwZSAneyBzdG9yZTogYW55OyBhY3Rpb25MaXN0SWQ6IGFueTsgfScgaXMgbm90IGFzc2lnbmFibGUgdG8gcGFyYW1ldGVyIG9mIHR5cGUgJ3sgc3RvcmU6IGFueTsgZXZlbnRJZDogYW55OyBldmVudFRhcmdldDogYW55OyBldmVudFN0YXRlS2V5OiBhbnk7IGFjdGlvbkxpc3RJZDogYW55OyB9Jy5cbiAgICBzdG9wQWN0aW9uR3JvdXAoe3N0b3JlLCBhY3Rpb25MaXN0SWR9KTtcbiAgfSBlbHNlIHtcbiAgICBzdG9wQWxsQWN0aW9uR3JvdXBzKHtzdG9yZX0pO1xuICB9XG4gIHN0b3BFbmdpbmUoc3RvcmUpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVDbGVhclJlcXVlc3Qoc3RhdGU6IGFueSwgc3RvcmU6IElYMkVuZ2luZVJlZHVjZXJTdG9yZSkge1xuICBzdG9wRW5naW5lKHN0b3JlKTtcbiAgY2xlYXJBbGxTdHlsZXMoe3N0b3JlLCBlbGVtZW50QXBpfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGFydEVuZ2luZSh7XG4gIHN0b3JlLFxuICByYXdEYXRhLFxuICBhbGxvd0V2ZW50cyxcbiAgdGVzdE1hbnVhbCxcbn06IHtcbiAgc3RvcmU6IElYMkVuZ2luZVJlZHVjZXJTdG9yZTtcbiAgcmF3RGF0YT86IElYMlJhd0RhdGE7XG4gIHRlc3RNYW51YWw/OiBib29sZWFuO1xuICBhbGxvd0V2ZW50cz86IGJvb2xlYW47XG59KSB7XG4gIGNvbnN0IHtpeFNlc3Npb259ID0gc3RvcmUuZ2V0U3RhdGUoKTtcbiAgaWYgKHJhd0RhdGEpIHtcbiAgICBzdG9yZS5kaXNwYXRjaChyYXdEYXRhSW1wb3J0ZWQocmF3RGF0YSkpO1xuICB9XG4gIGlmICghaXhTZXNzaW9uLmFjdGl2ZSkge1xuICAgIHN0b3JlLmRpc3BhdGNoKFxuICAgICAgc2Vzc2lvbkluaXRpYWxpemVkKHtcbiAgICAgICAgaGFzQm91bmRhcnlOb2RlczogQm9vbGVhbihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKEJPVU5EQVJZX1NFTEVDVE9SKSksXG4gICAgICAgIHJlZHVjZWRNb3Rpb246XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5oYXNBdHRyaWJ1dGUoJ2RhdGEtd2YtaXgtdmFjYXRpb24nKSAmJlxuICAgICAgICAgIHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1yZWR1Y2VkLW1vdGlvbiknKS5tYXRjaGVzLFxuICAgICAgfSlcbiAgICApO1xuICAgIGlmIChhbGxvd0V2ZW50cykge1xuICAgICAgYmluZEV2ZW50cyhzdG9yZSk7XG4gICAgICBhZGREb2N1bWVudENsYXNzKCk7XG5cbiAgICAgIGlmIChzdG9yZS5nZXRTdGF0ZSgpLml4U2Vzc2lvbi5oYXNEZWZpbmVkTWVkaWFRdWVyaWVzKSB7XG4gICAgICAgIG9ic2VydmVNZWRpYVF1ZXJ5Q2hhbmdlKHN0b3JlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgc3RvcmUuZGlzcGF0Y2goc2Vzc2lvblN0YXJ0ZWQoKSk7XG4gICAgc3RhcnRSZW5kZXJMb29wKHN0b3JlLCB0ZXN0TWFudWFsKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGREb2N1bWVudENsYXNzKCkge1xuICBjb25zdCB7ZG9jdW1lbnRFbGVtZW50fSA9IGRvY3VtZW50O1xuICBpZiAoZG9jdW1lbnRFbGVtZW50LmNsYXNzTmFtZS5pbmRleE9mKFdfTU9EX0lYKSA9PT0gLTEpIHtcbiAgICBkb2N1bWVudEVsZW1lbnQuY2xhc3NOYW1lICs9IGAgJHtXX01PRF9JWH1gO1xuICB9XG59XG5cbmZ1bmN0aW9uIHN0YXJ0UmVuZGVyTG9vcChzdG9yZTogSVgyRW5naW5lUmVkdWNlclN0b3JlLCB0ZXN0TWFudWFsPzogYm9vbGVhbikge1xuICBjb25zdCBoYW5kbGVGcmFtZSA9IChub3c6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IHtpeFNlc3Npb24sIGl4UGFyYW1ldGVyc30gPSBzdG9yZS5nZXRTdGF0ZSgpO1xuICAgIGlmIChpeFNlc3Npb24uYWN0aXZlKSB7XG4gICAgICBzdG9yZS5kaXNwYXRjaChhbmltYXRpb25GcmFtZUNoYW5nZWQobm93LCBpeFBhcmFtZXRlcnMpKTtcbiAgICAgIGlmICh0ZXN0TWFudWFsKSB7XG4gICAgICAgIG9ic2VydmVPbmVSZW5kZXJUaWNrKHN0b3JlLCBoYW5kbGVGcmFtZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoaGFuZGxlRnJhbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgaGFuZGxlRnJhbWUod2luZG93LnBlcmZvcm1hbmNlLm5vdygpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0b3BFbmdpbmUoc3RvcmU6IElYMkVuZ2luZVJlZHVjZXJTdG9yZSkge1xuICBjb25zdCB7aXhTZXNzaW9ufSA9IHN0b3JlLmdldFN0YXRlKCk7XG4gIGlmIChpeFNlc3Npb24uYWN0aXZlKSB7XG4gICAgY29uc3Qge2V2ZW50TGlzdGVuZXJzfSA9IGl4U2Vzc2lvbjtcbiAgICBldmVudExpc3RlbmVycy5mb3JFYWNoKGNsZWFyRXZlbnRMaXN0ZW5lcik7XG4gICAgY2xlYXJPYmplY3RDYWNoZSgpO1xuICAgIHN0b3JlLmRpc3BhdGNoKHNlc3Npb25TdG9wcGVkKCkpO1xuICB9XG59XG5cbi8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwMzEgLSBCaW5kaW5nIGVsZW1lbnQgJ3RhcmdldCcgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS4gfCBUUzcwMzEgLSBCaW5kaW5nIGVsZW1lbnQgJ2xpc3RlbmVyUGFyYW1zJyBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlLlxuZnVuY3Rpb24gY2xlYXJFdmVudExpc3RlbmVyKHt0YXJnZXQsIGxpc3RlbmVyUGFyYW1zfSkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLXNwcmVhZFxuICB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lci5hcHBseSh0YXJnZXQsIGxpc3RlbmVyUGFyYW1zKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlR3JvdXBJbnN0YW5jZXMoe1xuICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFM3MDMxIC0gQmluZGluZyBlbGVtZW50ICdzdG9yZScgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS5cbiAgc3RvcmUsXG4gIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwMzEgLSBCaW5kaW5nIGVsZW1lbnQgJ2V2ZW50U3RhdGVLZXknIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuXG4gIGV2ZW50U3RhdGVLZXksXG4gIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwMzEgLSBCaW5kaW5nIGVsZW1lbnQgJ2V2ZW50VGFyZ2V0JyBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlLlxuICBldmVudFRhcmdldCxcbiAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTNzAzMSAtIEJpbmRpbmcgZWxlbWVudCAnZXZlbnRJZCcgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS5cbiAgZXZlbnRJZCxcbiAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTNzAzMSAtIEJpbmRpbmcgZWxlbWVudCAnZXZlbnRDb25maWcnIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuXG4gIGV2ZW50Q29uZmlnLFxuICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFM3MDMxIC0gQmluZGluZyBlbGVtZW50ICdhY3Rpb25MaXN0SWQnIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuXG4gIGFjdGlvbkxpc3RJZCxcbiAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTNzAzMSAtIEJpbmRpbmcgZWxlbWVudCAncGFyYW1ldGVyR3JvdXAnIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuXG4gIHBhcmFtZXRlckdyb3VwLFxuICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFM3MDMxIC0gQmluZGluZyBlbGVtZW50ICdzbW9vdGhpbmcnIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuXG4gIHNtb290aGluZyxcbiAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTNzAzMSAtIEJpbmRpbmcgZWxlbWVudCAncmVzdGluZ1ZhbHVlJyBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlLlxuICByZXN0aW5nVmFsdWUsXG59KSB7XG4gIGNvbnN0IHtpeERhdGEsIGl4U2Vzc2lvbn0gPSBzdG9yZS5nZXRTdGF0ZSgpO1xuICBjb25zdCB7ZXZlbnRzfSA9IGl4RGF0YTtcbiAgY29uc3QgZXZlbnQgPSBldmVudHNbZXZlbnRJZF07XG4gIGNvbnN0IHtldmVudFR5cGVJZH0gPSBldmVudDtcbiAgY29uc3QgdGFyZ2V0Q2FjaGU6IFJlY29yZDxzdHJpbmcsIGFueT4gPSB7fTtcbiAgY29uc3QgaW5zdGFuY2VBY3Rpb25Hcm91cHM6IFJlY29yZDxzdHJpbmcsIGFueT4gPSB7fTtcbiAgY29uc3QgaW5zdGFuY2VDb25maWdzOiBBcnJheTxcbiAgICB8IGFueVxuICAgIHwge1xuICAgICAgICBlbGVtZW50OiBIVE1MRWxlbWVudCB8IGFueTtcbiAgICAgICAga2V5OiBzdHJpbmc7XG4gICAgICB9XG4gID4gPSBbXTtcblxuICBjb25zdCB7Y29udGludW91c0FjdGlvbkdyb3Vwc30gPSBwYXJhbWV0ZXJHcm91cDtcbiAgbGV0IHtpZDogcGFyYW1ldGVySWR9ID0gcGFyYW1ldGVyR3JvdXA7XG4gIGlmIChzaG91bGROYW1lc3BhY2VFdmVudFBhcmFtZXRlcihldmVudFR5cGVJZCwgZXZlbnRDb25maWcpKSB7XG4gICAgcGFyYW1ldGVySWQgPSBnZXROYW1lc3BhY2VkUGFyYW1ldGVySWQoZXZlbnRTdGF0ZUtleSwgcGFyYW1ldGVySWQpO1xuICB9XG5cbiAgLy8gTGltaXQgYWZmZWN0ZWQgZWxlbWVudHMgd2hlbiBldmVudCB0YXJnZXQgaXMgd2l0aGluIGEgYm91bmRhcnkgbm9kZVxuICBjb25zdCBldmVudEVsZW1lbnRSb290ID1cbiAgICBpeFNlc3Npb24uaGFzQm91bmRhcnlOb2RlcyAmJiBldmVudFRhcmdldFxuICAgICAgPyBlbGVtZW50QXBpLmdldENsb3Nlc3RFbGVtZW50KGV2ZW50VGFyZ2V0LCBCT1VOREFSWV9TRUxFQ1RPUilcbiAgICAgIDogbnVsbDtcblxuICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFM3MDA2IC0gUGFyYW1ldGVyICdhY3Rpb25Hcm91cCcgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS5cbiAgY29udGludW91c0FjdGlvbkdyb3Vwcy5mb3JFYWNoKChhY3Rpb25Hcm91cCkgPT4ge1xuICAgIGNvbnN0IHtrZXlmcmFtZSwgYWN0aW9uSXRlbXN9ID0gYWN0aW9uR3JvdXA7XG5cbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFM3MDA2IC0gUGFyYW1ldGVyICdhY3Rpb25JdGVtJyBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlLlxuICAgIGFjdGlvbkl0ZW1zLmZvckVhY2goKGFjdGlvbkl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IHthY3Rpb25UeXBlSWR9ID0gYWN0aW9uSXRlbTtcbiAgICAgIGNvbnN0IHt0YXJnZXR9ID0gYWN0aW9uSXRlbS5jb25maWc7XG4gICAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBlbGVtZW50Um9vdCA9IHRhcmdldC5ib3VuZGFyeU1vZGUgPyBldmVudEVsZW1lbnRSb290IDogbnVsbDtcblxuICAgICAgY29uc3Qga2V5ID0gc3RyaW5naWZ5VGFyZ2V0KHRhcmdldCkgKyBDT0xPTl9ERUxJTUlURVIgKyBhY3Rpb25UeXBlSWQ7XG4gICAgICBpbnN0YW5jZUFjdGlvbkdyb3Vwc1trZXldID0gYXBwZW5kQWN0aW9uSXRlbShcbiAgICAgICAgaW5zdGFuY2VBY3Rpb25Hcm91cHNba2V5XSxcbiAgICAgICAga2V5ZnJhbWUsXG4gICAgICAgIGFjdGlvbkl0ZW1cbiAgICAgICk7XG5cbiAgICAgIGlmICghdGFyZ2V0Q2FjaGVba2V5XSkge1xuICAgICAgICB0YXJnZXRDYWNoZVtrZXldID0gdHJ1ZTtcbiAgICAgICAgY29uc3Qge2NvbmZpZ30gPSBhY3Rpb25JdGVtO1xuICAgICAgICBnZXRBZmZlY3RlZEVsZW1lbnRzKHtcbiAgICAgICAgICBjb25maWcsXG4gICAgICAgICAgZXZlbnQsXG4gICAgICAgICAgZXZlbnRUYXJnZXQsXG4gICAgICAgICAgZWxlbWVudFJvb3QsXG4gICAgICAgICAgZWxlbWVudEFwaSxcbiAgICAgICAgfSkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgIGluc3RhbmNlQ29uZmlncy5wdXNoKHtlbGVtZW50LCBrZXl9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG4gIGluc3RhbmNlQ29uZmlncy5mb3JFYWNoKCh7ZWxlbWVudCwga2V5fSkgPT4ge1xuICAgIGNvbnN0IGFjdGlvbkdyb3VwcyA9IGluc3RhbmNlQWN0aW9uR3JvdXBzW2tleV07XG4gICAgY29uc3QgYWN0aW9uSXRlbSA9IGdldChhY3Rpb25Hcm91cHMsIGBbMF0uYWN0aW9uSXRlbXNbMF1gLCB7fSk7XG4gICAgY29uc3Qge2FjdGlvblR5cGVJZH0gPSBhY3Rpb25JdGVtO1xuICAgIGNvbnN0IHNob3VsZFVzZVBsdWdpbiA9XG4gICAgICAvLyBJZiBpdCdzIHRhcmdldGVkIGJ5IGNsYXNzLCBkb24ndCBxdWVyeSB0aGUgZWxlbWVudCBieSBwbHVnaW5FbGVtZW50SWRcbiAgICAgIGFjdGlvblR5cGVJZCA9PT0gQWN0aW9uVHlwZUNvbnN0cy5QTFVHSU5fUklWRVxuICAgICAgICA/IChhY3Rpb25JdGVtLmNvbmZpZz8udGFyZ2V0Py5zZWxlY3Rvckd1aWRzIHx8IFtdKS5sZW5ndGggPT09IDBcbiAgICAgICAgOiBpc1BsdWdpblR5cGUoYWN0aW9uVHlwZUlkKTtcblxuICAgIGNvbnN0IHBsdWdpbkluc3RhbmNlID0gc2hvdWxkVXNlUGx1Z2luXG4gICAgICA/IGNyZWF0ZVBsdWdpbkluc3RhbmNlKGFjdGlvblR5cGVJZCk/LihlbGVtZW50LCBhY3Rpb25JdGVtKVxuICAgICAgOiBudWxsO1xuICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gZ2V0RGVzdGluYXRpb25WYWx1ZXMoXG4gICAgICB7ZWxlbWVudCwgYWN0aW9uSXRlbSwgZWxlbWVudEFwaX0sXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgICBwbHVnaW5JbnN0YW5jZVxuICAgICk7XG4gICAgY3JlYXRlSW5zdGFuY2Uoe1xuICAgICAgc3RvcmUsXG4gICAgICBlbGVtZW50LFxuICAgICAgZXZlbnRJZCxcbiAgICAgIGFjdGlvbkxpc3RJZCxcbiAgICAgIGFjdGlvbkl0ZW0sXG4gICAgICBkZXN0aW5hdGlvbixcbiAgICAgIGNvbnRpbnVvdXM6IHRydWUsXG4gICAgICBwYXJhbWV0ZXJJZCxcbiAgICAgIGFjdGlvbkdyb3VwcyxcbiAgICAgIHNtb290aGluZyxcbiAgICAgIHJlc3RpbmdWYWx1ZSxcbiAgICAgIHBsdWdpbkluc3RhbmNlLFxuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYXBwZW5kQWN0aW9uSXRlbShhY3Rpb25Hcm91cHMgPSBbXSwga2V5ZnJhbWU6IGFueSwgYWN0aW9uSXRlbTogYW55KSB7XG4gIGNvbnN0IG5ld0FjdGlvbkdyb3VwcyA9IFsuLi5hY3Rpb25Hcm91cHNdO1xuICBsZXQgZ3JvdXBJbmRleDtcbiAgbmV3QWN0aW9uR3JvdXBzLnNvbWUoKGdyb3VwLCBpbmRleCkgPT4ge1xuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzIzMzkgLSBQcm9wZXJ0eSAna2V5ZnJhbWUnIGRvZXMgbm90IGV4aXN0IG9uIHR5cGUgJ25ldmVyJy5cbiAgICBpZiAoZ3JvdXAua2V5ZnJhbWUgPT09IGtleWZyYW1lKSB7XG4gICAgICBncm91cEluZGV4ID0gaW5kZXg7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9KTtcbiAgaWYgKGdyb3VwSW5kZXggPT0gbnVsbCkge1xuICAgIGdyb3VwSW5kZXggPSBuZXdBY3Rpb25Hcm91cHMubGVuZ3RoO1xuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzIzNDUgLSBBcmd1bWVudCBvZiB0eXBlICd7IGtleWZyYW1lOiBhbnk7IGFjdGlvbkl0ZW1zOiBuZXZlcltdOyB9JyBpcyBub3QgYXNzaWduYWJsZSB0byBwYXJhbWV0ZXIgb2YgdHlwZSAnbmV2ZXInLlxuICAgIG5ld0FjdGlvbkdyb3Vwcy5wdXNoKHtcbiAgICAgIGtleWZyYW1lLFxuICAgICAgYWN0aW9uSXRlbXM6IFtdLFxuICAgIH0pO1xuICB9XG4gIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzIzMzkgLSBQcm9wZXJ0eSAnYWN0aW9uSXRlbXMnIGRvZXMgbm90IGV4aXN0IG9uIHR5cGUgJ25ldmVyJy5cbiAgbmV3QWN0aW9uR3JvdXBzW2dyb3VwSW5kZXhdLmFjdGlvbkl0ZW1zLnB1c2goYWN0aW9uSXRlbSk7XG4gIHJldHVybiBuZXdBY3Rpb25Hcm91cHM7XG59XG5cbmZ1bmN0aW9uIGJpbmRFdmVudHMoc3RvcmU6IElYMkVuZ2luZVJlZHVjZXJTdG9yZSkge1xuICBjb25zdCB7aXhEYXRhfSA9IHN0b3JlLmdldFN0YXRlKCk7XG4gIGNvbnN0IHtldmVudFR5cGVNYXB9ID0gaXhEYXRhO1xuXG4gIHVwZGF0ZVZpZXdwb3J0V2lkdGgoc3RvcmUpO1xuXG4gIGZvckVhY2goZXZlbnRUeXBlTWFwLCAoZXZlbnRzLCBrZXkpID0+IHtcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFM3MDUzIC0gRWxlbWVudCBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlIGJlY2F1c2UgZXhwcmVzc2lvbiBvZiB0eXBlICdzdHJpbmcnIGNhbid0IGJlIHVzZWQgdG8gaW5kZXggdHlwZSAneyBTTElERVJfQUNUSVZFOiB7IGhhbmRsZXI6IChvcHRpb25zOiBhbnksIHN0YXRlOiBhbnkpID0+IGFueTsgdHlwZXM6IHN0cmluZzsgfTsgU0xJREVSX0lOQUNUSVZFOiB7IGhhbmRsZXI6IChvcHRpb25zOiBhbnksIHN0YXRlOiBhbnkpID0+IGFueTsgdHlwZXM6IHN0cmluZzsgfTsgRFJPUERPV05fT1BFTjogeyBoYW5kbGVyOiAob3B0aW9uczogYW55LCBzdGF0ZTogYW55KSA9PiBhbnk7IHR5cGVzOiBzdHJpbmc7IH07IC4uLiAyMSBtb3JlIC4uLjsgUEFHRV9TVEFSVDogeyAuLi47IH07IH0nLlxuICAgIGNvbnN0IGxvZ2ljID0gSVgyVmFuaWxsYUV2ZW50c1trZXldO1xuICAgIGlmICghbG9naWMpIHtcbiAgICAgIGNvbnNvbGUud2FybihgSVgyIGV2ZW50IHR5cGUgbm90IGNvbmZpZ3VyZWQ6ICR7a2V5fWApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBiaW5kRXZlbnRUeXBlKHtcbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwMzEgLSBCaW5kaW5nIGVsZW1lbnQgJ2xvZ2ljJyBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlLlxuICAgICAgbG9naWMsXG4gICAgICBzdG9yZSxcbiAgICAgIGV2ZW50cyxcbiAgICB9KTtcbiAgfSk7XG5cbiAgY29uc3Qge2l4U2Vzc2lvbn0gPSBzdG9yZS5nZXRTdGF0ZSgpO1xuICBpZiAoaXhTZXNzaW9uLmV2ZW50TGlzdGVuZXJzLmxlbmd0aCkge1xuICAgIGJpbmRSZXNpemVFdmVudHMoc3RvcmUpO1xuICB9XG59XG5cbmNvbnN0IFdJTkRPV19SRVNJWkVfRVZFTlRTID0gWydyZXNpemUnLCAnb3JpZW50YXRpb25jaGFuZ2UnXTtcblxuZnVuY3Rpb24gYmluZFJlc2l6ZUV2ZW50cyhzdG9yZTogSVgyRW5naW5lUmVkdWNlclN0b3JlKSB7XG4gIGNvbnN0IGhhbmRsZVJlc2l6ZSA9ICgpID0+IHtcbiAgICB1cGRhdGVWaWV3cG9ydFdpZHRoKHN0b3JlKTtcbiAgfTtcbiAgV0lORE9XX1JFU0laRV9FVkVOVFMuZm9yRWFjaCgodHlwZSkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZVJlc2l6ZSk7XG4gICAgc3RvcmUuZGlzcGF0Y2goZXZlbnRMaXN0ZW5lckFkZGVkKHdpbmRvdywgW3R5cGUsIGhhbmRsZVJlc2l6ZV0pKTtcbiAgfSk7XG4gIGhhbmRsZVJlc2l6ZSgpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVWaWV3cG9ydFdpZHRoKHN0b3JlOiBJWDJFbmdpbmVSZWR1Y2VyU3RvcmUpIHtcbiAgY29uc3Qge2l4U2Vzc2lvbiwgaXhEYXRhfSA9IHN0b3JlLmdldFN0YXRlKCk7XG4gIGNvbnN0IHdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gIGlmICh3aWR0aCAhPT0gaXhTZXNzaW9uLnZpZXdwb3J0V2lkdGgpIHtcbiAgICBjb25zdCB7bWVkaWFRdWVyaWVzfSA9IGl4RGF0YTtcbiAgICBzdG9yZS5kaXNwYXRjaCh2aWV3cG9ydFdpZHRoQ2hhbmdlZCh7d2lkdGgsIG1lZGlhUXVlcmllc30pKTtcbiAgfVxufVxuXG5jb25zdCBtYXBGb3VuZFZhbHVlcyA9IChcbiAgb2JqZWN0OiBhbnksXG4gIGl0ZXJhdGVlOiAoZXZlbnQ/OiBhbnkpID0+IEFycmF5PEhUTUxFbGVtZW50IHwgYW55PlxuKSA9PiBvbWl0QnkobWFwVmFsdWVzKG9iamVjdCwgaXRlcmF0ZWUpLCBpc0VtcHR5KTtcblxuY29uc3QgZm9yRWFjaEV2ZW50VGFyZ2V0ID0gKFxuICBldmVudFRhcmdldHM6IGFueSxcbiAgZXZlbnRDYWxsYmFjazogKGVsZW1lbnQ6IGFueSwgZXZlbnRJZDogYW55LCBldmVudFN0YXRlS2V5OiBzdHJpbmcpID0+IHZvaWRcbikgPT4ge1xuICBmb3JFYWNoKGV2ZW50VGFyZ2V0cywgKGVsZW1lbnRzLCBldmVudElkKSA9PiB7XG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTNzAwNiAtIFBhcmFtZXRlciAnZWxlbWVudCcgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS4gfCBUUzcwMDYgLSBQYXJhbWV0ZXIgJ2luZGV4JyBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlLlxuICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBldmVudFN0YXRlS2V5ID0gZXZlbnRJZCArIENPTE9OX0RFTElNSVRFUiArIGluZGV4O1xuICAgICAgZXZlbnRDYWxsYmFjayhlbGVtZW50LCBldmVudElkLCBldmVudFN0YXRlS2V5KTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCBnZXRBZmZlY3RlZEZvckV2ZW50ID0gKGV2ZW50OiBhbnkpID0+IHtcbiAgY29uc3QgY29uZmlnID0ge3RhcmdldDogZXZlbnQudGFyZ2V0LCB0YXJnZXRzOiBldmVudC50YXJnZXRzfSBhcyBjb25zdDtcbiAgcmV0dXJuIGdldEFmZmVjdGVkRWxlbWVudHMoe2NvbmZpZywgZWxlbWVudEFwaX0pO1xufTtcblxuLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTNzAzMSAtIEJpbmRpbmcgZWxlbWVudCAnbG9naWMnIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuIHwgVFM3MDMxIC0gQmluZGluZyBlbGVtZW50ICdzdG9yZScgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS4gfCBUUzcwMzEgLSBCaW5kaW5nIGVsZW1lbnQgJ2V2ZW50cycgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS5cbmZ1bmN0aW9uIGJpbmRFdmVudFR5cGUoe2xvZ2ljLCBzdG9yZSwgZXZlbnRzfToge3N0b3JlOiBJWDJFbmdpbmVSZWR1Y2VyU3RvcmV9KSB7XG4gIGluamVjdEJlaGF2aW9yQ1NTRml4ZXMoZXZlbnRzKTtcbiAgY29uc3Qge3R5cGVzOiBldmVudFR5cGVzLCBoYW5kbGVyOiBldmVudEhhbmRsZXJ9ID0gbG9naWM7XG4gIGNvbnN0IHtpeERhdGF9ID0gc3RvcmUuZ2V0U3RhdGUoKTtcbiAgY29uc3Qge2FjdGlvbkxpc3RzfSA9IGl4RGF0YTtcbiAgY29uc3QgZXZlbnRUYXJnZXRzID0gbWFwRm91bmRWYWx1ZXMoZXZlbnRzLCBnZXRBZmZlY3RlZEZvckV2ZW50KTtcblxuICBpZiAoIXNpemUoZXZlbnRUYXJnZXRzKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGZvckVhY2goZXZlbnRUYXJnZXRzLCAoZWxlbWVudHMsIGtleSkgPT4ge1xuICAgIGNvbnN0IGV2ZW50ID0gZXZlbnRzW2tleV07XG4gICAgY29uc3Qge1xuICAgICAgYWN0aW9uOiBldmVudEFjdGlvbixcbiAgICAgIGlkOiBldmVudElkLFxuICAgICAgbWVkaWFRdWVyaWVzID0gaXhEYXRhLm1lZGlhUXVlcnlLZXlzLFxuICAgIH0gPSBldmVudDtcbiAgICBjb25zdCB7YWN0aW9uTGlzdElkfSA9IGV2ZW50QWN0aW9uLmNvbmZpZztcblxuICAgIGlmICghbWVkaWFRdWVyaWVzRXF1YWwobWVkaWFRdWVyaWVzLCBpeERhdGEubWVkaWFRdWVyeUtleXMpKSB7XG4gICAgICBzdG9yZS5kaXNwYXRjaChtZWRpYVF1ZXJpZXNEZWZpbmVkKCkpO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgIGV2ZW50QWN0aW9uLmFjdGlvblR5cGVJZCA9PT0gQWN0aW9uVHlwZUNvbnN0cy5HRU5FUkFMX0NPTlRJTlVPVVNfQUNUSU9OXG4gICAgKSB7XG4gICAgICBjb25zdCBjb25maWdzID0gQXJyYXkuaXNBcnJheShldmVudC5jb25maWcpXG4gICAgICAgID8gZXZlbnQuY29uZmlnXG4gICAgICAgIDogW2V2ZW50LmNvbmZpZ107XG5cbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwMDYgLSBQYXJhbWV0ZXIgJ2V2ZW50Q29uZmlnJyBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlLlxuICAgICAgY29uZmlncy5mb3JFYWNoKChldmVudENvbmZpZykgPT4ge1xuICAgICAgICBjb25zdCB7Y29udGludW91c1BhcmFtZXRlckdyb3VwSWR9ID0gZXZlbnRDb25maWc7XG4gICAgICAgIGNvbnN0IHBhcmFtR3JvdXBzID0gZ2V0KFxuICAgICAgICAgIGFjdGlvbkxpc3RzLFxuICAgICAgICAgIGAke2FjdGlvbkxpc3RJZH0uY29udGludW91c1BhcmFtZXRlckdyb3Vwc2AsXG4gICAgICAgICAgW11cbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgcGFyYW1ldGVyR3JvdXAgPSBmaW5kKFxuICAgICAgICAgIHBhcmFtR3JvdXBzLFxuICAgICAgICAgICh7aWR9KSA9PiBpZCA9PT0gY29udGludW91c1BhcmFtZXRlckdyb3VwSWRcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3Qgc21vb3RoaW5nID0gKGV2ZW50Q29uZmlnLnNtb290aGluZyB8fCAwKSAvIDEwMDtcbiAgICAgICAgY29uc3QgcmVzdGluZ1ZhbHVlID0gKGV2ZW50Q29uZmlnLnJlc3RpbmdTdGF0ZSB8fCAwKSAvIDEwMDtcblxuICAgICAgICBpZiAoIXBhcmFtZXRlckdyb3VwKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaCgoZXZlbnRUYXJnZXQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3QgZXZlbnRTdGF0ZUtleSA9IGV2ZW50SWQgKyBDT0xPTl9ERUxJTUlURVIgKyBpbmRleDtcbiAgICAgICAgICBjcmVhdGVHcm91cEluc3RhbmNlcyh7XG4gICAgICAgICAgICBzdG9yZSxcbiAgICAgICAgICAgIGV2ZW50U3RhdGVLZXksXG4gICAgICAgICAgICBldmVudFRhcmdldCxcbiAgICAgICAgICAgIGV2ZW50SWQsXG4gICAgICAgICAgICBldmVudENvbmZpZyxcbiAgICAgICAgICAgIGFjdGlvbkxpc3RJZCxcbiAgICAgICAgICAgIHBhcmFtZXRlckdyb3VwLFxuICAgICAgICAgICAgc21vb3RoaW5nLFxuICAgICAgICAgICAgcmVzdGluZ1ZhbHVlLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgIGV2ZW50QWN0aW9uLmFjdGlvblR5cGVJZCA9PT0gQWN0aW9uVHlwZUNvbnN0cy5HRU5FUkFMX1NUQVJUX0FDVElPTiB8fFxuICAgICAgaXNRdWlja0VmZmVjdChldmVudEFjdGlvbi5hY3Rpb25UeXBlSWQpXG4gICAgKSB7XG4gICAgICByZW5kZXJJbml0aWFsR3JvdXAoe3N0b3JlLCBhY3Rpb25MaXN0SWQsIGV2ZW50SWR9KTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGhhbmRsZUV2ZW50ID0gKG5hdGl2ZUV2ZW50OiBhbnkpID0+IHtcbiAgICBjb25zdCB7aXhTZXNzaW9ufSA9IHN0b3JlLmdldFN0YXRlKCk7XG4gICAgZm9yRWFjaEV2ZW50VGFyZ2V0KGV2ZW50VGFyZ2V0cywgKGVsZW1lbnQsIGV2ZW50SWQsIGV2ZW50U3RhdGVLZXkpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50ID0gZXZlbnRzW2V2ZW50SWRdO1xuICAgICAgY29uc3Qgb2xkU3RhdGUgPSBpeFNlc3Npb24uZXZlbnRTdGF0ZVtldmVudFN0YXRlS2V5XTtcbiAgICAgIGNvbnN0IHthY3Rpb246IGV2ZW50QWN0aW9uLCBtZWRpYVF1ZXJpZXMgPSBpeERhdGEubWVkaWFRdWVyeUtleXN9ID0gZXZlbnQ7XG4gICAgICAvLyBCeXBhc3MgZXZlbnQgaGFuZGxlciBpZiBjdXJyZW50IG1lZGlhIHF1ZXJ5IGlzIG5vdCBsaXN0ZWQgaW4gZXZlbnQgY29uZmlnXG4gICAgICBpZiAoIXNob3VsZEFsbG93TWVkaWFRdWVyeShtZWRpYVF1ZXJpZXMsIGl4U2Vzc2lvbi5tZWRpYVF1ZXJ5S2V5KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBoYW5kbGVFdmVudFdpdGhDb25maWcgPSAoZXZlbnRDb25maWcgPSB7fSkgPT4ge1xuICAgICAgICBjb25zdCBuZXdTdGF0ZSA9IGV2ZW50SGFuZGxlcihcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdG9yZSxcbiAgICAgICAgICAgIGVsZW1lbnQsXG4gICAgICAgICAgICBldmVudCxcbiAgICAgICAgICAgIGV2ZW50Q29uZmlnLFxuICAgICAgICAgICAgbmF0aXZlRXZlbnQsXG4gICAgICAgICAgICBldmVudFN0YXRlS2V5LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgb2xkU3RhdGVcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKCFzaGFsbG93RXF1YWwobmV3U3RhdGUsIG9sZFN0YXRlKSkge1xuICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKGV2ZW50U3RhdGVDaGFuZ2VkKGV2ZW50U3RhdGVLZXksIG5ld1N0YXRlKSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBpZiAoXG4gICAgICAgIGV2ZW50QWN0aW9uLmFjdGlvblR5cGVJZCA9PT0gQWN0aW9uVHlwZUNvbnN0cy5HRU5FUkFMX0NPTlRJTlVPVVNfQUNUSU9OXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgY29uZmlncyA9IEFycmF5LmlzQXJyYXkoZXZlbnQuY29uZmlnKVxuICAgICAgICAgID8gZXZlbnQuY29uZmlnXG4gICAgICAgICAgOiBbZXZlbnQuY29uZmlnXTtcbiAgICAgICAgY29uZmlncy5mb3JFYWNoKGhhbmRsZUV2ZW50V2l0aENvbmZpZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBoYW5kbGVFdmVudFdpdGhDb25maWcoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVFdmVudFRocm90dGxlZCA9IHRocm90dGxlKGhhbmRsZUV2ZW50LCBUSFJPVFRMRURfRVZFTlRfV0FJVCk7XG5cbiAgY29uc3QgYWRkTGlzdGVuZXJzID0gKHtcbiAgICB0YXJnZXQgPSBkb2N1bWVudCxcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFM3MDMxIC0gQmluZGluZyBlbGVtZW50ICd0eXBlcycgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS5cbiAgICB0eXBlcyxcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFM3MDMxIC0gQmluZGluZyBlbGVtZW50ICdzaG91bGRUaHJvdHRsZScgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS5cbiAgICB0aHJvdHRsZTogc2hvdWxkVGhyb3R0bGUsXG4gIH0pID0+IHtcbiAgICB0eXBlc1xuICAgICAgLnNwbGl0KCcgJylcbiAgICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwMDYgLSBQYXJhbWV0ZXIgJ3R5cGUnIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuXG4gICAgICAuZm9yRWFjaCgodHlwZSkgPT4ge1xuICAgICAgICBjb25zdCBoYW5kbGVyRnVuYyA9IHNob3VsZFRocm90dGxlID8gaGFuZGxlRXZlbnRUaHJvdHRsZWQgOiBoYW5kbGVFdmVudDtcbiAgICAgICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgaGFuZGxlckZ1bmMpO1xuICAgICAgICBzdG9yZS5kaXNwYXRjaChldmVudExpc3RlbmVyQWRkZWQodGFyZ2V0LCBbdHlwZSwgaGFuZGxlckZ1bmNdKSk7XG4gICAgICB9KTtcbiAgfTtcblxuICBpZiAoQXJyYXkuaXNBcnJheShldmVudFR5cGVzKSkge1xuICAgIGV2ZW50VHlwZXMuZm9yRWFjaChhZGRMaXN0ZW5lcnMpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBldmVudFR5cGVzID09PSAnc3RyaW5nJykge1xuICAgIGFkZExpc3RlbmVycyhsb2dpYyk7XG4gIH1cbn1cblxuLyoqXG4gKiBJbmplY3RzIENTUyBpbnRvIHRoZSBkb2N1bWVudCB0byBmaXggYmVoYXZpb3IgaXNzdWVzIGFjcm9zc1xuICogZGlmZmVyZW50IGRldmljZXMuXG4gKi9cblxuZnVuY3Rpb24gaW5qZWN0QmVoYXZpb3JDU1NGaXhlcyhldmVudHM6IGFueSkge1xuICBpZiAoIUlTX01PQklMRV9TQUZBUkkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBpbmplY3RlZFNlbGVjdG9yczogUmVjb3JkPHN0cmluZywgYW55PiA9IHt9O1xuXG4gIGxldCBjc3NUZXh0ID0gJyc7XG4gIGZvciAoY29uc3QgZXZlbnRJZCBpbiBldmVudHMpIHtcbiAgICBjb25zdCB7ZXZlbnRUeXBlSWQsIHRhcmdldH0gPSBldmVudHNbZXZlbnRJZF07XG5cbiAgICBjb25zdCBzZWxlY3RvciA9IGVsZW1lbnRBcGkuZ2V0UXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzI1MzggLSBUeXBlICdudWxsJyBjYW5ub3QgYmUgdXNlZCBhcyBhbiBpbmRleCB0eXBlLlxuICAgIGlmIChpbmplY3RlZFNlbGVjdG9yc1tzZWxlY3Rvcl0pIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIGFkZCBhIFwiY3Vyc29yOiBwb2ludGVyXCIgc3R5bGUgcnVsZSB0byBlbnN1cmUgdGhhdCBDTElDSyBldmVudHMgZ2V0IGZpcmVkIGZvciBJT1MgZGV2aWNlc1xuICAgIGlmIChcbiAgICAgIGV2ZW50VHlwZUlkID09PSBFdmVudFR5cGVDb25zdHMuTU9VU0VfQ0xJQ0sgfHxcbiAgICAgIGV2ZW50VHlwZUlkID09PSBFdmVudFR5cGVDb25zdHMuTU9VU0VfU0VDT05EX0NMSUNLXG4gICAgKSB7XG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFMyNTM4IC0gVHlwZSAnbnVsbCcgY2Fubm90IGJlIHVzZWQgYXMgYW4gaW5kZXggdHlwZS5cbiAgICAgIGluamVjdGVkU2VsZWN0b3JzW3NlbGVjdG9yXSA9IHRydWU7XG4gICAgICBjc3NUZXh0ICs9XG4gICAgICAgIHNlbGVjdG9yICtcbiAgICAgICAgJ3snICtcbiAgICAgICAgJ2N1cnNvcjogcG9pbnRlcjsnICtcbiAgICAgICAgJ3RvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uOycgK1xuICAgICAgICAnfSc7XG4gICAgfVxuICB9XG5cbiAgaWYgKGNzc1RleHQpIHtcbiAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgc3R5bGUudGV4dENvbnRlbnQgPSBjc3NUZXh0O1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlckluaXRpYWxHcm91cCh7XG4gIHN0b3JlLFxuICBhY3Rpb25MaXN0SWQsXG4gIGV2ZW50SWQsXG59OiB7XG4gIHN0b3JlOiBJWDJFbmdpbmVSZWR1Y2VyU3RvcmU7XG4gIGFjdGlvbkxpc3RJZDogbnVtYmVyO1xuICBldmVudElkOiBudW1iZXI7XG59KSB7XG4gIGNvbnN0IHtpeERhdGEsIGl4U2Vzc2lvbn0gPSBzdG9yZS5nZXRTdGF0ZSgpO1xuICBjb25zdCB7YWN0aW9uTGlzdHMsIGV2ZW50c30gPSBpeERhdGE7XG4gIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzE4MDQ4IC0gJ2V2ZW50cycgaXMgcG9zc2libHkgJ3VuZGVmaW5lZCcuXG4gIGNvbnN0IGV2ZW50ID0gZXZlbnRzW2V2ZW50SWRdO1xuICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFMxODA0OCAtICdhY3Rpb25MaXN0cycgaXMgcG9zc2libHkgJ3VuZGVmaW5lZCcuXG4gIGNvbnN0IGFjdGlvbkxpc3QgPSBhY3Rpb25MaXN0c1thY3Rpb25MaXN0SWRdO1xuXG4gIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBQcm9wZXJ0eSAndXNlRmlyc3RHcm91cEFzSW5pdGlhbFN0YXRlJyBkb2VzIG5vdCBleGlzdCBvbiB0eXBlICdBY3Rpb25MaXN0VHlwZScuXG4gIGlmIChhY3Rpb25MaXN0ICYmIGFjdGlvbkxpc3QudXNlRmlyc3RHcm91cEFzSW5pdGlhbFN0YXRlKSB7XG4gICAgY29uc3QgaW5pdGlhbFN0YXRlSXRlbXMgPSBnZXQoXG4gICAgICBhY3Rpb25MaXN0LFxuICAgICAgJ2FjdGlvbkl0ZW1Hcm91cHNbMF0uYWN0aW9uSXRlbXMnLFxuICAgICAgW11cbiAgICApO1xuXG4gICAgLy8gQnlwYXNzIGluaXRpYWwgc3RhdGUgcmVuZGVyIGlmIGN1cnJlbnQgbWVkaWEgcXVlcnkgaXMgbm90IGxpc3RlZCBpbiBldmVudCBjb25maWdcbiAgICBjb25zdCBtZWRpYVF1ZXJpZXMgPSBnZXQoZXZlbnQsICdtZWRpYVF1ZXJpZXMnLCBpeERhdGEubWVkaWFRdWVyeUtleXMpO1xuICAgIGlmICghc2hvdWxkQWxsb3dNZWRpYVF1ZXJ5KG1lZGlhUXVlcmllcywgaXhTZXNzaW9uLm1lZGlhUXVlcnlLZXkpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaW5pdGlhbFN0YXRlSXRlbXMuZm9yRWFjaCgoYWN0aW9uSXRlbSkgPT4ge1xuICAgICAgY29uc3Qge2NvbmZpZzogaXRlbUNvbmZpZywgYWN0aW9uVHlwZUlkfSA9IGFjdGlvbkl0ZW07XG4gICAgICBjb25zdCBjb25maWcgPVxuICAgICAgICAvLyBXaGVuIHVzZUV2ZW50VGFyZ2V0IGlzIGV4cGxpY2l0bHkgdHJ1ZSwgdXNlIGV2ZW50IHRhcmdldC90YXJnZXRzIHRvIHF1ZXJ5IGVsZW1lbnRzXG4gICAgICAgIC8vIEhvd2V2ZXIsIHNraXAgdGhpcyBjb25kaXRpb24gd2hlbiBvYmplY3RJZCBpcyBkZWZpbmVkXG4gICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBQcm9wZXJ0eSAndGFyZ2V0JyBkb2VzIG5vdCBleGlzdCBvbiB0eXBlICduZXZlcicuXG4gICAgICAgIGl0ZW1Db25maWc/LnRhcmdldD8udXNlRXZlbnRUYXJnZXQgPT09IHRydWUgJiZcbiAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFByb3BlcnR5ICd0YXJnZXQnIGRvZXMgbm90IGV4aXN0IG9uIHR5cGUgJ25ldmVyJy5cbiAgICAgICAgaXRlbUNvbmZpZz8udGFyZ2V0Py5vYmplY3RJZCA9PSBudWxsXG4gICAgICAgICAgPyAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFMxODA0OCAtICdldmVudCcgaXMgcG9zc2libHkgJ3VuZGVmaW5lZCcuXG4gICAgICAgICAgICB7dGFyZ2V0OiBldmVudC50YXJnZXQsIHRhcmdldHM6IGV2ZW50LnRhcmdldHN9XG4gICAgICAgICAgOiBpdGVtQ29uZmlnO1xuICAgICAgY29uc3QgaXRlbUVsZW1lbnRzID0gZ2V0QWZmZWN0ZWRFbGVtZW50cyh7Y29uZmlnLCBldmVudCwgZWxlbWVudEFwaX0pO1xuICAgICAgY29uc3Qgc2hvdWxkVXNlUGx1Z2luID0gaXNQbHVnaW5UeXBlKGFjdGlvblR5cGVJZCk7XG5cbiAgICAgIGl0ZW1FbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHBsdWdpbkluc3RhbmNlID0gc2hvdWxkVXNlUGx1Z2luXG4gICAgICAgICAgPyBjcmVhdGVQbHVnaW5JbnN0YW5jZShhY3Rpb25UeXBlSWQpPy4oZWxlbWVudCwgYWN0aW9uSXRlbSlcbiAgICAgICAgICA6IG51bGw7XG4gICAgICAgIGNyZWF0ZUluc3RhbmNlKHtcbiAgICAgICAgICBkZXN0aW5hdGlvbjogZ2V0RGVzdGluYXRpb25WYWx1ZXMoXG4gICAgICAgICAgICB7ZWxlbWVudCwgYWN0aW9uSXRlbSwgZWxlbWVudEFwaX0sXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4gICAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgICAgICAgICBwbHVnaW5JbnN0YW5jZVxuICAgICAgICAgICksXG4gICAgICAgICAgaW1tZWRpYXRlOiB0cnVlLFxuICAgICAgICAgIHN0b3JlLFxuICAgICAgICAgIGVsZW1lbnQsXG4gICAgICAgICAgZXZlbnRJZCxcbiAgICAgICAgICBhY3Rpb25JdGVtLFxuICAgICAgICAgIGFjdGlvbkxpc3RJZCxcbiAgICAgICAgICBwbHVnaW5JbnN0YW5jZSxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RvcEFsbEFjdGlvbkdyb3Vwcyh7c3RvcmV9OiB7c3RvcmU6IElYMkVuZ2luZVJlZHVjZXJTdG9yZX0pIHtcbiAgY29uc3Qge2l4SW5zdGFuY2VzfSA9IHN0b3JlLmdldFN0YXRlKCk7XG4gIGZvckVhY2goaXhJbnN0YW5jZXMsIChpbnN0YW5jZSkgPT4ge1xuICAgIGlmICghaW5zdGFuY2UuY29udGludW91cykge1xuICAgICAgY29uc3Qge2FjdGlvbkxpc3RJZCwgdmVyYm9zZX0gPSBpbnN0YW5jZTtcbiAgICAgIHJlbW92ZUluc3RhbmNlKGluc3RhbmNlLCBzdG9yZSk7XG4gICAgICBpZiAodmVyYm9zZSkge1xuICAgICAgICBzdG9yZS5kaXNwYXRjaChcbiAgICAgICAgICBhY3Rpb25MaXN0UGxheWJhY2tDaGFuZ2VkKHthY3Rpb25MaXN0SWQsIGlzUGxheWluZzogZmFsc2V9KVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdG9wQWN0aW9uR3JvdXAoe1xuICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFM3MDMxIC0gQmluZGluZyBlbGVtZW50ICdzdG9yZScgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS5cbiAgc3RvcmUsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbiAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICBldmVudElkLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4gIC8vIEB0cy1leHBlY3QtZXJyb3JcbiAgZXZlbnRUYXJnZXQsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbiAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICBldmVudFN0YXRlS2V5LFxuICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFM3MDMxIC0gQmluZGluZyBlbGVtZW50ICdhY3Rpb25MaXN0SWQnIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuXG4gIGFjdGlvbkxpc3RJZCxcbn0pIHtcbiAgY29uc3Qge2l4SW5zdGFuY2VzLCBpeFNlc3Npb259ID0gc3RvcmUuZ2V0U3RhdGUoKTtcblxuICAvLyBDaGVjayBmb3IgZWxlbWVudCBib3VuZGFyeSBiZWZvcmUgc3RvcHBpbmcgZW5naW5lIGluc3RhbmNlc1xuICBjb25zdCBldmVudEVsZW1lbnRSb290ID1cbiAgICBpeFNlc3Npb24uaGFzQm91bmRhcnlOb2RlcyAmJiBldmVudFRhcmdldFxuICAgICAgPyBlbGVtZW50QXBpLmdldENsb3Nlc3RFbGVtZW50KGV2ZW50VGFyZ2V0LCBCT1VOREFSWV9TRUxFQ1RPUilcbiAgICAgIDogbnVsbDtcblxuICBmb3JFYWNoKGl4SW5zdGFuY2VzLCAoaW5zdGFuY2UpID0+IHtcbiAgICBjb25zdCBib3VuZGFyeU1vZGUgPSBnZXQoaW5zdGFuY2UsICdhY3Rpb25JdGVtLmNvbmZpZy50YXJnZXQuYm91bmRhcnlNb2RlJyk7XG4gICAgLy8gVmFsaWRhdGUgZXZlbnQga2V5IGlmIGV2ZW50U3RhdGVLZXkgd2FzIHByb3ZpZGVkLCBvdGhlcndpc2UgZGVmYXVsdCB0byB0cnVlXG4gICAgY29uc3QgdmFsaWRFdmVudEtleSA9IGV2ZW50U3RhdGVLZXlcbiAgICAgID8gaW5zdGFuY2UuZXZlbnRTdGF0ZUtleSA9PT0gZXZlbnRTdGF0ZUtleVxuICAgICAgOiB0cnVlO1xuICAgIC8vIFJlbW92ZSBlbmdpbmUgaW5zdGFuY2VzIHRoYXQgbWF0Y2ggdGhlIHJlcXVpcmVkIGlkc1xuICAgIGlmIChcbiAgICAgIGluc3RhbmNlLmFjdGlvbkxpc3RJZCA9PT0gYWN0aW9uTGlzdElkICYmXG4gICAgICBpbnN0YW5jZS5ldmVudElkID09PSBldmVudElkICYmXG4gICAgICB2YWxpZEV2ZW50S2V5XG4gICAgKSB7XG4gICAgICAvLyBBdm9pZCByZW1vdmFsIHdoZW4gcm9vdCBib3VuZGFyeSBkb2VzIG5vdCBjb250YWluIGluc3RhbmNlIGVsZW1lbnRcbiAgICAgIGlmIChcbiAgICAgICAgZXZlbnRFbGVtZW50Um9vdCAmJlxuICAgICAgICBib3VuZGFyeU1vZGUgJiZcbiAgICAgICAgIWVsZW1lbnRBcGkuZWxlbWVudENvbnRhaW5zKGV2ZW50RWxlbWVudFJvb3QsIGluc3RhbmNlLmVsZW1lbnQpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgcmVtb3ZlSW5zdGFuY2UoaW5zdGFuY2UsIHN0b3JlKTtcbiAgICAgIGlmIChpbnN0YW5jZS52ZXJib3NlKSB7XG4gICAgICAgIHN0b3JlLmRpc3BhdGNoKFxuICAgICAgICAgIGFjdGlvbkxpc3RQbGF5YmFja0NoYW5nZWQoe2FjdGlvbkxpc3RJZCwgaXNQbGF5aW5nOiBmYWxzZX0pXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0QWN0aW9uR3JvdXAoe1xuICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFM3MDMxIC0gQmluZGluZyBlbGVtZW50ICdzdG9yZScgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS5cbiAgc3RvcmUsXG4gIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwMzEgLSBCaW5kaW5nIGVsZW1lbnQgJ2V2ZW50SWQnIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuXG4gIGV2ZW50SWQsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbiAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICBldmVudFRhcmdldCxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gIGV2ZW50U3RhdGVLZXksXG4gIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwMzEgLSBCaW5kaW5nIGVsZW1lbnQgJ2FjdGlvbkxpc3RJZCcgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS5cbiAgYWN0aW9uTGlzdElkLFxuICBncm91cEluZGV4ID0gMCxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gIGltbWVkaWF0ZSxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gIHZlcmJvc2UsXG59KSB7XG4gIGNvbnN0IHtpeERhdGEsIGl4U2Vzc2lvbn0gPSBzdG9yZS5nZXRTdGF0ZSgpO1xuICBjb25zdCB7ZXZlbnRzfSA9IGl4RGF0YTtcbiAgY29uc3QgZXZlbnQgPSBldmVudHNbZXZlbnRJZF0gfHwge307XG4gIGNvbnN0IHttZWRpYVF1ZXJpZXMgPSBpeERhdGEubWVkaWFRdWVyeUtleXN9ID0gZXZlbnQ7XG4gIGNvbnN0IGFjdGlvbkxpc3QgPSBnZXQoaXhEYXRhLCBgYWN0aW9uTGlzdHMuJHthY3Rpb25MaXN0SWR9YCwge30pO1xuICBjb25zdCB7YWN0aW9uSXRlbUdyb3VwcywgdXNlRmlyc3RHcm91cEFzSW5pdGlhbFN0YXRlfSA9IGFjdGlvbkxpc3Q7XG4gIC8vIEFib3J0IHBsYXliYWNrIGlmIG5vIGFjdGlvbiBncm91cHNcbiAgaWYgKCFhY3Rpb25JdGVtR3JvdXBzIHx8ICFhY3Rpb25JdGVtR3JvdXBzLmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyBSZXNldCB0byBmaXJzdCBncm91cCB3aGVuIGV2ZW50IGxvb3AgaXMgY29uZmlndXJlZFxuICBpZiAoZ3JvdXBJbmRleCA+PSBhY3Rpb25JdGVtR3JvdXBzLmxlbmd0aCAmJiBnZXQoZXZlbnQsICdjb25maWcubG9vcCcpKSB7XG4gICAgZ3JvdXBJbmRleCA9IDA7XG4gIH1cbiAgLy8gU2tpcCBpbml0aWFsIHN0YXRlIGdyb3VwIGR1cmluZyBhY3Rpb24gbGlzdCBwbGF5YmFjaywgYXMgaXQgc2hvdWxkIGFscmVhZHkgYmUgYXBwbGllZFxuICBpZiAoZ3JvdXBJbmRleCA9PT0gMCAmJiB1c2VGaXJzdEdyb3VwQXNJbml0aWFsU3RhdGUpIHtcbiAgICBncm91cEluZGV4Kys7XG4gIH1cbiAgLy8gSWRlbnRpZnkgZmlyc3QgYW5pbWF0ZWQgZ3JvdXAgYW5kIGFwcGx5IHRoZSBpbml0aWFsIFF1aWNrRWZmZWN0IGRlbGF5XG4gIGNvbnN0IGlzRmlyc3RHcm91cCA9XG4gICAgZ3JvdXBJbmRleCA9PT0gMCB8fCAoZ3JvdXBJbmRleCA9PT0gMSAmJiB1c2VGaXJzdEdyb3VwQXNJbml0aWFsU3RhdGUpO1xuICBjb25zdCBpbnN0YW5jZURlbGF5ID1cbiAgICBpc0ZpcnN0R3JvdXAgJiYgaXNRdWlja0VmZmVjdChldmVudC5hY3Rpb24/LmFjdGlvblR5cGVJZClcbiAgICAgID8gZXZlbnQuY29uZmlnLmRlbGF5XG4gICAgICA6IHVuZGVmaW5lZDtcblxuICAvLyBBYm9ydCBwbGF5YmFjayBpZiBubyBhY3Rpb24gaXRlbXMgZXhpc3QgYXQgZ3JvdXAgaW5kZXhcbiAgY29uc3QgYWN0aW9uSXRlbXMgPSBnZXQoYWN0aW9uSXRlbUdyb3VwcywgW2dyb3VwSW5kZXgsICdhY3Rpb25JdGVtcyddLCBbXSk7XG4gIGlmICghYWN0aW9uSXRlbXMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIEFib3J0IHBsYXliYWNrIGlmIGN1cnJlbnQgbWVkaWEgcXVlcnkgaXMgbm90IGxpc3RlZCBpbiBldmVudCBjb25maWdcbiAgaWYgKCFzaG91bGRBbGxvd01lZGlhUXVlcnkobWVkaWFRdWVyaWVzLCBpeFNlc3Npb24ubWVkaWFRdWVyeUtleSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gTGltaXQgYWZmZWN0ZWQgZWxlbWVudHMgd2hlbiBldmVudCB0YXJnZXQgaXMgd2l0aGluIGEgYm91bmRhcnkgbm9kZVxuICBjb25zdCBldmVudEVsZW1lbnRSb290ID1cbiAgICBpeFNlc3Npb24uaGFzQm91bmRhcnlOb2RlcyAmJiBldmVudFRhcmdldFxuICAgICAgPyBlbGVtZW50QXBpLmdldENsb3Nlc3RFbGVtZW50KGV2ZW50VGFyZ2V0LCBCT1VOREFSWV9TRUxFQ1RPUilcbiAgICAgIDogbnVsbDtcblxuICBjb25zdCBjYXJyaWVySW5kZXggPSBnZXRNYXhEdXJhdGlvbkl0ZW1JbmRleChhY3Rpb25JdGVtcyk7XG4gIGxldCBncm91cFN0YXJ0UmVzdWx0ID0gZmFsc2U7XG5cbiAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTNzAwNiAtIFBhcmFtZXRlciAnYWN0aW9uSXRlbScgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS4gfCBUUzcwMDYgLSBQYXJhbWV0ZXIgJ2FjdGlvbkluZGV4JyBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlLlxuICBhY3Rpb25JdGVtcy5mb3JFYWNoKChhY3Rpb25JdGVtLCBhY3Rpb25JbmRleCkgPT4ge1xuICAgIGNvbnN0IHtjb25maWcsIGFjdGlvblR5cGVJZH0gPSBhY3Rpb25JdGVtO1xuICAgIGNvbnN0IHNob3VsZFVzZVBsdWdpbiA9IGlzUGx1Z2luVHlwZShhY3Rpb25UeXBlSWQpO1xuICAgIGNvbnN0IHt0YXJnZXR9ID0gY29uZmlnO1xuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGVsZW1lbnRSb290ID0gdGFyZ2V0LmJvdW5kYXJ5TW9kZSA/IGV2ZW50RWxlbWVudFJvb3QgOiBudWxsO1xuICAgIGNvbnN0IGVsZW1lbnRzID0gZ2V0QWZmZWN0ZWRFbGVtZW50cyh7XG4gICAgICBjb25maWcsXG4gICAgICBldmVudCxcbiAgICAgIGV2ZW50VGFyZ2V0LFxuICAgICAgZWxlbWVudFJvb3QsXG4gICAgICBlbGVtZW50QXBpLFxuICAgIH0pO1xuICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQsIGVsZW1lbnRJbmRleCkgPT4ge1xuICAgICAgY29uc3QgcGx1Z2luSW5zdGFuY2UgPSBzaG91bGRVc2VQbHVnaW5cbiAgICAgICAgPyBjcmVhdGVQbHVnaW5JbnN0YW5jZShhY3Rpb25UeXBlSWQpPy4oZWxlbWVudCwgYWN0aW9uSXRlbSlcbiAgICAgICAgOiBudWxsO1xuICAgICAgY29uc3QgcGx1Z2luRHVyYXRpb24gPSBzaG91bGRVc2VQbHVnaW5cbiAgICAgICAgPyBnZXRQbHVnaW5EdXJhdGlvbihhY3Rpb25UeXBlSWQpKGVsZW1lbnQsIGFjdGlvbkl0ZW0pXG4gICAgICAgIDogbnVsbDtcbiAgICAgIGdyb3VwU3RhcnRSZXN1bHQgPSB0cnVlO1xuICAgICAgY29uc3QgaXNDYXJyaWVyID0gY2FycmllckluZGV4ID09PSBhY3Rpb25JbmRleCAmJiBlbGVtZW50SW5kZXggPT09IDA7XG4gICAgICBjb25zdCBjb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZSh7ZWxlbWVudCwgYWN0aW9uSXRlbX0pO1xuICAgICAgY29uc3QgZGVzdGluYXRpb24gPSBnZXREZXN0aW5hdGlvblZhbHVlcyhcbiAgICAgICAge2VsZW1lbnQsIGFjdGlvbkl0ZW0sIGVsZW1lbnRBcGl9LFxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4gICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICAgICAgcGx1Z2luSW5zdGFuY2VcbiAgICAgICk7XG5cbiAgICAgIGNyZWF0ZUluc3RhbmNlKHtcbiAgICAgICAgc3RvcmUsXG4gICAgICAgIGVsZW1lbnQsXG4gICAgICAgIGFjdGlvbkl0ZW0sXG4gICAgICAgIGV2ZW50SWQsXG4gICAgICAgIGV2ZW50VGFyZ2V0LFxuICAgICAgICBldmVudFN0YXRlS2V5LFxuICAgICAgICBhY3Rpb25MaXN0SWQsXG4gICAgICAgIGdyb3VwSW5kZXgsXG4gICAgICAgIGlzQ2FycmllcixcbiAgICAgICAgY29tcHV0ZWRTdHlsZSxcbiAgICAgICAgZGVzdGluYXRpb24sXG4gICAgICAgIGltbWVkaWF0ZSxcbiAgICAgICAgdmVyYm9zZSxcbiAgICAgICAgcGx1Z2luSW5zdGFuY2UsXG4gICAgICAgIHBsdWdpbkR1cmF0aW9uLFxuICAgICAgICBpbnN0YW5jZURlbGF5LFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gZ3JvdXBTdGFydFJlc3VsdDtcbn1cblxuLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTNzAwNiAtIFBhcmFtZXRlciAnb3B0aW9ucycgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS5cbmZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlKG9wdGlvbnMpIHtcbiAgY29uc3Qge3N0b3JlLCBjb21wdXRlZFN0eWxlLCAuLi5yZXN0fSA9IG9wdGlvbnM7XG4gIGNvbnN0IHtcbiAgICBlbGVtZW50LFxuICAgIGFjdGlvbkl0ZW0sXG5cbiAgICBpbW1lZGlhdGUsXG4gICAgcGx1Z2luSW5zdGFuY2UsXG5cbiAgICBjb250aW51b3VzLFxuXG4gICAgcmVzdGluZ1ZhbHVlLFxuICAgIGV2ZW50SWQsXG4gIH0gPSByZXN0O1xuICBjb25zdCBhdXRvU3RhcnQgPSAhY29udGludW91cztcbiAgY29uc3QgaW5zdGFuY2VJZCA9IGdldEluc3RhbmNlSWQoKTtcblxuICBjb25zdCB7aXhFbGVtZW50cywgaXhTZXNzaW9uLCBpeERhdGF9ID0gc3RvcmUuZ2V0U3RhdGUoKTtcbiAgY29uc3QgZWxlbWVudElkID0gZ2V0RWxlbWVudElkKGl4RWxlbWVudHMsIGVsZW1lbnQpO1xuICBjb25zdCB7cmVmU3RhdGV9ID0gaXhFbGVtZW50c1tlbGVtZW50SWRdIHx8IHt9O1xuICBjb25zdCByZWZUeXBlID0gZWxlbWVudEFwaS5nZXRSZWZUeXBlKGVsZW1lbnQpO1xuXG4gIGNvbnN0IHNraXBNb3Rpb24gPVxuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwNTMgLSBFbGVtZW50IGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUgYmVjYXVzZSBleHByZXNzaW9uIG9mIHR5cGUgJ2FueScgY2FuJ3QgYmUgdXNlZCB0byBpbmRleCB0eXBlICd7IHJlYWRvbmx5IFRSQU5TRk9STV9NT1ZFOiB0cnVlOyByZWFkb25seSBUUkFOU0ZPUk1fU0NBTEU6IHRydWU7IHJlYWRvbmx5IFRSQU5TRk9STV9ST1RBVEU6IHRydWU7IHJlYWRvbmx5IFRSQU5TRk9STV9TS0VXOiB0cnVlOyByZWFkb25seSBTVFlMRV9TSVpFOiB0cnVlOyByZWFkb25seSBTVFlMRV9GSUxURVI6IHRydWU7IHJlYWRvbmx5IFNUWUxFX0ZPTlRfVkFSSUFUSU9OOiB0cnVlOyB9Jy5cbiAgICBpeFNlc3Npb24ucmVkdWNlZE1vdGlvbiAmJiBSZWR1Y2VkTW90aW9uVHlwZXNbYWN0aW9uSXRlbS5hY3Rpb25UeXBlSWRdO1xuICBsZXQgc2tpcFRvVmFsdWU7XG4gIGlmIChza2lwTW90aW9uICYmIGNvbnRpbnVvdXMpIHtcbiAgICBzd2l0Y2ggKGl4RGF0YS5ldmVudHNbZXZlbnRJZF0/LmV2ZW50VHlwZUlkKSB7XG4gICAgICBjYXNlIEV2ZW50VHlwZUNvbnN0cy5NT1VTRV9NT1ZFOlxuICAgICAgY2FzZSBFdmVudFR5cGVDb25zdHMuTU9VU0VfTU9WRV9JTl9WSUVXUE9SVDpcbiAgICAgICAgc2tpcFRvVmFsdWUgPSByZXN0aW5nVmFsdWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgc2tpcFRvVmFsdWUgPSAwLjU7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG9yaWdpbiA9IGdldEluc3RhbmNlT3JpZ2luKFxuICAgIGVsZW1lbnQsXG4gICAgcmVmU3RhdGUsXG4gICAgY29tcHV0ZWRTdHlsZSxcbiAgICBhY3Rpb25JdGVtLFxuICAgIGVsZW1lbnRBcGksXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICBwbHVnaW5JbnN0YW5jZVxuICApO1xuXG4gIHN0b3JlLmRpc3BhdGNoKFxuICAgIGluc3RhbmNlQWRkZWQoe1xuICAgICAgaW5zdGFuY2VJZCxcbiAgICAgIGVsZW1lbnRJZCxcbiAgICAgIG9yaWdpbixcbiAgICAgIHJlZlR5cGUsXG4gICAgICBza2lwTW90aW9uLFxuICAgICAgc2tpcFRvVmFsdWUsXG4gICAgICAuLi5yZXN0LFxuICAgIH0pXG4gICk7XG5cbiAgZGlzcGF0Y2hDdXN0b21FdmVudChkb2N1bWVudC5ib2R5LCAnaXgyLWFuaW1hdGlvbi1zdGFydGVkJywgaW5zdGFuY2VJZCk7XG5cbiAgaWYgKGltbWVkaWF0ZSkge1xuICAgIHJlbmRlckltbWVkaWF0ZUluc3RhbmNlKHN0b3JlLCBpbnN0YW5jZUlkKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBvYnNlcnZlU3RvcmUoe1xuICAgIHN0b3JlLFxuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwMzEgLSBCaW5kaW5nIGVsZW1lbnQgJ2l4SW5zdGFuY2VzJyBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlLlxuICAgIHNlbGVjdDogKHtpeEluc3RhbmNlc30pID0+IGl4SW5zdGFuY2VzW2luc3RhbmNlSWRdLFxuICAgIG9uQ2hhbmdlOiBoYW5kbGVJbnN0YW5jZUNoYW5nZSxcbiAgfSk7XG5cbiAgaWYgKGF1dG9TdGFydCkge1xuICAgIHN0b3JlLmRpc3BhdGNoKGluc3RhbmNlU3RhcnRlZChpbnN0YW5jZUlkLCBpeFNlc3Npb24udGljaykpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUluc3RhbmNlKGluc3RhbmNlOiBhbnksIHN0b3JlOiBJWDJFbmdpbmVSZWR1Y2VyU3RvcmUpIHtcbiAgZGlzcGF0Y2hDdXN0b21FdmVudChkb2N1bWVudC5ib2R5LCAnaXgyLWFuaW1hdGlvbi1zdG9wcGluZycsIHtcbiAgICBpbnN0YW5jZUlkOiBpbnN0YW5jZS5pZCxcbiAgICBzdGF0ZTogc3RvcmUuZ2V0U3RhdGUoKSxcbiAgfSk7XG4gIGNvbnN0IHtlbGVtZW50SWQsIGFjdGlvbkl0ZW19ID0gaW5zdGFuY2U7XG4gIGNvbnN0IHtpeEVsZW1lbnRzfSA9IHN0b3JlLmdldFN0YXRlKCk7XG4gIGNvbnN0IHtyZWYsIHJlZlR5cGV9ID0gaXhFbGVtZW50c1tlbGVtZW50SWRdIHx8IHt9O1xuICBpZiAocmVmVHlwZSA9PT0gSFRNTF9FTEVNRU5UKSB7XG4gICAgY2xlYW51cEhUTUxFbGVtZW50KHJlZiwgYWN0aW9uSXRlbSwgZWxlbWVudEFwaSk7XG4gIH1cbiAgc3RvcmUuZGlzcGF0Y2goaW5zdGFuY2VSZW1vdmVkKGluc3RhbmNlLmlkKSk7XG59XG5cbmZ1bmN0aW9uIGRpc3BhdGNoQ3VzdG9tRXZlbnQoXG4gIGVsZW1lbnQ6IG51bGwgfCBIVE1MRWxlbWVudCxcbiAgZXZlbnROYW1lOiBzdHJpbmcsXG4gIGRldGFpbDpcbiAgICB8IHN0cmluZ1xuICAgIHwge1xuICAgICAgICBpbnN0YW5jZUlkOiBhbnk7XG4gICAgICAgIHN0YXRlOiBhbnk7XG4gICAgICB9XG4pIHtcbiAgY29uc3QgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcbiAgZXZlbnQuaW5pdEN1c3RvbUV2ZW50KGV2ZW50TmFtZSwgdHJ1ZSwgdHJ1ZSwgZGV0YWlsKTtcbiAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTMTgwNDcgLSAnZWxlbWVudCcgaXMgcG9zc2libHkgJ251bGwnLlxuICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJJbW1lZGlhdGVJbnN0YW5jZShcbiAgc3RvcmU6IElYMkVuZ2luZVJlZHVjZXJTdG9yZSxcbiAgaW5zdGFuY2VJZDogc3RyaW5nXG4pIHtcbiAgY29uc3Qge2l4UGFyYW1ldGVyc30gPSBzdG9yZS5nZXRTdGF0ZSgpO1xuICBzdG9yZS5kaXNwYXRjaChpbnN0YW5jZVN0YXJ0ZWQoaW5zdGFuY2VJZCwgMCkpO1xuICBzdG9yZS5kaXNwYXRjaChhbmltYXRpb25GcmFtZUNoYW5nZWQocGVyZm9ybWFuY2Uubm93KCksIGl4UGFyYW1ldGVycykpO1xuICBjb25zdCB7aXhJbnN0YW5jZXN9ID0gc3RvcmUuZ2V0U3RhdGUoKTtcbiAgaGFuZGxlSW5zdGFuY2VDaGFuZ2UoaXhJbnN0YW5jZXNbaW5zdGFuY2VJZF0sIHN0b3JlKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlSW5zdGFuY2VDaGFuZ2UoaW5zdGFuY2U6IGFueSwgc3RvcmU6IElYMkVuZ2luZVJlZHVjZXJTdG9yZSkge1xuICBjb25zdCB7XG4gICAgYWN0aXZlLFxuICAgIGNvbnRpbnVvdXMsXG4gICAgY29tcGxldGUsXG4gICAgZWxlbWVudElkLFxuICAgIGFjdGlvbkl0ZW0sXG4gICAgYWN0aW9uVHlwZUlkLFxuICAgIHJlbmRlclR5cGUsXG4gICAgY3VycmVudCxcbiAgICBncm91cEluZGV4LFxuICAgIGV2ZW50SWQsXG4gICAgZXZlbnRUYXJnZXQsXG4gICAgZXZlbnRTdGF0ZUtleSxcbiAgICBhY3Rpb25MaXN0SWQsXG4gICAgaXNDYXJyaWVyLFxuICAgIHN0eWxlUHJvcCxcbiAgICB2ZXJib3NlLFxuICAgIHBsdWdpbkluc3RhbmNlLFxuICB9ID0gaW5zdGFuY2U7XG5cbiAgLy8gQnlwYXNzIHJlbmRlciBpZiBjdXJyZW50IG1lZGlhIHF1ZXJ5IGlzIG5vdCBsaXN0ZWQgaW4gZXZlbnQgY29uZmlnXG4gIGNvbnN0IHtpeERhdGEsIGl4U2Vzc2lvbn0gPSBzdG9yZS5nZXRTdGF0ZSgpO1xuICBjb25zdCB7ZXZlbnRzfSA9IGl4RGF0YTtcbiAgY29uc3QgZXZlbnQgPSBldmVudHMgJiYgZXZlbnRzW2V2ZW50SWRdID8gZXZlbnRzW2V2ZW50SWRdIDoge307XG4gIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzIzMzkgLSAgUHJvcGVydHkgJ21lZGlhUXVlcmllcycgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSAne30gfCB1bmRlZmluZWQnLlxuICBjb25zdCB7bWVkaWFRdWVyaWVzID0gaXhEYXRhLm1lZGlhUXVlcnlLZXlzfSA9IGV2ZW50O1xuICBpZiAoIXNob3VsZEFsbG93TWVkaWFRdWVyeShtZWRpYVF1ZXJpZXMsIGl4U2Vzc2lvbi5tZWRpYVF1ZXJ5S2V5KSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChjb250aW51b3VzIHx8IGFjdGl2ZSB8fCBjb21wbGV0ZSkge1xuICAgIGlmIChjdXJyZW50IHx8IChyZW5kZXJUeXBlID09PSBSRU5ERVJfR0VORVJBTCAmJiBjb21wbGV0ZSkpIHtcbiAgICAgIC8vIFJlbmRlciBjdXJyZW50IHZhbHVlcyB0byByZWYgc3RhdGUgYW5kIGdyYWIgbGF0ZXN0XG4gICAgICBzdG9yZS5kaXNwYXRjaChcbiAgICAgICAgZWxlbWVudFN0YXRlQ2hhbmdlZChlbGVtZW50SWQsIGFjdGlvblR5cGVJZCwgY3VycmVudCwgYWN0aW9uSXRlbSlcbiAgICAgICk7XG4gICAgICBjb25zdCB7aXhFbGVtZW50c30gPSBzdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgY29uc3Qge3JlZiwgcmVmVHlwZSwgcmVmU3RhdGV9ID0gaXhFbGVtZW50c1tlbGVtZW50SWRdIHx8IHt9O1xuICAgICAgY29uc3QgYWN0aW9uU3RhdGUgPSByZWZTdGF0ZSAmJiByZWZTdGF0ZVthY3Rpb25UeXBlSWRdO1xuXG4gICAgICAvLyBSZW5kZXIgSFRNTCBhbmQgcGx1Z2luIGVsZW1lbnRzXG4gICAgICBpZiAocmVmVHlwZSA9PT0gSFRNTF9FTEVNRU5UIHx8IGlzUGx1Z2luVHlwZShhY3Rpb25UeXBlSWQpKSB7XG4gICAgICAgIHJlbmRlckhUTUxFbGVtZW50KFxuICAgICAgICAgIHJlZixcbiAgICAgICAgICByZWZTdGF0ZSxcbiAgICAgICAgICBhY3Rpb25TdGF0ZSxcbiAgICAgICAgICBldmVudElkLFxuICAgICAgICAgIGFjdGlvbkl0ZW0sXG4gICAgICAgICAgc3R5bGVQcm9wLFxuICAgICAgICAgIGVsZW1lbnRBcGksXG4gICAgICAgICAgcmVuZGVyVHlwZSxcbiAgICAgICAgICBwbHVnaW5JbnN0YW5jZVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjb21wbGV0ZSkge1xuICAgICAgaWYgKGlzQ2Fycmllcikge1xuICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFMyMzQ1IC0gQXJndW1lbnQgb2YgdHlwZSAneyBzdG9yZTogYW55OyBldmVudElkOiBhbnk7IGV2ZW50VGFyZ2V0OiBhbnk7IGV2ZW50U3RhdGVLZXk6IGFueTsgYWN0aW9uTGlzdElkOiBhbnk7IGdyb3VwSW5kZXg6IGFueTsgdmVyYm9zZTogYW55OyB9JyBpcyBub3QgYXNzaWduYWJsZSB0byBwYXJhbWV0ZXIgb2YgdHlwZSAneyBzdG9yZTogYW55OyBldmVudElkOiBhbnk7IGV2ZW50VGFyZ2V0OiBhbnk7IGV2ZW50U3RhdGVLZXk6IGFueTsgYWN0aW9uTGlzdElkOiBhbnk7IGdyb3VwSW5kZXg/OiBudW1iZXIgfCB1bmRlZmluZWQ7IGltbWVkaWF0ZTogYW55OyB2ZXJib3NlOiBhbnk7IH0nLlxuICAgICAgICBjb25zdCBzdGFydGVkID0gc3RhcnRBY3Rpb25Hcm91cCh7XG4gICAgICAgICAgc3RvcmUsXG4gICAgICAgICAgZXZlbnRJZCxcbiAgICAgICAgICBldmVudFRhcmdldCxcbiAgICAgICAgICBldmVudFN0YXRlS2V5LFxuICAgICAgICAgIGFjdGlvbkxpc3RJZCxcbiAgICAgICAgICBncm91cEluZGV4OiBncm91cEluZGV4ICsgMSxcbiAgICAgICAgICB2ZXJib3NlLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHZlcmJvc2UgJiYgIXN0YXJ0ZWQpIHtcbiAgICAgICAgICBzdG9yZS5kaXNwYXRjaChcbiAgICAgICAgICAgIGFjdGlvbkxpc3RQbGF5YmFja0NoYW5nZWQoe2FjdGlvbkxpc3RJZCwgaXNQbGF5aW5nOiBmYWxzZX0pXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZW1vdmVJbnN0YW5jZShpbnN0YW5jZSwgc3RvcmUpO1xuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbIm9ic2VydmVSZXF1ZXN0cyIsInN0YXJ0QWN0aW9uR3JvdXAiLCJzdGFydEVuZ2luZSIsInN0b3BBY3Rpb25Hcm91cCIsInN0b3BBbGxBY3Rpb25Hcm91cHMiLCJzdG9wRW5naW5lIiwiUXVpY2tFZmZlY3RzSWRMaXN0IiwiT2JqZWN0Iiwia2V5cyIsIlF1aWNrRWZmZWN0SWRzIiwiaXNRdWlja0VmZmVjdCIsImFjdGlvblR5cGVJZCIsImluY2x1ZGVzIiwiQ09MT05fREVMSU1JVEVSIiwiQk9VTkRBUllfU0VMRUNUT1IiLCJIVE1MX0VMRU1FTlQiLCJSRU5ERVJfR0VORVJBTCIsIldfTU9EX0lYIiwiSVgyRW5naW5lQ29uc3RhbnRzIiwiZ2V0QWZmZWN0ZWRFbGVtZW50cyIsImdldEVsZW1lbnRJZCIsImdldERlc3RpbmF0aW9uVmFsdWVzIiwib2JzZXJ2ZVN0b3JlIiwiZ2V0SW5zdGFuY2VJZCIsInJlbmRlckhUTUxFbGVtZW50IiwiY2xlYXJBbGxTdHlsZXMiLCJnZXRNYXhEdXJhdGlvbkl0ZW1JbmRleCIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRJbnN0YW5jZU9yaWdpbiIsInJlZHVjZUxpc3RUb0dyb3VwIiwic2hvdWxkTmFtZXNwYWNlRXZlbnRQYXJhbWV0ZXIiLCJnZXROYW1lc3BhY2VkUGFyYW1ldGVySWQiLCJzaG91bGRBbGxvd01lZGlhUXVlcnkiLCJjbGVhbnVwSFRNTEVsZW1lbnQiLCJjbGVhck9iamVjdENhY2hlIiwic3RyaW5naWZ5VGFyZ2V0IiwibWVkaWFRdWVyaWVzRXF1YWwiLCJzaGFsbG93RXF1YWwiLCJJWDJWYW5pbGxhVXRpbHMiLCJpc1BsdWdpblR5cGUiLCJjcmVhdGVQbHVnaW5JbnN0YW5jZSIsImdldFBsdWdpbkR1cmF0aW9uIiwiSVgyVmFuaWxsYVBsdWdpbnMiLCJ1YSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsIklTX01PQklMRV9TQUZBUkkiLCJtYXRjaCIsIlRIUk9UVExFRF9FVkVOVF9XQUlUIiwic3RvcmUiLCJzZWxlY3QiLCJpeFJlcXVlc3QiLCJwcmV2aWV3Iiwib25DaGFuZ2UiLCJoYW5kbGVQcmV2aWV3UmVxdWVzdCIsInBsYXliYWNrIiwiaGFuZGxlUGxheWJhY2tSZXF1ZXN0Iiwic3RvcCIsImhhbmRsZVN0b3BSZXF1ZXN0IiwiY2xlYXIiLCJoYW5kbGVDbGVhclJlcXVlc3QiLCJvYnNlcnZlTWVkaWFRdWVyeUNoYW5nZSIsIml4U2Vzc2lvbiIsIm1lZGlhUXVlcnlLZXkiLCJlbGVtZW50QXBpIiwiYWxsb3dFdmVudHMiLCJkaXNwYXRjaFBhZ2VVcGRhdGVFdmVudCIsIm9ic2VydmVPbmVSZW5kZXJUaWNrIiwib25UaWNrIiwidW5zdWJzY3JpYmUiLCJ0aWNrIiwicmF3RGF0YSIsImRlZmVyIiwic3RhcnQiLCJzZXRUaW1lb3V0IiwiZG9jdW1lbnQiLCJkaXNwYXRjaEV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJhY3Rpb25MaXN0SWQiLCJhY3Rpb25JdGVtSWQiLCJldmVudElkIiwiaW1tZWRpYXRlIiwidGVzdE1hbnVhbCIsInZlcmJvc2UiLCJhY3Rpb25MaXN0IiwiYWN0aW9uTGlzdHMiLCJBY3Rpb25UeXBlQ29uc3RzIiwiR0VORVJBTF9TVEFSVF9BQ1RJT04iLCJyZW5kZXJJbml0aWFsR3JvdXAiLCJzdGFydGVkIiwiZGlzcGF0Y2giLCJhY3Rpb25MaXN0UGxheWJhY2tDaGFuZ2VkIiwiaXNQbGF5aW5nIiwic3RhdGUiLCJnZXRTdGF0ZSIsInJhd0RhdGFJbXBvcnRlZCIsImFjdGl2ZSIsInNlc3Npb25Jbml0aWFsaXplZCIsImhhc0JvdW5kYXJ5Tm9kZXMiLCJCb29sZWFuIiwicXVlcnlTZWxlY3RvciIsInJlZHVjZWRNb3Rpb24iLCJib2R5IiwiaGFzQXR0cmlidXRlIiwid2luZG93IiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJiaW5kRXZlbnRzIiwiYWRkRG9jdW1lbnRDbGFzcyIsImhhc0RlZmluZWRNZWRpYVF1ZXJpZXMiLCJzZXNzaW9uU3RhcnRlZCIsInN0YXJ0UmVuZGVyTG9vcCIsImRvY3VtZW50RWxlbWVudCIsImNsYXNzTmFtZSIsImluZGV4T2YiLCJoYW5kbGVGcmFtZSIsIm5vdyIsIml4UGFyYW1ldGVycyIsImFuaW1hdGlvbkZyYW1lQ2hhbmdlZCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInBlcmZvcm1hbmNlIiwiZXZlbnRMaXN0ZW5lcnMiLCJmb3JFYWNoIiwiY2xlYXJFdmVudExpc3RlbmVyIiwic2Vzc2lvblN0b3BwZWQiLCJ0YXJnZXQiLCJsaXN0ZW5lclBhcmFtcyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJhcHBseSIsImNyZWF0ZUdyb3VwSW5zdGFuY2VzIiwiZXZlbnRTdGF0ZUtleSIsImV2ZW50VGFyZ2V0IiwiZXZlbnRDb25maWciLCJwYXJhbWV0ZXJHcm91cCIsInNtb290aGluZyIsInJlc3RpbmdWYWx1ZSIsIml4RGF0YSIsImV2ZW50cyIsImV2ZW50IiwiZXZlbnRUeXBlSWQiLCJ0YXJnZXRDYWNoZSIsImluc3RhbmNlQWN0aW9uR3JvdXBzIiwiaW5zdGFuY2VDb25maWdzIiwiY29udGludW91c0FjdGlvbkdyb3VwcyIsImlkIiwicGFyYW1ldGVySWQiLCJldmVudEVsZW1lbnRSb290IiwiZ2V0Q2xvc2VzdEVsZW1lbnQiLCJhY3Rpb25Hcm91cCIsImtleWZyYW1lIiwiYWN0aW9uSXRlbXMiLCJhY3Rpb25JdGVtIiwiY29uZmlnIiwiZWxlbWVudFJvb3QiLCJib3VuZGFyeU1vZGUiLCJrZXkiLCJhcHBlbmRBY3Rpb25JdGVtIiwiZWxlbWVudCIsInB1c2giLCJhY3Rpb25Hcm91cHMiLCJnZXQiLCJzaG91bGRVc2VQbHVnaW4iLCJQTFVHSU5fUklWRSIsInNlbGVjdG9yR3VpZHMiLCJsZW5ndGgiLCJwbHVnaW5JbnN0YW5jZSIsImRlc3RpbmF0aW9uIiwiY3JlYXRlSW5zdGFuY2UiLCJjb250aW51b3VzIiwibmV3QWN0aW9uR3JvdXBzIiwiZ3JvdXBJbmRleCIsInNvbWUiLCJncm91cCIsImluZGV4IiwiZXZlbnRUeXBlTWFwIiwidXBkYXRlVmlld3BvcnRXaWR0aCIsImxvZ2ljIiwiSVgyVmFuaWxsYUV2ZW50cyIsImNvbnNvbGUiLCJ3YXJuIiwiYmluZEV2ZW50VHlwZSIsImJpbmRSZXNpemVFdmVudHMiLCJXSU5ET1dfUkVTSVpFX0VWRU5UUyIsImhhbmRsZVJlc2l6ZSIsInR5cGUiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnRMaXN0ZW5lckFkZGVkIiwid2lkdGgiLCJpbm5lcldpZHRoIiwidmlld3BvcnRXaWR0aCIsIm1lZGlhUXVlcmllcyIsInZpZXdwb3J0V2lkdGhDaGFuZ2VkIiwibWFwRm91bmRWYWx1ZXMiLCJvYmplY3QiLCJpdGVyYXRlZSIsIm9taXRCeSIsIm1hcFZhbHVlcyIsImlzRW1wdHkiLCJmb3JFYWNoRXZlbnRUYXJnZXQiLCJldmVudFRhcmdldHMiLCJldmVudENhbGxiYWNrIiwiZWxlbWVudHMiLCJnZXRBZmZlY3RlZEZvckV2ZW50IiwidGFyZ2V0cyIsImluamVjdEJlaGF2aW9yQ1NTRml4ZXMiLCJ0eXBlcyIsImV2ZW50VHlwZXMiLCJoYW5kbGVyIiwiZXZlbnRIYW5kbGVyIiwic2l6ZSIsImFjdGlvbiIsImV2ZW50QWN0aW9uIiwibWVkaWFRdWVyeUtleXMiLCJtZWRpYVF1ZXJpZXNEZWZpbmVkIiwiR0VORVJBTF9DT05USU5VT1VTX0FDVElPTiIsImNvbmZpZ3MiLCJBcnJheSIsImlzQXJyYXkiLCJjb250aW51b3VzUGFyYW1ldGVyR3JvdXBJZCIsInBhcmFtR3JvdXBzIiwiZmluZCIsInJlc3RpbmdTdGF0ZSIsImhhbmRsZUV2ZW50IiwibmF0aXZlRXZlbnQiLCJvbGRTdGF0ZSIsImV2ZW50U3RhdGUiLCJoYW5kbGVFdmVudFdpdGhDb25maWciLCJuZXdTdGF0ZSIsImV2ZW50U3RhdGVDaGFuZ2VkIiwiaGFuZGxlRXZlbnRUaHJvdHRsZWQiLCJ0aHJvdHRsZSIsImFkZExpc3RlbmVycyIsInNob3VsZFRocm90dGxlIiwic3BsaXQiLCJmaWx0ZXIiLCJoYW5kbGVyRnVuYyIsImluamVjdGVkU2VsZWN0b3JzIiwiY3NzVGV4dCIsInNlbGVjdG9yIiwiZ2V0UXVlcnlTZWxlY3RvciIsIkV2ZW50VHlwZUNvbnN0cyIsIk1PVVNFX0NMSUNLIiwiTU9VU0VfU0VDT05EX0NMSUNLIiwic3R5bGUiLCJjcmVhdGVFbGVtZW50IiwidGV4dENvbnRlbnQiLCJhcHBlbmRDaGlsZCIsInVzZUZpcnN0R3JvdXBBc0luaXRpYWxTdGF0ZSIsImluaXRpYWxTdGF0ZUl0ZW1zIiwiaXRlbUNvbmZpZyIsInVzZUV2ZW50VGFyZ2V0Iiwib2JqZWN0SWQiLCJpdGVtRWxlbWVudHMiLCJpeEluc3RhbmNlcyIsImluc3RhbmNlIiwicmVtb3ZlSW5zdGFuY2UiLCJ2YWxpZEV2ZW50S2V5IiwiZWxlbWVudENvbnRhaW5zIiwiYWN0aW9uSXRlbUdyb3VwcyIsImlzRmlyc3RHcm91cCIsImluc3RhbmNlRGVsYXkiLCJkZWxheSIsInVuZGVmaW5lZCIsImNhcnJpZXJJbmRleCIsImdyb3VwU3RhcnRSZXN1bHQiLCJhY3Rpb25JbmRleCIsImVsZW1lbnRJbmRleCIsInBsdWdpbkR1cmF0aW9uIiwiaXNDYXJyaWVyIiwiY29tcHV0ZWRTdHlsZSIsIm9wdGlvbnMiLCJyZXN0IiwiYXV0b1N0YXJ0IiwiaW5zdGFuY2VJZCIsIml4RWxlbWVudHMiLCJlbGVtZW50SWQiLCJyZWZTdGF0ZSIsInJlZlR5cGUiLCJnZXRSZWZUeXBlIiwic2tpcE1vdGlvbiIsIlJlZHVjZWRNb3Rpb25UeXBlcyIsInNraXBUb1ZhbHVlIiwiTU9VU0VfTU9WRSIsIk1PVVNFX01PVkVfSU5fVklFV1BPUlQiLCJvcmlnaW4iLCJpbnN0YW5jZUFkZGVkIiwiZGlzcGF0Y2hDdXN0b21FdmVudCIsInJlbmRlckltbWVkaWF0ZUluc3RhbmNlIiwiaGFuZGxlSW5zdGFuY2VDaGFuZ2UiLCJpbnN0YW5jZVN0YXJ0ZWQiLCJyZWYiLCJpbnN0YW5jZVJlbW92ZWQiLCJldmVudE5hbWUiLCJkZXRhaWwiLCJjcmVhdGVFdmVudCIsImluaXRDdXN0b21FdmVudCIsImNvbXBsZXRlIiwicmVuZGVyVHlwZSIsImN1cnJlbnQiLCJzdHls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

}),
8955: (function (__unused_webpack_module, exports, __webpack_require__) {
/* eslint-env browser */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return _default;
    }
}));
const _flow = /*#__PURE__*/ _interop_require_default(__webpack_require__(5801));
const _get = /*#__PURE__*/ _interop_require_default(__webpack_require__(4738));
const _clamp = /*#__PURE__*/ _interop_require_default(__webpack_require__(3789));
const _sharedconstants = __webpack_require__(7087);
const _IX2VanillaEngine = __webpack_require__(1970);
const _IX2EngineActions = __webpack_require__(3946);
const _shared = __webpack_require__(9468);
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { MOUSE_CLICK, MOUSE_SECOND_CLICK, MOUSE_DOWN, MOUSE_UP, MOUSE_OVER, MOUSE_OUT, DROPDOWN_CLOSE, DROPDOWN_OPEN, SLIDER_ACTIVE, SLIDER_INACTIVE, TAB_ACTIVE, TAB_INACTIVE, NAVBAR_CLOSE, NAVBAR_OPEN, MOUSE_MOVE, PAGE_SCROLL_DOWN, SCROLL_INTO_VIEW, SCROLL_OUT_OF_VIEW, PAGE_SCROLL_UP, SCROLLING_IN_VIEW, PAGE_FINISH, ECOMMERCE_CART_CLOSE, ECOMMERCE_CART_OPEN, PAGE_START, PAGE_SCROLL } = _sharedconstants.EventTypeConsts;
const COMPONENT_ACTIVE = 'COMPONENT_ACTIVE';
const COMPONENT_INACTIVE = 'COMPONENT_INACTIVE';
const { COLON_DELIMITER } = _sharedconstants.IX2EngineConstants;
const { getNamespacedParameterId } = _shared.IX2VanillaUtils;
const composableFilter = (predicate)=>(options)=>{
        if (typeof options === 'object' && predicate(options)) {
            return true;
        }
        return options;
    };
const isElement = composableFilter(({ element, nativeEvent })=>{
    return element === nativeEvent.target;
});
const containsElement = composableFilter(({ element, nativeEvent })=>{
    return element.contains(nativeEvent.target);
});
const isOrContainsElement = (0, _flow.default)([
    isElement,
    containsElement
]);
const getAutoStopEvent = (store, autoStopEventId)=>{
    if (autoStopEventId) {
        const { ixData } = store.getState();
        const { events } = ixData;
        const eventToStop = events[autoStopEventId];
        // @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'any' can't be used to index type '{ readonly PAGE_START: "PAGE_START"; readonly PAGE_FINISH: "PAGE_FINISH"; }'.
        if (eventToStop && !AUTO_STOP_DISABLED_EVENTS[eventToStop.eventTypeId]) {
            return eventToStop;
        }
    }
    return null;
};
// @ts-expect-error - TS7031 - Binding element 'store' implicitly has an 'any' type. | TS7031 - Binding element 'event' implicitly has an 'any' type.
const hasAutoStopEvent = ({ store, event })=>{
    const { action: eventAction } = event;
    const { autoStopEventId } = eventAction.config;
    return Boolean(getAutoStopEvent(store, autoStopEventId));
};
// @ts-expect-error - TS7031 - Binding element 'store' implicitly has an 'any' type. | TS7031 - Binding element 'event' implicitly has an 'any' type. | TS7031 - Binding element 'element' implicitly has an 'any' type. | TS7031 - Binding element 'eventStateKey' implicitly has an 'any' type. | TS7006 - Parameter 'state' implicitly has an 'any' type.
const actionGroupCreator = ({ store, event, element, eventStateKey }, state)=>{
    const { action: eventAction, id: eventId } = event;
    const { actionListId, autoStopEventId } = eventAction.config;
    const eventToStop = getAutoStopEvent(store, autoStopEventId);
    if (eventToStop) {
        (0, _IX2VanillaEngine.stopActionGroup)({
            store,
            eventId: autoStopEventId,
            eventTarget: element,
            eventStateKey: autoStopEventId + COLON_DELIMITER + eventStateKey.split(COLON_DELIMITER)[1],
            actionListId: (0, _get.default)(eventToStop, 'action.config.actionListId')
        });
    }
    (0, _IX2VanillaEngine.stopActionGroup)({
        store,
        eventId,
        eventTarget: element,
        eventStateKey,
        actionListId
    });
    // @ts-expect-error - TS2345 - Argument of type '{ store: any; eventId: any; eventTarget: any; eventStateKey: any; actionListId: any; }' is not assignable to parameter of type '{ store: any; eventId: any; eventTarget: any; eventStateKey: any; actionListId: any; groupIndex?: number | undefined; immediate: any; verbose: any; }'.
    (0, _IX2VanillaEngine.startActionGroup)({
        store,
        eventId,
        eventTarget: element,
        eventStateKey,
        actionListId
    });
    return state;
};
// @ts-expect-error - TS7006 - Parameter 'filter' implicitly has an 'any' type. | TS7006 - Parameter 'handler' implicitly has an 'any' type.
const withFilter = (filter, handler)=>(options, state)=>filter(options, state) === true ? handler(options, state) : state;
const baseActionGroupOptions = {
    handler: withFilter(isOrContainsElement, actionGroupCreator)
};
const baseActivityActionGroupOptions = {
    ...baseActionGroupOptions,
    types: [
        COMPONENT_ACTIVE,
        COMPONENT_INACTIVE
    ].join(' ')
};
const SCROLL_EVENT_TYPES = [
    {
        target: window,
        types: 'resize orientationchange',
        throttle: true
    },
    {
        target: document,
        types: 'scroll wheel readystatechange IX2_PAGE_UPDATE',
        throttle: true
    }
];
const MOUSE_OVER_OUT_TYPES = 'mouseover mouseout';
const baseScrollActionGroupOptions = {
    types: SCROLL_EVENT_TYPES
};
const AUTO_STOP_DISABLED_EVENTS = {
    PAGE_START,
    PAGE_FINISH
};
const getDocumentState = (()=>{
    const supportOffset = window.pageXOffset !== undefined;
    const isCSS1Compat = document.compatMode === 'CSS1Compat';
    const rootElement = isCSS1Compat ? document.documentElement : document.body;
    return ()=>({
            scrollLeft: supportOffset ? window.pageXOffset : rootElement.scrollLeft,
            scrollTop: supportOffset ? window.pageYOffset : rootElement.scrollTop,
            // required to remove elasticity in Safari scrolling.
            stiffScrollTop: (0, _clamp.default)(supportOffset ? window.pageYOffset : rootElement.scrollTop, 0, rootElement.scrollHeight - window.innerHeight),
            scrollWidth: rootElement.scrollWidth,
            scrollHeight: rootElement.scrollHeight,
            clientWidth: rootElement.clientWidth,
            clientHeight: rootElement.clientHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight
        });
})();
const areBoxesIntersecting = (a, b)=>!(a.left > b.right || a.right < b.left || a.top > b.bottom || a.bottom < b.top);
// @ts-expect-error - TS7031 - Binding element 'element' implicitly has an 'any' type. | TS7031 - Binding element 'nativeEvent' implicitly has an 'any' type.
const isElementHovered = ({ element, nativeEvent })=>{
    const { type, target, relatedTarget } = nativeEvent;
    const containsTarget = element.contains(target);
    if (type === 'mouseover' && containsTarget) {
        return true;
    }
    const containsRelated = element.contains(relatedTarget);
    if (type === 'mouseout' && containsTarget && containsRelated) {
        return true;
    }
    return false;
};
const isElementVisible = (options)=>{
    const { element, event: { config } } = options;
    const { clientWidth, clientHeight } = getDocumentState();
    const scrollOffsetValue = config.scrollOffsetValue;
    const scrollOffsetUnit = config.scrollOffsetUnit;
    const isPX = scrollOffsetUnit === 'PX';
    const offsetPadding = isPX ? scrollOffsetValue : clientHeight * (scrollOffsetValue || 0) / 100;
    return areBoxesIntersecting(element.getBoundingClientRect(), {
        left: 0,
        top: offsetPadding,
        right: clientWidth,
        bottom: clientHeight - offsetPadding
    });
};
const whenComponentActiveChange = // @ts-expect-error - TS7006 - Parameter 'handler' implicitly has an 'any' type.
(handler)=>(options, oldState)=>{
        const { type } = options.nativeEvent;
        // prettier-ignore
        const isActive = [
            COMPONENT_ACTIVE,
            COMPONENT_INACTIVE
        ].indexOf(type) !== -1 ? type === COMPONENT_ACTIVE : oldState.isActive;
        const newState = {
            ...oldState,
            isActive
        };
        if (!oldState || newState.isActive !== oldState.isActive) {
            return handler(options, newState) || newState;
        }
        return newState;
    };
const whenElementHoverChange = (handler)=>(options, oldState)=>{
        const newState = {
            elementHovered: isElementHovered(options)
        };
        if (oldState ? newState.elementHovered !== oldState.elementHovered : newState.elementHovered) {
            // @ts-expect-error - TS1345 - An expression of type 'void' cannot be tested for truthiness.
            return handler(options, newState) || newState;
        }
        return newState;
    };
const whenElementVisibiltyChange = (handler)=>(options, oldState)=>{
        const newState = {
            ...oldState,
            elementVisible: isElementVisible(options)
        };
        if (oldState ? newState.elementVisible !== oldState.elementVisible : newState.elementVisible) {
            return handler(options, newState) || newState;
        }
        return newState;
    };
const whenScrollDirectionChange = // @ts-expect-error - TS7006 - Parameter 'handler' implicitly has an 'any' type.
(handler)=>(options, oldState = {})=>{
        const { stiffScrollTop: scrollTop, scrollHeight, innerHeight } = getDocumentState();
        const { event: { config, eventTypeId } } = options;
        const { scrollOffsetValue, scrollOffsetUnit } = config;
        const isPX = scrollOffsetUnit === 'PX';
        const scrollHeightBounds = scrollHeight - innerHeight;
        // percent top since innerHeight may change for mobile devices which also changes the scrollTop value.
        const percentTop = Number((scrollTop / scrollHeightBounds).toFixed(2));
        // no state change
        // @ts-expect-error - TS2339 - Property 'percentTop' does not exist on type '{}'.
        if (oldState && oldState.percentTop === percentTop) {
            return oldState;
        }
        const scrollTopPadding = (isPX ? scrollOffsetValue : innerHeight * (scrollOffsetValue || 0) / 100) / scrollHeightBounds;
        let scrollingDown;
        let scrollDirectionChanged;
        let anchorTop = 0;
        if (oldState) {
            // @ts-expect-error - TS2339 - Property 'percentTop' does not exist on type '{}'.
            scrollingDown = percentTop > oldState.percentTop;
            // @ts-expect-error - TS2339 - Property 'scrollingDown' does not exist on type '{}'.
            scrollDirectionChanged = oldState.scrollingDown !== scrollingDown;
            // @ts-expect-error - TS2339 - Property 'anchorTop' does not exist on type '{}'.
            anchorTop = scrollDirectionChanged ? percentTop : oldState.anchorTop;
        }
        const inBounds = eventTypeId === PAGE_SCROLL_DOWN ? percentTop >= anchorTop + scrollTopPadding : percentTop <= anchorTop - scrollTopPadding;
        const newState = {
            ...oldState,
            percentTop,
            inBounds,
            anchorTop,
            scrollingDown
        };
        if (oldState && inBounds && // @ts-expect-error - TS2339 - Property 'inBounds' does not exist on type '{}'.
        (scrollDirectionChanged || newState.inBounds !== oldState.inBounds)) {
            return handler(options, newState) || newState;
        }
        return newState;
    };
const pointIntersects = (point, rect)=>point.left > rect.left && point.left < rect.right && point.top > rect.top && point.top < rect.bottom;
const whenPageLoadFinish = (handler)=>(options, oldState)=>{
        const newState = {
            finished: document.readyState === 'complete'
        };
        if (newState.finished && !(oldState && oldState.finshed)) {
            // @ts-expect-error - TS2554 - Expected 2 arguments, but got 1.
            handler(options);
        }
        return newState;
    };
const whenPageLoadStart = (handler)=>(options, oldState)=>{
        const newState = {
            started: true
        };
        if (!oldState) {
            // @ts-expect-error - TS2554 - Expected 2 arguments, but got 1.
            handler(options);
        }
        return newState;
    };
const whenClickCountChange = (handler)=>(options, oldState = {
        clickCount: 0
    })=>{
        const newState = {
            clickCount: oldState.clickCount % 2 + 1
        };
        if (newState.clickCount !== oldState.clickCount) {
            // @ts-expect-error - TS1345 - An expression of type 'void' cannot be tested for truthiness.
            return handler(options, newState) || newState;
        }
        return newState;
    };
const getComponentActiveOptions = (allowNestedChildrenEvents = true)=>({
        ...baseActivityActionGroupOptions,
        handler: withFilter(allowNestedChildrenEvents ? isOrContainsElement : isElement, // @ts-expect-error - TS7006 - Parameter 'options' implicitly has an 'any' type. | TS7006 - Parameter 'state' implicitly has an 'any' type.
        whenComponentActiveChange((options, state)=>{
            return state.isActive ? baseActionGroupOptions.handler(options, state) : state;
        }))
    });
const getComponentInactiveOptions = (allowNestedChildrenEvents = true)=>({
        ...baseActivityActionGroupOptions,
        handler: withFilter(allowNestedChildrenEvents ? isOrContainsElement : isElement, // @ts-expect-error - TS7006 - Parameter 'options' implicitly has an 'any' type. | TS7006 - Parameter 'state' implicitly has an 'any' type.
        whenComponentActiveChange((options, state)=>{
            return !state.isActive ? baseActionGroupOptions.handler(options, state) : state;
        }))
    });
const scrollIntoOutOfViewOptions = {
    ...baseScrollActionGroupOptions,
    handler: whenElementVisibiltyChange((options, state)=>{
        const { elementVisible } = state;
        const { event, store } = options;
        const { ixData } = store.getState();
        const { events } = ixData;
        // trigger the handler only once if only one of SCROLL_INTO or SCROLL_OUT_OF event types
        // are registered.
        if (!events[event.action.config.autoStopEventId] && state.triggered) {
            return state;
        }
        if (event.eventTypeId === SCROLL_INTO_VIEW === elementVisible) {
            // @ts-expect-error - TS2554 - Expected 2 arguments, but got 1.
            actionGroupCreator(options);
            return {
                ...state,
                triggered: true
            };
        } else {
            return state;
        }
    })
};
const MOUSE_OUT_ROUND_THRESHOLD = 0.05;
const _default = {
    [SLIDER_ACTIVE]: getComponentActiveOptions(),
    [SLIDER_INACTIVE]: getComponentInactiveOptions(),
    [DROPDOWN_OPEN]: getComponentActiveOptions(),
    [DROPDOWN_CLOSE]: getComponentInactiveOptions(),
    // navbar elements may contain nested components in the menu. To prevent activity misfires, only listed for activity
    // events where the target is the navbar element, and ignore children that dispatch activitiy events.
    [NAVBAR_OPEN]: getComponentActiveOptions(false),
    [NAVBAR_CLOSE]: getComponentInactiveOptions(false),
    [TAB_ACTIVE]: getComponentActiveOptions(),
    [TAB_INACTIVE]: getComponentInactiveOptions(),
    [ECOMMERCE_CART_OPEN]: {
        types: 'ecommerce-cart-open',
        handler: withFilter(isOrContainsElement, actionGroupCreator)
    },
    [ECOMMERCE_CART_CLOSE]: {
        types: 'ecommerce-cart-close',
        handler: withFilter(isOrContainsElement, actionGroupCreator)
    },
    [MOUSE_CLICK]: {
        types: 'click',
        handler: withFilter(isOrContainsElement, whenClickCountChange((options, { clickCount })=>{
            if (hasAutoStopEvent(options)) {
                // @ts-expect-error - TS2554 - Expected 2 arguments, but got 1.
                clickCount === 1 && actionGroupCreator(options);
            } else {
                // @ts-expect-error - TS2554 - Expected 2 arguments, but got 1.
                actionGroupCreator(options);
            }
        }))
    },
    [MOUSE_SECOND_CLICK]: {
        types: 'click',
        handler: withFilter(isOrContainsElement, whenClickCountChange((options, { clickCount })=>{
            if (clickCount === 2) {
                // @ts-expect-error - TS2554 - Expected 2 arguments, but got 1.
                actionGroupCreator(options);
            }
        }))
    },
    [MOUSE_DOWN]: {
        ...baseActionGroupOptions,
        types: 'mousedown'
    },
    [MOUSE_UP]: {
        ...baseActionGroupOptions,
        types: 'mouseup'
    },
    [MOUSE_OVER]: {
        types: MOUSE_OVER_OUT_TYPES,
        handler: withFilter(isOrContainsElement, whenElementHoverChange((options, state)=>{
            if (state.elementHovered) {
                // @ts-expect-error - TS2554 - Expected 2 arguments, but got 1.
                actionGroupCreator(options);
            }
        }))
    },
    [MOUSE_OUT]: {
        types: MOUSE_OVER_OUT_TYPES,
        handler: withFilter(isOrContainsElement, whenElementHoverChange((options, state)=>{
            if (!state.elementHovered) {
                // @ts-expect-error - TS2554 - Expected 2 arguments, but got 1.
                actionGroupCreator(options);
            }
        }))
    },
    [MOUSE_MOVE]: {
        types: 'mousemove mouseout scroll',
        handler: (// eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        { store, element, eventConfig, nativeEvent, eventStateKey }, state = {
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0
        })=>{
            const { basedOn, selectedAxis, continuousParameterGroupId, reverse, restingState = 0 } = eventConfig;
            const { clientX = state.clientX, clientY = state.clientY, pageX = state.pageX, pageY = state.pageY } = nativeEvent;
            const isXAxis = selectedAxis === 'X_AXIS';
            const isMouseOut = nativeEvent.type === 'mouseout';
            let value = restingState / 100;
            let namespacedParameterId = continuousParameterGroupId;
            let elementHovered = false;
            switch(basedOn){
                case _sharedconstants.EventBasedOn.VIEWPORT:
                    {
                        value = isXAxis ? Math.min(clientX, window.innerWidth) / window.innerWidth : Math.min(clientY, window.innerHeight) / window.innerHeight;
                        break;
                    }
                // @ts-expect-error - TS2339 - Property 'PAGE' does not exist on type '{ readonly ELEMENT: "ELEMENT"; readonly VIEWPORT: "VIEWPORT"; }'.
                case _sharedconstants.EventBasedOn.PAGE:
                    {
                        const { scrollLeft, scrollTop, scrollWidth, scrollHeight } = getDocumentState();
                        value = isXAxis ? Math.min(scrollLeft + pageX, scrollWidth) / scrollWidth : Math.min(scrollTop + pageY, scrollHeight) / scrollHeight;
                        break;
                    }
                case _sharedconstants.EventBasedOn.ELEMENT:
                default:
                    {
                        namespacedParameterId = getNamespacedParameterId(eventStateKey, continuousParameterGroupId);
                        const isMouseEvent = nativeEvent.type.indexOf('mouse') === 0;
                        // Use isOrContainsElement for mouse events since they are fired from the target
                        if (isMouseEvent && isOrContainsElement({
                            element,
                            nativeEvent
                        }) !== true) {
                            break;
                        }
                        const rect = element.getBoundingClientRect();
                        const { left, top, width, height } = rect;
                        // Otherwise we'll need to calculate the mouse position from the previous handler state
                        // against the target element's rect
                        if (!isMouseEvent && !pointIntersects({
                            left: clientX,
                            top: clientY
                        }, rect)) {
                            break;
                        }
                        elementHovered = true;
                        value = isXAxis ? (clientX - left) / width : (clientY - top) / height;
                        break;
                    }
            }
            // cover case where the event is a mouse out, but the value is not quite at 100%
            if (isMouseOut && (value > 1 - MOUSE_OUT_ROUND_THRESHOLD || value < MOUSE_OUT_ROUND_THRESHOLD)) {
                value = Math.round(value);
            }
            // Only update based on element if the mouse is moving over or has just left the element
            if (basedOn !== _sharedconstants.EventBasedOn.ELEMENT || elementHovered || // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            elementHovered !== state.elementHovered) {
                value = reverse ? 1 - value : value;
                store.dispatch((0, _IX2EngineActions.parameterChanged)(namespacedParameterId, value));
            }
            return {
                elementHovered,
                clientX,
                clientY,
                pageX,
                pageY
            };
        }
    },
    [PAGE_SCROLL]: {
        types: SCROLL_EVENT_TYPES,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        handler: ({ store, eventConfig })=>{
            const { continuousParameterGroupId, reverse } = eventConfig;
            const { scrollTop, scrollHeight, clientHeight } = getDocumentState();
            let value = scrollTop / (scrollHeight - clientHeight);
            value = reverse ? 1 - value : value;
            store.dispatch((0, _IX2EngineActions.parameterChanged)(continuousParameterGroupId, value));
        }
    },
    [SCROLLING_IN_VIEW]: {
        types: SCROLL_EVENT_TYPES,
        handler: (// eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        { element, store, eventConfig, eventStateKey }, state = {
            scrollPercent: 0
        })=>{
            const { scrollLeft, scrollTop, scrollWidth, scrollHeight, clientHeight: visibleHeight } = getDocumentState();
            const { basedOn, selectedAxis, continuousParameterGroupId, startsEntering, startsExiting, addEndOffset, addStartOffset, addOffsetValue = 0, endOffsetValue = 0 } = eventConfig;
            const isXAxis = selectedAxis === 'X_AXIS';
            if (basedOn === _sharedconstants.EventBasedOn.VIEWPORT) {
                const value = isXAxis ? scrollLeft / scrollWidth : scrollTop / scrollHeight;
                if (value !== state.scrollPercent) {
                    store.dispatch((0, _IX2EngineActions.parameterChanged)(continuousParameterGroupId, value));
                }
                return {
                    scrollPercent: value
                };
            } else {
                const namespacedParameterId = getNamespacedParameterId(eventStateKey, continuousParameterGroupId);
                const elementRect = element.getBoundingClientRect();
                let offsetStartPerc = (addStartOffset ? addOffsetValue : 0) / 100;
                let offsetEndPerc = (addEndOffset ? endOffsetValue : 0) / 100;
                // flip the offset percentages depending on start / exit type
                offsetStartPerc = startsEntering ? offsetStartPerc : 1 - offsetStartPerc;
                offsetEndPerc = startsExiting ? offsetEndPerc : 1 - offsetEndPerc;
                const offsetElementTop = elementRect.top + Math.min(elementRect.height * offsetStartPerc, visibleHeight);
                const offsetElementBottom = elementRect.top + elementRect.height * offsetEndPerc;
                const offsetHeight = offsetElementBottom - offsetElementTop;
                const fixedScrollHeight = Math.min(visibleHeight + offsetHeight, scrollHeight);
                const fixedScrollTop = Math.min(Math.max(0, visibleHeight - offsetElementTop), fixedScrollHeight);
                const fixedScrollPerc = fixedScrollTop / fixedScrollHeight;
                if (fixedScrollPerc !== state.scrollPercent) {
                    store.dispatch((0, _IX2EngineActions.parameterChanged)(namespacedParameterId, fixedScrollPerc));
                }
                return {
                    scrollPercent: fixedScrollPerc
                };
            }
        }
    },
    [SCROLL_INTO_VIEW]: scrollIntoOutOfViewOptions,
    [SCROLL_OUT_OF_VIEW]: scrollIntoOutOfViewOptions,
    [PAGE_SCROLL_DOWN]: {
        ...baseScrollActionGroupOptions,
        // @ts-expect-error - TS7006 - Parameter 'options' implicitly has an 'any' type. | TS7006 - Parameter 'state' implicitly has an 'any' type.
        handler: whenScrollDirectionChange((options, state)=>{
            if (state.scrollingDown) {
                // @ts-expect-error - TS2554 - Expected 2 arguments, but got 1.
                actionGroupCreator(options);
            }
        })
    },
    [PAGE_SCROLL_UP]: {
        ...baseScrollActionGroupOptions,
        // @ts-expect-error - TS7006 - Parameter 'options' implicitly has an 'any' type. | TS7006 - Parameter 'state' implicitly has an 'any' type.
        handler: whenScrollDirectionChange((options, state)=>{
            if (!state.scrollingDown) {
                // @ts-expect-error - TS2554 - Expected 2 arguments, but got 1.
                actionGroupCreator(options);
            }
        })
    },
    [PAGE_FINISH]: {
        types: 'readystatechange IX2_PAGE_UPDATE',
        handler: withFilter(isElement, whenPageLoadFinish(actionGroupCreator))
    },
    [PAGE_START]: {
        types: 'readystatechange IX2_PAGE_UPDATE',
        handler: withFilter(isElement, whenPageLoadStart(actionGroupCreator))
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIklYMlZhbmlsbGFFdmVudHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWVudiBicm93c2VyICovXG5pbXBvcnQgZmxvdyBmcm9tICdsb2Rhc2gvZmxvdyc7XG5pbXBvcnQgZ2V0IGZyb20gJ2xvZGFzaC9nZXQnO1xuaW1wb3J0IGNsYW1wIGZyb20gJ2xvZGFzaC9jbGFtcCc7XG5cbmltcG9ydCB7XG4gIEV2ZW50VHlwZUNvbnN0cyxcbiAgRXZlbnRCYXNlZE9uLFxuICBJWDJFbmdpbmVDb25zdGFudHMsXG59IGZyb20gJ0BwYWNrYWdlcy9zeXN0ZW1zL2l4Mi9zaGFyZWQtY29uc3RhbnRzJztcblxuaW1wb3J0IHtzdG9wQWN0aW9uR3JvdXAsIHN0YXJ0QWN0aW9uR3JvdXB9IGZyb20gJy4vSVgyVmFuaWxsYUVuZ2luZSc7XG5pbXBvcnQge3BhcmFtZXRlckNoYW5nZWR9IGZyb20gJy4uL2FjdGlvbnMvSVgyRW5naW5lQWN0aW9ucyc7XG5pbXBvcnQge0lYMlZhbmlsbGFVdGlsc30gZnJvbSAnQHBhY2thZ2VzL3N5c3RlbXMvaXgyL3NoYXJlZCc7XG5cbmNvbnN0IHtcbiAgTU9VU0VfQ0xJQ0ssXG4gIE1PVVNFX1NFQ09ORF9DTElDSyxcbiAgTU9VU0VfRE9XTixcbiAgTU9VU0VfVVAsXG4gIE1PVVNFX09WRVIsXG4gIE1PVVNFX09VVCxcbiAgRFJPUERPV05fQ0xPU0UsXG4gIERST1BET1dOX09QRU4sXG4gIFNMSURFUl9BQ1RJVkUsXG4gIFNMSURFUl9JTkFDVElWRSxcbiAgVEFCX0FDVElWRSxcbiAgVEFCX0lOQUNUSVZFLFxuICBOQVZCQVJfQ0xPU0UsXG4gIE5BVkJBUl9PUEVOLFxuICBNT1VTRV9NT1ZFLFxuICBQQUdFX1NDUk9MTF9ET1dOLFxuICBTQ1JPTExfSU5UT19WSUVXLFxuICBTQ1JPTExfT1VUX09GX1ZJRVcsXG4gIFBBR0VfU0NST0xMX1VQLFxuICBTQ1JPTExJTkdfSU5fVklFVyxcbiAgUEFHRV9GSU5JU0gsXG4gIEVDT01NRVJDRV9DQVJUX0NMT1NFLFxuICBFQ09NTUVSQ0VfQ0FSVF9PUEVOLFxuICBQQUdFX1NUQVJULFxuICBQQUdFX1NDUk9MTCxcbn0gPSBFdmVudFR5cGVDb25zdHM7XG5cbmNvbnN0IENPTVBPTkVOVF9BQ1RJVkUgPSAnQ09NUE9ORU5UX0FDVElWRSc7XG5jb25zdCBDT01QT05FTlRfSU5BQ1RJVkUgPSAnQ09NUE9ORU5UX0lOQUNUSVZFJztcblxuY29uc3Qge0NPTE9OX0RFTElNSVRFUn0gPSBJWDJFbmdpbmVDb25zdGFudHM7XG5cbmNvbnN0IHtnZXROYW1lc3BhY2VkUGFyYW1ldGVySWR9ID0gSVgyVmFuaWxsYVV0aWxzO1xuXG5jb25zdCBjb21wb3NhYmxlRmlsdGVyID1cbiAgKHByZWRpY2F0ZTogKChhcmcxPzogYW55KSA9PiBhbnkpIHwgKChhcmcxPzogYW55KSA9PiBib29sZWFuKSkgPT5cbiAgKG9wdGlvbnM6IGFueSkgPT4ge1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ29iamVjdCcgJiYgcHJlZGljYXRlKG9wdGlvbnMpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIG9wdGlvbnM7XG4gIH07XG5cbmNvbnN0IGlzRWxlbWVudCA9IGNvbXBvc2FibGVGaWx0ZXIoKHtlbGVtZW50LCBuYXRpdmVFdmVudH0pID0+IHtcbiAgcmV0dXJuIGVsZW1lbnQgPT09IG5hdGl2ZUV2ZW50LnRhcmdldDtcbn0pO1xuXG5jb25zdCBjb250YWluc0VsZW1lbnQgPSBjb21wb3NhYmxlRmlsdGVyKCh7ZWxlbWVudCwgbmF0aXZlRXZlbnR9KSA9PiB7XG4gIHJldHVybiBlbGVtZW50LmNvbnRhaW5zKG5hdGl2ZUV2ZW50LnRhcmdldCk7XG59KTtcblxuY29uc3QgaXNPckNvbnRhaW5zRWxlbWVudCA9IGZsb3coW2lzRWxlbWVudCwgY29udGFpbnNFbGVtZW50XSk7XG5cbmNvbnN0IGdldEF1dG9TdG9wRXZlbnQgPSAoc3RvcmU6IGFueSwgYXV0b1N0b3BFdmVudElkOiBhbnkpID0+IHtcbiAgaWYgKGF1dG9TdG9wRXZlbnRJZCkge1xuICAgIGNvbnN0IHtpeERhdGF9ID0gc3RvcmUuZ2V0U3RhdGUoKTtcbiAgICBjb25zdCB7ZXZlbnRzfSA9IGl4RGF0YTtcbiAgICBjb25zdCBldmVudFRvU3RvcCA9IGV2ZW50c1thdXRvU3RvcEV2ZW50SWRdO1xuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwNTMgLSBFbGVtZW50IGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUgYmVjYXVzZSBleHByZXNzaW9uIG9mIHR5cGUgJ2FueScgY2FuJ3QgYmUgdXNlZCB0byBpbmRleCB0eXBlICd7IHJlYWRvbmx5IFBBR0VfU1RBUlQ6IFwiUEFHRV9TVEFSVFwiOyByZWFkb25seSBQQUdFX0ZJTklTSDogXCJQQUdFX0ZJTklTSFwiOyB9Jy5cbiAgICBpZiAoZXZlbnRUb1N0b3AgJiYgIUFVVE9fU1RPUF9ESVNBQkxFRF9FVkVOVFNbZXZlbnRUb1N0b3AuZXZlbnRUeXBlSWRdKSB7XG4gICAgICByZXR1cm4gZXZlbnRUb1N0b3A7XG4gICAgfVxuICB9XG4gIHJldHVybiBudWxsO1xufTtcblxuLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTNzAzMSAtIEJpbmRpbmcgZWxlbWVudCAnc3RvcmUnIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuIHwgVFM3MDMxIC0gQmluZGluZyBlbGVtZW50ICdldmVudCcgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS5cbmNvbnN0IGhhc0F1dG9TdG9wRXZlbnQgPSAoe3N0b3JlLCBldmVudH0pID0+IHtcbiAgY29uc3Qge2FjdGlvbjogZXZlbnRBY3Rpb259ID0gZXZlbnQ7XG4gIGNvbnN0IHthdXRvU3RvcEV2ZW50SWR9ID0gZXZlbnRBY3Rpb24uY29uZmlnO1xuICByZXR1cm4gQm9vbGVhbihnZXRBdXRvU3RvcEV2ZW50KHN0b3JlLCBhdXRvU3RvcEV2ZW50SWQpKTtcbn07XG5cbi8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwMzEgLSBCaW5kaW5nIGVsZW1lbnQgJ3N0b3JlJyBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlLiB8IFRTNzAzMSAtIEJpbmRpbmcgZWxlbWVudCAnZXZlbnQnIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuIHwgVFM3MDMxIC0gQmluZGluZyBlbGVtZW50ICdlbGVtZW50JyBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlLiB8IFRTNzAzMSAtIEJpbmRpbmcgZWxlbWVudCAnZXZlbnRTdGF0ZUtleScgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS4gfCBUUzcwMDYgLSBQYXJhbWV0ZXIgJ3N0YXRlJyBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlLlxuY29uc3QgYWN0aW9uR3JvdXBDcmVhdG9yID0gKHtzdG9yZSwgZXZlbnQsIGVsZW1lbnQsIGV2ZW50U3RhdGVLZXl9LCBzdGF0ZSkgPT4ge1xuICBjb25zdCB7YWN0aW9uOiBldmVudEFjdGlvbiwgaWQ6IGV2ZW50SWR9ID0gZXZlbnQ7XG4gIGNvbnN0IHthY3Rpb25MaXN0SWQsIGF1dG9TdG9wRXZlbnRJZH0gPSBldmVudEFjdGlvbi5jb25maWc7XG4gIGNvbnN0IGV2ZW50VG9TdG9wID0gZ2V0QXV0b1N0b3BFdmVudChzdG9yZSwgYXV0b1N0b3BFdmVudElkKTtcbiAgaWYgKGV2ZW50VG9TdG9wKSB7XG4gICAgc3RvcEFjdGlvbkdyb3VwKHtcbiAgICAgIHN0b3JlLFxuICAgICAgZXZlbnRJZDogYXV0b1N0b3BFdmVudElkLFxuICAgICAgZXZlbnRUYXJnZXQ6IGVsZW1lbnQsXG4gICAgICBldmVudFN0YXRlS2V5OlxuICAgICAgICBhdXRvU3RvcEV2ZW50SWQgK1xuICAgICAgICBDT0xPTl9ERUxJTUlURVIgK1xuICAgICAgICBldmVudFN0YXRlS2V5LnNwbGl0KENPTE9OX0RFTElNSVRFUilbMV0sXG4gICAgICBhY3Rpb25MaXN0SWQ6IGdldChldmVudFRvU3RvcCwgJ2FjdGlvbi5jb25maWcuYWN0aW9uTGlzdElkJyksXG4gICAgfSk7XG4gIH1cbiAgc3RvcEFjdGlvbkdyb3VwKHtcbiAgICBzdG9yZSxcbiAgICBldmVudElkLFxuICAgIGV2ZW50VGFyZ2V0OiBlbGVtZW50LFxuICAgIGV2ZW50U3RhdGVLZXksXG4gICAgYWN0aW9uTGlzdElkLFxuICB9KTtcbiAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTMjM0NSAtIEFyZ3VtZW50IG9mIHR5cGUgJ3sgc3RvcmU6IGFueTsgZXZlbnRJZDogYW55OyBldmVudFRhcmdldDogYW55OyBldmVudFN0YXRlS2V5OiBhbnk7IGFjdGlvbkxpc3RJZDogYW55OyB9JyBpcyBub3QgYXNzaWduYWJsZSB0byBwYXJhbWV0ZXIgb2YgdHlwZSAneyBzdG9yZTogYW55OyBldmVudElkOiBhbnk7IGV2ZW50VGFyZ2V0OiBhbnk7IGV2ZW50U3RhdGVLZXk6IGFueTsgYWN0aW9uTGlzdElkOiBhbnk7IGdyb3VwSW5kZXg/OiBudW1iZXIgfCB1bmRlZmluZWQ7IGltbWVkaWF0ZTogYW55OyB2ZXJib3NlOiBhbnk7IH0nLlxuICBzdGFydEFjdGlvbkdyb3VwKHtcbiAgICBzdG9yZSxcbiAgICBldmVudElkLFxuICAgIGV2ZW50VGFyZ2V0OiBlbGVtZW50LFxuICAgIGV2ZW50U3RhdGVLZXksXG4gICAgYWN0aW9uTGlzdElkLFxuICB9KTtcbiAgcmV0dXJuIHN0YXRlO1xufTtcblxuLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTNzAwNiAtIFBhcmFtZXRlciAnZmlsdGVyJyBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlLiB8IFRTNzAwNiAtIFBhcmFtZXRlciAnaGFuZGxlcicgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS5cbmNvbnN0IHdpdGhGaWx0ZXIgPSAoZmlsdGVyLCBoYW5kbGVyKSA9PiAob3B0aW9uczogYW55LCBzdGF0ZTogYW55KSA9PlxuICBmaWx0ZXIob3B0aW9ucywgc3RhdGUpID09PSB0cnVlID8gaGFuZGxlcihvcHRpb25zLCBzdGF0ZSkgOiBzdGF0ZTtcblxuY29uc3QgYmFzZUFjdGlvbkdyb3VwT3B0aW9ucyA9IHtcbiAgaGFuZGxlcjogd2l0aEZpbHRlcihpc09yQ29udGFpbnNFbGVtZW50LCBhY3Rpb25Hcm91cENyZWF0b3IpLFxufSBhcyBjb25zdDtcblxuY29uc3QgYmFzZUFjdGl2aXR5QWN0aW9uR3JvdXBPcHRpb25zID0ge1xuICAuLi5iYXNlQWN0aW9uR3JvdXBPcHRpb25zLFxuICB0eXBlczogW0NPTVBPTkVOVF9BQ1RJVkUsIENPTVBPTkVOVF9JTkFDVElWRV0uam9pbignICcpLFxufSBhcyBjb25zdDtcblxuY29uc3QgU0NST0xMX0VWRU5UX1RZUEVTID0gW1xuICB7dGFyZ2V0OiB3aW5kb3csIHR5cGVzOiAncmVzaXplIG9yaWVudGF0aW9uY2hhbmdlJywgdGhyb3R0bGU6IHRydWV9LFxuICB7XG4gICAgdGFyZ2V0OiBkb2N1bWVudCxcbiAgICB0eXBlczogJ3Njcm9sbCB3aGVlbCByZWFkeXN0YXRlY2hhbmdlIElYMl9QQUdFX1VQREFURScsXG4gICAgdGhyb3R0bGU6IHRydWUsXG4gIH0sXG5dO1xuXG5jb25zdCBNT1VTRV9PVkVSX09VVF9UWVBFUyA9ICdtb3VzZW92ZXIgbW91c2VvdXQnO1xuXG5jb25zdCBiYXNlU2Nyb2xsQWN0aW9uR3JvdXBPcHRpb25zID0ge1xuICB0eXBlczogU0NST0xMX0VWRU5UX1RZUEVTLFxufSBhcyBjb25zdDtcblxuY29uc3QgQVVUT19TVE9QX0RJU0FCTEVEX0VWRU5UUyA9IHtcbiAgUEFHRV9TVEFSVCxcbiAgUEFHRV9GSU5JU0gsXG59IGFzIGNvbnN0O1xuXG5jb25zdCBnZXREb2N1bWVudFN0YXRlID0gKCgpID0+IHtcbiAgY29uc3Qgc3VwcG9ydE9mZnNldCA9IHdpbmRvdy5wYWdlWE9mZnNldCAhPT0gdW5kZWZpbmVkO1xuICBjb25zdCBpc0NTUzFDb21wYXQgPSBkb2N1bWVudC5jb21wYXRNb2RlID09PSAnQ1NTMUNvbXBhdCc7XG4gIGNvbnN0IHJvb3RFbGVtZW50ID0gaXNDU1MxQ29tcGF0ID8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IDogZG9jdW1lbnQuYm9keTtcbiAgcmV0dXJuICgpID0+ICh7XG4gICAgc2Nyb2xsTGVmdDogc3VwcG9ydE9mZnNldCA/IHdpbmRvdy5wYWdlWE9mZnNldCA6IHJvb3RFbGVtZW50LnNjcm9sbExlZnQsXG5cbiAgICBzY3JvbGxUb3A6IHN1cHBvcnRPZmZzZXQgPyB3aW5kb3cucGFnZVlPZmZzZXQgOiByb290RWxlbWVudC5zY3JvbGxUb3AsXG5cbiAgICAvLyByZXF1aXJlZCB0byByZW1vdmUgZWxhc3RpY2l0eSBpbiBTYWZhcmkgc2Nyb2xsaW5nLlxuICAgIHN0aWZmU2Nyb2xsVG9wOiBjbGFtcChcbiAgICAgIHN1cHBvcnRPZmZzZXQgPyB3aW5kb3cucGFnZVlPZmZzZXQgOiByb290RWxlbWVudC5zY3JvbGxUb3AsXG4gICAgICAwLFxuXG4gICAgICByb290RWxlbWVudC5zY3JvbGxIZWlnaHQgLSB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICApLFxuXG4gICAgc2Nyb2xsV2lkdGg6IHJvb3RFbGVtZW50LnNjcm9sbFdpZHRoLFxuXG4gICAgc2Nyb2xsSGVpZ2h0OiByb290RWxlbWVudC5zY3JvbGxIZWlnaHQsXG5cbiAgICBjbGllbnRXaWR0aDogcm9vdEVsZW1lbnQuY2xpZW50V2lkdGgsXG5cbiAgICBjbGllbnRIZWlnaHQ6IHJvb3RFbGVtZW50LmNsaWVudEhlaWdodCxcbiAgICBpbm5lcldpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICBpbm5lckhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxuICB9KTtcbn0pKCk7XG5cbmNvbnN0IGFyZUJveGVzSW50ZXJzZWN0aW5nID0gKFxuICBhOiBhbnksXG4gIGI6IHtcbiAgICBib3R0b206IG51bWJlcjtcbiAgICBsZWZ0OiBudW1iZXI7XG4gICAgcmlnaHQ6IG51bWJlcjtcbiAgICB0b3A6IGFueSB8IG51bWJlcjtcbiAgfVxuKSA9PlxuICAhKFxuICAgIGEubGVmdCA+IGIucmlnaHQgfHxcbiAgICBhLnJpZ2h0IDwgYi5sZWZ0IHx8XG4gICAgYS50b3AgPiBiLmJvdHRvbSB8fFxuICAgIGEuYm90dG9tIDwgYi50b3BcbiAgKTtcblxuLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTNzAzMSAtIEJpbmRpbmcgZWxlbWVudCAnZWxlbWVudCcgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS4gfCBUUzcwMzEgLSBCaW5kaW5nIGVsZW1lbnQgJ25hdGl2ZUV2ZW50JyBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlLlxuY29uc3QgaXNFbGVtZW50SG92ZXJlZCA9ICh7ZWxlbWVudCwgbmF0aXZlRXZlbnR9KSA9PiB7XG4gIGNvbnN0IHt0eXBlLCB0YXJnZXQsIHJlbGF0ZWRUYXJnZXR9ID0gbmF0aXZlRXZlbnQ7XG4gIGNvbnN0IGNvbnRhaW5zVGFyZ2V0ID0gZWxlbWVudC5jb250YWlucyh0YXJnZXQpO1xuICBpZiAodHlwZSA9PT0gJ21vdXNlb3ZlcicgJiYgY29udGFpbnNUYXJnZXQpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBjb25zdCBjb250YWluc1JlbGF0ZWQgPSBlbGVtZW50LmNvbnRhaW5zKHJlbGF0ZWRUYXJnZXQpO1xuICBpZiAodHlwZSA9PT0gJ21vdXNlb3V0JyAmJiBjb250YWluc1RhcmdldCAmJiBjb250YWluc1JlbGF0ZWQpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5jb25zdCBpc0VsZW1lbnRWaXNpYmxlID0gKG9wdGlvbnM6IGFueSkgPT4ge1xuICBjb25zdCB7XG4gICAgZWxlbWVudCxcbiAgICBldmVudDoge2NvbmZpZ30sXG4gIH0gPSBvcHRpb25zO1xuXG4gIGNvbnN0IHtjbGllbnRXaWR0aCwgY2xpZW50SGVpZ2h0fSA9IGdldERvY3VtZW50U3RhdGUoKTtcbiAgY29uc3Qgc2Nyb2xsT2Zmc2V0VmFsdWUgPSBjb25maWcuc2Nyb2xsT2Zmc2V0VmFsdWU7XG4gIGNvbnN0IHNjcm9sbE9mZnNldFVuaXQgPSBjb25maWcuc2Nyb2xsT2Zmc2V0VW5pdDtcbiAgY29uc3QgaXNQWCA9IHNjcm9sbE9mZnNldFVuaXQgPT09ICdQWCc7XG5cbiAgY29uc3Qgb2Zmc2V0UGFkZGluZyA9IGlzUFhcbiAgICA/IHNjcm9sbE9mZnNldFZhbHVlXG4gICAgOiAoY2xpZW50SGVpZ2h0ICogKHNjcm9sbE9mZnNldFZhbHVlIHx8IDApKSAvIDEwMDtcblxuICByZXR1cm4gYXJlQm94ZXNJbnRlcnNlY3RpbmcoZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSwge1xuICAgIGxlZnQ6IDAsXG4gICAgdG9wOiBvZmZzZXRQYWRkaW5nLFxuICAgIHJpZ2h0OiBjbGllbnRXaWR0aCxcbiAgICBib3R0b206IGNsaWVudEhlaWdodCAtIG9mZnNldFBhZGRpbmcsXG4gIH0pO1xufTtcblxuY29uc3Qgd2hlbkNvbXBvbmVudEFjdGl2ZUNoYW5nZSA9XG4gIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwMDYgLSBQYXJhbWV0ZXIgJ2hhbmRsZXInIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuXG4gIChoYW5kbGVyKSA9PiAob3B0aW9uczogYW55LCBvbGRTdGF0ZTogYW55KSA9PiB7XG4gICAgY29uc3Qge3R5cGV9ID0gb3B0aW9ucy5uYXRpdmVFdmVudDtcbiAgICAvLyBwcmV0dGllci1pZ25vcmVcbiAgICBjb25zdCBpc0FjdGl2ZSA9IFtDT01QT05FTlRfQUNUSVZFLCBDT01QT05FTlRfSU5BQ1RJVkVdLmluZGV4T2YodHlwZSkgIT09IC0xXG4gICAgPyB0eXBlID09PSBDT01QT05FTlRfQUNUSVZFXG4gICAgOiBvbGRTdGF0ZS5pc0FjdGl2ZTtcblxuICAgIGNvbnN0IG5ld1N0YXRlID0ge1xuICAgICAgLi4ub2xkU3RhdGUsXG4gICAgICBpc0FjdGl2ZSxcbiAgICB9IGFzIGNvbnN0O1xuXG4gICAgaWYgKCFvbGRTdGF0ZSB8fCBuZXdTdGF0ZS5pc0FjdGl2ZSAhPT0gb2xkU3RhdGUuaXNBY3RpdmUpIHtcbiAgICAgIHJldHVybiBoYW5kbGVyKG9wdGlvbnMsIG5ld1N0YXRlKSB8fCBuZXdTdGF0ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3U3RhdGU7XG4gIH07XG5cbmNvbnN0IHdoZW5FbGVtZW50SG92ZXJDaGFuZ2UgPVxuICAoXG4gICAgaGFuZGxlcjogKFxuICAgICAgb3B0aW9uczogYW55LFxuICAgICAgc3RhdGU6IHtcbiAgICAgICAgZWxlbWVudEhvdmVyZWQ6IGJvb2xlYW47XG4gICAgICB9XG4gICAgKSA9PiB2b2lkXG4gICkgPT5cbiAgKG9wdGlvbnM6IGFueSwgb2xkU3RhdGU6IGFueSkgPT4ge1xuICAgIGNvbnN0IG5ld1N0YXRlID0ge1xuICAgICAgZWxlbWVudEhvdmVyZWQ6IGlzRWxlbWVudEhvdmVyZWQob3B0aW9ucyksXG4gICAgfSBhcyBjb25zdDtcbiAgICBpZiAoXG4gICAgICBvbGRTdGF0ZVxuICAgICAgICA/IG5ld1N0YXRlLmVsZW1lbnRIb3ZlcmVkICE9PSBvbGRTdGF0ZS5lbGVtZW50SG92ZXJlZFxuICAgICAgICA6IG5ld1N0YXRlLmVsZW1lbnRIb3ZlcmVkXG4gICAgKSB7XG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFMxMzQ1IC0gQW4gZXhwcmVzc2lvbiBvZiB0eXBlICd2b2lkJyBjYW5ub3QgYmUgdGVzdGVkIGZvciB0cnV0aGluZXNzLlxuICAgICAgcmV0dXJuIGhhbmRsZXIob3B0aW9ucywgbmV3U3RhdGUpIHx8IG5ld1N0YXRlO1xuICAgIH1cbiAgICByZXR1cm4gbmV3U3RhdGU7XG4gIH07XG5cbmNvbnN0IHdoZW5FbGVtZW50VmlzaWJpbHR5Q2hhbmdlID1cbiAgKGhhbmRsZXI6IChvcHRpb25zPzogYW55LCBzdGF0ZT86IGFueSkgPT4gYW55KSA9PlxuICAob3B0aW9uczogYW55LCBvbGRTdGF0ZTogYW55KSA9PiB7XG4gICAgY29uc3QgbmV3U3RhdGUgPSB7XG4gICAgICAuLi5vbGRTdGF0ZSxcbiAgICAgIGVsZW1lbnRWaXNpYmxlOiBpc0VsZW1lbnRWaXNpYmxlKG9wdGlvbnMpLFxuICAgIH0gYXMgY29uc3Q7XG4gICAgaWYgKFxuICAgICAgb2xkU3RhdGVcbiAgICAgICAgPyBuZXdTdGF0ZS5lbGVtZW50VmlzaWJsZSAhPT0gb2xkU3RhdGUuZWxlbWVudFZpc2libGVcbiAgICAgICAgOiBuZXdTdGF0ZS5lbGVtZW50VmlzaWJsZVxuICAgICkge1xuICAgICAgcmV0dXJuIGhhbmRsZXIob3B0aW9ucywgbmV3U3RhdGUpIHx8IG5ld1N0YXRlO1xuICAgIH1cbiAgICByZXR1cm4gbmV3U3RhdGU7XG4gIH07XG5cbmNvbnN0IHdoZW5TY3JvbGxEaXJlY3Rpb25DaGFuZ2UgPVxuICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFM3MDA2IC0gUGFyYW1ldGVyICdoYW5kbGVyJyBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlLlxuXG5cbiAgICAoaGFuZGxlcikgPT5cbiAgICAob3B0aW9uczogYW55LCBvbGRTdGF0ZSA9IHt9KSA9PiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIHN0aWZmU2Nyb2xsVG9wOiBzY3JvbGxUb3AsXG4gICAgICAgIHNjcm9sbEhlaWdodCxcbiAgICAgICAgaW5uZXJIZWlnaHQsXG4gICAgICB9ID0gZ2V0RG9jdW1lbnRTdGF0ZSgpO1xuICAgICAgY29uc3Qge1xuICAgICAgICBldmVudDoge2NvbmZpZywgZXZlbnRUeXBlSWR9LFxuICAgICAgfSA9IG9wdGlvbnM7XG4gICAgICBjb25zdCB7c2Nyb2xsT2Zmc2V0VmFsdWUsIHNjcm9sbE9mZnNldFVuaXR9ID0gY29uZmlnO1xuICAgICAgY29uc3QgaXNQWCA9IHNjcm9sbE9mZnNldFVuaXQgPT09ICdQWCc7XG5cbiAgICAgIGNvbnN0IHNjcm9sbEhlaWdodEJvdW5kcyA9IHNjcm9sbEhlaWdodCAtIGlubmVySGVpZ2h0O1xuICAgICAgLy8gcGVyY2VudCB0b3Agc2luY2UgaW5uZXJIZWlnaHQgbWF5IGNoYW5nZSBmb3IgbW9iaWxlIGRldmljZXMgd2hpY2ggYWxzbyBjaGFuZ2VzIHRoZSBzY3JvbGxUb3AgdmFsdWUuXG4gICAgICBjb25zdCBwZXJjZW50VG9wID0gTnVtYmVyKChzY3JvbGxUb3AgLyBzY3JvbGxIZWlnaHRCb3VuZHMpLnRvRml4ZWQoMikpO1xuXG4gICAgICAvLyBubyBzdGF0ZSBjaGFuZ2VcbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzIzMzkgLSBQcm9wZXJ0eSAncGVyY2VudFRvcCcgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSAne30nLlxuICAgICAgaWYgKG9sZFN0YXRlICYmIG9sZFN0YXRlLnBlcmNlbnRUb3AgPT09IHBlcmNlbnRUb3ApIHtcbiAgICAgICAgcmV0dXJuIG9sZFN0YXRlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBzY3JvbGxUb3BQYWRkaW5nID1cbiAgICAgICAgKGlzUFhcbiAgICAgICAgICA/IHNjcm9sbE9mZnNldFZhbHVlXG4gICAgICAgICAgOiAoaW5uZXJIZWlnaHQgKiAoc2Nyb2xsT2Zmc2V0VmFsdWUgfHwgMCkpIC8gMTAwKSAvXG4gICAgICAgIHNjcm9sbEhlaWdodEJvdW5kcztcblxuICAgICAgbGV0IHNjcm9sbGluZ0Rvd247XG4gICAgICBsZXQgc2Nyb2xsRGlyZWN0aW9uQ2hhbmdlZDtcbiAgICAgIGxldCBhbmNob3JUb3AgPSAwO1xuXG4gICAgICBpZiAob2xkU3RhdGUpIHtcbiAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTMjMzOSAtIFByb3BlcnR5ICdwZXJjZW50VG9wJyBkb2VzIG5vdCBleGlzdCBvbiB0eXBlICd7fScuXG4gICAgICAgIHNjcm9sbGluZ0Rvd24gPSBwZXJjZW50VG9wID4gb2xkU3RhdGUucGVyY2VudFRvcDtcbiAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTMjMzOSAtIFByb3BlcnR5ICdzY3JvbGxpbmdEb3duJyBkb2VzIG5vdCBleGlzdCBvbiB0eXBlICd7fScuXG4gICAgICAgIHNjcm9sbERpcmVjdGlvbkNoYW5nZWQgPSBvbGRTdGF0ZS5zY3JvbGxpbmdEb3duICE9PSBzY3JvbGxpbmdEb3duO1xuICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFMyMzM5IC0gUHJvcGVydHkgJ2FuY2hvclRvcCcgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSAne30nLlxuICAgICAgICBhbmNob3JUb3AgPSBzY3JvbGxEaXJlY3Rpb25DaGFuZ2VkID8gcGVyY2VudFRvcCA6IG9sZFN0YXRlLmFuY2hvclRvcDtcbiAgICAgIH1cblxuICAgICAgY29uc3QgaW5Cb3VuZHMgPVxuICAgICAgICBldmVudFR5cGVJZCA9PT0gUEFHRV9TQ1JPTExfRE9XTlxuICAgICAgICAgID8gcGVyY2VudFRvcCA+PSBhbmNob3JUb3AgKyBzY3JvbGxUb3BQYWRkaW5nXG4gICAgICAgICAgOiBwZXJjZW50VG9wIDw9IGFuY2hvclRvcCAtIHNjcm9sbFRvcFBhZGRpbmc7XG5cbiAgICAgIGNvbnN0IG5ld1N0YXRlID0ge1xuICAgICAgICAuLi5vbGRTdGF0ZSxcbiAgICAgICAgcGVyY2VudFRvcCxcbiAgICAgICAgaW5Cb3VuZHMsXG4gICAgICAgIGFuY2hvclRvcCxcbiAgICAgICAgc2Nyb2xsaW5nRG93bixcbiAgICAgIH0gYXMgY29uc3Q7XG5cbiAgICAgIGlmIChcbiAgICAgICAgb2xkU3RhdGUgJiZcbiAgICAgICAgaW5Cb3VuZHMgJiZcbiAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTMjMzOSAtIFByb3BlcnR5ICdpbkJvdW5kcycgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSAne30nLlxuICAgICAgICAoc2Nyb2xsRGlyZWN0aW9uQ2hhbmdlZCB8fCBuZXdTdGF0ZS5pbkJvdW5kcyAhPT0gb2xkU3RhdGUuaW5Cb3VuZHMpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIGhhbmRsZXIob3B0aW9ucywgbmV3U3RhdGUpIHx8IG5ld1N0YXRlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3U3RhdGU7XG4gICAgfTtcblxuY29uc3QgcG9pbnRJbnRlcnNlY3RzID0gKFxuICBwb2ludDoge1xuICAgIGxlZnQ6IGFueSB8IG51bWJlcjtcbiAgICB0b3A6IGFueSB8IG51bWJlcjtcbiAgfSxcbiAgcmVjdDogYW55XG4pID0+XG4gIHBvaW50LmxlZnQgPiByZWN0LmxlZnQgJiZcbiAgcG9pbnQubGVmdCA8IHJlY3QucmlnaHQgJiZcbiAgcG9pbnQudG9wID4gcmVjdC50b3AgJiZcbiAgcG9pbnQudG9wIDwgcmVjdC5ib3R0b207XG5cbmNvbnN0IHdoZW5QYWdlTG9hZEZpbmlzaCA9XG4gIChoYW5kbGVyOiAoYXJnMTogYW55LCBzdGF0ZTogdW5kZWZpbmVkIHwgYW55KSA9PiB1bmRlZmluZWQgfCBhbnkpID0+XG4gIChvcHRpb25zOiBhbnksIG9sZFN0YXRlOiBhbnkpID0+IHtcbiAgICBjb25zdCBuZXdTdGF0ZSA9IHtcbiAgICAgIGZpbmlzaGVkOiBkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnLFxuICAgIH0gYXMgY29uc3Q7XG4gICAgaWYgKG5ld1N0YXRlLmZpbmlzaGVkICYmICEob2xkU3RhdGUgJiYgb2xkU3RhdGUuZmluc2hlZCkpIHtcbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzI1NTQgLSBFeHBlY3RlZCAyIGFyZ3VtZW50cywgYnV0IGdvdCAxLlxuICAgICAgaGFuZGxlcihvcHRpb25zKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld1N0YXRlO1xuICB9O1xuXG5jb25zdCB3aGVuUGFnZUxvYWRTdGFydCA9XG4gIChoYW5kbGVyOiAoYXJnMTogYW55LCBzdGF0ZTogdW5kZWZpbmVkIHwgYW55KSA9PiB1bmRlZmluZWQgfCBhbnkpID0+XG4gIChvcHRpb25zOiBhbnksIG9sZFN0YXRlOiBhbnkpID0+IHtcbiAgICBjb25zdCBuZXdTdGF0ZSA9IHtcbiAgICAgIHN0YXJ0ZWQ6IHRydWUsXG4gICAgfSBhcyBjb25zdDtcbiAgICBpZiAoIW9sZFN0YXRlKSB7XG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFMyNTU0IC0gRXhwZWN0ZWQgMiBhcmd1bWVudHMsIGJ1dCBnb3QgMS5cbiAgICAgIGhhbmRsZXIob3B0aW9ucyk7XG4gICAgfVxuICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgfTtcblxuY29uc3Qgd2hlbkNsaWNrQ291bnRDaGFuZ2UgPVxuICAoXG4gICAgaGFuZGxlcjogKFxuICAgICAgb3B0aW9uczogYW55LFxuICAgICAgYXJnMjoge1xuICAgICAgICBjbGlja0NvdW50OiBudW1iZXI7XG4gICAgICB9XG4gICAgKSA9PiB2b2lkXG4gICkgPT5cbiAgKG9wdGlvbnM6IGFueSwgb2xkU3RhdGUgPSB7Y2xpY2tDb3VudDogMH0pID0+IHtcbiAgICBjb25zdCBuZXdTdGF0ZSA9IHtcbiAgICAgIGNsaWNrQ291bnQ6IChvbGRTdGF0ZS5jbGlja0NvdW50ICUgMikgKyAxLFxuICAgIH0gYXMgY29uc3Q7XG4gICAgaWYgKG5ld1N0YXRlLmNsaWNrQ291bnQgIT09IG9sZFN0YXRlLmNsaWNrQ291bnQpIHtcbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzEzNDUgLSBBbiBleHByZXNzaW9uIG9mIHR5cGUgJ3ZvaWQnIGNhbm5vdCBiZSB0ZXN0ZWQgZm9yIHRydXRoaW5lc3MuXG4gICAgICByZXR1cm4gaGFuZGxlcihvcHRpb25zLCBuZXdTdGF0ZSkgfHwgbmV3U3RhdGU7XG4gICAgfVxuICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgfTtcblxuY29uc3QgZ2V0Q29tcG9uZW50QWN0aXZlT3B0aW9ucyA9IChhbGxvd05lc3RlZENoaWxkcmVuRXZlbnRzID0gdHJ1ZSkgPT4gKHtcbiAgLi4uYmFzZUFjdGl2aXR5QWN0aW9uR3JvdXBPcHRpb25zLFxuICBoYW5kbGVyOiB3aXRoRmlsdGVyKFxuICAgIGFsbG93TmVzdGVkQ2hpbGRyZW5FdmVudHMgPyBpc09yQ29udGFpbnNFbGVtZW50IDogaXNFbGVtZW50LFxuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwMDYgLSBQYXJhbWV0ZXIgJ29wdGlvbnMnIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuIHwgVFM3MDA2IC0gUGFyYW1ldGVyICdzdGF0ZScgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS5cbiAgICB3aGVuQ29tcG9uZW50QWN0aXZlQ2hhbmdlKChvcHRpb25zLCBzdGF0ZSkgPT4ge1xuICAgICAgcmV0dXJuIHN0YXRlLmlzQWN0aXZlXG4gICAgICAgID8gYmFzZUFjdGlvbkdyb3VwT3B0aW9ucy5oYW5kbGVyKG9wdGlvbnMsIHN0YXRlKVxuICAgICAgICA6IHN0YXRlO1xuICAgIH0pXG4gICksXG59KTtcblxuY29uc3QgZ2V0Q29tcG9uZW50SW5hY3RpdmVPcHRpb25zID0gKGFsbG93TmVzdGVkQ2hpbGRyZW5FdmVudHMgPSB0cnVlKSA9PiAoe1xuICAuLi5iYXNlQWN0aXZpdHlBY3Rpb25Hcm91cE9wdGlvbnMsXG4gIGhhbmRsZXI6IHdpdGhGaWx0ZXIoXG4gICAgYWxsb3dOZXN0ZWRDaGlsZHJlbkV2ZW50cyA/IGlzT3JDb250YWluc0VsZW1lbnQgOiBpc0VsZW1lbnQsXG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTNzAwNiAtIFBhcmFtZXRlciAnb3B0aW9ucycgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS4gfCBUUzcwMDYgLSBQYXJhbWV0ZXIgJ3N0YXRlJyBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlLlxuICAgIHdoZW5Db21wb25lbnRBY3RpdmVDaGFuZ2UoKG9wdGlvbnMsIHN0YXRlKSA9PiB7XG4gICAgICByZXR1cm4gIXN0YXRlLmlzQWN0aXZlXG4gICAgICAgID8gYmFzZUFjdGlvbkdyb3VwT3B0aW9ucy5oYW5kbGVyKG9wdGlvbnMsIHN0YXRlKVxuICAgICAgICA6IHN0YXRlO1xuICAgIH0pXG4gICksXG59KTtcblxuY29uc3Qgc2Nyb2xsSW50b091dE9mVmlld09wdGlvbnMgPSB7XG4gIC4uLmJhc2VTY3JvbGxBY3Rpb25Hcm91cE9wdGlvbnMsXG4gIGhhbmRsZXI6IHdoZW5FbGVtZW50VmlzaWJpbHR5Q2hhbmdlKChvcHRpb25zLCBzdGF0ZSkgPT4ge1xuICAgIGNvbnN0IHtlbGVtZW50VmlzaWJsZX0gPSBzdGF0ZTtcbiAgICBjb25zdCB7ZXZlbnQsIHN0b3JlfSA9IG9wdGlvbnM7XG4gICAgY29uc3Qge2l4RGF0YX0gPSBzdG9yZS5nZXRTdGF0ZSgpO1xuICAgIGNvbnN0IHtldmVudHN9ID0gaXhEYXRhO1xuXG4gICAgLy8gdHJpZ2dlciB0aGUgaGFuZGxlciBvbmx5IG9uY2UgaWYgb25seSBvbmUgb2YgU0NST0xMX0lOVE8gb3IgU0NST0xMX09VVF9PRiBldmVudCB0eXBlc1xuICAgIC8vIGFyZSByZWdpc3RlcmVkLlxuICAgIGlmICghZXZlbnRzW2V2ZW50LmFjdGlvbi5jb25maWcuYXV0b1N0b3BFdmVudElkXSAmJiBzdGF0ZS50cmlnZ2VyZWQpIHtcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG5cbiAgICBpZiAoKGV2ZW50LmV2ZW50VHlwZUlkID09PSBTQ1JPTExfSU5UT19WSUVXKSA9PT0gZWxlbWVudFZpc2libGUpIHtcbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzI1NTQgLSBFeHBlY3RlZCAyIGFyZ3VtZW50cywgYnV0IGdvdCAxLlxuICAgICAgYWN0aW9uR3JvdXBDcmVhdG9yKG9wdGlvbnMpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHRyaWdnZXJlZDogdHJ1ZSxcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gIH0pLFxufSBhcyBjb25zdDtcblxuY29uc3QgTU9VU0VfT1VUX1JPVU5EX1RIUkVTSE9MRCA9IDAuMDU7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgW1NMSURFUl9BQ1RJVkVdOiBnZXRDb21wb25lbnRBY3RpdmVPcHRpb25zKCksXG4gIFtTTElERVJfSU5BQ1RJVkVdOiBnZXRDb21wb25lbnRJbmFjdGl2ZU9wdGlvbnMoKSxcbiAgW0RST1BET1dOX09QRU5dOiBnZXRDb21wb25lbnRBY3RpdmVPcHRpb25zKCksXG4gIFtEUk9QRE9XTl9DTE9TRV06IGdldENvbXBvbmVudEluYWN0aXZlT3B0aW9ucygpLFxuXG4gIC8vIG5hdmJhciBlbGVtZW50cyBtYXkgY29udGFpbiBuZXN0ZWQgY29tcG9uZW50cyBpbiB0aGUgbWVudS4gVG8gcHJldmVudCBhY3Rpdml0eSBtaXNmaXJlcywgb25seSBsaXN0ZWQgZm9yIGFjdGl2aXR5XG4gIC8vIGV2ZW50cyB3aGVyZSB0aGUgdGFyZ2V0IGlzIHRoZSBuYXZiYXIgZWxlbWVudCwgYW5kIGlnbm9yZSBjaGlsZHJlbiB0aGF0IGRpc3BhdGNoIGFjdGl2aXRpeSBldmVudHMuXG4gIFtOQVZCQVJfT1BFTl06IGdldENvbXBvbmVudEFjdGl2ZU9wdGlvbnMoZmFsc2UpLFxuICBbTkFWQkFSX0NMT1NFXTogZ2V0Q29tcG9uZW50SW5hY3RpdmVPcHRpb25zKGZhbHNlKSxcbiAgW1RBQl9BQ1RJVkVdOiBnZXRDb21wb25lbnRBY3RpdmVPcHRpb25zKCksXG4gIFtUQUJfSU5BQ1RJVkVdOiBnZXRDb21wb25lbnRJbmFjdGl2ZU9wdGlvbnMoKSxcbiAgW0VDT01NRVJDRV9DQVJUX09QRU5dOiB7XG4gICAgdHlwZXM6ICdlY29tbWVyY2UtY2FydC1vcGVuJyxcbiAgICBoYW5kbGVyOiB3aXRoRmlsdGVyKGlzT3JDb250YWluc0VsZW1lbnQsIGFjdGlvbkdyb3VwQ3JlYXRvciksXG4gIH0sXG4gIFtFQ09NTUVSQ0VfQ0FSVF9DTE9TRV06IHtcbiAgICB0eXBlczogJ2Vjb21tZXJjZS1jYXJ0LWNsb3NlJyxcbiAgICBoYW5kbGVyOiB3aXRoRmlsdGVyKGlzT3JDb250YWluc0VsZW1lbnQsIGFjdGlvbkdyb3VwQ3JlYXRvciksXG4gIH0sXG4gIFtNT1VTRV9DTElDS106IHtcbiAgICB0eXBlczogJ2NsaWNrJyxcbiAgICBoYW5kbGVyOiB3aXRoRmlsdGVyKFxuICAgICAgaXNPckNvbnRhaW5zRWxlbWVudCxcbiAgICAgIHdoZW5DbGlja0NvdW50Q2hhbmdlKChvcHRpb25zLCB7Y2xpY2tDb3VudH0pID0+IHtcbiAgICAgICAgaWYgKGhhc0F1dG9TdG9wRXZlbnQob3B0aW9ucykpIHtcbiAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFMyNTU0IC0gRXhwZWN0ZWQgMiBhcmd1bWVudHMsIGJ1dCBnb3QgMS5cbiAgICAgICAgICBjbGlja0NvdW50ID09PSAxICYmIGFjdGlvbkdyb3VwQ3JlYXRvcihvcHRpb25zKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFMyNTU0IC0gRXhwZWN0ZWQgMiBhcmd1bWVudHMsIGJ1dCBnb3QgMS5cbiAgICAgICAgICBhY3Rpb25Hcm91cENyZWF0b3Iob3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKSxcbiAgfSxcbiAgW01PVVNFX1NFQ09ORF9DTElDS106IHtcbiAgICB0eXBlczogJ2NsaWNrJyxcbiAgICBoYW5kbGVyOiB3aXRoRmlsdGVyKFxuICAgICAgaXNPckNvbnRhaW5zRWxlbWVudCxcbiAgICAgIHdoZW5DbGlja0NvdW50Q2hhbmdlKChvcHRpb25zLCB7Y2xpY2tDb3VudH0pID0+IHtcbiAgICAgICAgaWYgKGNsaWNrQ291bnQgPT09IDIpIHtcbiAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFMyNTU0IC0gRXhwZWN0ZWQgMiBhcmd1bWVudHMsIGJ1dCBnb3QgMS5cbiAgICAgICAgICBhY3Rpb25Hcm91cENyZWF0b3Iob3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKSxcbiAgfSxcbiAgW01PVVNFX0RPV05dOiB7XG4gICAgLi4uYmFzZUFjdGlvbkdyb3VwT3B0aW9ucyxcbiAgICB0eXBlczogJ21vdXNlZG93bicsXG4gIH0sXG4gIFtNT1VTRV9VUF06IHtcbiAgICAuLi5iYXNlQWN0aW9uR3JvdXBPcHRpb25zLFxuICAgIHR5cGVzOiAnbW91c2V1cCcsXG4gIH0sXG4gIFtNT1VTRV9PVkVSXToge1xuICAgIHR5cGVzOiBNT1VTRV9PVkVSX09VVF9UWVBFUyxcbiAgICBoYW5kbGVyOiB3aXRoRmlsdGVyKFxuICAgICAgaXNPckNvbnRhaW5zRWxlbWVudCxcbiAgICAgIHdoZW5FbGVtZW50SG92ZXJDaGFuZ2UoKG9wdGlvbnMsIHN0YXRlKSA9PiB7XG4gICAgICAgIGlmIChzdGF0ZS5lbGVtZW50SG92ZXJlZCkge1xuICAgICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzI1NTQgLSBFeHBlY3RlZCAyIGFyZ3VtZW50cywgYnV0IGdvdCAxLlxuICAgICAgICAgIGFjdGlvbkdyb3VwQ3JlYXRvcihvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApLFxuICB9LFxuICBbTU9VU0VfT1VUXToge1xuICAgIHR5cGVzOiBNT1VTRV9PVkVSX09VVF9UWVBFUyxcbiAgICBoYW5kbGVyOiB3aXRoRmlsdGVyKFxuICAgICAgaXNPckNvbnRhaW5zRWxlbWVudCxcbiAgICAgIHdoZW5FbGVtZW50SG92ZXJDaGFuZ2UoKG9wdGlvbnMsIHN0YXRlKSA9PiB7XG4gICAgICAgIGlmICghc3RhdGUuZWxlbWVudEhvdmVyZWQpIHtcbiAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFMyNTU0IC0gRXhwZWN0ZWQgMiBhcmd1bWVudHMsIGJ1dCBnb3QgMS5cbiAgICAgICAgICBhY3Rpb25Hcm91cENyZWF0b3Iob3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKSxcbiAgfSxcbiAgW01PVVNFX01PVkVdOiB7XG4gICAgdHlwZXM6ICdtb3VzZW1vdmUgbW91c2VvdXQgc2Nyb2xsJyxcbiAgICBoYW5kbGVyOiAoXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgICB7c3RvcmUsIGVsZW1lbnQsIGV2ZW50Q29uZmlnLCBuYXRpdmVFdmVudCwgZXZlbnRTdGF0ZUtleX0sXG5cbiAgICAgIHN0YXRlID0ge2NsaWVudFg6IDAsIGNsaWVudFk6IDAsIHBhZ2VYOiAwLCBwYWdlWTogMH1cbiAgICApID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgYmFzZWRPbixcbiAgICAgICAgc2VsZWN0ZWRBeGlzLFxuICAgICAgICBjb250aW51b3VzUGFyYW1ldGVyR3JvdXBJZCxcbiAgICAgICAgcmV2ZXJzZSxcbiAgICAgICAgcmVzdGluZ1N0YXRlID0gMCxcbiAgICAgIH0gPSBldmVudENvbmZpZztcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgY2xpZW50WCA9IHN0YXRlLmNsaWVudFgsXG4gICAgICAgIGNsaWVudFkgPSBzdGF0ZS5jbGllbnRZLFxuICAgICAgICBwYWdlWCA9IHN0YXRlLnBhZ2VYLFxuICAgICAgICBwYWdlWSA9IHN0YXRlLnBhZ2VZLFxuICAgICAgfSA9IG5hdGl2ZUV2ZW50O1xuICAgICAgY29uc3QgaXNYQXhpcyA9IHNlbGVjdGVkQXhpcyA9PT0gJ1hfQVhJUyc7XG4gICAgICBjb25zdCBpc01vdXNlT3V0ID0gbmF0aXZlRXZlbnQudHlwZSA9PT0gJ21vdXNlb3V0JztcblxuICAgICAgbGV0IHZhbHVlID0gcmVzdGluZ1N0YXRlIC8gMTAwO1xuICAgICAgbGV0IG5hbWVzcGFjZWRQYXJhbWV0ZXJJZCA9IGNvbnRpbnVvdXNQYXJhbWV0ZXJHcm91cElkO1xuICAgICAgbGV0IGVsZW1lbnRIb3ZlcmVkID0gZmFsc2U7XG5cbiAgICAgIHN3aXRjaCAoYmFzZWRPbikge1xuICAgICAgICBjYXNlIEV2ZW50QmFzZWRPbi5WSUVXUE9SVDoge1xuICAgICAgICAgIHZhbHVlID0gaXNYQXhpc1xuICAgICAgICAgICAgPyBNYXRoLm1pbihjbGllbnRYLCB3aW5kb3cuaW5uZXJXaWR0aCkgLyB3aW5kb3cuaW5uZXJXaWR0aFxuICAgICAgICAgICAgOiBNYXRoLm1pbihjbGllbnRZLCB3aW5kb3cuaW5uZXJIZWlnaHQpIC8gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzIzMzkgLSBQcm9wZXJ0eSAnUEFHRScgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSAneyByZWFkb25seSBFTEVNRU5UOiBcIkVMRU1FTlRcIjsgcmVhZG9ubHkgVklFV1BPUlQ6IFwiVklFV1BPUlRcIjsgfScuXG4gICAgICAgIGNhc2UgRXZlbnRCYXNlZE9uLlBBR0U6IHtcbiAgICAgICAgICBjb25zdCB7c2Nyb2xsTGVmdCwgc2Nyb2xsVG9wLCBzY3JvbGxXaWR0aCwgc2Nyb2xsSGVpZ2h0fSA9XG4gICAgICAgICAgICBnZXREb2N1bWVudFN0YXRlKCk7XG4gICAgICAgICAgdmFsdWUgPSBpc1hBeGlzXG4gICAgICAgICAgICA/IE1hdGgubWluKHNjcm9sbExlZnQgKyBwYWdlWCwgc2Nyb2xsV2lkdGgpIC8gc2Nyb2xsV2lkdGhcbiAgICAgICAgICAgIDogTWF0aC5taW4oc2Nyb2xsVG9wICsgcGFnZVksIHNjcm9sbEhlaWdodCkgLyBzY3JvbGxIZWlnaHQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBFdmVudEJhc2VkT24uRUxFTUVOVDpcbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgIG5hbWVzcGFjZWRQYXJhbWV0ZXJJZCA9IGdldE5hbWVzcGFjZWRQYXJhbWV0ZXJJZChcbiAgICAgICAgICAgIGV2ZW50U3RhdGVLZXksXG4gICAgICAgICAgICBjb250aW51b3VzUGFyYW1ldGVyR3JvdXBJZFxuICAgICAgICAgICk7XG5cbiAgICAgICAgICBjb25zdCBpc01vdXNlRXZlbnQgPSBuYXRpdmVFdmVudC50eXBlLmluZGV4T2YoJ21vdXNlJykgPT09IDA7XG5cbiAgICAgICAgICAvLyBVc2UgaXNPckNvbnRhaW5zRWxlbWVudCBmb3IgbW91c2UgZXZlbnRzIHNpbmNlIHRoZXkgYXJlIGZpcmVkIGZyb20gdGhlIHRhcmdldFxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGlzTW91c2VFdmVudCAmJlxuICAgICAgICAgICAgaXNPckNvbnRhaW5zRWxlbWVudCh7ZWxlbWVudCwgbmF0aXZlRXZlbnR9KSAhPT0gdHJ1ZVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgY29uc3Qge2xlZnQsIHRvcCwgd2lkdGgsIGhlaWdodH0gPSByZWN0O1xuXG4gICAgICAgICAgLy8gT3RoZXJ3aXNlIHdlJ2xsIG5lZWQgdG8gY2FsY3VsYXRlIHRoZSBtb3VzZSBwb3NpdGlvbiBmcm9tIHRoZSBwcmV2aW91cyBoYW5kbGVyIHN0YXRlXG4gICAgICAgICAgLy8gYWdhaW5zdCB0aGUgdGFyZ2V0IGVsZW1lbnQncyByZWN0XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIWlzTW91c2VFdmVudCAmJlxuICAgICAgICAgICAgIXBvaW50SW50ZXJzZWN0cyh7bGVmdDogY2xpZW50WCwgdG9wOiBjbGllbnRZfSwgcmVjdClcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGVsZW1lbnRIb3ZlcmVkID0gdHJ1ZTtcblxuICAgICAgICAgIHZhbHVlID0gaXNYQXhpcyA/IChjbGllbnRYIC0gbGVmdCkgLyB3aWR0aCA6IChjbGllbnRZIC0gdG9wKSAvIGhlaWdodDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBjb3ZlciBjYXNlIHdoZXJlIHRoZSBldmVudCBpcyBhIG1vdXNlIG91dCwgYnV0IHRoZSB2YWx1ZSBpcyBub3QgcXVpdGUgYXQgMTAwJVxuICAgICAgaWYgKFxuICAgICAgICBpc01vdXNlT3V0ICYmXG4gICAgICAgICh2YWx1ZSA+IDEgLSBNT1VTRV9PVVRfUk9VTkRfVEhSRVNIT0xEIHx8XG4gICAgICAgICAgdmFsdWUgPCBNT1VTRV9PVVRfUk9VTkRfVEhSRVNIT0xEKVxuICAgICAgKSB7XG4gICAgICAgIHZhbHVlID0gTWF0aC5yb3VuZCh2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIC8vIE9ubHkgdXBkYXRlIGJhc2VkIG9uIGVsZW1lbnQgaWYgdGhlIG1vdXNlIGlzIG1vdmluZyBvdmVyIG9yIGhhcyBqdXN0IGxlZnQgdGhlIGVsZW1lbnRcbiAgICAgIGlmIChcbiAgICAgICAgYmFzZWRPbiAhPT0gRXZlbnRCYXNlZE9uLkVMRU1FTlQgfHxcbiAgICAgICAgZWxlbWVudEhvdmVyZWQgfHxcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgICAgIGVsZW1lbnRIb3ZlcmVkICE9PSBzdGF0ZS5lbGVtZW50SG92ZXJlZFxuICAgICAgKSB7XG4gICAgICAgIHZhbHVlID0gcmV2ZXJzZSA/IDEgLSB2YWx1ZSA6IHZhbHVlO1xuICAgICAgICBzdG9yZS5kaXNwYXRjaChwYXJhbWV0ZXJDaGFuZ2VkKG5hbWVzcGFjZWRQYXJhbWV0ZXJJZCwgdmFsdWUpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZWxlbWVudEhvdmVyZWQsXG4gICAgICAgIGNsaWVudFgsXG4gICAgICAgIGNsaWVudFksXG4gICAgICAgIHBhZ2VYLFxuICAgICAgICBwYWdlWSxcbiAgICAgIH07XG4gICAgfSxcbiAgfSxcblxuICBbUEFHRV9TQ1JPTExdOiB7XG4gICAgdHlwZXM6IFNDUk9MTF9FVkVOVF9UWVBFUyxcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgIGhhbmRsZXI6ICh7c3RvcmUsIGV2ZW50Q29uZmlnfSkgPT4ge1xuICAgICAgY29uc3Qge2NvbnRpbnVvdXNQYXJhbWV0ZXJHcm91cElkLCByZXZlcnNlfSA9IGV2ZW50Q29uZmlnO1xuICAgICAgY29uc3Qge3Njcm9sbFRvcCwgc2Nyb2xsSGVpZ2h0LCBjbGllbnRIZWlnaHR9ID0gZ2V0RG9jdW1lbnRTdGF0ZSgpO1xuICAgICAgbGV0IHZhbHVlID0gc2Nyb2xsVG9wIC8gKHNjcm9sbEhlaWdodCAtIGNsaWVudEhlaWdodCk7XG4gICAgICB2YWx1ZSA9IHJldmVyc2UgPyAxIC0gdmFsdWUgOiB2YWx1ZTtcbiAgICAgIHN0b3JlLmRpc3BhdGNoKHBhcmFtZXRlckNoYW5nZWQoY29udGludW91c1BhcmFtZXRlckdyb3VwSWQsIHZhbHVlKSk7XG4gICAgfSxcbiAgfSxcblxuICBbU0NST0xMSU5HX0lOX1ZJRVddOiB7XG4gICAgdHlwZXM6IFNDUk9MTF9FVkVOVF9UWVBFUyxcbiAgICBoYW5kbGVyOiAoXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgICB7ZWxlbWVudCwgc3RvcmUsIGV2ZW50Q29uZmlnLCBldmVudFN0YXRlS2V5fSxcblxuICAgICAgc3RhdGUgPSB7c2Nyb2xsUGVyY2VudDogMH1cbiAgICApID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgc2Nyb2xsTGVmdCxcbiAgICAgICAgc2Nyb2xsVG9wLFxuICAgICAgICBzY3JvbGxXaWR0aCxcbiAgICAgICAgc2Nyb2xsSGVpZ2h0LFxuICAgICAgICBjbGllbnRIZWlnaHQ6IHZpc2libGVIZWlnaHQsXG4gICAgICB9ID0gZ2V0RG9jdW1lbnRTdGF0ZSgpO1xuXG4gICAgICBjb25zdCB7XG4gICAgICAgIGJhc2VkT24sXG4gICAgICAgIHNlbGVjdGVkQXhpcyxcbiAgICAgICAgY29udGludW91c1BhcmFtZXRlckdyb3VwSWQsXG4gICAgICAgIHN0YXJ0c0VudGVyaW5nLFxuICAgICAgICBzdGFydHNFeGl0aW5nLFxuICAgICAgICBhZGRFbmRPZmZzZXQsXG4gICAgICAgIGFkZFN0YXJ0T2Zmc2V0LFxuICAgICAgICBhZGRPZmZzZXRWYWx1ZSA9IDAsXG4gICAgICAgIGVuZE9mZnNldFZhbHVlID0gMCxcbiAgICAgIH0gPSBldmVudENvbmZpZztcblxuICAgICAgY29uc3QgaXNYQXhpcyA9IHNlbGVjdGVkQXhpcyA9PT0gJ1hfQVhJUyc7XG5cbiAgICAgIGlmIChiYXNlZE9uID09PSBFdmVudEJhc2VkT24uVklFV1BPUlQpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBpc1hBeGlzXG4gICAgICAgICAgPyBzY3JvbGxMZWZ0IC8gc2Nyb2xsV2lkdGhcbiAgICAgICAgICA6IHNjcm9sbFRvcCAvIHNjcm9sbEhlaWdodDtcbiAgICAgICAgaWYgKHZhbHVlICE9PSBzdGF0ZS5zY3JvbGxQZXJjZW50KSB7XG4gICAgICAgICAgc3RvcmUuZGlzcGF0Y2gocGFyYW1ldGVyQ2hhbmdlZChjb250aW51b3VzUGFyYW1ldGVyR3JvdXBJZCwgdmFsdWUpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHNjcm9sbFBlcmNlbnQ6IHZhbHVlLFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbmFtZXNwYWNlZFBhcmFtZXRlcklkID0gZ2V0TmFtZXNwYWNlZFBhcmFtZXRlcklkKFxuICAgICAgICAgIGV2ZW50U3RhdGVLZXksXG4gICAgICAgICAgY29udGludW91c1BhcmFtZXRlckdyb3VwSWRcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgZWxlbWVudFJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBsZXQgb2Zmc2V0U3RhcnRQZXJjID0gKGFkZFN0YXJ0T2Zmc2V0ID8gYWRkT2Zmc2V0VmFsdWUgOiAwKSAvIDEwMDtcbiAgICAgICAgbGV0IG9mZnNldEVuZFBlcmMgPSAoYWRkRW5kT2Zmc2V0ID8gZW5kT2Zmc2V0VmFsdWUgOiAwKSAvIDEwMDtcblxuICAgICAgICAvLyBmbGlwIHRoZSBvZmZzZXQgcGVyY2VudGFnZXMgZGVwZW5kaW5nIG9uIHN0YXJ0IC8gZXhpdCB0eXBlXG4gICAgICAgIG9mZnNldFN0YXJ0UGVyYyA9IHN0YXJ0c0VudGVyaW5nXG4gICAgICAgICAgPyBvZmZzZXRTdGFydFBlcmNcbiAgICAgICAgICA6IDEgLSBvZmZzZXRTdGFydFBlcmM7XG4gICAgICAgIG9mZnNldEVuZFBlcmMgPSBzdGFydHNFeGl0aW5nID8gb2Zmc2V0RW5kUGVyYyA6IDEgLSBvZmZzZXRFbmRQZXJjO1xuXG4gICAgICAgIGNvbnN0IG9mZnNldEVsZW1lbnRUb3AgPVxuICAgICAgICAgIGVsZW1lbnRSZWN0LnRvcCArXG4gICAgICAgICAgTWF0aC5taW4oZWxlbWVudFJlY3QuaGVpZ2h0ICogb2Zmc2V0U3RhcnRQZXJjLCB2aXNpYmxlSGVpZ2h0KTtcbiAgICAgICAgY29uc3Qgb2Zmc2V0RWxlbWVudEJvdHRvbSA9XG4gICAgICAgICAgZWxlbWVudFJlY3QudG9wICsgZWxlbWVudFJlY3QuaGVpZ2h0ICogb2Zmc2V0RW5kUGVyYztcbiAgICAgICAgY29uc3Qgb2Zmc2V0SGVpZ2h0ID0gb2Zmc2V0RWxlbWVudEJvdHRvbSAtIG9mZnNldEVsZW1lbnRUb3A7XG5cbiAgICAgICAgY29uc3QgZml4ZWRTY3JvbGxIZWlnaHQgPSBNYXRoLm1pbihcbiAgICAgICAgICB2aXNpYmxlSGVpZ2h0ICsgb2Zmc2V0SGVpZ2h0LFxuICAgICAgICAgIHNjcm9sbEhlaWdodFxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IGZpeGVkU2Nyb2xsVG9wID0gTWF0aC5taW4oXG4gICAgICAgICAgTWF0aC5tYXgoMCwgdmlzaWJsZUhlaWdodCAtIG9mZnNldEVsZW1lbnRUb3ApLFxuICAgICAgICAgIGZpeGVkU2Nyb2xsSGVpZ2h0XG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGZpeGVkU2Nyb2xsUGVyYyA9IGZpeGVkU2Nyb2xsVG9wIC8gZml4ZWRTY3JvbGxIZWlnaHQ7XG5cbiAgICAgICAgaWYgKGZpeGVkU2Nyb2xsUGVyYyAhPT0gc3RhdGUuc2Nyb2xsUGVyY2VudCkge1xuICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKFxuICAgICAgICAgICAgcGFyYW1ldGVyQ2hhbmdlZChuYW1lc3BhY2VkUGFyYW1ldGVySWQsIGZpeGVkU2Nyb2xsUGVyYylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc2Nyb2xsUGVyY2VudDogZml4ZWRTY3JvbGxQZXJjLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0sXG4gIH0sXG4gIFtTQ1JPTExfSU5UT19WSUVXXTogc2Nyb2xsSW50b091dE9mVmlld09wdGlvbnMsXG4gIFtTQ1JPTExfT1VUX09GX1ZJRVddOiBzY3JvbGxJbnRvT3V0T2ZWaWV3T3B0aW9ucyxcblxuICBbUEFHRV9TQ1JPTExfRE9XTl06IHtcbiAgICAuLi5iYXNlU2Nyb2xsQWN0aW9uR3JvdXBPcHRpb25zLFxuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwMDYgLSBQYXJhbWV0ZXIgJ29wdGlvbnMnIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuIHwgVFM3MDA2IC0gUGFyYW1ldGVyICdzdGF0ZScgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS5cbiAgICBoYW5kbGVyOiB3aGVuU2Nyb2xsRGlyZWN0aW9uQ2hhbmdlKChvcHRpb25zLCBzdGF0ZSkgPT4ge1xuICAgICAgaWYgKHN0YXRlLnNjcm9sbGluZ0Rvd24pIHtcbiAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTMjU1NCAtIEV4cGVjdGVkIDIgYXJndW1lbnRzLCBidXQgZ290IDEuXG4gICAgICAgIGFjdGlvbkdyb3VwQ3JlYXRvcihvcHRpb25zKTtcbiAgICAgIH1cbiAgICB9KSxcbiAgfSxcblxuICBbUEFHRV9TQ1JPTExfVVBdOiB7XG4gICAgLi4uYmFzZVNjcm9sbEFjdGlvbkdyb3VwT3B0aW9ucyxcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFM3MDA2IC0gUGFyYW1ldGVyICdvcHRpb25zJyBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlLiB8IFRTNzAwNiAtIFBhcmFtZXRlciAnc3RhdGUnIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuXG4gICAgaGFuZGxlcjogd2hlblNjcm9sbERpcmVjdGlvbkNoYW5nZSgob3B0aW9ucywgc3RhdGUpID0+IHtcbiAgICAgIGlmICghc3RhdGUuc2Nyb2xsaW5nRG93bikge1xuICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFMyNTU0IC0gRXhwZWN0ZWQgMiBhcmd1bWVudHMsIGJ1dCBnb3QgMS5cbiAgICAgICAgYWN0aW9uR3JvdXBDcmVhdG9yKG9wdGlvbnMpO1xuICAgICAgfVxuICAgIH0pLFxuICB9LFxuXG4gIFtQQUdFX0ZJTklTSF06IHtcbiAgICB0eXBlczogJ3JlYWR5c3RhdGVjaGFuZ2UgSVgyX1BBR0VfVVBEQVRFJyxcbiAgICBoYW5kbGVyOiB3aXRoRmlsdGVyKGlzRWxlbWVudCwgd2hlblBhZ2VMb2FkRmluaXNoKGFjdGlvbkdyb3VwQ3JlYXRvcikpLFxuICB9LFxuXG4gIFtQQUdFX1NUQVJUXToge1xuICAgIHR5cGVzOiAncmVhZHlzdGF0ZWNoYW5nZSBJWDJfUEFHRV9VUERBVEUnLFxuICAgIGhhbmRsZXI6IHdpdGhGaWx0ZXIoaXNFbGVtZW50LCB3aGVuUGFnZUxvYWRTdGFydChhY3Rpb25Hcm91cENyZWF0b3IpKSxcbiAgfSxcbn07XG4iXSwibmFtZXMiOlsiTU9VU0VfQ0xJQ0siLCJNT1VTRV9TRUNPTkRfQ0xJQ0siLCJNT1VTRV9ET1dOIiwiTU9VU0VfVVAiLCJNT1VTRV9PVkVSIiwiTU9VU0VfT1VUIiwiRFJPUERPV05fQ0xPU0UiLCJEUk9QRE9XTl9PUEVOIiwiU0xJREVSX0FDVElWRSIsIlNMSURFUl9JTkFDVElWRSIsIlRBQl9BQ1RJVkUiLCJUQUJfSU5BQ1RJVkUiLCJOQVZCQVJfQ0xPU0UiLCJOQVZCQVJfT1BFTiIsIk1PVVNFX01PVkUiLCJQQUdFX1NDUk9MTF9ET1dOIiwiU0NST0xMX0lOVE9fVklFVyIsIlNDUk9MTF9PVVRfT0ZfVklFVyIsIlBBR0VfU0NST0xMX1VQIiwiU0NST0xMSU5HX0lOX1ZJRVciLCJQQUdFX0ZJTklTSCIsIkVDT01NRVJDRV9DQVJUX0NMT1NFIiwiRUNPTU1FUkNFX0NBUlRfT1BFTiIsIlBBR0VfU1RBUlQiLCJQQUdFX1NDUk9MTCIsIkV2ZW50VHlwZUNvbnN0cyIsIkNPTVBPTkVOVF9BQ1RJVkUiLCJDT01QT05FTlRfSU5BQ1RJVkUiLCJDT0xPTl9ERUxJTUlURVIiLCJJWDJFbmdpbmVDb25zdGFudHMiLCJnZXROYW1lc3BhY2VkUGFyYW1ldGVySWQiLCJJWDJWYW5pbGxhVXRpbHMiLCJjb21wb3NhYmxlRmlsdGVyIiwicHJlZGljYXRlIiwib3B0aW9ucyIsImlzRWxlbWVudCIsImVsZW1lbnQiLCJuYXRpdmVFdmVudCIsInRhcmdldCIsImNvbnRhaW5zRWxlbWVudCIsImNvbnRhaW5zIiwiaXNPckNvbnRhaW5zRWxlbWVudCIsImZsb3ciLCJnZXRBdXRvU3RvcEV2ZW50Iiwic3RvcmUiLCJhdXRvU3RvcEV2ZW50SWQiLCJpeERhdGEiLCJnZXRTdGF0ZSIsImV2ZW50cyIsImV2ZW50VG9TdG9wIiwiQVVUT19TVE9QX0RJU0FCTEVEX0VWRU5UUyIsImV2ZW50VHlwZUlkIiwiaGFzQXV0b1N0b3BFdmVudCIsImV2ZW50IiwiYWN0aW9uIiwiZXZlbnRBY3Rpb24iLCJjb25maWciLCJCb29sZWFuIiwiYWN0aW9uR3JvdXBDcmVhdG9yIiwiZXZlbnRTdGF0ZUtleSIsInN0YXRlIiwiaWQiLCJldmVudElkIiwiYWN0aW9uTGlzdElkIiwic3RvcEFjdGlvbkdyb3VwIiwiZXZlbnRUYXJnZXQiLCJzcGxpdCIsImdldCIsInN0YXJ0QWN0aW9uR3JvdXAiLCJ3aXRoRmlsdGVyIiwiZmlsdGVyIiwiaGFuZGxlciIsImJhc2VBY3Rpb25Hcm91cE9wdGlvbnMiLCJiYXNlQWN0aXZpdHlBY3Rpb25Hcm91cE9wdGlvbnMiLCJ0eXBlcyIsImpvaW4iLCJTQ1JPTExfRVZFTlRfVFlQRVMiLCJ3aW5kb3ciLCJ0aHJvdHRsZSIsImRvY3VtZW50IiwiTU9VU0VfT1ZFUl9PVVRfVFlQRVMiLCJiYXNlU2Nyb2xsQWN0aW9uR3JvdXBPcHRpb25zIiwiZ2V0RG9jdW1lbnRTdGF0ZSIsInN1cHBvcnRPZmZzZXQiLCJwYWdlWE9mZnNldCIsInVuZGVmaW5lZCIsImlzQ1NTMUNvbXBhdCIsImNvbXBhdE1vZGUiLCJyb290RWxlbWVudCIsImRvY3VtZW50RWxlbWVudCIsImJvZHkiLCJzY3JvbGxMZWZ0Iiwic2Nyb2xsVG9wIiwicGFnZVlPZmZzZXQiLCJzdGlmZlNjcm9sbFRvcCIsImNsYW1wIiwic2Nyb2xsSGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJzY3JvbGxXaWR0aCIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwiaW5uZXJXaWR0aCIsImFyZUJveGVzSW50ZXJzZWN0aW5nIiwiYSIsImIiLCJsZWZ0IiwicmlnaHQiLCJ0b3AiLCJib3R0b20iLCJpc0VsZW1lbnRIb3ZlcmVkIiwidHlwZSIsInJlbGF0ZWRUYXJnZXQiLCJjb250YWluc1RhcmdldCIsImNvbnRhaW5zUmVsYXRlZCIsImlzRWxlbWVudFZpc2libGUiLCJzY3JvbGxPZmZzZXRWYWx1ZSIsInNjcm9sbE9mZnNldFVuaXQiLCJpc1BYIiwib2Zmc2V0UGFkZGluZyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndoZW5Db21wb25lbnRBY3RpdmVDaGFuZ2UiLCJvbGRTdGF0ZSIsImlzQWN0aXZlIiwiaW5kZXhPZiIsIm5ld1N0YXRlIiwid2hlbkVsZW1lbnRIb3ZlckNoYW5nZSIsImVsZW1lbnRIb3ZlcmVkIiwid2hlbkVsZW1lbnRWaXNpYmlsdHlDaGFuZ2UiLCJlbGVtZW50VmlzaWJsZSIsIndoZW5TY3JvbGxEaXJlY3Rpb25DaGFuZ2UiLCJzY3JvbGxIZWlnaHRCb3VuZHMiLCJwZXJjZW50VG9wIiwiTnVtYmVyIiwidG9GaXhlZCIsInNjcm9sbFRvcFBhZGRpbmciLCJzY3JvbGxpbmdEb3duIiwic2Nyb2xsRGlyZWN0aW9uQ2hhbmdlZCIsImFuY2hvclRvcCIsImluQm91bmRzIiwicG9pbnRJbnRlcnNlY3RzIiwicG9pbnQiLCJyZWN0Iiwid2hlblBhZ2VMb2FkRmluaXNoIiwiZmluaXNoZWQiLCJyZWFkeVN0YXRlIiwiZmluc2hlZCIsIndoZW5QYWdlTG9hZFN0YXJ0Iiwic3RhcnRlZCIsIndoZW5DbGlja0NvdW50Q2hhbmdlIiwiY2xpY2tDb3VudCIsImdldENvbXBvbmVudEFjdGl2ZU9wdGlvbnMiLCJhbGxvd05lc3RlZENoaWxkcmVuRXZlbnRzIiwiZ2V0Q29tcG9uZW50SW5hY3RpdmVPcHRpb25zIiwic2Nyb2xsSW50b091dE9mVmlld09wdGlvbnMiLCJ0cmlnZ2VyZWQiLCJNT1VTRV9PVVRfUk9VTkRfVEhSRVNIT0xEIiwiZXZlbnRDb25maWciLCJjbGllbnRYIiwiY2xpZW50WSIsInBhZ2VYIiwicGFnZVkiLCJiYXNlZE9uIiwic2VsZWN0ZWRBeGlzIiwiY29udGludW91c1BhcmFtZXRlckdyb3VwSWQiLCJyZXZlcnNlIiwicmVzdGluZ1N0YXRlIiwiaXNYQXhpcyIsImlzTW91c2VPdXQiLCJ2YWx1ZSIsIm5hbWVzcGFjZWRQYXJhbWV0ZXJJZCIsIkV2ZW50QmFzZWRPbiIsIlZJRVdQT1JUIiwiTWF0aCIsIm1pbiIsIlBBR0UiLCJFTEVNRU5UIiwiaXNNb3VzZUV2ZW50Iiwid2lkdGgiLCJoZWlnaHQiLCJyb3VuZCIsImRpc3BhdGNoIiwicGFyYW1ldGVyQ2hhbmdlZCIsInNjcm9sbFBlcmNlbnQiLCJ2aXNpYmxlSGVpZ2h0Iiwic3RhcnRzRW50ZXJpbmciLCJzdGFydHNFeGl0aW5nIiwiYWRkRW5kT2Zmc2V0IiwiYWRkU3RhcnRPZmZzZXQiLCJhZGRPZmZzZXRWYWx1ZSIsImVuZE9mZnNldFZhbHVlIiwiZWxlbWVudFJlY3QiLCJvZmZzZXRTdGFydFBlcmMiLCJvZmZzZXRFbmRQZXJjIiwib2Zmc2V0RWxlbWVudFRvcCIsIm9mZnNldEVsZW1lbnRCb3R0b20iLCJvZmZzZXRIZWlnaHQiLCJmaXhlZFNjcm9sbEhlaWdodCIsImZpeGVkU2Nyb2xsVG9wIiwibWF4IiwiZml4ZWRTY3JvbGxQZXJjIl0sIm1hcHBpbmdzIjoiQUFBQSxzQkFBc0I7Ozs7K0JBcWV0Qjs7O2VBQUE7Ozs2REFwZWlCOzREQUNEOzhEQUNFO2lDQU1YO2tDQUV5QztrQ0FDakI7d0JBQ0Q7Ozs7OztBQUU5QixNQUFNLEVBQ0pBLFdBQVcsRUFDWEMsa0JBQWtCLEVBQ2xCQyxVQUFVLEVBQ1ZDLFFBQVEsRUFDUkMsVUFBVSxFQUNWQyxTQUFTLEVBQ1RDLGNBQWMsRUFDZEMsYUFBYSxFQUNiQyxhQUFhLEVBQ2JDLGVBQWUsRUFDZkMsVUFBVSxFQUNWQyxZQUFZLEVBQ1pDLFlBQVksRUFDWkMsV0FBVyxFQUNYQyxVQUFVLEVBQ1ZDLGdCQUFnQixFQUNoQkMsZ0JBQWdCLEVBQ2hCQyxrQkFBa0IsRUFDbEJDLGNBQWMsRUFDZEMsaUJBQWlCLEVBQ2pCQyxXQUFXLEVBQ1hDLG9CQUFvQixFQUNwQkMsbUJBQW1CLEVBQ25CQyxVQUFVLEVBQ1ZDLFdBQVcsRUFDWixHQUFHQyxnQ0FBZTtBQUVuQixNQUFNQyxtQkFBbUI7QUFDekIsTUFBTUMscUJBQXFCO0FBRTNCLE1BQU0sRUFBQ0MsZUFBZSxFQUFDLEdBQUdDLG1DQUFrQjtBQUU1QyxNQUFNLEVBQUNDLHdCQUF3QixFQUFDLEdBQUdDLHVCQUFlO0FBRWxELE1BQU1DLG1CQUNKLENBQUNDLFlBQ0QsQ0FBQ0M7UUFDQyxJQUFJLE9BQU9BLFlBQVksWUFBWUQsVUFBVUMsVUFBVTtZQUNyRCxPQUFPO1FBQ1Q7UUFDQSxPQUFPQTtJQUNUO0FBRUYsTUFBTUMsWUFBWUgsaUJBQWlCLENBQUMsRUFBQ0ksT0FBTyxFQUFFQyxXQUFXLEVBQUM7SUFDeEQsT0FBT0QsWUFBWUMsWUFBWUMsTUFBTTtBQUN2QztBQUVBLE1BQU1DLGtCQUFrQlAsaUJBQWlCLENBQUMsRUFBQ0ksT0FBTyxFQUFFQyxXQUFXLEVBQUM7SUFDOUQsT0FBT0QsUUFBUUksUUFBUSxDQUFDSCxZ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

}),
4609: (function (__unused_webpack_module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "ixData", ({
    enumerable: true,
    get: function() {
        return ixData;
    }
}));
const _sharedconstants = __webpack_require__(7087);
const { IX2_RAW_DATA_IMPORTED } = _sharedconstants.IX2EngineActionTypes;
const ixData = (state = Object.freeze({}), action)=>{
    switch(action.type){
        case IX2_RAW_DATA_IMPORTED:
            {
                return action.payload.ixData || Object.freeze({});
            }
        default:
            {
                return state;
            }
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIklYMkRhdGFSZWR1Y2VyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SVgyRW5naW5lQWN0aW9uVHlwZXN9IGZyb20gJ0BwYWNrYWdlcy9zeXN0ZW1zL2l4Mi9zaGFyZWQtY29uc3RhbnRzJztcbmltcG9ydCB7cmF3RGF0YUltcG9ydGVkUGF5bG9hZH0gZnJvbSAnLi4vYWN0aW9ucy9JWDJFbmdpbmVBY3Rpb25zJztcbmNvbnN0IHtJWDJfUkFXX0RBVEFfSU1QT1JURUR9ID0gSVgyRW5naW5lQWN0aW9uVHlwZXM7XG5cbnR5cGUgaXhEYXRhUmVkdWNlckFjdGlvbiA9IHtcbiAgdHlwZTogdHlwZW9mIElYMl9SQVdfREFUQV9JTVBPUlRFRDtcbiAgcGF5bG9hZDogcmF3RGF0YUltcG9ydGVkUGF5bG9hZDtcbn07XG5cbmV4cG9ydCB0eXBlIGl4RGF0YVJlZHVjZXJTdGF0ZSA9IHJhd0RhdGFJbXBvcnRlZFBheWxvYWRbJ2l4RGF0YSddO1xuXG5leHBvcnQgY29uc3QgaXhEYXRhID0gKFxuICBzdGF0ZTogaXhEYXRhUmVkdWNlclN0YXRlID0gT2JqZWN0LmZyZWV6ZShcbiAgICB7fVxuICApIGFzIHJhd0RhdGFJbXBvcnRlZFBheWxvYWRbJ2l4RGF0YSddLFxuICBhY3Rpb246IGl4RGF0YVJlZHVjZXJBY3Rpb25cbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBJWDJfUkFXX0RBVEFfSU1QT1JURUQ6IHtcbiAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZC5peERhdGEgfHwgT2JqZWN0LmZyZWV6ZSh7fSk7XG4gICAgfVxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gIH1cbn07XG4iXSwibmFtZXMiOlsiaXhEYXRhIiwiSVgyX1JBV19EQVRBX0lNUE9SVEVEIiwiSVgyRW5naW5lQWN0aW9uVHlwZXMiLCJzdGF0ZSIsIk9iamVjdCIsImZyZWV6ZSIsImFjdGlvbiIsInR5cGUiLCJwYXlsb2FkIl0sIm1hcHBpbmdzIjoiOzs7OytCQVdhQTs7O2VBQUFBOzs7aUNBWHNCO0FBRW5DLE1BQU0sRUFBQ0MscUJBQXFCLEVBQUMsR0FBR0MscUNBQW9CO0FBUzdDLE1BQU1GLFNBQVMsQ0FDcEJHLFFBQTRCQyxPQUFPQyxNQUFNLENBQ3ZDLENBQUMsRUFDa0MsRUFDckNDO0lBRUEsT0FBUUEsT0FBT0MsSUFBSTtRQUNqQixLQUFLTjtZQUF1QjtnQkFDMUIsT0FBT0ssT0FBT0UsT0FBTyxDQUFDUixNQUFNLElBQUlJLE9BQU9DLE1BQU0sQ0FBQyxDQUFDO1lBQ2pEO1FBQ0E7WUFBUztnQkFDUCxPQUFPRjtZQUNUO0lBQ0Y7QUFDRiJ9

}),
7718: (function (__unused_webpack_module, exports, __webpack_require__) {
/* eslint-env browser */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "ixInstances", ({
    enumerable: true,
    get: function() {
        return ixInstances;
    }
}));
const _sharedconstants = __webpack_require__(7087);
const _shared = __webpack_require__(9468);
const _timm = __webpack_require__(1185);
const { IX2_RAW_DATA_IMPORTED, IX2_SESSION_STOPPED, IX2_INSTANCE_ADDED, IX2_INSTANCE_STARTED, IX2_INSTANCE_REMOVED, IX2_ANIMATION_FRAME_CHANGED } = _sharedconstants.IX2EngineActionTypes;
const { optimizeFloat, applyEasing, createBezierEasing } = _shared.IX2EasingUtils;
const { RENDER_GENERAL } = _sharedconstants.IX2EngineConstants;
const { getItemConfigByKey, getRenderType, getStyleProp } = _shared.IX2VanillaUtils;
const continuousInstance = (state, action)=>{
    const { position: lastPosition, parameterId, actionGroups, destinationKeys, smoothing, restingValue, actionTypeId, customEasingFn, skipMotion, skipToValue } = state;
    const { parameters } = action.payload;
    let velocity = Math.max(1 - smoothing, 0.01);
    let paramValue = parameters[parameterId];
    if (paramValue == null) {
        velocity = 1;
        paramValue = restingValue;
    }
    const nextPosition = Math.max(paramValue, 0) || 0;
    const positionDiff = optimizeFloat(nextPosition - lastPosition);
    const position = skipMotion ? skipToValue : optimizeFloat(lastPosition + positionDiff * velocity);
    const keyframePosition = position * 100;
    if (position === lastPosition && state.current) {
        return state;
    }
    let fromActionItem;
    let toActionItem;
    let positionOffset;
    let positionRange;
    for(let i = 0, { length } = actionGroups; i < length; i++){
        const { keyframe, actionItems } = actionGroups[i];
        if (i === 0) {
            fromActionItem = actionItems[0];
        }
        if (keyframePosition >= keyframe) {
            fromActionItem = actionItems[0];
            const nextGroup = actionGroups[i + 1];
            const hasNextItem = nextGroup && keyframePosition !== keyframe;
            toActionItem = hasNextItem ? nextGroup.actionItems[0] : null;
            if (hasNextItem) {
                positionOffset = keyframe / 100;
                positionRange = (nextGroup.keyframe - keyframe) / 100;
            }
        }
    }
    const current = {};
    if (fromActionItem && !toActionItem) {
        for(let i = 0, { length } = destinationKeys; i < length; i++){
            const key = destinationKeys[i];
            current[key] = getItemConfigByKey(actionTypeId, key, fromActionItem.config);
        }
    } else if (fromActionItem && toActionItem && positionOffset !== undefined && positionRange !== undefined) {
        const localPosition = (position - positionOffset) / positionRange;
        const easing = fromActionItem.config.easing;
        const eased = applyEasing(easing, localPosition, customEasingFn);
        for(let i = 0, { length } = destinationKeys; i < length; i++){
            const key = destinationKeys[i];
            const fromVal = getItemConfigByKey(actionTypeId, key, fromActionItem.config);
            const toVal = getItemConfigByKey(actionTypeId, key, toActionItem.config);
            const diff = toVal - fromVal;
            const value = diff * eased + fromVal;
            current[key] = value;
        }
    }
    return (0, _timm.merge)(state, {
        position,
        current
    });
};
const timedInstance = (state, action)=>{
    const { active, origin, start, immediate, renderType, verbose, actionItem, destination, destinationKeys, pluginDuration, instanceDelay, customEasingFn, skipMotion } = state;
    const easing = actionItem.config.easing;
    let { duration, delay } = actionItem.config;
    if (pluginDuration != null) {
        duration = pluginDuration;
    }
    delay = instanceDelay != null ? instanceDelay : delay;
    if (renderType === RENDER_GENERAL) {
        duration = 0;
    } else if (immediate || skipMotion) {
        duration = delay = 0;
    }
    const { now } = action.payload;
    if (active && origin) {
        const delta = now - (start + delay);
        if (verbose) {
            const verboseDelta = now - start;
            const verboseDuration = duration + delay;
            const verbosePosition = optimizeFloat(Math.min(Math.max(0, verboseDelta / verboseDuration), 1));
            state = (0, _timm.set)(state, 'verboseTimeElapsed', verboseDuration * verbosePosition);
        }
        if (delta < 0) {
            return state;
        }
        const position = optimizeFloat(Math.min(Math.max(0, delta / duration), 1));
        const eased = applyEasing(easing, position, customEasingFn);
        const newProps = {};
        let current = null;
        if (destinationKeys.length) {
            // @ts-expect-error - TS2347 - Untyped function calls may not accept type arguments. | TS7006 - Parameter 'result' implicitly has an 'any' type. | TS7006 - Parameter 'key' implicitly has an 'any' type.
            current = destinationKeys.reduce((result, key)=>{
                const destValue = destination[key];
                const originVal = parseFloat(origin[key]) || 0;
                const diff = parseFloat(destValue) - originVal;
                const value = diff * eased + originVal;
                result[key] = value;
                return result;
            }, {});
        }
        newProps.current = current;
        newProps.position = position;
        if (position === 1) {
            newProps.active = false;
            newProps.complete = true;
        }
        return (0, _timm.merge)(state, newProps);
    }
    return state;
};
const ixInstances = (state = Object.freeze({}), action)=>{
    switch(action.type){
        case IX2_RAW_DATA_IMPORTED:
            {
                return action.payload.ixInstances || Object.freeze({});
            }
        case IX2_SESSION_STOPPED:
            {
                return Object.freeze({});
            }
        case IX2_INSTANCE_ADDED:
            {
                const { instanceId, elementId, actionItem, eventId, eventTarget, eventStateKey, actionListId, groupIndex, isCarrier, origin, destination, immediate, verbose, continuous, parameterId, actionGroups, smoothing, restingValue, pluginInstance, pluginDuration, instanceDelay, skipMotion, skipToValue } = action.payload;
                const { actionTypeId } = actionItem;
                const renderType = getRenderType(actionTypeId);
                const styleProp = getStyleProp(renderType, actionTypeId);
                const destinationKeys = Object.keys(destination).filter((key)=>// Skip null destination values
                    destination[key] != null && // Skip string destination values
                    typeof destination[key] !== 'string');
                const { easing } = actionItem.config;
                return (0, _timm.set)(state, instanceId, {
                    id: instanceId,
                    elementId,
                    active: false,
                    position: 0,
                    start: 0,
                    origin,
                    destination,
                    destinationKeys,
                    immediate,
                    verbose,
                    current: null,
                    actionItem,
                    actionTypeId,
                    eventId,
                    eventTarget,
                    eventStateKey,
                    actionListId,
                    groupIndex,
                    renderType,
                    isCarrier,
                    styleProp,
                    continuous,
                    parameterId,
                    actionGroups,
                    smoothing,
                    restingValue,
                    pluginInstance,
                    pluginDuration,
                    instanceDelay,
                    skipMotion,
                    skipToValue,
                    customEasingFn: Array.isArray(easing) && easing.length === 4 ? createBezierEasing(easing) : undefined
                });
            }
        case IX2_INSTANCE_STARTED:
            {
                const { instanceId, time } = action.payload;
                return (0, _timm.mergeIn)(state, [
                    instanceId
                ], {
                    active: true,
                    complete: false,
                    start: time
                });
            }
        case IX2_INSTANCE_REMOVED:
            {
                const { instanceId } = action.payload;
                if (!state[instanceId]) {
                    return state;
                }
                const newState = {};
                const keys = Object.keys(state);
                const { length } = keys;
                for(let i = 0; i < length; i++){
                    const key = keys[i];
                    if (key !== instanceId) {
                        // @ts-expect-error - TS2538 - Type 'undefined' cannot be used as an index type. | TS2538 - Type 'undefined' cannot be used as an index type.
                        newState[key] = state[key];
                    }
                }
                return newState;
            }
        case IX2_ANIMATION_FRAME_CHANGED:
            {
                let newState = state;
                const keys = Object.keys(state);
                const { length } = keys;
                for(let i = 0; i < length; i++){
                    const key = keys[i];
                    // @ts-expect-error - TS2538 - Type 'undefined' cannot be used as an index type.
                    const instance = state[key];
                    const reducer = instance.continuous ? continuousInstance : timedInstance;
                    // @ts-expect-error - TS2345 - Argument of type 'string | undefined' is not assignable to parameter of type 'Key'.
                    newState = (0, _timm.set)(newState, key, reducer(instance, action));
                }
                return newState;
            }
        default:
            {
                return state;
            }
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIklYMkluc3RhbmNlc1JlZHVjZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbmltcG9ydCB7XG4gIElYMkVuZ2luZUNvbnN0YW50cyxcbiAgSVgyRW5naW5lQWN0aW9uVHlwZXMsXG59IGZyb20gJ0BwYWNrYWdlcy9zeXN0ZW1zL2l4Mi9zaGFyZWQtY29uc3RhbnRzJztcblxuaW1wb3J0IHtJWDJFYXNpbmdVdGlscywgSVgyVmFuaWxsYVV0aWxzfSBmcm9tICdAcGFja2FnZXMvc3lzdGVtcy9peDIvc2hhcmVkJztcblxuY29uc3Qge1xuICBJWDJfUkFXX0RBVEFfSU1QT1JURUQsXG4gIElYMl9TRVNTSU9OX1NUT1BQRUQsXG4gIElYMl9JTlNUQU5DRV9BRERFRCxcbiAgSVgyX0lOU1RBTkNFX1NUQVJURUQsXG4gIElYMl9JTlNUQU5DRV9SRU1PVkVELFxuICBJWDJfQU5JTUFUSU9OX0ZSQU1FX0NIQU5HRUQsXG59ID0gSVgyRW5naW5lQWN0aW9uVHlwZXM7XG5jb25zdCB7b3B0aW1pemVGbG9hdCwgYXBwbHlFYXNpbmcsIGNyZWF0ZUJlemllckVhc2luZ30gPSBJWDJFYXNpbmdVdGlscztcbmNvbnN0IHtSRU5ERVJfR0VORVJBTH0gPSBJWDJFbmdpbmVDb25zdGFudHM7XG5jb25zdCB7Z2V0SXRlbUNvbmZpZ0J5S2V5LCBnZXRSZW5kZXJUeXBlLCBnZXRTdHlsZVByb3B9ID0gSVgyVmFuaWxsYVV0aWxzO1xuXG5pbXBvcnQge3NldCwgbWVyZ2UsIG1lcmdlSW59IGZyb20gJ3RpbW0nO1xuXG5jb25zdCBjb250aW51b3VzSW5zdGFuY2UgPSAoc3RhdGU6IGFueSwgYWN0aW9uOiBhbnkpID0+IHtcbiAgY29uc3Qge1xuICAgIHBvc2l0aW9uOiBsYXN0UG9zaXRpb24sXG4gICAgcGFyYW1ldGVySWQsXG4gICAgYWN0aW9uR3JvdXBzLFxuICAgIGRlc3RpbmF0aW9uS2V5cyxcbiAgICBzbW9vdGhpbmcsXG4gICAgcmVzdGluZ1ZhbHVlLFxuICAgIGFjdGlvblR5cGVJZCxcbiAgICBjdXN0b21FYXNpbmdGbixcbiAgICBza2lwTW90aW9uLFxuICAgIHNraXBUb1ZhbHVlLFxuICB9ID0gc3RhdGU7XG5cbiAgY29uc3Qge3BhcmFtZXRlcnN9ID0gYWN0aW9uLnBheWxvYWQ7XG4gIGxldCB2ZWxvY2l0eSA9IE1hdGgubWF4KDEgLSBzbW9vdGhpbmcsIDAuMDEpO1xuICBsZXQgcGFyYW1WYWx1ZSA9IHBhcmFtZXRlcnNbcGFyYW1ldGVySWRdO1xuICBpZiAocGFyYW1WYWx1ZSA9PSBudWxsKSB7XG4gICAgdmVsb2NpdHkgPSAxO1xuICAgIHBhcmFtVmFsdWUgPSByZXN0aW5nVmFsdWU7XG4gIH1cbiAgY29uc3QgbmV4dFBvc2l0aW9uID0gTWF0aC5tYXgocGFyYW1WYWx1ZSwgMCkgfHwgMDtcbiAgY29uc3QgcG9zaXRpb25EaWZmID0gb3B0aW1pemVGbG9hdChuZXh0UG9zaXRpb24gLSBsYXN0UG9zaXRpb24pO1xuICBjb25zdCBwb3NpdGlvbiA9IHNraXBNb3Rpb25cbiAgICA/IHNraXBUb1ZhbHVlXG4gICAgOiBvcHRpbWl6ZUZsb2F0KGxhc3RQb3NpdGlvbiArIHBvc2l0aW9uRGlmZiAqIHZlbG9jaXR5KTtcbiAgY29uc3Qga2V5ZnJhbWVQb3NpdGlvbiA9IHBvc2l0aW9uICogMTAwO1xuXG4gIGlmIChwb3NpdGlvbiA9PT0gbGFzdFBvc2l0aW9uICYmIHN0YXRlLmN1cnJlbnQpIHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cblxuICBsZXQgZnJvbUFjdGlvbkl0ZW07XG4gIGxldCB0b0FjdGlvbkl0ZW07XG4gIGxldCBwb3NpdGlvbk9mZnNldDtcbiAgbGV0IHBvc2l0aW9uUmFuZ2U7XG5cbiAgZm9yIChsZXQgaSA9IDAsIHtsZW5ndGh9ID0gYWN0aW9uR3JvdXBzOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCB7a2V5ZnJhbWUsIGFjdGlvbkl0ZW1zfSA9IGFjdGlvbkdyb3Vwc1tpXTtcblxuICAgIGlmIChpID09PSAwKSB7XG4gICAgICBmcm9tQWN0aW9uSXRlbSA9IGFjdGlvbkl0ZW1zWzBdO1xuICAgIH1cblxuICAgIGlmIChrZXlmcmFtZVBvc2l0aW9uID49IGtleWZyYW1lKSB7XG4gICAgICBmcm9tQWN0aW9uSXRlbSA9IGFjdGlvbkl0ZW1zWzBdO1xuXG4gICAgICBjb25zdCBuZXh0R3JvdXAgPSBhY3Rpb25Hcm91cHNbaSArIDFdO1xuICAgICAgY29uc3QgaGFzTmV4dEl0ZW0gPSBuZXh0R3JvdXAgJiYga2V5ZnJhbWVQb3NpdGlvbiAhPT0ga2V5ZnJhbWU7XG5cbiAgICAgIHRvQWN0aW9uSXRlbSA9IGhhc05leHRJdGVtID8gbmV4dEdyb3VwLmFjdGlvbkl0ZW1zWzBdIDogbnVsbDtcblxuICAgICAgaWYgKGhhc05leHRJdGVtKSB7XG4gICAgICAgIHBvc2l0aW9uT2Zmc2V0ID0ga2V5ZnJhbWUgLyAxMDA7XG4gICAgICAgIHBvc2l0aW9uUmFuZ2UgPSAobmV4dEdyb3VwLmtleWZyYW1lIC0ga2V5ZnJhbWUpIC8gMTAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGN1cnJlbnQ6IFJlY29yZDxzdHJpbmcsIGFueT4gPSB7fTtcblxuICBpZiAoZnJvbUFjdGlvbkl0ZW0gJiYgIXRvQWN0aW9uSXRlbSkge1xuICAgIGZvciAobGV0IGkgPSAwLCB7bGVuZ3RofSA9IGRlc3RpbmF0aW9uS2V5czsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBrZXkgPSBkZXN0aW5hdGlvbktleXNbaV07XG4gICAgICBjdXJyZW50W2tleV0gPSBnZXRJdGVtQ29uZmlnQnlLZXkoXG4gICAgICAgIGFjdGlvblR5cGVJZCxcbiAgICAgICAga2V5LFxuICAgICAgICBmcm9tQWN0aW9uSXRlbS5jb25maWdcbiAgICAgICk7XG4gICAgfVxuICB9IGVsc2UgaWYgKFxuICAgIGZyb21BY3Rpb25JdGVtICYmXG4gICAgdG9BY3Rpb25JdGVtICYmXG4gICAgcG9zaXRpb25PZmZzZXQgIT09IHVuZGVmaW5lZCAmJlxuICAgIHBvc2l0aW9uUmFuZ2UgIT09IHVuZGVmaW5lZFxuICApIHtcbiAgICBjb25zdCBsb2NhbFBvc2l0aW9uID0gKHBvc2l0aW9uIC0gcG9zaXRpb25PZmZzZXQpIC8gcG9zaXRpb25SYW5nZTtcbiAgICBjb25zdCBlYXNpbmcgPSBmcm9tQWN0aW9uSXRlbS5jb25maWcuZWFzaW5nO1xuICAgIGNvbnN0IGVhc2VkID0gYXBwbHlFYXNpbmcoZWFzaW5nLCBsb2NhbFBvc2l0aW9uLCBjdXN0b21FYXNpbmdGbik7XG4gICAgZm9yIChsZXQgaSA9IDAsIHtsZW5ndGh9ID0gZGVzdGluYXRpb25LZXlzOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGtleSA9IGRlc3RpbmF0aW9uS2V5c1tpXTtcbiAgICAgIGNvbnN0IGZyb21WYWwgPSBnZXRJdGVtQ29uZmlnQnlLZXkoXG4gICAgICAgIGFjdGlvblR5cGVJZCxcbiAgICAgICAga2V5LFxuICAgICAgICBmcm9tQWN0aW9uSXRlbS5jb25maWdcbiAgICAgICk7XG4gICAgICBjb25zdCB0b1ZhbCA9IGdldEl0ZW1Db25maWdCeUtleShhY3Rpb25UeXBlSWQsIGtleSwgdG9BY3Rpb25JdGVtLmNvbmZpZyk7XG4gICAgICBjb25zdCBkaWZmID0gdG9WYWwgLSBmcm9tVmFsO1xuICAgICAgY29uc3QgdmFsdWUgPSBkaWZmICogZWFzZWQgKyBmcm9tVmFsO1xuICAgICAgY3VycmVudFtrZXldID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1lcmdlKHN0YXRlLCB7XG4gICAgcG9zaXRpb24sXG4gICAgY3VycmVudCxcbiAgfSk7XG59O1xuXG5jb25zdCB0aW1lZEluc3RhbmNlID0gKHN0YXRlOiBhbnksIGFjdGlvbjogYW55KSA9PiB7XG4gIGNvbnN0IHtcbiAgICBhY3RpdmUsXG4gICAgb3JpZ2luLFxuICAgIHN0YXJ0LFxuICAgIGltbWVkaWF0ZSxcbiAgICByZW5kZXJUeXBlLFxuICAgIHZlcmJvc2UsXG4gICAgYWN0aW9uSXRlbSxcbiAgICBkZXN0aW5hdGlvbixcbiAgICBkZXN0aW5hdGlvbktleXMsXG4gICAgcGx1Z2luRHVyYXRpb24sXG4gICAgaW5zdGFuY2VEZWxheSxcbiAgICBjdXN0b21FYXNpbmdGbixcbiAgICBza2lwTW90aW9uLFxuICB9ID0gc3RhdGU7XG5cbiAgY29uc3QgZWFzaW5nID0gYWN0aW9uSXRlbS5jb25maWcuZWFzaW5nO1xuICBsZXQge2R1cmF0aW9uLCBkZWxheX0gPSBhY3Rpb25JdGVtLmNvbmZpZztcblxuICBpZiAocGx1Z2luRHVyYXRpb24gIT0gbnVsbCkge1xuICAgIGR1cmF0aW9uID0gcGx1Z2luRHVyYXRpb247XG4gIH1cblxuICBkZWxheSA9IGluc3RhbmNlRGVsYXkgIT0gbnVsbCA/IGluc3RhbmNlRGVsYXkgOiBkZWxheTtcblxuICBpZiAocmVuZGVyVHlwZSA9PT0gUkVOREVSX0dFTkVSQUwpIHtcbiAgICBkdXJhdGlvbiA9IDA7XG4gIH0gZWxzZSBpZiAoaW1tZWRpYXRlIHx8IHNraXBNb3Rpb24pIHtcbiAgICBkdXJhdGlvbiA9IGRlbGF5ID0gMDtcbiAgfVxuICBjb25zdCB7bm93fSA9IGFjdGlvbi5wYXlsb2FkO1xuXG4gIGlmIChhY3RpdmUgJiYgb3JpZ2luKSB7XG4gICAgY29uc3QgZGVsdGEgPSBub3cgLSAoc3RhcnQgKyBkZWxheSk7XG5cbiAgICBpZiAodmVyYm9zZSkge1xuICAgICAgY29uc3QgdmVyYm9zZURlbHRhID0gbm93IC0gc3RhcnQ7XG4gICAgICBjb25zdCB2ZXJib3NlRHVyYXRpb24gPSBkdXJhdGlvbiArIGRlbGF5O1xuICAgICAgY29uc3QgdmVyYm9zZVBvc2l0aW9uID0gb3B0aW1pemVGbG9hdChcbiAgICAgICAgTWF0aC5taW4oTWF0aC5tYXgoMCwgdmVyYm9zZURlbHRhIC8gdmVyYm9zZUR1cmF0aW9uKSwgMSlcbiAgICAgICk7XG4gICAgICBzdGF0ZSA9IHNldChcbiAgICAgICAgc3RhdGUsXG4gICAgICAgICd2ZXJib3NlVGltZUVsYXBzZWQnLFxuICAgICAgICB2ZXJib3NlRHVyYXRpb24gKiB2ZXJib3NlUG9zaXRpb25cbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKGRlbHRhIDwgMCkge1xuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cblxuICAgIGNvbnN0IHBvc2l0aW9uID0gb3B0aW1pemVGbG9hdChNYXRoLm1pbihNYXRoLm1heCgwLCBkZWx0YSAvIGR1cmF0aW9uKSwgMSkpO1xuICAgIGNvbnN0IGVhc2VkID0gYXBwbHlFYXNpbmcoZWFzaW5nLCBwb3NpdGlvbiwgY3VzdG9tRWFzaW5nRm4pO1xuXG4gICAgY29uc3QgbmV3UHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT4gPSB7fTtcblxuICAgIGxldCBjdXJyZW50ID0gbnVsbDtcblxuICAgIGlmIChkZXN0aW5hdGlvbktleXMubGVuZ3RoKSB7XG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFMyMzQ3IC0gVW50eXBlZCBmdW5jdGlvbiBjYWxscyBtYXkgbm90IGFjY2VwdCB0eXBlIGFyZ3VtZW50cy4gfCBUUzcwMDYgLSBQYXJhbWV0ZXIgJ3Jlc3VsdCcgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS4gfCBUUzcwMDYgLSBQYXJhbWV0ZXIgJ2tleScgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS5cbiAgICAgIGN1cnJlbnQgPSBkZXN0aW5hdGlvbktleXMucmVkdWNlPFJlY29yZDxzdHJpbmcsIGFueT4+KChyZXN1bHQsIGtleSkgPT4ge1xuICAgICAgICBjb25zdCBkZXN0VmFsdWUgPSBkZXN0aW5hdGlvbltrZXldO1xuICAgICAgICBjb25zdCBvcmlnaW5WYWwgPSBwYXJzZUZsb2F0KG9yaWdpbltrZXldKSB8fCAwO1xuICAgICAgICBjb25zdCBkaWZmID0gcGFyc2VGbG9hdChkZXN0VmFsdWUpIC0gb3JpZ2luVmFsO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGRpZmYgKiBlYXNlZCArIG9yaWdpblZhbDtcbiAgICAgICAgcmVzdWx0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH0sIHt9KTtcbiAgICB9XG5cbiAgICBuZXdQcm9wcy5jdXJyZW50ID0gY3VycmVudDtcbiAgICBuZXdQcm9wcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuXG4gICAgaWYgKHBvc2l0aW9uID09PSAxKSB7XG4gICAgICBuZXdQcm9wcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIG5ld1Byb3BzLmNvbXBsZXRlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVyZ2Uoc3RhdGUsIG5ld1Byb3BzKTtcbiAgfVxuICByZXR1cm4gc3RhdGU7XG59O1xuXG50eXBlIGl4SW5zdGFuY2VzUmVkdWNlclN0YXRlID0gUmVjb3JkPFxuICBzdHJpbmcsXG4gIC8vIFRPRE86IG1hbnkgb2YgdGhlIHZhbGlkIGZpZWxkcyBhcmUgc3RpbGwgbWlzc2luZyBpbiB0aGlzIHNoYXBlIC0gYWRkIHRoZW0sIHBsZWFzZVxuICB7Y29udGludW91czogYm9vbGVhbjsgYWN0aW9uTGlzdElkOiBzdHJpbmc7IHZlcmJvc2U6IGJvb2xlYW59XG4+O1xuXG5leHBvcnQgY29uc3QgaXhJbnN0YW5jZXMgPSAoXG4gIHN0YXRlOiBpeEluc3RhbmNlc1JlZHVjZXJTdGF0ZSA9IE9iamVjdC5mcmVlemUoe30pLFxuICBhY3Rpb246IGFueVxuKTogaXhJbnN0YW5jZXNSZWR1Y2VyU3RhdGUgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBJWDJfUkFXX0RBVEFfSU1QT1JURUQ6IHtcbiAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZC5peEluc3RhbmNlcyB8fCBPYmplY3QuZnJlZXplKHt9KTtcbiAgICB9XG4gICAgY2FzZSBJWDJfU0VTU0lPTl9TVE9QUEVEOiB7XG4gICAgICByZXR1cm4gT2JqZWN0LmZyZWV6ZSh7fSk7XG4gICAgfVxuICAgIGNhc2UgSVgyX0lOU1RBTkNFX0FEREVEOiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGluc3RhbmNlSWQsXG4gICAgICAgIGVsZW1lbnRJZCxcbiAgICAgICAgYWN0aW9uSXRlbSxcbiAgICAgICAgZXZlbnRJZCxcbiAgICAgICAgZXZlbnRUYXJnZXQsXG4gICAgICAgIGV2ZW50U3RhdGVLZXksXG4gICAgICAgIGFjdGlvbkxpc3RJZCxcbiAgICAgICAgZ3JvdXBJbmRleCxcbiAgICAgICAgaXNDYXJyaWVyLFxuICAgICAgICBvcmlnaW4sXG4gICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICBpbW1lZGlhdGUsXG4gICAgICAgIHZlcmJvc2UsXG4gICAgICAgIGNvbnRpbnVvdXMsXG4gICAgICAgIHBhcmFtZXRlcklkLFxuICAgICAgICBhY3Rpb25Hcm91cHMsXG4gICAgICAgIHNtb290aGluZyxcbiAgICAgICAgcmVzdGluZ1ZhbHVlLFxuICAgICAgICBwbHVnaW5JbnN0YW5jZSxcbiAgICAgICAgcGx1Z2luRHVyYXRpb24sXG4gICAgICAgIGluc3RhbmNlRGVsYXksXG4gICAgICAgIHNraXBNb3Rpb24sXG4gICAgICAgIHNraXBUb1ZhbHVlLFxuICAgICAgfSA9IGFjdGlvbi5wYXlsb2FkO1xuXG4gICAgICBjb25zdCB7YWN0aW9uVHlwZUlkfSA9IGFjdGlvbkl0ZW07XG4gICAgICBjb25zdCByZW5kZXJUeXBlID0gZ2V0UmVuZGVyVHlwZShhY3Rpb25UeXBlSWQpO1xuICAgICAgY29uc3Qgc3R5bGVQcm9wID0gZ2V0U3R5bGVQcm9wKHJlbmRlclR5cGUsIGFjdGlvblR5cGVJZCk7XG4gICAgICBjb25zdCBkZXN0aW5hdGlvbktleXMgPSBPYmplY3Qua2V5cyhkZXN0aW5hdGlvbikuZmlsdGVyKFxuICAgICAgICAoa2V5KSA9PlxuICAgICAgICAgIC8vIFNraXAgbnVsbCBkZXN0aW5hdGlvbiB2YWx1ZXNcbiAgICAgICAgICBkZXN0aW5hdGlvbltrZXldICE9IG51bGwgJiZcbiAgICAgICAgICAvLyBTa2lwIHN0cmluZyBkZXN0aW5hdGlvbiB2YWx1ZXNcbiAgICAgICAgICB0eXBlb2YgZGVzdGluYXRpb25ba2V5XSAhPT0gJ3N0cmluZydcbiAgICAgICk7XG5cbiAgICAgIGNvbnN0IHtlYXNpbmd9ID0gYWN0aW9uSXRlbS5jb25maWc7XG5cbiAgICAgIHJldHVybiBzZXQoc3RhdGUsIGluc3RhbmNlSWQsIHtcbiAgICAgICAgaWQ6IGluc3RhbmNlSWQsXG4gICAgICAgIGVsZW1lbnRJZCxcbiAgICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgcG9zaXRpb246IDAsXG4gICAgICAgIHN0YXJ0OiAwLFxuICAgICAgICBvcmlnaW4sXG4gICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICBkZXN0aW5hdGlvbktleXMsXG4gICAgICAgIGltbWVkaWF0ZSxcbiAgICAgICAgdmVyYm9zZSxcbiAgICAgICAgY3VycmVudDogbnVsbCxcbiAgICAgICAgYWN0aW9uSXRlbSxcbiAgICAgICAgYWN0aW9uVHlwZUlkLFxuICAgICAgICBldmVudElkLFxuICAgICAgICBldmVudFRhcmdldCxcbiAgICAgICAgZXZlbnRTdGF0ZUtleSxcbiAgICAgICAgYWN0aW9uTGlzdElkLFxuICAgICAgICBncm91cEluZGV4LFxuICAgICAgICByZW5kZXJUeXBlLFxuICAgICAgICBpc0NhcnJpZXIsXG4gICAgICAgIHN0eWxlUHJvcCxcbiAgICAgICAgY29udGludW91cyxcbiAgICAgICAgcGFyYW1ldGVySWQsXG4gICAgICAgIGFjdGlvbkdyb3VwcyxcbiAgICAgICAgc21vb3RoaW5nLFxuICAgICAgICByZXN0aW5nVmFsdWUsXG4gICAgICAgIHBsdWdpbkluc3RhbmNlLFxuICAgICAgICBwbHVnaW5EdXJhdGlvbixcbiAgICAgICAgaW5zdGFuY2VEZWxheSxcbiAgICAgICAgc2tpcE1vdGlvbixcbiAgICAgICAgc2tpcFRvVmFsdWUsXG4gICAgICAgIGN1c3RvbUVhc2luZ0ZuOlxuICAgICAgICAgIEFycmF5LmlzQXJyYXkoZWFzaW5nKSAmJiBlYXNpbmcubGVuZ3RoID09PSA0XG4gICAgICAgICAgICA/IC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzIzNDUgLSBBcmd1bWVudCBvZiB0eXBlICdhbnlbXScgaXMgbm90IGFzc2lnbmFibGUgdG8gcGFyYW1ldGVyIG9mIHR5cGUgJ0lYMkVhc2luZ0N1c3RvbVR5cGUnLlxuICAgICAgICAgICAgICBjcmVhdGVCZXppZXJFYXNpbmcoZWFzaW5nKVxuICAgICAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICB9KTtcbiAgICB9XG4gICAgY2FzZSBJWDJfSU5TVEFOQ0VfU1RBUlRFRDoge1xuICAgICAgY29uc3Qge2luc3RhbmNlSWQsIHRpbWV9ID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICByZXR1cm4gbWVyZ2VJbihzdGF0ZSwgW2luc3RhbmNlSWRdLCB7XG4gICAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgY29tcGxldGU6IGZhbHNlLFxuICAgICAgICBzdGFydDogdGltZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBjYXNlIElYMl9JTlNUQU5DRV9SRU1PVkVEOiB7XG4gICAgICBjb25zdCB7aW5zdGFuY2VJZH0gPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIGlmICghc3RhdGVbaW5zdGFuY2VJZF0pIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuICAgICAgY29uc3QgbmV3U3RhdGU6IFJlY29yZDxzdHJpbmcsIGFueT4gPSB7fTtcbiAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhzdGF0ZSk7XG4gICAgICBjb25zdCB7bGVuZ3RofSA9IGtleXM7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGtleSA9IGtleXNbaV07XG4gICAgICAgIGlmIChrZXkgIT09IGluc3RhbmNlSWQpIHtcbiAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFMyNTM4IC0gVHlwZSAndW5kZWZpbmVkJyBjYW5ub3QgYmUgdXNlZCBhcyBhbiBpbmRleCB0eXBlLiB8IFRTMjUzOCAtIFR5cGUgJ3VuZGVmaW5lZCcgY2Fubm90IGJlIHVzZWQgYXMgYW4gaW5kZXggdHlwZS5cbiAgICAgICAgICBuZXdTdGF0ZVtrZXldID0gc3RhdGVba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG5ld1N0YXRlO1xuICAgIH1cbiAgICBjYXNlIElYMl9BTklNQVRJT05fRlJBTUVfQ0hBTkdFRDoge1xuICAgICAgbGV0IG5ld1N0YXRlID0gc3RhdGU7XG4gICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoc3RhdGUpO1xuICAgICAgY29uc3Qge2xlbmd0aH0gPSBrZXlzO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBrZXkgPSBrZXlzW2ldO1xuICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFMyNTM4IC0gVHlwZSAndW5kZWZpbmVkJyBjYW5ub3QgYmUgdXNlZCBhcyBhbiBpbmRleCB0eXBlLlxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IHN0YXRlW2tleV07XG4gICAgICAgIGNvbnN0IHJlZHVjZXIgPSBpbnN0YW5jZS5jb250aW51b3VzXG4gICAgICAgICAgPyBjb250aW51b3VzSW5zdGFuY2VcbiAgICAgICAgICA6IHRpbWVkSW5zdGFuY2U7XG4gICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzIzNDUgLSBBcmd1bWVudCBvZiB0eXBlICdzdHJpbmcgfCB1bmRlZmluZWQnIGlzIG5vdCBhc3NpZ25hYmxlIHRvIHBhcmFtZXRlciBvZiB0eXBlICdLZXknLlxuICAgICAgICBuZXdTdGF0ZSA9IHNldChuZXdTdGF0ZSwga2V5LCByZWR1Y2VyKGluc3RhbmNlLCBhY3Rpb24pKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICB9XG4gICAgZGVmYXVsdDoge1xuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbiAgfVxufTtcbiJdLCJuYW1lcyI6WyJpeEluc3RhbmNlcyIsIklYMl9SQVdfREFUQV9JTVBPUlRFRCIsIklYMl9TRVNTSU9OX1NUT1BQRUQiLCJJWDJfSU5TVEFOQ0VfQURERUQiLCJJWDJfSU5TVEFOQ0VfU1RBUlRFRCIsIklYMl9JTlNUQU5DRV9SRU1PVkVEIiwiSVgyX0FOSU1BVElPTl9GUkFNRV9DSEFOR0VEIiwiSVgyRW5naW5lQWN0aW9uVHlwZXMiLCJvcHRpbWl6ZUZsb2F0IiwiYXBwbHlFYXNpbmciLCJjcmVhdGVCZXppZXJFYXNpbmciLCJJWDJFYXNpbmdVdGlscyIsIlJFTkRFUl9HRU5FUkFMIiwiSVgyRW5naW5lQ29uc3RhbnRzIiwiZ2V0SXRlbUNvbmZpZ0J5S2V5IiwiZ2V0UmVuZGVyVHlwZSIsImdldFN0eWxlUHJvcCIsIklYMlZhbmlsbGFVdGlscyIsImNvbnRpbnVvdXNJbnN0YW5jZSIsInN0YXRlIiwiYWN0aW9uIiwicG9zaXRpb24iLCJsYXN0UG9zaXRpb24iLCJwYXJhbWV0ZXJJZCIsImFjdGlvbkdyb3VwcyIsImRlc3RpbmF0aW9uS2V5cyIsInNtb290aGluZyIsInJlc3RpbmdWYWx1ZSIsImFjdGlvblR5cGVJZCIsImN1c3RvbUVhc2luZ0ZuIiwic2tpcE1vdGlvbiIsInNraXBUb1ZhbHVlIiwicGFyYW1ldGVycyIsInBheWxvYWQiLCJ2ZWxvY2l0eSIsIk1hdGgiLCJtYXgiLCJwYXJhbVZhbHVlIiwibmV4dFBvc2l0aW9uIiwicG9zaXRpb25EaWZmIiwia2V5ZnJhbWVQb3NpdGlvbiIsImN1cnJlbnQiLCJmcm9tQWN0aW9uSXRlbSIsInRvQWN0aW9uSXRlbSIsInBvc2l0aW9uT2Zmc2V0IiwicG9zaXRpb25SYW5nZSIsImkiLCJsZW5ndGgiLCJrZXlmcmFtZSIsImFjdGlvbkl0ZW1zIiwibmV4dEdyb3VwIiwiaGFzTmV4dEl0ZW0iLCJrZXkiLCJjb25maWciLCJ1bmRlZmluZWQiLCJsb2NhbFBvc2l0aW9uIiwiZWFzaW5nIiwiZWFzZWQiLCJmcm9tVmFsIiwidG9WYWwiLCJkaWZmIiwidmFsdWUiLCJtZXJnZSIsInRpbWVkSW5zdGFuY2UiLCJhY3RpdmUiLCJvcmlnaW4iLCJzdGFydCIsImltbWVkaWF0ZSIsInJlbmRlclR5cGUiLCJ2ZXJib3NlIiwiYWN0aW9uSXRlbSIsImRlc3RpbmF0aW9uIiwicGx1Z2luRHVyYXRpb24iLCJpbnN0YW5jZURlbGF5IiwiZHVyYXRpb24iLCJkZWxheSIsIm5vdyIsImRlbHRhIiwidmVyYm9zZURlbHRhIiwidmVyYm9zZUR1cmF0aW9uIiwidmVyYm9zZVBvc2l0aW9uIiwibWluIiwic2V0IiwibmV3UHJvcHMiLCJyZWR1Y2UiLCJyZXN1bHQiLCJkZXN0VmFsdWUiLCJvcmlnaW5WYWwiLCJwYXJzZUZsb2F0IiwiY29tcGxldGUiLCJPYmplY3QiLCJmcmVlemUiLCJ0eXBlIiwiaW5zdGFuY2VJZCIsImVsZW1lbnRJZCIsImV2ZW50SWQiLCJldmVudFRhcmdldCIsImV2ZW50U3RhdGVLZXkiLCJhY3Rpb25MaXN0SWQiLCJncm91cEluZGV4IiwiaXNDYXJyaWVyIiwiY29udGludW91cyIsInBsdWdpbkluc3RhbmNlIiwic3R5bGVQcm9wIiwia2V5cyIsImZpbHRlciIsImlkIiwiQXJyYXkiLCJpc0FycmF5IiwidGltZSIsIm1lcmdlSW4iLCJuZXdTdGF0ZSIsImluc3RhbmNlIiwicmVkdWNlciJdLCJtYXBwaW5ncyI6IkFBQUEsc0JBQXNCOzs7OytCQXFOVEE7OztlQUFBQTs7O2lDQWhOTjt3QkFFdUM7c0JBY1o7QUFabEMsTUFBTSxFQUNKQyxxQkFBcUIsRUFDckJDLG1CQUFtQixFQUNuQkMsa0JBQWtCLEVBQ2xCQyxvQkFBb0IsRUFDcEJDLG9CQUFvQixFQUNwQkMsMkJBQTJCLEVBQzVCLEdBQUdDLHFDQUFvQjtBQUN4QixNQUFNLEVBQUNDLGFBQWEsRUFBRUMsV0FBVyxFQUFFQyxrQkFBa0IsRUFBQyxHQUFHQyxzQkFBYztBQUN2RSxNQUFNLEVBQUNDLGNBQWMsRUFBQyxHQUFHQyxtQ0FBa0I7QUFDM0MsTUFBTSxFQUFDQyxrQkFBa0IsRUFBRUMsYUFBYSxFQUFFQyxZQUFZLEVBQUMsR0FBR0MsdUJBQWU7QUFJekUsTUFBTUMscUJBQXFCLENBQUNDLE9BQVlDO0lBQ3RDLE1BQU0sRUFDSkMsVUFBVUMsWUFBWSxFQUN0QkMsV0FBVyxFQUNYQyxZQUFZLEVBQ1pDLGVBQWUsRUFDZkMsU0FBUyxFQUNUQyxZQUFZLEVBQ1pDLFlBQVksRUFDWkMsY0FBYyxFQUNkQyxVQUFVLEVBQ1ZDLFdBQVcsRUFDWixHQUFHWjtJQUVKLE1BQU0sRUFBQ2EsVUFBVSxFQUFDLEdBQUdaLE9BQU9hLE9BQU87SUFDbkMsSUFBSUMsV0FBV0MsS0FBS0MsR0FBRyxDQUFDLElBQUlWLFdBQVc7SUFDdkMsSUFBSVcsYUFBYUwsVUFBVSxDQUFDVCxZQUFZO0lBQ3hDLElBQUljLGNBQWMsTUFBTTtRQUN0QkgsV0FBVztRQUNYRyxhQUFhVjtJQUNmO0lBQ0EsTUFBTVcsZUFBZUgsS0FBS0MsR0FBRyxDQUFDQyxZQUFZLE1BQU07SUFDaEQsTUFBTUUsZUFBZS9CLGNBQWM4QixlQUFlaEI7SUFDbEQsTUFBTUQsV0FBV1MsYUFDYkMsY0FDQXZCLGNBQWNjLGVBQWVpQixlQUFlTDtJQUNoRCxNQUFNTSxtQkFBbUJuQixXQUFXO0lBRXBDLElBQUlBLGFBQWFDLGdCQUFnQkgsTUFBTXNCLE9BQU8sRUFBRTtRQUM5QyxPQUFPdEI7SUFDVDtJQUVBLElBQUl1QjtJQUNKLElBQUlDO0lBQ0osSUFBSUM7SUFDSixJQUFJQztJQUVKLElBQUssSUFBSUMsSUFBSSxHQUFHLEVBQUNDLE1BQU0sRUFBQyxHQUFHdkIsY0FBY3NCLElBQUlDLFFBQVFELElBQUs7UUFDeEQsTUFBTSxFQUFDRSxRQUFRLEVBQUVDLFdBQVcsRUFBQyxHQUFHekIsWUFBWSxDQUFDc0IsRUFBRTtRQUUvQyxJQUFJQSxNQUFNLEdBQUc7WUFDWEosaUJBQWlCTyxXQUFXLENBQUMsRUFBRTtRQUNqQztRQUVBLElBQUlULG9CQUFvQlEsVUFBVTtZQUNoQ04saUJBQWlCTyxXQUFXLENBQUMsRUFBRTtZQUUvQixNQUFNQyxZQUFZMUIsWUFBWSxDQUFDc0IsSUFBSSxFQUFFO1lBQ3JDLE1BQU1LLGNBQWNELGFBQWFWLHFCQUFxQlE7WUFFdERMLGVBQWVRLGNBQWNELFVBQVVELFdBQVcsQ0FBQyxFQUFFLEdBQUc7WUFFeEQsSUFBSUUsYUFBYTtnQkFDZlAsaUJBQWlCSSxXQUFXO2dCQUM1QkgsZ0JBQWdCLEFBQUNLLENBQUFBLFVBQVVGLFFBQVEsR0FBR0EsUUFBTyxJQUFLO1lBQ3BEO1FBQ0Y7SUFDRjtJQUVBLE1BQU1QLFVBQStCLENBQUM7SUFFdEMsSUFBSUMsa0JBQWtCLENBQUNDLGNBQWM7UUFDbkMsSUFBSyxJQUFJRyxJQUFJLEdBQUcsRUFBQ0MsTUFBTSxFQUFDLEdBQUd0QixpQkFBaUJxQixJQUFJQyxRQUFRRCxJQUFLO1lBQzNELE1BQU1NLE1BQU0zQixlQUFlLENBQUNxQixFQUFFO1lBQzlCTCxPQUFPLENBQUNXLElBQUksR0FBR3RDLG1CQUNiYyxjQUNBd0IsS0FDQVYsZUFBZVcsTUFBTTtRQUV6QjtJQUNGLE9BQU8sSUFDTFgsa0JBQ0FDLGdCQUNBQyxtQkFBbUJVLGFBQ25CVCxrQkFBa0JTLFdBQ2xCO1FBQ0EsTUFBTUMsZ0JBQWdCLEFBQUNsQyxDQUFBQSxXQUFXdUIsY0FBYSxJQUFLQztRQUNwRCxNQUFNVyxTQUFTZCxlQUFlVyxNQUFNLENBQUNHLE1BQU07UUFDM0MsTUFBTUMsUUFBUWhELFlBQVkrQyxRQUFRRCxlQUFlMUI7UUFDakQsSUFBSyxJQUFJaUIsSUFBSSxHQUFHLEVBQUNDLE1BQU0sRUFBQyxHQUFHdEIsaUJBQWlCcUIsSUFBSUMsUUFBUUQsSUFBSztZQUMzRCxNQUFNTSxNQUFNM0IsZUFBZSxDQUFDcUIsRUFBRTtZQUM5QixNQUFNWSxVQUFVNUMsbUJBQ2RjLGNBQ0F3QixLQUNBVixlQUFlVyxNQUFNO1lBRXZCLE1BQU1NLFFBQVE3QyxtQkFBbUJjLGNBQWN3QixLQUFLVCxhQUFhVSxNQUFNO1lBQ3ZFLE1BQU1PLE9BQU9ELFFBQVFEO1lBQ3JCLE1BQU1HLFFBQVFELE9BQU9ILFFBQVFDO1lBQzdCakIsT0FBTyxDQUFDVyxJQUFJLEdBQUdTO1FBQ2pCO0lBQ0Y7SUFFQSxPQUFPQyxJQUFBQSxXQUFLLEVBQUMzQyxPQUFPO1FBQ2xCRTtRQUNBb0I7SUFDRjtBQUNGO0FBRUEsTUFBTXNCLGdCQUFnQixDQUFDNUMsT0FBWUM7SUFDakMsTUFBTSxFQUNKNEMsTUFBTSxFQUNOQyxNQUFNLEVBQ05DLEtBQUssRUFDTEMsU0FBUyxFQUNUQyxVQUFVLEVBQ1ZDLE9BQU8sRUFDUEMsVUFBVSxFQUNWQyxXQUFXLEVBQ1g5QyxlQUFlLEVBQ2YrQyxjQUFjLEVBQ2RDLGFBQWEsRUFDYjVDLGNBQWMsRUFDZEMsVUFBVSxFQUNYLEdBQUdYO0lBRUosTUFBTXFDLFNBQVNjLFdBQVdqQixNQUFNLENBQUNHLE1BQU07SUFDdkMsSUFBSSxFQUFDa0IsUUFBUSxFQUFFQyxLQUFLLEVBQUMsR0FBR0wsV0FBV2pCLE1BQU07SUFFekMsSUFBSW1CLGtCQUFrQixNQUFNO1FBQzFCRSxXQUFXRjtJQUNiO0lBRUFHLFFBQVFGLGlCQUFpQixPQUFPQSxnQkFBZ0JFO0lBRWhELElBQUlQLGVBQWV4RCxnQkFBZ0I7UUFDakM4RCxXQUFXO0lBQ2IsT0FBTyxJQUFJUCxhQUFhckMsWUFBWTtRQUNsQzRDLFdBQVdDLFFBQVE7SUFDckI7SUFDQSxNQUFNLEVBQUNDLEdBQUcsRUFBQyxHQUFHeEQsT0FBT2EsT0FBTztJQUU1QixJQUFJK0IsVUFBVUMsUUFBUTtRQUNwQixNQUFNWSxRQUFRRCxNQUFPVixDQUFBQSxRQUFRUyxLQUFJO1FBRWpDLElBQUlOLFNBQVM7WUFDWCxNQUFNUyxlQUFlRixNQUFNVjtZQUMzQixNQUFNYSxrQkFBa0JMLFdBQVdDO1lBQ25DLE1BQU1LLGtCQUFrQnhFLGNBQ3RCMkIsS0FBSzhDLEdBQUcsQ0FBQzlDLEtBQUtDLEdBQUcsQ0FBQyxHQUFHMEMsZUFBZUMsa0JBQWtCO1lBRXhENUQsUUFBUStELElBQUFBLFNBQUcsRUFDVC9ELE9BQ0Esc0JBQ0E0RCxrQkFBa0JDO1FBRXRCO1FBRUEsSUFBSUgsUUFBUSxHQUFHO1lBQ2IsT0FBTzFEO1FBQ1Q7UUFFQSxNQUFNRSxXQUFXYixjQUFjMkIsS0FBSzhDLEdBQUcsQ0FBQzlDLEtBQUtDLEdBQUcsQ0FBQyxHQUFHeUMsUUFBUUgsV0FBVztRQUN2RSxNQUFNakIsUUFBUWhELFlBQVkrQyxRQUFRbkMsVUFBVVE7UUFFNUMsTUFBTXNELFdBQWdDLENBQUM7UUFFdkMsSUFBSTFDLFVBQVU7UUFFZCxJQUFJaEIsZ0JBQWdCc0IsTUFBTSxFQUFFO1lBQzFCLHlNQUF5TTtZQUN6TU4sVUFBVWhCLGdCQUFnQjJELE1BQU0sQ0FBc0IsQ0FBQ0MsUUFBUWpDO2dCQUM3RCxNQUFNa0MsWUFBWWYsV0FBVyxDQUFDbkIsSUFBSTtnQkFDbEMsTUFBTW1DLFlBQVlDLFdBQVd2QixNQUFNLENBQUNiLElBQUksS0FBSztnQkFDN0MsTUFBTVEsT0FBTzRCLFdBQVdGLGFBQWFDO2dCQUNyQyxNQUFNMUIsUUFBUUQsT0FBT0gsUUFBUThCO2dCQUM3QkYsTUFBTSxDQUFDakMsSUFBSSxHQUFHUztnQkFDZCxPQUFPd0I7WUFDVCxHQUFHLENBQUM7UUFDTjtRQUVBRixTQUFTMUMsT0FBTyxHQUFHQTtRQUNuQjBDLFNBQVM5RCxRQUFRLEdBQUdBO1FBRXBCLElBQUlBLGFBQWEsR0FBRztZQUNsQjhELFNBQVNuQixNQUFNLEdBQUc7WUFDbEJtQixTQUFTTSxRQUFRLEdBQUc7UUFDdEI7UUFFQSxPQUFPM0IsSUFBQUEsV0FBSyxFQUFDM0MsT0FBT2dFO0lBQ3RCO0lBQ0EsT0FBT2hFO0FBQ1Q7QUFRTyxNQUFNbkIsY0FBYyxDQUN6Qm1CLFFBQWlDdUUsT0FBT0MsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUNsRHZFO0lBRUEsT0FBUUEsT0FBT3dFLElBQUk7UUFDakIsS0FBSzNGO1lBQXVCO2dCQUMxQixPQUFPbUIsT0FBT2EsT0FBTyxDQUFDakMsV0FBVyxJQUFJMEYsT0FBT0MsTUFBTSxDQUFDLENBQUM7WUFDdEQ7UUFDQSxLQUFLekY7WUFBcUI7Z0JBQ3hCLE9BQU93RixPQUFPQyxNQUFNLENBQUMsQ0FBQztZQUN4QjtRQUNBLEtBQUt4RjtZQUFvQjtnQkFDdkIsTUFBTSxFQUNKMEYsVUFBVSxFQUNWQyxTQUFTLEVBQ1R4QixVQUFVLEVBQ1Z5QixPQUFPLEVBQ1BDLFdBQVcsRUFDWEMsYUFBYSxFQUNiQyxZQUFZLEVBQ1pDLFVBQVUsRUFDVkMsU0FBUyxFQUNUbkMsTUFBTSxFQUNOTSxXQUFXLEVBQ1hKLFNBQVMsRUFDVEUsT0FBTyxFQUNQZ0MsVUFBVSxFQUNWOUUsV0FBVyxFQUNYQyxZQUFZLEVBQ1pFLFNBQVMsRUFDVEMsWUFBWSxFQUNaMkUsY0FBYyxFQUNkOUIsY0FBYyxFQUNkQyxhQUFhLEVBQ2IzQyxVQUFVLEVBQ1ZDLFdBQVcsRUFDWixHQUFHWCxPQUFPYSxPQUFPO2dCQUVsQixNQUFNLEVBQUNMLFlBQVksRUFBQyxHQUFHMEM7Z0JBQ3ZCLE1BQU1GLGFBQWFyRCxjQUFjYTtnQkFDakMsTUFBTTJFLFlBQVl2RixhQUFhb0QsWUFBWXhDO2dCQUMzQyxNQUFNSCxrQkFBa0JpRSxPQUFPYyxJQUFJLENBQUNqQyxhQUFha0MsTUFBTSxDQUNyRCxDQUFDckQsTUFDQywrQkFBK0I7b0JBQy9CbUIsV0FBVyxDQUFDbkIsSUFBSSxJQUFJLFFBQ3BCLGlDQUFpQztvQkFDakMsT0FBT21CLFdBQVcsQ0FBQ25CLElBQUksS0FBSztnQkFHaEMsTUFBTSxFQUFDSSxNQUFNLEVBQUMsR0FBR2MsV0FBV2pCLE1BQU07Z0JBRWxDLE9BQU82QixJQUFBQSxTQUFHLEVBQUMvRCxPQUFPMEUsWUFBWTtvQkFDNUJhLElBQUliO29CQUNKQztvQkFDQTlCLFFBQVE7b0JBQ1IzQyxVQUFVO29CQUNWNkMsT0FBTztvQkFDUEQ7b0JBQ0FNO29CQUNBOUM7b0JBQ0EwQztvQkFDQUU7b0JBQ0E1QixTQUFTO29CQUNUNkI7b0JBQ0ExQztvQkFDQW1FO29CQUNBQztvQkFDQUM7b0JBQ0FDO29CQUNBQztvQkFDQS9CO29CQUNBZ0M7b0JBQ0FHO29CQUNBRjtvQkFDQTlFO29CQUNBQztvQkFDQUU7b0JBQ0FDO29CQUNBMkU7b0JBQ0E5QjtvQkFDQUM7b0JBQ0EzQztvQkFDQUM7b0JBQ0FGLGdCQUNFOEUsTUFBTUMsT0FBTyxDQUFDcEQsV0FBV0EsT0FBT1QsTUFBTSxLQUFLLElBRXZDckMsbUJBQW1COEMsVUFDbkJGO2dCQUNSO1lBQ0Y7UUFDQSxLQUFLbEQ7WUFBc0I7Z0JBQ3pCLE1BQU0sRUFBQ3lGLFVBQVUsRUFBRWdCLElBQUksRUFBQyxHQUFHekYsT0FBT2EsT0FBTztnQkFDekMsT0FBTzZFLElBQUFBLGFBQU8sRUFBQzNGLE9BQU87b0JBQUMwRTtpQkFBVyxFQUFFO29CQUNsQzdCLFFBQVE7b0JBQ1J5QixVQUFVO29CQUNWdkIsT0FBTzJDO2dCQUNUO1lBQ0Y7UUFDQSxLQUFLeEc7WUFBc0I7Z0JBQ3pCLE1BQU0sRUFBQ3dGLFVBQVUsRUFBQyxHQUFHekUsT0FBT2EsT0FBTztnQkFDbkMsSUFBSSxDQUFDZCxLQUFLLENBQUMwRSxXQUFXLEVBQUU7b0JBQ3RCLE9BQU8xRTtnQkFDVDtnQkFDQSxNQUFNNEYsV0FBZ0MsQ0FBQztnQkFDdkMsTUFBTVAsT0FBT2QsT0FBT2MsSUFBSSxDQUFDckY7Z0JBQ3pCLE1BQU0sRUFBQzRCLE1BQU0sRUFBQyxHQUFHeUQ7Z0JBQ2pCLElBQUssSUFBSTFELElBQUksR0FBR0EsSUFBSUMsUUFBUUQsSUFBSztvQkFDL0IsTUFBTU0sTUFBTW9ELElBQUksQ0FBQzFELEVBQUU7b0JBQ25CLElBQUlNLFFBQVF5QyxZQUFZO3dCQUN0Qiw2SUFBNkk7d0JBQzdJa0IsUUFBUSxDQUFDM0QsSUFBSSxHQUFHakMsS0FBSyxDQUFDaUMsSUFBSTtvQkFDNUI7Z0JBQ0Y7Z0JBQ0EsT0FBTzJEO1lBQ1Q7UUFDQSxLQUFLekc7WUFBNkI7Z0JBQ2hDLElBQUl5RyxXQUFXNUY7Z0JBQ2YsTUFBTXFGLE9BQU9kLE9BQU9jLElBQUksQ0FBQ3JGO2dCQUN6QixNQUFNLEVBQUM0QixNQUFNLEVBQUMsR0FBR3lEO2dCQUNqQixJQUFLLElBQUkxRCxJQUFJLEdBQUdBLElBQUlDLFFBQVFELElBQUs7b0JBQy9CLE1BQU1NLE1BQU1vRCxJQUFJLENBQUMxRCxFQUFFO29CQUNuQixnRkFBZ0Y7b0JBQ2hGLE1BQU1rRSxXQUFXN0YsS0FBSyxDQUFDaUMsSUFBSTtvQkFDM0IsTUFBTTZELFVBQVVELFNBQVNYLFVBQVUsR0FDL0JuRixxQkFDQTZDO29CQUNKLGtIQUFrSDtvQkFDbEhnRCxXQUFXN0IsSUFBQUEsU0FBRyxFQUFDNkIsVUFBVTNELEtBQUs2RCxRQUFRRCxVQUFVNUY7Z0JBQ2xEO2dCQUNBLE9BQU8yRjtZQUNUO1FBQ0E7WUFBUztnQkFDUCxPQUFPNUY7WUFDVDtJQUNGO0FBQ0YifQ==

}),
1540: (function (__unused_webpack_module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "ixParameters", ({
    enumerable: true,
    get: function() {
        return ixParameters;
    }
}));
const _sharedconstants = __webpack_require__(7087);
const { IX2_RAW_DATA_IMPORTED, IX2_SESSION_STOPPED, IX2_PARAMETER_CHANGED } = _sharedconstants.IX2EngineActionTypes;
const ixParameters = (state = {}, action)=>{
    switch(action.type){
        case IX2_RAW_DATA_IMPORTED:
            {
                return(// @ts-expect-error - Further investigation is needed as looks like IX2_RAW_DATA_IMPORTED is never triggered with ixParameters
                action.payload.ixParameters || {});
            }
        case IX2_SESSION_STOPPED:
            {
                return {};
            }
        case IX2_PARAMETER_CHANGED:
            {
                const { key, value } = action.payload;
                state[key] = value;
                return state;
            }
        default:
            {
                return state;
            }
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIklYMlBhcmFtZXRlcnNSZWR1Y2VyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SVgyRW5naW5lQWN0aW9uVHlwZXN9IGZyb20gJ0BwYWNrYWdlcy9zeXN0ZW1zL2l4Mi9zaGFyZWQtY29uc3RhbnRzJztcbmltcG9ydCB7cmF3RGF0YUltcG9ydGVkUGF5bG9hZH0gZnJvbSAnLi4vYWN0aW9ucy9JWDJFbmdpbmVBY3Rpb25zJztcbmNvbnN0IHtJWDJfUkFXX0RBVEFfSU1QT1JURUQsIElYMl9TRVNTSU9OX1NUT1BQRUQsIElYMl9QQVJBTUVURVJfQ0hBTkdFRH0gPVxuICBJWDJFbmdpbmVBY3Rpb25UeXBlcztcblxudHlwZSBpeFBhcmFtZXRlcnNBY3Rpb24gPVxuICB8IHtcbiAgICAgIHR5cGU6IHR5cGVvZiBJWDJfUkFXX0RBVEFfSU1QT1JURUQ7XG4gICAgICBwYXlsb2FkOiByYXdEYXRhSW1wb3J0ZWRQYXlsb2FkO1xuICAgIH1cbiAgfCB7XG4gICAgICB0eXBlOiB0eXBlb2YgSVgyX1NFU1NJT05fU1RPUFBFRDtcbiAgICB9XG4gIHwge1xuICAgICAgdHlwZTogdHlwZW9mIElYMl9QQVJBTUVURVJfQ0hBTkdFRDtcbiAgICAgIHBheWxvYWQ6IHtrZXk6IHN0cmluZzsgdmFsdWU6IG51bWJlcn07XG4gICAgfTtcblxudHlwZSBpeFBhcmFtZXRlcnNSZWR1Y2VyU3RhdGUgPSBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+O1xuXG4vLyBwcmV0dGllci1pZ25vcmVcbmV4cG9ydCBjb25zdCBpeFBhcmFtZXRlcnMgPSAoXG4gIHN0YXRlOiBpeFBhcmFtZXRlcnNSZWR1Y2VyU3RhdGUgPSB7LyptdXRhYmxlIGZsYXQgc3RhdGUqL30sXG4gIGFjdGlvbjogaXhQYXJhbWV0ZXJzQWN0aW9uXG4pOiBpeFBhcmFtZXRlcnNSZWR1Y2VyU3RhdGUgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBJWDJfUkFXX0RBVEFfSU1QT1JURUQ6IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBGdXJ0aGVyIGludmVzdGlnYXRpb24gaXMgbmVlZGVkIGFzIGxvb2tzIGxpa2UgSVgyX1JBV19EQVRBX0lNUE9SVEVEIGlzIG5ldmVyIHRyaWdnZXJlZCB3aXRoIGl4UGFyYW1ldGVyc1xuICAgICAgICBhY3Rpb24ucGF5bG9hZC5peFBhcmFtZXRlcnMgfHwgey8qbXV0YWJsZSBmbGF0IHN0YXRlKi99XG4gICAgICApO1xuICAgIH1cbiAgICBjYXNlIElYMl9TRVNTSU9OX1NUT1BQRUQ6IHtcbiAgICAgIHJldHVybiB7LyptdXRhYmxlIGZsYXQgc3RhdGUqL307XG4gICAgfVxuICAgIGNhc2UgSVgyX1BBUkFNRVRFUl9DSEFOR0VEOiB7XG4gICAgICBjb25zdCB7a2V5LCB2YWx1ZX0gPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIHN0YXRlW2tleV0gPSB2YWx1ZTtcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gICAgZGVmYXVsdDoge1xuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbiAgfVxufTtcbiJdLCJuYW1lcyI6WyJpeFBhcmFtZXRlcnMiLCJJWDJfUkFXX0RBVEFfSU1QT1JURUQiLCJJWDJfU0VTU0lPTl9TVE9QUEVEIiwiSVgyX1BBUkFNRVRFUl9DSEFOR0VEIiwiSVgyRW5naW5lQWN0aW9uVHlwZXMiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJwYXlsb2FkIiwia2V5IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7K0JBcUJhQTs7O2VBQUFBOzs7aUNBckJzQjtBQUVuQyxNQUFNLEVBQUNDLHFCQUFxQixFQUFFQyxtQkFBbUIsRUFBRUMscUJBQXFCLEVBQUMsR0FDdkVDLHFDQUFvQjtBQWtCZixNQUFNSixlQUFlLENBQzFCSyxRQUFrQyxDQUF1QixDQUFDLEVBQzFEQztJQUVBLE9BQVFBLE9BQU9DLElBQUk7UUFDakIsS0FBS047WUFBdUI7Z0JBQzFCLE9BQ0UsOEhBQThIO2dCQUM5SEssT0FBT0UsT0FBTyxDQUFDUixZQUFZLElBQUksQ0FBdUI7WUFFMUQ7UUFDQSxLQUFLRTtZQUFxQjtnQkFDeEIsT0FBTyxDQUF1QjtZQUNoQztRQUNBLEtBQUtDO1lBQXVCO2dCQUMxQixNQUFNLEVBQUNNLEdBQUcsRUFBRUMsS0FBSyxFQUFDLEdBQUdKLE9BQU9FLE9BQU87Z0JBQ25DSCxLQUFLLENBQUNJLElBQUksR0FBR0M7Z0JBQ2IsT0FBT0w7WUFDVDtRQUNBO1lBQVM7Z0JBQ1AsT0FBT0E7WUFDVDtJQUNGO0FBQ0YifQ==

}),
7243: (function (__unused_webpack_module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return _default;
    }
}));
const _redux = __webpack_require__(9516);
const _IX2DataReducer = __webpack_require__(4609);
const _IX2RequestReducer = __webpack_require__(628);
const _IX2SessionReducer = __webpack_require__(5862);
const _shared = __webpack_require__(9468);
const _IX2InstancesReducer = __webpack_require__(7718);
const _IX2ParametersReducer = __webpack_require__(1540);
const { ixElements } = _shared.IX2ElementsReducer;
const _default = (0, _redux.combineReducers)({
    ixData: _IX2DataReducer.ixData,
    ixRequest: _IX2RequestReducer.ixRequest,
    ixSession: _IX2SessionReducer.ixSession,
    ixElements,
    ixInstances: _IX2InstancesReducer.ixInstances,
    ixParameters: _IX2ParametersReducer.ixParameters
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIklYMlJlZHVjZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTdG9yZSwgY29tYmluZVJlZHVjZXJzLCB0eXBlIFJlZHVjZXJ9IGZyb20gJ3JlZHV4JztcblxuaW1wb3J0IHtpeERhdGEsIHR5cGUgaXhEYXRhUmVkdWNlclN0YXRlfSBmcm9tICcuL0lYMkRhdGFSZWR1Y2VyJztcbmltcG9ydCB7aXhSZXF1ZXN0fSBmcm9tICcuL0lYMlJlcXVlc3RSZWR1Y2VyJztcbmltcG9ydCB7aXhTZXNzaW9ufSBmcm9tICcuL0lYMlNlc3Npb25SZWR1Y2VyJztcbmltcG9ydCB7SVgyRWxlbWVudHNSZWR1Y2VyfSBmcm9tICdAcGFja2FnZXMvc3lzdGVtcy9peDIvc2hhcmVkJztcbmNvbnN0IHtpeEVsZW1lbnRzfSA9IElYMkVsZW1lbnRzUmVkdWNlcjtcbmltcG9ydCB7aXhJbnN0YW5jZXN9IGZyb20gJy4vSVgySW5zdGFuY2VzUmVkdWNlcic7XG5pbXBvcnQge2l4UGFyYW1ldGVyc30gZnJvbSAnLi9JWDJQYXJhbWV0ZXJzUmVkdWNlcic7XG5cbmV4cG9ydCB0eXBlIElYMkVuZ2luZVJlZHVjZXJTdGF0ZVNoYXBlID0ge1xuICBpeERhdGE6IFJldHVyblR5cGU8dHlwZW9mIGl4RGF0YT47XG4gIGl4UGFyYW1ldGVyczogUmV0dXJuVHlwZTx0eXBlb2YgaXhQYXJhbWV0ZXJzPjtcbiAgaXhTZXNzaW9uOiBSZXR1cm5UeXBlPHR5cGVvZiBpeFNlc3Npb24+O1xuICBpeEVsZW1lbnRzOiBSZXR1cm5UeXBlPHR5cGVvZiBpeEVsZW1lbnRzPjtcbiAgaXhJbnN0YW5jZXM6IFJldHVyblR5cGU8dHlwZW9mIGl4SW5zdGFuY2VzPjtcbiAgaXhSZXF1ZXN0OiBSZXR1cm5UeXBlPHR5cGVvZiBpeFJlcXVlc3Q+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzPElYMkVuZ2luZVJlZHVjZXJTdGF0ZVNoYXBlPih7XG4gIGl4RGF0YTogaXhEYXRhIGFzIFJlZHVjZXI8aXhEYXRhUmVkdWNlclN0YXRlPixcbiAgaXhSZXF1ZXN0LFxuICBpeFNlc3Npb24sXG4gIGl4RWxlbWVudHMsXG4gIGl4SW5zdGFuY2VzLFxuICBpeFBhcmFtZXRlcnMsXG59KTtcblxuZXhwb3J0IHR5cGUgSVgyRW5naW5lUmVkdWNlclN0b3JlID0gU3RvcmU8SVgyRW5naW5lUmVkdWNlclN0YXRlU2hhcGU+O1xuIl0sIm5hbWVzIjpbIml4RWxlbWVudHMiLCJJWDJFbGVtZW50c1JlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJpeERhdGEiLCJpeFJlcXVlc3QiLCJpeFNlc3Npb24iLCJpeEluc3RhbmNlcyIsIml4UGFyYW1ldGVycyJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFtQkE7OztlQUFBOzs7dUJBbkJtRDtnQ0FFTDttQ0FDdEI7bUNBQ0E7d0JBQ1M7cUNBRVA7c0NBQ0M7QUFGM0IsTUFBTSxFQUFDQSxVQUFVLEVBQUMsR0FBR0MsMEJBQWtCO01BYXZDLFdBQWVDLElBQUFBLHNCQUFlLEVBQTZCO0lBQ3pEQyxRQUFRQSxzQkFBTTtJQUNkQyxXQUFBQSw0QkFBUztJQUNUQyxXQUFBQSw0QkFBUztJQUNUTDtJQUNBTSxhQUFBQSxnQ0FBVztJQUNYQyxjQUFBQSxrQ0FBWTtBQUNkIn0=

}),
628: (function (__unused_webpack_module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "ixRequest", ({
    enumerable: true,
    get: function() {
        return ixRequest;
    }
}));
const _sharedconstants = __webpack_require__(7087);
const _timm = __webpack_require__(1185);
const { IX2_PREVIEW_REQUESTED, IX2_PLAYBACK_REQUESTED, IX2_STOP_REQUESTED, IX2_CLEAR_REQUESTED } = _sharedconstants.IX2EngineActionTypes;
const initialState = {
    preview: {},
    playback: {},
    stop: {},
    clear: {}
};
const stateKeys = Object.create(null, {
    [IX2_PREVIEW_REQUESTED]: {
        value: 'preview'
    },
    [IX2_PLAYBACK_REQUESTED]: {
        value: 'playback'
    },
    [IX2_STOP_REQUESTED]: {
        value: 'stop'
    },
    [IX2_CLEAR_REQUESTED]: {
        value: 'clear'
    }
});
const ixRequest = (state = initialState, action)=>{
    if (action.type in stateKeys) {
        const key = [
            stateKeys[action.type]
        ];
        return (0, _timm.setIn)(state, [
            key
        ], {
            ...action.payload
        });
    }
    return state;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIklYMlJlcXVlc3RSZWR1Y2VyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SVgyRW5naW5lQWN0aW9uVHlwZXN9IGZyb20gJ0BwYWNrYWdlcy9zeXN0ZW1zL2l4Mi9zaGFyZWQtY29uc3RhbnRzJztcbmNvbnN0IHtcbiAgSVgyX1BSRVZJRVdfUkVRVUVTVEVELFxuICBJWDJfUExBWUJBQ0tfUkVRVUVTVEVELFxuICBJWDJfU1RPUF9SRVFVRVNURUQsXG4gIElYMl9DTEVBUl9SRVFVRVNURUQsXG59ID0gSVgyRW5naW5lQWN0aW9uVHlwZXM7XG5pbXBvcnQge3NldElufSBmcm9tICd0aW1tJztcbmltcG9ydCB7XG4gIHBsYXliYWNrUmVxdWVzdGVkUGF5bG9hZCxcbiAgcHJldmlld1JlcXVlc3RlZFBheWxvYWQsXG4gIHN0b3BSZXF1ZXN0ZWRQYXlsb2FkLFxufSBmcm9tICcuLi9hY3Rpb25zL0lYMkVuZ2luZUFjdGlvbnMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHByZXZpZXc6IHt9IGFzIHByZXZpZXdSZXF1ZXN0ZWRQYXlsb2FkLFxuICBwbGF5YmFjazoge30gYXMgcGxheWJhY2tSZXF1ZXN0ZWRQYXlsb2FkLFxuICBzdG9wOiB7fSBhcyBzdG9wUmVxdWVzdGVkUGF5bG9hZCxcbiAgY2xlYXI6IHt9LFxufTtcblxuY29uc3Qgc3RhdGVLZXlzID0gT2JqZWN0LmNyZWF0ZShudWxsLCB7XG4gIFtJWDJfUFJFVklFV19SRVFVRVNURURdOiB7dmFsdWU6ICdwcmV2aWV3J30sXG4gIFtJWDJfUExBWUJBQ0tfUkVRVUVTVEVEXToge3ZhbHVlOiAncGxheWJhY2snfSxcbiAgW0lYMl9TVE9QX1JFUVVFU1RFRF06IHt2YWx1ZTogJ3N0b3AnfSxcbiAgW0lYMl9DTEVBUl9SRVFVRVNURURdOiB7dmFsdWU6ICdjbGVhcid9LFxufSk7XG5cbnR5cGUgaXhSZXF1ZXN0U3RhdGUgPSB7XG4gIHByZXZpZXc6IHByZXZpZXdSZXF1ZXN0ZWRQYXlsb2FkO1xuICBwbGF5YmFjazogcGxheWJhY2tSZXF1ZXN0ZWRQYXlsb2FkO1xuICBzdG9wOiBzdG9wUmVxdWVzdGVkUGF5bG9hZDtcbiAgY2xlYXI6IFJlY29yZDxuZXZlciwgbmV2ZXI+O1xufTtcblxudHlwZSBpeFJlcXVlc3RBY3Rpb24gPVxuICB8IHtcbiAgICAgIHR5cGU6IHR5cGVvZiBJWDJfUFJFVklFV19SRVFVRVNURUQ7XG4gICAgICBwYXlsb2FkOiBwcmV2aWV3UmVxdWVzdGVkUGF5bG9hZDtcbiAgICB9XG4gIHwge1xuICAgICAgdHlwZTogdHlwZW9mIElYMl9QTEFZQkFDS19SRVFVRVNURUQ7XG4gICAgICBwYXlsb2FkOiBwbGF5YmFja1JlcXVlc3RlZFBheWxvYWQ7XG4gICAgfVxuICB8IHtcbiAgICAgIHR5cGU6IHR5cGVvZiBJWDJfU1RPUF9SRVFVRVNURUQ7XG4gICAgICBwYXlsb2FkOiBzdG9wUmVxdWVzdGVkUGF5bG9hZDtcbiAgICB9XG4gIHwge1xuICAgICAgdHlwZTogdHlwZW9mIElYMl9DTEVBUl9SRVFVRVNURUQ7XG4gICAgICBwYXlsb2FkPzogbmV2ZXI7XG4gICAgfTtcblxuZXhwb3J0IGNvbnN0IGl4UmVxdWVzdCA9IChcbiAgc3RhdGU6IGl4UmVxdWVzdFN0YXRlID0gaW5pdGlhbFN0YXRlLFxuICBhY3Rpb246IGl4UmVxdWVzdEFjdGlvblxuKTogaXhSZXF1ZXN0U3RhdGUgPT4ge1xuICBpZiAoYWN0aW9uLnR5cGUgaW4gc3RhdGVLZXlzKSB7XG4gICAgY29uc3Qga2V5ID0gW3N0YXRlS2V5c1thY3Rpb24udHlwZV1dIGFzIGFueTtcbiAgICByZXR1cm4gc2V0SW4oc3RhdGUsIFtrZXldLCB7Li4uYWN0aW9uLnBheWxvYWR9KTtcbiAgfVxuICByZXR1cm4gc3RhdGU7XG59O1xuIl0sIm5hbWVzIjpbIml4UmVxdWVzdCIsIklYMl9QUkVWSUVXX1JFUVVFU1RFRCIsIklYMl9QTEFZQkFDS19SRVFVRVNURUQiLCJJWDJfU1RPUF9SRVFVRVNURUQiLCJJWDJfQ0xFQVJfUkVRVUVTVEVEIiwiSVgyRW5naW5lQWN0aW9uVHlwZXMiLCJpbml0aWFsU3RhdGUiLCJwcmV2aWV3IiwicGxheWJhY2siLCJzdG9wIiwiY2xlYXIiLCJzdGF0ZUtleXMiLCJPYmplY3QiLCJjcmVhdGUiLCJ2YWx1ZSIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImtleSIsInNldEluIiwicGF5bG9hZCJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFxRGFBOzs7ZUFBQUE7OztpQ0FyRHNCO3NCQU9mO0FBTnBCLE1BQU0sRUFDSkMscUJBQXFCLEVBQ3JCQyxzQkFBc0IsRUFDdEJDLGtCQUFrQixFQUNsQkMsbUJBQW1CLEVBQ3BCLEdBQUdDLHFDQUFvQjtBQVF4QixNQUFNQyxlQUFlO0lBQ25CQyxTQUFTLENBQUM7SUFDVkMsVUFBVSxDQUFDO0lBQ1hDLE1BQU0sQ0FBQztJQUNQQyxPQUFPLENBQUM7QUFDVjtBQUVBLE1BQU1DLFlBQVlDLE9BQU9DLE1BQU0sQ0FBQyxNQUFNO0lBQ3BDLENBQUNaLHNCQUFzQixFQUFFO1FBQUNhLE9BQU87SUFBUztJQUMxQyxDQUFDWix1QkFBdUIsRUFBRTtRQUFDWSxPQUFPO0lBQVU7SUFDNUMsQ0FBQ1gsbUJBQW1CLEVBQUU7UUFBQ1csT0FBTztJQUFNO0lBQ3BDLENBQUNWLG9CQUFvQixFQUFFO1FBQUNVLE9BQU87SUFBTztBQUN4QztBQTJCTyxNQUFNZCxZQUFZLENBQ3ZCZSxRQUF3QlQsWUFBWSxFQUNwQ1U7SUFFQSxJQUFJQSxPQUFPQyxJQUFJLElBQUlOLFdBQVc7UUFDNUIsTUFBTU8sTUFBTTtZQUFDUCxTQUFTLENBQUNLLE9BQU9DLElBQUksQ0FBQztTQUFDO1FBQ3BDLE9BQU9FLElBQUFBLFdBQUssRUFBQ0osT0FBTztZQUFDRztTQUFJLEVBQUU7WUFBQyxHQUFHRixPQUFPSSxPQUFPO1FBQUE7SUFDL0M7SUFDQSxPQUFPTDtBQUNUIn0=

}),
5862: (function (__unused_webpack_module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "ixSession", ({
    enumerable: true,
    get: function() {
        return ixSession;
    }
}));
const _sharedconstants = __webpack_require__(7087);
const _timm = __webpack_require__(1185);
const { IX2_SESSION_INITIALIZED, IX2_SESSION_STARTED, IX2_TEST_FRAME_RENDERED, IX2_SESSION_STOPPED, IX2_EVENT_LISTENER_ADDED, IX2_EVENT_STATE_CHANGED, IX2_ANIMATION_FRAME_CHANGED, IX2_ACTION_LIST_PLAYBACK_CHANGED, IX2_VIEWPORT_WIDTH_CHANGED, IX2_MEDIA_QUERIES_DEFINED } = _sharedconstants.IX2EngineActionTypes;
const initialState = {
    active: false,
    tick: 0,
    eventListeners: [],
    eventState: {},
    playbackState: {},
    viewportWidth: 0,
    mediaQueryKey: null,
    hasBoundaryNodes: false,
    hasDefinedMediaQueries: false,
    reducedMotion: false
};
const TEST_FRAME_STEPS_SIZE = 20;
const ixSession = (state = initialState, action)=>{
    switch(action.type){
        case IX2_SESSION_INITIALIZED:
            {
                const { hasBoundaryNodes, reducedMotion } = action.payload;
                return (0, _timm.merge)(state, {
                    hasBoundaryNodes,
                    reducedMotion
                });
            }
        case IX2_SESSION_STARTED:
            {
                return (0, _timm.set)(state, 'active', true);
            }
        case IX2_TEST_FRAME_RENDERED:
            {
                const { payload: { step = TEST_FRAME_STEPS_SIZE } } = action;
                return (0, _timm.set)(state, 'tick', state.tick + step);
            }
        case IX2_SESSION_STOPPED:
            {
                return initialState;
            }
        case IX2_ANIMATION_FRAME_CHANGED:
            {
                const { payload: { now } } = action;
                return (0, _timm.set)(state, 'tick', now);
            }
        case IX2_EVENT_LISTENER_ADDED:
            {
                const eventListeners = (0, _timm.addLast)(state.eventListeners, action.payload);
                return (0, _timm.set)(state, 'eventListeners', eventListeners);
            }
        case IX2_EVENT_STATE_CHANGED:
            {
                const { stateKey, newState } = action.payload;
                return (0, _timm.setIn)(state, [
                    'eventState',
                    stateKey
                ], newState);
            }
        case IX2_ACTION_LIST_PLAYBACK_CHANGED:
            {
                const { actionListId, isPlaying } = action.payload;
                return (0, _timm.setIn)(state, [
                    'playbackState',
                    actionListId
                ], isPlaying);
            }
        case IX2_VIEWPORT_WIDTH_CHANGED:
            {
                const { width, mediaQueries } = action.payload;
                const mediaQueryCount = mediaQueries.length;
                let mediaQueryKey = null;
                for(let i = 0; i < mediaQueryCount; i++){
                    const { key, min, max } = mediaQueries[i];
                    if (width >= min && width <= max) {
                        mediaQueryKey = key;
                        break;
                    }
                }
                return (0, _timm.merge)(state, {
                    viewportWidth: width,
                    mediaQueryKey
                });
            }
        case IX2_MEDIA_QUERIES_DEFINED:
            {
                return (0, _timm.set)(state, 'hasDefinedMediaQueries', true);
            }
        default:
            {
                return state;
            }
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIklYMlNlc3Npb25SZWR1Y2VyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SVgyRW5naW5lQWN0aW9uVHlwZXN9IGZyb20gJ0BwYWNrYWdlcy9zeXN0ZW1zL2l4Mi9zaGFyZWQtY29uc3RhbnRzJztcbmNvbnN0IHtcbiAgSVgyX1NFU1NJT05fSU5JVElBTElaRUQsXG4gIElYMl9TRVNTSU9OX1NUQVJURUQsXG4gIElYMl9URVNUX0ZSQU1FX1JFTkRFUkVELFxuICBJWDJfU0VTU0lPTl9TVE9QUEVELFxuICBJWDJfRVZFTlRfTElTVEVORVJfQURERUQsXG4gIElYMl9FVkVOVF9TVEFURV9DSEFOR0VELFxuICBJWDJfQU5JTUFUSU9OX0ZSQU1FX0NIQU5HRUQsXG4gIElYMl9BQ1RJT05fTElTVF9QTEFZQkFDS19DSEFOR0VELFxuICBJWDJfVklFV1BPUlRfV0lEVEhfQ0hBTkdFRCxcbiAgSVgyX01FRElBX1FVRVJJRVNfREVGSU5FRCxcbn0gPSBJWDJFbmdpbmVBY3Rpb25UeXBlcztcbmltcG9ydCB7c2V0LCBzZXRJbiwgYWRkTGFzdCwgbWVyZ2V9IGZyb20gJ3RpbW0nO1xuaW1wb3J0IHtcbiAgYWN0aW9uTGlzdFBsYXliYWNrQ2hhbmdlZFBheWxvYWQsXG4gIGFuaW1hdGlvbkZyYW1lQ2hhbmdlZFBheWxvYWQsXG4gIGV2ZW50TGlzdGVuZXJBZGRlZFBheWxvYWQsXG4gIGV2ZW50U3RhdGVDaGFuZ2VkUGF5bG9hZCxcbiAgc2Vzc2lvbkluaXRpYWxpemVkUGF5bG9hZCxcbiAgdGVzdEZyYW1lUmVuZGVyZWRQYXlsb2FkLFxuICB2aWV3cG9ydFdpZHRoQ2hhbmdlZFBheWxvYWQsXG59IGZyb20gJy4uL2FjdGlvbnMvSVgyRW5naW5lQWN0aW9ucyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgYWN0aXZlOiBmYWxzZSxcbiAgdGljazogMCxcbiAgZXZlbnRMaXN0ZW5lcnM6IFtdLFxuICBldmVudFN0YXRlOiB7fSxcbiAgcGxheWJhY2tTdGF0ZToge30sXG4gIHZpZXdwb3J0V2lkdGg6IDAsXG4gIG1lZGlhUXVlcnlLZXk6IG51bGwsXG4gIGhhc0JvdW5kYXJ5Tm9kZXM6IGZhbHNlLFxuICBoYXNEZWZpbmVkTWVkaWFRdWVyaWVzOiBmYWxzZSxcbiAgcmVkdWNlZE1vdGlvbjogZmFsc2UsXG59O1xuXG5jb25zdCBURVNUX0ZSQU1FX1NURVBTX1NJWkUgPSAyMDtcblxudHlwZSBpeFNlc3Npb25SZWR1Y2VyU3RhdGUgPSB7XG4gIGFjdGl2ZTogYm9vbGVhbjtcbiAgdGljazogbnVtYmVyO1xuICBldmVudExpc3RlbmVyczogYW55W107XG4gIGV2ZW50U3RhdGU6IFJlY29yZDxzdHJpbmcsIGFueT47XG4gIHBsYXliYWNrU3RhdGU6IFJlY29yZDxzdHJpbmcsIGFueT47XG4gIHZpZXdwb3J0V2lkdGg6IG51bWJlcjtcbiAgbWVkaWFRdWVyeUtleTogbnVsbDtcbiAgaGFzQm91bmRhcnlOb2RlczogYm9vbGVhbjtcbiAgaGFzRGVmaW5lZE1lZGlhUXVlcmllczogYm9vbGVhbjtcbiAgcmVkdWNlZE1vdGlvbjogYm9vbGVhbjtcbn07XG5cbnR5cGUgaXhTZXNzaW9uUmVkdWNlckFjdGlvbiA9XG4gIHwge1xuICAgICAgdHlwZTogdHlwZW9mIElYMl9TRVNTSU9OX0lOSVRJQUxJWkVEO1xuICAgICAgcGF5bG9hZDogc2Vzc2lvbkluaXRpYWxpemVkUGF5bG9hZDtcbiAgICB9XG4gIHwge1xuICAgICAgdHlwZTogdHlwZW9mIElYMl9TRVNTSU9OX1NUQVJURUQ7XG4gICAgfVxuICB8IHtcbiAgICAgIHR5cGU6IHR5cGVvZiBJWDJfVEVTVF9GUkFNRV9SRU5ERVJFRDtcbiAgICAgIHBheWxvYWQ6IHRlc3RGcmFtZVJlbmRlcmVkUGF5bG9hZDtcbiAgICB9XG4gIHwge1xuICAgICAgdHlwZTogdHlwZW9mIElYMl9TRVNTSU9OX1NUT1BQRUQ7XG4gICAgfVxuICB8IHtcbiAgICAgIHR5cGU6IHR5cGVvZiBJWDJfQU5JTUFUSU9OX0ZSQU1FX0NIQU5HRUQ7XG4gICAgICBwYXlsb2FkOiBhbmltYXRpb25GcmFtZUNoYW5nZWRQYXlsb2FkO1xuICAgIH1cbiAgfCB7XG4gICAgICB0eXBlOiB0eXBlb2YgSVgyX0VWRU5UX0xJU1RFTkVSX0FEREVEO1xuICAgICAgcGF5bG9hZDogZXZlbnRMaXN0ZW5lckFkZGVkUGF5bG9hZDtcbiAgICB9XG4gIHwge1xuICAgICAgdHlwZTogdHlwZW9mIElYMl9FVkVOVF9TVEFURV9DSEFOR0VEO1xuICAgICAgcGF5bG9hZDogZXZlbnRTdGF0ZUNoYW5nZWRQYXlsb2FkO1xuICAgIH1cbiAgfCB7XG4gICAgICB0eXBlOiB0eXBlb2YgSVgyX0FDVElPTl9MSVNUX1BMQVlCQUNLX0NIQU5HRUQ7XG4gICAgICBwYXlsb2FkOiBhY3Rpb25MaXN0UGxheWJhY2tDaGFuZ2VkUGF5bG9hZDtcbiAgICB9XG4gIHwge1xuICAgICAgdHlwZTogdHlwZW9mIElYMl9WSUVXUE9SVF9XSURUSF9DSEFOR0VEO1xuICAgICAgcGF5bG9hZDogdmlld3BvcnRXaWR0aENoYW5nZWRQYXlsb2FkO1xuICAgIH1cbiAgfCB7XG4gICAgICB0eXBlOiB0eXBlb2YgSVgyX01FRElBX1FVRVJJRVNfREVGSU5FRDtcbiAgICB9O1xuXG5leHBvcnQgY29uc3QgaXhTZXNzaW9uID0gKFxuICBzdGF0ZTogaXhTZXNzaW9uUmVkdWNlclN0YXRlID0gaW5pdGlhbFN0YXRlLFxuICBhY3Rpb246IGl4U2Vzc2lvblJlZHVjZXJBY3Rpb25cbik6IGl4U2Vzc2lvblJlZHVjZXJTdGF0ZSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIElYMl9TRVNTSU9OX0lOSVRJQUxJWkVEOiB7XG4gICAgICBjb25zdCB7aGFzQm91bmRhcnlOb2RlcywgcmVkdWNlZE1vdGlvbn0gPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIHJldHVybiBtZXJnZShzdGF0ZSwge1xuICAgICAgICBoYXNCb3VuZGFyeU5vZGVzLFxuICAgICAgICByZWR1Y2VkTW90aW9uLFxuICAgICAgfSkgYXMgaXhTZXNzaW9uUmVkdWNlclN0YXRlO1xuICAgIH1cbiAgICBjYXNlIElYMl9TRVNTSU9OX1NUQVJURUQ6IHtcbiAgICAgIHJldHVybiBzZXQoc3RhdGUsICdhY3RpdmUnLCB0cnVlKTtcbiAgICB9XG4gICAgY2FzZSBJWDJfVEVTVF9GUkFNRV9SRU5ERVJFRDoge1xuICAgICAgY29uc3Qge1xuICAgICAgICBwYXlsb2FkOiB7c3RlcCA9IFRFU1RfRlJBTUVfU1RFUFNfU0laRX0sXG4gICAgICB9ID0gYWN0aW9uO1xuICAgICAgcmV0dXJuIHNldChzdGF0ZSwgJ3RpY2snLCBzdGF0ZS50aWNrICsgc3RlcCk7XG4gICAgfVxuICAgIGNhc2UgSVgyX1NFU1NJT05fU1RPUFBFRDoge1xuICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcbiAgICB9XG4gICAgY2FzZSBJWDJfQU5JTUFUSU9OX0ZSQU1FX0NIQU5HRUQ6IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgcGF5bG9hZDoge25vd30sXG4gICAgICB9ID0gYWN0aW9uO1xuICAgICAgcmV0dXJuIHNldChzdGF0ZSwgJ3RpY2snLCBub3cpO1xuICAgIH1cbiAgICBjYXNlIElYMl9FVkVOVF9MSVNURU5FUl9BRERFRDoge1xuICAgICAgY29uc3QgZXZlbnRMaXN0ZW5lcnMgPSBhZGRMYXN0KHN0YXRlLmV2ZW50TGlzdGVuZXJzLCBhY3Rpb24ucGF5bG9hZCk7XG4gICAgICByZXR1cm4gc2V0KHN0YXRlLCAnZXZlbnRMaXN0ZW5lcnMnLCBldmVudExpc3RlbmVycyk7XG4gICAgfVxuICAgIGNhc2UgSVgyX0VWRU5UX1NUQVRFX0NIQU5HRUQ6IHtcbiAgICAgIGNvbnN0IHtzdGF0ZUtleSwgbmV3U3RhdGV9ID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICByZXR1cm4gc2V0SW4oc3RhdGUsIFsnZXZlbnRTdGF0ZScsIHN0YXRlS2V5XSwgbmV3U3RhdGUpO1xuICAgIH1cbiAgICBjYXNlIElYMl9BQ1RJT05fTElTVF9QTEFZQkFDS19DSEFOR0VEOiB7XG4gICAgICBjb25zdCB7YWN0aW9uTGlzdElkLCBpc1BsYXlpbmd9ID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICByZXR1cm4gc2V0SW4oc3RhdGUsIFsncGxheWJhY2tTdGF0ZScsIGFjdGlvbkxpc3RJZF0sIGlzUGxheWluZyk7XG4gICAgfVxuICAgIGNhc2UgSVgyX1ZJRVdQT1JUX1dJRFRIX0NIQU5HRUQ6IHtcbiAgICAgIGNvbnN0IHt3aWR0aCwgbWVkaWFRdWVyaWVzfSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgY29uc3QgbWVkaWFRdWVyeUNvdW50ID0gbWVkaWFRdWVyaWVzLmxlbmd0aDtcbiAgICAgIGxldCBtZWRpYVF1ZXJ5S2V5ID0gbnVsbDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVkaWFRdWVyeUNvdW50OyBpKyspIHtcbiAgICAgICAgY29uc3Qge2tleSwgbWluLCBtYXh9ID0gbWVkaWFRdWVyaWVzW2ldO1xuICAgICAgICBpZiAod2lkdGggPj0gbWluICYmIHdpZHRoIDw9IG1heCkge1xuICAgICAgICAgIG1lZGlhUXVlcnlLZXkgPSBrZXk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBtZXJnZShzdGF0ZSwge1xuICAgICAgICB2aWV3cG9ydFdpZHRoOiB3aWR0aCxcbiAgICAgICAgbWVkaWFRdWVyeUtleSxcbiAgICAgIH0pIGFzIGl4U2Vzc2lvblJlZHVjZXJTdGF0ZTtcbiAgICB9XG4gICAgY2FzZSBJWDJfTUVESUFfUVVFUklFU19ERUZJTkVEOiB7XG4gICAgICByZXR1cm4gc2V0KHN0YXRlLCAnaGFzRGVmaW5lZE1lZGlhUXVlcmllcycsIHRydWUpO1xuICAgIH1cbiAgICBkZWZhdWx0OiB7XG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICB9XG59O1xuIl0sIm5hbWVzIjpbIml4U2Vzc2lvbiIsIklYMl9TRVNTSU9OX0lOSVRJQUxJWkVEIiwiSVgyX1NFU1NJT05fU1RBUlRFRCIsIklYMl9URVNUX0ZSQU1FX1JFTkRFUkVEIiwiSVgyX1NFU1NJT05fU1RPUFBFRCIsIklYMl9FVkVOVF9MSVNURU5FUl9BRERFRCIsIklYMl9FVkVOVF9TVEFURV9DSEFOR0VEIiwiSVgyX0FOSU1BVElPTl9GUkFNRV9DSEFOR0VEIiwiSVgyX0FDVElPTl9MSVNUX1BMQVlCQUNLX0NIQU5HRUQiLCJJWDJfVklFV1BPUlRfV0lEVEhfQ0hBTkdFRCIsIklYMl9NRURJQV9RVUVSSUVTX0RFRklORUQiLCJJWDJFbmdpbmVBY3Rpb25UeXBlcyIsImluaXRpYWxTdGF0ZSIsImFjdGl2ZSIsInRpY2siLCJldmVudExpc3RlbmVycyIsImV2ZW50U3RhdGUiLCJwbGF5YmFja1N0YXRlIiwidmlld3BvcnRXaWR0aCIsIm1lZGlhUXVlcnlLZXkiLCJoYXNCb3VuZGFyeU5vZGVzIiwiaGFzRGVmaW5lZE1lZGlhUXVlcmllcyIsInJlZHVjZWRNb3Rpb24iLCJURVNUX0ZSQU1FX1NURVBTX1NJWkUiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJwYXlsb2FkIiwibWVyZ2UiLCJzZXQiLCJzdGVwIiwibm93IiwiYWRkTGFzdCIsInN0YXRlS2V5IiwibmV3U3RhdGUiLCJzZXRJbiIsImFjdGlvbkxpc3RJZCIsImlzUGxheWluZyIsIndpZHRoIiwibWVkaWFRdWVyaWVzIiwibWVkaWFRdWVyeUNvdW50IiwibGVuZ3RoIiwiaSIsImtleSIsIm1pbiIsIm1heCJdLCJtYXBwaW5ncyI6Ijs7OzsrQkEyRmFBOzs7ZUFBQUE7OztpQ0EzRnNCO3NCQWFNO0FBWnpDLE1BQU0sRUFDSkMsdUJBQXVCLEVBQ3ZCQyxtQkFBbUIsRUFDbkJDLHVCQUF1QixFQUN2QkMsbUJBQW1CLEVBQ25CQyx3QkFBd0IsRUFDeEJDLHVCQUF1QixFQUN2QkMsMkJBQTJCLEVBQzNCQyxnQ0FBZ0MsRUFDaENDLDBCQUEwQixFQUMxQkMseUJBQXlCLEVBQzFCLEdBQUdDLHFDQUFvQjtBQVl4QixNQUFNQyxlQUFlO0lBQ25CQyxRQUFRO0lBQ1JDLE1BQU07SUFDTkMsZ0JB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

}),
7377: (function (__unused_webpack_module, exports) {
/* eslint-env browser */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    clearPlugin: function() {
        return clearPlugin;
    },
    createPluginInstance: function() {
        return createPluginInstance;
    },
    getPluginConfig: function() {
        return getPluginConfig;
    },
    getPluginDestination: function() {
        return getPluginDestination;
    },
    getPluginDuration: function() {
        return getPluginDuration;
    },
    getPluginOrigin: function() {
        return getPluginOrigin;
    },
    renderPlugin: function() {
        return renderPlugin;
    }
});
const getPluginConfig = (actionItemConfig)=>{
    return actionItemConfig.value;
};
const getPluginDuration = (element, actionItem)=>{
    if (actionItem.config.duration !== 'auto') {
        return null;
    }
    const duration = parseFloat(element.getAttribute('data-duration'));
    if (duration > 0) {
        return duration * 1000;
    }
    return parseFloat(element.getAttribute('data-default-duration')) * 1000;
};
const getPluginOrigin = (refState)=>{
    return refState || {
        value: 0
    };
};
const getPluginDestination = (actionItemConfig)=>{
    return {
        value: actionItemConfig.value
    };
};
const createPluginInstance = (element)=>{
    const lottie = window.Webflow.require('lottie');
    if (!lottie) return null;
    const instance = lottie.createInstance(element);
    instance.stop();
    instance.setSubframe(true);
    return instance;
};
const renderPlugin = (pluginInstance, refState, actionItem)=>{
    if (!pluginInstance) {
        return;
    }
    const percent = refState[actionItem.actionTypeId].value / 100;
    pluginInstance.goToFrame(pluginInstance.frames * percent);
};
const clearPlugin = (element)=>{
    const lottie = window.Webflow.require('lottie');
    if (lottie) {
        lottie.createInstance(element).stop();
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIklYMkxvdHRpZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuZXhwb3J0IGNvbnN0IGdldFBsdWdpbkNvbmZpZyA9IChhY3Rpb25JdGVtQ29uZmlnKSA9PiB7XG4gIHJldHVybiBhY3Rpb25JdGVtQ29uZmlnLnZhbHVlO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFBsdWdpbkR1cmF0aW9uID0gKGVsZW1lbnQsIGFjdGlvbkl0ZW0pID0+IHtcbiAgaWYgKGFjdGlvbkl0ZW0uY29uZmlnLmR1cmF0aW9uICE9PSAnYXV0bycpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IGR1cmF0aW9uID0gcGFyc2VGbG9hdChlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1kdXJhdGlvbicpKTtcblxuICBpZiAoZHVyYXRpb24gPiAwKSB7XG4gICAgcmV0dXJuIGR1cmF0aW9uICogMTAwMDtcbiAgfVxuXG4gIHJldHVybiBwYXJzZUZsb2F0KGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWRlZmF1bHQtZHVyYXRpb24nKSkgKiAxMDAwO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFBsdWdpbk9yaWdpbiA9IChyZWZTdGF0ZSkgPT4ge1xuICByZXR1cm4gcmVmU3RhdGUgfHwge3ZhbHVlOiAwfTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRQbHVnaW5EZXN0aW5hdGlvbiA9IChhY3Rpb25JdGVtQ29uZmlnKSA9PiB7XG4gIHJldHVybiB7dmFsdWU6IGFjdGlvbkl0ZW1Db25maWcudmFsdWV9O1xufTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVBsdWdpbkluc3RhbmNlID0gKGVsZW1lbnQpID0+IHtcbiAgY29uc3QgbG90dGllID0gd2luZG93LldlYmZsb3cucmVxdWlyZSgnbG90dGllJyk7XG4gIGlmICghbG90dGllKSByZXR1cm4gbnVsbDtcbiAgY29uc3QgaW5zdGFuY2UgPSBsb3R0aWUuY3JlYXRlSW5zdGFuY2UoZWxlbWVudCk7XG4gIGluc3RhbmNlLnN0b3AoKTtcbiAgaW5zdGFuY2Uuc2V0U3ViZnJhbWUodHJ1ZSk7XG4gIHJldHVybiBpbnN0YW5jZTtcbn07XG5cbmV4cG9ydCBjb25zdCByZW5kZXJQbHVnaW4gPSAocGx1Z2luSW5zdGFuY2UsIHJlZlN0YXRlLCBhY3Rpb25JdGVtKSA9PiB7XG4gIGlmICghcGx1Z2luSW5zdGFuY2UpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgcGVyY2VudCA9IHJlZlN0YXRlW2FjdGlvbkl0ZW0uYWN0aW9uVHlwZUlkXS52YWx1ZSAvIDEwMDtcbiAgcGx1Z2luSW5zdGFuY2UuZ29Ub0ZyYW1lKHBsdWdpbkluc3RhbmNlLmZyYW1lcyAqIHBlcmNlbnQpO1xufTtcblxuZXhwb3J0IGNvbnN0IGNsZWFyUGx1Z2luID0gKGVsZW1lbnQpID0+IHtcbiAgY29uc3QgbG90dGllID0gd2luZG93LldlYmZsb3cucmVxdWlyZSgnbG90dGllJyk7XG4gIGlmIChsb3R0aWUpIHtcbiAgICBsb3R0aWUuY3JlYXRlSW5zdGFuY2UoZWxlbWVudCkuc3RvcCgpO1xuICB9XG59O1xuIl0sIm5hbWVzIjpbImNsZWFyUGx1Z2luIiwiY3JlYXRlUGx1Z2luSW5zdGFuY2UiLCJnZXRQbHVnaW5Db25maWciLCJnZXRQbHVnaW5EZXN0aW5hdGlvbiIsImdldFBsdWdpbkR1cmF0aW9uIiwiZ2V0UGx1Z2luT3JpZ2luIiwicmVuZGVyUGx1Z2luIiwiYWN0aW9uSXRlbUNvbmZpZyIsInZhbHVlIiwiZWxlbWVudCIsImFjdGlvbkl0ZW0iLCJjb25maWciLCJkdXJhdGlvbiIsInBhcnNlRmxvYXQiLCJnZXRBdHRyaWJ1dGUiLCJyZWZTdGF0ZSIsImxvdHRpZSIsIndpbmRvdyIsIldlYmZsb3ciLCJyZXF1aXJlIiwiaW5zdGFuY2UiLCJjcmVhdGVJbnN0YW5jZSIsInN0b3AiLCJzZXRTdWJmcmFtZSIsInBsdWdpbkluc3RhbmNlIiwicGVyY2VudCIsImFjdGlvblR5cGVJZCIsImdvVG9GcmFtZSIsImZyYW1lcyJdLCJtYXBwaW5ncyI6IkFBQUEsc0JBQXNCOzs7Ozs7Ozs7OztJQTZDVEEsV0FBVztlQUFYQTs7SUFqQkFDLG9CQUFvQjtlQUFwQkE7O0lBMUJBQyxlQUFlO2VBQWZBOztJQXNCQUMsb0JBQW9CO2VBQXBCQTs7SUFsQkFDLGlCQUFpQjtlQUFqQkE7O0lBY0FDLGVBQWU7ZUFBZkE7O0lBaUJBQyxZQUFZO2VBQVpBOzs7QUFuQ04sTUFBTUosa0JBQWtCLENBQUNLO0lBQzlCLE9BQU9BLGlCQUFpQkMsS0FBSztBQUMvQjtBQUVPLE1BQU1KLG9CQUFvQixDQUFDSyxTQUFTQztJQUN6QyxJQUFJQSxXQUFXQyxNQUFNLENBQUNDLFFBQVEsS0FBSyxRQUFRO1FBQ3pDLE9BQU87SUFDVDtJQUVBLE1BQU1BLFdBQVdDLFdBQVdKLFFBQVFLLFlBQVksQ0FBQztJQUVqRCxJQUFJRixXQUFXLEdBQUc7UUFDaEIsT0FBT0EsV0FBVztJQUNwQjtJQUVBLE9BQU9DLFdBQVdKLFFBQVFLLFlBQVksQ0FBQyw0QkFBNEI7QUFDckU7QUFFTyxNQUFNVCxrQkFBa0IsQ0FBQ1U7SUFDOUIsT0FBT0EsWUFBWTtRQUFDUCxPQUFPO0lBQUM7QUFDOUI7QUFFTyxNQUFNTCx1QkFBdUIsQ0FBQ0k7SUFDbkMsT0FBTztRQUFDQyxPQUFPRCxpQkFBaUJDLEtBQUs7SUFBQTtBQUN2QztBQUVPLE1BQU1QLHVCQUF1QixDQUFDUTtJQUNuQyxNQUFNTyxTQUFTQyxPQUFPQyxPQUFPLENBQUNDLE9BQU8sQ0FBQztJQUN0QyxJQUFJLENBQUNILFFBQVEsT0FBTztJQUNwQixNQUFNSSxXQUFXSixPQUFPSyxjQUFjLENBQUNaO0lBQ3ZDVyxTQUFTRSxJQUFJO0lBQ2JGLFNBQVNHLFdBQVcsQ0FBQztJQUNyQixPQUFPSDtBQUNUO0FBRU8sTUFBTWQsZUFBZSxDQUFDa0IsZ0JBQWdCVCxVQUFVTDtJQUNyRCxJQUFJLENBQUNjLGdCQUFnQjtRQUNuQjtJQUNGO0lBQ0EsTUFBTUMsVUFBVVYsUUFBUSxDQUFDTCxXQUFXZ0IsWUFBWSxDQUFDLENBQUNsQixLQUFLLEdBQUc7SUFDMURnQixlQUFlRyxTQUFTLENBQUNILGVBQWVJLE1BQU0sR0FBR0g7QUFDbkQ7QUFFTyxNQUFNekIsY0FBYyxDQUFDUztJQUMxQixNQUFNTyxTQUFTQyxPQUFPQyxPQUFPLENBQUNDLE9BQU8sQ0FBQztJQUN0QyxJQUFJSCxRQUFRO1FBQ1ZBLE9BQU9LLGNBQWMsQ0FBQ1osU0FBU2EsSUFBSTtJQUNyQztBQUNGIn0=

}),
2570: (function (__unused_webpack_module, exports) {
/* eslint-env browser */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    clearPlugin: function() {
        return clearPlugin;
    },
    createPluginInstance: function() {
        return createPluginInstance;
    },
    getPluginConfig: function() {
        return getPluginConfig;
    },
    getPluginDestination: function() {
        return getPluginDestination;
    },
    getPluginDuration: function() {
        return getPluginDuration;
    },
    getPluginOrigin: function() {
        return getPluginOrigin;
    },
    renderPlugin: function() {
        return renderPlugin;
    }
});
const FIT_KEY = '--wf-rive-fit';
const ALIGNMENT_KEY = '--wf-rive-alignment';
const queryContainerElement = (elementId)=>document.querySelector(`[data-w-id="${elementId}"]`);
const getFrontendModule = ()=>window.Webflow.require('rive');
const getPluginConfig = (actionItemConfig, key)=>actionItemConfig.value.inputs[key];
const getPluginDuration = ()=>null; // Not used by this plugin
const getPluginOrigin = (refState, actionItem)=>{
    if (refState) return refState;
    const result = {};
    const { inputs = {} } = actionItem.config.value;
    for(const input in inputs)if (inputs[input] == null) result[input] = 0;
    return result;
};
const getPluginDestination = (actionItemConfig)=>actionItemConfig.value.inputs ?? {};
const createPluginInstance = (element, actionItem)=>{
    const selectorGuids = actionItem.config?.target?.selectorGuids || [];
    if (selectorGuids.length > 0) return element;
    // In this case, we define pluginInstance as a reference to the container element
    const pluginElementId = actionItem?.config?.target?.pluginElement;
    return pluginElementId ? queryContainerElement(pluginElementId) : null;
};
const renderPlugin = (containerElement, { PLUGIN_RIVE: props }, actionItem)=>{
    const frontendModule = getFrontendModule();
    if (!frontendModule) return;
    const instance = frontendModule.getInstance(containerElement);
    const StateMachineInputType = frontendModule.rive.StateMachineInputType;
    const { name, inputs = {} } = actionItem.config.value || {};
    function renderRive(riveInstance) {
        if (riveInstance.loaded) {
            render();
        } else {
            // Render instance immediately on load and then clean up handler
            const onLoad = ()=>{
                render();
                riveInstance?.off('load', onLoad);
            };
            riveInstance?.on('load', onLoad);
        }
        function render() {
            const stateMachineInputs = riveInstance.stateMachineInputs(name);
            if (stateMachineInputs == null) return; // exit early since no inputs found
            if (!riveInstance.isPlaying) riveInstance.play(name, false); // set autoplay: false because IX engine is controlling playback.
            if (FIT_KEY in inputs || ALIGNMENT_KEY in inputs) {
                const currentLayout = riveInstance.layout;
                const nextFit = inputs[FIT_KEY] ?? currentLayout.fit;
                const nextAlignment = inputs[ALIGNMENT_KEY] ?? currentLayout.alignment;
                if (nextFit !== currentLayout.fit || nextAlignment !== currentLayout.alignment) {
                    riveInstance.layout = currentLayout.copyWith({
                        fit: nextFit,
                        alignment: nextAlignment
                    });
                }
            }
            for(const inputName in inputs){
                if (inputName === FIT_KEY || inputName === ALIGNMENT_KEY) continue;
                const machineInput = stateMachineInputs.find((m)=>m.name === inputName);
                if (machineInput == null) continue;
                switch(machineInput.type){
                    case StateMachineInputType.Boolean:
                        {
                            if (inputs[inputName] != null) {
                                const booleanValue = Boolean(inputs[inputName]);
                                machineInput.value = booleanValue;
                            }
                            break;
                        }
                    case StateMachineInputType.Number:
                        {
                            const numberValue = props[inputName];
                            if (numberValue != null) machineInput.value = numberValue;
                            break;
                        }
                    case StateMachineInputType.Trigger:
                        {
                            if (inputs[inputName]) machineInput.fire();
                            break;
                        }
                }
            }
        }
    }
    // Render rive if the instance is available
    if (instance?.rive) renderRive(instance.rive);
    else frontendModule.setLoadHandler(containerElement, renderRive);
};
const clearPlugin = (_containerElement, _actionItem)=>null; // Not used by this plugin

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIklYMlJpdmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbmNvbnN0IEZJVF9LRVkgPSAnLS13Zi1yaXZlLWZpdCc7XG5jb25zdCBBTElHTk1FTlRfS0VZID0gJy0td2Ytcml2ZS1hbGlnbm1lbnQnO1xuXG5jb25zdCBxdWVyeUNvbnRhaW5lckVsZW1lbnQgPSAoZWxlbWVudElkKSA9PlxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS13LWlkPVwiJHtlbGVtZW50SWR9XCJdYCk7XG5cbmNvbnN0IGdldEZyb250ZW5kTW9kdWxlID0gKCkgPT4gd2luZG93LldlYmZsb3cucmVxdWlyZSgncml2ZScpO1xuXG5leHBvcnQgY29uc3QgZ2V0UGx1Z2luQ29uZmlnID0gKGFjdGlvbkl0ZW1Db25maWcsIGtleSkgPT5cbiAgYWN0aW9uSXRlbUNvbmZpZy52YWx1ZS5pbnB1dHNba2V5XTtcblxuZXhwb3J0IGNvbnN0IGdldFBsdWdpbkR1cmF0aW9uID0gKCkgPT4gbnVsbDsgLy8gTm90IHVzZWQgYnkgdGhpcyBwbHVnaW5cblxuZXhwb3J0IGNvbnN0IGdldFBsdWdpbk9yaWdpbiA9IChyZWZTdGF0ZSwgYWN0aW9uSXRlbSkgPT4ge1xuICBpZiAocmVmU3RhdGUpIHJldHVybiByZWZTdGF0ZTtcbiAgY29uc3QgcmVzdWx0ID0ge307XG4gIGNvbnN0IHtpbnB1dHMgPSB7fX0gPSBhY3Rpb25JdGVtLmNvbmZpZy52YWx1ZTtcbiAgZm9yIChjb25zdCBpbnB1dCBpbiBpbnB1dHMpIGlmIChpbnB1dHNbaW5wdXRdID09IG51bGwpIHJlc3VsdFtpbnB1dF0gPSAwO1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFBsdWdpbkRlc3RpbmF0aW9uID0gKGFjdGlvbkl0ZW1Db25maWcpID0+XG4gIGFjdGlvbkl0ZW1Db25maWcudmFsdWUuaW5wdXRzID8/IHt9O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlUGx1Z2luSW5zdGFuY2UgPSAoZWxlbWVudCwgYWN0aW9uSXRlbSkgPT4ge1xuICBjb25zdCBzZWxlY3Rvckd1aWRzID0gYWN0aW9uSXRlbS5jb25maWc/LnRhcmdldD8uc2VsZWN0b3JHdWlkcyB8fCBbXTtcbiAgaWYgKHNlbGVjdG9yR3VpZHMubGVuZ3RoID4gMCkgcmV0dXJuIGVsZW1lbnQ7XG5cbiAgLy8gSW4gdGhpcyBjYXNlLCB3ZSBkZWZpbmUgcGx1Z2luSW5zdGFuY2UgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGNvbnRhaW5lciBlbGVtZW50XG4gIGNvbnN0IHBsdWdpbkVsZW1lbnRJZCA9IGFjdGlvbkl0ZW0/LmNvbmZpZz8udGFyZ2V0Py5wbHVnaW5FbGVtZW50O1xuICByZXR1cm4gcGx1Z2luRWxlbWVudElkID8gcXVlcnlDb250YWluZXJFbGVtZW50KHBsdWdpbkVsZW1lbnRJZCkgOiBudWxsO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbmRlclBsdWdpbiA9IChcbiAgY29udGFpbmVyRWxlbWVudCxcbiAge1BMVUdJTl9SSVZFOiBwcm9wc30sXG4gIGFjdGlvbkl0ZW1cbikgPT4ge1xuICBjb25zdCBmcm9udGVuZE1vZHVsZSA9IGdldEZyb250ZW5kTW9kdWxlKCk7XG4gIGlmICghZnJvbnRlbmRNb2R1bGUpIHJldHVybjtcbiAgY29uc3QgaW5zdGFuY2UgPSBmcm9udGVuZE1vZHVsZS5nZXRJbnN0YW5jZShjb250YWluZXJFbGVtZW50KTtcbiAgY29uc3QgU3RhdGVNYWNoaW5lSW5wdXRUeXBlID0gZnJvbnRlbmRNb2R1bGUucml2ZS5TdGF0ZU1hY2hpbmVJbnB1dFR5cGU7XG4gIGNvbnN0IHtuYW1lLCBpbnB1dHMgPSB7fX0gPSBhY3Rpb25JdGVtLmNvbmZpZy52YWx1ZSB8fCB7fTtcblxuICBmdW5jdGlvbiByZW5kZXJSaXZlKHJpdmVJbnN0YW5jZSkge1xuICAgIGlmIChyaXZlSW5zdGFuY2UubG9hZGVkKSB7XG4gICAgICByZW5kZXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmVuZGVyIGluc3RhbmNlIGltbWVkaWF0ZWx5IG9uIGxvYWQgYW5kIHRoZW4gY2xlYW4gdXAgaGFuZGxlclxuICAgICAgY29uc3Qgb25Mb2FkID0gKCkgPT4ge1xuICAgICAgICByZW5kZXIoKTtcbiAgICAgICAgcml2ZUluc3RhbmNlPy5vZmYoJ2xvYWQnLCBvbkxvYWQpO1xuICAgICAgfTtcblxuICAgICAgcml2ZUluc3RhbmNlPy5vbignbG9hZCcsIG9uTG9hZCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgY29uc3Qgc3RhdGVNYWNoaW5lSW5wdXRzID0gcml2ZUluc3RhbmNlLnN0YXRlTWFjaGluZUlucHV0cyhuYW1lKTtcbiAgICAgIGlmIChzdGF0ZU1hY2hpbmVJbnB1dHMgPT0gbnVsbCkgcmV0dXJuOyAvLyBleGl0IGVhcmx5IHNpbmNlIG5vIGlucHV0cyBmb3VuZFxuXG4gICAgICBpZiAoIXJpdmVJbnN0YW5jZS5pc1BsYXlpbmcpIHJpdmVJbnN0YW5jZS5wbGF5KG5hbWUsIGZhbHNlKTsgLy8gc2V0IGF1dG9wbGF5OiBmYWxzZSBiZWNhdXNlIElYIGVuZ2luZSBpcyBjb250cm9sbGluZyBwbGF5YmFjay5cblxuICAgICAgaWYgKEZJVF9LRVkgaW4gaW5wdXRzIHx8IEFMSUdOTUVOVF9LRVkgaW4gaW5wdXRzKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRMYXlvdXQgPSByaXZlSW5zdGFuY2UubGF5b3V0O1xuICAgICAgICBjb25zdCBuZXh0Rml0ID0gaW5wdXRzW0ZJVF9LRVldID8/IGN1cnJlbnRMYXlvdXQuZml0O1xuICAgICAgICBjb25zdCBuZXh0QWxpZ25tZW50ID0gaW5wdXRzW0FMSUdOTUVOVF9LRVldID8/IGN1cnJlbnRMYXlvdXQuYWxpZ25tZW50O1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICBuZXh0Rml0ICE9PSBjdXJyZW50TGF5b3V0LmZpdCB8fFxuICAgICAgICAgIG5leHRBbGlnbm1lbnQgIT09IGN1cnJlbnRMYXlvdXQuYWxpZ25tZW50XG4gICAgICAgICkge1xuICAgICAgICAgIHJpdmVJbnN0YW5jZS5sYXlvdXQgPSBjdXJyZW50TGF5b3V0LmNvcHlXaXRoKHtcbiAgICAgICAgICAgIGZpdDogbmV4dEZpdCxcbiAgICAgICAgICAgIGFsaWdubWVudDogbmV4dEFsaWdubWVudCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmb3IgKGNvbnN0IGlucHV0TmFtZSBpbiBpbnB1dHMpIHtcbiAgICAgICAgaWYgKGlucHV0TmFtZSA9PT0gRklUX0tFWSB8fCBpbnB1dE5hbWUgPT09IEFMSUdOTUVOVF9LRVkpIGNvbnRpbnVlO1xuXG4gICAgICAgIGNvbnN0IG1hY2hpbmVJbnB1dCA9IHN0YXRlTWFjaGluZUlucHV0cy5maW5kKFxuICAgICAgICAgIChtKSA9PiBtLm5hbWUgPT09IGlucHV0TmFtZVxuICAgICAgICApO1xuXG4gICAgICAgIGlmIChtYWNoaW5lSW5wdXQgPT0gbnVsbCkgY29udGludWU7XG5cbiAgICAgICAgc3dpdGNoIChtYWNoaW5lSW5wdXQudHlwZSkge1xuICAgICAgICAgIGNhc2UgU3RhdGVNYWNoaW5lSW5wdXRUeXBlLkJvb2xlYW46IHtcbiAgICAgICAgICAgIGlmIChpbnB1dHNbaW5wdXROYW1lXSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGJvb2xlYW5WYWx1ZSA9IEJvb2xlYW4oaW5wdXRzW2lucHV0TmFtZV0pO1xuICAgICAgICAgICAgICBtYWNoaW5lSW5wdXQudmFsdWUgPSBib29sZWFuVmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjYXNlIFN0YXRlTWFjaGluZUlucHV0VHlwZS5OdW1iZXI6IHtcbiAgICAgICAgICAgIGNvbnN0IG51bWJlclZhbHVlID0gcHJvcHNbaW5wdXROYW1lXTtcbiAgICAgICAgICAgIGlmIChudW1iZXJWYWx1ZSAhPSBudWxsKSBtYWNoaW5lSW5wdXQudmFsdWUgPSBudW1iZXJWYWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNhc2UgU3RhdGVNYWNoaW5lSW5wdXRUeXBlLlRyaWdnZXI6IHtcbiAgICAgICAgICAgIGlmIChpbnB1dHNbaW5wdXROYW1lXSkgbWFjaGluZUlucHV0LmZpcmUoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFJlbmRlciByaXZlIGlmIHRoZSBpbnN0YW5jZSBpcyBhdmFpbGFibGVcbiAgaWYgKGluc3RhbmNlPy5yaXZlKSByZW5kZXJSaXZlKGluc3RhbmNlLnJpdmUpO1xuICAvLyBPdGhlcndpc2UsIHN0b3JlIGxhdGVzdCByZW5kZXIgYXMgYSBjYWxsYmFjayB0byBmaXJlIHdoZW4gbG9hZGVkXG4gIGVsc2UgZnJvbnRlbmRNb2R1bGUuc2V0TG9hZEhhbmRsZXIoY29udGFpbmVyRWxlbWVudCwgcmVuZGVyUml2ZSk7XG59O1xuXG5leHBvcnQgY29uc3QgY2xlYXJQbHVnaW4gPSAoX2NvbnRhaW5lckVsZW1lbnQsIF9hY3Rpb25JdGVtKSA9PiBudWxsOyAvLyBOb3QgdXNlZCBieSB0aGlzIHBsdWdpblxuIl0sIm5hbWVzIjpbImNsZWFyUGx1Z2luIiwiY3JlYXRlUGx1Z2luSW5zdGFuY2UiLCJnZXRQbHVnaW5Db25maWciLCJnZXRQbHVnaW5EZXN0aW5hdGlvbiIsImdldFBsdWdpbkR1cmF0aW9uIiwiZ2V0UGx1Z2luT3JpZ2luIiwicmVuZGVyUGx1Z2luIiwiRklUX0tFWSIsIkFMSUdOTUVOVF9LRVkiLCJxdWVyeUNvbnRhaW5lckVsZW1lbnQiLCJlbGVtZW50SWQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRGcm9udGVuZE1vZHVsZSIsIndpbmRvdyIsIldlYmZsb3ciLCJyZXF1aXJlIiwiYWN0aW9uSXRlbUNvbmZpZyIsImtleSIsInZhbHVlIiwiaW5wdXRzIiwicmVmU3RhdGUiLCJhY3Rpb25JdGVtIiwicmVzdWx0IiwiY29uZmlnIiwiaW5wdXQiLCJlbGVtZW50Iiwic2VsZWN0b3JHdWlkcyIsInRhcmdldCIsImxlbmd0aCIsInBsdWdpbkVsZW1lbnRJZCIsInBsdWdpbkVsZW1lbnQiLCJjb250YWluZXJFbGVtZW50IiwiUExVR0lOX1JJVkUiLCJwcm9wcyIsImZyb250ZW5kTW9kdWxlIiwiaW5zdGFuY2UiLCJnZXRJbnN0YW5jZSIsIlN0YXRlTWFjaGluZUlucHV0VHlwZSIsInJpdmUiLCJuYW1lIiwicmVuZGVyUml2ZSIsInJpdmVJbnN0YW5jZSIsImxvYWRlZCIsInJlbmRlciIsIm9uTG9hZCIsIm9mZiIsIm9uIiwic3RhdGVNYWNoaW5lSW5wdXRzIiwiaXNQbGF5aW5nIiwicGxheSIsImN1cnJlbnRMYXlvdXQiLCJsYXlvdXQiLCJuZXh0Rml0IiwiZml0IiwibmV4dEFsaWdubWVudCIsImFsaWdubWVudCIsImNvcHlXaXRoIiwiaW5wdXROYW1lIiwibWFjaGluZUlucHV0IiwiZmluZCIsIm0iLCJ0eXBlIiwiQm9vbGVhbiIsImJvb2xlYW5WYWx1ZSIsIk51bWJlciIsIm51bWJlclZhbHVlIiwiVHJpZ2dlciIsImZpcmUiLCJzZXRMb2FkSGFuZGxlciIsIl9jb250YWluZXJFbGVtZW50IiwiX2FjdGlvbkl0ZW0iXSwibWFwcGluZ3MiOiJBQUFBLHNCQUFzQjs7Ozs7Ozs7Ozs7SUF3SFRBLFdBQVc7ZUFBWEE7O0lBOUZBQyxvQkFBb0I7ZUFBcEJBOztJQWhCQUMsZUFBZTtlQUFmQTs7SUFhQUMsb0JBQW9CO2VBQXBCQTs7SUFWQUMsaUJBQWlCO2VBQWpCQTs7SUFFQUMsZUFBZTtlQUFmQTs7SUFvQkFDLFlBQVk7ZUFBWkE7OztBQWpDYixNQUFNQyxVQUFVO0FBQ2hCLE1BQU1DLGdCQUFnQjtBQUV0QixNQUFNQyx3QkFBd0IsQ0FBQ0MsWUFDN0JDLFNBQVNDLGFBQWEsQ0FBQyxDQUFDLFlBQVksRUFBRUYsVUFBVSxFQUFFLENBQUM7QUFFckQsTUFBTUcsb0JBQW9C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

}),
2866: (function (__unused_webpack_module, exports) {
/* eslint-env browser */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    clearPlugin: function() {
        return clearPlugin;
    },
    createPluginInstance: function() {
        return createPluginInstance;
    },
    getPluginConfig: function() {
        return getPluginConfig;
    },
    getPluginDestination: function() {
        return getPluginDestination;
    },
    getPluginDuration: function() {
        return getPluginDuration;
    },
    getPluginOrigin: function() {
        return getPluginOrigin;
    },
    renderPlugin: function() {
        return renderPlugin;
    }
});
const queryContainerElement = (elementId)=>document.querySelector(`[data-w-id="${elementId}"]`);
const getFrontendModule = ()=>window.Webflow.require('spline');
const difference = (arr1, arr2)=>arr1.filter((x)=>!arr2.includes(x));
const getPluginConfig = (actionItemConfig, key)=>{
    return actionItemConfig.value[key];
};
const getPluginDuration = ()=>{
    // Not used by this plugin
    return null;
};
const DEFAULT_VALUES = Object.freeze({
    positionX: 0,
    positionY: 0,
    positionZ: 0,
    rotationX: 0,
    rotationY: 0,
    rotationZ: 0,
    scaleX: 1,
    scaleY: 1,
    scaleZ: 1
});
const getPluginOrigin = (refState, actionItem)=>{
    // Determine which props we care about in the destination
    const destination = actionItem.config.value;
    const destinationKeys = Object.keys(destination);
    // Check the current state for any missing origin props
    if (refState) {
        const stateKeys = Object.keys(refState);
        const diffKeys = difference(destinationKeys, stateKeys);
        // If new props are needed, merge new origin values with current state
        if (diffKeys.length) {
            const origin = diffKeys.reduce((result, key)=>{
                result[key] = DEFAULT_VALUES[key];
                return result;
            }, refState);
            return origin;
        }
        // No difference, return current state
        return refState;
    }
    // State doesn't exist so define new origin based on destination
    const origin = destinationKeys.reduce((result, key)=>{
        result[key] = DEFAULT_VALUES[key];
        return result;
    }, {});
    return origin;
};
const getPluginDestination = (actionItemConfig)=>{
    return actionItemConfig.value;
};
const createPluginInstance = (element, actionItem)=>{
    // In this case, we define pluginInstance as a reference to the container element
    const pluginElementId = actionItem?.config?.target?.pluginElement;
    return pluginElementId ? queryContainerElement(pluginElementId) : null;
};
const renderPlugin = (containerElement, refState, actionItem)=>{
    const frontendModule = getFrontendModule();
    if (!frontendModule) return;
    const instance = frontendModule.getInstance(containerElement);
    const objectId = actionItem.config.target.objectId;
    const renderSpline = (spline)=>{
        if (!spline) {
            throw new Error('Invalid spline app passed to renderSpline');
        }
        const obj = objectId && spline.findObjectById(objectId);
        if (!obj) {
            return;
        }
        const { PLUGIN_SPLINE: props } = refState;
        if (props.positionX != null) {
            obj.position.x = props.positionX;
        }
        if (props.positionY != null) {
            obj.position.y = props.positionY;
        }
        if (props.positionZ != null) {
            obj.position.z = props.positionZ;
        }
        if (props.rotationX != null) {
            obj.rotation.x = props.rotationX;
        }
        if (props.rotationY != null) {
            obj.rotation.y = props.rotationY;
        }
        if (props.rotationZ != null) {
            obj.rotation.z = props.rotationZ;
        }
        if (props.scaleX != null) {
            obj.scale.x = props.scaleX;
        }
        if (props.scaleY != null) {
            obj.scale.y = props.scaleY;
        }
        if (props.scaleZ != null) {
            obj.scale.z = props.scaleZ;
        }
    };
    if (instance) {
        // Render spline if the app instance is already loaded
        renderSpline(instance.spline);
    } else {
        // Otherwise, store latest render as a callback to fire when loaded
        frontendModule.setLoadHandler(containerElement, renderSpline);
    }
};
const clearPlugin = ()=>{
    // Not used by this plugin
    return null;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIklYMlNwbGluZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuY29uc3QgcXVlcnlDb250YWluZXJFbGVtZW50ID0gKGVsZW1lbnRJZCkgPT5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdy1pZD1cIiR7ZWxlbWVudElkfVwiXWApO1xuXG5jb25zdCBnZXRGcm9udGVuZE1vZHVsZSA9ICgpID0+IHdpbmRvdy5XZWJmbG93LnJlcXVpcmUoJ3NwbGluZScpO1xuXG5jb25zdCBkaWZmZXJlbmNlID0gKGFycjEsIGFycjIpID0+IGFycjEuZmlsdGVyKCh4KSA9PiAhYXJyMi5pbmNsdWRlcyh4KSk7XG5cbmV4cG9ydCBjb25zdCBnZXRQbHVnaW5Db25maWcgPSAoYWN0aW9uSXRlbUNvbmZpZywga2V5KSA9PiB7XG4gIHJldHVybiBhY3Rpb25JdGVtQ29uZmlnLnZhbHVlW2tleV07XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0UGx1Z2luRHVyYXRpb24gPSAoKSA9PiB7XG4gIC8vIE5vdCB1c2VkIGJ5IHRoaXMgcGx1Z2luXG4gIHJldHVybiBudWxsO1xufTtcblxuY29uc3QgREVGQVVMVF9WQUxVRVMgPSBPYmplY3QuZnJlZXplKHtcbiAgcG9zaXRpb25YOiAwLFxuICBwb3NpdGlvblk6IDAsXG4gIHBvc2l0aW9uWjogMCxcbiAgcm90YXRpb25YOiAwLFxuICByb3RhdGlvblk6IDAsXG4gIHJvdGF0aW9uWjogMCxcbiAgc2NhbGVYOiAxLFxuICBzY2FsZVk6IDEsXG4gIHNjYWxlWjogMSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZ2V0UGx1Z2luT3JpZ2luID0gKHJlZlN0YXRlLCBhY3Rpb25JdGVtKSA9PiB7XG4gIC8vIERldGVybWluZSB3aGljaCBwcm9wcyB3ZSBjYXJlIGFib3V0IGluIHRoZSBkZXN0aW5hdGlvblxuICBjb25zdCBkZXN0aW5hdGlvbiA9IGFjdGlvbkl0ZW0uY29uZmlnLnZhbHVlO1xuICBjb25zdCBkZXN0aW5hdGlvbktleXMgPSBPYmplY3Qua2V5cyhkZXN0aW5hdGlvbik7XG4gIC8vIENoZWNrIHRoZSBjdXJyZW50IHN0YXRlIGZvciBhbnkgbWlzc2luZyBvcmlnaW4gcHJvcHNcbiAgaWYgKHJlZlN0YXRlKSB7XG4gICAgY29uc3Qgc3RhdGVLZXlzID0gT2JqZWN0LmtleXMocmVmU3RhdGUpO1xuICAgIGNvbnN0IGRpZmZLZXlzID0gZGlmZmVyZW5jZShkZXN0aW5hdGlvbktleXMsIHN0YXRlS2V5cyk7XG4gICAgLy8gSWYgbmV3IHByb3BzIGFyZSBuZWVkZWQsIG1lcmdlIG5ldyBvcmlnaW4gdmFsdWVzIHdpdGggY3VycmVudCBzdGF0ZVxuICAgIGlmIChkaWZmS2V5cy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IG9yaWdpbiA9IGRpZmZLZXlzLnJlZHVjZSgocmVzdWx0LCBrZXkpID0+IHtcbiAgICAgICAgcmVzdWx0W2tleV0gPSBERUZBVUxUX1ZBTFVFU1trZXldO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfSwgcmVmU3RhdGUpO1xuICAgICAgcmV0dXJuIG9yaWdpbjtcbiAgICB9XG4gICAgLy8gTm8gZGlmZmVyZW5jZSwgcmV0dXJuIGN1cnJlbnQgc3RhdGVcbiAgICByZXR1cm4gcmVmU3RhdGU7XG4gIH1cbiAgLy8gU3RhdGUgZG9lc24ndCBleGlzdCBzbyBkZWZpbmUgbmV3IG9yaWdpbiBiYXNlZCBvbiBkZXN0aW5hdGlvblxuICBjb25zdCBvcmlnaW4gPSBkZXN0aW5hdGlvbktleXMucmVkdWNlKChyZXN1bHQsIGtleSkgPT4ge1xuICAgIHJlc3VsdFtrZXldID0gREVGQVVMVF9WQUxVRVNba2V5XTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9LCB7fSk7XG4gIHJldHVybiBvcmlnaW47XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0UGx1Z2luRGVzdGluYXRpb24gPSAoYWN0aW9uSXRlbUNvbmZpZykgPT4ge1xuICByZXR1cm4gYWN0aW9uSXRlbUNvbmZpZy52YWx1ZTtcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVQbHVnaW5JbnN0YW5jZSA9IChlbGVtZW50LCBhY3Rpb25JdGVtKSA9PiB7XG4gIC8vIEluIHRoaXMgY2FzZSwgd2UgZGVmaW5lIHBsdWdpbkluc3RhbmNlIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBjb250YWluZXIgZWxlbWVudFxuICBjb25zdCBwbHVnaW5FbGVtZW50SWQgPSBhY3Rpb25JdGVtPy5jb25maWc/LnRhcmdldD8ucGx1Z2luRWxlbWVudDtcbiAgcmV0dXJuIHBsdWdpbkVsZW1lbnRJZCA/IHF1ZXJ5Q29udGFpbmVyRWxlbWVudChwbHVnaW5FbGVtZW50SWQpIDogbnVsbDtcbn07XG5cbmV4cG9ydCBjb25zdCByZW5kZXJQbHVnaW4gPSAoY29udGFpbmVyRWxlbWVudCwgcmVmU3RhdGUsIGFjdGlvbkl0ZW0pID0+IHtcbiAgY29uc3QgZnJvbnRlbmRNb2R1bGUgPSBnZXRGcm9udGVuZE1vZHVsZSgpO1xuICBpZiAoIWZyb250ZW5kTW9kdWxlKSByZXR1cm47XG4gIGNvbnN0IGluc3RhbmNlID0gZnJvbnRlbmRNb2R1bGUuZ2V0SW5zdGFuY2UoY29udGFpbmVyRWxlbWVudCk7XG4gIGNvbnN0IG9iamVjdElkID0gYWN0aW9uSXRlbS5jb25maWcudGFyZ2V0Lm9iamVjdElkO1xuXG4gIGNvbnN0IHJlbmRlclNwbGluZSA9IChzcGxpbmUpID0+IHtcbiAgICBpZiAoIXNwbGluZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHNwbGluZSBhcHAgcGFzc2VkIHRvIHJlbmRlclNwbGluZScpO1xuICAgIH1cbiAgICBjb25zdCBvYmogPSBvYmplY3RJZCAmJiBzcGxpbmUuZmluZE9iamVjdEJ5SWQob2JqZWN0SWQpO1xuICAgIGlmICghb2JqKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHtQTFVHSU5fU1BMSU5FOiBwcm9wc30gPSByZWZTdGF0ZTtcbiAgICBpZiAocHJvcHMucG9zaXRpb25YICE9IG51bGwpIHtcbiAgICAgIG9iai5wb3NpdGlvbi54ID0gcHJvcHMucG9zaXRpb25YO1xuICAgIH1cbiAgICBpZiAocHJvcHMucG9zaXRpb25ZICE9IG51bGwpIHtcbiAgICAgIG9iai5wb3NpdGlvbi55ID0gcHJvcHMucG9zaXRpb25ZO1xuICAgIH1cbiAgICBpZiAocHJvcHMucG9zaXRpb25aICE9IG51bGwpIHtcbiAgICAgIG9iai5wb3NpdGlvbi56ID0gcHJvcHMucG9zaXRpb25aO1xuICAgIH1cbiAgICBpZiAocHJvcHMucm90YXRpb25YICE9IG51bGwpIHtcbiAgICAgIG9iai5yb3RhdGlvbi54ID0gcHJvcHMucm90YXRpb25YO1xuICAgIH1cbiAgICBpZiAocHJvcHMucm90YXRpb25ZICE9IG51bGwpIHtcbiAgICAgIG9iai5yb3RhdGlvbi55ID0gcHJvcHMucm90YXRpb25ZO1xuICAgIH1cbiAgICBpZiAocHJvcHMucm90YXRpb25aICE9IG51bGwpIHtcbiAgICAgIG9iai5yb3RhdGlvbi56ID0gcHJvcHMucm90YXRpb25aO1xuICAgIH1cbiAgICBpZiAocHJvcHMuc2NhbGVYICE9IG51bGwpIHtcbiAgICAgIG9iai5zY2FsZS54ID0gcHJvcHMuc2NhbGVYO1xuICAgIH1cbiAgICBpZiAocHJvcHMuc2NhbGVZICE9IG51bGwpIHtcbiAgICAgIG9iai5zY2FsZS55ID0gcHJvcHMuc2NhbGVZO1xuICAgIH1cbiAgICBpZiAocHJvcHMuc2NhbGVaICE9IG51bGwpIHtcbiAgICAgIG9iai5zY2FsZS56ID0gcHJvcHMuc2NhbGVaO1xuICAgIH1cbiAgfTtcblxuICBpZiAoaW5zdGFuY2UpIHtcbiAgICAvLyBSZW5kZXIgc3BsaW5lIGlmIHRoZSBhcHAgaW5zdGFuY2UgaXMgYWxyZWFkeSBsb2FkZWRcbiAgICByZW5kZXJTcGxpbmUoaW5zdGFuY2Uuc3BsaW5lKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBPdGhlcndpc2UsIHN0b3JlIGxhdGVzdCByZW5kZXIgYXMgYSBjYWxsYmFjayB0byBmaXJlIHdoZW4gbG9hZGVkXG4gICAgZnJvbnRlbmRNb2R1bGUuc2V0TG9hZEhhbmRsZXIoY29udGFpbmVyRWxlbWVudCwgcmVuZGVyU3BsaW5lKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGNsZWFyUGx1Z2luID0gKCkgPT4ge1xuICAvLyBOb3QgdXNlZCBieSB0aGlzIHBsdWdpblxuICByZXR1cm4gbnVsbDtcbn07XG4iXSwibmFtZXMiOlsiY2xlYXJQbHVnaW4iLCJjcmVhdGVQbHVnaW5JbnN0YW5jZSIsImdldFBsdWdpbkNvbmZpZyIsImdldFBsdWdpbkRlc3RpbmF0aW9uIiwiZ2V0UGx1Z2luRHVyYXRpb24iLCJnZXRQbHVnaW5PcmlnaW4iLCJyZW5kZXJQbHVnaW4iLCJxdWVyeUNvbnRhaW5lckVsZW1lbnQiLCJlbGVtZW50SWQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRGcm9udGVuZE1vZHVsZSIsIndpbmRvdyIsIldlYmZsb3ciLCJyZXF1aXJlIiwiZGlmZmVyZW5jZSIsImFycjEiLCJhcnIyIiwiZmlsdGVyIiwieCIsImluY2x1ZGVzIiwiYWN0aW9uSXRlbUNvbmZpZyIsImtleSIsInZhbHVlIiwiREVGQVVMVF9WQUxVRVMiLCJPYmplY3QiLCJmcmVlemUiLCJwb3NpdGlvblgiLCJwb3NpdGlvblkiLCJwb3NpdGlvbloiLCJyb3RhdGlvblgiLCJyb3RhdGlvblkiLCJyb3RhdGlvbloiLCJzY2FsZVgiLCJzY2FsZVkiLCJzY2FsZVoiLCJyZWZTdGF0ZSIsImFjdGlvbkl0ZW0iLCJkZXN0aW5hdGlvbiIsImNvbmZpZyIsImRlc3RpbmF0aW9uS2V5cyIsImtleXMiLCJzdGF0ZUtleXMiLCJkaWZmS2V5cyIsImxlbmd0aCIsIm9yaWdpbiIsInJlZHVjZSIsInJlc3VsdCIsImVsZW1lbnQiLCJwbHVnaW5FbGVtZW50SWQiLCJ0YXJnZXQiLCJwbHVnaW5FbGVtZW50IiwiY29udGFpbmVyRWxlbWVudCIsImZyb250ZW5kTW9kdWxlIiwiaW5zdGFuY2UiLCJnZXRJbnN0YW5jZSIsIm9iamVjdElkIiwicmVuZGVyU3BsaW5lIiwic3BsaW5lIiwiRXJyb3IiLCJvYmoiLCJmaW5kT2JqZWN0QnlJZCIsIlBMVUdJTl9TUExJTkUiLCJwcm9wcyIsInBvc2l0aW9uIiwieSIsInoiLCJyb3RhdGlvbiIsInNjYWxlIiwic2V0TG9hZEhhbmRsZXIiXSwibWFwcGluZ3MiOiJBQUFBLHNCQUFzQjs7Ozs7Ozs7Ozs7SUF3SFRBLFdBQVc7ZUFBWEE7O0lBM0RBQyxvQkFBb0I7ZUFBcEJBOztJQXBEQUMsZUFBZTtlQUFmQTs7SUFnREFDLG9CQUFvQjtlQUFwQkE7O0lBNUNBQyxpQkFBaUI7ZUFBakJBOztJQWlCQUMsZUFBZTtlQUFmQTs7SUFxQ0FDLFlBQVk7ZUFBWkE7OztBQWpFYixNQUFNQyx3QkFBd0IsQ0FBQ0MsWUFDN0JDLFNBQVNDLGFBQWEsQ0FBQyxDQUFDLFlBQVksRUFBRUYsVUFBVSxFQUFFLENBQUM7QUFFckQsTUFBTUcsb0JBQW9CLElBQU1DLE9BQU9DLE9BQU8sQ0FBQ0MsT0FBTyxDQUFDO0FBRXZELE1BQU1DLGFBQWEsQ0FBQ0MsTUFBTUMsT0FBU0QsS0FBS0UsTUFBTSxDQUFDLENBQUNDLElBQU0sQ0FBQ0YsS0FBS0csUUFBUSxDQUFDRDtBQUU5RCxNQUFNakIsa0JBQWtCLENBQUNtQixrQkFBa0JDO0lBQ2hELE9BQU9ELGlCQUFpQkUsS0FBSyxDQUFDRCxJQUFJO0FBQ3BDO0FBRU8sTUFBTWxCLG9CQUFvQjtJQUMvQiwwQkFBMEI7SUFDMUIsT0FBTztBQUNUO0FBRUEsTUFBTW9CLGlCQUFpQkMsT0FBT0MsTUFBTSxDQUFDO0lBQ25DQyxXQUFXO0lBQ1hDLFdBQVc7SUFDWEMsV0FBVztJQUNYQyxXQUFXO0lBQ1hDLFdBQVc7SUFDWEMsV0FBVztJQUNYQyxRQUFRO0lBQ1JDLFFBQVE7SUFDUkMsUUFBUTtBQUNWO0FBRU8sTUFBTTlCLGtCQUFrQixDQUFDK0IsVUFBVUM7SUFDeEMseURBQXlEO0lBQ3pELE1BQU1DLGNBQWNELFdBQVdFLE1BQU0sQ0FBQ2hCLEtBQUs7SUFDM0MsTUFBTWlCLGtCQUFr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

}),
1407: (function (__unused_webpack_module, exports, __webpack_require__) {
/* eslint-env browser */ // Importing directly to avoid importing the entire shared-utils package.
// eslint-disable-next-line webflow/package-boundaries

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    clearPlugin: function() {
        return clearPlugin;
    },
    createPluginInstance: function() {
        return createPluginInstance;
    },
    getPluginConfig: function() {
        return getPluginConfig;
    },
    getPluginDestination: function() {
        return getPluginDestination;
    },
    getPluginDuration: function() {
        return getPluginDuration;
    },
    getPluginOrigin: function() {
        return getPluginOrigin;
    },
    renderPlugin: function() {
        return renderPlugin;
    }
});
const _normalizeColor = __webpack_require__(380);
const getPluginConfig = (actionItemConfig, key)=>{
    return actionItemConfig.value[key];
};
const getPluginDuration = ()=>{
    // Not used by this plugin
    return null;
};
const getPluginOrigin = (refState, actionItem)=>{
    if (refState) {
        return refState;
    }
    // Determine which props we care about in the destination
    const destination = actionItem.config.value;
    // Look up root variable to parse origin values
    const objectId = actionItem.config.target.objectId;
    const computedValue = getComputedStyle(document.documentElement).getPropertyValue(objectId);
    if (destination.size != null) {
        return {
            size: parseInt(computedValue, 10)
        };
    }
    if (destination.unit === '%' || destination.unit === '-') {
        return {
            size: parseFloat(computedValue)
        };
    }
    if (destination.red != null && destination.green != null && destination.blue != null) {
        return (0, _normalizeColor.normalizeColor)(computedValue);
    }
};
const getPluginDestination = (actionItemConfig)=>{
    return actionItemConfig.value;
};
const createPluginInstance = ()=>{
    // Not used by this plugin
    return null;
};
const variableHandlers = {
    color: {
        match: ({ red, green, blue, alpha })=>[
                red,
                green,
                blue,
                alpha
            ].every((x)=>x != null),
        getValue: ({ red, green, blue, alpha })=>`rgba(${red}, ${green}, ${blue}, ${alpha})`
    },
    // Size, Percentage, and Unitless variables.
    size: {
        match: ({ size })=>size != null,
        getValue: ({ size }, unit)=>{
            switch(unit){
                case '-':
                    return size;
                default:
                    return `${size}${unit}`;
            }
        }
    }
};
const renderPlugin = (_, refState, actionItem)=>{
    const { target: { objectId }, value: { unit } } = actionItem.config;
    const props = refState.PLUGIN_VARIABLE;
    const handler = Object.values(variableHandlers).find((h)=>h.match(props, unit));
    if (handler) {
        document.documentElement.style.setProperty(objectId, handler.getValue(props, unit));
    }
};
const clearPlugin = (ref, actionItem)=>{
    const objectId = actionItem.config.target.objectId;
    document.documentElement.style.removeProperty(objectId);
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIklYMlZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG4vLyBJbXBvcnRpbmcgZGlyZWN0bHkgdG8gYXZvaWQgaW1wb3J0aW5nIHRoZSBlbnRpcmUgc2hhcmVkLXV0aWxzIHBhY2thZ2UuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgd2ViZmxvdy9wYWNrYWdlLWJvdW5kYXJpZXNcbmltcG9ydCB7bm9ybWFsaXplQ29sb3J9IGZyb20gJy4uL3NoYXJlZC11dGlscy9ub3JtYWxpemVDb2xvcic7XG5cbmV4cG9ydCBjb25zdCBnZXRQbHVnaW5Db25maWcgPSAoYWN0aW9uSXRlbUNvbmZpZywga2V5KSA9PiB7XG4gIHJldHVybiBhY3Rpb25JdGVtQ29uZmlnLnZhbHVlW2tleV07XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0UGx1Z2luRHVyYXRpb24gPSAoKSA9PiB7XG4gIC8vIE5vdCB1c2VkIGJ5IHRoaXMgcGx1Z2luXG4gIHJldHVybiBudWxsO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFBsdWdpbk9yaWdpbiA9IChyZWZTdGF0ZSwgYWN0aW9uSXRlbSkgPT4ge1xuICBpZiAocmVmU3RhdGUpIHtcbiAgICByZXR1cm4gcmVmU3RhdGU7XG4gIH1cblxuICAvLyBEZXRlcm1pbmUgd2hpY2ggcHJvcHMgd2UgY2FyZSBhYm91dCBpbiB0aGUgZGVzdGluYXRpb25cbiAgY29uc3QgZGVzdGluYXRpb24gPSBhY3Rpb25JdGVtLmNvbmZpZy52YWx1ZTtcblxuICAvLyBMb29rIHVwIHJvb3QgdmFyaWFibGUgdG8gcGFyc2Ugb3JpZ2luIHZhbHVlc1xuICBjb25zdCBvYmplY3RJZCA9IGFjdGlvbkl0ZW0uY29uZmlnLnRhcmdldC5vYmplY3RJZDtcbiAgY29uc3QgY29tcHV0ZWRWYWx1ZSA9IGdldENvbXB1dGVkU3R5bGUoXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50XG4gICkuZ2V0UHJvcGVydHlWYWx1ZShvYmplY3RJZCk7XG5cbiAgaWYgKGRlc3RpbmF0aW9uLnNpemUgIT0gbnVsbCkge1xuICAgIHJldHVybiB7c2l6ZTogcGFyc2VJbnQoY29tcHV0ZWRWYWx1ZSwgMTApfTtcbiAgfVxuXG4gIGlmIChkZXN0aW5hdGlvbi51bml0ID09PSAnJScgfHwgZGVzdGluYXRpb24udW5pdCA9PT0gJy0nKSB7XG4gICAgcmV0dXJuIHtzaXplOiBwYXJzZUZsb2F0KGNvbXB1dGVkVmFsdWUpfTtcbiAgfVxuXG4gIGlmIChcbiAgICBkZXN0aW5hdGlvbi5yZWQgIT0gbnVsbCAmJlxuICAgIGRlc3RpbmF0aW9uLmdyZWVuICE9IG51bGwgJiZcbiAgICBkZXN0aW5hdGlvbi5ibHVlICE9IG51bGxcbiAgKSB7XG4gICAgcmV0dXJuIG5vcm1hbGl6ZUNvbG9yKGNvbXB1dGVkVmFsdWUpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0UGx1Z2luRGVzdGluYXRpb24gPSAoYWN0aW9uSXRlbUNvbmZpZykgPT4ge1xuICByZXR1cm4gYWN0aW9uSXRlbUNvbmZpZy52YWx1ZTtcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVQbHVnaW5JbnN0YW5jZSA9ICgpID0+IHtcbiAgLy8gTm90IHVzZWQgYnkgdGhpcyBwbHVnaW5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5jb25zdCB2YXJpYWJsZUhhbmRsZXJzID0ge1xuICBjb2xvcjoge1xuICAgIG1hdGNoOiAoe3JlZCwgZ3JlZW4sIGJsdWUsIGFscGhhfSkgPT5cbiAgICAgIFtyZWQsIGdyZWVuLCBibHVlLCBhbHBoYV0uZXZlcnkoKHgpID0+IHggIT0gbnVsbCksXG4gICAgZ2V0VmFsdWU6ICh7cmVkLCBncmVlbiwgYmx1ZSwgYWxwaGF9KSA9PlxuICAgICAgYHJnYmEoJHtyZWR9LCAke2dyZWVufSwgJHtibHVlfSwgJHthbHBoYX0pYCxcbiAgfSxcblxuICAvLyBTaXplLCBQZXJjZW50YWdlLCBhbmQgVW5pdGxlc3MgdmFyaWFibGVzLlxuICBzaXplOiB7XG4gICAgbWF0Y2g6ICh7c2l6ZX0pID0+IHNpemUgIT0gbnVsbCxcbiAgICBnZXRWYWx1ZTogKHtzaXplfSwgdW5pdCkgPT4ge1xuICAgICAgc3dpdGNoICh1bml0KSB7XG4gICAgICAgIGNhc2UgJy0nOlxuICAgICAgICAgIHJldHVybiBzaXplO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBgJHtzaXplfSR7dW5pdH1gO1xuICAgICAgfVxuICAgIH0sXG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgcmVuZGVyUGx1Z2luID0gKF8sIHJlZlN0YXRlLCBhY3Rpb25JdGVtKSA9PiB7XG4gIGNvbnN0IHtcbiAgICB0YXJnZXQ6IHtvYmplY3RJZH0sXG4gICAgdmFsdWU6IHt1bml0fSxcbiAgfSA9IGFjdGlvbkl0ZW0uY29uZmlnO1xuICBjb25zdCBwcm9wcyA9IHJlZlN0YXRlLlBMVUdJTl9WQVJJQUJMRTtcblxuICBjb25zdCBoYW5kbGVyID0gT2JqZWN0LnZhbHVlcyh2YXJpYWJsZUhhbmRsZXJzKS5maW5kKChoKSA9PlxuICAgIGgubWF0Y2gocHJvcHMsIHVuaXQpXG4gICk7XG5cbiAgaWYgKGhhbmRsZXIpIHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXG4gICAgICBvYmplY3RJZCxcbiAgICAgIGhhbmRsZXIuZ2V0VmFsdWUocHJvcHMsIHVuaXQpXG4gICAgKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGNsZWFyUGx1Z2luID0gKHJlZiwgYWN0aW9uSXRlbSkgPT4ge1xuICBjb25zdCBvYmplY3RJZCA9IGFjdGlvbkl0ZW0uY29uZmlnLnRhcmdldC5vYmplY3RJZDtcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KG9iamVjdElkKTtcbn07XG4iXSwibmFtZXMiOlsiY2xlYXJQbHVnaW4iLCJjcmVhdGVQbHVnaW5JbnN0YW5jZSIsImdldFBsdWdpbkNvbmZpZyIsImdldFBsdWdpbkRlc3RpbmF0aW9uIiwiZ2V0UGx1Z2luRHVyYXRpb24iLCJnZXRQbHVnaW5PcmlnaW4iLCJyZW5kZXJQbHVnaW4iLCJhY3Rpb25JdGVtQ29uZmlnIiwia2V5IiwidmFsdWUiLCJyZWZTdGF0ZSIsImFjdGlvbkl0ZW0iLCJkZXN0aW5hdGlvbiIsImNvbmZpZyIsIm9iamVjdElkIiwidGFyZ2V0IiwiY29tcHV0ZWRWYWx1ZSIsImdldENvbXB1dGVkU3R5bGUiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImdldFByb3BlcnR5VmFsdWUiLCJzaXplIiwicGFyc2VJbnQiLCJ1bml0IiwicGFyc2VGbG9hdCIsInJlZCIsImdyZWVuIiwiYmx1ZSIsIm5vcm1hbGl6ZUNvbG9yIiwidmFyaWFibGVIYW5kbGVycyIsImNvbG9yIiwibWF0Y2giLCJhbHBoYSIsImV2ZXJ5IiwieCIsImdldFZhbHVlIiwiXyIsInByb3BzIiwiUExVR0lOX1ZBUklBQkxFIiwiaGFuZGxlciIsIk9iamVjdCIsInZhbHVlcyIsImZpbmQiLCJoIiwic3R5bGUiLCJzZXRQcm9wZXJ0eSIsInJlZiIsInJlbW92ZVByb3BlcnR5Il0sIm1hcHBpbmdzIjoiQUFBQSxzQkFBc0IsR0FFdEIseUVBQXlFO0FBQ3pFLHNEQUFzRDs7Ozs7Ozs7Ozs7O0lBNkZ6Q0EsV0FBVztlQUFYQTs7SUE5Q0FDLG9CQUFvQjtlQUFwQkE7O0lBNUNBQyxlQUFlO2VBQWZBOztJQXdDQUMsb0JBQW9CO2VBQXBCQTs7SUFwQ0FDLGlCQUFpQjtlQUFqQkE7O0lBS0FDLGVBQWU7ZUFBZkE7O0lBOERBQyxZQUFZO2VBQVpBOzs7Z0NBekVnQjtBQUV0QixNQUFNSixrQkFBa0IsQ0FBQ0ssa0JBQWtCQztJQUNoRCxPQUFPRCxpQkFBaUJFLEtBQUssQ0FBQ0QsSUFBSTtBQUNwQztBQUVPLE1BQU1KLG9CQUFvQjtJQUMvQiwwQkFBMEI7SUFDMUIsT0FBTztBQUNUO0FBRU8sTUFBTUMsa0JBQWtCLENBQUNLLFVBQVVDO0lBQ3hDLElBQUlELFVBQVU7UUFDWixPQUFPQTtJQUNUO0lBRUEseURB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

}),
3690: (function (__unused_webpack_module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "pluginMethodMap", ({
    enumerable: true,
    get: function() {
        return pluginMethodMap;
    }
}));
const _sharedconstants = __webpack_require__(7087);
const _IX2Lottie = /*#__PURE__*/ _interop_require_wildcard(__webpack_require__(7377));
const _IX2Spline = /*#__PURE__*/ _interop_require_wildcard(__webpack_require__(2866));
const _IX2Rive = /*#__PURE__*/ _interop_require_wildcard(__webpack_require__(2570));
const _IX2Variable = /*#__PURE__*/ _interop_require_wildcard(__webpack_require__(1407));
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
const pluginMethodMap = new Map([
    [
        _sharedconstants.ActionTypeConsts.PLUGIN_LOTTIE,
        {
            ..._IX2Lottie
        }
    ],
    [
        _sharedconstants.ActionTypeConsts.PLUGIN_SPLINE,
        {
            ..._IX2Spline
        }
    ],
    [
        _sharedconstants.ActionTypeConsts.PLUGIN_RIVE,
        {
            ..._IX2Rive
        }
    ],
    [
        _sharedconstants.ActionTypeConsts.PLUGIN_VARIABLE,
        {
            ..._IX2Variable
        }
    ]
]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QWN0aW9uVHlwZUNvbnN0c30gZnJvbSAnQHBhY2thZ2VzL3N5c3RlbXMvaXgyL3NoYXJlZC1jb25zdGFudHMnO1xuXG5pbXBvcnQgKiBhcyBsb3R0aWUgZnJvbSAnLi9JWDJMb3R0aWUnO1xuaW1wb3J0ICogYXMgc3BsaW5lIGZyb20gJy4vSVgyU3BsaW5lJztcbmltcG9ydCAqIGFzIHJpdmUgZnJvbSAnLi9JWDJSaXZlJztcbmltcG9ydCAqIGFzIHZhcmlhYmxlIGZyb20gJy4vSVgyVmFyaWFibGUnO1xuXG5leHBvcnQgdHlwZSBQbHVnaW5UeXBlID1cbiAgfCB0eXBlb2YgQWN0aW9uVHlwZUNvbnN0cy5QTFVHSU5fTE9UVElFXG4gIHwgdHlwZW9mIEFjdGlvblR5cGVDb25zdHMuUExVR0lOX1NQTElORVxuICB8IHR5cGVvZiBBY3Rpb25UeXBlQ29uc3RzLlBMVUdJTl9WQVJJQUJMRVxuICB8IHR5cGVvZiBBY3Rpb25UeXBlQ29uc3RzLlBMVUdJTl9SSVZFO1xuXG5leHBvcnQgY29uc3QgcGx1Z2luTWV0aG9kTWFwID0gbmV3IE1hcChbXG4gIFtBY3Rpb25UeXBlQ29uc3RzLlBMVUdJTl9MT1RUSUUsIHsuLi5sb3R0aWV9XSxcbiAgW0FjdGlvblR5cGVDb25zdHMuUExVR0lOX1NQTElORSwgey4uLnNwbGluZX1dLFxuICBbQWN0aW9uVHlwZUNvbnN0cy5QTFVHSU5fUklWRSwgey4uLnJpdmV9XSxcbiAgW0FjdGlvblR5cGVDb25zdHMuUExVR0lOX1ZBUklBQkxFLCB7Li4udmFyaWFibGV9XSxcbl0pO1xuIl0sIm5hbWVzIjpbInBsdWdpbk1ldGhvZE1hcCIsIk1hcCIsIkFjdGlvblR5cGVDb25zdHMiLCJQTFVHSU5fTE9UVElFIiwibG90dGllIiwiUExVR0lOX1NQTElORSIsInNwbGluZSIsIlBMVUdJTl9SSVZFIiwicml2ZSIsIlBMVUdJTl9WQVJJQUJMRSIsInZhcmlhYmxlIl0sIm1hcHBpbmdzIjoiOzs7OytCQWFhQTs7O2VBQUFBOzs7aUNBYmtCO21FQUVQO21FQUNBO2lFQUNGO3FFQUNJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRbkIsTUFBTUEsa0JBQWtCLElBQUlDLElBQUk7SUFDckM7UUFBQ0MsaUNBQWdCLENBQUNDLGFBQWE7UUFBRTtZQUFDLEdBQUdDLFVBQU07UUFBQTtLQUFFO0lBQzdDO1FBQUNGLGlDQUFnQixDQUFDRyxhQUFhO1FBQUU7WUFBQyxHQUFHQyxVQUFNO1FBQUE7S0FBRTtJQUM3QztRQUFDSixpQ0FBZ0IsQ0FBQ0ssV0FBVztRQUFFO1lBQUMsR0FBR0MsUUFBSTtRQUFBO0tBQUU7SUFDekM7UUFBQ04saUNBQWdCLENBQUNPLGVBQWU7UUFBRTtZQUFDLEdBQUdDLFlBQVE7UUFBQTtLQUFFO0NBQ2xEIn0=

}),
8023: (function (__unused_webpack_module, exports) {

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    IX2_ACTION_LIST_PLAYBACK_CHANGED: function() {
        return IX2_ACTION_LIST_PLAYBACK_CHANGED;
    },
    IX2_ANIMATION_FRAME_CHANGED: function() {
        return IX2_ANIMATION_FRAME_CHANGED;
    },
    IX2_CLEAR_REQUESTED: function() {
        return IX2_CLEAR_REQUESTED;
    },
    IX2_ELEMENT_STATE_CHANGED: function() {
        return IX2_ELEMENT_STATE_CHANGED;
    },
    IX2_EVENT_LISTENER_ADDED: function() {
        return IX2_EVENT_LISTENER_ADDED;
    },
    IX2_EVENT_STATE_CHANGED: function() {
        return IX2_EVENT_STATE_CHANGED;
    },
    IX2_INSTANCE_ADDED: function() {
        return IX2_INSTANCE_ADDED;
    },
    IX2_INSTANCE_REMOVED: function() {
        return IX2_INSTANCE_REMOVED;
    },
    IX2_INSTANCE_STARTED: function() {
        return IX2_INSTANCE_STARTED;
    },
    IX2_MEDIA_QUERIES_DEFINED: function() {
        return IX2_MEDIA_QUERIES_DEFINED;
    },
    IX2_PARAMETER_CHANGED: function() {
        return IX2_PARAMETER_CHANGED;
    },
    IX2_PLAYBACK_REQUESTED: function() {
        return IX2_PLAYBACK_REQUESTED;
    },
    IX2_PREVIEW_REQUESTED: function() {
        return IX2_PREVIEW_REQUESTED;
    },
    IX2_RAW_DATA_IMPORTED: function() {
        return IX2_RAW_DATA_IMPORTED;
    },
    IX2_SESSION_INITIALIZED: function() {
        return IX2_SESSION_INITIALIZED;
    },
    IX2_SESSION_STARTED: function() {
        return IX2_SESSION_STARTED;
    },
    IX2_SESSION_STOPPED: function() {
        return IX2_SESSION_STOPPED;
    },
    IX2_STOP_REQUESTED: function() {
        return IX2_STOP_REQUESTED;
    },
    IX2_TEST_FRAME_RENDERED: function() {
        return IX2_TEST_FRAME_RENDERED;
    },
    IX2_VIEWPORT_WIDTH_CHANGED: function() {
        return IX2_VIEWPORT_WIDTH_CHANGED;
    }
});
const IX2_RAW_DATA_IMPORTED = 'IX2_RAW_DATA_IMPORTED';
const IX2_SESSION_INITIALIZED = 'IX2_SESSION_INITIALIZED';
const IX2_SESSION_STARTED = 'IX2_SESSION_STARTED';
const IX2_SESSION_STOPPED = 'IX2_SESSION_STOPPED';
const IX2_PREVIEW_REQUESTED = 'IX2_PREVIEW_REQUESTED';
const IX2_PLAYBACK_REQUESTED = 'IX2_PLAYBACK_REQUESTED';
const IX2_STOP_REQUESTED = 'IX2_STOP_REQUESTED';
const IX2_CLEAR_REQUESTED = 'IX2_CLEAR_REQUESTED';
const IX2_EVENT_LISTENER_ADDED = 'IX2_EVENT_LISTENER_ADDED';
const IX2_EVENT_STATE_CHANGED = 'IX2_EVENT_STATE_CHANGED';
const IX2_ANIMATION_FRAME_CHANGED = 'IX2_ANIMATION_FRAME_CHANGED';
const IX2_PARAMETER_CHANGED = 'IX2_PARAMETER_CHANGED';
const IX2_INSTANCE_ADDED = 'IX2_INSTANCE_ADDED';
const IX2_INSTANCE_STARTED = 'IX2_INSTANCE_STARTED';
const IX2_INSTANCE_REMOVED = 'IX2_INSTANCE_REMOVED';
const IX2_ELEMENT_STATE_CHANGED = 'IX2_ELEMENT_STATE_CHANGED';
const IX2_ACTION_LIST_PLAYBACK_CHANGED = 'IX2_ACTION_LIST_PLAYBACK_CHANGED';
const IX2_VIEWPORT_WIDTH_CHANGED = 'IX2_VIEWPORT_WIDTH_CHANGED';
const IX2_MEDIA_QUERIES_DEFINED = 'IX2_MEDIA_QUERIES_DEFINED';
const IX2_TEST_FRAME_RENDERED = 'IX2_TEST_FRAME_RENDERED';

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIklYMkVuZ2luZUFjdGlvblR5cGVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBJWDJfUkFXX0RBVEFfSU1QT1JURUQgPSAnSVgyX1JBV19EQVRBX0lNUE9SVEVEJztcbmV4cG9ydCBjb25zdCBJWDJfU0VTU0lPTl9JTklUSUFMSVpFRCA9ICdJWDJfU0VTU0lPTl9JTklUSUFMSVpFRCc7XG5leHBvcnQgY29uc3QgSVgyX1NFU1NJT05fU1RBUlRFRCA9ICdJWDJfU0VTU0lPTl9TVEFSVEVEJztcbmV4cG9ydCBjb25zdCBJWDJfU0VTU0lPTl9TVE9QUEVEID0gJ0lYMl9TRVNTSU9OX1NUT1BQRUQnO1xuZXhwb3J0IGNvbnN0IElYMl9QUkVWSUVXX1JFUVVFU1RFRCA9ICdJWDJfUFJFVklFV19SRVFVRVNURUQnO1xuZXhwb3J0IGNvbnN0IElYMl9QTEFZQkFDS19SRVFVRVNURUQgPSAnSVgyX1BMQVlCQUNLX1JFUVVFU1RFRCc7XG5leHBvcnQgY29uc3QgSVgyX1NUT1BfUkVRVUVTVEVEID0gJ0lYMl9TVE9QX1JFUVVFU1RFRCc7XG5leHBvcnQgY29uc3QgSVgyX0NMRUFSX1JFUVVFU1RFRCA9ICdJWDJfQ0xFQVJfUkVRVUVTVEVEJztcbmV4cG9ydCBjb25zdCBJWDJfRVZFTlRfTElTVEVORVJfQURERUQgPSAnSVgyX0VWRU5UX0xJU1RFTkVSX0FEREVEJztcbmV4cG9ydCBjb25zdCBJWDJfRVZFTlRfU1RBVEVfQ0hBTkdFRCA9ICdJWDJfRVZFTlRfU1RBVEVfQ0hBTkdFRCc7XG5leHBvcnQgY29uc3QgSVgyX0FOSU1BVElPTl9GUkFNRV9DSEFOR0VEID0gJ0lYMl9BTklNQVRJT05fRlJBTUVfQ0hBTkdFRCc7XG5leHBvcnQgY29uc3QgSVgyX1BBUkFNRVRFUl9DSEFOR0VEID0gJ0lYMl9QQVJBTUVURVJfQ0hBTkdFRCc7XG5leHBvcnQgY29uc3QgSVgyX0lOU1RBTkNFX0FEREVEID0gJ0lYMl9JTlNUQU5DRV9BRERFRCc7XG5leHBvcnQgY29uc3QgSVgyX0lOU1RBTkNFX1NUQVJURUQgPSAnSVgyX0lOU1RBTkNFX1NUQVJURUQnO1xuZXhwb3J0IGNvbnN0IElYMl9JTlNUQU5DRV9SRU1PVkVEID0gJ0lYMl9JTlNUQU5DRV9SRU1PVkVEJztcbmV4cG9ydCBjb25zdCBJWDJfRUxFTUVOVF9TVEFURV9DSEFOR0VEID0gJ0lYMl9FTEVNRU5UX1NUQVRFX0NIQU5HRUQnO1xuZXhwb3J0IGNvbnN0IElYMl9BQ1RJT05fTElTVF9QTEFZQkFDS19DSEFOR0VEID1cbiAgJ0lYMl9BQ1RJT05fTElTVF9QTEFZQkFDS19DSEFOR0VEJztcbmV4cG9ydCBjb25zdCBJWDJfVklFV1BPUlRfV0lEVEhfQ0hBTkdFRCA9ICdJWDJfVklFV1BPUlRfV0lEVEhfQ0hBTkdFRCc7XG5leHBvcnQgY29uc3QgSVgyX01FRElBX1FVRVJJRVNfREVGSU5FRCA9ICdJWDJfTUVESUFfUVVFUklFU19ERUZJTkVEJztcbmV4cG9ydCBjb25zdCBJWDJfVEVTVF9GUkFNRV9SRU5ERVJFRCA9ICdJWDJfVEVTVF9GUkFNRV9SRU5ERVJFRCc7XG4iXSwibmFtZXMiOlsiSVgyX0FDVElPTl9MSVNUX1BMQVlCQUNLX0NIQU5HRUQiLCJJWDJfQU5JTUFUSU9OX0ZSQU1FX0NIQU5HRUQiLCJJWDJfQ0xFQVJfUkVRVUVTVEVEIiwiSVgyX0VMRU1FTlRfU1RBVEVfQ0hBTkdFRCIsIklYMl9FVkVOVF9MSVNURU5FUl9BRERFRCIsIklYMl9FVkVOVF9TVEFURV9DSEFOR0VEIiwiSVgyX0lOU1RBTkNFX0FEREVEIiwiSVgyX0lOU1RBTkNFX1JFTU9WRUQiLCJJWDJfSU5TVEFOQ0VfU1RBUlRFRCIsIklYMl9NRURJQV9RVUVSSUVTX0RFRklORUQiLCJJWDJfUEFSQU1FVEVSX0NIQU5HRUQiLCJJWDJfUExBWUJBQ0tfUkVRVUVTVEVEIiwiSVgyX1BSRVZJRVdfUkVRVUVTVEVEIiwiSVgyX1JBV19EQVRBX0lNUE9SVEVEIiwiSVgyX1NFU1NJT05fSU5JVElBTElaRUQiLCJJWDJfU0VTU0lPTl9TVEFSVEVEIiwiSVgyX1NFU1NJT05fU1RPUFBFRCIsIklYMl9TVE9QX1JFUVVFU1RFRCIsIklYMl9URVNUX0ZSQU1FX1JFTkRFUkVEIiwiSVgyX1ZJRVdQT1JUX1dJRFRIX0NIQU5HRUQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBZ0JhQSxnQ0FBZ0M7ZUFBaENBOztJQU5BQywyQkFBMkI7ZUFBM0JBOztJQUhBQyxtQkFBbUI7ZUFBbkJBOztJQVFBQyx5QkFBeUI7ZUFBekJBOztJQVBBQyx3QkFBd0I7ZUFBeEJBOztJQUNBQyx1QkFBdUI7ZUFBdkJBOztJQUdBQyxrQkFBa0I7ZUFBbEJBOztJQUVBQyxvQkFBb0I7ZUFBcEJBOztJQURBQyxvQkFBb0I7ZUFBcEJBOztJQU1BQyx5QkFBeUI7ZUFBekJBOztJQVJBQyxxQkFBcUI7ZUFBckJBOztJQU5BQyxzQkFBc0I7ZUFBdEJBOztJQURBQyxxQkFBcUI7ZUFBckJBOztJQUpBQyxxQkFBcUI7ZUFBckJBOztJQUNBQyx1QkFBdUI7ZUFBdkJBOztJQUNBQyxtQkFBbUI7ZUFBbkJBOztJQUNBQyxtQkFBbUI7ZUFBbkJBOztJQUdBQyxrQkFBa0I7ZUFBbEJBOztJQWNBQyx1QkFBdUI7ZUFBdkJBOztJQUZBQywwQkFBMEI7ZUFBMUJBOzs7QUFsQk4sTUFBTU4sd0JBQXdCO0FBQzlCLE1BQU1DLDBCQUEwQjtBQUNoQyxNQUFNQyxzQkFBc0I7QUFDNUIsTUFBTUMsc0JBQXNCO0FBQzVCLE1BQU1KLHdCQUF3QjtBQUM5QixNQUFNRCx5QkFBeUI7QUFDL0IsTUFBTU0scUJBQXFCO0FBQzNCLE1BQU1mLHNCQUFzQjtBQUM1QixNQUFNRSwyQkFBMkI7QUFDakMsTUFBTUMsMEJBQTBCO0FBQ2hDLE1BQU1KLDhCQUE4QjtBQUNwQyxNQUFNUyx3QkFBd0I7QUFDOUIsTUFBTUoscUJBQXFCO0FBQzNCLE1BQU1FLHVCQUF1QjtBQUM3QixNQUFNRCx1QkFBdUI7QUFDN0IsTUFBTUosNEJBQTRCO0FBQ2xDLE1BQU1ILG1DQUNYO0FBQ0ssTUFBTW1CLDZCQUE2QjtBQUNuQyxNQUFNViw0QkFBNEI7QUFDbEMsTUFBTVMsMEJBQTBCIn0=

}),
2686: (function (__unused_webpack_module, exports) {

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ABSTRACT_NODE: function() {
        return ABSTRACT_NODE;
    },
    AUTO: function() {
        return AUTO;
    },
    BACKGROUND: function() {
        return BACKGROUND;
    },
    BACKGROUND_COLOR: function() {
        return BACKGROUND_COLOR;
    },
    BAR_DELIMITER: function() {
        return BAR_DELIMITER;
    },
    BORDER_COLOR: function() {
        return BORDER_COLOR;
    },
    BOUNDARY_SELECTOR: function() {
        return BOUNDARY_SELECTOR;
    },
    CHILDREN: function() {
        return CHILDREN;
    },
    COLON_DELIMITER: function() {
        return COLON_DELIMITER;
    },
    COLOR: function() {
        return COLOR;
    },
    COMMA_DELIMITER: function() {
        return COMMA_DELIMITER;
    },
    CONFIG_UNIT: function() {
        return CONFIG_UNIT;
    },
    CONFIG_VALUE: function() {
        return CONFIG_VALUE;
    },
    CONFIG_X_UNIT: function() {
        return CONFIG_X_UNIT;
    },
    CONFIG_X_VALUE: function() {
        return CONFIG_X_VALUE;
    },
    CONFIG_Y_UNIT: function() {
        return CONFIG_Y_UNIT;
    },
    CONFIG_Y_VALUE: function() {
        return CONFIG_Y_VALUE;
    },
    CONFIG_Z_UNIT: function() {
        return CONFIG_Z_UNIT;
    },
    CONFIG_Z_VALUE: function() {
        return CONFIG_Z_VALUE;
    },
    DISPLAY: function() {
        return DISPLAY;
    },
    FILTER: function() {
        return FILTER;
    },
    FLEX: function() {
        return FLEX;
    },
    FONT_VARIATION_SETTINGS: function() {
        return FONT_VARIATION_SETTINGS;
    },
    HEIGHT: function() {
        return HEIGHT;
    },
    HTML_ELEMENT: function() {
        return HTML_ELEMENT;
    },
    IMMEDIATE_CHILDREN: function() {
        return IMMEDIATE_CHILDREN;
    },
    IX2_ID_DELIMITER: function() {
        return IX2_ID_DELIMITER;
    },
    OPACITY: function() {
        return OPACITY;
    },
    PARENT: function() {
        return PARENT;
    },
    PLAIN_OBJECT: function() {
        return PLAIN_OBJECT;
    },
    PRESERVE_3D: function() {
        return PRESERVE_3D;
    },
    RENDER_GENERAL: function() {
        return RENDER_GENERAL;
    },
    RENDER_PLUGIN: function() {
        return RENDER_PLUGIN;
    },
    RENDER_STYLE: function() {
        return RENDER_STYLE;
    },
    RENDER_TRANSFORM: function() {
        return RENDER_TRANSFORM;
    },
    ROTATE_X: function() {
        return ROTATE_X;
    },
    ROTATE_Y: function() {
        return ROTATE_Y;
    },
    ROTATE_Z: function() {
        return ROTATE_Z;
    },
    SCALE_3D: function() {
        return SCALE_3D;
    },
    SCALE_X: function() {
        return SCALE_X;
    },
    SCALE_Y: function() {
        return SCALE_Y;
    },
    SCALE_Z: function() {
        return SCALE_Z;
    },
    SIBLINGS: function() {
        return SIBLINGS;
    },
    SKEW: function() {
        return SKEW;
    },
    SKEW_X: function() {
        return SKEW_X;
    },
    SKEW_Y: function() {
        return SKEW_Y;
    },
    TRANSFORM: function() {
        return TRANSFORM;
    },
    TRANSLATE_3D: function() {
        return TRANSLATE_3D;
    },
    TRANSLATE_X: function() {
        return TRANSLATE_X;
    },
    TRANSLATE_Y: function() {
        return TRANSLATE_Y;
    },
    TRANSLATE_Z: function() {
        return TRANSLATE_Z;
    },
    WF_PAGE: function() {
        return WF_PAGE;
    },
    WIDTH: function() {
        return WIDTH;
    },
    WILL_CHANGE: function() {
        return WILL_CHANGE;
    },
    W_MOD_IX: function() {
        return W_MOD_IX;
    },
    W_MOD_JS: function() {
        return W_MOD_JS;
    }
});
const IX2_ID_DELIMITER = '|';
const WF_PAGE = 'data-wf-page';
const W_MOD_JS = 'w-mod-js';
const W_MOD_IX = 'w-mod-ix';
const BOUNDARY_SELECTOR = '.w-dyn-item';
const CONFIG_X_VALUE = 'xValue';
const CONFIG_Y_VALUE = 'yValue';
const CONFIG_Z_VALUE = 'zValue';
const CONFIG_VALUE = 'value';
const CONFIG_X_UNIT = 'xUnit';
const CONFIG_Y_UNIT = 'yUnit';
const CONFIG_Z_UNIT = 'zUnit';
const CONFIG_UNIT = 'unit';
const TRANSFORM = 'transform';
const TRANSLATE_X = 'translateX';
const TRANSLATE_Y = 'translateY';
const TRANSLATE_Z = 'translateZ';
const TRANSLATE_3D = 'translate3d';
const SCALE_X = 'scaleX';
const SCALE_Y = 'scaleY';
const SCALE_Z = 'scaleZ';
const SCALE_3D = 'scale3d';
const ROTATE_X = 'rotateX';
const ROTATE_Y = 'rotateY';
const ROTATE_Z = 'rotateZ';
const SKEW = 'skew';
const SKEW_X = 'skewX';
const SKEW_Y = 'skewY';
const OPACITY = 'opacity';
const FILTER = 'filter';
const FONT_VARIATION_SETTINGS = 'font-variation-settings';
const WIDTH = 'width';
const HEIGHT = 'height';
const BACKGROUND_COLOR = 'backgroundColor';
const BACKGROUND = 'background';
const BORDER_COLOR = 'borderColor';
const COLOR = 'color';
const DISPLAY = 'display';
const FLEX = 'flex';
const WILL_CHANGE = 'willChange';
const AUTO = 'AUTO';
const COMMA_DELIMITER = ',';
const COLON_DELIMITER = ':';
const BAR_DELIMITER = '|';
const CHILDREN = 'CHILDREN';
const IMMEDIATE_CHILDREN = 'IMMEDIATE_CHILDREN';
const SIBLINGS = 'SIBLINGS';
const PARENT = 'PARENT';
const PRESERVE_3D = 'preserve-3d';
const HTML_ELEMENT = 'HTML_ELEMENT';
const PLAIN_OBJECT = 'PLAIN_OBJECT';
const ABSTRACT_NODE = 'ABSTRACT_NODE';
const RENDER_TRANSFORM = 'RENDER_TRANSFORM';
const RENDER_GENERAL = 'RENDER_GENERAL';
const RENDER_STYLE = 'RENDER_STYLE';
const RENDER_PLUGIN = 'RENDER_PLUGIN';

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIklYMkVuZ2luZUNvbnN0YW50cy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgSVgyX0lEX0RFTElNSVRFUiA9ICd8Jztcbi8qKlxuICogU3RvcmVzIHBhZ2VJZCBvZiB0aGUgY3VycmVudCBwYWdlLCBzbyBpdCBjYW4gYmUgYWNjZXNzZWQgaW4gdGhlIElYMkJyb3dzZXJBcGlcbiAqL1xuZXhwb3J0IGNvbnN0IFdGX1BBR0UgPSAnZGF0YS13Zi1wYWdlJztcbmV4cG9ydCBjb25zdCBXX01PRF9KUyA9ICd3LW1vZC1qcyc7XG5leHBvcnQgY29uc3QgV19NT0RfSVggPSAndy1tb2QtaXgnO1xuZXhwb3J0IGNvbnN0IEJPVU5EQVJZX1NFTEVDVE9SID0gJy53LWR5bi1pdGVtJztcbmV4cG9ydCBjb25zdCBDT05GSUdfWF9WQUxVRSA9ICd4VmFsdWUnO1xuZXhwb3J0IGNvbnN0IENPTkZJR19ZX1ZBTFVFID0gJ3lWYWx1ZSc7XG5leHBvcnQgY29uc3QgQ09ORklHX1pfVkFMVUUgPSAnelZhbHVlJztcbmV4cG9ydCBjb25zdCBDT05GSUdfVkFMVUUgPSAndmFsdWUnO1xuZXhwb3J0IGNvbnN0IENPTkZJR19YX1VOSVQgPSAneFVuaXQnO1xuZXhwb3J0IGNvbnN0IENPTkZJR19ZX1VOSVQgPSAneVVuaXQnO1xuZXhwb3J0IGNvbnN0IENPTkZJR19aX1VOSVQgPSAnelVuaXQnO1xuZXhwb3J0IGNvbnN0IENPTkZJR19VTklUID0gJ3VuaXQnO1xuZXhwb3J0IGNvbnN0IFRSQU5TRk9STSA9ICd0cmFuc2Zvcm0nO1xuZXhwb3J0IGNvbnN0IFRSQU5TTEFURV9YID0gJ3RyYW5zbGF0ZVgnO1xuZXhwb3J0IGNvbnN0IFRSQU5TTEFURV9ZID0gJ3RyYW5zbGF0ZVknO1xuZXhwb3J0IGNvbnN0IFRSQU5TTEFURV9aID0gJ3RyYW5zbGF0ZVonO1xuZXhwb3J0IGNvbnN0IFRSQU5TTEFURV8zRCA9ICd0cmFuc2xhdGUzZCc7XG5leHBvcnQgY29uc3QgU0NBTEVfWCA9ICdzY2FsZVgnO1xuZXhwb3J0IGNvbnN0IFNDQUxFX1kgPSAnc2NhbGVZJztcbmV4cG9ydCBjb25zdCBTQ0FMRV9aID0gJ3NjYWxlWic7XG5leHBvcnQgY29uc3QgU0NBTEVfM0QgPSAnc2NhbGUzZCc7XG5leHBvcnQgY29uc3QgUk9UQVRFX1ggPSAncm90YXRlWCc7XG5leHBvcnQgY29uc3QgUk9UQVRFX1kgPSAncm90YXRlWSc7XG5leHBvcnQgY29uc3QgUk9UQVRFX1ogPSAncm90YXRlWic7XG5leHBvcnQgY29uc3QgU0tFVyA9ICdza2V3JztcbmV4cG9ydCBjb25zdCBTS0VXX1ggPSAnc2tld1gnO1xuZXhwb3J0IGNvbnN0IFNLRVdfWSA9ICdza2V3WSc7XG5leHBvcnQgY29uc3QgT1BBQ0lUWSA9ICdvcGFjaXR5JztcbmV4cG9ydCBjb25zdCBGSUxURVIgPSAnZmlsdGVyJztcbmV4cG9ydCBjb25zdCBGT05UX1ZBUklBVElPTl9TRVRUSU5HUyA9ICdmb250LXZhcmlhdGlvbi1zZXR0aW5ncyc7XG5leHBvcnQgY29uc3QgV0lEVEggPSAnd2lkdGgnO1xuZXhwb3J0IGNvbnN0IEhFSUdIVCA9ICdoZWlnaHQnO1xuZXhwb3J0IGNvbnN0IEJBQ0tHUk9VTkRfQ09MT1IgPSAnYmFja2dyb3VuZENvbG9yJztcbmV4cG9ydCBjb25zdCBCQUNLR1JPVU5EID0gJ2JhY2tncm91bmQnO1xuZXhwb3J0IGNvbnN0IEJPUkRFUl9DT0xPUiA9ICdib3JkZXJDb2xvcic7XG5leHBvcnQgY29uc3QgQ09MT1IgPSAnY29sb3InO1xuZXhwb3J0IGNvbnN0IERJU1BMQVkgPSAnZGlzcGxheSc7XG5leHBvcnQgY29uc3QgRkxFWCA9ICdmbGV4JztcbmV4cG9ydCBjb25zdCBXSUxMX0NIQU5HRSA9ICd3aWxsQ2hhbmdlJztcbmV4cG9ydCBjb25zdCBBVVRPID0gJ0FVVE8nO1xuZXhwb3J0IGNvbnN0IENPTU1BX0RFTElNSVRFUiA9ICcsJztcbmV4cG9ydCBjb25zdCBDT0xPTl9ERUxJTUlURVIgPSAnOic7XG5leHBvcnQgY29uc3QgQkFSX0RFTElNSVRFUiA9ICd8JztcbmV4cG9ydCBjb25zdCBDSElMRFJFTiA9ICdDSElMRFJFTic7XG5leHBvcnQgY29uc3QgSU1NRURJQVRFX0NISUxEUkVOID0gJ0lNTUVESUFURV9DSElMRFJFTic7XG5leHBvcnQgY29uc3QgU0lCTElOR1MgPSAnU0lCTElOR1MnO1xuZXhwb3J0IGNvbnN0IFBBUkVOVCA9ICdQQVJFTlQnO1xuZXhwb3J0IGNvbnN0IFBSRVNFUlZFXzNEID0gJ3ByZXNlcnZlLTNkJztcbmV4cG9ydCBjb25zdCBIVE1MX0VMRU1FTlQgPSAnSFRNTF9FTEVNRU5UJztcbmV4cG9ydCBjb25zdCBQTEFJTl9PQkpFQ1QgPSAnUExBSU5fT0JKRUNUJztcbmV4cG9ydCBjb25zdCBBQlNUUkFDVF9OT0RFID0gJ0FCU1RSQUNUX05PREUnO1xuZXhwb3J0IGNvbnN0IFJFTkRFUl9UUkFOU0ZPUk0gPSAnUkVOREVSX1RSQU5TRk9STSc7XG5leHBvcnQgY29uc3QgUkVOREVSX0dFTkVSQUwgPSAnUkVOREVSX0dFTkVSQUwnO1xuZXhwb3J0IGNvbnN0IFJFTkRFUl9TVFlMRSA9ICdSRU5ERVJfU1RZTEUnO1xuZXhwb3J0IGNvbnN0IFJFTkRFUl9QTFVHSU4gPSAnUkVOREVSX1BMVUdJTic7XG4iXSwibmFtZXMiOlsiQUJTVFJBQ1RfTk9ERSIsIkFVVE8iLCJCQUNLR1JPVU5EIiwiQkFDS0dST1VORF9DT0xPUiIsIkJBUl9ERUxJTUlURVIiLCJCT1JERVJfQ09MT1IiLCJCT1VOREFSWV9TRUxFQ1RPUiIsIkNISUxEUkVOIiwiQ09MT05fREVMSU1JVEVSIiwiQ09MT1IiLCJDT01NQV9ERUxJTUlURVIiLCJDT05GSUdfVU5JVCIsIkNPTkZJR19WQUxVRSIsIkNPTkZJR19YX1VOSVQiLCJDT05GSUdfWF9WQUxVRSIsIkNPTkZJR19ZX1VOSVQiLCJDT05GSUdfWV9WQUxVRSIsIkNPTkZJR19aX1VOSVQiLCJDT05GSUdfWl9WQUxVRSIsIkRJU1BMQVkiLCJGSUxURVIiLCJGTEVYIiwiRk9OVF9WQVJJQVRJT05fU0VUVElOR1MiLCJIRUlHSFQiLCJIVE1MX0VMRU1FTlQiLCJJTU1FRElBVEVfQ0hJTERSRU4iLCJJWDJfSURfREVMSU1JVEVSIiwiT1BBQ0lUWSIsIlBBUkVOVCIsIlBMQUlOX09CSkVDVCIsIlBSRVNFUlZFXzNEIiwiUkVOREVSX0dFTkVSQUwiLCJSRU5ERVJfUExVR0lOIiwiUkVOREVSX1NUWUxFIiwiUkVOREVSX1RSQU5TRk9STSIsIlJPVEFURV9YIiwiUk9UQVRFX1kiLCJST1RBVEVfWiIsIlNDQUxFXzNEIiwiU0NBTEVfWCIsIlNDQUxFX1kiLCJTQ0FMRV9aIiwiU0lCTElOR1MiLCJTS0VXIiwiU0tFV19YIiwiU0tFV19ZIiwiVFJBTlNGT1JNIiwiVFJBTlNMQVRFXzNEIiwiVFJBTlNMQVRFX1giLCJUUkFOU0xBVEVfWSIsIlRSQU5TTEFURV9aIiwiV0ZfUEFHRSIsIldJRFRIIiwiV0lMTF9DSEFOR0UiLCJXX01PRF9JWCIsIldfTU9EX0pTIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQXNEYUEsYUFBYTtlQUFiQTs7SUFYQUMsSUFBSTtlQUFKQTs7SUFOQUMsVUFBVTtlQUFWQTs7SUFEQUMsZ0JBQWdCO2VBQWhCQTs7SUFVQUMsYUFBYTtlQUFiQTs7SUFSQUMsWUFBWTtlQUFaQTs7SUEvQkFDLGlCQUFpQjtlQUFqQkE7O0lBd0NBQyxRQUFRO2VBQVJBOztJQUZBQyxlQUFlO2VBQWZBOztJQU5BQyxLQUFLO2VBQUxBOztJQUtBQyxlQUFlO2VBQWZBOztJQTdCQUMsV0FBVztlQUFYQTs7SUFKQUMsWUFBWTtlQUFaQTs7SUFDQUMsYUFBYTtlQUFiQTs7SUFKQUMsY0FBYztlQUFkQTs7SUFLQUMsYUFBYTtlQUFiQTs7SUFKQUMsY0FBYztlQUFkQTs7SUFLQUMsYUFBYTtlQUFiQTs7SUFKQUMsY0FBYztlQUFkQTs7SUE4QkFDLE9BQU87ZUFBUEE7O0lBUkFDLE1BQU07ZUFBTkE7O0lBU0FDLElBQUk7ZUFBSkE7O0lBUkFDLHVCQUF1QjtlQUF2QkE7O0lBRUFDLE1BQU07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

}),
262: (function (__unused_webpack_module, exports) {

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ActionAppliesTo: function() {
        return ActionAppliesTo;
    },
    ActionTypeConsts: function() {
        return ActionTypeConsts;
    }
});
const ActionTypeConsts = {
    TRANSFORM_MOVE: 'TRANSFORM_MOVE',
    TRANSFORM_SCALE: 'TRANSFORM_SCALE',
    TRANSFORM_ROTATE: 'TRANSFORM_ROTATE',
    TRANSFORM_SKEW: 'TRANSFORM_SKEW',
    STYLE_OPACITY: 'STYLE_OPACITY',
    STYLE_SIZE: 'STYLE_SIZE',
    STYLE_FILTER: 'STYLE_FILTER',
    STYLE_FONT_VARIATION: 'STYLE_FONT_VARIATION',
    STYLE_BACKGROUND_COLOR: 'STYLE_BACKGROUND_COLOR',
    STYLE_BORDER: 'STYLE_BORDER',
    STYLE_TEXT_COLOR: 'STYLE_TEXT_COLOR',
    OBJECT_VALUE: 'OBJECT_VALUE',
    PLUGIN_LOTTIE: 'PLUGIN_LOTTIE',
    PLUGIN_SPLINE: 'PLUGIN_SPLINE',
    PLUGIN_RIVE: 'PLUGIN_RIVE',
    PLUGIN_VARIABLE: 'PLUGIN_VARIABLE',
    GENERAL_DISPLAY: 'GENERAL_DISPLAY',
    GENERAL_START_ACTION: 'GENERAL_START_ACTION',
    GENERAL_CONTINUOUS_ACTION: 'GENERAL_CONTINUOUS_ACTION',
    // TODO: Clean these up below because they're not used at this time
    GENERAL_COMBO_CLASS: 'GENERAL_COMBO_CLASS',
    GENERAL_STOP_ACTION: 'GENERAL_STOP_ACTION',
    GENERAL_LOOP: 'GENERAL_LOOP',
    STYLE_BOX_SHADOW: 'STYLE_BOX_SHADOW'
};
const ActionAppliesTo = {
    ELEMENT: 'ELEMENT',
    ELEMENT_CLASS: 'ELEMENT_CLASS',
    TRIGGER_ELEMENT: 'TRIGGER_ELEMENT'
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuaW1hdGlvbi1hY3Rpb25zLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBBY3Rpb25UeXBlQ29uc3RzID0ge1xuICBUUkFOU0ZPUk1fTU9WRTogJ1RSQU5TRk9STV9NT1ZFJyBhcyBjb25zdCxcbiAgVFJBTlNGT1JNX1NDQUxFOiAnVFJBTlNGT1JNX1NDQUxFJyBhcyBjb25zdCxcbiAgVFJBTlNGT1JNX1JPVEFURTogJ1RSQU5TRk9STV9ST1RBVEUnIGFzIGNvbnN0LFxuICBUUkFOU0ZPUk1fU0tFVzogJ1RSQU5TRk9STV9TS0VXJyBhcyBjb25zdCxcbiAgU1RZTEVfT1BBQ0lUWTogJ1NUWUxFX09QQUNJVFknIGFzIGNvbnN0LFxuICBTVFlMRV9TSVpFOiAnU1RZTEVfU0laRScgYXMgY29uc3QsXG4gIFNUWUxFX0ZJTFRFUjogJ1NUWUxFX0ZJTFRFUicgYXMgY29uc3QsXG4gIFNUWUxFX0ZPTlRfVkFSSUFUSU9OOiAnU1RZTEVfRk9OVF9WQVJJQVRJT04nIGFzIGNvbnN0LFxuICBTVFlMRV9CQUNLR1JPVU5EX0NPTE9SOiAnU1RZTEVfQkFDS0dST1VORF9DT0xPUicgYXMgY29uc3QsXG4gIFNUWUxFX0JPUkRFUjogJ1NUWUxFX0JPUkRFUicgYXMgY29uc3QsXG4gIFNUWUxFX1RFWFRfQ09MT1I6ICdTVFlMRV9URVhUX0NPTE9SJyBhcyBjb25zdCxcbiAgT0JKRUNUX1ZBTFVFOiAnT0JKRUNUX1ZBTFVFJyBhcyBjb25zdCxcbiAgUExVR0lOX0xPVFRJRTogJ1BMVUdJTl9MT1RUSUUnIGFzIGNvbnN0LFxuICBQTFVHSU5fU1BMSU5FOiAnUExVR0lOX1NQTElORScgYXMgY29uc3QsXG4gIFBMVUdJTl9SSVZFOiAnUExVR0lOX1JJVkUnIGFzIGNvbnN0LFxuICBQTFVHSU5fVkFSSUFCTEU6ICdQTFVHSU5fVkFSSUFCTEUnIGFzIGNvbnN0LFxuICBHRU5FUkFMX0RJU1BMQVk6ICdHRU5FUkFMX0RJU1BMQVknIGFzIGNvbnN0LFxuICBHRU5FUkFMX1NUQVJUX0FDVElPTjogJ0dFTkVSQUxfU1RBUlRfQUNUSU9OJyBhcyBjb25zdCxcbiAgR0VORVJBTF9DT05USU5VT1VTX0FDVElPTjogJ0dFTkVSQUxfQ09OVElOVU9VU19BQ1RJT04nIGFzIGNvbnN0LFxuXG4gIC8vIFRPRE86IENsZWFuIHRoZXNlIHVwIGJlbG93IGJlY2F1c2UgdGhleSdyZSBub3QgdXNlZCBhdCB0aGlzIHRpbWVcbiAgR0VORVJBTF9DT01CT19DTEFTUzogJ0dFTkVSQUxfQ09NQk9fQ0xBU1MnIGFzIGNvbnN0LFxuICBHRU5FUkFMX1NUT1BfQUNUSU9OOiAnR0VORVJBTF9TVE9QX0FDVElPTicgYXMgY29uc3QsXG4gIEdFTkVSQUxfTE9PUDogJ0dFTkVSQUxfTE9PUCcgYXMgY29uc3QsXG4gIFNUWUxFX0JPWF9TSEFET1c6ICdTVFlMRV9CT1hfU0hBRE9XJyBhcyBjb25zdCxcbn0gYXMgY29uc3Q7XG5cbmV4cG9ydCB0eXBlIEFjdGlvblR5cGVJZFR5cGUgPSBrZXlvZiB0eXBlb2YgQWN0aW9uVHlwZUNvbnN0cztcblxuZXhwb3J0IGNvbnN0IEFjdGlvbkFwcGxpZXNUbyA9IHtcbiAgRUxFTUVOVDogJ0VMRU1FTlQnIGFzIGNvbnN0LFxuICBFTEVNRU5UX0NMQVNTOiAnRUxFTUVOVF9DTEFTUycgYXMgY29uc3QsXG4gIFRSSUdHRVJfRUxFTUVOVDogJ1RSSUdHRVJfRUxFTUVOVCcgYXMgY29uc3QsXG59IGFzIGNvbnN0O1xuIl0sIm5hbWVzIjpbIkFjdGlvbkFwcGxpZXNUbyIsIkFjdGlvblR5cGVDb25zdHMiLCJUUkFOU0ZPUk1fTU9WRSIsIlRSQU5TRk9STV9TQ0FMRSIsIlRSQU5TRk9STV9ST1RBVEUiLCJUUkFOU0ZPUk1fU0tFVyIsIlNUWUxFX09QQUNJVFkiLCJTVFlMRV9TSVpFIiwiU1RZTEVfRklMVEVSIiwiU1RZTEVfRk9OVF9WQVJJQVRJT04iLCJTVFlMRV9CQUNLR1JPVU5EX0NPTE9SIiwiU1RZTEVfQk9SREVSIiwiU1RZTEVfVEVYVF9DT0xPUiIsIk9CSkVDVF9WQUxVRSIsIlBMVUdJTl9MT1RUSUUiLCJQTFVHSU5fU1BMSU5FIiwiUExVR0lOX1JJVkUiLCJQTFVHSU5fVkFSSUFCTEUiLCJHRU5FUkFMX0RJU1BMQVkiLCJHRU5FUkFMX1NUQVJUX0FDVElPTiIsIkdFTkVSQUxfQ09OVElOVU9VU19BQ1RJT04iLCJHRU5FUkFMX0NPTUJPX0NMQVNTIiwiR0VORVJBTF9TVE9QX0FDVElPTiIsIkdFTkVSQUxfTE9PUCIsIlNUWUxFX0JPWF9TSEFET1ciLCJFTEVNRU5UIiwiRUxFTUVOVF9DTEFTUyIsIlRSSUdHRVJfRUxFTUVOVCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUE4QmFBLGVBQWU7ZUFBZkE7O0lBOUJBQyxnQkFBZ0I7ZUFBaEJBOzs7QUFBTixNQUFNQSxtQkFBbUI7SUFDOUJDLGdCQUFnQjtJQUNoQkMsaUJBQWlCO0lBQ2pCQyxrQkFBa0I7SUFDbEJDLGdCQUFnQjtJQUNoQkMsZUFBZTtJQUNmQyxZQUFZO0lBQ1pDLGNBQWM7SUFDZEMsc0JBQXNCO0lBQ3RCQyx3QkFBd0I7SUFDeEJDLGNBQWM7SUFDZEMsa0JBQWtCO0lBQ2xCQyxjQUFjO0lBQ2RDLGVBQWU7SUFDZkMsZUFBZTtJQUNmQyxhQUFhO0lBQ2JDLGlCQUFpQjtJQUNqQkMsaUJBQWlCO0lBQ2pCQyxzQkFBc0I7SUFDdEJDLDJCQUEyQjtJQUUzQixtRUFBbUU7SUFDbkVDLHFCQUFxQjtJQUNyQkMscUJBQXFCO0lBQ3JCQyxjQUFjO0lBQ2RDLGtCQUFrQjtBQUNwQjtBQUlPLE1BQU14QixrQkFBa0I7SUFDN0J5QixTQUFTO0lBQ1RDLGVBQWU7SUFDZkMsaUJBQWlCO0FBQ25CIn0=

}),
7087: (function (__unused_webpack_module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ActionTypeConsts: function() {
        return _animationactions.ActionTypeConsts;
    },
    IX2EngineActionTypes: function() {
        return _IX2EngineActionTypes;
    },
    IX2EngineConstants: function() {
        return _IX2EngineConstants;
    },
    QuickEffectIds: function() {
        return _triggerevents.QuickEffectIds;
    }
});
const _triggerevents = _export_star(__webpack_require__(1833), exports);
const _animationactions = _export_star(__webpack_require__(262), exports);
_export_star(__webpack_require__(8704), exports);
_export_star(__webpack_require__(3213), exports);
const _IX2EngineActionTypes = /*#__PURE__*/ _interop_require_wildcard(__webpack_require__(8023));
const _IX2EngineConstants = /*#__PURE__*/ _interop_require_wildcard(__webpack_require__(2686));
function _export_star(from, to) {
    Object.keys(from).forEach(function(k) {
        if (k !== "default" && !Object.prototype.hasOwnProperty.call(to, k)) {
            Object.defineProperty(to, k, {
                enumerable: true,
                get: function() {
                    return from[k];
                }
            });
        }
    });
    return from;
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gJy4vdHJpZ2dlci1ldmVudHMnO1xuZXhwb3J0ICogZnJvbSAnLi9hbmltYXRpb24tYWN0aW9ucyc7XG5leHBvcnQgKiBmcm9tICcuL3RyaWdnZXItaW50ZXJhY3Rpb25zJztcbmV4cG9ydCAqIGZyb20gJy4vcmVkdWNlZC1tb3Rpb24nO1xuXG5pbXBvcnQgKiBhcyBJWDJFbmdpbmVBY3Rpb25UeXBlcyBmcm9tICcuL0lYMkVuZ2luZUFjdGlvblR5cGVzJztcbmltcG9ydCAqIGFzIElYMkVuZ2luZUNvbnN0YW50cyBmcm9tICcuL0lYMkVuZ2luZUNvbnN0YW50cyc7XG5leHBvcnQge0lYMkVuZ2luZUFjdGlvblR5cGVzLCBJWDJFbmdpbmVDb25zdGFudHN9O1xuXG5leHBvcnQge0FjdGlvblR5cGVDb25zdHN9IGZyb20gJy4vYW5pbWF0aW9uLWFjdGlvbnMnO1xuZXhwb3J0IHtRdWlja0VmZmVjdElkc30gZnJvbSAnLi90cmlnZ2VyLWV2ZW50cyc7XG4iXSwibmFtZXMiOlsiQWN0aW9uVHlwZUNvbnN0cyIsIklYMkVuZ2luZUFjdGlvblR5cGVzIiwiSVgyRW5naW5lQ29uc3RhbnRzIiwiUXVpY2tFZmZlY3RJZHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBU1FBLGdCQUFnQjtlQUFoQkEsa0NBQWdCOztJQUZoQkMsb0JBQW9CO2VBQXBCQTs7SUFBc0JDLGtCQUFrQjtlQUFsQkE7O0lBR3RCQyxjQUFjO2VBQWRBLDZCQUFjOzs7NENBVlI7K0NBQ0E7cUJBQ0E7cUJBQ0E7OEVBRXdCOzRFQUNGIn0=

}),
3213: (function (__unused_webpack_module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "ReducedMotionTypes", ({
    enumerable: true,
    get: function() {
        return ReducedMotionTypes;
    }
}));
const _animationactions = __webpack_require__(262);
const { TRANSFORM_MOVE, TRANSFORM_SCALE, TRANSFORM_ROTATE, TRANSFORM_SKEW, STYLE_SIZE, STYLE_FILTER, STYLE_FONT_VARIATION } = _animationactions.ActionTypeConsts;
const ReducedMotionTypes = {
    [TRANSFORM_MOVE]: true,
    [TRANSFORM_SCALE]: true,
    [TRANSFORM_ROTATE]: true,
    [TRANSFORM_SKEW]: true,
    [STYLE_SIZE]: true,
    [STYLE_FILTER]: true,
    [STYLE_FONT_VARIATION]: true
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHVjZWQtbW90aW9uLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QWN0aW9uVHlwZUNvbnN0c30gZnJvbSAnLi9hbmltYXRpb24tYWN0aW9ucyc7XG5cbmNvbnN0IHtcbiAgVFJBTlNGT1JNX01PVkUsXG4gIFRSQU5TRk9STV9TQ0FMRSxcbiAgVFJBTlNGT1JNX1JPVEFURSxcbiAgVFJBTlNGT1JNX1NLRVcsXG4gIFNUWUxFX1NJWkUsXG4gIFNUWUxFX0ZJTFRFUixcbiAgU1RZTEVfRk9OVF9WQVJJQVRJT04sXG59ID0gQWN0aW9uVHlwZUNvbnN0cztcblxuLyoqXG4gKiBSZWR1Y2VkIE1vdGlvbjogQWN0aW9uIHR5cGVzIHRvIGJ5cGFzcyBkdXJpbmcgYHByZWZlcnMtcmVkdWNlZC1tb3Rpb25gXG4gKi9cblxuZXhwb3J0IGNvbnN0IFJlZHVjZWRNb3Rpb25UeXBlcyA9IHtcbiAgW1RSQU5TRk9STV9NT1ZFXTogdHJ1ZSxcbiAgW1RSQU5TRk9STV9TQ0FMRV06IHRydWUsXG4gIFtUUkFOU0ZPUk1fUk9UQVRFXTogdHJ1ZSxcbiAgW1RSQU5TRk9STV9TS0VXXTogdHJ1ZSxcbiAgW1NUWUxFX1NJWkVdOiB0cnVlLFxuICBbU1RZTEVfRklMVEVSXTogdHJ1ZSxcbiAgW1NUWUxFX0ZPTlRfVkFSSUFUSU9OXTogdHJ1ZSxcbn0gYXMgY29uc3Q7XG4iXSwibmFtZXMiOlsiUmVkdWNlZE1vdGlvblR5cGVzIiwiVFJBTlNGT1JNX01PVkUiLCJUUkFOU0ZPUk1fU0NBTEUiLCJUUkFOU0ZPUk1fUk9UQVRFIiwiVFJBTlNGT1JNX1NLRVciLCJTVFlMRV9TSVpFIiwiU1RZTEVfRklMVEVSIiwiU1RZTEVfRk9OVF9WQVJJQVRJT04iLCJBY3Rpb25UeXBlQ29uc3RzIl0sIm1hcHBpbmdzIjoiOzs7OytCQWdCYUE7OztlQUFBQTs7O2tDQWhCa0I7QUFFL0IsTUFBTSxFQUNKQyxjQUFjLEVBQ2RDLGVBQWUsRUFDZkMsZ0JBQWdCLEVBQ2hCQyxjQUFjLEVBQ2RDLFVBQVUsRUFDVkMsWUFBWSxFQUNaQyxvQkFBb0IsRUFDckIsR0FBR0Msa0NBQWdCO0FBTWIsTUFBTVIscUJBQXFCO0lBQ2hDLENBQUNDLGVBQWUsRUFBRTtJQUNsQixDQUFDQyxnQkFBZ0IsRUFBRTtJQUNuQixDQUFDQyxpQkFBaUIsRUFBRTtJQUNwQixDQUFDQyxlQUFlLEVBQUU7SUFDbEIsQ0FBQ0MsV0FBVyxFQUFFO0lBQ2QsQ0FBQ0MsYUFBYSxFQUFFO0lBQ2hCLENBQUNDLHFCQUFxQixFQUFFO0FBQzFCIn0=

}),
1833: (function (__unused_webpack_module, exports) {
/**
 * Event Type IDs
 */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    EventAppliesTo: function() {
        return EventAppliesTo;
    },
    EventBasedOn: function() {
        return EventBasedOn;
    },
    EventContinuousMouseAxes: function() {
        return EventContinuousMouseAxes;
    },
    EventLimitAffectedElements: function() {
        return EventLimitAffectedElements;
    },
    EventTypeConsts: function() {
        return EventTypeConsts;
    },
    QuickEffectDirectionConsts: function() {
        return QuickEffectDirectionConsts;
    },
    QuickEffectIds: function() {
        return QuickEffectIds;
    }
});
const EventTypeConsts = {
    NAVBAR_OPEN: 'NAVBAR_OPEN',
    NAVBAR_CLOSE: 'NAVBAR_CLOSE',
    TAB_ACTIVE: 'TAB_ACTIVE',
    TAB_INACTIVE: 'TAB_INACTIVE',
    SLIDER_ACTIVE: 'SLIDER_ACTIVE',
    SLIDER_INACTIVE: 'SLIDER_INACTIVE',
    DROPDOWN_OPEN: 'DROPDOWN_OPEN',
    DROPDOWN_CLOSE: 'DROPDOWN_CLOSE',
    MOUSE_CLICK: 'MOUSE_CLICK',
    MOUSE_SECOND_CLICK: 'MOUSE_SECOND_CLICK',
    MOUSE_DOWN: 'MOUSE_DOWN',
    MOUSE_UP: 'MOUSE_UP',
    MOUSE_OVER: 'MOUSE_OVER',
    MOUSE_OUT: 'MOUSE_OUT',
    MOUSE_MOVE: 'MOUSE_MOVE',
    MOUSE_MOVE_IN_VIEWPORT: 'MOUSE_MOVE_IN_VIEWPORT',
    SCROLL_INTO_VIEW: 'SCROLL_INTO_VIEW',
    SCROLL_OUT_OF_VIEW: 'SCROLL_OUT_OF_VIEW',
    SCROLLING_IN_VIEW: 'SCROLLING_IN_VIEW',
    ECOMMERCE_CART_OPEN: 'ECOMMERCE_CART_OPEN',
    ECOMMERCE_CART_CLOSE: 'ECOMMERCE_CART_CLOSE',
    PAGE_START: 'PAGE_START',
    PAGE_FINISH: 'PAGE_FINISH',
    PAGE_SCROLL_UP: 'PAGE_SCROLL_UP',
    PAGE_SCROLL_DOWN: 'PAGE_SCROLL_DOWN',
    PAGE_SCROLL: 'PAGE_SCROLL'
};
const EventAppliesTo = {
    ELEMENT: 'ELEMENT',
    CLASS: 'CLASS',
    PAGE: 'PAGE'
};
const EventBasedOn = {
    ELEMENT: 'ELEMENT',
    VIEWPORT: 'VIEWPORT'
};
const EventContinuousMouseAxes = {
    X_AXIS: 'X_AXIS',
    Y_AXIS: 'Y_AXIS'
};
const EventLimitAffectedElements = {
    CHILDREN: 'CHILDREN',
    SIBLINGS: 'SIBLINGS',
    IMMEDIATE_CHILDREN: 'IMMEDIATE_CHILDREN'
};
const QuickEffectIds = {
    FADE_EFFECT: 'FADE_EFFECT',
    SLIDE_EFFECT: 'SLIDE_EFFECT',
    GROW_EFFECT: 'GROW_EFFECT',
    SHRINK_EFFECT: 'SHRINK_EFFECT',
    SPIN_EFFECT: 'SPIN_EFFECT',
    FLY_EFFECT: 'FLY_EFFECT',
    POP_EFFECT: 'POP_EFFECT',
    FLIP_EFFECT: 'FLIP_EFFECT',
    JIGGLE_EFFECT: 'JIGGLE_EFFECT',
    PULSE_EFFECT: 'PULSE_EFFECT',
    DROP_EFFECT: 'DROP_EFFECT',
    BLINK_EFFECT: 'BLINK_EFFECT',
    BOUNCE_EFFECT: 'BOUNCE_EFFECT',
    FLIP_LEFT_TO_RIGHT_EFFECT: 'FLIP_LEFT_TO_RIGHT_EFFECT',
    FLIP_RIGHT_TO_LEFT_EFFECT: 'FLIP_RIGHT_TO_LEFT_EFFECT',
    RUBBER_BAND_EFFECT: 'RUBBER_BAND_EFFECT',
    JELLO_EFFECT: 'JELLO_EFFECT',
    GROW_BIG_EFFECT: 'GROW_BIG_EFFECT',
    SHRINK_BIG_EFFECT: 'SHRINK_BIG_EFFECT',
    PLUGIN_LOTTIE_EFFECT: 'PLUGIN_LOTTIE_EFFECT'
};
const QuickEffectDirectionConsts = {
    LEFT: 'LEFT',
    RIGHT: 'RIGHT',
    BOTTOM: 'BOTTOM',
    TOP: 'TOP',
    BOTTOM_LEFT: 'BOTTOM_LEFT',
    BOTTOM_RIGHT: 'BOTTOM_RIGHT',
    TOP_RIGHT: 'TOP_RIGHT',
    TOP_LEFT: 'TOP_LEFT',
    CLOCKWISE: 'CLOCKWISE',
    COUNTER_CLOCKWISE: 'COUNTER_CLOCKWISE'
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyaWdnZXItZXZlbnRzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogRXZlbnQgVHlwZSBJRHNcbiAqL1xuXG5leHBvcnQgY29uc3QgRXZlbnRUeXBlQ29uc3RzID0ge1xuICBOQVZCQVJfT1BFTjogJ05BVkJBUl9PUEVOJyBhcyBjb25zdCxcbiAgTkFWQkFSX0NMT1NFOiAnTkFWQkFSX0NMT1NFJyBhcyBjb25zdCxcbiAgVEFCX0FDVElWRTogJ1RBQl9BQ1RJVkUnIGFzIGNvbnN0LFxuICBUQUJfSU5BQ1RJVkU6ICdUQUJfSU5BQ1RJVkUnIGFzIGNvbnN0LFxuICBTTElERVJfQUNUSVZFOiAnU0xJREVSX0FDVElWRScgYXMgY29uc3QsXG4gIFNMSURFUl9JTkFDVElWRTogJ1NMSURFUl9JTkFDVElWRScgYXMgY29uc3QsXG4gIERST1BET1dOX09QRU46ICdEUk9QRE9XTl9PUEVOJyBhcyBjb25zdCxcbiAgRFJPUERPV05fQ0xPU0U6ICdEUk9QRE9XTl9DTE9TRScgYXMgY29uc3QsXG4gIE1PVVNFX0NMSUNLOiAnTU9VU0VfQ0xJQ0snIGFzIGNvbnN0LFxuICBNT1VTRV9TRUNPTkRfQ0xJQ0s6ICdNT1VTRV9TRUNPTkRfQ0xJQ0snIGFzIGNvbnN0LFxuICBNT1VTRV9ET1dOOiAnTU9VU0VfRE9XTicgYXMgY29uc3QsXG4gIE1PVVNFX1VQOiAnTU9VU0VfVVAnIGFzIGNvbnN0LFxuICBNT1VTRV9PVkVSOiAnTU9VU0VfT1ZFUicgYXMgY29uc3QsXG4gIE1PVVNFX09VVDogJ01PVVNFX09VVCcgYXMgY29uc3QsXG4gIE1PVVNFX01PVkU6ICdNT1VTRV9NT1ZFJyBhcyBjb25zdCxcbiAgTU9VU0VfTU9WRV9JTl9WSUVXUE9SVDogJ01PVVNFX01PVkVfSU5fVklFV1BPUlQnIGFzIGNvbnN0LFxuICBTQ1JPTExfSU5UT19WSUVXOiAnU0NST0xMX0lOVE9fVklFVycgYXMgY29uc3QsXG4gIFNDUk9MTF9PVVRfT0ZfVklFVzogJ1NDUk9MTF9PVVRfT0ZfVklFVycgYXMgY29uc3QsXG4gIFNDUk9MTElOR19JTl9WSUVXOiAnU0NST0xMSU5HX0lOX1ZJRVcnIGFzIGNvbnN0LFxuICBFQ09NTUVSQ0VfQ0FSVF9PUEVOOiAnRUNPTU1FUkNFX0NBUlRfT1BFTicgYXMgY29uc3QsXG4gIEVDT01NRVJDRV9DQVJUX0NMT1NFOiAnRUNPTU1FUkNFX0NBUlRfQ0xPU0UnIGFzIGNvbnN0LFxuICBQQUdFX1NUQVJUOiAnUEFHRV9TVEFSVCcgYXMgY29uc3QsXG4gIFBBR0VfRklOSVNIOiAnUEFHRV9GSU5JU0gnIGFzIGNvbnN0LFxuICBQQUdFX1NDUk9MTF9VUDogJ1BBR0VfU0NST0xMX1VQJyBhcyBjb25zdCxcbiAgUEFHRV9TQ1JPTExfRE9XTjogJ1BBR0VfU0NST0xMX0RPV04nIGFzIGNvbnN0LFxuICBQQUdFX1NDUk9MTDogJ1BBR0VfU0NST0xMJyBhcyBjb25zdCxcbn0gYXMgY29uc3Q7XG5cbi8qKlxuICogRXZlbnQgQ29uZmlnIEVudW1zXG4gKi9cblxuZXhwb3J0IGNvbnN0IEV2ZW50QXBwbGllc1RvID0ge1xuICBFTEVNRU5UOiAnRUxFTUVOVCcgYXMgY29uc3QsXG4gIENMQVNTOiAnQ0xBU1MnIGFzIGNvbnN0LFxuICBQQUdFOiAnUEFHRScgYXMgY29uc3QsXG59IGFzIGNvbnN0O1xuXG5leHBvcnQgY29uc3QgRXZlbnRCYXNlZE9uID0ge1xuICBFTEVNRU5UOiAnRUxFTUVOVCcgYXMgY29uc3QsXG4gIFZJRVdQT1JUOiAnVklFV1BPUlQnIGFzIGNvbnN0LFxufSBhcyBjb25zdDtcblxuZXhwb3J0IGNvbnN0IEV2ZW50Q29udGludW91c01vdXNlQXhlcyA9IHtcbiAgWF9BWElTOiAnWF9BWElTJyBhcyBjb25zdCxcbiAgWV9BWElTOiAnWV9BWElTJyBhcyBjb25zdCxcbn0gYXMgY29uc3Q7XG5cbmV4cG9ydCBjb25zdCBFdmVudExpbWl0QWZmZWN0ZWRFbGVtZW50cyA9IHtcbiAgQ0hJTERSRU46ICdDSElMRFJFTicgYXMgY29uc3QsXG4gIFNJQkxJTkdTOiAnU0lCTElOR1MnIGFzIGNvbnN0LFxuICBJTU1FRElBVEVfQ0hJTERSRU46ICdJTU1FRElBVEVfQ0hJTERSRU4nIGFzIGNvbnN0LFxufSBhcyBjb25zdDtcblxuLyoqXG4gKiBRdWljayBFZmZlY3QgRW51bXNcbiAqL1xuZXhwb3J0IGNvbnN0IFF1aWNrRWZmZWN0SWRzID0ge1xuICBGQURFX0VGRkVDVDogJ0ZBREVfRUZGRUNUJyBhcyBjb25zdCxcbiAgU0xJREVfRUZGRUNUOiAnU0xJREVfRUZGRUNUJyBhcyBjb25zdCxcbiAgR1JPV19FRkZFQ1Q6ICdHUk9XX0VGRkVDVCcgYXMgY29uc3QsXG4gIFNIUklOS19FRkZFQ1Q6ICdTSFJJTktfRUZGRUNUJyBhcyBjb25zdCxcbiAgU1BJTl9FRkZFQ1Q6ICdTUElOX0VGRkVDVCcgYXMgY29uc3QsXG4gIEZMWV9FRkZFQ1Q6ICdGTFlfRUZGRUNUJyBhcyBjb25zdCxcbiAgUE9QX0VGRkVDVDogJ1BPUF9FRkZFQ1QnIGFzIGNvbnN0LFxuICBGTElQX0VGRkVDVDogJ0ZMSVBfRUZGRUNUJyBhcyBjb25zdCxcbiAgSklHR0xFX0VGRkVDVDogJ0pJR0dMRV9FRkZFQ1QnIGFzIGNvbnN0LFxuICBQVUxTRV9FRkZFQ1Q6ICdQVUxTRV9FRkZFQ1QnIGFzIGNvbnN0LFxuICBEUk9QX0VGRkVDVDogJ0RST1BfRUZGRUNUJyBhcyBjb25zdCxcbiAgQkxJTktfRUZGRUNUOiAnQkxJTktfRUZGRUNUJyBhcyBjb25zdCxcbiAgQk9VTkNFX0VGRkVDVDogJ0JPVU5DRV9FRkZFQ1QnIGFzIGNvbnN0LFxuICBGTElQX0xFRlRfVE9fUklHSFRfRUZGRUNUOiAnRkxJUF9MRUZUX1RPX1JJR0hUX0VGRkVDVCcgYXMgY29uc3QsXG4gIEZMSVBfUklHSFRfVE9fTEVGVF9FRkZFQ1Q6ICdGTElQX1JJR0hUX1RPX0xFRlRfRUZGRUNUJyBhcyBjb25zdCxcbiAgUlVCQkVSX0JBTkRfRUZGRUNUOiAnUlVCQkVSX0JBTkRfRUZGRUNUJyBhcyBjb25zdCxcbiAgSkVMTE9fRUZGRUNUOiAnSkVMTE9fRUZGRUNUJyBhcyBjb25zdCxcbiAgR1JPV19CSUdfRUZGRUNUOiAnR1JPV19CSUdfRUZGRUNUJyBhcyBjb25zdCxcbiAgU0hSSU5LX0JJR19FRkZFQ1Q6ICdTSFJJTktfQklHX0VGRkVDVCcgYXMgY29uc3QsXG4gIFBMVUdJTl9MT1RUSUVfRUZGRUNUOiAnUExVR0lOX0xPVFRJRV9FRkZFQ1QnIGFzIGNvbnN0LFxufSBhcyBjb25zdDtcblxuLyoqXG4gKiBRdWljayBFZmZlY3QgRGlyZWN0aW9uIEVudW1zXG4gKi9cbmV4cG9ydCBjb25zdCBRdWlja0VmZmVjdERpcmVjdGlvbkNvbnN0cyA9IHtcbiAgTEVGVDogJ0xFRlQnIGFzIGNvbnN0LFxuICBSSUdIVDogJ1JJR0hUJyBhcyBjb25zdCxcbiAgQk9UVE9NOiAnQk9UVE9NJyBhcyBjb25zdCxcbiAgVE9QOiAnVE9QJyBhcyBjb25zdCxcbiAgQk9UVE9NX0xFRlQ6ICdCT1RUT01fTEVGVCcgYXMgY29uc3QsXG4gIEJPVFRPTV9SSUdIVDogJ0JPVFRPTV9SSUdIVCcgYXMgY29uc3QsXG4gIFRPUF9SSUdIVDogJ1RPUF9SSUdIVCcgYXMgY29uc3QsXG4gIFRPUF9MRUZUOiAnVE9QX0xFRlQnIGFzIGNvbnN0LFxuICBDTE9DS1dJU0U6ICdDTE9DS1dJU0UnIGFzIGNvbnN0LFxuICBDT1VOVEVSX0NMT0NLV0lTRTogJ0NPVU5URVJfQ0xPQ0tXSVNFJyBhcyBjb25zdCxcbn0gYXMgY29uc3Q7XG4iXSwibmFtZXMiOlsiRXZlbnRBcHBsaWVzVG8iLCJFdmVudEJhc2VkT24iLCJFdmVudENvbnRpbnVvdXNNb3VzZUF4ZXMiLCJFdmVudExpbWl0QWZmZWN0ZWRFbGVtZW50cyIsIkV2ZW50VHlwZUNvbnN0cyIsIlF1aWNrRWZmZWN0RGlyZWN0aW9uQ29uc3RzIiwiUXVpY2tFZmZlY3RJZHMiLCJOQVZCQVJfT1BFTiIsIk5BVkJBUl9DTE9TRSIsIlRBQl9BQ1RJVkUiLCJUQUJfSU5BQ1RJVkUiLCJTTElERVJfQUNUSVZFIiwiU0xJREVSX0lOQUNUSVZFIiwiRFJPUERPV05fT1BFTiIsIkRST1BET1dOX0NMT1NFIiwiTU9VU0VfQ0xJQ0siLCJNT1VTRV9TRUNPTkRfQ0xJQ0siLCJNT1VTRV9ET1dOIiwiTU9VU0VfVVAiLCJNT1VTRV9PVkVSIiwiTU9VU0VfT1VUIiwiTU9VU0VfTU9WRSIsIk1PVVNFX01PVkVfSU5fVklFV1BPUlQiLCJTQ1JPTExfSU5UT19WSUVXIiwiU0NST0xMX09VVF9PRl9WSUVXIiwiU0NST0xMSU5HX0lOX1ZJRVciLCJFQ09NTUVSQ0VfQ0FSVF9PUEVOIiwiRUNPTU1FUkNFX0NBUlRfQ0xPU0UiLCJQQUdFX1NUQVJUIiwiUEFHRV9GSU5JU0giLCJQQUdFX1NDUk9MTF9VUCIsIlBBR0VfU0NST0xMX0RPV04iLCJQQUdFX1NDUk9MTCIsIkVMRU1FTlQiLCJDTEFTUyIsIlBBR0UiLCJWSUVXUE9SVCIsIlhfQVhJUyIsIllfQVhJUyIsIkNISUxEUkVOIiwiU0lCTElOR1MiLCJJTU1FRElBVEVfQ0hJTERSRU4iLCJGQURFX0VGRkVDVCIsIlNMSURFX0VGRkVDVCIsIkdST1dfRUZGRUNUIiwiU0hSSU5LX0VGRkVDVCIsIlNQSU5fRUZGRUNUIiwiRkxZX0VGRkVDVCIsIlBPUF9FRkZFQ1QiLCJGTElQX0VGRkVDVCIsIkpJR0dMRV9FRkZFQ1QiLCJQVUxTRV9FRkZFQ1QiLCJEUk9QX0VGRkVDVCIsIkJMSU5LX0VGRkVDVCIsIkJPVU5DRV9FRkZFQ1QiLCJGTElQX0xFRlRfVE9fUklHSFRfRUZGRUNUIiwiRkxJUF9SSUdIVF9UT19MRUZUX0VGRkVDVCIsIlJVQkJFUl9CQU5EX0VGRkVDVCIsIkpFTExPX0VGRkVDVCIsIkdST1dfQklHX0VGRkVDVCIsIlNIUklOS19CSUdfRUZGRUNUIiwiUExVR0lOX0xPVFRJRV9FRkZFQ1QiLCJMRUZUIiwiUklHSFQiLCJCT1RUT00iLCJUT1AiLCJCT1RUT01fTEVGVCIsIkJPVFRPTV9SSUdIVCIsIlRPUF9SSUdIVCIsIlRPUF9MRUZUIiwiQ0xPQ0tXSVNFIiwiQ09VTlRFUl9DTE9DS1dJU0UiXSwibWFwcGluZ3MiOiJBQUFBOztDQUVDOzs7Ozs7Ozs7OztJQW1DWUEsY0FBYztlQUFkQTs7SUFNQUMsWUFBWTtlQUFaQTs7SUFLQUMsd0JBQXdCO2VBQXhCQTs7SUFLQUMsMEJBQTBCO2VBQTFCQTs7SUFqREFDLGVBQWU7ZUFBZkE7O0lBb0ZBQywwQkFBMEI7ZUFBMUJBOztJQTFCQUMsY0FBYztlQUFkQTs7O0FBMUROLE1BQU1GLGtCQUFrQjtJQUM3QkcsYUFBYTtJQUNiQyxjQUFjO0lBQ2RDLFlBQVk7SUFDWkMsY0FBYztJQUNkQyxlQUFlO0lBQ2ZDLGlCQUFpQjtJQUNqQkMsZUFBZTtJQUNmQyxnQkFBZ0I7SUFDaEJDLGFBQWE7SUFDYkMsb0JBQW9CO0lBQ3BCQyxZQUFZO0lBQ1pDLFVBQVU7SUFDVkMsWUFBWTtJQUNaQyxXQUFXO0lBQ1hDLFlBQVk7SUFDWkMsd0JBQXdCO0lBQ3hCQyxrQkFBa0I7SUFDbEJDLG9CQUFvQjtJQUNwQkMsbUJBQW1CO0lBQ25CQyxxQkFBcUI7SUFDckJDLHNCQUFzQjtJQUN0QkMsWUFBWTtJQUNaQyxhQUFhO0lBQ2JDLGdCQUFnQjtJQUNoQkMsa0JBQWtCO0lBQ2xCQyxhQUFhO0FBQ2Y7QUFNTyxNQUFNaEMsaUJBQWlCO0lBQzVCaUMsU0FBUztJQUNUQyxPQUFPO0lBQ1BDLE1BQU07QUFDUjtBQUVPLE1BQU1sQyxlQUFlO0lBQzFCZ0MsU0FBUztJQUNURyxVQUFVO0FBQ1o7QUFFTyxNQUFNbEMsMkJBQTJCO0lBQ3RDbUMsUUFBUTtJQUNSQyxRQUFRO0FBQ1Y7QUFFTyxNQUFNbkMsNkJBQTZCO0lBQ3hDb0MsVUFBVTtJQUNWQyxVQUFVO0lBQ1ZDLG9CQUFvQjtBQUN0QjtBQUtPLE1BQU1uQyxpQkFBaUI7SUFDNUJvQyxhQUFhO0lBQ2JDLGNBQWM7SUFDZEMsYUFBYTtJQUNiQyxlQUFlO0lBQ2ZDLGFBQWE7SUFDYkMsWUFBWTtJQUNaQyxZQUFZO0lBQ1pDLGFBQWE7SUFDYkMsZUFBZTtJQUNmQyxjQUFjO0lBQ2RDLGFBQWE7SUFDYkMsY0FBYztJQUNkQyxlQUFlO0lBQ2ZDLDJCQUEyQjtJQUMzQkMsMkJBQTJCO0lBQzNCQyxvQkFBb0I7SUFDcEJDLGNBQWM7SUFDZEMsaUJBQWlCO0lBQ2pCQyxtQkFBbUI7SUFDbkJDLHNCQUFzQjtBQUN4QjtBQUtPLE1BQU14RCw2QkFBNkI7SUFDeEN5RCxNQUFNO0lBQ05DLE9BQU87SUFDUEMsUUFBUTtJQUNSQyxLQUFLO0lBQ0xDLGFBQWE7SUFDYkMsY0FBYztJQUNkQyxXQUFXO0lBQ1hDLFVBQVU7SUFDVkMsV0FBVztJQUNYQyxtQkFBbUI7QUFDckIifQ==

}),
8704: (function (__unused_webpack_module, exports) {

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "InteractionTypeConsts", ({
    enumerable: true,
    get: function() {
        return InteractionTypeConsts;
    }
}));
const InteractionTypeConsts = {
    MOUSE_CLICK_INTERACTION: 'MOUSE_CLICK_INTERACTION',
    MOUSE_HOVER_INTERACTION: 'MOUSE_HOVER_INTERACTION',
    MOUSE_MOVE_INTERACTION: 'MOUSE_MOVE_INTERACTION',
    SCROLL_INTO_VIEW_INTERACTION: 'SCROLL_INTO_VIEW_INTERACTION',
    SCROLLING_IN_VIEW_INTERACTION: 'SCROLLING_IN_VIEW_INTERACTION',
    MOUSE_MOVE_IN_VIEWPORT_INTERACTION: 'MOUSE_MOVE_IN_VIEWPORT_INTERACTION',
    PAGE_IS_SCROLLING_INTERACTION: 'PAGE_IS_SCROLLING_INTERACTION',
    PAGE_LOAD_INTERACTION: 'PAGE_LOAD_INTERACTION',
    PAGE_SCROLLED_INTERACTION: 'PAGE_SCROLLED_INTERACTION',
    NAVBAR_INTERACTION: 'NAVBAR_INTERACTION',
    DROPDOWN_INTERACTION: 'DROPDOWN_INTERACTION',
    ECOMMERCE_CART_INTERACTION: 'ECOMMERCE_CART_INTERACTION',
    TAB_INTERACTION: 'TAB_INTERACTION',
    SLIDER_INTERACTION: 'SLIDER_INTERACTION'
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyaWdnZXItaW50ZXJhY3Rpb25zLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBJbnRlcmFjdGlvblR5cGVDb25zdHMgPSB7XG4gIE1PVVNFX0NMSUNLX0lOVEVSQUNUSU9OOiAnTU9VU0VfQ0xJQ0tfSU5URVJBQ1RJT04nIGFzIGNvbnN0LFxuICBNT1VTRV9IT1ZFUl9JTlRFUkFDVElPTjogJ01PVVNFX0hPVkVSX0lOVEVSQUNUSU9OJyBhcyBjb25zdCxcbiAgTU9VU0VfTU9WRV9JTlRFUkFDVElPTjogJ01PVVNFX01PVkVfSU5URVJBQ1RJT04nIGFzIGNvbnN0LFxuICBTQ1JPTExfSU5UT19WSUVXX0lOVEVSQUNUSU9OOiAnU0NST0xMX0lOVE9fVklFV19JTlRFUkFDVElPTicgYXMgY29uc3QsXG4gIFNDUk9MTElOR19JTl9WSUVXX0lOVEVSQUNUSU9OOiAnU0NST0xMSU5HX0lOX1ZJRVdfSU5URVJBQ1RJT04nIGFzIGNvbnN0LFxuICBNT1VTRV9NT1ZFX0lOX1ZJRVdQT1JUX0lOVEVSQUNUSU9OOlxuICAgICdNT1VTRV9NT1ZFX0lOX1ZJRVdQT1JUX0lOVEVSQUNUSU9OJyBhcyBjb25zdCxcbiAgUEFHRV9JU19TQ1JPTExJTkdfSU5URVJBQ1RJT046ICdQQUdFX0lTX1NDUk9MTElOR19JTlRFUkFDVElPTicgYXMgY29uc3QsXG4gIFBBR0VfTE9BRF9JTlRFUkFDVElPTjogJ1BBR0VfTE9BRF9JTlRFUkFDVElPTicgYXMgY29uc3QsXG4gIFBBR0VfU0NST0xMRURfSU5URVJBQ1RJT046ICdQQUdFX1NDUk9MTEVEX0lOVEVSQUNUSU9OJyBhcyBjb25zdCxcbiAgTkFWQkFSX0lOVEVSQUNUSU9OOiAnTkFWQkFSX0lOVEVSQUNUSU9OJyBhcyBjb25zdCxcbiAgRFJPUERPV05fSU5URVJBQ1RJT046ICdEUk9QRE9XTl9JTlRFUkFDVElPTicgYXMgY29uc3QsXG4gIEVDT01NRVJDRV9DQVJUX0lOVEVSQUNUSU9OOiAnRUNPTU1FUkNFX0NBUlRfSU5URVJBQ1RJT04nIGFzIGNvbnN0LFxuICBUQUJfSU5URVJBQ1RJT046ICdUQUJfSU5URVJBQ1RJT04nIGFzIGNvbnN0LFxuICBTTElERVJfSU5URVJBQ1RJT046ICdTTElERVJfSU5URVJBQ1RJT04nIGFzIGNvbnN0LFxufSBhcyBjb25zdDtcbiJdLCJuYW1lcyI6WyJJbnRlcmFjdGlvblR5cGVDb25zdHMiLCJNT1VTRV9DTElDS19JTlRFUkFDVElPTiIsIk1PVVNFX0hPVkVSX0lOVEVSQUNUSU9OIiwiTU9VU0VfTU9WRV9JTlRFUkFDVElPTiIsIlNDUk9MTF9JTlRPX1ZJRVdfSU5URVJBQ1RJT04iLCJTQ1JPTExJTkdfSU5fVklFV19JTlRFUkFDVElPTiIsIk1PVVNFX01PVkVfSU5fVklFV1BPUlRfSU5URVJBQ1RJT04iLCJQQUdFX0lTX1NDUk9MTElOR19JTlRFUkFDVElPTiIsIlBBR0VfTE9BRF9JTlRFUkFDVElPTiIsIlBBR0VfU0NST0xMRURfSU5URVJBQ1RJT04iLCJOQVZCQVJfSU5URVJBQ1RJT04iLCJEUk9QRE9XTl9JTlRFUkFDVElPTiIsIkVDT01NRVJDRV9DQVJUX0lOVEVSQUNUSU9OIiwiVEFCX0lOVEVSQUNUSU9OIiwiU0xJREVSX0lOVEVSQUNUSU9OIl0sIm1hcHBpbmdzIjoiOzs7OytCQUFhQTs7O2VBQUFBOzs7QUFBTixNQUFNQSx3QkFBd0I7SUFDbkNDLHlCQUF5QjtJQUN6QkMseUJBQXlCO0lBQ3pCQyx3QkFBd0I7SUFDeEJDLDhCQUE4QjtJQUM5QkMsK0JBQStCO0lBQy9CQyxvQ0FDRTtJQUNGQywrQkFBK0I7SUFDL0JDLHVCQUF1QjtJQUN2QkMsMkJBQTJCO0lBQzNCQyxvQkFBb0I7SUFDcEJDLHNCQUFzQjtJQUN0QkMsNEJBQTRCO0lBQzVCQyxpQkFBaUI7SUFDakJDLG9CQUFvQjtBQUN0QiJ9

}),
380: (function (__unused_webpack_module, exports) {
// Big List of Colors
// ------------------
// <https://www.w3.org/TR/css-color-4/#named-colors>

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "normalizeColor", ({
    enumerable: true,
    get: function() {
        return normalizeColor;
    }
}));
const colorNamesObj = {
    aliceblue: '#F0F8FF',
    antiquewhite: '#FAEBD7',
    aqua: '#00FFFF',
    aquamarine: '#7FFFD4',
    azure: '#F0FFFF',
    beige: '#F5F5DC',
    bisque: '#FFE4C4',
    black: '#000000',
    blanchedalmond: '#FFEBCD',
    blue: '#0000FF',
    blueviolet: '#8A2BE2',
    brown: '#A52A2A',
    burlywood: '#DEB887',
    cadetblue: '#5F9EA0',
    chartreuse: '#7FFF00',
    chocolate: '#D2691E',
    coral: '#FF7F50',
    cornflowerblue: '#6495ED',
    cornsilk: '#FFF8DC',
    crimson: '#DC143C',
    cyan: '#00FFFF',
    darkblue: '#00008B',
    darkcyan: '#008B8B',
    darkgoldenrod: '#B8860B',
    darkgray: '#A9A9A9',
    darkgreen: '#006400',
    darkgrey: '#A9A9A9',
    darkkhaki: '#BDB76B',
    darkmagenta: '#8B008B',
    darkolivegreen: '#556B2F',
    darkorange: '#FF8C00',
    darkorchid: '#9932CC',
    darkred: '#8B0000',
    darksalmon: '#E9967A',
    darkseagreen: '#8FBC8F',
    darkslateblue: '#483D8B',
    darkslategray: '#2F4F4F',
    darkslategrey: '#2F4F4F',
    darkturquoise: '#00CED1',
    darkviolet: '#9400D3',
    deeppink: '#FF1493',
    deepskyblue: '#00BFFF',
    dimgray: '#696969',
    dimgrey: '#696969',
    dodgerblue: '#1E90FF',
    firebrick: '#B22222',
    floralwhite: '#FFFAF0',
    forestgreen: '#228B22',
    fuchsia: '#FF00FF',
    gainsboro: '#DCDCDC',
    ghostwhite: '#F8F8FF',
    gold: '#FFD700',
    goldenrod: '#DAA520',
    gray: '#808080',
    green: '#008000',
    greenyellow: '#ADFF2F',
    grey: '#808080',
    honeydew: '#F0FFF0',
    hotpink: '#FF69B4',
    indianred: '#CD5C5C',
    indigo: '#4B0082',
    ivory: '#FFFFF0',
    khaki: '#F0E68C',
    lavender: '#E6E6FA',
    lavenderblush: '#FFF0F5',
    lawngreen: '#7CFC00',
    lemonchiffon: '#FFFACD',
    lightblue: '#ADD8E6',
    lightcoral: '#F08080',
    lightcyan: '#E0FFFF',
    lightgoldenrodyellow: '#FAFAD2',
    lightgray: '#D3D3D3',
    lightgreen: '#90EE90',
    lightgrey: '#D3D3D3',
    lightpink: '#FFB6C1',
    lightsalmon: '#FFA07A',
    lightseagreen: '#20B2AA',
    lightskyblue: '#87CEFA',
    lightslategray: '#778899',
    lightslategrey: '#778899',
    lightsteelblue: '#B0C4DE',
    lightyellow: '#FFFFE0',
    lime: '#00FF00',
    limegreen: '#32CD32',
    linen: '#FAF0E6',
    magenta: '#FF00FF',
    maroon: '#800000',
    mediumaquamarine: '#66CDAA',
    mediumblue: '#0000CD',
    mediumorchid: '#BA55D3',
    mediumpurple: '#9370DB',
    mediumseagreen: '#3CB371',
    mediumslateblue: '#7B68EE',
    mediumspringgreen: '#00FA9A',
    mediumturquoise: '#48D1CC',
    mediumvioletred: '#C71585',
    midnightblue: '#191970',
    mintcream: '#F5FFFA',
    mistyrose: '#FFE4E1',
    moccasin: '#FFE4B5',
    navajowhite: '#FFDEAD',
    navy: '#000080',
    oldlace: '#FDF5E6',
    olive: '#808000',
    olivedrab: '#6B8E23',
    orange: '#FFA500',
    orangered: '#FF4500',
    orchid: '#DA70D6',
    palegoldenrod: '#EEE8AA',
    palegreen: '#98FB98',
    paleturquoise: '#AFEEEE',
    palevioletred: '#DB7093',
    papayawhip: '#FFEFD5',
    peachpuff: '#FFDAB9',
    peru: '#CD853F',
    pink: '#FFC0CB',
    plum: '#DDA0DD',
    powderblue: '#B0E0E6',
    purple: '#800080',
    rebeccapurple: '#663399',
    red: '#FF0000',
    rosybrown: '#BC8F8F',
    royalblue: '#4169E1',
    saddlebrown: '#8B4513',
    salmon: '#FA8072',
    sandybrown: '#F4A460',
    seagreen: '#2E8B57',
    seashell: '#FFF5EE',
    sienna: '#A0522D',
    silver: '#C0C0C0',
    skyblue: '#87CEEB',
    slateblue: '#6A5ACD',
    slategray: '#708090',
    slategrey: '#708090',
    snow: '#FFFAFA',
    springgreen: '#00FF7F',
    steelblue: '#4682B4',
    tan: '#D2B48C',
    teal: '#008080',
    thistle: '#D8BFD8',
    tomato: '#FF6347',
    turquoise: '#40E0D0',
    violet: '#EE82EE',
    wheat: '#F5DEB3',
    white: '#FFFFFF',
    whitesmoke: '#F5F5F5',
    yellow: '#FFFF00',
    yellowgreen: '#9ACD32'
};
function normalizeColor(inputColor) {
    let red;
    let green;
    let blue;
    let alpha = 1; // Default alpha to 1
    const rawColor = inputColor.replace(/\s/g, '').toLowerCase();
    const namedColor = typeof colorNamesObj[rawColor] === 'string' ? colorNamesObj[rawColor].toLowerCase() : null;
    const cleanColor = namedColor || rawColor;
    if (cleanColor.startsWith('#')) {
        const hex = cleanColor.substring(1);
        if (hex.length === 3 || hex.length === 4) {
            red = parseInt(hex[0] + hex[0], 16);
            green = parseInt(hex[1] + hex[1], 16);
            blue = parseInt(hex[2] + hex[2], 16);
            if (hex.length === 4) {
                alpha = parseInt(hex[3] + hex[3], 16) / 255;
            }
        } else if (hex.length === 6 || hex.length === 8) {
            red = parseInt(hex.substring(0, 2), 16);
            green = parseInt(hex.substring(2, 4), 16);
            blue = parseInt(hex.substring(4, 6), 16);
            if (hex.length === 8) {
                alpha = parseInt(hex.substring(6, 8), 16) / 255;
            }
        }
    } else if (cleanColor.startsWith('rgba')) {
        const rgbaValues = cleanColor.match(/rgba\(([^)]+)\)/)[1].split(',');
        red = parseInt(rgbaValues[0], 10);
        green = parseInt(rgbaValues[1], 10);
        blue = parseInt(rgbaValues[2], 10);
        alpha = parseFloat(rgbaValues[3]);
    } else if (cleanColor.startsWith('rgb')) {
        const rgbValues = cleanColor.match(/rgb\(([^)]+)\)/)[1].split(',');
        red = parseInt(rgbValues[0], 10);
        green = parseInt(rgbValues[1], 10);
        blue = parseInt(rgbValues[2], 10);
    } else if (cleanColor.startsWith('hsla')) {
        const hslaValues = cleanColor.match(/hsla\(([^)]+)\)/)[1].split(',');
        const h = parseFloat(hslaValues[0]);
        const s = parseFloat(hslaValues[1].replace('%', '')) / 100;
        const l = parseFloat(hslaValues[2].replace('%', '')) / 100;
        alpha = parseFloat(hslaValues[3]);
        // Convert HSL to RGB
        const C = (1 - Math.abs(2 * l - 1)) * s;
        const X = C * (1 - Math.abs(h / 60 % 2 - 1));
        const m = l - C / 2;
        let R;
        let G;
        let B;
        if (h >= 0 && h < 60) {
            R = C;
            G = X;
            B = 0;
        } else if (h >= 60 && h < 120) {
            R = X;
            G = C;
            B = 0;
        } else if (h >= 120 && h < 180) {
            R = 0;
            G = C;
            B = X;
        } else if (h >= 180 && h < 240) {
            R = 0;
            G = X;
            B = C;
        } else if (h >= 240 && h < 300) {
            R = X;
            G = 0;
            B = C;
        } else {
            R = C;
            G = 0;
            B = X;
        }
        red = Math.round((R + m) * 255);
        green = Math.round((G + m) * 255);
        blue = Math.round((B + m) * 255);
    } else if (cleanColor.startsWith('hsl')) {
        const hslValues = cleanColor.match(/hsl\(([^)]+)\)/)[1].split(',');
        const h = parseFloat(hslValues[0]);
        const s = parseFloat(hslValues[1].replace('%', '')) / 100;
        const l = parseFloat(hslValues[2].replace('%', '')) / 100;
        // Convert HSL to RGB (without alpha)
        const C = (1 - Math.abs(2 * l - 1)) * s;
        const X = C * (1 - Math.abs(h / 60 % 2 - 1));
        const m = l - C / 2;
        let R;
        let G;
        let B;
        if (h >= 0 && h < 60) {
            R = C;
            G = X;
            B = 0;
        } else if (h >= 60 && h < 120) {
            R = X;
            G = C;
            B = 0;
        } else if (h >= 120 && h < 180) {
            R = 0;
            G = C;
            B = X;
        } else if (h >= 180 && h < 240) {
            R = 0;
            G = X;
            B = C;
        } else if (h >= 240 && h < 300) {
            R = X;
            G = 0;
            B = C;
        } else {
            R = C;
            G = 0;
            B = X;
        }
        red = Math.round((R + m) * 255);
        green = Math.round((G + m) * 255);
        blue = Math.round((B + m) * 255);
    }
    if (Number.isNaN(red) || Number.isNaN(green) || Number.isNaN(blue)) {
        throw new Error(`Invalid color in [ix2/shared/utils/normalizeColor.js] '${inputColor}'`);
    }
    return {
        red,
        green,
        blue,
        alpha
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vcm1hbGl6ZUNvbG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEJpZyBMaXN0IG9mIENvbG9yc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyA8aHR0cHM6Ly93d3cudzMub3JnL1RSL2Nzcy1jb2xvci00LyNuYW1lZC1jb2xvcnM+XG5jb25zdCBjb2xvck5hbWVzT2JqID0ge1xuICBhbGljZWJsdWU6ICcjRjBGOEZGJyxcbiAgYW50aXF1ZXdoaXRlOiAnI0ZBRUJENycsXG4gIGFxdWE6ICcjMDBGRkZGJyxcbiAgYXF1YW1hcmluZTogJyM3RkZGRDQnLFxuICBhenVyZTogJyNGMEZGRkYnLFxuICBiZWlnZTogJyNGNUY1REMnLFxuICBiaXNxdWU6ICcjRkZFNEM0JyxcbiAgYmxhY2s6ICcjMDAwMDAwJyxcbiAgYmxhbmNoZWRhbG1vbmQ6ICcjRkZFQkNEJyxcbiAgYmx1ZTogJyMwMDAwRkYnLFxuICBibHVldmlvbGV0OiAnIzhBMkJFMicsXG4gIGJyb3duOiAnI0E1MkEyQScsXG4gIGJ1cmx5d29vZDogJyNERUI4ODcnLFxuICBjYWRldGJsdWU6ICcjNUY5RUEwJyxcbiAgY2hhcnRyZXVzZTogJyM3RkZGMDAnLFxuICBjaG9jb2xhdGU6ICcjRDI2OTFFJyxcbiAgY29yYWw6ICcjRkY3RjUwJyxcbiAgY29ybmZsb3dlcmJsdWU6ICcjNjQ5NUVEJyxcbiAgY29ybnNpbGs6ICcjRkZGOERDJyxcbiAgY3JpbXNvbjogJyNEQzE0M0MnLFxuICBjeWFuOiAnIzAwRkZGRicsXG4gIGRhcmtibHVlOiAnIzAwMDA4QicsXG4gIGRhcmtjeWFuOiAnIzAwOEI4QicsXG4gIGRhcmtnb2xkZW5yb2Q6ICcjQjg4NjBCJyxcbiAgZGFya2dyYXk6ICcjQTlBOUE5JyxcbiAgZGFya2dyZWVuOiAnIzAwNjQwMCcsXG4gIGRhcmtncmV5OiAnI0E5QTlBOScsXG4gIGRhcmtraGFraTogJyNCREI3NkInLFxuICBkYXJrbWFnZW50YTogJyM4QjAwOEInLFxuICBkYXJrb2xpdmVncmVlbjogJyM1NTZCMkYnLFxuICBkYXJrb3JhbmdlOiAnI0ZGOEMwMCcsXG4gIGRhcmtvcmNoaWQ6ICcjOTkzMkNDJyxcbiAgZGFya3JlZDogJyM4QjAwMDAnLFxuICBkYXJrc2FsbW9uOiAnI0U5OTY3QScsXG4gIGRhcmtzZWFncmVlbjogJyM4RkJDOEYnLFxuICBkYXJrc2xhdGVibHVlOiAnIzQ4M0Q4QicsXG4gIGRhcmtzbGF0ZWdyYXk6ICcjMkY0RjRGJyxcbiAgZGFya3NsYXRlZ3JleTogJyMyRjRGNEYnLFxuICBkYXJrdHVycXVvaXNlOiAnIzAwQ0VEMScsXG4gIGRhcmt2aW9sZXQ6ICcjOTQwMEQzJyxcbiAgZGVlcHBpbms6ICcjRkYxNDkzJyxcbiAgZGVlcHNreWJsdWU6ICcjMDBCRkZGJyxcbiAgZGltZ3JheTogJyM2OTY5NjknLFxuICBkaW1ncmV5OiAnIzY5Njk2OScsXG4gIGRvZGdlcmJsdWU6ICcjMUU5MEZGJyxcbiAgZmlyZWJyaWNrOiAnI0IyMjIyMicsXG4gIGZsb3JhbHdoaXRlOiAnI0ZGRkFGMCcsXG4gIGZvcmVzdGdyZWVuOiAnIzIyOEIyMicsXG4gIGZ1Y2hzaWE6ICcjRkYwMEZGJyxcbiAgZ2FpbnNib3JvOiAnI0RDRENEQycsXG4gIGdob3N0d2hpdGU6ICcjRjhGOEZGJyxcbiAgZ29sZDogJyNGRkQ3MDAnLFxuICBnb2xkZW5yb2Q6ICcjREFBNTIwJyxcbiAgZ3JheTogJyM4MDgwODAnLFxuICBncmVlbjogJyMwMDgwMDAnLFxuICBncmVlbnllbGxvdzogJyNBREZGMkYnLFxuICBncmV5OiAnIzgwODA4MCcsXG4gIGhvbmV5ZGV3OiAnI0YwRkZGMCcsXG4gIGhvdHBpbms6ICcjRkY2OUI0JyxcbiAgaW5kaWFucmVkOiAnI0NENUM1QycsXG4gIGluZGlnbzogJyM0QjAwODInLFxuICBpdm9yeTogJyNGRkZGRjAnLFxuICBraGFraTogJyNGMEU2OEMnLFxuICBsYXZlbmRlcjogJyNFNkU2RkEnLFxuICBsYXZlbmRlcmJsdXNoOiAnI0ZGRjBGNScsXG4gIGxhd25ncmVlbjogJyM3Q0ZDMDAnLFxuICBsZW1vbmNoaWZmb246ICcjRkZGQUNEJyxcbiAgbGlnaHRibHVlOiAnI0FERDhFNicsXG4gIGxpZ2h0Y29yYWw6ICcjRjA4MDgwJyxcbiAgbGlnaHRjeWFuOiAnI0UwRkZGRicsXG4gIGxpZ2h0Z29sZGVucm9keWVsbG93OiAnI0ZBRkFEMicsXG4gIGxpZ2h0Z3JheTogJyNEM0QzRDMnLFxuICBsaWdodGdyZWVuOiAnIzkwRUU5MCcsXG4gIGxpZ2h0Z3JleTogJyNEM0QzRDMnLFxuICBsaWdodHBpbms6ICcjRkZCNkMxJyxcbiAgbGlnaHRzYWxtb246ICcjRkZBMDdBJyxcbiAgbGlnaHRzZWFncmVlbjogJyMyMEIyQUEnLFxuICBsaWdodHNreWJsdWU6ICcjODdDRUZBJyxcbiAgbGlnaHRzbGF0ZWdyYXk6ICcjNzc4ODk5JyxcbiAgbGlnaHRzbGF0ZWdyZXk6ICcjNzc4ODk5JyxcbiAgbGlnaHRzdGVlbGJsdWU6ICcjQjBDNERFJyxcbiAgbGlnaHR5ZWxsb3c6ICcjRkZGRkUwJyxcbiAgbGltZTogJyMwMEZGMDAnLFxuICBsaW1lZ3JlZW46ICcjMzJDRDMyJyxcbiAgbGluZW46ICcjRkFGMEU2JyxcbiAgbWFnZW50YTogJyNGRjAwRkYnLFxuICBtYXJvb246ICcjODAwMDAwJyxcbiAgbWVkaXVtYXF1YW1hcmluZTogJyM2NkNEQUEnLFxuICBtZWRpdW1ibHVlOiAnIzAwMDBDRCcsXG4gIG1lZGl1bW9yY2hpZDogJyNCQTU1RDMnLFxuICBtZWRpdW1wdXJwbGU6ICcjOTM3MERCJyxcbiAgbWVkaXVtc2VhZ3JlZW46ICcjM0NCMzcxJyxcbiAgbWVkaXVtc2xhdGVibHVlOiAnIzdCNjhFRScsXG4gIG1lZGl1bXNwcmluZ2dyZWVuOiAnIzAwRkE5QScsXG4gIG1lZGl1bXR1cnF1b2lzZTogJyM0OEQxQ0MnLFxuICBtZWRpdW12aW9sZXRyZWQ6ICcjQzcxNTg1JyxcbiAgbWlkbmlnaHRibHVlOiAnIzE5MTk3MCcsXG4gIG1pbnRjcmVhbTogJyNGNUZGRkEnLFxuICBtaXN0eXJvc2U6ICcjRkZFNEUxJyxcbiAgbW9jY2FzaW46ICcjRkZFNEI1JyxcbiAgbmF2YWpvd2hpdGU6ICcjRkZERUFEJyxcbiAgbmF2eTogJyMwMDAwODAnLFxuICBvbGRsYWNlOiAnI0ZERjVFNicsXG4gIG9saXZlOiAnIzgwODAwMCcsXG4gIG9saXZlZHJhYjogJyM2QjhFMjMnLFxuICBvcmFuZ2U6ICcjRkZBNTAwJyxcbiAgb3JhbmdlcmVkOiAnI0ZGNDUwMCcsXG4gIG9yY2hpZDogJyNEQTcwRDYnLFxuICBwYWxlZ29sZGVucm9kOiAnI0VFRThBQScsXG4gIHBhbGVncmVlbjogJyM5OEZCOTgnLFxuICBwYWxldHVycXVvaXNlOiAnI0FGRUVFRScsXG4gIHBhbGV2aW9sZXRyZWQ6ICcjREI3MDkzJyxcbiAgcGFwYXlhd2hpcDogJyNGRkVGRDUnLFxuICBwZWFjaHB1ZmY6ICcjRkZEQUI5JyxcbiAgcGVydTogJyNDRDg1M0YnLFxuICBwaW5rOiAnI0ZGQzBDQicsXG4gIHBsdW06ICcjRERBMEREJyxcbiAgcG93ZGVyYmx1ZTogJyNCMEUwRTYnLFxuICBwdXJwbGU6ICcjODAwMDgwJyxcbiAgcmViZWNjYXB1cnBsZTogJyM2NjMzOTknLFxuICByZWQ6ICcjRkYwMDAwJyxcbiAgcm9zeWJyb3duOiAnI0JDOEY4RicsXG4gIHJveWFsYmx1ZTogJyM0MTY5RTEnLFxuICBzYWRkbGVicm93bjogJyM4QjQ1MTMnLFxuICBzYWxtb246ICcjRkE4MDcyJyxcbiAgc2FuZHlicm93bjogJyNGNEE0NjAnLFxuICBzZWFncmVlbjogJyMyRThCNTcnLFxuICBzZWFzaGVsbDogJyNGRkY1RUUnLFxuICBzaWVubmE6ICcjQTA1MjJEJyxcbiAgc2lsdmVyOiAnI0MwQzBDMCcsXG4gIHNreWJsdWU6ICcjODdDRUVCJyxcbiAgc2xhdGVibHVlOiAnIzZBNUFDRCcsXG4gIHNsYXRlZ3JheTogJyM3MDgwOTAnLFxuICBzbGF0ZWdyZXk6ICcjNzA4MDkwJyxcbiAgc25vdzogJyNGRkZBRkEnLFxuICBzcHJpbmdncmVlbjogJyMwMEZGN0YnLFxuICBzdGVlbGJsdWU6ICcjNDY4MkI0JyxcbiAgdGFuOiAnI0QyQjQ4QycsXG4gIHRlYWw6ICcjMDA4MDgwJyxcbiAgdGhpc3RsZTogJyNEOEJGRDgnLFxuICB0b21hdG86ICcjRkY2MzQ3JyxcbiAgdHVycXVvaXNlOiAnIzQwRTBEMCcsXG4gIHZpb2xldDogJyNFRTgyRUUnLFxuICB3aGVhdDogJyNGNURFQjMnLFxuICB3aGl0ZTogJyNGRkZGRkYnLFxuICB3aGl0ZXNtb2tlOiAnI0Y1RjVGNScsXG4gIHllbGxvdzogJyNGRkZGMDAnLFxuICB5ZWxsb3dncmVlbjogJyM5QUNEMzInLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbG9yKGlucHV0Q29sb3IpIHtcbiAgbGV0IHJlZDtcbiAgbGV0IGdyZWVuO1xuICBsZXQgYmx1ZTtcbiAgbGV0IGFscGhhID0gMTsgLy8gRGVmYXVsdCBhbHBoYSB0byAxXG4gIGNvbnN0IHJhd0NvbG9yID0gaW5wdXRDb2xvci5yZXBsYWNlKC9cXHMvZywgJycpLnRvTG93ZXJDYXNlKCk7XG4gIGNvbnN0IG5hbWVkQ29sb3IgPVxuICAgIHR5cGVvZiBjb2xvck5hbWVzT2JqW3Jhd0NvbG9yXSA9PT0gJ3N0cmluZydcbiAgICAgID8gY29sb3JOYW1lc09ialtyYXdDb2xvcl0udG9Mb3dlckNhc2UoKVxuICAgICAgOiBudWxsO1xuICBjb25zdCBjbGVhbkNvbG9yID0gbmFtZWRDb2xvciB8fCByYXdDb2xvcjtcblxuICBpZiAoY2xlYW5Db2xvci5zdGFydHNXaXRoKCcjJykpIHtcbiAgICBjb25zdCBoZXggPSBjbGVhbkNvbG9yLnN1YnN0cmluZygxKTtcblxuICAgIGlmIChoZXgubGVuZ3RoID09PSAzIHx8IGhleC5sZW5ndGggPT09IDQpIHtcbiAgICAgIHJlZCA9IHBhcnNlSW50KGhleFswXSArIGhleFswXSwgMTYpO1xuICAgICAgZ3JlZW4gPSBwYXJzZUludChoZXhbMV0gKyBoZXhbMV0sIDE2KTtcbiAgICAgIGJsdWUgPSBwYXJzZUludChoZXhbMl0gKyBoZXhbMl0sIDE2KTtcbiAgICAgIGlmIChoZXgubGVuZ3RoID09PSA0KSB7XG4gICAgICAgIGFscGhhID0gcGFyc2VJbnQoaGV4WzNdICsgaGV4WzNdLCAxNikgLyAyNTU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChoZXgubGVuZ3RoID09PSA2IHx8IGhleC5sZW5ndGggPT09IDgpIHtcbiAgICAgIHJlZCA9IHBhcnNlSW50KGhleC5zdWJzdHJpbmcoMCwgMiksIDE2KTtcbiAgICAgIGdyZWVuID0gcGFyc2VJbnQoaGV4LnN1YnN0cmluZygyLCA0KSwgMTYpO1xuICAgICAgYmx1ZSA9IHBhcnNlSW50KGhleC5zdWJzdHJpbmcoNCwgNiksIDE2KTtcbiAgICAgIGlmIChoZXgubGVuZ3RoID09PSA4KSB7XG4gICAgICAgIGFscGhhID0gcGFyc2VJbnQoaGV4LnN1YnN0cmluZyg2LCA4KSwgMTYpIC8gMjU1O1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChjbGVhbkNvbG9yLnN0YXJ0c1dpdGgoJ3JnYmEnKSkge1xuICAgIGNvbnN0IHJnYmFWYWx1ZXMgPSBjbGVhbkNvbG9yLm1hdGNoKC9yZ2JhXFwoKFteKV0rKVxcKS8pWzFdLnNwbGl0KCcsJyk7XG4gICAgcmVkID0gcGFyc2VJbnQocmdiYVZhbHVlc1swXSwgMTApO1xuICAgIGdyZWVuID0gcGFyc2VJbnQocmdiYVZhbHVlc1sxXSwgMTApO1xuICAgIGJsdWUgPSBwYXJzZUludChyZ2JhVmFsdWVzWzJdLCAxMCk7XG4gICAgYWxwaGEgPSBwYXJzZUZsb2F0KHJnYmFWYWx1ZXNbM10pO1xuICB9IGVsc2UgaWYgKGNsZWFuQ29sb3Iuc3RhcnRzV2l0aCgncmdiJykpIHtcbiAgICBjb25zdCByZ2JWYWx1ZXMgPSBjbGVhbkNvbG9yLm1hdGNoKC9yZ2JcXCgoW14pXSspXFwpLylbMV0uc3BsaXQoJywnKTtcbiAgICByZWQgPSBwYXJzZUludChyZ2JWYWx1ZXNbMF0sIDEwKTtcbiAgICBncmVlbiA9IHBhcnNlSW50KHJnYlZhbHVlc1sxXSwgMTApO1xuICAgIGJsdWUgPSBwYXJzZUludChyZ2JWYWx1ZXNbMl0sIDEwKTtcbiAgfSBlbHNlIGlmIChjbGVhbkNvbG9yLnN0YXJ0c1dpdGgoJ2hzbGEnKSkge1xuICAgIGNvbnN0IGhzbGFWYWx1ZXMgPSBjbGVhbkNvbG9yLm1hdGNoKC9oc2xhXFwoKFteKV0rKVxcKS8pWzFdLnNwbGl0KCcsJyk7XG4gICAgY29uc3QgaCA9IHBhcnNlRmxvYXQoaHNsYVZhbHVlc1swXSk7XG4gICAgY29uc3QgcyA9IHBhcnNlRmxvYXQoaHNsYVZhbHVlc1sxXS5yZXBsYWNlKCclJywgJycpKSAvIDEwMDtcbiAgICBjb25zdCBsID0gcGFyc2VGbG9hdChoc2xhVmFsdWVzWzJdLnJlcGxhY2UoJyUnLCAnJykpIC8gMTAwO1xuICAgIGFscGhhID0gcGFyc2VGbG9hdChoc2xhVmFsdWVzWzNdKTtcblxuICAgIC8vIENvbnZlcnQgSFNMIHRvIFJHQlxuICAgIGNvbnN0IEMgPSAoMSAtIE1hdGguYWJzKDIgKiBsIC0gMSkpICogcztcbiAgICBjb25zdCBYID0gQyAqICgxIC0gTWF0aC5hYnMoKChoIC8gNjApICUgMikgLSAxKSk7XG4gICAgY29uc3QgbSA9IGwgLSBDIC8gMjtcbiAgICBsZXQgUjtcbiAgICBsZXQgRztcbiAgICBsZXQgQjtcblxuICAgIGlmIChoID49IDAgJiYgaCA8IDYwKSB7XG4gICAgICBSID0gQztcbiAgICAgIEcgPSBYO1xuICAgICAgQiA9IDA7XG4gICAgfSBlbHNlIGlmIChoID49IDYwICYmIGggPCAxMjApIHtcbiAgICAgIFIgPSBYO1xuICAgICAgRyA9IEM7XG4gICAgICBCID0gMDtcbiAgICB9IGVsc2UgaWYgKGggPj0gMTIwICYmIGggPCAxODApIHtcbiAgICAgIFIgPSAwO1xuICAgICAgRyA9IEM7XG4gICAgICBCID0gWDtcbiAgICB9IGVsc2UgaWYgKGggPj0gMTgwICYmIGggPCAyNDApIHtcbiAgICAgIFIgPSAwO1xuICAgICAgRyA9IFg7XG4gICAgICBCID0gQztcbiAgICB9IGVsc2UgaWYgKGggPj0gMjQwICYmIGggPCAzMDApIHtcbiAgICAgIFIgPSBYO1xuICAgICAgRyA9IDA7XG4gICAgICBCID0gQztcbiAgICB9IGVsc2Uge1xuICAgICAgUiA9IEM7XG4gICAgICBHID0gMDtcbiAgICAgIEIgPSBYO1xuICAgIH1cblxuICAgIHJlZCA9IE1hdGgucm91bmQoKFIgKyBtKSAqIDI1NSk7XG4gICAgZ3JlZW4gPSBNYXRoLnJvdW5kKChHICsgbSkgKiAyNTUpO1xuICAgIGJsdWUgPSBNYXRoLnJvdW5kKChCICsgbSkgKiAyNTUpO1xuICB9IGVsc2UgaWYgKGNsZWFuQ29sb3Iuc3RhcnRzV2l0aCgnaHNsJykpIHtcbiAgICBjb25zdCBoc2xWYWx1ZXMgPSBjbGVhbkNvbG9yLm1hdGNoKC9oc2xcXCgoW14pXSspXFwpLylbMV0uc3BsaXQoJywnKTtcbiAgICBjb25zdCBoID0gcGFyc2VGbG9hdChoc2xWYWx1ZXNbMF0pO1xuICAgIGNvbnN0IHMgPSBwYXJzZUZsb2F0KGhzbFZhbHVlc1sxXS5yZXBsYWNlKCclJywgJycpKSAvIDEwMDtcbiAgICBjb25zdCBsID0gcGFyc2VGbG9hdChoc2xWYWx1ZXNbMl0ucmVwbGFjZSgnJScsICcnKSkgLyAxMDA7XG5cbiAgICAvLyBDb252ZXJ0IEhTTCB0byBSR0IgKHdpdGhvdXQgYWxwaGEpXG4gICAgY29uc3QgQyA9ICgxIC0gTWF0aC5hYnMoMiAqIGwgLSAxKSkgKiBzO1xuICAgIGNvbnN0IFggPSBDICogKDEgLSBNYXRoLmFicygoKGggLyA2MCkgJSAyKSAtIDEpKTtcbiAgICBjb25zdCBtID0gbCAtIEMgLyAyO1xuICAgIGxldCBSO1xuICAgIGxldCBHO1xuICAgIGxldCBCO1xuXG4gICAgaWYgKGggPj0gMCAmJiBoIDwgNjApIHtcbiAgICAgIFIgPSBDO1xuICAgICAgRyA9IFg7XG4gICAgICBCID0gMDtcbiAgICB9IGVsc2UgaWYgKGggPj0gNjAgJiYgaCA8IDEyMCkge1xuICAgICAgUiA9IFg7XG4gICAgICBHID0gQztcbiAgICAgIEIgPSAwO1xuICAgIH0gZWxzZSBpZiAoaCA+PSAxMjAgJiYgaCA8IDE4MCkge1xuICAgICAgUiA9IDA7XG4gICAgICBHID0gQztcbiAgICAgIEIgPSBYO1xuICAgIH0gZWxzZSBpZiAoaCA+PSAxODAgJiYgaCA8IDI0MCkge1xuICAgICAgUiA9IDA7XG4gICAgICBHID0gWDtcbiAgICAgIEIgPSBDO1xuICAgIH0gZWxzZSBpZiAoaCA+PSAyNDAgJiYgaCA8IDMwMCkge1xuICAgICAgUiA9IFg7XG4gICAgICBHID0gMDtcbiAgICAgIEIgPSBDO1xuICAgIH0gZWxzZSB7XG4gICAgICBSID0gQztcbiAgICAgIEcgPSAwO1xuICAgICAgQiA9IFg7XG4gICAgfVxuXG4gICAgcmVkID0gTWF0aC5yb3VuZCgoUiArIG0pICogMjU1KTtcbiAgICBncmVlbiA9IE1hdGgucm91bmQoKEcgKyBtKSAqIDI1NSk7XG4gICAgYmx1ZSA9IE1hdGgucm91bmQoKEIgKyBtKSAqIDI1NSk7XG4gIH1cblxuICBpZiAoTnVtYmVyLmlzTmFOKHJlZCkgfHwgTnVtYmVyLmlzTmFOKGdyZWVuKSB8fCBOdW1iZXIuaXNOYU4oYmx1ZSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBgSW52YWxpZCBjb2xvciBpbiBbaXgyL3NoYXJlZC91dGlscy9ub3JtYWxpemVDb2xvci5qc10gJyR7aW5wdXRDb2xvcn0nYFxuICAgICk7XG4gIH1cblxuICByZXR1cm4ge3JlZCwgZ3JlZW4sIGJsdWUsIGFscGhhfTtcbn1cbiJdLCJuYW1lcyI6WyJub3JtYWxpemVDb2xvciIsImNvbG9yTmFtZXNPYmoiLCJhbGljZWJsdWUiLCJhbnRpcXVld2hpdGUiLCJhcXVhIiwiYXF1YW1hcmluZSIsImF6dXJlIiwiYmVpZ2UiLCJiaXNxdWUiLCJibGFjayIsImJsYW5jaGVkYWxtb25kIiwiYmx1ZSIsImJsdWV2aW9sZXQiLCJicm93biIsImJ1cmx5d29vZCIsImNhZGV0Ymx1ZSIsImNoYXJ0cmV1c2UiLCJjaG9jb2xhdGUiLCJjb3JhbCIsImNvcm5mbG93ZXJibHVlIiwiY29ybnNpbGsiLCJjcmltc29uIiwiY3lhbiIsImRhcmtibHVlIiwiZGFya2N5YW4iLCJkYXJrZ29sZGVucm9kIiwiZGFya2dyYXkiLCJkYXJrZ3JlZW4iLCJkYXJrZ3JleSIsImRhcmtraGFraSIsImRhcmttYWdlbnRhIiwiZGFya29saXZlZ3JlZW4iLCJkYXJrb3JhbmdlIiwiZGFya29yY2hpZCIsImRhcmtyZWQiLCJkYXJrc2FsbW9uIiwiZGFya3NlYWdyZWVuIiwiZGFya3NsYXRlYmx1ZSIsImRhcmtzbGF0ZWdyYXkiLCJkYXJrc2xhdGVncmV5IiwiZGFya3R1cnF1b2lzZSIsImRhcmt2aW9sZXQiLCJkZWVwcGluayIsImRlZXBza3libHVlIiwiZGltZ3JheSIsImRpbWdyZXkiLCJkb2RnZXJibHVlIiwiZmlyZWJyaWNrIiwiZmxvcmFsd2hpdGUiLCJmb3Jlc3RncmVlbiIsImZ1Y2hzaWEiLCJnYWluc2Jvcm8iLCJnaG9zdHdoaXRlIiwiZ29sZCIsImdvbGRlbnJvZCIsImdyYXkiLCJncmVlbiIsImdyZWVueWVsbG93IiwiZ3JleSIsImhvbmV5ZGV3IiwiaG90cGluayIsImluZGlhbnJlZCIsImluZGlnbyIsIml2b3J5Iiwia2hha2kiLCJsYXZlbmRlciIsImxhdmVuZGVyYmx1c2giLCJsYXduZ3JlZW4iLCJsZW1vbmNoaWZmb24iLCJsaWdodGJsdWUiLCJsaWdodGNvcmFsIiwibGlnaHRjeWFuIiwibGlnaHRnb2xkZW5yb2R5ZWxsb3ciLCJsaWdodGdyYXkiLCJsaWdodGdyZWVuIiwibGlnaHRncmV5IiwibGlnaHRwaW5rIiwibGlnaHRzYWxtb24iLCJsaWdodHNlYWdyZWVuIiwibGlnaHRza3libHVlIiwibGlnaHRzbGF0ZWdyYXkiLCJsaWdodHNsYXRlZ3JleSIsImxpZ2h0c3RlZWxibHVlIiwibGlnaHR5ZWxsb3ciLCJsaW1lIiwibGltZWdyZWVuIiwibGluZW4iLCJtYWdlbnRhIiwibWFyb29uIiwibWVkaXVtYXF1YW1hcmluZSIsIm1lZGl1bWJsdWUiLCJtZWRpdW1vcmNoaWQiLCJtZWRpdW1wdXJwbGUiLCJtZWRpdW1zZWFncmVlbiIsIm1lZGl1bXNsYXRlYmx1ZSIsIm1lZGl1bXNwcmluZ2dyZWVuIiwibWVkaXVtdHVycXVvaXNlIiwibWVkaXVtdmlvbGV0cmVkIiwibWlkbmlnaHRibHVlIiwibWludGNyZWFtIiwibWlzdHlyb3NlIiwibW9jY2FzaW4iLCJuYXZham93aGl0ZSIsIm5hdnkiLCJvbGRsYWNlIiwib2xpdmUiLCJvbGl2ZWRyYWIiLCJvcmFuZ2UiLCJvcmFuZ2VyZWQiLCJvcmNoaWQiLCJwYWxlZ29sZGVucm9kIiwicGFsZWdyZWVuIiwicGFsZXR1cnF1b2lzZSIsInBhbGV2aW9sZXRyZWQiLCJwYXBheWF3aGlwIiwicGVhY2hwdWZmIiwicGVydSIsInBpbmsiLCJwbHVtIiwicG93ZGVyYmx1ZSIsInB1cnBsZSIsInJlYmVjY2FwdXJwbGUiLCJyZWQiLCJyb3N5YnJvd24iLCJyb3lhbGJsdWUiLCJzYWRkbGVicm93biIsInNhbG1vbiIsInNhbmR5YnJvd24iLCJzZWFncmVlbiIsInNlYXNoZWxsIiwic2llbm5hIiwic2lsdmVyIiwic2t5Ymx1ZSIsInNsYXRlYmx1ZSIsInNsYXRlZ3JheSIsInNsYXRlZ3JleSIsInNub3ciLCJzcHJpbmdncmVlbiIsInN0ZWVsYmx1ZSIsInRhbiIsInRlYWwiLCJ0aGlzdGxlIiwidG9tYXRvIiwidHVycXVvaXNlIiwidmlvbGV0Iiwid2hlYXQiLCJ3aGl0ZSIsIndoaXRlc21va2UiLCJ5ZWxsb3ciLCJ5ZWxsb3dncmVlbiIsImlucHV0Q29sb3IiLCJhbHBoYSIsInJhd0NvbG9yIiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwibmFtZWRDb2xvciIsImNsZWFuQ29sb3IiLCJzdGFydHNXaXRoIiwiaGV4Iiwic3Vic3RyaW5nIiwibGVuZ3RoIiwicGFyc2VJbnQiLCJyZ2JhVmFsdWVzIiwibWF0Y2giLCJzcGxpdCIsInBhcnNlRmxvYXQiLCJyZ2JWYWx1ZXMiLCJoc2xhVmFsdWVzIiwiaCIsInMiLCJsIiwiQyIsIk1hdGgiLCJhYnMiLCJYIiwibSIsIlIiLCJHIiwiQiIsInJvdW5kIiwiaHNsVmFsdWVzIiwiTnVtYmVyIiwiaXNOYU4iLCJFcnJvciJdLCJtYXBwaW5ncyI6IkFBQUEscUJBQXFCO0FBQ3JCLHFCQUFxQjtBQUNyQixvREFBb0Q7Ozs7OytCQXdKcENBOzs7ZUFBQUE7OztBQXZKaEIsTUFBTUMsZ0JBQWdCO0lBQ3BCQyxXQUFXO0lBQ1hDLGNBQWM7SUFDZEMsTUFBTTtJQUNOQyxZQUFZO0lBQ1pDLE9BQU87SUFDUEMsT0FBTztJQUNQQyxRQUFRO0lBQ1JDLE9BQU87SUFDUEMsZ0JBQWdCO0lBQ2hCQyxNQUFNO0lBQ05DLFlBQVk7SUFDWkMsT0FBTztJQUNQQyxXQUFXO0lBQ1hDLFdBQVc7SUFDWEMsWUFBWTtJQUNaQyxXQUFXO0lBQ1hDLE9BQU87SUFDUEMsZ0JBQWdCO0lBQ2hCQyxVQUFVO0lBQ1ZDLFNBQVM7SUFDVEMsTUFBTTtJQUNOQyxVQUFVO0lBQ1ZDLFVBQVU7SUFDVkMsZUFBZTtJQUNmQyxVQUFVO0lBQ1ZDLFdBQVc7SUFDWEMsVUFBVTtJQUNWQyxXQUFXO0lBQ1hDLGFBQWE7SUFDYkMsZ0JBQWdCO0lBQ2hCQyxZQUFZO0lBQ1pDLFlBQVk7SUFDWkMsU0FBUztJQUNUQyxZQUFZO0lBQ1pDLGNBQWM7SUFDZEMsZUFBZTtJQUNmQyxlQUFlO0lBQ2ZDLGVBQWU7SUFDZkMsZUFBZTtJQUNmQyxZQUFZO0lBQ1pDLFVBQVU7SUFDVkMsYUFBYTtJQUNiQyxTQUFTO0lBQ1RDLFNBQVM7SUFDVEMsWUFBWTtJQUNaQyxXQUFXO0lBQ1hDLGFBQWE7SUFDYkMsYUFBYTtJQUNiQyxTQUFTO0lBQ1RDLFdBQVc7SUFDWEMsWUFBWTtJQUNaQyxNQUFNO0lBQ05DLFdBQVc7SUFDWEMsTUFBTTtJQUNOQyxPQUFPO0lBQ1BDLGFBQWE7SUFDYkMsTUFBTTtJQUNOQyxVQUFVO0lBQ1ZDLFNBQVM7SUFDVEMsV0FBVztJQUNYQyxRQUFRO0lBQ1JDLE9BQU87SUFDUEMsT0FBTztJQUNQQyxVQUFVO0lBQ1ZDLGVBQWU7SUFDZkMs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

}),
9468: (function (__unused_webpack_module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    // IX2Actions,
    IX2BrowserSupport: function() {
        return _IX2BrowserSupport;
    },
    IX2EasingUtils: function() {
        return _IX2EasingUtils;
    },
    IX2Easings: function() {
        return _IX2Easings;
    },
    IX2ElementsReducer: function() {
        return _IX2ElementsReducer;
    },
    IX2VanillaPlugins: function() {
        return _IX2VanillaPlugins;
    },
    IX2VanillaUtils: function() {
        return _IX2VanillaUtils;
    }
});
const _IX2BrowserSupport = /*#__PURE__*/ _interop_require_wildcard(__webpack_require__(2662));
const _IX2Easings = /*#__PURE__*/ _interop_require_wildcard(__webpack_require__(8686));
const _IX2EasingUtils = /*#__PURE__*/ _interop_require_wildcard(__webpack_require__(3767));
const _IX2ElementsReducer = /*#__PURE__*/ _interop_require_wildcard(__webpack_require__(5861));
const _IX2VanillaPlugins = /*#__PURE__*/ _interop_require_wildcard(__webpack_require__(1799));
const _IX2VanillaUtils = /*#__PURE__*/ _interop_require_wildcard(__webpack_require__(4124));
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIElYMkJyb3dzZXJTdXBwb3J0IGZyb20gJy4vbG9naWMvSVgyQnJvd3NlclN1cHBvcnQnO1xuaW1wb3J0ICogYXMgSVgyRWFzaW5ncyBmcm9tICcuL2xvZ2ljL0lYMkVhc2luZ3MnO1xuaW1wb3J0ICogYXMgSVgyRWFzaW5nVXRpbHMgZnJvbSAnLi9sb2dpYy9JWDJFYXNpbmdVdGlscyc7XG5pbXBvcnQgKiBhcyBJWDJFbGVtZW50c1JlZHVjZXIgZnJvbSAnLi9yZWR1Y2Vycy9JWDJFbGVtZW50c1JlZHVjZXInO1xuaW1wb3J0ICogYXMgSVgyVmFuaWxsYVBsdWdpbnMgZnJvbSAnLi9sb2dpYy9JWDJWYW5pbGxhUGx1Z2lucyc7XG5pbXBvcnQgKiBhcyBJWDJWYW5pbGxhVXRpbHMgZnJvbSAnLi9sb2dpYy9JWDJWYW5pbGxhVXRpbHMnO1xuZXhwb3J0IHtcbiAgLy8gSVgyQWN0aW9ucyxcbiAgSVgyQnJvd3NlclN1cHBvcnQsXG4gIElYMkVhc2luZ3MsXG4gIElYMkVhc2luZ1V0aWxzLFxuICBJWDJFbGVtZW50c1JlZHVjZXIsXG4gIElYMlZhbmlsbGFQbHVnaW5zLFxuICBJWDJWYW5pbGxhVXRpbHMsXG59O1xuIl0sIm5hbWVzIjpbIklYMkJyb3dzZXJTdXBwb3J0IiwiSVgyRWFzaW5nVXRpbHMiLCJJWDJFYXNpbmdzIiwiSVgyRWxlbWVudHNSZWR1Y2VyIiwiSVgyVmFuaWxsYVBsdWdpbnMiLCJJWDJWYW5pbGxhVXRpbHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBT0UsY0FBYztJQUNkQSxpQkFBaUI7ZUFBakJBOztJQUVBQyxjQUFjO2VBQWRBOztJQURBQyxVQUFVO2VBQVZBOztJQUVBQyxrQkFBa0I7ZUFBbEJBOztJQUNBQyxpQkFBaUI7ZUFBakJBOztJQUNBQyxlQUFlO2VBQWZBOzs7MkVBYmlDO29FQUNQO3dFQUNJOzRFQUNJOzJFQUNEO3lFQUNGIn0=

}),
2662: (function (__unused_webpack_module, exports, __webpack_require__) {
/* eslint-env browser */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ELEMENT_MATCHES: function() {
        return ELEMENT_MATCHES;
    },
    FLEX_PREFIXED: function() {
        return FLEX_PREFIXED;
    },
    IS_BROWSER_ENV: function() {
        return IS_BROWSER_ENV;
    },
    TRANSFORM_PREFIXED: function() {
        return TRANSFORM_PREFIXED;
    },
    TRANSFORM_STYLE_PREFIXED: function() {
        return TRANSFORM_STYLE_PREFIXED;
    },
    withBrowser: function() {
        return withBrowser;
    }
});
const _find = /*#__PURE__*/ _interop_require_default(__webpack_require__(9777));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const IS_BROWSER_ENV = typeof window !== 'undefined';
const withBrowser = (fn, fallback)=>{
    if (IS_BROWSER_ENV) {
        return fn();
    }
    return fallback;
};
const ELEMENT_MATCHES = withBrowser(()=>{
    return (0, _find.default)([
        'matches',
        'matchesSelector',
        'mozMatchesSelector',
        'msMatchesSelector',
        'oMatchesSelector',
        'webkitMatchesSelector'
    ], (key)=>key in Element.prototype);
});
const FLEX_PREFIXED = withBrowser(()=>{
    const el = document.createElement('i');
    const values = [
        'flex',
        '-webkit-flex',
        '-ms-flexbox',
        '-moz-box',
        '-webkit-box'
    ];
    const none = '';
    try {
        const { length } = values;
        for(let i = 0; i < length; i++){
            const value = values[i];
            // @ts-expect-error - TS2322 - Type 'string | undefined' is not assignable to type 'string'.
            el.style.display = value;
            if (el.style.display === value) {
                return value;
            }
        }
        return none;
    } catch (err) {
        return none;
    }
}, 'flex');
const TRANSFORM_PREFIXED = withBrowser(()=>{
    const el = document.createElement('i');
    if (el.style.transform == null) {
        const prefixes = [
            'Webkit',
            'Moz',
            'ms'
        ];
        const suffix = 'Transform';
        const { length } = prefixes;
        for(let i = 0; i < length; i++){
            const prop = prefixes[i] + suffix;
            // @ts-expect-error - TS7015 - Element implicitly has an 'any' type because index expression is not of type 'number'.
            if (el.style[prop] !== undefined) {
                return prop;
            }
        }
    }
    return 'transform';
}, 'transform');
const TRANSFORM_PREFIX = TRANSFORM_PREFIXED.split('transform')[0];
const TRANSFORM_STYLE_PREFIXED = TRANSFORM_PREFIX ? TRANSFORM_PREFIX + 'TransformStyle' : 'transformStyle';

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIklYMkJyb3dzZXJTdXBwb3J0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuaW1wb3J0IGZpbmQgZnJvbSAnbG9kYXNoL2ZpbmQnO1xuXG5leHBvcnQgY29uc3QgSVNfQlJPV1NFUl9FTlYgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJztcblxuZXhwb3J0IGNvbnN0IHdpdGhCcm93c2VyID0gKGZuOiBhbnksIGZhbGxiYWNrOiBhbnkpID0+IHtcbiAgaWYgKElTX0JST1dTRVJfRU5WKSB7XG4gICAgcmV0dXJuIGZuKCk7XG4gIH1cbiAgcmV0dXJuIGZhbGxiYWNrO1xufTtcblxuLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTMjU1NCAtIEV4cGVjdGVkIDIgYXJndW1lbnRzLCBidXQgZ290IDEuXG5leHBvcnQgY29uc3QgRUxFTUVOVF9NQVRDSEVTID0gd2l0aEJyb3dzZXIoKCkgPT4ge1xuICByZXR1cm4gZmluZChcbiAgICBbXG4gICAgICAnbWF0Y2hlcycsXG4gICAgICAnbWF0Y2hlc1NlbGVjdG9yJyxcbiAgICAgICdtb3pNYXRjaGVzU2VsZWN0b3InLFxuICAgICAgJ21zTWF0Y2hlc1NlbGVjdG9yJyxcbiAgICAgICdvTWF0Y2hlc1NlbGVjdG9yJyxcbiAgICAgICd3ZWJraXRNYXRjaGVzU2VsZWN0b3InLFxuICAgIF0sXG4gICAgKGtleSkgPT4ga2V5IGluIEVsZW1lbnQucHJvdG90eXBlXG4gICk7XG59KTtcblxuZXhwb3J0IGNvbnN0IEZMRVhfUFJFRklYRUQgPSB3aXRoQnJvd3NlcigoKSA9PiB7XG4gIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICBjb25zdCB2YWx1ZXMgPSBbXG4gICAgJ2ZsZXgnLFxuICAgICctd2Via2l0LWZsZXgnLFxuICAgICctbXMtZmxleGJveCcsXG4gICAgJy1tb3otYm94JyxcbiAgICAnLXdlYmtpdC1ib3gnLFxuICBdO1xuICBjb25zdCBub25lID0gJyc7XG4gIHRyeSB7XG4gICAgY29uc3Qge2xlbmd0aH0gPSB2YWx1ZXM7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgdmFsdWUgPSB2YWx1ZXNbaV07XG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFMyMzIyIC0gVHlwZSAnc3RyaW5nIHwgdW5kZWZpbmVkJyBpcyBub3QgYXNzaWduYWJsZSB0byB0eXBlICdzdHJpbmcnLlxuICAgICAgZWwuc3R5bGUuZGlzcGxheSA9IHZhbHVlO1xuICAgICAgaWYgKGVsLnN0eWxlLmRpc3BsYXkgPT09IHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5vbmU7XG4gIH0gY2F0Y2ggKGVycjogYW55KSB7XG4gICAgcmV0dXJuIG5vbmU7XG4gIH1cbn0sICdmbGV4Jyk7XG5cbmV4cG9ydCBjb25zdCBUUkFOU0ZPUk1fUFJFRklYRUQgPSB3aXRoQnJvd3NlcigoKSA9PiB7XG4gIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICBpZiAoZWwuc3R5bGUudHJhbnNmb3JtID09IG51bGwpIHtcbiAgICBjb25zdCBwcmVmaXhlcyA9IFsnV2Via2l0JywgJ01veicsICdtcyddO1xuICAgIGNvbnN0IHN1ZmZpeCA9ICdUcmFuc2Zvcm0nO1xuICAgIGNvbnN0IHtsZW5ndGh9ID0gcHJlZml4ZXM7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgcHJvcCA9IHByZWZpeGVzW2ldICsgc3VmZml4O1xuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTNzAxNSAtIEVsZW1lbnQgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZSBiZWNhdXNlIGluZGV4IGV4cHJlc3Npb24gaXMgbm90IG9mIHR5cGUgJ251bWJlcicuXG4gICAgICBpZiAoZWwuc3R5bGVbcHJvcF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gcHJvcDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuICd0cmFuc2Zvcm0nO1xufSwgJ3RyYW5zZm9ybScpO1xuXG5jb25zdCBUUkFOU0ZPUk1fUFJFRklYID0gVFJBTlNGT1JNX1BSRUZJWEVELnNwbGl0KCd0cmFuc2Zvcm0nKVswXTtcblxuZXhwb3J0IGNvbnN0IFRSQU5TRk9STV9TVFlMRV9QUkVGSVhFRCA9IFRSQU5TRk9STV9QUkVGSVhcbiAgPyBUUkFOU0ZPUk1fUFJFRklYICsgJ1RyYW5zZm9ybVN0eWxlJ1xuICA6ICd0cmFuc2Zvcm1TdHlsZSc7XG4iXSwibmFtZXMiOlsiRUxFTUVOVF9NQVRDSEVTIiwiRkxFWF9QUkVGSVhFRCIsIklTX0JST1dTRVJfRU5WIiwiVFJBTlNGT1JNX1BSRUZJWEVEIiwiVFJBTlNGT1JNX1NUWUxFX1BSRUZJWEVEIiwid2l0aEJyb3dzZXIiLCJ3aW5kb3ciLCJmbiIsImZhbGxiYWNrIiwiZmluZCIsImtleSIsIkVsZW1lbnQiLCJwcm90b3R5cGUiLCJlbCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInZhbHVlcyIsIm5vbmUiLCJsZW5ndGgiLCJpIiwidmFsdWUiLCJzdHlsZSIsImRpc3BsYXkiLCJlcnIiLCJ0cmFuc2Zvcm0iLCJwcmVmaXhlcyIsInN1ZmZpeCIsInByb3AiLCJ1bmRlZmluZWQiLCJUUkFOU0ZPUk1fUFJFRklYIiwic3BsaXQiXSwibWFwcGluZ3MiOiJBQUFBLHNCQUFzQjs7Ozs7Ozs7Ozs7SUFhVEEsZUFBZTtlQUFmQTs7SUFjQUMsYUFBYTtlQUFiQTs7SUF4QkFDLGNBQWM7ZUFBZEE7O0lBa0RBQyxrQkFBa0I7ZUFBbEJBOztJQW1CQUMsd0JBQXdCO2VBQXhCQTs7SUFuRUFDLFdBQVc7ZUFBWEE7Ozs2REFKSTs7Ozs7O0FBRVYsTUFBTUgsaUJBQWlCLE9BQU9JLFdBQVc7QUFFekMsTUFBTUQsY0FBYyxDQUFDRSxJQUFTQztJQUNuQyxJQUFJTixnQkFBZ0I7UUFDbEIsT0FBT0s7SUFDVDtJQUNBLE9BQU9DO0FBQ1Q7QUFHTyxNQUFNUixrQkFBa0JLLFlBQVk7SUFDekMsT0FBT0ksSUFBQUEsYUFBSSxFQUNUO1FBQ0U7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO0tBQ0QsRUFDRCxDQUFDQyxNQUFRQSxPQUFPQyxRQUFRQyxTQUFTO0FBRXJDO0FBRU8sTUFBTVgsZ0JBQWdCSSxZQUFZO0lBQ3ZDLE1BQU1RLEtBQUtDLFNBQVNDLGFBQWEsQ0FBQztJQUNsQyxNQUFNQyxTQUFTO1FBQ2I7UUFDQTtRQUNBO1FBQ0E7UUFDQTtLQUNEO0lBQ0QsTUFBTUMsT0FBTztJQUNiLElBQUk7UUFDRixNQUFNLEVBQUNDLE1BQU0sRUFBQyxHQUFHRjtRQUNqQixJQUFLLElBQUlHLElBQUksR0FBR0EsSUFBSUQsUUFBUUMsSUFBSztZQUMvQixNQUFNQyxRQUFRSixNQUFNLENBQUNHLEVBQUU7WUFDdkIsNEZBQTRGO1lBQzVGTixHQUFHUSxLQUFLLENBQUNDLE9BQU8sR0FBR0Y7WUFDbkIsSUFBSVAsR0FBR1EsS0FBSyxDQUFDQyxPQUFPLEtBQUtGLE9BQU87Z0JBQzlCLE9BQU9BO1lBQ1Q7UUFDRjtRQUNBLE9BQU9IO0lBQ1QsRUFBRSxPQUFPTSxLQUFVO1FBQ2pCLE9BQU9OO0lBQ1Q7QUFDRixHQUFHO0FBRUksTUFBTWQscUJBQXFCRSxZQUFZO0lBQzVDLE1BQU1RLEtBQUtDLFNBQVNDLGFBQWEsQ0FBQztJQUNsQyxJQUFJRixHQUFHUSxLQUFLLENBQUNHLFNBQVMsSUFBSSxNQUFNO1FBQzlCLE1BQU1DLFdBQVc7WUFBQztZQUFVO1lBQU87U0FBSztRQUN4QyxNQUFNQyxTQUFTO1FBQ2YsTUFBTSxFQUFDUixNQUFNLEVBQUMsR0FBR087UUFDakIsSUFBSyxJQUFJTixJQUFJLEdBQUdBLElBQUlELFFBQVFDLElBQUs7WUFDL0IsTUFBTVEsT0FBT0YsUUFBUSxDQUFDTixFQUFFLEdBQUdPO1lBQzNCLHFIQUFxSDtZQUNySCxJQUFJYixHQUFHUSxLQUFLLENBQUNNLEtBQUssS0FBS0MsV0FBVztnQkFDaEMsT0FBT0Q7WUFDVDtRQUNGO0lBQ0Y7SUFDQSxPQUFPO0FBQ1QsR0FBRztBQUVILE1BQU1FLG1CQUFtQjFCLG1CQUFtQjJCLEtBQUssQ0FBQyxZQUFZLENBQUMsRUFBRTtBQUUxRCxNQUFNMUIsMkJBQTJCeUIsbUJBQ3BDQSxtQkFBbUIsbUJBQ25CIn0=

}),
3767: (function (__unused_webpack_module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    applyEasing: function() {
        return applyEasing;
    },
    createBezierEasing: function() {
        return createBezierEasing;
    },
    optimizeFloat: function() {
        return optimizeFloat;
    }
});
const _IX2Easings = /*#__PURE__*/ _interop_require_wildcard(__webpack_require__(8686));
const _beziereasing = /*#__PURE__*/ _interop_require_default(__webpack_require__(1361));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
function optimizeFloat(value, digits = 5, base = 10) {
    const pow = Math.pow(base, digits);
    const float = Number(Math.round(value * pow) / pow);
    return Math.abs(float) > 0.0001 ? float : 0;
}
function createBezierEasing(easing) {
    return (0, _beziereasing.default)(...easing);
}
function applyEasing(easing, position, customEasingFn) {
    if (position === 0) {
        return 0;
    }
    if (position === 1) {
        return 1;
    }
    if (customEasingFn) {
        return optimizeFloat(position > 0 ? customEasingFn(position) : position);
    }
    return optimizeFloat(position > 0 && easing && _IX2Easings[easing] ? _IX2Easings[easing](position) : position);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIklYMkVhc2luZ1V0aWxzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHtcbiAgSVgyRWFzaW5nRW51bVR5cGUsXG4gIElYMkVhc2luZ0N1c3RvbVR5cGUsXG59IGZyb20gJ0BwYWNrYWdlcy9zeXN0ZW1zL2l4Mi90eXBlcy1jb3JlJztcbmltcG9ydCAqIGFzIGVhc2luZ3MgZnJvbSAnLi9JWDJFYXNpbmdzJztcbi8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwMTYgLSBDb3VsZCBub3QgZmluZCBhIGRlY2xhcmF0aW9uIGZpbGUgZm9yIG1vZHVsZSAnYmV6aWVyLWVhc2luZycuICcvaG9tZS9ydW5uZXIvd29yay9mbG93LXRvLXR5cGVzY3JpcHQtY29kZW1vZC9mbG93LXRvLXR5cGVzY3JpcHQtY29kZW1vZC93ZWJmbG93L25vZGVfbW9kdWxlcy9iZXppZXItZWFzaW5nL3NyYy9pbmRleC5qcycgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS5cbmltcG9ydCBCZXppZXJFYXNpbmcgZnJvbSAnYmV6aWVyLWVhc2luZyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBvcHRpbWl6ZUZsb2F0KFxuICB2YWx1ZTogbnVtYmVyLFxuICBkaWdpdHM6IG51bWJlciA9IDUsXG4gIGJhc2U6IG51bWJlciA9IDEwXG4pOiBudW1iZXIge1xuICBjb25zdCBwb3cgPSBNYXRoLnBvdyhiYXNlLCBkaWdpdHMpO1xuICBjb25zdCBmbG9hdCA9IE51bWJlcihNYXRoLnJvdW5kKHZhbHVlICogcG93KSAvIHBvdyk7XG4gIHJldHVybiBNYXRoLmFicyhmbG9hdCkgPiAwLjAwMDEgPyBmbG9hdCA6IDA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVCZXppZXJFYXNpbmcoXG4gIGVhc2luZzogSVgyRWFzaW5nQ3VzdG9tVHlwZVxuKTogKGFyZzE6IG51bWJlcikgPT4gbnVtYmVyIHtcbiAgcmV0dXJuIEJlemllckVhc2luZyguLi5lYXNpbmcpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlFYXNpbmcoXG4gIGVhc2luZzogSVgyRWFzaW5nRW51bVR5cGUsXG4gIHBvc2l0aW9uOiBudW1iZXIsXG4gIGN1c3RvbUVhc2luZ0ZuPzogKGFyZzE6IG51bWJlcikgPT4gbnVtYmVyXG4pIHtcbiAgaWYgKHBvc2l0aW9uID09PSAwKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbiAgaWYgKHBvc2l0aW9uID09PSAxKSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICBpZiAoY3VzdG9tRWFzaW5nRm4pIHtcbiAgICByZXR1cm4gb3B0aW1pemVGbG9hdChwb3NpdGlvbiA+IDAgPyBjdXN0b21FYXNpbmdGbihwb3NpdGlvbikgOiBwb3NpdGlvbik7XG4gIH1cblxuICByZXR1cm4gb3B0aW1pemVGbG9hdChcbiAgICBwb3NpdGlvbiA+IDAgJiYgZWFzaW5nICYmIGVhc2luZ3NbZWFzaW5nXVxuICAgICAgPyBlYXNpbmdzW2Vhc2luZ10ocG9zaXRpb24pXG4gICAgICA6IHBvc2l0aW9uXG4gICk7XG59XG4iXSwibmFtZXMiOlsiYXBwbHlFYXNpbmciLCJjcmVhdGVCZXppZXJFYXNpbmciLCJvcHRpbWl6ZUZsb2F0IiwidmFsdWUiLCJkaWdpdHMiLCJiYXNlIiwicG93IiwiTWF0aCIsImZsb2F0IiwiTnVtYmVyIiwicm91bmQiLCJhYnMiLCJlYXNpbmciLCJCZXppZXJFYXNpbmciLCJwb3NpdGlvbiIsImN1c3RvbUVhc2luZ0ZuIiwiZWFzaW5ncyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUF3QmdCQSxXQUFXO2VBQVhBOztJQU5BQyxrQkFBa0I7ZUFBbEJBOztJQVZBQyxhQUFhO2VBQWJBOzs7b0VBSlM7cUVBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxCLFNBQVNBLGNBQ2RDLEtBQWEsRUFDYkMsU0FBaUIsQ0FBQyxFQUNsQkMsT0FBZSxFQUFFO0lBRWpCLE1BQU1DLE1BQU1DLEtBQUtELEdBQUcsQ0FBQ0QsTUFBTUQ7SUFDM0IsTUFBTUksUUFBUUMsT0FBT0YsS0FBS0csS0FBSyxDQUFDUCxRQUFRRyxPQUFPQTtJQUMvQyxPQUFPQyxLQUFLSSxHQUFHLENBQUNILFNBQVMsU0FBU0EsUUFBUTtBQUM1QztBQUVPLFNBQVNQLG1CQUNkVyxNQUEyQjtJQUUzQixPQUFPQyxJQUFBQSxxQkFBWSxLQUFJRDtBQUN6QjtBQUVPLFNBQVNaLFlBQ2RZLE1BQXlCLEVBQ3pCRSxRQUFnQixFQUNoQkMsY0FBeUM7SUFFekMsSUFBSUQsYUFBYSxHQUFHO1FBQ2xCLE9BQU87SUFDVDtJQUNBLElBQUlBLGFBQWEsR0FBRztRQUNsQixPQUFPO0lBQ1Q7SUFFQSxJQUFJQyxnQkFBZ0I7UUFDbEIsT0FBT2IsY0FBY1ksV0FBVyxJQUFJQyxlQUFlRCxZQUFZQTtJQUNqRTtJQUVBLE9BQU9aLGNBQ0xZLFdBQVcsS0FBS0YsVUFBVUksV0FBTyxDQUFDSixPQUFPLEdBQ3JDSSxXQUFPLENBQUNKLE9BQU8sQ0FBQ0UsWUFDaEJBO0FBRVIifQ==

}),
8686: (function (__unused_webpack_module, exports, __webpack_require__) {
// @ts-expect-error - TS7016 - Could not find a declaration file for module 'bezier-easing'. '/home/runner/work/flow-to-typescript-codemod/flow-to-typescript-codemod/webflow/node_modules/bezier-easing/src/index.js' implicitly has an 'any' type.

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    bounce: function() {
        return bounce;
    },
    bouncePast: function() {
        return bouncePast;
    },
    ease: function() {
        return ease;
    },
    easeIn: function() {
        return easeIn;
    },
    easeInOut: function() {
        return easeInOut;
    },
    easeOut: function() {
        return easeOut;
    },
    inBack: function() {
        return inBack;
    },
    inCirc: function() {
        return inCirc;
    },
    inCubic: function() {
        return inCubic;
    },
    inElastic: function() {
        return inElastic;
    },
    inExpo: function() {
        return inExpo;
    },
    inOutBack: function() {
        return inOutBack;
    },
    inOutCirc: function() {
        return inOutCirc;
    },
    inOutCubic: function() {
        return inOutCubic;
    },
    inOutElastic: function() {
        return inOutElastic;
    },
    inOutExpo: function() {
        return inOutExpo;
    },
    inOutQuad: function() {
        return inOutQuad;
    },
    inOutQuart: function() {
        return inOutQuart;
    },
    inOutQuint: function() {
        return inOutQuint;
    },
    inOutSine: function() {
        return inOutSine;
    },
    inQuad: function() {
        return inQuad;
    },
    inQuart: function() {
        return inQuart;
    },
    inQuint: function() {
        return inQuint;
    },
    inSine: function() {
        return inSine;
    },
    outBack: function() {
        return outBack;
    },
    outBounce: function() {
        return outBounce;
    },
    outCirc: function() {
        return outCirc;
    },
    outCubic: function() {
        return outCubic;
    },
    outElastic: function() {
        return outElastic;
    },
    outExpo: function() {
        return outExpo;
    },
    outQuad: function() {
        return outQuad;
    },
    outQuart: function() {
        return outQuart;
    },
    outQuint: function() {
        return outQuint;
    },
    outSine: function() {
        return outSine;
    },
    swingFrom: function() {
        return swingFrom;
    },
    swingFromTo: function() {
        return swingFromTo;
    },
    swingTo: function() {
        return swingTo;
    }
});
const _beziereasing = /*#__PURE__*/ _interop_require_default(__webpack_require__(1361));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
// Easing functions adapted from Thomas Fuchs & Jeremy Kahn
// Easing Equations (c) 2003 Robert Penner, BSD license
// https://raw.github.com/danro/easing-js/master/LICENSE
const magicSwing = 1.70158;
const ease = (0, _beziereasing.default)(0.25, 0.1, 0.25, 1.0);
const easeIn = (0, _beziereasing.default)(0.42, 0.0, 1.0, 1.0);
const easeOut = (0, _beziereasing.default)(0.0, 0.0, 0.58, 1.0);
const easeInOut = (0, _beziereasing.default)(0.42, 0.0, 0.58, 1.0);
function inQuad(pos) {
    return Math.pow(pos, 2);
}
function outQuad(pos) {
    return -(Math.pow(pos - 1, 2) - 1);
}
function inOutQuad(pos) {
    if ((pos /= 0.5) < 1) {
        return 0.5 * Math.pow(pos, 2);
    }
    return -0.5 * ((pos -= 2) * pos - 2);
}
function inCubic(pos) {
    return Math.pow(pos, 3);
}
function outCubic(pos) {
    return Math.pow(pos - 1, 3) + 1;
}
function inOutCubic(pos) {
    if ((pos /= 0.5) < 1) {
        return 0.5 * Math.pow(pos, 3);
    }
    return 0.5 * (Math.pow(pos - 2, 3) + 2);
}
function inQuart(pos) {
    return Math.pow(pos, 4);
}
function outQuart(pos) {
    return -(Math.pow(pos - 1, 4) - 1);
}
function inOutQuart(pos) {
    if ((pos /= 0.5) < 1) {
        return 0.5 * Math.pow(pos, 4);
    }
    return -0.5 * ((pos -= 2) * Math.pow(pos, 3) - 2);
}
function inQuint(pos) {
    return Math.pow(pos, 5);
}
function outQuint(pos) {
    return Math.pow(pos - 1, 5) + 1;
}
function inOutQuint(pos) {
    if ((pos /= 0.5) < 1) {
        return 0.5 * Math.pow(pos, 5);
    }
    return 0.5 * (Math.pow(pos - 2, 5) + 2);
}
function inSine(pos) {
    return -Math.cos(pos * (Math.PI / 2)) + 1;
}
function outSine(pos) {
    return Math.sin(pos * (Math.PI / 2));
}
function inOutSine(pos) {
    return -0.5 * (Math.cos(Math.PI * pos) - 1);
}
function inExpo(pos) {
    return pos === 0 ? 0 : Math.pow(2, 10 * (pos - 1));
}
function outExpo(pos) {
    return pos === 1 ? 1 : -Math.pow(2, -10 * pos) + 1;
}
function inOutExpo(pos) {
    if (pos === 0) {
        return 0;
    }
    if (pos === 1) {
        return 1;
    }
    if ((pos /= 0.5) < 1) {
        return 0.5 * Math.pow(2, 10 * (pos - 1));
    }
    return 0.5 * (-Math.pow(2, -10 * --pos) + 2);
}
function inCirc(pos) {
    return -(Math.sqrt(1 - pos * pos) - 1);
}
function outCirc(pos) {
    return Math.sqrt(1 - Math.pow(pos - 1, 2));
}
function inOutCirc(pos) {
    if ((pos /= 0.5) < 1) {
        return -0.5 * (Math.sqrt(1 - pos * pos) - 1);
    }
    return 0.5 * (Math.sqrt(1 - (pos -= 2) * pos) + 1);
}
function outBounce(pos) {
    if (pos < 1 / 2.75) {
        return 7.5625 * pos * pos;
    } else if (pos < 2 / 2.75) {
        return 7.5625 * (pos -= 1.5 / 2.75) * pos + 0.75;
    } else if (pos < 2.5 / 2.75) {
        return 7.5625 * (pos -= 2.25 / 2.75) * pos + 0.9375;
    } else {
        return 7.5625 * (pos -= 2.625 / 2.75) * pos + 0.984375;
    }
}
function inBack(pos) {
    const s = magicSwing;
    return pos * pos * ((s + 1) * pos - s);
}
function outBack(pos) {
    const s = magicSwing;
    return (pos -= 1) * pos * ((s + 1) * pos + s) + 1;
}
function inOutBack(pos) {
    let s = magicSwing;
    if ((pos /= 0.5) < 1) {
        return 0.5 * (pos * pos * (((s *= 1.525) + 1) * pos - s));
    }
    return 0.5 * ((pos -= 2) * pos * (((s *= 1.525) + 1) * pos + s) + 2);
}
function inElastic(pos) {
    let s = magicSwing;
    let p = 0;
    let a = 1;
    if (pos === 0) {
        return 0;
    }
    if (pos === 1) {
        return 1;
    }
    if (!p) {
        p = 0.3;
    }
    if (a < 1) {
        a = 1;
        s = p / 4;
    } else {
        s = p / (2 * Math.PI) * Math.asin(1 / a);
    }
    return -(a * Math.pow(2, 10 * (pos -= 1)) * Math.sin((pos - s) * (2 * Math.PI) / p));
}
function outElastic(pos) {
    let s = magicSwing;
    let p = 0;
    let a = 1;
    if (pos === 0) {
        return 0;
    }
    if (pos === 1) {
        return 1;
    }
    if (!p) {
        p = 0.3;
    }
    if (a < 1) {
        a = 1;
        s = p / 4;
    } else {
        s = p / (2 * Math.PI) * Math.asin(1 / a);
    }
    return a * Math.pow(2, -10 * pos) * Math.sin((pos - s) * (2 * Math.PI) / p) + 1;
}
function inOutElastic(pos) {
    let s = magicSwing;
    let p = 0;
    let a = 1;
    if (pos === 0) {
        return 0;
    }
    if ((pos /= 1 / 2) === 2) {
        return 1;
    }
    if (!p) {
        p = 0.3 * 1.5;
    }
    if (a < 1) {
        a = 1;
        s = p / 4;
    } else {
        s = p / (2 * Math.PI) * Math.asin(1 / a);
    }
    if (pos < 1) {
        return -0.5 * (a * Math.pow(2, 10 * (pos -= 1)) * Math.sin((pos - s) * (2 * Math.PI) / p));
    }
    return a * Math.pow(2, -10 * (pos -= 1)) * Math.sin((pos - s) * (2 * Math.PI) / p) * 0.5 + 1;
}
function swingFromTo(pos) {
    let s = magicSwing;
    return (pos /= 0.5) < 1 ? 0.5 * (pos * pos * (((s *= 1.525) + 1) * pos - s)) : 0.5 * ((pos -= 2) * pos * (((s *= 1.525) + 1) * pos + s) + 2);
}
function swingFrom(pos) {
    const s = magicSwing;
    return pos * pos * ((s + 1) * pos - s);
}
function swingTo(pos) {
    const s = magicSwing;
    return (pos -= 1) * pos * ((s + 1) * pos + s) + 1;
}
function bounce(pos) {
    if (pos < 1 / 2.75) {
        return 7.5625 * pos * pos;
    } else if (pos < 2 / 2.75) {
        return 7.5625 * (pos -= 1.5 / 2.75) * pos + 0.75;
    } else if (pos < 2.5 / 2.75) {
        return 7.5625 * (pos -= 2.25 / 2.75) * pos + 0.9375;
    } else {
        return 7.5625 * (pos -= 2.625 / 2.75) * pos + 0.984375;
    }
}
function bouncePast(pos) {
    if (pos < 1 / 2.75) {
        return 7.5625 * pos * pos;
    } else if (pos < 2 / 2.75) {
        return 2 - (7.5625 * (pos -= 1.5 / 2.75) * pos + 0.75);
    } else if (pos < 2.5 / 2.75) {
        return 2 - (7.5625 * (pos -= 2.25 / 2.75) * pos + 0.9375);
    } else {
        return 2 - (7.5625 * (pos -= 2.625 / 2.75) * pos + 0.984375);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIklYMkVhc2luZ3MudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTNzAxNiAtIENvdWxkIG5vdCBmaW5kIGEgZGVjbGFyYXRpb24gZmlsZSBmb3IgbW9kdWxlICdiZXppZXItZWFzaW5nJy4gJy9ob21lL3J1bm5lci93b3JrL2Zsb3ctdG8tdHlwZXNjcmlwdC1jb2RlbW9kL2Zsb3ctdG8tdHlwZXNjcmlwdC1jb2RlbW9kL3dlYmZsb3cvbm9kZV9tb2R1bGVzL2Jlemllci1lYXNpbmcvc3JjL2luZGV4LmpzJyBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlLlxuaW1wb3J0IEJlemllckVhc2luZyBmcm9tICdiZXppZXItZWFzaW5nJztcblxuLy8gRWFzaW5nIGZ1bmN0aW9ucyBhZGFwdGVkIGZyb20gVGhvbWFzIEZ1Y2hzICYgSmVyZW15IEthaG5cbi8vIEVhc2luZyBFcXVhdGlvbnMgKGMpIDIwMDMgUm9iZXJ0IFBlbm5lciwgQlNEIGxpY2Vuc2Vcbi8vIGh0dHBzOi8vcmF3LmdpdGh1Yi5jb20vZGFucm8vZWFzaW5nLWpzL21hc3Rlci9MSUNFTlNFXG5cbmNvbnN0IG1hZ2ljU3dpbmcgPSAxLjcwMTU4O1xuXG50eXBlIEVhc2luZ0Z1bmN0aW9uID0gKGFyZzE6IG51bWJlcikgPT4gbnVtYmVyO1xuXG5leHBvcnQgY29uc3QgZWFzZTogRWFzaW5nRnVuY3Rpb24gPSBCZXppZXJFYXNpbmcoMC4yNSwgMC4xLCAwLjI1LCAxLjApO1xuZXhwb3J0IGNvbnN0IGVhc2VJbjogRWFzaW5nRnVuY3Rpb24gPSBCZXppZXJFYXNpbmcoMC40MiwgMC4wLCAxLjAsIDEuMCk7XG5leHBvcnQgY29uc3QgZWFzZU91dDogRWFzaW5nRnVuY3Rpb24gPSBCZXppZXJFYXNpbmcoMC4wLCAwLjAsIDAuNTgsIDEuMCk7XG5leHBvcnQgY29uc3QgZWFzZUluT3V0OiBFYXNpbmdGdW5jdGlvbiA9IEJlemllckVhc2luZygwLjQyLCAwLjAsIDAuNTgsIDEuMCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBpblF1YWQocG9zOiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gTWF0aC5wb3cocG9zLCAyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG91dFF1YWQocG9zOiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gLShNYXRoLnBvdyhwb3MgLSAxLCAyKSAtIDEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5PdXRRdWFkKHBvczogbnVtYmVyKTogbnVtYmVyIHtcbiAgaWYgKChwb3MgLz0gMC41KSA8IDEpIHtcbiAgICByZXR1cm4gMC41ICogTWF0aC5wb3cocG9zLCAyKTtcbiAgfVxuICByZXR1cm4gLTAuNSAqICgocG9zIC09IDIpICogcG9zIC0gMik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbkN1YmljKHBvczogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIE1hdGgucG93KHBvcywgMyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvdXRDdWJpYyhwb3M6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiBNYXRoLnBvdyhwb3MgLSAxLCAzKSArIDE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbk91dEN1YmljKHBvczogbnVtYmVyKTogbnVtYmVyIHtcbiAgaWYgKChwb3MgLz0gMC41KSA8IDEpIHtcbiAgICByZXR1cm4gMC41ICogTWF0aC5wb3cocG9zLCAzKTtcbiAgfVxuICByZXR1cm4gMC41ICogKE1hdGgucG93KHBvcyAtIDIsIDMpICsgMik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpblF1YXJ0KHBvczogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIE1hdGgucG93KHBvcywgNCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvdXRRdWFydChwb3M6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiAtKE1hdGgucG93KHBvcyAtIDEsIDQpIC0gMSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbk91dFF1YXJ0KHBvczogbnVtYmVyKTogbnVtYmVyIHtcbiAgaWYgKChwb3MgLz0gMC41KSA8IDEpIHtcbiAgICByZXR1cm4gMC41ICogTWF0aC5wb3cocG9zLCA0KTtcbiAgfVxuICByZXR1cm4gLTAuNSAqICgocG9zIC09IDIpICogTWF0aC5wb3cocG9zLCAzKSAtIDIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5RdWludChwb3M6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiBNYXRoLnBvdyhwb3MsIDUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb3V0UXVpbnQocG9zOiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gTWF0aC5wb3cocG9zIC0gMSwgNSkgKyAxO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5PdXRRdWludChwb3M6IG51bWJlcik6IG51bWJlciB7XG4gIGlmICgocG9zIC89IDAuNSkgPCAxKSB7XG4gICAgcmV0dXJuIDAuNSAqIE1hdGgucG93KHBvcywgNSk7XG4gIH1cbiAgcmV0dXJuIDAuNSAqIChNYXRoLnBvdyhwb3MgLSAyLCA1KSArIDIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5TaW5lKHBvczogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIC1NYXRoLmNvcyhwb3MgKiAoTWF0aC5QSSAvIDIpKSArIDE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvdXRTaW5lKHBvczogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIE1hdGguc2luKHBvcyAqIChNYXRoLlBJIC8gMikpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5PdXRTaW5lKHBvczogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIC0wLjUgKiAoTWF0aC5jb3MoTWF0aC5QSSAqIHBvcykgLSAxKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluRXhwbyhwb3M6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiBwb3MgPT09IDAgPyAwIDogTWF0aC5wb3coMiwgMTAgKiAocG9zIC0gMSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb3V0RXhwbyhwb3M6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiBwb3MgPT09IDEgPyAxIDogLU1hdGgucG93KDIsIC0xMCAqIHBvcykgKyAxO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5PdXRFeHBvKHBvczogbnVtYmVyKTogbnVtYmVyIHtcbiAgaWYgKHBvcyA9PT0gMCkge1xuICAgIHJldHVybiAwO1xuICB9XG4gIGlmIChwb3MgPT09IDEpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuICBpZiAoKHBvcyAvPSAwLjUpIDwgMSkge1xuICAgIHJldHVybiAwLjUgKiBNYXRoLnBvdygyLCAxMCAqIChwb3MgLSAxKSk7XG4gIH1cbiAgcmV0dXJuIDAuNSAqICgtTWF0aC5wb3coMiwgLTEwICogLS1wb3MpICsgMik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbkNpcmMocG9zOiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gLShNYXRoLnNxcnQoMSAtIHBvcyAqIHBvcykgLSAxKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG91dENpcmMocG9zOiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gTWF0aC5zcXJ0KDEgLSBNYXRoLnBvdyhwb3MgLSAxLCAyKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbk91dENpcmMocG9zOiBudW1iZXIpOiBudW1iZXIge1xuICBpZiAoKHBvcyAvPSAwLjUpIDwgMSkge1xuICAgIHJldHVybiAtMC41ICogKE1hdGguc3FydCgxIC0gcG9zICogcG9zKSAtIDEpO1xuICB9XG4gIHJldHVybiAwLjUgKiAoTWF0aC5zcXJ0KDEgLSAocG9zIC09IDIpICogcG9zKSArIDEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb3V0Qm91bmNlKHBvczogbnVtYmVyKTogbnVtYmVyIHtcbiAgaWYgKHBvcyA8IDEgLyAyLjc1KSB7XG4gICAgcmV0dXJuIDcuNTYyNSAqIHBvcyAqIHBvcztcbiAgfSBlbHNlIGlmIChwb3MgPCAyIC8gMi43NSkge1xuICAgIHJldHVybiA3LjU2MjUgKiAocG9zIC09IDEuNSAvIDIuNzUpICogcG9zICsgMC43NTtcbiAgfSBlbHNlIGlmIChwb3MgPCAyLjUgLyAyLjc1KSB7XG4gICAgcmV0dXJuIDcuNTYyNSAqIChwb3MgLT0gMi4yNSAvIDIuNzUpICogcG9zICsgMC45Mzc1O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiA3LjU2MjUgKiAocG9zIC09IDIuNjI1IC8gMi43NSkgKiBwb3MgKyAwLjk4NDM3NTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5CYWNrKHBvczogbnVtYmVyKTogbnVtYmVyIHtcbiAgY29uc3QgcyA9IG1hZ2ljU3dpbmc7XG4gIHJldHVybiBwb3MgKiBwb3MgKiAoKHMgKyAxKSAqIHBvcyAtIHMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb3V0QmFjayhwb3M6IG51bWJlcik6IG51bWJlciB7XG4gIGNvbnN0IHMgPSBtYWdpY1N3aW5nO1xuICByZXR1cm4gKHBvcyAtPSAxKSAqIHBvcyAqICgocyArIDEpICogcG9zICsgcykgKyAxO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5PdXRCYWNrKHBvczogbnVtYmVyKTogbnVtYmVyIHtcbiAgbGV0IHMgPSBtYWdpY1N3aW5nO1xuICBpZiAoKHBvcyAvPSAwLjUpIDwgMSkge1xuICAgIHJldHVybiAwLjUgKiAocG9zICogcG9zICogKCgocyAqPSAxLjUyNSkgKyAxKSAqIHBvcyAtIHMpKTtcbiAgfVxuICByZXR1cm4gMC41ICogKChwb3MgLT0gMikgKiBwb3MgKiAoKChzICo9IDEuNTI1KSArIDEpICogcG9zICsgcykgKyAyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluRWxhc3RpYyhwb3M6IG51bWJlcik6IG51bWJlciB7XG4gIGxldCBzID0gbWFnaWNTd2luZztcbiAgbGV0IHAgPSAwO1xuICBsZXQgYSA9IDE7XG4gIGlmIChwb3MgPT09IDApIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuICBpZiAocG9zID09PSAxKSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cbiAgaWYgKCFwKSB7XG4gICAgcCA9IDAuMztcbiAgfVxuICBpZiAoYSA8IDEpIHtcbiAgICBhID0gMTtcbiAgICBzID0gcCAvIDQ7XG4gIH0gZWxzZSB7XG4gICAgcyA9IChwIC8gKDIgKiBNYXRoLlBJKSkgKiBNYXRoLmFzaW4oMSAvIGEpO1xuICB9XG4gIHJldHVybiAtKFxuICAgIGEgKlxuICAgIE1hdGgucG93KDIsIDEwICogKHBvcyAtPSAxKSkgKlxuICAgIE1hdGguc2luKCgocG9zIC0gcykgKiAoMiAqIE1hdGguUEkpKSAvIHApXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvdXRFbGFzdGljKHBvczogbnVtYmVyKTogbnVtYmVyIHtcbiAgbGV0IHMgPSBtYWdpY1N3aW5nO1xuICBsZXQgcCA9IDA7XG4gIGxldCBhID0gMTtcbiAgaWYgKHBvcyA9PT0gMCkge1xuICAgIHJldHVybiAwO1xuICB9XG4gIGlmIChwb3MgPT09IDEpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuICBpZiAoIXApIHtcbiAgICBwID0gMC4zO1xuICB9XG4gIGlmIChhIDwgMSkge1xuICAgIGEgPSAxO1xuICAgIHMgPSBwIC8gNDtcbiAgfSBlbHNlIHtcbiAgICBzID0gKHAgLyAoMiAqIE1hdGguUEkpKSAqIE1hdGguYXNpbigxIC8gYSk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICBhICogTWF0aC5wb3coMiwgLTEwICogcG9zKSAqIE1hdGguc2luKCgocG9zIC0gcykgKiAoMiAqIE1hdGguUEkpKSAvIHApICsgMVxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5PdXRFbGFzdGljKHBvczogbnVtYmVyKTogbnVtYmVyIHtcbiAgbGV0IHMgPSBtYWdpY1N3aW5nO1xuICBsZXQgcCA9IDA7XG4gIGxldCBhID0gMTtcbiAgaWYgKHBvcyA9PT0gMCkge1xuICAgIHJldHVybiAwO1xuICB9XG4gIGlmICgocG9zIC89IDEgLyAyKSA9PT0gMikge1xuICAgIHJldHVybiAxO1xuICB9XG4gIGlmICghcCkge1xuICAgIHAgPSAwLjMgKiAxLjU7XG4gIH1cbiAgaWYgKGEgPCAxKSB7XG4gICAgYSA9IDE7XG4gICAgcyA9IHAgLyA0O1xuICB9IGVsc2Uge1xuICAgIHMgPSAocCAvICgyICogTWF0aC5QSSkpICogTWF0aC5hc2luKDEgLyBhKTtcbiAgfVxuICBpZiAocG9zIDwgMSkge1xuICAgIHJldHVybiAoXG4gICAgICAtMC41ICpcbiAgICAgIChhICpcbiAgICAgICAgTWF0aC5wb3coMiwgMTAgKiAocG9zIC09IDEpKSAqXG4gICAgICAgIE1hdGguc2luKCgocG9zIC0gcykgKiAoMiAqIE1hdGguUEkpKSAvIHApKVxuICAgICk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICBhICpcbiAgICAgIE1hdGgucG93KDIsIC0xMCAqIChwb3MgLT0gMSkpICpcbiAgICAgIE1hdGguc2luKCgocG9zIC0gcykgKiAoMiAqIE1hdGguUEkpKSAvIHApICpcbiAgICAgIDAuNSArXG4gICAgMVxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3dpbmdGcm9tVG8ocG9zOiBudW1iZXIpOiBudW1iZXIge1xuICBsZXQgcyA9IG1hZ2ljU3dpbmc7XG4gIHJldHVybiAocG9zIC89IDAuNSkgPCAxXG4gICAgPyAwLjUgKiAocG9zICogcG9zICogKCgocyAqPSAxLjUyNSkgKyAxKSAqIHBvcyAtIHMpKVxuICAgIDogMC41ICogKChwb3MgLT0gMikgKiBwb3MgKiAoKChzICo9IDEuNTI1KSArIDEpICogcG9zICsgcykgKyAyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN3aW5nRnJvbShwb3M6IG51bWJlcik6IG51bWJlciB7XG4gIGNvbnN0IHMgPSBtYWdpY1N3aW5nO1xuICByZXR1cm4gcG9zICogcG9zICogKChzICsgMSkgKiBwb3MgLSBzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN3aW5nVG8ocG9zOiBudW1iZXIpOiBudW1iZXIge1xuICBjb25zdCBzID0gbWFnaWNTd2luZztcbiAgcmV0dXJuIChwb3MgLT0gMSkgKiBwb3MgKiAoKHMgKyAxKSAqIHBvcyArIHMpICsgMTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5jZShwb3M6IG51bWJlcik6IG51bWJlciB7XG4gIGlmIChwb3MgPCAxIC8gMi43NSkge1xuICAgIHJldHVybiA3LjU2MjUgKiBwb3MgKiBwb3M7XG4gIH0gZWxzZSBpZiAocG9zIDwgMiAvIDIuNzUpIHtcbiAgICByZXR1cm4gNy41NjI1ICogKHBvcyAtPSAxLjUgLyAyLjc1KSAqIHBvcyArIDAuNzU7XG4gIH0gZWxzZSBpZiAocG9zIDwgMi41IC8gMi43NSkge1xuICAgIHJldHVybiA3LjU2MjUgKiAocG9zIC09IDIuMjUgLyAyLjc1KSAqIHBvcyArIDAuOTM3NTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gNy41NjI1ICogKHBvcyAtPSAyLjYyNSAvIDIuNzUpICogcG9zICsgMC45ODQzNzU7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvdW5jZVBhc3QocG9zOiBudW1iZXIpOiBudW1iZXIge1xuICBpZiAocG9zIDwgMSAvIDIuNzUpIHtcbiAgICByZXR1cm4gNy41NjI1ICogcG9zICogcG9zO1xuICB9IGVsc2UgaWYgKHBvcyA8IDIgLyAyLjc1KSB7XG4gICAgcmV0dXJuIDIgLSAoNy41NjI1ICogKHBvcyAtPSAxLjUgLyAyLjc1KSAqIHBvcyArIDAuNzUpO1xuICB9IGVsc2UgaWYgKHBvcyA8IDIuNSAvIDIuNzUpIHtcbiAgICByZXR1cm4gMiAtICg3LjU2MjUgKiAocG9zIC09IDIuMjUgLyAyLjc1KSAqIHBvcyArIDAuOTM3NSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDIgLSAoNy41NjI1ICogKHBvcyAtPSAyLjYyNSAvIDIuNzUpICogcG9zICsgMC45ODQzNzUpO1xuICB9XG59XG4iXSwibmFtZXMiOlsiYm91bmNlIiwiYm91bmNlUGFzdCIsImVhc2UiLCJlYXNlSW4iLCJlYXNlSW5PdXQiLCJlYXNlT3V0IiwiaW5CYWNrIiwiaW5DaXJjIiwiaW5DdWJpYyIsImluRWxhc3RpYyIsImluRXhwbyIsImluT3V0QmFjayIsImluT3V0Q2lyYyIsImluT3V0Q3ViaWMiLCJpbk91dEVsYXN0aWMiLCJpbk91dEV4cG8iLCJpbk91dFF1YWQiLCJpbk91dFF1YXJ0IiwiaW5PdXRRdWludCIsImluT3V0U2luZSIsImluUXVhZCIsImluUXVhcnQiLCJpblF1aW50IiwiaW5TaW5lIiwib3V0QmFjayIsIm91dEJvdW5jZSIsIm91dENpcmMiLCJvdXRDdWJpYyIsIm91dEVsYXN0aWMiLCJvdXRFeHBvIiwib3V0UXVhZCIsIm91dFF1YXJ0Iiwib3V0UXVpbnQiLCJvdXRTaW5lIiwic3dpbmdGcm9tIiwic3dpbmdGcm9tVG8iLCJzd2luZ1RvIiwibWFnaWNTd2luZyIsIkJlemllckVhc2luZyIsInBvcyIsIk1hdGgiLCJwb3ciLCJjb3MiLCJQSSIsInNpbiIsInNxcnQiLCJzIiwicCIsImEiLCJhc2luIl0sIm1hcHBpbmdzIjoiQUFBQSxvUEFBb1A7Ozs7Ozs7Ozs7OztJQWlRcE9BLE1BQU07ZUFBTkE7O0lBWUFDLFVBQVU7ZUFBVkE7O0lBbFFIQyxJQUFJO2VBQUpBOztJQUNBQyxNQUFNO2VBQU5BOztJQUVBQyxTQUFTO2VBQVRBOztJQURBQyxPQUFPO2VBQVBBOztJQTJIR0MsTUFBTTtlQUFOQTs7SUEzQkFDLE1BQU07ZUFBTkE7O0lBOUVBQyxPQUFPO2VBQVBBOztJQTJIQUMsU0FBUztlQUFUQTs7SUFsRUFDLE1BQU07ZUFBTkE7O0lBMERBQyxTQUFTO2VBQVRBOztJQTdCQUMsU0FBUztlQUFUQTs7SUE5RUFDLFVBQVU7ZUFBVkE7O0lBcUtBQyxZQUFZO2VBQVpBOztJQTVHQUMsU0FBUztlQUFUQTs7SUF4RUFDLFNBQVM7ZUFBVEE7O0lBOEJBQyxVQUFVO2VBQVZBOztJQWVBQyxVQUFVO2VBQVZBOztJQWVBQyxTQUFTO2VBQVRBOztJQXBFQUMsTUFBTTtlQUFOQTs7SUE4QkFDLE9BQU87ZUFBUEE7O0lBZUFDLE9BQU87ZUFBUEE7O0lBZUFDLE1BQU07ZUFBTkE7O0lBaUVBQyxPQUFPO2VBQVBBOztJQWpCQUMsU0FBUztlQUFUQTs7SUFYQUMs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

}),
1799: (function (__unused_webpack_module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    clearPlugin: function() {
        return clearPlugin;
    },
    createPluginInstance: function() {
        return createPluginInstance;
    },
    getPluginConfig: function() {
        return getPluginConfig;
    },
    getPluginDestination: function() {
        return getPluginDestination;
    },
    getPluginDuration: function() {
        return getPluginDuration;
    },
    getPluginOrigin: function() {
        return getPluginOrigin;
    },
    isPluginType: function() {
        return isPluginType;
    },
    renderPlugin: function() {
        return renderPlugin;
    }
});
const _IX2BrowserSupport = __webpack_require__(2662);
const _plugins = __webpack_require__(3690);
function isPluginType(actionTypeId) {
    // @ts-expect-error - TS2345 - Argument of type '"TRANSFORM_MOVE" | "TRANSFORM_SCALE" | "TRANSFORM_ROTATE" | "TRANSFORM_SKEW" | "STYLE_OPACITY" | "STYLE_SIZE" | "STYLE_FILTER" | "STYLE_FONT_VARIATION" | "STYLE_BACKGROUND_COLOR" | ... 12 more ... | "STYLE_BOX_SHADOW"' is not assignable to parameter of type '"PLUGIN_LOTTIE" | "PLUGIN_SPLINE" | "PLUGIN_VARIABLE"'.
    return _plugins.pluginMethodMap.has(actionTypeId);
}
const pluginMethod = (methodName)=>(actionTypeId)=>{
        if (!_IX2BrowserSupport.IS_BROWSER_ENV) {
            // IX2 plugins require browser libs for now
            return ()=>null;
        }
        const plugin = _plugins.pluginMethodMap.get(actionTypeId);
        if (!plugin) {
            throw new Error(`IX2 no plugin configured for: ${actionTypeId}`);
        }
        const method = plugin[methodName];
        if (!method) {
            throw new Error(`IX2 invalid plugin method: ${methodName}`);
        }
        return method;
    };
const getPluginConfig = pluginMethod('getPluginConfig');
const getPluginOrigin = pluginMethod('getPluginOrigin');
const getPluginDuration = pluginMethod('getPluginDuration');
const getPluginDestination = pluginMethod('getPluginDestination');
const createPluginInstance = pluginMethod('createPluginInstance');
const renderPlugin = pluginMethod('renderPlugin');
const clearPlugin = pluginMethod('clearPlugin');

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIklYMlZhbmlsbGFQbHVnaW5zLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SVNfQlJPV1NFUl9FTlZ9IGZyb20gJy4vSVgyQnJvd3NlclN1cHBvcnQnO1xuaW1wb3J0IHtwbHVnaW5NZXRob2RNYXB9IGZyb20gJ0BwYWNrYWdlcy9zeXN0ZW1zL2l4Mi9wbHVnaW5zJztcblxuaW1wb3J0IHR5cGUge0FjdGlvblR5cGVJZFR5cGV9IGZyb20gJ0BwYWNrYWdlcy9zeXN0ZW1zL2l4Mi90eXBlcy1jb3JlJztcbmltcG9ydCB0eXBlIHtQbHVnaW5UeXBlfSBmcm9tICdAcGFja2FnZXMvc3lzdGVtcy9peDIvcGx1Z2lucyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1BsdWdpblR5cGUoYWN0aW9uVHlwZUlkOiBBY3Rpb25UeXBlSWRUeXBlKTogYm9vbGVhbiB7XG4gIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzIzNDUgLSBBcmd1bWVudCBvZiB0eXBlICdcIlRSQU5TRk9STV9NT1ZFXCIgfCBcIlRSQU5TRk9STV9TQ0FMRVwiIHwgXCJUUkFOU0ZPUk1fUk9UQVRFXCIgfCBcIlRSQU5TRk9STV9TS0VXXCIgfCBcIlNUWUxFX09QQUNJVFlcIiB8IFwiU1RZTEVfU0laRVwiIHwgXCJTVFlMRV9GSUxURVJcIiB8IFwiU1RZTEVfRk9OVF9WQVJJQVRJT05cIiB8IFwiU1RZTEVfQkFDS0dST1VORF9DT0xPUlwiIHwgLi4uIDEyIG1vcmUgLi4uIHwgXCJTVFlMRV9CT1hfU0hBRE9XXCInIGlzIG5vdCBhc3NpZ25hYmxlIHRvIHBhcmFtZXRlciBvZiB0eXBlICdcIlBMVUdJTl9MT1RUSUVcIiB8IFwiUExVR0lOX1NQTElORVwiIHwgXCJQTFVHSU5fVkFSSUFCTEVcIicuXG4gIHJldHVybiBwbHVnaW5NZXRob2RNYXAuaGFzKGFjdGlvblR5cGVJZCk7XG59XG5cbnR5cGUgUGx1Z2luTWV0aG9kTmFtZSA9XG4gIHwgJ2dldFBsdWdpbkNvbmZpZydcbiAgfCAnZ2V0UGx1Z2luT3JpZ2luJ1xuICB8ICdnZXRQbHVnaW5EdXJhdGlvbidcbiAgfCAnZ2V0UGx1Z2luRGVzdGluYXRpb24nXG4gIHwgJ2NyZWF0ZVBsdWdpbkluc3RhbmNlJ1xuICB8ICdyZW5kZXJQbHVnaW4nXG4gIHwgJ2NsZWFyUGx1Z2luJztcblxuY29uc3QgcGx1Z2luTWV0aG9kID1cbiAgKG1ldGhvZE5hbWU6IFBsdWdpbk1ldGhvZE5hbWUpID0+IChhY3Rpb25UeXBlSWQ6IFBsdWdpblR5cGUpID0+IHtcbiAgICBpZiAoIUlTX0JST1dTRVJfRU5WKSB7XG4gICAgICAvLyBJWDIgcGx1Z2lucyByZXF1aXJlIGJyb3dzZXIgbGlicyBmb3Igbm93XG4gICAgICByZXR1cm4gKCkgPT4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgcGx1Z2luID0gcGx1Z2luTWV0aG9kTWFwLmdldChhY3Rpb25UeXBlSWQpO1xuICAgIGlmICghcGx1Z2luKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYElYMiBubyBwbHVnaW4gY29uZmlndXJlZCBmb3I6ICR7YWN0aW9uVHlwZUlkfWApO1xuICAgIH1cbiAgICBjb25zdCBtZXRob2QgPSBwbHVnaW5bbWV0aG9kTmFtZV07XG4gICAgaWYgKCFtZXRob2QpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSVgyIGludmFsaWQgcGx1Z2luIG1ldGhvZDogJHttZXRob2ROYW1lfWApO1xuICAgIH1cbiAgICByZXR1cm4gbWV0aG9kO1xuICB9O1xuXG5leHBvcnQgY29uc3QgZ2V0UGx1Z2luQ29uZmlnID0gcGx1Z2luTWV0aG9kKCdnZXRQbHVnaW5Db25maWcnKTtcbmV4cG9ydCBjb25zdCBnZXRQbHVnaW5PcmlnaW4gPSBwbHVnaW5NZXRob2QoJ2dldFBsdWdpbk9yaWdpbicpO1xuZXhwb3J0IGNvbnN0IGdldFBsdWdpbkR1cmF0aW9uID0gcGx1Z2luTWV0aG9kKCdnZXRQbHVnaW5EdXJhdGlvbicpO1xuZXhwb3J0IGNvbnN0IGdldFBsdWdpbkRlc3RpbmF0aW9uID0gcGx1Z2luTWV0aG9kKCdnZXRQbHVnaW5EZXN0aW5hdGlvbicpO1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVBsdWdpbkluc3RhbmNlID0gcGx1Z2luTWV0aG9kKCdjcmVhdGVQbHVnaW5JbnN0YW5jZScpO1xuZXhwb3J0IGNvbnN0IHJlbmRlclBsdWdpbiA9IHBsdWdpbk1ldGhvZCgncmVuZGVyUGx1Z2luJyk7XG5leHBvcnQgY29uc3QgY2xlYXJQbHVnaW4gPSBwbHVnaW5NZXRob2QoJ2NsZWFyUGx1Z2luJyk7XG4iXSwibmFtZXMiOlsiY2xlYXJQbHVnaW4iLCJjcmVhdGVQbHVnaW5JbnN0YW5jZSIsImdldFBsdWdpbkNvbmZpZyIsImdldFBsdWdpbkRlc3RpbmF0aW9uIiwiZ2V0UGx1Z2luRHVyYXRpb24iLCJnZXRQbHVnaW5PcmlnaW4iLCJpc1BsdWdpblR5cGUiLCJyZW5kZXJQbHVnaW4iLCJhY3Rpb25UeXBlSWQiLCJwbHVnaW5NZXRob2RNYXAiLCJoYXMiLCJwbHVnaW5NZXRob2QiLCJtZXRob2ROYW1lIiwiSVNfQlJPV1NFUl9FTlYiLCJwbHVnaW4iLCJnZXQiLCJFcnJvciIsIm1ldGhvZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUEyQ2FBLFdBQVc7ZUFBWEE7O0lBRkFDLG9CQUFvQjtlQUFwQkE7O0lBSkFDLGVBQWU7ZUFBZkE7O0lBR0FDLG9CQUFvQjtlQUFwQkE7O0lBREFDLGlCQUFpQjtlQUFqQkE7O0lBREFDLGVBQWU7ZUFBZkE7O0lBaENHQyxZQUFZO2VBQVpBOztJQW9DSEMsWUFBWTtlQUFaQTs7O21DQTFDZ0I7eUJBQ0M7QUFLdkIsU0FBU0QsYUFBYUUsWUFBOEI7SUFDekQsMldBQTJXO0lBQzNXLE9BQU9DLHdCQUFlLENBQUNDLEdBQUcsQ0FBQ0Y7QUFDN0I7QUFXQSxNQUFNRyxlQUNKLENBQUNDLGFBQWlDLENBQUNKO1FBQ2pDLElBQUksQ0FBQ0ssaUNBQWMsRUFBRTtZQUNuQiwyQ0FBMkM7WUFDM0MsT0FBTyxJQUFNO1FBQ2Y7UUFDQSxNQUFNQyxTQUFTTCx3QkFBZSxDQUFDTSxHQUFHLENBQUNQO1FBQ25DLElBQUksQ0FBQ00sUUFBUTtZQUNYLE1BQU0sSUFBSUUsTUFBTSxDQUFDLDhCQUE4QixFQUFFUixhQUFhLENBQUM7UUFDakU7UUFDQSxNQUFNUyxTQUFTSCxNQUFNLENBQUNGLFdBQVc7UUFDakMsSUFBSSxDQUFDSyxRQUFRO1lBQ1gsTUFBTSxJQUFJRCxNQUFNLENBQUMsMkJBQTJCLEVBQUVKLFdBQVcsQ0FBQztRQUM1RDtRQUNBLE9BQU9LO0lBQ1Q7QUFFSyxNQUFNZixrQkFBa0JTLGFBQWE7QUFDckMsTUFBTU4sa0JBQWtCTSxhQUFhO0FBQ3JDLE1BQU1QLG9CQUFvQk8sYUFBYTtBQUN2QyxNQUFNUix1QkFBdUJRLGFBQWE7QUFDMUMsTUFBTVYsdUJBQXVCVSxhQUFhO0FBQzFDLE1BQU1KLGVBQWVJLGFBQWE7QUFDbEMsTUFBTVgsY0FBY1csYUFBYSJ9

}),
4124: (function (__unused_webpack_module, exports, __webpack_require__) {
/* eslint-env browser */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    cleanupHTMLElement: function() {
        return cleanupHTMLElement;
    },
    clearAllStyles: function() {
        return clearAllStyles;
    },
    clearObjectCache: function() {
        return clearObjectCache;
    },
    getActionListProgress: function() {
        return getActionListProgress;
    },
    getAffectedElements: function() {
        return getAffectedElements;
    },
    getComputedStyle: function() {
        return getComputedStyle;
    },
    getDestinationValues: function() {
        return getDestinationValues;
    },
    getElementId: function() {
        return getElementId;
    },
    getInstanceId: function() {
        return getInstanceId;
    },
    getInstanceOrigin: function() {
        return getInstanceOrigin;
    },
    getItemConfigByKey: function() {
        return getItemConfigByKey;
    },
    getMaxDurationItemIndex: function() {
        return getMaxDurationItemIndex;
    },
    getNamespacedParameterId: function() {
        return getNamespacedParameterId;
    },
    getRenderType: function() {
        return getRenderType;
    },
    getStyleProp: function() {
        return getStyleProp;
    },
    mediaQueriesEqual: function() {
        return mediaQueriesEqual;
    },
    observeStore: function() {
        return observeStore;
    },
    reduceListToGroup: function() {
        return reduceListToGroup;
    },
    reifyState: function() {
        return reifyState;
    },
    renderHTMLElement: function() {
        return renderHTMLElement;
    },
    shallowEqual: function() {
        return _shallowEqual.default;
    },
    shouldAllowMediaQuery: function() {
        return shouldAllowMediaQuery;
    },
    shouldNamespaceEventParameter: function() {
        return shouldNamespaceEventParameter;
    },
    stringifyTarget: function() {
        return stringifyTarget;
    }
});
const _defaultTo = /*#__PURE__*/ _interop_require_default(__webpack_require__(4075));
const _reduce = /*#__PURE__*/ _interop_require_default(__webpack_require__(1455));
const _findLast = /*#__PURE__*/ _interop_require_default(__webpack_require__(5720));
const _timm = __webpack_require__(1185);
const _sharedconstants = __webpack_require__(7087);
const _shallowEqual = /*#__PURE__*/ _interop_require_default(__webpack_require__(7164));
const _IX2EasingUtils = __webpack_require__(3767);
const _normalizeColor = __webpack_require__(380);
const _IX2VanillaPlugins = __webpack_require__(1799);
const _IX2BrowserSupport = __webpack_require__(2662);
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { BACKGROUND, TRANSFORM, TRANSLATE_3D, SCALE_3D, ROTATE_X, ROTATE_Y, ROTATE_Z, SKEW, PRESERVE_3D, FLEX, OPACITY, FILTER, FONT_VARIATION_SETTINGS, WIDTH, HEIGHT, BACKGROUND_COLOR, BORDER_COLOR, COLOR, CHILDREN, IMMEDIATE_CHILDREN, SIBLINGS, PARENT, DISPLAY, WILL_CHANGE, AUTO, COMMA_DELIMITER, COLON_DELIMITER, BAR_DELIMITER, RENDER_TRANSFORM, RENDER_GENERAL, RENDER_STYLE, RENDER_PLUGIN } = _sharedconstants.IX2EngineConstants;
const { TRANSFORM_MOVE, TRANSFORM_SCALE, TRANSFORM_ROTATE, TRANSFORM_SKEW, STYLE_OPACITY, STYLE_FILTER, STYLE_FONT_VARIATION, STYLE_SIZE, STYLE_BACKGROUND_COLOR, STYLE_BORDER, STYLE_TEXT_COLOR, GENERAL_DISPLAY, OBJECT_VALUE } = _sharedconstants.ActionTypeConsts;
// @ts-expect-error - TS7006 - Parameter 'v' implicitly has an 'any' type.
const trim = (v)=>v.trim();
const colorStyleProps = Object.freeze({
    [STYLE_BACKGROUND_COLOR]: BACKGROUND_COLOR,
    [STYLE_BORDER]: BORDER_COLOR,
    [STYLE_TEXT_COLOR]: COLOR
});
const willChangeProps = Object.freeze({
    [_IX2BrowserSupport.TRANSFORM_PREFIXED]: TRANSFORM,
    [BACKGROUND_COLOR]: BACKGROUND,
    [OPACITY]: OPACITY,
    [FILTER]: FILTER,
    [WIDTH]: WIDTH,
    [HEIGHT]: HEIGHT,
    [FONT_VARIATION_SETTINGS]: FONT_VARIATION_SETTINGS
});
const objectCache = new Map();
function clearObjectCache() {
    objectCache.clear();
}
let instanceCount = 1;
function getInstanceId() {
    return 'i' + instanceCount++;
}
let elementCount = 1;
function getElementId(ixElements, ref) {
    // TODO: optimize element lookup
    for(const key in ixElements){
        const ixEl = ixElements[key];
        if (ixEl && ixEl.ref === ref) {
            return ixEl.id;
        }
    }
    return 'e' + elementCount++;
}
function reifyState({ events, actionLists, site } = {}) {
    const eventTypeMap = (0, _reduce.default)(events, (result, event)=>{
        const { eventTypeId } = event;
        if (!result[eventTypeId]) {
            result[eventTypeId] = {};
        }
        result[eventTypeId][event.id] = event;
        return result;
    }, {});
    let mediaQueries = site && site.mediaQueries;
    let mediaQueryKeys = [];
    if (mediaQueries) {
        mediaQueryKeys = mediaQueries.map((mq)=>mq.key);
    } else {
        mediaQueries = [];
        console.warn(`IX2 missing mediaQueries in site data`);
    }
    return {
        ixData: {
            events,
            actionLists,
            eventTypeMap,
            mediaQueries,
            mediaQueryKeys
        }
    };
}
const strictEqual = (a, b)=>a === b;
function observeStore({ // @ts-expect-error - TS7031 - Binding element 'store' implicitly has an 'any' type.
store, // @ts-expect-error - TS7031 - Binding element 'select' implicitly has an 'any' type.
select, // @ts-expect-error - TS7031 - Binding element 'onChange' implicitly has an 'any' type.
onChange, comparator = strictEqual }) {
    const { getState, subscribe } = store;
    const unsubscribe = subscribe(handleChange);
    let currentState = select(getState());
    function handleChange() {
        const nextState = select(getState());
        if (nextState == null) {
            unsubscribe();
            return;
        }
        if (!comparator(nextState, currentState)) {
            currentState = nextState;
            onChange(currentState, store);
        }
    }
    return unsubscribe;
}
// @ts-expect-error - TS7006 - Parameter 'target' implicitly has an 'any' type.
function normalizeTarget(target) {
    const type = typeof target;
    if (type === 'string') {
        return {
            id: target
        };
    } else if (target != null && type === 'object') {
        const { id, objectId, selector, selectorGuids, appliesTo, useEventTarget } = target;
        return {
            id,
            objectId,
            selector,
            selectorGuids,
            appliesTo,
            useEventTarget
        };
    }
    return {};
}
function getAffectedElements({ config, event, eventTarget, elementRoot, elementApi }) {
    if (!elementApi) {
        throw new Error('IX2 missing elementApi');
    }
    const { targets } = config;
    if (Array.isArray(targets) && targets.length > 0) {
        return targets.reduce((accumulator, target)=>accumulator.concat(getAffectedElements({
                config: {
                    target
                },
                event,
                eventTarget,
                elementRoot,
                elementApi
            })), []);
    }
    const { getValidDocument, getQuerySelector, queryDocument, getChildElements, getSiblingElements, matchSelector, elementContains, isSiblingNode } = elementApi;
    const { target } = config;
    if (!target) {
        return [];
    }
    const { id, objectId, selector, selectorGuids, appliesTo, useEventTarget } = normalizeTarget(target);
    if (objectId) {
        const ref = objectCache.has(objectId) ? objectCache.get(objectId) : objectCache.set(objectId, {}).get(objectId);
        return [
            ref
        ];
    }
    if (appliesTo === _sharedconstants.EventAppliesTo.PAGE) {
        const doc = getValidDocument(id);
        return doc ? [
            doc
        ] : [];
    }
    const overrides = event?.action?.config?.affectedElements ?? {};
    const override = overrides[id || selector] || {};
    const validOverride = Boolean(override.id || override.selector);
    let limitAffectedElements;
    let baseSelector;
    let finalSelector;
    const eventTargetSelector = event && getQuerySelector(normalizeTarget(event.target));
    if (validOverride) {
        limitAffectedElements = override.limitAffectedElements;
        baseSelector = eventTargetSelector;
        finalSelector = getQuerySelector(override);
    } else {
        // pass in selectorGuids as well for server-side rendering.
        baseSelector = finalSelector = getQuerySelector({
            id,
            selector,
            selectorGuids
        });
    }
    if (event && useEventTarget) {
        // eventTarget is not defined when this function is called in a clear request, so find
        // all target elements associated with the event data, and return affected elements.
        const eventTargets = eventTarget && (finalSelector || useEventTarget === true) ? [
            eventTarget
        ] : queryDocument(eventTargetSelector);
        if (finalSelector) {
            if (useEventTarget === PARENT) {
                return queryDocument(finalSelector).filter((parentElement)=>eventTargets.some((targetElement)=>elementContains(parentElement, targetElement)));
            }
            if (useEventTarget === CHILDREN) {
                return queryDocument(finalSelector).filter((childElement)=>eventTargets.some((targetElement)=>elementContains(targetElement, childElement)));
            }
            if (useEventTarget === SIBLINGS) {
                return queryDocument(finalSelector).filter((siblingElement)=>eventTargets.some((targetElement)=>isSiblingNode(targetElement, siblingElement)));
            }
        }
        return eventTargets;
    }
    if (baseSelector == null || finalSelector == null) {
        return [];
    }
    if (_IX2BrowserSupport.IS_BROWSER_ENV && elementRoot) {
        return queryDocument(finalSelector).filter((element)=>elementRoot.contains(element));
    }
    if (limitAffectedElements === CHILDREN) {
        return queryDocument(baseSelector, finalSelector);
    } else if (limitAffectedElements === IMMEDIATE_CHILDREN) {
        return getChildElements(queryDocument(baseSelector)).filter(matchSelector(finalSelector));
    } else if (limitAffectedElements === SIBLINGS) {
        return getSiblingElements(queryDocument(baseSelector)).filter(matchSelector(finalSelector));
    } else {
        return queryDocument(finalSelector);
    }
}
function getComputedStyle({ element, actionItem }) {
    if (!_IX2BrowserSupport.IS_BROWSER_ENV) {
        return {};
    }
    const { actionTypeId } = actionItem;
    switch(actionTypeId){
        case STYLE_SIZE:
        case STYLE_BACKGROUND_COLOR:
        case STYLE_BORDER:
        case STYLE_TEXT_COLOR:
        case GENERAL_DISPLAY:
            return window.getComputedStyle(element);
        default:
            return {};
    }
}
const pxValueRegex = /px/;
// @ts-expect-error - TS7006 - Parameter 'filters' implicitly has an 'any' type.
const getFilterDefaults = (actionState, filters)=>// @ts-expect-error - TS7006 - Parameter 'result' implicitly has an 'any' type. | TS7006 - Parameter 'filter' implicitly has an 'any' type.
    filters.reduce((result, filter)=>{
        if (result[filter.type] == null) {
            result[filter.type] = // @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'any' can't be used to index type 'Readonly<{ blur: 0; 'hue-rotate': 0; invert: 0; grayscale: 0; saturate: 100; sepia: 0; contrast: 100; brightness: 100; }>'.
            filterDefaults[filter.type];
        }
        return result;
    }, actionState || {});
const getFontVariationDefaults = (actionState, fontVariations)=>fontVariations.reduce((result, fontVariation)=>{
        if (result[fontVariation.type] == null) {
            result[fontVariation.type] = // @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'Readonly<{ wght: 0; opsz: 0; wdth: 0; slnt: 0; }>'.
            fontVariationDefaults[fontVariation.type] || // @ts-expect-error - TS2339 - Property 'defaultValue' does not exist on type 'FontVariationItemConfigType'.
            fontVariation.defaultValue || 0;
        }
        return result;
    }, actionState || {});
function getInstanceOrigin(element, refState = {}, computedStyle = {}, actionItem, elementApi) {
    const { getStyle } = elementApi;
    // Flow Hack: Passing actionTypeId to isPluginType and then trying
    // to do type refinement using the same variable via a switch statement
    // breaks down. This is is a workaround to ensure we can use type refinement.
    const { actionTypeId } = actionItem;
    if ((0, _IX2VanillaPlugins.isPluginType)(actionTypeId)) {
        // @ts-expect-error - TS2345 - Argument of type '"TRANSFORM_MOVE" | "TRANSFORM_SCALE" | "TRANSFORM_ROTATE" | "TRANSFORM_SKEW" | "STYLE_OPACITY" | "STYLE_SIZE" | "STYLE_FILTER" | "STYLE_FONT_VARIATION" | "STYLE_BACKGROUND_COLOR" | "STYLE_BORDER" | "STYLE_TEXT_COLOR" | "PLUGIN_LOTTIE" | "GENERAL_DISPLAY"' is not assignable to parameter of type 'PluginType'. | TS7053 - Element implicitly has an 'any' type because expression of type '"TRANSFORM_MOVE" | "TRANSFORM_SCALE" | "TRANSFORM_ROTATE" | "TRANSFORM_SKEW" | "STYLE_OPACITY" | "STYLE_SIZE" | "STYLE_FILTER" | "STYLE_FONT_VARIATION" | "STYLE_BACKGROUND_COLOR" | "STYLE_BORDER" | "STYLE_TEXT_COLOR" | "PLUGIN_LOTTIE" | "GENERAL_DISPLAY"' can't be used to index type '{}'.
        return (0, _IX2VanillaPlugins.getPluginOrigin)(actionTypeId)(refState[actionTypeId], actionItem);
    }
    switch(actionItem.actionTypeId){
        case TRANSFORM_MOVE:
        case TRANSFORM_SCALE:
        case TRANSFORM_ROTATE:
        case TRANSFORM_SKEW:
            {
                return(// @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type '"TRANSFORM_MOVE" | "TRANSFORM_SCALE" | "TRANSFORM_ROTATE" | "TRANSFORM_SKEW"' can't be used to index type '{}'.
                refState[actionItem.actionTypeId] || transformDefaults[actionItem.actionTypeId]);
            }
        case STYLE_FILTER:
            return getFilterDefaults(// @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type '"STYLE_FILTER"' can't be used to index type '{}'.
            refState[actionItem.actionTypeId], actionItem.config.filters);
        case STYLE_FONT_VARIATION:
            return getFontVariationDefaults(// @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type '"STYLE_FONT_VARIATION"' can't be used to index type '{}'.
            refState[actionItem.actionTypeId], actionItem.config.fontVariations);
        case STYLE_OPACITY:
            return {
                value: (0, _defaultTo.default)(parseFloat(getStyle(element, OPACITY)), 1.0)
            };
        case STYLE_SIZE:
            {
                const inlineWidth = getStyle(element, WIDTH);
                const inlineHeight = getStyle(element, HEIGHT);
                let widthValue;
                let heightValue;
                // When destination unit is 'AUTO', ensure origin values are in px
                if (actionItem.config.widthUnit === AUTO) {
                    widthValue = pxValueRegex.test(inlineWidth) ? parseFloat(inlineWidth) : parseFloat(computedStyle.width);
                } else {
                    widthValue = (0, _defaultTo.default)(parseFloat(inlineWidth), // @ts-expect-error - TS18047 - 'computedStyle' is possibly 'null'.
                    parseFloat(computedStyle.width));
                }
                if (actionItem.config.heightUnit === AUTO) {
                    heightValue = pxValueRegex.test(inlineHeight) ? parseFloat(inlineHeight) : parseFloat(computedStyle.height);
                } else {
                    heightValue = (0, _defaultTo.default)(parseFloat(inlineHeight), // @ts-expect-error - TS18047 - 'computedStyle' is possibly 'null'.
                    parseFloat(computedStyle.height));
                }
                return {
                    widthValue,
                    heightValue
                };
            }
        case STYLE_BACKGROUND_COLOR:
        case STYLE_BORDER:
        case STYLE_TEXT_COLOR:
            return parseColor({
                element,
                actionTypeId: actionItem.actionTypeId,
                computedStyle,
                getStyle
            });
        case GENERAL_DISPLAY:
            return {
                // @ts-expect-error - TS18047 - 'computedStyle' is possibly 'null'.
                value: (0, _defaultTo.default)(getStyle(element, DISPLAY), computedStyle.display)
            };
        // @ts-expect-error - `OBJECT_VALUE` is not an expected `actionTypeId`
        case OBJECT_VALUE:
            // @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'any' can't be used to index type '{}'. | TS2339 - Property 'actionTypeId' does not exist on type 'never'.
            return refState[actionItem.actionTypeId] || {
                value: 0
            };
        default:
            {
                // As far as the type system can tell, we're missing a handler for
                // PLUGIN_LOTTIE.
                //
                // This is actually handled by `isPluginType` above.
                //
                /*:: (actionItem: empty); */ return;
            }
    }
}
// @ts-expect-error - TS7006 - Parameter 'result' implicitly has an 'any' type. | TS7006 - Parameter 'filter' implicitly has an 'any' type.
const reduceFilters = (result, filter)=>{
    if (filter) {
        result[filter.type] = filter.value || 0;
    }
    return result;
};
const reduceFontVariations = (result, fontVariation)=>{
    if (fontVariation) {
        result[fontVariation.type] = fontVariation.value || 0;
    }
    return result;
};
const getItemConfigByKey = (actionTypeId, key, config)=>{
    if ((0, _IX2VanillaPlugins.isPluginType)(actionTypeId)) {
        return (0, _IX2VanillaPlugins.getPluginConfig)(actionTypeId)(config, key);
    }
    switch(actionTypeId){
        case STYLE_FILTER:
            {
                const filter = (0, _findLast.default)(config.filters, ({ type })=>type === key);
                return filter ? filter.value : 0;
            }
        case STYLE_FONT_VARIATION:
            {
                const fontVariation = (0, _findLast.default)(config.fontVariations, ({ type })=>type === key);
                return fontVariation ? fontVariation.value : 0;
            }
        default:
            return config[key];
    }
};
function getDestinationValues({ element, actionItem, elementApi }) {
    if ((0, _IX2VanillaPlugins.isPluginType)(actionItem.actionTypeId)) {
        // @ts-expect-error - TS2345 - Argument of type '"TRANSFORM_MOVE" | "TRANSFORM_SCALE" | "TRANSFORM_ROTATE" | "TRANSFORM_SKEW" | "STYLE_OPACITY" | "STYLE_SIZE" | "STYLE_FILTER" | "STYLE_FONT_VARIATION" | "STYLE_BACKGROUND_COLOR" | "STYLE_BORDER" | "STYLE_TEXT_COLOR" | "PLUGIN_LOTTIE" | "GENERAL_DISPLAY"' is not assignable to parameter of type 'PluginType'.
        return (0, _IX2VanillaPlugins.getPluginDestination)(actionItem.actionTypeId)(actionItem.config);
    }
    switch(actionItem.actionTypeId){
        case TRANSFORM_MOVE:
        case TRANSFORM_SCALE:
        case TRANSFORM_ROTATE:
        case TRANSFORM_SKEW:
            {
                const { xValue, yValue, zValue } = actionItem.config;
                return {
                    xValue,
                    yValue,
                    zValue
                };
            }
        case STYLE_SIZE:
            {
                const { getStyle, setStyle, getProperty } = elementApi;
                const { widthUnit, heightUnit } = actionItem.config;
                let { widthValue, heightValue } = actionItem.config;
                if (!_IX2BrowserSupport.IS_BROWSER_ENV) {
                    return {
                        widthValue,
                        heightValue
                    };
                }
                if (widthUnit === AUTO) {
                    const temp = getStyle(element, WIDTH);
                    setStyle(element, WIDTH, '');
                    // @ts-expect-error - TS2322 - Type 'string | null' is not assignable to type 'number | undefined'.
                    widthValue = getProperty(element, 'offsetWidth');
                    setStyle(element, WIDTH, temp);
                }
                if (heightUnit === AUTO) {
                    const temp = getStyle(element, HEIGHT);
                    setStyle(element, HEIGHT, '');
                    // @ts-expect-error - TS2322 - Type 'string | null' is not assignable to type 'number | undefined'.
                    heightValue = getProperty(element, 'offsetHeight');
                    setStyle(element, HEIGHT, temp);
                }
                return {
                    widthValue,
                    heightValue
                };
            }
        case STYLE_BACKGROUND_COLOR:
        case STYLE_BORDER:
        case STYLE_TEXT_COLOR:
            {
                const { rValue, gValue, bValue, aValue, globalSwatchId } = actionItem.config;
                if (globalSwatchId && globalSwatchId.startsWith('--')) {
                    const { getStyle } = elementApi;
                    const value = getStyle(element, globalSwatchId);
                    const normalizedValue = (0, _normalizeColor.normalizeColor)(value);
                    return {
                        rValue: normalizedValue.red,
                        gValue: normalizedValue.green,
                        bValue: normalizedValue.blue,
                        aValue: normalizedValue.alpha
                    };
                }
                return {
                    rValue,
                    gValue,
                    bValue,
                    aValue
                };
            }
        case STYLE_FILTER:
            {
                return actionItem.config.filters.reduce(reduceFilters, {});
            }
        case STYLE_FONT_VARIATION:
            {
                return actionItem.config.fontVariations.reduce(reduceFontVariations, {});
            }
        default:
            {
                const { value } = actionItem.config;
                return {
                    value
                };
            }
    }
}
function getRenderType(actionTypeId) {
    if (/^TRANSFORM_/.test(actionTypeId)) {
        return RENDER_TRANSFORM;
    }
    if (/^STYLE_/.test(actionTypeId)) {
        return RENDER_STYLE;
    }
    if (/^GENERAL_/.test(actionTypeId)) {
        return RENDER_GENERAL;
    }
    if (/^PLUGIN_/.test(actionTypeId)) {
        return RENDER_PLUGIN;
    }
}
function getStyleProp(renderType, actionTypeId) {
    return renderType === RENDER_STYLE ? actionTypeId.replace('STYLE_', '').toLowerCase() : null;
}
function renderHTMLElement(element, refState, actionState, eventId, actionItem, styleProp, elementApi, renderType, pluginInstance) {
    switch(renderType){
        case RENDER_TRANSFORM:
            {
                return renderTransform(element, refState, actionState, actionItem, elementApi);
            }
        case RENDER_STYLE:
            {
                return renderStyle(element, refState, actionState, actionItem, styleProp, elementApi);
            }
        case RENDER_GENERAL:
            {
                return renderGeneral(element, actionItem, elementApi);
            }
        case RENDER_PLUGIN:
            {
                const { actionTypeId } = actionItem;
                if ((0, _IX2VanillaPlugins.isPluginType)(actionTypeId)) {
                    return (0, _IX2VanillaPlugins.renderPlugin)(actionTypeId)(pluginInstance, refState, actionItem);
                }
            }
    }
}
const transformDefaults = {
    [TRANSFORM_MOVE]: Object.freeze({
        xValue: 0,
        yValue: 0,
        zValue: 0
    }),
    [TRANSFORM_SCALE]: Object.freeze({
        xValue: 1,
        yValue: 1,
        zValue: 1
    }),
    [TRANSFORM_ROTATE]: Object.freeze({
        xValue: 0,
        yValue: 0,
        zValue: 0
    }),
    [TRANSFORM_SKEW]: Object.freeze({
        xValue: 0,
        yValue: 0
    })
};
const filterDefaults = Object.freeze({
    blur: 0,
    'hue-rotate': 0,
    invert: 0,
    grayscale: 0,
    saturate: 100,
    sepia: 0,
    contrast: 100,
    brightness: 100
});
const fontVariationDefaults = Object.freeze({
    wght: 0,
    opsz: 0,
    wdth: 0,
    slnt: 0
});
// @ts-expect-error - TS7006 - Parameter 'filterType' implicitly has an 'any' type. | TS7006 - Parameter 'actionItemConfig' implicitly has an 'any' type.
const getFilterUnit = (filterType, actionItemConfig)=>{
    const filter = (0, _findLast.default)(actionItemConfig.filters, ({ type })=>type === filterType);
    if (filter && filter.unit) {
        return filter.unit;
    }
    switch(filterType){
        case 'blur':
            return 'px';
        case 'hue-rotate':
            return 'deg';
        default:
            return '%';
    }
};
const transformKeys = Object.keys(transformDefaults);
function renderTransform(element, refState, actionState, actionItem, elementApi) {
    const newTransform = transformKeys.map((actionTypeId)=>{
        // @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'string' can't be used to index type '{ readonly TRANSFORM_MOVE: Readonly<{ xValue: 0; yValue: 0; zValue: 0; }>; readonly TRANSFORM_SCALE: Readonly<{ xValue: 1; yValue: 1; zValue: 1; }>; readonly TRANSFORM_ROTATE: Readonly<{ xValue: 0; yValue: 0; zValue: 0; }>; readonly TRANSFORM_SKEW: Readonly<...>; }'.
        const defaults = transformDefaults[actionTypeId];
        const { xValue = defaults.xValue, yValue = defaults.yValue, zValue = defaults.zValue, xUnit = '', yUnit = '', zUnit = '' } = refState[actionTypeId] || {};
        switch(actionTypeId){
            case TRANSFORM_MOVE:
                return `${TRANSLATE_3D}(${xValue}${xUnit}, ${yValue}${yUnit}, ${zValue}${zUnit})`;
            case TRANSFORM_SCALE:
                return `${SCALE_3D}(${xValue}${xUnit}, ${yValue}${yUnit}, ${zValue}${zUnit})`;
            case TRANSFORM_ROTATE:
                return `${ROTATE_X}(${xValue}${xUnit}) ${ROTATE_Y}(${yValue}${yUnit}) ${ROTATE_Z}(${zValue}${zUnit})`;
            case TRANSFORM_SKEW:
                return `${SKEW}(${xValue}${xUnit}, ${yValue}${yUnit})`;
            default:
                return '';
        }
    }).join(' ');
    const { setStyle } = elementApi;
    addWillChange(element, _IX2BrowserSupport.TRANSFORM_PREFIXED, elementApi);
    setStyle(element, _IX2BrowserSupport.TRANSFORM_PREFIXED, newTransform);
    // Set transform-style: preserve-3d
    if (hasDefined3dTransform(actionItem, actionState)) {
        setStyle(element, _IX2BrowserSupport.TRANSFORM_STYLE_PREFIXED, PRESERVE_3D);
    }
}
function renderFilter(element, actionState, // @ts-expect-error - TS7006 - Parameter 'actionItemConfig' implicitly has an 'any' type.
actionItemConfig, elementApi) {
    const filterValue = (0, _reduce.default)(actionState, (result, value, type)=>`${result} ${type}(${value}${getFilterUnit(type, actionItemConfig)})`, '');
    const { setStyle } = elementApi;
    addWillChange(element, FILTER, elementApi);
    setStyle(element, FILTER, filterValue);
}
function renderFontVariation(element, actionState, actionItemConfig, elementApi) {
    const fontVariationValue = (0, _reduce.default)(actionState, (result, value, type)=>{
        // @ts-expect-error - TS2345 - Argument of type 'string' is not assignable to parameter of type 'never'.
        result.push(`"${type}" ${value}`);
        return result;
    }, []).join(', ');
    const { setStyle } = elementApi;
    addWillChange(element, FONT_VARIATION_SETTINGS, elementApi);
    setStyle(element, FONT_VARIATION_SETTINGS, fontVariationValue);
}
// @ts-expect-error - TS7031 - Binding element 'actionTypeId' implicitly has an 'any' type. | TS7031 - Binding element 'xValue' implicitly has an 'any' type. | TS7031 - Binding element 'yValue' implicitly has an 'any' type. | TS7031 - Binding element 'zValue' implicitly has an 'any' type.
function hasDefined3dTransform({ actionTypeId }, { xValue, yValue, zValue }) {
    // TRANSLATE_Z
    return actionTypeId === TRANSFORM_MOVE && zValue !== undefined || // SCALE_Z
    actionTypeId === TRANSFORM_SCALE && zValue !== undefined || // ROTATE_X or ROTATE_Y
    actionTypeId === TRANSFORM_ROTATE && (xValue !== undefined || yValue !== undefined);
}
const paramCapture = '\\(([^)]+)\\)';
const rgbValidRegex = /^rgb/;
const rgbMatchRegex = RegExp(`rgba?${paramCapture}`);
function getFirstMatch(regex, value) {
    const match = regex.exec(value);
    return match ? match[1] : '';
}
// @ts-expect-error - TS7031 - Binding element 'element' implicitly has an 'any' type. | TS7031 - Binding element 'actionTypeId' implicitly has an 'any' type. | TS7031 - Binding element 'computedStyle' implicitly has an 'any' type. | TS7031 - Binding element 'getStyle' implicitly has an 'any' type.
function parseColor({ element, actionTypeId, computedStyle, getStyle }) {
    // @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'any' can't be used to index type 'Readonly<{ STYLE_BACKGROUND_COLOR: "backgroundColor"; STYLE_BORDER: "borderColor"; STYLE_TEXT_COLOR: "color"; }>'.
    const prop = colorStyleProps[actionTypeId];
    const inlineValue = getStyle(element, prop);
    const value = rgbValidRegex.test(inlineValue) ? inlineValue : computedStyle[prop];
    // @ts-expect-error - TS2532 - Object is possibly 'undefined'.
    const matches = getFirstMatch(rgbMatchRegex, value).split(COMMA_DELIMITER);
    return {
        // @ts-expect-error - TS2345 - Argument of type 'string | undefined' is not assignable to parameter of type 'string'.
        rValue: (0, _defaultTo.default)(parseInt(matches[0], 10), 255),
        // @ts-expect-error - TS2345 - Argument of type 'string | undefined' is not assignable to parameter of type 'string'.
        gValue: (0, _defaultTo.default)(parseInt(matches[1], 10), 255),
        // @ts-expect-error - TS2345 - Argument of type 'string | undefined' is not assignable to parameter of type 'string'.
        bValue: (0, _defaultTo.default)(parseInt(matches[2], 10), 255),
        // @ts-expect-error - TS2345 - Argument of type 'string | undefined' is not assignable to parameter of type 'string'.
        aValue: (0, _defaultTo.default)(parseFloat(matches[3]), 1)
    };
}
function renderStyle(element, refState, actionState, actionItem, styleProp, elementApi) {
    const { setStyle } = elementApi;
    switch(actionItem.actionTypeId){
        case STYLE_SIZE:
            {
                let { widthUnit = '', heightUnit = '' } = actionItem.config;
                const { widthValue, heightValue } = actionState;
                if (widthValue !== undefined) {
                    if (widthUnit === AUTO) {
                        widthUnit = 'px';
                    }
                    addWillChange(element, WIDTH, elementApi);
                    setStyle(element, WIDTH, widthValue + widthUnit);
                }
                if (heightValue !== undefined) {
                    if (heightUnit === AUTO) {
                        heightUnit = 'px';
                    }
                    addWillChange(element, HEIGHT, elementApi);
                    setStyle(element, HEIGHT, heightValue + heightUnit);
                }
                break;
            }
        case STYLE_FILTER:
            {
                renderFilter(element, actionState, actionItem.config, elementApi);
                break;
            }
        case STYLE_FONT_VARIATION:
            {
                renderFontVariation(element, actionState, actionItem.config, elementApi);
                break;
            }
        case STYLE_BACKGROUND_COLOR:
        case STYLE_BORDER:
        case STYLE_TEXT_COLOR:
            {
                const prop = colorStyleProps[actionItem.actionTypeId];
                const rValue = Math.round(actionState.rValue);
                const gValue = Math.round(actionState.gValue);
                const bValue = Math.round(actionState.bValue);
                const aValue = actionState.aValue;
                addWillChange(element, prop, elementApi);
                setStyle(element, prop, aValue >= 1 ? `rgb(${rValue},${gValue},${bValue})` : `rgba(${rValue},${gValue},${bValue},${aValue})`);
                break;
            }
        default:
            {
                // @ts-expect-error - TS2339 - Property 'unit' does not exist on type '{ delay: number; easing: IX2EasingType; duration: number; target: ActionItemTargetType; xValue: number | undefined; yValue: number | undefined; zValue: number | undefined; xUnit: "%" | ... 4 more ... | "VW"; yUnit: "%" | ... 4 more ... | "VW"; zUnit: "%" | ... 4 more ... | "VW"; } | ... 5 more ... | { ...; }'.
                const { unit = '' } = actionItem.config;
                addWillChange(element, styleProp, elementApi);
                setStyle(element, styleProp, actionState.value + unit);
                break;
            }
    }
}
function renderGeneral(element, actionItem, elementApi) {
    const { setStyle } = elementApi;
    switch(actionItem.actionTypeId){
        case GENERAL_DISPLAY:
            {
                const { value } = actionItem.config;
                if (value === FLEX && _IX2BrowserSupport.IS_BROWSER_ENV) {
                    setStyle(element, DISPLAY, _IX2BrowserSupport.FLEX_PREFIXED);
                } else {
                    setStyle(element, DISPLAY, value);
                }
                return;
            }
    }
}
// @ts-expect-error - TS7006 - Parameter 'element' implicitly has an 'any' type. | TS7006 - Parameter 'prop' implicitly has an 'any' type.
function addWillChange(element, prop, elementApi) {
    if (!_IX2BrowserSupport.IS_BROWSER_ENV) {
        return;
    }
    const validProp = willChangeProps[prop];
    if (!validProp) {
        return;
    }
    const { getStyle, setStyle } = elementApi;
    const value = getStyle(element, WILL_CHANGE);
    if (!value) {
        setStyle(element, WILL_CHANGE, validProp);
        return;
    }
    const values = value.split(COMMA_DELIMITER).map(trim);
    if (values.indexOf(validProp) === -1) {
        setStyle(element, WILL_CHANGE, values.concat(validProp).join(COMMA_DELIMITER));
    }
}
// @ts-expect-error - TS7006 - Parameter 'prop' implicitly has an 'any' type.
function removeWillChange(element, prop, elementApi) {
    if (!_IX2BrowserSupport.IS_BROWSER_ENV) {
        return;
    }
    const validProp = willChangeProps[prop];
    if (!validProp) {
        return;
    }
    const { getStyle, setStyle } = elementApi;
    const value = getStyle(element, WILL_CHANGE);
    if (!value || value.indexOf(validProp) === -1) {
        return;
    }
    setStyle(element, WILL_CHANGE, value.split(COMMA_DELIMITER).map(trim)// @ts-expect-error - TS7006 - Parameter 'v' implicitly has an 'any' type.
    .filter((v)=>v !== validProp).join(COMMA_DELIMITER));
}
function clearAllStyles({ store, elementApi }) {
    const { ixData } = store.getState();
    const { events = {}, actionLists = {} } = ixData;
    Object.keys(events).forEach((eventId)=>{
        const event = events[eventId];
        const { config } = event.action;
        const { actionListId } = config;
        const actionList = actionLists[actionListId];
        if (actionList) {
            clearActionListStyles({
                actionList,
                event,
                elementApi
            });
        }
    });
    Object.keys(actionLists).forEach((actionListId)=>{
        // @ts-expect-error - TS2345 - Argument of type '{ actionList: any; elementApi: any; }' is not assignable to parameter of type '{ actionList?: {} | undefined; event: any; elementApi: any; }'.
        clearActionListStyles({
            actionList: actionLists[actionListId],
            elementApi
        });
    });
}
// @ts-expect-error - TS7031 - Binding element 'event' implicitly has an 'any' type. | TS7031 - Binding element 'elementApi' implicitly has an 'any' type.
function clearActionListStyles({ actionList = {}, event, elementApi }) {
    // @ts-expect-error - TS2339 - Property 'actionItemGroups' does not exist on type '{}'. | TS2339 - Property 'continuousParameterGroups' does not exist on type '{}'.
    const { actionItemGroups, continuousParameterGroups } = actionList;
    actionItemGroups && // @ts-expect-error - TS7006 - Parameter 'actionGroup' implicitly has an 'any' type.
    actionItemGroups.forEach((actionGroup)=>{
        clearActionGroupStyles({
            actionGroup,
            event,
            elementApi
        });
    });
    continuousParameterGroups && // @ts-expect-error - TS7006 - Parameter 'paramGroup' implicitly has an 'any' type.
    continuousParameterGroups.forEach((paramGroup)=>{
        const { continuousActionGroups } = paramGroup;
        // @ts-expect-error - TS7006 - Parameter 'actionGroup' implicitly has an 'any' type.
        continuousActionGroups.forEach((actionGroup)=>{
            clearActionGroupStyles({
                actionGroup,
                event,
                elementApi
            });
        });
    });
}
// @ts-expect-error - TS7031 - Binding element 'actionGroup' implicitly has an 'any' type. | TS7031 - Binding element 'event' implicitly has an 'any' type. | TS7031 - Binding element 'elementApi' implicitly has an 'any' type.
function clearActionGroupStyles({ actionGroup, event, elementApi }) {
    const { actionItems } = actionGroup;
    // @ts-expect-error - TS7006 - Parameter 'actionItem' implicitly has an 'any' type.
    actionItems.forEach((actionItem)=>{
        const { actionTypeId, config } = actionItem;
        let clearElement;
        if ((0, _IX2VanillaPlugins.isPluginType)(actionTypeId)) {
            // @ts-expect-error - TS7006 - Parameter 'ref' implicitly has an 'any' type.
            clearElement = (ref)=>(0, _IX2VanillaPlugins.clearPlugin)(actionTypeId)(ref, actionItem);
        } else {
            clearElement = processElementByType({
                effect: clearStyleProp,
                actionTypeId,
                elementApi
            });
        }
        getAffectedElements({
            config,
            event,
            elementApi
        }).forEach(clearElement);
    });
}
function cleanupHTMLElement(element, actionItem, elementApi) {
    const { setStyle, getStyle } = elementApi;
    const { actionTypeId } = actionItem;
    if (actionTypeId === STYLE_SIZE) {
        const { config } = actionItem;
        if (config.widthUnit === AUTO) {
            setStyle(element, WIDTH, '');
        }
        if (config.heightUnit === AUTO) {
            setStyle(element, HEIGHT, '');
        }
    }
    if (getStyle(element, WILL_CHANGE)) {
        processElementByType({
            effect: removeWillChange,
            actionTypeId,
            elementApi
        })(element);
    }
}
const processElementByType = ({ effect, actionTypeId, elementApi })=>// @ts-expect-error - TS7006 - Parameter 'element' implicitly has an 'any' type.
    (element)=>{
        switch(actionTypeId){
            case TRANSFORM_MOVE:
            case TRANSFORM_SCALE:
            case TRANSFORM_ROTATE:
            case TRANSFORM_SKEW:
                effect(element, _IX2BrowserSupport.TRANSFORM_PREFIXED, elementApi);
                break;
            case STYLE_FILTER:
                effect(element, FILTER, elementApi);
                break;
            case STYLE_FONT_VARIATION:
                effect(element, FONT_VARIATION_SETTINGS, elementApi);
                break;
            case STYLE_OPACITY:
                effect(element, OPACITY, elementApi);
                break;
            case STYLE_SIZE:
                effect(element, WIDTH, elementApi);
                effect(element, HEIGHT, elementApi);
                break;
            case STYLE_BACKGROUND_COLOR:
            case STYLE_BORDER:
            case STYLE_TEXT_COLOR:
                effect(element, colorStyleProps[actionTypeId], elementApi);
                break;
            case GENERAL_DISPLAY:
                effect(element, DISPLAY, elementApi);
                break;
        }
    };
// @ts-expect-error - TS7006 - Parameter 'prop' implicitly has an 'any' type.
function clearStyleProp(element, prop, elementApi) {
    const { setStyle } = elementApi;
    removeWillChange(element, prop, elementApi);
    setStyle(element, prop, '');
    // Clear transform-style: preserve-3d
    if (prop === _IX2BrowserSupport.TRANSFORM_PREFIXED) {
        setStyle(element, _IX2BrowserSupport.TRANSFORM_STYLE_PREFIXED, '');
    }
}
function getMaxDurationItemIndex(actionItems) {
    let maxDuration = 0;
    let resultIndex = 0;
    // @ts-expect-error - TS7006 - Parameter 'actionItem' implicitly has an 'any' type. | TS7006 - Parameter 'index' implicitly has an 'any' type.
    actionItems.forEach((actionItem, index)=>{
        const { config } = actionItem;
        const total = config.delay + config.duration;
        if (total >= maxDuration) {
            maxDuration = total;
            resultIndex = index;
        }
    });
    return resultIndex;
}
function getActionListProgress(actionList, instance) {
    const { actionItemGroups, useFirstGroupAsInitialState } = actionList;
    const { actionItem: instanceItem, verboseTimeElapsed = 0 } = instance;
    let totalDuration = 0;
    let elapsedDuration = 0;
    // @ts-expect-error - TS7006 - Parameter 'group' implicitly has an 'any' type. | TS7006 - Parameter 'index' implicitly has an 'any' type.
    actionItemGroups.forEach((group, index)=>{
        if (useFirstGroupAsInitialState && index === 0) {
            return;
        }
        const { actionItems } = group;
        const carrierItem = actionItems[getMaxDurationItemIndex(actionItems)];
        const { config, actionTypeId } = carrierItem;
        if (instanceItem.id === carrierItem.id) {
            elapsedDuration = totalDuration + verboseTimeElapsed;
        }
        const duration = getRenderType(actionTypeId) === RENDER_GENERAL ? 0 : config.duration;
        totalDuration += config.delay + duration;
    });
    return totalDuration > 0 ? (0, _IX2EasingUtils.optimizeFloat)(elapsedDuration / totalDuration) : 0;
}
function reduceListToGroup({ actionList, actionItemId, rawData }) {
    // @ts-expect-error - FIXME - TS2339 - Property 'actionItemGroups' does not exist on type 'ActionListType'.
    const { actionItemGroups, continuousParameterGroups } = actionList;
    const newActionItems = [];
    const takeItemUntilMatch = (actionItem)=>{
        newActionItems.push((0, _timm.mergeIn)(actionItem, [
            'config'
        ], {
            delay: 0,
            duration: 0
        }));
        return actionItem.id === actionItemId;
    };
    actionItemGroups && actionItemGroups.some(({ actionItems })=>{
        return actionItems.some(takeItemUntilMatch);
    });
    continuousParameterGroups && continuousParameterGroups.some((paramGroup)=>{
        const { continuousActionGroups } = paramGroup;
        return continuousActionGroups.some(({ actionItems })=>{
            return actionItems.some(takeItemUntilMatch);
        });
    });
    return (0, _timm.setIn)(rawData, [
        'actionLists'
    ], {
        [actionList.id]: {
            id: actionList.id,
            actionItemGroups: [
                {
                    actionItems: newActionItems
                }
            ]
        }
    });
}
function shouldNamespaceEventParameter(eventTypeId, { basedOn }) {
    return eventTypeId === _sharedconstants.EventTypeConsts.SCROLLING_IN_VIEW && (basedOn === _sharedconstants.EventBasedOn.ELEMENT || basedOn == null) || eventTypeId === _sharedconstants.EventTypeConsts.MOUSE_MOVE && basedOn === _sharedconstants.EventBasedOn.ELEMENT;
}
function getNamespacedParameterId(eventStateKey, continuousParameterGroupId) {
    const namespacedParameterId = eventStateKey + COLON_DELIMITER + continuousParameterGroupId;
    return namespacedParameterId;
}
function shouldAllowMediaQuery(mediaQueries, mediaQueryKey) {
    // During design mode, current media query key does not exist
    if (mediaQueryKey == null) {
        return true;
    }
    return mediaQueries.indexOf(mediaQueryKey) !== -1;
}
function mediaQueriesEqual(listA, listB) {
    return (0, _shallowEqual.default)(listA && listA.sort(), listB && listB.sort());
}
function stringifyTarget(target) {
    if (typeof target === 'string') {
        return target;
    }
    if (target.pluginElement && target.objectId) {
        return target.pluginElement + BAR_DELIMITER + target.objectId;
    }
    if (target.objectId) {
        return target.objectId;
    }
    const { id = '', selector = '', useEventTarget = '' } = target;
    return id + BAR_DELIMITER + selector + BAR_DELIMITER + useEventTarget;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIklYMlZhbmlsbGFVdGlscy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuaW1wb3J0IHR5cGUge1xuICBDb250aW51b3VzUGFyYW1ldGVyR3JvdXBJZCxcbiAgQWN0aW9uSXRlbVR5cGUsXG4gIEFjdGlvbklkLFxuICBGb250VmFyaWF0aW9uSXRlbUNvbmZpZ1R5cGUsXG4gIEZvbnRWYXJpYXRpb25BY3Rpb25Db25maWdUeXBlLFxuICBFdmVudFR5cGUsXG4gIEFjdGlvbkxpc3RUeXBlLFxuICBBY3Rpb25JdGVtc1R5cGUsXG4gIENvbnRpbnVvdXNQYXJhbWV0ZXJHcm91cFR5cGUsXG59IGZyb20gJ0BwYWNrYWdlcy9zeXN0ZW1zL2l4Mi90eXBlcy1jb3JlJztcblxuaW1wb3J0IGRlZmF1bHRUbyBmcm9tICdsb2Rhc2gvZGVmYXVsdFRvJztcbmltcG9ydCByZWR1Y2UgZnJvbSAnbG9kYXNoL3JlZHVjZSc7XG5pbXBvcnQgZmluZExhc3QgZnJvbSAnbG9kYXNoL2ZpbmRMYXN0JztcbmltcG9ydCB7c2V0SW4sIG1lcmdlSW59IGZyb20gJ3RpbW0nO1xuaW1wb3J0IHtcbiAgRXZlbnRUeXBlQ29uc3RzLFxuICBFdmVudEFwcGxpZXNUbyxcbiAgRXZlbnRCYXNlZE9uLFxuICBBY3Rpb25UeXBlQ29uc3RzLFxuICBJWDJFbmdpbmVDb25zdGFudHMsXG59IGZyb20gJ0BwYWNrYWdlcy9zeXN0ZW1zL2l4Mi9zaGFyZWQtY29uc3RhbnRzJztcbmltcG9ydCBzaGFsbG93RXF1YWwgZnJvbSAnLi9zaGFsbG93RXF1YWwnO1xuXG5pbXBvcnQge29wdGltaXplRmxvYXR9IGZyb20gJy4vSVgyRWFzaW5nVXRpbHMnO1xuXG4vLyBJbXBvcnRpbmcgZGlyZWN0bHkgdG8gYXZvaWQgaW1wb3J0aW5nIHRoZSBlbnRpcmUgc2hhcmVkLXV0aWxzIHBhY2thZ2UuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgd2ViZmxvdy9wYWNrYWdlLWJvdW5kYXJpZXNcbmltcG9ydCB7bm9ybWFsaXplQ29sb3J9IGZyb20gJy4uLy4uL3NoYXJlZC11dGlscy9ub3JtYWxpemVDb2xvcic7XG5pbXBvcnQge1xuICBpc1BsdWdpblR5cGUsXG4gIGdldFBsdWdpbkNvbmZpZyxcbiAgZ2V0UGx1Z2luT3JpZ2luLFxuICBnZXRQbHVnaW5EZXN0aW5hdGlvbixcbiAgcmVuZGVyUGx1Z2luLFxuICBjbGVhclBsdWdpbixcbn0gZnJvbSAnLi9JWDJWYW5pbGxhUGx1Z2lucyc7XG5cbmltcG9ydCB7XG4gIElTX0JST1dTRVJfRU5WLFxuICBGTEVYX1BSRUZJWEVELFxuICBUUkFOU0ZPUk1fUFJFRklYRUQsXG4gIFRSQU5TRk9STV9TVFlMRV9QUkVGSVhFRCxcbn0gZnJvbSAnLi9JWDJCcm93c2VyU3VwcG9ydCc7XG5pbXBvcnQge1xuICB0eXBlIElYMlJhd0RhdGEsXG4gIHR5cGUgcmF3RGF0YUltcG9ydGVkUGF5bG9hZCxcbn0gZnJvbSAnQHBhY2thZ2VzL3N5c3RlbXMvaXgyL2VuZ2luZSc7XG5pbXBvcnQge0JyZWFrcG9pbnRJRH0gZnJvbSAnQHBhY2thZ2VzL3N5c3RlbXMvc3R5bGUvdHlwZXMnO1xuXG50eXBlIFNlbGVjdG9yID0gYW55O1xuXG4vLyBGSVhNRTogVGhpcyBjb3VsZCBiZSBhIHNoYXJlZCB0eXBlLlxudHlwZSBFbGVtZW50QXBpID0ge1xuICBnZXRTdHlsZTogKGFyZzE6IEhUTUxFbGVtZW50LCBhcmcyOiBzdHJpbmcpID0+IHN0cmluZztcbiAgc2V0U3R5bGU6IChhcmcxOiBIVE1MRWxlbWVudCwgYXJnMjogc3RyaW5nLCBhcmczOiBzdHJpbmcpID0+IHZvaWQ7XG4gIGdldFByb3BlcnR5OiAoYXJnMTogSFRNTEVsZW1lbnQsIGFyZzI6IHN0cmluZykgPT4gbnVsbCB8IHN0cmluZztcbiAgZ2V0VmFsaWREb2N1bWVudDogKGFyZzE6IElYMlRhcmdldCkgPT4gYW55O1xuICBnZXRRdWVyeVNlbGVjdG9yOiAoYXJnMTogSVgyVGFyZ2V0KSA9PiBudWxsIHwgU2VsZWN0b3I7XG4gIC8vIFNob3VsZCB0aGVzZSBgQXJyYXlgcyBiZSBgTm9kZUxpc3Rgcz9cbiAgcXVlcnlEb2N1bWVudDogKFxuICAgIGFyZzE6IFNlbGVjdG9yLFxuICAgIGFyZzI/OiBTZWxlY3RvciB8IG51bGwgfCB1bmRlZmluZWRcbiAgKSA9PiBBcnJheTxIVE1MRWxlbWVudD47XG4gIGdldENoaWxkRWxlbWVudHM6IChcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFMyMzE1IC0gVHlwZSAnTm9kZUxpc3QnIGlzIG5vdCBnZW5lcmljLlxuICAgIGFyZzE6IE5vZGVMaXN0PEhUTUxFbGVtZW50PiB8IEFycmF5PEhUTUxFbGVtZW50PlxuICApID0+IEFycmF5PEhUTUxFbGVtZW50PjtcbiAgZ2V0U2libGluZ0VsZW1lbnRzOiAoXG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTMjMxNSAtIFR5cGUgJ05vZGVMaXN0JyBpcyBub3QgZ2VuZXJpYy5cbiAgICBhcmcxOiBOb2RlTGlzdDxIVE1MRWxlbWVudD4gfCBBcnJheTxIVE1MRWxlbWVudD5cbiAgKSA9PiBBcnJheTxIVE1MRWxlbWVudD47XG5cbiAgbWF0Y2hTZWxlY3RvcjogKGFyZzE6IFNlbGVjdG9yKSA9PiAoYXJnMTogSFRNTEVsZW1lbnQpID0+IGJvb2xlYW47XG4gIGVsZW1lbnRDb250YWluczogKGFyZzE6IEhUTUxFbGVtZW50LCBhcmcyOiBIVE1MRWxlbWVudCkgPT4gYm9vbGVhbjtcbiAgaXNTaWJsaW5nTm9kZTogKGFyZzE6IEhUTUxFbGVtZW50LCBhcmcyOiBIVE1MRWxlbWVudCkgPT4gYm9vbGVhbjtcbiAgLy8gLi4uIHdlJ3JlIG1pc3NpbmcgYSBsb3QgbW9yZSBoZXJlIC4uLjtcbn07XG5cbmNvbnN0IHtcbiAgQkFDS0dST1VORCxcbiAgVFJBTlNGT1JNLFxuICBUUkFOU0xBVEVfM0QsXG4gIFNDQUxFXzNELFxuICBST1RBVEVfWCxcbiAgUk9UQVRFX1ksXG4gIFJPVEFURV9aLFxuICBTS0VXLFxuICBQUkVTRVJWRV8zRCxcbiAgRkxFWCxcbiAgT1BBQ0lUWSxcbiAgRklMVEVSLFxuICBGT05UX1ZBUklBVElPTl9TRVRUSU5HUyxcbiAgV0lEVEgsXG4gIEhFSUdIVCxcbiAgQkFDS0dST1VORF9DT0xPUixcbiAgQk9SREVSX0NPTE9SLFxuICBDT0xPUixcbiAgQ0hJTERSRU4sXG4gIElNTUVESUFURV9DSElMRFJFTixcbiAgU0lCTElOR1MsXG4gIFBBUkVOVCxcbiAgRElTUExBWSxcbiAgV0lMTF9DSEFOR0UsXG4gIEFVVE8sXG4gIENPTU1BX0RFTElNSVRFUixcbiAgQ09MT05fREVMSU1JVEVSLFxuICBCQVJfREVMSU1JVEVSLFxuICBSRU5ERVJfVFJBTlNGT1JNLFxuICBSRU5ERVJfR0VORVJBTCxcbiAgUkVOREVSX1NUWUxFLFxuICBSRU5ERVJfUExVR0lOLFxufSA9IElYMkVuZ2luZUNvbnN0YW50cztcblxuY29uc3Qge1xuICBUUkFOU0ZPUk1fTU9WRSxcbiAgVFJBTlNGT1JNX1NDQUxFLFxuICBUUkFOU0ZPUk1fUk9UQVRFLFxuICBUUkFOU0ZPUk1fU0tFVyxcbiAgU1RZTEVfT1BBQ0lUWSxcbiAgU1RZTEVfRklMVEVSLFxuICBTVFlMRV9GT05UX1ZBUklBVElPTixcbiAgU1RZTEVfU0laRSxcbiAgU1RZTEVfQkFDS0dST1VORF9DT0xPUixcbiAgU1RZTEVfQk9SREVSLFxuICBTVFlMRV9URVhUX0NPTE9SLFxuICBHRU5FUkFMX0RJU1BMQVksXG4gIE9CSkVDVF9WQUxVRSxcbn0gPSBBY3Rpb25UeXBlQ29uc3RzO1xuXG5leHBvcnQge3NoYWxsb3dFcXVhbH07XG5cbi8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwMDYgLSBQYXJhbWV0ZXIgJ3YnIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuXG5jb25zdCB0cmltID0gKHYpID0+IHYudHJpbSgpO1xuXG5jb25zdCBjb2xvclN0eWxlUHJvcHMgPSBPYmplY3QuZnJlZXplKHtcbiAgW1NUWUxFX0JBQ0tHUk9VTkRfQ09MT1JdOiBCQUNLR1JPVU5EX0NPTE9SLFxuICBbU1RZTEVfQk9SREVSXTogQk9SREVSX0NPTE9SLFxuICBbU1RZTEVfVEVYVF9DT0xPUl06IENPTE9SLFxufSk7XG5cbmNvbnN0IHdpbGxDaGFuZ2VQcm9wcyA9IE9iamVjdC5mcmVlemUoe1xuICBbVFJBTlNGT1JNX1BSRUZJWEVEXTogVFJBTlNGT1JNLFxuICBbQkFDS0dST1VORF9DT0xPUl06IEJBQ0tHUk9VTkQsXG4gIFtPUEFDSVRZXTogT1BBQ0lUWSxcbiAgW0ZJTFRFUl06IEZJTFRFUixcbiAgW1dJRFRIXTogV0lEVEgsXG4gIFtIRUlHSFRdOiBIRUlHSFQsXG4gIFtGT05UX1ZBUklBVElPTl9TRVRUSU5HU106IEZPTlRfVkFSSUFUSU9OX1NFVFRJTkdTLFxufSk7XG5cbmNvbnN0IG9iamVjdENhY2hlID0gbmV3IE1hcCgpO1xuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJPYmplY3RDYWNoZSgpIHtcbiAgb2JqZWN0Q2FjaGUuY2xlYXIoKTtcbn1cblxubGV0IGluc3RhbmNlQ291bnQgPSAxO1xuZXhwb3J0IGZ1bmN0aW9uIGdldEluc3RhbmNlSWQoKSB7XG4gIHJldHVybiAnaScgKyBpbnN0YW5jZUNvdW50Kys7XG59XG5cbmxldCBlbGVtZW50Q291bnQgPSAxO1xuZXhwb3J0IGZ1bmN0aW9uIGdldEVsZW1lbnRJZChpeEVsZW1lbnRzOiBhbnksIHJlZjogYW55KSB7XG4gIC8vIFRPRE86IG9wdGltaXplIGVsZW1lbnQgbG9va3VwXG4gIGZvciAoY29uc3Qga2V5IGluIGl4RWxlbWVudHMpIHtcbiAgICBjb25zdCBpeEVsID0gaXhFbGVtZW50c1trZXldO1xuICAgIGlmIChpeEVsICYmIGl4RWwucmVmID09PSByZWYpIHtcbiAgICAgIHJldHVybiBpeEVsLmlkO1xuICAgIH1cbiAgfVxuICByZXR1cm4gJ2UnICsgZWxlbWVudENvdW50Kys7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWlmeVN0YXRlKHtcbiAgZXZlbnRzLFxuICBhY3Rpb25MaXN0cyxcbiAgc2l0ZSxcbn06IFBhcnRpYWw8SVgyUmF3RGF0YT4gPSB7fSk6IHJhd0RhdGFJbXBvcnRlZFBheWxvYWQge1xuICBjb25zdCBldmVudFR5cGVNYXAgPSByZWR1Y2UoXG4gICAgZXZlbnRzLFxuICAgIChyZXN1bHQsIGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCB7ZXZlbnRUeXBlSWR9ID0gZXZlbnQ7XG5cbiAgICAgIGlmICghcmVzdWx0W2V2ZW50VHlwZUlkXSkge1xuICAgICAgICByZXN1bHRbZXZlbnRUeXBlSWRdID0ge30gYXMge1trZXk6IHN0cmluZ106IEV2ZW50VHlwZX07XG4gICAgICB9XG5cbiAgICAgIHJlc3VsdFtldmVudFR5cGVJZF1bZXZlbnQuaWRdID0gZXZlbnQ7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sXG4gICAge30gYXMgcmF3RGF0YUltcG9ydGVkUGF5bG9hZFsnaXhEYXRhJ11bJ2V2ZW50VHlwZU1hcCddXG4gICk7XG5cbiAgbGV0IG1lZGlhUXVlcmllcyA9IHNpdGUgJiYgc2l0ZS5tZWRpYVF1ZXJpZXM7XG4gIGxldCBtZWRpYVF1ZXJ5S2V5cyA9IFtdIGFzIEJyZWFrcG9pbnRJRFtdO1xuICBpZiAobWVkaWFRdWVyaWVzKSB7XG4gICAgbWVkaWFRdWVyeUtleXMgPSBtZWRpYVF1ZXJpZXMubWFwKChtcSkgPT4gbXEua2V5KTtcbiAgfSBlbHNlIHtcbiAgICBtZWRpYVF1ZXJpZXMgPSBbXTtcbiAgICBjb25zb2xlLndhcm4oYElYMiBtaXNzaW5nIG1lZGlhUXVlcmllcyBpbiBzaXRlIGRhdGFgKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaXhEYXRhOiB7XG4gICAgICBldmVudHMsXG4gICAgICBhY3Rpb25MaXN0cyxcbiAgICAgIGV2ZW50VHlwZU1hcCxcbiAgICAgIG1lZGlhUXVlcmllcyxcbiAgICAgIG1lZGlhUXVlcnlLZXlzLFxuICAgIH0sXG4gIH07XG59XG5cbmNvbnN0IHN0cmljdEVxdWFsID0gKGE6IGFueSwgYjogYW55KSA9PiBhID09PSBiO1xuXG5leHBvcnQgZnVuY3Rpb24gb2JzZXJ2ZVN0b3JlKHtcbiAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTNzAzMSAtIEJpbmRpbmcgZWxlbWVudCAnc3RvcmUnIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuXG4gIHN0b3JlLFxuICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFM3MDMxIC0gQmluZGluZyBlbGVtZW50ICdzZWxlY3QnIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuXG4gIHNlbGVjdCxcbiAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTNzAzMSAtIEJpbmRpbmcgZWxlbWVudCAnb25DaGFuZ2UnIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuXG4gIG9uQ2hhbmdlLFxuICBjb21wYXJhdG9yID0gc3RyaWN0RXF1YWwsXG59KSB7XG4gIGNvbnN0IHtnZXRTdGF0ZSwgc3Vic2NyaWJlfSA9IHN0b3JlO1xuICBjb25zdCB1bnN1YnNjcmliZSA9IHN1YnNjcmliZShoYW5kbGVDaGFuZ2UpO1xuICBsZXQgY3VycmVudFN0YXRlID0gc2VsZWN0KGdldFN0YXRlKCkpO1xuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoKSB7XG4gICAgY29uc3QgbmV4dFN0YXRlID0gc2VsZWN0KGdldFN0YXRlKCkpO1xuICAgIGlmIChuZXh0U3RhdGUgPT0gbnVsbCkge1xuICAgICAgdW5zdWJzY3JpYmUoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCFjb21wYXJhdG9yKG5leHRTdGF0ZSwgY3VycmVudFN0YXRlKSkge1xuICAgICAgY3VycmVudFN0YXRlID0gbmV4dFN0YXRlO1xuICAgICAgb25DaGFuZ2UoY3VycmVudFN0YXRlLCBzdG9yZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiB1bnN1YnNjcmliZTtcbn1cblxuLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTNzAwNiAtIFBhcmFtZXRlciAndGFyZ2V0JyBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlLlxuZnVuY3Rpb24gbm9ybWFsaXplVGFyZ2V0KHRhcmdldCkge1xuICBjb25zdCB0eXBlID0gdHlwZW9mIHRhcmdldDtcbiAgaWYgKHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHtpZDogdGFyZ2V0fTtcbiAgfSBlbHNlIGlmICh0YXJnZXQgIT0gbnVsbCAmJiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIGNvbnN0IHtpZCwgb2JqZWN0SWQsIHNlbGVjdG9yLCBzZWxlY3Rvckd1aWRzLCBhcHBsaWVzVG8sIHVzZUV2ZW50VGFyZ2V0fSA9XG4gICAgICB0YXJnZXQ7XG4gICAgcmV0dXJuIHtpZCwgb2JqZWN0SWQsIHNlbGVjdG9yLCBzZWxlY3Rvckd1aWRzLCBhcHBsaWVzVG8sIHVzZUV2ZW50VGFyZ2V0fTtcbiAgfVxuICByZXR1cm4ge307XG59XG5cbnR5cGUgSVgyVGFyZ2V0ID0gYW55OyAvLyBzZXJpYWxpemVkIElYMkV2ZW50VGFyZ2V0RGF0YVxuXG50eXBlIEFmZmVjdGVkRWxlbWVudHNQcm9wcyA9IHtcbiAgY29uZmlnOiB7XG4gICAgdGFyZ2V0OiBJWDJUYXJnZXQ7XG4gICAgdGFyZ2V0cz86IEFycmF5PElYMlRhcmdldD47XG4gIH07XG4gIGV2ZW50PzogYW55OyAvLyBzZXJpYWxpemVkIElYMkV2ZW50VHlwZTtcbiAgZXZlbnRUYXJnZXQ/OiBIVE1MRWxlbWVudCB8IG51bGwgfCB1bmRlZmluZWQ7XG4gIGVsZW1lbnRSb290PzogSFRNTEVsZW1lbnQgfCBudWxsIHwgdW5kZWZpbmVkO1xuICBlbGVtZW50QXBpOiBFbGVtZW50QXBpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFmZmVjdGVkRWxlbWVudHMoe1xuICBjb25maWcsXG4gIGV2ZW50LFxuICBldmVudFRhcmdldCxcbiAgZWxlbWVudFJvb3QsXG4gIGVsZW1lbnRBcGksXG59OiBBZmZlY3RlZEVsZW1lbnRzUHJvcHMpOiBBcnJheTxIVE1MRWxlbWVudCB8IGFueT4ge1xuICBpZiAoIWVsZW1lbnRBcGkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0lYMiBtaXNzaW5nIGVsZW1lbnRBcGknKTtcbiAgfVxuXG4gIGNvbnN0IHt0YXJnZXRzfSA9IGNvbmZpZztcbiAgaWYgKEFycmF5LmlzQXJyYXkodGFyZ2V0cykgJiYgdGFyZ2V0cy5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIHRhcmdldHMucmVkdWNlPEFycmF5PGFueT4+KFxuICAgICAgKGFjY3VtdWxhdG9yLCB0YXJnZXQpOiBBcnJheTxIVE1MRWxlbWVudD4gPT5cbiAgICAgICAgYWNjdW11bGF0b3IuY29uY2F0KFxuICAgICAgICAgIGdldEFmZmVjdGVkRWxlbWVudHMoe1xuICAgICAgICAgICAgY29uZmlnOiB7dGFyZ2V0fSxcbiAgICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgICAgZXZlbnRUYXJnZXQsXG4gICAgICAgICAgICBlbGVtZW50Um9vdCxcbiAgICAgICAgICAgIGVsZW1lbnRBcGksXG4gICAgICAgICAgfSlcbiAgICAgICAgKSxcbiAgICAgIFtdXG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0IHtcbiAgICBnZXRWYWxpZERvY3VtZW50LFxuICAgIGdldFF1ZXJ5U2VsZWN0b3IsXG4gICAgcXVlcnlEb2N1bWVudCxcbiAgICBnZXRDaGlsZEVsZW1lbnRzLFxuICAgIGdldFNpYmxpbmdFbGVtZW50cyxcbiAgICBtYXRjaFNlbGVjdG9yLFxuICAgIGVsZW1lbnRDb250YWlucyxcbiAgICBpc1NpYmxpbmdOb2RlLFxuICB9ID0gZWxlbWVudEFwaTtcblxuICBjb25zdCB7dGFyZ2V0fSA9IGNvbmZpZztcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBjb25zdCB7XG4gICAgaWQsXG5cbiAgICBvYmplY3RJZCxcblxuICAgIHNlbGVjdG9yLFxuXG4gICAgc2VsZWN0b3JHdWlkcyxcblxuICAgIGFwcGxpZXNUbyxcblxuICAgIHVzZUV2ZW50VGFyZ2V0LFxuICB9ID0gbm9ybWFsaXplVGFyZ2V0KHRhcmdldCk7XG5cbiAgaWYgKG9iamVjdElkKSB7XG4gICAgY29uc3QgcmVmID0gb2JqZWN0Q2FjaGUuaGFzKG9iamVjdElkKVxuICAgICAgPyBvYmplY3RDYWNoZS5nZXQob2JqZWN0SWQpXG4gICAgICA6IG9iamVjdENhY2hlLnNldChvYmplY3RJZCwge30pLmdldChvYmplY3RJZCk7XG4gICAgcmV0dXJuIFtyZWZdO1xuICB9XG5cbiAgaWYgKGFwcGxpZXNUbyA9PT0gRXZlbnRBcHBsaWVzVG8uUEFHRSkge1xuICAgIGNvbnN0IGRvYyA9IGdldFZhbGlkRG9jdW1lbnQoaWQpO1xuICAgIHJldHVybiBkb2MgPyBbZG9jXSA6IFtdO1xuICB9XG5cbiAgY29uc3Qgb3ZlcnJpZGVzID0gZXZlbnQ/LmFjdGlvbj8uY29uZmlnPy5hZmZlY3RlZEVsZW1lbnRzID8/IHt9O1xuICBjb25zdCBvdmVycmlkZSA9IG92ZXJyaWRlc1tpZCB8fCBzZWxlY3Rvcl0gfHwge307XG4gIGNvbnN0IHZhbGlkT3ZlcnJpZGUgPSBCb29sZWFuKG92ZXJyaWRlLmlkIHx8IG92ZXJyaWRlLnNlbGVjdG9yKTtcblxuICBsZXQgbGltaXRBZmZlY3RlZEVsZW1lbnRzO1xuICBsZXQgYmFzZVNlbGVjdG9yO1xuICBsZXQgZmluYWxTZWxlY3RvcjtcblxuICBjb25zdCBldmVudFRhcmdldFNlbGVjdG9yID1cbiAgICBldmVudCAmJiBnZXRRdWVyeVNlbGVjdG9yKG5vcm1hbGl6ZVRhcmdldChldmVudC50YXJnZXQpKTtcblxuICBpZiAodmFsaWRPdmVycmlkZSkge1xuICAgIGxpbWl0QWZmZWN0ZWRFbGVtZW50cyA9IG92ZXJyaWRlLmxpbWl0QWZmZWN0ZWRFbGVtZW50cztcbiAgICBiYXNlU2VsZWN0b3IgPSBldmVudFRhcmdldFNlbGVjdG9yO1xuICAgIGZpbmFsU2VsZWN0b3IgPSBnZXRRdWVyeVNlbGVjdG9yKG92ZXJyaWRlKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBwYXNzIGluIHNlbGVjdG9yR3VpZHMgYXMgd2VsbCBmb3Igc2VydmVyLXNpZGUgcmVuZGVyaW5nLlxuICAgIGJhc2VTZWxlY3RvciA9IGZpbmFsU2VsZWN0b3IgPSBnZXRRdWVyeVNlbGVjdG9yKHtcbiAgICAgIGlkLFxuICAgICAgc2VsZWN0b3IsXG4gICAgICBzZWxlY3Rvckd1aWRzLFxuICAgIH0pO1xuICB9XG5cbiAgaWYgKGV2ZW50ICYmIHVzZUV2ZW50VGFyZ2V0KSB7XG4gICAgLy8gZXZlbnRUYXJnZXQgaXMgbm90IGRlZmluZWQgd2hlbiB0aGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCBpbiBhIGNsZWFyIHJlcXVlc3QsIHNvIGZpbmRcbiAgICAvLyBhbGwgdGFyZ2V0IGVsZW1lbnRzIGFzc29jaWF0ZWQgd2l0aCB0aGUgZXZlbnQgZGF0YSwgYW5kIHJldHVybiBhZmZlY3RlZCBlbGVtZW50cy5cbiAgICBjb25zdCBldmVudFRhcmdldHMgPVxuICAgICAgZXZlbnRUYXJnZXQgJiYgKGZpbmFsU2VsZWN0b3IgfHwgdXNlRXZlbnRUYXJnZXQgPT09IHRydWUpXG4gICAgICAgID8gW2V2ZW50VGFyZ2V0XVxuICAgICAgICA6IHF1ZXJ5RG9jdW1lbnQoZXZlbnRUYXJnZXRTZWxlY3Rvcik7XG5cbiAgICBpZiAoZmluYWxTZWxlY3Rvcikge1xuICAgICAgaWYgKHVzZUV2ZW50VGFyZ2V0ID09PSBQQVJFTlQpIHtcbiAgICAgICAgcmV0dXJuIHF1ZXJ5RG9jdW1lbnQoZmluYWxTZWxlY3RvcikuZmlsdGVyKChwYXJlbnRFbGVtZW50KSA9PlxuICAgICAgICAgIGV2ZW50VGFyZ2V0cy5zb21lKCh0YXJnZXRFbGVtZW50KSA9PlxuICAgICAgICAgICAgZWxlbWVudENvbnRhaW5zKHBhcmVudEVsZW1lbnQsIHRhcmdldEVsZW1lbnQpXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKHVzZUV2ZW50VGFyZ2V0ID09PSBDSElMRFJFTikge1xuICAgICAgICByZXR1cm4gcXVlcnlEb2N1bWVudChmaW5hbFNlbGVjdG9yKS5maWx0ZXIoKGNoaWxkRWxlbWVudCkgPT5cbiAgICAgICAgICBldmVudFRhcmdldHMuc29tZSgodGFyZ2V0RWxlbWVudCkgPT5cbiAgICAgICAgICAgIGVsZW1lbnRDb250YWlucyh0YXJnZXRFbGVtZW50LCBjaGlsZEVsZW1lbnQpXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKHVzZUV2ZW50VGFyZ2V0ID09PSBTSUJMSU5HUykge1xuICAgICAgICByZXR1cm4gcXVlcnlEb2N1bWVudChmaW5hbFNlbGVjdG9yKS5maWx0ZXIoKHNpYmxpbmdFbGVtZW50KSA9PlxuICAgICAgICAgIGV2ZW50VGFyZ2V0cy5zb21lKCh0YXJnZXRFbGVtZW50KSA9PlxuICAgICAgICAgICAgaXNTaWJsaW5nTm9kZSh0YXJnZXRFbGVtZW50LCBzaWJsaW5nRWxlbWVudClcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBldmVudFRhcmdldHM7XG4gIH1cblxuICBpZiAoYmFzZVNlbGVjdG9yID09IG51bGwgfHwgZmluYWxTZWxlY3RvciA9PSBudWxsKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgaWYgKElTX0JST1dTRVJfRU5WICYmIGVsZW1lbnRSb290KSB7XG4gICAgcmV0dXJuIHF1ZXJ5RG9jdW1lbnQoZmluYWxTZWxlY3RvcikuZmlsdGVyKChlbGVtZW50KSA9PlxuICAgICAgZWxlbWVudFJvb3QuY29udGFpbnMoZWxlbWVudClcbiAgICApO1xuICB9XG5cbiAgaWYgKGxpbWl0QWZmZWN0ZWRFbGVtZW50cyA9PT0gQ0hJTERSRU4pIHtcbiAgICByZXR1cm4gcXVlcnlEb2N1bWVudChiYXNlU2VsZWN0b3IsIGZpbmFsU2VsZWN0b3IpO1xuICB9IGVsc2UgaWYgKGxpbWl0QWZmZWN0ZWRFbGVtZW50cyA9PT0gSU1NRURJQVRFX0NISUxEUkVOKSB7XG4gICAgcmV0dXJuIGdldENoaWxkRWxlbWVudHMocXVlcnlEb2N1bWVudChiYXNlU2VsZWN0b3IpKS5maWx0ZXIoXG4gICAgICBtYXRjaFNlbGVjdG9yKGZpbmFsU2VsZWN0b3IpXG4gICAgKTtcbiAgfSBlbHNlIGlmIChsaW1pdEFmZmVjdGVkRWxlbWVudHMgPT09IFNJQkxJTkdTKSB7XG4gICAgcmV0dXJuIGdldFNpYmxpbmdFbGVtZW50cyhxdWVyeURvY3VtZW50KGJhc2VTZWxlY3RvcikpLmZpbHRlcihcbiAgICAgIG1hdGNoU2VsZWN0b3IoZmluYWxTZWxlY3RvcilcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBxdWVyeURvY3VtZW50KGZpbmFsU2VsZWN0b3IpO1xuICB9XG59XG5cbi8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwMzEgLSBCaW5kaW5nIGVsZW1lbnQgJ2VsZW1lbnQnIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuIHwgVFM3MDMxIC0gQmluZGluZyBlbGVtZW50ICdhY3Rpb25JdGVtJyBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlLlxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbXB1dGVkU3R5bGUoe2VsZW1lbnQsIGFjdGlvbkl0ZW19KSB7XG4gIGlmICghSVNfQlJPV1NFUl9FTlYpIHtcbiAgICByZXR1cm4ge307XG4gIH1cbiAgY29uc3Qge2FjdGlvblR5cGVJZH0gPSBhY3Rpb25JdGVtO1xuICBzd2l0Y2ggKGFjdGlvblR5cGVJZCkge1xuICAgIGNhc2UgU1RZTEVfU0laRTpcbiAgICBjYXNlIFNUWUxFX0JBQ0tHUk9VTkRfQ09MT1I6XG4gICAgY2FzZSBTVFlMRV9CT1JERVI6XG4gICAgY2FzZSBTVFlMRV9URVhUX0NPTE9SOlxuICAgIGNhc2UgR0VORVJBTF9ESVNQTEFZOlxuICAgICAgcmV0dXJuIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4ge307XG4gIH1cbn1cblxuY29uc3QgcHhWYWx1ZVJlZ2V4ID0gL3B4LztcblxuLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTNzAwNiAtIFBhcmFtZXRlciAnZmlsdGVycycgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS5cbmNvbnN0IGdldEZpbHRlckRlZmF1bHRzID0gKGFjdGlvblN0YXRlOiBhbnksIGZpbHRlcnMpID0+XG4gIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwMDYgLSBQYXJhbWV0ZXIgJ3Jlc3VsdCcgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS4gfCBUUzcwMDYgLSBQYXJhbWV0ZXIgJ2ZpbHRlcicgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS5cbiAgZmlsdGVycy5yZWR1Y2UoKHJlc3VsdCwgZmlsdGVyKSA9PiB7XG4gICAgaWYgKHJlc3VsdFtmaWx0ZXIudHlwZV0gPT0gbnVsbCkge1xuICAgICAgcmVzdWx0W2ZpbHRlci50eXBlXSA9XG4gICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwNTMgLSBFbGVtZW50IGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUgYmVjYXVzZSBleHByZXNzaW9uIG9mIHR5cGUgJ2FueScgY2FuJ3QgYmUgdXNlZCB0byBpbmRleCB0eXBlICdSZWFkb25seTx7IGJsdXI6IDA7ICdodWUtcm90YXRlJzogMDsgaW52ZXJ0OiAwOyBncmF5c2NhbGU6IDA7IHNhdHVyYXRlOiAxMDA7IHNlcGlhOiAwOyBjb250cmFzdDogMTAwOyBicmlnaHRuZXNzOiAxMDA7IH0+Jy5cbiAgICAgICAgZmlsdGVyRGVmYXVsdHNbZmlsdGVyLnR5cGVdO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sIGFjdGlvblN0YXRlIHx8IHt9KTtcblxuY29uc3QgZ2V0Rm9udFZhcmlhdGlvbkRlZmF1bHRzID0gKFxuICBhY3Rpb25TdGF0ZTogYW55LFxuICBmb250VmFyaWF0aW9uczogQXJyYXk8Rm9udFZhcmlhdGlvbkl0ZW1Db25maWdUeXBlPlxuKSA9PlxuICBmb250VmFyaWF0aW9ucy5yZWR1Y2UoKHJlc3VsdCwgZm9udFZhcmlhdGlvbikgPT4ge1xuICAgIGlmIChyZXN1bHRbZm9udFZhcmlhdGlvbi50eXBlXSA9PSBudWxsKSB7XG4gICAgICByZXN1bHRbZm9udFZhcmlhdGlvbi50eXBlXSA9XG4gICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwNTMgLSBFbGVtZW50IGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUgYmVjYXVzZSBleHByZXNzaW9uIG9mIHR5cGUgJ3N0cmluZycgY2FuJ3QgYmUgdXNlZCB0byBpbmRleCB0eXBlICdSZWFkb25seTx7IHdnaHQ6IDA7IG9wc3o6IDA7IHdkdGg6IDA7IHNsbnQ6IDA7IH0+Jy5cbiAgICAgICAgZm9udFZhcmlhdGlvbkRlZmF1bHRzW2ZvbnRWYXJpYXRpb24udHlwZV0gfHxcbiAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTMjMzOSAtIFByb3BlcnR5ICdkZWZhdWx0VmFsdWUnIGRvZXMgbm90IGV4aXN0IG9uIHR5cGUgJ0ZvbnRWYXJpYXRpb25JdGVtQ29uZmlnVHlwZScuXG4gICAgICAgIGZvbnRWYXJpYXRpb24uZGVmYXVsdFZhbHVlIHx8XG4gICAgICAgIDA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSwgYWN0aW9uU3RhdGUgfHwge30pO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5zdGFuY2VPcmlnaW4oXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuXG4gIHJlZlN0YXRlID0ge30sXG4gIGNvbXB1dGVkU3R5bGU6XG4gICAgfCB7XG4gICAgICAgIFtrZXk6IHN0cmluZ106IHN0cmluZztcbiAgICAgIH1cbiAgICB8IG51bGxcbiAgICB8IHVuZGVmaW5lZCA9IHt9LFxuICBhY3Rpb25JdGVtOiBBY3Rpb25JdGVtVHlwZSxcbiAgZWxlbWVudEFwaTogRWxlbWVudEFwaVxuKSB7XG4gIGNvbnN0IHtnZXRTdHlsZX0gPSBlbGVtZW50QXBpO1xuICAvLyBGbG93IEhhY2s6IFBhc3NpbmcgYWN0aW9uVHlwZUlkIHRvIGlzUGx1Z2luVHlwZSBhbmQgdGhlbiB0cnlpbmdcbiAgLy8gdG8gZG8gdHlwZSByZWZpbmVtZW50IHVzaW5nIHRoZSBzYW1lIHZhcmlhYmxlIHZpYSBhIHN3aXRjaCBzdGF0ZW1lbnRcbiAgLy8gYnJlYWtzIGRvd24uIFRoaXMgaXMgaXMgYSB3b3JrYXJvdW5kIHRvIGVuc3VyZSB3ZSBjYW4gdXNlIHR5cGUgcmVmaW5lbWVudC5cbiAgY29uc3Qge2FjdGlvblR5cGVJZH0gPSBhY3Rpb25JdGVtO1xuXG4gIGlmIChpc1BsdWdpblR5cGUoYWN0aW9uVHlwZUlkKSkge1xuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzIzNDUgLSBBcmd1bWVudCBvZiB0eXBlICdcIlRSQU5TRk9STV9NT1ZFXCIgfCBcIlRSQU5TRk9STV9TQ0FMRVwiIHwgXCJUUkFOU0ZPUk1fUk9UQVRFXCIgfCBcIlRSQU5TRk9STV9TS0VXXCIgfCBcIlNUWUxFX09QQUNJVFlcIiB8IFwiU1RZTEVfU0laRVwiIHwgXCJTVFlMRV9GSUxURVJcIiB8IFwiU1RZTEVfRk9OVF9WQVJJQVRJT05cIiB8IFwiU1RZTEVfQkFDS0dST1VORF9DT0xPUlwiIHwgXCJTVFlMRV9CT1JERVJcIiB8IFwiU1RZTEVfVEVYVF9DT0xPUlwiIHwgXCJQTFVHSU5fTE9UVElFXCIgfCBcIkdFTkVSQUxfRElTUExBWVwiJyBpcyBub3QgYXNzaWduYWJsZSB0byBwYXJhbWV0ZXIgb2YgdHlwZSAnUGx1Z2luVHlwZScuIHwgVFM3MDUzIC0gRWxlbWVudCBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlIGJlY2F1c2UgZXhwcmVzc2lvbiBvZiB0eXBlICdcIlRSQU5TRk9STV9NT1ZFXCIgfCBcIlRSQU5TRk9STV9TQ0FMRVwiIHwgXCJUUkFOU0ZPUk1fUk9UQVRFXCIgfCBcIlRSQU5TRk9STV9TS0VXXCIgfCBcIlNUWUxFX09QQUNJVFlcIiB8IFwiU1RZTEVfU0laRVwiIHwgXCJTVFlMRV9GSUxURVJcIiB8IFwiU1RZTEVfRk9OVF9WQVJJQVRJT05cIiB8IFwiU1RZTEVfQkFDS0dST1VORF9DT0xPUlwiIHwgXCJTVFlMRV9CT1JERVJcIiB8IFwiU1RZTEVfVEVYVF9DT0xPUlwiIHwgXCJQTFVHSU5fTE9UVElFXCIgfCBcIkdFTkVSQUxfRElTUExBWVwiJyBjYW4ndCBiZSB1c2VkIHRvIGluZGV4IHR5cGUgJ3t9Jy5cbiAgICByZXR1cm4gZ2V0UGx1Z2luT3JpZ2luKGFjdGlvblR5cGVJZCkocmVmU3RhdGVbYWN0aW9uVHlwZUlkXSwgYWN0aW9uSXRlbSk7XG4gIH1cblxuICBzd2l0Y2ggKGFjdGlvbkl0ZW0uYWN0aW9uVHlwZUlkKSB7XG4gICAgY2FzZSBUUkFOU0ZPUk1fTU9WRTpcbiAgICBjYXNlIFRSQU5TRk9STV9TQ0FMRTpcbiAgICBjYXNlIFRSQU5TRk9STV9ST1RBVEU6XG4gICAgY2FzZSBUUkFOU0ZPUk1fU0tFVzoge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTNzA1MyAtIEVsZW1lbnQgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZSBiZWNhdXNlIGV4cHJlc3Npb24gb2YgdHlwZSAnXCJUUkFOU0ZPUk1fTU9WRVwiIHwgXCJUUkFOU0ZPUk1fU0NBTEVcIiB8IFwiVFJBTlNGT1JNX1JPVEFURVwiIHwgXCJUUkFOU0ZPUk1fU0tFV1wiJyBjYW4ndCBiZSB1c2VkIHRvIGluZGV4IHR5cGUgJ3t9Jy5cbiAgICAgICAgcmVmU3RhdGVbYWN0aW9uSXRlbS5hY3Rpb25UeXBlSWRdIHx8XG4gICAgICAgIHRyYW5zZm9ybURlZmF1bHRzW2FjdGlvbkl0ZW0uYWN0aW9uVHlwZUlkXVxuICAgICAgKTtcbiAgICB9XG4gICAgY2FzZSBTVFlMRV9GSUxURVI6XG4gICAgICByZXR1cm4gZ2V0RmlsdGVyRGVmYXVsdHMoXG4gICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwNTMgLSBFbGVtZW50IGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUgYmVjYXVzZSBleHByZXNzaW9uIG9mIHR5cGUgJ1wiU1RZTEVfRklMVEVSXCInIGNhbid0IGJlIHVzZWQgdG8gaW5kZXggdHlwZSAne30nLlxuICAgICAgICByZWZTdGF0ZVthY3Rpb25JdGVtLmFjdGlvblR5cGVJZF0sXG4gICAgICAgIGFjdGlvbkl0ZW0uY29uZmlnLmZpbHRlcnNcbiAgICAgICk7XG4gICAgY2FzZSBTVFlMRV9GT05UX1ZBUklBVElPTjpcbiAgICAgIHJldHVybiBnZXRGb250VmFyaWF0aW9uRGVmYXVsdHMoXG4gICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwNTMgLSBFbGVtZW50IGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUgYmVjYXVzZSBleHByZXNzaW9uIG9mIHR5cGUgJ1wiU1RZTEVfRk9OVF9WQVJJQVRJT05cIicgY2FuJ3QgYmUgdXNlZCB0byBpbmRleCB0eXBlICd7fScuXG4gICAgICAgIHJlZlN0YXRlW2FjdGlvbkl0ZW0uYWN0aW9uVHlwZUlkXSxcbiAgICAgICAgYWN0aW9uSXRlbS5jb25maWcuZm9udFZhcmlhdGlvbnNcbiAgICAgICk7XG4gICAgY2FzZSBTVFlMRV9PUEFDSVRZOlxuICAgICAgcmV0dXJuIHt2YWx1ZTogZGVmYXVsdFRvKHBhcnNlRmxvYXQoZ2V0U3R5bGUoZWxlbWVudCwgT1BBQ0lUWSkpLCAxLjApfTtcbiAgICBjYXNlIFNUWUxFX1NJWkU6IHtcbiAgICAgIGNvbnN0IGlubGluZVdpZHRoID0gZ2V0U3R5bGUoZWxlbWVudCwgV0lEVEgpO1xuICAgICAgY29uc3QgaW5saW5lSGVpZ2h0ID0gZ2V0U3R5bGUoZWxlbWVudCwgSEVJR0hUKTtcbiAgICAgIGxldCB3aWR0aFZhbHVlO1xuICAgICAgbGV0IGhlaWdodFZhbHVlO1xuICAgICAgLy8gV2hlbiBkZXN0aW5hdGlvbiB1bml0IGlzICdBVVRPJywgZW5zdXJlIG9yaWdpbiB2YWx1ZXMgYXJlIGluIHB4XG4gICAgICBpZiAoYWN0aW9uSXRlbS5jb25maWcud2lkdGhVbml0ID09PSBBVVRPKSB7XG4gICAgICAgIHdpZHRoVmFsdWUgPSBweFZhbHVlUmVnZXgudGVzdChpbmxpbmVXaWR0aClcbiAgICAgICAgICA/IHBhcnNlRmxvYXQoaW5saW5lV2lkdGgpXG4gICAgICAgICAgOiAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFMxODA0NyAtICdjb21wdXRlZFN0eWxlJyBpcyBwb3NzaWJseSAnbnVsbCcuXG4gICAgICAgICAgICBwYXJzZUZsb2F0KGNvbXB1dGVkU3R5bGUud2lkdGgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2lkdGhWYWx1ZSA9IGRlZmF1bHRUbyhcbiAgICAgICAgICBwYXJzZUZsb2F0KGlubGluZVdpZHRoKSxcbiAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFMxODA0NyAtICdjb21wdXRlZFN0eWxlJyBpcyBwb3NzaWJseSAnbnVsbCcuXG4gICAgICAgICAgcGFyc2VGbG9hdChjb21wdXRlZFN0eWxlLndpZHRoKVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKGFjdGlvbkl0ZW0uY29uZmlnLmhlaWdodFVuaXQgPT09IEFVVE8pIHtcbiAgICAgICAgaGVpZ2h0VmFsdWUgPSBweFZhbHVlUmVnZXgudGVzdChpbmxpbmVIZWlnaHQpXG4gICAgICAgICAgPyBwYXJzZUZsb2F0KGlubGluZUhlaWdodClcbiAgICAgICAgICA6IC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzE4MDQ3IC0gJ2NvbXB1dGVkU3R5bGUnIGlzIHBvc3NpYmx5ICdudWxsJy5cbiAgICAgICAgICAgIHBhcnNlRmxvYXQoY29tcHV0ZWRTdHlsZS5oZWlnaHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaGVpZ2h0VmFsdWUgPSBkZWZhdWx0VG8oXG4gICAgICAgICAgcGFyc2VGbG9hdChpbmxpbmVIZWlnaHQpLFxuICAgICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzE4MDQ3IC0gJ2NvbXB1dGVkU3R5bGUnIGlzIHBvc3NpYmx5ICdudWxsJy5cbiAgICAgICAgICBwYXJzZUZsb2F0KGNvbXB1dGVkU3R5bGUuaGVpZ2h0KVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgd2lkdGhWYWx1ZSxcbiAgICAgICAgaGVpZ2h0VmFsdWUsXG4gICAgICB9O1xuICAgIH1cbiAgICBjYXNlIFNUWUxFX0JBQ0tHUk9VTkRfQ09MT1I6XG4gICAgY2FzZSBTVFlMRV9CT1JERVI6XG4gICAgY2FzZSBTVFlMRV9URVhUX0NPTE9SOlxuICAgICAgcmV0dXJuIHBhcnNlQ29sb3Ioe1xuICAgICAgICBlbGVtZW50LFxuICAgICAgICBhY3Rpb25UeXBlSWQ6IGFjdGlvbkl0ZW0uYWN0aW9uVHlwZUlkLFxuICAgICAgICBjb21wdXRlZFN0eWxlLFxuICAgICAgICBnZXRTdHlsZSxcbiAgICAgIH0pO1xuICAgIGNhc2UgR0VORVJBTF9ESVNQTEFZOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTMTgwNDcgLSAnY29tcHV0ZWRTdHlsZScgaXMgcG9zc2libHkgJ251bGwnLlxuICAgICAgICB2YWx1ZTogZGVmYXVsdFRvKGdldFN0eWxlKGVsZW1lbnQsIERJU1BMQVkpLCBjb21wdXRlZFN0eWxlLmRpc3BsYXkpLFxuICAgICAgfTtcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gYE9CSkVDVF9WQUxVRWAgaXMgbm90IGFuIGV4cGVjdGVkIGBhY3Rpb25UeXBlSWRgXG4gICAgY2FzZSBPQkpFQ1RfVkFMVUU6XG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFM3MDUzIC0gRWxlbWVudCBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlIGJlY2F1c2UgZXhwcmVzc2lvbiBvZiB0eXBlICdhbnknIGNhbid0IGJlIHVzZWQgdG8gaW5kZXggdHlwZSAne30nLiB8IFRTMjMzOSAtIFByb3BlcnR5ICdhY3Rpb25UeXBlSWQnIGRvZXMgbm90IGV4aXN0IG9uIHR5cGUgJ25ldmVyJy5cbiAgICAgIHJldHVybiByZWZTdGF0ZVthY3Rpb25JdGVtLmFjdGlvblR5cGVJZF0gfHwge3ZhbHVlOiAwfTtcbiAgICBkZWZhdWx0OiB7XG4gICAgICAvLyBBcyBmYXIgYXMgdGhlIHR5cGUgc3lzdGVtIGNhbiB0ZWxsLCB3ZSdyZSBtaXNzaW5nIGEgaGFuZGxlciBmb3JcbiAgICAgIC8vIFBMVUdJTl9MT1RUSUUuXG4gICAgICAvL1xuICAgICAgLy8gVGhpcyBpcyBhY3R1YWxseSBoYW5kbGVkIGJ5IGBpc1BsdWdpblR5cGVgIGFib3ZlLlxuICAgICAgLy9cbiAgICAgIC8qOjogKGFjdGlvbkl0ZW06IGVtcHR5KTsgKi9cbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbn1cblxuLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTNzAwNiAtIFBhcmFtZXRlciAncmVzdWx0JyBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlLiB8IFRTNzAwNiAtIFBhcmFtZXRlciAnZmlsdGVyJyBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlLlxuY29uc3QgcmVkdWNlRmlsdGVycyA9IChyZXN1bHQsIGZpbHRlcikgPT4ge1xuICBpZiAoZmlsdGVyKSB7XG4gICAgcmVzdWx0W2ZpbHRlci50eXBlXSA9IGZpbHRlci52YWx1ZSB8fCAwO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5jb25zdCByZWR1Y2VGb250VmFyaWF0aW9ucyA9IChcbiAgcmVzdWx0OiBSZWNvcmQ8YW55LCBhbnk+LFxuICBmb250VmFyaWF0aW9uOlxuICAgIHwgRm9udFZhcmlhdGlvbkl0ZW1Db25maWdUeXBlXG4gICAgfCB7XG4gICAgICAgIGlkOiBudWxsIHwgc3RyaW5nO1xuICAgICAgICB0eXBlOiBzdHJpbmc7XG4gICAgICAgIHZhbHVlOiBudW1iZXI7XG4gICAgICB9XG4pID0+IHtcbiAgaWYgKGZvbnRWYXJpYXRpb24pIHtcbiAgICByZXN1bHRbZm9udFZhcmlhdGlvbi50eXBlXSA9IGZvbnRWYXJpYXRpb24udmFsdWUgfHwgMDtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEl0ZW1Db25maWdCeUtleSA9IChcbiAgYWN0aW9uVHlwZUlkOiBhbnksXG4gIGtleTogYW55LFxuICBjb25maWc6IGFueVxuKSA9PiB7XG4gIGlmIChpc1BsdWdpblR5cGUoYWN0aW9uVHlwZUlkKSkge1xuICAgIHJldHVybiBnZXRQbHVnaW5Db25maWcoYWN0aW9uVHlwZUlkKShjb25maWcsIGtleSk7XG4gIH1cblxuICBzd2l0Y2ggKGFjdGlvblR5cGVJZCkge1xuICAgIGNhc2UgU1RZTEVfRklMVEVSOiB7XG4gICAgICBjb25zdCBmaWx0ZXIgPSBmaW5kTGFzdChjb25maWcuZmlsdGVycywgKHt0eXBlfSkgPT4gdHlwZSA9PT0ga2V5KTtcbiAgICAgIHJldHVybiBmaWx0ZXIgPyBmaWx0ZXIudmFsdWUgOiAwO1xuICAgIH1cbiAgICBjYXNlIFNUWUxFX0ZPTlRfVkFSSUFUSU9OOiB7XG4gICAgICBjb25zdCBmb250VmFyaWF0aW9uID0gZmluZExhc3QoXG4gICAgICAgIGNvbmZpZy5mb250VmFyaWF0aW9ucyxcbiAgICAgICAgKHt0eXBlfSkgPT4gdHlwZSA9PT0ga2V5XG4gICAgICApO1xuICAgICAgcmV0dXJuIGZvbnRWYXJpYXRpb24gPyBmb250VmFyaWF0aW9uLnZhbHVlIDogMDtcbiAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBjb25maWdba2V5XTtcbiAgfVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldERlc3RpbmF0aW9uVmFsdWVzKHtcbiAgZWxlbWVudCxcbiAgYWN0aW9uSXRlbSxcbiAgZWxlbWVudEFwaSxcbn06IHtcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gIGFjdGlvbkl0ZW06IEFjdGlvbkl0ZW1UeXBlO1xuICBlbGVtZW50QXBpOiBFbGVtZW50QXBpO1xufSkge1xuICBpZiAoaXNQbHVnaW5UeXBlKGFjdGlvbkl0ZW0uYWN0aW9uVHlwZUlkKSkge1xuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzIzNDUgLSBBcmd1bWVudCBvZiB0eXBlICdcIlRSQU5TRk9STV9NT1ZFXCIgfCBcIlRSQU5TRk9STV9TQ0FMRVwiIHwgXCJUUkFOU0ZPUk1fUk9UQVRFXCIgfCBcIlRSQU5TRk9STV9TS0VXXCIgfCBcIlNUWUxFX09QQUNJVFlcIiB8IFwiU1RZTEVfU0laRVwiIHwgXCJTVFlMRV9GSUxURVJcIiB8IFwiU1RZTEVfRk9OVF9WQVJJQVRJT05cIiB8IFwiU1RZTEVfQkFDS0dST1VORF9DT0xPUlwiIHwgXCJTVFlMRV9CT1JERVJcIiB8IFwiU1RZTEVfVEVYVF9DT0xPUlwiIHwgXCJQTFVHSU5fTE9UVElFXCIgfCBcIkdFTkVSQUxfRElTUExBWVwiJyBpcyBub3QgYXNzaWduYWJsZSB0byBwYXJhbWV0ZXIgb2YgdHlwZSAnUGx1Z2luVHlwZScuXG4gICAgcmV0dXJuIGdldFBsdWdpbkRlc3RpbmF0aW9uKGFjdGlvbkl0ZW0uYWN0aW9uVHlwZUlkKShhY3Rpb25JdGVtLmNvbmZpZyk7XG4gIH1cblxuICBzd2l0Y2ggKGFjdGlvbkl0ZW0uYWN0aW9uVHlwZUlkKSB7XG4gICAgY2FzZSBUUkFOU0ZPUk1fTU9WRTpcbiAgICBjYXNlIFRSQU5TRk9STV9TQ0FMRTpcbiAgICBjYXNlIFRSQU5TRk9STV9ST1RBVEU6XG4gICAgY2FzZSBUUkFOU0ZPUk1fU0tFVzoge1xuICAgICAgY29uc3Qge3hWYWx1ZSwgeVZhbHVlLCB6VmFsdWV9ID0gYWN0aW9uSXRlbS5jb25maWc7XG4gICAgICByZXR1cm4ge3hWYWx1ZSwgeVZhbHVlLCB6VmFsdWV9O1xuICAgIH1cbiAgICBjYXNlIFNUWUxFX1NJWkU6IHtcbiAgICAgIGNvbnN0IHtnZXRTdHlsZSwgc2V0U3R5bGUsIGdldFByb3BlcnR5fSA9IGVsZW1lbnRBcGk7XG4gICAgICBjb25zdCB7d2lkdGhVbml0LCBoZWlnaHRVbml0fSA9IGFjdGlvbkl0ZW0uY29uZmlnO1xuICAgICAgbGV0IHt3aWR0aFZhbHVlLCBoZWlnaHRWYWx1ZX0gPSBhY3Rpb25JdGVtLmNvbmZpZztcbiAgICAgIGlmICghSVNfQlJPV1NFUl9FTlYpIHtcbiAgICAgICAgcmV0dXJuIHt3aWR0aFZhbHVlLCBoZWlnaHRWYWx1ZX07XG4gICAgICB9XG4gICAgICBpZiAod2lkdGhVbml0ID09PSBBVVRPKSB7XG4gICAgICAgIGNvbnN0IHRlbXAgPSBnZXRTdHlsZShlbGVtZW50LCBXSURUSCk7XG4gICAgICAgIHNldFN0eWxlKGVsZW1lbnQsIFdJRFRILCAnJyk7XG4gICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzIzMjIgLSBUeXBlICdzdHJpbmcgfCBudWxsJyBpcyBub3QgYXNzaWduYWJsZSB0byB0eXBlICdudW1iZXIgfCB1bmRlZmluZWQnLlxuICAgICAgICB3aWR0aFZhbHVlID0gZ2V0UHJvcGVydHkoZWxlbWVudCwgJ29mZnNldFdpZHRoJyk7XG4gICAgICAgIHNldFN0eWxlKGVsZW1lbnQsIFdJRFRILCB0ZW1wKTtcbiAgICAgIH1cbiAgICAgIGlmIChoZWlnaHRVbml0ID09PSBBVVRPKSB7XG4gICAgICAgIGNvbnN0IHRlbXAgPSBnZXRTdHlsZShlbGVtZW50LCBIRUlHSFQpO1xuICAgICAgICBzZXRTdHlsZShlbGVtZW50LCBIRUlHSFQsICcnKTtcbiAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTMjMyMiAtIFR5cGUgJ3N0cmluZyB8IG51bGwnIGlzIG5vdCBhc3NpZ25hYmxlIHRvIHR5cGUgJ251bWJlciB8IHVuZGVmaW5lZCcuXG4gICAgICAgIGhlaWdodFZhbHVlID0gZ2V0UHJvcGVydHkoZWxlbWVudCwgJ29mZnNldEhlaWdodCcpO1xuICAgICAgICBzZXRTdHlsZShlbGVtZW50LCBIRUlHSFQsIHRlbXApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHt3aWR0aFZhbHVlLCBoZWlnaHRWYWx1ZX07XG4gICAgfVxuICAgIGNhc2UgU1RZTEVfQkFDS0dST1VORF9DT0xPUjpcbiAgICBjYXNlIFNUWUxFX0JPUkRFUjpcbiAgICBjYXNlIFNUWUxFX1RFWFRfQ09MT1I6IHtcbiAgICAgIGNvbnN0IHtyVmFsdWUsIGdWYWx1ZSwgYlZhbHVlLCBhVmFsdWUsIGdsb2JhbFN3YXRjaElkfSA9XG4gICAgICAgIGFjdGlvbkl0ZW0uY29uZmlnO1xuXG4gICAgICBpZiAoZ2xvYmFsU3dhdGNoSWQgJiYgZ2xvYmFsU3dhdGNoSWQuc3RhcnRzV2l0aCgnLS0nKSkge1xuICAgICAgICBjb25zdCB7Z2V0U3R5bGV9ID0gZWxlbWVudEFwaTtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBnZXRTdHlsZShlbGVtZW50LCBnbG9iYWxTd2F0Y2hJZCk7XG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRWYWx1ZSA9IG5vcm1hbGl6ZUNvbG9yKHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICByVmFsdWU6IG5vcm1hbGl6ZWRWYWx1ZS5yZWQsXG4gICAgICAgICAgZ1ZhbHVlOiBub3JtYWxpemVkVmFsdWUuZ3JlZW4sXG4gICAgICAgICAgYlZhbHVlOiBub3JtYWxpemVkVmFsdWUuYmx1ZSxcbiAgICAgICAgICBhVmFsdWU6IG5vcm1hbGl6ZWRWYWx1ZS5hbHBoYSxcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtyVmFsdWUsIGdWYWx1ZSwgYlZhbHVlLCBhVmFsdWV9O1xuICAgIH1cbiAgICBjYXNlIFNUWUxFX0ZJTFRFUjoge1xuICAgICAgcmV0dXJuIGFjdGlvbkl0ZW0uY29uZmlnLmZpbHRlcnMucmVkdWNlPFJlY29yZDxzdHJpbmcsIGFueT4+KFxuICAgICAgICByZWR1Y2VGaWx0ZXJzLFxuICAgICAgICB7fVxuICAgICAgKTtcbiAgICB9XG4gICAgY2FzZSBTVFlMRV9GT05UX1ZBUklBVElPTjoge1xuICAgICAgcmV0dXJuIGFjdGlvbkl0ZW0uY29uZmlnLmZvbnRWYXJpYXRpb25zLnJlZHVjZTxSZWNvcmQ8c3RyaW5nLCBhbnk+PihcbiAgICAgICAgcmVkdWNlRm9udFZhcmlhdGlvbnMsXG4gICAgICAgIHt9XG4gICAgICApO1xuICAgIH1cbiAgICBkZWZhdWx0OiB7XG4gICAgICBjb25zdCB7dmFsdWV9ID0gYWN0aW9uSXRlbS5jb25maWc7XG4gICAgICByZXR1cm4ge3ZhbHVlfTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJlbmRlclR5cGUoYWN0aW9uVHlwZUlkOiBhbnkpIHtcbiAgaWYgKC9eVFJBTlNGT1JNXy8udGVzdChhY3Rpb25UeXBlSWQpKSB7XG4gICAgcmV0dXJuIFJFTkRFUl9UUkFOU0ZPUk07XG4gIH1cbiAgaWYgKC9eU1RZTEVfLy50ZXN0KGFjdGlvblR5cGVJZCkpIHtcbiAgICByZXR1cm4gUkVOREVSX1NUWUxFO1xuICB9XG4gIGlmICgvXkdFTkVSQUxfLy50ZXN0KGFjdGlvblR5cGVJZCkpIHtcbiAgICByZXR1cm4gUkVOREVSX0dFTkVSQUw7XG4gIH1cbiAgaWYgKC9eUExVR0lOXy8udGVzdChhY3Rpb25UeXBlSWQpKSB7XG4gICAgcmV0dXJuIFJFTkRFUl9QTFVHSU47XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0eWxlUHJvcChyZW5kZXJUeXBlOiBhbnksIGFjdGlvblR5cGVJZDogYW55KSB7XG4gIHJldHVybiByZW5kZXJUeXBlID09PSBSRU5ERVJfU1RZTEVcbiAgICA/IGFjdGlvblR5cGVJZC5yZXBsYWNlKCdTVFlMRV8nLCAnJykudG9Mb3dlckNhc2UoKVxuICAgIDogbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckhUTUxFbGVtZW50KFxuICBlbGVtZW50OiBhbnksXG5cbiAgcmVmU3RhdGU6IGFueSxcblxuICBhY3Rpb25TdGF0ZTogYW55LFxuXG4gIGV2ZW50SWQ6IGFueSxcblxuICBhY3Rpb25JdGVtOiBhbnksXG5cbiAgc3R5bGVQcm9wOiBhbnksXG5cbiAgZWxlbWVudEFwaTogYW55LFxuXG4gIHJlbmRlclR5cGU6IGFueSxcblxuICBwbHVnaW5JbnN0YW5jZTogYW55XG4pIHtcbiAgc3dpdGNoIChyZW5kZXJUeXBlKSB7XG4gICAgY2FzZSBSRU5ERVJfVFJBTlNGT1JNOiB7XG4gICAgICByZXR1cm4gcmVuZGVyVHJhbnNmb3JtKFxuICAgICAgICBlbGVtZW50LFxuICAgICAgICByZWZTdGF0ZSxcbiAgICAgICAgYWN0aW9uU3RhdGUsXG4gICAgICAgIGFjdGlvbkl0ZW0sXG4gICAgICAgIGVsZW1lbnRBcGlcbiAgICAgICk7XG4gICAgfVxuICAgIGNhc2UgUkVOREVSX1NUWUxFOiB7XG4gICAgICByZXR1cm4gcmVuZGVyU3R5bGUoXG4gICAgICAgIGVsZW1lbnQsXG4gICAgICAgIHJlZlN0YXRlLFxuICAgICAgICBhY3Rpb25TdGF0ZSxcbiAgICAgICAgYWN0aW9uSXRlbSxcbiAgICAgICAgc3R5bGVQcm9wLFxuICAgICAgICBlbGVtZW50QXBpXG4gICAgICApO1xuICAgIH1cbiAgICBjYXNlIFJFTkRFUl9HRU5FUkFMOiB7XG4gICAgICByZXR1cm4gcmVuZGVyR2VuZXJhbChlbGVtZW50LCBhY3Rpb25JdGVtLCBlbGVtZW50QXBpKTtcbiAgICB9XG4gICAgY2FzZSBSRU5ERVJfUExVR0lOOiB7XG4gICAgICBjb25zdCB7YWN0aW9uVHlwZUlkfSA9IGFjdGlvbkl0ZW07XG4gICAgICBpZiAoaXNQbHVnaW5UeXBlKGFjdGlvblR5cGVJZCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbmRlclBsdWdpbihhY3Rpb25UeXBlSWQpKHBsdWdpbkluc3RhbmNlLCByZWZTdGF0ZSwgYWN0aW9uSXRlbSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmNvbnN0IHRyYW5zZm9ybURlZmF1bHRzID0ge1xuICBbVFJBTlNGT1JNX01PVkVdOiBPYmplY3QuZnJlZXplKHtcbiAgICB4VmFsdWU6IDAsXG4gICAgeVZhbHVlOiAwLFxuICAgIHpWYWx1ZTogMCxcbiAgfSksXG4gIFtUUkFOU0ZPUk1fU0NBTEVdOiBPYmplY3QuZnJlZXplKHtcbiAgICB4VmFsdWU6IDEsXG4gICAgeVZhbHVlOiAxLFxuICAgIHpWYWx1ZTogMSxcbiAgfSksXG4gIFtUUkFOU0ZPUk1fUk9UQVRFXTogT2JqZWN0LmZyZWV6ZSh7XG4gICAgeFZhbHVlOiAwLFxuICAgIHlWYWx1ZTogMCxcbiAgICB6VmFsdWU6IDAsXG4gIH0pLFxuICBbVFJBTlNGT1JNX1NLRVddOiBPYmplY3QuZnJlZXplKHtcbiAgICB4VmFsdWU6IDAsXG4gICAgeVZhbHVlOiAwLFxuICB9KSxcbn0gYXMgY29uc3Q7XG5cbmNvbnN0IGZpbHRlckRlZmF1bHRzID0gT2JqZWN0LmZyZWV6ZSh7XG4gIGJsdXI6IDAsXG4gICdodWUtcm90YXRlJzogMCxcbiAgaW52ZXJ0OiAwLFxuICBncmF5c2NhbGU6IDAsXG4gIHNhdHVyYXRlOiAxMDAsXG4gIHNlcGlhOiAwLFxuICBjb250cmFzdDogMTAwLFxuICBicmlnaHRuZXNzOiAxMDAsXG59KTtcblxuY29uc3QgZm9udFZhcmlhdGlvbkRlZmF1bHRzID0gT2JqZWN0LmZyZWV6ZSh7XG4gIHdnaHQ6IDAsXG4gIG9wc3o6IDAsXG4gIHdkdGg6IDAsXG4gIHNsbnQ6IDAsXG59KTtcblxuLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTNzAwNiAtIFBhcmFtZXRlciAnZmlsdGVyVHlwZScgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS4gfCBUUzcwMDYgLSBQYXJhbWV0ZXIgJ2FjdGlvbkl0ZW1Db25maWcnIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuXG5jb25zdCBnZXRGaWx0ZXJVbml0ID0gKGZpbHRlclR5cGUsIGFjdGlvbkl0ZW1Db25maWcpID0+IHtcbiAgY29uc3QgZmlsdGVyID0gZmluZExhc3QoXG4gICAgYWN0aW9uSXRlbUNvbmZpZy5maWx0ZXJzLFxuICAgICh7dHlwZX0pID0+IHR5cGUgPT09IGZpbHRlclR5cGVcbiAgKTtcblxuICBpZiAoZmlsdGVyICYmIGZpbHRlci51bml0KSB7XG4gICAgcmV0dXJuIGZpbHRlci51bml0O1xuICB9XG5cbiAgc3dpdGNoIChmaWx0ZXJUeXBlKSB7XG4gICAgY2FzZSAnYmx1cic6XG4gICAgICByZXR1cm4gJ3B4JztcbiAgICBjYXNlICdodWUtcm90YXRlJzpcbiAgICAgIHJldHVybiAnZGVnJztcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuICclJztcbiAgfVxufTtcblxuY29uc3QgdHJhbnNmb3JtS2V5cyA9IE9iamVjdC5rZXlzKHRyYW5zZm9ybURlZmF1bHRzKTtcblxuZnVuY3Rpb24gcmVuZGVyVHJhbnNmb3JtKFxuICBlbGVtZW50OiBhbnksXG4gIHJlZlN0YXRlOiBhbnksXG4gIGFjdGlvblN0YXRlOiBhbnksXG4gIGFjdGlvbkl0ZW06IGFueSxcbiAgZWxlbWVudEFwaTogYW55XG4pIHtcbiAgY29uc3QgbmV3VHJhbnNmb3JtID0gdHJhbnNmb3JtS2V5c1xuICAgIC5tYXAoKGFjdGlvblR5cGVJZCkgPT4ge1xuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTNzA1MyAtIEVsZW1lbnQgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZSBiZWNhdXNlIGV4cHJlc3Npb24gb2YgdHlwZSAnc3RyaW5nJyBjYW4ndCBiZSB1c2VkIHRvIGluZGV4IHR5cGUgJ3sgcmVhZG9ubHkgVFJBTlNGT1JNX01PVkU6IFJlYWRvbmx5PHsgeFZhbHVlOiAwOyB5VmFsdWU6IDA7IHpWYWx1ZTogMDsgfT47IHJlYWRvbmx5IFRSQU5TRk9STV9TQ0FMRTogUmVhZG9ubHk8eyB4VmFsdWU6IDE7IHlWYWx1ZTogMTsgelZhbHVlOiAxOyB9PjsgcmVhZG9ubHkgVFJBTlNGT1JNX1JPVEFURTogUmVhZG9ubHk8eyB4VmFsdWU6IDA7IHlWYWx1ZTogMDsgelZhbHVlOiAwOyB9PjsgcmVhZG9ubHkgVFJBTlNGT1JNX1NLRVc6IFJlYWRvbmx5PC4uLj47IH0nLlxuICAgICAgY29uc3QgZGVmYXVsdHMgPSB0cmFuc2Zvcm1EZWZhdWx0c1thY3Rpb25UeXBlSWRdO1xuICAgICAgY29uc3Qge1xuICAgICAgICB4VmFsdWUgPSBkZWZhdWx0cy54VmFsdWUsXG4gICAgICAgIHlWYWx1ZSA9IGRlZmF1bHRzLnlWYWx1ZSxcblxuICAgICAgICB6VmFsdWUgPSBkZWZhdWx0cy56VmFsdWUsXG4gICAgICAgIHhVbml0ID0gJycsXG4gICAgICAgIHlVbml0ID0gJycsXG4gICAgICAgIHpVbml0ID0gJycsXG4gICAgICB9ID0gcmVmU3RhdGVbYWN0aW9uVHlwZUlkXSB8fCB7fTtcbiAgICAgIHN3aXRjaCAoYWN0aW9uVHlwZUlkKSB7XG4gICAgICAgIGNhc2UgVFJBTlNGT1JNX01PVkU6XG4gICAgICAgICAgcmV0dXJuIGAke1RSQU5TTEFURV8zRH0oJHt4VmFsdWV9JHt4VW5pdH0sICR7eVZhbHVlfSR7eVVuaXR9LCAke3pWYWx1ZX0ke3pVbml0fSlgO1xuICAgICAgICBjYXNlIFRSQU5TRk9STV9TQ0FMRTpcbiAgICAgICAgICByZXR1cm4gYCR7U0NBTEVfM0R9KCR7eFZhbHVlfSR7eFVuaXR9LCAke3lWYWx1ZX0ke3lVbml0fSwgJHt6VmFsdWV9JHt6VW5pdH0pYDtcbiAgICAgICAgY2FzZSBUUkFOU0ZPUk1fUk9UQVRFOlxuICAgICAgICAgIHJldHVybiBgJHtST1RBVEVfWH0oJHt4VmFsdWV9JHt4VW5pdH0pICR7Uk9UQVRFX1l9KCR7eVZhbHVlfSR7eVVuaXR9KSAke1JPVEFURV9afSgke3pWYWx1ZX0ke3pVbml0fSlgO1xuICAgICAgICBjYXNlIFRSQU5TRk9STV9TS0VXOlxuICAgICAgICAgIHJldHVybiBgJHtTS0VXfSgke3hWYWx1ZX0ke3hVbml0fSwgJHt5VmFsdWV9JHt5VW5pdH0pYDtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignICcpO1xuXG4gIGNvbnN0IHtzZXRTdHlsZX0gPSBlbGVtZW50QXBpO1xuICBhZGRXaWxsQ2hhbmdlKGVsZW1lbnQsIFRSQU5TRk9STV9QUkVGSVhFRCwgZWxlbWVudEFwaSk7XG4gIHNldFN0eWxlKGVsZW1lbnQsIFRSQU5TRk9STV9QUkVGSVhFRCwgbmV3VHJhbnNmb3JtKTtcblxuICAvLyBTZXQgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZFxuICBpZiAoaGFzRGVmaW5lZDNkVHJhbnNmb3JtKGFjdGlvbkl0ZW0sIGFjdGlvblN0YXRlKSkge1xuICAgIHNldFN0eWxlKGVsZW1lbnQsIFRSQU5TRk9STV9TVFlMRV9QUkVGSVhFRCwgUFJFU0VSVkVfM0QpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlckZpbHRlcihcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4gIGFjdGlvblN0YXRlOiBhbnksXG4gIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwMDYgLSBQYXJhbWV0ZXIgJ2FjdGlvbkl0ZW1Db25maWcnIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuXG4gIGFjdGlvbkl0ZW1Db25maWcsXG4gIGVsZW1lbnRBcGk6IGFueVxuKSB7XG4gIGNvbnN0IGZpbHRlclZhbHVlID0gcmVkdWNlKFxuICAgIGFjdGlvblN0YXRlLFxuICAgIChyZXN1bHQsIHZhbHVlLCB0eXBlKSA9PlxuICAgICAgYCR7cmVzdWx0fSAke3R5cGV9KCR7dmFsdWV9JHtnZXRGaWx0ZXJVbml0KHR5cGUsIGFjdGlvbkl0ZW1Db25maWcpfSlgLFxuICAgICcnXG4gICk7XG5cbiAgY29uc3Qge3NldFN0eWxlfSA9IGVsZW1lbnRBcGk7XG4gIGFkZFdpbGxDaGFuZ2UoZWxlbWVudCwgRklMVEVSLCBlbGVtZW50QXBpKTtcbiAgc2V0U3R5bGUoZWxlbWVudCwgRklMVEVSLCBmaWx0ZXJWYWx1ZSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckZvbnRWYXJpYXRpb24oXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICBhY3Rpb25TdGF0ZTogYW55LFxuICBhY3Rpb25JdGVtQ29uZmlnOiBGb250VmFyaWF0aW9uQWN0aW9uQ29uZmlnVHlwZSxcbiAgZWxlbWVudEFwaTogRWxlbWVudEFwaVxuKSB7XG4gIGNvbnN0IGZvbnRWYXJpYXRpb25WYWx1ZSA9IHJlZHVjZShcbiAgICBhY3Rpb25TdGF0ZSxcbiAgICAocmVzdWx0LCB2YWx1ZSwgdHlwZSkgPT4ge1xuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTMjM0NSAtIEFyZ3VtZW50IG9mIHR5cGUgJ3N0cmluZycgaXMgbm90IGFzc2lnbmFibGUgdG8gcGFyYW1ldGVyIG9mIHR5cGUgJ25ldmVyJy5cbiAgICAgIHJlc3VsdC5wdXNoKGBcIiR7dHlwZX1cIiAke3ZhbHVlfWApO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LFxuICAgIFtdXG4gICkuam9pbignLCAnKTtcblxuICBjb25zdCB7c2V0U3R5bGV9ID0gZWxlbWVudEFwaTtcbiAgYWRkV2lsbENoYW5nZShlbGVtZW50LCBGT05UX1ZBUklBVElPTl9TRVRUSU5HUywgZWxlbWVudEFwaSk7XG4gIHNldFN0eWxlKGVsZW1lbnQsIEZPTlRfVkFSSUFUSU9OX1NFVFRJTkdTLCBmb250VmFyaWF0aW9uVmFsdWUpO1xufVxuXG4vLyBAdHMtZXhwZWN0LWVycm9yIC0gVFM3MDMxIC0gQmluZGluZyBlbGVtZW50ICdhY3Rpb25UeXBlSWQnIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuIHwgVFM3MDMxIC0gQmluZGluZyBlbGVtZW50ICd4VmFsdWUnIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuIHwgVFM3MDMxIC0gQmluZGluZyBlbGVtZW50ICd5VmFsdWUnIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuIHwgVFM3MDMxIC0gQmluZGluZyBlbGVtZW50ICd6VmFsdWUnIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuXG5mdW5jdGlvbiBoYXNEZWZpbmVkM2RUcmFuc2Zvcm0oe2FjdGlvblR5cGVJZH0sIHt4VmFsdWUsIHlWYWx1ZSwgelZhbHVlfSkge1xuICAvLyBUUkFOU0xBVEVfWlxuICByZXR1cm4gKFxuICAgIChhY3Rpb25UeXBlSWQgPT09IFRSQU5TRk9STV9NT1ZFICYmIHpWYWx1ZSAhPT0gdW5kZWZpbmVkKSB8fFxuICAgIC8vIFNDQUxFX1pcbiAgICAoYWN0aW9uVHlwZUlkID09PSBUUkFOU0ZPUk1fU0NBTEUgJiYgelZhbHVlICE9PSB1bmRlZmluZWQpIHx8XG4gICAgLy8gUk9UQVRFX1ggb3IgUk9UQVRFX1lcbiAgICAoYWN0aW9uVHlwZUlkID09PSBUUkFOU0ZPUk1fUk9UQVRFICYmXG4gICAgICAoeFZhbHVlICE9PSB1bmRlZmluZWQgfHwgeVZhbHVlICE9PSB1bmRlZmluZWQpKVxuICApO1xufVxuXG5jb25zdCBwYXJhbUNhcHR1cmUgPSAnXFxcXCgoW14pXSspXFxcXCknO1xuY29uc3QgcmdiVmFsaWRSZWdleCA9IC9ecmdiLztcbmNvbnN0IHJnYk1hdGNoUmVnZXggPSBSZWdFeHAoYHJnYmE/JHtwYXJhbUNhcHR1cmV9YCk7XG5cbmZ1bmN0aW9uIGdldEZpcnN0TWF0Y2gocmVnZXg6IFJlZ0V4cCwgdmFsdWU6IHN0cmluZykge1xuICBjb25zdCBtYXRjaCA9IHJlZ2V4LmV4ZWModmFsdWUpO1xuICByZXR1cm4gbWF0Y2ggPyBtYXRjaFsxXSA6ICcnO1xufVxuXG4vLyBAdHMtZXhwZWN0LWVycm9yIC0gVFM3MDMxIC0gQmluZGluZyBlbGVtZW50ICdlbGVtZW50JyBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlLiB8IFRTNzAzMSAtIEJpbmRpbmcgZWxlbWVudCAnYWN0aW9uVHlwZUlkJyBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlLiB8IFRTNzAzMSAtIEJpbmRpbmcgZWxlbWVudCAnY29tcHV0ZWRTdHlsZScgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS4gfCBUUzcwMzEgLSBCaW5kaW5nIGVsZW1lbnQgJ2dldFN0eWxlJyBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlLlxuZnVuY3Rpb24gcGFyc2VDb2xvcih7ZWxlbWVudCwgYWN0aW9uVHlwZUlkLCBjb21wdXRlZFN0eWxlLCBnZXRTdHlsZX0pOiB7XG4gIHJWYWx1ZTogbnVtYmVyO1xuICBnVmFsdWU6IG51bWJlcjtcbiAgYlZhbHVlOiBudW1iZXI7XG4gIGFWYWx1ZTogbnVtYmVyO1xufSB7XG4gIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwNTMgLSBFbGVtZW50IGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUgYmVjYXVzZSBleHByZXNzaW9uIG9mIHR5cGUgJ2FueScgY2FuJ3QgYmUgdXNlZCB0byBpbmRleCB0eXBlICdSZWFkb25seTx7IFNUWUxFX0JBQ0tHUk9VTkRfQ09MT1I6IFwiYmFja2dyb3VuZENvbG9yXCI7IFNUWUxFX0JPUkRFUjogXCJib3JkZXJDb2xvclwiOyBTVFlMRV9URVhUX0NPTE9SOiBcImNvbG9yXCI7IH0+Jy5cbiAgY29uc3QgcHJvcCA9IGNvbG9yU3R5bGVQcm9wc1thY3Rpb25UeXBlSWRdO1xuICBjb25zdCBpbmxpbmVWYWx1ZSA9IGdldFN0eWxlKGVsZW1lbnQsIHByb3ApO1xuICBjb25zdCB2YWx1ZSA9IHJnYlZhbGlkUmVnZXgudGVzdChpbmxpbmVWYWx1ZSlcbiAgICA/IGlubGluZVZhbHVlXG4gICAgOiBjb21wdXRlZFN0eWxlW3Byb3BdO1xuICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFMyNTMyIC0gT2JqZWN0IGlzIHBvc3NpYmx5ICd1bmRlZmluZWQnLlxuICBjb25zdCBtYXRjaGVzID0gZ2V0Rmlyc3RNYXRjaChyZ2JNYXRjaFJlZ2V4LCB2YWx1ZSkuc3BsaXQoQ09NTUFfREVMSU1JVEVSKTtcbiAgcmV0dXJuIHtcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFMyMzQ1IC0gQXJndW1lbnQgb2YgdHlwZSAnc3RyaW5nIHwgdW5kZWZpbmVkJyBpcyBub3QgYXNzaWduYWJsZSB0byBwYXJhbWV0ZXIgb2YgdHlwZSAnc3RyaW5nJy5cbiAgICByVmFsdWU6IGRlZmF1bHRUbyhwYXJzZUludChtYXRjaGVzWzBdLCAxMCksIDI1NSksXG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTMjM0NSAtIEFyZ3VtZW50IG9mIHR5cGUgJ3N0cmluZyB8IHVuZGVmaW5lZCcgaXMgbm90IGFzc2lnbmFibGUgdG8gcGFyYW1ldGVyIG9mIHR5cGUgJ3N0cmluZycuXG4gICAgZ1ZhbHVlOiBkZWZhdWx0VG8ocGFyc2VJbnQobWF0Y2hlc1sxXSwgMTApLCAyNTUpLFxuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzIzNDUgLSBBcmd1bWVudCBvZiB0eXBlICdzdHJpbmcgfCB1bmRlZmluZWQnIGlzIG5vdCBhc3NpZ25hYmxlIHRvIHBhcmFtZXRlciBvZiB0eXBlICdzdHJpbmcnLlxuICAgIGJWYWx1ZTogZGVmYXVsdFRvKHBhcnNlSW50KG1hdGNoZXNbMl0sIDEwKSwgMjU1KSxcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFMyMzQ1IC0gQXJndW1lbnQgb2YgdHlwZSAnc3RyaW5nIHwgdW5kZWZpbmVkJyBpcyBub3QgYXNzaWduYWJsZSB0byBwYXJhbWV0ZXIgb2YgdHlwZSAnc3RyaW5nJy5cbiAgICBhVmFsdWU6IGRlZmF1bHRUbyhwYXJzZUZsb2F0KG1hdGNoZXNbM10pLCAxKSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyU3R5bGUoXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICByZWZTdGF0ZTogYW55LFxuICBhY3Rpb25TdGF0ZTogYW55LFxuICBhY3Rpb25JdGVtOiBBY3Rpb25JdGVtVHlwZSxcbiAgc3R5bGVQcm9wOiBhbnksXG4gIGVsZW1lbnRBcGk6IGFueVxuKSB7XG4gIGNvbnN0IHtzZXRTdHlsZX0gPSBlbGVtZW50QXBpO1xuICBzd2l0Y2ggKGFjdGlvbkl0ZW0uYWN0aW9uVHlwZUlkKSB7XG4gICAgY2FzZSBTVFlMRV9TSVpFOiB7XG4gICAgICBsZXQge3dpZHRoVW5pdCA9ICcnLCBoZWlnaHRVbml0ID0gJyd9ID0gYWN0aW9uSXRlbS5jb25maWc7XG4gICAgICBjb25zdCB7d2lkdGhWYWx1ZSwgaGVpZ2h0VmFsdWV9ID0gYWN0aW9uU3RhdGU7XG4gICAgICBpZiAod2lkdGhWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmICh3aWR0aFVuaXQgPT09IEFVVE8pIHtcbiAgICAgICAgICB3aWR0aFVuaXQgPSAncHgnO1xuICAgICAgICB9XG4gICAgICAgIGFkZFdpbGxDaGFuZ2UoZWxlbWVudCwgV0lEVEgsIGVsZW1lbnRBcGkpO1xuICAgICAgICBzZXRTdHlsZShlbGVtZW50LCBXSURUSCwgd2lkdGhWYWx1ZSArIHdpZHRoVW5pdCk7XG4gICAgICB9XG4gICAgICBpZiAoaGVpZ2h0VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoaGVpZ2h0VW5pdCA9PT0gQVVUTykge1xuICAgICAgICAgIGhlaWdodFVuaXQgPSAncHgnO1xuICAgICAgICB9XG4gICAgICAgIGFkZFdpbGxDaGFuZ2UoZWxlbWVudCwgSEVJR0hULCBlbGVtZW50QXBpKTtcbiAgICAgICAgc2V0U3R5bGUoZWxlbWVudCwgSEVJR0hULCBoZWlnaHRWYWx1ZSArIGhlaWdodFVuaXQpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgU1RZTEVfRklMVEVSOiB7XG4gICAgICByZW5kZXJGaWx0ZXIoZWxlbWVudCwgYWN0aW9uU3RhdGUsIGFjdGlvbkl0ZW0uY29uZmlnLCBlbGVtZW50QXBpKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlIFNUWUxFX0ZPTlRfVkFSSUFUSU9OOiB7XG4gICAgICByZW5kZXJGb250VmFyaWF0aW9uKGVsZW1lbnQsIGFjdGlvblN0YXRlLCBhY3Rpb25JdGVtLmNvbmZpZywgZWxlbWVudEFwaSk7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSBTVFlMRV9CQUNLR1JPVU5EX0NPTE9SOlxuICAgIGNhc2UgU1RZTEVfQk9SREVSOlxuICAgIGNhc2UgU1RZTEVfVEVYVF9DT0xPUjoge1xuICAgICAgY29uc3QgcHJvcCA9IGNvbG9yU3R5bGVQcm9wc1thY3Rpb25JdGVtLmFjdGlvblR5cGVJZF07XG5cbiAgICAgIGNvbnN0IHJWYWx1ZSA9IE1hdGgucm91bmQoYWN0aW9uU3RhdGUuclZhbHVlKTtcbiAgICAgIGNvbnN0IGdWYWx1ZSA9IE1hdGgucm91bmQoYWN0aW9uU3RhdGUuZ1ZhbHVlKTtcbiAgICAgIGNvbnN0IGJWYWx1ZSA9IE1hdGgucm91bmQoYWN0aW9uU3RhdGUuYlZhbHVlKTtcbiAgICAgIGNvbnN0IGFWYWx1ZSA9IGFjdGlvblN0YXRlLmFWYWx1ZTtcblxuICAgICAgYWRkV2lsbENoYW5nZShlbGVtZW50LCBwcm9wLCBlbGVtZW50QXBpKTtcblxuICAgICAgc2V0U3R5bGUoXG4gICAgICAgIGVsZW1lbnQsXG4gICAgICAgIHByb3AsXG4gICAgICAgIGFWYWx1ZSA+PSAxXG4gICAgICAgICAgPyBgcmdiKCR7clZhbHVlfSwke2dWYWx1ZX0sJHtiVmFsdWV9KWBcbiAgICAgICAgICA6IGByZ2JhKCR7clZhbHVlfSwke2dWYWx1ZX0sJHtiVmFsdWV9LCR7YVZhbHVlfSlgXG4gICAgICApO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzIzMzkgLSBQcm9wZXJ0eSAndW5pdCcgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSAneyBkZWxheTogbnVtYmVyOyBlYXNpbmc6IElYMkVhc2luZ1R5cGU7IGR1cmF0aW9uOiBudW1iZXI7IHRhcmdldDogQWN0aW9uSXRlbVRhcmdldFR5cGU7IHhWYWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkOyB5VmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZDsgelZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQ7IHhVbml0OiBcIiVcIiB8IC4uLiA0IG1vcmUgLi4uIHwgXCJWV1wiOyB5VW5pdDogXCIlXCIgfCAuLi4gNCBtb3JlIC4uLiB8IFwiVldcIjsgelVuaXQ6IFwiJVwiIHwgLi4uIDQgbW9yZSAuLi4gfCBcIlZXXCI7IH0gfCAuLi4gNSBtb3JlIC4uLiB8IHsgLi4uOyB9Jy5cbiAgICAgIGNvbnN0IHt1bml0ID0gJyd9ID0gYWN0aW9uSXRlbS5jb25maWc7XG4gICAgICBhZGRXaWxsQ2hhbmdlKGVsZW1lbnQsIHN0eWxlUHJvcCwgZWxlbWVudEFwaSk7XG4gICAgICBzZXRTdHlsZShlbGVtZW50LCBzdHlsZVByb3AsIGFjdGlvblN0YXRlLnZhbHVlICsgdW5pdCk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyR2VuZXJhbChlbGVtZW50OiBhbnksIGFjdGlvbkl0ZW06IGFueSwgZWxlbWVudEFwaTogYW55KSB7XG4gIGNvbnN0IHtzZXRTdHlsZX0gPSBlbGVtZW50QXBpO1xuICBzd2l0Y2ggKGFjdGlvbkl0ZW0uYWN0aW9uVHlwZUlkKSB7XG4gICAgY2FzZSBHRU5FUkFMX0RJU1BMQVk6IHtcbiAgICAgIGNvbnN0IHt2YWx1ZX0gPSBhY3Rpb25JdGVtLmNvbmZpZztcbiAgICAgIGlmICh2YWx1ZSA9PT0gRkxFWCAmJiBJU19CUk9XU0VSX0VOVikge1xuICAgICAgICBzZXRTdHlsZShlbGVtZW50LCBESVNQTEFZLCBGTEVYX1BSRUZJWEVEKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFN0eWxlKGVsZW1lbnQsIERJU1BMQVksIHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbn1cblxuLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTNzAwNiAtIFBhcmFtZXRlciAnZWxlbWVudCcgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS4gfCBUUzcwMDYgLSBQYXJhbWV0ZXIgJ3Byb3AnIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuXG5mdW5jdGlvbiBhZGRXaWxsQ2hhbmdlKGVsZW1lbnQsIHByb3AsIGVsZW1lbnRBcGk6IEVsZW1lbnRBcGkpIHtcbiAgaWYgKCFJU19CUk9XU0VSX0VOVikge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCB2YWxpZFByb3AgPSB3aWxsQ2hhbmdlUHJvcHNbcHJvcF07XG4gIGlmICghdmFsaWRQcm9wKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHtnZXRTdHlsZSwgc2V0U3R5bGV9ID0gZWxlbWVudEFwaTtcbiAgY29uc3QgdmFsdWUgPSBnZXRTdHlsZShlbGVtZW50LCBXSUxMX0NIQU5HRSk7XG4gIGlmICghdmFsdWUpIHtcbiAgICBzZXRTdHlsZShlbGVtZW50LCBXSUxMX0NIQU5HRSwgdmFsaWRQcm9wKTtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgdmFsdWVzID0gdmFsdWUuc3BsaXQoQ09NTUFfREVMSU1JVEVSKS5tYXAodHJpbSk7XG4gIGlmICh2YWx1ZXMuaW5kZXhPZih2YWxpZFByb3ApID09PSAtMSkge1xuICAgIHNldFN0eWxlKFxuICAgICAgZWxlbWVudCxcbiAgICAgIFdJTExfQ0hBTkdFLFxuICAgICAgdmFsdWVzLmNvbmNhdCh2YWxpZFByb3ApLmpvaW4oQ09NTUFfREVMSU1JVEVSKVxuICAgICk7XG4gIH1cbn1cblxuLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTNzAwNiAtIFBhcmFtZXRlciAncHJvcCcgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS5cbmZ1bmN0aW9uIHJlbW92ZVdpbGxDaGFuZ2UoZWxlbWVudDogSFRNTEVsZW1lbnQsIHByb3AsIGVsZW1lbnRBcGk6IGFueSkge1xuICBpZiAoIUlTX0JST1dTRVJfRU5WKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHZhbGlkUHJvcCA9IHdpbGxDaGFuZ2VQcm9wc1twcm9wXTtcbiAgaWYgKCF2YWxpZFByb3ApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3Qge2dldFN0eWxlLCBzZXRTdHlsZX0gPSBlbGVtZW50QXBpO1xuICBjb25zdCB2YWx1ZSA9IGdldFN0eWxlKGVsZW1lbnQsIFdJTExfQ0hBTkdFKTtcbiAgaWYgKCF2YWx1ZSB8fCB2YWx1ZS5pbmRleE9mKHZhbGlkUHJvcCkgPT09IC0xKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHNldFN0eWxlKFxuICAgIGVsZW1lbnQsXG4gICAgV0lMTF9DSEFOR0UsXG4gICAgdmFsdWVcbiAgICAgIC5zcGxpdChDT01NQV9ERUxJTUlURVIpXG4gICAgICAubWFwKHRyaW0pXG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFM3MDA2IC0gUGFyYW1ldGVyICd2JyBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlLlxuICAgICAgLmZpbHRlcigodikgPT4gdiAhPT0gdmFsaWRQcm9wKVxuICAgICAgLmpvaW4oQ09NTUFfREVMSU1JVEVSKVxuICApO1xufVxuXG4vLyBAdHMtZXhwZWN0LWVycm9yIC0gVFM3MDMxIC0gQmluZGluZyBlbGVtZW50ICdzdG9yZScgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS4gfCBUUzcwMzEgLSBCaW5kaW5nIGVsZW1lbnQgJ2VsZW1lbnRBcGknIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJBbGxTdHlsZXMoe3N0b3JlLCBlbGVtZW50QXBpfSkge1xuICBjb25zdCB7aXhEYXRhfSA9IHN0b3JlLmdldFN0YXRlKCk7XG4gIGNvbnN0IHtldmVudHMgPSB7fSwgYWN0aW9uTGlzdHMgPSB7fX0gPSBpeERhdGE7XG4gIE9iamVjdC5rZXlzKGV2ZW50cykuZm9yRWFjaCgoZXZlbnRJZCkgPT4ge1xuICAgIGNvbnN0IGV2ZW50ID0gZXZlbnRzW2V2ZW50SWRdO1xuICAgIGNvbnN0IHtjb25maWd9ID0gZXZlbnQuYWN0aW9uO1xuICAgIGNvbnN0IHthY3Rpb25MaXN0SWR9ID0gY29uZmlnO1xuICAgIGNvbnN0IGFjdGlvbkxpc3QgPSBhY3Rpb25MaXN0c1thY3Rpb25MaXN0SWRdO1xuICAgIGlmIChhY3Rpb25MaXN0KSB7XG4gICAgICBjbGVhckFjdGlvbkxpc3RTdHlsZXMoe2FjdGlvbkxpc3QsIGV2ZW50LCBlbGVtZW50QXBpfSk7XG4gICAgfVxuICB9KTtcbiAgT2JqZWN0LmtleXMoYWN0aW9uTGlzdHMpLmZvckVhY2goKGFjdGlvbkxpc3RJZCkgPT4ge1xuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzIzNDUgLSBBcmd1bWVudCBvZiB0eXBlICd7IGFjdGlvbkxpc3Q6IGFueTsgZWxlbWVudEFwaTogYW55OyB9JyBpcyBub3QgYXNzaWduYWJsZSB0byBwYXJhbWV0ZXIgb2YgdHlwZSAneyBhY3Rpb25MaXN0Pzoge30gfCB1bmRlZmluZWQ7IGV2ZW50OiBhbnk7IGVsZW1lbnRBcGk6IGFueTsgfScuXG4gICAgY2xlYXJBY3Rpb25MaXN0U3R5bGVzKHthY3Rpb25MaXN0OiBhY3Rpb25MaXN0c1thY3Rpb25MaXN0SWRdLCBlbGVtZW50QXBpfSk7XG4gIH0pO1xufVxuXG4vLyBAdHMtZXhwZWN0LWVycm9yIC0gVFM3MDMxIC0gQmluZGluZyBlbGVtZW50ICdldmVudCcgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS4gfCBUUzcwMzEgLSBCaW5kaW5nIGVsZW1lbnQgJ2VsZW1lbnRBcGknIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuXG5mdW5jdGlvbiBjbGVhckFjdGlvbkxpc3RTdHlsZXMoe2FjdGlvbkxpc3QgPSB7fSwgZXZlbnQsIGVsZW1lbnRBcGl9KSB7XG4gIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzIzMzkgLSBQcm9wZXJ0eSAnYWN0aW9uSXRlbUdyb3VwcycgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSAne30nLiB8IFRTMjMzOSAtIFByb3BlcnR5ICdjb250aW51b3VzUGFyYW1ldGVyR3JvdXBzJyBkb2VzIG5vdCBleGlzdCBvbiB0eXBlICd7fScuXG4gIGNvbnN0IHthY3Rpb25JdGVtR3JvdXBzLCBjb250aW51b3VzUGFyYW1ldGVyR3JvdXBzfSA9IGFjdGlvbkxpc3Q7XG4gIGFjdGlvbkl0ZW1Hcm91cHMgJiZcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFM3MDA2IC0gUGFyYW1ldGVyICdhY3Rpb25Hcm91cCcgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS5cbiAgICBhY3Rpb25JdGVtR3JvdXBzLmZvckVhY2goKGFjdGlvbkdyb3VwKSA9PiB7XG4gICAgICBjbGVhckFjdGlvbkdyb3VwU3R5bGVzKHthY3Rpb25Hcm91cCwgZXZlbnQsIGVsZW1lbnRBcGl9KTtcbiAgICB9KTtcbiAgY29udGludW91c1BhcmFtZXRlckdyb3VwcyAmJlxuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwMDYgLSBQYXJhbWV0ZXIgJ3BhcmFtR3JvdXAnIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuXG4gICAgY29udGludW91c1BhcmFtZXRlckdyb3Vwcy5mb3JFYWNoKChwYXJhbUdyb3VwKSA9PiB7XG4gICAgICBjb25zdCB7Y29udGludW91c0FjdGlvbkdyb3Vwc30gPSBwYXJhbUdyb3VwO1xuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTNzAwNiAtIFBhcmFtZXRlciAnYWN0aW9uR3JvdXAnIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuXG4gICAgICBjb250aW51b3VzQWN0aW9uR3JvdXBzLmZvckVhY2goKGFjdGlvbkdyb3VwKSA9PiB7XG4gICAgICAgIGNsZWFyQWN0aW9uR3JvdXBTdHlsZXMoe2FjdGlvbkdyb3VwLCBldmVudCwgZWxlbWVudEFwaX0pO1xuICAgICAgfSk7XG4gICAgfSk7XG59XG5cbi8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwMzEgLSBCaW5kaW5nIGVsZW1lbnQgJ2FjdGlvbkdyb3VwJyBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlLiB8IFRTNzAzMSAtIEJpbmRpbmcgZWxlbWVudCAnZXZlbnQnIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuIHwgVFM3MDMxIC0gQmluZGluZyBlbGVtZW50ICdlbGVtZW50QXBpJyBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlLlxuZnVuY3Rpb24gY2xlYXJBY3Rpb25Hcm91cFN0eWxlcyh7YWN0aW9uR3JvdXAsIGV2ZW50LCBlbGVtZW50QXBpfSkge1xuICBjb25zdCB7YWN0aW9uSXRlbXN9ID0gYWN0aW9uR3JvdXA7XG4gIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwMDYgLSBQYXJhbWV0ZXIgJ2FjdGlvbkl0ZW0nIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuXG4gIGFjdGlvbkl0ZW1zLmZvckVhY2goKGFjdGlvbkl0ZW0pID0+IHtcbiAgICBjb25zdCB7YWN0aW9uVHlwZUlkLCBjb25maWd9ID0gYWN0aW9uSXRlbTtcbiAgICBsZXQgY2xlYXJFbGVtZW50O1xuXG4gICAgaWYgKGlzUGx1Z2luVHlwZShhY3Rpb25UeXBlSWQpKSB7XG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFM3MDA2IC0gUGFyYW1ldGVyICdyZWYnIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuXG4gICAgICBjbGVhckVsZW1lbnQgPSAocmVmKSA9PiBjbGVhclBsdWdpbihhY3Rpb25UeXBlSWQpKHJlZiwgYWN0aW9uSXRlbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNsZWFyRWxlbWVudCA9IHByb2Nlc3NFbGVtZW50QnlUeXBlKHtcbiAgICAgICAgZWZmZWN0OiBjbGVhclN0eWxlUHJvcCxcbiAgICAgICAgYWN0aW9uVHlwZUlkLFxuICAgICAgICBlbGVtZW50QXBpLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0QWZmZWN0ZWRFbGVtZW50cyh7Y29uZmlnLCBldmVudCwgZWxlbWVudEFwaX0pLmZvckVhY2goY2xlYXJFbGVtZW50KTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhbnVwSFRNTEVsZW1lbnQoXG4gIGVsZW1lbnQ6IGFueSxcbiAgYWN0aW9uSXRlbTogYW55LFxuICBlbGVtZW50QXBpOiBhbnlcbikge1xuICBjb25zdCB7c2V0U3R5bGUsIGdldFN0eWxlfSA9IGVsZW1lbnRBcGk7XG4gIGNvbnN0IHthY3Rpb25UeXBlSWR9ID0gYWN0aW9uSXRlbTtcblxuICBpZiAoYWN0aW9uVHlwZUlkID09PSBTVFlMRV9TSVpFKSB7XG4gICAgY29uc3Qge2NvbmZpZ30gPSBhY3Rpb25JdGVtO1xuICAgIGlmIChjb25maWcud2lkdGhVbml0ID09PSBBVVRPKSB7XG4gICAgICBzZXRTdHlsZShlbGVtZW50LCBXSURUSCwgJycpO1xuICAgIH1cbiAgICBpZiAoY29uZmlnLmhlaWdodFVuaXQgPT09IEFVVE8pIHtcbiAgICAgIHNldFN0eWxlKGVsZW1lbnQsIEhFSUdIVCwgJycpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChnZXRTdHlsZShlbGVtZW50LCBXSUxMX0NIQU5HRSkpIHtcbiAgICBwcm9jZXNzRWxlbWVudEJ5VHlwZSh7ZWZmZWN0OiByZW1vdmVXaWxsQ2hhbmdlLCBhY3Rpb25UeXBlSWQsIGVsZW1lbnRBcGl9KShcbiAgICAgIGVsZW1lbnRcbiAgICApO1xuICB9XG59XG5cbmNvbnN0IHByb2Nlc3NFbGVtZW50QnlUeXBlID1cbiAgKHtcbiAgICBlZmZlY3QsXG4gICAgYWN0aW9uVHlwZUlkLFxuICAgIGVsZW1lbnRBcGksXG4gIH06IHtcbiAgICBlZmZlY3Q6IChcbiAgICAgIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICAgICAgcHJvcDogYW55IHwgdW5kZWZpbmVkIHwgc3RyaW5nLFxuXG4gICAgICBlbGVtZW50QXBpPzogYW55XG4gICAgKSA9PiB2b2lkO1xuICAgIGFjdGlvblR5cGVJZDogQWN0aW9uSWQ7XG4gICAgZWxlbWVudEFwaTogRWxlbWVudEFwaTtcbiAgfSkgPT5cbiAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTNzAwNiAtIFBhcmFtZXRlciAnZWxlbWVudCcgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS5cbiAgKGVsZW1lbnQpID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvblR5cGVJZCkge1xuICAgICAgY2FzZSBUUkFOU0ZPUk1fTU9WRTpcbiAgICAgIGNhc2UgVFJBTlNGT1JNX1NDQUxFOlxuICAgICAgY2FzZSBUUkFOU0ZPUk1fUk9UQVRFOlxuICAgICAgY2FzZSBUUkFOU0ZPUk1fU0tFVzpcbiAgICAgICAgZWZmZWN0KGVsZW1lbnQsIFRSQU5TRk9STV9QUkVGSVhFRCwgZWxlbWVudEFwaSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBTVFlMRV9GSUxURVI6XG4gICAgICAgIGVmZmVjdChlbGVtZW50LCBGSUxURVIsIGVsZW1lbnRBcGkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgU1RZTEVfRk9OVF9WQVJJQVRJT046XG4gICAgICAgIGVmZmVjdChlbGVtZW50LCBGT05UX1ZBUklBVElPTl9TRVRUSU5HUywgZWxlbWVudEFwaSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBTVFlMRV9PUEFDSVRZOlxuICAgICAgICBlZmZlY3QoZWxlbWVudCwgT1BBQ0lUWSwgZWxlbWVudEFwaSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBTVFlMRV9TSVpFOlxuICAgICAgICBlZmZlY3QoZWxlbWVudCwgV0lEVEgsIGVsZW1lbnRBcGkpO1xuICAgICAgICBlZmZlY3QoZWxlbWVudCwgSEVJR0hULCBlbGVtZW50QXBpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFNUWUxFX0JBQ0tHUk9VTkRfQ09MT1I6XG4gICAgICBjYXNlIFNUWUxFX0JPUkRFUjpcbiAgICAgIGNhc2UgU1RZTEVfVEVYVF9DT0xPUjpcbiAgICAgICAgZWZmZWN0KGVsZW1lbnQsIGNvbG9yU3R5bGVQcm9wc1thY3Rpb25UeXBlSWRdLCBlbGVtZW50QXBpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEdFTkVSQUxfRElTUExBWTpcbiAgICAgICAgZWZmZWN0KGVsZW1lbnQsIERJU1BMQVksIGVsZW1lbnRBcGkpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH07XG5cbi8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwMDYgLSBQYXJhbWV0ZXIgJ3Byb3AnIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuXG5mdW5jdGlvbiBjbGVhclN0eWxlUHJvcChlbGVtZW50OiBIVE1MRWxlbWVudCwgcHJvcCwgZWxlbWVudEFwaTogYW55KSB7XG4gIGNvbnN0IHtzZXRTdHlsZX0gPSBlbGVtZW50QXBpO1xuICByZW1vdmVXaWxsQ2hhbmdlKGVsZW1lbnQsIHByb3AsIGVsZW1lbnRBcGkpO1xuICBzZXRTdHlsZShlbGVtZW50LCBwcm9wLCAnJyk7XG4gIC8vIENsZWFyIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2RcbiAgaWYgKHByb3AgPT09IFRSQU5TRk9STV9QUkVGSVhFRCkge1xuICAgIHNldFN0eWxlKGVsZW1lbnQsIFRSQU5TRk9STV9TVFlMRV9QUkVGSVhFRCwgJycpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNYXhEdXJhdGlvbkl0ZW1JbmRleChhY3Rpb25JdGVtczogYW55KSB7XG4gIGxldCBtYXhEdXJhdGlvbiA9IDA7XG4gIGxldCByZXN1bHRJbmRleCA9IDA7XG4gIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwMDYgLSBQYXJhbWV0ZXIgJ2FjdGlvbkl0ZW0nIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuIHwgVFM3MDA2IC0gUGFyYW1ldGVyICdpbmRleCcgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS5cbiAgYWN0aW9uSXRlbXMuZm9yRWFjaCgoYWN0aW9uSXRlbSwgaW5kZXgpID0+IHtcbiAgICBjb25zdCB7Y29uZmlnfSA9IGFjdGlvbkl0ZW07XG4gICAgY29uc3QgdG90YWwgPSBjb25maWcuZGVsYXkgKyBjb25maWcuZHVyYXRpb247XG4gICAgaWYgKHRvdGFsID49IG1heER1cmF0aW9uKSB7XG4gICAgICBtYXhEdXJhdGlvbiA9IHRvdGFsO1xuICAgICAgcmVzdWx0SW5kZXggPSBpbmRleDtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0SW5kZXg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBY3Rpb25MaXN0UHJvZ3Jlc3MoYWN0aW9uTGlzdDogYW55LCBpbnN0YW5jZTogYW55KSB7XG4gIGNvbnN0IHthY3Rpb25JdGVtR3JvdXBzLCB1c2VGaXJzdEdyb3VwQXNJbml0aWFsU3RhdGV9ID0gYWN0aW9uTGlzdDtcbiAgY29uc3Qge2FjdGlvbkl0ZW06IGluc3RhbmNlSXRlbSwgdmVyYm9zZVRpbWVFbGFwc2VkID0gMH0gPSBpbnN0YW5jZTtcbiAgbGV0IHRvdGFsRHVyYXRpb24gPSAwO1xuICBsZXQgZWxhcHNlZER1cmF0aW9uID0gMDtcbiAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTNzAwNiAtIFBhcmFtZXRlciAnZ3JvdXAnIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuIHwgVFM3MDA2IC0gUGFyYW1ldGVyICdpbmRleCcgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS5cbiAgYWN0aW9uSXRlbUdyb3Vwcy5mb3JFYWNoKChncm91cCwgaW5kZXgpID0+IHtcbiAgICBpZiAodXNlRmlyc3RHcm91cEFzSW5pdGlhbFN0YXRlICYmIGluZGV4ID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHthY3Rpb25JdGVtc30gPSBncm91cDtcbiAgICBjb25zdCBjYXJyaWVySXRlbSA9IGFjdGlvbkl0ZW1zW2dldE1heER1cmF0aW9uSXRlbUluZGV4KGFjdGlvbkl0ZW1zKV07XG4gICAgY29uc3Qge2NvbmZpZywgYWN0aW9uVHlwZUlkfSA9IGNhcnJpZXJJdGVtO1xuICAgIGlmIChpbnN0YW5jZUl0ZW0uaWQgPT09IGNhcnJpZXJJdGVtLmlkKSB7XG4gICAgICBlbGFwc2VkRHVyYXRpb24gPSB0b3RhbER1cmF0aW9uICsgdmVyYm9zZVRpbWVFbGFwc2VkO1xuICAgIH1cbiAgICBjb25zdCBkdXJhdGlvbiA9XG4gICAgICBnZXRSZW5kZXJUeXBlKGFjdGlvblR5cGVJZCkgPT09IFJFTkRFUl9HRU5FUkFMID8gMCA6IGNvbmZpZy5kdXJhdGlvbjtcbiAgICB0b3RhbER1cmF0aW9uICs9IGNvbmZpZy5kZWxheSArIGR1cmF0aW9uO1xuICB9KTtcbiAgcmV0dXJuIHRvdGFsRHVyYXRpb24gPiAwID8gb3B0aW1pemVGbG9hdChlbGFwc2VkRHVyYXRpb24gLyB0b3RhbER1cmF0aW9uKSA6IDA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VMaXN0VG9Hcm91cCh7XG4gIGFjdGlvbkxpc3QsXG4gIGFjdGlvbkl0ZW1JZCxcbiAgcmF3RGF0YSxcbn06IHtcbiAgYWN0aW9uTGlzdDogQWN0aW9uTGlzdFR5cGU7XG4gIGFjdGlvbkl0ZW1JZDogc3RyaW5nO1xuICByYXdEYXRhOiBJWDJSYXdEYXRhO1xufSkge1xuICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gRklYTUUgLSBUUzIzMzkgLSBQcm9wZXJ0eSAnYWN0aW9uSXRlbUdyb3VwcycgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSAnQWN0aW9uTGlzdFR5cGUnLlxuICBjb25zdCB7YWN0aW9uSXRlbUdyb3VwcywgY29udGludW91c1BhcmFtZXRlckdyb3Vwc30gPSBhY3Rpb25MaXN0O1xuICBjb25zdCBuZXdBY3Rpb25JdGVtczogQXJyYXk8QWN0aW9uSXRlbVR5cGU+ID0gW107XG5cbiAgY29uc3QgdGFrZUl0ZW1VbnRpbE1hdGNoID0gKGFjdGlvbkl0ZW06IEFjdGlvbkl0ZW1UeXBlKSA9PiB7XG4gICAgbmV3QWN0aW9uSXRlbXMucHVzaChcbiAgICAgIG1lcmdlSW4oYWN0aW9uSXRlbSwgWydjb25maWcnXSwge1xuICAgICAgICBkZWxheTogMCxcbiAgICAgICAgZHVyYXRpb246IDAsXG4gICAgICB9KVxuICAgICk7XG4gICAgcmV0dXJuIGFjdGlvbkl0ZW0uaWQgPT09IGFjdGlvbkl0ZW1JZDtcbiAgfTtcblxuICBhY3Rpb25JdGVtR3JvdXBzICYmXG4gICAgYWN0aW9uSXRlbUdyb3Vwcy5zb21lKCh7YWN0aW9uSXRlbXN9OiB7YWN0aW9uSXRlbXM6IEFjdGlvbkl0ZW1zVHlwZX0pID0+IHtcbiAgICAgIHJldHVybiBhY3Rpb25JdGVtcy5zb21lKHRha2VJdGVtVW50aWxNYXRjaCk7XG4gICAgfSk7XG5cbiAgY29udGludW91c1BhcmFtZXRlckdyb3VwcyAmJlxuICAgIGNvbnRpbnVvdXNQYXJhbWV0ZXJHcm91cHMuc29tZShcbiAgICAgIChcbiAgICAgICAgcGFyYW1Hcm91cDpcbiAgICAgICAgICB8IENvbnRpbnVvdXNQYXJhbWV0ZXJHcm91cFR5cGU8J01PVVNFX1gnPlxuICAgICAgICAgIHwgQ29udGludW91c1BhcmFtZXRlckdyb3VwVHlwZTwnTU9VU0VfWSc+XG4gICAgICAgICAgfCBDb250aW51b3VzUGFyYW1ldGVyR3JvdXBUeXBlPCdTQ1JPTExfUFJPR1JFU1MnPlxuICAgICAgKSA9PiB7XG4gICAgICAgIGNvbnN0IHtjb250aW51b3VzQWN0aW9uR3JvdXBzfSA9IHBhcmFtR3JvdXA7XG4gICAgICAgIHJldHVybiBjb250aW51b3VzQWN0aW9uR3JvdXBzLnNvbWUoXG4gICAgICAgICAgKHthY3Rpb25JdGVtc306IHthY3Rpb25JdGVtczogQWN0aW9uSXRlbXNUeXBlfSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbkl0ZW1zLnNvbWUodGFrZUl0ZW1VbnRpbE1hdGNoKTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgKTtcblxuICByZXR1cm4gc2V0SW4ocmF3RGF0YSwgWydhY3Rpb25MaXN0cyddLCB7XG4gICAgW2FjdGlvbkxpc3QuaWRdOiB7XG4gICAgICBpZDogYWN0aW9uTGlzdC5pZCxcbiAgICAgIGFjdGlvbkl0ZW1Hcm91cHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGFjdGlvbkl0ZW1zOiBuZXdBY3Rpb25JdGVtcyxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgfSk7XG59XG5cbi8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwMzEgLSBCaW5kaW5nIGVsZW1lbnQgJ2Jhc2VkT24nIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuXG5leHBvcnQgZnVuY3Rpb24gc2hvdWxkTmFtZXNwYWNlRXZlbnRQYXJhbWV0ZXIoZXZlbnRUeXBlSWQ6IGFueSwge2Jhc2VkT259KSB7XG4gIHJldHVybiAoXG4gICAgKGV2ZW50VHlwZUlkID09PSBFdmVudFR5cGVDb25zdHMuU0NST0xMSU5HX0lOX1ZJRVcgJiZcbiAgICAgIChiYXNlZE9uID09PSBFdmVudEJhc2VkT24uRUxFTUVOVCB8fCBiYXNlZE9uID09IG51bGwpKSB8fFxuICAgIChldmVudFR5cGVJZCA9PT0gRXZlbnRUeXBlQ29uc3RzLk1PVVNFX01PVkUgJiZcbiAgICAgIGJhc2VkT24gPT09IEV2ZW50QmFzZWRPbi5FTEVNRU5UKVxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmFtZXNwYWNlZFBhcmFtZXRlcklkKFxuICBldmVudFN0YXRlS2V5OiBhbnksXG4gIGNvbnRpbnVvdXNQYXJhbWV0ZXJHcm91cElkOiBDb250aW51b3VzUGFyYW1ldGVyR3JvdXBJZFxuKSB7XG4gIGNvbnN0IG5hbWVzcGFjZWRQYXJhbWV0ZXJJZCA9XG4gICAgZXZlbnRTdGF0ZUtleSArIENPTE9OX0RFTElNSVRFUiArIGNvbnRpbnVvdXNQYXJhbWV0ZXJHcm91cElkO1xuXG4gIHJldHVybiBuYW1lc3BhY2VkUGFyYW1ldGVySWQgYXMgQ29udGludW91c1BhcmFtZXRlckdyb3VwSWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG91bGRBbGxvd01lZGlhUXVlcnkobWVkaWFRdWVyaWVzOiBhbnksIG1lZGlhUXVlcnlLZXk6IGFueSkge1xuICAvLyBEdXJpbmcgZGVzaWduIG1vZGUsIGN1cnJlbnQgbWVkaWEgcXVlcnkga2V5IGRvZXMgbm90IGV4aXN0XG4gIGlmIChtZWRpYVF1ZXJ5S2V5ID09IG51bGwpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gbWVkaWFRdWVyaWVzLmluZGV4T2YobWVkaWFRdWVyeUtleSkgIT09IC0xO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVkaWFRdWVyaWVzRXF1YWwobGlzdEE6IGFueSwgbGlzdEI6IGFueSkge1xuICByZXR1cm4gc2hhbGxvd0VxdWFsKGxpc3RBICYmIGxpc3RBLnNvcnQoKSwgbGlzdEIgJiYgbGlzdEIuc29ydCgpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ2lmeVRhcmdldCh0YXJnZXQ6IGFueSkge1xuICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG4gIGlmICh0YXJnZXQucGx1Z2luRWxlbWVudCAmJiB0YXJnZXQub2JqZWN0SWQpIHtcbiAgICByZXR1cm4gdGFyZ2V0LnBsdWdpbkVsZW1lbnQgKyBCQVJfREVMSU1JVEVSICsgdGFyZ2V0Lm9iamVjdElkO1xuICB9XG4gIGlmICh0YXJnZXQub2JqZWN0SWQpIHtcbiAgICByZXR1cm4gdGFyZ2V0Lm9iamVjdElkO1xuICB9XG4gIGNvbnN0IHtpZCA9ICcnLCBzZWxlY3RvciA9ICcnLCB1c2VFdmVudFRhcmdldCA9ICcnfSA9IHRhcmdldDtcbiAgcmV0dXJuIGlkICsgQkFSX0RFTElNSVRFUiArIHNlbGVjdG9yICsgQkFSX0RFTElNSVRFUiArIHVzZUV2ZW50VGFyZ2V0O1xufVxuIl0sIm5hbWVzIjpbImNsZWFudXBIVE1MRWxlbWVudCIsImNsZWFyQWxsU3R5bGVzIiwiY2xlYXJPYmplY3RDYWNoZSIsImdldEFjdGlvbkxpc3RQcm9ncmVzcyIsImdldEFmZmVjdGVkRWxlbWVudHMiLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0RGVzdGluYXRpb25WYWx1ZXMiLCJnZXRFbGVtZW50SWQiLCJnZXRJbnN0YW5jZUlkIiwiZ2V0SW5zdGFuY2VPcmlnaW4iLCJnZXRJdGVtQ29uZmlnQnlLZXkiLCJnZXRNYXhEdXJhdGlvbkl0ZW1JbmRleCIsImdldE5hbWVzcGFjZWRQYXJhbWV0ZXJJZCIsImdldFJlbmRlclR5cGUiLCJnZXRTdHlsZVByb3AiLCJtZWRpYVF1ZXJpZXNFcXVhbCIsIm9ic2VydmVTdG9yZSIsInJlZHVjZUxpc3RUb0dyb3VwIiwicmVpZnlTdGF0ZSIsInJlbmRlckhUTUxFbGVtZW50Iiwic2hhbGxvd0VxdWFsIiwic2hvdWxkQWxsb3dNZWRpYVF1ZXJ5Iiwic2hvdWxkTmFtZXNwYWNlRXZlbnRQYXJhbWV0ZXIiLCJzdHJpbmdpZnlUYXJnZXQiLCJCQUNLR1JPVU5EIiwiVFJBTlNGT1JNIiwiVFJBTlNMQVRFXzNEIiwiU0NBTEVfM0QiLCJST1RBVEVfWCIsIlJPVEFURV9ZIiwiUk9UQVRFX1oiLCJTS0VXIiwiUFJFU0VSVkVfM0QiLCJGTEVYIiwiT1BBQ0lUWSIsIkZJTFRFUiIsIkZPTlRfVkFSSUFUSU9OX1NFVFRJTkdTIiwiV0lEVEgiLCJIRUlHSFQiLCJCQUNLR1JPVU5EX0NPTE9SIiwiQk9SREVSX0NPTE9SIiwiQ09MT1IiLCJDSElMRFJFTiIsIklNTUVESUFURV9DSElMRFJFTiIsIlNJQkxJTkdTIiwiUEFSRU5UIiwiRElTUExBWSIsIldJTExfQ0hBTkdFIiwiQVVUTyIsIkNPTU1BX0RFTElNSVRFUiIsIkNPTE9OX0RFTElNSVRFUiIsIkJBUl9ERUxJTUlURVIiLCJSRU5ERVJfVFJBTlNGT1JNIiwiUkVOREVSX0dFTkVSQUwiLCJSRU5ERVJfU1RZTEUiLCJSRU5ERVJfUExVR0lOIiwiSVgyRW5naW5lQ29uc3RhbnRzIiwiVFJBTlNGT1JNX01PVkUiLCJUUkFOU0ZPUk1fU0NBTEUiLCJUUkFOU0ZPUk1fUk9UQVRFIiwiVFJBTlNGT1JNX1NLRVciLCJTVFlMRV9PUEFDSVRZIiwiU1RZTEVfRklMVEVSIiwiU1RZTEVfRk9OVF9WQVJJQVRJT04iLCJTVFlMRV9TSVpFIiwiU1RZTEVfQkFDS0dST1VORF9DT0xPUiIsIlNUWUxFX0JPUkRFUiIsIlNUWUxFX1RFWFRfQ09MT1IiLCJHRU5FUkFMX0RJU1BMQVkiLCJPQkpFQ1RfVkFMVUUiLCJBY3Rpb25UeXBlQ29uc3RzIiwidHJpbSIsInYiLCJjb2xvclN0eWxlUHJvcHMiLCJPYmplY3QiLCJmcmVlemUiLCJ3aWxsQ2hhbmdlUHJvcHMiLCJUUkFOU0ZPUk1fUFJFRklYRUQiLCJvYmplY3RDYWNoZSIsIk1hcCIsImNsZWFyIiwiaW5zdGFuY2VDb3VudCIsImVsZW1lbnRDb3VudCIsIml4RWxlbWVudHMiLCJyZWYiLCJrZXkiLCJpeEVsIiwiaWQiLCJldmVudHMiLCJhY3Rpb25MaXN0cyIsInNpdGUiLCJldmVudFR5cGVNYXAiLCJyZWR1Y2UiLCJyZXN1bHQiLCJldmVudCIsImV2ZW50VHlwZUlkIiwibWVkaWFRdWVyaWVzIiwibWVkaWFRdWVyeUtleXMiLCJtYXAiLCJtcSIsImNvbnNvbGUiLCJ3YXJuIiwiaXhEYXRhIiwic3RyaWN0RXF1YWwiLCJhIiwiYiIsInN0b3JlIiwic2VsZWN0Iiwib25DaGFuZ2UiLCJjb21wYXJhdG9yIiwiZ2V0U3RhdGUiLCJzdWJzY3JpYmUiLCJ1bnN1YnNjcmliZSIsImhhbmRsZUNoYW5nZSIsImN1cnJlbnRTdGF0ZSIsIm5leHRTdGF0ZSIsIm5vcm1hbGl6ZVRhcmdldCIsInRhcmdldCIsInR5cGUiLCJvYmplY3RJZCIsInNlbGVjdG9yIiwic2VsZWN0b3JHdWlkcyIsImFwcGxpZXNUbyIsInVzZUV2ZW50VGFyZ2V0IiwiY29uZmlnIiwiZXZlbnRUYXJnZXQiLCJlbGVtZW50Um9vdCIsImVsZW1lbnRBcGkiLCJFcnJvciIsInRhcmdldHMiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJhY2N1bXVsYXRvciIsImNvbmNhdCIsImdldFZhbGlkRG9jdW1lbnQiLCJnZXRRdWVyeVNlbGVjdG9yIiwicXVlcnlEb2N1bWVudCIsImdldENoaWxkRWxlbWVudHMiLCJnZXRTaWJsaW5nRWxlbWVudHMiLCJtYXRjaFNlbGVjdG9yIiwiZWxlbWVudENvbnRhaW5zIiwiaXNTaWJsaW5nTm9kZSIsImhhcyIsImdldCIsInNldCIsIkV2ZW50QXBwbGllc1RvIiwiUEFHRSIsImRvYyIsIm92ZXJyaWRlcyIsImFjdGlvbiIsImFmZmVjdGVkRWxlbWVudHMiLCJvdmVycmlkZSIsInZhbGlkT3ZlcnJpZGUiLCJCb29sZWFuIiwibGltaXRBZmZlY3RlZEVsZW1lbnRzIiwiYmFzZVNlbGVjdG9yIiwiZmluYWxTZWxlY3RvciIsImV2ZW50VGFyZ2V0U2VsZWN0b3IiLCJldmVudFRhcmdldHMiLCJmaWx0ZXIiLCJwYXJlbnRFbGVtZW50Iiwic29tZSIsInRhcmdldEVsZW1lbnQiLCJjaGlsZEVsZW1lbnQiLCJzaWJsaW5nRWxlbWVudCIsIklTX0JST1dTRVJfRU5WIiwiZWxlbWVudCIsImNvbnRhaW5zIiwiYWN0aW9uSXRlbSIsImFjdGlvblR5cGVJZCIsIndpbmRvdyIsInB4VmFsdWVSZWdleCIsImdldEZpbHRlckRlZmF1bHRzIiwiYWN0aW9uU3RhdGUiLCJmaWx0ZXJzIiwiZmlsdGVyRGVmYXVsdHMiLCJnZXRGb250VmFyaWF0aW9uRGVmYXVsdHMiLCJmb250VmFyaWF0aW9ucyIsImZvbnRWYXJpYXRpb24iLCJmb250VmFyaWF0aW9uRGVmYXVsdHMiLCJkZWZhdWx0VmFsdWUiLCJyZWZTdGF0ZSIsImNvbXB1dGVkU3R5bGUiLCJnZXRTdHlsZSIsImlzUGx1Z2luVHlwZSIsImdldFBsdWdpbk9yaWdpbiIsInRyYW5zZm9ybURlZmF1bHRzIiwidmFsdWUiLCJkZWZhdWx0VG8iLCJwYXJzZUZsb2F0IiwiaW5saW5lV2lkdGgiLCJpbmxpbmVIZWlnaHQiLCJ3aWR0aFZhbHVlIiwiaGVpZ2h0VmFsdWUiLCJ3aWR0aFVuaXQiLCJ0ZXN0Iiwid2lkdGgiLCJoZWlnaHRVbml0IiwiaGVpZ2h0IiwicGFyc2VDb2xvciIsImRpc3BsYXkiLCJyZWR1Y2VGaWx0ZXJzIiwicmVkdWNlRm9udFZhcmlhdGlvbnMiLCJnZXRQbHVnaW5Db25maWciLCJmaW5kTGFzdCIsImdldFBsdWdpbkRlc3RpbmF0aW9uIiwieFZhbHVlIiwieVZhbHVlIiwielZhbHVlIiwic2V0U3R5bGUiLCJnZXRQcm9wZXJ0eSIsInRlbXAiLCJyVmFsdWUiLCJnVmFsdWUiLCJiVmFsdWUiLCJhVmFsdWUiLCJnbG9iYWxTd2F0Y2hJZCIsInN0YXJ0c1dpdGgiLCJub3JtYWxpemVkVmFsdWUiLCJub3JtYWxpemVDb2xvciIsInJlZCIsImdyZWVuIiwiYmx1ZSIsImFscGhhIiwicmVuZGVyVHlwZSIsInJlcGxhY2UiLCJ0b0xvd2VyQ2FzZSIsImV2ZW50SWQiLCJzdHlsZVByb3AiLCJwbHVnaW5JbnN0YW5jZSIsInJlbmRlclRyYW5zZm9ybSIsInJlbmRlclN0eWxlIiwicmVuZGVyR2VuZXJhbCIsInJlbmRlclBsdWdpbiIsImJsdXIiLCJpbnZlcnQiLCJncmF5c2NhbGUiLCJzYXR1cmF0ZSIsInNlcGlhIiwiY29udHJhc3QiLCJicmlnaHRuZXNzIiwid2dodCIsIm9wc3oiLCJ3ZHRoIiwic2xudCIsImdldEZpbHRlclVuaXQiLCJmaWx0ZXJUeXBlIiwiYWN0aW9uSXRlbUNvbmZpZyIsInVuaXQiLCJ0cmFuc2Zvcm1LZXlzIiwia2V5cyIsIm5ld1RyYW5zZm9ybSIsImRlZmF1bHRzIiwieFVuaXQiLCJ5VW5pdCIsInpVbml0Iiwiam9pbiIsImFkZFdpbGxDaGFuZ2UiLCJoYXNEZWZpbmVkM2RUcmFuc2Zvcm0iLCJUUkFOU0ZPUk1fU1RZTEVfUFJFRklYRUQiLCJyZW5kZXJGaWx0ZXIiLCJmaWx0ZXJWYWx1ZSIsInJlbmRlckZvbnRWYXJpYXRpb24iLCJmb250VmFyaWF0aW9uVmFsdWUiLCJwdXNoIiwidW5kZWZpbmVkIiwicGFyYW1DYXB0dXJlIiwicmdiVmFsaWRSZWdleCIsInJnYk1hdGNoUmVnZXgiLCJSZWdFeHAiLCJnZXRGaXJzdE1hdGNoIiwicmVnZXgiLCJtYXRjaCIsImV4ZWMiLCJwcm9wIiwiaW5saW5lVmFsdWUiLCJtYXRjaGVzIiwic3BsaXQiLCJwYXJzZUludCIsIk1hdGgiLCJyb3VuZCIsIkZMRVhfUFJFRklYRUQiLCJ2YWxpZFByb3AiLCJ2YWx1ZXMiLCJpbmRleE9mIiwicmVtb3ZlV2lsbENoYW5nZSIsImZvckVhY2giLCJhY3Rpb25MaXN0SWQiLCJhY3Rpb25MaXN0IiwiY2xlYXJBY3Rpb25MaXN0U3R5bGVzIiwiYWN0aW9uSXRlbUdyb3VwcyIsImNvbnRpbnVvdXNQYXJhbWV0ZXJHcm91cHMiLCJhY3Rpb25Hcm91cCIsImNsZWFyQWN0aW9uR3JvdXBTdHlsZXMiLCJwYXJhbUdyb3VwIiwiY29udGludW91c0FjdGlvbkdyb3VwcyIsImFjdGlvbkl0ZW1zIiwiY2xlYXJFbGVtZW50IiwiY2xlYXJQbHVnaW4iLCJwcm9jZXNzRWxlbWVudEJ5VHlwZSIsImVmZmVjdCIsImNsZWFyU3R5bGVQcm9wIiwibWF4RHVyYXRpb24iLCJyZXN1bHRJbmRleCIsImluZGV4IiwidG90YWwiLCJkZWxheSIsImR1cmF0aW9uIiwiaW5zdGFuY2UiLCJ1c2VGaXJzdEdyb3VwQXNJbml0aWFsU3RhdGUiLCJpbnN0YW5jZUl0ZW0iLCJ2ZXJib3NlVGltZUVsYXBzZWQiLCJ0b3RhbER1cmF0aW9uIiwiZWxhcHNlZER1cmF0aW9uIiwiZ3JvdXAiLCJjYXJyaWVySXRlbSIsIm9wdGltaXplRmxvYXQiLCJhY3Rpb25JdGVtSWQiLCJyYXdEYXRhIiwibmV3QWN0aW9uSXRlbXMiLCJ0YWtlSXRlbVVudGlsTWF0Y2giLCJtZXJnZUluIiwic2V0SW4iLCJiYXNlZE9uIiwiRXZlbnRUeXBlQ29uc3RzIiwiU0NST0xMSU5HX0lOX1ZJRVciLCJFdmVudEJhc2VkT24iLCJFTEVNRU5UIiwiTU9VU0VfTU9WRSIsImV2ZW50U3RhdGVLZXkiLCJjb250aW51b3VzUGFyYW1ldGVyR3JvdXBJZCIsIm5hbWVzcGFjZWRQYXJhbWV0ZXJJZCIsIm1lZGlhUXVlcnlLZXkiLCJsaXN0QSIsImxpc3RCIiwic29ydCIsInBsdWdpbkVsZW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBLHNCQUFzQjs7Ozs7Ozs7Ozs7SUFtcUNOQSxrQkFBa0I7ZUFBbEJBOztJQTdEQUMsY0FBYztlQUFkQTs7SUExOEJBQyxnQkFBZ0I7ZUFBaEJBOztJQTBtQ0FDLHFCQUFxQjtlQUFyQkE7O0lBdi9CQUMsbUJBQW1CO2VBQW5CQTs7SUEwSkFDLGdCQUFnQjtlQUFoQkE7O0lBcU5BQyxvQkFBb0I7ZUFBcEJBOztJQXhkQUMsWUFBWTtlQUFaQTs7SUFMQUMsYUFBYTtlQUFiQTs7SUF5VEFDLGlCQUFpQjtlQUFqQkE7O0lBMElIQyxrQkFBa0I7ZUFBbEJBOztJQW1wQkdDLHVCQUF1QjtlQUF2QkE7O0lBeUdBQyx3QkFBd0I7ZUFBeEJBOztJQTlvQkFDLGFBQWE7ZUFBYkE7O0lBZUFDLFlBQVk7ZUFBWkE7O0lBaXBCQUMsaUJBQWlCO2VBQWpCQTs7SUF2cENBQyxZQUFZO2VBQVpBOztJQWtrQ0FDLGlCQUFpQjtlQUFqQkE7O0lBNW1DQUMsVUFBVTtlQUFWQTs7SUFzakJBQyxpQkFBaUI7ZUFBakJBOztJQWxtQlJDLFlBQVk7ZUFBWkEscUJBQVk7O0lBcXVDSkMscUJBQXFCO2VBQXJCQTs7SUFuQkFDLDZCQUE2QjtlQUE3QkE7O0lBK0JBQyxlQUFlO2VBQWZBOzs7a0VB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

}),
7164: (function (__unused_webpack_module, exports) {
// from https://github.com/acdlite/recompose/blob/master/src/packages/recompose/shallowEqual.js
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule shallowEqual
 * @typechecks
 */ /* eslint-disable no-self-compare */ /**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return _default;
    }
}));
function is(x, y) {
    // SameValue algorithm
    if (x === y) {
        // Steps 1-5, 7-10
        // Steps 6.b-6.e: +0 != -0
        // Added the nonzero y check to make Flow happy, but it is redundant
        return x !== 0 || y !== 0 || 1 / x === 1 / y;
    }
    // Step 6.a: NaN == NaN
    return x !== x && y !== y;
}
/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */ function shallowEqual(objA, objB) {
    if (is(objA, objB)) {
        return true;
    }
    if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
        return false;
    }
    const keysA = Object.keys(objA);
    const keysB = Object.keys(objB);
    if (keysA.length !== keysB.length) {
        return false;
    }
    // Test for A's keys different from B.
    for(let i = 0; i < keysA.length; i++){
        if (!Object.hasOwn(objB, // @ts-expect-error - TS2345 - Argument of type 'string | undefined' is not assignable to parameter of type 'PropertyKey'.
        keysA[i]) || // @ts-expect-error - TS2538 - Type 'undefined' cannot be used as an index type. | TS2538 - Type 'undefined' cannot be used as an index type.
        !is(objA[keysA[i]], objB[keysA[i]])) {
            return false;
        }
    }
    return true;
}
const _default = shallowEqual;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYWxsb3dFcXVhbC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9hY2RsaXRlL3JlY29tcG9zZS9ibG9iL21hc3Rlci9zcmMvcGFja2FnZXMvcmVjb21wb3NlL3NoYWxsb3dFcXVhbC5qc1xuXG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBzaGFsbG93RXF1YWxcbiAqIEB0eXBlY2hlY2tzXG4gKi9cblxuLyogZXNsaW50LWRpc2FibGUgbm8tc2VsZi1jb21wYXJlICovXG5cbi8qKlxuICogaW5saW5lZCBPYmplY3QuaXMgcG9seWZpbGwgdG8gYXZvaWQgcmVxdWlyaW5nIGNvbnN1bWVycyBzaGlwIHRoZWlyIG93blxuICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2lzXG4gKi9cbmZ1bmN0aW9uIGlzKHg6IG51bWJlciB8IFJlY29yZDxhbnksIGFueT4sIHk6IG51bWJlciB8IFJlY29yZDxhbnksIGFueT4pIHtcbiAgLy8gU2FtZVZhbHVlIGFsZ29yaXRobVxuICBpZiAoeCA9PT0geSkge1xuICAgIC8vIFN0ZXBzIDEtNSwgNy0xMFxuICAgIC8vIFN0ZXBzIDYuYi02LmU6ICswICE9IC0wXG4gICAgLy8gQWRkZWQgdGhlIG5vbnplcm8geSBjaGVjayB0byBtYWtlIEZsb3cgaGFwcHksIGJ1dCBpdCBpcyByZWR1bmRhbnRcbiAgICByZXR1cm4geCAhPT0gMCB8fCB5ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geTtcbiAgfVxuICAvLyBTdGVwIDYuYTogTmFOID09IE5hTlxuICByZXR1cm4geCAhPT0geCAmJiB5ICE9PSB5O1xufVxuXG4vKipcbiAqIFBlcmZvcm1zIGVxdWFsaXR5IGJ5IGl0ZXJhdGluZyB0aHJvdWdoIGtleXMgb24gYW4gb2JqZWN0IGFuZCByZXR1cm5pbmcgZmFsc2VcbiAqIHdoZW4gYW55IGtleSBoYXMgdmFsdWVzIHdoaWNoIGFyZSBub3Qgc3RyaWN0bHkgZXF1YWwgYmV0d2VlbiB0aGUgYXJndW1lbnRzLlxuICogUmV0dXJucyB0cnVlIHdoZW4gdGhlIHZhbHVlcyBvZiBhbGwga2V5cyBhcmUgc3RyaWN0bHkgZXF1YWwuXG4gKi9cbmZ1bmN0aW9uIHNoYWxsb3dFcXVhbChvYmpBOiBSZWNvcmQ8YW55LCBhbnk+LCBvYmpCOiBSZWNvcmQ8YW55LCBhbnk+KTogYm9vbGVhbiB7XG4gIGlmIChpcyhvYmpBLCBvYmpCKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKFxuICAgIHR5cGVvZiBvYmpBICE9PSAnb2JqZWN0JyB8fFxuICAgIG9iakEgPT09IG51bGwgfHxcbiAgICB0eXBlb2Ygb2JqQiAhPT0gJ29iamVjdCcgfHxcbiAgICBvYmpCID09PSBudWxsXG4gICkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IGtleXNBID0gT2JqZWN0LmtleXMob2JqQSk7XG4gIGNvbnN0IGtleXNCID0gT2JqZWN0LmtleXMob2JqQik7XG5cbiAgaWYgKGtleXNBLmxlbmd0aCAhPT0ga2V5c0IubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gVGVzdCBmb3IgQSdzIGtleXMgZGlmZmVyZW50IGZyb20gQi5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzQS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChcbiAgICAgICFPYmplY3QuaGFzT3duKFxuICAgICAgICBvYmpCLFxuICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFMyMzQ1IC0gQXJndW1lbnQgb2YgdHlwZSAnc3RyaW5nIHwgdW5kZWZpbmVkJyBpcyBub3QgYXNzaWduYWJsZSB0byBwYXJhbWV0ZXIgb2YgdHlwZSAnUHJvcGVydHlLZXknLlxuICAgICAgICBrZXlzQVtpXVxuICAgICAgKSB8fFxuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTMjUzOCAtIFR5cGUgJ3VuZGVmaW5lZCcgY2Fubm90IGJlIHVzZWQgYXMgYW4gaW5kZXggdHlwZS4gfCBUUzI1MzggLSBUeXBlICd1bmRlZmluZWQnIGNhbm5vdCBiZSB1c2VkIGFzIGFuIGluZGV4IHR5cGUuXG4gICAgICAhaXMob2JqQVtrZXlzQVtpXV0sIG9iakJba2V5c0FbaV1dKVxuICAgICkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzaGFsbG93RXF1YWw7XG4iXSwibmFtZXMiOlsiaXMiLCJ4IiwieSIsInNoYWxsb3dFcXVhbCIsIm9iakEiLCJvYmpCIiwia2V5c0EiLCJPYmplY3QiLCJrZXlzIiwia2V5c0IiLCJsZW5ndGgiLCJpIiwiaGFzT3duIl0sIm1hcHBpbmdzIjoiQUFBQSwrRkFBK0Y7QUFFL0Y7Ozs7Ozs7O0NBUUMsR0FFRCxrQ0FBa0MsR0FFbEM7OztDQUdDOzs7OytCQXlERDs7O2VBQUE7OztBQXhEQSxTQUFTQSxHQUFHQyxDQUE0QixFQUFFQyxDQUE0QjtJQUNwRSxzQkFBc0I7SUFDdEIsSUFBSUQsTUFBTUMsR0FBRztRQUNYLGtCQUFrQjtRQUNsQiwwQkFBMEI7UUFDMUIsb0VBQW9FO1FBQ3BFLE9BQU9ELE1BQU0sS0FBS0MsTUFBTSxLQUFLLElBQUlELE1BQU0sSUFBSUM7SUFDN0M7SUFDQSx1QkFBdUI7SUFDdkIsT0FBT0QsTUFBTUEsS0FBS0MsTUFBTUE7QUFDMUI7QUFFQTs7OztDQUlDLEdBQ0QsU0FBU0MsYUFBYUMsSUFBc0IsRUFBRUMsSUFBc0I7SUFDbEUsSUFBSUwsR0FBR0ksTUFBTUMsT0FBTztRQUNsQixPQUFPO0lBQ1Q7SUFFQSxJQUNFLE9BQU9ELFNBQVMsWUFDaEJBLFNBQVMsUUFDVCxPQUFPQyxTQUFTLFlBQ2hCQSxTQUFTLE1BQ1Q7UUFDQSxPQUFPO0lBQ1Q7SUFFQSxNQUFNQyxRQUFRQyxPQUFPQyxJQUFJLENBQUNKO0lBQzFCLE1BQU1LLFFBQVFGLE9BQU9DLElBQUksQ0FBQ0g7SUFFMUIsSUFBSUMsTUFBTUksTUFBTSxLQUFLRCxNQUFNQyxNQUFNLEVBQUU7UUFDakMsT0FBTztJQUNUO0lBRUEsc0NBQXNDO0lBQ3RDLElBQUssSUFBSUMsSUFBSSxHQUFHQSxJQUFJTCxNQUFNSSxNQUFNLEVBQUVDLElBQUs7UUFDckMsSUFDRSxDQUFDSixPQUFPSyxNQUFNLENBQ1pQLE1BQ0EsMEhBQTBIO1FBQzFIQyxLQUFLLENBQUNLLEVBQUUsS0FFViw2SUFBNkk7UUFDN0ksQ0FBQ1gsR0FBR0ksSUFBSSxDQUFDRSxLQUFLLENBQUNLLEVBQUUsQ0FBQyxFQUFFTixJQUFJLENBQUNDLEtBQUssQ0FBQ0ssRUFBRSxDQUFDLEdBQ2xDO1lBQ0EsT0FBTztRQUNUO0lBQ0Y7SUFFQSxPQUFPO0FBQ1Q7TUFFQSxXQUFlUiJ9

}),
5861: (function (__unused_webpack_module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    createElementState: function() {
        return createElementState;
    },
    ixElements: function() {
        return ixElements;
    },
    mergeActionState: function() {
        return mergeActionState;
    }
});
const _timm = __webpack_require__(1185);
const _sharedconstants = __webpack_require__(7087);
const { HTML_ELEMENT, PLAIN_OBJECT, ABSTRACT_NODE, CONFIG_X_VALUE, CONFIG_Y_VALUE, CONFIG_Z_VALUE, CONFIG_VALUE, CONFIG_X_UNIT, CONFIG_Y_UNIT, CONFIG_Z_UNIT, CONFIG_UNIT } = _sharedconstants.IX2EngineConstants;
const { IX2_SESSION_STOPPED, IX2_INSTANCE_ADDED, IX2_ELEMENT_STATE_CHANGED } = _sharedconstants.IX2EngineActionTypes;
const initialState = {};
const refState = 'refState';
const ixElements = (state = initialState, action = {})=>{
    switch(action.type){
        case IX2_SESSION_STOPPED:
            {
                return initialState;
            }
        case IX2_INSTANCE_ADDED:
            {
                const { elementId, element: ref, origin, actionItem, refType } = action.payload;
                const { actionTypeId } = actionItem;
                let newState = state;
                // Create new ref entry if it doesn't exist
                if ((0, _timm.getIn)(newState, [
                    elementId,
                    ref
                ]) !== ref) {
                    newState = createElementState(newState, ref, refType, elementId, actionItem);
                }
                // Merge origin values into ref state
                return mergeActionState(newState, elementId, actionTypeId, origin, actionItem);
            }
        case IX2_ELEMENT_STATE_CHANGED:
            {
                const { elementId, actionTypeId, current, actionItem } = action.payload;
                return mergeActionState(state, elementId, actionTypeId, current, actionItem);
            }
        default:
            {
                return state;
            }
    }
};
function createElementState(state, ref, refType, elementId, actionItem) {
    const refId = refType === PLAIN_OBJECT ? (0, _timm.getIn)(actionItem, [
        'config',
        'target',
        'objectId'
    ]) : null;
    return (0, _timm.mergeIn)(state, [
        elementId
    ], {
        id: elementId,
        ref,
        refId,
        refType
    });
}
function mergeActionState(state, elementId, actionTypeId, actionState, actionItem) {
    const units = pickUnits(actionItem);
    const mergePath = [
        elementId,
        refState,
        actionTypeId
    ];
    return (0, _timm.mergeIn)(state, mergePath, actionState, units);
}
const valueUnitPairs = [
    [
        CONFIG_X_VALUE,
        CONFIG_X_UNIT
    ],
    [
        CONFIG_Y_VALUE,
        CONFIG_Y_UNIT
    ],
    [
        CONFIG_Z_VALUE,
        CONFIG_Z_UNIT
    ],
    [
        CONFIG_VALUE,
        CONFIG_UNIT
    ]
];
function pickUnits(actionItem) {
    const { config } = actionItem;
    return valueUnitPairs.reduce((result, pair)=>{
        const valueKey = pair[0];
        const unitKey = pair[1];
        // @ts-expect-error - TS2538 - Type 'undefined' cannot be used as an index type.
        const configValue = config[valueKey];
        // @ts-expect-error - TS2538 - Type 'undefined' cannot be used as an index type.
        const configUnit = config[unitKey];
        if (configValue != null && configUnit != null) {
            // @ts-expect-error - TS2538 - Type 'undefined' cannot be used as an index type.
            result[unitKey] = configUnit;
        }
        return result;
    }, {});
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIklYMkVsZW1lbnRzUmVkdWNlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2dldEluLCBtZXJnZUlufSBmcm9tICd0aW1tJztcbmltcG9ydCB7XG4gIElYMkVuZ2luZUFjdGlvblR5cGVzLFxuICBJWDJFbmdpbmVDb25zdGFudHMsXG59IGZyb20gJ0BwYWNrYWdlcy9zeXN0ZW1zL2l4Mi9zaGFyZWQtY29uc3RhbnRzJztcblxuY29uc3Qge1xuICBIVE1MX0VMRU1FTlQsXG4gIFBMQUlOX09CSkVDVCxcbiAgQUJTVFJBQ1RfTk9ERSxcbiAgQ09ORklHX1hfVkFMVUUsXG4gIENPTkZJR19ZX1ZBTFVFLFxuICBDT05GSUdfWl9WQUxVRSxcbiAgQ09ORklHX1ZBTFVFLFxuICBDT05GSUdfWF9VTklULFxuICBDT05GSUdfWV9VTklULFxuICBDT05GSUdfWl9VTklULFxuICBDT05GSUdfVU5JVCxcbn0gPSBJWDJFbmdpbmVDb25zdGFudHM7XG5cbmNvbnN0IHtJWDJfU0VTU0lPTl9TVE9QUEVELCBJWDJfSU5TVEFOQ0VfQURERUQsIElYMl9FTEVNRU5UX1NUQVRFX0NIQU5HRUR9ID1cbiAgSVgyRW5naW5lQWN0aW9uVHlwZXM7XG5cbnR5cGUgUmVmVHlwZXMgPVxuICB8IHR5cGVvZiBIVE1MX0VMRU1FTlRcbiAgfCB0eXBlb2YgUExBSU5fT0JKRUNUXG4gIHwgdHlwZW9mIEFCU1RSQUNUX05PREU7XG5cbnR5cGUgQWN0aW9uU3RhdGUgPSB7XG4gIHhWYWx1ZT86IG51bWJlcjtcbiAgeVZhbHVlPzogbnVtYmVyO1xuICB6VmFsdWU/OiBudW1iZXI7XG4gIHZhbHVlPzogbnVtYmVyO1xuICB4VW5pdD86IHN0cmluZztcbiAgeVVuaXQ/OiBzdHJpbmc7XG4gIHpVbml0Pzogc3RyaW5nO1xuICB1bml0Pzogc3RyaW5nO1xufTtcblxudHlwZSBFbGVtZW50c1N0YXRlID0ge1xuICBbZWxlbWVudElkOiBzdHJpbmddOiB7XG4gICAgaWQ6IHN0cmluZztcbiAgICByZWY6IHVua25vd247IC8vIEhUTUxFbGVtZW50IHwgT2JqZWN0O1xuICAgIHJlZklkOiBzdHJpbmcgfCBudWxsO1xuICAgIHJlZlR5cGU6IFJlZlR5cGVzO1xuICAgIHJlZlN0YXRlOiB7XG4gICAgICBbYWN0aW9uVHlwZUlkOiBzdHJpbmddOiBBY3Rpb25TdGF0ZTtcbiAgICB9O1xuICB9O1xufTtcblxuY29uc3QgaW5pdGlhbFN0YXRlOiBFbGVtZW50c1N0YXRlID0ge307XG5jb25zdCByZWZTdGF0ZSA9ICdyZWZTdGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBpeEVsZW1lbnRzID0gKFxuICBzdGF0ZTogRWxlbWVudHNTdGF0ZSA9IGluaXRpYWxTdGF0ZSxcbiAgYWN0aW9uOiBSZWNvcmQ8YW55LCBhbnk+ID0ge31cbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBJWDJfU0VTU0lPTl9TVE9QUEVEOiB7XG4gICAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xuICAgIH1cbiAgICBjYXNlIElYMl9JTlNUQU5DRV9BRERFRDoge1xuICAgICAgY29uc3Qge1xuICAgICAgICBlbGVtZW50SWQsXG4gICAgICAgIGVsZW1lbnQ6IHJlZixcbiAgICAgICAgb3JpZ2luLFxuICAgICAgICBhY3Rpb25JdGVtLFxuICAgICAgICByZWZUeXBlLFxuICAgICAgfSA9IGFjdGlvbi5wYXlsb2FkO1xuXG4gICAgICBjb25zdCB7YWN0aW9uVHlwZUlkfSA9IGFjdGlvbkl0ZW07XG4gICAgICBsZXQgbmV3U3RhdGUgPSBzdGF0ZTtcblxuICAgICAgLy8gQ3JlYXRlIG5ldyByZWYgZW50cnkgaWYgaXQgZG9lc24ndCBleGlzdFxuICAgICAgaWYgKGdldEluKG5ld1N0YXRlLCBbZWxlbWVudElkLCByZWZdKSAhPT0gcmVmKSB7XG4gICAgICAgIG5ld1N0YXRlID0gY3JlYXRlRWxlbWVudFN0YXRlKFxuICAgICAgICAgIG5ld1N0YXRlLFxuICAgICAgICAgIHJlZixcbiAgICAgICAgICByZWZUeXBlLFxuICAgICAgICAgIGVsZW1lbnRJZCxcbiAgICAgICAgICBhY3Rpb25JdGVtXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIC8vIE1lcmdlIG9yaWdpbiB2YWx1ZXMgaW50byByZWYgc3RhdGVcbiAgICAgIHJldHVybiBtZXJnZUFjdGlvblN0YXRlKFxuICAgICAgICBuZXdTdGF0ZSxcbiAgICAgICAgZWxlbWVudElkLFxuICAgICAgICBhY3Rpb25UeXBlSWQsXG4gICAgICAgIG9yaWdpbixcbiAgICAgICAgYWN0aW9uSXRlbVxuICAgICAgKTtcbiAgICB9XG4gICAgY2FzZSBJWDJfRUxFTUVOVF9TVEFURV9DSEFOR0VEOiB7XG4gICAgICBjb25zdCB7ZWxlbWVudElkLCBhY3Rpb25UeXBlSWQsIGN1cnJlbnQsIGFjdGlvbkl0ZW19ID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICByZXR1cm4gbWVyZ2VBY3Rpb25TdGF0ZShcbiAgICAgICAgc3RhdGUsXG4gICAgICAgIGVsZW1lbnRJZCxcbiAgICAgICAgYWN0aW9uVHlwZUlkLFxuICAgICAgICBjdXJyZW50LFxuICAgICAgICBhY3Rpb25JdGVtXG4gICAgICApO1xuICAgIH1cbiAgICBkZWZhdWx0OiB7XG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFN0YXRlKFxuICBzdGF0ZTogRWxlbWVudHNTdGF0ZSxcbiAgcmVmOiB1bmtub3duLFxuICByZWZUeXBlOiBSZWZUeXBlcyxcbiAgZWxlbWVudElkOiBzdHJpbmcsXG4gIGFjdGlvbkl0ZW06IHtcbiAgICBba2V5OiBzdHJpbmddOiBhbnk7XG4gIH1cbikge1xuICBjb25zdCByZWZJZCA9XG4gICAgcmVmVHlwZSA9PT0gUExBSU5fT0JKRUNUXG4gICAgICA/IGdldEluKGFjdGlvbkl0ZW0sIFsnY29uZmlnJywgJ3RhcmdldCcsICdvYmplY3RJZCddKVxuICAgICAgOiBudWxsO1xuICByZXR1cm4gbWVyZ2VJbihzdGF0ZSwgW2VsZW1lbnRJZF0sIHtcbiAgICBpZDogZWxlbWVudElkLFxuICAgIHJlZixcbiAgICByZWZJZCxcbiAgICByZWZUeXBlLFxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlQWN0aW9uU3RhdGUoXG4gIHN0YXRlOiBFbGVtZW50c1N0YXRlLFxuICBlbGVtZW50SWQ6IHN0cmluZyxcbiAgYWN0aW9uVHlwZUlkOiBzdHJpbmcsXG4gIGFjdGlvblN0YXRlOiBBY3Rpb25TdGF0ZSxcbiAgYWN0aW9uSXRlbTogUmVjb3JkPGFueSwgYW55PlxuKSB7XG4gIGNvbnN0IHVuaXRzID0gcGlja1VuaXRzKGFjdGlvbkl0ZW0pO1xuICBjb25zdCBtZXJnZVBhdGggPSBbZWxlbWVudElkLCByZWZTdGF0ZSwgYWN0aW9uVHlwZUlkXTtcbiAgcmV0dXJuIG1lcmdlSW4oc3RhdGUsIG1lcmdlUGF0aCwgYWN0aW9uU3RhdGUsIHVuaXRzKTtcbn1cblxuY29uc3QgdmFsdWVVbml0UGFpcnMgPSBbXG4gIFtDT05GSUdfWF9WQUxVRSwgQ09ORklHX1hfVU5JVF0sXG4gIFtDT05GSUdfWV9WQUxVRSwgQ09ORklHX1lfVU5JVF0sXG4gIFtDT05GSUdfWl9WQUxVRSwgQ09ORklHX1pfVU5JVF0sXG4gIFtDT05GSUdfVkFMVUUsIENPTkZJR19VTklUXSxcbl07XG5cbmZ1bmN0aW9uIHBpY2tVbml0cyhhY3Rpb25JdGVtOiBSZWNvcmQ8YW55LCBhbnk+KSB7XG4gIGNvbnN0IHtjb25maWd9ID0gYWN0aW9uSXRlbTtcbiAgcmV0dXJuIHZhbHVlVW5pdFBhaXJzLnJlZHVjZTxSZWNvcmQ8c3RyaW5nLCBhbnk+PigocmVzdWx0LCBwYWlyKSA9PiB7XG4gICAgY29uc3QgdmFsdWVLZXkgPSBwYWlyWzBdO1xuICAgIGNvbnN0IHVuaXRLZXkgPSBwYWlyWzFdO1xuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzI1MzggLSBUeXBlICd1bmRlZmluZWQnIGNhbm5vdCBiZSB1c2VkIGFzIGFuIGluZGV4IHR5cGUuXG4gICAgY29uc3QgY29uZmlnVmFsdWUgPSBjb25maWdbdmFsdWVLZXldO1xuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzI1MzggLSBUeXBlICd1bmRlZmluZWQnIGNhbm5vdCBiZSB1c2VkIGFzIGFuIGluZGV4IHR5cGUuXG4gICAgY29uc3QgY29uZmlnVW5pdCA9IGNvbmZpZ1t1bml0S2V5XTtcbiAgICBpZiAoY29uZmlnVmFsdWUgIT0gbnVsbCAmJiBjb25maWdVbml0ICE9IG51bGwpIHtcbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzI1MzggLSBUeXBlICd1bmRlZmluZWQnIGNhbm5vdCBiZSB1c2VkIGFzIGFuIGluZGV4IHR5cGUuXG4gICAgICByZXN1bHRbdW5pdEtleV0gPSBjb25maWdVbml0O1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9LCB7fSk7XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlRWxlbWVudFN0YXRlIiwiaXhFbGVtZW50cyIsIm1lcmdlQWN0aW9uU3RhdGUiLCJIVE1MX0VMRU1FTlQiLCJQTEFJTl9PQkpFQ1QiLCJBQlNUUkFDVF9OT0RFIiwiQ09ORklHX1hfVkFMVUUiLCJDT05GSUdfWV9WQUxVRSIsIkNPTkZJR19aX1ZBTFVFIiwiQ09ORklHX1ZBTFVFIiwiQ09ORklHX1hfVU5JVCIsIkNPTkZJR19ZX1VOSVQiLCJDT05GSUdfWl9VTklUIiwiQ09ORklHX1VOSVQiLCJJWDJFbmdpbmVDb25zdGFudHMiLCJJWDJfU0VTU0lPTl9TVE9QUEVEIiwiSVgyX0lOU1RBTkNFX0FEREVEIiwiSVgyX0VMRU1FTlRfU1RBVEVfQ0hBTkdFRCIsIklYMkVuZ2luZUFjdGlvblR5cGVzIiwiaW5pdGlhbFN0YXRlIiwicmVmU3RhdGUiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJlbGVtZW50SWQiLCJlbGVtZW50IiwicmVmIiwib3JpZ2luIiwiYWN0aW9uSXRlbSIsInJlZlR5cGUiLCJwYXlsb2FkIiwiYWN0aW9uVHlwZUlkIiwibmV3U3RhdGUiLCJnZXRJbiIsImN1cnJlbnQiLCJyZWZJZCIsIm1lcmdlSW4iLCJpZCIsImFjdGlvblN0YXRlIiwidW5pdHMiLCJwaWNrVW5pdHMiLCJtZXJnZVBhdGgiLCJ2YWx1ZVVuaXRQYWlycyIsImNvbmZpZyIsInJlZHVjZSIsInJlc3VsdCIsInBhaXIiLCJ2YWx1ZUtleSIsInVuaXRLZXkiLCJjb25maWdWYWx1ZSIsImNvbmZpZ1VuaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBOEdnQkEsa0JBQWtCO2VBQWxCQTs7SUF4REhDLFVBQVU7ZUFBVkE7O0lBNkVHQyxnQkFBZ0I7ZUFBaEJBOzs7c0JBbklhO2lDQUl0QjtBQUVQLE1BQU0sRUFDSkMsWUFBWSxFQUNaQyxZQUFZLEVBQ1pDLGFBQWEsRUFDYkMsY0FBYyxFQUNkQyxjQUFjLEVBQ2RDLGNBQWMsRUFDZEMsWUFBWSxFQUNaQyxhQUFhLEVBQ2JDLGFBQWEsRUFDYkMsYUFBYSxFQUNiQyxXQUFXLEVBQ1osR0FBR0MsbUNBQWtCO0FBRXRCLE1BQU0sRUFBQ0MsbUJBQW1CLEVBQUVDLGtCQUFrQixFQUFFQyx5QkFBeUIsRUFBQyxHQUN4RUMscUNBQW9CO0FBOEJ0QixNQUFNQyxlQUE4QixDQUFDO0FBQ3JDLE1BQU1DLFdBQVc7QUFFVixNQUFNbkIsYUFBYSxDQUN4Qm9CLFFBQXVCRixZQUFZLEVBQ25DRyxTQUEyQixDQUFDLENBQUM7SUFFN0IsT0FBUUEsT0FBT0MsSUFBSTtRQUNqQixLQUFLUjtZQUFxQjtnQkFDeEIsT0FBT0k7WUFDVDtRQUNBLEtBQUtIO1lBQW9CO2dCQUN2QixNQUFNLEVBQ0pRLFNBQVMsRUFDVEMsU0FBU0MsR0FBRyxFQUNaQyxNQUFNLEVBQ05DLFVBQVUsRUFDVkMsT0FBTyxFQUNSLEdBQUdQLE9BQU9RLE9BQU87Z0JBRWxCLE1BQU0sRUFBQ0MsWUFBWSxFQUFDLEdBQUdIO2dCQUN2QixJQUFJSSxXQUFXWDtnQkFFZiwyQ0FBMkM7Z0JBQzNDLElBQUlZLElBQUFBLFdBQUssRUFBQ0QsVUFBVTtvQkFBQ1I7b0JBQVdFO2lCQUFJLE1BQU1BLEtBQUs7b0JBQzdDTSxXQUFXaEMsbUJBQ1RnQyxVQUNBTixLQUNBRyxTQUNBTCxXQUNBSTtnQkFFSjtnQkFFQSxxQ0FBcUM7Z0JBQ3JDLE9BQU8xQixpQkFDTDhCLFVBQ0FSLFdBQ0FPLGNBQ0FKLFFBQ0FDO1lBRUo7UUFDQSxLQUFLWDtZQUEyQjtnQkFDOUIsTUFBTSxFQUFDTyxTQUFTLEVBQUVPLFlBQVksRUFBRUcsT0FBTyxFQUFFTixVQUFVLEVBQUMsR0FBR04sT0FBT1EsT0FBTztnQkFDckUsT0FBTzVCLGlCQUNMbUIsT0FDQUcsV0FDQU8sY0FDQUcsU0FDQU47WUFFSjtRQUNBO1lBQVM7Z0JBQ1AsT0FBT1A7WUFDVDtJQUNGO0FBQ0Y7QUFFTyxTQUFTckIsbUJBQ2RxQixLQUFvQixFQUNwQkssR0FBWSxFQUNaRyxPQUFpQixFQUNqQkwsU0FBaUIsRUFDakJJLFVBRUM7SUFFRCxNQUFNTyxRQUNKTixZQUFZekIsZUFDUjZCLElBQUFBLFdBQUssRUFBQ0wsWUFBWTtRQUFDO1FBQVU7UUFBVTtLQUFXLElBQ2xEO0lBQ04sT0FBT1EsSUFBQUEsYUFBTyxFQUFDZixPQUFPO1FBQUNHO0tBQVUsRUFBRTtRQUNqQ2EsSUFBSWI7UUFDSkU7UUFDQVM7UUFDQU47SUFDRjtBQUNGO0FBRU8sU0FBUzNCLGlCQUNkbUIsS0FBb0IsRUFDcEJHLFNBQWlCLEVBQ2pCTyxZQUFvQixFQUNwQk8sV0FBd0IsRUFDeEJWLFVBQTRCO0lBRTVCLE1BQU1XLFFBQVFDLFVBQVVaO0lBQ3hCLE1BQU1hLFlBQVk7UUFBQ2pCO1FBQVdKO1FBQVVXO0tBQWE7SUFDckQsT0FBT0ssSUFBQUEsYUFBTyxFQUFDZixPQUFPb0IsV0FBV0gsYUFBYUM7QUFDaEQ7QUFFQSxNQUFNRyxpQkFBaUI7SUFDckI7UUFBQ3BDO1FBQWdCSTtLQUFjO0lBQy9CO1FBQUNIO1FBQWdCSTtLQUFjO0lBQy9CO1FBQUNIO1FBQWdCSTtLQUFjO0lBQy9CO1FBQUNIO1FBQWNJO0tBQVk7Q0FDNUI7QUFFRCxTQUFTMkIsVUFBVVosVUFBNEI7SUFDN0MsTUFBTSxFQUFDZSxNQUFNLEVBQUMsR0FBR2Y7SUFDakIsT0FBT2MsZUFBZUUsTUFBTSxDQUFzQixDQUFDQyxRQUFRQztRQUN6RCxNQUFNQyxXQUFXRCxJQUFJLENBQUMsRUFBRTtRQUN4QixNQUFNRSxVQUFVRixJQUFJLENBQUMsRUFBRTtRQUN2QixnRkFBZ0Y7UUFDaEYsTUFBTUcsY0FBY04sTUFBTSxDQUFDSSxTQUFTO1FBQ3BDLGdGQUFnRjtRQUNoRixNQUFNRyxhQUFhUCxNQUFNLENBQUNLLFFBQVE7UUFDbEMsSUFBSUMsZUFBZSxRQUFRQyxjQUFjLE1BQU07WUFDN0MsZ0ZBQWdGO1lBQ2hGTCxNQUFNLENBQUNHLFFBQVEsR0FBR0U7UUFDcEI7UUFDQSxPQUFPTDtJQUNULEdBQUcsQ0FBQztBQUNOIn0=

}),

}]);