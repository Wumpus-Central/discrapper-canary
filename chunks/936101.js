r.d(n, {
    L: function () {
        return I;
    },
    d: function () {
        return b;
    }
});
var i = r(518263);
var a = r(970173);
var o = r(520712);
var s = r(268111);
var l = r(941497);
var u = r(32026);
var c = r(480839);
var d = r(744285);
var f = r(492257);
var p = r(873817);
var h = r(642549);
var _ = r(47120);
var m = r(772848),
    g = r(433517),
    E = r(70956);
let v = 'purchase_token',
    y = 60 * E.Z.Millis.DAY;
function b() {
    let e = g.K.get(v);
    if (null != e && e.expires >= Date.now()) return e.purchaseToken;
    let n = (0, m.Z)();
    return (
        g.K.set(v, {
            purchaseToken: n,
            expires: Date.now() + y
        }),
        n
    );
}
async function I() {
    let e = new Uint8Array(
        b()
            .split('')
            .map((e) => e.charCodeAt(0))
    );
    return btoa(String.fromCharCode(...new Uint8Array(await window.crypto.subtle.digest({ name: 'SHA-256' }, e))));
}
