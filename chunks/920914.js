n(47120), n(653041), n(773603);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(442837),
    o = n(704215),
    c = n(692547),
    d = n(780384),
    u = n(481060),
    m = n(570140),
    h = n(457330),
    g = n(497321),
    p = n(23551),
    x = n(468026),
    S = n(410030),
    T = n(726542),
    E = n(122021),
    C = n(275759),
    _ = n(231757),
    f = n(888496),
    I = n(605236),
    N = n(565138),
    A = n(297700),
    b = n(553795),
    v = n(430824),
    j = n(771845),
    O = n(246946),
    R = n(626135),
    P = n(63063),
    D = n(706454),
    y = n(349728),
    B = n(494620),
    L = n(205266),
    Z = n(216153),
    F = n(981631),
    M = n(856651),
    k = n(921944),
    w = n(388032),
    U = n(125009),
    V = n(232186);
let G = (e) => {
    var t, n;
    let s,
        { integration: r } = e,
        {
            isJoining: l,
            joinErrorMessage: o,
            showJoinErrorMessage: c
        } = (0, a.cj)(
            [b.Z],
            () => ({
                isJoining: b.Z.isJoining(r.id),
                joinErrorMessage: '' === b.Z.joinErrorMessage(r.id) ? w.intl.string(w.t.j2d6Ki) : b.Z.joinErrorMessage(r.id),
                showJoinErrorMessage: void 0 !== b.Z.joinErrorMessage(r.id)
            }),
            [r.id]
        ),
        d = null != (0, a.e7)([v.Z], () => v.Z.getGuild(r.guild.id), [r.guild.id]);
    return (
        !d &&
            (s = (0, i.jsx)(u.Button, {
                size: u.ButtonSizes.SMALL,
                onClick: function () {
                    h.Z.joinServer(r.id, () => {});
                },
                disabled: l,
                children: (0, i.jsx)('span', { children: l ? w.intl.string(w.t.RXvQQk) : w.intl.string(w.t.XpeFYm) })
            })),
        (0, i.jsxs)('div', {
            className: U.integrationWrapper,
            children: [
                (0, i.jsxs)('div', {
                    className: U.integration,
                    children: [
                        (0, i.jsx)(N.Z, {
                            size: N.Z.Sizes.SMALL,
                            guild: r.guild,
                            className: U.guildIcon
                        }),
                        (0, i.jsxs)('div', {
                            className: U.integrationInner,
                            children: [
                                (0, i.jsx)(u.Text, {
                                    variant: 'text-md/semibold',
                                    color: 'header-primary',
                                    children: r.guild.toString()
                                }),
                                (0, i.jsx)(u.Anchor, {
                                    href: null === (n = T.Z.get(r.type)) || void 0 === n ? void 0 : null === (t = n.getPlatformUserUrl) || void 0 === t ? void 0 : t.call(n, r.account),
                                    children: (0, i.jsx)(u.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'header-secondary',
                                        children: r.account.name
                                    })
                                })
                            ]
                        }),
                        s
                    ]
                }),
                c &&
                    (0, i.jsx)(u.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-danger',
                        className: U.integrationError,
                        children: o
                    })
            ]
        })
    );
};
function Y(e) {
    var t, n, r;
    let l,
        a,
        o,
        { onDisconnect: m, account: g, theme: p, locale: S } = e,
        [I, N] = s.useState(g.friendSync),
        [b, v] = s.useState(g.visibility),
        [j, O] = s.useState(g.metadataVisibility),
        [R, D] = s.useState(g.showActivity),
        [k, V] = s.useState(null),
        [Y, H] = s.useState(null),
        [z, W] = s.useState(!1),
        [K, q] = s.useState([]),
        X = (0, E.rR)(g.type),
        Q = T.Z.get(X);
    s.useEffect(() => {
        N(g.friendSync), v(g.visibility), O(g.metadataVisibility), D(g.showActivity);
    }, [g]);
    let J = {
            inProgressVisibility: k,
            inProgressMetadataVisibility: Y
        },
        $ = s.useRef(J);
    s.useEffect(() => {
        $.current = J;
    }),
        s.useEffect(() => {
            if (!1 === g.verified) return;
            let { inProgressVisibility: e, inProgressMetadataVisibility: t } = $.current;
            null != e && (v(e), h.Z.setVisibility(g.type, g.id, e), V(null)), null != t && (O(t), h.Z.setMetadataVisibility(g.type, g.id, t), H(null));
        }, [g]);
    function ee() {
        (0, _.Z)({
            platformType: g.type,
            location: 'User Settings'
        });
    }
    function et() {
        let e = T.Z.get(g.type),
            t = w.intl.string(w.t.apVJu7);
        (0, y.Z)(g) &&
            (t = (0, i.jsxs)(i.Fragment, {
                children: [
                    t,
                    (0, i.jsx)(B.Z, {
                        className: U.infoBox,
                        children: w.intl.format(w.t.COW3Xl, { platformName: e.name })
                    })
                ]
            })),
            (0, u.openModal)((n) =>
                (0, i.jsx)(x.default, {
                    title: w.intl.formatToPlainString(w.t.U5x12d, { name: e.name }),
                    body: t,
                    confirmText: w.intl.string(w.t.bsbMV1),
                    cancelText: w.intl.string(w.t['ETE/oK']),
                    onConfirm: m,
                    ...n
                })
            );
    }
    function en(e) {
        let { verified: t } = g,
            n = e ? 1 : 0;
        if (e && !t) {
            V(n),
                (0, _.Z)({
                    platformType: g.type,
                    location: 'User Settings'
                });
            return;
        }
        v(n), h.Z.setVisibility(g.type, g.id, n);
    }
    function ei(e) {
        let { verified: t } = g,
            n = e ? 1 : 0;
        if (e && !t) {
            H(n),
                (0, _.Z)({
                    platformType: g.type,
                    location: 'User Settings'
                });
            return;
        }
        O(n), h.Z.setMetadataVisibility(g.type, g.id, n);
    }
    function es(e) {
        N(e), h.Z.setFriendSync(g.type, g.id, e);
    }
    function er(e) {
        D(e), h.Z.setShowActivity(g.type, g.id, e);
    }
    return (0, i.jsxs)('div', {
        className: U.connection,
        children: [
            (function (e) {
                var t;
                let n = T.Z.get(e.type),
                    s = T.Z.get(X),
                    r = '1' === (null !== (t = e.metadata) && void 0 !== t ? t : {})[M.PC.TWITTER_VERIFIED],
                    l = null;
                return (
                    n.type === F.ABu.TWITTER &&
                        r &&
                        (l = (0, i.jsx)(u.Tooltip, {
                            text: w.intl.string(w.t.Jebrw8),
                            children: (e) =>
                                (0, i.jsx)(A.Z, {
                                    ...e,
                                    color: c.Z.unsafe_rawColors.TWITTER.css,
                                    children: (0, i.jsx)(u.CheckmarkSmallIcon, {
                                        size: 'xs',
                                        color: c.Z.unsafe_rawColors.WHITE_500.css
                                    })
                                })
                        })),
                    (0, i.jsxs)('div', {
                        className: U.connectionHeader,
                        children: [
                            (0, i.jsx)('img', {
                                alt: s.name,
                                className: U.connectionIcon,
                                src: (0, d.wj)(p) ? s.icon.darkSVG : s.icon.lightSVG
                            }),
                            (0, i.jsxs)('div', {
                                children: [
                                    (0, i.jsxs)('div', {
                                        className: U.connectionAccountLabelContainer,
                                        children: [
                                            (0, i.jsx)(u.Text, {
                                                color: 'header-primary',
                                                variant: 'text-md/semibold',
                                                className: U.connectionAccountValue,
                                                children: e.name
                                            }),
                                            null != l &&
                                                (0, i.jsx)('div', {
                                                    className: U.connectionAccountLabelVerified,
                                                    children: l
                                                })
                                        ]
                                    }),
                                    (0, i.jsx)(u.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'header-secondary',
                                        className: U.connectionAccountLabel,
                                        children: s.name
                                    })
                                ]
                            }),
                            (0, i.jsx)(u.Clickable, {
                                className: U.connectionDelete,
                                onClick: et,
                                'aria-label': w.intl.string(w.t.ppppRE),
                                focusProps: {
                                    offset: {
                                        top: -4,
                                        left: -4,
                                        right: -4
                                    }
                                },
                                children: (0, i.jsx)(u.XSmallIcon, {
                                    size: 'xs',
                                    color: 'currentColor'
                                })
                            })
                        ]
                    })
                );
            })(g),
            (t = g).twoWayLink
                ? null
                : t.type === F.ABu.XBOX
                  ? (0, i.jsx)('div', {
                        className: U.upsellWrapper,
                        children: (0, i.jsx)(Z.Y, {})
                    })
                  : t.type === F.ABu.PLAYSTATION
                    ? (0, i.jsx)('div', {
                          className: U.upsellWrapper,
                          children: (0, i.jsx)(L.t, {})
                      })
                    : null,
            (function (e) {
                var t;
                let n = null !== (t = e.metadata) && void 0 !== t ? t : {},
                    s = null,
                    r = (0, C.FI)(n[M.PC.CREATED_AT], S);
                switch (e.type) {
                    case F.ABu.REDDIT:
                        s = (0, f.oP)(n, U.metadataItem);
                        break;
                    case F.ABu.STEAM:
                        s = (0, f.Dq)(n, U.metadataItem);
                        break;
                    case F.ABu.BLUESKY:
                    case F.ABu.TWITTER:
                    case F.ABu.MASTODON:
                        s = (0, f.rJ)(n, U.metadataItem);
                        break;
                    case F.ABu.EBAY:
                        s = (0, f.ul)(n, U.metadataItem);
                        break;
                    case F.ABu.PAYPAL:
                        s = (0, f.li)(n, U.metadataItem);
                        break;
                    case F.ABu.TIKTOK:
                        s = (0, f.hf)(n, U.metadataItem);
                }
                null !== r &&
                    (null == s && (s = []),
                    null == s ||
                        s.push(
                            (0, i.jsx)(
                                u.Text,
                                {
                                    variant: 'text-xs/normal',
                                    color: 'interactive-active',
                                    className: U.connectedAccountVanityMetadataCreatedAt,
                                    children: w.intl.format(w.t['9rfonp'], { date: r })
                                },
                                'member-since'
                            )
                        ));
                let l = K.includes(e.id),
                    a = w.intl.string(w.t.wzzjk5);
                if (null == s || 0 === s.length) {
                    if (!0 !== T.Z.get(e.type).hasMetadata) return null;
                    (s = [
                        (0, i.jsx)(
                            u.TextBadge,
                            {
                                className: U.connectionMetadataUpsellTag,
                                text: w.intl.string(w.t.y2b7CA)
                            },
                            'badge'
                        ),
                        (0, i.jsx)(
                            u.Text,
                            {
                                variant: 'text-xs/normal',
                                className: U.connectionMetadataUpsellDescription,
                                children: w.intl.format(w.t.Up2ni4, { helpdeskUrl: P.Z.getArticleURL(F.BhN.CONNECTION_DETAILS) })
                            },
                            'label'
                        )
                    ]),
                        (a = w.intl.string(w.t['LVh3//']));
                }
                return (
                    l && (a = w.intl.string(w.t.i4jeWV)),
                    s.push(
                        (0, i.jsx)(
                            u.Button,
                            {
                                className: U.metadataRefreshButton,
                                color: l ? u.Button.Colors.GREEN : u.Button.Colors.BRAND,
                                size: u.Button.Sizes.SMALL,
                                submitting: z,
                                disabled: l,
                                'aria-label': w.intl.string(w.t.sCkLYG),
                                onClick: l
                                    ? void 0
                                    : () => {
                                          W(!0),
                                              h.Z.refresh(e.type, e.id).finally(() => {
                                                  setTimeout(() => {
                                                      K.push(e.id), q(K), W(!1);
                                                  }, 2000);
                                              });
                                      },
                                children: a
                            },
                            'refresh-button'
                        )
                    ),
                    (0, i.jsx)('div', {
                        className: U.metadataContainer,
                        children: s
                    })
                );
            })(g),
            ((n = Q),
            F.BFP.has(g.type) &&
                (l = (0, i.jsx)(u.FormSwitch, {
                    className: U.connectionOptionSwitch,
                    hideBorder: !0,
                    value: I,
                    onChange: es,
                    children: (0, i.jsx)(u.Text, {
                        variant: 'text-sm/semibold',
                        children: w.intl.string(w.t['+KCMSk'])
                    })
                })),
            F.vbS.has(g.type) &&
                (a = (0, i.jsx)(u.FormSwitch, {
                    className: U.connectionOptionSwitch,
                    hideBorder: !0,
                    value: R,
                    onChange: er,
                    children: (0, i.jsx)(u.Text, {
                        variant: 'text-sm/semibold',
                        children: w.intl.format(w.t['6u6J0t'], { platform: n.name })
                    })
                })),
            (null === (r = T.Z.get(g.type)) || void 0 === r ? void 0 : r.hasMetadata) === !0 &&
                (o = (0, i.jsx)(u.FormSwitch, {
                    className: U.connectionOptionSwitch,
                    hideBorder: !0,
                    value: 1 === j,
                    onChange: ei,
                    disabled: 1 !== b || null == g.metadata,
                    children: (0, i.jsx)(u.Text, {
                        variant: 'text-sm/semibold',
                        children: w.intl.string(w.t.FYKGsL)
                    })
                })),
            (0, i.jsx)('div', {
                className: U.connectionOptionsWrapper,
                children: (0, i.jsxs)('div', {
                    className: U.connectionOptions,
                    children: [
                        (0, i.jsx)(u.FormSwitch, {
                            className: U.connectionOptionSwitch,
                            hideBorder: !0,
                            value: 1 === b,
                            onChange: en,
                            children: (0, i.jsx)(u.Text, {
                                variant: 'text-sm/semibold',
                                children: w.intl.string(w.t.f7yOAQ)
                            })
                        }),
                        o,
                        a,
                        l
                    ]
                })
            })),
            (function () {
                if (g.revoked || g.integrations.length > 0) return (0, i.jsx)(u.FormDivider, { className: U.connectedAccountSeparator });
            })(),
            g.revoked
                ? (0, i.jsx)(u.FormItem, {
                      className: U.integrationsWrapper,
                      children: (0, i.jsx)(u.FormText, {
                          className: U.integrationRevoked,
                          children: w.intl.format(w.t['6C4lgI'], { onReconnect: ee })
                      })
                  })
                : g.integrations.length > 0
                  ? (0, i.jsxs)(u.FormItem, {
                        className: U.integrationsWrapper,
                        children: [
                            (0, i.jsx)(u.FormTitle, {
                                tag: u.FormTitleTags.H5,
                                children: (0, i.jsx)(u.Text, {
                                    variant: 'text-xs/semibold',
                                    children: w.intl.string(w.t.fOe3fX)
                                })
                            }),
                            (0, i.jsx)('div', { children: g.integrations.map((e) => (0, i.jsx)(G, { integration: e }, e.id)) })
                        ]
                    })
                  : void 0
        ]
    });
}
function H() {
    return (
        s.useEffect(
            () => () => {
                (0, I.EW)(o.z.NEW_CRUNCHYROLL_CONNECTION, { dismissAction: k.L.AUTO });
            },
            []
        ),
        (0, i.jsxs)('div', {
            className: U.connectContainer,
            children: [
                (0, i.jsx)(u.Heading, {
                    variant: 'heading-md/bold',
                    color: 'interactive-active',
                    className: U.connectHeader,
                    children: w.intl.string(w.t.ZeDrUV)
                }),
                (0, i.jsx)(u.Text, {
                    variant: 'text-xs/normal',
                    color: 'header-secondary',
                    children: w.intl.format(w.t['oYc+Gx'], { privacyPolicyUrl: F.EYA.PRIVACY })
                }),
                (0, i.jsx)(W, {})
            ]
        })
    );
}
function z(e) {
    let t = T.Z.get(e);
    (0, _.Z)({ platformType: t.type }),
        R.default.track(F.rMx.ACCOUNT_LINK_STEP, {
            previous_step: 'desktop connections',
            current_step: 'desktop oauth',
            platform_type: t.type
        });
}
function W() {
    function e() {
        m.Z.dispatch({
            type: 'CONNECTIONS_GRID_MODAL_SHOW',
            onComplete: z
        });
    }
    let t = (0, E.fq)(),
        n = (0, u.useRedesignIconContext)().enabled ? 24 : 18;
    return (0, i.jsxs)('div', {
        className: U.connectionsContainer,
        children: [
            t.slice(0, 10).map((e) =>
                (0, i.jsx)(
                    p.Z,
                    {
                        type: e.type,
                        className: U.__invalid_accountButton,
                        innerClassName: U.accountButtonInner
                    },
                    e.type
                )
            ),
            (0, i.jsx)(u.Tooltip, {
                text: w.intl.string(w.t.QqTz8f),
                children: (t) => {
                    let { onMouseEnter: s, onMouseLeave: r } = t;
                    return (0, i.jsx)('div', {
                        className: l()(U.accountAddWrapper, U.__invalid_accountButton),
                        children: (0, i.jsx)(u.FocusRing, {
                            children: (0, i.jsx)('button', {
                                onMouseEnter: s,
                                onMouseLeave: r,
                                className: l()(U.accountAddInner, U.accountButtonInner),
                                type: 'button',
                                onClick: e,
                                'aria-label': w.intl.string(w.t.Zhcj9f),
                                children: (0, i.jsx)(u.ChevronSmallRightIcon, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    height: n,
                                    width: n,
                                    'aria-label': w.intl.string(w.t.QqTz8f)
                                })
                            })
                        })
                    });
                }
            })
        ]
    });
}
function K(e) {
    let t,
        { fetching: s, accounts: r, theme: l, locale: a } = e;
    return (
        (t = s
            ? (0, i.jsx)(u.Spinner, {
                  className: V.marginTop20,
                  type: u.Spinner.Type.SPINNING_CIRCLE
              })
            : 0 === r.length
              ? (0, i.jsxs)(u.EmptyState, {
                    className: V.marginTop40,
                    theme: l,
                    children: [
                        (0, i.jsx)(u.EmptyStateImage, {
                            darkSrc: n(703152),
                            lightSrc: n(548617),
                            width: 230,
                            height: 220
                        }),
                        (0, i.jsx)(u.EmptyStateText, {
                            note: w.intl.string(w.t.WenGZ2),
                            children: w.intl.string(w.t['aoLS8/'])
                        })
                    ]
                })
              : r
                    .filter((e) => T.Z.isSupported(e.type))
                    .map((e, t) =>
                        (0, i.jsx)(
                            Y,
                            {
                                theme: l,
                                account: e,
                                locale: a,
                                onDisconnect: () =>
                                    (function (e) {
                                        let { type: t, id: n } = e;
                                        h.Z.disconnect(t, n);
                                    })(e)
                            },
                            t
                        )
                    )),
        (0, i.jsx)(u.FormItem, {
            className: U.connectionList,
            children: t
        })
    );
}
t.Z = () => {
    let e = (0, a.e7)([O.Z], () => O.Z.hidePersonalInformation),
        t = (0, a.e7)([b.Z], () => b.Z.isFetching()),
        n = (0, a.e7)([b.Z], () => b.Z.getAccounts()),
        r = (0, S.ZP)();
    (0, a.e7)([j.ZP], () => j.ZP.getFlattenedGuildIds());
    let l = (0, a.e7)([D.default], () => D.default.locale);
    return (s.useEffect(() => {
        h.Z.fetch();
    }, []),
    e)
        ? (0, i.jsx)(g.Z, {})
        : (0, i.jsxs)(u.FormSection, {
              className: U.__invalid_connections,
              tag: u.FormTitleTags.H1,
              title: w.intl.string(w.t['3fe7U1']),
              children: [
                  (0, i.jsx)(H, {}),
                  (0, i.jsx)(K, {
                      fetching: t,
                      accounts: n,
                      theme: r,
                      locale: l
                  })
              ]
          });
};
