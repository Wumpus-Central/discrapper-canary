n.d(t, { Z: () => X }), n(47120), n(566702), n(301563), n(653041);
var r,
    i = n(956067),
    o = n(442837),
    a = n(570140),
    s = n(287328),
    l = n(86670),
    c = n(856472),
    u = n(633302),
    d = n(41776),
    f = n(93093),
    p = n(430824),
    _ = n(70956),
    h = n(373228),
    m = n(378233);
function g(e, t, n) {
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
function E(e) {
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
                g(e, t, n[t]);
            });
    }
    return e;
}
function v(e, t) {
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
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let y = 2,
    O = new Map(),
    S = new Map(),
    I = null,
    T = [],
    N = null,
    A = !1,
    C = new Map(),
    R = (e, t) => {
        C = new Map(C.set(e, t));
    },
    P = _.Z.Millis.HOUR,
    w = async () => {
        if (0 !== y) return;
        let e = s.Z.database();
        if (null == e) return;
        y = 2;
        let t = await (0, l.gs)('StickerStore.loadSavedGuildStickers', () => i.Z.timeAsync('\uD83D\uDCBE', 'loadSavedGuildStickers', () => c.Z.getAsync(e)));
        null != t &&
            a.Z.dispatch({
                type: 'CACHED_STICKERS_LOADED',
                stickers: t
            });
    };
function D(e) {
    let { stickers: t } = e;
    for (let [e, n] of t)
        if (f.Z.isMember(e) && !C.has(e)) {
            let t = p.Z.getGuild(e);
            for (let e of n) x(e, !0, t);
            R(e, n);
        }
}
let x = function (e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        S.set(e.id, e), t && L(e, n);
    },
    L = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (null == I) return;
        let { tags: n } = e,
            r = {
                type: h.MO.STICKER_NAME,
                value: e.name.trim().toLocaleLowerCase()
            };
        if ((0, m.jl)(e)) {
            let t = T.find((t) => t.id === e.pack_id),
                i = [
                    r,
                    ...(null != n ? n : '').split(',').map((e) => ({
                        type: h.MO.TAG,
                        value: e.trim().toLocaleLowerCase()
                    }))
                ];
            null != t &&
                i.push({
                    type: h.MO.PACK_NAME,
                    value: t.name
                }),
                I.set(e.id, i);
        } else if ((0, m.J8)(e) && null != n) {
            let i = u.ZP.getByName(n),
                o = [
                    r,
                    {
                        type: h.MO.TAG,
                        value: n.trim().toLocaleLowerCase()
                    }
                ];
            if (null != t) {
                let e = t.name.trim().toLocaleLowerCase();
                null != e &&
                    '' !== e &&
                    o.push({
                        type: h.MO.GUILD_NAME,
                        value: e
                    });
            }
            if (null == i) {
                I.set(e.id, o);
                return;
            }
            o.push({
                type: h.MO.CORRELATED_EMOJI,
                value: i.surrogates
            }),
                i.forEachDiversity((e) =>
                    o.push({
                        type: h.MO.CORRELATED_EMOJI,
                        value: e.surrogates
                    })
                ),
                I.set(e.id, o);
        }
    },
    M = (e, t, n) => {
        O.set(e.id, e);
        let r = [...T];
        if (t) {
            let t = r.findIndex((t) => t.id === e.id);
            -1 !== t ? (r[t] = e) : r.push(e), (T = r);
        }
        (t || n) && e.stickers.forEach((e) => x(e));
    },
    k = () => {
        C.forEach((e, t) => {
            let n = p.Z.getGuild(t);
            null != n && e.forEach((e) => L(e, n));
        }),
            T.forEach((e) => {
                e.stickers.forEach((e) => L(e));
            });
    },
    j = (e) => {
        let { guilds: t } = e;
        (I = null), (S = new Map()), (C = new Map()), t.forEach(G), (y = +!!t.every((e) => null != e.stickers));
    },
    U = () => {
        (I = null), (S = new Map()), (C = new Map()), (y = 0);
    };
