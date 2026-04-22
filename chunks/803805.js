"use strict";
n.d(t, {
    Do: () => A,
    F1: () => x,
    Q8: () => y,
    Qn: () => b,
    TL: () => u,
    Zc: () => O,
    aw: () => c,
    cC: () => U,
    gW: () => T,
    tC: () => h,
    tQ: () => m,
    uz: () => f,
    zT: () => v,
}),
    n(321073);
var r,
    i = n(852015),
    s = n(144367),
    a = n(428420),
    o = n(324281),
    l = n(813827),
    u = (((r = {})[(r.NONE = 0)] = "NONE"), (r[(r.IMAGE = 1)] = "IMAGE"), (r[(r.VIDEO = 2)] = "VIDEO"), r);
class d extends o.G {
    constructor() {
        super("discord_protos.discord_users.v1.FrecencyUserSettings", [
            { no: 1, name: "versions", kind: "message", T: () => l.u },
            { no: 2, name: "favorite_gifs", kind: "message", T: () => f },
            { no: 3, name: "favorite_stickers", kind: "message", T: () => m },
            { no: 4, name: "sticker_frecency", kind: "message", T: () => A },
            { no: 5, name: "favorite_emojis", kind: "message", T: () => T },
            { no: 6, name: "emoji_frecency", kind: "message", T: () => y },
            { no: 7, name: "application_command_frecency", kind: "message", T: () => O },
            { no: 8, name: "favorite_soundboard_sounds", kind: "message", T: () => b },
            { no: 9, name: "application_frecency", kind: "message", T: () => U },
            { no: 10, name: "heard_sound_frecency", kind: "message", T: () => L },
            { no: 11, name: "played_sound_frecency", kind: "message", T: () => M },
            { no: 12, name: "guild_and_channel_frecency", kind: "message", T: () => x },
            { no: 13, name: "emoji_reaction_frecency", kind: "message", T: () => y },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let s = r ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    s.versions = l.u.internalBinaryRead(e, e.uint32(), n, s.versions);
                    break;
                case 2:
                    s.favoriteGifs = f.internalBinaryRead(e, e.uint32(), n, s.favoriteGifs);
                    break;
                case 3:
                    s.favoriteStickers = m.internalBinaryRead(e, e.uint32(), n, s.favoriteStickers);
                    break;
                case 4:
                    s.stickerFrecency = A.internalBinaryRead(e, e.uint32(), n, s.stickerFrecency);
                    break;
                case 5:
                    s.favoriteEmojis = T.internalBinaryRead(e, e.uint32(), n, s.favoriteEmojis);
                    break;
                case 6:
                    s.emojiFrecency = y.internalBinaryRead(e, e.uint32(), n, s.emojiFrecency);
                    break;
                case 7:
                    s.applicationCommandFrecency = O.internalBinaryRead(e, e.uint32(), n, s.applicationCommandFrecency);
                    break;
                case 8:
                    s.favoriteSoundboardSounds = b.internalBinaryRead(e, e.uint32(), n, s.favoriteSoundboardSounds);
                    break;
                case 9:
                    s.applicationFrecency = U.internalBinaryRead(e, e.uint32(), n, s.applicationFrecency);
                    break;
                case 10:
                    s.heardSoundFrecency = L.internalBinaryRead(e, e.uint32(), n, s.heardSoundFrecency);
                    break;
                case 11:
                    s.playedSoundFrecency = M.internalBinaryRead(e, e.uint32(), n, s.playedSoundFrecency);
                    break;
                case 12:
                    s.guildAndChannelFrecency = x.internalBinaryRead(e, e.uint32(), n, s.guildAndChannelFrecency);
                    break;
                case 13:
                    s.emojiReactionFrecency = y.internalBinaryRead(e, e.uint32(), n, s.emojiReactionFrecency);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let o = e.skip(r);
                    !1 !== a && (!0 === a ? i.f$.onRead : a)(this.typeName, s, t, r, o);
            }
        }
        return s;
    }
    internalBinaryWrite(e, t, n) {
        e.versions && l.u.internalBinaryWrite(e.versions, t.tag(1, i.O0.LengthDelimited).fork(), n).join(),
            e.favoriteGifs && f.internalBinaryWrite(e.favoriteGifs, t.tag(2, i.O0.LengthDelimited).fork(), n).join(),
            e.favoriteStickers &&
                m.internalBinaryWrite(e.favoriteStickers, t.tag(3, i.O0.LengthDelimited).fork(), n).join(),
            e.stickerFrecency &&
                A.internalBinaryWrite(e.stickerFrecency, t.tag(4, i.O0.LengthDelimited).fork(), n).join(),
            e.favoriteEmojis &&
                T.internalBinaryWrite(e.favoriteEmojis, t.tag(5, i.O0.LengthDelimited).fork(), n).join(),
            e.emojiFrecency && y.internalBinaryWrite(e.emojiFrecency, t.tag(6, i.O0.LengthDelimited).fork(), n).join(),
            e.applicationCommandFrecency &&
                O.internalBinaryWrite(e.applicationCommandFrecency, t.tag(7, i.O0.LengthDelimited).fork(), n).join(),
            e.favoriteSoundboardSounds &&
                b.internalBinaryWrite(e.favoriteSoundboardSounds, t.tag(8, i.O0.LengthDelimited).fork(), n).join(),
            e.applicationFrecency &&
                U.internalBinaryWrite(e.applicationFrecency, t.tag(9, i.O0.LengthDelimited).fork(), n).join(),
            e.heardSoundFrecency &&
                L.internalBinaryWrite(e.heardSoundFrecency, t.tag(10, i.O0.LengthDelimited).fork(), n).join(),
            e.playedSoundFrecency &&
                M.internalBinaryWrite(e.playedSoundFrecency, t.tag(11, i.O0.LengthDelimited).fork(), n).join(),
            e.guildAndChannelFrecency &&
                x.internalBinaryWrite(e.guildAndChannelFrecency, t.tag(12, i.O0.LengthDelimited).fork(), n).join(),
            e.emojiReactionFrecency &&
                y.internalBinaryWrite(e.emojiReactionFrecency, t.tag(13, i.O0.LengthDelimited).fork(), n).join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let c = new d();
class _ extends o.G {
    constructor() {
        super("discord_protos.discord_users.v1.FavoriteGIFs", [
            { no: 1, name: "gifs", kind: "map", K: 9, V: { kind: "message", T: () => h } },
            { no: 2, name: "hide_tooltip", kind: "scalar", T: 8 },
        ]);
    }
    create(e) {
        let t = { gifs: {}, hideTooltip: !1 };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let s = r ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    this.binaryReadMap1(s.gifs, e, n);
                    break;
                case 2:
                    s.hideTooltip = e.bool();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let o = e.skip(r);
                    !1 !== a && (!0 === a ? i.f$.onRead : a)(this.typeName, s, t, r, o);
            }
        }
        return s;
    }
    binaryReadMap1(e, t, n) {
        let r = t.uint32(),
            i = t.pos + r,
            s,
            a;
        for (; t.pos < i; ) {
            let [e, r] = t.tag();
            switch (e) {
                case 1:
                    s = t.string();
                    break;
                case 2:
                    a = h.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.discord_users.v1.FavoriteGIFs.gifs",
                    );
            }
        }
        e[s ?? ""] = a ?? h.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let r of Object.keys(e.gifs))
            t.tag(1, i.O0.LengthDelimited).fork().tag(1, i.O0.LengthDelimited).string(r),
                t.tag(2, i.O0.LengthDelimited).fork(),
                h.internalBinaryWrite(e.gifs[r], t, n),
                t.join().join();
        !1 !== e.hideTooltip && t.tag(2, i.O0.Varint).bool(e.hideTooltip);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let f = new _();
