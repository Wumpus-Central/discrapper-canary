n.d(t, { d: () => Y, u: () => w }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(158954),
    o = n(311907),
    d = n(827734),
    c = n(990078),
    u = n(582754),
    _ = n(397927),
    g = n(73153),
    A = n(77468),
    m = n(289498),
    h = n(736653),
    p = n(573648),
    x = n(681819),
    E = n(370480),
    T = n(882997),
    S = n(373498),
    C = n(169869),
    I = n(263063),
    f = n(496885),
    N = n(962173),
    b = n(71393),
    v = n(351906),
    O = n(954571),
    j = n(975571),
    R = n(773669),
    y = n(801264),
    P = n(523104),
    D = n(856220),
    L = n(652215),
    G = n(783419),
    M = n(985018),
    U = n(431070);
let k = (e) => {
    let t,
        { integration: n } = e,
        {
            isJoining: s,
            joinErrorMessage: l,
            showJoinErrorMessage: a,
        } = (0, o.cf)(
            [N.A],
            () => ({
                isJoining: N.A.isJoining(n.id),
                joinErrorMessage:
                    "" === N.A.joinErrorMessage(n.id) ? M.intl.string(M.t.j2d6Km) : N.A.joinErrorMessage(n.id),
                showJoinErrorMessage: void 0 !== N.A.joinErrorMessage(n.id),
            }),
            [n.id],
        );
    return (
        null != (0, o.bG)([b.A], () => b.A.getGuild(n.guild.id), [n.guild.id]) ||
            (t = (0, i.jsx)(_.Button, {
                size: "sm",
                onClick: function () {
                    A.A.joinServer(n.id, () => {});
                },
                disabled: s,
                variant: "primary",
                text: s ? M.intl.string(M.t.RXvQQu) : M.intl.string(M.t.XpeFYr),
            })),
        (0, i.jsxs)("div", {
            className: U.iA,
            children: [
                (0, i.jsxs)("div", {
                    className: U.XX,
                    children: [
                        (0, i.jsx)(I.Ay, { size: I.Ay.Sizes.SMALL, guild: n.guild, className: U.$f }),
                        (0, i.jsxs)("div", {
                            className: U.Vn,
                            children: [
                                (0, i.jsx)(_.Text, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: n.guild.name,
                                }),
                                (0, i.jsx)(_.MzZ, {
                                    href: p.A.get(n.type)?.getPlatformUserUrl?.(n.account),
                                    children: (0, i.jsx)(_.Text, {
                                        variant: "text-xs/normal",
                                        color: "text-default",
                                        children: n.account.name,
                                    }),
                                }),
                            ],
                        }),
                        t,
                    ],
                }),
                a &&
                    (0, i.jsx)(_.Text, {
                        variant: "text-xs/normal",
                        color: "text-feedback-critical",
                        className: U.R,
                        children: l,
                    }),
            ],
        })
    );
};
function V(e) {
    let t,
        n,
        l,
        a,
        o,
        g,
        m,
        { onDisconnect: h, account: I, theme: N, locale: b } = e,
        [v, O] = s.useState(I.friendSync),
        [R, V] = s.useState(I.visibility),
        [w, H] = s.useState(I.metadataVisibility),
        [B, F] = s.useState(I.showActivity),
        [Y, z] = s.useState(null),
        [X, W] = s.useState(null),
        [K, Z] = s.useState(!1),
        [q, J] = s.useState([]),
        Q = (0, x.ML)(I.type),
        $ = p.A.get(Q);
    s.useEffect(() => {
        O(I.friendSync), V(I.visibility), H(I.metadataVisibility), F(I.showActivity);
    }, [I]);
    let ee = { inProgressVisibility: Y, inProgressMetadataVisibility: X },
        et = s.useRef(ee);
    return (
        s.useEffect(() => {
            et.current = ee;
        }),
        s.useEffect(() => {
            if (!1 === I.verified) return;
            let { inProgressVisibility: e, inProgressMetadataVisibility: t } = et.current;
            null != e && (V(e), A.A.setVisibility(I.type, I.id, e), z(null)),
                null != t && (H(t), A.A.setMetadataVisibility(I.type, I.id, t), W(null));
        }, [I]),
        (0, i.jsxs)("div", {
            className: U.FI,
            children: [
                ((t = p.A.get(I.type)),
                (n = p.A.get(Q)),
                (l = "1" === (I.metadata ?? {})[G.pK.TWITTER_VERIFIED]),
                (a = null),
                t.type === L.fg2.TWITTER &&
                    l &&
                    (a = (0, i.jsx)(c.m, {
                        text: M.intl.string(M.t.Jebrww),
                        children: (0, i.jsx)(f.A, {
                            color: d.A.unsafe_rawColors.TWITTER.css,
                            children: (0, i.jsx)(_.Uzd, { size: "xs", color: d.A.unsafe_rawColors.WHITE.css }),
                        }),
                    })),
                (0, i.jsxs)("div", {
                    className: U.Il,
                    children: [
                        (0, i.jsx)("img", {
                            alt: n.name,
                            className: U.gj,
                            src: (0, u.Mw)(N) ? n.icon.darkSVG : n.icon.lightSVG,
                        }),
                        (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsxs)("div", {
                                    className: U.$p,
                                    children: [
                                        (0, i.jsx)(_.Text, {
                                            color: "text-strong",
                                            variant: "text-md/semibold",
                                            className: U.RW,
                                            children: I.name,
                                        }),
                                        null != a && (0, i.jsx)("div", { className: U.cG, children: a }),
                                    ],
                                }),
                                (0, i.jsx)(_.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    className: U.Au,
                                    children: n.name,
                                }),
                            ],
                        }),
                        (0, i.jsx)(_.DUT, {
                            className: U.uH,
                            onClick: function () {
                                let e = p.A.get(I.type);
                                (0, _.qfG)((t) =>
                                    (0, i.jsx)(r.Modal, {
                                        title: M.intl.formatToPlainString(M.t.U5x12f, { name: e.name }),
                                        subtitle: M.intl.format(M.t.VgqIPj, { provider: e.name }),
                                        actions: [
                                            {
                                                text: M.intl.string(M.t["ETE/oC"]),
                                                onClick: t.onClose,
                                                variant: "secondary",
                                            },
                                            {
                                                text: M.intl.string(M.t.bsbMVz),
                                                onClick: () => {
                                                    h(), t.onClose();
                                                },
                                                variant: "primary",
                                            },
                                        ],
                                        ...t,
                                        children:
                                            (0, S.A)(I) &&
                                            (0, i.jsx)(y.A, {
                                                children: M.intl.format(M.t.COW3Xn, { platformName: e.name }),
                                            }),
                                    }),
                                );
                            },
                            "aria-label": M.intl.string(M.t.ppppRJ),
                            focusProps: { offset: { top: -4, left: -4, right: -4 } },
                            children: (0, i.jsx)(_.PGe, { size: "xs", color: "currentColor" }),
                        }),
                    ],
                })),
                I.twoWayLink
                    ? null
                    : I.type === L.fg2.XBOX
                      ? (0, i.jsx)(D._, {})
                      : I.type === L.fg2.PLAYSTATION
                        ? (0, i.jsx)(P.j, {})
                        : null,
                (function (e) {
                    let t = e.metadata ?? {},
                        n = null,
                        s = (0, E.An)(t[G.pK.CREATED_AT], b);
                    switch (e.type) {
                        case L.fg2.REDDIT:
                            n = (0, C.xE)(t, U.Nz);
                            break;
                        case L.fg2.STEAM:
                            n = (0, C.dy)(t, U.Nz);
                            break;
                        case L.fg2.BLUESKY:
                        case L.fg2.TWITTER:
                        case L.fg2.MASTODON:
                            n = (0, C.ED)(t, U.Nz);
                            break;
                        case L.fg2.EBAY:
                            n = (0, C.ub)(t, U.Nz);
                            break;
                        case L.fg2.PAYPAL:
                            n = (0, C.gZ)(t, U.Nz);
                            break;
                        case L.fg2.TIKTOK:
                            n = (0, C.HU)(t, U.Nz);
                    }
                    null !== s &&
                        (null == n && (n = []),
                        n?.push(
                            (0, i.jsx)(
                                _.Text,
                                {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    className: U.M4,
                                    children: M.intl.format(M.t["9rfonh"], { date: s }),
                                },
                                "member-since",
                            ),
                        ));
                    let l = q.includes(e.id),
                        a = M.intl.string(M.t.wzzjk9);
                    if (null == n || 0 === n.length)
                        if (!0 !== p.A.get(e.type).hasMetadata) return null;
                        else
                            (n = [
                                (0, i.jsx)(_.LpS, { className: U.Z3, text: M.intl.string(M.t.y2b7CA) }, "badge"),
                                (0, i.jsx)(
                                    _.Text,
                                    {
                                        variant: "text-xs/normal",
                                        className: U.vt,
                                        children: M.intl.format(M.t.Up2ni7, {
                                            helpdeskUrl: j.A.getArticleURL(L.MVz.CONNECTION_DETAILS),
                                        }),
                                    },
                                    "label",
                                ),
                            ]),
                                (a = M.intl.string(M.t["LVh3/5"]));
                    return (
                        l && (a = M.intl.string(M.t.i4jeWR)),
                        n.push(
                            (0, i.jsx)(
                                "div",
                                {
                                    className: U.jy,
                                    children: (0, i.jsx)(_.Button, {
                                        text: a,
                                        variant: "secondary",
                                        size: "sm",
                                        loading: K,
                                        disabled: l,
                                        "aria-label": M.intl.string(M.t.sCkLYH),
                                        onClick: l
                                            ? void 0
                                            : () => {
                                                  Z(!0),
                                                      A.A.refresh(e.type, e.id).finally(() => {
                                                          setTimeout(() => {
                                                              q.push(e.id), J(q), Z(!1);
                                                          }, 2e3);
                                                      });
                                              },
                                    }),
                                },
                                "refresh-button",
                            ),
                        ),
                        (0, i.jsx)("div", { className: U.tJ, children: n })
                    );
                })(I),
                (L.txh.has(I.type) &&
                    (o = (0, i.jsx)(_.dOG, {
                        label: M.intl.string(M.t["+KCMSi"]),
                        checked: v,
                        onChange: function (e) {
                            O(e), A.A.setFriendSync(I.type, I.id, e);
                        },
                    })),
                L.ewM.has(I.type) &&
                    (g = (0, i.jsx)(_.dOG, {
                        label: M.intl.format(M.t["6u6J0q"], { platform: $.name }),
                        checked: B,
                        onChange: function (e) {
                            F(e), A.A.setShowActivity(I.type, I.id, e);
                        },
                    })),
                p.A.get(I.type)?.hasMetadata === !0 &&
                    (m = (0, i.jsx)(_.dOG, {
                        label: M.intl.string(M.t.FYKGsL),
                        checked: 1 === w,
                        onChange: function (e) {
                            let { verified: t } = I,
                                n = +!!e;
                            if (e && !t) {
                                W(n), (0, T.A)({ platformType: I.type, location: "User Settings" });
                                return;
                            }
                            H(n), A.A.setMetadataVisibility(I.type, I.id, n);
                        },
                        disabled: 1 !== R || null == I.metadata,
                    })),
                (0, i.jsxs)("div", {
                    className: U.HZ,
                    children: [
                        (0, i.jsx)(_.dOG, {
                            label: M.intl.string(M.t.f7yOAX),
                            checked: 1 === R,
                            onChange: function (e) {
                                let { verified: t } = I,
                                    n = +!!e;
                                if (e && !t) {
                                    z(n), (0, T.A)({ platformType: I.type, location: "User Settings" });
                                    return;
                                }
                                V(n), A.A.setVisibility(I.type, I.id, n);
                            },
                        }),
                        m,
                        g,
                        o,
                    ],
                })),
                (function () {
                    if (I.revoked || I.integrations.length > 0) return (0, i.jsx)(_.cGx, {});
                })(),
                I.revoked
                    ? (0, i.jsx)(r.po8, {
                          messageType: r.YCn.INFO,
                          children: M.intl.format(M.t["6C4lgA"], {
                              onReconnect: function () {
                                  (0, T.A)({ platformType: I.type, location: "User Settings" });
                              },
                          }),
                      })
                    : I.integrations.length > 0
                      ? (0, i.jsx)(_.D0$, {
                            label: M.intl.string(M.t.fOe3fZ),
                            children: I.integrations.map((e) => (0, i.jsx)(k, { integration: e }, e.id)),
                        })
                      : void 0,
            ],
        })
    );
}
function w() {
    return (0, i.jsx)(_.D0$, {
        label: M.intl.string(M.t.ZeDrUf),
        description: M.intl.format(M.t["oYc+Gz"], { privacyPolicyUrl: L.X7G.PRIVACY }),
        children: (0, i.jsx)(B, {}),
    });
}
function H(e) {
    let t = p.A.get(e);
    (0, T.A)({ platformType: t.type }),
        O.default.track(L.HAw.ACCOUNT_LINK_STEP, {
            previous_step: "desktop connections",
            current_step: "desktop oauth",
            platform_type: t.type,
        });
}
function B() {
    let e = (0, x.gn)();
    return (0, i.jsxs)("div", {
        className: U.lA,
        children: [
            e
                .slice(0, 10)
                .map((e) =>
                    (0, i.jsx)(
                        m.A,
                        { type: e.type, className: U.__invalid_accountButton, innerClassName: U.U$ },
                        e.type,
                    ),
                ),
            (0, i.jsx)(c.m, {
                text: M.intl.string(M.t.QqTz8b),
                children: (0, i.jsx)("div", {
                    className: a()(U.ej, U.__invalid_accountButton),
                    children: (0, i.jsx)(_.vN3, {
                        children: (0, i.jsx)("button", {
                            className: a()(U.R8, U.U$),
                            type: "button",
                            onClick: function () {
                                g.h.dispatch({ type: "CONNECTIONS_GRID_MODAL_SHOW", onComplete: H });
                            },
                            "aria-label": M.intl.string(M.t.Zhcj9X),
                            children: (0, i.jsx)(_._BQ, {
                                color: "currentColor",
                                size: "md",
                                "aria-label": M.intl.string(M.t.QqTz8b),
                            }),
                        }),
                    }),
                }),
            }),
        ],
    });
}
function F(e) {
    let t,
        { fetching: n, accounts: s, theme: l, locale: a } = e;
    return (
        (t = n
            ? (0, i.jsx)(_.y$y, { type: _.y$y.Type.SPINNING_CIRCLE })
            : 0 === s.length
              ? (0, i.jsx)(_.ppr, {
                    theme: l,
                    children: (0, i.jsx)(_.SGT, {
                        note: M.intl.string(M.t.WenGZ2),
                        children: M.intl.string(M.t.aoLS84),
                    }),
                })
              : s
                    .filter((e) => p.A.isSupported(e.type))
                    .map((e, t) =>
                        (0, i.jsx)(
                            V,
                            {
                                theme: l,
                                account: e,
                                locale: a,
                                onDisconnect: () =>
                                    (function (e) {
                                        let { type: t, id: n } = e;
                                        A.A.disconnect(t, n);
                                    })(e),
                            },
                            t,
                        ),
                    )),
        (0, i.jsx)("div", { className: U.V, children: t })
    );
}
function Y() {
    let e = (0, o.bG)([v.A], () => v.A.hidePersonalInformation),
        t = (0, o.bG)([N.A], () => N.A.isFetching()),
        n = (0, o.bG)([N.A], () => N.A.getAccounts()),
        s = (0, h.Ay)(),
        l = (0, o.bG)([R.default], () => R.default.locale);
    return e ? null : (0, i.jsx)(F, { fetching: t, accounts: n, theme: s, locale: l });
}
