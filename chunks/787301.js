"use strict";
n.d(t, { A: () => p });
var r = n(311907),
    i = n(506774),
    s = n(73153),
    a = n(287809);
let o = null,
    l = !1,
    u = "unchecked",
    d = null;
function c() {
    let e = a.default.getCurrentUser()?.id;
    return null == e ? null : `AgeVerificationStore_${e}`;
}
function _() {
    (u = "unchecked"), (d = null);
}
function f() {
    let e = c();
    null != e && i.w.set(e, { reactiveCheckStatus: u, reactiveCheckMissAt: d });
}
function E() {
    return "miss" === u && null != d && Date.now() - d < 864e5;
}
class h extends r.Ay.Store {
    initialize() {
        this.waitFor(a.default);
    }
    static displayName = "AgeVerificationStore";
    get loading() {
        return l;
    }
    get methods() {
        return o;
    }
    getReactiveCheckStatus() {
        return u;
    }
    getReactiveCheckMiss() {
        return E();
    }
    getReactiveCheckPassed() {
        return "passed" === u;
    }
    shouldCallReactiveCheck() {
        return !("passed" === u || "suppress" === u || E());
    }
}
let p = new h(s.h, {
    AGE_VERIFICATION_METHODS_LOAD_START: function () {
        l = !0;
    },
    AGE_VERIFICATION_METHODS_LOAD_SUCCESS: function (e) {
        let { methods: t } = e;
        (o = t), (l = !1);
    },
    AGE_VERIFICATION_METHODS_LOAD_FAILURE: function () {
        l = !1;
    },
    CONNECTION_OPEN: function () {
        !(function () {
            let e = c();
            if (null == e) return _();
            let t = i.w.get(e);
            if (null == t || "object" != typeof t) return _();
            let n = t.reactiveCheckStatus ?? "unchecked",
                r = t.reactiveCheckMissAt ?? null;
            "miss" === n && null != r && Date.now() - r >= 864e5 ? _() : ((u = n), (d = r));
        })();
    },
    AGE_VERIFICATION_CHECK_RESULT_SET: function (e) {
        let { status: t } = e;
        (u = t), (d = "miss" === t ? Date.now() : null), f();
    },
    AGE_VERIFICATION_RESET: function () {
        (u = "suppress"), (d = null), f();
    },
});
