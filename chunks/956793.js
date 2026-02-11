"use strict";
n.d(t, { default: () => h });
var r = n(73153),
    i = n(323073),
    a = n(108713),
    s = n(643501);
n(554562);
var o = n(574172),
    l = n(976860),
    u = n(312341),
    c = n(734057),
    d = n(430452),
    _ = n(381222),
    f = n(652215);
let h = {
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
            guildId: t === f.ME ? null : t,
            channelId: n,
            messageId: i,
            jumpType: a,
            preserveDrawerState: s,
            source: o,
            isInitialSetup: l,
        });
    },
    selectPrivateChannel(e) {
        (0, l.pX)(f.BVt.CHANNEL(f.ME, e));
    },
    selectVoiceChannel(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
            a = c.A.getChannel(e),
            s = a?.getGuildId();
        a?.isGuildVocalOrThread() && (0, i.qR)(a)
            ? (0, l.pX)(f.BVt.CHANNEL(s, e))
            : d.Ay.isSupported() && (null != e && d.Ay.getMediaEngine().interact(), (0, _.x)(e, s, t, n, r));
    },
    disconnect() {
        let e = s.default.getRemoteSessionId();
        null != e && a.Fc(e),
            (0, u.AA)()
                ? this.selectVoiceChannel(null)
                : (this.selectVoiceChannel(null), o.close(f.MLl.CHANNEL_CALL_POPOUT));
    },
};
