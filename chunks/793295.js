"use strict";
n.d(t, { l: () => i });
var r = n(651162);
class i {
    rankedSkuIds;
    sortedSkuIds;
    constructor(e) {
        (this.type = r.g.FEED), (this.rankedSkuIds = e.ranked_sku_ids), (this.sortedSkuIds = e.sorted_sku_ids);
    }
    static fromServer(e) {
        return new i(e);
    }
}
