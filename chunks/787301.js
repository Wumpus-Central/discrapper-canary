"use strict";
n.d(t, { A: () => T });
var i = n(17928),
    r = n(506774),
    a = n(228366),
    s = n(287809);
let l = null,
    o = null,
    d = null,
    c = !1,
    u = "unchecked",
    _ = null;
function E() {
    let e = s.default.getCurrentUser()?.id;
    return null == e ? null : `AgeVerificationStore_${e}`;
}
function A() {
    (u = "unchecked"), (_ = null);
}
function h() {
    let e = E();
    null != e && r.w.set(e, { reactiveCheckStatus: u, reactiveCheckMissAt: _ });
}
function I() {
    (o = null), (d = null);
}
function f() {
    return "miss" === u && null != _ && Date.now() - _ < 864e5;
}
class p extends i.Ay.Store {
    initialize() {
        this.waitFor(s.default);
    }
    static displayName = "AgeVerificationStore";
    get loading() {
        return c;
    }
    get methods() {
        return l;
    }
    get methodsV2() {
        return o;
    }
    get methodsV2FooterMessage() {
        return d;
    }
    getReactiveCheckStatus() {
        return u;
    }
    getReactiveCheckMiss() {
        return f();
    }
    getReactiveCheckPassed() {
        return "passed" === u;
    }
    shouldCallReactiveCheck() {
        return !("passed" === u || "suppress" === u || f());
    }
}
let T = new p(a.h, {
    AGE_VERIFICATION_METHODS_LOAD_START: function () {
        c = !0;
    },
    AGE_VERIFICATION_METHODS_LOAD_SUCCESS: function (e) {
        let { methods: t } = e;
        (l = t), (c = !1);
    },
    AGE_VERIFICATION_METHODS_LOAD_FAILURE: function () {
        c = !1;
    },
    AGE_VERIFICATION_METHODS_V2_LOAD_SUCCESS: function (e) {
        let { methods: t, footerMessage: n } = e;
        (o = t), (d = n);
    },
    INITIATE_AGE_VERIFICATION: I,
    CONNECTION_OPEN: function () {
        !(function () {
            let e = E();
            if (null == e) return A();
            let t = r.w.get(e);
            if (null == t || "object" != typeof t) return A();
            let n = t.reactiveCheckStatus ?? "unchecked",
                i = t.reactiveCheckMissAt ?? null;
            "miss" === n && null != i && Date.now() - i >= 864e5 ? A() : ((u = n), (_ = i));
        })(),
            I();
    },
    AGE_VERIFICATION_CHECK_RESULT_SET: function (e) {
        let { status: t } = e;
        (u = t), (_ = "miss" === t ? Date.now() : null), h();
    },
    AGE_VERIFICATION_RESET: function () {
        (u = "suppress"), (_ = null), h(), I();
    },
});
