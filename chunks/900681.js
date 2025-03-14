i.d(t, {
    c: () => b,
    x: () => T
}),
    i(47120),
    i(266796);
var n = i(200651),
    r = i(192379),
    l = i(120356),
    a = i.n(l),
    s = i(481060),
    o = i(835473),
    c = i(686546),
    u = i(970606),
    d = i(603368),
    m = i(353093),
    f = i(449480),
    g = i(114487),
    h = i(214715),
    x = i(550271),
    v = i(308083),
    E = i(388032),
    I = i(730335);
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var i = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(i);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(i).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(i, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                (n = i[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n);
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
                  var i = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      i.push.apply(i, n);
                  }
                  return i;
              })(Object(t)).forEach(function (i) {
                  Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(t, i));
              }),
        e
    );
}
function b(e) {
    let { wildcardDescriptors: t, primaryColor: i } = e,
        l = t.filter((e) => e !== v.U6).join(', '),
        a = (0, s.dQu)(s.TVs.colors.BACKGROUND_FLOATING),
        o = (0, d.pX)(i, a.hex()),
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
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(s.Text, {
                variant: 'text-xs/normal',
                color: 'text-secondary',
                className: I.clanInfoItem,
                children: '\xB7'
            }),
            (0, n.jsx)(s.ua7, {
                text: l,
                color: s.ua7.Colors.PRIMARY,
                shouldShow: u,
                children: (e) =>
                    (0, n.jsx)(
                        'span',
                        j(p({}, e), {
                            style: f,
                            className: I.wildCardText,
                            ref: c,
                            children: l
                        })
                    )
            })
        ]
    });
}
function N(e) {
    let { description: t, expanded: i } = e;
    return null == t
        ? null
        : i
          ? (0, n.jsx)('div', {
                className: I.cardContentDescriptionSection,
                children: (0, n.jsx)(s.Text, {
                    variant: 'text-xs/normal',
                    color: 'text-muted',
                    children: t
                })
            })
          : (0, n.jsx)('div', {
                className: I.cardContentDescriptionSection,
                children: (0, n.jsx)(s.Text, {
                    className: I.cardContentDescriptionCollapsed,
                    variant: 'text-xs/normal',
                    color: 'text-muted',
                    lineClamp: 4,
                    children: t
                })
            });
}
function y(e) {
    let { traits: t, traitsToHighlight: i, onInteraction: l } = e,
        o = r.useMemo(() => (null == i ? new Set() : new Set(i)), [i]),
        c = r.useCallback(
            (e) =>
                (0, n.jsx)(
                    h.Z,
                    {
                        className: a()(I.thinTrait, { [I.selectedTrait]: o.has(e) }),
                        text: e,
                        selected: o.has(e)
                    },
                    e
                ),
            [o]
        ),
        u = r.useCallback(
            (e) =>
                (0, n.jsx)(s.te1, {
                    items: e,
                    renderItem: c,
                    onTooltipShow: l
                }),
            [c, l]
        );
    return (0, n.jsx)(s.Epb, {
        className: I.traitsContainer,
        items: t,
        renderItem: c,
        renderOverflow: u,
        maxLines: 2,
        itemGapPx: 4
    });
}
function _(e) {
    let { hasPendingJoinRequest: t, atMaxMemberCapacity: i, isGuildMember: r } = e;
    return t
        ? (0, n.jsxs)('div', {
              className: I.headerBadge,
              children: [
                  (0, n.jsx)(s.wGF, { size: 'xxs' }),
                  (0, n.jsx)(s.Text, {
                      variant: 'text-xs/medium',
                      color: 'text-normal',
                      children: E.NW.string(E.t['J+MVEx'])
                  })
              ]
          })
        : r
          ? (0, n.jsxs)('div', {
                className: I.headerBadge,
                children: [
                    (0, n.jsx)(s.owK, {
                        size: 'xxs',
                        color: s.TVs.colors.STATUS_POSITIVE
                    }),
                    (0, n.jsx)(s.Text, {
                        variant: 'text-xs/medium',
                        color: 'text-normal',
                        children: E.NW.string(E.t.cEnaW1)
                    })
                ]
            })
          : i
            ? (0, n.jsxs)('div', {
                  className: I.headerBadge,
                  children: [
                      (0, n.jsx)(s.mBM, { size: 'xxs' }),
                      (0, n.jsx)(s.Text, {
                          variant: 'text-xs/medium',
                          color: 'text-normal',
                          children: E.NW.string(E.t['76GQ2t'])
                      })
                  ]
              })
            : null;
}
function T(e) {
    var t;
    let { clan: i, bannerComponent: l, expanded: d, isMember: h = !1, traitsToHighlight: T, prioritizedGameIds: O, className: S, position: C, showBrandingFooter: A = !1, bannerUrl: P, onlyAnimateIconOnHover: D = !1, hasPendingJoinRequest: L = !1, atMaxMemberCapacity: R = !1, footer: w = null } = e,
        {
            tag: G,
            badge: F,
            branding: { primaryColor: V, secondaryColor: M },
            bannerHash: B,
            gameActivity: U
        } = i,
        Z = (0, o.Z)(i.games),
        [k, W] = r.useState(!1),
        H = r.useRef(null),
        [Y, z] = r.useState(!1),
        J = r.useCallback(() => {
            W(!0);
        }, []),
        q = r.useCallback(() => {
            W(!1);
        }, []),
        K = E.NW.formatToPlainString(E.t['0WHArK'], { count: i.memberCount }),
        Q = null != P ? P : (0, m.pY)(i.id, B),
        X = null == l && null == Q ? { background: 'linear-gradient(90deg, '.concat(V, ', ').concat(M, ')') } : void 0,
        $ =
            null != l
                ? l
                : null != Q
                  ? (0, n.jsx)('img', {
                        alt: E.NW.string(E.t.nH6S2d),
                        src: Q,
                        className: I.bannerImage
                    })
                  : null,
        ee = r.useMemo(() => (0, v.HR)(i.traits, T), [i.traits, T]);
    r.useEffect(() => {
        let e = H.current;
        null != e && null != e.offsetWidth && null != e.scrollWidth && z(e.offsetWidth < e.scrollWidth);
    }, []);
    let et = r.useCallback(
        (e) => () => {
            (0, u.Gh)({
                position: C,
                guildId: i.id,
                feature: e
            });
        },
        [C, i.id]
    );
    return (0, n.jsxs)('div', {
        className: a()(I.card, { [I.cardStaticHeight]: !d }, S),
        onMouseEnter: J,
        onMouseLeave: q,
        children: [
            (0, n.jsxs)('div', {
                className: I.cardBrandingHeader,
                style: X,
                children: [
                    $,
                    (0, n.jsx)(_, {
                        hasPendingJoinRequest: L,
                        atMaxMemberCapacity: R,
                        isGuildMember: h
                    })
                ]
            }),
            (0, n.jsxs)('div', {
                className: I.cardContent,
                children: [
                    (0, n.jsxs)('div', {
                        className: I.cardContentTitleSection,
                        children: [
                            (0, n.jsxs)('div', {
                                className: I.cardNameAndTagWrapper,
                                children: [
                                    (0, n.jsx)(c.ZP, {
                                        mask: c.QS.CLAN_ICON,
                                        width: 70,
                                        height: 70,
                                        className: I.clanIconMask,
                                        children: (0, n.jsx)('div', {
                                            className: I.clanIconInner,
                                            children: (0, n.jsx)(g.b, {
                                                guildId: i.id,
                                                guildName: i.name,
                                                guildIcon: i.icon,
                                                iconSize: 64,
                                                animate: !D || k
                                            })
                                        })
                                    }),
                                    (0, n.jsx)('div', {
                                        className: I.clanTagChipletWrapper,
                                        children: (0, n.jsxs)('div', {
                                            className: I.clanTagChiplet,
                                            children: [
                                                (0, n.jsx)(x.A, {
                                                    width: 16,
                                                    height: 16,
                                                    badge: F.badgeKind,
                                                    primaryTintColor: F.primaryColor,
                                                    secondaryTintColor: F.secondaryColor
                                                }),
                                                (0, n.jsx)(s.Text, {
                                                    variant: 'text-xs/medium',
                                                    color: 'text-primary',
                                                    children: G
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            (0, n.jsx)(s.X6q, {
                                variant: 'heading-md/medium',
                                color: 'header-primary',
                                lineClamp: 1,
                                children: (0, n.jsx)(s.ua7, {
                                    text: i.name,
                                    color: s.ua7.Colors.PRIMARY,
                                    shouldShow: Y,
                                    children: (e) =>
                                        (0, n.jsx)(
                                            'span',
                                            j(p({}, e), {
                                                ref: H,
                                                className: I.nameText,
                                                children: i.name
                                            })
                                        )
                                })
                            }),
                            (0, n.jsxs)('div', {
                                className: I.clanInfoRow,
                                children: [
                                    (0, n.jsx)(s.Text, {
                                        variant: 'text-xxs/normal',
                                        className: I.clanInfoItem,
                                        children: (0, n.jsx)('span', {
                                            role: 'img',
                                            'aria-label': E.NW.string(E.t.eMSBIC),
                                            children: '\uD83C\uDFAE'
                                        })
                                    }),
                                    (0, n.jsx)(s.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'text-secondary',
                                        className: I.clanInfoItem,
                                        children: null !== (t = (0, v.mv)(i.playstyle)) && void 0 !== t ? t : E.NW.string(E.t.JijC4O)
                                    }),
                                    (0, n.jsx)(b, {
                                        wildcardDescriptors: i.wildcardDescriptors,
                                        primaryColor: i.branding.primaryColor
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, n.jsx)(N, {
                        description: i.description,
                        expanded: d
                    }),
                    (0, n.jsx)(y, {
                        traits: ee,
                        traitsToHighlight: T,
                        onInteraction: et('traits')
                    })
                ]
            }),
            (0, n.jsxs)('div', {
                className: I.cardFooter,
                children: [
                    (0, n.jsx)('div', {
                        className: I.cardFooterInfo,
                        children: (0, n.jsx)('div', {
                            className: I.cardFooterMembers,
                            children: (0, n.jsx)(s.Text, {
                                variant: 'text-xs/normal',
                                color: 'text-muted',
                                children: K
                            })
                        })
                    }),
                    (0, n.jsx)('div', {
                        className: I.cardFooterGames,
                        children: (0, n.jsx)(f.Z, {
                            games: Z,
                            prioritizedGameIds: O,
                            gameActivity: U,
                            onInteraction: et('games')
                        })
                    })
                ]
            }),
            A &&
                (0, n.jsx)('div', {
                    className: I.cardBrandingFooter,
                    style: { background: 'linear-gradient(90deg, '.concat(V, ', ').concat(M, ')') }
                }),
            w
        ]
    });
}
