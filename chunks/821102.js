r.d(t, { A: () => _ }), r(323874), r(14289), r(35956);
var s = r(17928),
    n = r(803805),
    l = r(228366),
    i = r(652215),
    a = r(985018);
let o = "webm",
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
            case o:
            case "tinywebm":
            case "nanowebm":
                return !0;
            default:
                return !1;
        }
    })(o)
        ? n.TL.IMAGE
        : n.TL.VIDEO,
    d = null,
    c = "",
    h = "",
    m = [],
    p = [],
    f = [],
    g = [];
function I(e) {
    return e.replace(/^https?:/, "");
}
function E(e) {
    try {
        let t = new URL(e).pathname.toLowerCase();
        if (t.endsWith(".mp4") || t.endsWith(".webm")) return n.TL.VIDEO;
    } catch {}
    return n.TL.IMAGE;
}
class R extends s.Ay.Store {
    static displayName = "GIFPickerViewStore";
    getAnalyticsID() {
        return d;
    }
    getQuery() {
        return c;
    }
    getResultQuery() {
        return h;
    }
    getResultItems() {
        return m;
    }
    getTrendingCategories() {
        return p;
    }
    getSelectedFormat() {
        return o;
    }
    getSuggestions() {
        return f;
    }
    getTrendingSearchTerms() {
        return g;
    }
}
let _ = new R(l.h, {
    GIF_PICKER_INITIALIZE: function (e) {
        d = e.analyticsID;
    },
    GIF_PICKER_QUERY: function (e) {
        "" === (c = e.query) && ((h = ""), (m = []), (f = []));
    },
    GIF_PICKER_QUERY_SUCCESS: function (e) {
        if (null != e.query && c === h) return !1;
        null != e.query && (h = e.query),
            (m = e.items.map((e) => {
                let { width: t, height: r, src: s, gif_src: n, url: l, id: i } = e;
                return { width: t, height: r, src: I(s), gifSrc: I(n), url: l, id: i, format: u };
            }));
    },
    GIF_PICKER_QUERY_FAILURE: function (e) {
        let { query: t } = e;
        if (null == t) return !1;
        (h = t), (m = []);
    },
    GIF_PICKER_TRENDING_FETCH_SUCCESS: function (e) {
        let t = e.trendingCategories;
        p = [
            ...(null != e.trendingGIFPreview
                ? [
                      {
                          type: i.dD.TRENDING_GIFS,
                          name: a.intl.string(a.t.H6zNFz),
                          src: I(e.trendingGIFPreview.src),
                          format: E(e.trendingGIFPreview.src),
                      },
                  ]
                : []),
            ...t.map((e) => ({ ...e, src: I(e.src), type: i.dD.TRENDING_CATEGORY, format: E(e.src) })),
        ];
    },
    GIF_PICKER_SUGGESTIONS_SUCCESS: function (e) {
        let { items: t } = e;
        f = t;
    },
    GIF_PICKER_TRENDING_SEARCH_TERMS_SUCCESS: function (e) {
        let { items: t } = e;
        g = t;
    },
});
