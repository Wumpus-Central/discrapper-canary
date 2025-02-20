n.d(t, { Z: () => a });
var r = n(442837),
    i = n(496675),
    l = n(942766),
    o = n(981631);
function a(e) {
    let { removeEmojiEffects: t } = l.O.useExperiment({ location: 'useCanSendEmojiEffects' });
    return (0, r.e7)([i.Z], () => !(t || null == e || e.isPrivate()) && i.Z.can(o.Plq.ADD_REACTIONS, e));
}
