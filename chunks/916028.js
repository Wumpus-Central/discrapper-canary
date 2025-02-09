a.d(s, { Z: () => l }), a(47120);
var i = a(200651);
a(192379);
var t = a(481060),
    n = a(113434);
let l = function (e) {
    let { onSelect: s, quest: a } = e,
        { quests: l } = (0, n.J2)({ fetchPolicy: 'cache-and-network' }),
        r = [
            {
                label: 'NONE',
                value: null
            },
            ...l.map((e) => ({
                label: e.config.messages.questName,
                value: e
            }))
        ];
    return (0, i.jsxs)(t.xJW, {
        children: [
            (0, i.jsx)(t.vwX, {
                tag: t.RB0.H5,
                children: 'Prefill with Quest'
            }),
            (0, i.jsx)(t.R94, {
                children: (0, i.jsx)(t.PhF, {
                    'aria-label': 'Prefill Quest',
                    options: r,
                    isSelected: (e) => (null == e ? void 0 : e.id) === (null == a ? void 0 : a.id),
                    select: s,
                    serialize: String
                })
            })
        ]
    });
};
