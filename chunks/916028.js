n.d(t, { Z: () => a }), n(388685);
var r = n(200651);
n(192379);
var o = n(481060),
    s = n(113434);
let a = function (e) {
    let { onSelect: t, quest: n } = e,
        { quests: a } = (0, s.J2)({ fetchPolicy: 'cache-and-network' }),
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
    return (0, r.jsxs)(o.xJW, {
        children: [
            (0, r.jsx)(o.vwX, {
                tag: o.RB0.H5,
                children: 'Prefill with Quest'
            }),
            (0, r.jsx)(o.R94, {
                children: (0, r.jsx)(o.PhF, {
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
