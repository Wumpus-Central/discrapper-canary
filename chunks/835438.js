"use strict";
n.d(t, { A: () => h });
var i = n(459838),
    r = n(827343),
    s = n(439372),
    a = n(710195),
    o = n(235058),
    l = n(723702),
    u = n(240921);
let c = { enableStats: !1 },
    d = (0, u.Ay)({
        kind: "user",
        name: "2026-03-krisp-stats-collection",
        defaultConfig: c,
        variations: { 1: { ...c, enableStats: !0 } },
    });
var _ = n(652215);
class f extends s.A {
    handleExperimentChange = () => {
        if ((0, l.isWeb)()) return;
        let { enableStats: e } = d.getConfig({ location: "KrispExperimentManager handleExperimentChange" });
        r.A.setNoiseCancellationEnableStats(e);
    };
    handleRtcConnectionState = (e) => {
        let { state: t, context: n } = e;
        (0, l.isWeb)() ||
            (n === i.x.DEFAULT &&
                t !== _.S7L.DISCONNECTED &&
                t === _.S7L.RTC_CONNECTED &&
                o.Ay.getKrispEnableStats() &&
                o.Ay.getNoiseCancellation() &&
                (r.A.setNoiseCancellation(!1), r.A.setNoiseCancellation(!0)));
    };
    stores = new Map().set(a.A, this.handleExperimentChange);
    actions = { RTC_CONNECTION_STATE: this.handleRtcConnectionState };
}
let h = new f();
