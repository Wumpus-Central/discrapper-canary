n.d(t, { G8: () => y, LI: () => g, d3: () => f, dM: () => p, mD: () => m }), n(142703);
var r = n(729937),
    l = n(573648),
    i = n(328153),
    a = n(927813),
    u = n(107750),
    o = n(210528),
    s = n(655116),
    d = n(272984),
    c = n(652215);
let A = 30 * a.A.Millis.SECOND;
function f(e) {
    return null != e.getActiveSocketAndDevice() || o.A.isProtocolRegistered();
}
function p() {
    let e = s.A.getActiveSocketAndDevice();
    if (null != e) return Promise.resolve(e);
    if (!o.A.isProtocolRegistered()) return Promise.reject(Error("protocol is not registered"));
    let t = s.A.getPlayableComputerDevices();
    if (i.Ay.isObservedAppRunning(l.A.get(c.fg2.SPOTIFY).name) && t.length > 0) {
        let { socket: e, device: n } = t[0];
        return (0, u.VR)(e.accountId, n.id), Promise.resolve({ socket: e, device: n });
    }
    return new Promise((e, n) => {
        let r = setTimeout(() => {
                s.A.removeChangeListener(l), n(Error("timeout launching spotify"));
            }, A),
            l = () => {
                for (let { socket: n, device: i } of s.A.getPlayableComputerDevices())
                    null == t.find((e) => e.device.id === i.id) &&
                        (clearTimeout(r),
                        s.A.removeChangeListener(l),
                        setImmediate(() => {
                            (0, u.VR)(n.accountId, i.id), e({ socket: n, device: i });
                        }));
            };
        s.A.addChangeListener(l), window.open(`${d.gY}:`);
    });
}
function m() {
    let e = s.A.getActiveSocketAndDevice();
    if (null == e) return null;
    let { socket: t } = e;
    return t.isPremium;
}
function y() {
    let e = s.A.getActiveSocketAndDevice();
    if (null == e) return Promise.reject(Error("no active profile"));
    let { socket: t } = e;
    return t.isPremium
        ? Promise.resolve()
        : (0, u.E$)(t.accountId, t.accessToken).then(() => {
              if (!t.isPremium) return Promise.reject(Error("spotify account is not premium"));
          });
}
function I(e) {
    if ("string" == typeof e) return e;
    throw Error("value is not a string");
}
async function g(e, t) {
    let n = await (0, r.yb)(e, t),
        l = (0, d.NJ)(I(n.type ?? d.M0.TRACK));
    if (null === l) throw Error(`invalid type ${n.type}`);
    return {
        context_uri: "string" == typeof n.context_uri ? n.context_uri : void 0,
        album_id: I(n.album_id),
        artist_ids: Array.isArray(n.artist_ids) ? n.artist_ids.map(I) : [],
        type: l,
        button_urls: Array.isArray(n.button_urls) ? n.button_urls.map(I) : [],
    };
}
