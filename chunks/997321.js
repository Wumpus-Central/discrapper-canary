l.d(n, {
    Qt: function () {
        return z;
    }
});
var t = l(200651),
    i = l(192379),
    s = l(120356),
    a = l.n(s),
    r = l(442837),
    o = l(481060),
    u = l(447543),
    c = l(287734),
    d = l(372769),
    m = l(955415),
    v = l(922482),
    p = l(601964),
    C = l(592125),
    N = l(430824),
    h = l(15274),
    g = l(924301),
    x = l(725436),
    I = l(978227),
    j = l(236373),
    E = l(854698),
    f = l(405613),
    B = l(95291),
    k = l(742593),
    L = l(217804),
    S = l(139712),
    Z = l(765305),
    b = l(388032),
    R = l(101241);
let T = (e, n) => (l) => {
        l.stopPropagation(), c.default.selectVoiceChannel(e.channel_id, !1), null == n || n(l);
    },
    y = (e, n) => (l) => {
        let t = C.Z.getChannel(e.channel_id);
        null != t && (l.stopPropagation(), (0, v.Cq)(t), null == n || n(l));
    },
    z = (e, n) => {
        switch (null == e ? void 0 : e.entity_type) {
            case Z.WX.STAGE_INSTANCE:
                return y(e, n);
            case Z.WX.VOICE:
                return T(e, n);
        }
        return () => {};
    },
    A = (e, n) => n && [Z.WX.STAGE_INSTANCE, Z.WX.VOICE].includes(null == e ? void 0 : e.entity_type),
    P = i.memo(function (e) {
        var n;
        let { guild: l, guildScheduledEvent: s, channel: a, isMember: c } = e,
            v = (0, r.e7)(
                [N.Z],
                () => {
                    var e;
                    return null == l ? null : null !== (e = N.Z.getGuild(l.id)) && void 0 !== e ? e : new p.ZP(l);
                },
                [l]
            ),
            C = (0, L.u)(s, a),
            h = i.useCallback(
                (e) => {
                    c && null != s && (e.stopPropagation(), (0, u.B)(s));
                },
                [c, s]
            ),
            g = i.useCallback(
                (e) => {
                    z(s)(e);
                },
                [s]
            );
        if (null == v) return null;
        let I = null == C ? void 0 : C.IconComponent,
            j = (0, t.jsxs)(t.Fragment, {
                children: [
                    null != I &&
                        (0, t.jsx)(I, {
                            size: 'xs',
                            color: 'currentColor',
                            className: R.channelIcon
                        }),
                    (0, t.jsx)(o.Text, {
                        className: R.channelDescription,
                        variant: 'text-xs/normal',
                        children: (0, x.m)(null !== (n = null == C ? void 0 : C.locationName) && void 0 !== n ? n : '', !0)
                    })
                ]
            });
        return (0, t.jsxs)('div', {
            className: R.inviteDetailsContainer,
            children: [
                (0, t.jsx)(m.Z.Icon, {
                    guild: v,
                    onClick: h
                }),
                (0, t.jsxs)('div', {
                    className: R.verticalContainer,
                    children: [
                        (0, t.jsxs)('div', {
                            className: R.guildChannelInfoContainer,
                            children: [
                                (0, t.jsx)(d.Z, {
                                    guild: v,
                                    tooltipPosition: 'top',
                                    tooltipColor: o.Tooltip.Colors.PRIMARY,
                                    size: 16,
                                    className: R.guildBadge
                                }),
                                (0, t.jsx)(o.Clickable, {
                                    className: R.guildNameClickable,
                                    onClick: h,
                                    children: (0, t.jsx)(o.Heading, {
                                        className: c ? R.guildNameLinkable : R.guildName,
                                        variant: 'text-sm/medium',
                                        children: v.name
                                    })
                                })
                            ]
                        }),
                        (0, t.jsx)('div', {
                            className: R.channelInfoContainer,
                            children: A(s, c)
                                ? (0, t.jsx)(o.Clickable, {
                                      className: R.channelLocationLink,
                                      onClick: g,
                                      children: j
                                  })
                                : j
                        })
                    ]
                })
            ]
        });
    }),
    w = i.memo(function (e) {
        let { guildId: n, guildScheduledEventId: l, recurrenceId: i, isActive: s, isEnded: a, isMember: u, isExternal: c, onAcceptInstantInvite: d, onTransitionToInviteChannel: m } = e,
            v = (0, r.e7)([g.ZP], () => g.ZP.isInterestedInEventRecurrence(l, i), [l, i]),
            p = (e) => {
                e.stopPropagation(), u ? s && m() : d();
            };
        return u
            ? s
                ? (0, t.jsx)(o.Button, {
                      className: R.button,
                      size: o.Button.Sizes.SMALL,
                      onClick: (e) => {
                          !c && p(e);
                      },
                      color: c ? o.Button.Colors.TRANSPARENT : o.Button.Colors.GREEN,
                      children: c ? b.intl.string(b.t.GoCQxc) : b.intl.string(b.t.XpeFYm)
                  })
                : a
                  ? (0, t.jsx)(o.Button, {
                        className: R.button,
                        size: o.Button.Sizes.SMALL,
                        disabled: !0,
                        color: o.Button.Colors.PRIMARY,
                        look: o.Button.Looks.OUTLINED,
                        children: b.intl.string(b.t.Pj7Xrq)
                    })
                  : (0, t.jsxs)(o.Button, {
                        className: R.button,
                        innerClassName: R.innerButton,
                        size: o.Button.Sizes.SMALL,
                        color: o.Button.Colors.PRIMARY,
                        look: v ? o.Button.Looks.OUTLINED : o.Button.Looks.FILLED,
                        onClick: (e) => {
                            e.stopPropagation(), (0, S.Z)(l, i, n);
                        },
                        children: [
                            v
                                ? (0, t.jsx)(o.CheckmarkLargeIcon, {
                                      size: 'xs',
                                      color: 'currentColor',
                                      className: R.buttonIcon
                                  })
                                : (0, t.jsx)(o.BellIcon, {
                                      size: 'xs',
                                      color: 'currentColor',
                                      className: R.buttonIcon
                                  }),
                            b.intl.string(b.t.DlcqlZ)
                        ]
                    })
            : (0, t.jsx)(o.Button, {
                  className: R.button,
                  size: o.Button.Sizes.SMALL,
                  onClick: p,
                  color: o.Button.Colors.GREEN,
                  children: b.intl.string(b.t.XpeFYm)
              });
    }),
    _ = i.memo(function (e) {
        var n;
        let { guildScheduledEvent: l, guild: s, channel: r, isMember: u, recurrenceId: c, onAcceptInstantInvite: d, onTransitionToInviteChannel: v } = e,
            p = null != c ? c : null != l ? (0, E.DK)(l) : null,
            C = (null == l ? void 0 : l.recurrence_rule) == null || null == p || (0, E.Rp)((0, j.KV)(null == l ? void 0 : l.recurrence_rule), p),
            N = (0, I.Z)(l),
            x = i.useCallback(() => {
                u &&
                    null != l &&
                    (0, h.bO)({
                        eventId: l.id,
                        recurrenceId: p
                    });
            }, [u, l, p]);
        if (null == l || !C) return null;
        let L = (0, g.xt)(l),
            S = (0, g.Z2)(l),
            b = l.entity_type === Z.WX.EXTERNAL;
        return (0, t.jsx)(m.Z, {
            className: a()({ [R.clickable]: u }),
            children: (0, t.jsxs)(o.Clickable, {
                onClick: x,
                children: [
                    null != l.image &&
                        (0, t.jsx)(B.Z, {
                            source: (0, f.Z)(l),
                            className: R.banner
                        }),
                    (0, t.jsx)(k.ZP, {
                        name: l.name,
                        description: null !== (n = l.description) && void 0 !== n ? n : void 0,
                        descriptionClassName: R.eventDescription,
                        guildId: l.guild_id,
                        creator: N,
                        guildEvent: l,
                        eventPreview: l,
                        recurrenceId: p
                    }),
                    (0, t.jsxs)('div', {
                        className: R.footerContainer,
                        children: [
                            (0, t.jsx)(P, {
                                guild: s,
                                channel: r,
                                guildScheduledEvent: l,
                                isMember: u
                            }),
                            (0, t.jsx)(w, {
                                isActive: L,
                                isEnded: S,
                                isMember: u,
                                guildId: l.guild_id,
                                guildScheduledEventId: l.id,
                                recurrenceId: p,
                                onAcceptInstantInvite: d,
                                onTransitionToInviteChannel: v,
                                isExternal: b
                            })
                        ]
                    })
                ]
            })
        });
    });
n.ZP = _;
