n.d(t, { Z: () => s });
var i = n(442837),
    l = n(496675),
    a = n(942766),
    r = n(981631);
function s(e) {
    let { removeEmojiEffects: t } = a.O.useExperiment({ location: 'useCanSendEmojiEffects' });
    return (0, i.e7)([l.Z], () => !(t || null == e || e.isPrivate()) && l.Z.can(r.Plq.ADD_REACTIONS, e));
}
