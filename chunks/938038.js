n.d(t, { c: () => s });
var i = n(433517),
    r = n(593472);
function a(e, t, n) {
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
            var t;
            return new s(null !== (t = e.games) && void 0 !== t ? t : {});
        }
        let n = new s({});
        return n.save(), n;
    }
    static getGameSettings(e) {
        var t;
        return null == e ? null : null !== (t = s.load().games[e]) && void 0 !== t ? t : null;
    }
    static updateGameSettings(e, t) {
        if (null == e) return;
        let n = s.load(),
            i = n.games[e];
        if (null == i) {
            (n.games[e] = {
                screen: r.Jx.UNKNOWN,
                date: Date.now(),
                ...t
            }),
                n.save();
            return;
        }
        'boolean' == typeof t.disabled && (i.disabled = t.disabled), 'number' == typeof t.screen && (i.screen = t.screen), (i.date = Date.now()), n.save();
    }
    static isPromptingForGameDisable(e) {
        var t, n;
        return null !== (n = null === (t = s.getGameSettings(e)) || void 0 === t ? void 0 : t.disabled) && void 0 !== n && n;
    }
    static setPromptingForGameDisable(e, t) {
        s.updateGameSettings(e, { disabled: t });
    }
    static getGameDisplayMode(e) {
        var t, n;
        return null == e ? null : null !== (n = null === (t = s.getGameSettings(e)) || void 0 === t ? void 0 : t.screen) && void 0 !== n ? n : null;
    }
    static setGameDisplayMode(e, t) {
        s.updateGameSettings(e, { screen: t });
    }
    static clearOldGameSettings() {
        let e = s.load();
        if (null == e.games) return;
        let t = Date.now() - 31536000000;
        for (let n in e.games) e.games[n].date < t && delete e.games[n];
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
        a(this, 'games', void 0), (this.games = e);
    }
}
a(s, '_loaded', null), a(s, 'storageKey', 'GameDisplayModeStorage'), setTimeout(() => s.clearOldGameSettings(), 60000);
