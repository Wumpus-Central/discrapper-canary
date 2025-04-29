var r = n(192379),
    i = n(615938);
function o(e, t) {
    return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
}
var a = 'function' == typeof Object.is ? Object.is : o,
    s = i.useSyncExternalStore,
    l = r.useRef,
    c = r.useEffect,
    u = r.useMemo,
    d = r.useDebugValue;
t.useSyncExternalStoreWithSelector = function (e, t, n, r, i) {
    var o = l(null);
    if (null === o.current) {
        var f = {
            hasValue: !1,
            value: null
        };
        o.current = f;
    } else f = o.current;
    var _ = s(
        e,
        (o = u(
            function () {
                function e(e) {
                    if (!l) {
                        if (((l = !0), (o = e), (e = r(e)), void 0 !== i && f.hasValue)) {
                            var t = f.value;
                            if (i(t, e)) return (s = t);
                        }
                        return (s = e);
                    }
                    if (((t = s), a(o, e))) return t;
                    var n = r(e);
                    return void 0 !== i && i(t, n) ? ((o = e), t) : ((o = e), (s = n));
                }
                var o,
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
        o[1]
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
