"use strict";
n.d(t, { L$: () => c, NP: () => s, Qq: () => d }), n(323874), n(14289), n(35956);
var a = n(562465),
    l = n(73153),
    i = n(198982),
    r = n(652215);
let s = async (e) => {
        try {
            let t = (
                (await a.Bo.get({ url: r.Rsh.SIMILAR_GAMES(e), rejectWithError: !1 })).body.similar_games ?? []
            ).filter((t) => t !== e);
            l.h.dispatch({ type: "GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS", applicationId: e, games: t });
        } catch (e) {
            throw new i.LG(e);
        }
    },
    c = (e) => o(e, { utm_source: "discord" }),
    o = (e, t) => {
        try {
            let n = new URL(e, window.location.origin);
            return (
                Object.entries(t).forEach((e) => {
                    let [t, a] = e;
                    n.searchParams.set(t, a);
                }),
                n.toString()
            );
        } catch {
            let [n, a] = e.split("#");
            try {
                let e = new URL(n, window.location.origin);
                return (
                    Object.entries(t).forEach((t) => {
                        let [n, a] = t;
                        e.searchParams.set(n, a);
                    }),
                    null != a ? `${e.toString()}#${a}` : e.toString()
                );
            } catch {
                let n = e.includes("?"),
                    a = Object.entries(t)
                        .map((e) => {
                            let [t, n] = e;
                            return `${encodeURIComponent(t)}=${encodeURIComponent(n)}`;
                        })
                        .join("&");
                return `${e}${n ? "&" : "?"}${a}`;
            }
        }
    };
function d(e, t) {
    if (null == e) return null;
    let n = c(e),
        a = (function (e) {
            try {
                let t = new URL(e);
                if ("store.steampowered.com" !== t.hostname) return null;
                let n = t.pathname.match(/^\/app\/(\d+)(\/|$)/);
                if (null != n) return `steam://store/${n[1]}`;
            } catch {}
            return null;
        })(e);
    return t ? (a ?? n) : n;
}
