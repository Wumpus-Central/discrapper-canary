n.d(t, { Z: () => f });
var r = n(951288),
    i = n(442837),
    l = n(481060),
    s = n(314897),
    o = n(938475),
    a = n(499596),
    c = n(537135),
    d = n(388032),
    u = n(542257);
function f(e) {
    let { channel: t } = e,
        n = (0, i.e7)([s.default], () => s.default.getId()),
        f = (0, i.e7)([o.ZP], () => o.ZP.getVoiceStatesForChannel(t), [t]);
    return (0, r.jsx)("div", {
        className: u.modalContent,
        children: (0, r.jsx)(l.gNt, {
            label: d.intl.string(d.t.KPuWsr),
            children: (0, r.jsx)(c.Z, {
                children: (0, r.jsx)(a.Z, {
                    channel: t,
                    users: f
                        .filter((e) => {
                            let { user: t } = e;
                            return t.id !== n;
                        })
                        .map((e) => {
                            let { user: t } = e;
                            return t;
                        }),
                }),
            }),
        }),
    });
}
