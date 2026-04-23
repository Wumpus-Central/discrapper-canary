"use strict";
n.d(t, { Rc: () => h, Wv: () => E });
var r = n(735438),
    i = n(562465),
    s = n(793574),
    a = n(508675),
    o = n(807348),
    l = n(542675),
    u = n(309010),
    c = n(319191),
    d = n(667050),
    _ = n(194486),
    f = n(652215);
function p(e) {
    let t = new AbortController(),
        n = (0, r.throttle)((n) => {
            u.A.getVoiceChannelId() !== e && t.abort();
        }, 1e3);
    return { abortController: t, onRequestProgress: n };
}
function h(e, t, n) {
    let { abortController: r, onRequestProgress: a } = p(e),
        u = c.A.getState().animationType ?? _.B.BASIC,
        h = { animation_type: u, animation_id: (0, d.oS)(u, d.m4) };
    i.Bo.post({
        url: f.Rsh.CUSTOM_CALL_SOUNDS(e),
        body: h,
        signal: r.signal,
        onRequestProgress: a,
        rejectWithError: !0,
    }).then(f.FXj, () => {
        if (r.signal.aborted) return;
    }),
        (0, l.A)([s.A.CHANNEL_CALL], n, t, o.ib.ENTRY);
}
function E(e, t, n, r, s) {
    let u = null != t.emojiId ? a.Ay.getCustomEmojiById(t.emojiId) : null,
        { abortController: c, onRequestProgress: d } = p(e),
        _ = { sound_id: t.soundId, emoji_id: t.emojiId, emoji_name: t.emojiName ?? u?.name };
    "0" !== t.guildId && (_.source_guild_id = t.guildId),
        i.Bo.post({
            url: f.Rsh.SEND_SOUNDBOARD_SOUND(e),
            body: _,
            signal: c.signal,
            onRequestProgress: d,
            rejectWithError: !0,
        }).then(f.FXj, () => {
            if (c.signal.aborted) return;
        }),
        (0, l.A)(r ?? [], n, t, o.ib.DEFAULT, s);
}
n(980504);
