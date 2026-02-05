n.d(t, { A: () => A });
var i = n(627968);
n(64700);
var l = n(540185),
    a = n(311907),
    r = n(961350),
    s = n(735321),
    o = n(483558),
    d = n(34442),
    c = n(253798),
    u = n(25530),
    g = n(155400),
    m = n(844206),
    x = n(557964),
    f = n(987140),
    h = n(281743);
function p(e) {
    let { widget: t, ...n } = e;
    switch (t.type) {
        case l.x.FAVORITE_GAMES:
            return (0, i.jsx)(g.A, { widget: t, ...n });
        case l.x.CURRENT_GAMES:
            return (0, i.jsx)(u.A, { widget: t, ...n });
        case l.x.WANT_TO_PLAY_GAMES:
            return (0, i.jsx)(x.A, { widget: t, ...n });
        case l.x.PLAYED_GAMES:
            return (0, i.jsx)(m.A, { widget: t, ...n });
        default:
            return null;
    }
}
function _(e) {
    let { widget: t, user: n, disableInteraction: l, ...u } = e,
        { setExpanded: g } = (0, c.B)(),
        { shouldShowSuggestions: m, handleDismissSuggestions: x } = (0, o.q)(t),
        _ = (0, a.bG)([r.default], () => r.default.getId() === n.id),
        A = _ && !l && m,
        I = (0, s.L)(t),
        j = (0, s.FM)(t, { isCurrentUser: _ }),
        v = (0, s.uA)(t),
        T = 1 === (0, s.cv)(t.type);
    return (0, i.jsx)(p, {
        widget: t,
        user: n,
        disableInteraction: l,
        headerTitle: I,
        headerSubtitle: j,
        headerActionButtons:
            _ && !T
                ? [
                      (0, i.jsx)(
                          d.IU,
                          { disabled: v, widgetType: t.type, widget: t, onAddGame: () => g(!0) },
                          `${t.type}-browse-games-popout`,
                      ),
                  ]
                : void 0,
        trailingContent: A && (0, i.jsx)(f.A, { userId: n.id, widgetType: t.type, onDismiss: x, className: h.r }),
        ...u,
    });
}
function A(e) {
    let { widget: t, ...n } = e;
    return (0, i.jsx)(c.M, { widgetType: t.type, children: (0, i.jsx)(_, { widget: t, ...n }) });
}
