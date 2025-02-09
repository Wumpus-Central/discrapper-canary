a.d(s, {
    Z: () => r,
    a: () => l
});
var i,
    t = a(200651);
a(192379);
var n = a(481060),
    l = (((i = {})[(i.UNENROLLED = 0)] = 'UNENROLLED'), (i[(i.ENROLLED = 1)] = 'ENROLLED'), (i[(i.COMPLETED_25 = 2)] = 'COMPLETED_25'), (i[(i.COMPLETED_50 = 3)] = 'COMPLETED_50'), (i[(i.COMPLETED_75 = 4)] = 'COMPLETED_75'), (i[(i.COMPLETED_100 = 5)] = 'COMPLETED_100'), (i[(i.CLAIMED = 6)] = 'CLAIMED'), i);
let r = function (e) {
    let { onChange: s, value: a } = e;
    return (0, t.jsxs)(n.xJW, {
        children: [
            (0, t.jsx)(n.vwX, {
                tag: n.RB0.H5,
                children: 'User State'
            }),
            (0, t.jsx)(n.R94, {
                children: (0, t.jsx)(n.PhF, {
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
                    isSelected: (e) => e === a,
                    select: s,
                    serialize: String
                })
            })
        ]
    });
};
