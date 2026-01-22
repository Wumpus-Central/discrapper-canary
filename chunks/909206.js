n.d(t, {
    MJ: () => s,
    _9: () => o,
    c2: () => i,
    ri: () => a,
});
var r = n(73153);

function i() {
    r.h.dispatch({
        type: "DEVELOPER_ACTIVITY_SHELF_TOGGLE_USE_ACTIVITY_URL_OVERRIDE",
    });
}

function a(e) {
    r.h.dispatch({
        type: "DEVELOPER_ACTIVITY_SHELF_SET_ACTIVITY_URL_OVERRIDE",
        activityUrlOverride: e,
    });
}

function s(e) {
    r.h.dispatch({
        type: "DEVELOPER_ACTIVITY_SHELF_MARK_ACTIVITY_USED",
        applicationId: e,
        timestamp: new Date().getTime(),
    });
}

function o(e) {
    r.h.dispatch({
        type: "DEVELOPER_ACTIVITY_SHELF_UPDATE_FILTER",
        filter: e,
    });
}