class E extends o.G {
    constructor() {
        super("discord_protos.discord_users.v1.FavoriteGIF", [
            { no: 1, name: "format", kind: "enum", T: () => ["discord_protos.discord_users.v1.GIFType", u] },
            { no: 2, name: "src", kind: "scalar", T: 9 },
            { no: 3, name: "width", kind: "scalar", T: 13 },
            { no: 4, name: "height", kind: "scalar", T: 13 },
            { no: 5, name: "order", kind: "scalar", T: 13 },
        ]);
    }
    create(e) {
        let t = { format: 0, src: "", width: 0, height: 0, order: 0 };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let s = r ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    s.format = e.int32();
                    break;
                case 2:
                    s.src = e.string();
                    break;
                case 3:
                    s.width = e.uint32();
                    break;
                case 4:
                    s.height = e.uint32();
                    break;
                case 5:
                    s.order = e.uint32();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let o = e.skip(r);
                    !1 !== a && (!0 === a ? i.f$.onRead : a)(this.typeName, s, t, r, o);
            }
        }
        return s;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.format && t.tag(1, i.O0.Varint).int32(e.format),
            "" !== e.src && t.tag(2, i.O0.LengthDelimited).string(e.src),
            0 !== e.width && t.tag(3, i.O0.Varint).uint32(e.width),
            0 !== e.height && t.tag(4, i.O0.Varint).uint32(e.height),
            0 !== e.order && t.tag(5, i.O0.Varint).uint32(e.order);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let h = new E();
