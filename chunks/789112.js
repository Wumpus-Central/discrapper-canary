a.d(e, { b: () => n });
var r = a(394798),
    _ = a(696486);
class n {
    constructor(t = {}) {
        (this._traceId = t.traceId || (0, r.DM)()), (this._spanId = t.spanId || (0, r.DM)().substring(16));
    }
    spanContext() {
        return {
            spanId: this._spanId,
            traceId: this._traceId,
            traceFlags: _.ve
        };
    }
    end(t) {}
    setAttribute(t, e) {
        return this;
    }
    setAttributes(t) {
        return this;
    }
    setStatus(t) {
        return this;
    }
    updateName(t) {
        return this;
    }
    isRecording() {
        return !1;
    }
    addEvent(t, e, a) {
        return this;
    }
    addLink(t) {
        return this;
    }
    addLinks(t) {
        return this;
    }
    recordException(t, e) {}
}
