"use strict";
n.d(t, { L: () => c, N: () => s }), n(323874), n(14289), n(35956);
var i = n(562465),
    l = n(73153),
    a = n(198982),
    r = n(652215);
let s = async (e) => {
        try {
            let t = (
                (await i.Bo.get({ url: r.Rsh.SIMILAR_GAMES(e), rejectWithError: !1 })).body.similar_games ?? []
            ).filter((t) => t !== e);
            l.h.dispatch({ type: "GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS", applicationId: e, games: t });
        } catch (e) {
            throw new a.LG(e);
        }
    },
    c = (e) => o(e, { utm_source: "discord" }),
    o = (e, t) => {
        try {
            let n = new URL(e, window.location.origin);
            return (
                Object.entries(t).forEach((e) => {
                    let [t, i] = e;
                    n.searchParams.set(t, i);
                }),
                n.toString()
            );
        } catch {
            let [n, i] = e.split("#");
            try {
                let e = new URL(n, window.location.origin);
                return (
                    Object.entries(t).forEach((t) => {
                        let [n, i] = t;
                        e.searchParams.set(n, i);
                    }),
                    null != i ? `${e.toString()}#${i}` : e.toString()
                );
            } catch {
                let n = e.includes("?"),
                    i = Object.entries(t)
                        .map((e) => {
                            let [t, n] = e;
                            return `${encodeURIComponent(t)}=${encodeURIComponent(n)}`;
                        })
                        .join("&");
                return `${e}${n ? "&" : "?"}${i}`;
            }
        }
    };
