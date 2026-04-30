"use strict";
n.d(t, {
    Do: () => A,
    F1: () => k,
    Q8: () => N,
    Qn: () => b,
    TL: () => u,
    Zc: () => C,
    aw: () => d,
    cC: () => x,
    gW: () => T,
    tC: () => p,
    tQ: () => m,
    uz: () => f,
    zT: () => O,
}),
    n(321073);
var i,
    r = n(852015),
    s = n(144367),
    a = n(428420),
    o = n(535384),
    l = n(813827),
    u = (((i = {})[(i.NONE = 0)] = "NONE"), (i[(i.IMAGE = 1)] = "IMAGE"), (i[(i.VIDEO = 2)] = "VIDEO"), i);
class c extends o.G {
    constructor() {
        super("discord_protos.discord_users.v1.FrecencyUserSettings", [
            { no: 1, name: "versions", kind: "message", T: () => l.u },
            { no: 2, name: "favorite_gifs", kind: "message", T: () => f },
            { no: 3, name: "favorite_stickers", kind: "message", T: () => m },
            { no: 4, name: "sticker_frecency", kind: "message", T: () => A },
            { no: 5, name: "favorite_emojis", kind: "message", T: () => T },
            { no: 6, name: "emoji_frecency", kind: "message", T: () => N },
            { no: 7, name: "application_command_frecency", kind: "message", T: () => C },
            { no: 8, name: "favorite_soundboard_sounds", kind: "message", T: () => b },
            { no: 9, name: "application_frecency", kind: "message", T: () => x },
            { no: 10, name: "heard_sound_frecency", kind: "message", T: () => L },
            { no: 11, name: "played_sound_frecency", kind: "message", T: () => M },
            { no: 12, name: "guild_and_channel_frecency", kind: "message", T: () => k },
            { no: 13, name: "emoji_reaction_frecency", kind: "message", T: () => N },
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
    internalBinaryRead(e, t, n, i) {
        let s = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
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
                    s.emojiFrecency = N.internalBinaryRead(e, e.uint32(), n, s.emojiFrecency);
                    break;
                case 7:
                    s.applicationCommandFrecency = C.internalBinaryRead(e, e.uint32(), n, s.applicationCommandFrecency);
                    break;
                case 8:
                    s.favoriteSoundboardSounds = b.internalBinaryRead(e, e.uint32(), n, s.favoriteSoundboardSounds);
                    break;
                case 9:
                    s.applicationFrecency = x.internalBinaryRead(e, e.uint32(), n, s.applicationFrecency);
                    break;
                case 10:
                    s.heardSoundFrecency = L.internalBinaryRead(e, e.uint32(), n, s.heardSoundFrecency);
                    break;
                case 11:
                    s.playedSoundFrecency = M.internalBinaryRead(e, e.uint32(), n, s.playedSoundFrecency);
                    break;
                case 12:
                    s.guildAndChannelFrecency = k.internalBinaryRead(e, e.uint32(), n, s.guildAndChannelFrecency);
                    break;
                case 13:
                    s.emojiReactionFrecency = N.internalBinaryRead(e, e.uint32(), n, s.emojiReactionFrecency);
                    break;
                default:
                    let a = n.readUnknownField;
                    if ("throw" === a)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? r.f$.onRead : a)(this.typeName, s, t, i, o);
            }
        }
        return s;
    }
    internalBinaryWrite(e, t, n) {
        e.versions && l.u.internalBinaryWrite(e.versions, t.tag(1, r.O0.LengthDelimited).fork(), n).join(),
            e.favoriteGifs && f.internalBinaryWrite(e.favoriteGifs, t.tag(2, r.O0.LengthDelimited).fork(), n).join(),
            e.favoriteStickers &&
                m.internalBinaryWrite(e.favoriteStickers, t.tag(3, r.O0.LengthDelimited).fork(), n).join(),
            e.stickerFrecency &&
                A.internalBinaryWrite(e.stickerFrecency, t.tag(4, r.O0.LengthDelimited).fork(), n).join(),
            e.favoriteEmojis &&
                T.internalBinaryWrite(e.favoriteEmojis, t.tag(5, r.O0.LengthDelimited).fork(), n).join(),
            e.emojiFrecency && N.internalBinaryWrite(e.emojiFrecency, t.tag(6, r.O0.LengthDelimited).fork(), n).join(),
            e.applicationCommandFrecency &&
                C.internalBinaryWrite(e.applicationCommandFrecency, t.tag(7, r.O0.LengthDelimited).fork(), n).join(),
            e.favoriteSoundboardSounds &&
                b.internalBinaryWrite(e.favoriteSoundboardSounds, t.tag(8, r.O0.LengthDelimited).fork(), n).join(),
            e.applicationFrecency &&
                x.internalBinaryWrite(e.applicationFrecency, t.tag(9, r.O0.LengthDelimited).fork(), n).join(),
            e.heardSoundFrecency &&
                L.internalBinaryWrite(e.heardSoundFrecency, t.tag(10, r.O0.LengthDelimited).fork(), n).join(),
            e.playedSoundFrecency &&
                M.internalBinaryWrite(e.playedSoundFrecency, t.tag(11, r.O0.LengthDelimited).fork(), n).join(),
            e.guildAndChannelFrecency &&
                k.internalBinaryWrite(e.guildAndChannelFrecency, t.tag(12, r.O0.LengthDelimited).fork(), n).join(),
            e.emojiReactionFrecency &&
                N.internalBinaryWrite(e.emojiReactionFrecency, t.tag(13, r.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let d = new c();
class _ extends o.G {
    constructor() {
        super("discord_protos.discord_users.v1.FavoriteGIFs", [
            { no: 1, name: "gifs", kind: "map", K: 9, V: { kind: "message", T: () => p } },
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
    internalBinaryRead(e, t, n, i) {
        let s = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
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
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? r.f$.onRead : a)(this.typeName, s, t, i, o);
            }
        }
        return s;
    }
    binaryReadMap1(e, t, n) {
        let i = t.uint32(),
            r = t.pos + i,
            s,
            a;
        for (; t.pos < r; ) {
            let [e, i] = t.tag();
            switch (e) {
                case 1:
                    s = t.string();
                    break;
                case 2:
                    a = p.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.discord_users.v1.FavoriteGIFs.gifs",
                    );
            }
        }
        e[s ?? ""] = a ?? p.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let i of Object.keys(e.gifs))
            t.tag(1, r.O0.LengthDelimited).fork().tag(1, r.O0.LengthDelimited).string(i),
                t.tag(2, r.O0.LengthDelimited).fork(),
                p.internalBinaryWrite(e.gifs[i], t, n),
                t.join().join();
        !1 !== e.hideTooltip && t.tag(2, r.O0.Varint).bool(e.hideTooltip);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let f = new _();
class h extends o.G {
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
    internalBinaryRead(e, t, n, i) {
        let s = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
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
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? r.f$.onRead : a)(this.typeName, s, t, i, o);
            }
        }
        return s;
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
let p = new h();
class E extends o.G {
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
    internalBinaryRead(e, t, n, i) {
        let s = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t)
                if (i === r.O0.LengthDelimited)
                    for (let t = e.int32() + e.pos; e.pos < t; ) s.stickerIds.push(e.fixed64().toString());
                else s.stickerIds.push(e.fixed64().toString());
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let o = e.skip(i);
                !1 !== a && (!0 === a ? r.f$.onRead : a)(this.typeName, s, t, i, o);
            }
        }
        return s;
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
let m = new E();
class g extends o.G {
    constructor() {
        super("discord_protos.discord_users.v1.StickerFrecency", [
            { no: 1, name: "stickers", kind: "map", K: 6, V: { kind: "message", T: () => O } },
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
    internalBinaryRead(e, t, n, i) {
        let s = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t) this.binaryReadMap1(s.stickers, e, n);
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let o = e.skip(i);
                !1 !== a && (!0 === a ? r.f$.onRead : a)(this.typeName, s, t, i, o);
            }
        }
        return s;
    }
    binaryReadMap1(e, t, n) {
        let i = t.uint32(),
            r = t.pos + i,
            s,
            a;
        for (; t.pos < r; ) {
            let [e, i] = t.tag();
            switch (e) {
                case 1:
                    s = t.fixed64().toString();
                    break;
                case 2:
                    a = O.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.discord_users.v1.StickerFrecency.stickers",
                    );
            }
        }
        e[s ?? "0"] = a ?? O.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let i of Object.keys(e.stickers))
            t.tag(1, r.O0.LengthDelimited).fork().tag(1, r.O0.Bit64).fixed64(i),
                t.tag(2, r.O0.LengthDelimited).fork(),
                O.internalBinaryWrite(e.stickers[i], t, n),
                t.join().join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
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
    internalBinaryRead(e, t, n, i) {
        let s = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t) s.emojis.push(e.string());
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let o = e.skip(i);
                !1 !== a && (!0 === a ? r.f$.onRead : a)(this.typeName, s, t, i, o);
            }
        }
        return s;
    }
    internalBinaryWrite(e, t, n) {
        for (let n = 0; n < e.emojis.length; n++) t.tag(1, r.O0.LengthDelimited).string(e.emojis[n]);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let T = new I();
class S extends o.G {
    constructor() {
        super("discord_protos.discord_users.v1.EmojiFrecency", [
            { no: 1, name: "emojis", kind: "map", K: 9, V: { kind: "message", T: () => O } },
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
    internalBinaryRead(e, t, n, i) {
        let s = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t) this.binaryReadMap1(s.emojis, e, n);
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let o = e.skip(i);
                !1 !== a && (!0 === a ? r.f$.onRead : a)(this.typeName, s, t, i, o);
            }
        }
        return s;
    }
    binaryReadMap1(e, t, n) {
        let i = t.uint32(),
            r = t.pos + i,
            s,
            a;
        for (; t.pos < r; ) {
            let [e, i] = t.tag();
            switch (e) {
                case 1:
                    s = t.string();
                    break;
                case 2:
                    a = O.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.discord_users.v1.EmojiFrecency.emojis",
                    );
            }
        }
        e[s ?? ""] = a ?? O.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let i of Object.keys(e.emojis))
            t.tag(1, r.O0.LengthDelimited).fork().tag(1, r.O0.LengthDelimited).string(i),
                t.tag(2, r.O0.LengthDelimited).fork(),
                O.internalBinaryWrite(e.emojis[i], t, n),
                t.join().join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let N = new S();
class y extends o.G {
    constructor() {
        super("discord_protos.discord_users.v1.ApplicationCommandFrecency", [
            { no: 1, name: "application_commands", kind: "map", K: 9, V: { kind: "message", T: () => O } },
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
    internalBinaryRead(e, t, n, i) {
        let s = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t) this.binaryReadMap1(s.applicationCommands, e, n);
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let o = e.skip(i);
                !1 !== a && (!0 === a ? r.f$.onRead : a)(this.typeName, s, t, i, o);
            }
        }
        return s;
    }
    binaryReadMap1(e, t, n) {
        let i = t.uint32(),
            r = t.pos + i,
            s,
            a;
        for (; t.pos < r; ) {
            let [e, i] = t.tag();
            switch (e) {
                case 1:
                    s = t.string();
                    break;
                case 2:
                    a = O.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.discord_users.v1.ApplicationCommandFrecency.application_commands",
                    );
            }
        }
        e[s ?? ""] = a ?? O.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let i of Object.keys(e.applicationCommands))
            t.tag(1, r.O0.LengthDelimited).fork().tag(1, r.O0.LengthDelimited).string(i),
                t.tag(2, r.O0.LengthDelimited).fork(),
                O.internalBinaryWrite(e.applicationCommands[i], t, n),
                t.join().join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let C = new y();
class v extends o.G {
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
    internalBinaryRead(e, t, n, i) {
        let s = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    s.totalUses = e.uint32();
                    break;
                case 2:
                    if (i === r.O0.LengthDelimited)
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
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let o = e.skip(i);
                    !1 !== a && (!0 === a ? r.f$.onRead : a)(this.typeName, s, t, i, o);
            }
        }
        return s;
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
let O = new v();
class R extends o.G {
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
    internalBinaryRead(e, t, n, i) {
        let s = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t)
                if (i === r.O0.LengthDelimited)
                    for (let t = e.int32() + e.pos; e.pos < t; ) s.soundIds.push(e.fixed64().toString());
                else s.soundIds.push(e.fixed64().toString());
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let o = e.skip(i);
                !1 !== a && (!0 === a ? r.f$.onRead : a)(this.typeName, s, t, i, o);
            }
        }
        return s;
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
let b = new R();
class D extends o.G {
    constructor() {
        super("discord_protos.discord_users.v1.HeardSoundFrecency", [
            { no: 1, name: "heard_sounds", kind: "map", K: 9, V: { kind: "message", T: () => O } },
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
    internalBinaryRead(e, t, n, i) {
        let s = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t) this.binaryReadMap1(s.heardSounds, e, n);
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let o = e.skip(i);
                !1 !== a && (!0 === a ? r.f$.onRead : a)(this.typeName, s, t, i, o);
            }
        }
        return s;
    }
    binaryReadMap1(e, t, n) {
        let i = t.uint32(),
            r = t.pos + i,
            s,
            a;
        for (; t.pos < r; ) {
            let [e, i] = t.tag();
            switch (e) {
                case 1:
                    s = t.string();
                    break;
                case 2:
                    a = O.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.discord_users.v1.HeardSoundFrecency.heard_sounds",
                    );
            }
        }
        e[s ?? ""] = a ?? O.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let i of Object.keys(e.heardSounds))
            t.tag(1, r.O0.LengthDelimited).fork().tag(1, r.O0.LengthDelimited).string(i),
                t.tag(2, r.O0.LengthDelimited).fork(),
                O.internalBinaryWrite(e.heardSounds[i], t, n),
                t.join().join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let L = new D();
