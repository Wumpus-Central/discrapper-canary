"use strict";
n.d(t, { default: () => f });
var r = n(73153),
    i = n(323073),
    s = n(108713),
    a = n(643501);
n(554562);
var o = n(574172),
    l = n(976860),
    u = n(734057),
    c = n(430452),
    d = n(381222),
    _ = n(652215);
let f = {
    selectChannel(e) {
        let { guildId: t, channelId: n, messageId: i, jumpType: s, source: a, skipMessageFetch: o } = e;
        r.h.dispatch({
            type: "CHANNEL_SELECT",
            guildId: t === _.ME ? null : t,
            channelId: n,
            messageId: i,
            jumpType: s,
            source: a,
            skipMessageFetch: o,
        });
    },
    selectPrivateChannel(e) {
        (0, l.pX)(_.BVt.CHANNEL(_.ME, e));
    },
    selectVoiceChannel(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
            s = u.A.getChannel(e),
            a = s?.getGuildId();
        s?.isGuildVocalOrThread() && (0, i.qR)(s)
            ? (0, l.pX)(_.BVt.CHANNEL(a, e))
            : c.Ay.isSupported() && (null != e && c.Ay.getMediaEngine().interact(), (0, d.x)(e, a, t, n, r));
    },
    disconnect() {
        let e = a.default.getRemoteSessionId();
        null != e && s.Fc(e), this.selectVoiceChannel(null), o.close(_.MLl.CHANNEL_CALL_POPOUT);
    },
};
