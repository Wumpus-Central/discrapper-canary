n.d(t, {
    c: () => v,
    x: () => I
}),
    n(388685),
    n(953529);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(481060),
    o = n(835473),
    c = n(686546),
    d = n(970606),
    u = n(603368),
    m = n(353093),
    g = n(449480),
    p = n(114487),
    h = n(214715),
    f = n(550271),
    b = n(308083),
    x = n(388032),
    j = n(194093);
function N(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function v(e) {
    let { wildcardDescriptors: t, primaryColor: n } = e,
        s = t.filter((e) => e !== b.U6).join(', '),
        a = (0, l.dQu)(l.TVs.colors.BACKGROUND_FLOATING),
        o = (0, u.pX)(n, a.hex()),
        c = i.useRef(null),
        [d, m] = i.useState(!1);
    if (
        (i.useEffect(() => {
            let e = c.current;
            null != e && null != e.offsetWidth && null != e.scrollWidth && m(e.offsetWidth < e.scrollWidth);
        }, []),
        0 === s.length)
    )
        return null;
    let g = null != o ? { color: o.css() } : void 0;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l.Text, {
                variant: 'text-xs/normal',
                color: 'text-secondary',
                className: j.clanInfoItem,
                children: '\xB7'
            }),
            (0, r.jsx)(l.ua7, {
                text: s,
                color: l.ua7.Colors.PRIMARY,
                shouldShow: d,
                children: (e) =>
                    (0, r.jsx)(
                        'span',
                        _(N({}, e), {
                            style: g,
                            className: j.wildCardText,
                            ref: c,
                            children: s
                        })
                    )
            })
        ]
    });
}
function C(e) {
    let { description: t, expanded: n } = e;
    return null == t
        ? null
        : n
          ? (0, r.jsx)('div', {
                className: j.cardContentDescriptionSection,
                children: (0, r.jsx)(l.Text, {
                    variant: 'text-xs/normal',
                    color: 'text-muted',
                    children: t
                })
            })
          : (0, r.jsx)('div', {
                className: j.cardContentDescriptionSection,
                children: (0, r.jsx)(l.Text, {
                    className: j.cardContentDescriptionCollapsed,
                    variant: 'text-xs/normal',
                    color: 'text-muted',
                    lineClamp: 4,
                    children: t
                })
            });
}
function O(e) {
    let { traits: t, traitsToHighlight: n, onInteraction: s } = e,
        o = i.useMemo(() => (null == n ? new Set() : new Set(n)), [n]),
        c = i.useCallback(
            (e) =>
                (0, r.jsx)(
                    h.Z,
                    {
                        className: a()(j.thinTrait, { [j.selectedTrait]: o.has(e) }),
                        text: e,
                        selected: o.has(e)
                    },
                    e
                ),
            [o]
        ),
        d = i.useCallback(
            (e) =>
                (0, r.jsx)(l.te1, {
                    items: e,
                    renderItem: c,
                    onTooltipShow: s
                }),
            [c, s]
        );
    return (0, r.jsx)(l.Epb, {
        className: j.traitsContainer,
        items: t,
        renderItem: c,
        renderOverflow: d,
        maxLines: 2,
        itemGapPx: 4
    });
}
function y(e) {
    let { hasPendingJoinRequest: t, atMaxMemberCapacity: n, isGuildMember: i } = e;
    return t
        ? (0, r.jsxs)('div', {
              className: j.headerBadge,
              children: [
                  (0, r.jsx)(l.wGF, { size: 'xxs' }),
                  (0, r.jsx)(l.Text, {
                      variant: 'text-xs/medium',
                      color: 'text-normal',
                      children: x.NW.string(x.t['J+MVEx'])
                  })
              ]
          })
        : i
          ? (0, r.jsxs)('div', {
                className: j.headerBadge,
                children: [
                    (0, r.jsx)(l.owK, {
                        size: 'xxs',
                        color: l.TVs.colors.STATUS_POSITIVE
                    }),
                    (0, r.jsx)(l.Text, {
                        variant: 'text-xs/medium',
                        color: 'text-normal',
                        children: x.NW.string(x.t.cEnaW1)
                    })
                ]
            })
          : n
            ? (0, r.jsxs)('div', {
                  className: j.headerBadge,
                  children: [
                      (0, r.jsx)(l.mBM, { size: 'xxs' }),
                      (0, r.jsx)(l.Text, {
                          variant: 'text-xs/medium',
                          color: 'text-normal',
                          children: x.NW.string(x.t['76GQ2t'])
                      })
                  ]
              })
            : null;
}
function I(e) {
    var t;
    let { clan: n, bannerComponent: s, expanded: u, isMember: h = !1, traitsToHighlight: I, prioritizedGameIds: E, className: S, position: T, showBrandingFooter: P = !1, bannerUrl: w, onlyAnimateIconOnHover: R = !1, hasPendingJoinRequest: D = !1, atMaxMemberCapacity: Z = !1, footer: A = null } = e,
        {
            tag: k,
            badge: W,
            branding: { primaryColor: L, secondaryColor: M },
            bannerHash: G,
            gameActivity: U
        } = n,
        B = (0, o.Z)(n.games),
        [F, z] = i.useState(!1),
        H = i.useRef(null),
        [V, Y] = i.useState(!1),
        K = i.useCallback(() => {
            z(!0);
        }, []),
        q = i.useCallback(() => {
            z(!1);
        }, []),
        X = x.NW.formatToPlainString(x.t['0WHArK'], { count: n.memberCount }),
        Q = null != w ? w : (0, m.pY)(n.id, G),
        J = null == s && null == Q ? { background: 'linear-gradient(90deg, '.concat(L, ', ').concat(M, ')') } : void 0,
        $ =
            null != s
                ? s
                : null != Q
                  ? (0, r.jsx)('img', {
                        alt: x.NW.string(x.t.nH6S2d),
                        src: Q,
                        className: j.bannerImage
                    })
                  : null,
        ee = i.useMemo(() => (0, b.HR)(n.traits, I), [n.traits, I]);
    i.useEffect(() => {
        let e = H.current;
        null != e && null != e.offsetWidth && null != e.scrollWidth && Y(e.offsetWidth < e.scrollWidth);
    }, []);
    let et = i.useCallback(
        (e) => () => {
            (0, d.Gh)({
                position: T,
                guildId: n.id,
                feature: e
            });
        },
        [T, n.id]
    );
    return (0, r.jsxs)('div', {
        className: a()(j.card, { [j.cardStaticHeight]: !u }, S),
        onMouseEnter: K,
        onMouseLeave: q,
        children: [
            (0, r.jsxs)('div', {
                className: j.cardBrandingHeader,
                style: J,
                children: [
                    $,
                    (0, r.jsx)(y, {
                        hasPendingJoinRequest: D,
                        atMaxMemberCapacity: Z,
                        isGuildMember: h
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: j.cardContent,
                children: [
                    (0, r.jsxs)('div', {
                        className: j.cardContentTitleSection,
                        children: [
                            (0, r.jsxs)('div', {
                                className: j.cardNameAndTagWrapper,
                                children: [
                                    (0, r.jsx)(c.ZP, {
                                        mask: c.QS.CLAN_ICON,
                                        width: 70,
                                        height: 70,
                                        className: j.clanIconMask,
                                        children: (0, r.jsx)('div', {
                                            className: j.clanIconInner,
                                            children: (0, r.jsx)(p.b, {
                                                guildId: n.id,
                                                guildName: n.name,
                                                guildIcon: n.icon,
                                                iconSize: 64,
                                                animate: !R || F
                                            })
                                        })
                                    }),
                                    (0, r.jsx)('div', {
                                        className: j.clanTagChipletWrapper,
                                        children: (0, r.jsxs)('div', {
                                            className: j.clanTagChiplet,
                                            children: [
                                                (0, r.jsx)(f.A, {
                                                    width: 16,
                                                    height: 16,
                                                    badge: W.badgeKind,
                                                    primaryTintColor: W.primaryColor,
                                                    secondaryTintColor: W.secondaryColor
                                                }),
                                                (0, r.jsx)(l.Text, {
                                                    variant: 'text-xs/medium',
                                                    color: 'text-primary',
                                                    children: k
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            (0, r.jsx)(l.X6q, {
                                variant: 'heading-md/medium',
                                color: 'header-primary',
                                lineClamp: 1,
                                children: (0, r.jsx)(l.ua7, {
                                    text: n.name,
                                    color: l.ua7.Colors.PRIMARY,
                                    shouldShow: V,
                                    children: (e) =>
                                        (0, r.jsx)(
                                            'span',
                                            _(N({}, e), {
                                                ref: H,
                                                className: j.nameText,
                                                children: n.name
                                            })
                                        )
                                })
                            }),
                            (0, r.jsxs)('div', {
                                className: j.clanInfoRow,
                                children: [
                                    (0, r.jsx)(l.Text, {
                                        variant: 'text-xxs/normal',
                                        className: j.clanInfoItem,
                                        children: (0, r.jsx)('span', {
                                            role: 'img',
                                            'aria-label': x.NW.string(x.t.eMSBIC),
                                            children: '\uD83C\uDFAE'
                                        })
                                    }),
                                    (0, r.jsx)(l.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'text-secondary',
                                        className: j.clanInfoItem,
                                        children: null != (t = (0, b.mv)(n.playstyle)) ? t : x.NW.string(x.t.JijC4O)
                                    }),
                                    (0, r.jsx)(v, {
                                        wildcardDescriptors: n.wildcardDescriptors,
                                        primaryColor: n.branding.primaryColor
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, r.jsx)(C, {
                        description: n.description,
                        expanded: u
                    }),
                    (0, r.jsx)(O, {
                        traits: ee,
                        traitsToHighlight: I,
                        onInteraction: et('traits')
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: j.cardFooter,
                children: [
                    (0, r.jsx)('div', {
                        className: j.cardFooterInfo,
                        children: (0, r.jsx)('div', {
                            className: j.cardFooterMembers,
                            children: (0, r.jsx)(l.Text, {
                                variant: 'text-xs/normal',
                                color: 'text-muted',
                                children: X
                            })
                        })
                    }),
                    (0, r.jsx)('div', {
                        className: j.cardFooterGames,
                        children: (0, r.jsx)(g.Z, {
                            games: B,
                            prioritizedGameIds: E,
                            gameActivity: U,
                            onInteraction: et('games')
                        })
                    })
                ]
            }),
            P &&
                (0, r.jsx)('div', {
                    className: j.cardBrandingFooter,
                    style: { background: 'linear-gradient(90deg, '.concat(L, ', ').concat(M, ')') }
                }),
            A
        ]
    });
}
