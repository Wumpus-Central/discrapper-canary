i.r(s);
var a = i(783285),
    c = i(768611),
    e = i(200503),
    n = i(628926),
    h = i(242268),
    r = i(612346),
    d = i(918676),
    l = i(533903),
    u = i(669360),
    o = ({ onFinish: t }) => {
        let { t: s } = (0, a.n)(),
            [i, n] = (0, e.u)(() => (0, u.createWatchlistManager)());
        return ((0, c._)(() => {
            n.load();
        }, [n]),
        (0, e.c)({ status: "finished" === i.status ? "finished" : "loading", onFinish: t }),
        "success" === i.status)
            ? (0, c.v)(l.t, { variant: "success", icon: (0, c.v)(r.t, { size: 64 }), title: s("watchList.complete") })
            : (0, c.v)(l.t, {
                  variant: "loading",
                  icon: (0, c.v)(h.t, { size: 64 }),
                  title: s("watchList.processing"),
                  subtitle: s("watchList.wontTake"),
              });
    },
    p = ({ onFinish: t }) => (0, c.v)(n.t, { children: (0, c.v)(o, { onFinish: t }) });
((0, d.t)(p, "incode-watchlist"), i.d(s, {}, { Watchlist: p }));
