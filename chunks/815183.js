n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var o = n(481060),
    s = n(153867),
    a = n(410030),
    i = n(583901),
    l = n(231338);
let c = function () {
    let e = (0, a.ZP)();
    return (0, r.jsxs)(o.xJW, {
        children: [
            (0, r.jsx)(o.vwX, {
                tag: o.RB0.H5,
                children: 'Theme'
            }),
            (0, r.jsxs)('div', {
                style: {
                    display: 'flex',
                    justifyContent: 'space-between'
                },
                children: [
                    (0, r.jsx)(i.bD, {
                        theme: l.BR.LIGHT,
                        isSelected: e === l.BR.LIGHT,
                        onSelect: () => (0, s.ZI)({ theme: l.BR.LIGHT })
                    }),
                    (0, r.jsx)(i.bD, {
                        theme: l.BR.DARK,
                        isSelected: e === l.BR.DARK,
                        onSelect: () => (0, s.ZI)({ theme: l.BR.DARK })
                    })
                ]
            })
        ]
    });
};
