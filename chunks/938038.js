r.d(n, {
    c: function () {
        return s;
    }
});
var i = r(433517),
    a = r(593472);
function o(e, n, r) {
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
class s {
    save() {
        let e = { games: this.games };
        i.K.set(s.storageKey, e);
    }
    static load() {
        return null == s._loaded && (s._loaded = s.loadInternal()), s._loaded;
    }
    static loadInternal() {
        let e = i.K.get(s.storageKey);
        if (null != e) {
            var n;
            return new s(null !== (n = e.games) && void 0 !== n ? n : {});
        }
        let r = new s({});
        return r.save(), r;
    }
    static getGameSettings(e) {
        var n;
        return null == e ? null : null !== (n = s.load().games[e]) && void 0 !== n ? n : null;
    }
    static updateGameSettings(e, n) {
        if (null == e) return;
        let r = s.load(),
            i = r.games[e];
        if (null == i) {
            (r.games[e] = {
                screen: a.Jx.UNKNOWN,
                date: Date.now(),
                ...n
            }),
                r.save();
            return;
        }
        'boolean' == typeof n.disabled && (i.disabled = n.disabled), 'number' == typeof n.screen && (i.screen = n.screen), (i.date = Date.now()), r.save();
    }
    static isPromptingForGameDisable(e) {
        var n, r;
        return null !== (r = null === (n = s.getGameSettings(e)) || void 0 === n ? void 0 : n.disabled) && void 0 !== r && r;
    }
    static setPromptingForGameDisable(e, n) {
        s.updateGameSettings(e, { disabled: n });
    }
    static getGameDisplayMode(e) {
        var n, r;
        return null == e ? null : null !== (r = null === (n = s.getGameSettings(e)) || void 0 === n ? void 0 : n.screen) && void 0 !== r ? r : null;
    }
    static setGameDisplayMode(e, n) {
        s.updateGameSettings(e, { screen: n });
    }
    static clearOldGameSettings() {
        let e = s.load();
        if (null == e.games) return;
        let n = Date.now() - 31536000000;
        for (let r in e.games) e.games[r].date < n && delete e.games[r];
        e.save();
    }
    static reset() {
        let e = s.load();
        (e.games = {}), e.save();
    }
    static isTestMode() {
        return !!window.__GAME_DISPLAY_MODE_TEST_MODE__;
    }
    static isVerbose() {
        return !!window.__GAME_DISPLAY_MODE_DEBUG__;
    }
    constructor(e) {
        o(this, 'games', void 0), (this.games = e);
    }
}
o(s, '_loaded', null), o(s, 'storageKey', 'GameDisplayModeStorage'), setTimeout(() => s.clearOldGameSettings(), 60000);
