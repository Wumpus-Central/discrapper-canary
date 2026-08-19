"use strict";
n.d(t, { MJ: () => s, _9: () => l, c2: () => r, ri: () => a });
var i = n(228366);
function r() {
    i.h.dispatch({ type: "DEVELOPER_ACTIVITY_SHELF_TOGGLE_USE_ACTIVITY_URL_OVERRIDE" });
}
function a(e) {
    i.h.dispatch({ type: "DEVELOPER_ACTIVITY_SHELF_SET_ACTIVITY_URL_OVERRIDE", activityUrlOverride: e });
}
function s(e) {
    i.h.dispatch({
        type: "DEVELOPER_ACTIVITY_SHELF_MARK_ACTIVITY_USED",
        applicationId: e,
        timestamp: new Date().getTime(),
    });
}
function l(e) {
    i.h.dispatch({ type: "DEVELOPER_ACTIVITY_SHELF_UPDATE_FILTER", filter: e });
}
