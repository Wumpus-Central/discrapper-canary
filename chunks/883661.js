n.d(t, { Z: () => f });
var r = n(200651),
    i = n(192379),
    a = n(481060),
    o = n(149203);
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
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function u(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let d = (e) => {
        switch (e) {
            case o.UX.RECENT:
                return a.T39;
            case o.UX.FAVORITES:
                return a.r7p;
            case o.UX.TOP_GUILD_EMOJI:
                return a.rm8;
            case o.UX.PEOPLE:
                return a.EO4;
            case o.UX.NATURE:
                return a.NQW;
            case o.UX.FOOD:
                return a.ED8;
            case o.UX.ACTIVITY:
                return a.iWm;
            case o.UX.TRAVEL:
                return a.QhB;
            case o.UX.OBJECTS:
                return a.Xbz;
            case o.UX.SYMBOLS:
                return a.h_8;
            case o.UX.FLAGS:
                return a.U65;
            case o.UX.PREMIUM_UPSELL:
                return a.SrA;
            case o.UX.SOUNDMOJI:
                return a.KY1;
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
