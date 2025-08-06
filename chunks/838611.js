n.d(t, { Z: () => d }), n(388685);
var r = n(392711),
    i = n(147913),
    o = n(948154),
    a = n(787879),
    s = n(982183);
function l(e, t, n) {
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
let c = 5000;
class u extends i.Z {
    preloadInbox() {
        o.Z.loadMoreInbox({
            preload: !0,
            loadingTrigger: s.X.AUTO_LOAD,
        });
    }
    _terminate() {
        this.throttledPreloadInbox.cancel();
    }
    constructor() {
        super(),
            l(this, "throttledPreloadInbox", void 0),
            l(
                this,
                "stores",
                new Map().set(a.Z, () => {
                    !a.Z.hasPreloaded && a.Z.canLoadMore({ preload: !0 }) && this.throttledPreloadInbox();
                }),
            ),
            (this.throttledPreloadInbox = (0, r.throttle)(this.preloadInbox, c));
    }
}
let d = new u();
