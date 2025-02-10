n.d(t, { Z: () => z }), n(47120), n(653041);
var i,
    r = n(956067),
    a = n(442837),
    s = n(570140),
    o = n(287328),
    l = n(86670),
    u = n(856472),
    c = n(633302),
    d = n(41776),
    f = n(93093),
    _ = n(430824),
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
let E = 2,
    v = new Map(),
    y = new Map(),
    I = null,
    T = [],
    b = null,
    S = !1,
    A = new Map(),
    N = (e, t) => {
        A = new Map(A.set(e, t));
    },
    C = p.Z.Millis.HOUR,
    R = async () => {
        if (0 !== E) return;
        let e = o.Z.database();
        if (null == e) return;
        E = 2;
        let t = await (0, l.gs)('StickerStore.loadSavedGuildStickers', () => r.Z.timeAsync('\uD83D\uDCBE', 'loadSavedGuildStickers', () => u.Z.getAsync(e)));
        null != t &&
            s.Z.dispatch({
                type: 'CACHED_STICKERS_LOADED',
                stickers: t
            });
    };
function O(e) {
    let { stickers: t } = e;
    for (let [e, n] of t)
        if (f.Z.isMember(e) && !A.has(e)) {
            let t = _.Z.getGuild(e);
            for (let e of n) D(e, !0, t);
            N(e, n);
        }
}
let D = function (e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        y.set(e.id, e), t && L(e, n);
    },
    L = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (null == I) return;
        let { tags: n } = e,
            i = {
                type: h.MO.STICKER_NAME,
                value: e.name.trim().toLocaleLowerCase()
            };
        if ((0, m.jl)(e)) {
            let t = T.find((t) => t.id === e.pack_id),
                r = [
                    i,
                    ...(null != n ? n : '').split(',').map((e) => ({
                        type: h.MO.TAG,
                        value: e.trim().toLocaleLowerCase()
                    }))
                ];
            null != t &&
                r.push({
                    type: h.MO.PACK_NAME,
                    value: t.name
                }),
                I.set(e.id, r);
        } else if ((0, m.J8)(e) && null != n) {
            let r = c.ZP.getByName(n),
                a = [
                    i,
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
            if (null == r) {
                I.set(e.id, a);
                return;
            }
            a.push({
                type: h.MO.CORRELATED_EMOJI,
                value: r.surrogates
            }),
                r.forEachDiversity((e) =>
                    a.push({
                        type: h.MO.CORRELATED_EMOJI,
                        value: e.surrogates
                    })
                ),
                I.set(e.id, a);
        }
    },
    x = (e, t, n) => {
        v.set(e.id, e);
        let i = [...T];
        if (t) {
            let t = i.findIndex((t) => t.id === e.id);
            -1 !== t ? (i[t] = e) : i.push(e), (T = i);
        }
        (t || n) && e.stickers.forEach((e) => D(e));
    },
    P = () => {
        A.forEach((e, t) => {
            let n = _.Z.getGuild(t);
            null != n && e.forEach((e) => L(e, n));
        }),
            T.forEach((e) => {
                e.stickers.forEach((e) => L(e));
            });
    },
    w = (e) => {
        let { guilds: t } = e;
        (I = null), (y = new Map()), (A = new Map()), t.forEach(k), (E = t.every((e) => null != e.stickers) ? 1 : 0);
    },
    M = () => {
        (I = null), (y = new Map()), (A = new Map()), (E = 0);
    };
function k(e) {
    let t = _.Z.getGuild(e.id);
    null != t && null != e.stickers && (e.stickers.forEach((e) => D(e, !0, t)), N(t.id, e.stickers));
}
function U(e) {
    let { guild: t } = e;
    !d.Z.isLurking(t.id) && (k(t), 1 === E && null == t.stickers && null != t.stickerUpdates && (E = 0));
}
function G(e) {
    var t;
    let { guild: n } = e;
    (null !== (t = A.get(n.id)) && void 0 !== t ? t : []).forEach((e) => {
        null != I && I.delete(e.id), y.delete(e.id);
    }),
        A.delete(n.id),
        (A = new Map(A));
}
let B = () => {
        (E = 0), (T = []), y.clear(), v.clear(), (I = null), A.clear(), (A = new Map(A)), (S = !1), (b = null);
    },
    Z = () => {
        S = !0;
    },
    F = (e) => {
        let { packs: t } = e;
        t.forEach((e) => x(e, !0)), (b = Date.now()), (S = !1);
    },
    V = (e) => {
        let { pack: t, ingestStickers: n } = e;
        x(t, !1, n);
    },
    j = (e) => {
        let { guildId: t, stickers: n } = e;
        n.forEach((e) => D(e)), N(t, n);
    },
    H = (e) => {
        var t, n;
        let { guildId: i, sticker: r } = e,
            a = null !== (t = A.get(i)) && void 0 !== t ? t : [];
        N(i, [...(null !== (n = a.filter((e) => e.id !== r.id)) && void 0 !== n ? n : []), r]), D(r);
    },
    Y = (e) => {
        let { sticker: t } = e;
        D(t, !1);
    },
    W = (e) => {
        var t;
        let { guildId: n, stickers: i } = e,
            r = (e) => {
                let t;
                let n = y.get(e.id);
                return (
                    null != n && (0, m.J8)(n) && (t = null != n.user ? n.user : void 0),
                    {
                        ...e,
                        user: t
                    }
                );
            };
        (null !== (t = A.get(n)) && void 0 !== t ? t : [])
            .filter((e) => null == i.find((t) => t.id === e.id))
            .forEach((e) => {
                y.delete(e.id), null != I && I.delete(e.id);
            });
        let a = i.map((e) => r(e));
        a.forEach((e) => D(e)), N(n, a);
    };
class K extends (i = a.ZP.Store) {
    initialize() {
        this.waitFor(o.Z, f.Z, _.Z);
    }
    get isLoaded() {
        return 0 !== E;
    }
    get loadState() {
        return E;
    }
    get stickerMetadata() {
        return R(), null == I && ((I = new Map()), P()), I;
    }
    get hasLoadedStickerPacks() {
        return null != b && b + C > Date.now();
    }
    get isFetchingStickerPacks() {
        return S;
    }
    getStickerById(e) {
        return y.has(e) || R(), y.get(e);
    }
    getStickerPack(e) {
        return v.get(e);
    }
    getPremiumPacks() {
        return T;
    }
    isPremiumPack(e) {
        return T.some((t) => t.id === e);
    }
    getRawStickersByGuild() {
        return A;
    }
    getAllStickersIterator() {
        return R(), y.values();
    }
    getAllGuildStickers() {
        return R(), A;
    }
    getStickersByGuildId(e) {
        return R(), A.get(e);
    }
}
g(K, 'displayName', 'StickersStore');
let z = new K(s.Z, {
    BACKGROUND_SYNC: M,
    CONNECTION_OPEN: w,
    GUILD_CREATE: U,
    GUILD_DELETE: G,
    LOGOUT: B,
    STICKER_PACKS_FETCH_START: Z,
    STICKER_PACKS_FETCH_SUCCESS: F,
    STICKER_PACK_FETCH_SUCCESS: V,
    GUILD_STICKERS_FETCH_SUCCESS: j,
    GUILD_STICKERS_CREATE_SUCCESS: H,
    STICKER_FETCH_SUCCESS: Y,
    GUILD_STICKERS_UPDATE: W,
    CACHED_STICKERS_LOADED: O
});
