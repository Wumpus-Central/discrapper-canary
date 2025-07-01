n.d(t, { Z: () => c });
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    o = n(793030),
    a = n(388032),
    s = n(803595);
function c() {
    let e = (e) => {
            let { className: t } = e;
            return (0, r.jsx)('div', { className: l()(s.line, t) });
        },
        t = () => (0, r.jsx)('div', { className: s.avatar }),
        n = () =>
            (0, r.jsxs)(o.Kq, {
                direction: 'horizontal',
                gap: 12,
                padding: 4,
                children: [
                    (0, r.jsx)(t, {}),
                    (0, r.jsxs)(o.Kq, {
                        gap: 4,
                        children: [(0, r.jsx)(e, { className: s.lineMedium }), (0, r.jsx)(e, { className: s.lineShort }), (0, r.jsx)(e, { className: s.lineLong })]
                    })
                ]
            });
    return (0, r.jsxs)(o.Kq, {
        gap: 4,
        children: [
            (0, r.jsxs)(o.xv, {
                variant: 'text-sm/medium',
                color: 'text-secondary',
                style: {
                    paddingTop: 8,
                    paddingLeft: 4
                },
                children: [a.intl.string(a.t.ZTNur6), '...']
            }),
            Array.from({ length: 15 }).map((e, t) => (0, r.jsx)(n, {}, t))
        ]
    });
}
