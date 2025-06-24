i.d(e, { Z: () => a });
var n = i(442837),
    r = i(314897),
    s = i(351780),
    o = i(843693);
function l(t, e) {
    return t === e || ((null == t ? void 0 : t.channelId) === (null == e ? void 0 : e.channelId) && (null == t ? void 0 : t.value) === (null == e ? void 0 : e.value) && (null == t ? void 0 : t.multiplier) === (null == e ? void 0 : e.multiplier));
}
function a(t) {
    let e = (0, n.e7)([s.Z], () => !!s.Z.isEnabled() && s.Z.combosEnabled);
    return (0, n.e7)([o.ZP, r.default], () => (e ? o.ZP.getUserCombo(r.default.getId(), t) : void 0), [t, e], l);
}
