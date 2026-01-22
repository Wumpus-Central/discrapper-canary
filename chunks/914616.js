n.d(t, {
    Rc: () => m,
    Wv: () => g,
});
var r = n(735438),
    i = n(562465),
    a = n(793574),
    s = n(508675),
    o = n(807348),
    l = n(542675),
    c = n(309010),
    u = n(319191),
    d = n(667050),
    f = n(194486),
    p = n(652215),
    _ = n(980504);

function h(e) {
    let t = new AbortController(),
        n = (0, r.throttle)((n) => {
            c.A.getVoiceChannelId() !== e && t.abort();
        }, 1e3);
    return {
        abortController: t,
        onRequestProgress: n,
    };
}

function m(e, t, n) {
    var r;
    let { abortController: s, onRequestProgress: c } = h(e),
        _ = null != (r = u.A.getState().animationType) ? r : f.B.BASIC,
        m = {
            animation_type: _,
            animation_id: (0, d.oS)(_, d.m4),
        };
    i.Bo.post({
        url: p.Rsh.CUSTOM_CALL_SOUNDS(e),
        body: m,
        signal: s.signal,
        onRequestProgress: c,
        rejectWithError: !0,
    }).then(p.FXj, () => {
        if (s.signal.aborted) return;
    }),
        (0, l.A)([a.A.CHANNEL_CALL], n, t, o.ib.ENTRY);
}

function g(e, t, n, r, a) {
    var c;
    let u = null != t.emojiId ? s.Ay.getCustomEmojiById(t.emojiId) : null,
        { abortController: d, onRequestProgress: f } = h(e),
        m = {
            sound_id: t.soundId,
            emoji_id: t.emojiId,
            emoji_name: null != (c = t.emojiName) ? c : null == u ? void 0 : u.name,
        };
    t.guildId !== _.mV && (m.source_guild_id = t.guildId),
        i.Bo.post({
            url: p.Rsh.SEND_SOUNDBOARD_SOUND(e),
            body: m,
            signal: d.signal,
            onRequestProgress: f,
            rejectWithError: !0,
        }).then(p.FXj, () => {
            if (d.signal.aborted) return;
        }),
        (0, l.A)(null != r ? r : [], n, t, o.ib.DEFAULT, a);
}
