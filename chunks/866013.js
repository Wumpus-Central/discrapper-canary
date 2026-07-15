i.d(e, { Antifraud: () => h });
var t = i(287822),
    d = i(748922),
    n = i(898159),
    s = i(211396),
    c = i(296767),
    r = i(995605),
    u = ({ manager: a, onFinish: e }) => {
        let [i, n] = (0, d.u)(() => a ?? (0, r.g)(), { manageLifecycle: !a });
        return (
            (0, t._)(() => {
                a || n.load();
            }, [n, a]),
            (0, d.c)({ status: "finished" === i.status ? "finished" : "loading", onFinish: e }),
            (0, t.v)(s.t, { fullScreen: !0 })
        );
    },
    h = ({ manager: a, onFinish: e }) => (0, t.v)(n.t, { children: (0, t.v)(u, { manager: a, onFinish: e }) });
(0, c.t)(h, "incode-antifraud");
