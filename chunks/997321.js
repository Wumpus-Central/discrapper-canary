n.d(t, {
    Qt: () => L,
    ZP: () => v
});
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(442837),
    o = n(481060),
    c = n(447543),
    u = n(287734),
    E = n(372769),
    d = n(955415),
    _ = n(922482),
    I = n(601964),
    T = n(592125),
    N = n(430824),
    A = n(15274),
    S = n(924301),
    R = n(725436),
    C = n(978227),
    O = n(236373),
    P = n(854698),
    D = n(405613),
    m = n(95291),
    p = n(742593),
    h = n(217804),
    U = n(139712),
    M = n(765305),
    g = n(388032),
    k = n(101241);
let Z = (e, t) => (n) => {
        n.stopPropagation(), u.default.selectVoiceChannel(e.channel_id, !1), null == t || t(n);
    },
    f = (e, t) => (n) => {
        let i = T.Z.getChannel(e.channel_id);
        null != i && (n.stopPropagation(), (0, _.Cq)(i), null == t || t(n));
    },
    L = (e, t) => {
        switch (null == e ? void 0 : e.entity_type) {
            case M.WX.STAGE_INSTANCE:
                return f(e, t);
            case M.WX.VOICE:
                return Z(e, t);
        }
        return () => {};
    },
    V = (e, t) => t && [M.WX.STAGE_INSTANCE, M.WX.VOICE].includes(null == e ? void 0 : e.entity_type),
    F = l.memo(function (e) {
        var t;
        let { guild: n, guildScheduledEvent: r, channel: a, isMember: u } = e,
            _ = (0, s.e7)(
                [N.Z],
                () => {
                    var e;
                    return null == n ? null : null !== (e = N.Z.getGuild(n.id)) && void 0 !== e ? e : new I.ZP(n);
                },
                [n]
            ),
            T = (0, h.u)(r, a),
            A = l.useCallback(
                (e) => {
                    u && null != r && (e.stopPropagation(), (0, c.B)(r));
                },
                [u, r]
            ),
            S = l.useCallback(
                (e) => {
                    L(r)(e);
                },
                [r]
            );
        if (null == _) return null;
        let C = null == T ? void 0 : T.IconComponent,
            O = (0, i.jsxs)(i.Fragment, {
                children: [
                    null != C &&
                        (0, i.jsx)(C, {
                            size: 'xs',
                            color: 'currentColor',
                            className: k.channelIcon
                        }),
                    (0, i.jsx)(o.Text, {
                        className: k.channelDescription,
                        variant: 'text-xs/normal',
                        children: (0, R.m)(null !== (t = null == T ? void 0 : T.locationName) && void 0 !== t ? t : '', !0)
                    })
                ]
            });
        return (0, i.jsxs)('div', {
            className: k.inviteDetailsContainer,
            children: [
                (0, i.jsx)(d.Z.Icon, {
                    guild: _,
                    onClick: A
                }),
                (0, i.jsxs)('div', {
                    className: k.verticalContainer,
                    children: [
                        (0, i.jsxs)('div', {
                            className: k.guildChannelInfoContainer,
                            children: [
                                (0, i.jsx)(E.Z, {
                                    guild: _,
                                    tooltipPosition: 'top',
                                    tooltipColor: o.ua7.Colors.PRIMARY,
                                    size: 16,
                                    className: k.guildBadge
                                }),
                                (0, i.jsx)(o.P3F, {
                                    className: k.guildNameClickable,
                                    onClick: A,
                                    children: (0, i.jsx)(o.X6q, {
                                        className: u ? k.guildNameLinkable : k.guildName,
                                        variant: 'text-sm/medium',
                                        children: _.name
                                    })
                                })
                            ]
                        }),
                        (0, i.jsx)('div', {
                            className: k.channelInfoContainer,
                            children: V(r, u)
                                ? (0, i.jsx)(o.P3F, {
                                      className: k.channelLocationLink,
                                      onClick: S,
                                      children: O
                                  })
                                : O
                        })
                    ]
                })
            ]
        });
    }),
    x = l.memo(function (e) {
        let { guildId: t, guildScheduledEventId: n, recurrenceId: l, isActive: r, isEnded: a, isMember: c, isExternal: u, onAcceptInstantInvite: E, onTransitionToInviteChannel: d } = e,
            _ = (0, s.e7)([S.ZP], () => S.ZP.isInterestedInEventRecurrence(n, l), [n, l]),
            I = (e) => {
                e.stopPropagation(), c ? r && d() : E();
            };
        return c
            ? r
                ? (0, i.jsx)(o.zxk, {
                      className: k.button,
                      size: o.zxk.Sizes.SMALL,
                      onClick: (e) => {
                          u || I(e);
                      },
                      color: u ? o.zxk.Colors.TRANSPARENT : o.zxk.Colors.GREEN,
                      children: u ? g.intl.string(g.t.GoCQxc) : g.intl.string(g.t.XpeFYm)
                  })
                : a
                  ? (0, i.jsx)(o.zxk, {
                        className: k.button,
                        size: o.zxk.Sizes.SMALL,
                        disabled: !0,
                        color: o.zxk.Colors.PRIMARY,
                        look: o.zxk.Looks.OUTLINED,
                        children: g.intl.string(g.t.Pj7Xrq)
                    })
                  : (0, i.jsxs)(o.zxk, {
                        className: k.button,
                        innerClassName: k.innerButton,
                        size: o.zxk.Sizes.SMALL,
                        color: o.zxk.Colors.PRIMARY,
                        look: _ ? o.zxk.Looks.OUTLINED : o.zxk.Looks.FILLED,
                        onClick: (e) => {
                            e.stopPropagation(), (0, U.Z)(n, l, t);
                        },
                        children: [
                            _
                                ? (0, i.jsx)(o.dz2, {
                                      size: 'xs',
                                      color: 'currentColor',
                                      className: k.buttonIcon
                                  })
                                : (0, i.jsx)(o.Dkj, {
                                      size: 'xs',
                                      color: 'currentColor',
                                      className: k.buttonIcon
                                  }),
                            g.intl.string(g.t.DlcqlZ)
                        ]
                    })
            : (0, i.jsx)(o.zxk, {
                  className: k.button,
                  size: o.zxk.Sizes.SMALL,
                  onClick: I,
                  color: o.zxk.Colors.GREEN,
                  children: g.intl.string(g.t.XpeFYm)
              });
    }),
    v = l.memo(function (e) {
        var t;
        let { guildScheduledEvent: n, guild: r, channel: s, isMember: c, recurrenceId: u, onAcceptInstantInvite: E, onTransitionToInviteChannel: _ } = e,
            I = null != u ? u : null != n ? (0, P.DK)(n) : null,
            T = (null == n ? void 0 : n.recurrence_rule) == null || null == I || (0, P.Rp)((0, O.KV)(null == n ? void 0 : n.recurrence_rule), I),
            N = (0, C.Z)(n),
            R = l.useCallback(() => {
                c &&
                    null != n &&
                    (0, A.bO)({
                        eventId: n.id,
                        recurrenceId: I
                    });
            }, [c, n, I]);
        if (null == n || !T) return null;
        let h = (0, S.xt)(n),
            U = (0, S.Z2)(n),
            g = n.entity_type === M.WX.EXTERNAL;
        return (0, i.jsx)(d.Z, {
            className: a()({ [k.clickable]: c }),
            children: (0, i.jsxs)(o.P3F, {
                onClick: R,
                children: [
                    null != n.image &&
                        (0, i.jsx)(m.Z, {
                            source: (0, D.Z)(n),
                            className: k.banner
                        }),
                    (0, i.jsx)(p.ZP, {
                        name: n.name,
                        description: null !== (t = n.description) && void 0 !== t ? t : void 0,
                        descriptionClassName: k.eventDescription,
                        guildId: n.guild_id,
                        creator: N,
                        guildEvent: n,
                        eventPreview: n,
                        recurrenceId: I
                    }),
                    (0, i.jsxs)('div', {
                        className: k.footerContainer,
                        children: [
                            (0, i.jsx)(F, {
                                guild: r,
                                channel: s,
                                guildScheduledEvent: n,
                                isMember: c
                            }),
                            (0, i.jsx)(x, {
                                isActive: h,
                                isEnded: U,
                                isMember: c,
                                guildId: n.guild_id,
                                guildScheduledEventId: n.id,
                                recurrenceId: I,
                                onAcceptInstantInvite: E,
                                onTransitionToInviteChannel: _,
                                isExternal: g
                            })
                        ]
                    })
                ]
            })
        });
    });
