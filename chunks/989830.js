n.d(t, { Z: () => s });
var r = n(442837),
    i = n(314897),
    l = n(351780),
    a = n(843693);
function o(e, t) {
    return (
        e === t ||
        ((null == e ? void 0 : e.channelId) === (null == t ? void 0 : t.channelId) &&
            (null == e ? void 0 : e.value) === (null == t ? void 0 : t.value) &&
            (null == e ? void 0 : e.multiplier) === (null == t ? void 0 : t.multiplier))
    );
}
function s(e) {
    let t = (0, r.e7)([l.Z], () => !!l.Z.isEnabled() && l.Z.combosEnabled);
    return (0, r.e7)([a.ZP, i.default], () => (t ? a.ZP.getUserCombo(i.default.getId(), e) : void 0), [e, t], o);
}
