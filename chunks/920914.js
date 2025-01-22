n(47120), n(653041), n(773603);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(704215),
    c = n(692547),
    d = n(780384),
    u = n(481060),
    m = n(570140),
    g = n(457330),
    h = n(497321),
    p = n(23551),
    x = n(468026),
    f = n(410030),
    E = n(726542),
    _ = n(122021),
    C = n(275759),
    T = n(231757),
    S = n(888496),
    b = n(605236),
    I = n(565138),
    N = n(297700),
    v = n(553795),
    A = n(430824),
    j = n(771845),
    O = n(246946),
    R = n(626135),
    P = n(63063),
    D = n(706454),
    y = n(349728),
    B = n(494620),
    Z = n(205266),
    L = n(216153),
    M = n(981631),
    k = n(856651),
    w = n(921944),
    F = n(388032),
    U = n(125009),
    V = n(232186);
let G = (e) => {
    var t, n;
    let r,
        { integration: s } = e,
        {
            isJoining: a,
            joinErrorMessage: o,
            showJoinErrorMessage: c
        } = (0, l.cj)(
            [v.Z],
            () => ({
                isJoining: v.Z.isJoining(s.id),
                joinErrorMessage: '' === v.Z.joinErrorMessage(s.id) ? F.intl.string(F.t.j2d6Ki) : v.Z.joinErrorMessage(s.id),
                showJoinErrorMessage: void 0 !== v.Z.joinErrorMessage(s.id)
            }),
            [s.id]
        ),
        d = null != (0, l.e7)([A.Z], () => A.Z.getGuild(s.guild.id), [s.guild.id]);
    return (
        !d &&
            (r = (0, i.jsx)(u.Button, {
                size: u.ButtonSizes.SMALL,
                onClick: function () {
                    g.Z.joinServer(s.id, () => {});
                },
                disabled: a,
                children: (0, i.jsx)('span', { children: a ? F.intl.string(F.t.RXvQQk) : F.intl.string(F.t.XpeFYm) })
            })),
        (0, i.jsxs)('div', {
            className: U.integrationWrapper,
            children: [
                (0, i.jsxs)('div', {
                    className: U.integration,
                    children: [
                        (0, i.jsx)(I.Z, {
                            size: I.Z.Sizes.SMALL,
                            guild: s.guild,
                            className: U.guildIcon
                        }),
                        (0, i.jsxs)('div', {
                            className: U.integrationInner,
                            children: [
                                (0, i.jsx)(u.Text, {
                                    variant: 'text-md/semibold',
                                    color: 'header-primary',
                                    children: s.guild.toString()
                                }),
                                (0, i.jsx)(u.Anchor, {
                                    href: null === (n = E.Z.get(s.type)) || void 0 === n ? void 0 : null === (t = n.getPlatformUserUrl) || void 0 === t ? void 0 : t.call(n, s.account),
                                    children: (0, i.jsx)(u.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'header-secondary',
                                        children: s.account.name
                                    })
                                })
                            ]
                        }),
                        r
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
    var t, n, s;
    let a,
        l,
        o,
        { onDisconnect: m, account: h, theme: p, locale: f } = e,
        [b, I] = r.useState(h.friendSync),
        [v, A] = r.useState(h.visibility),
        [j, O] = r.useState(h.metadataVisibility),
        [R, D] = r.useState(h.showActivity),
        [w, V] = r.useState(null),
        [H, Y] = r.useState(null),
        [W, z] = r.useState(!1),
        [K, q] = r.useState([]),
        Q = (0, _.rR)(h.type),
        X = E.Z.get(Q);
    r.useEffect(() => {
        I(h.friendSync), A(h.visibility), O(h.metadataVisibility), D(h.showActivity);
    }, [h]);
    let J = {
            inProgressVisibility: w,
            inProgressMetadataVisibility: H
        },
        $ = r.useRef(J);
    r.useEffect(() => {
        $.current = J;
    }),
        r.useEffect(() => {
            if (!1 === h.verified) return;
            let { inProgressVisibility: e, inProgressMetadataVisibility: t } = $.current;
            null != e && (A(e), g.Z.setVisibility(h.type, h.id, e), V(null)), null != t && (O(t), g.Z.setMetadataVisibility(h.type, h.id, t), Y(null));
        }, [h]);
    function ee() {
        (0, T.Z)({
            platformType: h.type,
            location: 'User Settings'
        });
    }
    function et() {
        let e = E.Z.get(h.type),
            t = F.intl.string(F.t.apVJu7);
        (0, y.Z)(h) &&
            (t = (0, i.jsxs)(i.Fragment, {
                children: [
                    t,
                    (0, i.jsx)(B.Z, {
                        className: U.infoBox,
                        children: F.intl.format(F.t.COW3Xl, { platformName: e.name })
                    })
                ]
            })),
            (0, u.openModal)((n) =>
                (0, i.jsx)(x.default, {
                    title: F.intl.formatToPlainString(F.t.U5x12d, { name: e.name }),
                    body: t,
                    confirmText: F.intl.string(F.t.bsbMV1),
                    cancelText: F.intl.string(F.t['ETE/oK']),
                    onConfirm: m,
                    ...n
                })
            );
    }
    function en(e) {
        let { verified: t } = h,
            n = e ? 1 : 0;
        if (e && !t) {
            V(n),
                (0, T.Z)({
                    platformType: h.type,
                    location: 'User Settings'
                });
            return;
        }
        A(n), g.Z.setVisibility(h.type, h.id, n);
    }
    function ei(e) {
        let { verified: t } = h,
            n = e ? 1 : 0;
        if (e && !t) {
            Y(n),
                (0, T.Z)({
                    platformType: h.type,
                    location: 'User Settings'
                });
            return;
        }
        O(n), g.Z.setMetadataVisibility(h.type, h.id, n);
    }
    function er(e) {
        I(e), g.Z.setFriendSync(h.type, h.id, e);
    }
    function es(e) {
        D(e), g.Z.setShowActivity(h.type, h.id, e);
    }
    return (0, i.jsxs)('div', {
        className: U.connection,
        children: [
            (function (e) {
                var t;
                let n = E.Z.get(e.type),
                    r = E.Z.get(Q),
                    s = '1' === (null !== (t = e.metadata) && void 0 !== t ? t : {})[k.PC.TWITTER_VERIFIED],
                    a = null;
                return (
                    n.type === M.ABu.TWITTER &&
                        s &&
                        (a = (0, i.jsx)(u.Tooltip, {
                            text: F.intl.string(F.t.Jebrw8),
                            children: (e) =>
                                (0, i.jsx)(N.Z, {
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
                                alt: r.name,
                                className: U.connectionIcon,
                                src: (0, d.wj)(p) ? r.icon.darkSVG : r.icon.lightSVG
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
                                            null != a &&
                                                (0, i.jsx)('div', {
                                                    className: U.connectionAccountLabelVerified,
                                                    children: a
                                                })
                                        ]
                                    }),
                                    (0, i.jsx)(u.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'header-secondary',
                                        className: U.connectionAccountLabel,
                                        children: r.name
                                    })
                                ]
                            }),
                            (0, i.jsx)(u.Clickable, {
                                className: U.connectionDelete,
                                onClick: et,
                                'aria-label': F.intl.string(F.t.ppppRE),
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
            })(h),
            (t = h).twoWayLink
                ? null
                : t.type === M.ABu.XBOX
                  ? (0, i.jsx)('div', {
                        className: U.upsellWrapper,
                        children: (0, i.jsx)(L.Y, {})
                    })
                  : t.type === M.ABu.PLAYSTATION
                    ? (0, i.jsx)('div', {
                          className: U.upsellWrapper,
                          children: (0, i.jsx)(Z.t, {})
                      })
                    : null,
            (function (e) {
                var t;
                let n = null !== (t = e.metadata) && void 0 !== t ? t : {},
                    r = null,
                    s = (0, C.FI)(n[k.PC.CREATED_AT], f);
                switch (e.type) {
                    case M.ABu.REDDIT:
                        r = (0, S.oP)(n, U.metadataItem);
                        break;
                    case M.ABu.STEAM:
                        r = (0, S.Dq)(n, U.metadataItem);
                        break;
                    case M.ABu.BLUESKY:
                    case M.ABu.TWITTER:
                    case M.ABu.MASTODON:
                        r = (0, S.rJ)(n, U.metadataItem);
                        break;
                    case M.ABu.EBAY:
                        r = (0, S.ul)(n, U.metadataItem);
                        break;
                    case M.ABu.PAYPAL:
                        r = (0, S.li)(n, U.metadataItem);
                        break;
                    case M.ABu.TIKTOK:
                        r = (0, S.hf)(n, U.metadataItem);
                }
                null !== s &&
                    (null == r && (r = []),
                    null == r ||
                        r.push(
                            (0, i.jsx)(
                                u.Text,
                                {
                                    variant: 'text-xs/normal',
                                    color: 'interactive-active',
                                    className: U.connectedAccountVanityMetadataCreatedAt,
                                    children: F.intl.format(F.t['9rfonp'], { date: s })
                                },
                                'member-since'
                            )
                        ));
                let a = K.includes(e.id),
                    l = F.intl.string(F.t.wzzjk5);
                if (null == r || 0 === r.length) {
                    if (!0 !== E.Z.get(e.type).hasMetadata) return null;
                    (r = [
                        (0, i.jsx)(
                            u.TextBadge,
                            {
                                className: U.connectionMetadataUpsellTag,
                                text: F.intl.string(F.t.y2b7CA)
                            },
                            'badge'
                        ),
                        (0, i.jsx)(
                            u.Text,
                            {
                                variant: 'text-xs/normal',
                                className: U.connectionMetadataUpsellDescription,
                                children: F.intl.format(F.t.Up2ni4, { helpdeskUrl: P.Z.getArticleURL(M.BhN.CONNECTION_DETAILS) })
                            },
                            'label'
                        )
                    ]),
                        (l = F.intl.string(F.t['LVh3//']));
                }
                return (
                    a && (l = F.intl.string(F.t.i4jeWV)),
                    r.push(
                        (0, i.jsx)(
                            u.Button,
                            {
                                className: U.metadataRefreshButton,
                                color: a ? u.Button.Colors.GREEN : u.Button.Colors.BRAND,
                                size: u.Button.Sizes.SMALL,
                                submitting: W,
                                disabled: a,
                                'aria-label': F.intl.string(F.t.sCkLYG),
                                onClick: a
                                    ? void 0
                                    : () => {
                                          z(!0),
                                              g.Z.refresh(e.type, e.id).finally(() => {
                                                  setTimeout(() => {
                                                      K.push(e.id), q(K), z(!1);
                                                  }, 2000);
                                              });
                                      },
                                children: l
                            },
                            'refresh-button'
                        )
                    ),
                    (0, i.jsx)('div', {
                        className: U.metadataContainer,
                        children: r
                    })
                );
            })(h),
            ((n = X),
            M.BFP.has(h.type) &&
                (a = (0, i.jsx)(u.FormSwitch, {
                    className: U.connectionOptionSwitch,
                    hideBorder: !0,
                    value: b,
                    onChange: er,
                    children: (0, i.jsx)(u.Text, {
                        variant: 'text-sm/semibold',
                        children: F.intl.string(F.t['+KCMSk'])
                    })
                })),
            M.vbS.has(h.type) &&
                (l = (0, i.jsx)(u.FormSwitch, {
                    className: U.connectionOptionSwitch,
                    hideBorder: !0,
                    value: R,
                    onChange: es,
                    children: (0, i.jsx)(u.Text, {
                        variant: 'text-sm/semibold',
                        children: F.intl.format(F.t['6u6J0t'], { platform: n.name })
                    })
                })),
            (null === (s = E.Z.get(h.type)) || void 0 === s ? void 0 : s.hasMetadata) === !0 &&
                (o = (0, i.jsx)(u.FormSwitch, {
                    className: U.connectionOptionSwitch,
                    hideBorder: !0,
                    value: 1 === j,
                    onChange: ei,
                    disabled: 1 !== v || null == h.metadata,
                    children: (0, i.jsx)(u.Text, {
                        variant: 'text-sm/semibold',
                        children: F.intl.string(F.t.FYKGsL)
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
                            value: 1 === v,
                            onChange: en,
                            children: (0, i.jsx)(u.Text, {
                                variant: 'text-sm/semibold',
                                children: F.intl.string(F.t.f7yOAQ)
                            })
                        }),
                        o,
                        l,
                        a
                    ]
                })
            })),
            (function () {
                if (h.revoked || h.integrations.length > 0) return (0, i.jsx)(u.FormDivider, { className: U.connectedAccountSeparator });
            })(),
            h.revoked
                ? (0, i.jsx)(u.FormItem, {
                      className: U.integrationsWrapper,
                      children: (0, i.jsx)(u.FormText, {
                          className: U.integrationRevoked,
                          children: F.intl.format(F.t['6C4lgI'], { onReconnect: ee })
                      })
                  })
                : h.integrations.length > 0
                  ? (0, i.jsxs)(u.FormItem, {
                        className: U.integrationsWrapper,
                        children: [
                            (0, i.jsx)(u.FormTitle, {
                                tag: u.FormTitleTags.H5,
                                children: (0, i.jsx)(u.Text, {
                                    variant: 'text-xs/semibold',
                                    children: F.intl.string(F.t.fOe3fX)
                                })
                            }),
                            (0, i.jsx)('div', { children: h.integrations.map((e) => (0, i.jsx)(G, { integration: e }, e.id)) })
                        ]
                    })
                  : void 0
        ]
    });
}
function Y() {
    return (
        r.useEffect(
            () => () => {
                (0, b.EW)(o.z.NEW_CRUNCHYROLL_CONNECTION, { dismissAction: w.L.AUTO });
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
                    children: F.intl.string(F.t.ZeDrUV)
                }),
                (0, i.jsx)(u.Text, {
                    variant: 'text-xs/normal',
                    color: 'header-secondary',
                    children: F.intl.format(F.t['oYc+Gx'], { privacyPolicyUrl: M.EYA.PRIVACY })
                }),
                (0, i.jsx)(z, {})
            ]
        })
    );
}
function W(e) {
    let t = E.Z.get(e);
    (0, T.Z)({ platformType: t.type }),
        R.default.track(M.rMx.ACCOUNT_LINK_STEP, {
            previous_step: 'desktop connections',
            current_step: 'desktop oauth',
            platform_type: t.type
        });
}
function z() {
    function e() {
        m.Z.dispatch({
            type: 'CONNECTIONS_GRID_MODAL_SHOW',
            onComplete: W
        });
    }
    let t = (0, _.fq)(),
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
                text: F.intl.string(F.t.QqTz8f),
                children: (t) => {
                    let { onMouseEnter: r, onMouseLeave: s } = t;
                    return (0, i.jsx)('div', {
                        className: a()(U.accountAddWrapper, U.__invalid_accountButton),
                        children: (0, i.jsx)(u.FocusRing, {
                            children: (0, i.jsx)('button', {
                                onMouseEnter: r,
                                onMouseLeave: s,
                                className: a()(U.accountAddInner, U.accountButtonInner),
                                type: 'button',
                                onClick: e,
                                'aria-label': F.intl.string(F.t.Zhcj9f),
                                children: (0, i.jsx)(u.ChevronSmallRightIcon, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    height: n,
                                    width: n,
                                    'aria-label': F.intl.string(F.t.QqTz8f)
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
        { fetching: r, accounts: s, theme: a, locale: l } = e;
    return (
        (t = r
            ? (0, i.jsx)(u.Spinner, {
                  className: V.marginTop20,
                  type: u.Spinner.Type.SPINNING_CIRCLE
              })
            : 0 === s.length
              ? (0, i.jsxs)(u.EmptyState, {
                    className: V.marginTop40,
                    theme: a,
                    children: [
                        (0, i.jsx)(u.EmptyStateImage, {
                            darkSrc: n(703152),
                            lightSrc: n(548617),
                            width: 230,
                            height: 220
                        }),
                        (0, i.jsx)(u.EmptyStateText, {
                            note: F.intl.string(F.t.WenGZ2),
                            children: F.intl.string(F.t['aoLS8/'])
                        })
                    ]
                })
              : s
                    .filter((e) => E.Z.isSupported(e.type))
                    .map((e, t) =>
                        (0, i.jsx)(
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
        (0, i.jsx)(u.FormItem, {
            className: U.connectionList,
            children: t
        })
    );
}
t.Z = () => {
    let e = (0, l.e7)([O.Z], () => O.Z.hidePersonalInformation),
        t = (0, l.e7)([v.Z], () => v.Z.isFetching()),
        n = (0, l.e7)([v.Z], () => v.Z.getAccounts()),
        s = (0, f.ZP)();
    (0, l.e7)([j.ZP], () => j.ZP.getFlattenedGuildIds());
    let a = (0, l.e7)([D.default], () => D.default.locale);
    return (r.useEffect(() => {
        g.Z.fetch();
    }, []),
    e)
        ? (0, i.jsx)(h.Z, {})
        : (0, i.jsxs)(u.FormSection, {
              className: U.__invalid_connections,
              tag: u.FormTitleTags.H1,
              title: F.intl.string(F.t['3fe7U1']),
              children: [
                  (0, i.jsx)(Y, {}),
                  (0, i.jsx)(K, {
                      fetching: t,
                      accounts: n,
                      theme: s,
                      locale: a
                  })
              ]
          });
};
