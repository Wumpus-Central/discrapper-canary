n.d(t, { Z: () => h });
var a = n(200651),
    i = n(192379),
    r = n(481060),
    l = n(665149),
    o = n(51144),
    s = n(246364),
    c = n(666233),
    d = n(50662),
    u = n(395716),
    m = n(673885),
    _ = n(981631),
    x = n(388032),
    f = n(337424);
let h = function (e) {
    let { guild: t, guildJoinRequest: h, guildJoinRequestUser: p, onClose: b } = e,
        g = i.useMemo(() => {
            var e;
            return null !== (e = h.formResponses) && void 0 !== e ? e : [];
        }, [h.formResponses]),
        C = t.hasFeature(_.oNc.CLAN) && h.applicationStatus === s.wB.SUBMITTED,
        v = i.useCallback(
            () =>
                (0, r.ZDy)(async () => {
                    let { default: e } = await n.e('17945').then(n.bind(n, 223926));
                    return (n) =>
                        (0, a.jsx)(e, {
                            ...n,
                            guild: t,
                            guildJoinRequest: h,
                            user: p
                        });
                }),
            [t, h, p]
        );
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)(l.ZP, {
                toolbar: (0, a.jsx)(l.ZP.Icon, {
                    icon: r.Dio,
                    onClick: b,
                    tooltip: x.intl.string(x.t.cpT0Cg)
                }),
                children: [
                    (0, a.jsx)(l.ZP.Icon, {
                        icon: r.tBG,
                        disabled: !0,
                        'aria-label': x.intl.string(x.t.PuCkTU)
                    }),
                    (0, a.jsx)(r.X6q, {
                        variant: 'heading-md/semibold',
                        children: o.ZP.getName(p)
                    })
                ]
            }),
            (0, a.jsx)(d.Z, {
                guildJoinRequest: h,
                guildJoinRequestUser: p,
                guild: t
            }),
            (0, a.jsxs)(r.Ttm, {
                children: [
                    (0, a.jsxs)('div', {
                        className: f.container,
                        children: [
                            (0, a.jsx)(m.Z, {
                                user: p,
                                joinRequestId: h.joinRequestId
                            }),
                            C &&
                                (0, a.jsxs)('div', {
                                    className: f.actionButtons,
                                    children: [
                                        (0, a.jsx)(u.Z, { joinRequest: h }),
                                        (0, a.jsx)(r.zxk, {
                                            color: r.Ttl.PRIMARY,
                                            onClick: v,
                                            children: x.intl.string(x.t['6DpJRU'])
                                        })
                                    ]
                                })
                        ]
                    }),
                    (0, a.jsx)('div', {
                        className: f.disabledFormRenderer,
                        children: (0, a.jsx)(c.Z, {
                            guildId: t.id,
                            formFields: g,
                            user: p
                        })
                    })
                ]
            })
        ]
    });
};
