n.d(t, {
    TZ: () => d,
    y6: () => c
});
var i = n(904245),
    l = n(594174),
    a = n(626135),
    r = n(709054),
    s = n(8532),
    o = n(981631);
let c = (e) => {
        var t;
        let n = null === (t = l.default.getCurrentUser()) || void 0 === t ? void 0 : t.id,
            i = ((null != n ? r.default.extractTimestamp(n) : 0) + r.default.extractTimestamp(e)) % s.m.length;
        return s.m[i];
    },
    d = (e, t, n) => {
        var r;
        i.Z.sendGreetMessage(
            e.id,
            n,
            i.Z.getSendMessageOptionsForReply({
                channel: e,
                message: t,
                shouldMention: !0,
                showMentionToggle: !0
            })
        ),
            a.default.track(o.rMx.WELCOME_CTA_CLICKED, {
                is_reply: !0,
                sticker_id: n,
                target_user: t.author.id,
                sender: null === (r = l.default.getCurrentUser()) || void 0 === r ? void 0 : r.id
            });
    };
