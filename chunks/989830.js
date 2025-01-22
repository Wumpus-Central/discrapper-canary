r.d(n, {
    Z: function () {
        return u;
    }
});
var i = r(442837),
    a = r(314897),
    o = r(351780),
    s = r(843693);
function l(e, n) {
    return e === n || ((null == e ? void 0 : e.channelId) === (null == n ? void 0 : n.channelId) && (null == e ? void 0 : e.value) === (null == n ? void 0 : n.value) && (null == e ? void 0 : e.multiplier) === (null == n ? void 0 : n.multiplier) && !0);
}
function u(e) {
    let n = (0, i.e7)([o.Z], () => !!o.Z.isEnabled() && o.Z.combosEnabled);
    return (0, i.e7)([s.ZP, a.default], () => (n ? s.ZP.getUserCombo(a.default.getId(), e) : void 0), [e, n], l);
}
