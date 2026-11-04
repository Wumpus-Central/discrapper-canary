var i = n(73153);
n.d(
    t,
    {},
    {
        MJ: function (e) {
            i.h.dispatch({
                type: "DEVELOPER_ACTIVITY_SHELF_MARK_ACTIVITY_USED",
                applicationId: e,
                timestamp: new Date().getTime(),
            });
        },
        _9: function (e) {
            i.h.dispatch({ type: "DEVELOPER_ACTIVITY_SHELF_UPDATE_FILTER", filter: e });
        },
        c2: function () {
            i.h.dispatch({ type: "DEVELOPER_ACTIVITY_SHELF_TOGGLE_USE_ACTIVITY_URL_OVERRIDE" });
        },
        ri: function (e) {
            i.h.dispatch({ type: "DEVELOPER_ACTIVITY_SHELF_SET_ACTIVITY_URL_OVERRIDE", activityUrlOverride: e });
        },
    },
);
