var l,
    n = e(477900);
e(582128);
var a = e(503698),
    A = e.n(a),
    i = e(855986),
    h = e(778712),
    c = e(666654),
    u = e(990836),
    r = e(83107),
    o = e(546861),
    _ = e(646514),
    d = e(562819),
    T = e(573435),
    I = e(421768),
    C = e(209932),
    N = e(754712),
    O = e(863089),
    L = e(556525),
    S = e(479464),
    g = (((l = g || {})[(l.OUTGOING = 0)] = "OUTGOING"), (l[(l.INCOMING = 1)] = "INCOMING"), l);
function m(s) {
    let {
            userId: t,
            size: e,
            voiceStatus: l,
            muted: a = !1,
            deafen: g = !1,
            avatarDecoration: m = null,
            disabled: b = !1,
            ringing: y,
            ringingType: R = 0,
            renderIcon: f,
            style: v,
            onClick: j,
            onContextMenu: p,
            className: x,
            children: V,
        } = s,
        E = (0, i.bG)([N.Ay], () => null != t && N.Ay.isLocalMute(t)),
        G = (0, I.g)(null != t ? "CallAvatar" : "Invalid Location"),
        W = (0, i.bG)([C.A], () => null != t && C.A.isLocalSoundboardMuted(t)),
        M = G && W,
        k = (0, O.A)(t),
        w = (0, L.v)({ voiceStatus: l, voiceDb: k }),
        D = (0, h.Kj)(e),
        U = !a && !g && !E,
        K = A()(
            S.iE,
            {
                [S.vk]: null != j,
                [S.tb]: y && 0 === R,
                [S.hs]: y && 1 === R,
                [S.EX]: e === h._3.SIZE_32 || e === h._3.SIZE_24,
            },
            x,
        ),
        X = (0, h.FT)(e),
        F = { height: X, width: X, ...v };
    return (0, n.jsx)("div", {
        style: F,
        onContextMenu: p,
        className: K,
        children: (function () {
            let s,
                t = (0, h.FT)(e);
            if (b) return V;
            let l = null != f,
                i = a || g || E || M,
                I = (function (s, t) {
                    let { hasIcon: e = !1, hasStatus: l = !1 } = t;
                    return e && l
                        ? (T.Kh[s] ?? T.hW.AVATAR_CALL_ICON_STATUS_80)
                        : e
                          ? (T.zf[s] ?? T.hW.AVATAR_CALL_ICON_80)
                          : l
                            ? (T.mC[s] ?? T.hW.AVATAR_CALL_STATUS_80)
                            : (T.$O[s] ?? T.hW.AVATAR_CALL_80);
                })(e, { hasIcon: l, hasStatus: i }),
                C = (function (s, t) {
                    let { hasIcon: e = !1, hasStatus: l = !1 } = t;
                    return e && l
                        ? (T.nv[s] ?? T.hW.AVATAR_DECORATION_CALL_ICON_STATUS_80)
                        : e
                          ? (T.OU[s] ?? T.hW.AVATAR_DECORATION_CALL_ICON_80)
                          : l
                            ? (T.X7[s] ?? T.hW.AVATAR_DECORATION_CALL_STATUS_80)
                            : (T.aM[s] ?? T.hW.AVATAR_DECORATION_CALL_80);
                })(e, { hasIcon: l, hasStatus: i }),
                N = (0, d.Te)(t);
            return (0, n.jsxs)("div", {
                className: S.lN,
                children: [
                    (0, n.jsx)(T.Ay, { className: S.KQ, width: t, height: t, mask: I, children: V }),
                    U && (0, n.jsx)("div", { className: S.PQ, style: w }),
                    null != m &&
                        (0, n.jsx)(T.Ay, {
                            className: S.DX,
                            width: N,
                            height: N,
                            mask: C,
                            children: (0, n.jsx)("img", {
                                className: A()(S.tB, { [S.tb]: y && 0 === R }),
                                src: m,
                                alt: "",
                                "aria-hidden": !0,
                                draggable: !1,
                            }),
                        }),
                    f?.(),
                    ((s = E
                        ? c.MicrophoneDenyIcon
                        : g
                          ? u.HeadphonesSlashIcon
                          : a
                            ? r.MicrophoneSlashIcon
                            : o.SoundboardDenyIcon),
                    a || g || E || M
                        ? (0, n.jsx)("div", {
                              className: S.II,
                              style: { width: D.status + 2 * D.offset, height: D.status + 2 * D.offset },
                              children: (0, n.jsx)(
                                  s,
                                  { color: _.A.colors.WHITE.css, style: { width: D.status, height: D.status } },
                                  "status",
                              ),
                          })
                        : null),
                ],
            });
        })(),
    });
}
function b(s) {
    let { src: t, avatarClassName: e, ...l } = s,
        { ringing: a, ringingType: i } = l;
    return (0, n.jsx)(m, {
        ...l,
        children: (0, n.jsx)("img", {
            src: t,
            alt: " ",
            className: A()(S.sb, e, { [S.tb]: a && 0 === i }),
            draggable: !1,
        }),
    });
}
((b.RingingType = g), e.d(t, {}, { Ay: b, n6: m }));
