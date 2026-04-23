n.d(t, { G8: () => _, LI: () => p, d3: () => f, dM: () => g, mD: () => m }), n(142703);
var r = n(729937),
    i = n(573648),
    l = n(15285),
    a = n(927813),
    o = n(107750),
    u = n(210528),
    s = n(655116),
    c = n(272984),
    d = n(652215);
let A = 30 * a.A.Millis.SECOND;
function f(e) {
    return null != e.getActiveSocketAndDevice() || u.A.isProtocolRegistered();
}
function g() {
    let e = s.A.getActiveSocketAndDevice();
    if (null != e) return Promise.resolve(e);
    if (!u.A.isProtocolRegistered()) return Promise.reject(Error("protocol is not registered"));
    let t = s.A.getPlayableComputerDevices();
    if (l.Ay.isObservedAppRunning(i.A.get(d.fg2.SPOTIFY).name) && t.length > 0) {
        let { socket: e, device: n } = t[0];
        return (0, o.VR)(e.accountId, n.id), Promise.resolve({ socket: e, device: n });
    }
    return new Promise((e, n) => {
        let r = setTimeout(() => {
                s.A.removeChangeListener(i), n(Error("timeout launching spotify"));
            }, A),
            i = () => {
                for (let { socket: n, device: l } of s.A.getPlayableComputerDevices())
                    null == t.find((e) => e.device.id === l.id) &&
                        (clearTimeout(r),
                        s.A.removeChangeListener(i),
                        setImmediate(() => {
                            (0, o.VR)(n.accountId, l.id), e({ socket: n, device: l });
                        }));
            };
        s.A.addChangeListener(i), window.open(`${c.gY}:`);
    });
}
function m() {
    let e = s.A.getActiveSocketAndDevice();
    if (null == e) return null;
    let { socket: t } = e;
    return t.isPremium;
}
function _() {
    let e = s.A.getActiveSocketAndDevice();
    if (null == e) return Promise.reject(Error("no active profile"));
    let { socket: t } = e;
    return t.isPremium
        ? Promise.resolve()
        : (0, o.E$)(t.accountId, t.accessToken).then(() => {
              if (!t.isPremium) return Promise.reject(Error("spotify account is not premium"));
          });
}
function I(e) {
    if ("string" == typeof e) return e;
    throw Error("value is not a string");
}
async function p(e, t) {
    let n = await (0, r.yb)(e, t),
        i = (0, c.NJ)(I(n.type ?? c.M0.TRACK));
    if (null === i) throw Error(`invalid type ${n.type}`);
    return {
        context_uri: "string" == typeof n.context_uri ? n.context_uri : void 0,
        album_id: I(n.album_id),
        artist_ids: Array.isArray(n.artist_ids) ? n.artist_ids.map(I) : [],
        type: i,
        button_urls: Array.isArray(n.button_urls) ? n.button_urls.map(I) : [],
    };
}
