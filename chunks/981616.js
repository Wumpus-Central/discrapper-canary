(i.d(e, { G8: () => m, LI: () => h, d3: () => p, dM: () => f, mD: () => y }), i(142703));
var r = i(729937),
    n = i(573648),
    o = i(952818),
    u = i(927813),
    l = i(107750),
    s = i(210528),
    a = i(655116),
    c = i(272984),
    d = i(652215);
let A = 30 * u.A.Millis.SECOND;
function p(t) {
    return null != t.getActiveSocketAndDevice() || s.A.isProtocolRegistered();
}
function f() {
    let t = a.A.getActiveSocketAndDevice();
    if (null != t) return Promise.resolve(t);
    if (!s.A.isProtocolRegistered()) return Promise.reject(Error("protocol is not registered"));
    let e = a.A.getPlayableComputerDevices();
    if (o.Ay.isObservedAppRunning(n.A.get(d.fg2.SPOTIFY).name) && e.length > 0) {
        let { socket: t, device: i } = e[0];
        return ((0, l.VR)(t.accountId, i.id), Promise.resolve({ socket: t, device: i }));
    }
    return new Promise((t, i) => {
        let r = setTimeout(() => {
            (a.A.removeChangeListener(n), i(Error("timeout launching spotify")));
        }, A);
        function n() {
            for (let { socket: i, device: o } of a.A.getPlayableComputerDevices())
                null == e.find((t) => t.device.id === o.id) &&
                    (clearTimeout(r),
                    a.A.removeChangeListener(n),
                    setImmediate(() => {
                        ((0, l.VR)(i.accountId, o.id), t({ socket: i, device: o }));
                    }));
        }
        (a.A.addChangeListener(n), window.open(`${c.gY}:`));
    });
}
function y() {
    let t = a.A.getActiveSocketAndDevice();
    if (null == t) return null;
    let { socket: e } = t;
    return e.isPremium;
}
function m() {
    let t = a.A.getActiveSocketAndDevice();
    if (null == t) return Promise.reject(Error("no active profile"));
    let { socket: e } = t;
    return e.isPremium
        ? Promise.resolve()
        : (0, l.E$)(e.accountId, e.accessToken).then(() => {
              if (!e.isPremium) return Promise.reject(Error("spotify account is not premium"));
          });
}
function g(t) {
    if ("string" == typeof t) return t;
    throw Error("value is not a string");
}
async function h(t, e) {
    let i = await (0, r.yb)(t, e),
        n = (0, c.NJ)(g(i.type ?? c.M0.TRACK));
    if (null === n) throw Error(`invalid type ${i.type}`);
    return {
        context_uri: "string" == typeof i.context_uri ? i.context_uri : void 0,
        album_id: g(i.album_id),
        artist_ids: Array.isArray(i.artist_ids) ? i.artist_ids.map(g) : [],
        type: n,
        button_urls: Array.isArray(i.button_urls) ? i.button_urls.map(g) : [],
    };
}
