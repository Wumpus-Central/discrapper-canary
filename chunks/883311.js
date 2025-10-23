n.d(t, { Z: () => d });
var r = n(570140),
    i = n(317770),
    l = n(479313),
    a = n(70956),
    s = n(948053),
    o = n(518929);
let c = null;
class u extends i.Z {
    _initialize() {
        r.Z.subscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
    }
    _terminate() {
        r.Z.unsubscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
    }
    handlePostConnectionOpen() {
        (0, o.VZ)("ICYMIManager", !1) &&
            (!(function e() {
                let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                s.Z.fetchDehydrated({ isInitialLoad: t }),
                    null != c && clearTimeout(c),
                    (c = setTimeout(() => e(), 15 * a.Z.Millis.MINUTE));
            })(!0),
            s.Z.getGuildChannelScores(),
            s.Z.getRecommendedGuilds(),
            (0, l.Fc)());
    }
}
let d = new u();
