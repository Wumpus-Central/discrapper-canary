n.d(t, { Z: () => g });
var r,
    i = n(442837),
    a = n(570140),
    o = n(973616),
    s = n(626135),
    l = n(981631);
function c(e, t, n) {
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
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                c(e, t, n[t]);
            });
    }
    return e;
}
let d = {},
    f = {
        application: null,
        subgameInfo: null,
    };
function _(e) {
    let { subgameInfo: t } = e;
    if (null == t || null == t.universeId) {
        f = {
            application: null,
            subgameInfo: null,
        };
        return;
    }
    (f.subgameInfo = t),
        null != t.universeId &&
            s.default.track(l.rMx.ROBLOX_SUBGAME_DETECTED, {
                universe_id: t.universeId,
                place_id: t.placeId,
            }),
        null != d[t.universeId] && null != d[t.universeId].application && (f.application = d[t.universeId].application),
        (f = u({}, f));
}
function p(e) {
    var t;
    let { universeId: n, application: r } = e;
    (d[n] = {
        application: r,
        lastFetchedTime: Date.now(),
    }),
        (d = u({}, d)),
        null != r &&
            (null == (t = f.subgameInfo) ? void 0 : t.universeId) === n &&
            ((f.application = r), (f = u({}, f)));
}
function h(e) {
    let { universeId: t } = e;
    (d[t] = {
        application: null,
        lastFetchedTime: Date.now(),
    }),
        (d = u({}, d));
}
class m extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        var t;
        (d = {}),
            Object.keys(null != (t = null == e ? void 0 : e.universeIdToApplicationInfo) ? t : {}).forEach((t) => {
                (null == e ? void 0 : e.universeIdToApplicationInfo[t]) != null &&
                    (null == e ? void 0 : e.universeIdToApplicationInfo[t].lastFetchedTime) != null &&
                    (d[t] = {
                        application:
                            (null == e ? void 0 : e.universeIdToApplicationInfo[t].application) != null
                                ? new o.ZP(null == e ? void 0 : e.universeIdToApplicationInfo[t].application)
                                : null,
                        lastFetchedTime: null == e ? void 0 : e.universeIdToApplicationInfo[t].lastFetchedTime,
                    });
            });
    }
    getCurrentSubgameInfo() {
        return f;
    }
    getState() {
        return { universeIdToApplicationInfo: d };
    }
}
c(m, "displayName", "RobloxSubgameStore"), c(m, "persistKey", "robloxSubgame");
let g = new m(a.Z, {
    ROBLOX_SUBGAME_UPDATE: _,
    ROBLOX_SUBGAME_APPLICATION_FETCH_SUCCESS: p,
    ROBLOX_SUBGAME_APPLICATION_FETCH_FAILURE: h,
});
