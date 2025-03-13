n.d(t, { Z: () => _ });
var r = n(200651);
n(192379);
var i = n(872810),
    o = n(785141),
    a = n(272395),
    s = n(569545),
    l = n(63063),
    c = n(112560),
    u = n(981631),
    d = n(388032);
let f = n(66737);
function _(e) {
    var t;
    let { stream: n, width: _, selected: p = !1, noArt: h = !1 } = e,
        { avErrorUIEnabled: m } = (0, a.JN)({ location: 'StreamWarning' }),
        g = null === (t = (0, o.hp)(o.u.STREAM_FAILED_TO_START)) || void 0 === t ? void 0 : t.errorCode;
    return (0, r.jsx)(c.Z, {
        artURL: f,
        header: d.NW.string(d.t.rSlOen),
        size: (0, c.L)(_),
        noArt: h,
        selected: p,
        description: d.NW.format(d.t.sXsgsL, { helpUrl: l.Z.getArticleURL(u.BhN.STREAM_FAILED) }),
        errorCodeMessage: m ? d.NW.formatToPlainString(d.t['ejOT9/'], { errorCode: g }) : void 0,
        onCTAClick: () => (0, i.aP)((0, s.V9)(n)),
        callToAction: d.NW.string(d.t['4EGMWF'])
    });
}
