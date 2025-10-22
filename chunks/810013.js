t.d(n, { Z: () => m });
var l = t(951288),
    r = t(442837),
    i = t(481060),
    s = t(314897),
    a = t(938475),
    c = t(499596),
    o = t(537135),
    u = t(388032),
    d = t(79985);
function m(e) {
    let { channel: n } = e,
        t = (0, r.e7)([s.default], () => s.default.getId()),
        m = (0, r.e7)([a.ZP], () => a.ZP.getVoiceStatesForChannel(n), [n]);
    return (0, l.jsx)("div", {
        className: d.modalContent,
        children: (0, l.jsx)(i.gNt, {
            label: u.intl.string(u.t.KPuWsm),
            children: (0, l.jsx)(o.Z, {
                children: (0, l.jsx)(c.Z, {
                    channel: n,
                    users: m
                        .filter((e) => {
                            let { user: n } = e;
                            return n.id !== t;
                        })
                        .map((e) => {
                            let { user: n } = e;
                            return n;
                        }),
                }),
            }),
        }),
    });
}
