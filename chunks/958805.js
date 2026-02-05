"use strict";
n.d(t, { A: () => d });
var r = n(562465),
    i = n(582754),
    a = n(73153),
    s = n(287809),
    o = n(203982),
    l = n(728458),
    u = n(652215),
    c = n(985018);
let d = {
    setPendingWidgets(e) {
        a.h.dispatch({ type: "WIDGET_PENDING_SET", widgets: e });
    },
    async savePendingWidgets(e) {
        let t = s.default.getCurrentUser()?.id;
        if (null == t) return;
        a.h.dispatch({ type: "WIDGET_PENDING_SAVE_START" });
        let n = e.map((e) => e.toSubmission());
        try {
            let e = await r.Bo.put({
                url: u.Rsh.USER_PROFILE_WIDGETS,
                body: { widgets: n },
                oldFormErrors: !0,
                rejectWithError: !0,
            });
            return a.h.dispatch({ type: "WIDGET_PENDING_SAVE_SUCCESS", userId: t, widgets: e.body.widgets }), e.body;
        } catch (e) {
            throw (a.h.dispatch({ type: "WIDGET_PENDING_SAVE_FAILURE" }), e);
        }
    },
    clearPendingWidgets() {
        a.h.dispatch({ type: "WIDGET_PENDING_CLEAR" });
    },
    async fetchSuggestedGames() {
        a.h.dispatch({ type: "WIDGET_SUGGESTED_FETCH_START" });
        try {
            let e = await r.Bo.get({ url: u.Rsh.USER_PROFILE_SUGGESTED_GAMES, rejectWithError: !0 });
            (e.body?.suggested_games == null || e.body?.suggested_wishlist_games == null) &&
                l.A.captureMessage("Suggested games or wishlist games not found"),
                a.h.dispatch({
                    type: "WIDGET_SUGGESTED_FETCH_SUCCESS",
                    suggestedGamesIds: e.body?.suggested_games ?? [],
                    suggestedWishlistGamesIds: e.body?.suggested_wishlist_games ?? [],
                });
        } catch (e) {
            throw (a.h.dispatch({ type: "WIDGET_SUGGESTED_FETCH_FAILURE" }), l.A.captureException(e), e);
        }
    },
    removeGameFromSuggestedGames(e) {
        a.h.dispatch({ type: "WIDGET_SUGGESTED_REMOVE_GAME", applicationId: e });
    },
    notifyUnsavedWidgets() {
        o._.dispatch(u.jej.SHAKE_PROFILE_MODAL),
            o._.dispatch(u.jej.EMPHASIZE_NOTICE),
            i.OR.announce(`${c.intl.string(c.t.GP7JLE)} ${c.intl.string(c.t.gKoO1D)}`);
    },
};
