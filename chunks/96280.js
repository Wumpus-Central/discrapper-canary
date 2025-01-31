n.d(t, { W: () => r });
var i = n(726074);
class r {
    enqueueTask(e) {
        let { queue: t, requestFlush: n } = this;
        t.length || (n(), (this.flushing = !0)), (t[t.length] = e);
    }
    constructor() {
        (this.queue = []),
            (this.pendingErrors = []),
            (this.flushing = !1),
            (this.index = 0),
            (this.capacity = 1024),
            (this.flush = () => {
                let { queue: e } = this;
                for (; this.index < e.length; ) {
                    let t = this.index;
                    if ((this.index++, e[t].call(), this.index > this.capacity)) {
                        for (let t = 0, n = e.length - this.index; t < n; t++) e[t] = e[t + this.index];
                        (e.length -= this.index), (this.index = 0);
                    }
                }
                (e.length = 0), (this.index = 0), (this.flushing = !1);
            }),
            (this.registerPendingError = (e) => {
                this.pendingErrors.push(e), this.requestErrorThrow();
            }),
            (this.requestFlush = (0, i.tX)(this.flush)),
            (this.requestErrorThrow = (0, i.as)(() => {
                if (this.pendingErrors.length) throw this.pendingErrors.shift();
            }));
    }
}
