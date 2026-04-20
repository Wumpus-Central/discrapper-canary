n.d(t, { A: () => x });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(397927),
    r = n(385612),
    o = n(287809),
    c = n(486020),
    d = n(652215),
    u = n(339984),
    m = n(985018),
    p = n(578673);
function x(e) {
    let { pendingGlobalName: t, onGlobalNameChange: n, pendingBio: x, onBioChange: g } = e,
        h = (0, s.bG)([o.default], () => o.default.getCurrentUser()),
        C = null != h ? c.Ay.getUserAvatarURL(h, !0, 80) : void 0,
        N = l.useCallback(() => {
            (0, r.XD)({ uploadType: u.HL.AVATAR });
        }, []);
    return (0, i.jsxs)("div", {
        className: p.eE,
        children: [
            (0, i.jsx)("div", {
                className: p.Zk,
                children: (0, i.jsx)(a.vN3, {
                    children: (0, i.jsxs)(a.DUT, {
                        className: p.nz,
                        onClick: N,
                        role: "button",
                        "aria-label": m.intl.string(m.t["70lEQe"]),
                        children: [
                            null != C
                                ? (0, i.jsx)("img", { src: C, alt: "", className: p.uV })
                                : (0, i.jsx)("div", {
                                      className: p.GT,
                                      children: (0, i.jsx)(a.xpe, { size: "md", color: "currentColor" }),
                                  }),
                            (0, i.jsx)("div", {
                                className: p.Nd,
                                children: (0, i.jsx)(a.xpe, { size: "sm", color: "currentColor" }),
                            }),
                        ],
                    }),
                }),
            }),
            (0, i.jsx)(a.D0$, {
                label: m.intl.string(m.t["9AjdkD"]),
                children: (0, i.jsx)(a.ksK, { value: t, onChange: n, placeholder: h?.username, maxLength: 32 }),
            }),
            (0, i.jsx)(a.fs1, {
                label: m.intl.string(m.t["61W33d"]),
                value: x,
                onChange: g,
                maxLength: d.NA2,
                showCharacterCount: !0,
                rows: 3,
            }),
        ],
    });
}
