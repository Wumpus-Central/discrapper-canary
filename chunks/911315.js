"use strict";
n.r(t), n.d(t, { default: () => g });
var i = n(627968);
n(64700);
var a = n(284009),
    r = n.n(a),
    s = n(702841),
    l = n(164617),
    o = n(47167),
    c = n(386467),
    d = n(979186),
    u = n(734057),
    _ = n(67319);
function g(e) {
    let { windowKey: t, channelId: n } = e,
        a = (0, s.bG)([u.A], () => u.A.getChannel(n));
    r()(null != a, "channel cannot be null for popout");
    let g = (0, o.Ay)(a);
    return (0, i.jsx)(d.A, {
        withTitleBar: !0,
        windowKey: t,
        title: g ?? "",
        children: (0, i.jsx)(c.A.Provider, {
            value: a.guild_id,
            children: (0, i.jsx)(_.default, { channel: a, popoutType: l.N.VOICE_UI }),
        }),
    });
}