class w extends o.G {
    constructor() {
        super("discord_protos.discord_users.v1.PlayedSoundFrecency", [
            { no: 1, name: "played_sounds", kind: "map", K: 9, V: { kind: "message", T: () => O } },
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
    internalBinaryRead(e, t, n, i) {
        let s = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t) this.binaryReadMap1(s.playedSounds, e, n);
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let o = e.skip(i);
                !1 !== a && (!0 === a ? r.f$.onRead : a)(this.typeName, s, t, i, o);
            }
        }
        return s;
    }
    binaryReadMap1(e, t, n) {
        let i = t.uint32(),
            r = t.pos + i,
            s,
            a;
        for (; t.pos < r; ) {
            let [e, i] = t.tag();
            switch (e) {
                case 1:
                    s = t.string();
                    break;
                case 2:
                    a = O.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.discord_users.v1.PlayedSoundFrecency.played_sounds",
                    );
            }
        }
        e[s ?? ""] = a ?? O.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let i of Object.keys(e.playedSounds))
            t.tag(1, r.O0.LengthDelimited).fork().tag(1, r.O0.LengthDelimited).string(i),
                t.tag(2, r.O0.LengthDelimited).fork(),
                O.internalBinaryWrite(e.playedSounds[i], t, n),
                t.join().join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let M = new w();
