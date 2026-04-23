"use strict";
n.d(t, { default: () => h });
var i = n(228366),
    r = n(323073),
    s = n(108713),
    a = n(643501),
    o = n(574172),
    l = n(976860),
    d = n(288254),
    _ = n(734057),
    u = n(969341),
    c = n(907125),
    E = n(652215);
let h = {
    selectChannel(e) {
        let { guildId: t, channelId: n, messageId: r, jumpType: s, source: a, skipMessageFetch: o } = e;
        i.h.dispatch({
            type: "CHANNEL_SELECT",
            guildId: t === E.ME ? null : t,
            channelId: n,
            messageId: r,
            jumpType: s,
            source: a,
            skipMessageFetch: o,
        });
    },
    selectPrivateChannel(e) {
        (0, l.pX)(E.BVt.CHANNEL(E.ME, e));
    },
    selectVoiceChannel(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
            s = _.A.getChannel(e),
            a = s?.getGuildId();
        s?.isGuildVocalOrThread() && ((0, r.qR)(s) || (0, d.BV)(s))
            ? (0, l.pX)(E.BVt.CHANNEL(a, e))
            : u.Ay.isSupported() && (null != e && u.Ay.getMediaEngine().interact(), (0, c.x)(e, a, t, n, i));
    },
    disconnect() {
        let e = a.default.getRemoteSessionId();
        null != e && s.Fc(e), this.selectVoiceChannel(null), o.close(E.MLl.CHANNEL_CALL_POPOUT);
    },
};
