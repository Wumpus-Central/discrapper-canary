n.d(t, { u: () => f });
var i = n(192379),
    r = n(493773),
    a = n(367907),
    s = n(592125),
    o = n(944486),
    l = n(626135),
    u = n(255963),
    c = n(185923),
    d = n(981631);
let f = (e) => {
    let { emojiId: t, currentGuildId: n, popoutData: f, nonce: _, demoMode: p } = e,
        { current: h } = i.useRef({
            guild_id: n,
            emoji_id: t,
            ...(0, a.v_)(s.Z.getChannel(o.Z.getChannelId(n)))
        });
    return (
        (0, r.ZP)(() => {
            var e;
            (0, u.x)(c.qR.TrackOpenPopoutUsed),
                p ||
                    l.default.track(d.rMx.OPEN_POPOUT, {
                        type: null !== (e = null == f ? void 0 : f.analyticsType) && void 0 !== e ? e : 'Standard Emoji Popout',
                        nonce: _,
                        ...h
                    });
        }),
        h
    );
};
