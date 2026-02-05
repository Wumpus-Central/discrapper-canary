r.d(t, { C6: () => R, HI: () => S }), r(321073);
var n = r(627968),
    a = r(64700),
    i = r(503698),
    s = r.n(i),
    l = r(23339),
    o = r(311907),
    d = r(397927),
    c = r(233545),
    u = r(684339),
    m = r(235986),
    p = r(401901),
    y = r(696451),
    h = r(430452),
    A = r(383501),
    g = r(412780),
    f = r(287809),
    v = r(427262),
    C = r(974175),
    x = r(731854),
    E = r(518959),
    D = r(473169);
let b = { [x.r8.NO_OVERRIDE]: "None", [x.r8.LOW]: "Low Quality Stream", [x.r8.HIGH]: "High Quality Stream" };
function R(e) {
    let t = [],
        r = 0;
    for (e.length % 2 != 0 && e.push((0, n.jsx)(m.A, { basis: "50%", grow: 0 }, r++)); e.length > 0; )
        t.push((0, n.jsx)(m.A, { basis: "50%", grow: 0, children: e.splice(0, 2) }, r++));
    return t;
}
let F = { ssrc: 1, codec: 2 };
function S(e) {
    let {
            streams: t,
            context: r,
            mediaEngineConnectionId: i,
            userId: S,
            videoStreams: j,
            title: N,
            showUserInfo: I = !1,
            showSimulcastOverride: P = !1,
        } = e,
        [B, k] = a.useState("0"),
        T = (0, o.bG)([A.A], () => (I ? A.A.getGuildId() : null)),
        L = (0, o.bG)([f.default], () => (I && null != S ? f.default.getUser(S) : null)),
        w = (0, o.bG)([y.Ay], () => (I && null != T && null != S ? y.Ay.getNick(T, S) : null));
    if (null == t || (I && null == S) || 0 === t.length) return (0, n.jsx)(d.y$y, { type: d.y$y.Type.SPINNING_CIRCLE });
    let M = N;
    I && null != L && (M = `${N} — ${w ?? v.Ay.getName(L)}`);
    let G = t.map((e, t) => {
            let r, a;
            return (0, n.jsx)(
                d.VQ0.Item,
                {
                    id: t.toString(),
                    children:
                        ((r = (0, l.$G)(e.type)),
                        (a = ""),
                        "resolution" in e &&
                            null != e.resolution &&
                            0 !== e.resolution.width &&
                            0 !== e.resolution.height &&
                            (a = ` (${e.resolution.width}x${e.resolution.height})`),
                        r + a),
                },
                t.toString(),
            );
        }),
        $ = Math.min(parseInt(B, 10), t.length - 1),
        H = t[$],
        O = (function (e, t, r, a, i) {
            let l,
                o = [];
            for (let t of Object.keys(e).sort((e, t) => {
                let r = F[e],
                    n = F[t];
                return r !== n
                    ? void 0 === r
                        ? 1
                        : void 0 === n
                          ? -1
                          : r - n
                    : g.iA[e] !== g.iA[t]
                      ? g.iA[e]
                          ? 1
                          : -1
                      : e > t
                        ? 1
                        : -1;
            })) {
                let r = e[t];
                C.R[t] || void 0 === r || o.push((0, n.jsx)(C.q7, { section: a, label: t, value: r }, t));
            }
            return (0, n.jsxs)(
                "div",
                {
                    className: D.C2,
                    children: [
                        "video" === e.type &&
                            null != r &&
                            null != a &&
                            null != i &&
                            (null != (l = i.get(r, a, e.ssrc))
                                ? (0, n.jsx)("div", {
                                      className: s()(E.tN, D.C2),
                                      children: (0, n.jsx)(p.A, {
                                          streamId: l,
                                          videoComponent: h.A.getMediaEngine().Video,
                                          paused: !1,
                                          videoSpinnerContext: u.u.REPLAY_VIDEO_STREAM,
                                          userId: a,
                                      }),
                                  })
                                : null),
                        R(o),
                    ],
                },
                `${e.type} + ${e.ssrc}`,
            );
        })(H, 0, i, S, j),
        U =
            P &&
            "video" === H.type &&
            null != i &&
            null != S &&
            null != j &&
            (0, n.jsx)(m.A, {
                className: D.SX,
                children: (0, n.jsx)(m.A.Child, {
                    basis: "100%",
                    children: (0, n.jsx)(d.l6P, {
                        label: "Simulcast Override",
                        value: g.Ay.getSimulcastDebugOverride(S, r),
                        onSelectionChange: (e) => {
                            c.z0(S, r, e);
                        },
                        options: Object.values(x.r8).map((e) => ({ id: e, value: e, label: b[e] })),
                        selectionMode: "single",
                        fullWidth: !0,
                    }),
                }),
            });
    return (0, n.jsxs)(d.BJc, {
        gap: 16,
        children: [
            (0, n.jsx)(d.Heading, { variant: "heading-md/medium", children: M }),
            (0, n.jsx)(d.VQ0, {
                type: "top",
                look: "brand",
                selectedItem: B,
                onItemSelect: k,
                className: E.$H,
                children: G,
            }),
            O,
            U,
        ],
    });
}
