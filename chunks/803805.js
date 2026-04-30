n.d(t, {
    Do: () => N,
    F1: () => x,
    Q8: () => O,
    Qn: () => b,
    TL: () => d,
    Zc: () => R,
    aw: () => _,
    cC: () => G,
    gW: () => p,
    tC: () => I,
    tQ: () => h,
    uz: () => u,
    zT: () => L,
}),
    n(321073);
var i,
    a = n(852015),
    r = n(144367),
    s = n(428420),
    l = n(535384),
    o = n(813827),
    d = (((i = {})[(i.NONE = 0)] = "NONE"), (i[(i.IMAGE = 1)] = "IMAGE"), (i[(i.VIDEO = 2)] = "VIDEO"), i);
class c extends l.G {
    constructor() {
        super("discord_protos.discord_users.v1.FrecencyUserSettings", [
            { no: 1, name: "versions", kind: "message", T: () => o.u },
            { no: 2, name: "favorite_gifs", kind: "message", T: () => u },
            { no: 3, name: "favorite_stickers", kind: "message", T: () => h },
            { no: 4, name: "sticker_frecency", kind: "message", T: () => N },
            { no: 5, name: "favorite_emojis", kind: "message", T: () => p },
            { no: 6, name: "emoji_frecency", kind: "message", T: () => O },
            { no: 7, name: "application_command_frecency", kind: "message", T: () => R },
            { no: 8, name: "favorite_soundboard_sounds", kind: "message", T: () => b },
            { no: 9, name: "application_frecency", kind: "message", T: () => G },
            { no: 10, name: "heard_sound_frecency", kind: "message", T: () => P },
            { no: 11, name: "played_sound_frecency", kind: "message", T: () => v },
            { no: 12, name: "guild_and_channel_frecency", kind: "message", T: () => x },
            { no: 13, name: "emoji_reaction_frecency", kind: "message", T: () => O },
        ]);
    }
    create(e) {
        let t = {};
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, r.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.versions = o.u.internalBinaryRead(e, e.uint32(), n, r.versions);
                    break;
                case 2:
                    r.favoriteGifs = u.internalBinaryRead(e, e.uint32(), n, r.favoriteGifs);
                    break;
                case 3:
                    r.favoriteStickers = h.internalBinaryRead(e, e.uint32(), n, r.favoriteStickers);
                    break;
                case 4:
                    r.stickerFrecency = N.internalBinaryRead(e, e.uint32(), n, r.stickerFrecency);
                    break;
                case 5:
                    r.favoriteEmojis = p.internalBinaryRead(e, e.uint32(), n, r.favoriteEmojis);
                    break;
                case 6:
                    r.emojiFrecency = O.internalBinaryRead(e, e.uint32(), n, r.emojiFrecency);
                    break;
                case 7:
                    r.applicationCommandFrecency = R.internalBinaryRead(e, e.uint32(), n, r.applicationCommandFrecency);
                    break;
                case 8:
                    r.favoriteSoundboardSounds = b.internalBinaryRead(e, e.uint32(), n, r.favoriteSoundboardSounds);
                    break;
                case 9:
                    r.applicationFrecency = G.internalBinaryRead(e, e.uint32(), n, r.applicationFrecency);
                    break;
                case 10:
                    r.heardSoundFrecency = P.internalBinaryRead(e, e.uint32(), n, r.heardSoundFrecency);
                    break;
                case 11:
                    r.playedSoundFrecency = v.internalBinaryRead(e, e.uint32(), n, r.playedSoundFrecency);
                    break;
                case 12:
                    r.guildAndChannelFrecency = x.internalBinaryRead(e, e.uint32(), n, r.guildAndChannelFrecency);
                    break;
                case 13:
                    r.emojiReactionFrecency = O.internalBinaryRead(e, e.uint32(), n, r.emojiReactionFrecency);
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== s && (!0 === s ? a.f$.onRead : s)(this.typeName, r, t, i, l);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        e.versions && o.u.internalBinaryWrite(e.versions, t.tag(1, a.O0.LengthDelimited).fork(), n).join(),
            e.favoriteGifs && u.internalBinaryWrite(e.favoriteGifs, t.tag(2, a.O0.LengthDelimited).fork(), n).join(),
            e.favoriteStickers &&
                h.internalBinaryWrite(e.favoriteStickers, t.tag(3, a.O0.LengthDelimited).fork(), n).join(),
            e.stickerFrecency &&
                N.internalBinaryWrite(e.stickerFrecency, t.tag(4, a.O0.LengthDelimited).fork(), n).join(),
            e.favoriteEmojis &&
                p.internalBinaryWrite(e.favoriteEmojis, t.tag(5, a.O0.LengthDelimited).fork(), n).join(),
            e.emojiFrecency && O.internalBinaryWrite(e.emojiFrecency, t.tag(6, a.O0.LengthDelimited).fork(), n).join(),
            e.applicationCommandFrecency &&
                R.internalBinaryWrite(e.applicationCommandFrecency, t.tag(7, a.O0.LengthDelimited).fork(), n).join(),
            e.favoriteSoundboardSounds &&
                b.internalBinaryWrite(e.favoriteSoundboardSounds, t.tag(8, a.O0.LengthDelimited).fork(), n).join(),
            e.applicationFrecency &&
                G.internalBinaryWrite(e.applicationFrecency, t.tag(9, a.O0.LengthDelimited).fork(), n).join(),
            e.heardSoundFrecency &&
                P.internalBinaryWrite(e.heardSoundFrecency, t.tag(10, a.O0.LengthDelimited).fork(), n).join(),
            e.playedSoundFrecency &&
                v.internalBinaryWrite(e.playedSoundFrecency, t.tag(11, a.O0.LengthDelimited).fork(), n).join(),
            e.guildAndChannelFrecency &&
                x.internalBinaryWrite(e.guildAndChannelFrecency, t.tag(12, a.O0.LengthDelimited).fork(), n).join(),
            e.emojiReactionFrecency &&
                O.internalBinaryWrite(e.emojiReactionFrecency, t.tag(13, a.O0.LengthDelimited).fork(), n).join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? a.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let _ = new c();
class E extends l.G {
    constructor() {
        super("discord_protos.discord_users.v1.FavoriteGIFs", [
            { no: 1, name: "gifs", kind: "map", K: 9, V: { kind: "message", T: () => I } },
            { no: 2, name: "hide_tooltip", kind: "scalar", T: 8 },
        ]);
    }
    create(e) {
        let t = { gifs: {}, hideTooltip: !1 };
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, r.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    this.binaryReadMap1(r.gifs, e, n);
                    break;
                case 2:
                    r.hideTooltip = e.bool();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== s && (!0 === s ? a.f$.onRead : s)(this.typeName, r, t, i, l);
            }
        }
        return r;
    }
    binaryReadMap1(e, t, n) {
        let i = t.uint32(),
            a = t.pos + i,
            r,
            s;
        for (; t.pos < a; ) {
            let [e, i] = t.tag();
            switch (e) {
                case 1:
                    r = t.string();
                    break;
                case 2:
                    s = I.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.discord_users.v1.FavoriteGIFs.gifs",
                    );
            }
        }
        e[r ?? ""] = s ?? I.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let i of Object.keys(e.gifs))
            t.tag(1, a.O0.LengthDelimited).fork().tag(1, a.O0.LengthDelimited).string(i),
                t.tag(2, a.O0.LengthDelimited).fork(),
                I.internalBinaryWrite(e.gifs[i], t, n),
                t.join().join();
        !1 !== e.hideTooltip && t.tag(2, a.O0.Varint).bool(e.hideTooltip);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? a.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let u = new E();
