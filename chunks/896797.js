n.d(t, { Z: () => h });
var r,
    i = n(442837),
    o = n(433517),
    a = n(570140),
    s = n(981631);
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
let c = {
        lastViewedPath: null,
        lastViewedNonVoicePath: null
    },
    u = c,
    d = 'LAST_VIEWED_PATH';
function f(e) {
    let { path: t } = e;
    return (u.lastViewedPath = t), !0;
}
function p(e) {
    let { path: t } = e;
    return (u.lastViewedNonVoicePath = t), !0;
}
class _ extends (r = i.ZP.PersistedStore) {
    initialize() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c;
        u = null != e ? e : c;
    }
    get defaultRoute() {
        return s.Z5c.ME;
    }
    get lastNonVoiceRoute() {
        var e;
        return null !== (e = u.lastViewedNonVoicePath) && void 0 !== e ? e : s.Z5c.ME;
    }
    get fallbackRoute() {
        return s.Z5c.ME;
    }
    getState() {
        return u;
    }
}
l(_, 'displayName', 'DefaultRouteStore'),
    l(_, 'persistKey', 'DefaultRouteStore'),
    l(_, 'migrations', [
        () => {
            let e = o.K.get(d, null);
            return o.K.remove(d), { lastViewedPath: e };
        }
    ]);
let h = new _(a.Z, {
    SAVE_LAST_ROUTE: f,
    SAVE_LAST_NON_VOICE_ROUTE: p
});
