s.d(n, { default: () => p });
var i = s(54381),
    e = s(473749),
    a = s(159691),
    c = s(481060),
    r = s(388032),
    l = s(502465);
let p = (t) => {
    let { transitionState: n, processFiles: s, onClose: p } = t;
    return (
        e.useEffect(() => {
            (async () => {
                n === c.Dvm.ENTERED && (await s(), p());
            })();
        }, [p, s, n]),
        (0, i.jsx)(a.u_l, {
            title: r.intl.string(r.t["B/HSDd"]),
            subtitle: r.intl.string(r.t.k7OALr),
            actions: void 0,
            onClose: p,
            transitionState: n,
            children: (0, i.jsx)(c.$jN, { className: l.spinner }),
        })
    );
};
