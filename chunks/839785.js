i.d(e, { default: () => m });
var s = i(627968),
    r = i(64700),
    n = i(158954),
    l = i(311907),
    o = i(397927),
    a = i(708197),
    d = i(86070),
    c = i(517164),
    u = i(780964),
    C = i(840065),
    E = i(961350),
    x = i(591179),
    _ = i(657331),
    f = i(558628),
    h = i(754495),
    p = i(939075),
    A = i(985018),
    b = i(527447);
function m(t) {
    let { user: e, entry: i, transitionState: m, onAction: y, onClose: I, onOpenGameSettings: k } = t,
        [L, R] = (0, l.yK)([c.A], () => [c.A.isDeletingEntryHistory, c.A.deleteOutboxEntryError]),
        S = (0, x.X)("UserProfileActivityDeleteHistoryModal");
    return (
        r.useEffect(() => a.fq, []),
        (0, s.jsxs)(n.Modal, {
            title: (0, h.W)(i),
            subtitle: A.intl.format(A.t.KV72oe, {
                settingsHook: (t, e) => {
                    let r = (0, p.y)({ entry: i, onOpenGameSettings: k });
                    return (0, s.jsx)(
                        o.MzZ,
                        {
                            onClick: () => {
                                y?.({ action: "PRESS_CLEAR_HISTORY_DISCLAIMER" }),
                                    null != r
                                        ? r()
                                        : S
                                          ? (0, _.openUserProfileModal)({ userId: E.default.getId() })
                                          : (0, C.openUserSettings)(u.X.PROFILE_PANEL),
                                    I();
                            },
                            children: t,
                        },
                        e,
                    );
                },
            }),
            size: "sm",
            actions: [
                { text: A.intl.string(A.t["ETE/oC"]), onClick: I, variant: "secondary", size: "sm" },
                {
                    text: null != R ? A.intl.string(A.t["5911Lb"]) : A.intl.string(A.t.VkKicb),
                    onClick: () => {
                        y?.({ action: "PRESS_CLEAR_HISTORY_BUTTON" }), (0, d.FO)(i, e.id, I);
                    },
                    disabled: L,
                    variant: "critical-primary",
                    size: "sm",
                },
            ],
            onClose: I,
            transitionState: m,
            children: [
                null != R
                    ? (0, s.jsxs)("div", {
                          className: b.z3,
                          children: [
                              (0, s.jsx)(o.aXh, { color: o.LU0.colors.ICON_FEEDBACK_CRITICAL }),
                              (0, s.jsx)(o.Text, { variant: "text-sm/medium", children: A.intl.string(A.t.FMbL3s) }),
                          ],
                      })
                    : null,
                (0, s.jsx)(f.A, { user: e, entry: i, className: b.Nr, hideContextMenu: !0 }),
            ],
        })
    );
}
