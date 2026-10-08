n.d(t, { Ax: () => w, Lk: () => b, cu: () => x, hK: () => E });
var r = n(477900);
n(582128);
var i = n(73153),
    s = n(233741),
    l = n(979186),
    o = n(574172),
    a = n(734057),
    d = n(763827),
    u = n(532294),
    c = n(19575),
    h = n(317084),
    f = n(980504),
    g = n(652215),
    p = n(660183);
let m = {
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
    y = m.width - A,
    v = m.height - A;
async function w(e) {
    let t = d.A.getGuildId(),
        n = d.A.getChannelId(),
        i = a.A.getChannel(n);
    if (null == t || null == i) return;
    let { x: s, y: u } = await c.Ay.invoke("GET_MOUSE_COORDINATES");
    (0, o.open)(
        g.MLl.SOUNDBOARD,
        (n) =>
            (0, r.jsx)(l.A, {
                windowKey: n,
                withTitleBar: !1,
                title: p.intl.string(p.t["IiA///"]),
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
        { ...m, left: s - m.width / 2, top: u - m.height / 2 },
    );
}
function x() {
    (0, o.close)(g.MLl.SOUNDBOARD);
}
function E(e, t) {
    let n = s.A.isOverlayV3EnabledForPID(t),
        r = u.default.disableClickableRegions;
    (n || r || i.h.dispatch({ type: "OVERLAY_SET_INPUT_LOCKED", locked: !1, pid: t }),
        i.h.dispatch({ type: "SOUNDBOARD_SET_OVERLAY_ENABLED", pid: t, enabled: !0, keepOpen: e }));
}
function b(e) {
    i.h.dispatch({ type: "SOUNDBOARD_SET_OVERLAY_ENABLED", pid: e, enabled: !1 });
    let t = s.A.isOverlayV3EnabledForPID(e),
        n = u.default.disableClickableRegions;
    u.default.isLocked(e) || t || n || i.h.dispatch({ type: "OVERLAY_SET_INPUT_LOCKED", locked: !0, pid: e });
}
