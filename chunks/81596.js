n.d(e, { default: () => h }), n(388685);
var i = n(54381),
    r = n(473749),
    s = n(793030),
    l = n(442837),
    o = n(481060),
    a = n(485267),
    c = n(564990),
    d = n(353647),
    u = n(313789),
    C = n(518596),
    E = n(527790),
    x = n(540440),
    b = n(365583),
    _ = n(981631),
    p = n(388032),
    I = n(616874);
function h(t) {
    let { user: e, entry: n, transitionState: h, onAction: k, onClose: m, onOpenGameSettings: R } = t,
        [S, T] = (0, l.Wu)([d.Z], () => [d.Z.isDeletingEntryHistory, d.Z.deleteOutboxEntryError]);
    return (
        r.useEffect(() => a.Bt, []),
        (0, i.jsxs)(s.Modal, {
            title: (0, x.y)(n),
            subtitle: p.intl.format(p.t.KV72oe, {
                settingsHook: (t, e) => {
                    let r = (0, b.C)({
                        entry: n,
                        onOpenGameSettings: R,
                    });
                    return (0, i.jsx)(
                        o.eee,
                        {
                            onClick: () => {
                                null == k || k({ action: "PRESS_CLEAR_HISTORY_DISCLAIMER" }),
                                    null != r
                                        ? r()
                                        : (0, C.openUserSettings)(u.n.PROFILE_PANEL, {
                                              section: _.oAB.PROFILE_CUSTOMIZATION,
                                          }),
                                    m();
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
                    text: p.intl.string(p.t["ETE/oC"]),
                    onClick: m,
                    variant: "secondary",
                    size: "sm",
                },
                {
                    text: null != T ? p.intl.string(p.t["5911Lb"]) : p.intl.string(p.t.VkKicb),
                    onClick: () => {
                        null == k || k({ action: "PRESS_CLEAR_HISTORY_BUTTON" }), (0, c.CV)(n, e.id, m);
                    },
                    disabled: S,
                    variant: "critical-primary",
                    size: "sm",
                },
            ],
            onClose: m,
            transitionState: h,
            children: [
                null != T
                    ? (0, i.jsxs)("div", {
                          className: I.error,
                          children: [
                              (0, i.jsx)(o.k$p, { color: o.TVs.colors.ICON_FEEDBACK_CRITICAL }),
                              (0, i.jsx)(o.Text, {
                                  variant: "text-sm/medium",
                                  children: p.intl.string(p.t.FMbL3s),
                              }),
                          ],
                      })
                    : null,
                (0, i.jsx)(E.Z, {
                    user: e,
                    entry: n,
                    className: I.card,
                    hideContextMenu: !0,
                }),
            ],
        })
    );
}