function G(e) {
    let t = p.Z.getGuild(e.id);
    null != t && null != e.stickers && (e.stickers.forEach((e) => x(e, !0, t)), R(t.id, e.stickers));
}
function B(e) {
    let { guild: t } = e;
    !d.Z.isLurking(t.id) && (G(t), 1 === y && null == t.stickers && null != t.stickerUpdates && (y = 0));
}
function Z(e) {
    var t;
    let { guild: n } = e;
    (null !== (t = C.get(n.id)) && void 0 !== t ? t : []).forEach((e) => {
        null != I && I.delete(e.id), S.delete(e.id);
    }),
        C.delete(n.id),
        (C = new Map(C));
}
let F = () => {
        (y = 0), (T = []), S.clear(), O.clear(), (I = null), C.clear(), (C = new Map(C)), (A = !1), (N = null);
    },
    V = () => {
        A = !0;
    },
    H = (e) => {
        let { packs: t } = e;
        t.forEach((e) => M(e, !0)), (N = Date.now()), (A = !1);
    },
    W = (e) => {
        let { pack: t, ingestStickers: n } = e;
        M(t, !1, n);
    },
    Y = (e) => {
        let { guildId: t, stickers: n } = e;
        n.forEach((e) => x(e)), R(t, n);
    },
    K = (e) => {
        var t, n;
        let { guildId: r, sticker: i } = e,
            o = null !== (t = C.get(r)) && void 0 !== t ? t : [];
        R(r, [...(null !== (n = o.filter((e) => e.id !== i.id)) && void 0 !== n ? n : []), i]), x(i);
    },
    z = (e) => {
        let { sticker: t } = e;
        x(t, !1);
    },
    q = (e) => {
        var t;
        let { guildId: n, stickers: r } = e,
            i = (e) => {
                let t;
                let n = S.get(e.id);
                return null != n && (0, m.J8)(n) && (t = null != n.user ? n.user : void 0), b(E({}, e), { user: t });
            };
        (null !== (t = C.get(n)) && void 0 !== t ? t : [])
            .filter((e) => null == r.find((t) => t.id === e.id))
            .forEach((e) => {
                S.delete(e.id), null != I && I.delete(e.id);
            });
        let o = r.map((e) => i(e));
        o.forEach((e) => x(e)), R(n, o);
    };
class Q extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(s.Z, f.Z, p.Z);
    }
    get isLoaded() {
        return 0 !== y;
    }
    get loadState() {
        return y;
    }
    get stickerMetadata() {
        return w(), null == I && ((I = new Map()), k()), I;
    }
    get hasLoadedStickerPacks() {
        return null != N && N + P > Date.now();
    }
    get isFetchingStickerPacks() {
        return A;
    }
    getStickerById(e) {
        return S.has(e) || w(), S.get(e);
    }
    getStickerPack(e) {
        return O.get(e);
    }
    getPremiumPacks() {
        return T;
    }
    isPremiumPack(e) {
        return T.some((t) => t.id === e);
    }
    getRawStickersByGuild() {
        return C;
    }
    getAllStickersIterator() {
        return w(), S.values();
    }
    getAllGuildStickers() {
        return w(), C;
    }
    getStickersByGuildId(e) {
        return w(), C.get(e);
    }
}
g(Q, 'displayName', 'StickersStore');
let X = new Q(a.Z, {
    BACKGROUND_SYNC: U,
    CONNECTION_OPEN: j,
    GUILD_CREATE: B,
    GUILD_DELETE: Z,
    LOGOUT: F,
    STICKER_PACKS_FETCH_START: V,
    STICKER_PACKS_FETCH_SUCCESS: H,
    STICKER_PACK_FETCH_SUCCESS: W,
    GUILD_STICKERS_FETCH_SUCCESS: Y,
    GUILD_STICKERS_CREATE_SUCCESS: K,
    STICKER_FETCH_SUCCESS: z,
    GUILD_STICKERS_UPDATE: q,
    CACHED_STICKERS_LOADED: D
});
