(n.d(t, { g: () => b }), n(781311), n(388685), n(35282), n(704826), n(804061));
var r = n(159635),
    i = n.n(r),
    l = n(969812),
    a = n(904245),
    o = n(367907),
    s = n(339085),
    c = n(222677),
    u = n(995774),
    d = n(695346),
    p = n(375954),
    h = n(981631);
let f = /\\([*?+/])/g,
    m = {
        tts: { action: () => ({ tts: d.OW.getSetting() }) },
        me: { action: (e) => ({ content: '_'.concat(e, '_') }) },
        tableflip: { action: (e) => ({ content: ''.concat(e, ' (\u256F\xB0\u25A1\xB0)\u256F\uFE35 \u253B\u2501\u253B').trim() }) },
        unflip: { action: (e) => ({ content: ''.concat(e, ' \u252C\u2500\u252Cノ( º _ ºノ)').trim() }) },
        shrug: { action: (e) => ({ content: ''.concat(e, ' \xAF\\_(ツ)_/\xAF').trim() }) },
        nick: {
            action(e, t) {
                let { channel: n } = t;
                if (null != n.guild_id) return (l.Z.changeNickname(n.guild_id, n.id, h.ME, e), { content: '' });
            }
        },
        reaction: {
            match: i().anyScopeRegex(/^\+:(.+?): *$/),
            action(e, t) {
                let { isEdit: n, channel: r } = t;
                if (n || !p.Z.hasPresent(r.id)) return;
                let i = p.Z.getMessages(r.id).last();
                if (null == i || null == i.id) return;
                let l = s.ZP.getDisambiguatedEmojiContext(r.guild_id).getByName(e.trim().slice(2, -1));
                if (null != l) return ((0, c.rU)(r.id, i.id, (0, u.g1)(l)), { content: '' });
            }
        },
        searchReplace: {
            match: i().anyScopeRegex(/^s\/([^\/\\]*(?:\\.[^\/\\]*)*)\/([^\/\\]*(?:\\.[^\/\\]*)*)(?:\/([g]*))?$/),
            action(e, t) {
                var n, r;
                let { isEdit: i, channel: l } = t;
                if (i) return;
                let o = p.Z.getLastEditableMessage(l.id);
                if (null == o || null == o.id) return { content: '' };
                let [s, c, u, d] = Array.from(null != (n = e.match(this.match.regex)) ? n : []),
                    h = null != (r = null == d ? void 0 : d.split('')) ? r : [];
                ((c = c.replace(f, (e, t) => t)), (u = u.replace(f, (e, t) => t)));
                let m = h.includes('g') ? o.content.replaceAll(c, u) : o.content.replace(c, u);
                return ((null == m || '' === m.trim()) && 0 === o.attachments.length ? a.Z.deleteMessage(l.id, o.id) : m !== o.content && a.Z.editMessage(l.id, o.id, { content: m }), { content: '' });
            }
        },
        spoiler: { action: (e) => ({ content: (0, h.XmY)(e).trim() }) }
    };
function g(e, t, n, r) {
    return (o.ZP.trackWithMetadata(h.rMx.SLASH_COMMAND_USED, { command: e }), t.action(n, r));
}
function b(e, t) {
    for (let r in m) {
        let i = m[r];
        if (null != i.match) {
            var n;
            if (null == (n = i.match.regex) ? void 0 : n.test(e)) return g(r, i, e, t);
            continue;
        }
        if (d.dN.getSetting() && '/' === e[0]) {
            let n = e.split(' ');
            if (r === n[0].slice(1) && null != i.action) return g(r, i, n.slice(1).join(' '), t);
        }
    }
}
Object.setPrototypeOf(m, null);
