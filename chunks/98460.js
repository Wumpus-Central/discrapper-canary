n.d(t, { Z: () => r }), n(388685), n(290780);
var a = n(473749),
    l = n(433517);
function r() {
    let e = (0, a.useCallback)((e) => {
        let t = new Set(i());
        t.delete(e);
        let n = Array.from(t).slice(0, 4);
        n.unshift(e), l.K.set("RecentDismissibleOverrides", n);
    }, []);
    return [i(), e];
}
function i() {
    var e;
    return null != (e = l.K.get("RecentDismissibleOverrides")) ? e : [];
}
