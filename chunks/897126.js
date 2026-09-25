s.d(i, { default: () => d });
var n = s(477900),
    a = s(582128),
    e = s(189213),
    c = s(231723),
    r = s(289873),
    u = s(375708),
    l = s(576370);
let d = function (t) {
    let { transitionState: i, processFiles: s, onClose: d } = t;
    return (
        a.useEffect(() => {
            !(async function () {
                i === c.ip.ENTERED && (await s(), d());
            })();
        }, [d, s, i]),
        (0, n.jsx)(e.a, {
            title: u.intl.string(u.t["B/HSDd"]),
            subtitle: u.intl.string(u.t.k7OALr),
            actions: void 0,
            onClose: d,
            transitionState: i,
            children: (0, n.jsx)(r.y, { className: l.u }),
        })
    );
};
