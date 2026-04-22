r.d(t, { C6: () => j, HI: () => B }), r(321073);
var n = r(627968),
    i = r(64700),
    a = r(503698),
    o = r.n(a),
    l = r(23339),
    s = r(311907),
    d = r(691885),
    c = r(289873),
    u = r(761508),
    m = r(331322),
    p = r(534514),
    h = r(233545),
    y = r(684339),
    b = r(235986),
    g = r(401901),
    f = r(696451),
    A = r(430452),
    C = r(383501),
    v = r(412780),
    F = r(287809),
    x = r(427262),
    D = r(974175),
    E = r(731854),
    S = r(178116),
    R = r(373378);
let _ = { [E.r8.NO_OVERRIDE]: "None", [E.r8.LOW]: "Low Quality Stream", [E.r8.HIGH]: "High Quality Stream" };
function j(e) {
    let t = [],
        r = 0;
    for (e.length % 2 != 0 && e.push((0, n.jsx)(b.A, { basis: "50%", grow: 0 }, r++)); e.length > 0; )
        t.push((0, n.jsx)(b.A, { basis: "50%", grow: 0, children: e.splice(0, 2) }, r++));
    return t;
}
let I = { ssrc: 1, codec: 2 };
function B(e) {
    let {
            streams: t,
            context: r,
            mediaEngineConnectionId: a,
            userId: B,
            videoStreams: k,
            title: N,
            showUserInfo: P = !1,
            showSimulcastOverride: w = !1,
        } = e,
        [T, L] = i.useState("0"),
        G = (0, s.bG)([C.A], () => (P ? C.A.getGuildId() : null)),
        M = (0, s.bG)([F.default], () => (P && null != B ? F.default.getUser(B) : null)),
        U = (0, s.bG)([f.Ay], () => (P && null != G && null != B ? f.Ay.getNick(G, B) : null));
    if (null == t || (P && null == B) || 0 === t.length) return (0, n.jsx)(c.y, { type: c.y.Type.SPINNING_CIRCLE });
    let H = N;
    P && null != M && (H = `${N} — ${U ?? x.Ay.getName(M)}`);
    let q = t.map((e, t) => {
            let r, i;
            return (0, n.jsx)(
                u.V.Item,
                {
                    id: t.toString(),
                    children:
                        ((r = (0, l.$G)(e.type)),
                        (i = ""),
                        "resolution" in e &&
                            null != e.resolution &&
                            0 !== e.resolution.width &&
                            0 !== e.resolution.height &&
                            (i = ` (${e.resolution.width}x${e.resolution.height})`),
                        r + i),
                },
                t.toString(),
            );
        }),
        O = Math.min(parseInt(T, 10), t.length - 1),
        W = t[O],
        $ = (function (e, t, r, i) {
            let a,
                l = [];
            for (let t of Object.keys(e).sort((e, t) => {
                let r = I[e],
                    n = I[t];
                return r !== n
                    ? void 0 === r
                        ? 1
                        : void 0 === n
                          ? -1
                          : r - n
                    : v.iA[e] !== v.iA[t]
                      ? v.iA[e]
                          ? 1
                          : -1
                      : e > t
                        ? 1
                        : -1;
            })) {
                let i = e[t];
                D.R[t] || void 0 === i || l.push((0, n.jsx)(D.q7, { section: r, label: t, value: i }, t));
            }
            return (0, n.jsxs)(
                "div",
                {
                    className: R.C2,
                    children: [
                        "video" === e.type &&
                            null != t &&
                            null != r &&
                            null != i &&
                            (null != (a = i.get(t, r, e.ssrc))
                                ? (0, n.jsx)("div", {
                                      className: o()(S.tN, R.C2),
                                      children: (0, n.jsx)(g.A, {
                                          streamId: a,
                                          videoComponent: A.Ay.getMediaEngine().Video,
                                          paused: !1,
                                          videoSpinnerContext: y.u.REPLAY_VIDEO_STREAM,
                                          userId: r,
                                      }),
                                  })
                                : null),
                        j(l),
                    ],
                },
                `${e.type} + ${e.ssrc}`,
            );
        })(W, a, B, k),
        V =
            w &&
            "video" === W.type &&
            null != a &&
            null != B &&
            null != k &&
            r === E.x.DEFAULT &&
            (0, n.jsx)(b.A, {
                className: R.SX,
                children: (0, n.jsx)(b.A.Child, {
                    basis: "100%",
                    children: (0, n.jsx)(d.l, {
                        label: "Simulcast Override",
                        value: v.Ay.getSimulcastDebugOverride(B, r),
                        onSelectionChange: (e) => {
                            h.z0(B, r, e);
                        },
                        options: Object.values(E.r8).map((e) => ({ id: e, value: e, label: _[e] })),
                        selectionMode: "single",
                        fullWidth: !0,
                    }),
                }),
            });
    return (0, n.jsxs)(m.B, {
        gap: 16,
        children: [
            (0, n.jsx)(p.D, { variant: "heading-md/medium", children: H }),
            (0, n.jsx)(u.V, {
                type: "top",
                look: "brand",
                selectedItem: T,
                onItemSelect: L,
                className: S.$H,
                children: q,
            }),
            $,
            V,
        ],
    });
}
