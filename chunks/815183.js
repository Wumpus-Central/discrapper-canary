n.d(t, { Z: () => c });
var s = n(200651);
n(192379);
var r = n(481060),
    a = n(153867),
    o = n(410030),
    i = n(583901),
    l = n(231338);
let c = function () {
    let e = (0, o.ZP)();
    return (0, s.jsxs)(r.xJW, {
        children: [
            (0, s.jsx)(r.vwX, {
                tag: r.RB0.H5,
                children: 'Theme'
            }),
            (0, s.jsxs)('div', {
                style: {
                    display: 'flex',
                    justifyContent: 'space-between'
                },
                children: [
                    (0, s.jsx)(i.bD, {
                        theme: l.BR.LIGHT,
                        isSelected: e === l.BR.LIGHT,
                        onSelect: () => (0, a.ZI)({ theme: l.BR.LIGHT })
                    }),
                    (0, s.jsx)(i.bD, {
                        theme: l.BR.DARK,
                        isSelected: e === l.BR.DARK,
                        onSelect: () => (0, a.ZI)({ theme: l.BR.DARK })
                    })
                ]
            })
        ]
    });
};
