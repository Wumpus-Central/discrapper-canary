n.r(t),
    n.d(t, {
        useCallback: () => l,
        useCallbackOne: () => s,
        useMemo: () => o,
        useMemoOne: () => a
    });
var i = n(192379);
function r(e, t) {
    if (e.length !== t.length) return !1;
    for (var n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
    return !0;
}
function a(e, t) {
    var n = (0, i.useState)(function () {
            return {
                inputs: t,
                result: e()
            };
        })[0],
        a = (0, i.useRef)(!0),
        s = (0, i.useRef)(n),
        o =
            a.current || (t && s.current.inputs && r(t, s.current.inputs))
                ? s.current
                : {
                      inputs: t,
                      result: e()
                  };
    return (
        (0, i.useEffect)(
            function () {
                (a.current = !1), (s.current = o);
            },
            [o]
        ),
        o.result
    );
}
function s(e, t) {
    return a(function () {
        return e;
    }, t);
}
var o = a,
    l = s;
