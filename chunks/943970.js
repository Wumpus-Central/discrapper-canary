n.d(t, { Z: () => r });
var l = n(442837),
    i = n(77498),
    a = n(768581);
function r(e, t) {
    let n = (0, l.e7)([i.Z], () => i.Z.getDetectableGame(null != e ? e : ""));
    if (null == n) return;
    let r = "cover" === t ? n.cover_image_hash : n.icon;
    return a.ZP.getApplicationIconURL({
        id: n.id,
        icon: r,
        keepAspectRatio: !0,
    });
}
