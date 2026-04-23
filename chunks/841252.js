t.d(n, { A: () => u });
var a = t(627968),
    s = t(64700),
    i = t(503698),
    l = t.n(i),
    r = t(834730),
    c = t(224850),
    o = t(778712),
    _ = t(985018),
    d = t(677865);
function u(e) {
    let { affinities: n, className: t } = e,
        i = s.useMemo(() => {
            if (n.length > 1) {
                var e;
                return _.intl.formatToPlainString(_.t.HaVk0X, {
                    username: null != (e = n[0]).globalName ? e.globalName : e.username,
                    numFriends: n.length - 1,
                });
            }
            return "";
        }, [n]);
    if (n.length <= 1) return null;
    let u = n.map((e, t) => (0, a.jsx)(c.n, { affinity: e, applyMask: t !== n.length - 1, size: o._3.SIZE_20 }, e.id));
    return (0, a.jsxs)("div", {
        className: l()(d.kL, t),
        children: [
            (0, a.jsx)("div", { className: d.zc, children: u }),
            (0, a.jsx)("div", {
                className: d.FS,
                children: (0, a.jsx)(r.E, { variant: "text-sm/medium", children: i }),
            }),
        ],
    });
}
