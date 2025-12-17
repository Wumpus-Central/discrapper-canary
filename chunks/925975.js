n.d(t, { g: () => b }), n(781311), n(388685), n(35282), n(704826), n(804061);
var i = n(159635),
    r = n.n(i),
    l = n(969812),
    a = n(904245),
    o = n(367907),
    s = n(339085),
    c = n(222677),
    u = n(995774),
    d = n(695346),
    p = n(375954),
    f = n(981631);
let h = /\\([*?+/])/g,
    m = {
        tts: { action: () => ({ tts: d.OW.getSetting() }) },
        me: { action: (e) => ({ content: "_".concat(e, "_") }) },
        tableflip: {
            action: (e) => ({ content: "".concat(e, " (\u256F\xB0\u25A1\xB0)\u256F\uFE35 \u253B\u2501\u253B").trim() }),
        },
        unflip: { action: (e) => ({ content: "".concat(e, " \u252C\u2500\u252Cノ( º _ ºノ)").trim() }) },
        shrug: { action: (e) => ({ content: "".concat(e, " \xAF\\_(ツ)_/\xAF").trim() }) },
        nick: {
            action(e, t) {
                let { channel: n } = t;
                if (null != n.guild_id) return l.Z.changeNickname(n.guild_id, n.id, f.ME, e), { content: "" };
            },
        },
        reaction: {
            match: r().anyScopeRegex(/^\+:(.+?): *$/),
            action(e, t) {
                let { isEdit: n, channel: i } = t;
                if (n || !p.Z.hasPresent(i.id)) return;
                let r = p.Z.getMessages(i.id).last();
                if (null == r || null == r.id) return;
                let l = s.ZP.getDisambiguatedEmojiContext(i.guild_id).getByName(e.trim().slice(2, -1));
                if (null != l) return (0, c.rU)(i.id, r.id, (0, u.g1)(l)), { content: "" };
            },
        },
        searchReplace: {
            match: r().anyScopeRegex(/^s\/([^\/\\]*(?:\\.[^\/\\]*)*)\/([^\/\\]*(?:\\.[^\/\\]*)*)(?:\/([g]*))?$/),
            action(e, t) {
                var n, i;
                let { isEdit: r, channel: l } = t;
                if (r) return;
                let o = p.Z.getLastEditableMessage(l.id);
                if (null == o || null == o.id) return { content: "" };
                let [s, c, u, d] = Array.from(null != (n = e.match(this.match.regex)) ? n : []),
                    f = null != (i = null == d ? void 0 : d.split("")) ? i : [];
                (c = c.replace(h, (e, t) => t)), (u = u.replace(h, (e, t) => t));
                let m = f.includes("g") ? o.content.replaceAll(c, u) : o.content.replace(c, u);
                return (
                    (null == m || "" === m.trim()) && 0 === o.attachments.length
                        ? a.Z.deleteMessage(l.id, o.id)
                        : m !== o.content && a.Z.editMessage(l.id, o.id, { content: m }),
                    { content: "" }
                );
            },
        },
        spoiler: { action: (e) => ({ content: (0, f.XmY)(e).trim() }) },
    };
function g(e, t, n, i) {
    return o.ZP.trackWithMetadata(f.rMx.SLASH_COMMAND_USED, { command: e }), t.action(n, i);
}
function b(e, t) {
    for (let i in m) {
        let r = m[i];
        if (null != r.match) {
            var n;
            if (null == (n = r.match.regex) ? void 0 : n.test(e)) return g(i, r, e, t);
            continue;
        }
        if (d.dN.getSetting() && "/" === e[0]) {
            let n = e.split(" ");
            if (i === n[0].slice(1) && null != r.action) return g(i, r, n.slice(1).join(" "), t);
        }
    }
}
Object.setPrototypeOf(m, null);
