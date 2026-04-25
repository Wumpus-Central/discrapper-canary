n.d(t, { B: () => a });
var i = n(64700);
function a(e) {
    return i.useMemo(() => e?.items.filter((e) => !0 !== e.isOwned) ?? [], [e]);
}