class A extends l.G {
    constructor() {
        super("discord_protos.discord_users.v1.FavoriteGIF", [
            { no: 1, name: "format", kind: "enum", T: () => ["discord_protos.discord_users.v1.GIFType", d] },
            { no: 2, name: "src", kind: "scalar", T: 9 },
            { no: 3, name: "width", kind: "scalar", T: 13 },
            { no: 4, name: "height", kind: "scalar", T: 13 },
            { no: 5, name: "order", kind: "scalar", T: 13 },
        ]);
    }
    create(e) {
        let t = { format: 0, src: "", width: 0, height: 0, order: 0 };
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, r.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.format = e.int32();
                    break;
                case 2:
                    r.src = e.string();
                    break;
                case 3:
                    r.width = e.uint32();
                    break;
                case 4:
                    r.height = e.uint32();
                    break;
                case 5:
                    r.order = e.uint32();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== s && (!0 === s ? a.f$.onRead : s)(this.typeName, r, t, i, l);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        0 !== e.format && t.tag(1, a.O0.Varint).int32(e.format),
            "" !== e.src && t.tag(2, a.O0.LengthDelimited).string(e.src),
            0 !== e.width && t.tag(3, a.O0.Varint).uint32(e.width),
            0 !== e.height && t.tag(4, a.O0.Varint).uint32(e.height),
            0 !== e.order && t.tag(5, a.O0.Varint).uint32(e.order);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? a.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let I = new A();
class T extends l.G {
    constructor() {
        super("discord_protos.discord_users.v1.FavoriteStickers", [
            { no: 1, name: "sticker_ids", kind: "scalar", repeat: 1, T: 6 },
        ]);
    }
    create(e) {
        let t = { stickerIds: [] };
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, r.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t)
                if (i === a.O0.LengthDelimited)
                    for (let t = e.int32() + e.pos; e.pos < t; ) r.stickerIds.push(e.fixed64().toString());
                else r.stickerIds.push(e.fixed64().toString());
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let l = e.skip(i);
                !1 !== s && (!0 === s ? a.f$.onRead : s)(this.typeName, r, t, i, l);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        if (e.stickerIds.length) {
            t.tag(1, a.O0.LengthDelimited).fork();
            for (let n = 0; n < e.stickerIds.length; n++) t.fixed64(e.stickerIds[n]);
            t.join();
        }
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? a.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let h = new T();
class S extends l.G {
    constructor() {
        super("discord_protos.discord_users.v1.StickerFrecency", [
            { no: 1, name: "stickers", kind: "map", K: 6, V: { kind: "message", T: () => L } },
        ]);
    }
    create(e) {
        let t = { stickers: {} };
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, r.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t) this.binaryReadMap1(r.stickers, e, n);
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let l = e.skip(i);
                !1 !== s && (!0 === s ? a.f$.onRead : s)(this.typeName, r, t, i, l);
            }
        }
        return r;
    }
    binaryReadMap1(e, t, n) {
        let i = t.uint32(),
            a = t.pos + i,
            r,
            s;
        for (; t.pos < a; ) {
            let [e, i] = t.tag();
            switch (e) {
                case 1:
                    r = t.fixed64().toString();
                    break;
                case 2:
                    s = L.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.discord_users.v1.StickerFrecency.stickers",
                    );
            }
        }
        e[r ?? "0"] = s ?? L.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let i of Object.keys(e.stickers))
            t.tag(1, a.O0.LengthDelimited).fork().tag(1, a.O0.Bit64).fixed64(i),
                t.tag(2, a.O0.LengthDelimited).fork(),
                L.internalBinaryWrite(e.stickers[i], t, n),
                t.join().join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? a.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let N = new S();
