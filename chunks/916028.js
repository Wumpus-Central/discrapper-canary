n(47120);
var o = n(200651);
n(192379);
var r = n(481060),
    s = n(113434);
t.Z = function (e) {
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
    return (0, o.jsxs)(r.FormItem, {
        children: [
            (0, o.jsx)(r.FormTitle, {
                tag: r.FormTitleTags.H5,
                children: 'Prefill with Quest'
            }),
            (0, o.jsx)(r.FormText, {
                children: (0, o.jsx)(r.Select, {
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
