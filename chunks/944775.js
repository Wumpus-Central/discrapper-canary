var r = n(477900);
n(582128);
var i = n(73153),
    l = n(887287),
    s = n(853757),
    o = n(574172),
    a = n(734057),
    u = n(495867),
    d = n(373954),
    c = n(253400),
    h = n(177303),
    f = n(980504),
    g = n(652215),
    p = n(792996);
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
    y = f.ed.padding,
    A = m.width - y,
    v = m.height - y;
function x() {
    (0, o.close)(g.MLl.SOUNDBOARD);
}
n.d(
    t,
    {},
    {
        Ax: async function (e) {
            let t = u.A.getGuildId(),
                n = u.A.getChannelId(),
                i = a.A.getChannel(n);
            if (null == t || null == i) return;
            let { x: l, y: d } = await c.Ay.invoke("GET_MOUSE_COORDINATES");
            (0, o.ho)(
                g.MLl.SOUNDBOARD,
                (n) =>
                    (0, r.jsx)(s.A, {
                        windowKey: n,
                        withTitleBar: !1,
                        title: p.intl.string(p.t["IiA///"]),
                        onBlur: x,
                        children: (0, r.jsx)(h.A, {
                            guildId: t,
                            channel: i,
                            width: A,
                            height: v,
                            keepOpen: e,
                            onClose: x,
                            analyticsSource: "global",
                        }),
                    }),
                { ...m, left: l - m.width / 2, top: d - m.height / 2 },
            );
        },
        Lk: function (e) {
            i.h.dispatch({ type: "SOUNDBOARD_SET_OVERLAY_ENABLED", pid: e, enabled: !1 });
            let t = l.A.isOverlayV3EnabledForPID(e),
                n = d.default.disableClickableRegions;
            d.default.isLocked(e) || t || n || i.h.dispatch({ type: "OVERLAY_SET_INPUT_LOCKED", locked: !0, pid: e });
        },
        cu: x,
        hK: function (e, t) {
            let n = l.A.isOverlayV3EnabledForPID(t),
                r = d.default.disableClickableRegions;
            (n || r || i.h.dispatch({ type: "OVERLAY_SET_INPUT_LOCKED", locked: !1, pid: t }),
                i.h.dispatch({ type: "SOUNDBOARD_SET_OVERLAY_ENABLED", pid: t, enabled: !0, keepOpen: e }));
        },
    },
);
