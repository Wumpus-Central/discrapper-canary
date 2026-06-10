"use strict";
let i, r;
n.d(t, { A: () => O });
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
    f = n(287809),
    p = n(174459),
    E = n(274303),
    m = n(652215);
let g = new h.A("MultiAccountManager"),
    A = !1,
    I = null,
    T = null,
    S = !1,
    y = !1;
function N() {
    return S && !1;
}
class v extends _.A {
    onSwitchStart;
    onSwitchSuccess;
    onSwitchError;
    onTokenSet;
    constructor({ onSwitchStart: e, onSwitchSuccess: t, onSwitchError: n, onTokenSet: i }) {
        super(), (this.onSwitchStart = e), (this.onSwitchSuccess = t), (this.onSwitchError = n), (this.onTokenSet = i);
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
        (I = e.targetUserId), (T = e.location);
    };
    handleConnectionOpen = () => {
        let e = f.default.getCurrentUser();
        if (null == e) return;
        if (
            (!(function (e) {
                if (!N()) return;
                let t = c.getToken(e),
                    n = c.getToken(),
                    i = null != I && e !== I,
                    s = null != t && null != n && t !== n;
                if (!(s || i)) return;
                let a = {
                    from_user_id: r,
                    to_user_id: I,
                    actual_user_id: e,
                    fast_connect_user_id: null,
                    linked_user_ids: E.A.getUsers().map((e) => {
                        let { id: t } = e;
                        return t;
                    }),
                    has_ever_connected: y,
                    user_token_exists: null != t,
                    main_token_exists: null != n,
                    is_token_mismatch: s,
                    is_user_mismatch: i,
                    switch_origin: T,
                };
                g.log("Token mismatch on account switch connection open", a),
                    p.default.track(m.HAw.MULTI_ACCOUNT_SWITCH_READY_MISMATCH, a);
            })(e.id),
            null != r)
        ) {
            if (r !== e.id) {
                let t;
                (t = {
                    from_user_id: r,
                    to_user_id: I,
                    actual_user_id: e.id,
                    fast_connect_user_id: null,
                    linked_user_ids: E.A.getUsers().map((e) => {
                        let { id: t } = e;
                        return t;
                    }),
                    has_ever_connected: y,
                    switch_origin: T,
                }),
                    p.default.track(m.HAw.MULTI_ACCOUNT_SWITCH_SUCCESS, t),
                    N() && g.log("Account switch success", t),
                    this.onSwitchSuccess?.(e, A);
            } else {
                let t;
                (t = {
                    from_user_id: r,
                    to_user_id: I,
                    actual_user_id: e.id,
                    fast_connect_user_id: null,
                    linked_user_ids: E.A.getUsers().map((e) => {
                        let { id: t } = e;
                        return t;
                    }),
                    has_ever_connected: y,
                    switch_origin: T,
                }),
                    p.default.track(m.HAw.MULTI_ACCOUNT_SWITCH_FAILURE, t),
                    N() && g.log("Account switch failure", t),
                    this.onSwitchError?.(e);
            }
            r = null;
        }
        i = e.id;
        let t = c.getToken();
        null != t &&
            "" !== t &&
            (!(function (e, t) {
                if (!N()) return;
                let n = new Set(),
                    i = [],
                    s = [],
                    a = E.A.getUsers(),
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
                    to_user_id: I,
                    actual_user_id: e,
                    fast_connect_user_id: null,
                    linked_user_ids: s,
                    colliding_user_ids: i,
                    has_ever_connected: y,
                    is_already_corrupted: o,
                    switch_origin: T,
                };
                g.log("setToken about to introduce per-user token collision", l),
                    p.default.track(m.HAw.MULTI_ACCOUNT_SWITCH_TOKEN_COLLISION_WRITE, l);
            })(e.id, t),
            c.setToken(t, e.id)),
            (function (e) {
                if (!N()) return;
                let t = [],
                    n = new Map();
                E.A.getUsers().forEach((e) => {
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
                            to_user_id: I,
                            actual_user_id: e,
                            fast_connect_user_id: null,
                            linked_user_ids: t,
                            colliding_user_ids: n,
                            has_ever_connected: y,
                            switch_origin: T,
                        };
                        g.log("Per-user token collision detected", i),
                            p.default.track(m.HAw.MULTI_ACCOUNT_SWITCH_TOKEN_COLLISION, i);
                    });
            })(e.id),
            this.onTokenSet?.(e),
            (I = null),
            (T = null),
            (S = !1),
            (y = !0);
    };
    handleLogout = (e) => {
        e.isSwitchingAccount
            ? (g.log("logout from account switch", {
                  current_user_id: i,
                  expected_user_id: I,
                  fast_connect_user_id: null,
                  switch_origin: T,
              }),
              (S = !0),
              (r = i),
              this.onSwitchStart?.(),
              (A = !!e.goHomeAfterSwitching))
            : ((A = !1), c.removeToken(i)),
            (i = null);
    };
}
var C = n(573879),
    R = n(375708);
let O = new v({
    onSwitchSuccess(e, t) {
        setTimeout(() => {
            t && (0, u.pX)(m.BVt.ME),
                (0, s.P0)((0, a.o)(R.intl.formatToPlainString(R.t.wx7O3L, { username: e.username }), o.Ck.SUCCESS));
        }, 100);
    },
    onSwitchError() {
        (0, s.P0)((0, a.o)(R.intl.string(R.t.pqvKWA), o.Ck.FAILURE));
    },
    onTokenSet() {
        (0, l.closeModal)(C.ov), (0, l.closeModal)(C.Gl);
    },
});
