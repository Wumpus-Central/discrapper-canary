(n.d(t, { Z: () => Q }), n(388685), n(781311), n(35282), n(539854));
var r,
    i = n(135273),
    a = n(442837),
    o = n(570140),
    s = n(287328),
    l = n(86670),
    c = n(856472),
    u = n(633302),
    d = n(41776),
    _ = n(93093),
    f = n(430824),
    p = n(70956),
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
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                g(e, t, n[t]);
            }));
    }
    return e;
}
function b(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let O = 2,
    v = new Map(),
    I = new Map(),
    T = null,
    S = [],
    A = null,
    N = !1,
    C = new Map(),
    R = (e, t) => {
        C = new Map(C.set(e, t));
    },
    P = p.Z.Millis.HOUR,
    w = async () => {
        if (0 !== O) return;
        let e = s.Z.database();
        if (null == e) return;
        O = 2;
        let t = await (0, l.gs)('StickerStore.loadSavedGuildStickers', () => i.Z.timeAsync('\uD83D\uDCBE', 'loadSavedGuildStickers', () => c.Z.getAsync(e)));
        null != t &&
            o.Z.dispatch({
                type: 'CACHED_STICKERS_LOADED',
                stickers: t
            });
    };
function D(e) {
    let { stickers: t } = e;
    for (let [e, n] of t)
        if (_.Z.isMember(e) && !C.has(e)) {
            let t = f.Z.getGuild(e);
            for (let e of n) L(e, !0, t);
            R(e, n);
        }
}
let L = function (e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        (I.set(e.id, e), t && x(e, n));
    },
    x = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (null == T) return;
        let { tags: n } = e,
            r = {
                type: h.MO.STICKER_NAME,
                value: e.name.trim().toLocaleLowerCase()
            };
        if ((0, m.jl)(e)) {
            let t = S.find((t) => t.id === e.pack_id),
                i = [
                    r,
                    ...(null != n ? n : '').split(',').map((e) => ({
                        type: h.MO.TAG,
                        value: e.trim().toLocaleLowerCase()
                    }))
                ];
            (null != t &&
                i.push({
                    type: h.MO.PACK_NAME,
                    value: t.name
                }),
                T.set(e.id, i));
        } else if ((0, m.J8)(e) && null != n) {
            let i = u.ZP.getByName(n),
                a = [
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
                    a.push({
                        type: h.MO.GUILD_NAME,
                        value: e
                    });
            }
            if (null == i) return void T.set(e.id, a);
            (a.push({
                type: h.MO.CORRELATED_EMOJI,
                value: i.surrogates
            }),
                i.forEachDiversity((e) =>
                    a.push({
                        type: h.MO.CORRELATED_EMOJI,
                        value: e.surrogates
                    })
                ),
                T.set(e.id, a));
        }
    },
    k = (e, t, n) => {
        v.set(e.id, e);
        let r = [...S];
        if (t) {
            let t = r.findIndex((t) => t.id === e.id);
            (-1 !== t ? (r[t] = e) : r.push(e), (S = r));
        }
        (t || n) && e.stickers.forEach((e) => L(e));
    },
    M = () => {
        (C.forEach((e, t) => {
            let n = f.Z.getGuild(t);
            null != n && e.forEach((e) => x(e, n));
        }),
            S.forEach((e) => {
                e.stickers.forEach((e) => x(e));
            }));
    },
    j = (e) => {
        let { guilds: t } = e;
        ((T = null), (I = new Map()), (C = new Map()), t.forEach(G), (O = +!!t.every((e) => null != e.stickers.items)));
    },
    U = () => {
        ((T = null), (I = new Map()), (C = new Map()), (O = 0));
    };
function G(e) {
    let t = f.Z.getGuild(e.id);
    null != t && null != e.stickers.items && (e.stickers.items.forEach((e) => L(e, !0, t)), R(t.id, e.stickers.items));
}
function B(e) {
    let { guild: t } = e;
    d.Z.isLurking(t.id) || (G(t), 1 === O && 'update' === t.stickers.op && null == t.stickers.items && (O = 0));
}
function V(e) {
    var t;
    let { guild: n } = e;
    ((null != (t = C.get(n.id)) ? t : []).forEach((e) => {
        (null != T && T.delete(e.id), I.delete(e.id));
    }),
        C.delete(n.id),
        (C = new Map(C)));
}
let F = () => {
        ((O = 0), (S = []), I.clear(), v.clear(), (T = null), C.clear(), (C = new Map(C)), (N = !1), (A = null));
    },
    Z = () => {
        N = !0;
    },
    H = (e) => {
        let { packs: t } = e;
        (t.forEach((e) => k(e, !0)), (A = Date.now()), (N = !1));
    },
    Y = (e) => {
        let { pack: t, ingestStickers: n } = e;
        k(t, !1, n);
    },
    W = (e) => {
        let { guildId: t, stickers: n } = e;
        (n.forEach((e) => L(e)), R(t, n));
    },
    K = (e) => {
        var t, n;
        let { guildId: r, sticker: i } = e,
            a = null != (t = C.get(r)) ? t : [];
        (R(r, [...(null != (n = a.filter((e) => e.id !== i.id)) ? n : []), i]), L(i));
    },
    z = (e) => {
        let { sticker: t } = e;
        L(t, !1);
    },
    q = (e) => {
        var t;
        let { guildId: n, stickers: r } = e,
            i = (e) => {
                let t,
                    n = I.get(e.id);
                return (null != n && (0, m.J8)(n) && (t = null != n.user ? n.user : void 0), y(E({}, e), { user: t }));
            };
        (null != (t = C.get(n)) ? t : [])
            .filter((e) => null == r.find((t) => t.id === e.id))
            .forEach((e) => {
                (I.delete(e.id), null != T && T.delete(e.id));
            });
        let a = r.map((e) => i(e));
        (a.forEach((e) => L(e)), R(n, a));
    };
class X extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(s.Z, _.Z, f.Z);
    }
    get isLoaded() {
        return 0 !== O;
    }
    get loadState() {
        return O;
    }
    get stickerMetadata() {
        return (w(), null == T && ((T = new Map()), M()), T);
    }
    get hasLoadedStickerPacks() {
        return null != A && A + P > Date.now();
    }
    get isFetchingStickerPacks() {
        return N;
    }
    getStickerById(e) {
        return (I.has(e) || w(), I.get(e));
    }
    getStickerPack(e) {
        return v.get(e);
    }
    getPremiumPacks() {
        return S;
    }
    isPremiumPack(e) {
        return S.some((t) => t.id === e);
    }
    getRawStickersByGuild() {
        return C;
    }
    getAllStickersIterator() {
        return (w(), I.values());
    }
    getAllGuildStickers() {
        return (w(), C);
    }
    getStickersByGuildId(e) {
        return (w(), C.get(e));
    }
}
g(X, 'displayName', 'StickersStore');
let Q = new X(o.Z, {
    BACKGROUND_SYNC: U,
    CONNECTION_OPEN: j,
    GUILD_CREATE: B,
    GUILD_DELETE: V,
    LOGOUT: F,
    STICKER_PACKS_FETCH_START: Z,
    STICKER_PACKS_FETCH_SUCCESS: H,
    STICKER_PACK_FETCH_SUCCESS: Y,
    GUILD_STICKERS_FETCH_SUCCESS: W,
    GUILD_STICKERS_CREATE_SUCCESS: K,
    STICKER_FETCH_SUCCESS: z,
    GUILD_STICKERS_UPDATE: q,
    CACHED_STICKERS_LOADED: D
});
