n.d(t, {
    l: () => a,
});
var r = n(651162);

function i(e, t, n) {
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
class a {
    static fromServer(e) {
        return new a(e);
    }
    constructor(e) {
        i(this, "rankedSkuIds", void 0),
            i(this, "sortedSkuIds", void 0),
            (this.type = r.g.FEED),
            (this.rankedSkuIds = e.ranked_sku_ids),
            (this.sortedSkuIds = e.sorted_sku_ids);
    }
}
