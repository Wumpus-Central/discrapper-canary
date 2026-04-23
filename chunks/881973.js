a.d(t, { A: () => l });
var s = a(449054);
class l {
    guildIds = new Set();
    categoryId;
    constructor(e) {
        this.categoryId = e;
    }
    markAsSeen(e, t, a) {
        this.categoryId !== e && ((this.categoryId = e), this.flushSeenGuilds(a)), this.guildIds.add(t);
    }
    flushSeenGuilds(e) {
        this.guildIds.size > 0 && (s.PU(e, Array.from(this.guildIds)), this.guildIds.clear());
    }
}
