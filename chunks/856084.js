var r = n(581079),
    i = 'LTR',
    a = 'RTL',
    o = null;
function s(e) {
    return e === i || e === a;
}
function l(e) {
    return (s(e) || r(!1), e === i ? 'ltr' : 'rtl');
}
function c(e, t) {
    return (s(e) || r(!1), s(t) || r(!1), e === t ? null : l(e));
}
function u(e) {
    o = e;
}
function d() {
    u(i);
}
e.exports = {
    NEUTRAL: 'NEUTRAL',
    LTR: i,
    RTL: a,
    isStrong: s,
    getHTMLDir: l,
    getHTMLDirIfDifferent: c,
    setGlobalDir: u,
    initGlobalDir: d,
    getGlobalDir: function () {
        return (o || this.initGlobalDir(), o || r(!1), o);
    }
};
