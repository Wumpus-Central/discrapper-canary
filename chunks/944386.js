r.d(n, {
    u: function () {
        return p;
    }
});
var i = r(192379),
    a = r(493773),
    o = r(367907),
    s = r(592125),
    l = r(944486),
    u = r(626135),
    c = r(255963),
    d = r(185923),
    f = r(981631);
let p = (e) => {
    let { emojiId: n, currentGuildId: r, popoutData: p, nonce: h, demoMode: _ } = e,
        { current: m } = i.useRef({
            guild_id: r,
            emoji_id: n,
            ...(0, o.v_)(s.Z.getChannel(l.Z.getChannelId(r)))
        });
    return (
        (0, a.Z)(() => {
            var e;
            (0, c.x)(d.qR.TrackOpenPopoutUsed),
                !_ &&
                    u.default.track(f.rMx.OPEN_POPOUT, {
                        type: null !== (e = null == p ? void 0 : p.analyticsType) && void 0 !== e ? e : 'Standard Emoji Popout',
                        nonce: h,
                        ...m
                    });
        }),
        m
    );
};
