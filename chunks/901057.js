n.d(t, {
    A: () => O,
});
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(990078),
    s = n(397927),
    o = n(367513),
    l = n(956793),
    c = n(47167),
    u = n(332173),
    d = n(976860),
    f = n(95701),
    p = n(734057),
    _ = n(71393),
    h = n(994500),
    m = n(287809),
    g = n(147036),
    E = n(449054),
    b = n(652215);

function y(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (null == e || null == t) return;
    let r = _.A.getGuild(e);
    if ((null == r ? void 0 : r.joinedAt) == null)
        return void E.Z2(
            e,
            {},
            {
                channelId: t,
            },
        );
    let i = p.A.getChannel(t);
    if (null != i && (0, f.ay)(i.type)) {
        if (n) {
            o.A.updateChatOpen(i.id, !0), (0, d.pX)(b.BVt.CHANNEL(e, t));
            return;
        }
        l.default.selectVoiceChannel(i.id);
        return;
    }
    (0, d.pX)(b.BVt.CHANNEL(e, t));
}

function O(e) {
    let { channel: t, onClick: n, beforeTransition: o, className: l, openChatWithoutConnecting: d } = e,
        f = (0, i.bG)([m.default, h.A], () => (null == t ? "" : (0, c.m1)(t, m.default, h.A)), [t]);
    return (0, r.jsx)(a.m, {
        "data-pending-richtooltip-migration": !0,
        __unsupportedReactNodeAsText: f,
        position: "top",
        children: (0, r.jsx)(u.A, {
            role: "link",
            className: l,
            onClick: (e) => {
                e.stopPropagation(),
                    null != n
                        ? n()
                        : (null != o && o(),
                          (0, s.s7G)(),
                          y(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, d));
            },
            iconType: (0, g.QG)(t),
            children: f,
        }),
    });
}
