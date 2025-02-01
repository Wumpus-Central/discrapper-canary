t.d(i, { default: () => s });
var n = t(200651);
t(192379);
var r = t(481060);
let s = (e) => {
    let { entry: i, transitionState: t, requestId: s } = e;
    return (0, n.jsxs)(r.Y0X, {
        size: r.CgR.DYNAMIC,
        transitionState: t,
        children: [
            (0, n.jsx)(r.xBx, {
                children: (0, n.jsx)(r.X6q, {
                    variant: 'heading-md/semibold',
                    children: 'Debugging entry: '.concat(i.id)
                })
            }),
            (0, n.jsx)(r.hzk, {
                children: (0, n.jsx)('div', {
                    style: {
                        userSelect: 'text',
                        padding: '16px'
                    },
                    children: (0, n.jsx)(r.Text, {
                        variant: 'text-sm/normal',
                        children: (0, n.jsx)('pre', {
                            children: JSON.stringify(
                                {
                                    entry: i,
                                    requestId: s
                                },
                                null,
                                2
                            )
                        })
                    })
                })
            })
        ]
    });
};
