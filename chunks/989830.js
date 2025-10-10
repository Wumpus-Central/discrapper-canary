n.d(t, { Z: () => s });
var i = n(442837),
    r = n(314897),
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
    let t = (0, i.e7)([l.Z], () => !!l.Z.isEnabled() && l.Z.combosEnabled);
    return (0, i.e7)([a.ZP, r.default], () => (t ? a.ZP.getUserCombo(r.default.getId(), e) : void 0), [e, t], o);
}
