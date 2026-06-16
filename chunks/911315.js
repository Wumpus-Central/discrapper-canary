t.r(n), t.d(n, { default: () => s });
var l = t(627968);
t(64700);
var i = t(284009),
    a = t.n(i),
    r = t(702841),
    u = t(164617),
    d = t(47167),
    p = t(386467),
    c = t(979186),
    h = t(734057),
    o = t(67319);
function s(e) {
    let { windowKey: n, channelId: t } = e,
        i = (0, r.bG)([h.A], () => h.A.getChannel(t));
    a()(null != i, "channel cannot be null for popout");
    let s = (0, d.Ay)(i);
    return (0, l.jsx)(c.A, {
        withTitleBar: !0,
        windowKey: n,
        title: s ?? "",
        children: (0, l.jsx)(p.A.Provider, {
            value: i.guild_id,
            children: (0, l.jsx)(o.default, { channel: i, popoutType: u.N.VOICE_UI }),
        }),
    });
}
