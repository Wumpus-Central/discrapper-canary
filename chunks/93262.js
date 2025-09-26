n.d(t, { w: () => s });
var r = n(544891),
    i = n(570140),
    a = n(36982),
    o = n(981631);
function s() {
    a.Z.isFetching() ||
        (i.Z.dispatch({ type: "SAVED_CUSTOM_THEMES_FETCH_START" }),
        r.tn
            .get({
                url: o.ANM.USERS_ME_CUSTOM_THEMES,
                oldFormErrors: !0,
                rejectWithError: !0,
            })
            .then((e) => {
                var t, n;
                i.Z.dispatch({
                    type: "SAVED_CUSTOM_THEMES_FETCH_SUCCESS",
                    themes: null != (n = null == (t = e.body) ? void 0 : t.custom_themes) ? n : [],
                });
            })
            .catch((e) => {
                i.Z.dispatch({
                    type: "SAVED_CUSTOM_THEMES_FETCH_FAILURE",
                    error: e,
                });
            }));
}
