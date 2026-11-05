var i = n(439372),
    r = n(521502),
    a = n(380610),
    s = n(390486);
class l extends i.A {
    waitingForCurrentOverride = !1;
    actions = {
        POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen(),
        CURRENT_BUILD_OVERRIDE_RESOLVED: (e) => {
            let { overrides: t } = e;
            return this.handleCurrentBuildOverrideResolved(t);
        },
    };
    handlePostConnectionOpen() {
        if (!(0, a.kK)()) return;
        let { state: e, overrides: t } = r.A.getCurrentBuildOverride();
        e === r.U.Resolved ? this.record(t) : (this.waitingForCurrentOverride = !0);
    }
    handleCurrentBuildOverrideResolved(e) {
        this.waitingForCurrentOverride && ((this.waitingForCurrentOverride = !1), this.record(e));
    }
    record(e) {
        let t = e?.discord_web;
        null != t && (0, s.wY)(t);
    }
}
let o = new l();
n.d(t, {}, { A: o });
