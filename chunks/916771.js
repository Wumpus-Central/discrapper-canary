r.d(n, {
    Z: function () {
        return f;
    }
});
var i = r(200651);
r(192379);
var a = r(872810),
    o = r(569545),
    s = r(63063),
    l = r(112560),
    u = r(981631),
    c = r(388032);
let d = r(66737);
function f(e) {
    let { stream: n, width: r, selected: f = !1, noArt: p = !1 } = e;
    return (0, i.jsx)(l.Z, {
        artURL: d,
        header: c.intl.string(c.t.rSlOen),
        size: (0, l.L)(r),
        noArt: p,
        selected: f,
        description: c.intl.format(c.t.sXsgsL, { helpUrl: s.Z.getArticleURL(u.BhN.STREAM_FAILED) }),
        onCTAClick: () => (0, a.aP)((0, o.V9)(n)),
        callToAction: c.intl.string(c.t['4EGMWF'])
    });
}
