"use strict";
n.d(t, { A: () => a });
var i = n(573648),
    r = n(652215),
    s = n(272984);
function a(e) {
    return (
        null != e &&
        e.type === r.$pd.LISTENING &&
        e.name === i.A.get(r.fg2.SPOTIFY).name &&
        null != e.party &&
        null != e.party.id &&
        (0, s.pH)(e.party.id)
    );
}
