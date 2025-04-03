n.d(t, { Z: () => L }), n(411104), n(47120);
var r = n(274616),
    i = n(710845),
    o = n(893988),
    a = n(812967),
    s = n(314897),
    l = n(757266),
    c = n(906467),
    u = n(6132),
    d = n(830168),
    f = n(358085),
    _ = n(591759),
    p = n(998502),
    h = n(981631);
function m(e, t, n) {
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
function g(e) {
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
                m(e, t, n[t]);
            });
    }
    return e;
}
function E(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let y = new i.Z('Games'),
    v = {},
    O = 0,
    I = null,
    S = 250,
    T = 120000,
    N = 3600000;
function A() {
    return null != I
        ? Promise.resolve(I)
        : (0, f.isDesktop)()
          ? p.ZP.ensureModule('discord_game_utils').then(() => {
                let e = p.ZP.getGameUtils();
                return null != e && null != e.findLaunchable ? ((I = e), e) : Promise.reject(Error('game utils not found'));
            })
          : Promise.reject(Error('not desktop client'));
}
function C(e) {
    let t = {
            id: e.id,
            name: e.name,
            thirdPartySkus: e.thirdPartySkus,
            executables: e.executables.filter((e) => e.os === (0, f.getPlatformName)()).map((e) => e.name)
        },
        n = e.aliases.map((e) => b(g({}, t), { name: e }));
    return [t, ...n];
}
function R(e) {
    return { id: e };
}
async function P(e) {
    if (
        (Array.isArray(e) || (e = [e]),
        c.Z.isDeveloper ||
            (e = e.filter(
                (e) =>
                    null == e.thirdPartySkus ||
                    -1 ===
                        e.thirdPartySkus.findIndex((e) => {
                            let { distributor: t } = e;
                            return t === h.GQo.BATTLENET;
                        })
            )),
        0 === e.length)
    )
        throw Error('No remaining launchable queries');
    let t = Date.now();
    t > O && ((O = t + N), (v = {}));
    let n = await A();
    for (let t of e) {
        let e = v[t.id];
        if (null != e) return e;
        let r = await new Promise((e) => n.findLaunchable(t, e));
        if (null != r) return (v[t.id] = r), r;
    }
    throw Error('could not find launchable');
}
function w(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
    if (e()) return void t();
    setTimeout(() => {
        r * S <= T ? w(e, t, n, r + 1) : n();
    }, S);
}
function D(e) {
    return (
        y.info('launch', e),
        new Promise((t, n) => {
            null == _.Z.safeParseWithQuery(e.launchTarget) ? n(Error('Failed to parse launch target. '.concat(e.launchTarget))) : (window.open(e.launchTarget), t([]));
        })
    );
}
let L = {
    waitSubscribed: (e, t) => new Promise((n, r) => w(() => a.Z.isSubscribed(e, t), n, r)),
    waitConnected(e) {
        return new Promise(w.bind(this, () => l.Z.isConnected(e)));
    },
    isLaunchable: (e) =>
        P(C(e))
            .then((e) => null != e)
            .catch(() => !1),
    launch: (e) => P(C(e)).then(D),
    launchDispatchApplication(e, t, n, i, a) {
        let { launchOptions: l, defaultLaunchOptionId: c, installPath: f, applicationId: _, branchId: p, buildId: m, shouldPatch: g } = e;
        if (null == l || null == c || null == f) throw Error("Couldn't construct launchable for ".concat(e.applicationId));
        null == a && (a = c);
        let E = l[a];
        if (null == E) throw Error("Couldn't construct launchable for ".concat(e.applicationId, '. No launch option.'));
        return (0, r.o)([p])
            .then((e) => {
                let t = e[0];
                if (null == t) return Promise.reject(Error('branch is null'));
                let { liveBuildId: n } = t;
                if (g && n !== m) return Promise.reject(Error('live build id changed'));
            })
            .then(() => d.Z.runLaunchSetup(_, p))
            .then(() => {
                let e = (0, o.Z)(f),
                    r = {
                        DISCORD_INSTANCE_ID: u.Z.getId().toString(),
                        DISCORD_ACCESS_TOKEN: null != t ? t : '',
                        DISCORD_CURRENT_LOCALE: n,
                        DISCORD_CURRENT_BRANCH: i,
                        DISCORD_STORAGE_PATH: h.SRg.ROOT_STORAGE_PATH(e, s.default.getId())
                    };
                return d.Z.launch(_, p, E.name, r);
            });
    },
    removeShortcuts: (e) =>
        (0, f.isWindows)()
            ? A().then((t) => {
                  var n, r;
                  return null != (r = null == (n = t.removeShortcuts) ? void 0 : n.call(t, e)) && r;
              })
            : Promise.resolve(!1),
    createShortcuts(e, t, n, r, i) {
        if (null == i || !(0, f.isWindows)()) return Promise.resolve(!1);
        let o = 'discord:///library/'.concat(r, '/launch'),
            a = ''.concat(i, '\\icon.ico');
        return A().then((r) => {
            var i, s;
            return null != (s = null == (i = r.createShortcuts) ? void 0 : i.call(r, e, t, n, o, a)) && s;
        });
    },
    isGameLaunchable: (e) =>
        P(R(e))
            .then((e) => null != e)
            .catch(() => !1),
    launchGame: (e) => (l.Z.isConnected(e) ? Promise.resolve() : P(R(e)).then(D)),
    isProtocolRegistered: (e) =>
        A().then((t) => {
            var n, r;
            return null != (r = null == (n = t.isProtocolSchemeRegistered) ? void 0 : n.call(t, e)) && r;
        }),
    setRecentGames(e) {
        A()
            .then((t) => {
                var n;
                return null == (n = t.setRecentGames) ? void 0 : n.call(t, e);
            })
            .catch(() => {});
    }
};
