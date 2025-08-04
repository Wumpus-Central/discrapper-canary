(n.r(t), n.d(t, { default: () => u }), n(388685));
var r = n(255367);
n(73800);
var o = n(788111),
    i = n(752342),
    l = n(886794),
    a = n(858970),
    c = n(595145);
function s(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function u(e) {
    var { hideRestrictedProfile: t } = e,
        n = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                o = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) ((n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]));
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++) ((n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
            }
            return o;
        })(e, ['hideRestrictedProfile']);
    let { user: u } = n,
        [d, f] = (0, o.Z)(u.id);
    return d && !t ? (0, r.jsx)(a.Z, s({ onHide: f }, n)) : u.isNonUserBot() ? (0, r.jsx)(l.Z, s({}, n)) : u.bot ? (0, r.jsx)(i.Z, s({}, n)) : (0, r.jsx)(c.Z, s({}, n));
}
