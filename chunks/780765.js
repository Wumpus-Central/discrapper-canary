n.d(t, { A: () => F }), n(323874), n(14289), n(35956);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(989349),
    o = n.n(r),
    d = n(788373),
    c = n(667244),
    u = n(125744),
    m = n(311907),
    g = n(139033),
    h = n(314116),
    x = n(990078),
    p = n(534514),
    A = n(834730),
    b = n(408278),
    f = n(663417),
    _ = n(821609),
    j = n(691885),
    N = n(150934),
    v = n(349288),
    E = n(406810),
    C = n(404778),
    I = n(359778),
    T = n(939249),
    S = n(282956),
    y = n(573648),
    w = n(235986),
    O = n(508675),
    k = n(997509),
    L = n(427157),
    R = n(317525),
    M = n(576705),
    D = n(351906),
    P = n(147925),
    G = n(486020),
    U = n(661191),
    W = n(447066),
    B = n(652215),
    H = n(985018),
    z = n(858456),
    V = n(818050);
function F(e) {
    let t,
        {
            guild: n,
            integration: s,
            editedIntegration: r,
            isExpanded: F,
            onToggleExpand: K,
            onDisable: Y,
            onEnable: q,
        } = e,
        [Q, Z] = l.useState(!1),
        J = (0, m.bG)([D.A], () => D.A.hidePersonalInformation),
        $ = (0, m.bG)([M.A], () => M.A.can(B.xBc.KICK_MEMBERS, n)),
        X = l.useCallback(() => {
            Z(!0), q(s);
        }, [s, q]),
        ee = l.useCallback(() => {
            if (!s.syncing)
                if ($ || s.expire_behavior !== d.F.KICK) {
                    let e =
                        s.expire_behavior === d.F.REMOVE_ROLE
                            ? H.intl.string(H.t["6kpw4i"])
                            : H.intl.string(H.t.fQUQIJ);
                    (0, h.A)({
                        title: H.intl.string(H.t.emx3lN),
                        subtitle: s.type === u.s.YOUTUBE ? H.intl.string(H.t.anKQWU) : H.intl.string(H.t["BW/xtn"]),
                        confirmText: e,
                        onConfirm: () => Y(s),
                        variant: "critical",
                    });
                } else
                    (0, g.A)({
                        title: H.intl.string(H.t.emx3lN),
                        subtitle: s.type === u.s.YOUTUBE ? H.intl.string(H.t.pDCiEf) : H.intl.string(H.t.sQqHFk),
                    });
        }, [s, Y, $]),
        et = l.useCallback(() => {
            k.A.syncIntegration(n.id, s.id);
        }, [n.id, s.id]),
        en = l.useCallback(() => {
            null != s.role_id && (k.A.setSection(B.BEX.ROLES), k.A.selectRole(s.role_id));
        }, [s.role_id]),
        {
            serviceName: ei,
            channelURL: el,
            expireBehaviorLabel: es,
            syncLabel: ea,
            subscribersText: er,
        } = l.useMemo(() => {
            let e = y.A.get(s.type)?.getPlatformUserUrl?.({ id: s.account.id, name: s.account.name }) ?? "";
            switch (s.type) {
                case u.s.YOUTUBE:
                    return {
                        serviceName: H.intl.string(H.t.aS6cK4),
                        expireBehaviorLabel: H.intl.string(H.t.A5MiqO),
                        syncLabel: H.intl.string(H.t["7vHKVe"]),
                        subscribersText: H.intl.formatToPlainString(H.t["7lNtce"], {
                            subscribers: s.subscriber_count ?? 0,
                        }),
                        channelURL: e,
                    };
                case u.s.TWITCH:
                default:
                    return {
                        serviceName: H.intl.string(H.t.q4pBG3),
                        expireBehaviorLabel: H.intl.string(H.t["S/WCrG"]),
                        syncLabel: H.intl.string(H.t["0jbPK4"]),
                        subscribersText: H.intl.formatToPlainString(H.t.RdUTrl, {
                            subscribers: s.subscriber_count ?? 0,
                        }),
                        channelURL: e,
                    };
            }
        }, [s.account, s.subscriber_count, s.type]),
        eo = (0, m.bG)([R.A], () => (null != s.role_id ? R.A.getRole(n.id, s.role_id) : void 0)),
        { roleLink: ed, syncDescriptionText: ec } = l.useMemo(() => {
            let e;
            e = null != eo ? (0, i.jsx)(v.Anchor, { onClick: en, children: eo.name }) : H.intl.string(H.t.PoWNfe);
            let t = y.A.get(s.type);
            return {
                roleLink: e,
                syncDescriptionText:
                    s.revoked && null != t
                        ? H.intl.formatToPlainString(H.t.G16Wji, { user: s.user, platformName: t.name })
                        : H.intl.formatToPlainString(H.t.unl3AP, { datetime: o()(s.synced_at).calendar() }),
            };
        }, [eo, en, s.revoked, s.synced_at, s.type, s.user]),
        eu = (0, m.bG)([R.A], () => R.A.getSortedRoles(n.id)),
        em = l.useMemo(() => {
            let e = O.Ay.getGuildEmoji(n.id),
                t = eu.filter((e) => null != e.tags && e.tags.integration_id === s.id).map((e) => e.id);
            return s.enable_emoticons
                ? e
                      .filter((e) => null != s.role_id && e?.roles.some((e) => t.includes(e)))
                      .sort((e, t) => e.name.localeCompare(t.name))
                : [];
        }, [n.id, eu, s.enable_emoticons, s.id, s.role_id]);
    if (
        (l.useEffect(() => {
            r?.id === s.id && r?.enabled === !0 && Z(!1);
        }, [r, s.id]),
        s.enabled && null != s.user)
    )
        t = [
            {
                icon: E.O,
                text: J
                    ? H.intl.formatToPlainString(H.t.gcdJ8J, { timestamp: U.default.extractTimestamp(s.id) })
                    : H.intl.formatToPlainString(H.t.Nu9sat, {
                          user: null != s.user ? new L.A(s.user).tag : null,
                          timestamp: U.default.extractTimestamp(s.id),
                      }),
            },
        ];
    else {
        let e = new URL(el);
        t = [
            {
                text: H.intl.format(H.t.BegylZ, {
                    serviceName: ei,
                    accountUrl: el,
                    accountUrlText: e.hostname + e.pathname,
                }),
            },
        ];
    }
    let eg = (0, i.jsxs)(w.A, {
            className: z.wx,
            align: w.A.Align.CENTER,
            children: [
                (0, i.jsx)(W.A, { name: `${s.name}`, detailsClassName: z.h_, details: t }),
                s.enabled
                    ? (0, i.jsx)(w.A.Child, {
                          shrink: 0,
                          grow: 0,
                          children: (0, i.jsx)(P.A, { className: z.eO, expanded: F && !Q, "aria-hidden": !0 }),
                      })
                    : (0, i.jsx)(w.A.Child, {
                          shrink: 0,
                          grow: 0,
                          children: Q
                              ? (0, i.jsx)(b.K, {
                                    variant: "primary",
                                    size: "sm",
                                    disabled: !0,
                                    icon: f.f,
                                    "aria-label": H.intl.string(H.t["7sCN8m"]),
                                })
                              : (0, i.jsx)(_.$, {
                                    variant: "primary",
                                    size: "sm",
                                    onClick: X,
                                    text: H.intl.string(H.t["7sCN8m"]),
                                }),
                      }),
            ],
        }),
        eh = null;
    return (
        F &&
            !Q &&
            null != r &&
            (eh = (0, i.jsxs)(w.A, {
                className: z.rf,
                direction: w.A.Direction.VERTICAL,
                children: [
                    (0, i.jsx)(C.c, { className: z.fV }),
                    (function (e) {
                        let {
                            integration: t,
                            labelText: n,
                            subscribersText: l,
                            descriptionText: s,
                            roleLink: a,
                            onSync: r,
                        } = e;
                        return (0, i.jsxs)(w.A, {
                            children: [
                                (0, i.jsxs)(w.A.Child, {
                                    basis: "50%",
                                    children: [
                                        (0, i.jsx)(p.D, {
                                            variant: "heading-md/semibold",
                                            className: V.QB,
                                            children: H.intl.string(H.t.eBtNBa),
                                        }),
                                        (0, i.jsx)(A.E, {
                                            className: z.RZ,
                                            color: "text-strong",
                                            variant: "text-sm/normal",
                                            children: a,
                                        }),
                                    ],
                                }),
                                (0, i.jsxs)(w.A.Child, {
                                    basis: "50%",
                                    children: [
                                        (0, i.jsx)(p.D, {
                                            variant: "heading-sm/semibold",
                                            className: V.QB,
                                            children: n,
                                        }),
                                        (0, i.jsxs)(w.A, {
                                            justify: w.A.Justify.BETWEEN,
                                            children: [
                                                (0, i.jsxs)(w.A, {
                                                    direction: w.A.Direction.VERTICAL,
                                                    children: [
                                                        (0, i.jsx)(A.E, {
                                                            color: "text-strong",
                                                            variant: "text-sm/normal",
                                                            children: l,
                                                        }),
                                                        (0, i.jsx)(A.E, {
                                                            color: "text-default",
                                                            variant: "text-xs/normal",
                                                            children: s,
                                                        }),
                                                    ],
                                                }),
                                                t.syncing
                                                    ? (0, i.jsx)(b.K, {
                                                          size: "sm",
                                                          variant: "primary",
                                                          icon: f.f,
                                                          "aria-label": H.intl.string(H.t.BkuOO6),
                                                          disabled: !0,
                                                      })
                                                    : (0, i.jsx)(_.$, {
                                                          size: "sm",
                                                          variant: "primary",
                                                          text: H.intl.string(H.t.BkuOO6),
                                                          disabled: t.revoked,
                                                          onClick: r,
                                                      }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        });
                    })({
                        integration: r,
                        labelText: ea,
                        subscribersText: er,
                        descriptionText: ec,
                        roleLink: ed,
                        onSync: et,
                    }),
                    (0, i.jsx)(C.c, { className: z.W7 }),
                    (function (e) {
                        let { integration: t, labelText: n, onBehaviorChange: l, onGracePeriodChange: s } = e;
                        return (0, i.jsxs)(w.A, {
                            children: [
                                (0, i.jsx)(w.A.Child, {
                                    basis: "50%",
                                    children: (0, i.jsx)(j.l, {
                                        selectionMode: "single",
                                        label: n,
                                        placeholder: n,
                                        value: `${t.expire_behavior}`,
                                        options: [
                                            {
                                                id: "remove-role",
                                                value: d.F.REMOVE_ROLE.toString(),
                                                label: H.intl.string(H.t["6kpw4i"]),
                                            },
                                            {
                                                id: "kick",
                                                value: d.F.KICK.toString(),
                                                label: H.intl.string(H.t.fQUQIJ),
                                            },
                                        ],
                                        disabled: t.syncing,
                                        onSelectionChange: (e) => l(parseInt(e)),
                                    }),
                                }),
                                (0, i.jsx)(w.A.Child, {
                                    basis: "50%",
                                    children: (0, i.jsx)(j.l, {
                                        selectionMode: "single",
                                        label: H.intl.string(H.t.uiXMow),
                                        placeholder: H.intl.string(H.t.uiXMow),
                                        maxOptionsVisible: 5,
                                        value: `${t.expire_grace_period}`,
                                        options: Object.values(c.u)
                                            .filter(Number.isInteger)
                                            .map((e) => ({
                                                id: `${e}`,
                                                value: `${e}`,
                                                label: H.intl.formatToPlainString(H.t.eGjmy5, { days: e }),
                                            })),
                                        onSelectionChange: (e) => s(parseInt(e)),
                                        disabled: t.syncing,
                                    }),
                                }),
                            ],
                        });
                    })({
                        integration: r,
                        labelText: es,
                        onBehaviorChange: function (e) {
                            S.A.updateIntegration({ expireBehavior: e });
                        },
                        onGracePeriodChange: function (e) {
                            S.A.updateIntegration({ expireGracePeriod: e });
                        },
                    }),
                    !$ &&
                        r.expire_behavior === d.F.KICK &&
                        (0, i.jsx)(A.E, {
                            className: z.Ce,
                            color: "text-feedback-critical",
                            variant: "text-sm/normal",
                            children: H.intl.string(H.t.mThMlB),
                        }),
                    s.type === u.s.TWITCH
                        ? (function (e) {
                              let { integration: t, emojis: n, onToggle: l } = e;
                              return (0, i.jsxs)(w.A, {
                                  direction: w.A.Direction.VERTICAL,
                                  children: [
                                      (0, i.jsx)("div", {
                                          className: a()(V.QX, V.QB),
                                          children: (0, i.jsx)(N.S, {
                                              checked: !!t.enable_emoticons,
                                              disabled: t.syncing,
                                              onChange: (e) => l(e),
                                              label: H.intl.string(H.t["7r4OKg"]),
                                          }),
                                      }),
                                      (0, i.jsx)(w.A, {
                                          wrap: w.A.Wrap.WRAP,
                                          className: z.__invalid_twitchEmojis,
                                          children: n.map((e, t) =>
                                              (0, i.jsx)(
                                                  x.m,
                                                  {
                                                      text: e.name,
                                                      children: (0, i.jsx)(
                                                          "img",
                                                          {
                                                              alt: H.intl.formatToPlainString(H.t.n6ZZn4, {
                                                                  name: e.name,
                                                              }),
                                                              draggable: !1,
                                                              className: a()(z.Zg, "emoji", "jumboable"),
                                                              src: G.Ay.getEmojiURL({
                                                                  id: e.id,
                                                                  animated: e.animated,
                                                                  size: 28,
                                                              }),
                                                          },
                                                          e.name,
                                                      ),
                                                  },
                                                  t,
                                              ),
                                          ),
                                      }),
                                  ],
                              });
                          })({
                              integration: r,
                              emojis: em,
                              onToggle: function (e) {
                                  S.A.updateIntegration({ enableEmoticons: e });
                              },
                          })
                        : null,
                    (0, i.jsx)(C.c, { className: z.Bd }),
                    (0, i.jsx)(w.A, {
                        children: (0, i.jsx)(_.$, {
                            size: "sm",
                            variant: "critical-secondary",
                            text: H.intl.string(H.t.M6q6eX),
                            onClick: ee,
                        }),
                    }),
                ],
            })),
        (0, i.jsx)(I.Z, {
            editable: !0,
            className: z.Nr,
            children: (0, i.jsxs)(w.A, {
                direction: w.A.Direction.VERTICAL,
                children: [
                    s.enabled
                        ? (0, i.jsx)(T.D, { className: z._S, "aria-expanded": F && !Q, onClick: K, children: eg })
                        : eg,
                    eh,
                ],
            }),
        })
    );
}
