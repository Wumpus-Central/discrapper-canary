i.d(e, { default: () => k });
var n = i(627968),
    r = i(64700),
    s = i(189213),
    l = i(17928),
    o = i(349288),
    a = i(285796),
    d = i(661531),
    c = i(834730),
    u = i(180170),
    C = i(86070),
    f = i(517164),
    E = i(780964),
    A = i(858897),
    _ = i(495544),
    b = i(591179),
    g = i(975732),
    m = i(353394),
    p = i(754495),
    x = i(939075),
    y = i(985018),
    h = i(568802);
function k(t) {
    let { user: e, entry: i, transitionState: k, onAction: I, onClose: R, onOpenGameSettings: S } = t,
        [L, j] = (0, l.yK)([f.A], () => [f.A.isDeletingEntryHistory, f.A.deleteOutboxEntryError]),
        v = (0, b.X)("UserProfileActivityDeleteHistoryModal");
    return (
        r.useEffect(() => u.fq, []),
        (0, n.jsxs)(s.Modal, {
            title: (0, p.W)(i),
            subtitle: y.intl.format(y.t.KV72oe, {
                settingsHook: (t, e) => {
                    let r = (0, x.y)({ entry: i, onOpenGameSettings: S });
                    return (0, n.jsx)(
                        o.Anchor,
                        {
                            onClick: () => {
                                I?.({ action: "PRESS_CLEAR_HISTORY_DISCLAIMER" }),
                                    null != r
                                        ? r()
                                        : v
                                          ? (0, g.openUserProfileModal)({ userId: _.default.getId() })
                                          : (0, A.openUserSettings)(E.X.PROFILE_PANEL),
                                    R();
                            },
                            children: t,
                        },
                        e,
                    );
                },
            }),
            size: "sm",
            actions: [
                { text: y.intl.string(y.t["ETE/oC"]), onClick: R, variant: "secondary", size: "sm" },
                {
                    text: null != j ? y.intl.string(y.t["5911Lb"]) : y.intl.string(y.t.VkKicb),
                    onClick: () => {
                        I?.({ action: "PRESS_CLEAR_HISTORY_BUTTON" }), (0, C.FO)(i, e.id, R);
                    },
                    disabled: L,
                    variant: "critical-primary",
                    size: "sm",
                },
            ],
            onClose: R,
            transitionState: k,
            children: [
                null != j
                    ? (0, n.jsxs)("div", {
                          className: h.z3,
                          children: [
                              (0, n.jsx)(a.a, { color: d.A.colors.ICON_FEEDBACK_CRITICAL }),
                              (0, n.jsx)(c.E, { variant: "text-sm/medium", children: y.intl.string(y.t.FMbL3s) }),
                          ],
                      })
                    : null,
                (0, n.jsx)(m.A, { user: e, entry: i, className: h.Nr, hideContextMenu: !0 }),
            ],
        })
    );
}
