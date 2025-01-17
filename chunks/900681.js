r.d(n, {
    cS: function () {
        return y;
    },
    xV: function () {
        return C;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(481060);
r(442837), r(239091), r(434650);
var c = r(835473),
    d = r(686546);
r(216742), r(246364), r(937111), r(703656), r(271383), r(594174);
var f = r(970606),
    _ = r(963202);
r(905362);
var h = r(603368),
    p = r(353093),
    m = r(449480),
    g = r(114487),
    E = r(214715),
    v = r(550271),
    I = r(308083);
r(981631);
var T = r(388032),
    b = r(319653);
function y(e) {
    let { wildcardDescriptors: n, primaryColor: r } = e,
        i = n.filter((e) => e !== I.U6).join(', '),
        o = (0, u.useToken)(u.tokens.colors.BACKGROUND_FLOATING),
        l = (0, h.pX)(r, o.hex()),
        c = s.useRef(null),
        [d, f] = s.useState(!1);
    if (
        (s.useEffect(() => {
            let e = c.current;
            null != e && null != e.offsetWidth && null != e.scrollWidth && f(e.offsetWidth < e.scrollWidth);
        }, []),
        0 === i.length)
    )
        return null;
    let _ = null != l ? { color: l.css() } : void 0;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(u.Text, {
                variant: 'text-xs/normal',
                color: 'text-secondary',
                className: b.clanInfoItem,
                children: '\xB7'
            }),
            (0, a.jsx)(u.Tooltip, {
                text: i,
                color: u.Tooltip.Colors.PRIMARY,
                shouldShow: d,
                children: (e) =>
                    (0, a.jsx)('span', {
                        ...e,
                        style: _,
                        className: b.wildCardText,
                        ref: c,
                        children: i
                    })
            })
        ]
    });
}
function S(e) {
    let { description: n, expanded: r } = e;
    return null == n
        ? null
        : r
          ? (0, a.jsx)('div', {
                className: b.cardContentDescriptionSection,
                children: (0, a.jsx)(u.Text, {
                    variant: 'text-xs/normal',
                    color: 'text-muted',
                    children: n
                })
            })
          : (0, a.jsx)('div', {
                className: b.cardContentDescriptionSection,
                children: (0, a.jsx)(u.Text, {
                    className: b.cardContentDescriptionCollapsed,
                    variant: 'text-xs/normal',
                    color: 'text-muted',
                    lineClamp: 4,
                    children: n
                })
            });
}
function A(e) {
    let { traits: n, traitsToHighlight: r, onInteraction: i } = e,
        o = s.useMemo(() => (null == r ? new Set() : new Set(r)), [r]),
        c = s.useCallback(
            (e) =>
                (0, a.jsx)(
                    E.Z,
                    {
                        className: l()(b.thinTrait, { [b.selectedTrait]: o.has(e) }),
                        text: e,
                        selected: o.has(e)
                    },
                    e
                ),
            [o]
        ),
        d = s.useCallback(
            (e) =>
                (0, a.jsx)(u.HorizontalOverflowListTooltip, {
                    items: e,
                    renderItem: c,
                    onTooltipShow: i
                }),
            [c, i]
        );
    return (0, a.jsx)(u.HorizontalOverflowList, {
        className: b.traitsContainer,
        items: n,
        renderItem: c,
        renderOverflow: d,
        maxLines: 2,
        itemGapPx: 4
    });
}
function N(e) {
    let { hasPendingJoinRequest: n, atMaxMemberCapacity: r, isGuildMember: i } = e;
    if (n)
        return (0, a.jsxs)('div', {
            className: b.headerBadge,
            children: [
                (0, a.jsx)(u.HourglassIcon, { size: 'xxs' }),
                (0, a.jsx)(u.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-normal',
                    children: T.intl.string(T.t['J+MVEx'])
                })
            ]
        });
    if (i)
        return (0, a.jsxs)('div', {
            className: b.headerBadge,
            children: [
                (0, a.jsx)(u.CircleCheckIcon, {
                    size: 'xxs',
                    color: u.tokens.colors.STATUS_POSITIVE
                }),
                (0, a.jsx)(u.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-normal',
                    children: T.intl.string(T.t.cEnaW1)
                })
            ]
        });
    if (r)
        return (0, a.jsxs)('div', {
            className: b.headerBadge,
            children: [
                (0, a.jsx)(u.LockIcon, { size: 'xxs' }),
                (0, a.jsx)(u.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-normal',
                    children: T.intl.string(T.t['76GQ2t'])
                })
            ]
        });
    return null;
}
function C(e) {
    var n;
    let { clan: r, bannerComponent: i, expanded: o, isMember: h = !1, traitsToHighlight: E, prioritizedGameIds: C, className: R, position: O, showBrandingFooter: D = !1, bannerUrl: L, onlyAnimateIconOnHover: x = !1, hasPendingJoinRequest: w = !1, atMaxMemberCapacity: P = !1, footer: M = null } = e,
        {
            tag: k,
            badge: U,
            branding: { primaryColor: B, secondaryColor: G },
            bannerHash: Z,
            gameActivity: F
        } = r,
        V = (0, c.Z)(r.games),
        j = (0, _.i)('clan_discovery_card'),
        [H, Y] = s.useState(!1),
        W = s.useRef(null),
        [K, z] = s.useState(!1),
        q = s.useCallback(() => {
            Y(!0);
        }, []),
        Q = s.useCallback(() => {
            Y(!1);
        }, []),
        X = T.intl.formatToPlainString(T.t['0WHArK'], { count: r.memberCount }),
        J = null != L ? L : (0, p.pY)(r.id, Z),
        $ = null == i && null == J ? { background: 'linear-gradient(90deg, '.concat(B, ', ').concat(G, ')') } : void 0,
        ee =
            null != i
                ? i
                : null != J
                  ? (0, a.jsx)('img', {
                        alt: T.intl.string(T.t.nH6S2d),
                        src: J,
                        className: b.bannerImage
                    })
                  : null,
        et = s.useMemo(() => (0, I.HR)(r.traits, E), [r.traits, E]);
    s.useEffect(() => {
        let e = W.current;
        null != e && null != e.offsetWidth && null != e.scrollWidth && z(e.offsetWidth < e.scrollWidth);
    }, []);
    let en = s.useCallback(
        (e) => () => {
            (0, f.Gh)({
                position: O,
                guildId: r.id,
                feature: e
            });
        },
        [O, r.id]
    );
    return (0, a.jsxs)('div', {
        className: l()(b.card, { [b.cardStaticHeight]: !o }, R),
        onMouseEnter: q,
        onMouseLeave: Q,
        children: [
            (0, a.jsxs)('div', {
                className: b.cardBrandingHeader,
                style: $,
                children: [
                    ee,
                    (0, a.jsx)(N, {
                        hasPendingJoinRequest: w,
                        atMaxMemberCapacity: P,
                        isGuildMember: h
                    })
                ]
            }),
            (0, a.jsxs)('div', {
                className: b.cardContent,
                children: [
                    (0, a.jsxs)('div', {
                        className: b.cardContentTitleSection,
                        children: [
                            (0, a.jsxs)('div', {
                                className: b.cardNameAndTagWrapper,
                                children: [
                                    (0, a.jsx)(d.ZP, {
                                        mask: d.QS.CLAN_ICON,
                                        width: 70,
                                        height: 70,
                                        className: b.clanIconMask,
                                        children: (0, a.jsx)('div', {
                                            className: b.clanIconInner,
                                            children: (0, a.jsx)(g.b, {
                                                guildId: r.id,
                                                guildName: r.name,
                                                guildIcon: r.icon,
                                                iconSize: 64,
                                                animate: !x || H
                                            })
                                        })
                                    }),
                                    (0, a.jsx)('div', {
                                        className: b.clanTagChipletWrapper,
                                        children: (0, a.jsx)(u.Tooltip, {
                                            text: T.intl.string(T.t.UfpB2d),
                                            position: 'top',
                                            onTooltipShow: en('tag'),
                                            shouldShow: !h && j,
                                            children: (e) =>
                                                (0, a.jsxs)('div', {
                                                    ...e,
                                                    className: b.clanTagChiplet,
                                                    children: [
                                                        (0, a.jsx)(v.A, {
                                                            width: 16,
                                                            height: 16,
                                                            badge: U.badgeKind,
                                                            primaryTintColor: U.primaryColor,
                                                            secondaryTintColor: U.secondaryColor
                                                        }),
                                                        (0, a.jsx)(u.Text, {
                                                            variant: 'text-xs/medium',
                                                            color: 'text-primary',
                                                            children: k
                                                        })
                                                    ]
                                                })
                                        })
                                    })
                                ]
                            }),
                            (0, a.jsx)(u.Heading, {
                                variant: 'heading-md/medium',
                                color: 'header-primary',
                                lineClamp: 1,
                                children: (0, a.jsx)(u.Tooltip, {
                                    text: r.name,
                                    color: u.Tooltip.Colors.PRIMARY,
                                    shouldShow: K,
                                    children: (e) =>
                                        (0, a.jsx)('span', {
                                            ...e,
                                            ref: W,
                                            className: b.nameText,
                                            children: r.name
                                        })
                                })
                            }),
                            (0, a.jsxs)('div', {
                                className: b.clanInfoRow,
                                children: [
                                    (0, a.jsx)(u.Text, {
                                        variant: 'text-xxs/normal',
                                        className: b.clanInfoItem,
                                        children: (0, a.jsx)('span', {
                                            role: 'img',
                                            'aria-label': T.intl.string(T.t.eMSBIC),
                                            children: '\uD83C\uDFAE'
                                        })
                                    }),
                                    (0, a.jsx)(u.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'text-secondary',
                                        className: b.clanInfoItem,
                                        children: null !== (n = (0, I.mv)(r.playstyle)) && void 0 !== n ? n : T.intl.string(T.t.JijC4O)
                                    }),
                                    (0, a.jsx)(y, {
                                        wildcardDescriptors: r.wildcardDescriptors,
                                        primaryColor: r.branding.primaryColor
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, a.jsx)(S, {
                        description: r.description,
                        expanded: o
                    }),
                    (0, a.jsx)(A, {
                        traits: et,
                        traitsToHighlight: E,
                        onInteraction: en('traits')
                    })
                ]
            }),
            (0, a.jsxs)('div', {
                className: b.cardFooter,
                children: [
                    (0, a.jsx)('div', {
                        className: b.cardFooterInfo,
                        children: (0, a.jsx)('div', {
                            className: b.cardFooterMembers,
                            children: (0, a.jsx)(u.Text, {
                                variant: 'text-xs/normal',
                                color: 'text-muted',
                                children: X
                            })
                        })
                    }),
                    (0, a.jsx)('div', {
                        className: b.cardFooterGames,
                        children: (0, a.jsx)(m.Z, {
                            games: V,
                            prioritizedGameIds: C,
                            gameActivity: F,
                            onInteraction: en('games')
                        })
                    })
                ]
            }),
            D &&
                (0, a.jsx)('div', {
                    className: b.cardBrandingFooter,
                    style: { background: 'linear-gradient(90deg, '.concat(B, ', ').concat(G, ')') }
                }),
            M
        ]
    });
}
