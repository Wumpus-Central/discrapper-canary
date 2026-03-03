i.d(t, { L: () => o, N: () => r }), i(323874), i(14289), i(35956);
var n = i(562465),
    l = i(73153),
    a = i(198982),
    s = i(652215);
let r = async (e) => {
        try {
            let t = (
                (await n.Bo.get({ url: s.Rsh.SIMILAR_GAMES(e), rejectWithError: !1 })).body.similar_games ?? []
            ).filter((t) => t !== e);
            l.h.dispatch({ type: "GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS", applicationId: e, games: t });
        } catch (e) {
            throw new a.LG(e);
        }
    },
    o = (e) => c(e, { utm_source: "discord" }),
    c = (e, t) => {
        try {
            let i = new URL(e, window.location.origin);
            return (
                Object.entries(t).forEach((e) => {
                    let [t, n] = e;
                    i.searchParams.set(t, n);
                }),
                i.toString()
            );
        } catch {
            let [i, n] = e.split("#");
            try {
                let e = new URL(i, window.location.origin);
                return (
                    Object.entries(t).forEach((t) => {
                        let [i, n] = t;
                        e.searchParams.set(i, n);
                    }),
                    null != n ? `${e.toString()}#${n}` : e.toString()
                );
            } catch {
                let i = e.includes("?"),
                    n = Object.entries(t)
                        .map((e) => {
                            let [t, i] = e;
                            return `${encodeURIComponent(t)}=${encodeURIComponent(i)}`;
                        })
                        .join("&");
                return `${e}${i ? "&" : "?"}${n}`;
            }
        }
    };
