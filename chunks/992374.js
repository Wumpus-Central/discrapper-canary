n.d(t, { Z: () => i });
var r = n(463424);
let i = {
        isXMLFile: s,
        findOffsets: l,
    },
    o = 0,
    a = "<?xpacket begin";
function s(e) {
    return !!e && (0, r.oH)(e, o, a.length) === a;
}
function l(e) {
    let t = [];
    return (
        t.push({
            dataOffset: o,
            length: e.byteLength,
        }),
        { xmpChunks: t }
    );
}
