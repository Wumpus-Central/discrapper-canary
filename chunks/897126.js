s.d(i, { default: () => d });
var n = s(627968),
    a = s(64700),
    e = s(189213),
    c = s(231723),
    l = s(289873),
    r = s(375708),
    u = s(812560);
let d = function (t) {
    let { transitionState: i, processFiles: s, onClose: d } = t;
    return (
        a.useEffect(() => {
            !(async function () {
                i === c.ip.ENTERED && (await s(), d());
            })();
        }, [d, s, i]),
        (0, n.jsx)(e.Modal, {
            title: r.intl.string(r.t["B/HSDd"]),
            subtitle: r.intl.string(r.t.k7OALr),
            actions: void 0,
            onClose: d,
            transitionState: i,
            children: (0, n.jsx)(l.y, { className: u.u }),
        })
    );
};
