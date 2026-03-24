r.d(t, { C6: () => D, HI: () => S }), r(321073);
var n = r(627968),
    a = r(64700),
    i = r(503698),
    s = r.n(i),
    l = r(23339),
    o = r(311907),
    d = r(397927),
    u = r(233545),
    c = r(684339),
    m = r(235986),
    p = r(401901),
    h = r(696451),
    y = r(430452),
    A = r(383501),
    f = r(412780),
    g = r(287809),
    F = r(427262),
    v = r(974175),
    C = r(731854),
    b = r(518959),
    x = r(473169);
let E = { [C.r8.NO_OVERRIDE]: "None", [C.r8.LOW]: "Low Quality Stream", [C.r8.HIGH]: "High Quality Stream" };
function D(e) {
    let t = [],
        r = 0;
    for (e.length % 2 != 0 && e.push((0, n.jsx)(m.A, { basis: "50%", grow: 0 }, r++)); e.length > 0; )
        t.push((0, n.jsx)(m.A, { basis: "50%", grow: 0, children: e.splice(0, 2) }, r++));
    return t;
}
let R = { ssrc: 1, codec: 2 };
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
        [k, B] = a.useState("0"),
        w = (0, o.bG)([A.A], () => (I ? A.A.getGuildId() : null)),
        G = (0, o.bG)([g.default], () => (I && null != S ? g.default.getUser(S) : null)),
        T = (0, o.bG)([h.Ay], () => (I && null != w && null != S ? h.Ay.getNick(w, S) : null));
    if (null == t || (I && null == S) || 0 === t.length) return (0, n.jsx)(d.y$y, { type: d.y$y.Type.SPINNING_CIRCLE });
    let L = N;
    I && null != G && (L = `${N} — ${T ?? F.Ay.getName(G)}`);
    let M = t.map((e, t) => {
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
        $ = Math.min(parseInt(k, 10), t.length - 1),
        q = t[$],
        U = (function (e, t, r, a, i) {
            let l,
                o = [];
            for (let t of Object.keys(e).sort((e, t) => {
                let r = R[e],
                    n = R[t];
                return r !== n
                    ? void 0 === r
                        ? 1
                        : void 0 === n
                          ? -1
                          : r - n
                    : f.iA[e] !== f.iA[t]
                      ? f.iA[e]
                          ? 1
                          : -1
                      : e > t
                        ? 1
                        : -1;
            })) {
                let r = e[t];
                v.R[t] || void 0 === r || o.push((0, n.jsx)(v.q7, { section: a, label: t, value: r }, t));
            }
            return (0, n.jsxs)(
                "div",
                {
                    className: x.C2,
                    children: [
                        "video" === e.type &&
                            null != r &&
                            null != a &&
                            null != i &&
                            (null != (l = i.get(r, a, e.ssrc))
                                ? (0, n.jsx)("div", {
                                      className: s()(b.tN, x.C2),
                                      children: (0, n.jsx)(p.A, {
                                          streamId: l,
                                          videoComponent: y.Ay.getMediaEngine().Video,
                                          paused: !1,
                                          videoSpinnerContext: c.u.REPLAY_VIDEO_STREAM,
                                          userId: a,
                                      }),
                                  })
                                : null),
                        D(o),
                    ],
                },
                `${e.type} + ${e.ssrc}`,
            );
        })(q, 0, i, S, j),
        H =
            P &&
            "video" === q.type &&
            null != i &&
            null != S &&
            null != j &&
            r === C.x.DEFAULT &&
            (0, n.jsx)(m.A, {
                className: x.SX,
                children: (0, n.jsx)(m.A.Child, {
                    basis: "100%",
                    children: (0, n.jsx)(d.l6P, {
                        label: "Simulcast Override",
                        value: f.Ay.getSimulcastDebugOverride(S, r),
                        onSelectionChange: (e) => {
                            u.z0(S, r, e);
                        },
                        options: Object.values(C.r8).map((e) => ({ id: e, value: e, label: E[e] })),
                        selectionMode: "single",
                        fullWidth: !0,
                    }),
                }),
            });
    return (0, n.jsxs)(d.BJc, {
        gap: 16,
        children: [
            (0, n.jsx)(d.Heading, { variant: "heading-md/medium", children: L }),
            (0, n.jsx)(d.VQ0, {
                type: "top",
                look: "brand",
                selectedItem: k,
                onItemSelect: B,
                className: b.$H,
                children: M,
            }),
            U,
            H,
        ],
    });
}
