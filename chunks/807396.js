n.d(t, { d: () => en, u: () => Q }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(158954),
    o = n(311907),
    d = n(827734),
    c = n(990078),
    u = n(582754),
    m = n(397927),
    g = n(73153),
    _ = n(824552),
    x = n(77468),
    h = n(289498),
    A = n(736653),
    p = n(573648),
    T = n(941314),
    f = n(429913),
    S = n(681819),
    E = n(370480),
    b = n(882997),
    C = n(373498),
    v = n(169869),
    N = n(263063),
    I = n(496885),
    j = n(201718),
    y = n(321078),
    O = n(672130),
    R = n(546183),
    L = n(962173),
    P = n(71393),
    D = n(351906),
    G = n(287809),
    M = n(954571),
    U = n(486020),
    k = n(975571),
    w = n(773669),
    V = n(630457),
    B = n(208039),
    F = n(523104),
    H = n(856220),
    z = n(652215),
    Y = n(783419),
    X = n(534952),
    K = n(985018),
    W = n(838251);
let Z = (e) => {
    let t,
        { integration: n } = e,
        {
            isJoining: s,
            joinErrorMessage: l,
            showJoinErrorMessage: r,
        } = (0, o.cf)(
            [L.A],
            () => ({
                isJoining: L.A.isJoining(n.id),
                joinErrorMessage:
                    "" === L.A.joinErrorMessage(n.id) ? K.intl.string(K.t.j2d6Km) : L.A.joinErrorMessage(n.id),
                showJoinErrorMessage: void 0 !== L.A.joinErrorMessage(n.id),
            }),
            [n.id],
        );
    return (
        null != (0, o.bG)([P.A], () => P.A.getGuild(n.guild.id), [n.guild.id]) ||
            (t = (0, i.jsx)(m.Button, {
                size: "sm",
                onClick: function () {
                    x.A.joinServer(n.id, () => {});
                },
                disabled: s,
                variant: "primary",
                text: s ? K.intl.string(K.t.RXvQQu) : K.intl.string(K.t.XpeFYr),
            })),
        (0, i.jsxs)("div", {
            className: W.iA,
            children: [
                (0, i.jsxs)("div", {
                    className: W.XX,
                    children: [
                        (0, i.jsx)(N.Ay, { size: N.Ay.Sizes.SMALL, guild: n.guild, className: W.$f }),
                        (0, i.jsxs)("div", {
                            className: W.Vn,
                            children: [
                                (0, i.jsx)(m.Text, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: n.guild.name,
                                }),
                                (0, i.jsx)(m.MzZ, {
                                    href: p.A.get(n.type)?.getPlatformUserUrl?.(n.account),
                                    children: (0, i.jsx)(m.Text, {
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
                r &&
                    (0, i.jsx)(m.Text, {
                        variant: "text-xs/normal",
                        color: "text-feedback-critical",
                        className: W.R,
                        children: l,
                    }),
            ],
        })
    );
};
function q(e) {
    let t,
        n,
        l,
        r,
        o,
        g,
        _,
        { onDisconnect: h, account: A, theme: T, locale: f } = e,
        [N, j] = s.useState(A.friendSync),
        [y, O] = s.useState(A.visibility),
        [R, L] = s.useState(A.metadataVisibility),
        [P, D] = s.useState(A.showActivity),
        [G, M] = s.useState(null),
        [U, w] = s.useState(null),
        [V, X] = s.useState(!1),
        [q, Q] = s.useState([]),
        J = (0, S.ML)(A.type),
        $ = p.A.get(J);
    s.useEffect(() => {
        j(A.friendSync), O(A.visibility), L(A.metadataVisibility), D(A.showActivity);
    }, [A]);
    let ee = { inProgressVisibility: G, inProgressMetadataVisibility: U },
        et = s.useRef(ee);
    return (
        s.useEffect(() => {
            et.current = ee;
        }),
        s.useEffect(() => {
            if (!1 === A.verified) return;
            let { inProgressVisibility: e, inProgressMetadataVisibility: t } = et.current;
            null != e && (O(e), x.A.setVisibility(A.type, A.id, e), M(null)),
                null != t && (L(t), x.A.setMetadataVisibility(A.type, A.id, t), w(null));
        }, [A]),
        (0, i.jsxs)("div", {
            className: W.FI,
            children: [
                ((t = p.A.get(A.type)),
                (n = p.A.get(J)),
                (l = "1" === (A.metadata ?? {})[Y.pK.TWITTER_VERIFIED]),
                (r = null),
                t.type === z.fg2.TWITTER &&
                    l &&
                    (r = (0, i.jsx)(c.m, {
                        text: K.intl.string(K.t.Jebrww),
                        children: (0, i.jsx)(I.A, {
                            color: d.A.unsafe_rawColors.PLATFORM_TWITTER.css,
                            children: (0, i.jsx)(m.Uzd, { size: "xs", color: d.A.unsafe_rawColors.WHITE.css }),
                        }),
                    })),
                (0, i.jsxs)("div", {
                    className: W.Il,
                    children: [
                        (0, i.jsx)("img", {
                            alt: n.name,
                            className: W.gj,
                            src: (0, u.Mw)(T) ? n.icon.darkSVG : n.icon.lightSVG,
                        }),
                        (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsxs)("div", {
                                    className: W.$p,
                                    children: [
                                        (0, i.jsx)(m.Text, {
                                            color: "text-strong",
                                            variant: "text-md/semibold",
                                            className: W.RW,
                                            children: A.name,
                                        }),
                                        null != r && (0, i.jsx)("div", { className: W.cG, children: r }),
                                    ],
                                }),
                                (0, i.jsx)(m.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    className: W.Au,
                                    children: n.name,
                                }),
                            ],
                        }),
                        (0, i.jsx)(m.DUT, {
                            className: W.uH,
                            onClick: function () {
                                let e = p.A.get(A.type);
                                (0, m.qfG)((t) =>
                                    (0, i.jsx)(a.Modal, {
                                        title: K.intl.formatToPlainString(K.t.U5x12f, { name: e.name }),
                                        subtitle: K.intl.format(K.t.VgqIPj, { provider: e.name }),
                                        actions: [
                                            {
                                                text: K.intl.string(K.t["ETE/oC"]),
                                                onClick: t.onClose,
                                                variant: "secondary",
                                            },
                                            {
                                                text: K.intl.string(K.t.bsbMVz),
                                                onClick: () => {
                                                    h(), t.onClose();
                                                },
                                                variant: "primary",
                                            },
                                        ],
                                        ...t,
                                        children:
                                            (0, C.A)(A) &&
                                            (0, i.jsx)(B.A, {
                                                children: K.intl.format(K.t.COW3Xn, { platformName: e.name }),
                                            }),
                                    }),
                                );
                            },
                            "aria-label": K.intl.string(K.t.ppppRJ),
                            focusProps: { offset: { top: -4, left: -4, right: -4 } },
                            children: (0, i.jsx)(m.PGe, { size: "xs", color: "currentColor" }),
                        }),
                    ],
                })),
                A.twoWayLink
                    ? null
                    : A.type === z.fg2.XBOX
                      ? (0, i.jsx)(H._, {})
                      : A.type === z.fg2.PLAYSTATION
                        ? (0, i.jsx)(F.j, {})
                        : null,
                (function (e) {
                    let t = e.metadata ?? {},
                        n = null,
                        s = (0, E.An)(t[Y.pK.CREATED_AT], f);
                    switch (e.type) {
                        case z.fg2.REDDIT:
                            n = (0, v.xE)(t, W.Nz);
                            break;
                        case z.fg2.STEAM:
                            n = (0, v.dy)(t, W.Nz);
                            break;
                        case z.fg2.BLUESKY:
                        case z.fg2.TWITTER:
                        case z.fg2.MASTODON:
                            n = (0, v.ED)(t, W.Nz);
                            break;
                        case z.fg2.EBAY:
                            n = (0, v.ub)(t, W.Nz);
                            break;
                        case z.fg2.PAYPAL:
                            n = (0, v.gZ)(t, W.Nz);
                            break;
                        case z.fg2.TIKTOK:
                            n = (0, v.HU)(t, W.Nz);
                    }
                    null !== s &&
                        (null == n && (n = []),
                        n?.push(
                            (0, i.jsx)(
                                m.Text,
                                {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    className: W.M4,
                                    children: K.intl.format(K.t["9rfonh"], { date: s }),
                                },
                                "member-since",
                            ),
                        ));
                    let l = q.includes(e.id),
                        r = K.intl.string(K.t.wzzjk9);
                    if (null == n || 0 === n.length)
                        if (!0 !== p.A.get(e.type).hasMetadata) return null;
                        else
                            (n = [
                                (0, i.jsx)(m.LpS, { className: W.Z3, text: K.intl.string(K.t.y2b7CA) }, "badge"),
                                (0, i.jsx)(
                                    m.Text,
                                    {
                                        variant: "text-xs/normal",
                                        className: W.vt,
                                        children: K.intl.format(K.t.Up2ni7, {
                                            helpdeskUrl: k.A.getArticleURL(z.MVz.CONNECTION_DETAILS),
                                        }),
                                    },
                                    "label",
                                ),
                            ]),
                                (r = K.intl.string(K.t["LVh3/5"]));
                    return (
                        l && (r = K.intl.string(K.t.i4jeWR)),
                        n.push(
                            (0, i.jsx)(
                                "div",
                                {
                                    className: W.jy,
                                    children: (0, i.jsx)(m.Button, {
                                        text: r,
                                        variant: "secondary",
                                        size: "sm",
                                        loading: V,
                                        disabled: l,
                                        "aria-label": K.intl.string(K.t.sCkLYH),
                                        onClick: l
                                            ? void 0
                                            : () => {
                                                  X(!0),
                                                      x.A.refresh(e.type, e.id).finally(() => {
                                                          setTimeout(() => {
                                                              q.push(e.id), Q(q), X(!1);
                                                          }, 2e3);
                                                      });
                                              },
                                    }),
                                },
                                "refresh-button",
                            ),
                        ),
                        (0, i.jsx)("div", { className: W.tJ, children: n })
                    );
                })(A),
                (z.txh.has(A.type) &&
                    (o = (0, i.jsx)(m.dOG, {
                        label: K.intl.string(K.t["+KCMSi"]),
                        checked: N,
                        onChange: function (e) {
                            j(e), x.A.setFriendSync(A.type, A.id, e);
                        },
                    })),
                z.ewM.has(A.type) &&
                    (g = (0, i.jsx)(m.dOG, {
                        label: K.intl.format(K.t["6u6J0q"], { platform: $.name }),
                        checked: P,
                        onChange: function (e) {
                            D(e), x.A.setShowActivity(A.type, A.id, e);
                        },
                    })),
                p.A.get(A.type)?.hasMetadata === !0 &&
                    (_ = (0, i.jsx)(m.dOG, {
                        label: K.intl.string(K.t.FYKGsL),
                        checked: 1 === R,
                        onChange: function (e) {
                            let { verified: t } = A,
                                n = +!!e;
                            if (e && !t) {
                                w(n), (0, b.A)({ platformType: A.type, location: "User Settings" });
                                return;
                            }
                            L(n), x.A.setMetadataVisibility(A.type, A.id, n);
                        },
                        disabled: 1 !== y || null == A.metadata,
                    })),
                (0, i.jsxs)("div", {
                    className: W.HZ,
                    children: [
                        (0, i.jsx)(m.dOG, {
                            label: K.intl.string(K.t.f7yOAX),
                            checked: 1 === y,
                            onChange: function (e) {
                                let { verified: t } = A,
                                    n = +!!e;
                                if (e && !t) {
                                    M(n), (0, b.A)({ platformType: A.type, location: "User Settings" });
                                    return;
                                }
                                O(n), x.A.setVisibility(A.type, A.id, n);
                            },
                        }),
                        _,
                        g,
                        o,
                    ],
                })),
                (function () {
                    if (A.revoked || A.integrations.length > 0) return (0, i.jsx)(m.cGx, {});
                })(),
                A.revoked
                    ? (0, i.jsx)(a.po8, {
                          messageType: a.YCn.INFO,
                          children: K.intl.format(K.t["6C4lgA"], {
                              onReconnect: function () {
                                  (0, b.A)({ platformType: A.type, location: "User Settings" });
                              },
                          }),
                      })
                    : A.integrations.length > 0
                      ? (0, i.jsx)(m.D0$, {
                            label: K.intl.string(K.t.fOe3fZ),
                            children: A.integrations.map((e) => (0, i.jsx)(Z, { integration: e }, e.id)),
                        })
                      : void 0,
                null,
            ],
        })
    );
}
function Q() {
    return (0, i.jsx)(m.D0$, {
        label: K.intl.string(K.t.ZeDrUf),
        description: K.intl.format(K.t["oYc+Gz"], { privacyPolicyUrl: z.X7G.PRIVACY }),
        children: (0, i.jsx)(ee, {}),
    });
}
function J(e) {
    let { appIdentity: t, oauth2Token: n } = e;
    return null == n
        ? null
        : (0, i.jsxs)("div", {
              className: W.FI,
              children: [
                  (function (e, t) {
                      let { application: n } = t,
                          s = U.Ay.getApplicationIconURL({ id: n.id, icon: n.icon });
                      return (0, i.jsxs)("div", {
                          className: W.Il,
                          children: [
                              (0, i.jsx)("img", { alt: n.name, className: r()(W.gj, W.sN), src: s }),
                              (0, i.jsxs)("div", {
                                  children: [
                                      (0, i.jsx)("div", {
                                          className: W.$p,
                                          children: (0, i.jsx)(m.Text, {
                                              color: "text-strong",
                                              variant: "text-md/semibold",
                                              className: W.RW,
                                              children: e.profile.username,
                                          }),
                                      }),
                                      (0, i.jsx)(m.Text, {
                                          variant: "text-xs/normal",
                                          color: "text-strong",
                                          className: W.Au,
                                          children: n.name,
                                      }),
                                  ],
                              }),
                              (0, i.jsx)(m.DUT, {
                                  className: W.uH,
                                  onClick: () =>
                                      (0, V.d1)(n, () => {
                                          _.A.delete(t.id);
                                      }),
                                  "aria-label": K.intl.string(K.t.ppppRJ),
                                  focusProps: { offset: { top: -4, left: -4, right: -4 } },
                                  children: (0, i.jsx)(m.PGe, { size: "xs", color: "currentColor" }),
                              }),
                          ],
                      });
                  })(t, n),
                  (0, i.jsx)("div", {
                      className: W.HZ,
                      children: (0, i.jsx)(m.dOG, {
                          label: K.intl.string(K.t.f7yOAX),
                          checked: t.profile?.connection_visible ?? !1,
                          onChange: (e) => {
                              j.A.updateApplicationIdentityConfig(n.application.id, t.provider_issued_user_id, {
                                  connection_visible: e,
                              });
                          },
                      }),
                  }),
              ],
          });
}
function $(e) {
    let t = p.A.get(e);
    (0, b.A)({ platformType: t.type }),
        M.default.track(z.HAw.ACCOUNT_LINK_STEP, {
            previous_step: "desktop connections",
            current_step: "desktop oauth",
            platform_type: t.type,
        });
}
function ee() {
    let e = (0, S.gn)(),
        t = T.A.useConfig({ location: "User Settings Connections" }),
        n = (0, f.A)(t.enabled ? X.tX : []);
    return (0, i.jsxs)("div", {
        className: W.lA,
        children: [
            n.map(
                (e) =>
                    null != e &&
                    (0, i.jsx)(
                        O.A,
                        { application: e, className: W.__invalid_accountButton, innerClassName: W.U$ },
                        e.id,
                    ),
            ),
            e
                .slice(0, 10 - n.length)
                .map((e) =>
                    (0, i.jsx)(
                        h.A,
                        { type: e.type, className: W.__invalid_accountButton, innerClassName: W.U$ },
                        e.type,
                    ),
                ),
            (0, i.jsx)(c.m, {
                text: K.intl.string(K.t.QqTz8b),
                children: (0, i.jsx)("div", {
                    className: r()(W.ej, W.__invalid_accountButton),
                    children: (0, i.jsx)(m.vN3, {
                        children: (0, i.jsx)("button", {
                            className: r()(W.R8, W.U$),
                            type: "button",
                            onClick: function () {
                                g.h.dispatch({ type: "CONNECTIONS_GRID_MODAL_SHOW", onComplete: $ });
                            },
                            "aria-label": K.intl.string(K.t.Zhcj9X),
                            children: (0, i.jsx)(m._BQ, {
                                color: "currentColor",
                                size: "md",
                                "aria-label": K.intl.string(K.t.QqTz8b),
                            }),
                        }),
                    }),
                }),
            }),
        ],
    });
}
function et(e) {
    let t,
        { fetching: n, accounts: s, appIdentities: l, authorizedApps: r, theme: a, locale: o } = e;
    return (
        (t = n
            ? (0, i.jsx)(m.y$y, { type: m.y$y.Type.SPINNING_CIRCLE })
            : 0 === s.length && 0 === l.length
              ? (0, i.jsx)(m.ppr, {
                    theme: a,
                    children: (0, i.jsx)(m.SGT, {
                        note: K.intl.string(K.t.WenGZ2),
                        children: K.intl.string(K.t.aoLS84),
                    }),
                })
              : (0, i.jsxs)(i.Fragment, {
                    children: [
                        l.map((e, t) =>
                            (0, i.jsx)(
                                J,
                                { appIdentity: e, oauth2Token: r.find((t) => t.application.id === e.application_id) },
                                `app-${t}`,
                            ),
                        ),
                        s
                            .filter((e) => p.A.isSupported(e.type))
                            .map((e, t) =>
                                (0, i.jsx)(
                                    q,
                                    {
                                        theme: a,
                                        account: e,
                                        locale: o,
                                        onDisconnect: () =>
                                            (function (e) {
                                                let { type: t, id: n } = e;
                                                x.A.disconnect(t, n);
                                            })(e),
                                    },
                                    `connection-${t}`,
                                ),
                            ),
                    ],
                })),
        (0, i.jsx)("div", { className: W.V, children: t })
    );
}
function en() {
    let e = (0, o.bG)([D.A], () => D.A.hidePersonalInformation),
        t = (0, o.bG)([L.A], () => L.A.isFetching()),
        n = (0, o.bG)([L.A], () => L.A.getAccounts()),
        { authorizedAppsFetchState: l, authorizedApps: r } = (0, o.cf)([R.default], () => ({
            authorizedAppsFetchState: R.default.getFetchState(),
            authorizedApps: R.default.getNewestTokensForNonChildrenApplications(),
        })),
        { isLoading: a, filteredAppIdentities: d } = (0, y.A)(G.default.getCurrentUser().id, { includeHidden: !0 }),
        c = (0, A.Ay)(),
        u = (0, o.bG)([w.default], () => w.default.locale);
    return (s.useEffect(() => {
        l === R.FetchState.NOT_FETCHED && _.A.fetch();
    }, [l]),
    e)
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  null,
                  (0, i.jsx)(et, {
                      fetching: t || a || (d.length > 0 && l !== R.FetchState.FETCHED),
                      accounts: n,
                      appIdentities: d,
                      authorizedApps: r,
                      theme: c,
                      locale: u,
                  }),
              ],
          });
}
