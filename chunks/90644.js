"use strict";
n.d(t, { A: () => s });
var i = n(573648),
    r = n(652215),
    a = n(272984);
function s(e) {
    return (
        null != e &&
        e.type === r.$pd.LISTENING &&
        e.name === i.A.get(r.fg2.SPOTIFY).name &&
        null != e.party &&
        null != e.party.id &&
        (0, a.pH)(e.party.id)
    );
}
