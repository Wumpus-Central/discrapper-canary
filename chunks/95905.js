n.d(t, { A: () => s });
var l = n(627968);
n(64700);
var r = n(397927),
    a = n(763754),
    i = n(447215);
let s = (e) => {
    var t, n;
    let { message: s, originalAuthor: c, channel: o } = e,
        d = (0, a.d8)(c, o),
        u = null != (t = null != (n = null == d ? void 0 : d.nick) ? n : null == c ? void 0 : c.username) ? t : "",
        m = (0, i.P)({
            user: null != c ? c : void 0,
            channelId: o.id,
            guildId: o.guild_id,
            messageId: null == s ? void 0 : s.id,
            stopPropagation: !0,
        })(null != d ? d : void 0)(u, o.id);
    return (0, l.jsx)(r.Text, {
        variant: "text-md/semibold",
        children: m,
    });
};
