n.d(t, {
    T: function () {
        return c;
    },
    Z: function () {
        return d;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(442837),
    s = n(481060),
    a = n(496675),
    o = n(388032);
function c(e, t, n) {
    let i = (0, l.e7)([a.Z], () => !a.Z.isRoleHigher(e, t, n), [e, t, n]);
    return r.useMemo(() => i && n.id === (null == t ? void 0 : t.id), [i, n, t]) ? o.intl.string(o.t.PQylOT) : i ? o.intl.string(o.t.UGIjx8) : null;
}
function d(e) {
    let { className: t, tooltipText: n, width: r = 16, height: l = 16 } = e;
    return (0, i.jsx)(s.Tooltip, {
        text: n,
        children: (e) =>
            (0, i.jsx)('div', {
                className: t,
                ...e,
                children: (0, i.jsx)(s.LockIcon, {
                    size: 'custom',
                    color: 'currentColor',
                    width: r,
                    height: l
                })
            })
    });
}
