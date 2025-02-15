a.d(e, { R: () => l });
var r = a(448171),
    n = a(78355),
    _ = a(747677),
    o = a(622916),
    i = a(454463),
    c = a(878719),
    s = a(163162),
    E = a(463461);
class l extends r.W {
    constructor(t) {
        let e = {
                parentSpanIsAlwaysRootSpan: !0,
                ...t
            },
            a = s.m9.SENTRY_SDK_SOURCE || (0, _.S)();
        (0, n.V)(e, 'browser', ['browser'], a),
            super(e),
            e.sendClientReports &&
                s.m9.document &&
                s.m9.document.addEventListener('visibilitychange', () => {
                    'hidden' === s.m9.document.visibilityState && this._flushOutcomes();
                });
    }
    eventFromException(t, e) {
        return (0, c.dr)(this._options.stackParser, t, e, this._options.attachStacktrace);
    }
    eventFromMessage(t, e = 'info', a) {
        return (0, c.aB)(this._options.stackParser, t, e, a, this._options.attachStacktrace);
    }
    captureUserFeedback(t) {
        if (!this._isEnabled()) {
            i.X && o.kg.warn('SDK not enabled, will not capture user feedback.');
            return;
        }
        let e = (0, E.r)(t, {
            metadata: this.getSdkMetadata(),
            dsn: this.getDsn(),
            tunnel: this.getOptions().tunnel
        });
        this.sendEnvelope(e);
    }
    _prepareEvent(t, e, a) {
        return (t.platform = t.platform || 'javascript'), super._prepareEvent(t, e, a);
    }
}
