"use strict";
n.d(t, { A: () => b });
var r = n(311907),
    i = n(506774),
    a = n(73153),
    s = n(287809);
let o = "AgeVerificationStore",
    l = 864e5,
    u = null,
    c = !1,
    d = "unchecked",
    _ = null;
function f() {
    let e = s.default.getCurrentUser()?.id;
    return null == e ? null : `${o}_${e}`;
}
function p() {
    (d = "unchecked"), (_ = null);
}
function h() {
    let e = f();
    null != e && i.w.set(e, { reactiveCheckStatus: d, reactiveCheckMissAt: _ });
}
function m(e, t) {
    return "miss" === e && null != t && Date.now() - t >= l;
}
function g() {
    let e = f();
    if (null == e) return void p();
    let t = i.w.get(e);
    if (null == t || "object" != typeof t) return void p();
    let n = t,
        r = n.reactiveCheckStatus ?? "unchecked",
        a = n.reactiveCheckMissAt ?? null;
    m(r, a) ? p() : ((d = r), (_ = a));
}
function E() {
    c = !0;
}
function A(e) {
    let { methods: t } = e;
    (u = t), (c = !1);
}
function I() {
    c = !1;
}
function T() {
    g();
}
function y(e) {
    let { status: t } = e;
    (d = t), (_ = "miss" === t ? Date.now() : null), h();
}
function S() {
    (d = "reset"), (_ = null), h();
}
function v() {
    return "miss" === d && null != _ && Date.now() - _ < l;
}
class C extends r.Ay.Store {
    initialize() {
        this.waitFor(s.default);
    }
    static displayName = "AgeVerificationStore";
    get loading() {
        return c;
    }
    get methods() {
        return u;
    }
    getReactiveCheckStatus() {
        return d;
    }
    getReactiveCheckMiss() {
        return v();
    }
    getReactiveCheckPassed() {
        return "passed" === d;
    }
    shouldCallReactiveCheck() {
        return !("passed" === d || "reset" === d || v());
    }
}
let b = new C(a.h, {
    AGE_VERIFICATION_METHODS_LOAD_START: E,
    AGE_VERIFICATION_METHODS_LOAD_SUCCESS: A,
    AGE_VERIFICATION_METHODS_LOAD_FAILURE: I,
    CONNECTION_OPEN: T,
    AGE_VERIFICATION_CHECK_RESULT_SET: y,
    AGE_VERIFICATION_RESET: S,
});
