n.d(t, {
    Ki: () => o,
    Wc: () => s,
    zy: () => l,
});
var r = n(296009),
    i = n(86419);
function a(e, t, n) {
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
let o = [r.l.CURRENT_GAMES, r.l.FAVORITE_GAMES, r.l.WANT_TO_PLAY_GAMES, r.l.PLAYED_GAMES];
function s(e) {
    return o.includes(e.type);
}
class l {
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
    isSaveable() {
        return this.games.length > 0;
    }
    isEqual(e) {
        return e instanceof l && e.type === this.type && (0, i.ou)(this.games, e.games, this.type);
    }
    getProfileAnalyticsOptions() {
        return { widgetType: this.type };
    }
    getProfileEditAnalyticsOptions() {
        return { widgetEdited: this.type };
    }
    constructor({ id: e, type: t, games: n }) {
        a(this, "id", void 0),
            a(this, "type", void 0),
            a(this, "games", void 0),
            (this.id = e),
            (this.type = t),
            (this.games = n);
    }
}
