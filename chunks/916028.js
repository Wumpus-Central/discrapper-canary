n.d(t, { Z: () => o }), n(388685);
var r = n(951288);
n(647438);
var i = n(481060),
    a = n(113434);
let o = function (e) {
    let { onSelect: t, quest: n } = e,
        { quests: o } = (0, a.J2)({
            fetchPolicy: "cache-and-network",
            callerSource: "prefill_selector",
        }),
        s = [
            {
                label: "NONE",
                value: null,
            },
            ...o.map((e) => ({
                label: e.config.messages.questName,
                value: e,
            })),
        ];
    return (0, r.jsxs)(i.xJW, {
        children: [
            (0, r.jsx)(i.vwX, { children: "Prefill with Quest" }),
            (0, r.jsx)(i.R94, {
                children: (0, r.jsx)(i.PhF, {
                    "aria-label": "Prefill Quest",
                    options: s,
                    isSelected: (e) => (null == e ? void 0 : e.id) === (null == n ? void 0 : n.id),
                    select: t,
                    serialize: String,
                }),
            }),
        ],
    });
};
