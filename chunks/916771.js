n.d(t, { Z: () => p });
var r = n(200651);
n(192379);
var i = n(46973),
    a = n(878001),
    o = n(458725),
    s = n(386146),
    l = n(803647),
    c = n(63063),
    u = n(112560),
    d = n(981631),
    f = n(388032);
let _ = n(66737);
function p(e) {
    var t;
    let { stream: n, width: p, avError: h, selected: m = !1, noArt: g = !1 } = e,
        { avErrorUIEnabled: E } = (0, s.JN)({ location: 'StreamWarning' }),
        b = null == (t = (0, o.hp)(null != h ? h : o.u.STREAM_FAILED_TO_START)) ? void 0 : t.errorCode;
    return (0, r.jsx)(u.Z, {
        artURL: _,
        header: f.intl.string(f.t.rSlOen),
        size: (0, u.L)(p),
        noArt: g,
        selected: m,
        description: f.intl.format(f.t.sXsgsL, { helpUrl: c.Z.getArticleURL(d.BhN.STREAM_FAILED) }),
        errorCodeMessage: E ? f.intl.formatToPlainString(f.t['ejOT9/'], { errorCode: b }) : void 0,
        onCTAClick: () => {
            (0, a.w)(i.Yn.STREAM, n.ownerId), (0, l.Z)(n);
        },
        callToAction: f.intl.string(f.t['4EGMWF'])
    });
}
