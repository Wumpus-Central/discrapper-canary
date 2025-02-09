n.d(t, { Z: () => p });
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
    x = n(981631),
    h = n(388032),
    _ = n(460321);
let p = function (e) {
    let { guild: t, guildJoinRequest: p, guildJoinRequestUser: f, onClose: C } = e,
        j = i.useMemo(() => {
            var e;
            return null !== (e = p.formResponses) && void 0 !== e ? e : [];
        }, [p.formResponses]),
        v = t.hasFeature(x.oNc.CLAN) && p.applicationStatus === s.wB.SUBMITTED,
        b = i.useCallback(
            () =>
                (0, r.ZDy)(async () => {
                    let { default: e } = await n.e('17945').then(n.bind(n, 223926));
                    return (n) =>
                        (0, a.jsx)(e, {
                            ...n,
                            guild: t,
                            guildJoinRequest: p,
                            user: f
                        });
                }),
            [t, p, f]
        );
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)(l.ZP, {
                toolbar: (0, a.jsx)(l.ZP.Icon, {
                    icon: r.Dio,
                    onClick: C,
                    tooltip: h.intl.string(h.t.cpT0Cg)
                }),
                children: [
                    (0, a.jsx)(l.ZP.Icon, {
                        icon: r.tBG,
                        disabled: !0,
                        'aria-label': h.intl.string(h.t.PuCkTU)
                    }),
                    (0, a.jsx)(r.X6q, {
                        variant: 'heading-md/semibold',
                        children: o.ZP.getName(f)
                    })
                ]
            }),
            (0, a.jsx)(d.Z, {
                guildJoinRequest: p,
                guildJoinRequestUser: f,
                guild: t
            }),
            (0, a.jsxs)(r.Ttm, {
                children: [
                    (0, a.jsxs)('div', {
                        className: _.container,
                        children: [
                            (0, a.jsx)(m.Z, {
                                user: f,
                                joinRequestId: p.joinRequestId
                            }),
                            v &&
                                (0, a.jsxs)('div', {
                                    className: _.actionButtons,
                                    children: [
                                        (0, a.jsx)(u.Z, { joinRequest: p }),
                                        (0, a.jsx)(r.zxk, {
                                            color: r.Ttl.PRIMARY,
                                            onClick: b,
                                            children: h.intl.string(h.t['6DpJRU'])
                                        })
                                    ]
                                })
                        ]
                    }),
                    (0, a.jsx)('div', {
                        className: _.disabledFormRenderer,
                        children: (0, a.jsx)(c.Z, {
                            guildId: t.id,
                            formFields: j,
                            user: f
                        })
                    })
                ]
            })
        ]
    });
};
