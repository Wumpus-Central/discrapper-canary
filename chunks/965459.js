n.d(t, { C: () => d });
var r = n(652896),
    i = n(616356),
    a = n(877717),
    s = n(487329),
    o = n(601900),
    l = n(652215);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                c(e, t, n[t]);
            });
    }
    return e;
}
let d = {
    getActiveErrors: () => {
        let e = i.A.getCurrentUserActiveStream();
        return null != e && null != a.A.getHookError(l.LU7.SOUND)
            ? [u({ type: s.iy.STREAM_SOUNDSHARE_FAILED }, (0, o.id)((0, r._z)(e)))]
            : void 0;
    },
    makeErrorContextKey: (e) => "".concat(e.streamKey, ":").concat(e.mediaSessionId),
};
