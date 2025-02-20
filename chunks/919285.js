n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var i = n(324262),
    l = n(434404),
    o = n(929507),
    a = n(981631),
    s = n(388032),
    c = n(943935);
function u(e) {
    let { guild: t } = e,
        n = () => o.Z.dismissNotice(t.id);
    return (0, r.jsx)(i.Z, {
        guild: t,
        onDismissed: n,
        cta: s.NW.string(s.t.RzWDqa),
        message: s.NW.format(s.t['kQ/MDg'], {}),
        type: a.vID.COMMANDS_MIGRATION,
        image: c,
        onClick: () => {
            n(), l.Z.open(t.id, a.pNK.INTEGRATIONS);
        },
        imageMarginTop: 15,
        imageMarginX: 22
    });
}
