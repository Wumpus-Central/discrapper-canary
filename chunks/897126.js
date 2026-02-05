i.d(s, { default: () => p });
var e = i(627968),
    a = i(64700),
    n = i(732955),
    r = i(397927),
    c = i(985018),
    l = i(720188);
let p = (t) => {
    let { transitionState: s, processFiles: i, onClose: p } = t;
    return (
        a.useEffect(() => {
            (async () => {
                s === r.ip4.ENTERED && (await i(), p());
            })();
        }, [p, i, s]),
        (0, e.jsx)(n.aFV, {
            title: c.intl.string(c.t["B/HSDd"]),
            subtitle: c.intl.string(c.t.k7OALr),
            actions: void 0,
            onClose: p,
            transitionState: s,
            children: (0, e.jsx)(r.y$y, { className: l.u }),
        })
    );
};
