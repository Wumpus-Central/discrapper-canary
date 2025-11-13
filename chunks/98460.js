n.d(t, { Z: () => r }), n(388685), n(290780);
var a = n(647438),
    i = n(433517);
function r() {
    let e = (0, a.useCallback)((e) => {
        let t = new Set(l());
        t.delete(e);
        let n = Array.from(t).slice(0, 4);
        n.unshift(e), i.K.set("RecentDismissibleOverrides", n);
    }, []);
    return [l(), e];
}
function l() {
    var e;
    return null != (e = i.K.get("RecentDismissibleOverrides")) ? e : [];
}
