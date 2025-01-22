r.d(n, {
    cS: function () {
        return T;
    },
    xV: function () {
        return N;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(481060);
r(442837), r(239091), r(434650);
var c = r(835473),
    d = r(686546);
r(216742), r(246364), r(937111), r(703656), r(271383), r(594174);
var f = r(970606),
    p = r(963202);
r(905362);
var h = r(603368),
    _ = r(353093),
    m = r(449480),
    g = r(114487),
    E = r(214715),
    v = r(550271),
    y = r(308083);
r(981631);
var b = r(388032),
    I = r(319653);
function T(e) {
    let { wildcardDescriptors: n, primaryColor: r } = e,
        i = n.filter((e) => e !== y.U6).join(', '),
        s = (0, u.useToken)(u.tokens.colors.BACKGROUND_FLOATING),
        l = (0, h.pX)(r, s.hex()),
        c = o.useRef(null),
        [d, f] = o.useState(!1);
    if (
        (o.useEffect(() => {
            let e = c.current;
            null != e && null != e.offsetWidth && null != e.scrollWidth && f(e.offsetWidth < e.scrollWidth);
        }, []),
        0 === i.length)
    )
        return null;
    let p = null != l ? { color: l.css() } : void 0;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(u.Text, {
                variant: 'text-xs/normal',
                color: 'text-secondary',
                className: I.clanInfoItem,
                children: '\xB7'
            }),
            (0, a.jsx)(u.Tooltip, {
                text: i,
                color: u.Tooltip.Colors.PRIMARY,
                shouldShow: d,
                children: (e) =>
                    (0, a.jsx)('span', {
                        ...e,
                        style: p,
                        className: I.wildCardText,
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
                className: I.cardContentDescriptionSection,
                children: (0, a.jsx)(u.Text, {
                    variant: 'text-xs/normal',
                    color: 'text-muted',
                    children: n
                })
            })
          : (0, a.jsx)('div', {
                className: I.cardContentDescriptionSection,
                children: (0, a.jsx)(u.Text, {
                    className: I.cardContentDescriptionCollapsed,
                    variant: 'text-xs/normal',
                    color: 'text-muted',
                    lineClamp: 4,
                    children: n
                })
            });
}
function A(e) {
    let { traits: n, traitsToHighlight: r, onInteraction: i } = e,
        s = o.useMemo(() => (null == r ? new Set() : new Set(r)), [r]),
        c = o.useCallback(
            (e) =>
                (0, a.jsx)(
                    E.Z,
                    {
                        className: l()(I.thinTrait, { [I.selectedTrait]: s.has(e) }),
                        text: e,
                        selected: s.has(e)
                    },
                    e
                ),
            [s]
        ),
        d = o.useCallback(
            (e) =>
                (0, a.jsx)(u.HorizontalOverflowListTooltip, {
                    items: e,
                    renderItem: c,
                    onTooltipShow: i
                }),
            [c, i]
        );
    return (0, a.jsx)(u.HorizontalOverflowList, {
        className: I.traitsContainer,
        items: n,
        renderItem: c,
        renderOverflow: d,
        maxLines: 2,
        itemGapPx: 4
    });
}
function C(e) {
    let { hasPendingJoinRequest: n, atMaxMemberCapacity: r, isGuildMember: i } = e;
    if (n)
        return (0, a.jsxs)('div', {
            className: I.headerBadge,
            children: [
                (0, a.jsx)(u.HourglassIcon, { size: 'xxs' }),
                (0, a.jsx)(u.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-normal',
                    children: b.intl.string(b.t['J+MVEx'])
                })
            ]
        });
    if (i)
        return (0, a.jsxs)('div', {
            className: I.headerBadge,
            children: [
                (0, a.jsx)(u.CircleCheckIcon, {
                    size: 'xxs',
                    color: u.tokens.colors.STATUS_POSITIVE
                }),
                (0, a.jsx)(u.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-normal',
                    children: b.intl.string(b.t.cEnaW1)
                })
            ]
        });
    if (r)
        return (0, a.jsxs)('div', {
            className: I.headerBadge,
            children: [
                (0, a.jsx)(u.LockIcon, { size: 'xxs' }),
                (0, a.jsx)(u.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-normal',
                    children: b.intl.string(b.t['76GQ2t'])
                })
            ]
        });
    return null;
}
function N(e) {
    var n;
    let { clan: r, bannerComponent: i, expanded: s, isMember: h = !1, traitsToHighlight: E, prioritizedGameIds: N, className: R, position: O, showBrandingFooter: D = !1, bannerUrl: L, onlyAnimateIconOnHover: x = !1, hasPendingJoinRequest: w = !1, atMaxMemberCapacity: P = !1, footer: M = null } = e,
        {
            tag: k,
            badge: U,
            branding: { primaryColor: B, secondaryColor: G },
            bannerHash: Z,
            gameActivity: F
        } = r,
        V = (0, c.Z)(r.games),
        j = (0, p.i)('clan_discovery_card'),
        [H, Y] = o.useState(!1),
        W = o.useRef(null),
        [K, z] = o.useState(!1),
        q = o.useCallback(() => {
            Y(!0);
        }, []),
        Q = o.useCallback(() => {
            Y(!1);
        }, []),
        X = b.intl.formatToPlainString(b.t['0WHArK'], { count: r.memberCount }),
        J = null != L ? L : (0, _.pY)(r.id, Z),
        $ = null == i && null == J ? { background: 'linear-gradient(90deg, '.concat(B, ', ').concat(G, ')') } : void 0,
        ee =
            null != i
                ? i
                : null != J
                  ? (0, a.jsx)('img', {
                        alt: b.intl.string(b.t.nH6S2d),
                        src: J,
                        className: I.bannerImage
                    })
                  : null,
        et = o.useMemo(() => (0, y.HR)(r.traits, E), [r.traits, E]);
    o.useEffect(() => {
        let e = W.current;
        null != e && null != e.offsetWidth && null != e.scrollWidth && z(e.offsetWidth < e.scrollWidth);
    }, []);
    let en = o.useCallback(
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
        className: l()(I.card, { [I.cardStaticHeight]: !s }, R),
        onMouseEnter: q,
        onMouseLeave: Q,
        children: [
            (0, a.jsxs)('div', {
                className: I.cardBrandingHeader,
                style: $,
                children: [
                    ee,
                    (0, a.jsx)(C, {
                        hasPendingJoinRequest: w,
                        atMaxMemberCapacity: P,
                        isGuildMember: h
                    })
                ]
            }),
            (0, a.jsxs)('div', {
                className: I.cardContent,
                children: [
                    (0, a.jsxs)('div', {
                        className: I.cardContentTitleSection,
                        children: [
                            (0, a.jsxs)('div', {
                                className: I.cardNameAndTagWrapper,
                                children: [
                                    (0, a.jsx)(d.ZP, {
                                        mask: d.QS.CLAN_ICON,
                                        width: 70,
                                        height: 70,
                                        className: I.clanIconMask,
                                        children: (0, a.jsx)('div', {
                                            className: I.clanIconInner,
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
                                        className: I.clanTagChipletWrapper,
                                        children: (0, a.jsx)(u.Tooltip, {
                                            text: b.intl.string(b.t.UfpB2d),
                                            position: 'top',
                                            onTooltipShow: en('tag'),
                                            shouldShow: !h && j,
                                            children: (e) =>
                                                (0, a.jsxs)('div', {
                                                    ...e,
                                                    className: I.clanTagChiplet,
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
                                            className: I.nameText,
                                            children: r.name
                                        })
                                })
                            }),
                            (0, a.jsxs)('div', {
                                className: I.clanInfoRow,
                                children: [
                                    (0, a.jsx)(u.Text, {
                                        variant: 'text-xxs/normal',
                                        className: I.clanInfoItem,
                                        children: (0, a.jsx)('span', {
                                            role: 'img',
                                            'aria-label': b.intl.string(b.t.eMSBIC),
                                            children: '\uD83C\uDFAE'
                                        })
                                    }),
                                    (0, a.jsx)(u.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'text-secondary',
                                        className: I.clanInfoItem,
                                        children: null !== (n = (0, y.mv)(r.playstyle)) && void 0 !== n ? n : b.intl.string(b.t.JijC4O)
                                    }),
                                    (0, a.jsx)(T, {
                                        wildcardDescriptors: r.wildcardDescriptors,
                                        primaryColor: r.branding.primaryColor
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, a.jsx)(S, {
                        description: r.description,
                        expanded: s
                    }),
                    (0, a.jsx)(A, {
                        traits: et,
                        traitsToHighlight: E,
                        onInteraction: en('traits')
                    })
                ]
            }),
            (0, a.jsxs)('div', {
                className: I.cardFooter,
                children: [
                    (0, a.jsx)('div', {
                        className: I.cardFooterInfo,
                        children: (0, a.jsx)('div', {
                            className: I.cardFooterMembers,
                            children: (0, a.jsx)(u.Text, {
                                variant: 'text-xs/normal',
                                color: 'text-muted',
                                children: X
                            })
                        })
                    }),
                    (0, a.jsx)('div', {
                        className: I.cardFooterGames,
                        children: (0, a.jsx)(m.Z, {
                            games: V,
                            prioritizedGameIds: N,
                            gameActivity: F,
                            onInteraction: en('games')
                        })
                    })
                ]
            }),
            D &&
                (0, a.jsx)('div', {
                    className: I.cardBrandingFooter,
                    style: { background: 'linear-gradient(90deg, '.concat(B, ', ').concat(G, ')') }
                }),
            M
        ]
    });
}
