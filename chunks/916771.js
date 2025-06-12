n.d(t, { Z: () => h });
var r = n(255367);
n(73800);
var i = n(46973),
    a = n(844168),
    o = n(878001),
    s = n(458725),
    l = n(386146),
    c = n(803647),
    u = n(63063),
    d = n(112560),
    _ = n(981631),
    f = n(388032);
let p = n(66737);
function h(e) {
    var t;
    let { stream: n, width: h, avError: m, selected: g = !1, noArt: E = !1 } = e,
        { avErrorUIEnabled: b } = (0, l.JN)({ location: 'StreamWarning' }),
        y = (0, a.C)('stream-failed'),
        O = null == (t = (0, s.hp)(null != m ? m : s.u.STREAM_FAILED_TO_START)) ? void 0 : t.errorCode;
    return (0, r.jsx)(d.Z, {
        artURL: y ? null : p,
        header: f.intl.string(f.t.rSlOen),
        size: (0, d.L)(h),
        noArt: E,
        selected: g,
        description: f.intl.format(f.t.sXsgsL, { helpUrl: u.Z.getArticleURL(_.BhN.STREAM_FAILED) }),
        errorCodeMessage: b ? f.intl.formatToPlainString(f.t['ejOT9/'], { errorCode: O }) : void 0,
        onCTAClick: () => {
            (0, o.w)(i.Yn.STREAM, n.ownerId), (0, c.Z)(n);
        },
        callToAction: f.intl.string(f.t['4EGMWF'])
    });
}
