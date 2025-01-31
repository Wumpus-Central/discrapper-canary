n.d(t, { Z: () => d });
var i = n(200651);
n(192379);
var r = n(872810),
    a = n(569545),
    s = n(63063),
    o = n(112560),
    l = n(981631),
    u = n(388032);
let c = n(66737);
function d(e) {
    let { stream: t, width: n, selected: d = !1, noArt: f = !1 } = e;
    return (0, i.jsx)(o.Z, {
        artURL: c,
        header: u.intl.string(u.t.rSlOen),
        size: (0, o.L)(n),
        noArt: f,
        selected: d,
        description: u.intl.format(u.t.sXsgsL, { helpUrl: s.Z.getArticleURL(l.BhN.STREAM_FAILED) }),
        onCTAClick: () => (0, r.aP)((0, a.V9)(t)),
        callToAction: u.intl.string(u.t['4EGMWF'])
    });
}
