"use strict";
n.d(t, { A: () => R });
var r = n(627968);
n(64700);
var i = n(580424),
    a = n(704591),
    s = n(937862),
    o = n(361670),
    l = n(631576),
    u = n(679382),
    c = n(842086),
    d = n(148355),
    _ = n(71393),
    f = n(954571),
    p = n(248465),
    h = n(634788),
    m = n(374803);
n(827669);
var g = n(652215),
    E = n(985018),
    A = n(440874);
let I = 8,
    T = 4,
    y = 4,
    S = 40,
    v = 6;
function C(e, t) {
    return (0, r.jsx)(d.A, { sticker: e, isInteracting: t, size: 40 });
}
function b(e) {
    return `:${e.name}:`;
}
function N(e) {
    let t = e.animated ? "a" : "";
    return e.managed || null == e.id ? `:${e.name}:` : `<${t}:${e.originalName ?? e.name}:${e.id}>`;
}
let R = {
    sentinel: ":",
    stores: [u.A],
    matches: (e, t, n, r, i) => n.length > 1,
    queryResults(e, t, n, r, i) {
        let s = r.allowSoundmoji && (0, a.AA)({ location: "queryResults" }),
            u = r.allowStickers || s ? 0 : S,
            c = g.rs7 + u,
            {
                emojis: { unlocked: d },
            } = p.Ay.queryEmojiResults({ query: n, channel: e, intention: r.emojiIntention, maxCount: c });
        if ("-" === n[0]) {
            let e = (e) => e.names?.includes(n);
            d = d.filter(e);
        }
        let _ = [];
        if (r.allowStickers) {
            (0, l.YB)();
            let t = p.Ay.queryStickers([n], !0, [e, (e, t) => t === o.Ux.SENDABLE]),
                r = Math.max(T, I - d.length);
            (_ = t.slice(0, r)), "-" === n[0] && (_ = t.filter((e) => e.sticker.name === n));
        }
        let f = [];
        s &&
            ((f = p.Ay.querySoundmoji(n, e)
                .map((e) => ({ sound: e }))
                .slice(0, y)),
            "-" === n[0] && (f = f.filter((e) => e.sound.name === n)));
        let h = d.slice(0, Math.max(v, c - _.length - f.length));
        return {
            results: { emojis: h, stickers: _, soundmoji: f },
            metadata: { numEmojiResults: h.length, numStickerResults: _.length, numSoundmojiResults: f.length },
        };
    },
    renderResults(e) {
        let {
                results: { emojis: t, stickers: n, soundmoji: a },
                selectedIndex: s,
                query: o,
                onHover: l,
                onClick: u,
            } = e,
            c = t.length > 0,
            d = n.length > 0;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, h.GM)({
                    query: o,
                    selectedIndex: s,
                    autocompletes: t,
                    onHover: l,
                    onClick: u,
                    titleWithQuery: E.t.ksAVYt,
                    titleWithoutQuery: E.intl.string(E.t.sMOuuS),
                    Component: i.Ay.Emoji,
                    getProps: (e) => ({
                        emoji: e,
                        key: e.id || e.uniqueName || e.name,
                        sentinel: ":",
                        guild: null != e.guildId ? _.A.getGuild(e.guildId) : null,
                    }),
                    getQuery: (e) => `:${e}`,
                    key: "emoji",
                }),
                c && d && (0, r.jsx)(i.Ay.Divider, { className: A.y }),
                (0, h.GM)({
                    query: o,
                    selectedIndex: s,
                    autocompletes: n,
                    onHover: l,
                    onClick: u,
                    titleWithQuery: E.t.uferGG,
                    titleWithoutQuery: E.intl.string(E.t["fT+Yjp"]),
                    Component: i.Ay.Sticker,
                    getProps: (e) => {
                        let { comparator: t, sticker: n } = e;
                        return {
                            renderSticker: C,
                            queryMatch: t !== n.name.toLocaleLowerCase() ? t : void 0,
                            sticker: n,
                            key: n.id,
                        };
                    },
                    getQuery: (e) => e,
                    key: "stickers",
                    indexOffset: t.length,
                    headerClassName: c ? A._ : void 0,
                }),
                (c || d) && a.length > 0 && (0, r.jsx)(i.Ay.Divider, { className: A.y }),
                (0, h.GM)({
                    query: o,
                    selectedIndex: s,
                    autocompletes: a,
                    onHover: l,
                    onClick: u,
                    titleWithQuery: E.t["0cKBGM"],
                    titleWithoutQuery: E.intl.string(E.t.EHlAMc),
                    Component: i.Ay.Soundmoji,
                    getProps: (e) => {
                        let { sound: t } = e;
                        return { sound: t, key: t.soundId };
                    },
                    getQuery: (e) => e,
                    key: "soundmoji",
                    indexOffset: t.length + n.length,
                    headerClassName: c || d ? A._ : void 0,
                }),
            ],
        });
    },
    onSelect(e) {
        let {
            results: { emojis: t, soundmoji: n, stickers: r },
            index: i,
            options: a,
            channel: o,
        } = e;
        if (i < t.length) {
            let e = t[i];
            return (
                a.insertText(b(e), N(e)),
                {
                    type: m.kc.EMOJI,
                    metadata: {
                        emojiId: e.id,
                        numEmojiResults: t.length,
                        numStickerResults: r.length,
                        expressionName: e.name,
                        isCustom: null != e.id,
                        isAnimated: e.animated,
                    },
                }
            );
        }
        if ((i -= t.length) < r.length) {
            let e = r[i];
            return (
                a.insertText(""),
                a.sendSticker(e.sticker, c.D6.AUTOCOMPLETE),
                {
                    type: m.kc.STICKER,
                    metadata: { numEmojiResults: t.length, numStickerResults: r.length, stickerId: e.sticker.id },
                }
            );
        }
        if ((i -= r.length) < n.length) {
            let e = n[i];
            return (
                a.insertText((0, s.A)(e.sound.guildId, e.sound.soundId)),
                f.default.track(g.HAw.SOUNDMOJI_SELECT, {
                    channel_id: o.id,
                    guild_id: o.guild_id,
                    sound_guild_id: e.sound.guildId,
                    sound_id: e.sound.soundId,
                    source: "autocomplete",
                }),
                { type: m.kc.SOUNDMOJI, metadata: { numEmojiResults: t.length, numStickerResults: r.length } }
            );
        }
        return { type: null };
    },
};
