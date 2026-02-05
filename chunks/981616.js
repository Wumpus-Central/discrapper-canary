"use strict";
n.d(t, { G8: () => m, LI: () => E, d3: () => f, dM: () => p, mD: () => h }), n(142703);
var r = n(729937),
    i = n(573648),
    a = n(15285),
    s = n(927813),
    o = n(107750),
    l = n(210528),
    u = n(655116),
    c = n(272984),
    d = n(652215);
let _ = 30 * s.A.Millis.SECOND;
function f(e) {
    return null != e.getActiveSocketAndDevice() || l.A.isProtocolRegistered();
}
function p() {
    let e = u.A.getActiveSocketAndDevice();
    if (null != e) return Promise.resolve(e);
    if (!l.A.isProtocolRegistered()) return Promise.reject(Error("protocol is not registered"));
    let t = u.A.getPlayableComputerDevices();
    if (a.Ay.isObservedAppRunning(i.A.get(d.fg2.SPOTIFY).name) && t.length > 0) {
        let { socket: e, device: n } = t[0];
        return (0, o.VR)(e.accountId, n.id), Promise.resolve({ socket: e, device: n });
    }
    return new Promise((e, n) => {
        let r = setTimeout(() => {
                u.A.removeChangeListener(i), n(Error("timeout launching spotify"));
            }, _),
            i = () => {
                for (let { socket: n, device: a } of u.A.getPlayableComputerDevices())
                    null == t.find((e) => e.device.id === a.id) &&
                        (clearTimeout(r),
                        u.A.removeChangeListener(i),
                        setImmediate(() => {
                            (0, o.VR)(n.accountId, a.id), e({ socket: n, device: a });
                        }));
            };
        u.A.addChangeListener(i), window.open(`${c.gY}:`);
    });
}
function h() {
    let e = u.A.getActiveSocketAndDevice();
    if (null == e) return null;
    let { socket: t } = e;
    return t.isPremium;
}
function m() {
    let e = u.A.getActiveSocketAndDevice();
    if (null == e) return Promise.reject(Error("no active profile"));
    let { socket: t } = e;
    return t.isPremium
        ? Promise.resolve()
        : (0, o.E$)(t.accountId, t.accessToken).then(() => {
              if (!t.isPremium) return Promise.reject(Error("spotify account is not premium"));
          });
}
function g(e) {
    if ("string" == typeof e) return e;
    throw Error("value is not a string");
}
async function E(e, t) {
    let n = await (0, r.yb)(e, t),
        i = (0, c.NJ)(g(n.type ?? c.M0.TRACK));
    if (null === i) throw Error(`invalid type ${n.type}`);
    return {
        context_uri: "string" == typeof n.context_uri ? n.context_uri : void 0,
        album_id: g(n.album_id),
        artist_ids: Array.isArray(n.artist_ids) ? n.artist_ids.map(g) : [],
        type: i,
        button_urls: Array.isArray(n.button_urls) ? n.button_urls.map(g) : [],
    };
}
