n.d(t, { Z: () => a }), n(388685), n(290780);
var r = n(647438),
    i = n(433517);
function a() {
    let e = (0, r.useCallback)((e) => {
        let t = new Set(o());
        t.delete(e);
        let n = Array.from(t).slice(0, 4);
        n.unshift(e), i.K.set("RecentDismissibleOverrides", n);
    }, []);
    return [o(), e];
}
function o() {
    var e;
    return null != (e = i.K.get("RecentDismissibleOverrides")) ? e : [];
}
