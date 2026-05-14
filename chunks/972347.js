"use strict";
n.d(t, { A: () => r });
var i = n(143236);
class r {
    emitter = new i.EventEmitter();
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
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
        this.emitter.emit(e, ...n);
    }
    listenerCount(e) {
        return this.emitter.listenerCount(e);
    }
}
