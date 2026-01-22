l.r(i),
    l.d(i, {
        default: () => n,
    });
var t = l(372684),
    r = l(429195);
class a {
    start() {
        r.A.registerCallback(this.handleTrigger.bind(this));
    }
    stop() {
        r.A.unregisterCallback();
    }
    getState() {
        return null;
    }
    handleTrigger(e, i) {
        this.emitSignal({
            type: t.Gy.DISTRIBUTED,
            remoteTriggerUserId: e,
            remoteTriggerClipId: i,
        });
    }
    constructor(e) {
        !(function (e, i, l) {
            i in e
                ? Object.defineProperty(e, i, {
                      value: l,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                  })
                : (e[i] = l);
        })(this, "emitSignal", void 0),
            (this.emitSignal = e);
    }
}
let n = (e) => new a(e);
