let r;
n.d(t, {
    A: () => O,
}),
    n(896048);
var i,
    a = n(311907),
    s = n(73153),
    o = n(83971);

function l(e, t, n) {
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
let c = new Map(),
    u = new Map(),
    d = new Map(),
    f = !1;

function p(e) {
    e(c), (c = new Map(c));
}

function _(e) {
    let { feedId: t, feed: n } = e;
    p((e) => e.set(t, n)), d.set(t, new Date());
}

function h(e) {
    let { feedId: t, state: n } = e;
    u.set(t, n);
}

function m() {
    c = new Map();
}

function g(e) {
    let { feedId: t } = e;
    if (!c.has(t)) return !1;
    p((e) => e.delete(t));
}

function E(e) {
    let { filters: t } = e;
    r = t;
}

function b() {
    f = !f;
}
class y extends (i = a.Ay.Store) {
    getFeeds() {
        return c;
    }
    getFeed(e) {
        return c.get(e);
    }
    getFeedState(e) {
        return u.get(e);
    }
    getLastFeedFetchDate(e) {
        return d.get(e);
    }
    getFilters() {
        return r;
    }
    getFeedRequestId(e) {
        var t;
        return null == (t = this.getFeed(e)) ? void 0 : t.request_id;
    }
    getDebugImpressionCappingDisabled() {
        return f;
    }
    getMatchingInboxEntry(e) {
        let { activity: t, userId: n, feedId: r } = e,
            i = this.getFeed(r);
        if (null == i || null == t) return;
        let a = i.entries.reduce((e, t) => (t.content.author_id === n ? [...e, t.content] : [...e]), []);
        return (0, o.nU)(a, t);
    }
}
l(y, "displayName", "ContentInventoryStore");
let O = new y(s.h, {
    CONNECTION_OPEN: m,
    CONTENT_INVENTORY_SET_FEED: _,
    CONTENT_INVENTORY_SET_FEED_STATE: h,
    CONTENT_INVENTORY_SET_FILTERS: E,
    CONTENT_INVENTORY_CLEAR_FEED: g,
    CONTENT_INVENTORY_DEBUG_TOGGLE_IMPRESSION_CAPPING: b,
});
