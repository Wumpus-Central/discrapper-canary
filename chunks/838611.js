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
    loadUnreadMessages() {
        a.Z.loadMoreInbox(null, !0);
    }
    _terminate() {
        this.debouncedLoadUnreadMessages.cancel();
    }
    constructor() {
        (super(),
            s(this, 'isInitialLoadComplete', !1),
            s(this, 'debouncedLoadUnreadMessages', void 0),
            s(
                this,
                'stores',
                new Map().set(o.Z, () => {
                    !this.isInitialLoadComplete && o.Z.canLoadMore(null, !0) && ((this.isInitialLoadComplete = !0), this.debouncedLoadUnreadMessages());
                })
            ),
            (this.debouncedLoadUnreadMessages = (0, r.debounce)(this.loadUnreadMessages, l)));
    }
}
let u = new c();
