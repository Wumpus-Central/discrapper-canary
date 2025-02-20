n.d(t, { Z: () => d });
var r = n(200651);
n(192379);
var i = n(872810),
    o = n(569545),
    a = n(63063),
    s = n(112560),
    l = n(981631),
    c = n(388032);
let u = n(66737);
function d(e) {
    let { stream: t, width: n, selected: d = !1, noArt: f = !1 } = e;
    return (0, r.jsx)(s.Z, {
        artURL: u,
        header: c.NW.string(c.t.rSlOen),
        size: (0, s.L)(n),
        noArt: f,
        selected: d,
        description: c.NW.format(c.t.sXsgsL, { helpUrl: a.Z.getArticleURL(l.BhN.STREAM_FAILED) }),
        onCTAClick: () => (0, i.aP)((0, o.V9)(t)),
        callToAction: c.NW.string(c.t['4EGMWF'])
    });
}
