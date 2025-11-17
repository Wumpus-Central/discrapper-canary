n.d(t, { Z: () => g }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(481060),
    s = n(570140),
    o = n(524329),
    c = n(823379),
    d = n(999382),
    u = n(263155);
let g = () => {
    let { guild: e } = (0, l.e7)([d.Z], () => d.Z.getProps()),
        [t, n] = i.useState(0);
    switch (
        (i.useEffect(() => {
            null != e &&
                s.Z.wait(() => {
                    (0, o.RM)(e.id).then(() => {
                        n(1);
                    });
                });
        }, [e]),
        t)
    ) {
        case 0:
            return (0, r.jsx)(a.$jN, { type: a.$jN.Type.SPINNING_CIRCLE });
        case 1:
            return (0, r.jsx)(u.Z, { guild: e });
        default:
            return (0, c.vE)(t);
    }
};