class p extends o.G {
    constructor() {
        super("discord_protos.discord_users.v1.FavoriteStickers", [
            { no: 1, name: "sticker_ids", kind: "scalar", repeat: 1, T: 6 },
        ]);
    }
    create(e) {
        let t = { stickerIds: [] };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let s = r ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            if (1 === t)
                if (r === i.O0.LengthDelimited)
                    for (let t = e.int32() + e.pos; e.pos < t; ) s.stickerIds.push(e.fixed64().toString());
                else s.stickerIds.push(e.fixed64().toString());
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                let o = e.skip(r);
                !1 !== a && (!0 === a ? i.f$.onRead : a)(this.typeName, s, t, r, o);
            }
        }
        return s;
    }
    internalBinaryWrite(e, t, n) {
        if (e.stickerIds.length) {
            t.tag(1, i.O0.LengthDelimited).fork();
            for (let n = 0; n < e.stickerIds.length; n++) t.fixed64(e.stickerIds[n]);
            t.join();
        }
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let m = new p();
class g extends o.G {
    constructor() {
        super("discord_protos.discord_users.v1.StickerFrecency", [
            { no: 1, name: "stickers", kind: "map", K: 6, V: { kind: "message", T: () => v } },
        ]);
    }
    create(e) {
        let t = { stickers: {} };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let s = r ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            if (1 === t) this.binaryReadMap1(s.stickers, e, n);
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                let o = e.skip(r);
                !1 !== a && (!0 === a ? i.f$.onRead : a)(this.typeName, s, t, r, o);
            }
        }
        return s;
    }
    binaryReadMap1(e, t, n) {
        let r = t.uint32(),
            i = t.pos + r,
            s,
            a;
        for (; t.pos < i; ) {
            let [e, r] = t.tag();
            switch (e) {
                case 1:
                    s = t.fixed64().toString();
                    break;
                case 2:
                    a = v.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.discord_users.v1.StickerFrecency.stickers",
                    );
            }
        }
        e[s ?? "0"] = a ?? v.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let r of Object.keys(e.stickers))
            t.tag(1, i.O0.LengthDelimited).fork().tag(1, i.O0.Bit64).fixed64(r),
                t.tag(2, i.O0.LengthDelimited).fork(),
                v.internalBinaryWrite(e.stickers[r], t, n),
                t.join().join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let A = new g();
