n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(200651);
n(192379);
var r = n(324262),
    l = n(434404),
    a = n(929507),
    s = n(981631),
    o = n(388032),
    c = n(943935);
function d(e) {
    let { guild: t } = e,
        n = () => a.Z.dismissNotice(t.id);
    return (0, i.jsx)(r.Z, {
        guild: t,
        onDismissed: n,
        cta: o.intl.string(o.t.RzWDqa),
        message: o.intl.format(o.t['kQ/MDg'], {}),
        type: s.vID.COMMANDS_MIGRATION,
        image: c,
        onClick: () => {
            n(), l.Z.open(t.id, s.pNK.INTEGRATIONS);
        },
        imageMarginTop: 15,
        imageMarginX: 22
    });
}
