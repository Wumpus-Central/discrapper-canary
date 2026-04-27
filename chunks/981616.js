"use strict";
r.d(t, { G8: () => h, LI: () => b, d3: () => p, dM: () => f, mD: () => m }), r(142703);
var n = r(729937),
    i = r(573648),
    a = r(328153),
    s = r(927813),
    l = r(107750),
    o = r(210528),
    c = r(655116),
    d = r(272984),
    u = r(652215);
let _ = 30 * s.A.Millis.SECOND;
function p(e) {
    return null != e.getActiveSocketAndDevice() || o.A.isProtocolRegistered();
}
function f() {
    let e = c.A.getActiveSocketAndDevice();
    if (null != e) return Promise.resolve(e);
    if (!o.A.isProtocolRegistered()) return Promise.reject(Error("protocol is not registered"));
    let t = c.A.getPlayableComputerDevices();
    if (a.Ay.isObservedAppRunning(i.A.get(u.fg2.SPOTIFY).name) && t.length > 0) {
        let { socket: e, device: r } = t[0];
        return (0, l.VR)(e.accountId, r.id), Promise.resolve({ socket: e, device: r });
    }
    return new Promise((e, r) => {
        let n = setTimeout(() => {
                c.A.removeChangeListener(i), r(Error("timeout launching spotify"));
            }, _),
            i = () => {
                for (let { socket: r, device: a } of c.A.getPlayableComputerDevices())
                    null == t.find((e) => e.device.id === a.id) &&
                        (clearTimeout(n),
                        c.A.removeChangeListener(i),
                        setImmediate(() => {
                            (0, l.VR)(r.accountId, a.id), e({ socket: r, device: a });
                        }));
            };
        c.A.addChangeListener(i), window.open(`${d.gY}:`);
    });
}
function m() {
    let e = c.A.getActiveSocketAndDevice();
    if (null == e) return null;
    let { socket: t } = e;
    return t.isPremium;
}
function h() {
    let e = c.A.getActiveSocketAndDevice();
    if (null == e) return Promise.reject(Error("no active profile"));
    let { socket: t } = e;
    return t.isPremium
        ? Promise.resolve()
        : (0, l.E$)(t.accountId, t.accessToken).then(() => {
              if (!t.isPremium) return Promise.reject(Error("spotify account is not premium"));
          });
}
function g(e) {
    if ("string" == typeof e) return e;
    throw Error("value is not a string");
}
async function b(e, t) {
    let r = await (0, n.yb)(e, t),
        i = (0, d.NJ)(g(r.type ?? d.M0.TRACK));
    if (null === i) throw Error(`invalid type ${r.type}`);
    return {
        context_uri: "string" == typeof r.context_uri ? r.context_uri : void 0,
        album_id: g(r.album_id),
        artist_ids: Array.isArray(r.artist_ids) ? r.artist_ids.map(g) : [],
        type: i,
        button_urls: Array.isArray(r.button_urls) ? r.button_urls.map(g) : [],
    };
}
