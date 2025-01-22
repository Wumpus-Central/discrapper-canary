r.r(n),
    r.d(n, {
        useCallback: function () {
            return u;
        },
        useCallbackOne: function () {
            return s;
        },
        useMemo: function () {
            return l;
        },
        useMemoOne: function () {
            return o;
        }
    });
var i = r(192379);
function a(e, n) {
    if (e.length !== n.length) return !1;
    for (var r = 0; r < e.length; r++) if (e[r] !== n[r]) return !1;
    return !0;
}
function o(e, n) {
    var r = (0, i.useState)(function () {
            return {
                inputs: n,
                result: e()
            };
        })[0],
        o = (0, i.useRef)(!0),
        s = (0, i.useRef)(r),
        l =
            o.current || (n && s.current.inputs && a(n, s.current.inputs))
                ? s.current
                : {
                      inputs: n,
                      result: e()
                  };
    return (
        (0, i.useEffect)(
            function () {
                (o.current = !1), (s.current = l);
            },
            [l]
        ),
        l.result
    );
}
function s(e, n) {
    return o(function () {
        return e;
    }, n);
}
var l = o,
    u = s;
