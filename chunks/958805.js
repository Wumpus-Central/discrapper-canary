"use strict";
n.d(t, { A: () => d });
var i = n(636537),
    r = n(228366),
    a = n(287809),
    s = n(38405),
    l = n(646976),
    o = n(652215);
let d = {
    setPendingWidgets(e) {
        r.h.dispatch({ type: "WIDGET_PENDING_SET", widgets: e });
    },
    async savePendingWidgets(e) {
        let t = a.default.getCurrentUser()?.id;
        if (null == t) return;
        r.h.dispatch({ type: "WIDGET_PENDING_SAVE_START" });
        let n = e.map((e) => e.toSubmission());
        try {
            let e = await i.Bo.put({
                url: o.Rsh.USER_PROFILE_WIDGETS,
                body: { widgets: n },
                oldFormErrors: !0,
                rejectWithError: !0,
            });
            return r.h.dispatch({ type: "WIDGET_PENDING_SAVE_SUCCESS", userId: t, widgets: e.body.widgets }), e.body;
        } catch (e) {
            throw (r.h.dispatch({ type: "WIDGET_PENDING_SAVE_FAILURE" }), e);
        }
    },
    clearPendingWidgets() {
        r.h.dispatch({ type: "WIDGET_PENDING_CLEAR" });
    },
    async uploadWidgetAsset(e) {
        let { upload_url: t, upload_filename: n } = (
                await i.Bo.post({
                    url: o.Rsh.USER_PROFILE_WIDGET_ASSET_UPLOAD,
                    body: { filename: e.name, file_size: e.size },
                    rejectWithError: !0,
                })
            ).body,
            r = await fetch(t, {
                method: "PUT",
                body: e,
                headers: { "Content-Type": "" !== e.type ? e.type : "application/octet-stream" },
            });
        if (!r.ok) throw Error(`Failed to upload widget asset: ${r.status}`);
        return n;
    },
    async uploadWidgetClip(e) {
        let { onProgress: t, signal: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            { upload_url: r, upload_filename: a } = (
                await i.Bo.post({
                    url: o.Rsh.USER_PROFILE_WIDGET_CLIP_UPLOAD,
                    body: { file_size: e.size },
                    rejectWithError: !0,
                })
            ).body;
        return (
            await i.Bo.put({
                url: r,
                body: e,
                headers: { "Content-Type": l.$ },
                onRequestProgress: (e) => {
                    "upload" === e.direction && e.total > 0 && t?.(e.loaded / e.total);
                },
                signal: n,
                rejectWithError: !0,
            }),
            a
        );
    },
    async fetchSuggestedGames() {
        r.h.dispatch({ type: "WIDGET_SUGGESTED_FETCH_START" });
        try {
            let e = await i.Bo.get({ url: o.Rsh.USER_PROFILE_SUGGESTED_GAMES, rejectWithError: !0 });
            (e.body?.suggested_games == null || e.body?.suggested_wishlist_games == null) &&
                s.A.captureMessage("Suggested games or wishlist games not found"),
                r.h.dispatch({
                    type: "WIDGET_SUGGESTED_FETCH_SUCCESS",
                    suggestedGamesIds: e.body?.suggested_games ?? [],
                    suggestedWishlistGamesIds: e.body?.suggested_wishlist_games ?? [],
                });
        } catch (e) {
            throw (r.h.dispatch({ type: "WIDGET_SUGGESTED_FETCH_FAILURE" }), s.A.captureException(e), e);
        }
    },
    removeGameFromSuggestedGames(e) {
        r.h.dispatch({ type: "WIDGET_SUGGESTED_REMOVE_GAME", applicationId: e });
    },
};
