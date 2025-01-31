n.d(t, { Z: () => c }), n(47120);
var i = n(570140),
    r = n(147913),
    a = n(70956),
    s = n(709706),
    o = n(358820);
function l(e, t, n) {
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
class u extends r.Z {
    _initialize() {}
    _terminate() {
        clearTimeout(this.rolloverTimeout), clearTimeout(this.refreshTimeout);
    }
    handleVoiceFilterCatalogUpdate(e) {
        let {} = e;
        this._scheduleNextRollover(), this._scheduleRefresh();
    }
    handleCurrentUserUpdate() {
        (0, o.wV)();
    }
    _scheduleNextRollover() {
        clearTimeout(this.rolloverTimeout);
        let e = s.Z.getLimitedTimeVoices();
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
                (0, o.wV)();
            }, a.Z.Millis.DAY));
    }
    constructor(...e) {
        super(...e),
            l(this, 'actions', {
                VOICE_FILTER_CATALOG_FETCH_SUCCESS: (e) => this.handleVoiceFilterCatalogUpdate(e),
                VOICE_FILTER_DEV_TOOLS_SET_UPDATE_TIME: (e) => this.handleVoiceFilterCatalogUpdate(e),
                CURRENT_USER_UPDATE: () => this.handleCurrentUserUpdate(),
                LOGIN_SUCCESS: () => this.handleCurrentUserUpdate()
            }),
            l(this, 'rolloverTimeout', null),
            l(this, 'refreshTimeout', null);
    }
}
let c = new u();
