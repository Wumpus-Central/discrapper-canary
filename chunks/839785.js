var n = e(477900),
    s = e(582128),
    r = e(855986),
    l = e(189213),
    o = e(28863),
    a = e(285796),
    c = e(646514),
    d = e(834730),
    u = e(396696),
    E = e(86070),
    C = e(517164),
    A = e(780964),
    f = e(766075),
    h = e(46653),
    y = e(591179),
    _ = e(702476),
    m = e(637865),
    p = e(754495),
    x = e(939075),
    I = e(792996),
    b = e(535355);
e.d(
    i,
    {},
    {
        default: function (t) {
            let { user: i, entry: e, transitionState: k, onAction: R, onClose: S, onOpenGameSettings: g } = t,
                [L, O] = (0, r.yK)([C.A], () => [C.A.isDeletingEntryHistory, C.A.deleteOutboxEntryError]),
                j = (0, y.X)("UserProfileActivityDeleteHistoryModal");
            return (
                s.useEffect(() => u.fq, []),
                (0, n.jsxs)(l.a, {
                    title: (0, p.W)(e),
                    subtitle: I.intl.format(I.t.KV72oe, {
                        settingsHook: function (t, i) {
                            let s = (0, x.y)({ entry: e, onOpenGameSettings: g });
                            return (0, n.jsx)(
                                o.Anchor,
                                {
                                    onClick: function () {
                                        (R?.({ action: "PRESS_CLEAR_HISTORY_DISCLAIMER" }),
                                            null != s
                                                ? s()
                                                : j
                                                  ? (0, _.openUserProfileModal)({ userId: h.default.getId() })
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
                        { text: I.intl.string(I.t["ETE/oC"]), onClick: S, variant: "secondary", size: "sm" },
                        {
                            text: null != O ? I.intl.string(I.t["5911Lb"]) : I.intl.string(I.t.VkKicb),
                            onClick: function () {
                                (R?.({ action: "PRESS_CLEAR_HISTORY_BUTTON" }), (0, E.FO)(e, i.id, S));
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
                                      (0, n.jsx)(a.a, { color: c.A.colors.ICON_FEEDBACK_CRITICAL }),
                                      (0, n.jsx)(d.E, {
                                          variant: "body-sm/medium",
                                          children: I.intl.string(I.t.FMbL3s),
                                      }),
                                  ],
                              })
                            : null,
                        (0, n.jsx)(m.A, { user: i, entry: e, className: b.Nr, hideContextMenu: !0 }),
                    ],
                })
            );
        },
    },
);
