r.d(e, { B: () => s });
var i = r(582128);
function s(t) {
    return i.useMemo(() => t?.items.filter((t) => !0 !== t.isOwned) ?? [], [t]);
}
