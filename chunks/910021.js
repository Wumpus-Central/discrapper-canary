"use strict";
n.d(t, { W: () => a }), n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162);
var r = n(401562);
let { detectFile: i } = n(42640);
class a {
    static create(e) {
        let t = null,
            n = i(new Uint8Array(e, 0, Math.min(64, e.byteLength)));
        return "image/png" === n?.mimeType && (t = r.B.create(e)), t;
    }
}
