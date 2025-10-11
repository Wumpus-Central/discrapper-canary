n.d(t, { Z: () => o }), n(388685);
var r = n(951288),
    s = n(481060),
    a = n(113434);
let o = function (e) {
    let { onSelect: t, quest: n } = e,
        { quests: o } = (0, a.J2)({
            fetchPolicy: "cache-and-network",
            callerSource: "prefill_selector",
        }),
        i = [
            {
                label: "NONE",
                value: null,
            },
            ...o.map((e) => ({
                label: e.config.messages.questName,
                value: e,
            })),
        ];
    return (0, r.jsx)(s.PhF, {
        label: "Prefill with Quest",
        options: i,
        isSelected: (e) => (null == e ? void 0 : e.id) === (null == n ? void 0 : n.id),
        select: t,
        serialize: String,
    });
};
