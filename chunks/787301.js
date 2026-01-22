n.d(t, {
    A: () => d,
});
var a,
    l,
    i = n(311907),
    r = n(73153);
let s = null,
    o = !1;
class c extends (l = i.Ay.Store) {
    get loading() {
        return o;
    }
    get methods() {
        return s;
    }
}
(a = "displayName") in c
    ? Object.defineProperty(c, a, {
          value: "AgeVerificationStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (c[a] = "AgeVerificationStore");
let d = new c(r.h, {
    AGE_VERIFICATION_METHODS_LOAD_START: function () {
        o = !0;
    },
    AGE_VERIFICATION_METHODS_LOAD_SUCCESS: function (e) {
        let { methods: t } = e;
        (s = t), (o = !1);
    },
    AGE_VERIFICATION_METHODS_LOAD_FAILURE: function () {
        o = !1;
    },
});
