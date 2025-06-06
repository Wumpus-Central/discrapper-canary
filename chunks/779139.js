n.d(t, {
    TZ: () => u,
    y6: () => c
});
var r = n(904245),
    i = n(594174),
    l = n(626135),
    a = n(709054),
    o = n(8532),
    s = n(981631);
let c = (e) => {
        var t;
        let n = null == (t = i.default.getCurrentUser()) ? void 0 : t.id,
            r = ((null != n ? a.default.extractTimestamp(n) : 0) + a.default.extractTimestamp(e)) % o.m.length;
        return o.m[r];
    },
    u = (e, t, n) => {
        var a;
        r.Z.sendGreetMessage(
            e.id,
            n,
            r.Z.getSendMessageOptionsForReply({
                channel: e,
                message: t,
                shouldMention: !0,
                showMentionToggle: !0
            })
        ),
            l.default.track(s.rMx.WELCOME_CTA_CLICKED, {
                is_reply: !0,
                sticker_id: n,
                target_user: t.author.id,
                sender: null == (a = i.default.getCurrentUser()) ? void 0 : a.id
            });
    };
