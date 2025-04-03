n.d(t, {
    c: () => b,
    x: () => T
}),
    n(47120),
    n(266796);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(481060),
    o = n(835473),
    c = n(686546),
    u = n(970606),
    d = n(603368),
    m = n(353093),
    f = n(449480),
    g = n(114487),
    h = n(214715),
    x = n(550271),
    E = n(308083),
    I = n(388032),
    p = n(194093);
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function j(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function b(e) {
    let { wildcardDescriptors: t, primaryColor: n } = e,
        l = t.filter((e) => e !== E.U6).join(', '),
        a = (0, s.dQu)(s.TVs.colors.BACKGROUND_FLOATING),
        o = (0, d.pX)(n, a.hex()),
        c = r.useRef(null),
        [u, m] = r.useState(!1);
    if (
        (r.useEffect(() => {
            let e = c.current;
            null != e && null != e.offsetWidth && null != e.scrollWidth && m(e.offsetWidth < e.scrollWidth);
        }, []),
        0 === l.length)
    )
        return null;
    let f = null != o ? { color: o.css() } : void 0;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(s.Text, {
                variant: 'text-xs/normal',
                color: 'text-secondary',
                className: p.clanInfoItem,
                children: '\xB7'
            }),
            (0, i.jsx)(s.ua7, {
                text: l,
                color: s.ua7.Colors.PRIMARY,
                shouldShow: u,
                children: (e) =>
                    (0, i.jsx)(
                        'span',
                        j(v({}, e), {
                            style: f,
                            className: p.wildCardText,
                            ref: c,
                            children: l
                        })
                    )
            })
        ]
    });
}
function N(e) {
    let { description: t, expanded: n } = e;
    return null == t
        ? null
        : n
          ? (0, i.jsx)('div', {
                className: p.cardContentDescriptionSection,
                children: (0, i.jsx)(s.Text, {
                    variant: 'text-xs/normal',
                    color: 'text-muted',
                    children: t
                })
            })
          : (0, i.jsx)('div', {
                className: p.cardContentDescriptionSection,
                children: (0, i.jsx)(s.Text, {
                    className: p.cardContentDescriptionCollapsed,
                    variant: 'text-xs/normal',
                    color: 'text-muted',
                    lineClamp: 4,
                    children: t
                })
            });
}
function y(e) {
    let { traits: t, traitsToHighlight: n, onInteraction: l } = e,
        o = r.useMemo(() => (null == n ? new Set() : new Set(n)), [n]),
        c = r.useCallback(
            (e) =>
                (0, i.jsx)(
                    h.Z,
                    {
                        className: a()(p.thinTrait, { [p.selectedTrait]: o.has(e) }),
                        text: e,
                        selected: o.has(e)
                    },
                    e
                ),
            [o]
        ),
        u = r.useCallback(
            (e) =>
                (0, i.jsx)(s.te1, {
                    items: e,
                    renderItem: c,
                    onTooltipShow: l
                }),
            [c, l]
        );
    return (0, i.jsx)(s.Epb, {
        className: p.traitsContainer,
        items: t,
        renderItem: c,
        renderOverflow: u,
        maxLines: 2,
        itemGapPx: 4
    });
}
function _(e) {
    let { hasPendingJoinRequest: t, atMaxMemberCapacity: n, isGuildMember: r } = e;
    return t
        ? (0, i.jsxs)('div', {
              className: p.headerBadge,
              children: [
                  (0, i.jsx)(s.wGF, { size: 'xxs' }),
                  (0, i.jsx)(s.Text, {
                      variant: 'text-xs/medium',
                      color: 'text-normal',
                      children: I.NW.string(I.t['J+MVEx'])
                  })
              ]
          })
        : r
          ? (0, i.jsxs)('div', {
                className: p.headerBadge,
                children: [
                    (0, i.jsx)(s.owK, {
                        size: 'xxs',
                        color: s.TVs.colors.STATUS_POSITIVE
                    }),
                    (0, i.jsx)(s.Text, {
                        variant: 'text-xs/medium',
                        color: 'text-normal',
                        children: I.NW.string(I.t.cEnaW1)
                    })
                ]
            })
          : n
            ? (0, i.jsxs)('div', {
                  className: p.headerBadge,
                  children: [
                      (0, i.jsx)(s.mBM, { size: 'xxs' }),
                      (0, i.jsx)(s.Text, {
                          variant: 'text-xs/medium',
                          color: 'text-normal',
                          children: I.NW.string(I.t['76GQ2t'])
                      })
                  ]
              })
            : null;
}
function T(e) {
    var t;
    let { clan: n, bannerComponent: l, expanded: d, isMember: h = !1, traitsToHighlight: T, prioritizedGameIds: O, className: S, position: C, showBrandingFooter: A = !1, bannerUrl: P, onlyAnimateIconOnHover: D = !1, hasPendingJoinRequest: L = !1, atMaxMemberCapacity: R = !1, footer: w = null } = e,
        {
            tag: G,
            badge: F,
            branding: { primaryColor: V, secondaryColor: M },
            bannerHash: B,
            gameActivity: U
        } = n,
        Z = (0, o.Z)(n.games),
        [k, W] = r.useState(!1),
        H = r.useRef(null),
        [Y, z] = r.useState(!1),
        J = r.useCallback(() => {
            W(!0);
        }, []),
        q = r.useCallback(() => {
            W(!1);
        }, []),
        K = I.NW.formatToPlainString(I.t['0WHArK'], { count: n.memberCount }),
        Q = null != P ? P : (0, m.pY)(n.id, B),
        X = null == l && null == Q ? { background: 'linear-gradient(90deg, '.concat(V, ', ').concat(M, ')') } : void 0,
        $ =
            null != l
                ? l
                : null != Q
                  ? (0, i.jsx)('img', {
                        alt: I.NW.string(I.t.nH6S2d),
                        src: Q,
                        className: p.bannerImage
                    })
                  : null,
        ee = r.useMemo(() => (0, E.HR)(n.traits, T), [n.traits, T]);
    r.useEffect(() => {
        let e = H.current;
        null != e && null != e.offsetWidth && null != e.scrollWidth && z(e.offsetWidth < e.scrollWidth);
    }, []);
    let et = r.useCallback(
        (e) => () => {
            (0, u.Gh)({
                position: C,
                guildId: n.id,
                feature: e
            });
        },
        [C, n.id]
    );
    return (0, i.jsxs)('div', {
        className: a()(p.card, { [p.cardStaticHeight]: !d }, S),
        onMouseEnter: J,
        onMouseLeave: q,
        children: [
            (0, i.jsxs)('div', {
                className: p.cardBrandingHeader,
                style: X,
                children: [
                    $,
                    (0, i.jsx)(_, {
                        hasPendingJoinRequest: L,
                        atMaxMemberCapacity: R,
                        isGuildMember: h
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: p.cardContent,
                children: [
                    (0, i.jsxs)('div', {
                        className: p.cardContentTitleSection,
                        children: [
                            (0, i.jsxs)('div', {
                                className: p.cardNameAndTagWrapper,
                                children: [
                                    (0, i.jsx)(c.ZP, {
                                        mask: c.QS.CLAN_ICON,
                                        width: 70,
                                        height: 70,
                                        className: p.clanIconMask,
                                        children: (0, i.jsx)('div', {
                                            className: p.clanIconInner,
                                            children: (0, i.jsx)(g.b, {
                                                guildId: n.id,
                                                guildName: n.name,
                                                guildIcon: n.icon,
                                                iconSize: 64,
                                                animate: !D || k
                                            })
                                        })
                                    }),
                                    (0, i.jsx)('div', {
                                        className: p.clanTagChipletWrapper,
                                        children: (0, i.jsxs)('div', {
                                            className: p.clanTagChiplet,
                                            children: [
                                                (0, i.jsx)(x.A, {
                                                    width: 16,
                                                    height: 16,
                                                    badge: F.badgeKind,
                                                    primaryTintColor: F.primaryColor,
                                                    secondaryTintColor: F.secondaryColor
                                                }),
                                                (0, i.jsx)(s.Text, {
                                                    variant: 'text-xs/medium',
                                                    color: 'text-primary',
                                                    children: G
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            (0, i.jsx)(s.X6q, {
                                variant: 'heading-md/medium',
                                color: 'header-primary',
                                lineClamp: 1,
                                children: (0, i.jsx)(s.ua7, {
                                    text: n.name,
                                    color: s.ua7.Colors.PRIMARY,
                                    shouldShow: Y,
                                    children: (e) =>
                                        (0, i.jsx)(
                                            'span',
                                            j(v({}, e), {
                                                ref: H,
                                                className: p.nameText,
                                                children: n.name
                                            })
                                        )
                                })
                            }),
                            (0, i.jsxs)('div', {
                                className: p.clanInfoRow,
                                children: [
                                    (0, i.jsx)(s.Text, {
                                        variant: 'text-xxs/normal',
                                        className: p.clanInfoItem,
                                        children: (0, i.jsx)('span', {
                                            role: 'img',
                                            'aria-label': I.NW.string(I.t.eMSBIC),
                                            children: '\uD83C\uDFAE'
                                        })
                                    }),
                                    (0, i.jsx)(s.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'text-secondary',
                                        className: p.clanInfoItem,
                                        children: null != (t = (0, E.mv)(n.playstyle)) ? t : I.NW.string(I.t.JijC4O)
                                    }),
                                    (0, i.jsx)(b, {
                                        wildcardDescriptors: n.wildcardDescriptors,
                                        primaryColor: n.branding.primaryColor
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, i.jsx)(N, {
                        description: n.description,
                        expanded: d
                    }),
                    (0, i.jsx)(y, {
                        traits: ee,
                        traitsToHighlight: T,
                        onInteraction: et('traits')
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: p.cardFooter,
                children: [
                    (0, i.jsx)('div', {
                        className: p.cardFooterInfo,
                        children: (0, i.jsx)('div', {
                            className: p.cardFooterMembers,
                            children: (0, i.jsx)(s.Text, {
                                variant: 'text-xs/normal',
                                color: 'text-muted',
                                children: K
                            })
                        })
                    }),
                    (0, i.jsx)('div', {
                        className: p.cardFooterGames,
                        children: (0, i.jsx)(f.Z, {
                            games: Z,
                            prioritizedGameIds: O,
                            gameActivity: U,
                            onInteraction: et('games')
                        })
                    })
                ]
            }),
            A &&
                (0, i.jsx)('div', {
                    className: p.cardBrandingFooter,
                    style: { background: 'linear-gradient(90deg, '.concat(V, ', ').concat(M, ')') }
                }),
            w
        ]
    });
}
