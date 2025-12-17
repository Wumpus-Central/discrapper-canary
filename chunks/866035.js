t.r(n), t.d(n, { default: () => d }), t(388685);
var l = t(54381);
t(473749);
var i = t(788111),
    o = t(752342),
    r = t(886794),
    a = t(858970),
    c = t(595145);
function s(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            l = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            l.forEach(function (n) {
                var l;
                (l = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[n] = l);
            });
    }
    return e;
}
function d(e) {
    var { hideRestrictedProfile: n } = e,
        t = (function (e, n) {
            if (null == e) return {};
            var t,
                l,
                i = (function (e, n) {
                    if (null == e) return {};
                    var t,
                        l,
                        i = {},
                        o = Object.keys(e);
                    for (l = 0; l < o.length; l++) (t = o[l]), n.indexOf(t) >= 0 || (i[t] = e[t]);
                    return i;
                })(e, n);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (l = 0; l < o.length; l++)
                    (t = o[l]),
                        !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t]);
            }
            return i;
        })(e, ["hideRestrictedProfile"]);
    let { user: d } = t,
        [u, f] = (0, i.Z)(d.id);
    return u && !n
        ? (0, l.jsx)(a.Z, s({ onHide: f }, t))
        : d.isNonUserBot()
          ? (0, l.jsx)(r.Z, s({}, t))
          : d.bot
            ? (0, l.jsx)(o.Z, s({}, t))
            : (0, l.jsx)(c.Z, s({}, t));
}
