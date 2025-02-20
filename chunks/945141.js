n.d(t, { Z: () => l }), n(47120);
var r = n(433517),
    i = n(147913);
function o(e, t, n) {
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
let a = 'formGuidelinesStorageKey';
class s extends i.Z {
    _initialize() {
        let e = r.K.get(a);
        null != e && (this.seenForumGuidelines = new Set(e));
    }
    _terminate() {
        r.K.set(a, this.seenForumGuidelines);
    }
    markAsSeen(e) {
        this.seenForumGuidelines.add(e), r.K.set(a, this.seenForumGuidelines);
    }
    hasSeen(e) {
        return this.seenForumGuidelines.has(e);
    }
    constructor(...e) {
        super(...e), o(this, 'seenForumGuidelines', new Set());
    }
}
let l = new s();
