l.d(s, { Ay: () => b, n6: () => R });
var e,
    A = l(477900);
l(582128);
var a = l(503698),
    n = l.n(a),
    i = l(17928),
    h = l(778712),
    u = l(666654),
    c = l(990836),
    r = l(83107),
    _ = l(546861),
    d = l(661531),
    T = l(562819),
    o = l(573435),
    N = l(421768),
    C = l(209932),
    O = l(360906),
    I = l(863089),
    L = l(556525),
    g = l(479464),
    m = (((e = m || {})[(e.OUTGOING = 0)] = "OUTGOING"), (e[(e.INCOMING = 1)] = "INCOMING"), e);
function R(t) {
    let {
            userId: s,
            size: l,
            voiceStatus: e,
            muted: a = !1,
            deafen: m = !1,
            avatarDecoration: R = null,
            disabled: S = !1,
            ringing: b,
            ringingType: f = 0,
            renderIcon: v,
            style: j,
            onClick: x,
            onContextMenu: y,
            className: V,
            children: E,
        } = t,
        G = (0, i.bG)([O.Ay], () => null != s && O.Ay.isLocalMute(s)),
        W = (0, N.g)(null != s ? "CallAvatar" : "Invalid Location"),
        p = (0, i.bG)([C.A], () => null != s && C.A.isLocalSoundboardMuted(s)),
        k = W && p,
        w = (0, I.A)(s),
        U = (0, L.v)({ voiceStatus: e, voiceDb: w }),
        M = (0, h.Kj)(l),
        D = !a && !m && !G,
        K = n()(
            g.iE,
            {
                [g.vk]: null != x,
                [g.tb]: b && 0 === f,
                [g.hs]: b && 1 === f,
                [g.EX]: l === h._3.SIZE_32 || l === h._3.SIZE_24,
            },
            V,
        ),
        X = (0, h.FT)(l),
        z = { height: X, width: X, ...j };
    return (0, A.jsx)("div", {
        style: z,
        onContextMenu: y,
        className: K,
        children: (function () {
            let t,
                s = (0, h.FT)(l);
            if (S) return E;
            let e = null != v,
                i = a || m || G || k,
                N = (function (t, s) {
                    let { hasIcon: l = !1, hasStatus: e = !1 } = s;
                    return l && e
                        ? (o.Kh[t] ?? o.hW.AVATAR_CALL_ICON_STATUS_80)
                        : l
                          ? (o.zf[t] ?? o.hW.AVATAR_CALL_ICON_80)
                          : e
                            ? (o.mC[t] ?? o.hW.AVATAR_CALL_STATUS_80)
                            : (o.$O[t] ?? o.hW.AVATAR_CALL_80);
                })(l, { hasIcon: e, hasStatus: i }),
                C = (function (t, s) {
                    let { hasIcon: l = !1, hasStatus: e = !1 } = s;
                    return l && e
                        ? (o.nv[t] ?? o.hW.AVATAR_DECORATION_CALL_ICON_STATUS_80)
                        : l
                          ? (o.OU[t] ?? o.hW.AVATAR_DECORATION_CALL_ICON_80)
                          : e
                            ? (o.X7[t] ?? o.hW.AVATAR_DECORATION_CALL_STATUS_80)
                            : (o.aM[t] ?? o.hW.AVATAR_DECORATION_CALL_80);
                })(l, { hasIcon: e, hasStatus: i }),
                O = (0, T.Te)(s);
            return (0, A.jsxs)("div", {
                className: g.lN,
                children: [
                    (0, A.jsx)(o.Ay, { className: g.KQ, width: s, height: s, mask: N, children: E }),
                    D && (0, A.jsx)("div", { className: g.PQ, style: U }),
                    null != R &&
                        (0, A.jsx)(o.Ay, {
                            className: g.DX,
                            width: O,
                            height: O,
                            mask: C,
                            children: (0, A.jsx)("img", {
                                className: n()(g.tB, { [g.tb]: b && 0 === f }),
                                src: R,
                                alt: "",
                                "aria-hidden": !0,
                                draggable: !1,
                            }),
                        }),
                    v?.(),
                    ((t = G ? u.O : m ? c.c : a ? r.z : _.N),
                    a || m || G || k
                        ? (0, A.jsx)("div", {
                              className: g.II,
                              style: { width: M.status + 2 * M.offset, height: M.status + 2 * M.offset },
                              children: (0, A.jsx)(
                                  t,
                                  { color: d.A.colors.WHITE.css, style: { width: M.status, height: M.status } },
                                  "status",
                              ),
                          })
                        : null),
                ],
            });
        })(),
    });
}
function S(t) {
    let { src: s, avatarClassName: l, ...e } = t,
        { ringing: a, ringingType: i } = e;
    return (0, A.jsx)(R, {
        ...e,
        children: (0, A.jsx)("img", {
            src: s,
            alt: " ",
            className: n()(g.sb, l, { [g.tb]: a && 0 === i }),
            draggable: !1,
        }),
    });
}
S.RingingType = m;
let b = S;
