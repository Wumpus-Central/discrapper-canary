n.d(t, { A: () => h });
var i = n(858899),
    r = n(192308),
    a = n(976860),
    s = n(73153),
    l = n(439372),
    o = n(267041),
    d = n(287809),
    c = n(376463);
class u extends l.A {
    actions = {
        LOGOUT: (e) => this.handleLogout(e),
        MULTI_ACCOUNT_SWITCH_START: (e) => this.handleMultiAccountSwitchStart(e),
    };
    _initialize() {
        (s.h.subscribe("CONNECTION_OPEN", this.handleConnectionOpen), this.handleConnectionOpen());
    }
    _terminate() {
        s.h.unsubscribe("CONNECTION_OPEN", this.handleConnectionOpen);
    }
    handleLogout(e) {
        e.isSwitchingAccount && this.onSwitchStart();
    }
    handleMultiAccountSwitchStart(e) {
        (0, o.m)(e.targetUserId);
    }
    handleConnectionOpen = () => {
        let e = c.A.getSwitchResult();
        if (null == e) return;
        let t = d.default.getCurrentUser();
        null != t &&
            (e.success ? this.onSwitchSuccess(t, e.navigateHome) : this.onSwitchError(t),
            (0, o.m)(null),
            this.onSwitchComplete());
    };
}
var _ = n(573879),
    E = n(652215),
    A = n(105292);
let h = new (class extends u {
    onSwitchStart() {}
    onSwitchSuccess(e, t) {
        setTimeout(() => {
            (t && (0, a.pX)(E.BVt.ME),
                (0, i.P0)({
                    text: A.intl.formatToPlainString(A.t.wx7O3L, { username: e.username }),
                    variant: "success",
                }));
        }, 100);
    }
    onSwitchError() {
        (0, i.P0)({ text: A.intl.string(A.t.pqvKWA), variant: "critical" });
    }
    onSwitchComplete() {
        ((0, r.closeModal)(_.ov), (0, r.closeModal)(_.Gl));
    }
})();
