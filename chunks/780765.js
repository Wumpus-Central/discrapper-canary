n.d(t, {
    A: () => L,
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
    b = n(311907),
    f = n(862482),
    p = n(990078),
    m = n(397927),
    g = n(282956),
    h = n(573648),
    x = n(235986),
    j = n(508675),
    O = n(997509),
    y = n(427157),
    A = n(317525),
    v = n(576705),
    N = n(351906),
    E = n(147925),
    T = n(486020),
    w = n(661191),
    C = n(447066),
    S = n(652215),
    _ = n(985018),
    I = n(86789),
    P = n(473169);

function k(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
            });
    }
    return e;
}

function R(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function L(e) {
    let t,
        {
            guild: n,
            integration: l,
            editedIntegration: s,
            isExpanded: L,
            onToggleExpand: M,
            onDisable: D,
            onEnable: G,
        } = e,
        [U, B] = r.useState(!1),
        W = (0, b.bG)([N.A], () => N.A.hidePersonalInformation),
        H = (0, b.bG)([v.A], () => v.A.can(S.xBc.KICK_MEMBERS, n)),
        V = r.useCallback(() => {
            B(!0), G(l);
        }, [l, G]),
        z = r.useCallback(() => {
            l.syncing ||
                (0, m.qfG)((e) => {
                    if (!H && l.expire_behavior === c.F.KICK)
                        return (0, i.jsx)(
                            m.VoidConfirmModal,
                            R(k({}, e), {
                                header: _.intl.string(_.t.emx3lN),
                                confirmText: _.intl.string(_.t.BddRzS),
                                confirmButtonColor: f.XD.BRAND,
                                children: (0, i.jsx)(m.Text, {
                                    variant: "text-md/normal",
                                    children:
                                        l.type === u.s.YOUTUBE ? _.intl.string(_.t.pDCiEf) : _.intl.string(_.t.sQqHFk),
                                }),
                            }),
                        );
                    let t =
                        l.expire_behavior === c.F.REMOVE_ROLE
                            ? _.intl.string(_.t["6kpw4i"])
                            : _.intl.string(_.t.fQUQIJ);
                    return (0, i.jsx)(
                        m.VoidConfirmModal,
                        R(k({}, e), {
                            header: _.intl.string(_.t.emx3lN),
                            confirmText: t,
                            cancelText: _.intl.string(_.t["ETE/oC"]),
                            onConfirm: () => D(l),
                            children: (0, i.jsx)(m.Text, {
                                variant: "text-md/normal",
                                children:
                                    l.type === u.s.YOUTUBE ? _.intl.string(_.t.anKQWU) : _.intl.string(_.t["BW/xtn"]),
                            }),
                        }),
                    );
                });
        }, [l, D, H]),
        K = r.useCallback(() => {
            O.A.syncIntegration(n.id, l.id);
        }, [n.id, l.id]),
        F = r.useCallback(() => {
            null != l.role_id && (O.A.setSection(S.BEX.ROLES), O.A.selectRole(l.role_id));
        }, [l.role_id]),
        {
            serviceName: Y,
            channelURL: q,
            expireBehaviorLabel: Q,
            syncLabel: J,
            subscribersText: Z,
        } = r.useMemo(() => {
            var e, t, n, i, r;
            let a =
                null !=
                (e =
                    null == (n = h.A.get(l.type)) || null == (t = n.getPlatformUserUrl)
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
                        serviceName: _.intl.string(_.t.aS6cK4),
                        expireBehaviorLabel: _.intl.string(_.t.A5MiqO),
                        syncLabel: _.intl.string(_.t["7vHKVe"]),
                        subscribersText: _.intl.formatToPlainString(_.t["7lNtce"], {
                            subscribers: null != (i = l.subscriber_count) ? i : 0,
                        }),
                        channelURL: a,
                    };
                case u.s.TWITCH:
                default:
                    return {
                        serviceName: _.intl.string(_.t.q4pBG3),
                        expireBehaviorLabel: _.intl.string(_.t["S/WCrG"]),
                        syncLabel: _.intl.string(_.t["0jbPK4"]),
                        subscribersText: _.intl.formatToPlainString(_.t.RdUTrl, {
                            subscribers: null != (r = l.subscriber_count) ? r : 0,
                        }),
                        channelURL: a,
                    };
            }
        }, [l.account, l.subscriber_count, l.type]),
        X = (0, b.bG)([A.A], () => (null != l.role_id ? A.A.getRole(n.id, l.role_id) : void 0)),
        { roleLink: $, syncDescriptionText: ee } = r.useMemo(() => {
            let e;
            e =
                null != X
                    ? (0, i.jsx)(m.MzZ, {
                          onClick: F,
                          children: X.name,
                      })
                    : _.intl.string(_.t.PoWNfe);
            let t = h.A.get(l.type);
            return {
                roleLink: e,
                syncDescriptionText:
                    l.revoked && null != t
                        ? _.intl.formatToPlainString(_.t.G16Wji, {
                              user: l.user,
                              platformName: t.name,
                          })
                        : _.intl.formatToPlainString(_.t.unl3AP, {
                              datetime: o()(l.synced_at).calendar(),
                          }),
            };
        }, [X, F, l.revoked, l.synced_at, l.type, l.user]),
        et = (0, b.bG)([A.A], () => A.A.getSortedRoles(n.id)),
        en = r.useMemo(() => {
            let e = j.Ay.getGuildEmoji(n.id),
                t = et.filter((e) => null != e.tags && e.tags.integration_id === l.id).map((e) => e.id);
            return l.enable_emoticons
                ? e
                      .filter((e) => null != l.role_id && (null == e ? void 0 : e.roles.some((e) => t.includes(e))))
                      .sort((e, t) => e.name.localeCompare(t.name))
                : [];
        }, [n.id, et, l.enable_emoticons, l.id, l.role_id]);
    if (
        (r.useEffect(() => {
            (null == s ? void 0 : s.id) === l.id && (null == s ? void 0 : s.enabled) === !0 && B(!1);
        }, [s, l.id]),
        l.enabled && null != l.user)
    )
        t = [
            {
                icon: m.O4,
                text: W
                    ? _.intl.formatToPlainString(_.t.gcdJ8J, {
                          timestamp: w.default.extractTimestamp(l.id),
                      })
                    : _.intl.formatToPlainString(_.t.Nu9sat, {
                          user: null != l.user ? new y.A(l.user).tag : null,
                          timestamp: w.default.extractTimestamp(l.id),
                      }),
            },
        ];
    else {
        let e = new URL(q);
        t = [
            {
                text: _.intl.format(_.t.BegylZ, {
                    serviceName: Y,
                    accountUrl: q,
                    accountUrlText: e.hostname + e.pathname,
                }),
            },
        ];
    }
    let ei = (0, i.jsxs)(x.A, {
            className: I.wx,
            align: x.A.Align.CENTER,
            children: [
                (0, i.jsx)(C.A, {
                    name: "".concat(l.name),
                    detailsClassName: I.h_,
                    details: t,
                }),
                l.enabled
                    ? (0, i.jsx)(x.A.Child, {
                          shrink: 0,
                          grow: 0,
                          children: (0, i.jsx)(E.A, {
                              className: I.eO,
                              expanded: L && !U,
                              "aria-hidden": !0,
                          }),
                      })
                    : (0, i.jsx)(x.A.Child, {
                          shrink: 0,
                          grow: 0,
                          children: U
                              ? (0, i.jsx)(m.K0, {
                                    variant: "primary",
                                    size: "sm",
                                    disabled: !0,
                                    icon: m.fNY,
                                    "aria-label": _.intl.string(_.t["7sCN8m"]),
                                })
                              : (0, i.jsx)(m.Button, {
                                    variant: "primary",
                                    size: "sm",
                                    onClick: V,
                                    text: _.intl.string(_.t["7sCN8m"]),
                                }),
                      }),
            ],
        }),
        er = null;
    return (
        L &&
            !U &&
            null != s &&
            (er = (0, i.jsxs)(x.A, {
                className: I.rf,
                direction: x.A.Direction.VERTICAL,
                children: [
                    (0, i.jsx)(m.cGx, {
                        className: I.fV,
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
                        return (0, i.jsxs)(x.A, {
                            children: [
                                (0, i.jsxs)(x.A.Child, {
                                    basis: "50%",
                                    children: [
                                        (0, i.jsx)(m.Heading, {
                                            variant: "heading-md/semibold",
                                            className: P.QB,
                                            children: _.intl.string(_.t.eBtNBa),
                                        }),
                                        (0, i.jsx)(m.Text, {
                                            className: I.RZ,
                                            color: "text-strong",
                                            variant: "text-sm/normal",
                                            children: a,
                                        }),
                                    ],
                                }),
                                (0, i.jsxs)(x.A.Child, {
                                    basis: "50%",
                                    children: [
                                        (0, i.jsx)(m.Heading, {
                                            variant: "heading-sm/semibold",
                                            className: P.QB,
                                            children: n,
                                        }),
                                        (0, i.jsxs)(x.A, {
                                            justify: x.A.Justify.BETWEEN,
                                            children: [
                                                (0, i.jsxs)(x.A, {
                                                    direction: x.A.Direction.VERTICAL,
                                                    children: [
                                                        (0, i.jsx)(m.Text, {
                                                            color: "text-strong",
                                                            variant: "text-sm/normal",
                                                            children: r,
                                                        }),
                                                        (0, i.jsx)(m.Text, {
                                                            color: "text-default",
                                                            variant: "text-xs/normal",
                                                            children: l,
                                                        }),
                                                    ],
                                                }),
                                                t.syncing
                                                    ? (0, i.jsx)(m.K0, {
                                                          size: "sm",
                                                          variant: "primary",
                                                          icon: m.fNY,
                                                          "aria-label": _.intl.string(_.t.BkuOO6),
                                                          disabled: !0,
                                                      })
                                                    : (0, i.jsx)(m.Button, {
                                                          size: "sm",
                                                          variant: "primary",
                                                          text: _.intl.string(_.t.BkuOO6),
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
                        subscribersText: Z,
                        descriptionText: ee,
                        roleLink: $,
                        onSync: K,
                    }),
                    (0, i.jsx)(m.cGx, {
                        className: I.W7,
                    }),
                    (function (e) {
                        let { integration: t, labelText: n, onBehaviorChange: r, onGracePeriodChange: l } = e;
                        return (0, i.jsxs)(x.A, {
                            children: [
                                (0, i.jsx)(x.A.Child, {
                                    basis: "50%",
                                    children: (0, i.jsx)(m.l6P, {
                                        selectionMode: "single",
                                        label: n,
                                        placeholder: n,
                                        value: "".concat(t.expire_behavior),
                                        options: [
                                            {
                                                id: "remove-role",
                                                value: c.F.REMOVE_ROLE.toString(),
                                                label: _.intl.string(_.t["6kpw4i"]),
                                            },
                                            {
                                                id: "kick",
                                                value: c.F.KICK.toString(),
                                                label: _.intl.string(_.t.fQUQIJ),
                                            },
                                        ],
                                        disabled: t.syncing,
                                        onSelectionChange: (e) => r(parseInt(e)),
                                    }),
                                }),
                                (0, i.jsx)(x.A.Child, {
                                    basis: "50%",
                                    children: (0, i.jsx)(m.l6P, {
                                        selectionMode: "single",
                                        label: _.intl.string(_.t.uiXMow),
                                        placeholder: _.intl.string(_.t.uiXMow),
                                        maxOptionsVisible: 5,
                                        value: "".concat(t.expire_grace_period),
                                        options: Object.values(d.u)
                                            .filter(Number.isInteger)
                                            .map((e) => ({
                                                id: "".concat(e),
                                                value: "".concat(e),
                                                label: _.intl.formatToPlainString(_.t.eGjmy5, {
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
                        labelText: Q,
                        onBehaviorChange: function (e) {
                            g.A.updateIntegration({
                                expireBehavior: e,
                            });
                        },
                        onGracePeriodChange: function (e) {
                            g.A.updateIntegration({
                                expireGracePeriod: e,
                            });
                        },
                    }),
                    !H &&
                        s.expire_behavior === c.F.KICK &&
                        (0, i.jsx)(m.Text, {
                            className: I.Ce,
                            color: "text-feedback-critical",
                            variant: "text-sm/normal",
                            children: _.intl.string(_.t.mThMlB),
                        }),
                    l.type === u.s.TWITCH
                        ? (function (e) {
                              let { integration: t, emojis: n, onToggle: r } = e;
                              return (0, i.jsxs)(x.A, {
                                  direction: x.A.Direction.VERTICAL,
                                  children: [
                                      (0, i.jsx)("div", {
                                          className: a()(P.QX, P.QB),
                                          children: (0, i.jsx)(m.Checkbox, {
                                              checked: !!t.enable_emoticons,
                                              disabled: t.syncing,
                                              onChange: (e) => r(e),
                                              label: _.intl.string(_.t["7r4OKg"]),
                                          }),
                                      }),
                                      (0, i.jsx)(x.A, {
                                          wrap: x.A.Wrap.WRAP,
                                          className: I.__invalid_twitchEmojis,
                                          children: n.map((e, t) =>
                                              (0, i.jsx)(
                                                  p.m,
                                                  {
                                                      text: e.name,
                                                      children: (0, i.jsx)(
                                                          "img",
                                                          {
                                                              alt: _.intl.formatToPlainString(_.t.n6ZZn4, {
                                                                  name: e.name,
                                                              }),
                                                              draggable: !1,
                                                              className: a()(I.Zg, "emoji", "jumboable"),
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
                              emojis: en,
                              onToggle: function (e) {
                                  g.A.updateIntegration({
                                      enableEmoticons: e,
                                  });
                              },
                          })
                        : null,
                    (0, i.jsx)(m.cGx, {
                        className: I.Bd,
                    }),
                    (0, i.jsx)(x.A, {
                        children: (0, i.jsx)(m.Button, {
                            size: "sm",
                            variant: "critical-secondary",
                            text: _.intl.string(_.t.M6q6eX),
                            onClick: z,
                        }),
                    }),
                ],
            })),
        (0, i.jsx)(m.ZpM, {
            editable: !0,
            className: I.Nr,
            children: (0, i.jsxs)(x.A, {
                direction: x.A.Direction.VERTICAL,
                children: [
                    l.enabled
                        ? (0, i.jsx)(m.DUT, {
                              className: I._S,
                              "aria-expanded": L && !U,
                              onClick: M,
                              children: ei,
                          })
                        : ei,
                    er,
                ],
            }),
        })
    );
}
