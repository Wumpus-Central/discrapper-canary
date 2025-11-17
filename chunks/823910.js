n.d(t, { Z: () => r });
var r = {};
r = {
    deselectedItem: (e) => `\u{672A}\u{9078}\u{53D6}\u{300C}${e.item}\u{300D}\u{3002}`,
    longPressToSelect: `\u{9577}\u{6309}\u{4EE5}\u{9032}\u{5165}\u{9078}\u{64C7}\u{6A21}\u{5F0F}\u{3002}`,
    select: `\u{9078}\u{53D6}`,
    selectedAll: `\u{5DF2}\u{9078}\u{53D6}\u{6240}\u{6709}\u{9805}\u{76EE}\u{3002}`,
    selectedCount: (e, t) =>
        `${t.plural(e.count, {
            "=0": `\u{672A}\u{9078}\u{53D6}\u{4EFB}\u{4F55}\u{9805}\u{76EE}`,
            one: () => `\u{5DF2}\u{9078}\u{53D6} ${t.number(e.count)} \u{500B}\u{9805}\u{76EE}`,
            other: () => `\u{5DF2}\u{9078}\u{53D6} ${t.number(e.count)} \u{500B}\u{9805}\u{76EE}`,
        })}\u{3002}`,
    selectedItem: (e) => `\u{5DF2}\u{9078}\u{53D6}\u{300C}${e.item}\u{300D}\u{3002}`,
};
