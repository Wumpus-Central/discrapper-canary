n.d(t, { Z: () => l }), n(47120);
var r = n(241601),
    i = n(147913),
    o = n(405656);
function a(e, t, n) {
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
class s extends i.Z {
    _initialize() {
        this._unsubscribeIntlLoadingStore = (0, r.Ql)(o.Pe);
    }
    _terminate() {
        var e, t;
        null == (e = (t = this)._unsubscribeIntlLoadingStore) || e.call(t);
    }
    constructor(...e) {
        super(...e),
            a(this, 'actions', {
                USER_SETTINGS_PROTO_UPDATE: o.Pe,
                POST_CONNECTION_OPEN: o.Pe
            }),
            a(this, '_unsubscribeIntlLoadingStore', void 0);
    }
}
let l = new s();
