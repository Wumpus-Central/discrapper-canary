"use strict";
n.d(t, {
    Do: () => A,
    F1: () => U,
    Q8: () => S,
    Qn: () => O,
    TL: () => l,
    Zc: () => C,
    aw: () => c,
    cC: () => M,
    gW: () => T,
    tC: () => h,
    tQ: () => g,
    uz: () => _,
    zT: () => N,
}),
    n(321073);
var r = n(852015),
    i = n(144367),
    a = n(428420),
    s = n(324281),
    o = n(813827),
    l = (function (e) {
        return (e[(e.NONE = 0)] = "NONE"), (e[(e.IMAGE = 1)] = "IMAGE"), (e[(e.VIDEO = 2)] = "VIDEO"), e;
    })({});
class u extends s.G {
    constructor() {
        super("discord_protos.discord_users.v1.FrecencyUserSettings", [
            { no: 1, name: "versions", kind: "message", T: () => o.u },
            { no: 2, name: "favorite_gifs", kind: "message", T: () => _ },
            { no: 3, name: "favorite_stickers", kind: "message", T: () => g },
            { no: 4, name: "sticker_frecency", kind: "message", T: () => A },
            { no: 5, name: "favorite_emojis", kind: "message", T: () => T },
            { no: 6, name: "emoji_frecency", kind: "message", T: () => S },
            { no: 7, name: "application_command_frecency", kind: "message", T: () => C },
            { no: 8, name: "favorite_soundboard_sounds", kind: "message", T: () => O },
            { no: 9, name: "application_frecency", kind: "message", T: () => M },
            { no: 10, name: "heard_sound_frecency", kind: "message", T: () => L },
            { no: 11, name: "played_sound_frecency", kind: "message", T: () => x },
            { no: 12, name: "guild_and_channel_frecency", kind: "message", T: () => U },
            { no: 13, name: "emoji_reaction_frecency", kind: "message", T: () => S },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    a.versions = o.u.internalBinaryRead(e, e.uint32(), n, a.versions);
                    break;
                case 2:
                    a.favoriteGifs = _.internalBinaryRead(e, e.uint32(), n, a.favoriteGifs);
                    break;
                case 3:
                    a.favoriteStickers = g.internalBinaryRead(e, e.uint32(), n, a.favoriteStickers);
                    break;
                case 4:
                    a.stickerFrecency = A.internalBinaryRead(e, e.uint32(), n, a.stickerFrecency);
                    break;
                case 5:
                    a.favoriteEmojis = T.internalBinaryRead(e, e.uint32(), n, a.favoriteEmojis);
                    break;
                case 6:
                    a.emojiFrecency = S.internalBinaryRead(e, e.uint32(), n, a.emojiFrecency);
                    break;
                case 7:
                    a.applicationCommandFrecency = C.internalBinaryRead(e, e.uint32(), n, a.applicationCommandFrecency);
                    break;
                case 8:
                    a.favoriteSoundboardSounds = O.internalBinaryRead(e, e.uint32(), n, a.favoriteSoundboardSounds);
                    break;
                case 9:
                    a.applicationFrecency = M.internalBinaryRead(e, e.uint32(), n, a.applicationFrecency);
                    break;
                case 10:
                    a.heardSoundFrecency = L.internalBinaryRead(e, e.uint32(), n, a.heardSoundFrecency);
                    break;
                case 11:
                    a.playedSoundFrecency = x.internalBinaryRead(e, e.uint32(), n, a.playedSoundFrecency);
                    break;
                case 12:
                    a.guildAndChannelFrecency = U.internalBinaryRead(e, e.uint32(), n, a.guildAndChannelFrecency);
                    break;
                case 13:
                    a.emojiReactionFrecency = S.internalBinaryRead(e, e.uint32(), n, a.emojiReactionFrecency);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, l);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        e.versions && o.u.internalBinaryWrite(e.versions, t.tag(1, r.O0.LengthDelimited).fork(), n).join(),
            e.favoriteGifs && _.internalBinaryWrite(e.favoriteGifs, t.tag(2, r.O0.LengthDelimited).fork(), n).join(),
            e.favoriteStickers &&
                g.internalBinaryWrite(e.favoriteStickers, t.tag(3, r.O0.LengthDelimited).fork(), n).join(),
            e.stickerFrecency &&
                A.internalBinaryWrite(e.stickerFrecency, t.tag(4, r.O0.LengthDelimited).fork(), n).join(),
            e.favoriteEmojis &&
                T.internalBinaryWrite(e.favoriteEmojis, t.tag(5, r.O0.LengthDelimited).fork(), n).join(),
            e.emojiFrecency && S.internalBinaryWrite(e.emojiFrecency, t.tag(6, r.O0.LengthDelimited).fork(), n).join(),
            e.applicationCommandFrecency &&
                C.internalBinaryWrite(e.applicationCommandFrecency, t.tag(7, r.O0.LengthDelimited).fork(), n).join(),
            e.favoriteSoundboardSounds &&
                O.internalBinaryWrite(e.favoriteSoundboardSounds, t.tag(8, r.O0.LengthDelimited).fork(), n).join(),
            e.applicationFrecency &&
                M.internalBinaryWrite(e.applicationFrecency, t.tag(9, r.O0.LengthDelimited).fork(), n).join(),
            e.heardSoundFrecency &&
                L.internalBinaryWrite(e.heardSoundFrecency, t.tag(10, r.O0.LengthDelimited).fork(), n).join(),
            e.playedSoundFrecency &&
                x.internalBinaryWrite(e.playedSoundFrecency, t.tag(11, r.O0.LengthDelimited).fork(), n).join(),
            e.guildAndChannelFrecency &&
                U.internalBinaryWrite(e.guildAndChannelFrecency, t.tag(12, r.O0.LengthDelimited).fork(), n).join(),
            e.emojiReactionFrecency &&
                S.internalBinaryWrite(e.emojiReactionFrecency, t.tag(13, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let c = new u();
class d extends s.G {
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
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    this.binaryReadMap1(a.gifs, e, n);
                    break;
                case 2:
                    a.hideTooltip = e.bool();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, o);
            }
        }
        return a;
    }
    binaryReadMap1(e, t, n) {
        let r = t.uint32(),
            i = t.pos + r,
            a,
            s;
        for (; t.pos < i; ) {
            let [e, r] = t.tag();
            switch (e) {
                case 1:
                    a = t.string();
                    break;
                case 2:
                    s = h.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.discord_users.v1.FavoriteGIFs.gifs",
                    );
            }
        }
        e[a ?? ""] = s ?? h.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let i of Object.keys(e.gifs))
            t.tag(1, r.O0.LengthDelimited).fork().tag(1, r.O0.LengthDelimited).string(i),
                t.tag(2, r.O0.LengthDelimited).fork(),
                h.internalBinaryWrite(e.gifs[i], t, n),
                t.join().join();
        !1 !== e.hideTooltip && t.tag(2, r.O0.Varint).bool(e.hideTooltip);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let _ = new d();
class f extends s.G {
    constructor() {
        super("discord_protos.discord_users.v1.FavoriteGIF", [
            { no: 1, name: "format", kind: "enum", T: () => ["discord_protos.discord_users.v1.GIFType", l] },
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
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    a.format = e.int32();
                    break;
                case 2:
                    a.src = e.string();
                    break;
                case 3:
                    a.width = e.uint32();
                    break;
                case 4:
                    a.height = e.uint32();
                    break;
                case 5:
                    a.order = e.uint32();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, o);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.format && t.tag(1, r.O0.Varint).int32(e.format),
            "" !== e.src && t.tag(2, r.O0.LengthDelimited).string(e.src),
            0 !== e.width && t.tag(3, r.O0.Varint).uint32(e.width),
            0 !== e.height && t.tag(4, r.O0.Varint).uint32(e.height),
            0 !== e.order && t.tag(5, r.O0.Varint).uint32(e.order);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let h = new f();
class p extends s.G {
    constructor() {
        super("discord_protos.discord_users.v1.FavoriteStickers", [
            { no: 1, name: "sticker_ids", kind: "scalar", repeat: 1, T: 6 },
        ]);
    }
    create(e) {
        let t = { stickerIds: [] };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t)
                if (i === r.O0.LengthDelimited)
                    for (let t = e.int32() + e.pos; e.pos < t; ) a.stickerIds.push(e.fixed64().toString());
                else a.stickerIds.push(e.fixed64().toString());
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let o = e.skip(i);
                !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, o);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        if (e.stickerIds.length) {
            t.tag(1, r.O0.LengthDelimited).fork();
            for (let n = 0; n < e.stickerIds.length; n++) t.fixed64(e.stickerIds[n]);
            t.join();
        }
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let g = new p();
class E extends s.G {
    constructor() {
        super("discord_protos.discord_users.v1.StickerFrecency", [
            { no: 1, name: "stickers", kind: "map", K: 6, V: { kind: "message", T: () => N } },
        ]);
    }
    create(e) {
        let t = { stickers: {} };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t) this.binaryReadMap1(a.stickers, e, n);
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let o = e.skip(i);
                !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, o);
            }
        }
        return a;
    }
    binaryReadMap1(e, t, n) {
        let r = t.uint32(),
            i = t.pos + r,
            a,
            s;
        for (; t.pos < i; ) {
            let [e, r] = t.tag();
            switch (e) {
                case 1:
                    a = t.fixed64().toString();
                    break;
                case 2:
                    s = N.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.discord_users.v1.StickerFrecency.stickers",
                    );
            }
        }
        e[a ?? "0"] = s ?? N.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let i of Object.keys(e.stickers))
            t.tag(1, r.O0.LengthDelimited).fork().tag(1, r.O0.Bit64).fixed64(i),
                t.tag(2, r.O0.LengthDelimited).fork(),
                N.internalBinaryWrite(e.stickers[i], t, n),
                t.join().join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let A = new E();
