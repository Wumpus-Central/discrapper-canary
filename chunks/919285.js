n.d(t, { Z: () => c });
var i = n(200651);
n(192379);
var l = n(324262),
    r = n(434404),
    a = n(929507),
    s = n(981631),
    o = n(388032),
    d = n(943935);
function c(e) {
    let { guild: t } = e,
        n = () => a.Z.dismissNotice(t.id);
    return (0, i.jsx)(l.Z, {
        guild: t,
        onDismissed: n,
        cta: o.intl.string(o.t.RzWDqa),
        message: o.intl.format(o.t['kQ/MDg'], {}),
        type: s.vID.COMMANDS_MIGRATION,
        image: d,
        onClick: () => {
            n(), r.Z.open(t.id, s.pNK.INTEGRATIONS);
        },
        imageMarginTop: 15,
        imageMarginX: 22
    });
}
