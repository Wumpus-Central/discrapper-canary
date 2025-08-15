n.r(t), n.d(t, { default: () => d }), n(388685);
var r = n(951288);
n(647438);
var i = n(788111),
    l = n(752342),
    o = n(886794),
    a = n(858970),
    c = n(595145);
function s(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function d(e) {
    var { hideRestrictedProfile: t } = e,
        n = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++)
                    (n = l[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ["hideRestrictedProfile"]);
    let { user: d } = n,
        [u, f] = (0, i.Z)(d.id);
    return u && !t
        ? (0, r.jsx)(a.Z, s({ onHide: f }, n))
        : d.isNonUserBot()
          ? (0, r.jsx)(o.Z, s({}, n))
          : d.bot
            ? (0, r.jsx)(l.Z, s({}, n))
            : (0, r.jsx)(c.Z, s({}, n));
}