class I extends s.G {
    constructor() {
        super("discord_protos.discord_users.v1.FavoriteEmojis", [
            { no: 1, name: "emojis", kind: "scalar", repeat: 2, T: 9 },
        ]);
    }
    create(e) {
        let t = { emojis: [] };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t) a.emojis.push(e.string());
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let o = e.skip(i);
                !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, o);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        for (let n = 0; n < e.emojis.length; n++) t.tag(1, r.O0.LengthDelimited).string(e.emojis[n]);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let T = new I();
class y extends s.G {
    constructor() {
        super("discord_protos.discord_users.v1.EmojiFrecency", [
            { no: 1, name: "emojis", kind: "map", K: 9, V: { kind: "message", T: () => N } },
        ]);
    }
    create(e) {
        let t = { emojis: {} };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t) this.binaryReadMap1(a.emojis, e, n);
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let o = e.skip(i);
                !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, o);
            }
        }
        return a;
    }
    binaryReadMap1(e, t, n) {
        let r = t.uint32(),
            i = t.pos + r,
            a,
            s;
        for (; t.pos < i; ) {
            let [e, r] = t.tag();
            switch (e) {
                case 1:
                    a = t.string();
                    break;
                case 2:
                    s = N.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.discord_users.v1.EmojiFrecency.emojis",
                    );
            }
        }
        e[a ?? ""] = s ?? N.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let i of Object.keys(e.emojis))
            t.tag(1, r.O0.LengthDelimited).fork().tag(1, r.O0.LengthDelimited).string(i),
                t.tag(2, r.O0.LengthDelimited).fork(),
                N.internalBinaryWrite(e.emojis[i], t, n),
                t.join().join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let S = new y();
