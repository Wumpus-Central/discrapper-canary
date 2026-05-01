n.d(t, { G8: () => T, LI: () => S, d3: () => u, dM: () => A, mD: () => I }), n(142703);
var i = n(729937),
    a = n(573648),
    r = n(328153),
    s = n(927813),
    l = n(107750),
    o = n(210528),
    d = n(655116),
    c = n(272984),
    _ = n(652215);
let E = 30 * s.A.Millis.SECOND;
function u(e) {
    return null != e.getActiveSocketAndDevice() || o.A.isProtocolRegistered();
}
function A() {
    let e = d.A.getActiveSocketAndDevice();
    if (null != e) return Promise.resolve(e);
    if (!o.A.isProtocolRegistered()) return Promise.reject(Error("protocol is not registered"));
    let t = d.A.getPlayableComputerDevices();
    if (r.Ay.isObservedAppRunning(a.A.get(_.fg2.SPOTIFY).name) && t.length > 0) {
        let { socket: e, device: n } = t[0];
        return (0, l.VR)(e.accountId, n.id), Promise.resolve({ socket: e, device: n });
    }
    return new Promise((e, n) => {
        let i = setTimeout(() => {
                d.A.removeChangeListener(a), n(Error("timeout launching spotify"));
            }, E),
            a = () => {
                for (let { socket: n, device: r } of d.A.getPlayableComputerDevices())
                    null == t.find((e) => e.device.id === r.id) &&
                        (clearTimeout(i),
                        d.A.removeChangeListener(a),
                        setImmediate(() => {
                            (0, l.VR)(n.accountId, r.id), e({ socket: n, device: r });
                        }));
            };
        d.A.addChangeListener(a), window.open(`${c.gY}:`);
    });
}
function I() {
    let e = d.A.getActiveSocketAndDevice();
    if (null == e) return null;
    let { socket: t } = e;
    return t.isPremium;
}
function T() {
    let e = d.A.getActiveSocketAndDevice();
    if (null == e) return Promise.reject(Error("no active profile"));
    let { socket: t } = e;
    return t.isPremium
        ? Promise.resolve()
        : (0, l.E$)(t.accountId, t.accessToken).then(() => {
              if (!t.isPremium) return Promise.reject(Error("spotify account is not premium"));
          });
}
function h(e) {
    if ("string" == typeof e) return e;
    throw Error("value is not a string");
}
async function S(e, t) {
    let n = await (0, i.yb)(e, t),
        a = (0, c.NJ)(h(n.type ?? c.M0.TRACK));
    if (null === a) throw Error(`invalid type ${n.type}`);
    return {
        context_uri: "string" == typeof n.context_uri ? n.context_uri : void 0,
        album_id: h(n.album_id),
        artist_ids: Array.isArray(n.artist_ids) ? n.artist_ids.map(h) : [],
        type: a,
        button_urls: Array.isArray(n.button_urls) ? n.button_urls.map(h) : [],
    };
}
