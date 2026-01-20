n.d(t, { Z: () => l }), n(388685);
var a = n(54381),
    r = n(481060),
    i = n(968843);
let l = function (e) {
    let { onSelect: t, quest: n } = e,
        { quests: l } = (0, i.J2)({
            fetchPolicy: "cache-and-network",
            callerSource: "prefill_selector",
        }),
        s = [
            {
                id: "none",
                label: "NONE",
                value: null,
            },
            ...l.map((e) => ({
                id: e.id,
                label: e.config.messages.questName,
                value: e,
            })),
        ];
    return (0, a.jsx)(r.PhF, {
        label: "Prefill with Quest",
        options: s,
        value: n,
        onSelectionChange: t,
        selectionMode: "single",
        fullWidth: !0,
    });
};
