var r = n(192379),
    i = n(615938);
function a(e, t) {
    return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
}
var o = 'function' == typeof Object.is ? Object.is : a,
    s = i.useSyncExternalStore,
    l = r.useRef,
    c = r.useEffect,
    u = r.useMemo,
    d = r.useDebugValue;
t.useSyncExternalStoreWithSelector = function (e, t, n, r, i) {
    var a = l(null);
    if (null === a.current) {
        var f = {
            hasValue: !1,
            value: null
        };
        a.current = f;
    } else f = a.current;
    var _ = s(
        e,
        (a = u(
            function () {
                function e(e) {
                    if (!l) {
                        if (((l = !0), (a = e), (e = r(e)), void 0 !== i && f.hasValue)) {
                            var t = f.value;
                            if (i(t, e)) return (s = t);
                        }
                        return (s = e);
                    }
                    if (((t = s), o(a, e))) return t;
                    var n = r(e);
                    return void 0 !== i && i(t, n) ? ((a = e), t) : ((a = e), (s = n));
                }
                var a,
                    s,
                    l = !1,
                    c = void 0 === n ? null : n;
                return [
                    function () {
                        return e(t());
                    },
                    null === c
                        ? void 0
                        : function () {
                              return e(c());
                          }
                ];
            },
            [t, n, r, i]
        ))[0],
        a[1]
    );
    return (
        c(
            function () {
                (f.hasValue = !0), (f.value = _);
            },
            [_]
        ),
        d(_),
        _
    );
};
