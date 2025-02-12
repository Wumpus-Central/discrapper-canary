n.d(t, { Z: () => x });
var l = n(200651);
n(192379);
var a = n(481060),
    i = n(239091),
    r = n(299206),
    o = n(810568),
    s = n(168524),
    c = n(37258),
    d = n(26033),
    u = n(388032),
    m = n(684331);
function x(e) {
    var t;
    let { user: n, guildId: x, channel: h, entry: p, onSelect: g, disableGameProfileLinks: v } = e,
        C = (0, c.Z)({
            userId: n.id,
            guildId: x,
            channelId: null == h ? void 0 : h.id
        }),
        j = (0, r.Z)({
            id: n.id,
            label: u.intl.string(u.t['/AXYnJ'])
        }),
        I = 'application_id' in p.extra ? p.extra.application_id : null,
        f = (0, r.Z)({
            id: I,
            label: u.intl.string(u.t['FfCL+/'])
        }),
        P = (0, d.dX)(p),
        y = (0, s.Z)({
            location: 'ContentPopoutContextMenu',
            applicationId: P && !0 !== v ? (null === (t = p.extra) || void 0 === t ? void 0 : t.application_id) : void 0,
            source: o.m1.ActivityCardContextMenu,
            trackEntryPointImpression: !0,
            sourceUserId: p.author_id
        });
    return (0, l.jsx)(a.yRy, {
        align: 'top',
        position: 'right',
        disablePointerEvents: !1,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, l.jsx)(a.v2r, {
                navId: 'content-inventory-context',
                onClose: () => {
                    (0, i.Zy)(), t();
                },
                'aria-label': u.intl.string(u.t.liqwPD),
                onSelect: g,
                children: (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsxs)(a.kSQ, {
                            children: [
                                C,
                                null != y &&
                                    (0, l.jsx)(a.sNh, {
                                        id: 'game-profile',
                                        label: u.intl.string(u.t.f7aVGh),
                                        action: y
                                    })
                            ]
                        }),
                        (0, l.jsxs)(a.kSQ, {
                            children: [j, f]
                        })
                    ]
                })
            });
        },
        children: (e) =>
            (0, l.jsx)(a.ua7, {
                text: u.intl.string(u.t.UKOtz8),
                children: (t) =>
                    (0, l.jsx)(a.P3F, {
                        ...t,
                        className: m.menuIcon,
                        ...e,
                        children: (0, l.jsx)(a.xhG, {
                            color: 'currentColor',
                            size: 'custom',
                            width: 16,
                            height: 16
                        })
                    })
            })
    });
}
