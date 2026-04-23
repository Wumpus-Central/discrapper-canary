n.d(t, { A: () => b });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(187322),
    r = n(939249),
    o = n(332461),
    c = n(452027),
    d = n(292666),
    u = n(260598),
    p = n(385612),
    m = n(287809),
    x = n(486020),
    g = n(652215),
    h = n(339984),
    C = n(985018),
    N = n(578673);
function b(e) {
    let { pendingGlobalName: t, onGlobalNameChange: n, pendingBio: b, onBioChange: j } = e,
        E = (0, s.bG)([m.default], () => m.default.getCurrentUser()),
        A = null != E ? x.Ay.getUserAvatarURL(E, !0, 80) : void 0,
        v = l.useCallback(() => {
            (0, p.XD)({ uploadType: h.HL.AVATAR });
        }, []);
    return (0, i.jsxs)("div", {
        className: N.eE,
        children: [
            (0, i.jsx)("div", {
                className: N.Zk,
                children: (0, i.jsx)(a.vN, {
                    children: (0, i.jsxs)(r.D, {
                        className: N.nz,
                        onClick: v,
                        role: "button",
                        "aria-label": C.intl.string(C.t["70lEQe"]),
                        children: [
                            null != A
                                ? (0, i.jsx)("img", { src: A, alt: "", className: N.uV })
                                : (0, i.jsx)("div", {
                                      className: N.GT,
                                      children: (0, i.jsx)(o.x, { size: "md", color: "currentColor" }),
                                  }),
                            (0, i.jsx)("div", {
                                className: N.Nd,
                                children: (0, i.jsx)(o.x, { size: "sm", color: "currentColor" }),
                            }),
                        ],
                    }),
                }),
            }),
            (0, i.jsx)(c.D, {
                label: C.intl.string(C.t["9AjdkD"]),
                children: (0, i.jsx)(d.k, { value: t, onChange: n, placeholder: E?.username, maxLength: 32 }),
            }),
            (0, i.jsx)(u.f, {
                label: C.intl.string(C.t["61W33d"]),
                value: b,
                onChange: j,
                maxLength: g.NA2,
                showCharacterCount: !0,
                rows: 3,
            }),
        ],
    });
}
