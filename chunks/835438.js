n.d(t, { A: () => A });
var i = n(459838),
    r = n(827343),
    a = n(439372),
    s = n(710195),
    l = n(303277),
    o = n(723702),
    d = n(240921);
let c = { enableStats: !1 },
    u = (0, d.Ay)({
        kind: "user",
        name: "2026-03-krisp-stats-collection",
        defaultConfig: c,
        variations: { 1: { ...c, enableStats: !0 } },
    });
var _ = n(652215);
class E extends a.A {
    handleExperimentChange = () => {
        if ((0, o.isWeb)()) return;
        let { enableStats: e } = u.getConfig({ location: "KrispExperimentManager handleExperimentChange" });
        r.A.setNoiseCancellationEnableStats(e);
    };
    handleRtcConnectionState = (e) => {
        let { state: t, context: n } = e;
        (0, o.isWeb)() ||
            (n === i.x.DEFAULT &&
                t !== _.S7L.DISCONNECTED &&
                t === _.S7L.RTC_CONNECTED &&
                l.Ay.getKrispEnableStats() &&
                l.Ay.getNoiseCancellation() &&
                (r.A.setNoiseCancellation(!1), r.A.setNoiseCancellation(!0)));
    };
    stores = new Map().set(s.A, this.handleExperimentChange);
    actions = { RTC_CONNECTION_STATE: this.handleRtcConnectionState };
}
let A = new E();
