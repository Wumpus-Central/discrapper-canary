"use strict";
n.d(t, { A: () => h });
var i = n(205693),
    r = n(827343),
    s = n(439372),
    a = n(710195),
    o = n(969341),
    l = n(723702),
    d = n(250105);
let _ = { enableStats: !1 },
    u = (0, d.Ay)({
        kind: "user",
        name: "2026-03-krisp-stats-collection",
        defaultConfig: _,
        variations: { 1: { ..._, enableStats: !0 } },
    });
var c = n(652215);
class E extends s.A {
    handleExperimentChange = () => {
        if ((0, l.isWeb)()) return;
        let { enableStats: e } = u.getConfig({ location: "KrispExperimentManager handleExperimentChange" });
        r.A.setNoiseCancellationEnableStats(e);
    };
    handleRtcConnectionState = (e) => {
        let { state: t, context: n } = e;
        (0, l.isWeb)() ||
            (n === i.x.DEFAULT &&
                t !== c.S7L.DISCONNECTED &&
                t === c.S7L.RTC_CONNECTED &&
                o.Ay.getKrispEnableStats() &&
                o.Ay.getNoiseCancellation() &&
                (r.A.setNoiseCancellation(!1), r.A.setNoiseCancellation(!0)));
    };
    stores = new Map().set(a.A, this.handleExperimentChange);
    actions = { RTC_CONNECTION_STATE: this.handleRtcConnectionState };
}
let h = new E();
