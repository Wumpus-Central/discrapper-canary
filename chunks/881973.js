n.d(t, { A: () => r });
var i = n(449054);
class r {
    guildIds = new Set();
    categoryId;
    constructor(e) {
        this.categoryId = e;
    }
    markAsSeen(e, t, n) {
        this.categoryId !== e && ((this.categoryId = e), this.flushSeenGuilds(n)), this.guildIds.add(t);
    }
    flushSeenGuilds(e) {
        this.guildIds.size > 0 && (i.PU(e, Array.from(this.guildIds)), this.guildIds.clear());
    }
}
