"use strict";
let i, r;
n.d(t, { A: () => b });
var s = n(691540),
    a = n(857250),
    o = n(97483),
    l = n(192308),
    u = n(976860);
n(321073);
var c = n(247775),
    d = n(228366),
    _ = n(439372),
    h = n(626584),
    f = n(364711),
    p = n(287809),
    E = n(174459),
    m = n(274303),
    g = n(652215);
let A = new h.A("MultiAccountManager"),
    I = !1,
    T = null,
    S = null,
    y = !1,
    N = !1;
function v() {
    return y && !1;
}
class C extends _.A {
    onSwitchStart;
    onSwitchSuccess;
    onSwitchError;
    onTokenSet;
    onLogout;
    constructor({ onSwitchStart: e, onSwitchSuccess: t, onSwitchError: n, onTokenSet: i, onLogout: r }) {
        super(),
            (this.onSwitchStart = e),
            (this.onSwitchSuccess = t),
            (this.onSwitchError = n),
            (this.onTokenSet = i),
            (this.onLogout = r);
    }
    actions = {
        LOGOUT: (e) => this.handleLogout(e),
        MULTI_ACCOUNT_SWITCH_START: (e) => this.handleMultiAccountSwitchStart(e),
    };
    _initialize() {
        d.h.subscribe("CONNECTION_OPEN", () => this.handleConnectionOpen()), this.handleConnectionOpen();
    }
    _terminate() {
        d.h.unsubscribe("CONNECTION_OPEN", () => this.handleConnectionOpen());
    }
    handleMultiAccountSwitchStart = (e) => {
        (T = e.targetUserId), (S = e.location), (0, f.m)(e.targetUserId);
    };
    handleConnectionOpen = () => {
        let e = p.default.getCurrentUser();
        if (null == e) return;
        if (
            (!(function (e) {
                if (!v()) return;
                let t = c.getToken(e),
                    n = c.getToken(),
                    i = null != T && e !== T,
                    s = null != t && null != n && t !== n;
                if (!(s || i)) return;
                let a = {
                    from_user_id: r,
                    to_user_id: T,
                    actual_user_id: e,
                    fast_connect_user_id: null,
                    linked_user_ids: m.A.getUsers().map((e) => {
                        let { id: t } = e;
                        return t;
                    }),
                    has_ever_connected: N,
                    user_token_exists: null != t,
                    main_token_exists: null != n,
                    is_token_mismatch: s,
                    is_user_mismatch: i,
                    switch_origin: S,
                };
                A.log("Token mismatch on account switch connection open", a),
                    E.default.track(g.HAw.MULTI_ACCOUNT_SWITCH_READY_MISMATCH, a);
            })(e.id),
            null != r)
        ) {
            if (r !== e.id) {
                let t;
                (t = {
                    from_user_id: r,
                    to_user_id: T,
                    actual_user_id: e.id,
                    fast_connect_user_id: null,
                    linked_user_ids: m.A.getUsers().map((e) => {
                        let { id: t } = e;
                        return t;
                    }),
                    has_ever_connected: N,
                    switch_origin: S,
                }),
                    E.default.track(g.HAw.MULTI_ACCOUNT_SWITCH_SUCCESS, t),
                    v() && A.log("Account switch success", t),
                    this.onSwitchSuccess?.(e, I);
            } else {
                let t;
                (t = {
                    from_user_id: r,
                    to_user_id: T,
                    actual_user_id: e.id,
                    fast_connect_user_id: null,
                    linked_user_ids: m.A.getUsers().map((e) => {
                        let { id: t } = e;
                        return t;
                    }),
                    has_ever_connected: N,
                    switch_origin: S,
                }),
                    E.default.track(g.HAw.MULTI_ACCOUNT_SWITCH_FAILURE, t),
                    v() && A.log("Account switch failure", t),
                    this.onSwitchError?.(e);
            }
            r = null;
        }
        i = e.id;
        let t = c.getToken();
        null != t &&
            "" !== t &&
            (!(function (e, t) {
                if (!v()) return;
                let n = new Set(),
                    i = [],
                    s = [],
                    a = m.A.getUsers(),
                    o = !1;
                if (
                    (a.forEach((r) => {
                        let { id: a } = r;
                        s.push(a);
                        let l = c.getToken(a);
                        a !== e && l === t && i.push(a), null != l && (n.has(l) ? (o = !0) : n.add(l));
                    }),
                    0 === i.length)
                )
                    return;
                let l = {
                    from_user_id: r,
                    to_user_id: T,
                    actual_user_id: e,
                    fast_connect_user_id: null,
                    linked_user_ids: s,
                    colliding_user_ids: i,
                    has_ever_connected: N,
                    is_already_corrupted: o,
                    switch_origin: S,
                };
                A.log("setToken about to introduce per-user token collision", l),
                    E.default.track(g.HAw.MULTI_ACCOUNT_SWITCH_TOKEN_COLLISION_WRITE, l);
            })(e.id, t),
            c.setToken(t, e.id)),
            (function (e) {
                if (!v()) return;
                let t = [],
                    n = new Map();
                m.A.getUsers().forEach((e) => {
                    let { id: i } = e;
                    t.push(i);
                    let r = c.getToken(i);
                    if (null == r || "" === r) return;
                    let s = n.get(r) ?? [];
                    s.push(i), n.set(r, s);
                }),
                    n.forEach((n) => {
                        if (n.length < 2) return;
                        let i = {
                            from_user_id: r,
                            to_user_id: T,
                            actual_user_id: e,
                            fast_connect_user_id: null,
                            linked_user_ids: t,
                            colliding_user_ids: n,
                            has_ever_connected: N,
                            switch_origin: S,
                        };
                        A.log("Per-user token collision detected", i),
                            E.default.track(g.HAw.MULTI_ACCOUNT_SWITCH_TOKEN_COLLISION, i);
                    });
            })(e.id),
            this.onTokenSet?.(e),
            (T = null),
            (S = null),
            (y = !1),
            (N = !0),
            (0, f.m)(null);
    };
    handleLogout = (e) => {
        this.onLogout?.(e),
            e.isSwitchingAccount
                ? (A.log("logout from account switch", {
                      current_user_id: i,
                      expected_user_id: T,
                      fast_connect_user_id: null,
                      switch_origin: S,
                  }),
                  (y = !0),
                  (r = i),
                  this.onSwitchStart?.(),
                  (I = !!e.goHomeAfterSwitching))
                : ((I = !1), c.removeToken(i)),
            (i = null);
    };
}
var R = n(573879),
    O = n(375708);
let b = new C({
    onSwitchSuccess(e, t) {
        setTimeout(() => {
            t && (0, u.pX)(g.BVt.ME),
                (0, s.P0)((0, a.o)(O.intl.formatToPlainString(O.t.wx7O3L, { username: e.username }), o.Ck.SUCCESS));
        }, 100);
    },
    onSwitchError() {
        (0, s.P0)((0, a.o)(O.intl.string(O.t.pqvKWA), o.Ck.FAILURE));
    },
    onTokenSet() {
        (0, l.closeModal)(R.ov), (0, l.closeModal)(R.Gl);
    },
});
