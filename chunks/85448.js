e.d(t, { A: () => g });
var A,
    l = e(477900);
e(582128);
var a = e(503698),
    i = e.n(a),
    n = e(17928),
    h = e(778712),
    _ = e(666654),
    u = e(990836),
    c = e(83107),
    r = e(661531),
    T = e(562819),
    d = e(573435),
    N = e(293246),
    C = e(863089),
    O = e(556525),
    I = e(149941),
    o = (((A = o || {})[(A.OUTGOING = 0)] = "OUTGOING"), (A[(A.INCOMING = 1)] = "INCOMING"), A);
function L(s) {
    let {
            userId: t,
            size: e,
            speaking: A = !1,
            muted: a = !1,
            deafen: o = !1,
            src: L,
            avatarDecoration: g = null,
            disabled: m = !1,
            ringing: R,
            ringingType: S = 0,
            avatarClassName: f,
            renderIcon: b,
            style: j,
            onClick: v,
            onContextMenu: x,
            className: y,
        } = s,
        V = (0, n.bG)([N.Ay], () => null != t && N.Ay.isLocalMute(t)),
        p = (0, C.A)(t),
        E = (0, O.v)({ isSpeaking: A, voiceDb: p }),
        W = (0, h.Kj)(e),
        k = !a && !o && !V,
        G = i()(
            I.iE,
            {
                [I.vk]: null != v,
                [I.tb]: R && 0 === S,
                [I.hs]: R && 1 === S,
                [I.EX]: e === h._3.SIZE_32 || e === h._3.SIZE_24,
            },
            y,
        ),
        w = (0, h.FT)(e),
        U = { height: w, width: w, ...j };
    return (0, l.jsx)("div", {
        style: U,
        onContextMenu: x,
        className: G,
        children: (function () {
            let s,
                t = (0, h.FT)(e),
                A = (0, l.jsx)("img", {
                    src: L,
                    alt: " ",
                    className: i()(I.sb, f, { [I.tb]: R && 0 === S }),
                    draggable: !1,
                });
            if (m) return A;
            let n = null != b,
                N = a || o || V,
                C = (function (s, t) {
                    let { hasIcon: e = !1, hasStatus: A = !1 } = t;
                    return e && A
                        ? (d.Kh[s] ?? d.hW.AVATAR_CALL_ICON_STATUS_80)
                        : e
                          ? (d.zf[s] ?? d.hW.AVATAR_CALL_ICON_80)
                          : A
                            ? (d.mC[s] ?? d.hW.AVATAR_CALL_STATUS_80)
                            : (d.$O[s] ?? d.hW.AVATAR_CALL_80);
                })(e, { hasIcon: n, hasStatus: N }),
                O = (function (s, t) {
                    let { hasIcon: e = !1, hasStatus: A = !1 } = t;
                    return e && A
                        ? (d.nv[s] ?? d.hW.AVATAR_DECORATION_CALL_ICON_STATUS_80)
                        : e
                          ? (d.OU[s] ?? d.hW.AVATAR_DECORATION_CALL_ICON_80)
                          : A
                            ? (d.X7[s] ?? d.hW.AVATAR_DECORATION_CALL_STATUS_80)
                            : (d.aM[s] ?? d.hW.AVATAR_DECORATION_CALL_80);
                })(e, { hasIcon: n, hasStatus: N }),
                j = (0, T.Te)(t);
            return (0, l.jsxs)("div", {
                className: I.lN,
                children: [
                    (0, l.jsx)(d.Ay, { className: I.KQ, width: t, height: t, mask: C, children: A }),
                    k && (0, l.jsx)("div", { className: I.PQ, style: E }),
                    null != g &&
                        (0, l.jsx)(d.Ay, {
                            className: I.DX,
                            width: j,
                            height: j,
                            mask: O,
                            children: (0, l.jsx)("img", {
                                className: i()(I.tB, { [I.tb]: R && 0 === S }),
                                src: g,
                                alt: "",
                                "aria-hidden": !0,
                                draggable: !1,
                            }),
                        }),
                    b?.(),
                    ((s = V ? _.O : o ? u.c : c.z),
                    a || o || V
                        ? (0, l.jsx)("div", {
                              className: I.II,
                              style: { width: W.status + 2 * W.offset, height: W.status + 2 * W.offset },
                              children: (0, l.jsx)(
                                  s,
                                  { color: r.A.colors.WHITE.css, style: { width: W.status, height: W.status } },
                                  "status",
                              ),
                          })
                        : null),
                ],
            });
        })(),
    });
}
L.RingingType = o;
let g = L;
