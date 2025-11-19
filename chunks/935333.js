s.d(n, { default: () => p });
var i = s(54381),
    e = s(473749),
    a = s(159691),
    r = s(481060),
    c = s(388032),
    l = s(149048);
let p = (t) => {
    let { transitionState: n, processFiles: s, onClose: p } = t;
    return (
        e.useEffect(() => {
            (async () => {
                n === r.Dvm.ENTERED && (await s(), p());
            })();
        }, [p, s, n]),
        (0, i.jsx)(a.u_l, {
            title: c.intl.string(c.t["B/HSDd"]),
            subtitle: c.intl.string(c.t.k7OALr),
            actions: void 0,
            onClose: p,
            transitionState: n,
            children: (0, i.jsx)(r.$jN, { className: l.spinner }),
        })
    );
};
