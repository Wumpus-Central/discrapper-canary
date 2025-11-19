_.d(e, { b: () => n });
var a = _(394798),
    r = _(696486);
class n {
    constructor(t = {}) {
        (this._traceId = t.traceId || (0, a.DM)()), (this._spanId = t.spanId || (0, a.DM)().substring(16));
    }
    spanContext() {
        return {
            spanId: this._spanId,
            traceId: this._traceId,
            traceFlags: r.ve,
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
    addEvent(t, e, _) {
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
