n.d(t, {
    G8: () => m,
    LI: () => E,
    d3: () => p,
    dM: () => _,
    mD: () => h,
}),
    n(65821),
    n(142703),
    n(896048);
var r = n(729937),
    i = n(573648),
    a = n(15285),
    s = n(927813),
    o = n(107750),
    l = n(210528),
    c = n(655116),
    u = n(272984),
    d = n(652215);
let f = 30 * s.A.Millis.SECOND;

function p(e) {
    return null != e.getActiveSocketAndDevice() || l.A.isProtocolRegistered();
}

function _() {
    let e = c.A.getActiveSocketAndDevice();
    if (null != e) return Promise.resolve(e);
    if (!l.A.isProtocolRegistered()) return Promise.reject(Error("protocol is not registered"));
    let t = c.A.getPlayableComputerDevices();
    if (a.Ay.isObservedAppRunning(i.A.get(d.fg2.SPOTIFY).name) && t.length > 0) {
        let { socket: e, device: n } = t[0];
        return (
            (0, o.VR)(e.accountId, n.id),
            Promise.resolve({
                socket: e,
                device: n,
            })
        );
    }
    return new Promise((e, n) => {
        let r = setTimeout(() => {
                c.A.removeChangeListener(i), n(Error("timeout launching spotify"));
            }, f),
            i = () => {
                for (let { socket: n, device: a } of c.A.getPlayableComputerDevices())
                    null == t.find((e) => e.device.id === a.id) &&
                        (clearTimeout(r),
                        c.A.removeChangeListener(i),
                        setImmediate(() => {
                            (0, o.VR)(n.accountId, a.id),
                                e({
                                    socket: n,
                                    device: a,
                                });
                        }));
            };
        c.A.addChangeListener(i), window.open("".concat(u.gY, ":"));
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
async function E(e, t) {
    var n;
    let i = await (0, r.yb)(e, t),
        a = (0, u.NJ)(g(null != (n = i.type) ? n : u.M0.TRACK));
    if (null === a) throw Error("invalid type ".concat(i.type));
    return {
        context_uri: "string" == typeof i.context_uri ? i.context_uri : void 0,
        album_id: g(i.album_id),
        artist_ids: Array.isArray(i.artist_ids) ? i.artist_ids.map(g) : [],
        type: a,
        button_urls: Array.isArray(i.button_urls) ? i.button_urls.map(g) : [],
    };
}
