n.d(t, {
    c: () => I,
    x: () => C
}),
    n(47120),
    n(266796);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(481060),
    l = n(835473),
    c = n(686546),
    u = n(970606),
    d = n(603368),
    f = n(353093),
    p = n(449480),
    _ = n(114487),
    h = n(214715),
    m = n(550271),
    g = n(308083),
    E = n(388032),
    v = n(289163);
function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                b(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function I(e) {
    let { wildcardDescriptors: t, primaryColor: n } = e,
        o = t.filter((e) => e !== g.U6).join(', '),
        a = (0, s.dQu)(s.TVs.colors.BACKGROUND_FLOATING),
        l = (0, d.pX)(n, a.hex()),
        c = i.useRef(null),
        [u, f] = i.useState(!1);
    if (
        (i.useEffect(() => {
            let e = c.current;
            null != e && null != e.offsetWidth && null != e.scrollWidth && f(e.offsetWidth < e.scrollWidth);
        }, []),
        0 === o.length)
    )
        return null;
    let p = null != l ? { color: l.css() } : void 0;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.Text, {
                variant: 'text-xs/normal',
                color: 'text-secondary',
                className: v.clanInfoItem,
                children: '\xB7'
            }),
            (0, r.jsx)(s.ua7, {
                text: o,
                color: s.ua7.Colors.PRIMARY,
                shouldShow: u,
                children: (e) =>
                    (0, r.jsx)(
                        'span',
                        S(y({}, e), {
                            style: p,
                            className: v.wildCardText,
                            ref: c,
                            children: o
                        })
                    )
            })
        ]
    });
}
function T(e) {
    let { description: t, expanded: n } = e;
    return null == t
        ? null
        : n
          ? (0, r.jsx)('div', {
                className: v.cardContentDescriptionSection,
                children: (0, r.jsx)(s.Text, {
                    variant: 'text-xs/normal',
                    color: 'text-muted',
                    children: t
                })
            })
          : (0, r.jsx)('div', {
                className: v.cardContentDescriptionSection,
                children: (0, r.jsx)(s.Text, {
                    className: v.cardContentDescriptionCollapsed,
                    variant: 'text-xs/normal',
                    color: 'text-muted',
                    lineClamp: 4,
                    children: t
                })
            });
}
function N(e) {
    let { traits: t, traitsToHighlight: n, onInteraction: o } = e,
        l = i.useMemo(() => (null == n ? new Set() : new Set(n)), [n]),
        c = i.useCallback(
            (e) =>
                (0, r.jsx)(
                    h.Z,
                    {
                        className: a()(v.thinTrait, { [v.selectedTrait]: l.has(e) }),
                        text: e,
                        selected: l.has(e)
                    },
                    e
                ),
            [l]
        ),
        u = i.useCallback(
            (e) =>
                (0, r.jsx)(s.te1, {
                    items: e,
                    renderItem: c,
                    onTooltipShow: o
                }),
            [c, o]
        );
    return (0, r.jsx)(s.Epb, {
        className: v.traitsContainer,
        items: t,
        renderItem: c,
        renderOverflow: u,
        maxLines: 2,
        itemGapPx: 4
    });
}
function A(e) {
    let { hasPendingJoinRequest: t, atMaxMemberCapacity: n, isGuildMember: i } = e;
    return t
        ? (0, r.jsxs)('div', {
              className: v.headerBadge,
              children: [
                  (0, r.jsx)(s.wGF, { size: 'xxs' }),
                  (0, r.jsx)(s.Text, {
                      variant: 'text-xs/medium',
                      color: 'text-normal',
                      children: E.NW.string(E.t['J+MVEx'])
                  })
              ]
          })
        : i
          ? (0, r.jsxs)('div', {
                className: v.headerBadge,
                children: [
                    (0, r.jsx)(s.owK, {
                        size: 'xxs',
                        color: s.TVs.colors.STATUS_POSITIVE
                    }),
                    (0, r.jsx)(s.Text, {
                        variant: 'text-xs/medium',
                        color: 'text-normal',
                        children: E.NW.string(E.t.cEnaW1)
                    })
                ]
            })
          : n
            ? (0, r.jsxs)('div', {
                  className: v.headerBadge,
                  children: [
                      (0, r.jsx)(s.mBM, { size: 'xxs' }),
                      (0, r.jsx)(s.Text, {
                          variant: 'text-xs/medium',
                          color: 'text-normal',
                          children: E.NW.string(E.t['76GQ2t'])
                      })
                  ]
              })
            : null;
}
function C(e) {
    var t;
    let { clan: n, bannerComponent: o, expanded: d, isMember: h = !1, traitsToHighlight: b, prioritizedGameIds: O, className: C, position: R, showBrandingFooter: P = !1, bannerUrl: w, onlyAnimateIconOnHover: D = !1, hasPendingJoinRequest: x = !1, atMaxMemberCapacity: L = !1, footer: M = null } = e,
        {
            tag: k,
            badge: j,
            branding: { primaryColor: U, secondaryColor: G },
            bannerHash: B,
            gameActivity: Z
        } = n,
        F = (0, l.Z)(n.games),
        [V, H] = i.useState(!1),
        W = i.useRef(null),
        [Y, K] = i.useState(!1),
        z = i.useCallback(() => {
            H(!0);
        }, []),
        q = i.useCallback(() => {
            H(!1);
        }, []),
        Q = E.NW.formatToPlainString(E.t['0WHArK'], { count: n.memberCount }),
        X = null != w ? w : (0, f.pY)(n.id, B),
        J = null == o && null == X ? { background: 'linear-gradient(90deg, '.concat(U, ', ').concat(G, ')') } : void 0,
        $ =
            null != o
                ? o
                : null != X
                  ? (0, r.jsx)('img', {
                        alt: E.NW.string(E.t.nH6S2d),
                        src: X,
                        className: v.bannerImage
                    })
                  : null,
        ee = i.useMemo(() => (0, g.HR)(n.traits, b), [n.traits, b]);
    i.useEffect(() => {
        let e = W.current;
        null != e && null != e.offsetWidth && null != e.scrollWidth && K(e.offsetWidth < e.scrollWidth);
    }, []);
    let et = i.useCallback(
        (e) => () => {
            (0, u.Gh)({
                position: R,
                guildId: n.id,
                feature: e
            });
        },
        [R, n.id]
    );
    return (0, r.jsxs)('div', {
        className: a()(v.card, { [v.cardStaticHeight]: !d }, C),
        onMouseEnter: z,
        onMouseLeave: q,
        children: [
            (0, r.jsxs)('div', {
                className: v.cardBrandingHeader,
                style: J,
                children: [
                    $,
                    (0, r.jsx)(A, {
                        hasPendingJoinRequest: x,
                        atMaxMemberCapacity: L,
                        isGuildMember: h
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: v.cardContent,
                children: [
                    (0, r.jsxs)('div', {
                        className: v.cardContentTitleSection,
                        children: [
                            (0, r.jsxs)('div', {
                                className: v.cardNameAndTagWrapper,
                                children: [
                                    (0, r.jsx)(c.ZP, {
                                        mask: c.QS.CLAN_ICON,
                                        width: 70,
                                        height: 70,
                                        className: v.clanIconMask,
                                        children: (0, r.jsx)('div', {
                                            className: v.clanIconInner,
                                            children: (0, r.jsx)(_.b, {
                                                guildId: n.id,
                                                guildName: n.name,
                                                guildIcon: n.icon,
                                                iconSize: 64,
                                                animate: !D || V
                                            })
                                        })
                                    }),
                                    (0, r.jsx)('div', {
                                        className: v.clanTagChipletWrapper,
                                        children: (0, r.jsxs)('div', {
                                            className: v.clanTagChiplet,
                                            children: [
                                                (0, r.jsx)(m.A, {
                                                    width: 16,
                                                    height: 16,
                                                    badge: j.badgeKind,
                                                    primaryTintColor: j.primaryColor,
                                                    secondaryTintColor: j.secondaryColor
                                                }),
                                                (0, r.jsx)(s.Text, {
                                                    variant: 'text-xs/medium',
                                                    color: 'text-primary',
                                                    children: k
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            (0, r.jsx)(s.X6q, {
                                variant: 'heading-md/medium',
                                color: 'header-primary',
                                lineClamp: 1,
                                children: (0, r.jsx)(s.ua7, {
                                    text: n.name,
                                    color: s.ua7.Colors.PRIMARY,
                                    shouldShow: Y,
                                    children: (e) =>
                                        (0, r.jsx)(
                                            'span',
                                            S(y({}, e), {
                                                ref: W,
                                                className: v.nameText,
                                                children: n.name
                                            })
                                        )
                                })
                            }),
                            (0, r.jsxs)('div', {
                                className: v.clanInfoRow,
                                children: [
                                    (0, r.jsx)(s.Text, {
                                        variant: 'text-xxs/normal',
                                        className: v.clanInfoItem,
                                        children: (0, r.jsx)('span', {
                                            role: 'img',
                                            'aria-label': E.NW.string(E.t.eMSBIC),
                                            children: '\uD83C\uDFAE'
                                        })
                                    }),
                                    (0, r.jsx)(s.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'text-secondary',
                                        className: v.clanInfoItem,
                                        children: null !== (t = (0, g.mv)(n.playstyle)) && void 0 !== t ? t : E.NW.string(E.t.JijC4O)
                                    }),
                                    (0, r.jsx)(I, {
                                        wildcardDescriptors: n.wildcardDescriptors,
                                        primaryColor: n.branding.primaryColor
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, r.jsx)(T, {
                        description: n.description,
                        expanded: d
                    }),
                    (0, r.jsx)(N, {
                        traits: ee,
                        traitsToHighlight: b,
                        onInteraction: et('traits')
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: v.cardFooter,
                children: [
                    (0, r.jsx)('div', {
                        className: v.cardFooterInfo,
                        children: (0, r.jsx)('div', {
                            className: v.cardFooterMembers,
                            children: (0, r.jsx)(s.Text, {
                                variant: 'text-xs/normal',
                                color: 'text-muted',
                                children: Q
                            })
                        })
                    }),
                    (0, r.jsx)('div', {
                        className: v.cardFooterGames,
                        children: (0, r.jsx)(p.Z, {
                            games: F,
                            prioritizedGameIds: O,
                            gameActivity: Z,
                            onInteraction: et('games')
                        })
                    })
                ]
            }),
            P &&
                (0, r.jsx)('div', {
                    className: v.cardBrandingFooter,
                    style: { background: 'linear-gradient(90deg, '.concat(U, ', ').concat(G, ')') }
                }),
            M
        ]
    });
}
