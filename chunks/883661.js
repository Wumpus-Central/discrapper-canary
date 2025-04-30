n.d(t, { Z: () => f });
var r = n(200651),
    i = n(192379),
    o = n(481060),
    a = n(149203);
function s(e, t, n) {
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
function l(e) {
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
                s(e, t, n[t]);
            });
    }
    return e;
}
function c(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = u(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function u(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let d = (e) => {
        switch (e) {
            case a.UX.RECENT:
                return o.T39;
            case a.UX.FAVORITES:
                return o.r7p;
            case a.UX.TOP_GUILD_EMOJI:
                return o.rm8;
            case a.UX.PEOPLE:
                return o.EO4;
            case a.UX.NATURE:
                return o.NQW;
            case a.UX.FOOD:
                return o.ED8;
            case a.UX.ACTIVITY:
                return o.iWm;
            case a.UX.TRAVEL:
                return o.QhB;
            case a.UX.OBJECTS:
                return o.Xbz;
            case a.UX.SYMBOLS:
                return o.h_8;
            case a.UX.FLAGS:
                return o.U65;
            case a.UX.PREMIUM_UPSELL:
                return o.SrA;
            case a.UX.SOUNDMOJI:
                return o.KY1;
            default:
                return;
        }
    },
    f = i.memo(function (e) {
        var { categoryId: t } = e,
            n = c(e, ['categoryId']);
        let i = d(t);
        return null == i ? null : (0, r.jsx)(i, l({ color: 'currentColor' }, n));
    });
