t.d(n, { Y: () => r });
var l = t(477900);
t(582128);
var a = t(192308);
let u = "conjure-publish";
function r(e) {
    let n, r;
    ((n = (0, a.lx)()),
        (r = { current: !1 }),
        (0, a.mM)(
            async () => {
                let { default: n } = await Promise.all([
                    t.e(151431),
                    t.e(41250),
                    t.e(177102),
                    t.e(60086),
                    t.e(460773),
                    t.e(208018),
                    t.e(788064),
                    t.e(441532),
                    t.e(422963),
                    t.e(433256),
                ]).then(t.bind(t, 113947));
                return (t) => (0, l.jsx)(n, { ...t, ...e, savingRef: r });
            },
            {
                modalKey: u,
                contextKey: n,
                onCloseRequest: () => {
                    r.current || (0, a.Oo)(u, n);
                },
            },
        ));
}
