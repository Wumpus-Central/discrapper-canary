n.d(t, { Z: () => o });
var r = n(442837),
    i = n(496675),
    l = n(942766),
    a = n(981631);
function o(e) {
    let { removeEmojiEffects: t } = l.O.useExperiment({ location: 'useCanSendEmojiEffects' });
    return (0, r.e7)([i.Z], () => !(t || null == e || e.isPrivate()) && i.Z.can(a.Plq.ADD_REACTIONS, e));
}
