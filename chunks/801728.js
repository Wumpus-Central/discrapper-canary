n.d(t, { Z: () => r });
var r = {};
r = {
    deselectedItem: (e) => `Vienums ${e.item} nav atlas\u{12B}ts.`,
    longPressToSelect: `Ilgi turiet nospiestu. lai iesl\u{113}gtu atlases re\u{17E}\u{12B}mu.`,
    select: `Atlas\u{12B}t`,
    selectedAll: `Atlas\u{12B}ti visi vienumi.`,
    selectedCount: (e, t) =>
        `${t.plural(e.count, {
            "=0": `Nav atlas\u{12B}ts neviens vienums`,
            one: () => `Atlas\u{12B}to vienumu skaits: ${t.number(e.count)}`,
            other: () => `Atlas\u{12B}to vienumu skaits: ${t.number(e.count)}`,
        })}.`,
    selectedItem: (e) => `Atlas\u{12B}ts vienums ${e.item}.`,
};
