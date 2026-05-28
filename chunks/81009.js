"use strict";
let i, r;
n.d(t, { A: () => T });
var s = n(691540),
    a = n(857250),
    o = n(97483),
    l = n(192308),
    u = n(976860),
    c = n(247775),
    d = n(228366),
    _ = n(439372),
    h = n(287809),
    f = n(174459),
    p = n(274303),
    E = n(652215);
let m = !1;
class g extends _.A {
    onSwitchStart;
    onSwitchSuccess;
    onSwitchError;
    onTokenSet;
    constructor({ onSwitchStart: e, onSwitchSuccess: t, onSwitchError: n, onTokenSet: i }) {
        super(), (this.onSwitchStart = e), (this.onSwitchSuccess = t), (this.onSwitchError = n), (this.onTokenSet = i);
    }
    actions = { LOGOUT: (e) => this.handleLogout(e) };
    _initialize() {
        d.h.subscribe("CONNECTION_OPEN", () => this.handleConnectionOpen()), this.handleConnectionOpen();
    }
    _terminate() {
        d.h.unsubscribe("CONNECTION_OPEN", () => this.handleConnectionOpen());
    }
    handleConnectionOpen = () => {
        let e = h.default.getCurrentUser();
        if (null == e) return;
        if (null != r) {
            if (r !== e.id) {
                let t = p.A.getUsers().map((e) => {
                    let { id: t } = e;
                    return t;
                });
                f.default.track(E.HAw.MULTI_ACCOUNT_SWITCH_SUCCESS, { from_user_id: r, linked_user_ids: t }),
                    this.onSwitchSuccess?.(e, m);
            } else f.default.track(E.HAw.MULTI_ACCOUNT_SWITCH_FAILURE), this.onSwitchError?.(e);
            r = null;
        }
        i = e.id;
        let t = c.getToken();
        null != t && "" !== t && c.setToken(t, e.id), this.onTokenSet?.(e);
    };
    handleLogout = (e) => {
        e.isSwitchingAccount
            ? ((r = i), this.onSwitchStart?.(), (m = !!e.goHomeAfterSwitching))
            : ((m = !1), c.removeToken(i)),
            (i = null);
    };
}
var A = n(573879),
    I = n(375708);
let T = new g({
    onSwitchSuccess(e, t) {
        setTimeout(() => {
            t && (0, u.pX)(E.BVt.ME),
                (0, s.P0)((0, a.o)(I.intl.formatToPlainString(I.t.wx7O3L, { username: e.username }), o.Ck.SUCCESS));
        }, 100);
    },
    onSwitchError() {
        (0, s.P0)((0, a.o)(I.intl.string(I.t.pqvKWA), o.Ck.FAILURE));
    },
    onTokenSet() {
        (0, l.closeModal)(A.ov), (0, l.closeModal)(A.Gl);
    },
});
