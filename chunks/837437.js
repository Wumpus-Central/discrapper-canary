n.d(t, { Z: () => i });
var r = n(190485);
let i = {
    isAvifFile: o,
    findAvifOffsets: a,
};
function o(e) {
    if (!e) return !1;
    try {
        let t = (0, r.ER)(e, 0);
        return t && "avif" === t.majorBrand;
    } catch (e) {
        return !1;
    }
}
function a(e) {
    return (0, r.ku)(e);
}
