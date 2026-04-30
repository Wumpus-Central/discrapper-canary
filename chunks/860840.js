n.d(t, { A: () => a }), n(508300), n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162);
var o = n(615380),
    r = n.n(o);
class a {
    static async fromBlob(e) {
        return a.fromArrayBuffer(await e.arrayBuffer());
    }
    static fromArrayBuffer(e) {
        return r().ArrayBuffer.hash(e);
    }
    static fromDataURI(e) {
        let t = /^data:[^;]*;base64,(.*)$/.exec(e);
        if (null == t) return null;
        let n = atob(t[1]),
            o = new ArrayBuffer(n.length),
            a = new Uint8Array(o);
        for (let e = 0; e < n.length; e++) a[e] = n.charCodeAt(e);
        return r().ArrayBuffer.hash(o);
    }
}
