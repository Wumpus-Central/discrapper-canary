n.d(t, { Z: () => l }), n(388685), n(290780);
var a = n(647438),
    i = n(433517);
function l() {
    let e = (0, a.useCallback)((e) => {
        let t = new Set(r());
        t.delete(e);
        let n = Array.from(t).slice(0, 4);
        n.unshift(e), i.K.set("RecentDismissibleOverrides", n);
    }, []);
    return [r(), e];
}
function r() {
    var e;
    return null != (e = i.K.get("RecentDismissibleOverrides")) ? e : [];
}
