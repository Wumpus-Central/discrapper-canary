n.d(t, { Z: () => o }), n(47120);
var s = n(200651);
n(192379);
var r = n(481060),
    a = n(113434);
let o = function (e) {
    let { onSelect: t, quest: n } = e,
        { quests: o } = (0, a.J2)({ fetchPolicy: 'cache-and-network' }),
        i = [
            {
                label: 'NONE',
                value: null
            },
            ...o.map((e) => ({
                label: e.config.messages.questName,
                value: e
            }))
        ];
    return (0, s.jsxs)(r.xJW, {
        children: [
            (0, s.jsx)(r.vwX, {
                tag: r.RB0.H5,
                children: 'Prefill with Quest'
            }),
            (0, s.jsx)(r.R94, {
                children: (0, s.jsx)(r.PhF, {
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
