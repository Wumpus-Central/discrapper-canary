Object.defineProperty(t, "__esModule", { value: !0 }), (t.detectFile = void 0);
let n = i(835986),
    r = i(817762);
t.detectFile = function (e, t) {
    var i;
    if (
        t &&
        Object.prototype.hasOwnProperty.call(t, "chunkSize") &&
        (null != (i = null == t ? void 0 : t.chunkSize) ? i : 0) <= 0
    )
        throw RangeError("chunkSize must be bigger than zero");
    let o = (0, r.getFileChunk)(e, (null == t ? void 0 : t.chunkSize) || 64);
    if (0 === o.length) return;
    let a = [],
        s = [];
    for (let e in n.FileTypes)
        if (Object.prototype.hasOwnProperty.call(n.FileTypes, e)) {
            let t = n.FileTypes.getSignaturesByName(e),
                i = n.FileTypes.detectbBySignatures(o, t);
            if (i) {
                let t = n.FileTypes.getInfoByName(e);
                n.FILE_TYPES_REQUIRED_ADDITIONAL_CHECK.includes(t.extension) && s.push(t.extension);
                let r = {
                    extension: t.extension,
                    mimeType: t.mimeType,
                    description: t.description,
                    signature: Object.assign(Object.assign({}, i), { sequence: i.sequence.map((e) => e.toString(16)) }),
                };
                a.push(r);
            }
        }
    if (0 === a.length) return;
    if (1 === a.length && 0 === s.length) return a[0];
    let l = n.FileTypes.detectTypeByAdditionalCheck(o, a);
    if (l) return a.find((e) => e.extension === l);
};
