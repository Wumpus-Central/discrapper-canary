n.r(t),
    n.d(t, { default: () => a }),
    n(508300),
    n(393431),
    n(532706),
    n(42231),
    n(232424),
    n(949626),
    n(767709),
    n(65162);
var i = n(615380),
    r = n.n(i);
class a {
    static async fromBlob(e) {
        return a.fromArrayBuffer(await e.arrayBuffer());
    }
    static fromArrayBuffer(e) {
        return r().ArrayBuffer.hash(e);
    }
    static fromDataURI(e) {
        return Promise.resolve().then(() => {
            let t = /^data:[^;]*;base64,(.*)$/.exec(e);
            if (null == t) throw Error("Not a base64 data URI");
            let n = atob(t[1]),
                i = new ArrayBuffer(n.length),
                a = new Uint8Array(i);
            for (let e = 0; e < n.length; e++) a[e] = n.charCodeAt(e);
            return r().ArrayBuffer.hash(i);
        });
    }
}
