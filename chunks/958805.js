n.d(t, {
    A: () => d,
});
var r = n(562465),
    i = n(582754),
    a = n(73153),
    s = n(287809),
    o = n(203982),
    l = n(728458),
    c = n(652215),
    u = n(985018);
let d = {
    setPendingWidgets(e) {
        a.h.dispatch({
            type: "WIDGET_PENDING_SET",
            widgets: e,
        });
    },
    async savePendingWidgets(e) {
        var t;
        let n = null == (t = s.default.getCurrentUser()) ? void 0 : t.id;
        if (null == n) return;
        a.h.dispatch({
            type: "WIDGET_PENDING_SAVE_START",
        });
        let i = e.map((e) => e.toSubmission());
        try {
            let e = await r.Bo.put({
                url: c.Rsh.USER_PROFILE_WIDGETS,
                body: {
                    widgets: i,
                },
                oldFormErrors: !0,
                rejectWithError: !0,
            });
            return (
                a.h.dispatch({
                    type: "WIDGET_PENDING_SAVE_SUCCESS",
                    userId: n,
                    widgets: e.body.widgets,
                }),
                e.body
            );
        } catch (e) {
            throw (
                (a.h.dispatch({
                    type: "WIDGET_PENDING_SAVE_FAILURE",
                }),
                e)
            );
        }
    },
    clearPendingWidgets() {
        a.h.dispatch({
            type: "WIDGET_PENDING_CLEAR",
        });
    },
    async fetchSuggestedGames() {
        a.h.dispatch({
            type: "WIDGET_SUGGESTED_FETCH_START",
        });
        try {
            var e, t, n, i, s, o;
            let u = await r.Bo.get({
                url: c.Rsh.USER_PROFILE_SUGGESTED_GAMES,
                rejectWithError: !0,
            });
            ((null == (n = u.body) ? void 0 : n.suggested_games) == null ||
                (null == (i = u.body) ? void 0 : i.suggested_wishlist_games) == null) &&
                l.A.captureMessage("Suggested games or wishlist games not found"),
                a.h.dispatch({
                    type: "WIDGET_SUGGESTED_FETCH_SUCCESS",
                    suggestedGamesIds: null != (e = null == (s = u.body) ? void 0 : s.suggested_games) ? e : [],
                    suggestedWishlistGamesIds:
                        null != (t = null == (o = u.body) ? void 0 : o.suggested_wishlist_games) ? t : [],
                });
        } catch (e) {
            throw (
                (a.h.dispatch({
                    type: "WIDGET_SUGGESTED_FETCH_FAILURE",
                }),
                l.A.captureException(e),
                e)
            );
        }
    },
    removeGameFromSuggestedGames(e) {
        a.h.dispatch({
            type: "WIDGET_SUGGESTED_REMOVE_GAME",
            applicationId: e,
        });
    },
    notifyUnsavedWidgets() {
        o._.dispatch(c.jej.SHAKE_PROFILE_MODAL),
            o._.dispatch(c.jej.EMPHASIZE_NOTICE),
            i.OR.announce("".concat(u.intl.string(u.t.GP7JLE), " ").concat(u.intl.string(u.t.gKoO1D)));
    },
};
