i.d(r, { W: () => a }), i(393431), i(532706), i(42231), i(232424), i(949626), i(767709), i(65162);
var t = i(401562);
let { detectFile: n } = i(42640);
class a {
    static create(e) {
        let r = null,
            i = n(new Uint8Array(e, 0, Math.min(64, e.byteLength)));
        return "image/png" === i?.mimeType && (r = t.B.create(e)), r;
    }
}
