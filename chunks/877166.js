"use strict";
n.d(t, { A: () => i }), n(321073);
var r = n(73153);
class i {
    socket;
    static batchers = [];
    static flush(e, t) {
        for (let n of i.batchers) null != n.action && (null == e || n.shouldFlush(e, t)) && n.flush();
    }
    action = null;
    add;
    shouldFlush;
    constructor(e, t, n) {
        (this.socket = e),
            (this.shouldFlush = n),
            (this.add = (e) => {
                this.action = t(this.action, e);
            }),
            i.batchers.push(this);
    }
    flush() {
        let { action: e } = this;
        (this.action = null),
            null != e &&
                r.h.dispatch(e).catch((t) => this.socket.resetSocketAndClearCacheOnError({ error: t, action: e.type }));
    }
}
