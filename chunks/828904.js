n.d(t, {
    C6: () => R,
    HI: () => S,
}),
    n(321073),
    n(638769),
    n(896048);
var r = n(627968),
    a = n(64700),
    i = n(503698),
    l = n.n(i),
    s = n(23339),
    o = n(311907),
    d = n(397927),
    c = n(233545),
    u = n(684339),
    m = n(235986),
    p = n(401901),
    y = n(696451),
    h = n(430452),
    g = n(383501),
    A = n(412780),
    f = n(287809),
    v = n(427262),
    b = n(974175),
    C = n(731854),
    E = n(518959),
    x = n(473169);
let D = {
    [C.r8.NO_OVERRIDE]: "None",
    [C.r8.LOW]: "Low Quality Stream",
    [C.r8.HIGH]: "High Quality Stream",
};
function R(e) {
    let t = [],
        n = 0;
    for (
        e.length % 2 != 0 &&
        e.push(
            (0, r.jsx)(
                m.A,
                {
                    basis: "50%",
                    grow: 0,
                },
                n++,
            ),
        );
        e.length > 0;
    )
        t.push(
            (0, r.jsx)(
                m.A,
                {
                    basis: "50%",
                    grow: 0,
                    children: e.splice(0, 2),
                },
                n++,
            ),
        );
    return t;
}
let F = {
    ssrc: 1,
    codec: 2,
};
function S(e) {
    let {
            streams: t,
            context: n,
            mediaEngineConnectionId: i,
            userId: S,
            videoStreams: j,
            title: P,
            showUserInfo: N = !1,
            showSimulcastOverride: I = !1,
        } = e,
        [k, B] = a.useState("0"),
        w = (0, o.bG)([g.A], () => (N ? g.A.getGuildId() : null)),
        T = (0, o.bG)([f.default], () => (N && null != S ? f.default.getUser(S) : null)),
        L = (0, o.bG)([y.Ay], () => (N && null != w && null != S ? y.Ay.getNick(w, S) : null));
    if (null == t || (N && null == S) || 0 === t.length) return (0, r.jsx)(d.y$y, { type: d.y$y.Type.SPINNING_CIRCLE });
    let O = P;
    N && null != T && (O = "".concat(P, " \u2014 ").concat(null != L ? L : v.Ay.getName(T)));
    let M = t.map((e, t) => {
            let n, a;
            return (0, r.jsx)(
                d.VQ0.Item,
                {
                    id: t.toString(),
                    children:
                        ((n = (0, s.$G)(e.type)),
                        (a = ""),
                        "resolution" in e &&
                            null != e.resolution &&
                            0 !== e.resolution.width &&
                            0 !== e.resolution.height &&
                            (a = " (".concat(e.resolution.width, "x").concat(e.resolution.height, ")")),
                        n + a),
                },
                t.toString(),
            );
        }),
        G = Math.min(parseInt(k, 10), t.length - 1),
        H = t[G],
        U = (function (e, t, n, a, i) {
            let s,
                o = [];
            for (let t of Object.keys(e).sort((e, t) => {
                let n = F[e],
                    r = F[t];
                return n !== r
                    ? void 0 === n
                        ? 1
                        : void 0 === r
                          ? -1
                          : n - r
                    : A.iA[e] !== A.iA[t]
                      ? A.iA[e]
                          ? 1
                          : -1
                      : e > t
                        ? 1
                        : -1;
            })) {
                let n = e[t];
                b.R[t] ||
                    void 0 === n ||
                    o.push(
                        (0, r.jsx)(
                            b.q7,
                            {
                                section: a,
                                label: t,
                                value: n,
                            },
                            t,
                        ),
                    );
            }
            return (0, r.jsxs)(
                "div",
                {
                    className: x.C2,
                    children: [
                        "video" === e.type &&
                            null != n &&
                            null != a &&
                            null != i &&
                            (null != (s = i.get(n, a, e.ssrc))
                                ? (0, r.jsx)("div", {
                                      className: l()(E.tN, x.C2),
                                      children: (0, r.jsx)(p.A, {
                                          streamId: s,
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
                "".concat(e.type, " + ").concat(e.ssrc),
            );
        })(H, 0, i, S, j),
        q =
            I &&
            "video" === H.type &&
            null != i &&
            null != S &&
            null != j &&
            (0, r.jsx)(m.A, {
                className: x.SX,
                children: (0, r.jsx)(m.A.Child, {
                    basis: "100%",
                    children: (0, r.jsx)(d.l6P, {
                        label: "Simulcast Override",
                        value: A.Ay.getSimulcastDebugOverride(S, n),
                        onSelectionChange: (e) => {
                            c.z0(S, n, e);
                        },
                        options: Object.values(C.r8).map((e) => ({
                            id: e,
                            value: e,
                            label: D[e],
                        })),
                        selectionMode: "single",
                        fullWidth: !0,
                    }),
                }),
            });
    return (0, r.jsxs)(d.BJc, {
        gap: 16,
        children: [
            (0, r.jsx)(d.Heading, {
                variant: "heading-md/medium",
                children: O,
            }),
            (0, r.jsx)(d.VQ0, {
                type: "top",
                look: "brand",
                selectedItem: k,
                onItemSelect: B,
                className: E.$H,
                children: M,
            }),
            U,
            q,
        ],
    });
}
