n.d(t, { Z: () => O }), n(411104), n(47120);
var i = n(274616),
    r = n(710845),
    a = n(893988),
    s = n(812967),
    o = n(314897),
    l = n(757266),
    u = n(906467),
    c = n(6132),
    d = n(830168),
    f = n(358085),
    _ = n(591759),
    p = n(998502),
    h = n(981631);
let m = new r.Z('Games'),
    g = {},
    E = 0,
    v = null,
    y = 250,
    I = 120000,
    T = 3600000;
function b() {
    return null != v
        ? Promise.resolve(v)
        : (0, f.isDesktop)()
          ? p.ZP.ensureModule('discord_game_utils').then(() => {
                let e = p.ZP.getGameUtils();
                return null != e && null != e.findLaunchable ? ((v = e), e) : Promise.reject(Error('game utils not found'));
            })
          : Promise.reject(Error('not desktop client'));
}
function S(e) {
    let t = {
            id: e.id,
            name: e.name,
            thirdPartySkus: e.thirdPartySkus,
            executables: e.executables.filter((e) => e.os === (0, f.getPlatformName)()).map((e) => e.name)
        },
        n = e.aliases.map((e) => ({
            ...t,
            name: e
        }));
    return [t, ...n];
}
function A(e) {
    return { id: e };
}
async function N(e) {
    if (
        (Array.isArray(e) || (e = [e]),
        u.Z.isDeveloper ||
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
    t > E && ((E = t + T), (g = {}));
    let n = await b();
    for (let t of e) {
        let e = g[t.id];
        if (null != e) return e;
        let i = await new Promise((e) => n.findLaunchable(t, e));
        if (null != i) return (g[t.id] = i), i;
    }
    throw Error('could not find launchable');
}
function C(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
    if (e()) {
        t();
        return;
    }
    setTimeout(() => {
        i * y <= I ? C(e, t, n, i + 1) : n();
    }, y);
}
function R(e) {
    return (
        m.info('launch', e),
        new Promise((t, n) => {
            null == _.Z.safeParseWithQuery(e.launchTarget) ? n(Error('Failed to parse launch target. '.concat(e.launchTarget))) : (window.open(e.launchTarget), t([]));
        })
    );
}
let O = {
    waitSubscribed: (e, t) => new Promise((n, i) => C(() => s.Z.isSubscribed(e, t), n, i)),
    waitConnected(e) {
        return new Promise(C.bind(this, () => l.Z.isConnected(e)));
    },
    isLaunchable: (e) =>
        N(S(e))
            .then((e) => null != e)
            .catch(() => !1),
    launch: (e) => N(S(e)).then(R),
    launchDispatchApplication(e, t, n, r, s) {
        let { launchOptions: l, defaultLaunchOptionId: u, installPath: f, applicationId: _, branchId: p, buildId: m, shouldPatch: g } = e;
        if (null == l || null == u || null == f) throw Error("Couldn't construct launchable for ".concat(e.applicationId));
        null == s && (s = u);
        let E = l[s];
        if (null == E) throw Error("Couldn't construct launchable for ".concat(e.applicationId, '. No launch option.'));
        return (0, i.o)([p])
            .then((e) => {
                let t = e[0];
                if (null == t) return Promise.reject(Error('branch is null'));
                let { liveBuildId: n } = t;
                if (g && n !== m) return Promise.reject(Error('live build id changed'));
            })
            .then(() => d.Z.runLaunchSetup(_, p))
            .then(() => {
                let e = (0, a.Z)(f),
                    i = {
                        DISCORD_INSTANCE_ID: c.Z.getId().toString(),
                        DISCORD_ACCESS_TOKEN: null != t ? t : '',
                        DISCORD_CURRENT_LOCALE: n,
                        DISCORD_CURRENT_BRANCH: r,
                        DISCORD_STORAGE_PATH: h.SRg.ROOT_STORAGE_PATH(e, o.default.getId())
                    };
                return d.Z.launch(_, p, E.name, i);
            });
    },
    removeShortcuts: (e) =>
        (0, f.isWindows)()
            ? b().then((t) => {
                  var n, i;
                  return null !== (i = null === (n = t.removeShortcuts) || void 0 === n ? void 0 : n.call(t, e)) && void 0 !== i && i;
              })
            : Promise.resolve(!1),
    createShortcuts(e, t, n, i, r) {
        if (null == r || !(0, f.isWindows)()) return Promise.resolve(!1);
        let a = 'discord:///library/'.concat(i, '/launch'),
            s = ''.concat(r, '\\icon.ico');
        return b().then((i) => {
            var r, o;
            return null !== (o = null === (r = i.createShortcuts) || void 0 === r ? void 0 : r.call(i, e, t, n, a, s)) && void 0 !== o && o;
        });
    },
    isGameLaunchable: (e) =>
        N(A(e))
            .then((e) => null != e)
            .catch(() => !1),
    launchGame: (e) => (l.Z.isConnected(e) ? Promise.resolve() : N(A(e)).then(R)),
    isProtocolRegistered: (e) =>
        b().then((t) => {
            var n, i;
            return null !== (i = null === (n = t.isProtocolSchemeRegistered) || void 0 === n ? void 0 : n.call(t, e)) && void 0 !== i && i;
        }),
    setRecentGames(e) {
        b()
            .then((t) => {
                var n;
                return null === (n = t.setRecentGames) || void 0 === n ? void 0 : n.call(t, e);
            })
            .catch(() => {});
    }
};
