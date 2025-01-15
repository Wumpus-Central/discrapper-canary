var o = n(200651);
n(192379);
var r = n(481060),
    s = n(153867),
    a = n(410030),
    i = n(583901),
    l = n(231338);
t.Z = function () {
    let e = (0, a.ZP)();
    return (0, o.jsxs)(r.FormItem, {
        children: [
            (0, o.jsx)(r.FormTitle, {
                tag: r.FormTitleTags.H5,
                children: 'Theme'
            }),
            (0, o.jsxs)('div', {
                style: {
                    display: 'flex',
                    justifyContent: 'space-between'
                },
                children: [
                    (0, o.jsx)(i.bD, {
                        theme: l.BR.LIGHT,
                        isSelected: e === l.BR.LIGHT,
                        onSelect: () => (0, s.ZI)({ theme: l.BR.LIGHT })
                    }),
                    (0, o.jsx)(i.bD, {
                        theme: l.BR.DARK,
                        isSelected: e === l.BR.DARK,
                        onSelect: () => (0, s.ZI)({ theme: l.BR.DARK })
                    })
                ]
            })
        ]
    });
};
