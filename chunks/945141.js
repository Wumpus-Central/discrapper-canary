var i = r(47120);
var a = r(433517),
    o = r(147913);
function s(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let l = 'formGuidelinesStorageKey';
class u extends o.Z {
    _initialize() {
        let e = a.K.get(l);
        null != e && (this.seenForumGuidelines = new Set(e));
    }
    _terminate() {
        a.K.set(l, this.seenForumGuidelines);
    }
    markAsSeen(e) {
        this.seenForumGuidelines.add(e), a.K.set(l, this.seenForumGuidelines);
    }
    hasSeen(e) {
        return this.seenForumGuidelines.has(e);
    }
    constructor(...e) {
        super(...e), s(this, 'seenForumGuidelines', new Set());
    }
}
n.Z = new u();
