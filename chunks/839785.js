e.d(i, { default: () => m });
var s = e(627968),
    n = e(64700),
    r = e(158954),
    l = e(311907),
    o = e(397927),
    a = e(708197),
    c = e(86070),
    d = e(517164),
    u = e(780964),
    C = e(840065),
    E = e(558628),
    x = e(754495),
    _ = e(939075),
    h = e(985018),
    b = e(594183);
function m(t) {
    let { user: i, entry: e, transitionState: m, onAction: p, onClose: A, onOpenGameSettings: k } = t,
        [L, R] = (0, l.yK)([d.A], () => [d.A.isDeletingEntryHistory, d.A.deleteOutboxEntryError]);
    return (
        n.useEffect(() => a.fq, []),
        (0, s.jsxs)(r.Modal, {
            title: (0, x.W)(e),
            subtitle: h.intl.format(h.t.KV72oe, {
                settingsHook: (t, i) => {
                    let n = (0, _.y)({ entry: e, onOpenGameSettings: k });
                    return (0, s.jsx)(
                        o.MzZ,
                        {
                            onClick: () => {
                                p?.({ action: "PRESS_CLEAR_HISTORY_DISCLAIMER" }),
                                    null != n ? n() : (0, C.openUserSettings)(u.X.PROFILE_PANEL),
                                    A();
                            },
                            children: t,
                        },
                        i,
                    );
                },
            }),
            size: "sm",
            actions: [
                { text: h.intl.string(h.t["ETE/oC"]), onClick: A, variant: "secondary", size: "sm" },
                {
                    text: null != R ? h.intl.string(h.t["5911Lb"]) : h.intl.string(h.t.VkKicb),
                    onClick: () => {
                        p?.({ action: "PRESS_CLEAR_HISTORY_BUTTON" }), (0, c.FO)(e, i.id, A);
                    },
                    disabled: L,
                    variant: "critical-primary",
                    size: "sm",
                },
            ],
            onClose: A,
            transitionState: m,
            children: [
                null != R
                    ? (0, s.jsxs)("div", {
                          className: b.z3,
                          children: [
                              (0, s.jsx)(o.aXh, { color: o.LU0.colors.ICON_FEEDBACK_CRITICAL }),
                              (0, s.jsx)(o.Text, { variant: "text-sm/medium", children: h.intl.string(h.t.FMbL3s) }),
                          ],
                      })
                    : null,
                (0, s.jsx)(E.A, { user: i, entry: e, className: b.Nr, hideContextMenu: !0 }),
            ],
        })
    );
}
