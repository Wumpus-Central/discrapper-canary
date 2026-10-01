n.d(t, { A: () => g });
var i = n(636537),
    l = n(73153),
    s = n(287809),
    r = n(38405),
    d = n(646976),
    u = n(652215);
let g = {
    setPendingWidgets(e) {
        l.h.dispatch({ type: "WIDGET_PENDING_SET", widgets: e });
    },
    async savePendingWidgets(e) {
        let t = s.default.getCurrentUser()?.id;
        if (null == t) return;
        l.h.dispatch({ type: "WIDGET_PENDING_SAVE_START" });
        let n = e.map((e) => e.toSubmission());
        try {
            let e = await i.Bo.put({
                url: u.Rsh.USER_PROFILE_WIDGETS,
                body: { widgets: n },
                oldFormErrors: !0,
                rejectWithError: !0,
            });
            return (l.h.dispatch({ type: "WIDGET_PENDING_SAVE_SUCCESS", userId: t, widgets: e.body.widgets }), e.body);
        } catch (e) {
            throw (l.h.dispatch({ type: "WIDGET_PENDING_SAVE_FAILURE" }), e);
        }
    },
    clearPendingWidgets() {
        l.h.dispatch({ type: "WIDGET_PENDING_CLEAR" });
    },
    async uploadWidgetAsset(e) {
        let { upload_url: t, upload_filename: n } = (
                await i.Bo.post({
                    url: u.Rsh.USER_PROFILE_WIDGET_ASSET_UPLOAD,
                    body: { filename: e.name, file_size: e.size },
                    rejectWithError: !0,
                })
            ).body,
            l = await fetch(t, {
                method: "PUT",
                body: e,
                headers: { "Content-Type": "" !== e.type ? e.type : "application/octet-stream" },
            });
        if (!l.ok) throw Error(`Failed to upload widget asset: ${l.status}`);
        return n;
    },
    async uploadWidgetClip(e) {
        let { onProgress: t, signal: n } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            { upload_url: l, upload_filename: s } = (
                await i.Bo.post({
                    url: u.Rsh.USER_PROFILE_WIDGET_CLIP_UPLOAD,
                    body: { file_size: e.size },
                    rejectWithError: !0,
                })
            ).body;
        return (
            await i.Bo.put({
                url: l,
                body: e,
                headers: { "Content-Type": d.$S },
                onRequestProgress: (e) => {
                    "upload" === e.direction && e.total > 0 && t?.(e.loaded / e.total);
                },
                signal: n,
                rejectWithError: !0,
            }),
            s
        );
    },
    async fetchSuggestedGames() {
        l.h.dispatch({ type: "WIDGET_SUGGESTED_FETCH_START" });
        try {
            let e = await i.Bo.get({ url: u.Rsh.USER_PROFILE_SUGGESTED_GAMES, rejectWithError: !0 });
            ((e.body?.suggested_games == null || e.body?.suggested_wishlist_games == null) &&
                r.A.captureMessage("Suggested games or wishlist games not found"),
                l.h.dispatch({
                    type: "WIDGET_SUGGESTED_FETCH_SUCCESS",
                    suggestedGamesIds: e.body?.suggested_games ?? [],
                    suggestedWishlistGamesIds: e.body?.suggested_wishlist_games ?? [],
                }));
        } catch (e) {
            throw (l.h.dispatch({ type: "WIDGET_SUGGESTED_FETCH_FAILURE" }), r.A.captureException(e), e);
        }
    },
    removeGameFromSuggestedGames(e) {
        l.h.dispatch({ type: "WIDGET_SUGGESTED_REMOVE_GAME", applicationId: e });
    },
};
