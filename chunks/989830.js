i.d(t, { Z: () => a });
var n = i(442837),
    r = i(314897),
    s = i(351780),
    o = i(843693);
function l(e, t) {
    return (
        e === t ||
        ((null == e ? void 0 : e.channelId) === (null == t ? void 0 : t.channelId) &&
            (null == e ? void 0 : e.value) === (null == t ? void 0 : t.value) &&
            (null == e ? void 0 : e.multiplier) === (null == t ? void 0 : t.multiplier))
    );
}
function a(e) {
    let t = (0, n.e7)([s.Z], () => !!s.Z.isEnabled() && s.Z.combosEnabled);
    return (0, n.e7)([o.ZP, r.default], () => (t ? o.ZP.getUserCombo(r.default.getId(), e) : void 0), [e, t], l);
}
