i.d(e, { default: () => y });
var n = i(627968),
    s = i(64700),
    r = i(158954),
    l = i(311907),
    o = i(397927),
    a = i(708197),
    d = i(86070),
    c = i(517164),
    u = i(780964),
    C = i(840065),
    f = i(961350),
    E = i(591179),
    x = i(657331),
    _ = i(558628),
    b = i(754495),
    g = i(939075),
    m = i(985018),
    p = i(527447);
function y(t) {
    let { user: e, entry: i, transitionState: y, onAction: h, onClose: A, onOpenGameSettings: k } = t,
        [I, L] = (0, l.yK)([c.A], () => [c.A.isDeletingEntryHistory, c.A.deleteOutboxEntryError]),
        R = (0, E.X)("UserProfileActivityDeleteHistoryModal");
    return (
        s.useEffect(() => a.fq, []),
        (0, n.jsxs)(r.Modal, {
            title: (0, b.W)(i),
            subtitle: m.intl.format(m.t.KV72oe, {
                settingsHook: (t, e) => {
                    let s = (0, g.y)({ entry: i, onOpenGameSettings: k });
                    return (0, n.jsx)(
                        o.MzZ,
                        {
                            onClick: () => {
                                h?.({ action: "PRESS_CLEAR_HISTORY_DISCLAIMER" }),
                                    null != s
                                        ? s()
                                        : R
                                          ? (0, x.openUserProfileModal)({ userId: f.default.getId() })
                                          : (0, C.openUserSettings)(u.X.PROFILE_PANEL),
                                    A();
                            },
                            children: t,
                        },
                        e,
                    );
                },
            }),
            size: "sm",
            actions: [
                { text: m.intl.string(m.t["ETE/oC"]), onClick: A, variant: "secondary", size: "sm" },
                {
                    text: null != L ? m.intl.string(m.t["5911Lb"]) : m.intl.string(m.t.VkKicb),
                    onClick: () => {
                        h?.({ action: "PRESS_CLEAR_HISTORY_BUTTON" }), (0, d.FO)(i, e.id, A);
                    },
                    disabled: I,
                    variant: "critical-primary",
                    size: "sm",
                },
            ],
            onClose: A,
            transitionState: y,
            children: [
                null != L
                    ? (0, n.jsxs)("div", {
                          className: p.z3,
                          children: [
                              (0, n.jsx)(o.aXh, { color: o.LU0.colors.ICON_FEEDBACK_CRITICAL }),
                              (0, n.jsx)(o.Text, { variant: "text-sm/medium", children: m.intl.string(m.t.FMbL3s) }),
                          ],
                      })
                    : null,
                (0, n.jsx)(_.A, { user: e, entry: i, className: p.Nr, hideContextMenu: !0 }),
            ],
        })
    );
}
