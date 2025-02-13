n.d(t, { Z: () => h });
var i = n(200651);
n(192379);
var r = n(730647),
    s = n(584825),
    l = n(290348),
    o = n(934826),
    a = n(330181),
    c = n(939225),
    d = n(36246),
    C = n(305342),
    u = n(981631),
    x = n(575653);
function p(e) {
    var t;
    let { guildId: n } = e,
        r = (0, s.GG)(n)[0],
        { editStateIds: p } = l.B7(null !== (t = null == r ? void 0 : r.id) && void 0 !== t ? t : null, n),
        { activeSubscription: h } = (0, o.Z)(null == r ? void 0 : r.id);
    return (0, i.jsxs)('div', {
        className: x.container,
        children: [
            null != r
                ? (0, i.jsx)(a.Z, {
                      groupListingId: r.id,
                      subscription: h
                  })
                : null,
            (0, i.jsx)(c.Z, { subscription: h }),
            (0, i.jsx)(d.Z, {
                guildId: n,
                children: p.map((e) => {
                    var t;
                    return (0, i.jsx)(
                        C.Z,
                        {
                            guildId: n,
                            groupListingId: null !== (t = null == r ? void 0 : r.id) && void 0 !== t ? t : '',
                            listingId: e,
                            analyticsLocation: u.Sbl.ROLE_SUBSCRIPTIONS_TAB
                        },
                        e
                    );
                })
            })
        ]
    });
}
function h(e) {
    let { guildId: t } = e;
    return (0, i.jsx)(r.l, {
        guildId: t,
        refetchOnMount: !0,
        children: (0, i.jsx)(p, { guildId: t })
    });
}
