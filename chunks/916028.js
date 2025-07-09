(n.d(t, { Z: () => a }), n(388685));
var r = n(255367);
n(73800);
var s = n(481060),
    o = n(113434);
let a = function (e) {
    let { onSelect: t, quest: n } = e,
        { quests: a } = (0, o.J2)({ fetchPolicy: 'cache-and-network' }),
        i = [
            {
                label: 'NONE',
                value: null
            },
            ...a.map((e) => ({
                label: e.config.messages.questName,
                value: e
            }))
        ];
    return (0, r.jsxs)(s.xJW, {
        children: [
            (0, r.jsx)(s.vwX, {
                tag: s.RB0.H5,
                children: 'Prefill with Quest'
            }),
            (0, r.jsx)(s.R94, {
                children: (0, r.jsx)(s.PhF, {
                    'aria-label': 'Prefill Quest',
                    options: i,
                    isSelected: (e) => (null == e ? void 0 : e.id) === (null == n ? void 0 : n.id),
                    select: t,
                    serialize: String
                })
            })
        ]
    });
};
