e.d(t, { Ay: () => m, n6: () => L });
var A,
    l = e(477900);
e(582128);
var a = e(503698),
    n = e.n(a),
    i = e(17928),
    h = e(778712),
    u = e(666654),
    _ = e(990836),
    c = e(83107),
    r = e(661531),
    T = e(562819),
    d = e(573435),
    N = e(505643),
    C = e(863089),
    O = e(556525),
    o = e(149941),
    I = (((A = I || {})[(A.OUTGOING = 0)] = "OUTGOING"), (A[(A.INCOMING = 1)] = "INCOMING"), A);
function L(s) {
    let {
            userId: t,
            size: e,
            speaking: A = !1,
            muted: a = !1,
            deafen: I = !1,
            avatarDecoration: L = null,
            disabled: g = !1,
            ringing: m,
            ringingType: R = 0,
            renderIcon: S,
            style: f,
            onClick: j,
            onContextMenu: x,
            className: y,
            children: b,
        } = s,
        v = (0, i.bG)([N.Ay], () => null != t && N.Ay.isLocalMute(t)),
        V = (0, C.A)(t),
        p = (0, O.v)({ isSpeaking: A, voiceDb: V }),
        E = (0, h.Kj)(e),
        W = !a && !I && !v,
        k = n()(
            o.iE,
            {
                [o.vk]: null != j,
                [o.tb]: m && 0 === R,
                [o.hs]: m && 1 === R,
                [o.EX]: e === h._3.SIZE_32 || e === h._3.SIZE_24,
            },
            y,
        ),
        G = (0, h.FT)(e),
        w = { height: G, width: G, ...f };
    return (0, l.jsx)("div", {
        style: w,
        onContextMenu: x,
        className: k,
        children: (function () {
            let s,
                t = (0, h.FT)(e);
            if (g) return b;
            let A = null != S,
                i = a || I || v,
                N = (function (s, t) {
                    let { hasIcon: e = !1, hasStatus: A = !1 } = t;
                    return e && A
                        ? (d.Kh[s] ?? d.hW.AVATAR_CALL_ICON_STATUS_80)
                        : e
                          ? (d.zf[s] ?? d.hW.AVATAR_CALL_ICON_80)
                          : A
                            ? (d.mC[s] ?? d.hW.AVATAR_CALL_STATUS_80)
                            : (d.$O[s] ?? d.hW.AVATAR_CALL_80);
                })(e, { hasIcon: A, hasStatus: i }),
                C = (function (s, t) {
                    let { hasIcon: e = !1, hasStatus: A = !1 } = t;
                    return e && A
                        ? (d.nv[s] ?? d.hW.AVATAR_DECORATION_CALL_ICON_STATUS_80)
                        : e
                          ? (d.OU[s] ?? d.hW.AVATAR_DECORATION_CALL_ICON_80)
                          : A
                            ? (d.X7[s] ?? d.hW.AVATAR_DECORATION_CALL_STATUS_80)
                            : (d.aM[s] ?? d.hW.AVATAR_DECORATION_CALL_80);
                })(e, { hasIcon: A, hasStatus: i }),
                O = (0, T.Te)(t);
            return (0, l.jsxs)("div", {
                className: o.lN,
                children: [
                    (0, l.jsx)(d.Ay, { className: o.KQ, width: t, height: t, mask: N, children: b }),
                    W && (0, l.jsx)("div", { className: o.PQ, style: p }),
                    null != L &&
                        (0, l.jsx)(d.Ay, {
                            className: o.DX,
                            width: O,
                            height: O,
                            mask: C,
                            children: (0, l.jsx)("img", {
                                className: n()(o.tB, { [o.tb]: m && 0 === R }),
                                src: L,
                                alt: "",
                                "aria-hidden": !0,
                                draggable: !1,
                            }),
                        }),
                    S?.(),
                    ((s = v ? u.O : I ? _.c : c.z),
                    a || I || v
                        ? (0, l.jsx)("div", {
                              className: o.II,
                              style: { width: E.status + 2 * E.offset, height: E.status + 2 * E.offset },
                              children: (0, l.jsx)(
                                  s,
                                  { color: r.A.colors.WHITE.css, style: { width: E.status, height: E.status } },
                                  "status",
                              ),
                          })
                        : null),
                ],
            });
        })(),
    });
}
function g(s) {
    let { src: t, avatarClassName: e, ...A } = s,
        { ringing: a, ringingType: i } = A;
    return (0, l.jsx)(L, {
        ...A,
        children: (0, l.jsx)("img", {
            src: t,
            alt: " ",
            className: n()(o.sb, e, { [o.tb]: a && 0 === i }),
            draggable: !1,
        }),
    });
}
g.RingingType = I;
let m = g;
