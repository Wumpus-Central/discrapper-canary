"use strict";
n.d(t, { A: () => I }), n(323874), n(14289), n(35956);
var i = n(17928),
    r = n(803805),
    s = n(228366),
    a = n(652215),
    o = n(985018);
let l = "webm",
    d = !(function (e) {
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
            case l:
            case "tinywebm":
            case "nanowebm":
                return !0;
            default:
                return !1;
        }
    })(l)
        ? r.TL.IMAGE
        : r.TL.VIDEO,
    _ = null,
    u = "",
    c = "",
    E = [],
    h = [],
    m = [],
    f = [];
function g(e) {
    return e.replace(/^https?:/, "");
}
function p(e) {
    try {
        let t = new URL(e).pathname.toLowerCase();
        if (t.endsWith(".mp4") || t.endsWith(".webm")) return r.TL.VIDEO;
    } catch {}
    return r.TL.IMAGE;
}
class A extends i.Ay.Store {
    static displayName = "GIFPickerViewStore";
    getAnalyticsID() {
        return _;
    }
    getQuery() {
        return u;
    }
    getResultQuery() {
        return c;
    }
    getResultItems() {
        return E;
    }
    getTrendingCategories() {
        return h;
    }
    getSelectedFormat() {
        return l;
    }
    getSuggestions() {
        return m;
    }
    getTrendingSearchTerms() {
        return f;
    }
}
let I = new A(s.h, {
    GIF_PICKER_INITIALIZE: function (e) {
        _ = e.analyticsID;
    },
    GIF_PICKER_QUERY: function (e) {
        "" === (u = e.query) && ((c = ""), (E = []), (m = []));
    },
    GIF_PICKER_QUERY_SUCCESS: function (e) {
        if (null != e.query && u === c) return !1;
        null != e.query && (c = e.query),
            (E = e.items.map((e) => {
                let { width: t, height: n, src: i, gif_src: r, url: s, id: a } = e;
                return { width: t, height: n, src: g(i), gifSrc: g(r), url: s, id: a, format: d };
            }));
    },
    GIF_PICKER_QUERY_FAILURE: function (e) {
        let { query: t } = e;
        if (null == t) return !1;
        (c = t), (E = []);
    },
    GIF_PICKER_TRENDING_FETCH_SUCCESS: function (e) {
        let t = e.trendingCategories;
        h = [
            ...(null != e.trendingGIFPreview
                ? [
                      {
                          type: a.dD.TRENDING_GIFS,
                          name: o.intl.string(o.t.H6zNFz),
                          src: g(e.trendingGIFPreview.src),
                          format: p(e.trendingGIFPreview.src),
                      },
                  ]
                : []),
            ...t.map((e) => ({ ...e, src: g(e.src), type: a.dD.TRENDING_CATEGORY, format: p(e.src) })),
        ];
    },
    GIF_PICKER_SUGGESTIONS_SUCCESS: function (e) {
        let { items: t } = e;
        m = t;
    },
    GIF_PICKER_TRENDING_SEARCH_TERMS_SUCCESS: function (e) {
        let { items: t } = e;
        f = t;
    },
});
