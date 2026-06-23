e.d(i, { default: () => R });
var n = e(627968),
    s = e(64700),
    r = e(189213),
    l = e(17928),
    o = e(349288),
    a = e(285796),
    c = e(661531),
    d = e(834730),
    u = e(180170),
    E = e(86070),
    C = e(517164),
    A = e(780964),
    f = e(766075),
    h = e(495544),
    x = e(591179),
    _ = e(975732),
    m = e(353394),
    p = e(754495),
    y = e(939075),
    I = e(375708),
    k = e(568802);
function R(t) {
    let { user: i, entry: e, transitionState: R, onAction: S, onClose: b, onOpenGameSettings: g } = t,
        [L, O] = (0, l.yK)([C.A], () => [C.A.isDeletingEntryHistory, C.A.deleteOutboxEntryError]),
        j = (0, x.X)("UserProfileActivityDeleteHistoryModal");
    return (
        s.useEffect(() => u.fq, []),
        (0, n.jsxs)(r.Modal, {
            title: (0, p.W)(e),
            subtitle: I.intl.format(I.t.KV72oe, {
                settingsHook: function (t, i) {
                    let s = (0, y.y)({ entry: e, onOpenGameSettings: g });
                    return (0, n.jsx)(
                        o.Anchor,
                        {
                            onClick: () => {
                                S?.({ action: "PRESS_CLEAR_HISTORY_DISCLAIMER" }),
                                    null != s
                                        ? s()
                                        : j
                                          ? (0, _.openUserProfileModal)({ userId: h.default.getId() })
                                          : (0, f.openUserSettings)(A.X.PROFILE_PANEL),
                                    b();
                            },
                            children: t,
                        },
                        i,
                    );
                },
            }),
            size: "sm",
            actions: [
                { text: I.intl.string(I.t["ETE/oC"]), onClick: b, variant: "secondary", size: "sm" },
                {
                    text: null != O ? I.intl.string(I.t["5911Lb"]) : I.intl.string(I.t.VkKicb),
                    onClick: function () {
                        S?.({ action: "PRESS_CLEAR_HISTORY_BUTTON" }), (0, E.FO)(e, i.id, b);
                    },
                    disabled: L,
                    variant: "critical-primary",
                    size: "sm",
                },
            ],
            onClose: b,
            transitionState: R,
            children: [
                null != O
                    ? (0, n.jsxs)("div", {
                          className: k.z3,
                          children: [
                              (0, n.jsx)(a.a, { color: c.A.colors.ICON_FEEDBACK_CRITICAL }),
                              (0, n.jsx)(d.E, { variant: "text-sm/medium", children: I.intl.string(I.t.FMbL3s) }),
                          ],
                      })
                    : null,
                (0, n.jsx)(m.A, { user: i, entry: e, className: k.Nr, hideContextMenu: !0 }),
            ],
        })
    );
}
