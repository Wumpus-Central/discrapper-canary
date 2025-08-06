n.d(t, { Z: () => p });
var r = n(255367);
n(73800);
var i = n(442837),
    o = n(481060),
    a = n(622822),
    s = n(447003),
    l = n(496675),
    c = n(231338);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function d(e) {
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
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = _(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++)
            (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function p(e) {
    var { channel: t } = e,
        n = f(e, ["channel"]);
    let u = (0, i.e7)([l.Z], () => t.isPrivate() || l.Z.can(c.Pl.CONNECT, t));
    if (t.isDM() || t.isGroupDM()) return (0, r.jsx)(o.Csw, d({}, n));
    let _ = t.isGuildStageVoice(),
        p = !u || (0, s.Z)(t);
    return _ && p
        ? (0, r.jsx)(o.pki, d({}, n))
        : _
          ? (0, r.jsx)(o.ewx, d({}, n))
          : (0, a.aC)(t)
            ? (0, r.jsx)(o.BVY, d({}, n))
            : p
              ? (0, r.jsx)(o.gjC, d({}, n))
              : (0, r.jsx)(o.gj8, d({}, n));
}
