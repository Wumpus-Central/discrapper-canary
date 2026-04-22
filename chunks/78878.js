"use strict";
n.d(t, { A: () => a }), n(321073);
var r = n(439372),
    i = n(635731);
class s extends r.A {
    _recentActions = new i.A(1e3);
    trackAction = (e) => {
        let { type: t } = e;
        this._recentActions.push(t);
    };
    getRecentActions = (e) => this._recentActions.slice(-e).reverse();
    handlePostConnectionOpen = () => {
        this._recentActions = new i.A(1e3);
    };
    handleTrackAction = (e) => {
        this.trackAction(e);
    };
    actions = {
        POST_CONNECTION_OPEN: this.handlePostConnectionOpen,
        OVERLAY_SET_NOTIFICATION_DISABLED_SETTING: this.handleTrackAction,
        LAYOUT_SET_PINNED: this.handleTrackAction,
        OVERLAY_UPDATE_OVERLAY_STATE: this.handleTrackAction,
        OVERLAY_SET_LIMITED_INTERACTION_OVERRIDE: this.handleTrackAction,
        OVERLAY_CRASHED: this.handleTrackAction,
        OVERLAY_RELOAD: this.handleTrackAction,
        OVERLAY_FOCUSED: this.handleTrackAction,
        OVERLAY_SUCCESSFULLY_SHOWN: this.handleTrackAction,
        OVERLAY_SET_ENABLED: this.handleTrackAction,
        OVERLAY_RENDER_DEBUG_MODE: this.handleTrackAction,
        OVERLAY_RENDER_DEBUG_CLEAR_TRACKED_PIDS: this.handleTrackAction,
        OVERLAY_UPDATE_OVERLAY_METHOD: this.handleTrackAction,
        OVERLAY_OOP_UI_INITIALIZED: this.handleTrackAction,
        OVERLAY_OOP_UI_SHOW_INACTIVE_SUCCESS: this.handleTrackAction,
        OVERLAY_OOP_POPOUT_INITIALIZATION_STAGE_CHANGED: this.handleTrackAction,
        OVERLAY_UI_FOCUSED_PID: this.handleTrackAction,
        OVERLAY_V3_PRE_CREATE_POPOUT: this.handleTrackAction,
        OVERLAY_V3_POST_CREATE_POPOUT: this.handleTrackAction,
        OVERLAY_V3_CREATE_WINDOW_HANDLE_SUCCESS: this.handleTrackAction,
        OVERLAY_V3_WINDOW_CREATION_FAILURE: this.handleTrackAction,
        OVERLAY_V3_LOAD_NATIVE_MODULE_SUCCESS: this.handleTrackAction,
        OVERLAY_V3_LOAD_NATIVE_MODULE_FAILED: this.handleTrackAction,
        OVERLAY_V3_NATIVE_REFRESH_HOST_WINDOW: this.handleTrackAction,
        OVERLAY_V3_NATIVE_DESTROY_HOST_WINDOW: this.handleTrackAction,
        OVERLAY_SET_CLICK_ZONES: this.handleTrackAction,
        OVERLAY_SET_INPUT_LOCKED: this.handleTrackAction,
    };
}
let a = new s();