class v extends s.G {
    constructor() {
        super("discord_protos.discord_users.v1.ApplicationCommandFrecency", [
            { no: 1, name: "application_commands", kind: "map", K: 9, V: { kind: "message", T: () => N } },
        ]);
    }
    create(e) {
        let t = { applicationCommands: {} };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t) this.binaryReadMap1(a.applicationCommands, e, n);
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let o = e.skip(i);
                !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, o);
            }
        }
        return a;
    }
    binaryReadMap1(e, t, n) {
        let r = t.uint32(),
            i = t.pos + r,
            a,
            s;
        for (; t.pos < i; ) {
            let [e, r] = t.tag();
            switch (e) {
                case 1:
                    a = t.string();
                    break;
                case 2:
                    s = N.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.discord_users.v1.ApplicationCommandFrecency.application_commands",
                    );
            }
        }
        e[a ?? ""] = s ?? N.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let i of Object.keys(e.applicationCommands))
            t.tag(1, r.O0.LengthDelimited).fork().tag(1, r.O0.LengthDelimited).string(i),
                t.tag(2, r.O0.LengthDelimited).fork(),
                N.internalBinaryWrite(e.applicationCommands[i], t, n),
                t.join().join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let C = new v();
class b extends s.G {
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
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    a.totalUses = e.uint32();
                    break;
                case 2:
                    if (i === r.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t; ) a.recentUses.push(e.uint64().toString());
                    else a.recentUses.push(e.uint64().toString());
                    break;
                case 3:
                    a.frecency = e.int32();
                    break;
                case 4:
                    a.score = e.int32();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, o);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        if ((0 !== e.totalUses && t.tag(1, r.O0.Varint).uint32(e.totalUses), e.recentUses.length)) {
            t.tag(2, r.O0.LengthDelimited).fork();
            for (let n = 0; n < e.recentUses.length; n++) t.uint64(e.recentUses[n]);
            t.join();
        }
        0 !== e.frecency && t.tag(3, r.O0.Varint).int32(e.frecency),
            0 !== e.score && t.tag(4, r.O0.Varint).int32(e.score);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let N = new b();
