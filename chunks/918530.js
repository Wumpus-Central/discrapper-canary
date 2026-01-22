n.d(t, {
    Ay: () => I,
    Ip: () => T,
}),
    n(896048),
    n(321073),
    n(864466),
    n(443073);
var r = n(64700),
    i = n(311907),
    a = n(931991),
    s = n(594061),
    o = n(71393),
    l = n(576705),
    c = n(287809),
    u = n(473145),
    d = n(927578),
    f = n(477851),
    p = n(163956),
    _ = n(209932),
    h = n(807348),
    m = n(805143),
    g = n(194567),
    E = n(980504),
    b = n(788868);

function y(e, t) {
    return (
        null != t && (e = t(e)),
        e.map((e, t) => ({
            type: h.uq.SOUND,
            sound: e,
            index: t,
        }))
    );
}

function O(e) {
    let { sections: t, guildIds: n, allSounds: r, potentialSoundIdsForSection: i, sectionType: a, sortSoundsFn: s } = e,
        o = {};
    for (let e of [...n, E.mV]) {
        var l;
        for (let t of null != (l = r.get(e)) ? l : []) null != i.find((e) => e === t.soundId) && (o[t.soundId] = t);
    }
    let c = [];
    for (let e of i) {
        let t = o[e];
        null != t && c.push(t);
    }
    let u = y(c, s);
    u.length > 0 &&
        t.push({
            key: a,
            categoryInfo: {
                type: a,
            },
            items: u,
        });
}

function A(e) {
    let { sections: t, guilds: n, currentGuildId: r, allSounds: i, hasNitro: a, sortSoundsFn: s } = e;
    for (let e of n) {
        var o;
        if (e.id === r) continue;
        let n = y(null != (o = i.get(e.id)) ? o : [], s);
        n.length > 0 &&
            t.push({
                categoryInfo: {
                    type: h.Cx.GUILD,
                    guild: e,
                    isNitroLocked: !a,
                },
                key: e.id,
                items: n,
            });
    }
}

function v(e, t, n) {
    var r;
    let { currentGuildHasAddPermissions: i, allSounds: a, filterOutEmptyCurrentGuild: s, sortSoundsFn: o } = n,
        l = null != (r = a.get(t.id)) ? r : [],
        c = y(l, o),
        d = l.length < (0, u.fA)(t) && i,
        f = 0 === c.length;
    (d || f) &&
        !s &&
        c.push({
            type: h.uq.ADD_SOUND,
            guild: t,
        }),
        (s && f) ||
            e.push({
                categoryInfo: {
                    type: h.Cx.GUILD,
                    guild: t,
                    isNitroLocked: !1,
                },
                key: t.id,
                items: c,
            });
}

function S(e, t) {
    var n;
    let r = null != (n = t.get(E.mV)) ? n : E.pD;
    e.push({
        key: h.Cx.DEFAULTS,
        categoryInfo: {
            type: h.Cx.DEFAULTS,
        },
        items: y(r, g.U),
    });
}

function I(e) {
    let { filterOutEmptyCurrentGuild: t = !1, moveDefaultsToBottom: n = !1 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        u = (0, i.bG)([c.default], () => c.default.getCurrentUser()),
        y = d.Ay.isPremium(u, b.PremiumTypes.TIER_2),
        [I, T, N] = (0, i.yK)([_.A], () => [_.A.getSounds(), _.A.getFavorites(), _.A.isFetching()]),
        R = (0, g.I)(),
        w = (0, m.Y)(e, !1),
        P = (0, i.yK)([o.A], () => {
            let e = [];
            return (
                w.forEach((t) => {
                    let n = o.A.getGuild(t);
                    null != n && e.push(n);
                }),
                e
            );
        }),
        D = d.Ay.canUseSoundboardEverywhere(u),
        x = (0, i.bG)([o.A], () => o.A.getGuild(null == e ? void 0 : e.guild_id)),
        L = (0, i.bG)([l.A], () => {
            let { canCreateExpressions: e } = (0, a.ie)(x);
            return e;
        }, [x]),
        { canSeeRecentlyHeard: j, canSeeFrequentlyPlayed: M } = (0, f.d)({
            location: "soundboard-useSoundGrid",
            autoTrackExposure: !0,
        }),
        k = C(),
        U = (0, i.yK)([p.A], () => p.A.recentlyHeardSoundIds);
    return r.useMemo(() => {
        let e = 0,
            r = 0,
            i = [];
        if (s) {
            var a;
            return (
                S(i, I),
                {
                    categories: i,
                    availableSounds: null != (a = I.get(E.mV)) ? a : E.pD,
                    isFetching: N,
                    soundCounts: {
                        favoriteSoundCount: 0,
                        unlockedCustomSoundCount: 0,
                        lockedCustomSoundCount: 0,
                    },
                }
            );
        }
        return (
            O({
                sections: i,
                guildIds: w,
                allSounds: I,
                potentialSoundIdsForSection: Array.from(T),
                sectionType: h.Cx.FAVORITES,
                sortSoundsFn: g.U,
            }),
            j &&
                O({
                    sections: i,
                    guildIds: w,
                    allSounds: I,
                    potentialSoundIdsForSection: U,
                    sectionType: h.Cx.RECENTLY_HEARD,
                }),
            M &&
                O({
                    sections: i,
                    guildIds: w,
                    allSounds: I,
                    potentialSoundIdsForSection: k.map((e) => e.soundId),
                    sectionType: h.Cx.FREQUENTLY_USED,
                }),
            void 0 !== x &&
                v(i, x, {
                    currentGuildHasAddPermissions: L,
                    allSounds: I,
                    filterOutEmptyCurrentGuild: t,
                    sortSoundsFn: R,
                }),
            n || D || S(i, I),
            A({
                sections: i,
                guilds: P,
                currentGuildId: null == x ? void 0 : x.id,
                allSounds: I,
                hasNitro: y,
                sortSoundsFn: R,
            }),
            (n || D) && S(i, I),
            i.forEach((t) => {
                t.categoryInfo.type === h.Cx.GUILD &&
                    (t.categoryInfo.isNitroLocked ? (r += t.items.length) : (e += t.items.length));
            }),
            {
                categories: i,
                availableSounds: Array.from(I.values()).flat(),
                isFetching: N,
                soundCounts: {
                    favoriteSoundCount: T.size,
                    unlockedCustomSoundCount: e,
                    lockedCustomSoundCount: r,
                },
            }
        );
    }, [w, I, T, U, k, M, j, x, L, t, n, D, P, s, N, y, R]);
}

function T(e, t, n) {
    return r.useMemo(
        () =>
            n.length > 0
                ? [
                      {
                          key: h.Cx.SEARCH,
                          categoryInfo: {
                              type: h.Cx.SEARCH,
                          },
                          items: y(t),
                      },
                  ]
                : e,
        [e, n.length, t],
    );
}

function C() {
    return (
        r.useEffect(() => {
            s.bW.loadIfNecessary();
        }, []),
        (0, i.bG)([p.A], () => p.A.frecentlyPlayedSounds)
    );
}
