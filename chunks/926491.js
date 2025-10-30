n.d(t, { Z: () => v });
var r,
    i = n(135273),
    a = n(442837),
    o = n(570140),
    s = n(287328),
    l = n(86670),
    c = n(856472),
    u = n(93093),
    d = n(430824),
    f = n(149694),
    _ = n(737406);
function p(e, t, n) {
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
let h = 2,
    m = async () => {
        if (0 !== h) return;
        let e = s.Z.database();
        if (null == e) return;
        h = 2;
        let t = await (0, l.gs)("StickerStore.loadSavedGuildStickers", () =>
            i.Z.timeAsync("\uD83D\uDCBE", "loadSavedGuildStickers", () => c.Z.getAsync(e)),
        );
        null != t &&
            o.Z.dispatch({
                type: "CACHED_STICKERS_LOADED",
                stickers: t,
            });
    },
    g = (e) => {
        let { guilds: t } = e;
        h = +!!t.every((e) => null != e.stickers.items);
    },
    E = () => {
        h = 0;
    };
function b(e) {
    let { guild: t } = e;
    1 === h && "update" === t.stickers.op && null == t.stickers.items && (h = 0);
}
let y = () => {
    h = 0;
};
class O extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(u.Z, f.Z, d.Z, _.Z), this.syncWith([f.Z, _.Z], () => !0);
    }
    get isLoaded() {
        return 0 !== h;
    }
    get loadState() {
        return h;
    }
    getStickerMetadataArrays() {
        return m(), [f.Z.getStickerMetadataMap(), _.Z.getStickerMetadataMap()];
    }
    get hasLoadedStickerPacks() {
        return _.Z.hasLoadedStickerPacks;
    }
    get isFetchingStickerPacks() {
        return _.Z.isFetchingStickerPacks;
    }
    getStickerById(e) {
        var t;
        return m(), null != (t = f.Z.getStickerById(e)) ? t : _.Z.getStickerById(e);
    }
    getStickerPack(e) {
        return _.Z.getStickerPack(e);
    }
    getPremiumPacks() {
        return _.Z.getPremiumPacks();
    }
    isPremiumPack(e) {
        return _.Z.isPremiumPack(e);
    }
    getRawStickersByGuild() {
        return f.Z.getAllGuildStickers();
    }
    getAllGuildStickers() {
        return m(), f.Z.getAllGuildStickers();
    }
    getAllPackStickers() {
        return _.Z.getAllPackStickers();
    }
    getStickersByGuildId(e) {
        return m(), f.Z.getStickersByGuildId(e);
    }
}
p(O, "displayName", "StickersStore");
let v = new O(o.Z, {
    BACKGROUND_SYNC: E,
    CONNECTION_OPEN: g,
    GUILD_CREATE: b,
    LOGOUT: y,
});
