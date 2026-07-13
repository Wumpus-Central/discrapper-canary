n.d(t, { Ax: () => x, Lk: () => C, cu: () => w, hK: () => E });
var r = n(627968);
n(64700);
var i = n(228366),
    s = n(489277),
    o = n(979186),
    l = n(574172),
    a = n(734057),
    c = n(763827),
    u = n(184809),
    d = n(19575),
    h = n(317084),
    f = n(980504),
    p = n(652215),
    m = n(375708);
let g = {
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
    v = g.width - A,
    y = g.height - A;
async function x(e) {
    let t = c.A.getGuildId(),
        n = c.A.getChannelId(),
        i = a.A.getChannel(n);
    if (null == t || null == i) return;
    let { x: s, y: u } = await d.Ay.invoke("GET_MOUSE_COORDINATES");
    (0, l.open)(
        p.MLl.SOUNDBOARD,
        (n) =>
            (0, r.jsx)(o.A, {
                windowKey: n,
                withTitleBar: !1,
                title: m.intl.string(m.t["IiA///"]),
                onBlur: w,
                children: (0, r.jsx)(h.A, {
                    guildId: t,
                    channel: i,
                    width: v,
                    height: y,
                    keepOpen: e,
                    onClose: w,
                    analyticsSource: "global",
                }),
            }),
        { ...g, left: s - g.width / 2, top: u - g.height / 2 },
    );
}
function w() {
    (0, l.close)(p.MLl.SOUNDBOARD);
}
function E(e, t) {
    let n = s.A.isOverlayV3EnabledForPID(t),
        r = u.default.disableClickableRegions;
    n || r || i.h.dispatch({ type: "OVERLAY_SET_INPUT_LOCKED", locked: !1, pid: t }),
        i.h.dispatch({ type: "SOUNDBOARD_SET_OVERLAY_ENABLED", pid: t, enabled: !0, keepOpen: e });
}
function C(e) {
    i.h.dispatch({ type: "SOUNDBOARD_SET_OVERLAY_ENABLED", pid: e, enabled: !1 });
    let t = s.A.isOverlayV3EnabledForPID(e),
        n = u.default.disableClickableRegions;
    u.default.isLocked(e) || t || n || i.h.dispatch({ type: "OVERLAY_SET_INPUT_LOCKED", locked: !0, pid: e });
}
