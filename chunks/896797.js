var i,
    a = r(442837),
    o = r(433517),
    s = r(570140),
    l = r(981631);
function u(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let c = {
        lastViewedPath: null,
        lastViewedNonVoicePath: null
    },
    d = c,
    f = 'LAST_VIEWED_PATH';
function p(e) {
    let { path: n } = e;
    return (d.lastViewedPath = n), !0;
}
function h(e) {
    let { path: n } = e;
    return (d.lastViewedNonVoicePath = n), !0;
}
class _ extends (i = a.ZP.PersistedStore) {
    initialize() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c;
        d = null != e ? e : c;
    }
    get defaultRoute() {
        return l.Z5c.ME;
    }
    get lastNonVoiceRoute() {
        var e;
        return null !== (e = d.lastViewedNonVoicePath) && void 0 !== e ? e : l.Z5c.ME;
    }
    get fallbackRoute() {
        return l.Z5c.ME;
    }
    getState() {
        return d;
    }
}
u(_, 'displayName', 'DefaultRouteStore'),
    u(_, 'persistKey', 'DefaultRouteStore'),
    u(_, 'migrations', [
        () => {
            let e = o.K.get(f, null);
            return o.K.remove(f), { lastViewedPath: e };
        }
    ]),
    (n.Z = new _(s.Z, {
        SAVE_LAST_ROUTE: p,
        SAVE_LAST_NON_VOICE_ROUTE: h
    }));
