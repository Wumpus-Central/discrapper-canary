r.d(n, {
    K: function () {
        return o;
    }
});
var i = r(685816);
function a(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
class o {
    static fromServer(e) {
        return new o(e);
    }
    constructor(e) {
        a(this, 'rankedSkuIds', void 0), (this.type = i.z.FEED), (this.rankedSkuIds = e.ranked_sku_ids);
    }
}
