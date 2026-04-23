n.d(t, { B: () => a });
var r = n(64700);
function a(e) {
    return r.useMemo(() => e?.items.filter((e) => !0 !== e.isOwned) ?? [], [e]);
}
