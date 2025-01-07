r.d(n, {
    u: function () {
        return _;
    }
});
var i = r(192379),
    a = r(493773),
    s = r(367907),
    o = r(592125),
    l = r(944486),
    u = r(626135),
    c = r(255963),
    d = r(185923),
    f = r(981631);
let _ = (e) => {
    let { emojiId: n, currentGuildId: r, popoutData: _, nonce: h, demoMode: p } = e,
        { current: m } = i.useRef({
            guild_id: r,
            emoji_id: n,
            ...(0, s.v_)(o.Z.getChannel(l.Z.getChannelId(r)))
        });
    return (
        (0, a.Z)(() => {
            var e;
            (0, c.x)(d.qR.TrackOpenPopoutUsed),
                !p &&
                    u.default.track(f.rMx.OPEN_POPOUT, {
                        type: null !== (e = null == _ ? void 0 : _.analyticsType) && void 0 !== e ? e : 'Standard Emoji Popout',
                        nonce: h,
                        ...m
                    });
        }),
        m
    );
};
