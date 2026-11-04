var d = i(73153),
    t = i(157257);
function c(e) {
    return (!e.isPreviewingInGame && !e.locked) || e.pinned;
}
function l(e, n) {
    let i = c(e),
        l = t.A.getGame();
    d.h.dispatch({
        type: "OVERLAY_WIDGET_CHANGED",
        gameName: l?.name ?? null,
        gameId: l?.id ?? null,
        widgetType: e.widget,
        visible: i && n,
        locked: e.locked,
        pinned: e.pinned,
    });
}
i.d(
    n,
    {},
    {
        AE: c,
        Mw: function (e, n, i) {
            (e.locked !== n.locked || e.pinned !== n.pinned || i(e) !== i(n) || c(e) !== c(n)) && l(n, i(n));
        },
        j_: l,
    },
);
