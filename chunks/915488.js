n.d(t, { a: () => o });
var r = n(850992),
    i = n(203982),
    a = n(652215),
    s = n(698279);
function o(e) {
    let { stickerPack: t, stickerPickerCategories: n } = e;
    i._.dispatchToLastSubscribed(a.jej.OPEN_EXPRESSION_PICKER, { activeView: s.kx.STICKER });
    let o = n.findIndex((e) => e.id === t.id);
    -1 !== o && r.bM.setActiveCategoryIndex(o);
}
