n.d(s, { Bw: () => E, ld: () => b });
var e = n(627968);
n(64700);
var r = n(17928),
    l = n(661531),
    i = n(428678),
    a = n(834730),
    c = n(939249),
    o = n(952270),
    d = n(831544),
    x = n(778712),
    m = n(364522),
    u = n(442433),
    j = n(85448),
    h = n(994500),
    f = n(427262),
    g = n(312006),
    v = n(366098),
    k = n(375708),
    p = n(195695);
function E(t) {
    let { channelId: s } = t;
    return (0, e.jsx)(N, { channelId: s });
}
function N(t) {
    let { channelId: s } = t,
        n = (0, v.D3)(s),
        r = (0, v.Xk)(s);
    if (0 === n && 0 === r) return null;
    function d(t) {
        (0, u.jA)(t, (t) => (0, e.jsx)(A, { ...t, channelId: s }), { position: "left", align: "bottom" });
    }
    return n > 0 && r > 0
        ? (0, e.jsxs)("div", {
              className: p.jC,
              children: [
                  (0, e.jsx)(i.K, { size: "lg", color: l.A.unsafe_rawColors.RED_400.css }),
                  (0, e.jsx)(a.E, {
                      variant: "text-xs/normal",
                      color: "text-default",
                      children: k.intl.string(k.t["P/KFXz"]),
                  }),
                  (0, e.jsx)(c.D, { className: p.R5, onClick: d, children: k.intl.string(k.t.rUEjBe) }),
              ],
          })
        : r > 0
          ? (0, e.jsxs)("div", {
                className: p.jC,
                children: [
                    (0, e.jsx)(o.G, { size: "lg" }),
                    (0, e.jsx)(a.E, {
                        variant: "text-xs/normal",
                        color: "text-default",
                        children: k.intl.format(k.t.Ri3o33, { number: r }),
                    }),
                    (0, e.jsx)(c.D, { className: p.R5, onClick: d, children: k.intl.string(k.t.rUEjBe) }),
                ],
            })
          : (0, e.jsxs)("div", {
                className: p.jC,
                children: [
                    (0, e.jsx)(i.K, { size: "lg", color: l.A.unsafe_rawColors.RED_400.css }),
                    (0, e.jsx)(a.E, {
                        variant: "text-xs/normal",
                        color: "text-default",
                        children: k.intl.format(k.t["6Tcdt7"], { number: n }),
                    }),
                    (0, e.jsx)(c.D, { className: p.R5, onClick: d, children: k.intl.string(k.t.rUEjBe) }),
                ],
            });
}
function b(t) {
    let { user: s, showStatus: n, speaker: l, channelId: i } = t,
        c = (0, r.bG)([g.Ay], () => g.Ay.isModerator(s.id, i)),
        o = (0, r.bG)([h.A], () => h.A.isBlocked(s.id)),
        m = null;
    return (
        n && (m = l ? k.intl.string(k.t.LqMmG2) : c ? k.intl.string(k.t.GMZqSi) : k.intl.string(k.t.suRApw)),
        (0, e.jsxs)("div", {
            className: p.kQ,
            children: [
                (0, e.jsx)(
                    j.A,
                    {
                        src: s.getAvatarURL(null, 32),
                        size: x._3.SIZE_32,
                        muted: !1,
                        deafen: !1,
                        speaking: !1,
                        ringing: !1,
                        renderIcon: l
                            ? function () {
                                  return (0, e.jsx)(d.c, { size: "md", color: "currentColor", className: p.Kk });
                              }
                            : null,
                    },
                    s.id,
                ),
                (0, e.jsxs)("div", {
                    className: p.eF,
                    children: [
                        (0, e.jsxs)("div", {
                            className: p.Xh,
                            children: [
                                (0, e.jsx)(a.E, {
                                    variant: n ? "text-md/normal" : "text-sm/normal",
                                    children: f.Ay.getName(s),
                                }),
                                (0, e.jsx)(a.E, {
                                    variant: n ? "text-md/normal" : "text-sm/normal",
                                    color: "text-subtle",
                                    children: `#${s.discriminator}`,
                                }),
                            ],
                        }),
                        (0, e.jsxs)("div", {
                            className: p.Xh,
                            children: [
                                (0, e.jsx)(a.E, {
                                    variant: "text-xs/normal",
                                    color: o ? "text-feedback-critical" : "text-default",
                                    children: o ? k.intl.string(k.t["4bDptI"]) : k.intl.string(k.t.tFY5Zb),
                                }),
                                (0, e.jsxs)(a.E, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: ["| ", m],
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
}
function A(t) {
    let { channelId: s } = t,
        n = (0, v.mT)(s),
        r = (0, v.Iv)(s);
    return (0, e.jsx)(m.Ip, {
        className: p.kL,
        children: [...n, ...r].map((t) => {
            let { user: n } = t;
            return (0, e.jsx)(b, { user: n, channelId: s }, n.id);
        }),
    });
}
