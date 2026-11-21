var i = n(477900);
n(582128);
var r = n(192308),
    s = n(419490),
    l = n(572164),
    a = n(489496);
function o(e, t) {
    let o = "mode_picker" === e.variant && (0, l.T)();
    return (0, r.mM)(
        async () => {
            let { default: t } = await Promise.all([
                n.e(114386),
                n.e(885653),
                n.e(350681),
                n.e(704457),
                n.e(108528),
            ]).then(n.bind(n, 729331));
            return (n) => (0, i.jsx)(t, { ...n, ...e });
        },
        {
            modalKey: "clips-ea-announcement",
            onCloseCallback: () => {
                let e = o && !s.Ay.getState().clipsSettings.clipsEnabled;
                try {
                    t?.();
                } finally {
                    e && (0, a.Zw)();
                }
            },
        },
    );
}
n.d(
    t,
    {},
    {
        C: o,
        t: function (e) {
            return o({ variant: e, source: "devtools" });
        },
    },
);