class I extends o.G {
    constructor() {
        super("discord_protos.discord_users.v1.FavoriteEmojis", [
            { no: 1, name: "emojis", kind: "scalar", repeat: 2, T: 9 },
        ]);
    }
    create(e) {
        let t = { emojis: [] };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let s = r ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            if (1 === t) s.emojis.push(e.string());
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                let o = e.skip(r);
                !1 !== a && (!0 === a ? i.f$.onRead : a)(this.typeName, s, t, r, o);
            }
        }
        return s;
    }
    internalBinaryWrite(e, t, n) {
        for (let n = 0; n < e.emojis.length; n++) t.tag(1, i.O0.LengthDelimited).string(e.emojis[n]);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let T = new I();
class S extends o.G {
    constructor() {
        super("discord_protos.discord_users.v1.EmojiFrecency", [
            { no: 1, name: "emojis", kind: "map", K: 9, V: { kind: "message", T: () => v } },
        ]);
    }
    create(e) {
        let t = { emojis: {} };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let s = r ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            if (1 === t) this.binaryReadMap1(s.emojis, e, n);
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                let o = e.skip(r);
                !1 !== a && (!0 === a ? i.f$.onRead : a)(this.typeName, s, t, r, o);
            }
        }
        return s;
    }
    binaryReadMap1(e, t, n) {
        let r = t.uint32(),
            i = t.pos + r,
            s,
            a;
        for (; t.pos < i; ) {
            let [e, r] = t.tag();
            switch (e) {
                case 1:
                    s = t.string();
                    break;
                case 2:
                    a = v.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.discord_users.v1.EmojiFrecency.emojis",
                    );
            }
        }
        e[s ?? ""] = a ?? v.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let r of Object.keys(e.emojis))
            t.tag(1, i.O0.LengthDelimited).fork().tag(1, i.O0.LengthDelimited).string(r),
                t.tag(2, i.O0.LengthDelimited).fork(),
                v.internalBinaryWrite(e.emojis[r], t, n),
                t.join().join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let y = new S();
class N extends o.G {
    constructor() {
        super("discord_protos.discord_users.v1.ApplicationCommandFrecency", [
            { no: 1, name: "application_commands", kind: "map", K: 9, V: { kind: "message", T: () => v } },
        ]);
    }
    create(e) {
        let t = { applicationCommands: {} };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let s = r ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            if (1 === t) this.binaryReadMap1(s.applicationCommands, e, n);
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                let o = e.skip(r);
                !1 !== a && (!0 === a ? i.f$.onRead : a)(this.typeName, s, t, r, o);
            }
        }
        return s;
    }
    binaryReadMap1(e, t, n) {
        let r = t.uint32(),
            i = t.pos + r,
            s,
            a;
        for (; t.pos < i; ) {
            let [e, r] = t.tag();
            switch (e) {
                case 1:
                    s = t.string();
                    break;
                case 2:
                    a = v.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.discord_users.v1.ApplicationCommandFrecency.application_commands",
                    );
            }
        }
        e[s ?? ""] = a ?? v.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let r of Object.keys(e.applicationCommands))
            t.tag(1, i.O0.LengthDelimited).fork().tag(1, i.O0.LengthDelimited).string(r),
                t.tag(2, i.O0.LengthDelimited).fork(),
                v.internalBinaryWrite(e.applicationCommands[r], t, n),
                t.join().join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let O = new N();
