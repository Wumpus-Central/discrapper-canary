n.d(t, { A: () => N });
var r = n(627968);
n(64700);
var i = n(580424),
    a = n(704591),
    s = n(937862),
    o = n(361670),
    l = n(631576),
    c = n(679382),
    u = n(842086),
    d = n(148355),
    f = n(71393),
    p = n(954571),
    _ = n(248465),
    h = n(634788),
    m = n(374803);
n(827669);
var g = n(652215),
    E = n(985018),
    b = n(440874);
let y = 8,
    O = 4,
    A = 4,
    v = 40,
    S = 6;
function I(e, t) {
    return (0, r.jsx)(d.A, {
        sticker: e,
        isInteracting: t,
        size: 40,
    });
}
function T(e) {
    return "".concat(":").concat(e.name).concat(":");
}
function C(e) {
    var t;
    let n = e.animated ? "a" : "";
    return e.managed || null == e.id
        ? "".concat(":").concat(e.name).concat(":")
        : "<"
              .concat(n, ":")
              .concat(null != (t = e.originalName) ? t : e.name, ":")
              .concat(e.id, ">");
}
let N = {
    sentinel: ":",
    stores: [c.A],
    matches: (e, t, n, r, i) => n.length > 1,
    queryResults(e, t, n, r, i) {
        let s = r.allowSoundmoji && (0, a.AA)({ location: "queryResults" }),
            c = r.allowStickers || s ? 0 : v,
            u = g.rs7 + c,
            {
                emojis: { unlocked: d },
            } = _.Ay.queryEmojiResults({
                query: n,
                channel: e,
                intention: r.emojiIntention,
                maxCount: u,
            });
        if ("-" === n[0]) {
            let e = (e) => {
                var t;
                return null == (t = e.names) ? void 0 : t.includes(n);
            };
            d = d.filter(e);
        }
        let f = [];
        if (r.allowStickers) {
            (0, l.YB)();
            let t = _.Ay.queryStickers([n], !0, [e, (e, t) => t === o.Ux.SENDABLE]),
                r = Math.max(O, y - d.length);
            (f = t.slice(0, r)), "-" === n[0] && (f = t.filter((e) => e.sticker.name === n));
        }
        let p = [];
        s &&
            ((p = _.Ay.querySoundmoji(n, e)
                .map((e) => ({ sound: e }))
                .slice(0, A)),
            "-" === n[0] && (p = p.filter((e) => e.sound.name === n)));
        let h = d.slice(0, Math.max(S, u - f.length - p.length));
        return {
            results: {
                emojis: h,
                stickers: f,
                soundmoji: p,
            },
            metadata: {
                numEmojiResults: h.length,
                numStickerResults: f.length,
                numSoundmojiResults: p.length,
            },
        };
    },
    renderResults(e) {
        let {
                results: { emojis: t, stickers: n, soundmoji: a },
                selectedIndex: s,
                query: o,
                onHover: l,
                onClick: c,
            } = e,
            u = t.length > 0,
            d = n.length > 0;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, h.GM)({
                    query: o,
                    selectedIndex: s,
                    autocompletes: t,
                    onHover: l,
                    onClick: c,
                    titleWithQuery: E.t.ksAVYt,
                    titleWithoutQuery: E.intl.string(E.t.sMOuuS),
                    Component: i.Ay.Emoji,
                    getProps: (e) => ({
                        emoji: e,
                        key: e.id || e.uniqueName || e.name,
                        sentinel: ":",
                        guild: null != e.guildId ? f.A.getGuild(e.guildId) : null,
                    }),
                    getQuery: (e) => "".concat(":").concat(e),
                    key: "emoji",
                }),
                u && d && (0, r.jsx)(i.Ay.Divider, { className: b.y }),
                (0, h.GM)({
                    query: o,
                    selectedIndex: s,
                    autocompletes: n,
                    onHover: l,
                    onClick: c,
                    titleWithQuery: E.t.uferGG,
                    titleWithoutQuery: E.intl.string(E.t["fT+Yjp"]),
                    Component: i.Ay.Sticker,
                    getProps: (e) => {
                        let { comparator: t, sticker: n } = e;
                        return {
                            renderSticker: I,
                            queryMatch: t !== n.name.toLocaleLowerCase() ? t : void 0,
                            sticker: n,
                            key: n.id,
                        };
                    },
                    getQuery: (e) => e,
                    key: "stickers",
                    indexOffset: t.length,
                    headerClassName: u ? b._ : void 0,
                }),
                (u || d) && a.length > 0 && (0, r.jsx)(i.Ay.Divider, { className: b.y }),
                (0, h.GM)({
                    query: o,
                    selectedIndex: s,
                    autocompletes: a,
                    onHover: l,
                    onClick: c,
                    titleWithQuery: E.t["0cKBGM"],
                    titleWithoutQuery: E.intl.string(E.t.EHlAMc),
                    Component: i.Ay.Soundmoji,
                    getProps: (e) => {
                        let { sound: t } = e;
                        return {
                            sound: t,
                            key: t.soundId,
                        };
                    },
                    getQuery: (e) => e,
                    key: "soundmoji",
                    indexOffset: t.length + n.length,
                    headerClassName: u || d ? b._ : void 0,
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
                a.insertText(T(e), C(e)),
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
                a.sendSticker(e.sticker, u.D6.AUTOCOMPLETE),
                {
                    type: m.kc.STICKER,
                    metadata: {
                        numEmojiResults: t.length,
                        numStickerResults: r.length,
                        stickerId: e.sticker.id,
                    },
                }
            );
        }
        if ((i -= r.length) < n.length) {
            let e = n[i];
            return (
                a.insertText((0, s.A)(e.sound.guildId, e.sound.soundId)),
                p.default.track(g.HAw.SOUNDMOJI_SELECT, {
                    channel_id: o.id,
                    guild_id: o.guild_id,
                    sound_guild_id: e.sound.guildId,
                    sound_id: e.sound.soundId,
                    source: "autocomplete",
                }),
                {
                    type: m.kc.SOUNDMOJI,
                    metadata: {
                        numEmojiResults: t.length,
                        numStickerResults: r.length,
                    },
                }
            );
        }
        return { type: null };
    },
};
