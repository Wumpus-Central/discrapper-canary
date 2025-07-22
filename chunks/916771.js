n.d(t, { Z: () => f });
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
    var t;
    let { stream: n, width: f, avError: p, selected: h = !1, noArt: m = !1 } = e,
        { avErrorUIEnabled: g } = (0, s.JN)({ location: 'StreamWarning' }),
        E = null == (t = (0, o.hp)(null != p ? p : o.u.STREAM_FAILED_TO_START)) ? void 0 : t.errorCode;
    return (0, r.jsx)(u.Z, {
        header: _.intl.string(_.t.rSlOen),
        size: (0, u.L)(f),
        noArt: m,
        selected: h,
        description: _.intl.format(_.t.sXsgsL, { helpUrl: c.Z.getArticleURL(d.BhN.STREAM_FAILED) }),
        errorCodeMessage: g ? _.intl.formatToPlainString(_.t['ejOT9/'], { errorCode: E }) : void 0,
        onCTAClick: () => {
            ((0, a.w)(i.Yn.STREAM, n.ownerId), (0, l.Z)(n));
        },
        callToAction: _.intl.string(_.t['4EGMWF'])
    });
}
