var n = e(477900),
    s = e(582128),
    r = e(855986),
    l = e(189213),
    o = e(28863),
    c = e(285796),
    a = e(646514),
    d = e(834730),
    u = e(396696),
    C = e(86070),
    E = e(517164),
    A = e(780964),
    f = e(766075),
    h = e(46653),
    y = e(591179),
    I = e(702476),
    _ = e(637865),
    m = e(754495),
    p = e(939075),
    x = e(792996),
    b = e(535355);
e.d(
    i,
    {},
    {
        default: function (t) {
            let { user: i, entry: e, transitionState: k, onAction: R, onClose: S, onOpenGameSettings: g } = t,
                [L, O] = (0, r.yK)([E.A], () => [E.A.isDeletingEntryHistory, E.A.deleteOutboxEntryError]),
                j = (0, y.X)("UserProfileActivityDeleteHistoryModal");
            return (
                s.useEffect(() => u.fq, []),
                (0, n.jsxs)(l.a, {
                    title: (0, m.W)(e),
                    subtitle: x.intl.format(x.t.KV72oe, {
                        settingsHook: function (t, i) {
                            let s = (0, p.y)({ entry: e, onOpenGameSettings: g });
                            return (0, n.jsx)(
                                o.Anchor,
                                {
                                    onClick: function () {
                                        (R?.({ action: "PRESS_CLEAR_HISTORY_DISCLAIMER" }),
                                            null != s
                                                ? s()
                                                : j
                                                  ? (0, I.openUserProfileModal)({ userId: h.default.getId() })
                                                  : (0, f.openUserSettings)(A.X.PROFILE_PANEL),
                                            S());
                                    },
                                    children: t,
                                },
                                i,
                            );
                        },
                    }),
                    size: "sm",
                    actions: [
                        { text: x.intl.string(x.t["ETE/oC"]), onClick: S, variant: "secondary", size: "sm" },
                        {
                            text: null != O ? x.intl.string(x.t["5911Lb"]) : x.intl.string(x.t.VkKicb),
                            onClick: function () {
                                (R?.({ action: "PRESS_CLEAR_HISTORY_BUTTON" }), (0, C.FO)(e, i.id, S));
                            },
                            disabled: L,
                            variant: "critical-primary",
                            size: "sm",
                        },
                    ],
                    onClose: S,
                    transitionState: k,
                    children: [
                        null != O
                            ? (0, n.jsxs)("div", {
                                  className: b.z3,
                                  children: [
                                      (0, n.jsx)(c.CircleXIcon, { color: a.A.colors.ICON_FEEDBACK_CRITICAL }),
                                      (0, n.jsx)(d.E, {
                                          variant: "body-sm/medium",
                                          children: x.intl.string(x.t.FMbL3s),
                                      }),
                                  ],
                              })
                            : null,
                        (0, n.jsx)(_.A, { user: i, entry: e, className: b.Nr, hideContextMenu: !0 }),
                    ],
                })
            );
        },
    },
);
