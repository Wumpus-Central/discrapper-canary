var i,
    a = r(47120);
var s = r(653041);
var o = r(956067),
    l = r(442837),
    u = r(570140),
    c = r(287328),
    d = r(86670),
    f = r(856472),
    _ = r(633302),
    h = r(41776),
    p = r(93093),
    m = r(430824),
    g = r(70956),
    E = r(373228),
    v = r(378233);
function I(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let T = 2,
    b = new Map(),
    y = new Map(),
    S = null,
    A = [],
    N = null,
    C = !1,
    R = new Map(),
    O = (e, n) => {
        R = new Map(R.set(e, n));
    },
    D = g.Z.Millis.HOUR,
    L = async () => {
        if (0 !== T) return;
        let e = c.Z.database();
        if (null == e) return;
        T = 2;
        let n = await (0, d.gs)('StickerStore.loadSavedGuildStickers', () => o.Z.timeAsync('\uD83D\uDCBE', 'loadSavedGuildStickers', () => f.Z.getAsync(e)));
        if (null != n)
            u.Z.dispatch({
                type: 'CACHED_STICKERS_LOADED',
                stickers: n
            });
    };
function x(e) {
    let { stickers: n } = e;
    for (let [e, r] of n)
        if (p.Z.isMember(e) && !R.has(e)) {
            let n = m.Z.getGuild(e);
            for (let e of r) w(e, !0, n);
            O(e, r);
        }
}
let w = function (e) {
        let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        y.set(e.id, e), n && P(e, r);
    },
    P = function (e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (null == S) return;
        let { tags: r } = e,
            i = {
                type: E.MO.STICKER_NAME,
                value: e.name.trim().toLocaleLowerCase()
            };
        if ((0, v.jl)(e)) {
            let n = A.find((n) => n.id === e.pack_id),
                a = [
                    i,
                    ...(null != r ? r : '').split(',').map((e) => ({
                        type: E.MO.TAG,
                        value: e.trim().toLocaleLowerCase()
                    }))
                ];
            null != n &&
                a.push({
                    type: E.MO.PACK_NAME,
                    value: n.name
                }),
                S.set(e.id, a);
        } else if ((0, v.J8)(e) && null != r) {
            let a = _.ZP.getByName(r),
                s = [
                    i,
                    {
                        type: E.MO.TAG,
                        value: r.trim().toLocaleLowerCase()
                    }
                ];
            if (null != n) {
                let e = n.name.trim().toLocaleLowerCase();
                null != e &&
                    '' !== e &&
                    s.push({
                        type: E.MO.GUILD_NAME,
                        value: e
                    });
            }
            if (null == a) {
                S.set(e.id, s);
                return;
            }
            s.push({
                type: E.MO.CORRELATED_EMOJI,
                value: a.surrogates
            }),
                a.forEachDiversity((e) =>
                    s.push({
                        type: E.MO.CORRELATED_EMOJI,
                        value: e.surrogates
                    })
                ),
                S.set(e.id, s);
        }
    },
    M = (e, n, r) => {
        b.set(e.id, e);
        let i = [...A];
        if (n) {
            let n = i.findIndex((n) => n.id === e.id);
            -1 !== n ? (i[n] = e) : i.push(e), (A = i);
        }
        (n || r) && e.stickers.forEach((e) => w(e));
    },
    k = () => {
        R.forEach((e, n) => {
            let r = m.Z.getGuild(n);
            null != r && e.forEach((e) => P(e, r));
        }),
            A.forEach((e) => {
                e.stickers.forEach((e) => P(e));
            });
    },
    U = (e) => {
        let { guilds: n } = e;
        (S = null), (y = new Map()), (R = new Map()), n.forEach(G), (T = n.every((e) => null != e.stickers) ? 1 : 0);
    },
    B = () => {
        (S = null), (y = new Map()), (R = new Map()), (T = 0);
    };
function G(e) {
    let n = m.Z.getGuild(e.id);
    null != n && null != e.stickers && (e.stickers.forEach((e) => w(e, !0, n)), O(n.id, e.stickers));
}
function Z(e) {
    let { guild: n } = e;
    if (!h.Z.isLurking(n.id)) G(n), 1 === T && null == n.stickers && null != n.stickerUpdates && (T = 0);
}
function F(e) {
    var n;
    let { guild: r } = e;
    (null !== (n = R.get(r.id)) && void 0 !== n ? n : []).forEach((e) => {
        null != S && S.delete(e.id), y.delete(e.id);
    }),
        R.delete(r.id),
        (R = new Map(R));
}
let V = () => {
        (T = 0), (A = []), y.clear(), b.clear(), (S = null), R.clear(), (R = new Map(R)), (C = !1), (N = null);
    },
    j = () => {
        C = !0;
    },
    H = (e) => {
        let { packs: n } = e;
        n.forEach((e) => M(e, !0)), (N = Date.now()), (C = !1);
    },
    Y = (e) => {
        let { pack: n, ingestStickers: r } = e;
        M(n, !1, r);
    },
    W = (e) => {
        let { guildId: n, stickers: r } = e;
        r.forEach((e) => w(e)), O(n, r);
    },
    K = (e) => {
        var n, r;
        let { guildId: i, sticker: a } = e,
            s = null !== (n = R.get(i)) && void 0 !== n ? n : [];
        O(i, [...(null !== (r = s.filter((e) => e.id !== a.id)) && void 0 !== r ? r : []), a]), w(a);
    },
    z = (e) => {
        let { sticker: n } = e;
        w(n, !1);
    },
    q = (e) => {
        var n;
        let { guildId: r, stickers: i } = e,
            a = (e) => {
                let n;
                let r = y.get(e.id);
                return (
                    null != r && (0, v.J8)(r) && (n = null != r.user ? r.user : void 0),
                    {
                        ...e,
                        user: n
                    }
                );
            };
        (null !== (n = R.get(r)) && void 0 !== n ? n : [])
            .filter((e) => null == i.find((n) => n.id === e.id))
            .forEach((e) => {
                y.delete(e.id), null != S && S.delete(e.id);
            });
        let s = i.map((e) => a(e));
        s.forEach((e) => w(e)), O(r, s);
    };
class Q extends (i = l.ZP.Store) {
    initialize() {
        this.waitFor(c.Z, p.Z, m.Z);
    }
    get isLoaded() {
        return 0 !== T;
    }
    get loadState() {
        return T;
    }
    get stickerMetadata() {
        return L(), null == S && ((S = new Map()), k()), S;
    }
    get hasLoadedStickerPacks() {
        return null != N && N + D > Date.now();
    }
    get isFetchingStickerPacks() {
        return C;
    }
    getStickerById(e) {
        return !y.has(e) && L(), y.get(e);
    }
    getStickerPack(e) {
        return b.get(e);
    }
    getPremiumPacks() {
        return A;
    }
    isPremiumPack(e) {
        return A.some((n) => n.id === e);
    }
    getRawStickersByGuild() {
        return R;
    }
    getAllStickersIterator() {
        return L(), y.values();
    }
    getAllGuildStickers() {
        return L(), R;
    }
    getStickersByGuildId(e) {
        return L(), R.get(e);
    }
}
I(Q, 'displayName', 'StickersStore'),
    (n.Z = new Q(u.Z, {
        BACKGROUND_SYNC: B,
        CONNECTION_OPEN: U,
        GUILD_CREATE: Z,
        GUILD_DELETE: F,
        LOGOUT: V,
        STICKER_PACKS_FETCH_START: j,
        STICKER_PACKS_FETCH_SUCCESS: H,
        STICKER_PACK_FETCH_SUCCESS: Y,
        GUILD_STICKERS_FETCH_SUCCESS: W,
        GUILD_STICKERS_CREATE_SUCCESS: K,
        STICKER_FETCH_SUCCESS: z,
        GUILD_STICKERS_UPDATE: q,
        CACHED_STICKERS_LOADED: x
    }));
