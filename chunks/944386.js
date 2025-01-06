r.d(n, {
    u: function () {
        return f;
    }
});
var i = r(192379),
    a = r(367907),
    s = r(592125),
    o = r(944486),
    l = r(626135),
    u = r(255963),
    c = r(185923),
    d = r(981631);
let f = (e) => {
    let { emojiId: n, currentGuildId: r, popoutData: f, nonce: _, demoMode: h } = e,
        { current: p } = i.useRef({
            guild_id: r,
            emoji_id: n,
            ...(0, a.v_)(s.Z.getChannel(o.Z.getChannelId(r)))
        });
    return (
        i.useEffect(() => {
            var e;
            (0, u.x)(c.qR.TrackOpenPopoutUsed),
                !h &&
                    l.default.track(d.rMx.OPEN_POPOUT, {
                        type: null !== (e = null == f ? void 0 : f.analyticsType) && void 0 !== e ? e : 'Standard Emoji Popout',
                        nonce: _,
                        ...p
                    });
        }, []),
        p
    );
};
