t.r(n), t.d(n, { default: () => d }), t(388685);
var r = t(951288);
t(647438);
var o = t(788111),
    l = t(752342),
    i = t(886794),
    c = t(858970),
    a = t(595145);
function s(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            r = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            r.forEach(function (n) {
                var r;
                (r = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[n] = r);
            });
    }
    return e;
}
function d(e) {
    var { hideRestrictedProfile: n } = e,
        t = (function (e, n) {
            if (null == e) return {};
            var t,
                r,
                o = (function (e, n) {
                    if (null == e) return {};
                    var t,
                        r,
                        o = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (t = l[r]), n.indexOf(t) >= 0 || (o[t] = e[t]);
                    return o;
                })(e, n);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++)
                    (t = l[r]),
                        !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t]);
            }
            return o;
        })(e, ["hideRestrictedProfile"]);
    let { user: d } = t,
        [u, f] = (0, o.Z)(d.id);
    return u && !n
        ? (0, r.jsx)(c.Z, s({ onHide: f }, t))
        : d.isNonUserBot()
          ? (0, r.jsx)(i.Z, s({}, t))
          : d.bot
            ? (0, r.jsx)(l.Z, s({}, t))
            : (0, r.jsx)(a.Z, s({}, t));
}
