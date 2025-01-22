let i, a;
r.d(n, {
    Zh: function () {
        return u;
    },
    eJ: function () {
        return c;
    },
    f3: function () {
        return l;
    },
    p8: function () {
        return d;
    },
    zS: function () {
        return f;
    }
});
var o = r(411104);
function s() {
    if (null == i) throw Error('Native dependencies have not been injected.');
}
function l(e) {
    i = e;
}
function u() {
    return s(), i.supported();
}
function c(e) {
    return s(), i.supportsFeature(e);
}
function d(e) {
    s(), i.setProcessPriority(e);
}
function f() {
    return s(), null != a ? a : (a = i.getVoiceEngine());
}
