n.d(t, {
    A: () => R,
}),
    n(896048),
    n(638769),
    n(693327),
    n(554719),
    n(680155),
    n(323874),
    n(14289),
    n(35956),
    n(228524);
var i = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(989349),
    o = n.n(s),
    c = n(788373),
    d = n(667244),
    u = n(125744),
    p = n(311907),
    m = n(139033),
    g = n(314116),
    b = n(990078),
    f = n(397927),
    h = n(282956),
    x = n(573648),
    j = n(235986),
    O = n(508675),
    y = n(997509),
    A = n(427157),
    v = n(317525),
    _ = n(576705),
    N = n(351906),
    E = n(147925),
    T = n(486020),
    C = n(661191),
    w = n(447066),
    S = n(652215),
    I = n(985018),
    P = n(86789),
    k = n(473169);

function R(e) {
    let t,
        {
            guild: n,
            integration: l,
            editedIntegration: s,
            isExpanded: R,
            onToggleExpand: L,
            onDisable: D,
            onEnable: M,
        } = e,
        [G, U] = r.useState(!1),
        B = (0, p.bG)([N.A], () => N.A.hidePersonalInformation),
        W = (0, p.bG)([_.A], () => _.A.can(S.xBc.KICK_MEMBERS, n)),
        H = r.useCallback(() => {
            U(!0), M(l);
        }, [l, M]),
        V = r.useCallback(() => {
            if (!l.syncing)
                if (W || l.expire_behavior !== c.F.KICK) {
                    let e =
                        l.expire_behavior === c.F.REMOVE_ROLE
                            ? I.intl.string(I.t["6kpw4i"])
                            : I.intl.string(I.t.fQUQIJ);
                    (0, g.A)({
                        title: I.intl.string(I.t.emx3lN),
                        subtitle: l.type === u.s.YOUTUBE ? I.intl.string(I.t.anKQWU) : I.intl.string(I.t["BW/xtn"]),
                        confirmText: e,
                        onConfirm: () => D(l),
                        variant: "critical",
                    });
                } else
                    (0, m.A)({
                        title: I.intl.string(I.t.emx3lN),
                        subtitle: l.type === u.s.YOUTUBE ? I.intl.string(I.t.pDCiEf) : I.intl.string(I.t.sQqHFk),
                    });
        }, [l, D, W]),
        z = r.useCallback(() => {
            y.A.syncIntegration(n.id, l.id);
        }, [n.id, l.id]),
        K = r.useCallback(() => {
            null != l.role_id && (y.A.setSection(S.BEX.ROLES), y.A.selectRole(l.role_id));
        }, [l.role_id]),
        {
            serviceName: F,
            channelURL: Y,
            expireBehaviorLabel: q,
            syncLabel: J,
            subscribersText: Q,
        } = r.useMemo(() => {
            var e, t, n, i, r;
            let a =
                null !=
                (e =
                    null == (n = x.A.get(l.type)) || null == (t = n.getPlatformUserUrl)
                        ? void 0
                        : t.call(n, {
                              id: l.account.id,
                              name: l.account.name,
                          }))
                    ? e
                    : "";
            switch (l.type) {
                case u.s.YOUTUBE:
                    return {
                        serviceName: I.intl.string(I.t.aS6cK4),
                        expireBehaviorLabel: I.intl.string(I.t.A5MiqO),
                        syncLabel: I.intl.string(I.t["7vHKVe"]),
                        subscribersText: I.intl.formatToPlainString(I.t["7lNtce"], {
                            subscribers: null != (i = l.subscriber_count) ? i : 0,
                        }),
                        channelURL: a,
                    };
                case u.s.TWITCH:
                default:
                    return {
                        serviceName: I.intl.string(I.t.q4pBG3),
                        expireBehaviorLabel: I.intl.string(I.t["S/WCrG"]),
                        syncLabel: I.intl.string(I.t["0jbPK4"]),
                        subscribersText: I.intl.formatToPlainString(I.t.RdUTrl, {
                            subscribers: null != (r = l.subscriber_count) ? r : 0,
                        }),
                        channelURL: a,
                    };
            }
        }, [l.account, l.subscriber_count, l.type]),
        Z = (0, p.bG)([v.A], () => (null != l.role_id ? v.A.getRole(n.id, l.role_id) : void 0)),
        { roleLink: X, syncDescriptionText: $ } = r.useMemo(() => {
            let e;
            e =
                null != Z
                    ? (0, i.jsx)(f.MzZ, {
                          onClick: K,
                          children: Z.name,
                      })
                    : I.intl.string(I.t.PoWNfe);
            let t = x.A.get(l.type);
            return {
                roleLink: e,
                syncDescriptionText:
                    l.revoked && null != t
                        ? I.intl.formatToPlainString(I.t.G16Wji, {
                              user: l.user,
                              platformName: t.name,
                          })
                        : I.intl.formatToPlainString(I.t.unl3AP, {
                              datetime: o()(l.synced_at).calendar(),
                          }),
            };
        }, [Z, K, l.revoked, l.synced_at, l.type, l.user]),
        ee = (0, p.bG)([v.A], () => v.A.getSortedRoles(n.id)),
        et = r.useMemo(() => {
            let e = O.Ay.getGuildEmoji(n.id),
                t = ee.filter((e) => null != e.tags && e.tags.integration_id === l.id).map((e) => e.id);
            return l.enable_emoticons
                ? e
                      .filter((e) => null != l.role_id && (null == e ? void 0 : e.roles.some((e) => t.includes(e))))
                      .sort((e, t) => e.name.localeCompare(t.name))
                : [];
        }, [n.id, ee, l.enable_emoticons, l.id, l.role_id]);
    if (
        (r.useEffect(() => {
            (null == s ? void 0 : s.id) === l.id && (null == s ? void 0 : s.enabled) === !0 && U(!1);
        }, [s, l.id]),
        l.enabled && null != l.user)
    )
        t = [
            {
                icon: f.O4,
                text: B
                    ? I.intl.formatToPlainString(I.t.gcdJ8J, {
                          timestamp: C.default.extractTimestamp(l.id),
                      })
                    : I.intl.formatToPlainString(I.t.Nu9sat, {
                          user: null != l.user ? new A.A(l.user).tag : null,
                          timestamp: C.default.extractTimestamp(l.id),
                      }),
            },
        ];
    else {
        let e = new URL(Y);
        t = [
            {
                text: I.intl.format(I.t.BegylZ, {
                    serviceName: F,
                    accountUrl: Y,
                    accountUrlText: e.hostname + e.pathname,
                }),
            },
        ];
    }
    let en = (0, i.jsxs)(j.A, {
            className: P.wx,
            align: j.A.Align.CENTER,
            children: [
                (0, i.jsx)(w.A, {
                    name: "".concat(l.name),
                    detailsClassName: P.h_,
                    details: t,
                }),
                l.enabled
                    ? (0, i.jsx)(j.A.Child, {
                          shrink: 0,
                          grow: 0,
                          children: (0, i.jsx)(E.A, {
                              className: P.eO,
                              expanded: R && !G,
                              "aria-hidden": !0,
                          }),
                      })
                    : (0, i.jsx)(j.A.Child, {
                          shrink: 0,
                          grow: 0,
                          children: G
                              ? (0, i.jsx)(f.K0, {
                                    variant: "primary",
                                    size: "sm",
                                    disabled: !0,
                                    icon: f.fNY,
                                    "aria-label": I.intl.string(I.t["7sCN8m"]),
                                })
                              : (0, i.jsx)(f.Button, {
                                    variant: "primary",
                                    size: "sm",
                                    onClick: H,
                                    text: I.intl.string(I.t["7sCN8m"]),
                                }),
                      }),
            ],
        }),
        ei = null;
    return (
        R &&
            !G &&
            null != s &&
            (ei = (0, i.jsxs)(j.A, {
                className: P.rf,
                direction: j.A.Direction.VERTICAL,
                children: [
                    (0, i.jsx)(f.cGx, {
                        className: P.fV,
                    }),
                    (function (e) {
                        let {
                            integration: t,
                            labelText: n,
                            subscribersText: r,
                            descriptionText: l,
                            roleLink: a,
                            onSync: s,
                        } = e;
                        return (0, i.jsxs)(j.A, {
                            children: [
                                (0, i.jsxs)(j.A.Child, {
                                    basis: "50%",
                                    children: [
                                        (0, i.jsx)(f.Heading, {
                                            variant: "heading-md/semibold",
                                            className: k.QB,
                                            children: I.intl.string(I.t.eBtNBa),
                                        }),
                                        (0, i.jsx)(f.Text, {
                                            className: P.RZ,
                                            color: "text-strong",
                                            variant: "text-sm/normal",
                                            children: a,
                                        }),
                                    ],
                                }),
                                (0, i.jsxs)(j.A.Child, {
                                    basis: "50%",
                                    children: [
                                        (0, i.jsx)(f.Heading, {
                                            variant: "heading-sm/semibold",
                                            className: k.QB,
                                            children: n,
                                        }),
                                        (0, i.jsxs)(j.A, {
                                            justify: j.A.Justify.BETWEEN,
                                            children: [
                                                (0, i.jsxs)(j.A, {
                                                    direction: j.A.Direction.VERTICAL,
                                                    children: [
                                                        (0, i.jsx)(f.Text, {
                                                            color: "text-strong",
                                                            variant: "text-sm/normal",
                                                            children: r,
                                                        }),
                                                        (0, i.jsx)(f.Text, {
                                                            color: "text-default",
                                                            variant: "text-xs/normal",
                                                            children: l,
                                                        }),
                                                    ],
                                                }),
                                                t.syncing
                                                    ? (0, i.jsx)(f.K0, {
                                                          size: "sm",
                                                          variant: "primary",
                                                          icon: f.fNY,
                                                          "aria-label": I.intl.string(I.t.BkuOO6),
                                                          disabled: !0,
                                                      })
                                                    : (0, i.jsx)(f.Button, {
                                                          size: "sm",
                                                          variant: "primary",
                                                          text: I.intl.string(I.t.BkuOO6),
                                                          disabled: t.revoked,
                                                          onClick: s,
                                                      }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        });
                    })({
                        integration: s,
                        labelText: J,
                        subscribersText: Q,
                        descriptionText: $,
                        roleLink: X,
                        onSync: z,
                    }),
                    (0, i.jsx)(f.cGx, {
                        className: P.W7,
                    }),
                    (function (e) {
                        let { integration: t, labelText: n, onBehaviorChange: r, onGracePeriodChange: l } = e;
                        return (0, i.jsxs)(j.A, {
                            children: [
                                (0, i.jsx)(j.A.Child, {
                                    basis: "50%",
                                    children: (0, i.jsx)(f.l6P, {
                                        selectionMode: "single",
                                        label: n,
                                        placeholder: n,
                                        value: "".concat(t.expire_behavior),
                                        options: [
                                            {
                                                id: "remove-role",
                                                value: c.F.REMOVE_ROLE.toString(),
                                                label: I.intl.string(I.t["6kpw4i"]),
                                            },
                                            {
                                                id: "kick",
                                                value: c.F.KICK.toString(),
                                                label: I.intl.string(I.t.fQUQIJ),
                                            },
                                        ],
                                        disabled: t.syncing,
                                        onSelectionChange: (e) => r(parseInt(e)),
                                    }),
                                }),
                                (0, i.jsx)(j.A.Child, {
                                    basis: "50%",
                                    children: (0, i.jsx)(f.l6P, {
                                        selectionMode: "single",
                                        label: I.intl.string(I.t.uiXMow),
                                        placeholder: I.intl.string(I.t.uiXMow),
                                        maxOptionsVisible: 5,
                                        value: "".concat(t.expire_grace_period),
                                        options: Object.values(d.u)
                                            .filter(Number.isInteger)
                                            .map((e) => ({
                                                id: "".concat(e),
                                                value: "".concat(e),
                                                label: I.intl.formatToPlainString(I.t.eGjmy5, {
                                                    days: e,
                                                }),
                                            })),
                                        onSelectionChange: (e) => l(parseInt(e)),
                                        disabled: t.syncing,
                                    }),
                                }),
                            ],
                        });
                    })({
                        integration: s,
                        labelText: q,
                        onBehaviorChange: function (e) {
                            h.A.updateIntegration({
                                expireBehavior: e,
                            });
                        },
                        onGracePeriodChange: function (e) {
                            h.A.updateIntegration({
                                expireGracePeriod: e,
                            });
                        },
                    }),
                    !W &&
                        s.expire_behavior === c.F.KICK &&
                        (0, i.jsx)(f.Text, {
                            className: P.Ce,
                            color: "text-feedback-critical",
                            variant: "text-sm/normal",
                            children: I.intl.string(I.t.mThMlB),
                        }),
                    l.type === u.s.TWITCH
                        ? (function (e) {
                              let { integration: t, emojis: n, onToggle: r } = e;
                              return (0, i.jsxs)(j.A, {
                                  direction: j.A.Direction.VERTICAL,
                                  children: [
                                      (0, i.jsx)("div", {
                                          className: a()(k.QX, k.QB),
                                          children: (0, i.jsx)(f.Checkbox, {
                                              checked: !!t.enable_emoticons,
                                              disabled: t.syncing,
                                              onChange: (e) => r(e),
                                              label: I.intl.string(I.t["7r4OKg"]),
                                          }),
                                      }),
                                      (0, i.jsx)(j.A, {
                                          wrap: j.A.Wrap.WRAP,
                                          className: P.__invalid_twitchEmojis,
                                          children: n.map((e, t) =>
                                              (0, i.jsx)(
                                                  b.m,
                                                  {
                                                      text: e.name,
                                                      children: (0, i.jsx)(
                                                          "img",
                                                          {
                                                              alt: I.intl.formatToPlainString(I.t.n6ZZn4, {
                                                                  name: e.name,
                                                              }),
                                                              draggable: !1,
                                                              className: a()(P.Zg, "emoji", "jumboable"),
                                                              src: T.Ay.getEmojiURL({
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
                              integration: s,
                              emojis: et,
                              onToggle: function (e) {
                                  h.A.updateIntegration({
                                      enableEmoticons: e,
                                  });
                              },
                          })
                        : null,
                    (0, i.jsx)(f.cGx, {
                        className: P.Bd,
                    }),
                    (0, i.jsx)(j.A, {
                        children: (0, i.jsx)(f.Button, {
                            size: "sm",
                            variant: "critical-secondary",
                            text: I.intl.string(I.t.M6q6eX),
                            onClick: V,
                        }),
                    }),
                ],
            })),
        (0, i.jsx)(f.ZpM, {
            editable: !0,
            className: P.Nr,
            children: (0, i.jsxs)(j.A, {
                direction: j.A.Direction.VERTICAL,
                children: [
                    l.enabled
                        ? (0, i.jsx)(f.DUT, {
                              className: P._S,
                              "aria-expanded": R && !G,
                              onClick: L,
                              children: en,
                          })
                        : en,
                    ei,
                ],
            }),
        })
    );
}
