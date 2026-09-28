i.d(s, { Watchlist: () => p });
var a = i(783285),
    c = i(768611),
    e = i(200503),
    n = i(628926),
    h = i(242268),
    d = i(612346),
    u = i(918676),
    l = i(533903),
    o = i(730667),
    r = ({ onFinish: t }) => {
        let { t: s } = (0, a.n)(),
            [i, n] = (0, e.u)(() => (0, o.L)());
        return ((0, c._)(() => {
            n.load();
        }, [n]),
        (0, e.c)({ status: "finished" === i.status ? "finished" : "loading", onFinish: t }),
        "success" === i.status)
            ? (0, c.v)(l.t, { variant: "success", icon: (0, c.v)(d.t, { size: 64 }), title: s("watchList.complete") })
            : (0, c.v)(l.t, {
                  variant: "loading",
                  icon: (0, c.v)(h.t, { size: 64 }),
                  title: s("watchList.processing"),
                  subtitle: s("watchList.wontTake"),
              });
    },
    p = ({ onFinish: t }) => (0, c.v)(n.t, { children: (0, c.v)(r, { onFinish: t }) });
(0, u.t)(p, "incode-watchlist");
