n.d(t, {
    c: () => y,
    x: () => S
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(835473),
    u = n(686546),
    c = n(970606),
    d = n(603368),
    f = n(353093),
    _ = n(449480),
    p = n(114487),
    h = n(214715),
    m = n(550271),
    g = n(308083),
    E = n(388032),
    v = n(610550);
function y(e) {
    let { wildcardDescriptors: t, primaryColor: n } = e,
        a = t.filter((e) => e !== g.U6).join(', '),
        s = (0, o.dQu)(o.TVs.colors.BACKGROUND_FLOATING),
        l = (0, d.pX)(n, s.hex()),
        u = r.useRef(null),
        [c, f] = r.useState(!1);
    if (
        (r.useEffect(() => {
            let e = u.current;
            null != e && null != e.offsetWidth && null != e.scrollWidth && f(e.offsetWidth < e.scrollWidth);
        }, []),
        0 === a.length)
    )
        return null;
    let _ = null != l ? { color: l.css() } : void 0;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(o.Text, {
                variant: 'text-xs/normal',
                color: 'text-secondary',
                className: v.clanInfoItem,
                children: '\xB7'
            }),
            (0, i.jsx)(o.ua7, {
                text: a,
                color: o.ua7.Colors.PRIMARY,
                shouldShow: c,
                children: (e) =>
                    (0, i.jsx)('span', {
                        ...e,
                        style: _,
                        className: v.wildCardText,
                        ref: u,
                        children: a
                    })
            })
        ]
    });
}
function I(e) {
    let { description: t, expanded: n } = e;
    return null == t
        ? null
        : n
          ? (0, i.jsx)('div', {
                className: v.cardContentDescriptionSection,
                children: (0, i.jsx)(o.Text, {
                    variant: 'text-xs/normal',
                    color: 'text-muted',
                    children: t
                })
            })
          : (0, i.jsx)('div', {
                className: v.cardContentDescriptionSection,
                children: (0, i.jsx)(o.Text, {
                    className: v.cardContentDescriptionCollapsed,
                    variant: 'text-xs/normal',
                    color: 'text-muted',
                    lineClamp: 4,
                    children: t
                })
            });
}
function T(e) {
    let { traits: t, traitsToHighlight: n, onInteraction: a } = e,
        l = r.useMemo(() => (null == n ? new Set() : new Set(n)), [n]),
        u = r.useCallback(
            (e) =>
                (0, i.jsx)(
                    h.Z,
                    {
                        className: s()(v.thinTrait, { [v.selectedTrait]: l.has(e) }),
                        text: e,
                        selected: l.has(e)
                    },
                    e
                ),
            [l]
        ),
        c = r.useCallback(
            (e) =>
                (0, i.jsx)(o.te1, {
                    items: e,
                    renderItem: u,
                    onTooltipShow: a
                }),
            [u, a]
        );
    return (0, i.jsx)(o.Epb, {
        className: v.traitsContainer,
        items: t,
        renderItem: u,
        renderOverflow: c,
        maxLines: 2,
        itemGapPx: 4
    });
}
function b(e) {
    let { hasPendingJoinRequest: t, atMaxMemberCapacity: n, isGuildMember: r } = e;
    return t
        ? (0, i.jsxs)('div', {
              className: v.headerBadge,
              children: [
                  (0, i.jsx)(o.wGF, { size: 'xxs' }),
                  (0, i.jsx)(o.Text, {
                      variant: 'text-xs/medium',
                      color: 'text-normal',
                      children: E.intl.string(E.t['J+MVEx'])
                  })
              ]
          })
        : r
          ? (0, i.jsxs)('div', {
                className: v.headerBadge,
                children: [
                    (0, i.jsx)(o.owK, {
                        size: 'xxs',
                        color: o.TVs.colors.STATUS_POSITIVE
                    }),
                    (0, i.jsx)(o.Text, {
                        variant: 'text-xs/medium',
                        color: 'text-normal',
                        children: E.intl.string(E.t.cEnaW1)
                    })
                ]
            })
          : n
            ? (0, i.jsxs)('div', {
                  className: v.headerBadge,
                  children: [
                      (0, i.jsx)(o.mBM, { size: 'xxs' }),
                      (0, i.jsx)(o.Text, {
                          variant: 'text-xs/medium',
                          color: 'text-normal',
                          children: E.intl.string(E.t['76GQ2t'])
                      })
                  ]
              })
            : null;
}
function S(e) {
    var t;
    let { clan: n, bannerComponent: a, expanded: d, isMember: h = !1, traitsToHighlight: S, prioritizedGameIds: A, className: N, position: C, showBrandingFooter: R = !1, bannerUrl: O, onlyAnimateIconOnHover: D = !1, hasPendingJoinRequest: L = !1, atMaxMemberCapacity: x = !1, footer: w = null } = e,
        {
            tag: P,
            badge: M,
            branding: { primaryColor: k, secondaryColor: U },
            bannerHash: G,
            gameActivity: B
        } = n,
        Z = (0, l.Z)(n.games),
        [F, V] = r.useState(!1),
        j = r.useRef(null),
        [H, Y] = r.useState(!1),
        W = r.useCallback(() => {
            V(!0);
        }, []),
        K = r.useCallback(() => {
            V(!1);
        }, []),
        z = E.intl.formatToPlainString(E.t['0WHArK'], { count: n.memberCount }),
        q = null != O ? O : (0, f.pY)(n.id, G),
        Q = null == a && null == q ? { background: 'linear-gradient(90deg, '.concat(k, ', ').concat(U, ')') } : void 0,
        X =
            null != a
                ? a
                : null != q
                  ? (0, i.jsx)('img', {
                        alt: E.intl.string(E.t.nH6S2d),
                        src: q,
                        className: v.bannerImage
                    })
                  : null,
        J = r.useMemo(() => (0, g.HR)(n.traits, S), [n.traits, S]);
    r.useEffect(() => {
        let e = j.current;
        null != e && null != e.offsetWidth && null != e.scrollWidth && Y(e.offsetWidth < e.scrollWidth);
    }, []);
    let $ = r.useCallback(
        (e) => () => {
            (0, c.Gh)({
                position: C,
                guildId: n.id,
                feature: e
            });
        },
        [C, n.id]
    );
    return (0, i.jsxs)('div', {
        className: s()(v.card, { [v.cardStaticHeight]: !d }, N),
        onMouseEnter: W,
        onMouseLeave: K,
        children: [
            (0, i.jsxs)('div', {
                className: v.cardBrandingHeader,
                style: Q,
                children: [
                    X,
                    (0, i.jsx)(b, {
                        hasPendingJoinRequest: L,
                        atMaxMemberCapacity: x,
                        isGuildMember: h
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: v.cardContent,
                children: [
                    (0, i.jsxs)('div', {
                        className: v.cardContentTitleSection,
                        children: [
                            (0, i.jsxs)('div', {
                                className: v.cardNameAndTagWrapper,
                                children: [
                                    (0, i.jsx)(u.ZP, {
                                        mask: u.QS.CLAN_ICON,
                                        width: 70,
                                        height: 70,
                                        className: v.clanIconMask,
                                        children: (0, i.jsx)('div', {
                                            className: v.clanIconInner,
                                            children: (0, i.jsx)(p.b, {
                                                guildId: n.id,
                                                guildName: n.name,
                                                guildIcon: n.icon,
                                                iconSize: 64,
                                                animate: !D || F
                                            })
                                        })
                                    }),
                                    (0, i.jsx)('div', {
                                        className: v.clanTagChipletWrapper,
                                        children: (0, i.jsxs)('div', {
                                            className: v.clanTagChiplet,
                                            children: [
                                                (0, i.jsx)(m.A, {
                                                    width: 16,
                                                    height: 16,
                                                    badge: M.badgeKind,
                                                    primaryTintColor: M.primaryColor,
                                                    secondaryTintColor: M.secondaryColor
                                                }),
                                                (0, i.jsx)(o.Text, {
                                                    variant: 'text-xs/medium',
                                                    color: 'text-primary',
                                                    children: P
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            (0, i.jsx)(o.X6q, {
                                variant: 'heading-md/medium',
                                color: 'header-primary',
                                lineClamp: 1,
                                children: (0, i.jsx)(o.ua7, {
                                    text: n.name,
                                    color: o.ua7.Colors.PRIMARY,
                                    shouldShow: H,
                                    children: (e) =>
                                        (0, i.jsx)('span', {
                                            ...e,
                                            ref: j,
                                            className: v.nameText,
                                            children: n.name
                                        })
                                })
                            }),
                            (0, i.jsxs)('div', {
                                className: v.clanInfoRow,
                                children: [
                                    (0, i.jsx)(o.Text, {
                                        variant: 'text-xxs/normal',
                                        className: v.clanInfoItem,
                                        children: (0, i.jsx)('span', {
                                            role: 'img',
                                            'aria-label': E.intl.string(E.t.eMSBIC),
                                            children: '\uD83C\uDFAE'
                                        })
                                    }),
                                    (0, i.jsx)(o.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'text-secondary',
                                        className: v.clanInfoItem,
                                        children: null !== (t = (0, g.mv)(n.playstyle)) && void 0 !== t ? t : E.intl.string(E.t.JijC4O)
                                    }),
                                    (0, i.jsx)(y, {
                                        wildcardDescriptors: n.wildcardDescriptors,
                                        primaryColor: n.branding.primaryColor
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, i.jsx)(I, {
                        description: n.description,
                        expanded: d
                    }),
                    (0, i.jsx)(T, {
                        traits: J,
                        traitsToHighlight: S,
                        onInteraction: $('traits')
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: v.cardFooter,
                children: [
                    (0, i.jsx)('div', {
                        className: v.cardFooterInfo,
                        children: (0, i.jsx)('div', {
                            className: v.cardFooterMembers,
                            children: (0, i.jsx)(o.Text, {
                                variant: 'text-xs/normal',
                                color: 'text-muted',
                                children: z
                            })
                        })
                    }),
                    (0, i.jsx)('div', {
                        className: v.cardFooterGames,
                        children: (0, i.jsx)(_.Z, {
                            games: Z,
                            prioritizedGameIds: A,
                            gameActivity: B,
                            onInteraction: $('games')
                        })
                    })
                ]
            }),
            R &&
                (0, i.jsx)('div', {
                    className: v.cardBrandingFooter,
                    style: { background: 'linear-gradient(90deg, '.concat(k, ', ').concat(U, ')') }
                }),
            w
        ]
    });
}
