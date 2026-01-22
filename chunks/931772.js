n.d(t, {
    A: () => _,
}),
    n(733351);
var r = n(440745),
    i = n.n(r),
    a = n(317097),
    s = n(315069);

function o(e, t, n) {
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

function l(e) {
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
                o(e, t, n[t]);
            });
    }
    return e;
}

function c(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function d(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = f(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let p = (e) =>
    null == e
        ? e
        : {
              backgroundColors: e.background_colors.map((e) => i()((0, a.Hl)(e))),
              buttonColors: e.button_colors.map((e) => i()((0, a.Hl)(e))),
              confettiColors: e.confetti_colors.map((e) => i()((0, a.Hl)(e))),
          };
class _ extends s.A {
    static fromServer(e) {
        let { store_listing_id: t, sku_id: n, unpublished_at: r, styles: i } = e,
            a = d(e, ["store_listing_id", "sku_id", "unpublished_at", "styles"]),
            s = null != r ? new Date(r) : null;
        return new _(
            u(l({}, a), {
                storeListingId: t,
                skuId: n,
                unpublishedAt: s,
                styles: p(i),
            }),
        );
    }
    constructor(e) {
        var t;
        super(),
            o(this, "storeListingId", void 0),
            o(this, "skuId", void 0),
            o(this, "name", void 0),
            o(this, "summary", void 0),
            o(this, "unpublishedAt", void 0),
            o(this, "styles", void 0),
            (this.storeListingId = e.storeListingId),
            (this.skuId = e.skuId),
            (this.name = e.name),
            (this.summary = null == (t = e.summary) ? void 0 : t.trim()),
            (this.unpublishedAt = e.unpublishedAt),
            (this.styles = e.styles);
    }
}
