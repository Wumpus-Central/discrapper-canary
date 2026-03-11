n.d(t, { A: () => _ });
var i = n(627968),
    l = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(158954),
    o = n(224850),
    c = n(778712),
    d = n(985018),
    u = n(353074);
function _(e) {
    let { affinities: t, className: n } = e,
        r = l.useMemo(() => {
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
    let _ = t.map((e, n) => (0, i.jsx)(o.n, { affinity: e, applyMask: n !== t.length - 1, size: c._3.SIZE_20 }, e.id));
    return (0, i.jsxs)("div", {
        className: s()(u.kL, n),
        children: [
            (0, i.jsx)("div", { className: u.zc, children: _ }),
            (0, i.jsx)("div", {
                className: u.FS,
                children: (0, i.jsx)(a.EYj, { variant: "text-sm/medium", children: r }),
            }),
        ],
    });
}
