"use strict";
n.d(t, { A: () => f });
var i = n(17928),
    r = n(506774),
    s = n(228366),
    a = n(287809);
let o = null,
    l = !1,
    d = "unchecked",
    _ = null;
function u() {
    let e = a.default.getCurrentUser()?.id;
    return null == e ? null : `AgeVerificationStore_${e}`;
}
function c() {
    (d = "unchecked"), (_ = null);
}
function E() {
    let e = u();
    null != e && r.w.set(e, { reactiveCheckStatus: d, reactiveCheckMissAt: _ });
}
function h() {
    return "miss" === d && null != _ && Date.now() - _ < 864e5;
}
class m extends i.Ay.Store {
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
        return d;
    }
    getReactiveCheckMiss() {
        return h();
    }
    getReactiveCheckPassed() {
        return "passed" === d;
    }
    shouldCallReactiveCheck() {
        return !("passed" === d || "suppress" === d || h());
    }
}
let f = new m(s.h, {
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
            let e = u();
            if (null == e) return c();
            let t = r.w.get(e);
            if (null == t || "object" != typeof t) return c();
            let n = t.reactiveCheckStatus ?? "unchecked",
                i = t.reactiveCheckMissAt ?? null;
            "miss" === n && null != i && Date.now() - i >= 864e5 ? c() : ((d = n), (_ = i));
        })();
    },
    AGE_VERIFICATION_CHECK_RESULT_SET: function (e) {
        let { status: t } = e;
        (d = t), (_ = "miss" === t ? Date.now() : null), E();
    },
    AGE_VERIFICATION_RESET: function () {
        (d = "suppress"), (_ = null), E();
    },
});
