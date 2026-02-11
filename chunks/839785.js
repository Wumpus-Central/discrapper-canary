e.d(i, { default: () => b });
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
    _ = e(754495),
    x = e(939075),
    h = e(652215),
    A = e(985018),
    I = e(594183);
function b(t) {
    let { user: i, entry: e, transitionState: b, onAction: m, onClose: p, onOpenGameSettings: L } = t,
        [O, R] = (0, l.yK)([d.A], () => [d.A.isDeletingEntryHistory, d.A.deleteOutboxEntryError]);
    return (
        n.useEffect(() => a.fq, []),
        (0, s.jsxs)(r.Modal, {
            title: (0, _.W)(e),
            subtitle: A.intl.format(A.t.KV72oe, {
                settingsHook: (t, i) => {
                    let n = (0, x.y)({ entry: e, onOpenGameSettings: L });
                    return (0, s.jsx)(
                        o.MzZ,
                        {
                            onClick: () => {
                                m?.({ action: "PRESS_CLEAR_HISTORY_DISCLAIMER" }),
                                    null != n
                                        ? n()
                                        : (0, C.openUserSettings)(u.X.PROFILE_PANEL, {
                                              section: h.nc_.PROFILE_CUSTOMIZATION,
                                          }),
                                    p();
                            },
                            children: t,
                        },
                        i,
                    );
                },
            }),
            size: "sm",
            actions: [
                { text: A.intl.string(A.t["ETE/oC"]), onClick: p, variant: "secondary", size: "sm" },
                {
                    text: null != R ? A.intl.string(A.t["5911Lb"]) : A.intl.string(A.t.VkKicb),
                    onClick: () => {
                        m?.({ action: "PRESS_CLEAR_HISTORY_BUTTON" }), (0, c.FO)(e, i.id, p);
                    },
                    disabled: O,
                    variant: "critical-primary",
                    size: "sm",
                },
            ],
            onClose: p,
            transitionState: b,
            children: [
                null != R
                    ? (0, s.jsxs)("div", {
                          className: I.z3,
                          children: [
                              (0, s.jsx)(o.aXh, { color: o.LU0.colors.ICON_FEEDBACK_CRITICAL }),
                              (0, s.jsx)(o.Text, { variant: "text-sm/medium", children: A.intl.string(A.t.FMbL3s) }),
                          ],
                      })
                    : null,
                (0, s.jsx)(E.A, { user: i, entry: e, className: I.Nr, hideContextMenu: !0 }),
            ],
        })
    );
}
