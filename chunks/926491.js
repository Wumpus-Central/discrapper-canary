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
    p = n(737406);
function _(e, t, n) {
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
let m = 2,
    h = async () => {
        if (0 !== m) return;
        let e = s.Z.database();
        if (null == e) return;
        m = 2;
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
        m = +!!t.every((e) => null != e.stickers.items);
    },
    E = () => {
        m = 0;
    };
function b(e) {
    let { guild: t } = e;
    1 === m && "update" === t.stickers.op && null == t.stickers.items && (m = 0);
}
let y = () => {
    m = 0;
};
class O extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(u.Z, f.Z, d.Z, p.Z), this.syncWith([f.Z, p.Z], () => !0);
    }
    get isLoaded() {
        return 0 !== m;
    }
    get loadState() {
        return m;
    }
    getStickerMetadataArrays() {
        return h(), [f.Z.getStickerMetadataMap(), p.Z.getStickerMetadataMap()];
    }
    get hasLoadedStickerPacks() {
        return p.Z.hasLoadedStickerPacks;
    }
    get isFetchingStickerPacks() {
        return p.Z.isFetchingStickerPacks;
    }
    getStickerById(e) {
        var t;
        return h(), null != (t = f.Z.getStickerById(e)) ? t : p.Z.getStickerById(e);
    }
    getStickerPack(e) {
        return p.Z.getStickerPack(e);
    }
    getPremiumPacks() {
        return p.Z.getPremiumPacks();
    }
    isPremiumPack(e) {
        return p.Z.isPremiumPack(e);
    }
    getRawStickersByGuild() {
        return f.Z.getAllGuildStickers();
    }
    getAllGuildStickers() {
        return h(), f.Z.getAllGuildStickers();
    }
    getAllPackStickers() {
        return p.Z.getAllPackStickers();
    }
    getStickersByGuildId(e) {
        return h(), f.Z.getStickersByGuildId(e);
    }
}
_(O, "displayName", "StickersStore");
let v = new O(o.Z, {
    BACKGROUND_SYNC: E,
    CONNECTION_OPEN: g,
    GUILD_CREATE: b,
    LOGOUT: y,
});