class R extends s.G {
    constructor() {
        super("discord_protos.discord_users.v1.FavoriteSoundboardSounds", [
            { no: 1, name: "sound_ids", kind: "scalar", repeat: 1, T: 6 },
        ]);
    }
    create(e) {
        let t = { soundIds: [] };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t)
                if (i === r.O0.LengthDelimited)
                    for (let t = e.int32() + e.pos; e.pos < t; ) a.soundIds.push(e.fixed64().toString());
                else a.soundIds.push(e.fixed64().toString());
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let o = e.skip(i);
                !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, o);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        if (e.soundIds.length) {
            t.tag(1, r.O0.LengthDelimited).fork();
            for (let n = 0; n < e.soundIds.length; n++) t.fixed64(e.soundIds[n]);
            t.join();
        }
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let O = new R();
class D extends s.G {
    constructor() {
        super("discord_protos.discord_users.v1.HeardSoundFrecency", [
            { no: 1, name: "heard_sounds", kind: "map", K: 9, V: { kind: "message", T: () => N } },
        ]);
    }
    create(e) {
        let t = { heardSounds: {} };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t) this.binaryReadMap1(a.heardSounds, e, n);
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let o = e.skip(i);
                !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, o);
            }
        }
        return a;
    }
    binaryReadMap1(e, t, n) {
        let r = t.uint32(),
            i = t.pos + r,
            a,
            s;
        for (; t.pos < i; ) {
            let [e, r] = t.tag();
            switch (e) {
                case 1:
                    a = t.string();
                    break;
                case 2:
                    s = N.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.discord_users.v1.HeardSoundFrecency.heard_sounds",
                    );
            }
        }
        e[a ?? ""] = s ?? N.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let i of Object.keys(e.heardSounds))
            t.tag(1, r.O0.LengthDelimited).fork().tag(1, r.O0.LengthDelimited).string(i),
                t.tag(2, r.O0.LengthDelimited).fork(),
                N.internalBinaryWrite(e.heardSounds[i], t, n),
                t.join().join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let L = new D();
