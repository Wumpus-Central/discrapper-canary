n.d(t, { A: () => l });
var i = n(350835),
    r = n(573648),
    a = n(652215),
    s = n(272984);
function l(e) {
    return (
        null != e &&
        e.type === i.$.LISTENING &&
        e.name === r.A.get(a.fg2.SPOTIFY).name &&
        null != e.party &&
        null != e.party.id &&
        (0, s.pH)(e.party.id)
    );
}
