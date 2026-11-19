var n,
    l = e(477900);
e(582128);
var A = e(503698),
    a = e.n(A),
    h = e(855986),
    i = e(778712),
    c = e(666654),
    u = e(990836),
    r = e(83107),
    _ = e(546861),
    o = e(646514),
    d = e(562819),
    T = e(573435),
    I = e(209932),
    N = e(988468),
    C = e(863089),
    O = e(556525),
    L = e(479464),
    S = (((n = S || {})[(n.OUTGOING = 0)] = "OUTGOING"), (n[(n.INCOMING = 1)] = "INCOMING"), n);
function g(s) {
    let {
            userId: t,
            size: e,
            voiceStatus: n,
            muted: A = !1,
            deafen: S = !1,
            avatarDecoration: g = null,
            disabled: m = !1,
            ringing: b,
            ringingType: y = 0,
            renderIcon: R,
            style: f,
            onClick: j,
            onContextMenu: p,
            className: x,
            children: v,
        } = s,
        V = (0, h.bG)([N.Ay], () => null != t && N.Ay.isLocalMute(t)),
        E = (0, h.bG)([I.A], () => null != t && I.A.isLocalSoundboardMuted(t)),
        G = (0, C.A)(t),
        W = (0, O.v)({ voiceStatus: n, voiceDb: G }),
        M = (0, i.Kj)(e),
        k = !A && !S && !V,
        w = a()(
            L.iE,
            {
                [L.vk]: null != j,
                [L.tb]: b && 0 === y,
                [L.hs]: b && 1 === y,
                [L.EX]: e === i._3.SIZE_32 || e === i._3.SIZE_24,
            },
            x,
        ),
        D = (0, i.FT)(e),
        U = { height: D, width: D, ...f };
    return (0, l.jsx)("div", {
        style: U,
        onContextMenu: p,
        className: w,
        children: (function () {
            let s,
                t = (0, i.FT)(e);
            if (m) return v;
            let n = null != R,
                h = A || S || V || E,
                I = (function (s, t) {
                    let { hasIcon: e = !1, hasStatus: n = !1 } = t;
                    return e && n
                        ? (T.Kh[s] ?? T.hW.AVATAR_CALL_ICON_STATUS_80)
                        : e
                          ? (T.zf[s] ?? T.hW.AVATAR_CALL_ICON_80)
                          : n
                            ? (T.mC[s] ?? T.hW.AVATAR_CALL_STATUS_80)
                            : (T.$O[s] ?? T.hW.AVATAR_CALL_80);
                })(e, { hasIcon: n, hasStatus: h }),
                N = (function (s, t) {
                    let { hasIcon: e = !1, hasStatus: n = !1 } = t;
                    return e && n
                        ? (T.nv[s] ?? T.hW.AVATAR_DECORATION_CALL_ICON_STATUS_80)
                        : e
                          ? (T.OU[s] ?? T.hW.AVATAR_DECORATION_CALL_ICON_80)
                          : n
                            ? (T.X7[s] ?? T.hW.AVATAR_DECORATION_CALL_STATUS_80)
                            : (T.aM[s] ?? T.hW.AVATAR_DECORATION_CALL_80);
                })(e, { hasIcon: n, hasStatus: h }),
                C = (0, d.Te)(t);
            return (0, l.jsxs)("div", {
                className: L.lN,
                children: [
                    (0, l.jsx)(T.Ay, { className: L.KQ, width: t, height: t, mask: I, children: v }),
                    k && (0, l.jsx)("div", { className: L.PQ, style: W }),
                    null != g &&
                        (0, l.jsx)(T.Ay, {
                            className: L.DX,
                            width: C,
                            height: C,
                            mask: N,
                            children: (0, l.jsx)("img", {
                                className: a()(L.tB, { [L.tb]: b && 0 === y }),
                                src: g,
                                alt: "",
                                "aria-hidden": !0,
                                draggable: !1,
                            }),
                        }),
                    R?.(),
                    ((s = V
                        ? c.MicrophoneDenyIcon
                        : S
                          ? u.HeadphonesSlashIcon
                          : A
                            ? r.MicrophoneSlashIcon
                            : _.SoundboardDenyIcon),
                    A || S || V || E
                        ? (0, l.jsx)("div", {
                              className: L.II,
                              style: { width: M.status + 2 * M.offset, height: M.status + 2 * M.offset },
                              children: (0, l.jsx)(
                                  s,
                                  { color: o.A.colors.WHITE.css, style: { width: M.status, height: M.status } },
                                  "status",
                              ),
                          })
                        : null),
                ],
            });
        })(),
    });
}
function m(s) {
    let { src: t, avatarClassName: e, ...n } = s,
        { ringing: A, ringingType: h } = n;
    return (0, l.jsx)(g, {
        ...n,
        children: (0, l.jsx)("img", {
            src: t,
            alt: " ",
            className: a()(L.sb, e, { [L.tb]: A && 0 === h }),
            draggable: !1,
        }),
    });
}
((m.RingingType = S), e.d(t, {}, { Ay: m, n6: g }));
