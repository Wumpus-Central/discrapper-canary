n.d(t, { Z: () => l });
var r = n(442837),
    i = n(314897),
    o = n(351780),
    a = n(843693);
function s(e, t) {
    return e === t || ((null == e ? void 0 : e.channelId) === (null == t ? void 0 : t.channelId) && (null == e ? void 0 : e.value) === (null == t ? void 0 : t.value) && (null == e ? void 0 : e.multiplier) === (null == t ? void 0 : t.multiplier));
}
function l(e) {
    let t = (0, r.e7)([o.Z], () => !!o.Z.isEnabled() && o.Z.combosEnabled);
    return (0, r.e7)([a.ZP, i.default], () => (t ? a.ZP.getUserCombo(i.default.getId(), e) : void 0), [e, t], s);
}
