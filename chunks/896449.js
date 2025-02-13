n.d(t, { Z: () => p });
var l = n(200651),
    a = n(192379),
    i = n(481060),
    r = n(239091),
    o = n(299206),
    s = n(810568),
    c = n(168524),
    d = n(37258),
    u = n(26033),
    m = n(178762),
    x = n(388032),
    h = n(818998);
function p(e) {
    var t;
    let { user: n, guildId: p, channel: g, entry: v, onSelect: C, disableGameProfileLinks: j } = e,
        I = a.useContext(m.Ir),
        f = (0, d.Z)({
            userId: n.id,
            guildId: p,
            channelId: null == g ? void 0 : g.id,
            onAction: I
        }),
        P = (0, o.Z)({
            id: n.id,
            label: x.intl.string(x.t['/AXYnJ'])
        }),
        y = 'application_id' in v.extra ? v.extra.application_id : null,
        N = (0, o.Z)({
            id: y,
            label: x.intl.string(x.t['FfCL+/'])
        }),
        Z = (0, u.dX)(v),
        T = (0, c.Z)({
            location: 'ContentPopoutContextMenu',
            applicationId: Z && !0 !== j ? (null === (t = v.extra) || void 0 === t ? void 0 : t.application_id) : void 0,
            source: s.m1.ActivityCardContextMenu,
            trackEntryPointImpression: !0,
            sourceUserId: v.author_id
        });
    return (0, l.jsx)(i.yRy, {
        align: 'top',
        position: 'right',
        disablePointerEvents: !1,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, l.jsx)(i.v2r, {
                navId: 'content-inventory-context',
                onClose: () => {
                    (0, r.Zy)(), t();
                },
                'aria-label': x.intl.string(x.t.liqwPD),
                onSelect: C,
                children: (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsxs)(i.kSQ, {
                            children: [
                                f,
                                null != T &&
                                    (0, l.jsx)(i.sNh, {
                                        id: 'game-profile',
                                        label: x.intl.string(x.t.f7aVGh),
                                        action: (e) => {
                                            T(e), null == I || I();
                                        }
                                    })
                            ]
                        }),
                        (0, l.jsxs)(i.kSQ, {
                            children: [P, N]
                        })
                    ]
                })
            });
        },
        children: (e) =>
            (0, l.jsx)(i.ua7, {
                text: x.intl.string(x.t.UKOtz8),
                children: (t) =>
                    (0, l.jsx)(i.P3F, {
                        ...t,
                        className: h.menuIcon,
                        ...e,
                        children: (0, l.jsx)(i.xhG, {
                            color: 'currentColor',
                            size: 'custom',
                            width: 16,
                            height: 16
                        })
                    })
            })
    });
}
