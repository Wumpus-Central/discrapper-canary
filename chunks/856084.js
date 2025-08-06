var r = n(581079),
    i = "LTR",
    o = "RTL",
    a = null;
function s(e) {
    return e === i || e === o;
}
function l(e) {
    return s(e) || r(!1), e === i ? "ltr" : "rtl";
}
function c(e, t) {
    return s(e) || r(!1), s(t) || r(!1), e === t ? null : l(e);
}
function u(e) {
    a = e;
}
function d() {
    u(i);
}
e.exports = {
    NEUTRAL: "NEUTRAL",
    LTR: i,
    RTL: o,
    isStrong: s,
    getHTMLDir: l,
    getHTMLDirIfDifferent: c,
    setGlobalDir: u,
    initGlobalDir: d,
    getGlobalDir: function () {
        return a || this.initGlobalDir(), a || r(!1), a;
    },
};
