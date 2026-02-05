n.d(t, { a: () => s });
var i = n(850992),
    l = n(203982),
    a = n(652215),
    r = n(698279);
function s(e) {
    let { stickerPack: t, stickerPickerCategories: n } = e;
    l._.dispatchToLastSubscribed(a.jej.OPEN_EXPRESSION_PICKER, { activeView: r.kx.STICKER });
    let s = n.findIndex((e) => e.id === t.id);
    -1 !== s && i.bM.setActiveCategoryIndex(s);
}
