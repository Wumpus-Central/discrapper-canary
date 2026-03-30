n.d(t, { $: () => _ });
var i = n(627968),
    a = n(64700),
    r = n(503698),
    l = n.n(r),
    s = n(397927),
    o = n(538451),
    d = n(562153),
    c = n(460696),
    u = n(442078);
function _(e) {
    let { guildId: t, channelId: n, users: r, ...l } = e,
        o = a.useCallback((e) => (0, i.jsx)(m, { users: e, guildId: t, channelId: n }), [t, n]);
    return (0, i.jsx)(s.YNO, { renderPopout: () => o(r), ...l });
}
function m(e) {
    let { users: t, guildId: n, channelId: a } = e;
    return (0, i.jsx)(s.HOs, {
        className: l()(u.popover, c.o),
        style: { "--custom-popover-width": "200px" },
        children: (0, i.jsx)("div", {
            children: t.map((e) =>
                (0, i.jsx)(o.A, { user: e, guildId: n ?? void 0, channelId: a, nick: d.Ay.getNickname(n, a, e) }, e.id),
            ),
        }),
    });
}
