e.d(t, { A: () => x });
var l,
    n = e(477900);
e(582128);
var i = e(503698),
    r = e.n(i),
    a = e(17928),
    c = e(778712),
    h = e(666654),
    u = e(990836),
    A = e(83107),
    d = e(661531),
    o = e(573435),
    _ = e(293246),
    I = e(863089),
    N = e(556525),
    g = e(149941),
    m = (((l = m || {})[(l.OUTGOING = 0)] = "OUTGOING"), (l[(l.INCOMING = 1)] = "INCOMING"), l);
function j(s) {
    let {
            userId: t,
            size: e,
            speaking: l = !1,
            muted: i = !1,
            deafen: m = !1,
            src: j,
            disabled: x = !1,
            ringing: C,
            ringingType: T = 0,
            avatarClassName: f,
            renderIcon: O,
            style: p,
            onClick: v,
            onContextMenu: y,
            className: b,
        } = s,
        E = (0, a.bG)([_.Ay], () => null != t && _.Ay.isLocalMute(t)),
        G = (0, I.A)(t),
        L = (0, N.v)({ isSpeaking: l, voiceDb: G }),
        k = (0, c.Kj)(e);
    function V() {
        let s = E ? h.O : m ? u.c : A.z;
        return i || m || E
            ? (0, n.jsx)("div", {
                  className: g.II,
                  style: { width: k.status + 2 * k.offset, height: k.status + 2 * k.offset },
                  children: (0, n.jsx)(
                      s,
                      { color: d.A.colors.WHITE.css, style: { width: k.status, height: k.status } },
                      "status",
                  ),
              })
            : null;
    }
    function w() {
        return (0, n.jsx)("div", { className: g.PQ, style: L }, "border");
    }
    let F = r()(
            g.iE,
            {
                [g.vk]: null != v,
                [g.tb]: C && 0 === T,
                [g.hs]: C && 1 === T,
                [g.EX]: e === c._3.SIZE_32 || e === c._3.SIZE_24,
            },
            b,
        ),
        R = (0, c.FT)(e),
        W = { height: R, width: R, ...p };
    return (0, n.jsx)("div", {
        style: W,
        onContextMenu: y,
        className: F,
        children: (function () {
            let s = (0, c.FT)(e),
                t = (0, n.jsx)("img", { src: j, alt: " ", className: r()(g.sb, f, { [g.tb]: C && 0 === T }) });
            if (x) return t;
            let a = o.hW.AVATAR_DEFAULT;
            return (
                null != O
                    ? (a = e === c._3.SIZE_32 ? o.hW.AVATAR_CALL_ICON_32 : o.hW.AVATAR_CALL_ICON)
                    : (i || m || E) && (a = o.hW.AVATAR_VOICE_CALL_80),
                (0, n.jsxs)("div", {
                    className: g.lN,
                    children: [
                        (0, n.jsxs)(o.Ay, { className: g.KQ, width: s, height: s, mask: a, children: [O?.(), t] }),
                        i && l
                            ? (0, n.jsxs)(n.Fragment, { children: [w(), V()] })
                            : i || m || E
                              ? (0, n.jsx)(n.Fragment, { children: V() })
                              : (0, n.jsx)(n.Fragment, { children: w() }),
                    ],
                })
            );
        })(),
    });
}
j.RingingType = m;
let x = j;
