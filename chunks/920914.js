n.d(t, { Z: () => X }), n(47120), n(653041), n(773603);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(704215),
    c = n(692547),
    d = n(780384),
    u = n(481060),
    m = n(570140),
    g = n(457330),
    p = n(497321),
    h = n(23551),
    f = n(468026),
    N = n(410030),
    x = n(726542),
    b = n(122021),
    _ = n(275759),
    E = n(231757),
    j = n(888496),
    C = n(605236),
    O = n(565138),
    v = n(297700),
    S = n(553795),
    T = n(430824),
    I = n(771845),
    y = n(246946),
    A = n(626135),
    P = n(63063),
    R = n(706454),
    D = n(349728),
    Z = n(494620),
    w = n(205266),
    k = n(216153),
    W = n(981631),
    L = n(856651),
    B = n(921944),
    M = n(388032),
    U = n(863716),
    V = n(455812);
function G(e) {
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
let F = (e) => {
    var t, n;
    let i,
        { integration: s } = e,
        {
            isJoining: a,
            joinErrorMessage: o,
            showJoinErrorMessage: c
        } = (0, l.cj)(
            [S.Z],
            () => ({
                isJoining: S.Z.isJoining(s.id),
                joinErrorMessage: '' === S.Z.joinErrorMessage(s.id) ? M.NW.string(M.t.j2d6Ki) : S.Z.joinErrorMessage(s.id),
                showJoinErrorMessage: void 0 !== S.Z.joinErrorMessage(s.id)
            }),
            [s.id]
        );
    return (
        null != (0, l.e7)([T.Z], () => T.Z.getGuild(s.guild.id), [s.guild.id]) ||
            (i = (0, r.jsx)(u.zxk, {
                size: u.PhG.SMALL,
                onClick: function () {
                    g.Z.joinServer(s.id, () => {});
                },
                disabled: a,
                children: (0, r.jsx)('span', { children: a ? M.NW.string(M.t.RXvQQk) : M.NW.string(M.t.XpeFYm) })
            })),
        (0, r.jsxs)('div', {
            className: U.integrationWrapper,
            children: [
                (0, r.jsxs)('div', {
                    className: U.integration,
                    children: [
                        (0, r.jsx)(O.Z, {
                            size: O.Z.Sizes.SMALL,
                            guild: s.guild,
                            className: U.guildIcon
                        }),
                        (0, r.jsxs)('div', {
                            className: U.integrationInner,
                            children: [
                                (0, r.jsx)(u.Text, {
                                    variant: 'text-md/semibold',
                                    color: 'header-primary',
                                    children: s.guild.toString()
                                }),
                                (0, r.jsx)(u.eee, {
                                    href: null === (n = x.Z.get(s.type)) || void 0 === n ? void 0 : null === (t = n.getPlatformUserUrl) || void 0 === t ? void 0 : t.call(n, s.account),
                                    children: (0, r.jsx)(u.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'header-secondary',
                                        children: s.account.name
                                    })
                                })
                            ]
                        }),
                        i
                    ]
                }),
                c &&
                    (0, r.jsx)(u.Text, {
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
        s,
        a,
        { onDisconnect: l, account: o, theme: m, locale: p } = e,
        [h, N] = i.useState(o.friendSync),
        [C, O] = i.useState(o.visibility),
        [S, T] = i.useState(o.metadataVisibility),
        [I, y] = i.useState(o.showActivity),
        [A, R] = i.useState(null),
        [B, V] = i.useState(null),
        [H, z] = i.useState(!1),
        [Y, K] = i.useState([]),
        q = (0, b.rR)(o.type),
        X = x.Z.get(q);
    i.useEffect(() => {
        N(o.friendSync), O(o.visibility), T(o.metadataVisibility), y(o.showActivity);
    }, [o]);
    let J = {
            inProgressVisibility: A,
            inProgressMetadataVisibility: B
        },
        Q = i.useRef(J);
    i.useEffect(() => {
        Q.current = J;
    }),
        i.useEffect(() => {
            if (!1 === o.verified) return;
            let { inProgressVisibility: e, inProgressMetadataVisibility: t } = Q.current;
            null != e && (O(e), g.Z.setVisibility(o.type, o.id, e), R(null)), null != t && (T(t), g.Z.setMetadataVisibility(o.type, o.id, t), V(null));
        }, [o]);
    function $() {
        let e = x.Z.get(o.type),
            t = M.NW.string(M.t.apVJu7);
        (0, D.Z)(o) &&
            (t = (0, r.jsxs)(r.Fragment, {
                children: [
                    t,
                    (0, r.jsx)(Z.Z, {
                        className: U.infoBox,
                        children: M.NW.format(M.t.COW3Xl, { platformName: e.name })
                    })
                ]
            })),
            (0, u.h7j)((n) =>
                (0, r.jsx)(
                    f.default,
                    G(
                        {
                            title: M.NW.formatToPlainString(M.t.U5x12d, { name: e.name }),
                            body: t,
                            confirmText: M.NW.string(M.t.bsbMV1),
                            cancelText: M.NW.string(M.t['ETE/oK']),
                            onConfirm: l
                        },
                        n
                    )
                )
            );
    }
    return (0, r.jsxs)('div', {
        className: U.connection,
        children: [
            (function (e) {
                var t;
                let n = x.Z.get(e.type),
                    i = x.Z.get(q),
                    s = '1' === (null !== (t = e.metadata) && void 0 !== t ? t : {})[L.PC.TWITTER_VERIFIED],
                    a = null;
                return (
                    n.type === W.ABu.TWITTER &&
                        s &&
                        (a = (0, r.jsx)(u.ua7, {
                            text: M.NW.string(M.t.Jebrw8),
                            children: (e) => {
                                var t, n;
                                return (0, r.jsx)(
                                    v.Z,
                                    ((t = G({}, e)),
                                    (n = n =
                                        {
                                            color: c.Z.unsafe_rawColors.TWITTER.css,
                                            children: (0, r.jsx)(u.kmB, {
                                                size: 'xs',
                                                color: c.Z.unsafe_rawColors.WHITE_500.css
                                            })
                                        }),
                                    Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                        : (function (e, t) {
                                              var n = Object.keys(e);
                                              if (Object.getOwnPropertySymbols) {
                                                  var r = Object.getOwnPropertySymbols(e);
                                                  n.push.apply(n, r);
                                              }
                                              return n;
                                          })(Object(n)).forEach(function (e) {
                                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                          }),
                                    t)
                                );
                            }
                        })),
                    (0, r.jsxs)('div', {
                        className: U.connectionHeader,
                        children: [
                            (0, r.jsx)('img', {
                                alt: i.name,
                                className: U.connectionIcon,
                                src: (0, d.wj)(m) ? i.icon.darkSVG : i.icon.lightSVG
                            }),
                            (0, r.jsxs)('div', {
                                children: [
                                    (0, r.jsxs)('div', {
                                        className: U.connectionAccountLabelContainer,
                                        children: [
                                            (0, r.jsx)(u.Text, {
                                                color: 'header-primary',
                                                variant: 'text-md/semibold',
                                                className: U.connectionAccountValue,
                                                children: e.name
                                            }),
                                            null != a &&
                                                (0, r.jsx)('div', {
                                                    className: U.connectionAccountLabelVerified,
                                                    children: a
                                                })
                                        ]
                                    }),
                                    (0, r.jsx)(u.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'header-secondary',
                                        className: U.connectionAccountLabel,
                                        children: i.name
                                    })
                                ]
                            }),
                            (0, r.jsx)(u.P3F, {
                                className: U.connectionDelete,
                                onClick: $,
                                'aria-label': M.NW.string(M.t.ppppRE),
                                focusProps: {
                                    offset: {
                                        top: -4,
                                        left: -4,
                                        right: -4
                                    }
                                },
                                children: (0, r.jsx)(u.Dio, {
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
                : o.type === W.ABu.XBOX
                  ? (0, r.jsx)('div', {
                        className: U.upsellWrapper,
                        children: (0, r.jsx)(k.Y, {})
                    })
                  : o.type === W.ABu.PLAYSTATION
                    ? (0, r.jsx)('div', {
                          className: U.upsellWrapper,
                          children: (0, r.jsx)(w.t, {})
                      })
                    : null,
            (function (e) {
                var t;
                let n = null !== (t = e.metadata) && void 0 !== t ? t : {},
                    i = null,
                    s = (0, _.FI)(n[L.PC.CREATED_AT], p);
                switch (e.type) {
                    case W.ABu.REDDIT:
                        i = (0, j.oP)(n, U.metadataItem);
                        break;
                    case W.ABu.STEAM:
                        i = (0, j.Dq)(n, U.metadataItem);
                        break;
                    case W.ABu.BLUESKY:
                    case W.ABu.TWITTER:
                    case W.ABu.MASTODON:
                        i = (0, j.rJ)(n, U.metadataItem);
                        break;
                    case W.ABu.EBAY:
                        i = (0, j.ul)(n, U.metadataItem);
                        break;
                    case W.ABu.PAYPAL:
                        i = (0, j.li)(n, U.metadataItem);
                        break;
                    case W.ABu.TIKTOK:
                        i = (0, j.hf)(n, U.metadataItem);
                }
                null !== s &&
                    (null == i && (i = []),
                    null == i ||
                        i.push(
                            (0, r.jsx)(
                                u.Text,
                                {
                                    variant: 'text-xs/normal',
                                    color: 'interactive-active',
                                    className: U.connectedAccountVanityMetadataCreatedAt,
                                    children: M.NW.format(M.t['9rfonp'], { date: s })
                                },
                                'member-since'
                            )
                        ));
                let a = Y.includes(e.id),
                    l = M.NW.string(M.t.wzzjk5);
                if (null == i || 0 === i.length) {
                    if (!0 !== x.Z.get(e.type).hasMetadata) return null;
                    (i = [
                        (0, r.jsx)(
                            u.IGR,
                            {
                                className: U.connectionMetadataUpsellTag,
                                text: M.NW.string(M.t.y2b7CA)
                            },
                            'badge'
                        ),
                        (0, r.jsx)(
                            u.Text,
                            {
                                variant: 'text-xs/normal',
                                className: U.connectionMetadataUpsellDescription,
                                children: M.NW.format(M.t.Up2ni4, { helpdeskUrl: P.Z.getArticleURL(W.BhN.CONNECTION_DETAILS) })
                            },
                            'label'
                        )
                    ]),
                        (l = M.NW.string(M.t['LVh3//']));
                }
                return (
                    a && (l = M.NW.string(M.t.i4jeWV)),
                    i.push(
                        (0, r.jsx)(
                            u.zxk,
                            {
                                className: U.metadataRefreshButton,
                                color: a ? u.zxk.Colors.GREEN : u.zxk.Colors.BRAND,
                                size: u.zxk.Sizes.SMALL,
                                submitting: H,
                                disabled: a,
                                'aria-label': M.NW.string(M.t.sCkLYG),
                                onClick: a
                                    ? void 0
                                    : () => {
                                          z(!0),
                                              g.Z.refresh(e.type, e.id).finally(() => {
                                                  setTimeout(() => {
                                                      Y.push(e.id), K(Y), z(!1);
                                                  }, 2000);
                                              });
                                      },
                                children: l
                            },
                            'refresh-button'
                        )
                    ),
                    (0, r.jsx)('div', {
                        className: U.metadataContainer,
                        children: i
                    })
                );
            })(o),
            (W.BFP.has(o.type) &&
                (n = (0, r.jsx)(u.j7V, {
                    className: U.connectionOptionSwitch,
                    hideBorder: !0,
                    value: h,
                    onChange: function (e) {
                        N(e), g.Z.setFriendSync(o.type, o.id, e);
                    },
                    children: (0, r.jsx)(u.Text, {
                        variant: 'text-sm/semibold',
                        children: M.NW.string(M.t['+KCMSk'])
                    })
                })),
            W.vbS.has(o.type) &&
                (s = (0, r.jsx)(u.j7V, {
                    className: U.connectionOptionSwitch,
                    hideBorder: !0,
                    value: I,
                    onChange: function (e) {
                        y(e), g.Z.setShowActivity(o.type, o.id, e);
                    },
                    children: (0, r.jsx)(u.Text, {
                        variant: 'text-sm/semibold',
                        children: M.NW.format(M.t['6u6J0t'], { platform: X.name })
                    })
                })),
            (null === (t = x.Z.get(o.type)) || void 0 === t ? void 0 : t.hasMetadata) === !0 &&
                (a = (0, r.jsx)(u.j7V, {
                    className: U.connectionOptionSwitch,
                    hideBorder: !0,
                    value: 1 === S,
                    onChange: function (e) {
                        let { verified: t } = o,
                            n = +!!e;
                        if (e && !t) {
                            V(n),
                                (0, E.Z)({
                                    platformType: o.type,
                                    location: 'User Settings'
                                });
                            return;
                        }
                        T(n), g.Z.setMetadataVisibility(o.type, o.id, n);
                    },
                    disabled: 1 !== C || null == o.metadata,
                    children: (0, r.jsx)(u.Text, {
                        variant: 'text-sm/semibold',
                        children: M.NW.string(M.t.FYKGsL)
                    })
                })),
            (0, r.jsx)('div', {
                className: U.connectionOptionsWrapper,
                children: (0, r.jsxs)('div', {
                    className: U.connectionOptions,
                    children: [
                        (0, r.jsx)(u.j7V, {
                            className: U.connectionOptionSwitch,
                            hideBorder: !0,
                            value: 1 === C,
                            onChange: function (e) {
                                let { verified: t } = o,
                                    n = +!!e;
                                if (e && !t) {
                                    R(n),
                                        (0, E.Z)({
                                            platformType: o.type,
                                            location: 'User Settings'
                                        });
                                    return;
                                }
                                O(n), g.Z.setVisibility(o.type, o.id, n);
                            },
                            children: (0, r.jsx)(u.Text, {
                                variant: 'text-sm/semibold',
                                children: M.NW.string(M.t.f7yOAQ)
                            })
                        }),
                        a,
                        s,
                        n
                    ]
                })
            })),
            (function () {
                if (o.revoked || o.integrations.length > 0) return (0, r.jsx)(u.$i$, { className: U.connectedAccountSeparator });
            })(),
            o.revoked
                ? (0, r.jsx)(u.xJW, {
                      className: U.integrationsWrapper,
                      children: (0, r.jsx)(u.R94, {
                          className: U.integrationRevoked,
                          children: M.NW.format(M.t['6C4lgI'], {
                              onReconnect: function () {
                                  (0, E.Z)({
                                      platformType: o.type,
                                      location: 'User Settings'
                                  });
                              }
                          })
                      })
                  })
                : o.integrations.length > 0
                  ? (0, r.jsxs)(u.xJW, {
                        className: U.integrationsWrapper,
                        children: [
                            (0, r.jsx)(u.vwX, {
                                tag: u.RB0.H5,
                                children: (0, r.jsx)(u.Text, {
                                    variant: 'text-xs/semibold',
                                    children: M.NW.string(M.t.fOe3fX)
                                })
                            }),
                            (0, r.jsx)('div', { children: o.integrations.map((e) => (0, r.jsx)(F, { integration: e }, e.id)) })
                        ]
                    })
                  : void 0
        ]
    });
}
function z() {
    return (
        i.useEffect(
            () => () => {
                (0, C.EW)(o.z.NEW_CRUNCHYROLL_CONNECTION, { dismissAction: B.L.AUTO });
            },
            []
        ),
        (0, r.jsxs)('div', {
            className: U.connectContainer,
            children: [
                (0, r.jsx)(u.X6q, {
                    variant: 'heading-md/bold',
                    color: 'interactive-active',
                    className: U.connectHeader,
                    children: M.NW.string(M.t.ZeDrUV)
                }),
                (0, r.jsx)(u.Text, {
                    variant: 'text-xs/normal',
                    color: 'header-secondary',
                    children: M.NW.format(M.t['oYc+Gx'], { privacyPolicyUrl: W.EYA.PRIVACY })
                }),
                (0, r.jsx)(K, {})
            ]
        })
    );
}
function Y(e) {
    let t = x.Z.get(e);
    (0, E.Z)({ platformType: t.type }),
        A.default.track(W.rMx.ACCOUNT_LINK_STEP, {
            previous_step: 'desktop connections',
            current_step: 'desktop oauth',
            platform_type: t.type
        });
}
function K() {
    function e() {
        m.Z.dispatch({
            type: 'CONNECTIONS_GRID_MODAL_SHOW',
            onComplete: Y
        });
    }
    let t = (0, b.fq)(),
        n = (0, u.bWb)().enabled ? 24 : 18;
    return (0, r.jsxs)('div', {
        className: U.connectionsContainer,
        children: [
            t.slice(0, 10).map((e) =>
                (0, r.jsx)(
                    h.Z,
                    {
                        type: e.type,
                        className: U.__invalid_accountButton,
                        innerClassName: U.accountButtonInner
                    },
                    e.type
                )
            ),
            (0, r.jsx)(u.ua7, {
                text: M.NW.string(M.t.QqTz8f),
                children: (t) => {
                    let { onMouseEnter: i, onMouseLeave: s } = t;
                    return (0, r.jsx)('div', {
                        className: a()(U.accountAddWrapper, U.__invalid_accountButton),
                        children: (0, r.jsx)(u.tEY, {
                            children: (0, r.jsx)('button', {
                                onMouseEnter: i,
                                onMouseLeave: s,
                                className: a()(U.accountAddInner, U.accountButtonInner),
                                type: 'button',
                                onClick: e,
                                'aria-label': M.NW.string(M.t.Zhcj9f),
                                children: (0, r.jsx)(u.Fbu, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    height: n,
                                    width: n,
                                    'aria-label': M.NW.string(M.t.QqTz8f)
                                })
                            })
                        })
                    });
                }
            })
        ]
    });
}
function q(e) {
    let t,
        { fetching: i, accounts: s, theme: a, locale: l } = e;
    return (
        (t = i
            ? (0, r.jsx)(u.$jN, {
                  className: V.marginTop20,
                  type: u.$jN.Type.SPINNING_CIRCLE
              })
            : 0 === s.length
              ? (0, r.jsxs)(u.ubH, {
                    className: V.marginTop40,
                    theme: a,
                    children: [
                        (0, r.jsx)(u.oxh, {
                            darkSrc: n(703152),
                            lightSrc: n(548617),
                            width: 230,
                            height: 220
                        }),
                        (0, r.jsx)(u.OZU, {
                            note: M.NW.string(M.t.WenGZ2),
                            children: M.NW.string(M.t['aoLS8/'])
                        })
                    ]
                })
              : s
                    .filter((e) => x.Z.isSupported(e.type))
                    .map((e, t) =>
                        (0, r.jsx)(
                            H,
                            {
                                theme: a,
                                account: e,
                                locale: l,
                                onDisconnect: () =>
                                    (function (e) {
                                        let { type: t, id: n } = e;
                                        g.Z.disconnect(t, n);
                                    })(e)
                            },
                            t
                        )
                    )),
        (0, r.jsx)(u.xJW, {
            className: U.connectionList,
            children: t
        })
    );
}
let X = () => {
    let e = (0, l.e7)([y.Z], () => y.Z.hidePersonalInformation),
        t = (0, l.e7)([S.Z], () => S.Z.isFetching()),
        n = (0, l.e7)([S.Z], () => S.Z.getAccounts()),
        s = (0, N.ZP)();
    (0, l.e7)([I.ZP], () => I.ZP.getFlattenedGuildIds());
    let a = (0, l.e7)([R.default], () => R.default.locale);
    return (i.useEffect(() => {
        g.Z.fetch();
    }, []),
    e)
        ? (0, r.jsx)(p.Z, {})
        : (0, r.jsxs)(u.hjN, {
              className: U.__invalid_connections,
              tag: u.RB0.H1,
              title: M.NW.string(M.t['3fe7U1']),
              children: [
                  (0, r.jsx)(z, {}),
                  (0, r.jsx)(q, {
                      fetching: t,
                      accounts: n,
                      theme: s,
                      locale: a
                  })
              ]
          });
};
