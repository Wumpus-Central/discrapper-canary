n.d(t, { $: () => p, o: () => h });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(265872),
    o = n(573613),
    d = n(713517),
    c = n(538451),
    u = n(562153),
    m = n(366152),
    _ = n(77006);
function h() {
    let e = l.useRef(null),
        { isHoveringOrFocusing: t } = (0, d.A)(e),
        [n, i] = l.useState(!1),
        a = t || n,
        [s, r] = l.useState(!1),
        o = l.useRef(null);
    return (
        l.useEffect(() => (a || (o.current = setTimeout(() => r(!1), 150)), () => clearTimeout(o.current)), [a]),
        a && !s && r(!0),
        { triggerRef: e, shouldShow: a || s, onPopoutHoverOrFocus: i }
    );
}
function p(e) {
    let { guildId: t, channelId: n, users: a, onHoverOrFocus: s, ...o } = e,
        d = l.useCallback((e) => (0, i.jsx)(g, { users: e, guildId: t, channelId: n, onHoverOrFocus: s }), [t, n, s]);
    return (0, i.jsx)(r.Y, { renderPopout: () => d(a), ...o });
}
function g(e) {
    let { users: t, guildId: n, channelId: a, onHoverOrFocus: r } = e,
        h = l.useRef(null),
        { isHoveringOrFocusing: p } = (0, d.A)(h);
    return (
        l.useEffect(() => {
            r?.(p);
        }, [r, p]),
        (0, i.jsx)(o.Ip, {
            ref: h,
            className: s()(_.popover, m.o),
            style: { "--custom-popover-width": "200px" },
            children: (0, i.jsx)("div", {
                children: t.map((e) =>
                    (0, i.jsx)(
                        c.A,
                        { user: e, guildId: n ?? void 0, channelId: a, nick: u.Ay.getNickname(n, a, e) },
                        e.id,
                    ),
                ),
            }),
        })
    );
}
