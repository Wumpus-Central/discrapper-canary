n.d(t, { G8: () => m, LI: () => b, d3: () => p, dM: () => f, mD: () => h }), n(142703);
var a = n(729937),
    i = n(573648),
    l = n(328153),
    r = n(927813),
    o = n(107750),
    s = n(210528),
    c = n(655116),
    d = n(272984),
    u = n(652215);
let _ = 30 * r.A.Millis.SECOND;
function p(e) {
    return null != e.getActiveSocketAndDevice() || s.A.isProtocolRegistered();
}
function f() {
    let e = c.A.getActiveSocketAndDevice();
    if (null != e) return Promise.resolve(e);
    if (!s.A.isProtocolRegistered()) return Promise.reject(Error("protocol is not registered"));
    let t = c.A.getPlayableComputerDevices();
    if (l.Ay.isObservedAppRunning(i.A.get(u.fg2.SPOTIFY).name) && t.length > 0) {
        let { socket: e, device: n } = t[0];
        return (0, o.VR)(e.accountId, n.id), Promise.resolve({ socket: e, device: n });
    }
    return new Promise((e, n) => {
        let a = setTimeout(() => {
                c.A.removeChangeListener(i), n(Error("timeout launching spotify"));
            }, _),
            i = () => {
                for (let { socket: n, device: l } of c.A.getPlayableComputerDevices())
                    null == t.find((e) => e.device.id === l.id) &&
                        (clearTimeout(a),
                        c.A.removeChangeListener(i),
                        setImmediate(() => {
                            (0, o.VR)(n.accountId, l.id), e({ socket: n, device: l });
                        }));
            };
        c.A.addChangeListener(i), window.open(`${d.gY}:`);
    });
}
function h() {
    let e = c.A.getActiveSocketAndDevice();
    if (null == e) return null;
    let { socket: t } = e;
    return t.isPremium;
}
function m() {
    let e = c.A.getActiveSocketAndDevice();
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
async function b(e, t) {
    let n = await (0, a.yb)(e, t),
        i = (0, d.NJ)(g(n.type ?? d.M0.TRACK));
    if (null === i) throw Error(`invalid type ${n.type}`);
    return {
        context_uri: "string" == typeof n.context_uri ? n.context_uri : void 0,
        album_id: g(n.album_id),
        artist_ids: Array.isArray(n.artist_ids) ? n.artist_ids.map(g) : [],
        type: i,
        button_urls: Array.isArray(n.button_urls) ? n.button_urls.map(g) : [],
    };
}
