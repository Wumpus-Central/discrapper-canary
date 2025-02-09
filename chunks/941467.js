n.d(t, { Z: () => l }), n(47120);
var i = n(241601),
    r = n(147913),
    a = n(405656);
function s(e, t, n) {
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
class o extends r.Z {
    _initialize() {
        this._unsubscribeIntlLoadingStore = (0, i.Ql)(a.Pe);
    }
    _terminate() {
        var e, t;
        null === (e = (t = this)._unsubscribeIntlLoadingStore) || void 0 === e || e.call(t);
    }
    constructor(...e) {
        super(...e),
            s(this, 'actions', {
                USER_SETTINGS_PROTO_UPDATE: a.Pe,
                POST_CONNECTION_OPEN: a.Pe
            }),
            s(this, '_unsubscribeIntlLoadingStore', void 0);
    }
}
let l = new o();
