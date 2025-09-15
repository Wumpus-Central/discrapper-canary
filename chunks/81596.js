i.d(n, { default: () => h }), i(388685);
var e = i(951288),
    r = i(647438),
    s = i(442837),
    l = i(82659),
    a = i(481060),
    d = i(485267),
    c = i(564990),
    o = i(353647),
    E = i(313789),
    u = i(518596),
    _ = i(527790),
    T = i(540440),
    N = i(365583),
    R = i(981631),
    C = i(388032),
    O = i(569162);
function h(t) {
    let { user: n, entry: i, transitionState: h, onAction: p, onClose: I, onOpenGameSettings: S } = t,
        [f, x] = (0, s.Wu)([o.Z], () => [o.Z.isDeletingEntryHistory, o.Z.deleteOutboxEntryError]);
    return (
        r.useEffect(() => d.Bt, []),
        (0, e.jsxs)(l.Modal, {
            title: (0, T.y)(i),
            subtitle: C.intl.format(C.t.KV72oa, {
                settingsHook: (t, n) => {
                    let r = (0, N.C)({
                        entry: i,
                        onOpenGameSettings: S,
                    });
                    return (0, e.jsx)(
                        a.eee,
                        {
                            onClick: () => {
                                null == p || p({ action: "PRESS_CLEAR_HISTORY_DISCLAIMER" }),
                                    null != r
                                        ? r()
                                        : (0, u.openUserSettings)(E.n.PROFILE_PANEL, {
                                              section: R.oAB.PROFILE_CUSTOMIZATION,
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
                    text: C.intl.string(C.t["ETE/oK"]),
                    onClick: I,
                    variant: "secondary",
                    size: "sm",
                },
                {
                    text: null != x ? C.intl.string(C.t["5911LS"]) : C.intl.string(C.t.VkKicX),
                    onClick: () => {
                        null == p || p({ action: "PRESS_CLEAR_HISTORY_BUTTON" }), (0, c.CV)(i, n.id, I);
                    },
                    disabled: f,
                    variant: "critical-primary",
                    size: "sm",
                },
            ],
            onClose: I,
            transitionState: h,
            children: [
                null != x
                    ? (0, e.jsxs)("div", {
                          className: O.error,
                          children: [
                              (0, e.jsx)(a.k$p, { color: a.TVs.colors.STATUS_DANGER }),
                              (0, e.jsx)(a.Text, {
                                  variant: "text-sm/medium",
                                  children: C.intl.string(C.t.FMbL3t),
                              }),
                          ],
                      })
                    : null,
                (0, e.jsx)(_.Z, {
                    user: n,
                    entry: i,
                    className: O.card,
                    hideContextMenu: !0,
                }),
            ],
        })
    );
}
