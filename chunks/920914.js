n.d(t, { Z: () => q }), n(47120), n(653041), n(773603);
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
    g = n(457330),
    h = n(497321),
    x = n(23551),
    _ = n(468026),
    p = n(410030),
    E = n(726542),
    C = n(122021),
    f = n(275759),
    T = n(231757),
    N = n(888496),
    I = n(605236),
    S = n(565138),
    b = n(297700),
    v = n(553795),
    j = n(430824),
    A = n(771845),
    O = n(246946),
    R = n(626135),
    P = n(63063),
    D = n(706454),
    y = n(349728),
    Z = n(494620),
    k = n(205266),
    L = n(216153),
    B = n(981631),
    M = n(856651),
    w = n(921944),
    V = n(388032),
    U = n(125009),
    G = n(232186);
let F = (e) => {
    var t, n;
    let s,
        { integration: r } = e,
        {
            isJoining: l,
            joinErrorMessage: o,
            showJoinErrorMessage: c
        } = (0, a.cj)(
            [v.Z],
            () => ({
                isJoining: v.Z.isJoining(r.id),
                joinErrorMessage: '' === v.Z.joinErrorMessage(r.id) ? V.intl.string(V.t.j2d6Ki) : v.Z.joinErrorMessage(r.id),
                showJoinErrorMessage: void 0 !== v.Z.joinErrorMessage(r.id)
            }),
            [r.id]
        );
    return (
        null != (0, a.e7)([j.Z], () => j.Z.getGuild(r.guild.id), [r.guild.id]) ||
            (s = (0, i.jsx)(u.zxk, {
                size: u.PhG.SMALL,
                onClick: function () {
                    g.Z.joinServer(r.id, () => {});
                },
                disabled: l,
                children: (0, i.jsx)('span', { children: l ? V.intl.string(V.t.RXvQQk) : V.intl.string(V.t.XpeFYm) })
            })),
        (0, i.jsxs)('div', {
            className: U.integrationWrapper,
            children: [
                (0, i.jsxs)('div', {
                    className: U.integration,
                    children: [
                        (0, i.jsx)(S.Z, {
                            size: S.Z.Sizes.SMALL,
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
                                (0, i.jsx)(u.eee, {
                                    href: null === (n = E.Z.get(r.type)) || void 0 === n ? void 0 : null === (t = n.getPlatformUserUrl) || void 0 === t ? void 0 : t.call(n, r.account),
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
function H(e) {
    var t;
    let n,
        r,
        l,
        { onDisconnect: a, account: o, theme: m, locale: h } = e,
        [x, p] = s.useState(o.friendSync),
        [I, S] = s.useState(o.visibility),
        [v, j] = s.useState(o.metadataVisibility),
        [A, O] = s.useState(o.showActivity),
        [R, D] = s.useState(null),
        [w, G] = s.useState(null),
        [H, z] = s.useState(!1),
        [Y, W] = s.useState([]),
        K = (0, C.rR)(o.type),
        q = E.Z.get(K);
    s.useEffect(() => {
        p(o.friendSync), S(o.visibility), j(o.metadataVisibility), O(o.showActivity);
    }, [o]);
    let X = {
            inProgressVisibility: R,
            inProgressMetadataVisibility: w
        },
        J = s.useRef(X);
    s.useEffect(() => {
        J.current = X;
    }),
        s.useEffect(() => {
            if (!1 === o.verified) return;
            let { inProgressVisibility: e, inProgressMetadataVisibility: t } = J.current;
            null != e && (S(e), g.Z.setVisibility(o.type, o.id, e), D(null)), null != t && (j(t), g.Z.setMetadataVisibility(o.type, o.id, t), G(null));
        }, [o]);
    function Q() {
        let e = E.Z.get(o.type),
            t = V.intl.string(V.t.apVJu7);
        (0, y.Z)(o) &&
            (t = (0, i.jsxs)(i.Fragment, {
                children: [
                    t,
                    (0, i.jsx)(Z.Z, {
                        className: U.infoBox,
                        children: V.intl.format(V.t.COW3Xl, { platformName: e.name })
                    })
                ]
            })),
            (0, u.h7j)((n) =>
                (0, i.jsx)(_.default, {
                    title: V.intl.formatToPlainString(V.t.U5x12d, { name: e.name }),
                    body: t,
                    confirmText: V.intl.string(V.t.bsbMV1),
                    cancelText: V.intl.string(V.t['ETE/oK']),
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
                    r = '1' === (null !== (t = e.metadata) && void 0 !== t ? t : {})[M.PC.TWITTER_VERIFIED],
                    l = null;
                return (
                    n.type === B.ABu.TWITTER &&
                        r &&
                        (l = (0, i.jsx)(u.ua7, {
                            text: V.intl.string(V.t.Jebrw8),
                            children: (e) =>
                                (0, i.jsx)(b.Z, {
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
                                src: (0, d.wj)(m) ? s.icon.darkSVG : s.icon.lightSVG
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
                            (0, i.jsx)(u.P3F, {
                                className: U.connectionDelete,
                                onClick: Q,
                                'aria-label': V.intl.string(V.t.ppppRE),
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
                        children: (0, i.jsx)(L.Y, {})
                    })
                  : o.type === B.ABu.PLAYSTATION
                    ? (0, i.jsx)('div', {
                          className: U.upsellWrapper,
                          children: (0, i.jsx)(k.t, {})
                      })
                    : null,
            (function (e) {
                var t;
                let n = null !== (t = e.metadata) && void 0 !== t ? t : {},
                    s = null,
                    r = (0, f.FI)(n[M.PC.CREATED_AT], h);
                switch (e.type) {
                    case B.ABu.REDDIT:
                        s = (0, N.oP)(n, U.metadataItem);
                        break;
                    case B.ABu.STEAM:
                        s = (0, N.Dq)(n, U.metadataItem);
                        break;
                    case B.ABu.BLUESKY:
                    case B.ABu.TWITTER:
                    case B.ABu.MASTODON:
                        s = (0, N.rJ)(n, U.metadataItem);
                        break;
                    case B.ABu.EBAY:
                        s = (0, N.ul)(n, U.metadataItem);
                        break;
                    case B.ABu.PAYPAL:
                        s = (0, N.li)(n, U.metadataItem);
                        break;
                    case B.ABu.TIKTOK:
                        s = (0, N.hf)(n, U.metadataItem);
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
                                    children: V.intl.format(V.t['9rfonp'], { date: r })
                                },
                                'member-since'
                            )
                        ));
                let l = Y.includes(e.id),
                    a = V.intl.string(V.t.wzzjk5);
                if (null == s || 0 === s.length) {
                    if (!0 !== E.Z.get(e.type).hasMetadata) return null;
                    (s = [
                        (0, i.jsx)(
                            u.IGR,
                            {
                                className: U.connectionMetadataUpsellTag,
                                text: V.intl.string(V.t.y2b7CA)
                            },
                            'badge'
                        ),
                        (0, i.jsx)(
                            u.Text,
                            {
                                variant: 'text-xs/normal',
                                className: U.connectionMetadataUpsellDescription,
                                children: V.intl.format(V.t.Up2ni4, { helpdeskUrl: P.Z.getArticleURL(B.BhN.CONNECTION_DETAILS) })
                            },
                            'label'
                        )
                    ]),
                        (a = V.intl.string(V.t['LVh3//']));
                }
                return (
                    l && (a = V.intl.string(V.t.i4jeWV)),
                    s.push(
                        (0, i.jsx)(
                            u.zxk,
                            {
                                className: U.metadataRefreshButton,
                                color: l ? u.zxk.Colors.GREEN : u.zxk.Colors.BRAND,
                                size: u.zxk.Sizes.SMALL,
                                submitting: H,
                                disabled: l,
                                'aria-label': V.intl.string(V.t.sCkLYG),
                                onClick: l
                                    ? void 0
                                    : () => {
                                          z(!0),
                                              g.Z.refresh(e.type, e.id).finally(() => {
                                                  setTimeout(() => {
                                                      Y.push(e.id), W(Y), z(!1);
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
                        p(e), g.Z.setFriendSync(o.type, o.id, e);
                    },
                    children: (0, i.jsx)(u.Text, {
                        variant: 'text-sm/semibold',
                        children: V.intl.string(V.t['+KCMSk'])
                    })
                })),
            B.vbS.has(o.type) &&
                (r = (0, i.jsx)(u.j7V, {
                    className: U.connectionOptionSwitch,
                    hideBorder: !0,
                    value: A,
                    onChange: function (e) {
                        O(e), g.Z.setShowActivity(o.type, o.id, e);
                    },
                    children: (0, i.jsx)(u.Text, {
                        variant: 'text-sm/semibold',
                        children: V.intl.format(V.t['6u6J0t'], { platform: q.name })
                    })
                })),
            (null === (t = E.Z.get(o.type)) || void 0 === t ? void 0 : t.hasMetadata) === !0 &&
                (l = (0, i.jsx)(u.j7V, {
                    className: U.connectionOptionSwitch,
                    hideBorder: !0,
                    value: 1 === v,
                    onChange: function (e) {
                        let { verified: t } = o,
                            n = e ? 1 : 0;
                        if (e && !t) {
                            G(n),
                                (0, T.Z)({
                                    platformType: o.type,
                                    location: 'User Settings'
                                });
                            return;
                        }
                        j(n), g.Z.setMetadataVisibility(o.type, o.id, n);
                    },
                    disabled: 1 !== I || null == o.metadata,
                    children: (0, i.jsx)(u.Text, {
                        variant: 'text-sm/semibold',
                        children: V.intl.string(V.t.FYKGsL)
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
                            value: 1 === I,
                            onChange: function (e) {
                                let { verified: t } = o,
                                    n = e ? 1 : 0;
                                if (e && !t) {
                                    D(n),
                                        (0, T.Z)({
                                            platformType: o.type,
                                            location: 'User Settings'
                                        });
                                    return;
                                }
                                S(n), g.Z.setVisibility(o.type, o.id, n);
                            },
                            children: (0, i.jsx)(u.Text, {
                                variant: 'text-sm/semibold',
                                children: V.intl.string(V.t.f7yOAQ)
                            })
                        }),
                        l,
                        r,
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
                          children: V.intl.format(V.t['6C4lgI'], {
                              onReconnect: function () {
                                  (0, T.Z)({
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
                                    children: V.intl.string(V.t.fOe3fX)
                                })
                            }),
                            (0, i.jsx)('div', { children: o.integrations.map((e) => (0, i.jsx)(F, { integration: e }, e.id)) })
                        ]
                    })
                  : void 0
        ]
    });
}
function z() {
    return (
        s.useEffect(
            () => () => {
                (0, I.EW)(o.z.NEW_CRUNCHYROLL_CONNECTION, { dismissAction: w.L.AUTO });
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
                    children: V.intl.string(V.t.ZeDrUV)
                }),
                (0, i.jsx)(u.Text, {
                    variant: 'text-xs/normal',
                    color: 'header-secondary',
                    children: V.intl.format(V.t['oYc+Gx'], { privacyPolicyUrl: B.EYA.PRIVACY })
                }),
                (0, i.jsx)(W, {})
            ]
        })
    );
}
function Y(e) {
    let t = E.Z.get(e);
    (0, T.Z)({ platformType: t.type }),
        R.default.track(B.rMx.ACCOUNT_LINK_STEP, {
            previous_step: 'desktop connections',
            current_step: 'desktop oauth',
            platform_type: t.type
        });
}
function W() {
    function e() {
        m.Z.dispatch({
            type: 'CONNECTIONS_GRID_MODAL_SHOW',
            onComplete: Y
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
                text: V.intl.string(V.t.QqTz8f),
                children: (t) => {
                    let { onMouseEnter: s, onMouseLeave: r } = t;
                    return (0, i.jsx)('div', {
                        className: l()(U.accountAddWrapper, U.__invalid_accountButton),
                        children: (0, i.jsx)(u.tEY, {
                            children: (0, i.jsx)('button', {
                                onMouseEnter: s,
                                onMouseLeave: r,
                                className: l()(U.accountAddInner, U.accountButtonInner),
                                type: 'button',
                                onClick: e,
                                'aria-label': V.intl.string(V.t.Zhcj9f),
                                children: (0, i.jsx)(u.Fbu, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    height: n,
                                    width: n,
                                    'aria-label': V.intl.string(V.t.QqTz8f)
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
            ? (0, i.jsx)(u.$jN, {
                  className: G.marginTop20,
                  type: u.$jN.Type.SPINNING_CIRCLE
              })
            : 0 === r.length
              ? (0, i.jsxs)(u.ubH, {
                    className: G.marginTop40,
                    theme: l,
                    children: [
                        (0, i.jsx)(u.oxh, {
                            darkSrc: n(703152),
                            lightSrc: n(548617),
                            width: 230,
                            height: 220
                        }),
                        (0, i.jsx)(u.OZU, {
                            note: V.intl.string(V.t.WenGZ2),
                            children: V.intl.string(V.t['aoLS8/'])
                        })
                    ]
                })
              : r
                    .filter((e) => E.Z.isSupported(e.type))
                    .map((e, t) =>
                        (0, i.jsx)(
                            H,
                            {
                                theme: l,
                                account: e,
                                locale: a,
                                onDisconnect: () =>
                                    (function (e) {
                                        let { type: t, id: n } = e;
                                        g.Z.disconnect(t, n);
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
let q = () => {
    let e = (0, a.e7)([O.Z], () => O.Z.hidePersonalInformation),
        t = (0, a.e7)([v.Z], () => v.Z.isFetching()),
        n = (0, a.e7)([v.Z], () => v.Z.getAccounts()),
        r = (0, p.ZP)();
    (0, a.e7)([A.ZP], () => A.ZP.getFlattenedGuildIds());
    let l = (0, a.e7)([D.default], () => D.default.locale);
    return (s.useEffect(() => {
        g.Z.fetch();
    }, []),
    e)
        ? (0, i.jsx)(h.Z, {})
        : (0, i.jsxs)(u.hjN, {
              className: U.__invalid_connections,
              tag: u.RB0.H1,
              title: V.intl.string(V.t['3fe7U1']),
              children: [
                  (0, i.jsx)(z, {}),
                  (0, i.jsx)(K, {
                      fetching: t,
                      accounts: n,
                      theme: r,
                      locale: l
                  })
              ]
          });
};
