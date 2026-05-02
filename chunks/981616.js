n.d(e, { G8: () => _, LI: () => h, d3: () => p, dM: () => f, mD: () => y }), n(142703);
var i = n(729937),
    r = n(573648),
    l = n(328153),
    o = n(927813),
    a = n(107750),
    u = n(210528),
    c = n(655116),
    s = n(272984),
    d = n(652215);
let A = 30 * o.A.Millis.SECOND;
function p(t) {
    return null != t.getActiveSocketAndDevice() || u.A.isProtocolRegistered();
}
function f() {
    let t = c.A.getActiveSocketAndDevice();
    if (null != t) return Promise.resolve(t);
    if (!u.A.isProtocolRegistered()) return Promise.reject(Error("protocol is not registered"));
    let e = c.A.getPlayableComputerDevices();
    if (l.Ay.isObservedAppRunning(r.A.get(d.fg2.SPOTIFY).name) && e.length > 0) {
        let { socket: t, device: n } = e[0];
        return (0, a.VR)(t.accountId, n.id), Promise.resolve({ socket: t, device: n });
    }
    return new Promise((t, n) => {
        let i = setTimeout(() => {
                c.A.removeChangeListener(r), n(Error("timeout launching spotify"));
            }, A),
            r = () => {
                for (let { socket: n, device: l } of c.A.getPlayableComputerDevices())
                    null == e.find((t) => t.device.id === l.id) &&
                        (clearTimeout(i),
                        c.A.removeChangeListener(r),
                        setImmediate(() => {
                            (0, a.VR)(n.accountId, l.id), t({ socket: n, device: l });
                        }));
            };
        c.A.addChangeListener(r), window.open(`${s.gY}:`);
    });
}
function y() {
    let t = c.A.getActiveSocketAndDevice();
    if (null == t) return null;
    let { socket: e } = t;
    return e.isPremium;
}
function _() {
    let t = c.A.getActiveSocketAndDevice();
    if (null == t) return Promise.reject(Error("no active profile"));
    let { socket: e } = t;
    return e.isPremium
        ? Promise.resolve()
        : (0, a.E$)(e.accountId, e.accessToken).then(() => {
              if (!e.isPremium) return Promise.reject(Error("spotify account is not premium"));
          });
}
function v(t) {
    if ("string" == typeof t) return t;
    throw Error("value is not a string");
}
async function h(t, e) {
    let n = await (0, i.yb)(t, e),
        r = (0, s.NJ)(v(n.type ?? s.M0.TRACK));
    if (null === r) throw Error(`invalid type ${n.type}`);
    return {
        context_uri: "string" == typeof n.context_uri ? n.context_uri : void 0,
        album_id: v(n.album_id),
        artist_ids: Array.isArray(n.artist_ids) ? n.artist_ids.map(v) : [],
        type: r,
        button_urls: Array.isArray(n.button_urls) ? n.button_urls.map(v) : [],
    };
}