class R extends o.G {
    constructor() {
        super("discord_protos.discord_users.v1.FrecencyItem", [
            { no: 1, name: "total_uses", kind: "scalar", T: 13 },
            { no: 2, name: "recent_uses", kind: "scalar", repeat: 1, T: 4 },
            { no: 3, name: "frecency", kind: "scalar", T: 5 },
            { no: 4, name: "score", kind: "scalar", T: 5 },
        ]);
    }
    create(e) {
        let t = { totalUses: 0, recentUses: [], frecency: 0, score: 0 };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let s = r ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    s.totalUses = e.uint32();
                    break;
                case 2:
                    if (r === i.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t; ) s.recentUses.push(e.uint64().toString());
                    else s.recentUses.push(e.uint64().toString());
                    break;
                case 3:
                    s.frecency = e.int32();
                    break;
                case 4:
                    s.score = e.int32();
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                    let o = e.skip(r);
                    !1 !== a && (!0 === a ? i.f$.onRead : a)(this.typeName, s, t, r, o);
            }
        }
        return s;
    }
    internalBinaryWrite(e, t, n) {
        if ((0 !== e.totalUses && t.tag(1, i.O0.Varint).uint32(e.totalUses), e.recentUses.length)) {
            t.tag(2, i.O0.LengthDelimited).fork();
            for (let n = 0; n < e.recentUses.length; n++) t.uint64(e.recentUses[n]);
            t.join();
        }
        0 !== e.frecency && t.tag(3, i.O0.Varint).int32(e.frecency),
            0 !== e.score && t.tag(4, i.O0.Varint).int32(e.score);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let v = new R();
class C extends o.G {
    constructor() {
        super("discord_protos.discord_users.v1.FavoriteSoundboardSounds", [
            { no: 1, name: "sound_ids", kind: "scalar", repeat: 1, T: 6 },
        ]);
    }
    create(e) {
        let t = { soundIds: [] };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let s = r ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            if (1 === t)
                if (r === i.O0.LengthDelimited)
                    for (let t = e.int32() + e.pos; e.pos < t; ) s.soundIds.push(e.fixed64().toString());
                else s.soundIds.push(e.fixed64().toString());
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                let o = e.skip(r);
                !1 !== a && (!0 === a ? i.f$.onRead : a)(this.typeName, s, t, r, o);
            }
        }
        return s;
    }
    internalBinaryWrite(e, t, n) {
        if (e.soundIds.length) {
            t.tag(1, i.O0.LengthDelimited).fork();
            for (let n = 0; n < e.soundIds.length; n++) t.fixed64(e.soundIds[n]);
            t.join();
        }
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let b = new C();
class D extends o.G {
    constructor() {
        super("discord_protos.discord_users.v1.HeardSoundFrecency", [
            { no: 1, name: "heard_sounds", kind: "map", K: 9, V: { kind: "message", T: () => v } },
        ]);
    }
    create(e) {
        let t = { heardSounds: {} };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let s = r ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            if (1 === t) this.binaryReadMap1(s.heardSounds, e, n);
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                let o = e.skip(r);
                !1 !== a && (!0 === a ? i.f$.onRead : a)(this.typeName, s, t, r, o);
            }
        }
        return s;
    }
    binaryReadMap1(e, t, n) {
        let r = t.uint32(),
            i = t.pos + r,
            s,
            a;
        for (; t.pos < i; ) {
            let [e, r] = t.tag();
            switch (e) {
                case 1:
                    s = t.string();
                    break;
                case 2:
                    a = v.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.discord_users.v1.HeardSoundFrecency.heard_sounds",
                    );
            }
        }
        e[s ?? ""] = a ?? v.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let r of Object.keys(e.heardSounds))
            t.tag(1, i.O0.LengthDelimited).fork().tag(1, i.O0.LengthDelimited).string(r),
                t.tag(2, i.O0.LengthDelimited).fork(),
                v.internalBinaryWrite(e.heardSounds[r], t, n),
                t.join().join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let L = new D();
