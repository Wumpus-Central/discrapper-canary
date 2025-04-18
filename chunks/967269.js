n.d(t, {
    Kg: () => s,
    Rp: () => l,
    n: () => i
});
var r = n(192379);
function i(e, t) {
    var n = function (e) {
            return t && (0, r.isValidElement)(e) ? t(e) : e;
        },
        i = Object.create(null);
    return (
        e &&
            r.Children.map(e, function (e) {
                return e;
            }).forEach(function (e) {
                i[e.key] = n(e);
            }),
        i
    );
}
function a(e, t) {
    function n(n) {
        return n in t ? t[n] : e[n];
    }
    (e = e || {}), (t = t || {});
    var r,
        i = Object.create(null),
        a = [];
    for (var o in e) o in t ? a.length && ((i[o] = a), (a = [])) : a.push(o);
    var s = {};
    for (var l in t) {
        if (i[l])
            for (r = 0; r < i[l].length; r++) {
                var c = i[l][r];
                s[i[l][r]] = n(c);
            }
        s[l] = n(l);
    }
    for (r = 0; r < a.length; r++) s[a[r]] = n(a[r]);
    return s;
}
function o(e, t, n) {
    return null != n[t] ? n[t] : e.props[t];
}
function s(e, t) {
    return i(e.children, function (n) {
        return (0, r.cloneElement)(n, {
            onExited: t.bind(null, n),
            in: !0,
            appear: o(n, 'appear', e),
            enter: o(n, 'enter', e),
            exit: o(n, 'exit', e)
        });
    });
}
function l(e, t, n) {
    var s = i(e.children),
        l = a(t, s);
    return (
        Object.keys(l).forEach(function (i) {
            var a = l[i];
            if ((0, r.isValidElement)(a)) {
                var c = i in t,
                    u = i in s,
                    d = t[i],
                    f = (0, r.isValidElement)(d) && !d.props.in;
                u && (!c || f)
                    ? (l[i] = (0, r.cloneElement)(a, {
                          onExited: n.bind(null, a),
                          in: !0,
                          exit: o(a, 'exit', e),
                          enter: o(a, 'enter', e)
                      }))
                    : u || !c || f
                      ? u &&
                        c &&
                        (0, r.isValidElement)(d) &&
                        (l[i] = (0, r.cloneElement)(a, {
                            onExited: n.bind(null, a),
                            in: d.props.in,
                            exit: o(a, 'exit', e),
                            enter: o(a, 'enter', e)
                        }))
                      : (l[i] = (0, r.cloneElement)(a, { in: !1 }));
            }
        }),
        l
    );
}
