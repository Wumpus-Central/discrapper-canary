n.d(t, {
    default: () => _,
});
var r = n(73153),
    i = n(323073),
    a = n(108713),
    s = n(643501);
n(554562);
var o = n(574172),
    l = n(976860),
    c = n(312341),
    u = n(734057),
    d = n(430452),
    f = n(381222),
    p = n(652215);
let _ = {
    selectChannel(e) {
        let {
            guildId: t,
            channelId: n,
            messageId: i,
            jumpType: a,
            preserveDrawerState: s,
            source: o,
            isInitialSetup: l,
        } = e;
        r.h.dispatch({
            type: "CHANNEL_SELECT",
            guildId: t === p.ME ? null : t,
            channelId: n,
            messageId: i,
            jumpType: a,
            preserveDrawerState: s,
            source: o,
            isInitialSetup: l,
        });
    },
    selectPrivateChannel(e) {
        (0, l.pX)(p.BVt.CHANNEL(p.ME, e));
    },
    selectVoiceChannel(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
            a = u.A.getChannel(e),
            s = null == a ? void 0 : a.getGuildId();
        (null == a ? void 0 : a.isGuildVocalOrThread()) && (0, i.qR)(a)
            ? (0, l.pX)(p.BVt.CHANNEL(s, e))
            : d.A.isSupported() && (null != e && d.A.getMediaEngine().interact(), (0, f.x)(e, s, t, n, r));
    },
    disconnect() {
        let e = s.default.getRemoteSessionId();
        null != e && a.Fc(e),
            (0, c.AA)()
                ? this.selectVoiceChannel(null)
                : (this.selectVoiceChannel(null), o.close(p.MLl.CHANNEL_CALL_POPOUT));
    },
};
