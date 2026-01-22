n.d(t, { A: () => a }), n(896048), n(321073);
var r = n(73153);
function i(e, t, n) {
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
class a {
    static flush(e, t) {
        for (let n of a.batchers) null != n.action && (null == e || n.shouldFlush(e, t)) && n.flush();
    }
    flush() {
        let { action: e } = this;
        (this.action = null),
            null != e &&
                r.h.dispatch(e).catch((t) =>
                    this.socket.resetSocketOnError({
                        error: t,
                        action: e.type,
                    }),
                );
    }
    constructor(e, t, n) {
        i(this, "socket", void 0),
            i(this, "action", void 0),
            i(this, "add", void 0),
            i(this, "shouldFlush", void 0),
            (this.socket = e),
            (this.action = null),
            (this.shouldFlush = n),
            (this.add = (e) => {
                this.action = t(this.action, e);
            }),
            a.batchers.push(this);
    }
}
i(a, "batchers", []);
