n.d(t, { Z: () => i }), n(388685), n(290780);
var a = n(473749),
    r = n(433517);
function i() {
    let e = (0, a.useCallback)((e) => {
        let t = new Set(l());
        t.delete(e);
        let n = Array.from(t).slice(0, 4);
        n.unshift(e), r.K.set("RecentDismissibleOverrides", n);
    }, []);
    return [l(), e];
}
function l() {
    var e;
    return null != (e = r.K.get("RecentDismissibleOverrides")) ? e : [];
}
