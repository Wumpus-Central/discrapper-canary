r.d(t, { A: () => I }), r(323874), r(14289), r(35956);
var s = r(311907),
    l = r(803805),
    n = r(73153),
    i = r(652215),
    o = r(985018);
let a = "webm",
    c = !(function (e) {
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
            case a:
            case "tinywebm":
            case "nanowebm":
                return !0;
            default:
                return !1;
        }
    })(a)
        ? l.TL.IMAGE
        : l.TL.VIDEO,
    u = null,
    d = "",
    h = "",
    m = [],
    f = [],
    p = [],
    g = [];
function E(e) {
    return e.replace(/^https?:/, "");
}
function _(e) {
    try {
        let t = new URL(e).pathname.toLowerCase();
        if (t.endsWith(".mp4") || t.endsWith(".webm")) return l.TL.VIDEO;
    } catch {}
    return l.TL.IMAGE;
}
class R extends s.Ay.Store {
    static displayName = "GIFPickerViewStore";
    getAnalyticsID() {
        return u;
    }
    getQuery() {
        return d;
    }
    getResultQuery() {
        return h;
    }
    getResultItems() {
        return m;
    }
    getTrendingCategories() {
        return f;
    }
    getSelectedFormat() {
        return a;
    }
    getSuggestions() {
        return p;
    }
    getTrendingSearchTerms() {
        return g;
    }
}
let I = new R(n.h, {
    GIF_PICKER_INITIALIZE: function (e) {
        u = e.analyticsID;
    },
    GIF_PICKER_QUERY: function (e) {
        "" === (d = e.query) && ((h = ""), (m = []), (p = []));
    },
    GIF_PICKER_QUERY_SUCCESS: function (e) {
        if (null != e.query && d === h) return !1;
        null != e.query && (h = e.query),
            (m = e.items.map((e) => {
                let { width: t, height: r, src: s, gif_src: l, url: n, id: i } = e;
                return { width: t, height: r, src: E(s), gifSrc: E(l), url: n, id: i, format: c };
            }));
    },
    GIF_PICKER_QUERY_FAILURE: function (e) {
        let { query: t } = e;
        if (null == t) return !1;
        (h = t), (m = []);
    },
    GIF_PICKER_TRENDING_FETCH_SUCCESS: function (e) {
        let t = e.trendingCategories;
        f = [
            ...(null != e.trendingGIFPreview
                ? [
                      {
                          type: i.dD.TRENDING_GIFS,
                          name: o.intl.string(o.t.H6zNFz),
                          src: E(e.trendingGIFPreview.src),
                          format: _(e.trendingGIFPreview.src),
                      },
                  ]
                : []),
            ...t.map((e) => ({ ...e, src: E(e.src), type: i.dD.TRENDING_CATEGORY, format: _(e.src) })),
        ];
    },
    GIF_PICKER_SUGGESTIONS_SUCCESS: function (e) {
        let { items: t } = e;
        p = t;
    },
    GIF_PICKER_TRENDING_SEARCH_TERMS_SUCCESS: function (e) {
        let { items: t } = e;
        g = t;
    },
});
