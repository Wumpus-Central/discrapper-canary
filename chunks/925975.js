n.d(t, { g: () => g }), n(781311), n(388685), n(35282), n(704826), n(804061);
var r = n(159635),
    i = n.n(r),
    o = n(969812),
    a = n(904245),
    s = n(367907),
    l = n(339085),
    c = n(222677),
    u = n(995774),
    d = n(695346),
    f = n(375954),
    _ = n(981631);
let p = /\\([*?+/])/g,
    h = {
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
                if (null != n.guild_id) return o.Z.changeNickname(n.guild_id, n.id, _.ME, e), { content: "" };
            },
        },
        reaction: {
            match: i().anyScopeRegex(/^\+:(.+?): *$/),
            action(e, t) {
                let { isEdit: n, channel: r } = t;
                if (n || !f.Z.hasPresent(r.id)) return;
                let i = f.Z.getMessages(r.id).last();
                if (null == i || null == i.id) return;
                let o = l.ZP.getDisambiguatedEmojiContext(r.guild_id).getByName(e.trim().slice(2, -1));
                if (null != o) return (0, c.rU)(r.id, i.id, (0, u.g1)(o)), { content: "" };
            },
        },
        searchReplace: {
            match: i().anyScopeRegex(/^s\/([^\/\\]*(?:\\.[^\/\\]*)*)\/([^\/\\]*(?:\\.[^\/\\]*)*)(?:\/([g]*))?$/),
            action(e, t) {
                var n, r;
                let { isEdit: i, channel: o } = t;
                if (i) return;
                let s = f.Z.getLastEditableMessage(o.id);
                if (null == s || null == s.id) return { content: "" };
                let [l, c, u, d] = Array.from(null != (n = e.match(this.match.regex)) ? n : []),
                    _ = null != (r = null == d ? void 0 : d.split("")) ? r : [];
                (c = c.replace(p, (e, t) => t)), (u = u.replace(p, (e, t) => t));
                let h = _.includes("g") ? s.content.replaceAll(c, u) : s.content.replace(c, u);
                return (
                    (null == h || "" === h.trim()) && 0 === s.attachments.length
                        ? a.Z.deleteMessage(o.id, s.id)
                        : h !== s.content && a.Z.editMessage(o.id, s.id, { content: h }),
                    { content: "" }
                );
            },
        },
        spoiler: { action: (e) => ({ content: (0, _.XmY)(e).trim() }) },
    };
function m(e, t, n, r) {
    return s.ZP.trackWithMetadata(_.rMx.SLASH_COMMAND_USED, { command: e }), t.action(n, r);
}
function g(e, t) {
    for (let r in h) {
        let i = h[r];
        if (null != i.match) {
            var n;
            if (null == (n = i.match.regex) ? void 0 : n.test(e)) return m(r, i, e, t);
            continue;
        }
        if (d.dN.getSetting() && "/" === e[0]) {
            let n = e.split(" ");
            if (r === n[0].slice(1) && null != i.action) return m(r, i, n.slice(1).join(" "), t);
        }
    }
}
Object.setPrototypeOf(h, null);
