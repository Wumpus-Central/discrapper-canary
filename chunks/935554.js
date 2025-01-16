n.d(t, {
    Z: function () {
        return p;
    }
});
var r = n(200651);
n(192379);
var i = n(730647),
    s = n(584825),
    o = n(290348),
    l = n(934826),
    a = n(330181),
    c = n(939225),
    d = n(36246),
    C = n(305342),
    u = n(981631),
    x = n(417960);
function f(e) {
    var t;
    let { guildId: n } = e,
        i = (0, s.GG)(n)[0],
        { editStateIds: f } = o.B7(null !== (t = null == i ? void 0 : i.id) && void 0 !== t ? t : null, n),
        { activeSubscription: p } = (0, l.Z)(null == i ? void 0 : i.id);
    return (0, r.jsxs)('div', {
        className: x.container,
        children: [
            null != i
                ? (0, r.jsx)(a.Z, {
                      groupListingId: i.id,
                      subscription: p
                  })
                : null,
            (0, r.jsx)(c.Z, { subscription: p }),
            (0, r.jsx)(d.Z, {
                guildId: n,
                children: f.map((e) => {
                    var t;
                    return (0, r.jsx)(
                        C.Z,
                        {
                            guildId: n,
                            groupListingId: null !== (t = null == i ? void 0 : i.id) && void 0 !== t ? t : '',
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
function p(e) {
    let { guildId: t } = e;
    return (0, r.jsx)(i.l, {
        guildId: t,
        refetchOnMount: !0,
        children: (0, r.jsx)(f, { guildId: t })
    });
}
