l.d(n, { Z: () => m });
var t = l(200651);
l(192379);
var i = l(442837),
    s = l(481060),
    a = l(314897),
    r = l(938475),
    o = l(499596),
    u = l(537135),
    c = l(388032),
    d = l(323499);
function m(e) {
    let { channel: n } = e,
        l = (0, i.e7)([a.default], () => a.default.getId()),
        m = (0, i.e7)([r.ZP], () => r.ZP.getVoiceStatesForChannel(n), [n]);
    return (0, t.jsx)(s.xJW, {
        title: c.intl.string(c.t.KPuWsr),
        className: d.modalContent,
        titleClassName: d.formItemTitle,
        children: (0, t.jsx)(u.Z, {
            children: (0, t.jsx)(o.Z, {
                channel: n,
                users: m
                    .filter((e) => {
                        let { user: n } = e;
                        return n.id !== l;
                    })
                    .map((e) => {
                        let { user: n } = e;
                        return n;
                    })
            })
        })
    });
}