class f extends l.G {
    constructor() {
        super("discord_protos.discord_users.v1.FavoriteEmojis", [
            { no: 1, name: "emojis", kind: "scalar", repeat: 2, T: 9 },
        ]);
    }
    create(e) {
        let t = { emojis: [] };
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, r.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t) r.emojis.push(e.string());
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let l = e.skip(i);
                !1 !== s && (!0 === s ? a.f$.onRead : s)(this.typeName, r, t, i, l);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        for (let n = 0; n < e.emojis.length; n++) t.tag(1, a.O0.LengthDelimited).string(e.emojis[n]);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? a.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let p = new f();
class m extends l.G {
    constructor() {
        super("discord_protos.discord_users.v1.EmojiFrecency", [
            { no: 1, name: "emojis", kind: "map", K: 9, V: { kind: "message", T: () => L } },
        ]);
    }
    create(e) {
        let t = { emojis: {} };
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, r.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t) this.binaryReadMap1(r.emojis, e, n);
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let l = e.skip(i);
                !1 !== s && (!0 === s ? a.f$.onRead : s)(this.typeName, r, t, i, l);
            }
        }
        return r;
    }
    binaryReadMap1(e, t, n) {
        let i = t.uint32(),
            a = t.pos + i,
            r,
            s;
        for (; t.pos < a; ) {
            let [e, i] = t.tag();
            switch (e) {
                case 1:
                    r = t.string();
                    break;
                case 2:
                    s = L.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.discord_users.v1.EmojiFrecency.emojis",
                    );
            }
        }
        e[r ?? ""] = s ?? L.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let i of Object.keys(e.emojis))
            t.tag(1, a.O0.LengthDelimited).fork().tag(1, a.O0.LengthDelimited).string(i),
                t.tag(2, a.O0.LengthDelimited).fork(),
                L.internalBinaryWrite(e.emojis[i], t, n),
                t.join().join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? a.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let O = new m();
