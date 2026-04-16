n.d(t, { $: () => h, o: () => m });
var i = n(627968),
    a = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(397927),
    o = n(713517),
    d = n(538451),
    c = n(562153),
    u = n(581448),
    _ = n(824078);
function m() {
    let e = a.useRef(null),
        { isHoveringOrFocusing: t } = (0, o.A)(e),
        [n, i] = a.useState(!1),
        l = t || n,
        [s, r] = a.useState(!1),
        d = a.useRef(null);
    return (
        a.useEffect(() => (l || (d.current = setTimeout(() => r(!1), 150)), () => clearTimeout(d.current)), [l]),
        l && !s && r(!0),
        { triggerRef: e, shouldShow: l || s, onPopoutHoverOrFocus: i }
    );
}
function h(e) {
    let { guildId: t, channelId: n, users: l, onHoverOrFocus: s, ...o } = e,
        d = a.useCallback((e) => (0, i.jsx)(p, { users: e, guildId: t, channelId: n, onHoverOrFocus: s }), [t, n, s]);
    return (0, i.jsx)(r.YNO, { renderPopout: () => d(l), ...o });
}
function p(e) {
    let { users: t, guildId: n, channelId: l, onHoverOrFocus: m } = e,
        h = a.useRef(null),
        { isHoveringOrFocusing: p } = (0, o.A)(h);
    return (
        a.useEffect(() => {
            m?.(p);
        }, [m, p]),
        (0, i.jsx)(r.HOs, {
            ref: h,
            className: s()(_.popover, u.o),
            style: { "--custom-popover-width": "200px" },
            children: (0, i.jsx)("div", {
                children: t.map((e) =>
                    (0, i.jsx)(
                        d.A,
                        { user: e, guildId: n ?? void 0, channelId: l, nick: c.Ay.getNickname(n, l, e) },
                        e.id,
                    ),
                ),
            }),
        })
    );
}
