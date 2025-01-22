n.d(t, {
    TZ: function () {
        return u;
    },
    y6: function () {
        return c;
    }
});
var i = n(904245),
    r = n(594174),
    l = n(626135),
    a = n(709054),
    o = n(8532),
    s = n(981631);
let c = (e) => {
        var t;
        let n = null === (t = r.default.getCurrentUser()) || void 0 === t ? void 0 : t.id,
            i = ((null != n ? a.default.extractTimestamp(n) : 0) + a.default.extractTimestamp(e)) % o.m.length;
        return o.m[i];
    },
    u = (e, t, n) => {
        var a;
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
            l.default.track(s.rMx.WELCOME_CTA_CLICKED, {
                is_reply: !0,
                sticker_id: n,
                target_user: t.author.id,
                sender: null === (a = r.default.getCurrentUser()) || void 0 === a ? void 0 : a.id
            });
    };
