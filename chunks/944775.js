n.d(t, { Ax: () => w, Lk: () => b, cu: () => x, hK: () => E });
var r = n(477900);
n(582128);
var i = n(73153),
    l = n(233741),
    s = n(979186),
    o = n(574172),
    a = n(734057),
    d = n(763827),
    u = n(532294),
    c = n(19575),
    h = n(317084),
    f = n(980504),
    g = n(652215),
    m = n(660183);
let p = {
        width: f.ed.width,
        height: f.ed.height,
        resizable: !1,
        movable: !1,
        alwaysOnTop: !0,
        frame: !1,
        transparent: !0,
        hasShadow: !1,
        skipTaskbar: !0,
        menubar: !0,
        backgroundColor: "#00000000",
        titleBarStyle: null,
    },
    A = f.ed.padding,
    y = p.width - A,
    v = p.height - A;
async function w(e) {
    let t = d.A.getGuildId(),
        n = d.A.getChannelId(),
        i = a.A.getChannel(n);
    if (null == t || null == i) return;
    let { x: l, y: u } = await c.Ay.invoke("GET_MOUSE_COORDINATES");
    (0, o.open)(
        g.MLl.SOUNDBOARD,
        (n) =>
            (0, r.jsx)(s.A, {
                windowKey: n,
                withTitleBar: !1,
                title: m.intl.string(m.t["IiA///"]),
                onBlur: x,
                children: (0, r.jsx)(h.A, {
                    guildId: t,
                    channel: i,
                    width: y,
                    height: v,
                    keepOpen: e,
                    onClose: x,
                    analyticsSource: "global",
                }),
            }),
        { ...p, left: l - p.width / 2, top: u - p.height / 2 },
    );
}
function x() {
    (0, o.close)(g.MLl.SOUNDBOARD);
}
function E(e, t) {
    let n = l.A.isOverlayV3EnabledForPID(t),
        r = u.default.disableClickableRegions;
    (n || r || i.h.dispatch({ type: "OVERLAY_SET_INPUT_LOCKED", locked: !1, pid: t }),
        i.h.dispatch({ type: "SOUNDBOARD_SET_OVERLAY_ENABLED", pid: t, enabled: !0, keepOpen: e }));
}
function b(e) {
    i.h.dispatch({ type: "SOUNDBOARD_SET_OVERLAY_ENABLED", pid: e, enabled: !1 });
    let t = l.A.isOverlayV3EnabledForPID(e),
        n = u.default.disableClickableRegions;
    u.default.isLocked(e) || t || n || i.h.dispatch({ type: "OVERLAY_SET_INPUT_LOCKED", locked: !0, pid: e });
}