class P extends o.G {
    constructor() {
        super("discord_protos.discord_users.v1.ApplicationFrecency", [
            { no: 1, name: "applications", kind: "map", K: 9, V: { kind: "message", T: () => O } },
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
    internalBinaryRead(e, t, n, i) {
        let s = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t) this.binaryReadMap1(s.applications, e, n);
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let o = e.skip(i);
                !1 !== a && (!0 === a ? r.f$.onRead : a)(this.typeName, s, t, i, o);
            }
        }
        return s;
    }
    binaryReadMap1(e, t, n) {
        let i = t.uint32(),
            r = t.pos + i,
            s,
            a;
        for (; t.pos < r; ) {
            let [e, i] = t.tag();
            switch (e) {
                case 1:
                    s = t.string();
                    break;
                case 2:
                    a = O.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.discord_users.v1.ApplicationFrecency.applications",
                    );
            }
        }
        e[s ?? ""] = a ?? O.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let i of Object.keys(e.applications))
            t.tag(1, r.O0.LengthDelimited).fork().tag(1, r.O0.LengthDelimited).string(i),
                t.tag(2, r.O0.LengthDelimited).fork(),
                O.internalBinaryWrite(e.applications[i], t, n),
                t.join().join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let x = new P();
class U extends o.G {
    constructor() {
        super("discord_protos.discord_users.v1.GuildAndChannelFrecency", [
            { no: 1, name: "guild_and_channels", kind: "map", K: 6, V: { kind: "message", T: () => O } },
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
    internalBinaryRead(e, t, n, i) {
        let s = i ?? this.create(),
            a = e.pos + t;
        for (; e.pos < a; ) {
            let [t, i] = e.tag();
            if (1 === t) this.binaryReadMap1(s.guildAndChannels, e, n);
            else {
                let a = n.readUnknownField;
                if ("throw" === a)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let o = e.skip(i);
                !1 !== a && (!0 === a ? r.f$.onRead : a)(this.typeName, s, t, i, o);
            }
        }
        return s;
    }
    binaryReadMap1(e, t, n) {
        let i = t.uint32(),
            r = t.pos + i,
            s,
            a;
        for (; t.pos < r; ) {
            let [e, i] = t.tag();
            switch (e) {
                case 1:
                    s = t.fixed64().toString();
                    break;
                case 2:
                    a = O.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.discord_users.v1.GuildAndChannelFrecency.guild_and_channels",
                    );
            }
        }
        e[s ?? "0"] = a ?? O.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let i of Object.keys(e.guildAndChannels))
            t.tag(1, r.O0.LengthDelimited).fork().tag(1, r.O0.Bit64).fixed64(i),
                t.tag(2, r.O0.LengthDelimited).fork(),
                O.internalBinaryWrite(e.guildAndChannels[i], t, n),
                t.join().join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? r.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let k = new U();
