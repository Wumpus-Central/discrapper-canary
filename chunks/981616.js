"use strict";
n.d(t, { G8: () => f, LI: () => b, d3: () => p, dM: () => m, mD: () => h }), n(142703);
var a = n(729937),
    r = n(573648),
    i = n(328153),
    l = n(927813),
    s = n(107750),
    o = n(210528),
    c = n(655116),
    d = n(272984),
    u = n(652215);
let _ = 30 * l.A.Millis.SECOND;
function p(e) {
    return null != e.getActiveSocketAndDevice() || o.A.isProtocolRegistered();
}
function m() {
    let e = c.A.getActiveSocketAndDevice();
    if (null != e) return Promise.resolve(e);
    if (!o.A.isProtocolRegistered()) return Promise.reject(Error("protocol is not registered"));
    let t = c.A.getPlayableComputerDevices();
    if (i.Ay.isObservedAppRunning(r.A.get(u.fg2.SPOTIFY).name) && t.length > 0) {
        let { socket: e, device: n } = t[0];
        return (0, s.VR)(e.accountId, n.id), Promise.resolve({ socket: e, device: n });
    }
    return new Promise((e, n) => {
        let a = setTimeout(() => {
                c.A.removeChangeListener(r), n(Error("timeout launching spotify"));
            }, _),
            r = () => {
                for (let { socket: n, device: i } of c.A.getPlayableComputerDevices())
                    null == t.find((e) => e.device.id === i.id) &&
                        (clearTimeout(a),
                        c.A.removeChangeListener(r),
                        setImmediate(() => {
                            (0, s.VR)(n.accountId, i.id), e({ socket: n, device: i });
                        }));
            };
        c.A.addChangeListener(r), window.open(`${d.gY}:`);
    });
}
function h() {
    let e = c.A.getActiveSocketAndDevice();
    if (null == e) return null;
    let { socket: t } = e;
    return t.isPremium;
}
function f() {
    let e = c.A.getActiveSocketAndDevice();
    if (null == e) return Promise.reject(Error("no active profile"));
    let { socket: t } = e;
    return t.isPremium
        ? Promise.resolve()
        : (0, s.E$)(t.accountId, t.accessToken).then(() => {
              if (!t.isPremium) return Promise.reject(Error("spotify account is not premium"));
          });
}
function g(e) {
    if ("string" == typeof e) return e;
    throw Error("value is not a string");
}
async function b(e, t) {
    let n = await (0, a.yb)(e, t),
        r = (0, d.NJ)(g(n.type ?? d.M0.TRACK));
    if (null === r) throw Error(`invalid type ${n.type}`);
    return {
        context_uri: "string" == typeof n.context_uri ? n.context_uri : void 0,
        album_id: g(n.album_id),
        artist_ids: Array.isArray(n.artist_ids) ? n.artist_ids.map(g) : [],
        type: r,
        button_urls: Array.isArray(n.button_urls) ? n.button_urls.map(g) : [],
    };
}
