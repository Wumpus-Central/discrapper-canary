r.d(n, {
    Z: function () {
        return o;
    }
});
var i = r(399606),
    a = r(594174);
function o(e) {
    let { context: n } = e,
        r = 'channel' === n.type ? n.channel : void 0;
    return (0, i.e7)([a.default], () => {
        var e;
        return null != r && r.isDM() && 1 === r.recipients.length && (null === (e = a.default.getUser(r.recipients[0])) || void 0 === e ? void 0 : e.bot) === !0;
    });
}
