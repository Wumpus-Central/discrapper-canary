i.d(t, { A: () => j });
var n = i(627968);
i(64700);
var l = i(540185),
    s = i(311907),
    a = i(961350),
    r = i(735321),
    d = i(483558),
    o = i(34442),
    c = i(253798),
    u = i(25530),
    g = i(155400),
    m = i(844206),
    h = i(557964),
    x = i(987140),
    p = i(465380);
function A(e) {
    let { widget: t, ...i } = e;
    switch (t.type) {
        case l.x.FAVORITE_GAMES:
            return (0, n.jsx)(g.A, { widget: t, ...i });
        case l.x.CURRENT_GAMES:
            return (0, n.jsx)(u.A, { widget: t, ...i });
        case l.x.WANT_TO_PLAY_GAMES:
            return (0, n.jsx)(h.A, { widget: t, ...i });
        case l.x.PLAYED_GAMES:
            return (0, n.jsx)(m.A, { widget: t, ...i });
        default:
            return null;
    }
}
function f(e) {
    let { widget: t, user: i, disableInteraction: l, ...u } = e,
        { setExpanded: g } = (0, c.B)(),
        { shouldShowSuggestions: m, handleDismissSuggestions: h } = (0, d.q)(t),
        f = (0, s.bG)([a.default], () => a.default.getId() === i.id),
        j = f && !l && m,
        I = (0, r.L)(t),
        v = (0, r.FM)(t, { isCurrentUser: f }),
        S = (0, r.uA)(t),
        E = 1 === (0, r.cv)(t.type);
    return (0, n.jsx)(A, {
        widget: t,
        user: i,
        disableInteraction: l,
        headerTitle: I,
        headerSubtitle: v,
        headerActionButtons:
            f && !E
                ? [
                      (0, n.jsx)(
                          o.IU,
                          { disabled: S, widgetType: t.type, widget: t, onAddGame: () => g(!0) },
                          `${t.type}-browse-games-popout`,
                      ),
                  ]
                : void 0,
        trailingContent: j && (0, n.jsx)(x.A, { userId: i.id, widgetType: t.type, onDismiss: h, className: p.r }),
        ...u,
    });
}
function j(e) {
    let { widget: t, ...i } = e;
    return (0, n.jsx)(c.M, { widgetType: t.type, children: (0, n.jsx)(f, { widget: t, ...i }) });
}
