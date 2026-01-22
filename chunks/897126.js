i.d(s, { default: () => u });
var a = i(627968),
    e = i(64700),
    n = i(732955),
    c = i(397927),
    r = i(985018),
    l = i(720188);
let u = (t) => {
    let { transitionState: s, processFiles: i, onClose: u } = t;
    return (
        e.useEffect(() => {
            (async () => {
                s === c.ip4.ENTERED && (await i(), u());
            })();
        }, [u, i, s]),
        (0, a.jsx)(n.aFV, {
            title: r.intl.string(r.t["B/HSDd"]),
            subtitle: r.intl.string(r.t.k7OALr),
            actions: void 0,
            onClose: u,
            transitionState: s,
            children: (0, a.jsx)(c.y$y, { className: l.u }),
        })
    );
};
