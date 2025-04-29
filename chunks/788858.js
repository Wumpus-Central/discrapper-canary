n.d(t, { Z: () => _ });
var r = n(200651);
n(192379);
var i = n(442837),
    o = n(481060),
    a = n(447003),
    s = n(496675),
    l = n(231338);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                c(e, t, n[t]);
            });
    }
    return e;
}
function d(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = f(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function _(e) {
    var { channel: t } = e,
        n = d(e, ['channel']);
    let c = (0, i.e7)([s.Z], () => t.isPrivate() || s.Z.can(l.Pl.CONNECT, t));
    if (t.isDM() || t.isGroupDM()) return (0, r.jsx)(o.Csw, u({}, n));
    let f = t.isGuildStageVoice(),
        _ = !c || (0, a.Z)(t);
    return f && _ ? (0, r.jsx)(o.pki, u({}, n)) : f ? (0, r.jsx)(o.ewx, u({}, n)) : t.isNSFW() ? (0, r.jsx)(o.BVY, u({}, n)) : _ ? (0, r.jsx)(o.gjC, u({}, n)) : (0, r.jsx)(o.gj8, u({}, n));
}
