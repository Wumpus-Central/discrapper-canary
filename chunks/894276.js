n.d(t, {
    I: () => o,
    o: () => s
});
var r = n(668757);
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
class a {
    cachedIsEnabled() {
        return (0, r.X6)() && (0, r.Md)().isExperimentIdEnabled(this.id);
    }
    setDiscordExperiment(e) {
        this._discordExperiment = e;
    }
    constructor(e, t) {
        (i(this, 'id', void 0), i(this, 'feature', void 0), i(this, '_discordExperiment', void 0), (this.id = e), (this.feature = t), (this.id = e), (this.feature = t), (this._discordExperiment = null));
    }
}
let o = new a('2025-05_libdiscore_notestore', 'NoteStore'),
    s = [o];
