i.d(l, { default: () => d });
var s = i(54381),
    t = i(473749),
    e = i(481060),
    r = i(239091),
    u = i(299206),
    o = i(388032);
function d(n) {
    let { id: l, role: i, handleDeletePermission: d } = n,
        a = (0, u.Z)({
            id: l,
            label: null == i ? o.intl.string(o.t["/AXYnE"]) : o.intl.string(o.t.sMsaLg),
        });
    return (
        t.useEffect(() => {
            null == d && null == a && (0, r.Zy)();
        }, [a, d]),
        (0, s.jsxs)(e.v2r, {
            navId: null == i ? "member-permissions-menu" : "role-permissions-menu",
            "aria-label": null == i ? o.intl.string(o.t.pJMipx) : o.intl.string(o.t.ltedOh),
            onClose: r.Zy,
            onSelect: void 0,
            children: [
                null != d &&
                    (0, s.jsx)(e.kSQ, {
                        children: (0, s.jsx)(e.sNh, {
                            id: "remove-permission",
                            color: "danger",
                            label: null == i ? o.intl.string(o.t.hXfRwD) : o.intl.string(o.t["T+3Adg"]),
                            icon: e.XHJ,
                            action: d,
                        }),
                    }),
                null != a && (0, s.jsx)(e.kSQ, { children: a }),
            ],
        })
    );
}
