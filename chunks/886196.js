n.d(t, { Z: () => f }), n(47120);
var i = n(570140),
    r = n(147913),
    a = n(70956),
    s = n(875527),
    o = n(709706),
    l = n(358820);
function u(e, t, n) {
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
function c() {
    return (0, s.wt)({
        location: 'VoiceFiltersCatalogManager',
        autoTrackExposure: !1
    });
}
class d extends r.Z {
    _initialize() {}
    _terminate() {
        clearTimeout(this.rolloverTimeout), clearTimeout(this.refreshTimeout);
    }
    handleVoiceFilterCatalogUpdate(e) {
        let {} = e;
        this._scheduleNextRollover(), this._scheduleRefresh();
    }
    handleCurrentUserUpdate() {
        c() && (0, l.wV)();
    }
    _scheduleNextRollover() {
        clearTimeout(this.rolloverTimeout);
        let e = o.Z.getLimitedTimeVoices();
        if (null == e) return;
        let t = new Date(e.current_set_end).getTime() - new Date().getTime(),
            n = new Date(e.next_set_end).getTime() - new Date().getTime();
        t > 0
            ? (this.rolloverTimeout = setTimeout(() => {
                  i.Z.dispatch({ type: 'VOICE_FILTER_UPDATE_LIMITED_TIME_VOICES' }), this._scheduleNextRollover();
              }, t))
            : n > 0 &&
              (this.rolloverTimeout = setTimeout(() => {
                  i.Z.dispatch({ type: 'VOICE_FILTER_UPDATE_LIMITED_TIME_VOICES' });
              }, n));
    }
    _scheduleRefresh() {
        clearTimeout(this.refreshTimeout),
            (this.refreshTimeout = setTimeout(() => {
                (0, l.wV)();
            }, a.Z.Millis.DAY));
    }
    constructor(...e) {
        super(...e),
            u(this, 'actions', {
                VOICE_FILTER_CATALOG_FETCH_SUCCESS: (e) => this.handleVoiceFilterCatalogUpdate(e),
                VOICE_FILTER_DEV_TOOLS_SET_UPDATE_TIME: (e) => this.handleVoiceFilterCatalogUpdate(e),
                CURRENT_USER_UPDATE: () => this.handleCurrentUserUpdate(),
                LOGIN_SUCCESS: () => this.handleCurrentUserUpdate()
            }),
            u(this, 'rolloverTimeout', null),
            u(this, 'refreshTimeout', null);
    }
}
let f = new d();
