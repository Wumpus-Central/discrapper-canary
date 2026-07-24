"use strict";
n.d(t, { A: () => S }), n(323874), n(14289), n(35956);
var i = n(17928),
    r = n(803805),
    a = n(228366),
    s = n(723702),
    l = n(652215),
    o = n(375708);
let d = "webm",
    c = (0, s.isLinux)() ? "tinywebp" : d,
    u = !(function (e) {
        switch (e) {
            case "fixed_height.mp4":
            case "fixed_height_small.mp4":
            case "fixed_width.mp4":
            case "fixed_width_small.mp4":
            case "downsized_small.mp4":
            case "original.mp4":
            case "mp4":
            case "tinymp4":
            case "nanomp4":
            case d:
            case "tinywebm":
            case "nanowebm":
                return !0;
            default:
                return !1;
        }
    })(c)
        ? r.TL.IMAGE
        : r.TL.VIDEO,
    _ = null,
    E = "",
    A = "",
    h = [],
    I = [],
    f = [],
    p = [];
function T(e) {
    return e.replace(/^https?:/, "");
}
function m(e) {
    try {
        let t = new URL(e).pathname.toLowerCase();
        if (t.endsWith(".mp4") || t.endsWith(".webm")) return r.TL.VIDEO;
    } catch {}
    return r.TL.IMAGE;
}
class g extends i.Ay.Store {
    static displayName = "GIFPickerViewStore";
    getAnalyticsID() {
        return _;
    }
    getQuery() {
        return E;
    }
    getResultQuery() {
        return A;
    }
    getResultItems() {
        return h;
    }
    getTrendingCategories() {
        return I;
    }
    getSelectedFormat() {
        return c;
    }
    getSuggestions() {
        return f;
    }
    getTrendingSearchTerms() {
        return p;
    }
}
let S = new g(a.h, {
    GIF_PICKER_INITIALIZE: function (e) {
        _ = e.analyticsID;
    },
    GIF_PICKER_QUERY: function (e) {
        "" === (E = e.query) && ((A = ""), (h = []), (f = []));
    },
    GIF_PICKER_QUERY_SUCCESS: function (e) {
        if (null != e.query && E === A) return !1;
        null != e.query && (A = e.query),
            (h = e.items.map((e) => {
                let { width: t, height: n, src: i, gif_src: r, url: a, id: s } = e;
                return { width: t, height: n, src: T(i), gifSrc: T(r), url: a, id: s, format: u };
            }));
    },
    GIF_PICKER_QUERY_FAILURE: function (e) {
        let { query: t } = e;
        if (null == t) return !1;
        (A = t), (h = []);
    },
    GIF_PICKER_TRENDING_FETCH_SUCCESS: function (e) {
        let t = e.trendingCategories;
        I = [
            ...(null != e.trendingGIFPreview
                ? [
                      {
                          type: l.dD.TRENDING_GIFS,
                          name: o.intl.string(o.t.H6zNFz),
                          src: T(e.trendingGIFPreview.src),
                          format: m(e.trendingGIFPreview.src),
                      },
                  ]
                : []),
            ...t.map((e) => ({ ...e, src: T(e.src), type: l.dD.TRENDING_CATEGORY, format: m(e.src) })),
        ];
    },
    GIF_PICKER_SUGGESTIONS_SUCCESS: function (e) {
        let { items: t } = e;
        f = t;
    },
    GIF_PICKER_TRENDING_SEARCH_TERMS_SUCCESS: function (e) {
        let { items: t } = e;
        p = t;
    },
});
