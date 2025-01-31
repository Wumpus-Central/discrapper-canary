n.d(t, { g: () => _ }), n(47120), n(757143), n(627494);
var i = n(477660),
    l = n.n(i),
    a = n(969812),
    r = n(904245),
    s = n(367907),
    o = n(339085),
    c = n(222677),
    d = n(995774),
    u = n(695346),
    h = n(375954),
    p = n(981631);
let m = /\\([*?+/])/g,
    f = {
        tts: { action: () => ({ tts: u.OW.getSetting() }) },
        me: { action: (e) => ({ content: '_'.concat(e, '_') }) },
        tableflip: { action: (e) => ({ content: ''.concat(e, ' (\u256F\xB0\u25A1\xB0)\u256F\uFE35 \u253B\u2501\u253B').trim() }) },
        unflip: { action: (e) => ({ content: ''.concat(e, ' \u252C\u2500\u252Cノ( º _ ºノ)').trim() }) },
        shrug: { action: (e) => ({ content: ''.concat(e, ' \xAF\\_(ツ)_/\xAF').trim() }) },
        nick: {
            action(e, t) {
                let { channel: n } = t;
                if (null != n.guild_id) return a.Z.changeNickname(n.guild_id, n.id, p.ME, e), { content: '' };
            }
        },
        reaction: {
            match: l().anyScopeRegex(/^\+:(.+?): *$/),
            action(e, t) {
                let { isEdit: n, channel: i } = t;
                if (n || !h.Z.hasPresent(i.id)) return;
                let l = h.Z.getMessages(i.id).last();
                if (null == l || null == l.id) return;
                let a = o.ZP.getDisambiguatedEmojiContext(i.guild_id).getByName(e.trim().slice(2, -1));
                if (null != a) return (0, c.rU)(i.id, l.id, (0, d.g1)(a)), { content: '' };
            }
        },
        searchReplace: {
            match: l().anyScopeRegex(/^s\/((?:.+?)[^\\]|.)\/(.*)/),
            action(e, t) {
                var n;
                let { isEdit: i, channel: l } = t;
                if (i) return;
                let a = h.Z.getLastEditableMessage(l.id);
                if (null == a || null == a.id) return { content: '' };
                let [, s, o] = Array.from(null !== (n = e.match(this.match.regex)) && void 0 !== n ? n : []);
                s = s.replace(m, (e, t) => t);
                let c = !1;
                (o = o.replace(m, (e, t) => t)).endsWith('/g') && ((o = o.slice(0, -2)), (c = !0));
                let d = c ? a.content.replaceAll(s, o) : a.content.replace(s, o);
                return (null == d || '' === d) && 0 === a.attachments.length ? r.Z.deleteMessage(l.id, a.id) : e !== a.content && r.Z.editMessage(l.id, a.id, { content: d }), { content: '' };
            }
        },
        spoiler: { action: (e) => ({ content: (0, p.XmY)(e).trim() }) }
    };
function g(e, t, n, i) {
    return s.ZP.trackWithMetadata(p.rMx.SLASH_COMMAND_USED, { command: e }), t.action(n, i);
}
function _(e, t) {
    for (let i in f) {
        let l = f[i];
        if (null != l.match) {
            var n;
            if (null === (n = l.match.regex) || void 0 === n ? void 0 : n.test(e)) return g(i, l, e, t);
            continue;
        }
        if (u.dN.getSetting() && '/' === e[0]) {
            let n = e.split(' ');
            if (i === n[0].slice(1) && null != l.action) return g(i, l, n.slice(1).join(' '), t);
        }
    }
}
Object.setPrototypeOf(f, null);
