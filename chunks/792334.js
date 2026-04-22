i.d(e, { B: () => s });
var r = i(64700);
function s(t) {
    return r.useMemo(() => t?.items.filter((t) => !0 !== t.isOwned) ?? [], [t]);
}
