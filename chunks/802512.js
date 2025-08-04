n.d(t, { Z: () => h });
var r,
    i = n(442837),
    a = n(570140),
    o = n(973616);
function s(e, t, n) {
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
function l(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                s(e, t, n[t]);
            }));
    }
    return e;
}
let c = {},
    u = {
        application: null,
        subgameInfo: null
    };
function d(e) {
    let { subgameInfo: t } = e;
    if (null == t || null == t.universeId) {
        u = {
            application: null,
            subgameInfo: null
        };
        return;
    }
    ((u.subgameInfo = t), null != c[t.universeId] && null != c[t.universeId].application && (u.application = c[t.universeId].application), (u = l({}, u)));
}
function f(e) {
    var t;
    let { universeId: n, application: r } = e;
    ((c[n] = {
        application: r,
        lastFetchedTime: Date.now()
    }),
        (c = l({}, c)),
        null != r && (null == (t = u.subgameInfo) ? void 0 : t.universeId) === n && ((u.application = r), (u = l({}, u))));
}
function _(e) {
    let { universeId: t } = e;
    ((c[t] = {
        application: null,
        lastFetchedTime: Date.now()
    }),
        (c = l({}, c)));
}
class p extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        var t;
        ((c = {}),
            Object.keys(null != (t = null == e ? void 0 : e.universeIdToApplicationInfo) ? t : {}).forEach((t) => {
                (null == e ? void 0 : e.universeIdToApplicationInfo[t]) != null &&
                    (null == e ? void 0 : e.universeIdToApplicationInfo[t].lastFetchedTime) != null &&
                    (c[t] = {
                        application: (null == e ? void 0 : e.universeIdToApplicationInfo[t].application) != null ? new o.ZP(null == e ? void 0 : e.universeIdToApplicationInfo[t].application) : null,
                        lastFetchedTime: null == e ? void 0 : e.universeIdToApplicationInfo[t].lastFetchedTime
                    });
            }));
    }
    getCurrentSubgameInfo() {
        return u;
    }
    getState() {
        return { universeIdToApplicationInfo: c };
    }
}
(s(p, 'displayName', 'RobloxSubgameStore'), s(p, 'persistKey', 'robloxSubgame'));
let h = new p(a.Z, {
    ROBLOX_SUBGAME_UPDATE: d,
    ROBLOX_SUBGAME_APPLICATION_FETCH_SUCCESS: f,
    ROBLOX_SUBGAME_APPLICATION_FETCH_FAILURE: _
});
