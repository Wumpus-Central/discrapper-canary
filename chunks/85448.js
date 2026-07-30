e.d(t, { A: () => O });
var l,
    n = e(477900);
e(582128);
var i = e(503698),
    a = e.n(i),
    h = e(17928),
    r = e(778712),
    A = e(666654),
    c = e(990836),
    u = e(83107),
    d = e(661531),
    _ = e(562819),
    o = e(573435),
    I = e(293246),
    N = e(863089),
    m = e(556525),
    C = e(149941),
    T = (((l = T || {})[(l.OUTGOING = 0)] = "OUTGOING"), (l[(l.INCOMING = 1)] = "INCOMING"), l);
function g(s) {
    let {
            userId: t,
            size: e,
            speaking: l = !1,
            muted: i = !1,
            deafen: T = !1,
            src: g,
            avatarDecoration: O = null,
            disabled: j = !1,
            ringing: x,
            ringingType: L = 0,
            avatarClassName: E,
            renderIcon: V,
            style: f,
            onClick: y,
            onContextMenu: b,
            className: p,
        } = s,
        v = (0, h.bG)([I.Ay], () => null != t && I.Ay.isLocalMute(t)),
        k = (0, N.A)(t),
        G = (0, m.v)({ isSpeaking: l, voiceDb: k }),
        R = (0, r.Kj)(e);
    function w() {
        let s = v ? A.O : T ? c.c : u.z;
        return i || T || v
            ? (0, n.jsx)("div", {
                  className: C.II,
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
        return (0, n.jsx)("div", { className: C.PQ, style: G }, "border");
    }
    let F = a()(
            C.iE,
            {
                [C.vk]: null != y,
                [C.tb]: x && 0 === L,
                [C.hs]: x && 1 === L,
                [C.EX]: e === r._3.SIZE_32 || e === r._3.SIZE_24,
            },
            p,
        ),
        M = (0, r.FT)(e),
        S = { height: M, width: M, ...f };
    return (0, n.jsx)("div", {
        style: S,
        onContextMenu: b,
        className: F,
        children: (function () {
            let s = (0, r.FT)(e),
                t = (0, n.jsx)("img", { src: g, alt: " ", className: a()(C.sb, E, { [C.tb]: x && 0 === L }) });
            if (j) return t;
            let h = o.hW.AVATAR_DEFAULT;
            null != V
                ? (h = e === r._3.SIZE_32 ? o.hW.AVATAR_CALL_ICON_32 : o.hW.AVATAR_CALL_ICON)
                : null == V && (i || T || v) && (h = o.hW.AVATAR_VOICE_CALL_80);
            let A = (0, _.Te)(s);
            return (0, n.jsxs)("div", {
                className: C.lN,
                children: [
                    (0, n.jsxs)(o.Ay, { className: C.KQ, width: s, height: s, mask: h, children: [V?.(), t] }),
                    null != O &&
                        null == V &&
                        (0, n.jsx)(o.Ay, {
                            className: C.DX,
                            width: A,
                            height: A,
                            mask: h === o.hW.AVATAR_VOICE_CALL_80 ? o.hW.AVATAR_DECORATION_VOICE_CALL_80 : null,
                            children: (0, n.jsx)("img", {
                                className: a()(C.tB, { [C.tb]: x && 0 === L }),
                                src: O,
                                alt: "",
                                "aria-hidden": !0,
                            }),
                        }),
                    i && l
                        ? (0, n.jsxs)(n.Fragment, { children: [W(), w()] })
                        : i || T || v
                          ? (0, n.jsx)(n.Fragment, { children: w() })
                          : (0, n.jsx)(n.Fragment, { children: W() }),
                ],
            });
        })(),
    });
}
g.RingingType = T;
let O = g;
