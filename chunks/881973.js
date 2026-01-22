n.d(t, {
    A: () => l,
}),
    n(896048);
var r = n(449054);

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
class l {
    markAsSeen(e, t, n) {
        this.categoryId !== e && ((this.categoryId = e), this.flushSeenGuilds(n)), this.guildIds.add(t);
    }
    flushSeenGuilds(e) {
        this.guildIds.size > 0 && (r.PU(e, Array.from(this.guildIds)), this.guildIds.clear());
    }
    constructor(e) {
        i(this, "guildIds", new Set()), i(this, "categoryId", void 0), (this.categoryId = e);
    }
}
