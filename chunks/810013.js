t.d(n, { Z: () => m });
var l = t(200651);
t(192379);
var i = t(442837),
    s = t(481060),
    a = t(314897),
    r = t(938475),
    o = t(499596),
    u = t(537135),
    c = t(388032),
    d = t(456963);
function m(e) {
    let { channel: n } = e,
        t = (0, i.e7)([a.default], () => a.default.getId()),
        m = (0, i.e7)([r.ZP], () => r.ZP.getVoiceStatesForChannel(n), [n]);
    return (0, l.jsx)(s.xJW, {
        title: c.intl.string(c.t.KPuWsr),
        className: d.modalContent,
        titleClassName: d.formItemTitle,
        children: (0, l.jsx)(u.Z, {
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