class C extends l.G {
    constructor() {
        super("discord_protos.discord_users.v1.ApplicationCommandFrecency", [
            { no: 1, name: "application_commands", kind: "map", K: 9, V: { kind: "message", T: () => L } },
        ]);
    }
    create(e) {
        let t = { applicationCommands: {} };
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, r.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t) this.binaryReadMap1(r.applicationCommands, e, n);
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let l = e.skip(i);
                !1 !== s && (!0 === s ? a.f$.onRead : s)(this.typeName, r, t, i, l);
            }
        }
        return r;
    }
    binaryReadMap1(e, t, n) {
        let i = t.uint32(),
            a = t.pos + i,
            r,
            s;
        for (; t.pos < a; ) {
            let [e, i] = t.tag();
            switch (e) {
                case 1:
                    r = t.string();
                    break;
                case 2:
                    s = L.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.discord_users.v1.ApplicationCommandFrecency.application_commands",
                    );
            }
        }
        e[r ?? ""] = s ?? L.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let i of Object.keys(e.applicationCommands))
            t.tag(1, a.O0.LengthDelimited).fork().tag(1, a.O0.LengthDelimited).string(i),
                t.tag(2, a.O0.LengthDelimited).fork(),
                L.internalBinaryWrite(e.applicationCommands[i], t, n),
                t.join().join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? a.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let R = new C();
class g extends l.G {
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
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, r.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            switch (t) {
                case 1:
                    r.totalUses = e.uint32();
                    break;
                case 2:
                    if (i === a.O0.LengthDelimited)
                        for (let t = e.int32() + e.pos; e.pos < t; ) r.recentUses.push(e.uint64().toString());
                    else r.recentUses.push(e.uint64().toString());
                    break;
                case 3:
                    r.frecency = e.int32();
                    break;
                case 4:
                    r.score = e.int32();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ("throw" === s)
                        throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                    let l = e.skip(i);
                    !1 !== s && (!0 === s ? a.f$.onRead : s)(this.typeName, r, t, i, l);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        if ((0 !== e.totalUses && t.tag(1, a.O0.Varint).uint32(e.totalUses), e.recentUses.length)) {
            t.tag(2, a.O0.LengthDelimited).fork();
            for (let n = 0; n < e.recentUses.length; n++) t.uint64(e.recentUses[n]);
            t.join();
        }
        0 !== e.frecency && t.tag(3, a.O0.Varint).int32(e.frecency),
            0 !== e.score && t.tag(4, a.O0.Varint).int32(e.score);
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? a.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let L = new g();
class D extends l.G {
    constructor() {
        super("discord_protos.discord_users.v1.FavoriteSoundboardSounds", [
            { no: 1, name: "sound_ids", kind: "scalar", repeat: 1, T: 6 },
        ]);
    }
    create(e) {
        let t = { soundIds: [] };
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, r.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t)
                if (i === a.O0.LengthDelimited)
                    for (let t = e.int32() + e.pos; e.pos < t; ) r.soundIds.push(e.fixed64().toString());
                else r.soundIds.push(e.fixed64().toString());
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let l = e.skip(i);
                !1 !== s && (!0 === s ? a.f$.onRead : s)(this.typeName, r, t, i, l);
            }
        }
        return r;
    }
    internalBinaryWrite(e, t, n) {
        if (e.soundIds.length) {
            t.tag(1, a.O0.LengthDelimited).fork();
            for (let n = 0; n < e.soundIds.length; n++) t.fixed64(e.soundIds[n]);
            t.join();
        }
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? a.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let b = new D();
class M extends l.G {
    constructor() {
        super("discord_protos.discord_users.v1.HeardSoundFrecency", [
            { no: 1, name: "heard_sounds", kind: "map", K: 9, V: { kind: "message", T: () => L } },
        ]);
    }
    create(e) {
        let t = { heardSounds: {} };
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, r.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t) this.binaryReadMap1(r.heardSounds, e, n);
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let l = e.skip(i);
                !1 !== s && (!0 === s ? a.f$.onRead : s)(this.typeName, r, t, i, l);
            }
        }
        return r;
    }
    binaryReadMap1(e, t, n) {
        let i = t.uint32(),
            a = t.pos + i,
            r,
            s;
        for (; t.pos < a; ) {
            let [e, i] = t.tag();
            switch (e) {
                case 1:
                    r = t.string();
                    break;
                case 2:
                    s = L.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.discord_users.v1.HeardSoundFrecency.heard_sounds",
                    );
            }
        }
        e[r ?? ""] = s ?? L.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let i of Object.keys(e.heardSounds))
            t.tag(1, a.O0.LengthDelimited).fork().tag(1, a.O0.LengthDelimited).string(i),
                t.tag(2, a.O0.LengthDelimited).fork(),
                L.internalBinaryWrite(e.heardSounds[i], t, n),
                t.join().join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? a.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let P = new M();
