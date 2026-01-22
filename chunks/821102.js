n.d(t, {
    A: () => W,
}),
    n(747238),
    n(812715),
    n(896048),
    n(693327),
    n(554719),
    n(680155),
    n(323874),
    n(14289),
    n(35956);
var r,
    i = n(311907),
    a = n(803805),
    s = n(73153),
    o = n(652215),
    l = n(985018);

function c(e, t, n) {
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

function u(e) {
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
                c(e, t, n[t]);
            });
    }
    return e;
}

function d(e, t) {
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

function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : d(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let p = "mp4",
    _ = "tinymp4",
    h = "nanomp4",
    m = "webm",
    g = "tinywebm",
    E = "nanowebm",
    b = "fixed_height.mp4",
    y = "fixed_height_small.mp4",
    O = "fixed_width.mp4",
    A = "fixed_width_small.mp4",
    v = "downsized_small.mp4",
    S = "original.mp4",
    I = m,
    T = M(I) ? a.TL.VIDEO : a.TL.IMAGE,
    C = null,
    N = "",
    R = "",
    w = [],
    P = [],
    D = [],
    x = [];

function L(e) {
    C = e.analyticsID;
}

function j(e) {
    "" === (N = e.query) && ((R = ""), (w = []), (D = []));
}

function M(e) {
    switch (e) {
        case b:
        case y:
        case O:
        case A:
        case v:
        case S:
        case p:
        case _:
        case h:
        case m:
        case g:
        case E:
            return !0;
        default:
            return !1;
    }
}

function k(e) {
    return e.replace(/^https?:/, "");
}

function U(e) {
    try {
        let t = new URL(e).pathname.toLowerCase();
        if (t.endsWith(".mp4") || t.endsWith(".webm")) return a.TL.VIDEO;
    } catch (e) {}
    return a.TL.IMAGE;
}

function G(e) {
    if (null != e.query && N === R) return !1;
    null != e.query && (R = e.query),
        (w = e.items.map((e) => {
            let { width: t, height: n, src: r, gif_src: i, url: a, id: s } = e;
            return {
                width: t,
                height: n,
                src: k(r),
                gifSrc: k(i),
                url: a,
                id: s,
                format: T,
            };
        }));
}

function V(e) {
    let { query: t } = e;
    if (null == t) return !1;
    (R = t), (w = []);
}

function F(e) {
    let t = e.trendingCategories;
    P = [
        ...(null != e.trendingGIFPreview
            ? [
                  {
                      type: o.dD.TRENDING_GIFS,
                      name: l.intl.string(l.t.H6zNFz),
                      src: k(e.trendingGIFPreview.src),
                      format: U(e.trendingGIFPreview.src),
                  },
              ]
            : []),
        ...t.map((e) =>
            f(u({}, e), {
                src: k(e.src),
                type: o.dD.TRENDING_CATEGORY,
                format: U(e.src),
            }),
        ),
    ];
}

function B(e) {
    let { items: t } = e;
    D = t;
}

function H(e) {
    let { items: t } = e;
    x = t;
}
class Y extends (r = i.Ay.Store) {
    getAnalyticsID() {
        return C;
    }
    getQuery() {
        return N;
    }
    getResultQuery() {
        return R;
    }
    getResultItems() {
        return w;
    }
    getTrendingCategories() {
        return P;
    }
    getSelectedFormat() {
        return I;
    }
    getSuggestions() {
        return D;
    }
    getTrendingSearchTerms() {
        return x;
    }
}
c(Y, "displayName", "GIFPickerViewStore");
let W = new Y(s.h, {
    GIF_PICKER_INITIALIZE: L,
    GIF_PICKER_QUERY: j,
    GIF_PICKER_QUERY_SUCCESS: G,
    GIF_PICKER_QUERY_FAILURE: V,
    GIF_PICKER_TRENDING_FETCH_SUCCESS: F,
    GIF_PICKER_SUGGESTIONS_SUCCESS: B,
    GIF_PICKER_TRENDING_SEARCH_TERMS_SUCCESS: H,
});
