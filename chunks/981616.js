"use strict";
n.d(t, { G8: () => g, LI: () => b, d3: () => m, dM: () => p, mD: () => h }), n(142703);
var a = n(729937),
    i = n(573648),
    r = n(15285),
    l = n(927813),
    s = n(107750),
    d = n(210528),
    o = n(655116),
    c = n(272984),
    u = n(652215);
let _ = 30 * l.A.Millis.SECOND;
function m(e) {
    return null != e.getActiveSocketAndDevice() || d.A.isProtocolRegistered();
}
function p() {
    let e = o.A.getActiveSocketAndDevice();
    if (null != e) return Promise.resolve(e);
    if (!d.A.isProtocolRegistered()) return Promise.reject(Error("protocol is not registered"));
    let t = o.A.getPlayableComputerDevices();
    if (r.Ay.isObservedAppRunning(i.A.get(u.fg2.SPOTIFY).name) && t.length > 0) {
        let { socket: e, device: n } = t[0];
        return (0, s.VR)(e.accountId, n.id), Promise.resolve({ socket: e, device: n });
    }
    return new Promise((e, n) => {
        let a = setTimeout(() => {
                o.A.removeChangeListener(i), n(Error("timeout launching spotify"));
            }, _),
            i = () => {
                for (let { socket: n, device: r } of o.A.getPlayableComputerDevices())
                    null == t.find((e) => e.device.id === r.id) &&
                        (clearTimeout(a),
                        o.A.removeChangeListener(i),
                        setImmediate(() => {
                            (0, s.VR)(n.accountId, r.id), e({ socket: n, device: r });
                        }));
            };
        o.A.addChangeListener(i), window.open(`${c.gY}:`);
    });
}
function h() {
    let e = o.A.getActiveSocketAndDevice();
    if (null == e) return null;
    let { socket: t } = e;
    return t.isPremium;
}
function g() {
    let e = o.A.getActiveSocketAndDevice();
    if (null == e) return Promise.reject(Error("no active profile"));
    let { socket: t } = e;
    return t.isPremium
        ? Promise.resolve()
        : (0, s.E$)(t.accountId, t.accessToken).then(() => {
              if (!t.isPremium) return Promise.reject(Error("spotify account is not premium"));
          });
}
function f(e) {
    if ("string" == typeof e) return e;
    throw Error("value is not a string");
}
async function b(e, t) {
    let n = await (0, a.yb)(e, t),
        i = (0, c.NJ)(f(n.type ?? c.M0.TRACK));
    if (null === i) throw Error(`invalid type ${n.type}`);
    return {
        context_uri: "string" == typeof n.context_uri ? n.context_uri : void 0,
        album_id: f(n.album_id),
        artist_ids: Array.isArray(n.artist_ids) ? n.artist_ids.map(f) : [],
        type: i,
        button_urls: Array.isArray(n.button_urls) ? n.button_urls.map(f) : [],
    };
}
