n.d(t, { Z: () => _ });
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
    f = n(388032);
function _(e) {
    var t;
    let { stream: n, width: _, avError: p, selected: h = !1, noArt: m = !1 } = e,
        { avErrorUIEnabled: g } = (0, s.JN)({ location: 'StreamWarning' }),
        E = null == (t = (0, o.hp)(null != p ? p : o.u.STREAM_FAILED_TO_START)) ? void 0 : t.errorCode;
    return (0, r.jsx)(u.Z, {
        header: f.intl.string(f.t.rSlOen),
        size: (0, u.L)(_),
        noArt: m,
        selected: h,
        description: f.intl.format(f.t.sXsgsL, { helpUrl: c.Z.getArticleURL(d.BhN.STREAM_FAILED) }),
        errorCodeMessage: g ? f.intl.formatToPlainString(f.t['ejOT9/'], { errorCode: E }) : void 0,
        onCTAClick: () => {
            (0, a.w)(i.Yn.STREAM, n.ownerId), (0, l.Z)(n);
        },
        callToAction: f.intl.string(f.t['4EGMWF'])
    });
}
