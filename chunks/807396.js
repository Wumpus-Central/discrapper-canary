n.d(t, { d: () => ep, u: () => eg }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(512950),
    o = n(189213),
    d = n(311907),
    u = n(827734),
    c = n(990078),
    g = n(462887),
    m = n(821609),
    _ = n(834730),
    A = n(349288),
    h = n(478016),
    p = n(939249),
    x = n(789645),
    E = n(777666),
    T = n(243721),
    S = n(452027),
    f = n(404778),
    b = n(192308),
    C = n(187322),
    v = n(320448),
    N = n(289873),
    I = n(396478),
    y = n(73153),
    j = n(824552),
    O = n(77468),
    R = n(289498),
    L = n(736653),
    D = n(573648),
    P = n(941314),
    G = n(429913),
    M = n(681819),
    U = n(370480),
    k = n(882997),
    V = n(373498),
    w = n(169869),
    B = n(263063),
    F = n(496885),
    z = n(201718),
    H = n(321078),
    Y = n(672130),
    X = n(546183),
    K = n(962173),
    W = n(71393),
    Z = n(351906),
    q = n(287809),
    Q = n(954571),
    J = n(486020),
    $ = n(975571),
    ee = n(773669),
    et = n(630457),
    en = n(208039),
    ei = n(523104),
    es = n(856220),
    el = n(652215),
    ea = n(783419),
    er = n(534952),
    eo = n(985018),
    ed = n(838251);
let eu = (e) => {
    let t,
        { integration: n } = e,
        {
            isJoining: s,
            joinErrorMessage: l,
            showJoinErrorMessage: a,
        } = (0, d.cf)(
            [K.A],
            () => ({
                isJoining: K.A.isJoining(n.id),
                joinErrorMessage:
                    "" === K.A.joinErrorMessage(n.id) ? eo.intl.string(eo.t.j2d6Km) : K.A.joinErrorMessage(n.id),
                showJoinErrorMessage: void 0 !== K.A.joinErrorMessage(n.id),
            }),
            [n.id],
        );
    return (
        null != (0, d.bG)([W.A], () => W.A.getGuild(n.guild.id), [n.guild.id]) ||
            (t = (0, i.jsx)(m.$, {
                size: "sm",
                onClick: function () {
                    O.A.joinServer(n.id, () => {});
                },
                disabled: s,
                variant: "primary",
                text: s ? eo.intl.string(eo.t.RXvQQu) : eo.intl.string(eo.t.XpeFYr),
            })),
        (0, i.jsxs)("div", {
            className: ed.iA,
            children: [
                (0, i.jsxs)("div", {
                    className: ed.XX,
                    children: [
                        (0, i.jsx)(B.Ay, { size: B.Ay.Sizes.SMALL, guild: n.guild, className: ed.$f }),
                        (0, i.jsxs)("div", {
                            className: ed.Vn,
                            children: [
                                (0, i.jsx)(_.E, {
                                    variant: "text-md/semibold",
                                    color: "text-strong",
                                    children: n.guild.name,
                                }),
                                (0, i.jsx)(A.Anchor, {
                                    href: D.A.get(n.type)?.getPlatformUserUrl?.(n.account),
                                    children: (0, i.jsx)(_.E, {
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
                    (0, i.jsx)(_.E, {
                        variant: "text-xs/normal",
                        color: "text-feedback-critical",
                        className: ed.R,
                        children: l,
                    }),
            ],
        })
    );
};
function ec(e) {
    let t,
        n,
        l,
        a,
        d,
        A,
        C,
        { onDisconnect: v, account: N, theme: I, locale: y } = e,
        [j, R] = s.useState(N.friendSync),
        [L, P] = s.useState(N.visibility),
        [G, B] = s.useState(N.metadataVisibility),
        [z, H] = s.useState(N.showActivity),
        [Y, X] = s.useState(null),
        [K, W] = s.useState(null),
        [Z, q] = s.useState(!1),
        [Q, J] = s.useState([]),
        ee = (0, M.ML)(N.type),
        et = D.A.get(ee);
    s.useEffect(() => {
        R(N.friendSync), P(N.visibility), B(N.metadataVisibility), H(N.showActivity);
    }, [N]);
    let er = { inProgressVisibility: Y, inProgressMetadataVisibility: K },
        ec = s.useRef(er);
    return (
        s.useEffect(() => {
            ec.current = er;
        }),
        s.useEffect(() => {
            if (!1 === N.verified) return;
            let { inProgressVisibility: e, inProgressMetadataVisibility: t } = ec.current;
            null != e && (P(e), O.A.setVisibility(N.type, N.id, e), X(null)),
                null != t && (B(t), O.A.setMetadataVisibility(N.type, N.id, t), W(null));
        }, [N]),
        (0, i.jsxs)("div", {
            className: ed.FI,
            children: [
                ((t = D.A.get(N.type)),
                (n = D.A.get(ee)),
                (l = "1" === (N.metadata ?? {})[ea.pK.TWITTER_VERIFIED]),
                (a = null),
                t.type === el.fg2.TWITTER &&
                    l &&
                    (a = (0, i.jsx)(c.m, {
                        text: eo.intl.string(eo.t.Jebrww),
                        children: (0, i.jsx)(F.A, {
                            color: u.A.unsafe_rawColors.PLATFORM_TWITTER.css,
                            children: (0, i.jsx)(h.U, { size: "xs", color: u.A.unsafe_rawColors.WHITE.css }),
                        }),
                    })),
                (0, i.jsxs)("div", {
                    className: ed.Il,
                    children: [
                        (0, i.jsx)("img", {
                            alt: n.name,
                            className: ed.gj,
                            src: (0, g.M)(I) ? n.icon.darkSVG : n.icon.lightSVG,
                        }),
                        (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsxs)("div", {
                                    className: ed.$p,
                                    children: [
                                        (0, i.jsx)(_.E, {
                                            color: "text-strong",
                                            variant: "text-md/semibold",
                                            className: ed.RW,
                                            children: N.name,
                                        }),
                                        null != a && (0, i.jsx)("div", { className: ed.cG, children: a }),
                                    ],
                                }),
                                (0, i.jsx)(_.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    className: ed.Au,
                                    children: n.name,
                                }),
                            ],
                        }),
                        (0, i.jsx)(p.D, {
                            className: ed.uH,
                            onClick: function () {
                                let e = D.A.get(N.type);
                                (0, b.openModal)((t) =>
                                    (0, i.jsx)(o.Modal, {
                                        title: eo.intl.formatToPlainString(eo.t.U5x12f, { name: e.name }),
                                        subtitle: eo.intl.format(eo.t.VgqIPj, { provider: e.name }),
                                        actions: [
                                            {
                                                text: eo.intl.string(eo.t["ETE/oC"]),
                                                onClick: t.onClose,
                                                variant: "secondary",
                                            },
                                            {
                                                text: eo.intl.string(eo.t.bsbMVz),
                                                onClick: () => {
                                                    v(), t.onClose();
                                                },
                                                variant: "primary",
                                            },
                                        ],
                                        ...t,
                                        children:
                                            (0, V.A)(N) &&
                                            (0, i.jsx)(en.A, {
                                                children: eo.intl.format(eo.t.COW3Xn, { platformName: e.name }),
                                            }),
                                    }),
                                );
                            },
                            "aria-label": eo.intl.string(eo.t.ppppRJ),
                            focusProps: { offset: { top: -4, left: -4, right: -4 } },
                            children: (0, i.jsx)(x.P, { size: "xs", color: "currentColor" }),
                        }),
                    ],
                })),
                N.twoWayLink
                    ? null
                    : N.type === el.fg2.XBOX
                      ? (0, i.jsx)(es._, {})
                      : N.type === el.fg2.PLAYSTATION
                        ? (0, i.jsx)(ei.j, {})
                        : null,
                (function (e) {
                    let t = e.metadata ?? {},
                        n = null,
                        s = (0, U.An)(t[ea.pK.CREATED_AT], y);
                    switch (e.type) {
                        case el.fg2.REDDIT:
                            n = (0, w.xE)(t, ed.Nz);
                            break;
                        case el.fg2.STEAM:
                            n = (0, w.dy)(t, ed.Nz);
                            break;
                        case el.fg2.BLUESKY:
                        case el.fg2.TWITTER:
                        case el.fg2.MASTODON:
                            n = (0, w.ED)(t, ed.Nz);
                            break;
                        case el.fg2.EBAY:
                            n = (0, w.ub)(t, ed.Nz);
                            break;
                        case el.fg2.PAYPAL:
                            n = (0, w.gZ)(t, ed.Nz);
                            break;
                        case el.fg2.TIKTOK:
                            n = (0, w.HU)(t, ed.Nz);
                    }
                    null !== s &&
                        (null == n && (n = []),
                        n?.push(
                            (0, i.jsx)(
                                _.E,
                                {
                                    variant: "text-xs/normal",
                                    color: "text-subtle",
                                    className: ed.M4,
                                    children: eo.intl.format(eo.t["9rfonh"], { date: s }),
                                },
                                "member-since",
                            ),
                        ));
                    let l = Q.includes(e.id),
                        a = eo.intl.string(eo.t.wzzjk9);
                    if (null == n || 0 === n.length)
                        if (!0 !== D.A.get(e.type).hasMetadata) return null;
                        else
                            (n = [
                                (0, i.jsx)(E.Lp, { className: ed.Z3, text: eo.intl.string(eo.t.y2b7CA) }, "badge"),
                                (0, i.jsx)(
                                    _.E,
                                    {
                                        variant: "text-xs/normal",
                                        className: ed.vt,
                                        children: eo.intl.format(eo.t.Up2ni7, {
                                            helpdeskUrl: $.A.getArticleURL(el.MVz.CONNECTION_DETAILS),
                                        }),
                                    },
                                    "label",
                                ),
                            ]),
                                (a = eo.intl.string(eo.t["LVh3/5"]));
                    return (
                        l && (a = eo.intl.string(eo.t.i4jeWR)),
                        n.push(
                            (0, i.jsx)(
                                "div",
                                {
                                    className: ed.jy,
                                    children: (0, i.jsx)(m.$, {
                                        text: a,
                                        variant: "secondary",
                                        size: "sm",
                                        loading: Z,
                                        disabled: l,
                                        "aria-label": eo.intl.string(eo.t.sCkLYH),
                                        onClick: l
                                            ? void 0
                                            : () => {
                                                  q(!0),
                                                      O.A.refresh(e.type, e.id).finally(() => {
                                                          setTimeout(() => {
                                                              Q.push(e.id), J(Q), q(!1);
                                                          }, 2e3);
                                                      });
                                              },
                                    }),
                                },
                                "refresh-button",
                            ),
                        ),
                        (0, i.jsx)("div", { className: ed.tJ, children: n })
                    );
                })(N),
                (el.txh.has(N.type) &&
                    (d = (0, i.jsx)(T.d, {
                        label: eo.intl.string(eo.t["+KCMSi"]),
                        checked: j,
                        onChange: function (e) {
                            R(e), O.A.setFriendSync(N.type, N.id, e);
                        },
                    })),
                el.ewM.has(N.type) &&
                    (A = (0, i.jsx)(T.d, {
                        label: eo.intl.format(eo.t["6u6J0q"], { platform: et.name }),
                        checked: z,
                        onChange: function (e) {
                            H(e), O.A.setShowActivity(N.type, N.id, e);
                        },
                    })),
                D.A.get(N.type)?.hasMetadata === !0 &&
                    (C = (0, i.jsx)(T.d, {
                        label: eo.intl.string(eo.t.FYKGsL),
                        checked: 1 === G,
                        onChange: function (e) {
                            let { verified: t } = N,
                                n = +!!e;
                            if (e && !t) {
                                W(n), (0, k.A)({ platformType: N.type, location: "User Settings" });
                                return;
                            }
                            B(n), O.A.setMetadataVisibility(N.type, N.id, n);
                        },
                        disabled: 1 !== L || null == N.metadata,
                    })),
                (0, i.jsxs)("div", {
                    className: ed.HZ,
                    children: [
                        (0, i.jsx)(T.d, {
                            label: eo.intl.string(eo.t.f7yOAX),
                            checked: 1 === L,
                            onChange: function (e) {
                                let { verified: t } = N,
                                    n = +!!e;
                                if (e && !t) {
                                    X(n), (0, k.A)({ platformType: N.type, location: "User Settings" });
                                    return;
                                }
                                P(n), O.A.setVisibility(N.type, N.id, n);
                            },
                        }),
                        C,
                        A,
                        d,
                    ],
                })),
                (function () {
                    if (N.revoked || N.integrations.length > 0) return (0, i.jsx)(f.c, {});
                })(),
                N.revoked
                    ? (0, i.jsx)(r.p, {
                          messageType: r.Y.INFO,
                          children: eo.intl.format(eo.t["6C4lgA"], {
                              onReconnect: function () {
                                  (0, k.A)({ platformType: N.type, location: "User Settings" });
                              },
                          }),
                      })
                    : N.integrations.length > 0
                      ? (0, i.jsx)(S.D, {
                            label: eo.intl.string(eo.t.fOe3fZ),
                            children: N.integrations.map((e) => (0, i.jsx)(eu, { integration: e }, e.id)),
                        })
                      : void 0,
                null,
            ],
        })
    );
}
function eg() {
    return (0, i.jsx)(S.D, {
        label: eo.intl.string(eo.t.ZeDrUf),
        description: eo.intl.format(eo.t["oYc+Gz"], { privacyPolicyUrl: el.X7G.PRIVACY }),
        children: (0, i.jsx)(eA, {}),
    });
}
function em(e) {
    let { appIdentity: t, oauth2Token: n } = e;
    return null == n
        ? null
        : (0, i.jsxs)("div", {
              className: ed.FI,
              children: [
                  (function (e, t) {
                      let { application: n } = t,
                          s = J.Ay.getApplicationIconURL({ id: n.id, icon: n.icon });
                      return (0, i.jsxs)("div", {
                          className: ed.Il,
                          children: [
                              (0, i.jsx)("img", { alt: n.name, className: a()(ed.gj, ed.sN), src: s }),
                              (0, i.jsxs)("div", {
                                  children: [
                                      (0, i.jsx)("div", {
                                          className: ed.$p,
                                          children: (0, i.jsx)(_.E, {
                                              color: "text-strong",
                                              variant: "text-md/semibold",
                                              className: ed.RW,
                                              children: e.profile.username,
                                          }),
                                      }),
                                      (0, i.jsx)(_.E, {
                                          variant: "text-xs/normal",
                                          color: "text-strong",
                                          className: ed.Au,
                                          children: n.name,
                                      }),
                                  ],
                              }),
                              (0, i.jsx)(p.D, {
                                  className: ed.uH,
                                  onClick: () =>
                                      (0, et.d1)(n, () => {
                                          j.A.delete(t.id);
                                      }),
                                  "aria-label": eo.intl.string(eo.t.ppppRJ),
                                  focusProps: { offset: { top: -4, left: -4, right: -4 } },
                                  children: (0, i.jsx)(x.P, { size: "xs", color: "currentColor" }),
                              }),
                          ],
                      });
                  })(t, n),
                  (0, i.jsx)("div", {
                      className: ed.HZ,
                      children: (0, i.jsx)(T.d, {
                          label: eo.intl.string(eo.t.f7yOAX),
                          checked: t.profile?.connection_visible ?? !1,
                          onChange: (e) => {
                              z.A.updateApplicationIdentityConfig(n.application.id, t.provider_issued_user_id, {
                                  connection_visible: e,
                              });
                          },
                      }),
                  }),
              ],
          });
}
function e_(e) {
    let t = D.A.get(e);
    (0, k.A)({ platformType: t.type }),
        Q.default.track(el.HAw.ACCOUNT_LINK_STEP, {
            previous_step: "desktop connections",
            current_step: "desktop oauth",
            platform_type: t.type,
        });
}
function eA() {
    let e = (0, M.gn)(),
        t = P.A.useConfig({ location: "User Settings Connections" }),
        n = (0, G.A)(t.enabled ? er.tX : []);
    return (0, i.jsxs)("div", {
        className: ed.lA,
        children: [
            n.map(
                (e) =>
                    null != e &&
                    (0, i.jsx)(
                        Y.A,
                        { application: e, className: ed.__invalid_accountButton, innerClassName: ed.U$ },
                        e.id,
                    ),
            ),
            e
                .slice(0, 10 - n.length)
                .map((e) =>
                    (0, i.jsx)(
                        R.A,
                        { type: e.type, className: ed.__invalid_accountButton, innerClassName: ed.U$ },
                        e.type,
                    ),
                ),
            (0, i.jsx)(c.m, {
                text: eo.intl.string(eo.t.QqTz8b),
                children: (0, i.jsx)("div", {
                    className: a()(ed.ej, ed.__invalid_accountButton),
                    children: (0, i.jsx)(C.vN, {
                        children: (0, i.jsx)("button", {
                            className: a()(ed.R8, ed.U$),
                            type: "button",
                            onClick: function () {
                                y.h.dispatch({ type: "CONNECTIONS_GRID_MODAL_SHOW", onComplete: e_ });
                            },
                            "aria-label": eo.intl.string(eo.t.Zhcj9X),
                            children: (0, i.jsx)(v._, {
                                color: "currentColor",
                                size: "md",
                                "aria-label": eo.intl.string(eo.t.QqTz8b),
                            }),
                        }),
                    }),
                }),
            }),
        ],
    });
}
function eh(e) {
    let t,
        { fetching: n, accounts: s, appIdentities: l, authorizedApps: a, theme: r, locale: o } = e;
    return (
        (t = n
            ? (0, i.jsx)(N.y, { type: N.y.Type.SPINNING_CIRCLE })
            : 0 === s.length && 0 === l.length
              ? (0, i.jsx)(I.pp, {
                    theme: r,
                    children: (0, i.jsx)(I.SG, {
                        note: eo.intl.string(eo.t.WenGZ2),
                        children: eo.intl.string(eo.t.aoLS84),
                    }),
                })
              : (0, i.jsxs)(i.Fragment, {
                    children: [
                        l.map((e, t) =>
                            (0, i.jsx)(
                                em,
                                { appIdentity: e, oauth2Token: a.find((t) => t.application.id === e.application_id) },
                                `app-${t}`,
                            ),
                        ),
                        s
                            .filter((e) => D.A.isSupported(e.type))
                            .map((e, t) =>
                                (0, i.jsx)(
                                    ec,
                                    {
                                        theme: r,
                                        account: e,
                                        locale: o,
                                        onDisconnect: () =>
                                            (function (e) {
                                                let { type: t, id: n } = e;
                                                O.A.disconnect(t, n);
                                            })(e),
                                    },
                                    `connection-${t}`,
                                ),
                            ),
                    ],
                })),
        (0, i.jsx)("div", { className: ed.V, children: t })
    );
}
function ep() {
    let e = (0, d.bG)([Z.A], () => Z.A.hidePersonalInformation),
        t = (0, d.bG)([K.A], () => K.A.isFetching()),
        n = (0, d.bG)([K.A], () => K.A.getAccounts()),
        { authorizedAppsFetchState: l, authorizedApps: a } = (0, d.cf)([X.default], () => ({
            authorizedAppsFetchState: X.default.getFetchState(),
            authorizedApps: X.default.getNewestTokensForNonChildrenApplications(),
        })),
        { isLoading: r, filteredAppIdentities: o } = (0, H.A)(q.default.getCurrentUser().id, { includeHidden: !0 }),
        u = (0, L.Ay)(),
        c = (0, d.bG)([ee.default], () => ee.default.locale);
    return (s.useEffect(() => {
        l === X.FetchState.NOT_FETCHED && j.A.fetch();
    }, [l]),
    e)
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  null,
                  (0, i.jsx)(eh, {
                      fetching: t || r || (o.length > 0 && l !== X.FetchState.FETCHED),
                      accounts: n,
                      appIdentities: o,
                      authorizedApps: a,
                      theme: u,
                      locale: c,
                  }),
              ],
          });
}
