(n.d(t, { Z: () => u }), n(388685));
var r = n(392711),
    i = n(147913),
    a = n(948154),
    o = n(787879);
function s(e, t, n) {
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
let l = 5000;
class c extends i.Z {
    preloadInbox() {
        a.Z.loadMoreInbox({ preload: !0 });
    }
    _terminate() {
        this.throttledPreloadInbox.cancel();
    }
    constructor() {
        (super(),
            s(this, 'throttledPreloadInbox', void 0),
            s(
                this,
                'stores',
                new Map().set(o.Z, () => {
                    !o.Z.hasPreloaded && o.Z.canLoadMore({ preload: !0 }) && this.throttledPreloadInbox();
                })
            ),
            (this.throttledPreloadInbox = (0, r.throttle)(this.preloadInbox, l)));
    }
}
let u = new c();
