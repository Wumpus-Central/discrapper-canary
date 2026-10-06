(r.d(t, { G8: () => v, d3: () => A, dM: () => f, getSpotifyMetadataFromActivity: () => y, mD: () => p }), r(142703));
var i = r(729937),
    n = r(573648),
    o = r(952818),
    s = r(927813),
    u = r(107750),
    c = r(210528),
    l = r(655116),
    a = r(272984),
    d = r(652215);
let m = 30 * s.A.Millis.SECOND;
function A(e) {
    return null != e.getActiveSocketAndDevice() || c.A.isProtocolRegistered();
}
function f() {
    let e = l.A.getActiveSocketAndDevice();
    if (null != e) return Promise.resolve(e);
    if (!c.A.isProtocolRegistered()) return Promise.reject(Error("protocol is not registered"));
    let t = l.A.getPlayableComputerDevices();
    if (o.Ay.isObservedAppRunning(n.A.get(d.fg2.SPOTIFY).name) && t.length > 0) {
        let { socket: e, device: r } = t[0];
        return ((0, u.VR)(e.accountId, r.id), Promise.resolve({ socket: e, device: r }));
    }
    return new Promise((e, r) => {
        let i = setTimeout(() => {
            (l.A.removeChangeListener(n), r(Error("timeout launching spotify")));
        }, m);
        function n() {
            for (let { socket: r, device: o } of l.A.getPlayableComputerDevices())
                null == t.find((e) => e.device.id === o.id) &&
                    (clearTimeout(i),
                    l.A.removeChangeListener(n),
                    setImmediate(() => {
                        ((0, u.VR)(r.accountId, o.id), e({ socket: r, device: o }));
                    }));
        }
        (l.A.addChangeListener(n), window.open(`${a.gY}:`));
    });
}
function p() {
    let e = l.A.getActiveSocketAndDevice();
    if (null == e) return null;
    let { socket: t } = e;
    return t.isPremium;
}
function v() {
    let e = l.A.getActiveSocketAndDevice();
    if (null == e) return Promise.reject(Error("no active profile"));
    let { socket: t } = e;
    return t.isPremium
        ? Promise.resolve()
        : (0, u.E$)(t.accountId, t.accessToken).then(() => {
              if (!t.isPremium) return Promise.reject(Error("spotify account is not premium"));
          });
}
function g(e) {
    if ("string" == typeof e) return e;
    throw Error("value is not a string");
}
async function y(e, t) {
    let r = await (0, i.yb)(e, t),
        n = (0, a.NJ)(g(r.type ?? a.M0.TRACK));
    if (null === n) throw Error(`invalid type ${r.type}`);
    return {
        context_uri: "string" == typeof r.context_uri ? r.context_uri : void 0,
        album_id: g(r.album_id),
        artist_ids: Array.isArray(r.artist_ids) ? r.artist_ids.map(g) : [],
        type: n,
        button_urls: Array.isArray(r.button_urls) ? r.button_urls.map(g) : [],
    };
}
