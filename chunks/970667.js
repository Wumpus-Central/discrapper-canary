n.d(t, {
    A: () => i,
});
var r = n(643479);
let i = {
        isXMLFile: o,
        findOffsets: l,
    },
    a = 0,
    s = "<?xpacket begin";

function o(e) {
    return !!e && (0, r.hT)(e, a, s.length) === s;
}

function l(e) {
    let t = [];
    return (
        t.push({
            dataOffset: a,
            length: e.byteLength,
        }),
        {
            xmpChunks: t,
        }
    );
}
