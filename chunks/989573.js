n.d(t, { Z: () => o });
var r = n(399606),
    i = n(594174);
function o(e) {
    return (0, r.e7)([i.default], () => {
        var t;
        return null != e && e.isDM() && 1 === e.recipients.length && (null == (t = i.default.getUser(e.recipients[0])) ? void 0 : t.bot) === !0;
    });
}
