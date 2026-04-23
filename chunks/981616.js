n.d(t, { G8: () => T, LI: () => N, d3: () => u, dM: () => I, mD: () => A }), n(142703);
var i = n(729937),
    r = n(573648),
    a = n(328153),
    s = n(927813),
    _ = n(107750),
    l = n(210528),
    o = n(655116),
    E = n(272984),
    d = n(652215);
let c = 30 * s.A.Millis.SECOND;
function u(e) {
    return null != e.getActiveSocketAndDevice() || l.A.isProtocolRegistered();
}
function I() {
    let e = o.A.getActiveSocketAndDevice();
    if (null != e) return Promise.resolve(e);
    if (!l.A.isProtocolRegistered()) return Promise.reject(Error("protocol is not registered"));
    let t = o.A.getPlayableComputerDevices();
    if (a.Ay.isObservedAppRunning(r.A.get(d.fg2.SPOTIFY).name) && t.length > 0) {
        let { socket: e, device: n } = t[0];
        return (0, _.VR)(e.accountId, n.id), Promise.resolve({ socket: e, device: n });
    }
    return new Promise((e, n) => {
        let i = setTimeout(() => {
                o.A.removeChangeListener(r), n(Error("timeout launching spotify"));
            }, c),
            r = () => {
                for (let { socket: n, device: a } of o.A.getPlayableComputerDevices())
                    null == t.find((e) => e.device.id === a.id) &&
                        (clearTimeout(i),
                        o.A.removeChangeListener(r),
                        setImmediate(() => {
                            (0, _.VR)(n.accountId, a.id), e({ socket: n, device: a });
                        }));
            };
        o.A.addChangeListener(r), window.open(`${E.gY}:`);
    });
}
function A() {
    let e = o.A.getActiveSocketAndDevice();
    if (null == e) return null;
    let { socket: t } = e;
    return t.isPremium;
}
function T() {
    let e = o.A.getActiveSocketAndDevice();
    if (null == e) return Promise.reject(Error("no active profile"));
    let { socket: t } = e;
    return t.isPremium
        ? Promise.resolve()
        : (0, _.E$)(t.accountId, t.accessToken).then(() => {
              if (!t.isPremium) return Promise.reject(Error("spotify account is not premium"));
          });
}
function S(e) {
    if ("string" == typeof e) return e;
    throw Error("value is not a string");
}
async function N(e, t) {
    let n = await (0, i.yb)(e, t),
        r = (0, E.NJ)(S(n.type ?? E.M0.TRACK));
    if (null === r) throw Error(`invalid type ${n.type}`);
    return {
        context_uri: "string" == typeof n.context_uri ? n.context_uri : void 0,
        album_id: S(n.album_id),
        artist_ids: Array.isArray(n.artist_ids) ? n.artist_ids.map(S) : [],
        type: r,
        button_urls: Array.isArray(n.button_urls) ? n.button_urls.map(S) : [],
    };
}
