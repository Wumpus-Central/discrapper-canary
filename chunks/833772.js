a.d(e, { R: () => l });
var r = a(448171),
    _ = a(78355),
    n = a(747677),
    o = a(622916),
    i = a(454463),
    E = a(878719),
    c = a(163162),
    s = a(463461);
class l extends r.W {
    constructor(t) {
        let e = {
                parentSpanIsAlwaysRootSpan: !0,
                ...t,
            },
            a = c.m9.SENTRY_SDK_SOURCE || (0, n.S)();
        (0, _.V)(e, "browser", ["browser"], a),
            super(e),
            e.sendClientReports &&
                c.m9.document &&
                c.m9.document.addEventListener("visibilitychange", () => {
                    "hidden" === c.m9.document.visibilityState && this._flushOutcomes();
                });
    }
    eventFromException(t, e) {
        return (0, E.dr)(this._options.stackParser, t, e, this._options.attachStacktrace);
    }
    eventFromMessage(t, e = "info", a) {
        return (0, E.aB)(this._options.stackParser, t, e, a, this._options.attachStacktrace);
    }
    captureUserFeedback(t) {
        if (!this._isEnabled()) {
            i.X && o.kg.warn("SDK not enabled, will not capture user feedback.");
            return;
        }
        let e = (0, s.r)(t, {
            metadata: this.getSdkMetadata(),
            dsn: this.getDsn(),
            tunnel: this.getOptions().tunnel,
        });
        this.sendEnvelope(e);
    }
    _prepareEvent(t, e, a) {
        return (t.platform = t.platform || "javascript"), super._prepareEvent(t, e, a);
    }
}
