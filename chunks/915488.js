n.d(t, { a: () => r });
var i = n(850992),
    l = n(203982),
    a = n(652215),
    s = n(698279);
function r(e) {
    let { stickerPack: t, stickerPickerCategories: n } = e;
    l._.dispatchToLastSubscribed(a.jej.OPEN_EXPRESSION_PICKER, { activeView: s.kx.STICKER });
    let r = n.findIndex((e) => e.id === t.id);
    -1 !== r && i.bM.setActiveCategoryIndex(r);
}
