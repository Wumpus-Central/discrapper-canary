e.d(t, { A: () => O });
var l,
    n = e(477900);
e(582128);
var i = e(503698),
    a = e.n(i),
    r = e(17928),
    h = e(778712),
    A = e(666654),
    c = e(990836),
    u = e(83107),
    d = e(661531),
    _ = e(562819),
    o = e(573435),
    g = e(293246),
    I = e(863089),
    N = e(556525),
    m = e(149941),
    C = (((l = C || {})[(l.OUTGOING = 0)] = "OUTGOING"), (l[(l.INCOMING = 1)] = "INCOMING"), l);
function T(s) {
    let {
            userId: t,
            size: e,
            speaking: l = !1,
            muted: i = !1,
            deafen: C = !1,
            src: T,
            avatarDecoration: O = null,
            disabled: j = !1,
            ringing: x,
            ringingType: L = 0,
            avatarClassName: b,
            renderIcon: E,
            style: V,
            onClick: f,
            onContextMenu: y,
            className: p,
        } = s,
        v = (0, r.bG)([g.Ay], () => null != t && g.Ay.isLocalMute(t)),
        k = (0, I.A)(t),
        G = (0, N.v)({ isSpeaking: l, voiceDb: k }),
        R = (0, h.Kj)(e);
    function w() {
        let s = v ? A.O : C ? c.c : u.z;
        return i || C || v
            ? (0, n.jsx)("div", {
                  className: m.II,
                  style: { width: R.status + 2 * R.offset, height: R.status + 2 * R.offset },
                  children: (0, n.jsx)(
                      s,
                      { color: d.A.colors.WHITE.css, style: { width: R.status, height: R.status } },
                      "status",
                  ),
              })
            : null;
    }
    function W() {
        return (0, n.jsx)("div", { className: m.PQ, style: G }, "border");
    }
    let F = a()(
            m.iE,
            {
                [m.vk]: null != f,
                [m.tb]: x && 0 === L,
                [m.hs]: x && 1 === L,
                [m.EX]: e === h._3.SIZE_32 || e === h._3.SIZE_24,
            },
            p,
        ),
        M = (0, h.FT)(e),
        S = { height: M, width: M, ...V };
    return (0, n.jsx)("div", {
        style: S,
        onContextMenu: y,
        className: F,
        children: (function () {
            let s = (0, h.FT)(e),
                t = (0, n.jsx)("img", {
                    src: T,
                    alt: " ",
                    className: a()(m.sb, b, { [m.tb]: x && 0 === L }),
                    draggable: !1,
                });
            if (j) return t;
            let r = o.hW.AVATAR_DEFAULT;
            null != E
                ? (r = e === h._3.SIZE_32 ? o.hW.AVATAR_CALL_ICON_32 : o.hW.AVATAR_CALL_ICON)
                : null == E && (i || C || v) && (r = o.hW.AVATAR_VOICE_CALL_80);
            let A = (0, _.Te)(s);
            return (0, n.jsxs)("div", {
                className: m.lN,
                children: [
                    (0, n.jsxs)(o.Ay, { className: m.KQ, width: s, height: s, mask: r, children: [E?.(), t] }),
                    null != O &&
                        null == E &&
                        (0, n.jsx)(o.Ay, {
                            className: m.DX,
                            width: A,
                            height: A,
                            mask: r === o.hW.AVATAR_VOICE_CALL_80 ? o.hW.AVATAR_DECORATION_VOICE_CALL_80 : null,
                            children: (0, n.jsx)("img", {
                                className: a()(m.tB, { [m.tb]: x && 0 === L }),
                                src: O,
                                alt: "",
                                "aria-hidden": !0,
                                draggable: !1,
                            }),
                        }),
                    i && l
                        ? (0, n.jsxs)(n.Fragment, { children: [W(), w()] })
                        : i || C || v
                          ? (0, n.jsx)(n.Fragment, { children: w() })
                          : (0, n.jsx)(n.Fragment, { children: W() }),
                ],
            });
        })(),
    });
}
T.RingingType = C;
let O = T;
