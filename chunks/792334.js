r.d(e, { B: () => n });
var i = r(582128);
function n(t) {
    return i.useMemo(() => t?.items.filter((t) => !0 !== t.isOwned) ?? [], [t]);
}
