t.d(n, { Z: () => m });
var l = t(200651);
t(192379);
var i = t(442837),
    r = t(481060),
    s = t(314897),
    a = t(938475),
    o = t(499596),
    c = t(537135),
    u = t(388032),
    d = t(382840);
function m(e) {
    let { channel: n } = e,
        t = (0, i.e7)([s.default], () => s.default.getId()),
        m = (0, i.e7)([a.ZP], () => a.ZP.getVoiceStatesForChannel(n), [n]);
    return (0, l.jsx)(r.xJW, {
        title: u.NW.string(u.t.KPuWsr),
        className: d.modalContent,
        titleClassName: d.formItemTitle,
        children: (0, l.jsx)(c.Z, {
            children: (0, l.jsx)(o.Z, {
                channel: n,
                users: m
                    .filter((e) => {
                        let { user: n } = e;
                        return n.id !== t;
                    })
                    .map((e) => {
                        let { user: n } = e;
                        return n;
                    })
            })
        })
    });
}
