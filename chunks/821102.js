r.d(t, { A: () => S }), r(323874), r(14289), r(35956);
var s = r(17928),
    n = r(803805),
    l = r(228366),
    i = r(723702),
    a = r(652215),
    o = r(375708);
let u = "webm",
    c = (0, i.isLinux)() ? "tinywebp" : u,
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
            case u:
            case "tinywebm":
            case "nanowebm":
                return !0;
            default:
                return !1;
        }
    })(c)
        ? n.TL.IMAGE
        : n.TL.VIDEO,
    h = null,
    m = "",
    p = "",
    g = [],
    f = [],
    I = [],
    R = [];
function E(e) {
    return e.replace(/^https?:/, "");
}
function _(e) {
    try {
        let t = new URL(e).pathname.toLowerCase();
        if (t.endsWith(".mp4") || t.endsWith(".webm")) return n.TL.VIDEO;
    } catch {}
    return n.TL.IMAGE;
}
class y extends s.Ay.Store {
    static displayName = "GIFPickerViewStore";
    getAnalyticsID() {
        return h;
    }
    getQuery() {
        return m;
    }
    getResultQuery() {
        return p;
    }
    getResultItems() {
        return g;
    }
    getTrendingCategories() {
        return f;
    }
    getSelectedFormat() {
        return c;
    }
    getSuggestions() {
        return I;
    }
    getTrendingSearchTerms() {
        return R;
    }
}
let S = new y(l.h, {
    GIF_PICKER_INITIALIZE: function (e) {
        h = e.analyticsID;
    },
    GIF_PICKER_QUERY: function (e) {
        "" === (m = e.query) && ((p = ""), (g = []), (I = []));
    },
    GIF_PICKER_QUERY_SUCCESS: function (e) {
        if (null != e.query && m === p) return !1;
        null != e.query && (p = e.query),
            (g = e.items.map((e) => {
                let { width: t, height: r, src: s, gif_src: n, url: l, id: i } = e;
                return { width: t, height: r, src: E(s), gifSrc: E(n), url: l, id: i, format: d };
            }));
    },
    GIF_PICKER_QUERY_FAILURE: function (e) {
        let { query: t } = e;
        if (null == t) return !1;
        (p = t), (g = []);
    },
    GIF_PICKER_TRENDING_FETCH_SUCCESS: function (e) {
        let t = e.trendingCategories;
        f = [
            ...(null != e.trendingGIFPreview
                ? [
                      {
                          type: a.dD.TRENDING_GIFS,
                          name: o.intl.string(o.t.H6zNFz),
                          src: E(e.trendingGIFPreview.src),
                          format: _(e.trendingGIFPreview.src),
                      },
                  ]
                : []),
            ...t.map((e) => ({ ...e, src: E(e.src), type: a.dD.TRENDING_CATEGORY, format: _(e.src) })),
        ];
    },
    GIF_PICKER_SUGGESTIONS_SUCCESS: function (e) {
        let { items: t } = e;
        I = t;
    },
    GIF_PICKER_TRENDING_SEARCH_TERMS_SUCCESS: function (e) {
        let { items: t } = e;
        R = t;
    },
});
