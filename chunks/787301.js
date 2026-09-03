n.d(t, { A: () => m });
var i = n(17928),
    r = n(506774),
    a = n(228366),
    s = n(287809);
let l = null,
    o = null,
    d = null,
    c = null,
    u = !1,
    _ = "unchecked",
    E = null;
function A() {
    let e = s.default.getCurrentUser()?.id;
    return null == e ? null : `AgeVerificationStore_${e}`;
}
function h() {
    (_ = "unchecked"), (E = null);
}
function I() {
    let e = A();
    null != e && r.w.set(e, { reactiveCheckStatus: _, reactiveCheckMissAt: E });
}
function f() {
    (o = null), (d = null), (c = null);
}
function p() {
    return "miss" === _ && null != E && Date.now() - E < 864e5;
}
class T extends i.Ay.Store {
    initialize() {
        this.waitFor(s.default);
    }
    static displayName = "AgeVerificationStore";
    get loading() {
        return u;
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
    get methodsV2OutageBannerMessage() {
        return c;
    }
    getReactiveCheckStatus() {
        return _;
    }
    getReactiveCheckMiss() {
        return p();
    }
    getReactiveCheckPassed() {
        return "passed" === _;
    }
    shouldCallReactiveCheck() {
        return !("passed" === _ || "suppress" === _ || p());
    }
}
let m = new T(a.h, {
    AGE_VERIFICATION_METHODS_LOAD_START: function () {
        u = !0;
    },
    AGE_VERIFICATION_METHODS_LOAD_SUCCESS: function (e) {
        let { methods: t } = e;
        (l = t), (u = !1);
    },
    AGE_VERIFICATION_METHODS_LOAD_FAILURE: function () {
        u = !1;
    },
    AGE_VERIFICATION_METHODS_V2_LOAD_SUCCESS: function (e) {
        let { methods: t, footerMessage: n, outageBannerMessage: i } = e;
        (o = t), (d = n), (c = i);
    },
    INITIATE_AGE_VERIFICATION: f,
    CONNECTION_OPEN: function () {
        !(function () {
            let e = A();
            if (null == e) return h();
            let t = r.w.get(e);
            if (null == t || "object" != typeof t) return h();
            let n = t.reactiveCheckStatus ?? "unchecked",
                i = t.reactiveCheckMissAt ?? null;
            "miss" === n && null != i && Date.now() - i >= 864e5 ? h() : ((_ = n), (E = i));
        })(),
            f();
    },
    AGE_VERIFICATION_CHECK_RESULT_SET: function (e) {
        let { status: t } = e;
        (_ = t), (E = "miss" === t ? Date.now() : null), I();
    },
    AGE_VERIFICATION_RESET: function () {
        (_ = "suppress"), (E = null), I(), f();
    },
});
