i.d(s, { Watchlist: () => p });
var a = i(689097),
    c = i(382591),
    e = i(52891),
    n = i(55586),
    h = i(931320),
    d = i(701798),
    u = i(230104),
    l = i(799035),
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