class w extends s.G {
    constructor() {
        super("discord_protos.discord_users.v1.PlayedSoundFrecency", [
            { no: 1, name: "played_sounds", kind: "map", K: 9, V: { kind: "message", T: () => N } },
        ]);
    }
    create(e) {
        let t = { playedSounds: {} };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t) this.binaryReadMap1(a.playedSounds, e, n);
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let o = e.skip(i);
                !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, o);
            }
        }
        return a;
    }
    binaryReadMap1(e, t, n) {
        let r = t.uint32(),
            i = t.pos + r,
            a,
            s;
        for (; t.pos < i; ) {
            let [e, r] = t.tag();
            switch (e) {
                case 1:
                    a = t.string();
                    break;
                case 2:
                    s = N.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.discord_users.v1.PlayedSoundFrecency.played_sounds",
                    );
            }
        }
        e[a ?? ""] = s ?? N.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let i of Object.keys(e.playedSounds))
            t.tag(1, r.O0.LengthDelimited).fork().tag(1, r.O0.LengthDelimited).string(i),
                t.tag(2, r.O0.LengthDelimited).fork(),
                N.internalBinaryWrite(e.playedSounds[i], t, n),
                t.join().join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let x = new w();
class P extends s.G {
    constructor() {
        super("discord_protos.discord_users.v1.ApplicationFrecency", [
            { no: 1, name: "applications", kind: "map", K: 9, V: { kind: "message", T: () => N } },
        ]);
    }
    create(e) {
        let t = { applications: {} };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t) this.binaryReadMap1(a.applications, e, n);
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let o = e.skip(i);
                !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, o);
            }
        }
        return a;
    }
    binaryReadMap1(e, t, n) {
        let r = t.uint32(),
            i = t.pos + r,
            a,
            s;
        for (; t.pos < i; ) {
            let [e, r] = t.tag();
            switch (e) {
                case 1:
                    a = t.string();
                    break;
                case 2:
                    s = N.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.discord_users.v1.ApplicationFrecency.applications",
                    );
            }
        }
        e[a ?? ""] = s ?? N.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let i of Object.keys(e.applications))
            t.tag(1, r.O0.LengthDelimited).fork().tag(1, r.O0.LengthDelimited).string(i),
                t.tag(2, r.O0.LengthDelimited).fork(),
                N.internalBinaryWrite(e.applications[i], t, n),
                t.join().join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let M = new P();
class k extends s.G {
    constructor() {
        super("discord_protos.discord_users.v1.GuildAndChannelFrecency", [
            { no: 1, name: "guild_and_channels", kind: "map", K: 6, V: { kind: "message", T: () => N } },
        ]);
    }
    create(e) {
        let t = { guildAndChannels: {} };
        return (
            globalThis.Object.defineProperty(t, a.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, i.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let a = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t) this.binaryReadMap1(a.guildAndChannels, e, n);
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let o = e.skip(i);
                !1 !== s && (!0 === s ? r.f$.onRead : s)(this.typeName, a, t, i, o);
            }
        }
        return a;
    }
    binaryReadMap1(e, t, n) {
        let r = t.uint32(),
            i = t.pos + r,
            a,
            s;
        for (; t.pos < i; ) {
            let [e, r] = t.tag();
            switch (e) {
                case 1:
                    a = t.fixed64().toString();
                    break;
                case 2:
                    s = N.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.discord_users.v1.GuildAndChannelFrecency.guild_and_channels",
                    );
            }
        }
        e[a ?? "0"] = s ?? N.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let i of Object.keys(e.guildAndChannels))
            t.tag(1, r.O0.LengthDelimited).fork().tag(1, r.O0.Bit64).fixed64(i),
                t.tag(2, r.O0.LengthDelimited).fork(),
                N.internalBinaryWrite(e.guildAndChannels[i], t, n),
                t.join().join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let U = new k();
