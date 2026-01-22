n.d(t, {
    A: () => o,
}),
    n(896048);
var r = n(306173),
    i = n(439372);

function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
class s extends i.A {
    _initialize() {
        if ((0, r.xd)()) {
            let e = "https:".concat(window.GLOBAL_ENV.WEBAPP_ENDPOINT, "/bad-hash-delta");
            (0, r.kk)(e);
            return;
        }
    }
    constructor(...e) {
        super(...e), a(this, "intervalID", void 0);
    }
}
let o = new s();
