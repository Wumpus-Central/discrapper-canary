n.d(t, { K: () => a });
var i = n(685816);
function r(e, t, n) {
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
class a {
    static fromServer(e) {
        return new a(e);
    }
    constructor(e) {
        r(this, 'rankedSkuIds', void 0), (this.type = i.z.FEED), (this.rankedSkuIds = e.ranked_sku_ids);
    }
}
