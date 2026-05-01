"use strict";
n.d(t, { G8: () => E, LI: () => g, d3: () => f, dM: () => h, mD: () => p }), n(142703);
var i = n(729937),
    r = n(573648),
    s = n(328153),
    a = n(927813),
    o = n(107750),
    l = n(210528),
    u = n(655116),
    c = n(272984),
    d = n(652215);
let _ = 30 * a.A.Millis.SECOND;
function f(e) {
    return null != e.getActiveSocketAndDevice() || l.A.isProtocolRegistered();
}
function h() {
    let e = u.A.getActiveSocketAndDevice();
    if (null != e) return Promise.resolve(e);
    if (!l.A.isProtocolRegistered()) return Promise.reject(Error("protocol is not registered"));
    let t = u.A.getPlayableComputerDevices();
    if (s.Ay.isObservedAppRunning(r.A.get(d.fg2.SPOTIFY).name) && t.length > 0) {
        let { socket: e, device: n } = t[0];
        return (0, o.VR)(e.accountId, n.id), Promise.resolve({ socket: e, device: n });
    }
    return new Promise((e, n) => {
        let i = setTimeout(() => {
                u.A.removeChangeListener(r), n(Error("timeout launching spotify"));
            }, _),
            r = () => {
                for (let { socket: n, device: s } of u.A.getPlayableComputerDevices())
                    null == t.find((e) => e.device.id === s.id) &&
                        (clearTimeout(i),
                        u.A.removeChangeListener(r),
                        setImmediate(() => {
                            (0, o.VR)(n.accountId, s.id), e({ socket: n, device: s });
                        }));
            };
        u.A.addChangeListener(r), window.open(`${c.gY}:`);
    });
}
function p() {
    let e = u.A.getActiveSocketAndDevice();
    if (null == e) return null;
    let { socket: t } = e;
    return t.isPremium;
}
function E() {
    let e = u.A.getActiveSocketAndDevice();
    if (null == e) return Promise.reject(Error("no active profile"));
    let { socket: t } = e;
    return t.isPremium
        ? Promise.resolve()
        : (0, o.E$)(t.accountId, t.accessToken).then(() => {
              if (!t.isPremium) return Promise.reject(Error("spotify account is not premium"));
          });
}
function m(e) {
    if ("string" == typeof e) return e;
    throw Error("value is not a string");
}
async function g(e, t) {
    let n = await (0, i.yb)(e, t),
        r = (0, c.NJ)(m(n.type ?? c.M0.TRACK));
    if (null === r) throw Error(`invalid type ${n.type}`);
    return {
        context_uri: "string" == typeof n.context_uri ? n.context_uri : void 0,
        album_id: m(n.album_id),
        artist_ids: Array.isArray(n.artist_ids) ? n.artist_ids.map(m) : [],
        type: r,
        button_urls: Array.isArray(n.button_urls) ? n.button_urls.map(m) : [],
    };
}
