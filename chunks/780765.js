n.d(t, { A: () => L }), n(323874), n(14289), n(35956);
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
    x = n(314116),
    h = n(990078),
    p = n(397927),
    A = n(282956),
    b = n(573648),
    _ = n(235986),
    f = n(508675),
    N = n(997509),
    j = n(427157),
    T = n(317525),
    v = n(576705),
    C = n(351906),
    I = n(147925),
    E = n(486020),
    S = n(661191),
    y = n(447066),
    O = n(652215),
    w = n(985018),
    R = n(244243),
    k = n(522759);
function L(e) {
    let t,
        {
            guild: n,
            integration: s,
            editedIntegration: r,
            isExpanded: L,
            onToggleExpand: M,
            onDisable: G,
            onEnable: U,
        } = e,
        [D, P] = l.useState(!1),
        B = (0, m.bG)([C.A], () => C.A.hidePersonalInformation),
        W = (0, m.bG)([v.A], () => v.A.can(O.xBc.KICK_MEMBERS, n)),
        H = l.useCallback(() => {
            P(!0), U(s);
        }, [s, U]),
        V = l.useCallback(() => {
            if (!s.syncing)
                if (W || s.expire_behavior !== d.F.KICK) {
                    let e =
                        s.expire_behavior === d.F.REMOVE_ROLE
                            ? w.intl.string(w.t["6kpw4i"])
                            : w.intl.string(w.t.fQUQIJ);
                    (0, x.A)({
                        title: w.intl.string(w.t.emx3lN),
                        subtitle: s.type === u.s.YOUTUBE ? w.intl.string(w.t.anKQWU) : w.intl.string(w.t["BW/xtn"]),
                        confirmText: e,
                        onConfirm: () => G(s),
                        variant: "critical",
                    });
                } else
                    (0, g.A)({
                        title: w.intl.string(w.t.emx3lN),
                        subtitle: s.type === u.s.YOUTUBE ? w.intl.string(w.t.pDCiEf) : w.intl.string(w.t.sQqHFk),
                    });
        }, [s, G, W]),
        z = l.useCallback(() => {
            N.A.syncIntegration(n.id, s.id);
        }, [n.id, s.id]),
        F = l.useCallback(() => {
            null != s.role_id && (N.A.setSection(O.BEX.ROLES), N.A.selectRole(s.role_id));
        }, [s.role_id]),
        {
            serviceName: K,
            channelURL: Y,
            expireBehaviorLabel: q,
            syncLabel: J,
            subscribersText: Q,
        } = l.useMemo(() => {
            let e = b.A.get(s.type)?.getPlatformUserUrl?.({ id: s.account.id, name: s.account.name }) ?? "";
            switch (s.type) {
                case u.s.YOUTUBE:
                    return {
                        serviceName: w.intl.string(w.t.aS6cK4),
                        expireBehaviorLabel: w.intl.string(w.t.A5MiqO),
                        syncLabel: w.intl.string(w.t["7vHKVe"]),
                        subscribersText: w.intl.formatToPlainString(w.t["7lNtce"], {
                            subscribers: s.subscriber_count ?? 0,
                        }),
                        channelURL: e,
                    };
                case u.s.TWITCH:
                default:
                    return {
                        serviceName: w.intl.string(w.t.q4pBG3),
                        expireBehaviorLabel: w.intl.string(w.t["S/WCrG"]),
                        syncLabel: w.intl.string(w.t["0jbPK4"]),
                        subscribersText: w.intl.formatToPlainString(w.t.RdUTrl, {
                            subscribers: s.subscriber_count ?? 0,
                        }),
                        channelURL: e,
                    };
            }
        }, [s.account, s.subscriber_count, s.type]),
        Z = (0, m.bG)([T.A], () => (null != s.role_id ? T.A.getRole(n.id, s.role_id) : void 0)),
        { roleLink: X, syncDescriptionText: $ } = l.useMemo(() => {
            let e;
            e = null != Z ? (0, i.jsx)(p.MzZ, { onClick: F, children: Z.name }) : w.intl.string(w.t.PoWNfe);
            let t = b.A.get(s.type);
            return {
                roleLink: e,
                syncDescriptionText:
                    s.revoked && null != t
                        ? w.intl.formatToPlainString(w.t.G16Wji, { user: s.user, platformName: t.name })
                        : w.intl.formatToPlainString(w.t.unl3AP, { datetime: o()(s.synced_at).calendar() }),
            };
        }, [Z, F, s.revoked, s.synced_at, s.type, s.user]),
        ee = (0, m.bG)([T.A], () => T.A.getSortedRoles(n.id)),
        et = l.useMemo(() => {
            let e = f.Ay.getGuildEmoji(n.id),
                t = ee.filter((e) => null != e.tags && e.tags.integration_id === s.id).map((e) => e.id);
            return s.enable_emoticons
                ? e
                      .filter((e) => null != s.role_id && e?.roles.some((e) => t.includes(e)))
                      .sort((e, t) => e.name.localeCompare(t.name))
                : [];
        }, [n.id, ee, s.enable_emoticons, s.id, s.role_id]);
    if (
        (l.useEffect(() => {
            r?.id === s.id && r?.enabled === !0 && P(!1);
        }, [r, s.id]),
        s.enabled && null != s.user)
    )
        t = [
            {
                icon: p.O4,
                text: B
                    ? w.intl.formatToPlainString(w.t.gcdJ8J, { timestamp: S.default.extractTimestamp(s.id) })
                    : w.intl.formatToPlainString(w.t.Nu9sat, {
                          user: null != s.user ? new j.A(s.user).tag : null,
                          timestamp: S.default.extractTimestamp(s.id),
                      }),
            },
        ];
    else {
        let e = new URL(Y);
        t = [
            {
                text: w.intl.format(w.t.BegylZ, {
                    serviceName: K,
                    accountUrl: Y,
                    accountUrlText: e.hostname + e.pathname,
                }),
            },
        ];
    }
    let en = (0, i.jsxs)(_.A, {
            className: R.wx,
            align: _.A.Align.CENTER,
            children: [
                (0, i.jsx)(y.A, { name: `${s.name}`, detailsClassName: R.h_, details: t }),
                s.enabled
                    ? (0, i.jsx)(_.A.Child, {
                          shrink: 0,
                          grow: 0,
                          children: (0, i.jsx)(I.A, { className: R.eO, expanded: L && !D, "aria-hidden": !0 }),
                      })
                    : (0, i.jsx)(_.A.Child, {
                          shrink: 0,
                          grow: 0,
                          children: D
                              ? (0, i.jsx)(p.K0, {
                                    variant: "primary",
                                    size: "sm",
                                    disabled: !0,
                                    icon: p.fNY,
                                    "aria-label": w.intl.string(w.t["7sCN8m"]),
                                })
                              : (0, i.jsx)(p.Button, {
                                    variant: "primary",
                                    size: "sm",
                                    onClick: H,
                                    text: w.intl.string(w.t["7sCN8m"]),
                                }),
                      }),
            ],
        }),
        ei = null;
    return (
        L &&
            !D &&
            null != r &&
            (ei = (0, i.jsxs)(_.A, {
                className: R.rf,
                direction: _.A.Direction.VERTICAL,
                children: [
                    (0, i.jsx)(p.cGx, { className: R.fV }),
                    (function (e) {
                        let {
                            integration: t,
                            labelText: n,
                            subscribersText: l,
                            descriptionText: s,
                            roleLink: a,
                            onSync: r,
                        } = e;
                        return (0, i.jsxs)(_.A, {
                            children: [
                                (0, i.jsxs)(_.A.Child, {
                                    basis: "50%",
                                    children: [
                                        (0, i.jsx)(p.Heading, {
                                            variant: "heading-md/semibold",
                                            className: k.QB,
                                            children: w.intl.string(w.t.eBtNBa),
                                        }),
                                        (0, i.jsx)(p.Text, {
                                            className: R.RZ,
                                            color: "text-strong",
                                            variant: "text-sm/normal",
                                            children: a,
                                        }),
                                    ],
                                }),
                                (0, i.jsxs)(_.A.Child, {
                                    basis: "50%",
                                    children: [
                                        (0, i.jsx)(p.Heading, {
                                            variant: "heading-sm/semibold",
                                            className: k.QB,
                                            children: n,
                                        }),
                                        (0, i.jsxs)(_.A, {
                                            justify: _.A.Justify.BETWEEN,
                                            children: [
                                                (0, i.jsxs)(_.A, {
                                                    direction: _.A.Direction.VERTICAL,
                                                    children: [
                                                        (0, i.jsx)(p.Text, {
                                                            color: "text-strong",
                                                            variant: "text-sm/normal",
                                                            children: l,
                                                        }),
                                                        (0, i.jsx)(p.Text, {
                                                            color: "text-default",
                                                            variant: "text-xs/normal",
                                                            children: s,
                                                        }),
                                                    ],
                                                }),
                                                t.syncing
                                                    ? (0, i.jsx)(p.K0, {
                                                          size: "sm",
                                                          variant: "primary",
                                                          icon: p.fNY,
                                                          "aria-label": w.intl.string(w.t.BkuOO6),
                                                          disabled: !0,
                                                      })
                                                    : (0, i.jsx)(p.Button, {
                                                          size: "sm",
                                                          variant: "primary",
                                                          text: w.intl.string(w.t.BkuOO6),
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
                        labelText: J,
                        subscribersText: Q,
                        descriptionText: $,
                        roleLink: X,
                        onSync: z,
                    }),
                    (0, i.jsx)(p.cGx, { className: R.W7 }),
                    (function (e) {
                        let { integration: t, labelText: n, onBehaviorChange: l, onGracePeriodChange: s } = e;
                        return (0, i.jsxs)(_.A, {
                            children: [
                                (0, i.jsx)(_.A.Child, {
                                    basis: "50%",
                                    children: (0, i.jsx)(p.l6P, {
                                        selectionMode: "single",
                                        label: n,
                                        placeholder: n,
                                        value: `${t.expire_behavior}`,
                                        options: [
                                            {
                                                id: "remove-role",
                                                value: d.F.REMOVE_ROLE.toString(),
                                                label: w.intl.string(w.t["6kpw4i"]),
                                            },
                                            {
                                                id: "kick",
                                                value: d.F.KICK.toString(),
                                                label: w.intl.string(w.t.fQUQIJ),
                                            },
                                        ],
                                        disabled: t.syncing,
                                        onSelectionChange: (e) => l(parseInt(e)),
                                    }),
                                }),
                                (0, i.jsx)(_.A.Child, {
                                    basis: "50%",
                                    children: (0, i.jsx)(p.l6P, {
                                        selectionMode: "single",
                                        label: w.intl.string(w.t.uiXMow),
                                        placeholder: w.intl.string(w.t.uiXMow),
                                        maxOptionsVisible: 5,
                                        value: `${t.expire_grace_period}`,
                                        options: Object.values(c.u)
                                            .filter(Number.isInteger)
                                            .map((e) => ({
                                                id: `${e}`,
                                                value: `${e}`,
                                                label: w.intl.formatToPlainString(w.t.eGjmy5, { days: e }),
                                            })),
                                        onSelectionChange: (e) => s(parseInt(e)),
                                        disabled: t.syncing,
                                    }),
                                }),
                            ],
                        });
                    })({
                        integration: r,
                        labelText: q,
                        onBehaviorChange: function (e) {
                            A.A.updateIntegration({ expireBehavior: e });
                        },
                        onGracePeriodChange: function (e) {
                            A.A.updateIntegration({ expireGracePeriod: e });
                        },
                    }),
                    !W &&
                        r.expire_behavior === d.F.KICK &&
                        (0, i.jsx)(p.Text, {
                            className: R.Ce,
                            color: "text-feedback-critical",
                            variant: "text-sm/normal",
                            children: w.intl.string(w.t.mThMlB),
                        }),
                    s.type === u.s.TWITCH
                        ? (function (e) {
                              let { integration: t, emojis: n, onToggle: l } = e;
                              return (0, i.jsxs)(_.A, {
                                  direction: _.A.Direction.VERTICAL,
                                  children: [
                                      (0, i.jsx)("div", {
                                          className: a()(k.QX, k.QB),
                                          children: (0, i.jsx)(p.Checkbox, {
                                              checked: !!t.enable_emoticons,
                                              disabled: t.syncing,
                                              onChange: (e) => l(e),
                                              label: w.intl.string(w.t["7r4OKg"]),
                                          }),
                                      }),
                                      (0, i.jsx)(_.A, {
                                          wrap: _.A.Wrap.WRAP,
                                          className: R.__invalid_twitchEmojis,
                                          children: n.map((e, t) =>
                                              (0, i.jsx)(
                                                  h.m,
                                                  {
                                                      text: e.name,
                                                      children: (0, i.jsx)(
                                                          "img",
                                                          {
                                                              alt: w.intl.formatToPlainString(w.t.n6ZZn4, {
                                                                  name: e.name,
                                                              }),
                                                              draggable: !1,
                                                              className: a()(R.Zg, "emoji", "jumboable"),
                                                              src: E.Ay.getEmojiURL({
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
                              emojis: et,
                              onToggle: function (e) {
                                  A.A.updateIntegration({ enableEmoticons: e });
                              },
                          })
                        : null,
                    (0, i.jsx)(p.cGx, { className: R.Bd }),
                    (0, i.jsx)(_.A, {
                        children: (0, i.jsx)(p.Button, {
                            size: "sm",
                            variant: "critical-secondary",
                            text: w.intl.string(w.t.M6q6eX),
                            onClick: V,
                        }),
                    }),
                ],
            })),
        (0, i.jsx)(p.ZpM, {
            editable: !0,
            className: R.Nr,
            children: (0, i.jsxs)(_.A, {
                direction: _.A.Direction.VERTICAL,
                children: [
                    s.enabled
                        ? (0, i.jsx)(p.DUT, { className: R._S, "aria-expanded": L && !D, onClick: M, children: en })
                        : en,
                    ei,
                ],
            }),
        })
    );
}
