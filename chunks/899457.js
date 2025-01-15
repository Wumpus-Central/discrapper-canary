n.d(t, {
    a: function () {
        return r;
    }
});
var o,
    r,
    s = n(200651);
n(192379);
var a = n(481060);
((o = r || (r = {}))[(o.UNENROLLED = 0)] = 'UNENROLLED'), (o[(o.ENROLLED = 1)] = 'ENROLLED'), (o[(o.COMPLETED_25 = 2)] = 'COMPLETED_25'), (o[(o.COMPLETED_50 = 3)] = 'COMPLETED_50'), (o[(o.COMPLETED_75 = 4)] = 'COMPLETED_75'), (o[(o.COMPLETED_100 = 5)] = 'COMPLETED_100'), (o[(o.CLAIMED = 6)] = 'CLAIMED');
t.Z = function (e) {
    let { onChange: t, value: n } = e;
    return (0, s.jsxs)(a.FormItem, {
        children: [
            (0, s.jsx)(a.FormTitle, {
                tag: a.FormTitleTags.H5,
                children: 'User State'
            }),
            (0, s.jsx)(a.FormText, {
                children: (0, s.jsx)(a.Select, {
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
