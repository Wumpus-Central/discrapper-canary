(r.d(e, { A: () => F }), r(323874), r(14289), r(35956));
var n = r(17928),
    i = r(803805),
    l = r(73153),
    o = r(723702),
    a = r(652215),
    s = r(375708);
let u = "webm",
    c = (0, o.isLinux)() ? "tinywebp" : u,
    d = !(function (t) {
        switch (t) {
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
        ? i.TL.IMAGE
        : i.TL.VIDEO,
    _ = null,
    f = "",
    E = "",
    I = [],
    h = [],
    S = [],
    m = [];
function g(t) {
    return t.replace(/^https?:/, "");
}
function p(t) {
    try {
        let e = new URL(t).pathname.toLowerCase();
        if (e.endsWith(".mp4") || e.endsWith(".webm")) return i.TL.VIDEO;
    } catch {}
    return i.TL.IMAGE;
}
class R extends n.Ay.Store {
    static displayName = "GIFPickerViewStore";
    getAnalyticsID() {
        return _;
    }
    getQuery() {
        return f;
    }
    getResultQuery() {
        return E;
    }
    getResultItems() {
        return I;
    }
    getTrendingCategories() {
        return h;
    }
    getSelectedFormat() {
        return c;
    }
    getSuggestions() {
        return S;
    }
    getTrendingSearchTerms() {
        return m;
    }
}
let F = new R(l.h, {
    GIF_PICKER_INITIALIZE: function (t) {
        _ = t.analyticsID;
    },
    GIF_PICKER_QUERY: function (t) {
        "" === (f = t.query) && ((E = ""), (I = []), (S = []));
    },
    GIF_PICKER_QUERY_SUCCESS: function (t) {
        if (null != t.query && f === E) return !1;
        (null != t.query && (E = t.query),
            (I = t.items.map((t) => {
                let { width: e, height: r, src: n, gif_src: i, url: l, id: o } = t;
                return { width: e, height: r, src: g(n), gifSrc: g(i), url: l, id: o, format: d };
            })));
    },
    GIF_PICKER_QUERY_FAILURE: function (t) {
        let { query: e } = t;
        if (null == e) return !1;
        ((E = e), (I = []));
    },
    GIF_PICKER_TRENDING_FETCH_SUCCESS: function (t) {
        let e = t.trendingCategories;
        h = [
            ...(null != t.trendingGIFPreview
                ? [
                      {
                          type: a.dD.TRENDING_GIFS,
                          name: s.intl.string(s.t.H6zNFz),
                          src: g(t.trendingGIFPreview.src),
                          format: p(t.trendingGIFPreview.src),
                      },
                  ]
                : []),
            ...e.map((t) => ({ ...t, src: g(t.src), type: a.dD.TRENDING_CATEGORY, format: p(t.src) })),
        ];
    },
    GIF_PICKER_SUGGESTIONS_SUCCESS: function (t) {
        let { items: e } = t;
        S = e;
    },
    GIF_PICKER_TRENDING_SEARCH_TERMS_SUCCESS: function (t) {
        let { items: e } = t;
        m = e;
    },
});
