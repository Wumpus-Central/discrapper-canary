n.d(t, { K: () => o });
var r = n(685816);
function i(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class o {
    static fromServer(e) {
        return new o(e);
    }
    constructor(e) {
        i(this, 'rankedSkuIds', void 0), (this.type = r.z.FEED), (this.rankedSkuIds = e.ranked_sku_ids);
    }
}
