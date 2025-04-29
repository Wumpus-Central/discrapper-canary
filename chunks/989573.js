n.d(t, { Z: () => o });
var r = n(399606),
    i = n(594174);
function o(e) {
    let { context: t } = e,
        n = 'channel' === t.type ? t.channel : void 0;
    return (0, r.e7)([i.default], () => {
        var e;
        return null != n && n.isDM() && 1 === n.recipients.length && (null == (e = i.default.getUser(n.recipients[0])) ? void 0 : e.bot) === !0;
    });
}
