i.d(n, { default: () => O }), i(388685);
var e = i(951288),
    r = i(647438),
    s = i(793030),
    l = i(442837),
    a = i(481060),
    c = i(485267),
    d = i(564990),
    o = i(353647),
    E = i(313789),
    u = i(518596),
    _ = i(527790),
    T = i(540440),
    N = i(365583),
    R = i(981631),
    h = i(388032),
    C = i(569162);
function O(t) {
    let { user: n, entry: i, transitionState: O, onAction: p, onClose: I, onOpenGameSettings: S } = t,
        [f, x] = (0, l.Wu)([o.Z], () => [o.Z.isDeletingEntryHistory, o.Z.deleteOutboxEntryError]);
    return (
        r.useEffect(() => c.Bt, []),
        (0, e.jsxs)(s.Modal, {
            title: (0, T.y)(i),
            subtitle: h.intl.format(h.t.KV72oa, {
                settingsHook: (t, n) => {
                    let r = (0, N.C)({
                        entry: i,
                        onOpenGameSettings: S,
                    });
                    return (0, e.jsx)(
                        a.Anchor,
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
                    text: h.intl.string(h.t["ETE/oK"]),
                    onClick: I,
                    variant: "secondary",
                    size: "sm",
                },
                {
                    text: null != x ? h.intl.string(h.t["5911LS"]) : h.intl.string(h.t.VkKicX),
                    onClick: () => {
                        null == p || p({ action: "PRESS_CLEAR_HISTORY_BUTTON" }), (0, d.CV)(i, n.id, I);
                    },
                    disabled: f,
                    variant: "critical-primary",
                    size: "sm",
                },
            ],
            onClose: I,
            transitionState: O,
            children: [
                null != x
                    ? (0, e.jsxs)("div", {
                          className: C.error,
                          children: [
                              (0, e.jsx)(a.k$p, { color: a.TVs.colors.STATUS_DANGER }),
                              (0, e.jsx)(a.Text, {
                                  variant: "text-sm/medium",
                                  children: h.intl.string(h.t.FMbL3t),
                              }),
                          ],
                      })
                    : null,
                (0, e.jsx)(_.Z, {
                    user: n,
                    entry: i,
                    className: C.card,
                    hideContextMenu: !0,
                }),
            ],
        })
    );
}
