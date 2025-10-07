n.d(t, { Z: () => a }), n(388685);
var r = n(951288),
    s = n(481060),
    o = n(113434);
let a = function (e) {
    let { onSelect: t, quest: n } = e,
        { quests: a } = (0, o.J2)({
            fetchPolicy: "cache-and-network",
            callerSource: "prefill_selector",
        }),
        i = [
            {
                label: "NONE",
                value: null,
            },
            ...a.map((e) => ({
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
