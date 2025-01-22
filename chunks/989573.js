r.d(n, {
    Z: function () {
        return s;
    }
});
var i = r(399606),
    a = r(592125),
    o = r(594174);
function s(e) {
    let { channelId: n } = e,
        r = (0, i.e7)([a.Z], () => a.Z.getChannel(n));
    return (0, i.e7)([o.default], () => {
        var e;
        return null != r && r.isDM() && 1 === r.recipients.length && (null === (e = o.default.getUser(r.recipients[0])) || void 0 === e ? void 0 : e.bot) === !0;
    });
}
