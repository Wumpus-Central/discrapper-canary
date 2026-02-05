t.r(l), t.d(l, { default: () => s });
var i = t(372684),
    a = t(429195);
class r {
    emitSignal;
    constructor(e) {
        this.emitSignal = e;
    }
    start() {
        a.A.registerCallback(this.handleTrigger.bind(this));
    }
    stop() {
        a.A.unregisterCallback();
    }
    getState() {
        return null;
    }
    handleTrigger(e, l) {
        this.emitSignal({ type: i.Gy.DISTRIBUTED, remoteTriggerUserId: e, remoteTriggerClipId: l });
    }
}
let s = (e) => new r(e);
