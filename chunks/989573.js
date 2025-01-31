n.d(t, { Z: () => a });
var i = n(399606),
    r = n(594174);
function a(e) {
    let { context: t } = e,
        n = 'channel' === t.type ? t.channel : void 0;
    return (0, i.e7)([r.default], () => {
        var e;
        return null != n && n.isDM() && 1 === n.recipients.length && (null === (e = r.default.getUser(n.recipients[0])) || void 0 === e ? void 0 : e.bot) === !0;
    });
}
