var i = r(411104);
var a = r(47120);
var o = r(274616),
    s = r(710845),
    l = r(893988),
    u = r(812967),
    c = r(314897),
    d = r(757266),
    f = r(906467),
    p = r(6132),
    h = r(830168),
    _ = r(358085),
    m = r(591759),
    g = r(998502),
    E = r(981631);
let v = new s.Z('Games'),
    y = {},
    b = 0,
    I = null,
    T = 250,
    S = 120000,
    A = 3600000;
function C() {
    return null != I
        ? Promise.resolve(I)
        : (0, _.isDesktop)()
          ? g.ZP.ensureModule('discord_game_utils').then(() => {
                let e = g.ZP.getGameUtils();
                return null != e && null != e.findLaunchable ? ((I = e), e) : Promise.reject(Error('game utils not found'));
            })
          : Promise.reject(Error('not desktop client'));
}
function N(e) {
    let n = {
            id: e.id,
            name: e.name,
            thirdPartySkus: e.thirdPartySkus,
            executables: e.executables.filter((e) => e.os === (0, _.getPlatformName)()).map((e) => e.name)
        },
        r = e.aliases.map((e) => ({
            ...n,
            name: e
        }));
    return [n, ...r];
}
function R(e) {
    return { id: e };
}
async function O(e) {
    if (
        (!Array.isArray(e) && (e = [e]),
        !f.Z.isDeveloper &&
            (e = e.filter(
                (e) =>
                    null == e.thirdPartySkus ||
                    -1 ===
                        e.thirdPartySkus.findIndex((e) => {
                            let { distributor: n } = e;
                            return n === E.GQo.BATTLENET;
                        })
            )),
        0 === e.length)
    )
        throw Error('No remaining launchable queries');
    let n = Date.now();
    n > b && ((b = n + A), (y = {}));
    let r = await C();
    for (let n of e) {
        let e = y[n.id];
        if (null != e) return e;
        let i = await new Promise((e) => r.findLaunchable(n, e));
        if (null != i) return (y[n.id] = i), i;
    }
    throw Error('could not find launchable');
}
function D(e, n, r) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
    if (e()) {
        n();
        return;
    }
    setTimeout(() => {
        i * T <= S ? D(e, n, r, i + 1) : r();
    }, T);
}
function L(e) {
    return (
        v.info('launch', e),
        new Promise((n, r) => {
            null == m.Z.safeParseWithQuery(e.launchTarget) ? r(Error('Failed to parse launch target. '.concat(e.launchTarget))) : (window.open(e.launchTarget), n([]));
        })
    );
}
n.Z = {
    waitSubscribed: (e, n) => new Promise((r, i) => D(() => u.Z.isSubscribed(e, n), r, i)),
    waitConnected(e) {
        return new Promise(D.bind(this, () => d.Z.isConnected(e)));
    },
    isLaunchable: (e) =>
        O(N(e))
            .then((e) => null != e)
            .catch(() => !1),
    launch: (e) => O(N(e)).then(L),
    launchDispatchApplication(e, n, r, i, a) {
        let { launchOptions: s, defaultLaunchOptionId: u, installPath: d, applicationId: f, branchId: _, buildId: m, shouldPatch: g } = e;
        if (null == s || null == u || null == d) throw Error("Couldn't construct launchable for ".concat(e.applicationId));
        null == a && (a = u);
        let v = s[a];
        if (null == v) throw Error("Couldn't construct launchable for ".concat(e.applicationId, '. No launch option.'));
        return (0, o.o)([_])
            .then((e) => {
                let n = e[0];
                if (null == n) return Promise.reject(Error('branch is null'));
                let { liveBuildId: r } = n;
                if (g && r !== m) return Promise.reject(Error('live build id changed'));
            })
            .then(() => h.Z.runLaunchSetup(f, _))
            .then(() => {
                let e = (0, l.Z)(d),
                    a = {
                        DISCORD_INSTANCE_ID: p.Z.getId().toString(),
                        DISCORD_ACCESS_TOKEN: null != n ? n : '',
                        DISCORD_CURRENT_LOCALE: r,
                        DISCORD_CURRENT_BRANCH: i,
                        DISCORD_STORAGE_PATH: E.SRg.ROOT_STORAGE_PATH(e, c.default.getId())
                    };
                return h.Z.launch(f, _, v.name, a);
            });
    },
    removeShortcuts: (e) =>
        (0, _.isWindows)()
            ? C().then((n) => {
                  var r, i;
                  return null !== (i = null === (r = n.removeShortcuts) || void 0 === r ? void 0 : r.call(n, e)) && void 0 !== i && i;
              })
            : Promise.resolve(!1),
    createShortcuts(e, n, r, i, a) {
        if (null == a || !(0, _.isWindows)()) return Promise.resolve(!1);
        let o = 'discord:///library/'.concat(i, '/launch'),
            s = ''.concat(a, '\\icon.ico');
        return C().then((i) => {
            var a, l;
            return null !== (l = null === (a = i.createShortcuts) || void 0 === a ? void 0 : a.call(i, e, n, r, o, s)) && void 0 !== l && l;
        });
    },
    isGameLaunchable: (e) =>
        O(R(e))
            .then((e) => null != e)
            .catch(() => !1),
    launchGame: (e) => (d.Z.isConnected(e) ? Promise.resolve() : O(R(e)).then(L)),
    isProtocolRegistered: (e) =>
        C().then((n) => {
            var r, i;
            return null !== (i = null === (r = n.isProtocolSchemeRegistered) || void 0 === r ? void 0 : r.call(n, e)) && void 0 !== i && i;
        }),
    setRecentGames(e) {
        C()
            .then((n) => {
                var r;
                return null === (r = n.setRecentGames) || void 0 === r ? void 0 : r.call(n, e);
            })
            .catch(() => {});
    }
};
