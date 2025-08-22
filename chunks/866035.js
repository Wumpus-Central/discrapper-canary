t.r(n), t.d(n, { default: () => d }), t(388685);
var r = t(951288);
t(647438);
var l = t(788111),
    o = t(752342),
    i = t(886794),
    c = t(583816),
    s = t(595145);
function a(e) {
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
                l = (function (e, n) {
                    if (null == e) return {};
                    var t,
                        r,
                        l = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) (t = o[r]), n.indexOf(t) >= 0 || (l[t] = e[t]);
                    return l;
                })(e, n);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (r = 0; r < o.length; r++)
                    (t = o[r]),
                        !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (l[t] = e[t]);
            }
            return l;
        })(e, ["hideRestrictedProfile"]);
    let { user: d } = t,
        [u, f] = (0, l.Z)(d.id);
    return u && !n
        ? (0, r.jsx)(c.Z, a({ onHide: f }, t))
        : d.isNonUserBot()
          ? (0, r.jsx)(i.Z, a({}, t))
          : d.bot
            ? (0, r.jsx)(o.Z, a({}, t))
            : (0, r.jsx)(s.Z, a({}, t));
}
