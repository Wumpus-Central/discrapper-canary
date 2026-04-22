"use strict";
r.d(t, { B: () => l });
var i = r(311907),
    a = r(71393),
    n = r(60175),
    s = r(652215);
function l(e) {
    let { guildId: t } = e;
    return (0, i.bG)([n.A, a.A], () => {
        let e = n.A.get(t),
            r = e?.guild,
            i = a.A.getGuild(t),
            l = i?.verificationLevel,
            o = r?.verification_level;
        return l ?? o ?? s.PvD.NONE;
    }, [t]);
}
