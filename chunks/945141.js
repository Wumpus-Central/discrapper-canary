n.d(t, { Z: () => l }), n(47120);
var i = n(433517),
    r = n(147913);
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let s = 'formGuidelinesStorageKey';
class o extends r.Z {
    _initialize() {
        let e = i.K.get(s);
        null != e && (this.seenForumGuidelines = new Set(e));
    }
    _terminate() {
        i.K.set(s, this.seenForumGuidelines);
    }
    markAsSeen(e) {
        this.seenForumGuidelines.add(e), i.K.set(s, this.seenForumGuidelines);
    }
    hasSeen(e) {
        return this.seenForumGuidelines.has(e);
    }
    constructor(...e) {
        super(...e), a(this, 'seenForumGuidelines', new Set());
    }
}
let l = new o();
