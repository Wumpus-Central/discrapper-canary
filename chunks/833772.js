_.d(e, { R: () => l });
var a = _(448171),
    r = _(78355),
    n = _(747677),
    o = _(622916),
    E = _(454463),
    i = _(878719),
    c = _(163162),
    s = _(463461);
class l extends a.W {
    constructor(t) {
        let e = {
                parentSpanIsAlwaysRootSpan: !0,
                ...t,
            },
            _ = c.m9.SENTRY_SDK_SOURCE || (0, n.S)();
        (0, r.V)(e, "browser", ["browser"], _),
            super(e),
            e.sendClientReports &&
                c.m9.document &&
                c.m9.document.addEventListener("visibilitychange", () => {
                    "hidden" === c.m9.document.visibilityState && this._flushOutcomes();
                });
    }
    eventFromException(t, e) {
        return (0, i.dr)(this._options.stackParser, t, e, this._options.attachStacktrace);
    }
    eventFromMessage(t, e = "info", _) {
        return (0, i.aB)(this._options.stackParser, t, e, _, this._options.attachStacktrace);
    }
    captureUserFeedback(t) {
        if (!this._isEnabled()) {
            E.X && o.kg.warn("SDK not enabled, will not capture user feedback.");
            return;
        }
        let e = (0, s.r)(t, {
            metadata: this.getSdkMetadata(),
            dsn: this.getDsn(),
            tunnel: this.getOptions().tunnel,
        });
        this.sendEnvelope(e);
    }
    _prepareEvent(t, e, _) {
        return (t.platform = t.platform || "javascript"), super._prepareEvent(t, e, _);
    }
}
