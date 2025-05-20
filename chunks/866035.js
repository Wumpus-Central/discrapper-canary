n.r(t), n.d(t, { default: () => d }), n(388685);
var o = n(255367);
n(73800);
var r = n(788111),
    c = n(752342),
    i = n(886794),
    a = n(858970),
    l = n(595145);
function s(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            o = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (o = o.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            o.forEach(function (t) {
                var o;
                (o = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: o,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = o);
            });
    }
    return e;
}
function d(e) {
    var { hideRestrictedProfile: t } = e,
        n = (function (e, t) {
            if (null == e) return {};
            var n,
                o,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        o,
                        r = {},
                        c = Object.keys(e);
                    for (o = 0; o < c.length; o++) (n = c[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var c = Object.getOwnPropertySymbols(e);
                for (o = 0; o < c.length; o++) (n = c[o]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, ['hideRestrictedProfile']);
    let { user: d } = n,
        [u, f] = (0, r.Z)(d.id);
    return u && !t ? (0, o.jsx)(a.Z, s({ onHide: f }, n)) : d.isNonUserBot() ? (0, o.jsx)(i.Z, s({}, n)) : d.bot ? (0, o.jsx)(c.Z, s({}, n)) : (0, o.jsx)(l.Z, s({}, n));
}
