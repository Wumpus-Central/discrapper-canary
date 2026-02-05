"use strict";
n.d(t, { A: () => F }), n(323874), n(14289), n(35956);
var r = n(311907),
    i = n(803805),
    a = n(73153),
    s = n(652215),
    o = n(985018);
let l = "mp4",
    u = "tinymp4",
    c = "nanomp4",
    d = "webm",
    _ = "tinywebm",
    f = "nanowebm",
    p = "fixed_height.mp4",
    h = "fixed_height_small.mp4",
    m = "fixed_width.mp4",
    g = "fixed_width_small.mp4",
    E = "downsized_small.mp4",
    A = "original.mp4",
    I = d,
    T = L(I) ? i.TL.VIDEO : i.TL.IMAGE,
    y = null,
    S = "",
    v = "",
    C = [],
    b = [],
    N = [],
    R = [];
function O(e) {
    y = e.analyticsID;
}
function D(e) {
    "" === (S = e.query) && ((v = ""), (C = []), (N = []));
}
function L(e) {
    switch (e) {
        case p:
        case h:
        case m:
        case g:
        case E:
        case A:
        case l:
        case u:
        case c:
        case d:
        case _:
        case f:
            return !0;
        default:
            return !1;
    }
}
function w(e) {
    return e.replace(/^https?:/, "");
}
function x(e) {
    try {
        let t = new URL(e).pathname.toLowerCase();
        if (t.endsWith(".mp4") || t.endsWith(".webm")) return i.TL.VIDEO;
    } catch {}
    return i.TL.IMAGE;
}
function P(e) {
    if (null != e.query && S === v) return !1;
    null != e.query && (v = e.query),
        (C = e.items.map((e) => {
            let { width: t, height: n, src: r, gif_src: i, url: a, id: s } = e;
            return { width: t, height: n, src: w(r), gifSrc: w(i), url: a, id: s, format: T };
        }));
}
function M(e) {
    let { query: t } = e;
    if (null == t) return !1;
    (v = t), (C = []);
}
function k(e) {
    let t = e.trendingCategories;
    b = [
        ...(null != e.trendingGIFPreview
            ? [
                  {
                      type: s.dD.TRENDING_GIFS,
                      name: o.intl.string(o.t.H6zNFz),
                      src: w(e.trendingGIFPreview.src),
                      format: x(e.trendingGIFPreview.src),
                  },
              ]
            : []),
        ...t.map((e) => ({ ...e, src: w(e.src), type: s.dD.TRENDING_CATEGORY, format: x(e.src) })),
    ];
}
function U(e) {
    let { items: t } = e;
    N = t;
}
function G(e) {
    let { items: t } = e;
    R = t;
}
class V extends r.Ay.Store {
    static displayName = "GIFPickerViewStore";
    getAnalyticsID() {
        return y;
    }
    getQuery() {
        return S;
    }
    getResultQuery() {
        return v;
    }
    getResultItems() {
        return C;
    }
    getTrendingCategories() {
        return b;
    }
    getSelectedFormat() {
        return I;
    }
    getSuggestions() {
        return N;
    }
    getTrendingSearchTerms() {
        return R;
    }
}
let F = new V(a.h, {
    GIF_PICKER_INITIALIZE: O,
    GIF_PICKER_QUERY: D,
    GIF_PICKER_QUERY_SUCCESS: P,
    GIF_PICKER_QUERY_FAILURE: M,
    GIF_PICKER_TRENDING_FETCH_SUCCESS: k,
    GIF_PICKER_SUGGESTIONS_SUCCESS: U,
    GIF_PICKER_TRENDING_SEARCH_TERMS_SUCCESS: G,
});
