t.d(n, {
    Z: function () {
        return m;
    }
});
var l = t(200651);
t(192379);
var i = t(442837),
    s = t(481060),
    r = t(314897),
    a = t(938475),
    o = t(499596),
    u = t(537135),
    c = t(388032),
    d = t(456963);
function m(e) {
    let { channel: n } = e,
        t = (0, i.e7)([r.default], () => r.default.getId()),
        m = (0, i.e7)([a.ZP], () => a.ZP.getVoiceStatesForChannel(n), [n]);
    return (0, l.jsx)(s.FormItem, {
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
