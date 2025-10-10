t.d(a, { Z: () => r });
var c = t(442837),
    n = t(77498),
    i = t(768581);
function r(e, a) {
    let t = (0, c.e7)([n.Z], () => n.Z.getDetectableGame(null != e ? e : ""));
    if (null == t) return;
    let r = "cover" === a ? t.cover_image_hash : t.icon;
    return i.ZP.getApplicationIconURL({
        id: t.id,
        icon: r,
        keepAspectRatio: !0,
    });
}
