n.d(t, { Z: () => m }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    s = n(481060),
    a = n(570140),
    o = n(524329),
    c = n(823379),
    d = n(999382),
    u = n(263155);
let m = () => {
    let { guild: e } = (0, l.e7)([d.Z], () => d.Z.getProps()),
        [t, n] = i.useState(0);
    switch (
        (i.useEffect(() => {
            null != e &&
                a.Z.wait(() => {
                    (0, o.RM)(e.id).then(() => {
                        n(1);
                    });
                });
        }, [e]),
        t)
    ) {
        case 0:
            return (0, r.jsx)(s.$jN, { type: s.$jN.Type.SPINNING_CIRCLE });
        case 1:
            return (0, r.jsx)(u.Z, { guild: e });
        default:
            return (0, c.vE)(t);
    }
};
