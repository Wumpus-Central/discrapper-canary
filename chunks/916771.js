n.d(t, { Z: () => _ });
var r = n(54381);
n(473749);
var i = n(46973),
    a = n(878001),
    o = n(458725),
    s = n(803647),
    l = n(63063),
    c = n(112560),
    u = n(981631),
    d = n(388032);
function f(e) {
    switch (null == e ? void 0 : e.type) {
        case o.u.SCREENSHARE_OS_ERROR:
            return d.intl.format(d.t.e9LMuh, { errorMessage: e.errorMessage });
        case o.u.STREAM_FAILED_TO_START:
        default:
            return d.intl.string(d.t.rSlOep);
    }
}
function _(e) {
    var t;
    let { stream: n, width: _, avError: p, avErrorContext: h, selected: m = !1, noArt: g = !1 } = e,
        E = f(h),
        b = null == (t = (0, o.hp)(null != p ? p : o.u.STREAM_FAILED_TO_START)) ? void 0 : t.errorCode;
    return (0, r.jsx)(c.Z, {
        header: E,
        size: (0, c.L)(_),
        noArt: g,
        selected: m,
        description: d.intl.format(d.t.sXsgsP, { helpUrl: l.Z.getArticleURL(u.BhN.STREAM_FAILED) }),
        errorCodeMessage: d.intl.formatToPlainString(d.t.ejOT95, { errorCode: b }),
        onCTAClick: () => {
            (0, a.w)(i.Yn.STREAM, n.ownerId), (0, s.Z)(n);
        },
        callToAction: d.intl.string(d.t["4EGMWL"]),
    });
}
