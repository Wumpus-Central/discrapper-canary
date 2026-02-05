"use strict";
n.d(t, { A: () => c });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(397927),
    a = n(997509),
    o = n(555337),
    d = n(985018);
function c(e) {
    let { profile: t, canManageGuild: n } = e,
        c = t.id,
        u = (0, l.bG)([o.A], () => o.A.getError("name")),
        m = s.useCallback(
            (e) => {
                a.A.updateGuild({ name: e }), a.A.updateGuildProfile(c, { name: e });
            },
            [c],
        );
    return (0, i.jsx)(r.ksK, {
        label: d.intl.string(d.t.X56QcF),
        type: "text",
        disabled: !n,
        value: t.name,
        maxLength: 100,
        onChange: m,
        error: u,
    });
}
