"use strict";
n.d(t, { A: () => E });
var r = n(311907),
    i = n(506774),
    s = n(73153),
    a = n(287809);
let o = null,
    l = !1,
    u = "unchecked",
    c = null;
function d() {
    let e = a.default.getCurrentUser()?.id;
    return null == e ? null : `AgeVerificationStore_${e}`;
}
function _() {
    (u = "unchecked"), (c = null);
}
function f() {
    let e = d();
    null != e && i.w.set(e, { reactiveCheckStatus: u, reactiveCheckMissAt: c });
}
function p() {
    return "miss" === u && null != c && Date.now() - c < 864e5;
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
        return p();
    }
    getReactiveCheckPassed() {
        return "passed" === u;
    }
    shouldCallReactiveCheck() {
        return !("passed" === u || "suppress" === u || p());
    }
}
let E = new h(s.h, {
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
            let e = d();
            if (null == e) return _();
            let t = i.w.get(e);
            if (null == t || "object" != typeof t) return _();
            let n = t.reactiveCheckStatus ?? "unchecked",
                r = t.reactiveCheckMissAt ?? null;
            "miss" === n && null != r && Date.now() - r >= 864e5 ? _() : ((u = n), (c = r));
        })();
    },
    AGE_VERIFICATION_CHECK_RESULT_SET: function (e) {
        let { status: t } = e;
        (u = t), (c = "miss" === t ? Date.now() : null), f();
    },
    AGE_VERIFICATION_RESET: function () {
        (u = "suppress"), (c = null), f();
    },
});
