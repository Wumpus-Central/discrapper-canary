i.d(n, { default: () => C }), i(388685);
var e = i(255367),
    r = i(73800),
    s = i(442837),
    l = i(82659),
    a = i(481060),
    d = i(230711),
    c = i(485267),
    o = i(564990),
    E = i(353647),
    u = i(527790),
    _ = i(540440),
    T = i(365583),
    h = i(388032),
    p = i(569162);
function C(t) {
    let { user: n, entry: i, transitionState: C, onAction: N, onClose: R, onOpenGameSettings: f } = t,
        [x, O] = (0, s.Wu)([E.Z], () => [E.Z.isDeletingEntryHistory, E.Z.deleteOutboxEntryError]);
    return (
        r.useEffect(() => c.Bt, []),
        (0, e.jsxs)(l.Modal, {
            title: (0, _.y)(i),
            subtitle: h.intl.format(h.t.KV72oa, {
                settingsHook: (t, n) => {
                    let r = (0, T.C)({
                        entry: i,
                        onOpenGameSettings: f,
                    });
                    return (0, e.jsx)(
                        a.eee,
                        {
                            onClick: () => {
                                null == N || N({ action: "PRESS_CLEAR_HISTORY_DISCLAIMER" }),
                                    null != r ? r() : d.Z.open(),
                                    R();
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
                    onClick: R,
                    variant: "secondary",
                    size: "sm",
                },
                {
                    text: null != O ? h.intl.string(h.t["5911LS"]) : h.intl.string(h.t.VkKicX),
                    onClick: () => {
                        null == N || N({ action: "PRESS_CLEAR_HISTORY_BUTTON" }), (0, o.CV)(i, n.id, R);
                    },
                    disabled: x,
                    variant: "critical-primary",
                    size: "sm",
                },
            ],
            onClose: R,
            transitionState: C,
            children: [
                null != O
                    ? (0, e.jsxs)("div", {
                          className: p.error,
                          children: [
                              (0, e.jsx)(a.k$p, { color: a.TVs.colors.STATUS_DANGER }),
                              (0, e.jsx)(a.Text, {
                                  variant: "text-sm/medium",
                                  children: h.intl.string(h.t.FMbL3t),
                              }),
                          ],
                      })
                    : null,
                (0, e.jsx)(u.Z, {
                    user: n,
                    entry: i,
                    className: p.card,
                    hideContextMenu: !0,
                }),
            ],
        })
    );
}
