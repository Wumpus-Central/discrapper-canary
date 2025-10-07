n.d(i, { default: () => p });
var s = n(951288),
    e = n(647438),
    a = n(159691),
    r = n(481060),
    c = n(388032),
    l = n(370213);
let p = (t) => {
    let { transitionState: i, processFiles: n, onClose: p } = t;
    return (
        e.useEffect(() => {
            (async () => {
                i === r.Dvm.ENTERED && (await n(), p());
            })();
        }, [p, n, i]),
        (0, s.jsx)(a.u_l, {
            title: c.intl.string(c.t["B/HSDQ"]),
            subtitle: c.intl.string(c.t.k7OALi),
            actions: void 0,
            onClose: p,
            transitionState: i,
            children: (0, s.jsx)(r.$jN, { className: l.spinner }),
        })
    );
};
