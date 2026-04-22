i.d(s, { default: () => p });
var e = i(627968),
    a = i(64700),
    n = i(189213),
    r = i(231723),
    l = i(289873),
    c = i(985018),
    d = i(106531);
let p = (t) => {
    let { transitionState: s, processFiles: i, onClose: p } = t;
    return (
        a.useEffect(() => {
            (async () => {
                s === r.ip.ENTERED && (await i(), p());
            })();
        }, [p, i, s]),
        (0, e.jsx)(n.Modal, {
            title: c.intl.string(c.t["B/HSDd"]),
            subtitle: c.intl.string(c.t.k7OALr),
            actions: void 0,
            onClose: p,
            transitionState: s,
            children: (0, e.jsx)(l.y, { className: d.u }),
        })
    );
};
