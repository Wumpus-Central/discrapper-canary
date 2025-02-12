n.d(t, { Z: () => X }), n(47120), n(653041), n(773603);
var i = n(200651),
    s = n(192379),
    l = n(120356),
    r = n.n(l),
    a = n(442837),
    o = n(704215),
    c = n(692547),
    d = n(780384),
    u = n(481060),
    h = n(570140),
    m = n(457330),
    g = n(497321),
    x = n(23551),
    _ = n(468026),
    p = n(410030),
    E = n(726542),
    C = n(122021),
    f = n(275759),
    N = n(231757),
    I = n(888496),
    T = n(605236),
    S = n(565138),
    j = n(297700),
    v = n(553795),
    b = n(430824),
    A = n(771845),
    O = n(246946),
    R = n(626135),
    D = n(63063),
    P = n(706454),
    y = n(349728),
    Z = n(494620),
    L = n(205266),
    k = n(216153),
    B = n(981631),
    M = n(856651),
    V = n(921944),
    w = n(388032),
    U = n(18528),
    G = n(814632);
let F = (e) => {
    var t, n;
    let s,
        { integration: l } = e,
        {
            isJoining: r,
            joinErrorMessage: o,
            showJoinErrorMessage: c
        } = (0, a.cj)(
            [v.Z],
            () => ({
                isJoining: v.Z.isJoining(l.id),
                joinErrorMessage: '' === v.Z.joinErrorMessage(l.id) ? w.intl.string(w.t.j2d6Ki) : v.Z.joinErrorMessage(l.id),
                showJoinErrorMessage: void 0 !== v.Z.joinErrorMessage(l.id)
            }),
            [l.id]
        );
    return (
        null != (0, a.e7)([b.Z], () => b.Z.getGuild(l.guild.id), [l.guild.id]) ||
            (s = (0, i.jsx)(u.zxk, {
                size: u.PhG.SMALL,
                onClick: function () {
                    m.Z.joinServer(l.id, () => {});
                },
                disabled: r,
                children: (0, i.jsx)('span', { children: r ? w.intl.string(w.t.RXvQQk) : w.intl.string(w.t.XpeFYm) })
            })),
        (0, i.jsxs)('div', {
            className: U.integrationWrapper,
            children: [
                (0, i.jsxs)('div', {
                    className: U.integration,
                    children: [
                        (0, i.jsx)(S.Z, {
                            size: S.Z.Sizes.SMALL,
                            guild: l.guild,
                            className: U.guildIcon
                        }),
                        (0, i.jsxs)('div', {
                            className: U.integrationInner,
                            children: [
                                (0, i.jsx)(u.Text, {
                                    variant: 'text-md/semibold',
                                    color: 'header-primary',
                                    children: l.guild.toString()
                                }),
                                (0, i.jsx)(u.eee, {
                                    href: null === (n = E.Z.get(l.type)) || void 0 === n ? void 0 : null === (t = n.getPlatformUserUrl) || void 0 === t ? void 0 : t.call(n, l.account),
                                    children: (0, i.jsx)(u.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'header-secondary',
                                        children: l.account.name
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
function z(e) {
    var t;
    let n,
        l,
        r,
        { onDisconnect: a, account: o, theme: h, locale: g } = e,
        [x, p] = s.useState(o.friendSync),
        [T, S] = s.useState(o.visibility),
        [v, b] = s.useState(o.metadataVisibility),
        [A, O] = s.useState(o.showActivity),
        [R, P] = s.useState(null),
        [V, G] = s.useState(null),
        [z, Y] = s.useState(!1),
        [H, W] = s.useState([]),
        K = (0, C.rR)(o.type),
        X = E.Z.get(K);
    s.useEffect(() => {
        p(o.friendSync), S(o.visibility), b(o.metadataVisibility), O(o.showActivity);
    }, [o]);
    let q = {
            inProgressVisibility: R,
            inProgressMetadataVisibility: V
        },
        J = s.useRef(q);
    s.useEffect(() => {
        J.current = q;
    }),
        s.useEffect(() => {
            if (!1 === o.verified) return;
            let { inProgressVisibility: e, inProgressMetadataVisibility: t } = J.current;
            null != e && (S(e), m.Z.setVisibility(o.type, o.id, e), P(null)), null != t && (b(t), m.Z.setMetadataVisibility(o.type, o.id, t), G(null));
        }, [o]);
    function Q() {
        let e = E.Z.get(o.type),
            t = w.intl.string(w.t.apVJu7);
        (0, y.Z)(o) &&
            (t = (0, i.jsxs)(i.Fragment, {
                children: [
                    t,
                    (0, i.jsx)(Z.Z, {
                        className: U.infoBox,
                        children: w.intl.format(w.t.COW3Xl, { platformName: e.name })
                    })
                ]
            })),
            (0, u.h7j)((n) =>
                (0, i.jsx)(_.default, {
                    title: w.intl.formatToPlainString(w.t.U5x12d, { name: e.name }),
                    body: t,
                    confirmText: w.intl.string(w.t.bsbMV1),
                    cancelText: w.intl.string(w.t['ETE/oK']),
                    onConfirm: a,
                    ...n
                })
            );
    }
    return (0, i.jsxs)('div', {
        className: U.connection,
        children: [
            (function (e) {
                var t;
                let n = E.Z.get(e.type),
                    s = E.Z.get(K),
                    l = '1' === (null !== (t = e.metadata) && void 0 !== t ? t : {})[M.PC.TWITTER_VERIFIED],
                    r = null;
                return (
                    n.type === B.ABu.TWITTER &&
                        l &&
                        (r = (0, i.jsx)(u.ua7, {
                            text: w.intl.string(w.t.Jebrw8),
                            children: (e) =>
                                (0, i.jsx)(j.Z, {
                                    ...e,
                                    color: c.Z.unsafe_rawColors.TWITTER.css,
                                    children: (0, i.jsx)(u.kmB, {
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
                                src: (0, d.wj)(h) ? s.icon.darkSVG : s.icon.lightSVG
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
                                            null != r &&
                                                (0, i.jsx)('div', {
                                                    className: U.connectionAccountLabelVerified,
                                                    children: r
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
                            (0, i.jsx)(u.P3F, {
                                className: U.connectionDelete,
                                onClick: Q,
                                'aria-label': w.intl.string(w.t.ppppRE),
                                focusProps: {
                                    offset: {
                                        top: -4,
                                        left: -4,
                                        right: -4
                                    }
                                },
                                children: (0, i.jsx)(u.Dio, {
                                    size: 'xs',
                                    color: 'currentColor'
                                })
                            })
                        ]
                    })
                );
            })(o),
            o.twoWayLink
                ? null
                : o.type === B.ABu.XBOX
                  ? (0, i.jsx)('div', {
                        className: U.upsellWrapper,
                        children: (0, i.jsx)(k.Y, {})
                    })
                  : o.type === B.ABu.PLAYSTATION
                    ? (0, i.jsx)('div', {
                          className: U.upsellWrapper,
                          children: (0, i.jsx)(L.t, {})
                      })
                    : null,
            (function (e) {
                var t;
                let n = null !== (t = e.metadata) && void 0 !== t ? t : {},
                    s = null,
                    l = (0, f.FI)(n[M.PC.CREATED_AT], g);
                switch (e.type) {
                    case B.ABu.REDDIT:
                        s = (0, I.oP)(n, U.metadataItem);
                        break;
                    case B.ABu.STEAM:
                        s = (0, I.Dq)(n, U.metadataItem);
                        break;
                    case B.ABu.BLUESKY:
                    case B.ABu.TWITTER:
                    case B.ABu.MASTODON:
                        s = (0, I.rJ)(n, U.metadataItem);
                        break;
                    case B.ABu.EBAY:
                        s = (0, I.ul)(n, U.metadataItem);
                        break;
                    case B.ABu.PAYPAL:
                        s = (0, I.li)(n, U.metadataItem);
                        break;
                    case B.ABu.TIKTOK:
                        s = (0, I.hf)(n, U.metadataItem);
                }
                null !== l &&
                    (null == s && (s = []),
                    null == s ||
                        s.push(
                            (0, i.jsx)(
                                u.Text,
                                {
                                    variant: 'text-xs/normal',
                                    color: 'interactive-active',
                                    className: U.connectedAccountVanityMetadataCreatedAt,
                                    children: w.intl.format(w.t['9rfonp'], { date: l })
                                },
                                'member-since'
                            )
                        ));
                let r = H.includes(e.id),
                    a = w.intl.string(w.t.wzzjk5);
                if (null == s || 0 === s.length) {
                    if (!0 !== E.Z.get(e.type).hasMetadata) return null;
                    (s = [
                        (0, i.jsx)(
                            u.IGR,
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
                                children: w.intl.format(w.t.Up2ni4, { helpdeskUrl: D.Z.getArticleURL(B.BhN.CONNECTION_DETAILS) })
                            },
                            'label'
                        )
                    ]),
                        (a = w.intl.string(w.t['LVh3//']));
                }
                return (
                    r && (a = w.intl.string(w.t.i4jeWV)),
                    s.push(
                        (0, i.jsx)(
                            u.zxk,
                            {
                                className: U.metadataRefreshButton,
                                color: r ? u.zxk.Colors.GREEN : u.zxk.Colors.BRAND,
                                size: u.zxk.Sizes.SMALL,
                                submitting: z,
                                disabled: r,
                                'aria-label': w.intl.string(w.t.sCkLYG),
                                onClick: r
                                    ? void 0
                                    : () => {
                                          Y(!0),
                                              m.Z.refresh(e.type, e.id).finally(() => {
                                                  setTimeout(() => {
                                                      H.push(e.id), W(H), Y(!1);
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
            })(o),
            (B.BFP.has(o.type) &&
                (n = (0, i.jsx)(u.j7V, {
                    className: U.connectionOptionSwitch,
                    hideBorder: !0,
                    value: x,
                    onChange: function (e) {
                        p(e), m.Z.setFriendSync(o.type, o.id, e);
                    },
                    children: (0, i.jsx)(u.Text, {
                        variant: 'text-sm/semibold',
                        children: w.intl.string(w.t['+KCMSk'])
                    })
                })),
            B.vbS.has(o.type) &&
                (l = (0, i.jsx)(u.j7V, {
                    className: U.connectionOptionSwitch,
                    hideBorder: !0,
                    value: A,
                    onChange: function (e) {
                        O(e), m.Z.setShowActivity(o.type, o.id, e);
                    },
                    children: (0, i.jsx)(u.Text, {
                        variant: 'text-sm/semibold',
                        children: w.intl.format(w.t['6u6J0t'], { platform: X.name })
                    })
                })),
            (null === (t = E.Z.get(o.type)) || void 0 === t ? void 0 : t.hasMetadata) === !0 &&
                (r = (0, i.jsx)(u.j7V, {
                    className: U.connectionOptionSwitch,
                    hideBorder: !0,
                    value: 1 === v,
                    onChange: function (e) {
                        let { verified: t } = o,
                            n = e ? 1 : 0;
                        if (e && !t) {
                            G(n),
                                (0, N.Z)({
                                    platformType: o.type,
                                    location: 'User Settings'
                                });
                            return;
                        }
                        b(n), m.Z.setMetadataVisibility(o.type, o.id, n);
                    },
                    disabled: 1 !== T || null == o.metadata,
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
                        (0, i.jsx)(u.j7V, {
                            className: U.connectionOptionSwitch,
                            hideBorder: !0,
                            value: 1 === T,
                            onChange: function (e) {
                                let { verified: t } = o,
                                    n = e ? 1 : 0;
                                if (e && !t) {
                                    P(n),
                                        (0, N.Z)({
                                            platformType: o.type,
                                            location: 'User Settings'
                                        });
                                    return;
                                }
                                S(n), m.Z.setVisibility(o.type, o.id, n);
                            },
                            children: (0, i.jsx)(u.Text, {
                                variant: 'text-sm/semibold',
                                children: w.intl.string(w.t.f7yOAQ)
                            })
                        }),
                        r,
                        l,
                        n
                    ]
                })
            })),
            (function () {
                if (o.revoked || o.integrations.length > 0) return (0, i.jsx)(u.$i$, { className: U.connectedAccountSeparator });
            })(),
            o.revoked
                ? (0, i.jsx)(u.xJW, {
                      className: U.integrationsWrapper,
                      children: (0, i.jsx)(u.R94, {
                          className: U.integrationRevoked,
                          children: w.intl.format(w.t['6C4lgI'], {
                              onReconnect: function () {
                                  (0, N.Z)({
                                      platformType: o.type,
                                      location: 'User Settings'
                                  });
                              }
                          })
                      })
                  })
                : o.integrations.length > 0
                  ? (0, i.jsxs)(u.xJW, {
                        className: U.integrationsWrapper,
                        children: [
                            (0, i.jsx)(u.vwX, {
                                tag: u.RB0.H5,
                                children: (0, i.jsx)(u.Text, {
                                    variant: 'text-xs/semibold',
                                    children: w.intl.string(w.t.fOe3fX)
                                })
                            }),
                            (0, i.jsx)('div', { children: o.integrations.map((e) => (0, i.jsx)(F, { integration: e }, e.id)) })
                        ]
                    })
                  : void 0
        ]
    });
}
function Y() {
    return (
        s.useEffect(
            () => () => {
                (0, T.EW)(o.z.NEW_CRUNCHYROLL_CONNECTION, { dismissAction: V.L.AUTO });
            },
            []
        ),
        (0, i.jsxs)('div', {
            className: U.connectContainer,
            children: [
                (0, i.jsx)(u.X6q, {
                    variant: 'heading-md/bold',
                    color: 'interactive-active',
                    className: U.connectHeader,
                    children: w.intl.string(w.t.ZeDrUV)
                }),
                (0, i.jsx)(u.Text, {
                    variant: 'text-xs/normal',
                    color: 'header-secondary',
                    children: w.intl.format(w.t['oYc+Gx'], { privacyPolicyUrl: B.EYA.PRIVACY })
                }),
                (0, i.jsx)(W, {})
            ]
        })
    );
}
function H(e) {
    let t = E.Z.get(e);
    (0, N.Z)({ platformType: t.type }),
        R.default.track(B.rMx.ACCOUNT_LINK_STEP, {
            previous_step: 'desktop connections',
            current_step: 'desktop oauth',
            platform_type: t.type
        });
}
function W() {
    function e() {
        h.Z.dispatch({
            type: 'CONNECTIONS_GRID_MODAL_SHOW',
            onComplete: H
        });
    }
    let t = (0, C.fq)(),
        n = (0, u.bWb)().enabled ? 24 : 18;
    return (0, i.jsxs)('div', {
        className: U.connectionsContainer,
        children: [
            t.slice(0, 10).map((e) =>
                (0, i.jsx)(
                    x.Z,
                    {
                        type: e.type,
                        className: U.__invalid_accountButton,
                        innerClassName: U.accountButtonInner
                    },
                    e.type
                )
            ),
            (0, i.jsx)(u.ua7, {
                text: w.intl.string(w.t.QqTz8f),
                children: (t) => {
                    let { onMouseEnter: s, onMouseLeave: l } = t;
                    return (0, i.jsx)('div', {
                        className: r()(U.accountAddWrapper, U.__invalid_accountButton),
                        children: (0, i.jsx)(u.tEY, {
                            children: (0, i.jsx)('button', {
                                onMouseEnter: s,
                                onMouseLeave: l,
                                className: r()(U.accountAddInner, U.accountButtonInner),
                                type: 'button',
                                onClick: e,
                                'aria-label': w.intl.string(w.t.Zhcj9f),
                                children: (0, i.jsx)(u.Fbu, {
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
        { fetching: s, accounts: l, theme: r, locale: a } = e;
    return (
        (t = s
            ? (0, i.jsx)(u.$jN, {
                  className: G.marginTop20,
                  type: u.$jN.Type.SPINNING_CIRCLE
              })
            : 0 === l.length
              ? (0, i.jsxs)(u.ubH, {
                    className: G.marginTop40,
                    theme: r,
                    children: [
                        (0, i.jsx)(u.oxh, {
                            darkSrc: n(703152),
                            lightSrc: n(548617),
                            width: 230,
                            height: 220
                        }),
                        (0, i.jsx)(u.OZU, {
                            note: w.intl.string(w.t.WenGZ2),
                            children: w.intl.string(w.t['aoLS8/'])
                        })
                    ]
                })
              : l
                    .filter((e) => E.Z.isSupported(e.type))
                    .map((e, t) =>
                        (0, i.jsx)(
                            z,
                            {
                                theme: r,
                                account: e,
                                locale: a,
                                onDisconnect: () =>
                                    (function (e) {
                                        let { type: t, id: n } = e;
                                        m.Z.disconnect(t, n);
                                    })(e)
                            },
                            t
                        )
                    )),
        (0, i.jsx)(u.xJW, {
            className: U.connectionList,
            children: t
        })
    );
}
let X = () => {
    let e = (0, a.e7)([O.Z], () => O.Z.hidePersonalInformation),
        t = (0, a.e7)([v.Z], () => v.Z.isFetching()),
        n = (0, a.e7)([v.Z], () => v.Z.getAccounts()),
        l = (0, p.ZP)();
    (0, a.e7)([A.ZP], () => A.ZP.getFlattenedGuildIds());
    let r = (0, a.e7)([P.default], () => P.default.locale);
    return (s.useEffect(() => {
        m.Z.fetch();
    }, []),
    e)
        ? (0, i.jsx)(g.Z, {})
        : (0, i.jsxs)(u.hjN, {
              className: U.__invalid_connections,
              tag: u.RB0.H1,
              title: w.intl.string(w.t['3fe7U1']),
              children: [
                  (0, i.jsx)(Y, {}),
                  (0, i.jsx)(K, {
                      fetching: t,
                      accounts: n,
                      theme: l,
                      locale: r
                  })
              ]
          });
};
