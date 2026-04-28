a.d(t, { G8: () => _, LI: () => g, d3: () => p, dM: () => m, mD: () => f }), a(142703);
var n = a(729937),
    l = a(573648),
    r = a(328153),
    i = a(927813),
    s = a(107750),
    o = a(210528),
    c = a(655116),
    d = a(272984),
    u = a(652215);
let h = 30 * i.A.Millis.SECOND;
function p(e) {
    return null != e.getActiveSocketAndDevice() || o.A.isProtocolRegistered();
}
function m() {
    let e = c.A.getActiveSocketAndDevice();
    if (null != e) return Promise.resolve(e);
    if (!o.A.isProtocolRegistered()) return Promise.reject(Error("protocol is not registered"));
    let t = c.A.getPlayableComputerDevices();
    if (r.Ay.isObservedAppRunning(l.A.get(u.fg2.SPOTIFY).name) && t.length > 0) {
        let { socket: e, device: a } = t[0];
        return (0, s.VR)(e.accountId, a.id), Promise.resolve({ socket: e, device: a });
    }
    return new Promise((e, a) => {
        let n = setTimeout(() => {
                c.A.removeChangeListener(l), a(Error("timeout launching spotify"));
            }, h),
            l = () => {
                for (let { socket: a, device: r } of c.A.getPlayableComputerDevices())
                    null == t.find((e) => e.device.id === r.id) &&
                        (clearTimeout(n),
                        c.A.removeChangeListener(l),
                        setImmediate(() => {
                            (0, s.VR)(a.accountId, r.id), e({ socket: a, device: r });
                        }));
            };
        c.A.addChangeListener(l), window.open(`${d.gY}:`);
    });
}
function f() {
    let e = c.A.getActiveSocketAndDevice();
    if (null == e) return null;
    let { socket: t } = e;
    return t.isPremium;
}
function _() {
    let e = c.A.getActiveSocketAndDevice();
    if (null == e) return Promise.reject(Error("no active profile"));
    let { socket: t } = e;
    return t.isPremium
        ? Promise.resolve()
        : (0, s.E$)(t.accountId, t.accessToken).then(() => {
              if (!t.isPremium) return Promise.reject(Error("spotify account is not premium"));
          });
}
function b(e) {
    if ("string" == typeof e) return e;
    throw Error("value is not a string");
}
async function g(e, t) {
    let a = await (0, n.yb)(e, t),
        l = (0, d.NJ)(b(a.type ?? d.M0.TRACK));
    if (null === l) throw Error(`invalid type ${a.type}`);
    return {
        context_uri: "string" == typeof a.context_uri ? a.context_uri : void 0,
        album_id: b(a.album_id),
        artist_ids: Array.isArray(a.artist_ids) ? a.artist_ids.map(b) : [],
        type: l,
        button_urls: Array.isArray(a.button_urls) ? a.button_urls.map(b) : [],
    };
}
