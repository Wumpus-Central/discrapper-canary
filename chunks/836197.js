n.d(t, {
    Sr: () => l,
    Wc: () => c,
    zy: () => u,
});
var r = n(624238),
    i = n(296009),
    a = n(86419);
function o(e, t, n) {
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
let s = [i.l.CURRENT_GAMES, i.l.FAVORITE_GAMES, i.l.WANT_TO_PLAY_GAMES, i.l.PLAYED_GAMES];
function l(e) {
    return s.includes(e);
}
function c(e) {
    return e instanceof u;
}
class u {
    toSubmission() {
        let e = (e) => ({
            game_id: e.applicationId,
            comment: e.comment,
            tags: e.tags,
        });
        return {
            id: this.id,
            data: {
                type: this.type,
                games: this.games.map(e),
            },
        };
    }
    isDiscardable() {
        return 0 === this.games.length;
    }
    isValid() {
        return this.games.length > 0 && this.games.length <= r.kp[this.type];
    }
    isEqual(e) {
        return e instanceof u && e.type === this.type && (0, a.ou)(this.games, e.games, this.type);
    }
    getUniqueKey() {
        return this.type;
    }
    getProfileAnalyticsOptions() {
        return { widgetType: this.type };
    }
    getProfileEditAnalyticsOptions() {
        return { widgetEdited: this.type };
    }
    constructor({ id: e, type: t, games: n }) {
        o(this, "id", void 0),
            o(this, "type", void 0),
            o(this, "games", void 0),
            (this.id = e),
            (this.type = t),
            (this.games = n);
    }
}
