t.r(n), t.d(n, { default: () => d }), t(388685);
var o = t(200651);
t(192379);
var r = t(788111),
    c = t(752342),
    i = t(886794),
    a = t(4599),
    l = t(595145);
function s(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            o = Object.keys(t);
        'function' == typeof Object.getOwnPropertySymbols &&
            (o = o.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            o.forEach(function (n) {
                var o;
                (o = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: o,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[n] = o);
            });
    }
    return e;
}
function d(e) {
    var { hideRestrictedProfile: n } = e,
        t = (function (e, n) {
            if (null == e) return {};
            var t,
                o,
                r = (function (e, n) {
                    if (null == e) return {};
                    var t,
                        o,
                        r = {},
                        c = Object.keys(e);
                    for (o = 0; o < c.length; o++) (t = c[o]), n.indexOf(t) >= 0 || (r[t] = e[t]);
                    return r;
                })(e, n);
            if (Object.getOwnPropertySymbols) {
                var c = Object.getOwnPropertySymbols(e);
                for (o = 0; o < c.length; o++) (t = c[o]), !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t]);
            }
            return r;
        })(e, ['hideRestrictedProfile']);
    let { user: d } = t,
        [u, f] = (0, r.Z)(d.id);
    return u && !n ? (0, o.jsx)(a.Z, s({ onHide: f }, t)) : d.isNonUserBot() ? (0, o.jsx)(i.Z, s({}, t)) : d.bot ? (0, o.jsx)(c.Z, s({}, t)) : (0, o.jsx)(l.Z, s({}, t));
}
