"use strict";
let i, r;
n.d(t, { A: () => T });
var s = n(691540),
    a = n(857250),
    o = n(97483),
    l = n(192308),
    d = n(976860),
    _ = n(247775),
    u = n(228366),
    c = n(439372),
    E = n(287809),
    h = n(954571),
    m = n(274303),
    f = n(652215);
let g = !1;
class p extends c.A {
    onSwitchStart;
    onSwitchSuccess;
    onSwitchError;
    onTokenSet;
    constructor({ onSwitchStart: e, onSwitchSuccess: t, onSwitchError: n, onTokenSet: i }) {
        super(), (this.onSwitchStart = e), (this.onSwitchSuccess = t), (this.onSwitchError = n), (this.onTokenSet = i);
    }
    actions = { LOGOUT: (e) => this.handleLogout(e) };
    _initialize() {
        u.h.subscribe("CONNECTION_OPEN", () => this.handleConnectionOpen()), this.handleConnectionOpen();
    }
    _terminate() {
        u.h.unsubscribe("CONNECTION_OPEN", () => this.handleConnectionOpen());
    }
    handleConnectionOpen = () => {
        let e = E.default.getCurrentUser();
        if (null == e) return;
        if (null != r) {
            if (r !== i) {
                let t = m.A.getUsers().map((e) => {
                    let { id: t } = e;
                    return t;
                });
                h.default.track(f.HAw.MULTI_ACCOUNT_SWITCH_SUCCESS, { from_user_id: r, linked_user_ids: t }),
                    this.onSwitchSuccess?.(e, g);
            } else h.default.track(f.HAw.MULTI_ACCOUNT_SWITCH_FAILURE), this.onSwitchError?.(e);
            r = null;
        }
        i = e.id;
        let t = _.getToken();
        null != t && "" !== t && _.setToken(t, e.id), this.onTokenSet?.(e);
    };
    handleLogout = (e) => {
        e.isSwitchingAccount
            ? ((r = i), this.onSwitchStart?.(), (g = !!e.goHomeAfterSwitching))
            : ((g = !1), _.removeToken(i)),
            (i = null);
    };
}
var A = n(573879),
    I = n(985018);
let T = new p({
    onSwitchSuccess(e, t) {
        setTimeout(() => {
            t && (0, d.pX)(f.BVt.ME),
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
