n.d(t, { A: () => o });
var a = n(311907),
    s = n(73153);
let i = null,
    l = !1;
class r extends a.Ay.Store {
    static displayName = "AgeVerificationStore";
    get loading() {
        return l;
    }
    get methods() {
        return i;
    }
}
let o = new r(s.h, {
    AGE_VERIFICATION_METHODS_LOAD_START: function () {
        l = !0;
    },
    AGE_VERIFICATION_METHODS_LOAD_SUCCESS: function (e) {
        let { methods: t } = e;
        (i = t), (l = !1);
    },
    AGE_VERIFICATION_METHODS_LOAD_FAILURE: function () {
        l = !1;
    },
});
