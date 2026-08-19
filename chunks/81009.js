"use strict";
n.d(t, { A: () => f });
var i = n(691540),
    r = n(857250),
    a = n(97483),
    s = n(192308),
    l = n(976860),
    o = n(228366),
    d = n(439372),
    c = n(655404),
    u = n(287809),
    _ = n(376463);
class E extends d.A {
    actions = {
        LOGOUT: (e) => this.handleLogout(e),
        MULTI_ACCOUNT_SWITCH_START: (e) => this.handleMultiAccountSwitchStart(e),
    };
    _initialize() {
        o.h.subscribe("CONNECTION_OPEN", this.handleConnectionOpen), this.handleConnectionOpen();
    }
    _terminate() {
        o.h.unsubscribe("CONNECTION_OPEN", this.handleConnectionOpen);
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
        let t = u.default.getCurrentUser();
        null != t &&
            (e.success ? this.onSwitchSuccess(t, e.navigateHome) : this.onSwitchError(t),
            (0, c.m)(null),
            this.onSwitchComplete());
    };
}
var A = n(573879),
    h = n(652215),
    I = n(375708);
let f = new (class extends E {
    onSwitchStart() {}
    onSwitchSuccess(e, t) {
        setTimeout(() => {
            t && (0, l.pX)(h.BVt.ME),
                (0, i.P0)((0, r.o)(I.intl.formatToPlainString(I.t.wx7O3L, { username: e.username }), a.Ck.SUCCESS));
        }, 100);
    }
    onSwitchError() {
        (0, i.P0)((0, r.o)(I.intl.string(I.t.pqvKWA), a.Ck.FAILURE));
    }
    onSwitchComplete() {
        (0, s.closeModal)(A.ov), (0, s.closeModal)(A.Gl);
    }
})();
