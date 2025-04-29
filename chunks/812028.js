n.r(t),
    n.d(t, {
        useCallback: () => l,
        useCallbackOne: () => a,
        useMemo: () => s,
        useMemoOne: () => o
    });
var r = n(192379);
function i(e, t) {
    if (e.length !== t.length) return !1;
    for (var n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
    return !0;
}
function o(e, t) {
    var n = (0, r.useState)(function () {
            return {
                inputs: t,
                result: e()
            };
        })[0],
        o = (0, r.useRef)(!0),
        a = (0, r.useRef)(n),
        s =
            o.current || (t && a.current.inputs && i(t, a.current.inputs))
                ? a.current
                : {
                      inputs: t,
                      result: e()
                  };
    return (
        (0, r.useEffect)(
            function () {
                (o.current = !1), (a.current = s);
            },
            [s]
        ),
        s.result
    );
}
function a(e, t) {
    return o(function () {
        return e;
    }, t);
}
var s = o,
    l = a;
