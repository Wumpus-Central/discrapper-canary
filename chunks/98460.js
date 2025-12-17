n.d(t, { Z: () => l }), n(388685), n(290780);
var a = n(473749),
    r = n(433517);
function l() {
    let e = (0, a.useCallback)((e) => {
        let t = new Set(i());
        t.delete(e);
        let n = Array.from(t).slice(0, 4);
        n.unshift(e), r.K.set("RecentDismissibleOverrides", n);
    }, []);
    return [i(), e];
}
function i() {
    var e;
    return null != (e = r.K.get("RecentDismissibleOverrides")) ? e : [];
}
