n.d(t, {
    Z: function () {
        return s;
    }
});
var i = n(442837),
    l = n(496675),
    r = n(942766),
    a = n(981631);
function s(e) {
    let { removeEmojiEffects: t } = r.O.useExperiment({ location: 'useCanSendEmojiEffects' });
    return (0, i.e7)([l.Z], () => !(t || null == e || e.isPrivate()) && l.Z.can(a.Plq.ADD_REACTIONS, e));
}
