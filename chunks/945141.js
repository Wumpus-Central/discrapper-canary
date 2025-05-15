n.d(t, { Z: () => l }), n(388685);
var r = n(433517),
    i = n(147913);
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
let o = 'formGuidelinesStorageKey';
class s extends i.Z {
    _initialize() {
        let e = r.K.get(o);
        null != e && (this.seenForumGuidelines = new Set(e));
    }
    _terminate() {
        r.K.set(o, this.seenForumGuidelines);
    }
    markAsSeen(e) {
        this.seenForumGuidelines.add(e), r.K.set(o, this.seenForumGuidelines);
    }
    hasSeen(e) {
        return this.seenForumGuidelines.has(e);
    }
    constructor(...e) {
        super(...e), a(this, 'seenForumGuidelines', new Set());
    }
}
let l = new s();
