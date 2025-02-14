n.d(t, {
    Z: () => i,
    a: () => o
});
var s,
    r = n(200651);
n(192379);
var a = n(481060),
    o = (((s = {})[(s.UNENROLLED = 0)] = 'UNENROLLED'), (s[(s.ENROLLED = 1)] = 'ENROLLED'), (s[(s.COMPLETED_25 = 2)] = 'COMPLETED_25'), (s[(s.COMPLETED_50 = 3)] = 'COMPLETED_50'), (s[(s.COMPLETED_75 = 4)] = 'COMPLETED_75'), (s[(s.COMPLETED_100 = 5)] = 'COMPLETED_100'), (s[(s.CLAIMED = 6)] = 'CLAIMED'), s);
let i = function (e) {
    let { onChange: t, value: n } = e;
    return (0, r.jsxs)(a.xJW, {
        children: [
            (0, r.jsx)(a.vwX, {
                tag: a.RB0.H5,
                children: 'User State'
            }),
            (0, r.jsx)(a.R94, {
                children: (0, r.jsx)(a.PhF, {
                    'aria-label': 'User State',
                    options: [
                        {
                            label: 'Unenrolled',
                            value: 0
                        },
                        {
                            label: 'Enrolled',
                            value: 1
                        },
                        {
                            label: '25% Complete',
                            value: 2
                        },
                        {
                            label: '50% Complete',
                            value: 3
                        },
                        {
                            label: '75% Complete',
                            value: 4
                        },
                        {
                            label: '100% Complete',
                            value: 5
                        },
                        {
                            label: 'Claimed',
                            value: 6
                        }
                    ],
                    isSelected: (e) => e === n,
                    select: t,
                    serialize: String
                })
            })
        ]
    });
};
