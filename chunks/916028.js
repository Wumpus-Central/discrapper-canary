n.d(t, { Z: () => i }), n(388685);
var a = n(54381),
    r = n(199849),
    l = n(968843);
let i = function (e) {
    let { onSelect: t, quest: n } = e,
        { quests: i } = (0, l.J2)({
            fetchPolicy: "cache-and-network",
            callerSource: "prefill_selector",
        }),
        s = [
            {
                label: "NONE",
                value: null,
            },
            ...i.map((e) => ({
                label: e.config.messages.questName,
                value: e,
            })),
        ];
    return (0, a.jsx)(r.B6, {
        label: "Prefill with Quest",
        options: s,
        isSelected: (e) => (null == e ? void 0 : e.id) === (null == n ? void 0 : n.id),
        select: t,
        serialize: String,
    });
};
