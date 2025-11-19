n.d(t, { Z: () => i }), n(388685), n(290780);
var a = n(473749),
    l = n(433517);
function i() {
    let e = (0, a.useCallback)((e) => {
        let t = new Set(r());
        t.delete(e);
        let n = Array.from(t).slice(0, 4);
        n.unshift(e), l.K.set("RecentDismissibleOverrides", n);
    }, []);
    return [r(), e];
}
function r() {
    var e;
    return null != (e = l.K.get("RecentDismissibleOverrides")) ? e : [];
}