class U extends l.G {
    constructor() {
        super("discord_protos.discord_users.v1.PlayedSoundFrecency", [
            { no: 1, name: "played_sounds", kind: "map", K: 9, V: { kind: "message", T: () => L } },
        ]);
    }
    create(e) {
        let t = { playedSounds: {} };
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, r.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t) this.binaryReadMap1(r.playedSounds, e, n);
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let l = e.skip(i);
                !1 !== s && (!0 === s ? a.f$.onRead : s)(this.typeName, r, t, i, l);
            }
        }
        return r;
    }
    binaryReadMap1(e, t, n) {
        let i = t.uint32(),
            a = t.pos + i,
            r,
            s;
        for (; t.pos < a; ) {
            let [e, i] = t.tag();
            switch (e) {
                case 1:
                    r = t.string();
                    break;
                case 2:
                    s = L.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.discord_users.v1.PlayedSoundFrecency.played_sounds",
                    );
            }
        }
        e[r ?? ""] = s ?? L.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let i of Object.keys(e.playedSounds))
            t.tag(1, a.O0.LengthDelimited).fork().tag(1, a.O0.LengthDelimited).string(i),
                t.tag(2, a.O0.LengthDelimited).fork(),
                L.internalBinaryWrite(e.playedSounds[i], t, n),
                t.join().join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? a.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let v = new U();
class y extends l.G {
    constructor() {
        super("discord_protos.discord_users.v1.ApplicationFrecency", [
            { no: 1, name: "applications", kind: "map", K: 9, V: { kind: "message", T: () => L } },
        ]);
    }
    create(e) {
        let t = { applications: {} };
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, r.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t) this.binaryReadMap1(r.applications, e, n);
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let l = e.skip(i);
                !1 !== s && (!0 === s ? a.f$.onRead : s)(this.typeName, r, t, i, l);
            }
        }
        return r;
    }
    binaryReadMap1(e, t, n) {
        let i = t.uint32(),
            a = t.pos + i,
            r,
            s;
        for (; t.pos < a; ) {
            let [e, i] = t.tag();
            switch (e) {
                case 1:
                    r = t.string();
                    break;
                case 2:
                    s = L.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.discord_users.v1.ApplicationFrecency.applications",
                    );
            }
        }
        e[r ?? ""] = s ?? L.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let i of Object.keys(e.applications))
            t.tag(1, a.O0.LengthDelimited).fork().tag(1, a.O0.LengthDelimited).string(i),
                t.tag(2, a.O0.LengthDelimited).fork(),
                L.internalBinaryWrite(e.applications[i], t, n),
                t.join().join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? a.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let G = new y();
class w extends l.G {
    constructor() {
        super("discord_protos.discord_users.v1.GuildAndChannelFrecency", [
            { no: 1, name: "guild_and_channels", kind: "map", K: 6, V: { kind: "message", T: () => L } },
        ]);
    }
    create(e) {
        let t = { guildAndChannels: {} };
        return (
            globalThis.Object.defineProperty(t, s.$, { enumerable: !1, value: this }),
            void 0 !== e && (0, r.x)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, i) {
        let r = i ?? this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, i] = e.tag();
            if (1 === t) this.binaryReadMap1(r.guildAndChannels, e, n);
            else {
                let s = n.readUnknownField;
                if ("throw" === s)
                    throw new globalThis.Error(`Unknown field ${t} (wire type ${i}) for ${this.typeName}`);
                let l = e.skip(i);
                !1 !== s && (!0 === s ? a.f$.onRead : s)(this.typeName, r, t, i, l);
            }
        }
        return r;
    }
    binaryReadMap1(e, t, n) {
        let i = t.uint32(),
            a = t.pos + i,
            r,
            s;
        for (; t.pos < a; ) {
            let [e, i] = t.tag();
            switch (e) {
                case 1:
                    r = t.fixed64().toString();
                    break;
                case 2:
                    s = L.internalBinaryRead(t, t.uint32(), n);
                    break;
                default:
                    throw new globalThis.Error(
                        "unknown map entry field for field discord_protos.discord_users.v1.GuildAndChannelFrecency.guild_and_channels",
                    );
            }
        }
        e[r ?? "0"] = s ?? L.create();
    }
    internalBinaryWrite(e, t, n) {
        for (let i of Object.keys(e.guildAndChannels))
            t.tag(1, a.O0.LengthDelimited).fork().tag(1, a.O0.Bit64).fixed64(i),
                t.tag(2, a.O0.LengthDelimited).fork(),
                L.internalBinaryWrite(e.guildAndChannels[i], t, n),
                t.join().join();
        let i = n.writeUnknownFields;
        return !1 !== i && (!0 == i ? a.f$.onWrite : i)(this.typeName, e, t), t;
    }
}
let x = new w();
