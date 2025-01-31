n.d(t, { Z: () => h });
var i,
    r = n(442837),
    a = n(433517),
    s = n(570140),
    o = n(981631);
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
let u = {
        lastViewedPath: null,
        lastViewedNonVoicePath: null
    },
    c = u,
    d = 'LAST_VIEWED_PATH';
function f(e) {
    let { path: t } = e;
    return (c.lastViewedPath = t), !0;
}
function _(e) {
    let { path: t } = e;
    return (c.lastViewedNonVoicePath = t), !0;
}
class p extends (i = r.ZP.PersistedStore) {
    initialize() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u;
        c = null != e ? e : u;
    }
    get defaultRoute() {
        return o.Z5c.ME;
    }
    get lastNonVoiceRoute() {
        var e;
        return null !== (e = c.lastViewedNonVoicePath) && void 0 !== e ? e : o.Z5c.ME;
    }
    get fallbackRoute() {
        return o.Z5c.ME;
    }
    getState() {
        return c;
    }
}
l(p, 'displayName', 'DefaultRouteStore'),
    l(p, 'persistKey', 'DefaultRouteStore'),
    l(p, 'migrations', [
        () => {
            let e = a.K.get(d, null);
            return a.K.remove(d), { lastViewedPath: e };
        }
    ]);
let h = new p(s.Z, {
    SAVE_LAST_ROUTE: f,
    SAVE_LAST_NON_VOICE_ROUTE: _
});
