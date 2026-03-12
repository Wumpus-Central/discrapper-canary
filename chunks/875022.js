n.d(e, { A: () => h });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(397927),
    c = n(775602),
    d = n(607470),
    u = n(351182),
    m = n(891260),
    x = n(950158);
function h(t) {
    let { mediaUrls: e, isSuccess: n, transitionState: s, onClose: h, children: g } = t,
        p = (0, r.bG)([c.A], () => c.A.useReducedMotion),
        [f, b] = (0, i.useState)("entry"),
        [j, v] = (0, i.useState)("entry"),
        C = (0, i.useRef)(null),
        y = (0, i.useCallback)(() => {
            "entry" === f && (b("idle"), v("idle"), C.current?.play());
        }, [f]),
        A = (0, i.useCallback)(async () => {
            "exit" !== f && (b("exit"), await new Promise((t) => setTimeout(t, 175)), await h());
        }, [f, h]),
        S = s === o.ip4.EXITING;
    if (
        !p &&
        n &&
        null != e.activationEntry &&
        null != e.activationIdle &&
        null != e.celebrationEntry &&
        null != e.celebrationIdle
    ) {
        let t =
                "idle" === j
                    ? { type: "video", src: e.activationIdle, fallbackImageSrc: m.A, loop: !0 }
                    : { type: "video", src: e.activationEntry, fallbackImageSrc: m.A, loop: !1 },
            n = "exit" === f || S;
        return (0, l.jsxs)("div", {
            children: [
                (0, l.jsxs)("div", {
                    className: a()(u.j, { [u.Xn]: n }),
                    children: [
                        (0, l.jsx)(d.A, {
                            playsInline: !0,
                            muted: !0,
                            autoPlay: !0,
                            onEnded: y,
                            className: a()(u.Ki, "entry" === f ? u.RK : u.R),
                            children: (0, l.jsx)("source", { src: e.celebrationEntry }),
                        }),
                        (0, l.jsx)(d.A, {
                            ref: C,
                            playsInline: !0,
                            muted: !0,
                            loop: !0,
                            className: a()(u.Ki, "idle" === f ? u.RK : u.R),
                            children: (0, l.jsx)("source", { src: e.celebrationIdle }),
                        }),
                    ],
                }),
                (0, l.jsx)("div", { className: n ? u.aO : u.ws, children: g(t, A) }),
            ],
        });
    }
    let N = { type: "image", src: m.A, aspectRatio: "16/9" };
    return (0, l.jsxs)(l.Fragment, {
        children: [!p && !S && (0, l.jsx)("img", { src: x.A, alt: "", className: u.hK }), g(N, h)],
    });
}
