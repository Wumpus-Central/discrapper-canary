n.d(t, { A: () => E });
var l = n(627968);
n(64700);
var r = n(580424),
    i = n(704591),
    s = n(937862),
    o = n(361670),
    u = n(631576),
    a = n(679382),
    m = n(842086),
    c = n(148355),
    d = n(71393),
    p = n(954571),
    y = n(248465),
    A = n(634788),
    h = n(374803);
n(827669);
var g = n(652215),
    M = n(985018),
    I = n(111995);
function N(e, t) {
    return (0, l.jsx)(c.A, { sticker: e, isInteracting: t, size: 40 });
}
let E = {
    sentinel: ":",
    stores: [a.A],
    matches: (e, t, n, l, r) => n.length > 1,
    queryResults(e, t, n, l, r) {
        let s = l.allowSoundmoji && (0, i.AA)({ location: "queryResults" }),
            a = l.allowStickers || s ? 0 : 40,
            m = g.rs7 + a,
            {
                emojis: { unlocked: c },
            } = y.Ay.queryEmojiResults({ query: n, channel: e, intention: l.emojiIntention, maxCount: m });
        "-" === n[0] && (c = c.filter((e) => e.names?.includes(n)));
        let d = [];
        if (l.allowStickers) {
            (0, u.YB)();
            let t = y.Ay.queryStickers([n], !0, [e, (e, t) => t === o.Ux.SENDABLE]),
                l = Math.max(4, 8 - c.length);
            (d = t.slice(0, l)), "-" === n[0] && (d = t.filter((e) => e.sticker.name === n));
        }
        let p = [];
        s &&
            ((p = y.Ay.querySoundmoji(n, e)
                .map((e) => ({ sound: e }))
                .slice(0, 4)),
            "-" === n[0] && (p = p.filter((e) => e.sound.name === n)));
        let A = c.slice(0, Math.max(6, m - d.length - p.length));
        return {
            results: { emojis: A, stickers: d, soundmoji: p },
            metadata: { numEmojiResults: A.length, numStickerResults: d.length, numSoundmojiResults: p.length },
        };
    },
    renderResults(e) {
        let {
                results: { emojis: t, stickers: n, soundmoji: i },
                selectedIndex: s,
                query: o,
                onHover: u,
                onClick: a,
            } = e,
            m = t.length > 0,
            c = n.length > 0;
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, A.GM)({
                    query: o,
                    selectedIndex: s,
                    autocompletes: t,
                    onHover: u,
                    onClick: a,
                    titleWithQuery: M.t.ksAVYt,
                    titleWithoutQuery: M.intl.string(M.t.sMOuuS),
                    Component: r.Ay.Emoji,
                    getProps: (e) => ({
                        emoji: e,
                        key: e.id || e.uniqueName || e.name,
                        sentinel: ":",
                        guild: null != e.guildId ? d.A.getGuild(e.guildId) : null,
                    }),
                    getQuery: (e) => `:${e}`,
                    key: "emoji",
                }),
                m && c && (0, l.jsx)(r.Ay.Divider, { className: I.y }),
                (0, A.GM)({
                    query: o,
                    selectedIndex: s,
                    autocompletes: n,
                    onHover: u,
                    onClick: a,
                    titleWithQuery: M.t.uferGG,
                    titleWithoutQuery: M.intl.string(M.t["fT+Yjp"]),
                    Component: r.Ay.Sticker,
                    getProps: (e) => {
                        let { comparator: t, sticker: n } = e;
                        return {
                            renderSticker: N,
                            queryMatch: t !== n.name.toLocaleLowerCase() ? t : void 0,
                            sticker: n,
                            key: n.id,
                        };
                    },
                    getQuery: (e) => e,
                    key: "stickers",
                    indexOffset: t.length,
                    headerClassName: m ? I._ : void 0,
                }),
                (m || c) && i.length > 0 && (0, l.jsx)(r.Ay.Divider, { className: I.y }),
                (0, A.GM)({
                    query: o,
                    selectedIndex: s,
                    autocompletes: i,
                    onHover: u,
                    onClick: a,
                    titleWithQuery: M.t["0cKBGM"],
                    titleWithoutQuery: M.intl.string(M.t.EHlAMc),
                    Component: r.Ay.Soundmoji,
                    getProps: (e) => {
                        let { sound: t } = e;
                        return { sound: t, key: t.soundId };
                    },
                    getQuery: (e) => e,
                    key: "soundmoji",
                    indexOffset: t.length + n.length,
                    headerClassName: m || c ? I._ : void 0,
                }),
            ],
        });
    },
    onSelect(e) {
        let {
            results: { emojis: t, soundmoji: n, stickers: l },
            index: r,
            options: i,
            channel: o,
        } = e;
        if (r < t.length) {
            var u, a;
            let e,
                n = t[r];
            return (
                i.insertText(
                    ((u = n), `:${u.name}:`),
                    ((e = (a = n).animated ? "a" : ""),
                    a.managed || null == a.id ? `:${a.name}:` : `<${e}:${a.originalName ?? a.name}:${a.id}>`),
                ),
                {
                    type: h.kc.EMOJI,
                    metadata: {
                        emojiId: n.id,
                        numEmojiResults: t.length,
                        numStickerResults: l.length,
                        expressionName: n.name,
                        isCustom: null != n.id,
                        isAnimated: n.animated,
                    },
                }
            );
        }
        if ((r -= t.length) < l.length) {
            let e = l[r];
            return (
                i.insertText(""),
                i.sendSticker(e.sticker, m.D6.AUTOCOMPLETE),
                {
                    type: h.kc.STICKER,
                    metadata: { numEmojiResults: t.length, numStickerResults: l.length, stickerId: e.sticker.id },
                }
            );
        }
        if ((r -= l.length) < n.length) {
            let e = n[r];
            return (
                i.insertText((0, s.A)(e.sound.guildId, e.sound.soundId)),
                p.default.track(g.HAw.SOUNDMOJI_SELECT, {
                    channel_id: o.id,
                    guild_id: o.guild_id,
                    sound_guild_id: e.sound.guildId,
                    sound_id: e.sound.soundId,
                    source: "autocomplete",
                }),
                { type: h.kc.SOUNDMOJI, metadata: { numEmojiResults: t.length, numStickerResults: l.length } }
            );
        }
        return { type: null };
    },
};
