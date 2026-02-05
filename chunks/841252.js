"use strict";
n.d(t, { A: () => _ });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(158954),
    l = n(224850),
    u = n(778712),
    c = n(985018),
    d = n(353074);
function _(e) {
    let { affinities: t, className: n } = e,
        a = (e) => (null != e.globalName ? e.globalName : e.username),
        _ = i.useMemo(
            () =>
                t.length > 1
                    ? c.intl.formatToPlainString(c.t.HaVk0X, { username: a(t[0]), numFriends: t.length - 1 })
                    : "",
            [t],
        );
    if (t.length <= 1) return null;
    let f = t.map((e, n) => (0, r.jsx)(l.n, { affinity: e, applyMask: n !== t.length - 1, size: u._3.SIZE_20 }, e.id));
    return (0, r.jsxs)("div", {
        className: s()(d.kL, n),
        children: [
            (0, r.jsx)("div", { className: d.zc, children: f }),
            (0, r.jsx)("div", {
                className: d.FS,
                children: (0, r.jsx)(o.EYj, { variant: "text-sm/medium", children: _ }),
            }),
        ],
    });
}
