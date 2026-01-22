n.d(t, { A: () => s });
var r = n(573648),
    i = n(652215),
    a = n(272984);
function s(e) {
    return (
        null != e &&
        e.type === i.$pd.LISTENING &&
        e.name === r.A.get(i.fg2.SPOTIFY).name &&
        null != e.party &&
        null != e.party.id &&
        (0, a.pH)(e.party.id)
    );
}
