n.d(t, { G8: () => p, LI: () => A, d3: () => m, dM: () => g, mD: () => f }), n(142703);
var i = n(729937),
    l = n(573648),
    s = n(952818),
    r = n(927813),
    a = n(107750),
    o = n(210528),
    c = n(655116),
    u = n(272984),
    d = n(652215);
let h = 30 * r.A.Millis.SECOND;
function m(e) {
    return null != e.getActiveSocketAndDevice() || o.A.isProtocolRegistered();
}
function g() {
    let e = c.A.getActiveSocketAndDevice();
    if (null != e) return Promise.resolve(e);
    if (!o.A.isProtocolRegistered()) return Promise.reject(Error("protocol is not registered"));
    let t = c.A.getPlayableComputerDevices();
    if (s.Ay.isObservedAppRunning(l.A.get(d.fg2.SPOTIFY).name) && t.length > 0) {
        let { socket: e, device: n } = t[0];
        return (0, a.VR)(e.accountId, n.id), Promise.resolve({ socket: e, device: n });
    }
    return new Promise((e, n) => {
        let i = setTimeout(() => {
            c.A.removeChangeListener(l), n(Error("timeout launching spotify"));
        }, h);
        function l() {
            for (let { socket: n, device: s } of c.A.getPlayableComputerDevices())
                null == t.find((e) => e.device.id === s.id) &&
                    (clearTimeout(i),
                    c.A.removeChangeListener(l),
                    setImmediate(() => {
                        (0, a.VR)(n.accountId, s.id), e({ socket: n, device: s });
                    }));
        }
        c.A.addChangeListener(l), window.open(`${u.gY}:`);
    });
}
function f() {
    let e = c.A.getActiveSocketAndDevice();
    if (null == e) return null;
    let { socket: t } = e;
    return t.isPremium;
}
function p() {
    let e = c.A.getActiveSocketAndDevice();
    if (null == e) return Promise.reject(Error("no active profile"));
    let { socket: t } = e;
    return t.isPremium
        ? Promise.resolve()
        : (0, a.E$)(t.accountId, t.accessToken).then(() => {
              if (!t.isPremium) return Promise.reject(Error("spotify account is not premium"));
          });
}
function x(e) {
    if ("string" == typeof e) return e;
    throw Error("value is not a string");
}
async function A(e, t) {
    let n = await (0, i.yb)(e, t),
        l = (0, u.NJ)(x(n.type ?? u.M0.TRACK));
    if (null === l) throw Error(`invalid type ${n.type}`);
    return {
        context_uri: "string" == typeof n.context_uri ? n.context_uri : void 0,
        album_id: x(n.album_id),
        artist_ids: Array.isArray(n.artist_ids) ? n.artist_ids.map(x) : [],
        type: l,
        button_urls: Array.isArray(n.button_urls) ? n.button_urls.map(x) : [],
    };
}
