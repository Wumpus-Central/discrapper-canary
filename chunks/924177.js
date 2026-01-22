n.d(t, {
    A: () => o,
});
var r = n(311907),
    l = n(961350),
    i = n(3137),
    a = n(559908);

function s(e, t) {
    return (
        e === t ||
        ((null == e ? void 0 : e.channelId) === (null == t ? void 0 : t.channelId) &&
            (null == e ? void 0 : e.value) === (null == t ? void 0 : t.value) &&
            (null == e ? void 0 : e.multiplier) === (null == t ? void 0 : t.multiplier))
    );
}

function o(e) {
    let t = (0, r.bG)([i.A], () => !!i.A.isEnabled() && i.A.combosEnabled);
    return (0, r.bG)([a.Ay, l.default], () => (t ? a.Ay.getUserCombo(l.default.getId(), e) : void 0), [e, t], s);
}
