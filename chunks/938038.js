n.d(t, { c: () => s });
var r = n(433517),
    i = n(593472);
function o(e, t, n) {
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
function a(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                o(e, t, n[t]);
            });
    }
    return e;
}
class s {
    save() {
        let e = { games: this.games };
        r.K.set(s.storageKey, e);
    }
    static load() {
        return null == s._loaded && (s._loaded = s.loadInternal()), s._loaded;
    }
    static loadInternal() {
        let e = r.K.get(s.storageKey);
        if (null != e) {
            var t;
            return new s(null != (t = e.games) ? t : {});
        }
        let n = new s({});
        return n.save(), n;
    }
    static getGameSettings(e) {
        var t;
        return null == e ? null : null != (t = s.load().games[e]) ? t : null;
    }
    static updateGameSettings(e, t) {
        if (null == e) return;
        let n = s.load(),
            r = n.games[e];
        if (null == r) {
            (n.games[e] = a(
                {
                    screen: i.Jx.UNKNOWN,
                    date: Date.now()
                },
                t
            )),
                n.save();
            return;
        }
        'boolean' == typeof t.disabled && (r.disabled = t.disabled), 'number' == typeof t.screen && (r.screen = t.screen), (r.date = Date.now()), n.save();
    }
    static isPromptingForGameDisable(e) {
        var t, n;
        return null != (n = null == (t = s.getGameSettings(e)) ? void 0 : t.disabled) && n;
    }
    static setPromptingForGameDisable(e, t) {
        s.updateGameSettings(e, { disabled: t });
    }
    static getGameDisplayMode(e) {
        var t, n;
        return null == e ? null : null != (n = null == (t = s.getGameSettings(e)) ? void 0 : t.screen) ? n : null;
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
        o(this, 'games', void 0), (this.games = e);
    }
}
o(s, '_loaded', null), o(s, 'storageKey', 'GameDisplayModeStorage'), setTimeout(() => s.clearOldGameSettings(), 60000);
