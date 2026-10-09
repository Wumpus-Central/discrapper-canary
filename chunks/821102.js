(r.d(t, { A: () => F }), r(323874), r(14289), r(35956));
var n = r(17928),
    i = r(803805),
    l = r(73153),
    o = r(723702),
    a = r(652215),
    s = r(660183);
let u = "webm",
    c = (0, o.isLinux)() ? "tinywebp" : u,
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
        ? i.TL.IMAGE
        : i.TL.VIDEO,
    _ = null,
    f = "",
    E = "",
    I = [],
    h = [],
    S = [],
    m = [];
function g(e) {
    return e.replace(/^https?:/, "");
}
function p(e) {
    try {
        let t = new URL(e).pathname.toLowerCase();
        if (t.endsWith(".mp4") || t.endsWith(".webm")) return i.TL.VIDEO;
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
    GIF_PICKER_INITIALIZE: function (e) {
        _ = e.analyticsID;
    },
    GIF_PICKER_QUERY: function (e) {
        "" === (f = e.query) && ((E = ""), (I = []), (S = []));
    },
    GIF_PICKER_QUERY_SUCCESS: function (e) {
        if (null != e.query && f === E) return !1;
        (null != e.query && (E = e.query),
            (I = e.items.map((e) => {
                let { width: t, height: r, src: n, gif_src: i, url: l, id: o } = e;
                return { width: t, height: r, src: g(n), gifSrc: g(i), url: l, id: o, format: d };
            })));
    },
    GIF_PICKER_QUERY_FAILURE: function (e) {
        let { query: t } = e;
        if (null == t) return !1;
        ((E = t), (I = []));
    },
    GIF_PICKER_TRENDING_FETCH_SUCCESS: function (e) {
        let t = e.trendingCategories;
        h = [
            ...(null != e.trendingGIFPreview
                ? [
                      {
                          type: a.dD.TRENDING_GIFS,
                          name: s.intl.string(s.t.H6zNFz),
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
        S = t;
    },
    GIF_PICKER_TRENDING_SEARCH_TERMS_SUCCESS: function (e) {
        let { items: t } = e;
        m = t;
    },
});
