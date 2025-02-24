n.d(t, { Z: () => f }), n(47120);
var r = n(570140),
    i = n(147913),
    o = n(70956),
    a = n(875527),
    s = n(709706),
    l = n(358820);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function u() {
    return (0, a.wt)({
        location: 'VoiceFiltersCatalogManager',
        autoTrackExposure: !1
    });
}
class d extends i.Z {
    _initialize() {}
    _terminate() {
        clearTimeout(this.rolloverTimeout), clearTimeout(this.refreshTimeout);
    }
    handleVoiceFilterCatalogUpdate(e) {
        let {} = e;
        this._scheduleNextRollover(), this._scheduleRefresh();
    }
    handlePostConnectionOpen() {
        u() && (0, l.wV)();
    }
    _scheduleNextRollover() {
        clearTimeout(this.rolloverTimeout);
        let e = s.Z.getLimitedTimeVoices();
        if (null == e) return;
        let t = new Date(e.current_set_end).getTime() - new Date().getTime(),
            n = new Date(e.next_set_end).getTime() - new Date().getTime();
        t > 0
            ? (this.rolloverTimeout = setTimeout(() => {
                  r.Z.dispatch({ type: 'VOICE_FILTER_UPDATE_LIMITED_TIME_VOICES' }), this._scheduleNextRollover();
              }, t))
            : n > 0 &&
              (this.rolloverTimeout = setTimeout(() => {
                  r.Z.dispatch({ type: 'VOICE_FILTER_UPDATE_LIMITED_TIME_VOICES' });
              }, n));
    }
    _scheduleRefresh() {
        clearTimeout(this.refreshTimeout),
            (this.refreshTimeout = setTimeout(() => {
                (0, l.wV)();
            }, o.Z.Millis.DAY));
    }
    constructor(...e) {
        super(...e),
            c(this, 'actions', {
                VOICE_FILTER_CATALOG_FETCH_SUCCESS: (e) => this.handleVoiceFilterCatalogUpdate(e),
                VOICE_FILTER_DEV_TOOLS_SET_UPDATE_TIME: (e) => this.handleVoiceFilterCatalogUpdate(e),
                POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen()
            }),
            c(this, 'rolloverTimeout', null),
            c(this, 'refreshTimeout', null);
    }
}
let f = new d();
