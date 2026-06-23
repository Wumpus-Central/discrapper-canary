"use strict";
n.d(t, { A: () => m });
var i = n(691540),
    r = n(857250),
    s = n(97483),
    a = n(192308),
    o = n(976860),
    l = n(228366),
    u = n(439372),
    c = n(364711),
    d = n(287809),
    _ = n(376463);
class h extends u.A {
    actions = {
        LOGOUT: (e) => this.handleLogout(e),
        MULTI_ACCOUNT_SWITCH_START: (e) => this.handleMultiAccountSwitchStart(e),
    };
    _initialize() {
        l.h.subscribe("CONNECTION_OPEN", this.handleConnectionOpen), this.handleConnectionOpen();
    }
    _terminate() {
        l.h.unsubscribe("CONNECTION_OPEN", this.handleConnectionOpen);
    }
    handleLogout(e) {
        e.isSwitchingAccount && this.onSwitchStart();
    }
    handleMultiAccountSwitchStart(e) {
        (0, c.m)(e.targetUserId);
    }
    handleConnectionOpen = () => {
        let e = _.A.getSwitchResult();
        if (null == e) return;
        let t = d.default.getCurrentUser();
        null != t &&
            (e.success ? this.onSwitchSuccess(t, e.navigateHome) : this.onSwitchError(t),
            (0, c.m)(null),
            this.onSwitchComplete());
    };
}
var f = n(573879),
    p = n(652215),
    E = n(375708);
let m = new (class extends h {
    onSwitchStart() {}
    onSwitchSuccess(e, t) {
        setTimeout(() => {
            t && (0, o.pX)(p.BVt.ME),
                (0, i.P0)((0, r.o)(E.intl.formatToPlainString(E.t.wx7O3L, { username: e.username }), s.Ck.SUCCESS));
        }, 100);
    }
    onSwitchError() {
        (0, i.P0)((0, r.o)(E.intl.string(E.t.pqvKWA), s.Ck.FAILURE));
    }
    onSwitchComplete() {
        (0, a.closeModal)(f.ov), (0, a.closeModal)(f.Gl);
    }
})();
