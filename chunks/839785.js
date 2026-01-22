i.d(e, {
    default: () => b,
}),
    i(896048);
var n = i(627968),
    s = i(64700),
    l = i(158954),
    r = i(311907),
    a = i(397927),
    o = i(708197),
    c = i(86070),
    d = i(517164),
    u = i(780964),
    C = i(840065),
    E = i(558628),
    _ = i(754495),
    x = i(939075),
    h = i(652215),
    A = i(985018),
    I = i(86617);

function b(t) {
    let { user: e, entry: i, transitionState: b, onAction: m, onClose: p, onOpenGameSettings: L } = t,
        [O, R] = (0, r.yK)([d.A], () => [d.A.isDeletingEntryHistory, d.A.deleteOutboxEntryError]);
    return (
        s.useEffect(() => o.fq, []),
        (0, n.jsxs)(l.Modal, {
            title: (0, _.W)(i),
            subtitle: A.intl.format(A.t.KV72oe, {
                settingsHook: (t, e) => {
                    let s = (0, x.y)({
                        entry: i,
                        onOpenGameSettings: L,
                    });
                    return (0, n.jsx)(
                        a.MzZ,
                        {
                            onClick: () => {
                                null == m ||
                                    m({
                                        action: "PRESS_CLEAR_HISTORY_DISCLAIMER",
                                    }),
                                    null != s
                                        ? s()
                                        : (0, C.openUserSettings)(u.X.PROFILE_PANEL, {
                                              section: h.nc_.PROFILE_CUSTOMIZATION,
                                          }),
                                    p();
                            },
                            children: t,
                        },
                        e,
                    );
                },
            }),
            size: "sm",
            actions: [
                {
                    text: A.intl.string(A.t["ETE/oC"]),
                    onClick: p,
                    variant: "secondary",
                    size: "sm",
                },
                {
                    text: null != R ? A.intl.string(A.t["5911Lb"]) : A.intl.string(A.t.VkKicb),
                    onClick: () => {
                        null == m ||
                            m({
                                action: "PRESS_CLEAR_HISTORY_BUTTON",
                            }),
                            (0, c.FO)(i, e.id, p);
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
                    ? (0, n.jsxs)("div", {
                          className: I.z3,
                          children: [
                              (0, n.jsx)(a.aXh, {
                                  color: a.LU0.colors.ICON_FEEDBACK_CRITICAL,
                              }),
                              (0, n.jsx)(a.Text, {
                                  variant: "text-sm/medium",
                                  children: A.intl.string(A.t.FMbL3s),
                              }),
                          ],
                      })
                    : null,
                (0, n.jsx)(E.A, {
                    user: e,
                    entry: i,
                    className: I.Nr,
                    hideContextMenu: !0,
                }),
            ],
        })
    );
}
