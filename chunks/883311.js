n.d(t, { Z: () => u });
var r = n(570140),
    i = n(317770),
    l = n(70956),
    a = n(948053),
    s = n(518929);
let o = null;
class c extends i.Z {
    _initialize() {
        r.Z.subscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
    }
    _terminate() {
        r.Z.unsubscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
    }
    handlePostConnectionOpen() {
        (0, s.VZ)("ICYMIManager", !1) &&
            (!(function e() {
                let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                a.Z.fetchDehydrated({ isInitialLoad: t }),
                    null != o && clearTimeout(o),
                    (o = setTimeout(() => e(), 15 * l.Z.Millis.MINUTE));
            })(!0),
            a.Z.getGuildChannelScores(),
            a.Z.getRecommendedGuilds());
    }
}
let u = new c();