class w extends o.G {
    constructor() {
        super("discord_protos.discord_users.v1.PlayedSoundFrecency", [
            { no: 1, name: "played_sounds", kind: "map", K: 9, V: { kind: "message", T: () => v } },
        ]);
    }
    create(e) {
        let t = { playedSounds: {} };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let s = r ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            if (1 === t) this.binaryReadMap1(s.playedSounds, e, n);
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                let o = e.skip(r);
                !1 !== a && (!0 === a ? i.f$.onRead : a)(this.typeName, s, t, r, o);
            }
        }
        return s;
    }
    binaryReadMap1(e, t, n) {
        let r = t.uint32(),
            i = t.pos + r,
            s,
            a;
        for (; t.pos < i; ) {
            let [e, r] = t.tag();
            switch (e) {
                case 1:
                    s = t.string();
                    break;
                case 2:
                    a = v.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.discord_users.v1.PlayedSoundFrecency.played_sounds",
                    );
            }
        }
        e[s ?? ""] = a ?? v.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let r of Object.keys(e.playedSounds))
            t.tag(1, i.O0.LengthDelimited).fork().tag(1, i.O0.LengthDelimited).string(r),
                t.tag(2, i.O0.LengthDelimited).fork(),
                v.internalBinaryWrite(e.playedSounds[r], t, n),
                t.join().join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let M = new w();
class P extends o.G {
    constructor() {
        super("discord_protos.discord_users.v1.ApplicationFrecency", [
            { no: 1, name: "applications", kind: "map", K: 9, V: { kind: "message", T: () => v } },
        ]);
    }
    create(e) {
        let t = { applications: {} };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let s = r ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            if (1 === t) this.binaryReadMap1(s.applications, e, n);
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                let o = e.skip(r);
                !1 !== a && (!0 === a ? i.f$.onRead : a)(this.typeName, s, t, r, o);
            }
        }
        return s;
    }
    binaryReadMap1(e, t, n) {
        let r = t.uint32(),
            i = t.pos + r,
            s,
            a;
        for (; t.pos < i; ) {
            let [e, r] = t.tag();
            switch (e) {
                case 1:
                    s = t.string();
                    break;
                case 2:
                    a = v.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.discord_users.v1.ApplicationFrecency.applications",
                    );
            }
        }
        e[s ?? ""] = a ?? v.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let r of Object.keys(e.applications))
            t.tag(1, i.O0.LengthDelimited).fork().tag(1, i.O0.LengthDelimited).string(r),
                t.tag(2, i.O0.LengthDelimited).fork(),
                v.internalBinaryWrite(e.applications[r], t, n),
                t.join().join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let U = new P();
class k extends o.G {
    constructor() {
        super("discord_protos.discord_users.v1.GuildAndChannelFrecency", [
            { no: 1, name: "guild_and_channels", kind: "map", K: 6, V: { kind: "message", T: () => v } },
        ]);
    }
    create(e) {
        let t = { guildAndChannels: {} };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, s.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let s = r ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, r] = e.tag();
            if (1 === t) this.binaryReadMap1(s.guildAndChannels, e, n);
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${r}) for ${this.typeName}`);
                let o = e.skip(r);
                !1 !== a && (!0 === a ? i.f$.onRead : a)(this.typeName, s, t, r, o);
            }
        }
        return s;
    }
    binaryReadMap1(e, t, n) {
        let r = t.uint32(),
            i = t.pos + r,
            s,
            a;
        for (; t.pos < i; ) {
            let [e, r] = t.tag();
            switch (e) {
                case 1:
                    s = t.fixed64().toString();
                    break;
                case 2:
                    a = v.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.discord_users.v1.GuildAndChannelFrecency.guild_and_channels",
                    );
            }
        }
        e[s ?? "0"] = a ?? v.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let r of Object.keys(e.guildAndChannels))
            t.tag(1, i.O0.LengthDelimited).fork().tag(1, i.O0.Bit64).fixed64(r),
                t.tag(2, i.O0.LengthDelimited).fork(),
                v.internalBinaryWrite(e.guildAndChannels[r], t, n),
                t.join().join();
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.f$.onWrite : r)(this.typeName, e, t), t;
    }
}
let x = new k();
