n.d(t, { Z: () => i });
var r = n(822632);
let i = {
        isXMLFile: s,
        findOffsets: l,
    },
    a = 0,
    o = "<?xpacket begin";
function s(e) {
    return !!e && (0, r.oH)(e, a, o.length) === o;
}
function l(e) {
    let t = [];
    return (
        t.push({
            dataOffset: a,
            length: e.byteLength,
        }),
        { xmpChunks: t }
    );
}
