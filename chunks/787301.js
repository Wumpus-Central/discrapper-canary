"use strict";
n.d(t, { A: () => p });
var i = n(17928),
    r = n(506774),
    a = n(228366),
    s = n(287809);
let l = null,
    o = null,
    d = !1,
    c = "unchecked",
    u = null;
function _() {
    let e = s.default.getCurrentUser()?.id;
    return null == e ? null : `AgeVerificationStore_${e}`;
}
function E() {
    (c = "unchecked"), (u = null);
}
function A() {
    let e = _();
    null != e && r.w.set(e, { reactiveCheckStatus: c, reactiveCheckMissAt: u });
}
function h() {
    o = null;
}
function I() {
    return "miss" === c && null != u && Date.now() - u < 864e5;
}
class f extends i.Ay.Store {
    initialize() {
        this.waitFor(s.default);
    }
    static displayName = "AgeVerificationStore";
    get loading() {
        return d;
    }
    get methods() {
        return l;
    }
    get methodsV2() {
        return o;
    }
    getReactiveCheckStatus() {
        return c;
    }
    getReactiveCheckMiss() {
        return I();
    }
    getReactiveCheckPassed() {
        return "passed" === c;
    }
    shouldCallReactiveCheck() {
        return !("passed" === c || "suppress" === c || I());
    }
}
let p = new f(a.h, {
    AGE_VERIFICATION_METHODS_LOAD_START: function () {
        d = !0;
    },
    AGE_VERIFICATION_METHODS_LOAD_SUCCESS: function (e) {
        let { methods: t } = e;
        (l = t), (d = !1);
    },
    AGE_VERIFICATION_METHODS_LOAD_FAILURE: function () {
        d = !1;
    },
    AGE_VERIFICATION_METHODS_V2_LOAD_SUCCESS: function (e) {
        let { methods: t } = e;
        o = t;
    },
    INITIATE_AGE_VERIFICATION: h,
    CONNECTION_OPEN: function () {
        !(function () {
            let e = _();
            if (null == e) return E();
            let t = r.w.get(e);
            if (null == t || "object" != typeof t) return E();
            let n = t.reactiveCheckStatus ?? "unchecked",
                i = t.reactiveCheckMissAt ?? null;
            "miss" === n && null != i && Date.now() - i >= 864e5 ? E() : ((c = n), (u = i));
        })(),
            h();
    },
    AGE_VERIFICATION_CHECK_RESULT_SET: function (e) {
        let { status: t } = e;
        (c = t), (u = "miss" === t ? Date.now() : null), A();
    },
    AGE_VERIFICATION_RESET: function () {
        (c = "suppress"), (u = null), A(), h();
    },
});
