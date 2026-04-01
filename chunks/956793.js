"use strict";
n.d(t, { default: () => p });
var r = n(73153),
    i = n(323073),
    s = n(108713),
    a = n(643501),
    o = n(574172),
    l = n(976860),
    u = n(288254),
    c = n(734057),
    d = n(430452),
    _ = n(381222),
    f = n(652215);
let p = {
    selectChannel(e) {
        let { guildId: t, channelId: n, messageId: i, jumpType: s, source: a, skipMessageFetch: o } = e;
        r.h.dispatch({
            type: "CHANNEL_SELECT",
            guildId: t === f.ME ? null : t,
            channelId: n,
            messageId: i,
            jumpType: s,
            source: a,
            skipMessageFetch: o,
        });
    },
    selectPrivateChannel(e) {
        (0, l.pX)(f.BVt.CHANNEL(f.ME, e));
    },
    selectVoiceChannel(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
            s = c.A.getChannel(e),
            a = s?.getGuildId();
        s?.isGuildVocalOrThread() && ((0, i.qR)(s) || (0, u.BV)(s))
            ? (0, l.pX)(f.BVt.CHANNEL(a, e))
            : d.Ay.isSupported() && (null != e && d.Ay.getMediaEngine().interact(), (0, _.x)(e, a, t, n, r));
    },
    disconnect() {
        let e = a.default.getRemoteSessionId();
        null != e && s.Fc(e), this.selectVoiceChannel(null), o.close(f.MLl.CHANNEL_CALL_POPOUT);
    },
};
