n.d(t, { Z: () => h });
var r = n(200651);
n(192379);
var i = n(46973),
    o = n(872810),
    a = n(878001),
    s = n(458725),
    l = n(386146),
    c = n(569545),
    u = n(63063),
    d = n(112560),
    f = n(981631),
    _ = n(388032);
let p = n(66737);
function h(e) {
    var t;
    let { stream: n, width: h, avError: m, selected: g = !1, noArt: E = !1 } = e,
        { avErrorUIEnabled: b } = (0, l.JN)({ location: 'StreamWarning' }),
        y = null == (t = (0, s.hp)(null != m ? m : s.u.STREAM_FAILED_TO_START)) ? void 0 : t.errorCode;
    return (0, r.jsx)(d.Z, {
        artURL: p,
        header: _.NW.string(_.t.rSlOen),
        size: (0, d.L)(h),
        noArt: E,
        selected: g,
        description: _.NW.format(_.t.sXsgsL, { helpUrl: u.Z.getArticleURL(f.BhN.STREAM_FAILED) }),
        errorCodeMessage: b ? _.NW.formatToPlainString(_.t['ejOT9/'], { errorCode: y }) : void 0,
        onCTAClick: () => {
            (0, a.w)(i.Yn.STREAM, n.ownerId), (0, o.aP)((0, c.V9)(n));
        },
        callToAction: _.NW.string(_.t['4EGMWF'])
    });
}
