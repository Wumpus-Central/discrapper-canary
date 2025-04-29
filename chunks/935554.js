r.d(t, { Z: () => b });
var n = r(255367);
r(73800);
var i = r(730647),
    o = r(584825),
    l = r(290348),
    s = r(934826),
    c = r(330181),
    a = r(939225),
    d = r(36246),
    u = r(305342),
    C = r(981631),
    p = r(603598);
function f(e) {
    var t;
    let { guildId: r } = e,
        i = (0, o.GG)(r)[0],
        { editStateIds: f } = l.B7(null != (t = null == i ? void 0 : i.id) ? t : null, r),
        { activeSubscription: b } = (0, s.Z)(null == i ? void 0 : i.id);
    return (0, n.jsxs)('div', {
        className: p.container,
        children: [
            null != i
                ? (0, n.jsx)(c.Z, {
                      groupListingId: i.id,
                      subscription: b
                  })
                : null,
            (0, n.jsx)(a.Z, { subscription: b }),
            (0, n.jsx)(d.Z, {
                guildId: r,
                children: f.map((e) => {
                    var t;
                    return (0, n.jsx)(
                        u.Z,
                        {
                            guildId: r,
                            groupListingId: null != (t = null == i ? void 0 : i.id) ? t : '',
                            listingId: e,
                            analyticsLocation: C.Sbl.ROLE_SUBSCRIPTIONS_TAB
                        },
                        e
                    );
                })
            })
        ]
    });
}
function b(e) {
    let { guildId: t } = e;
    return (0, n.jsx)(i.l, {
        guildId: t,
        refetchOnMount: !0,
        children: (0, n.jsx)(f, { guildId: t })
    });
}
