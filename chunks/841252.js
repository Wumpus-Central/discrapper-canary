n.d(t, { A: () => u });
var a = n(627968),
    i = n(64700),
    l = n(503698),
    r = n.n(l),
    s = n(834730),
    o = n(224850),
    c = n(778712),
    d = n(985018),
    _ = n(677865);
function u(e) {
    let { affinities: t, className: n } = e,
        l = i.useMemo(() => {
            if (t.length > 1) {
                var e;
                return d.intl.formatToPlainString(d.t.HaVk0X, {
                    username: null != (e = t[0]).globalName ? e.globalName : e.username,
                    numFriends: t.length - 1,
                });
            }
            return "";
        }, [t]);
    if (t.length <= 1) return null;
    let u = t.map((e, n) => (0, a.jsx)(o.n, { affinity: e, applyMask: n !== t.length - 1, size: c._3.SIZE_20 }, e.id));
    return (0, a.jsxs)("div", {
        className: r()(_.kL, n),
        children: [
            (0, a.jsx)("div", { className: _.zc, children: u }),
            (0, a.jsx)("div", {
                className: _.FS,
                children: (0, a.jsx)(s.E, { variant: "text-sm/medium", children: l }),
            }),
        ],
    });
}
