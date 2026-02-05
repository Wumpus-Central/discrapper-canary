"use strict";
n.d(t, { A: () => i });
var r = n(143236);
class i {
    emitter = new r.EventEmitter();
    on(e, t) {
        this.emitter.on(e, t);
    }
    off(e, t) {
        this.emitter.off(e, t);
    }
    once(e, t) {
        this.emitter.once(e, t);
    }
    addListener(e, t) {
        this.emitter.addListener(e, t);
    }
    removeListener(e, t) {
        this.emitter.removeListener(e, t);
    }
    removeAllListeners() {
        this.emitter.removeAllListeners();
    }
    emit(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        this.emitter.emit(e, ...n);
    }
    emitUnsafe(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        this.emitter.emit(e, ...n);
    }
    listenerCount(e) {
        return this.emitter.listenerCount(e);
    }
}
