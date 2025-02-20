n.d(t, {
    Z: () => i,
    a: () => a
});
var r,
    o = n(200651);
n(192379);
var s = n(481060),
    a = (((r = {})[(r.UNENROLLED = 0)] = 'UNENROLLED'), (r[(r.ENROLLED = 1)] = 'ENROLLED'), (r[(r.COMPLETED_25 = 2)] = 'COMPLETED_25'), (r[(r.COMPLETED_50 = 3)] = 'COMPLETED_50'), (r[(r.COMPLETED_75 = 4)] = 'COMPLETED_75'), (r[(r.COMPLETED_100 = 5)] = 'COMPLETED_100'), (r[(r.CLAIMED = 6)] = 'CLAIMED'), r);
let i = function (e) {
    let { onChange: t, value: n } = e;
    return (0, o.jsxs)(s.xJW, {
        children: [
            (0, o.jsx)(s.vwX, {
                tag: s.RB0.H5,
                children: 'User State'
            }),
            (0, o.jsx)(s.R94, {
                children: (0, o.jsx)(s.PhF, {
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
