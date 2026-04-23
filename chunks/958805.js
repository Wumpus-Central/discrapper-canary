"use strict";
n.d(t, { A: () => l });
var r = n(562465),
    i = n(73153),
    s = n(287809),
    a = n(728458),
    o = n(652215);
let l = {
    setPendingWidgets(e) {
        i.h.dispatch({ type: "WIDGET_PENDING_SET", widgets: e });
    },
    async savePendingWidgets(e) {
        let t = s.default.getCurrentUser()?.id;
        if (null == t) return;
        i.h.dispatch({ type: "WIDGET_PENDING_SAVE_START" });
        let n = e.map((e) => e.toSubmission());
        try {
            let e = await r.Bo.put({
                url: o.Rsh.USER_PROFILE_WIDGETS,
                body: { widgets: n },
                oldFormErrors: !0,
                rejectWithError: !0,
            });
            return i.h.dispatch({ type: "WIDGET_PENDING_SAVE_SUCCESS", userId: t, widgets: e.body.widgets }), e.body;
        } catch (e) {
            throw (i.h.dispatch({ type: "WIDGET_PENDING_SAVE_FAILURE" }), e);
        }
    },
    clearPendingWidgets() {
        i.h.dispatch({ type: "WIDGET_PENDING_CLEAR" });
    },
    async fetchSuggestedGames() {
        i.h.dispatch({ type: "WIDGET_SUGGESTED_FETCH_START" });
        try {
            let e = await r.Bo.get({ url: o.Rsh.USER_PROFILE_SUGGESTED_GAMES, rejectWithError: !0 });
            (e.body?.suggested_games == null || e.body?.suggested_wishlist_games == null) &&
                a.A.captureMessage("Suggested games or wishlist games not found"),
                i.h.dispatch({
                    type: "WIDGET_SUGGESTED_FETCH_SUCCESS",
                    suggestedGamesIds: e.body?.suggested_games ?? [],
                    suggestedWishlistGamesIds: e.body?.suggested_wishlist_games ?? [],
                });
        } catch (e) {
            throw (i.h.dispatch({ type: "WIDGET_SUGGESTED_FETCH_FAILURE" }), a.A.captureException(e), e);
        }
    },
    removeGameFromSuggestedGames(e) {
        i.h.dispatch({ type: "WIDGET_SUGGESTED_REMOVE_GAME", applicationId: e });
    },
};
