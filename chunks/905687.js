i.d(l, { default: () => d });
var s = i(255367),
    t = i(73800),
    e = i(481060),
    r = i(239091),
    u = i(299206),
    o = i(388032);
function d(n) {
    let { id: l, role: i, handleDeletePermission: d } = n,
        a = (0, u.Z)({
            id: l,
            label: null == i ? o.intl.string(o.t['/AXYnJ']) : o.intl.string(o.t.sMsaLi)
        });
    return (
        t.useEffect(() => {
            null == d && null == a && (0, r.Zy)();
        }, [a, d]),
        (0, s.jsxs)(e.v2r, {
            navId: null == i ? 'member-permissions-menu' : 'role-permissions-menu',
            'aria-label': null == i ? o.intl.string(o.t.pJMip6) : o.intl.string(o.t.ltedOj),
            onClose: r.Zy,
            onSelect: void 0,
            children: [
                null != d &&
                    (0, s.jsx)(e.kSQ, {
                        children: (0, s.jsx)(e.sNh, {
                            id: 'remove-permission',
                            color: 'danger',
                            label: null == i ? o.intl.string(o.t.hXfRwM) : o.intl.string(o.t['T+3Adn']),
                            icon: e.XHJ,
                            action: d
                        })
                    }),
                null != a && (0, s.jsx)(e.kSQ, { children: a })
            ]
        })
    );
}
