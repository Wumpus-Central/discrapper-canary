i.d(n, { default: () => O }), i(388685);
var e = i(54381),
    r = i(473749),
    s = i(793030),
    l = i(442837),
    d = i(481060),
    a = i(485267),
    c = i(564990),
    o = i(353647),
    E = i(313789),
    u = i(518596),
    _ = i(527790),
    T = i(540440),
    C = i(365583),
    N = i(981631),
    R = i(388032),
    h = i(616874);
function O(t) {
    let { user: n, entry: i, transitionState: O, onAction: p, onClose: I, onOpenGameSettings: f } = t,
        [x, S] = (0, l.Wu)([o.Z], () => [o.Z.isDeletingEntryHistory, o.Z.deleteOutboxEntryError]);
    return (
        r.useEffect(() => a.Bt, []),
        (0, e.jsxs)(s.Modal, {
            title: (0, T.y)(i),
            subtitle: R.intl.format(R.t.KV72oe, {
                settingsHook: (t, n) => {
                    let r = (0, C.C)({
                        entry: i,
                        onOpenGameSettings: f,
                    });
                    return (0, e.jsx)(
                        d.Anchor,
                        {
                            onClick: () => {
                                null == p || p({ action: "PRESS_CLEAR_HISTORY_DISCLAIMER" }),
                                    null != r
                                        ? r()
                                        : (0, u.openUserSettings)(E.n.PROFILE_PANEL, {
                                              section: N.oAB.PROFILE_CUSTOMIZATION,
                                          }),
                                    I();
                            },
                            children: t,
                        },
                        n,
                    );
                },
            }),
            size: "sm",
            actions: [
                {
                    text: R.intl.string(R.t["ETE/oC"]),
                    onClick: I,
                    variant: "secondary",
                    size: "sm",
                },
                {
                    text: null != S ? R.intl.string(R.t["5911Lb"]) : R.intl.string(R.t.VkKicb),
                    onClick: () => {
                        null == p || p({ action: "PRESS_CLEAR_HISTORY_BUTTON" }), (0, c.CV)(i, n.id, I);
                    },
                    disabled: x,
                    variant: "critical-primary",
                    size: "sm",
                },
            ],
            onClose: I,
            transitionState: O,
            children: [
                null != S
                    ? (0, e.jsxs)("div", {
                          className: h.error,
                          children: [
                              (0, e.jsx)(d.k$p, { color: d.TVs.colors.STATUS_DANGER }),
                              (0, e.jsx)(d.Text, {
                                  variant: "text-sm/medium",
                                  children: R.intl.string(R.t.FMbL3s),
                              }),
                          ],
                      })
                    : null,
                (0, e.jsx)(_.Z, {
                    user: n,
                    entry: i,
                    className: h.card,
                    hideContextMenu: !0,
                }),
            ],
        })
    );
}
