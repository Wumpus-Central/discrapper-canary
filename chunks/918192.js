s.d(n, { Bw: () => E, ld: () => b });
var e = s(477900);
s(582128);
var r = s(17928),
    l = s(661531),
    i = s(428678),
    a = s(834730),
    c = s(939249),
    o = s(952270),
    d = s(831544),
    x = s(778712),
    m = s(364522),
    u = s(442433),
    j = s(85448),
    h = s(994500),
    f = s(427262),
    g = s(312006),
    v = s(366098),
    k = s(375708),
    p = s(494392);
function E(t) {
    let { channelId: n } = t;
    return (0, e.jsx)(N, { channelId: n });
}
function N(t) {
    let { channelId: n } = t,
        s = (0, v.D3)(n),
        r = (0, v.Xk)(n);
    if (0 === s && 0 === r) return null;
    function d(t) {
        (0, u.jA)(t, (t) => (0, e.jsx)(A, { ...t, channelId: n }), { position: "left", align: "bottom" });
    }
    return s > 0 && r > 0
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
                    (0, e.jsx)(o.EyeSlashIcon, { size: "lg" }),
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
                        children: k.intl.format(k.t["6Tcdt7"], { number: s }),
                    }),
                    (0, e.jsx)(c.D, { className: p.R5, onClick: d, children: k.intl.string(k.t.rUEjBe) }),
                ],
            });
}
function b(t) {
    let { user: n, showStatus: s, speaker: l, channelId: i } = t,
        c = (0, r.bG)([g.Ay], () => g.Ay.isModerator(n.id, i)),
        o = (0, r.bG)([h.A], () => h.A.isBlocked(n.id)),
        m = null;
    return (
        s && (m = l ? k.intl.string(k.t.LqMmG2) : c ? k.intl.string(k.t.GMZqSi) : k.intl.string(k.t.suRApw)),
        (0, e.jsxs)("div", {
            className: p.kQ,
            children: [
                (0, e.jsx)(
                    j.Ay,
                    {
                        src: n.getAvatarURL(null, 32),
                        size: x._3.SIZE_32,
                        muted: !1,
                        deafen: !1,
                        speaking: !1,
                        ringing: !1,
                        renderIcon: l
                            ? function () {
                                  return (0, e.jsx)(d.MicrophoneIcon, {
                                      size: "md",
                                      color: "currentColor",
                                      className: p.Kk,
                                  });
                              }
                            : null,
                    },
                    n.id,
                ),
                (0, e.jsxs)("div", {
                    className: p.eF,
                    children: [
                        (0, e.jsxs)("div", {
                            className: p.Xh,
                            children: [
                                (0, e.jsx)(a.E, {
                                    variant: s ? "text-md/normal" : "text-sm/normal",
                                    children: f.Ay.getName(n),
                                }),
                                (0, e.jsx)(a.E, {
                                    variant: s ? "text-md/normal" : "text-sm/normal",
                                    color: "text-subtle",
                                    children: `#${n.discriminator}`,
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
    let { channelId: n } = t,
        s = (0, v.mT)(n),
        r = (0, v.Iv)(n);
    return (0, e.jsx)(m.Ip, {
        className: p.kL,
        children: [...s, ...r].map((t) => {
            let { user: s } = t;
            return (0, e.jsx)(b, { user: s, channelId: n }, s.id);
        }),
    });
}
