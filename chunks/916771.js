n.d(t, { Z: () => p });
var r = n(255367);
n(73800);
var i = n(46973),
    a = n(878001),
    o = n(458725),
    s = n(386146),
    l = n(803647),
    c = n(63063),
    u = n(112560),
    d = n(981631),
    _ = n(388032);
function f(e) {
    switch (null == e ? void 0 : e.type) {
        case o.u.SCREENSHARE_OS_ERROR:
            return _.intl.format(_.t.e9LMur, { errorMessage: e.errorMessage });
        case o.u.STREAM_FAILED_TO_START:
        default:
            return _.intl.string(_.t.rSlOen);
    }
}
function p(e) {
    var t;
    let { stream: n, width: p, avError: h, avErrorContext: m, selected: g = !1, noArt: E = !1 } = e,
        { avErrorUIEnabled: b } = (0, s.JN)({ location: 'StreamWarning' }),
        y = f(m),
        O = null == (t = (0, o.hp)(null != h ? h : o.u.STREAM_FAILED_TO_START)) ? void 0 : t.errorCode;
    return (0, r.jsx)(u.Z, {
        header: y,
        size: (0, u.L)(p),
        noArt: E,
        selected: g,
        description: _.intl.format(_.t.sXsgsL, { helpUrl: c.Z.getArticleURL(d.BhN.STREAM_FAILED) }),
        errorCodeMessage: b ? _.intl.formatToPlainString(_.t['ejOT9/'], { errorCode: O }) : void 0,
        onCTAClick: () => {
            ((0, a.w)(i.Yn.STREAM, n.ownerId), (0, l.Z)(n));
        },
        callToAction: _.intl.string(_.t['4EGMWF'])
    });
}
