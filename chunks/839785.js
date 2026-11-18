var e = n(477900),
    s = n(582128),
    r = n(855986),
    l = n(189213),
    o = n(28863),
    c = n(285796),
    a = n(646514),
    d = n(834730),
    u = n(396696),
    C = n(86070),
    E = n(517164),
    f = n(46653),
    h = n(702476),
    A = n(637865),
    m = n(754495),
    x = n(939075),
    I = n(792996),
    _ = n(535355);
n.d(
    i,
    {},
    {
        default: function (t) {
            let { user: i, entry: n, transitionState: b, onAction: k, onClose: p, onOpenGameSettings: y } = t,
                [R, S] = (0, r.yK)([E.A], () => [E.A.isDeletingEntryHistory, E.A.deleteOutboxEntryError]);
            return (
                s.useEffect(() => u.fq, []),
                (0, e.jsxs)(l.a, {
                    title: (0, m.W)(n),
                    subtitle: I.intl.format(I.t.KV72oe, {
                        settingsHook: function (t, i) {
                            let s = (0, x.y)({ entry: n, onOpenGameSettings: y });
                            return (0, e.jsx)(
                                o.Anchor,
                                {
                                    onClick: function () {
                                        (k?.({ action: "PRESS_CLEAR_HISTORY_DISCLAIMER" }),
                                            null != s
                                                ? s()
                                                : (0, h.openUserProfileModal)({ userId: f.default.getId() }),
                                            p());
                                    },
                                    children: t,
                                },
                                i,
                            );
                        },
                    }),
                    size: "sm",
                    actions: [
                        { text: I.intl.string(I.t["ETE/oC"]), onClick: p, variant: "secondary", size: "sm" },
                        {
                            text: null != S ? I.intl.string(I.t["5911Lb"]) : I.intl.string(I.t.VkKicb),
                            onClick: function () {
                                (k?.({ action: "PRESS_CLEAR_HISTORY_BUTTON" }), (0, C.FO)(n, i.id, p));
                            },
                            disabled: R,
                            variant: "critical-primary",
                            size: "sm",
                        },
                    ],
                    onClose: p,
                    transitionState: b,
                    children: [
                        null != S
                            ? (0, e.jsxs)("div", {
                                  className: _.z3,
                                  children: [
                                      (0, e.jsx)(c.CircleXIcon, { color: a.A.colors.ICON_FEEDBACK_CRITICAL }),
                                      (0, e.jsx)(d.E, {
                                          variant: "body-sm/medium",
                                          children: I.intl.string(I.t.FMbL3s),
                                      }),
                                  ],
                              })
                            : null,
                        (0, e.jsx)(A.A, { user: i, entry: n, className: _.Nr, hideContextMenu: !0 }),
                    ],
                })
            );
        },
    },
);
