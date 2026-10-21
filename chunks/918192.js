s.d(n, { Bw: () => p, ld: () => b });
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
    v = s(312006),
    g = s(366098),
    E = s(105292),
    k = s(494392);
function p(t) {
    let { channelId: n } = t;
    return (0, e.jsx)(N, { channelId: n });
}
function N(t) {
    let { channelId: n } = t,
        s = (0, g.D3)(n),
        r = (0, g.Xk)(n);
    if (0 === s && 0 === r) return null;
    function d(t) {
        (0, u.jA)(t, (t) => (0, e.jsx)(A, { ...t, channelId: n }), { position: "left", align: "bottom" });
    }
    return s > 0 && r > 0
        ? (0, e.jsxs)("div", {
              className: k.jC,
              children: [
                  (0, e.jsx)(i.K, { size: "lg", color: l.A.unsafe_rawColors.RED_400.css }),
                  (0, e.jsx)(a.E, {
                      variant: "text-xs/normal",
                      color: "text-default",
                      children: E.intl.string(E.t["P/KFXz"]),
                  }),
                  (0, e.jsx)(c.D, { className: k.R5, onClick: d, children: E.intl.string(E.t.rUEjBe) }),
              ],
          })
        : r > 0
          ? (0, e.jsxs)("div", {
                className: k.jC,
                children: [
                    (0, e.jsx)(o.EyeSlashIcon, { size: "lg" }),
                    (0, e.jsx)(a.E, {
                        variant: "text-xs/normal",
                        color: "text-default",
                        children: E.intl.format(E.t.Ri3o33, { number: r }),
                    }),
                    (0, e.jsx)(c.D, { className: k.R5, onClick: d, children: E.intl.string(E.t.rUEjBe) }),
                ],
            })
          : (0, e.jsxs)("div", {
                className: k.jC,
                children: [
                    (0, e.jsx)(i.K, { size: "lg", color: l.A.unsafe_rawColors.RED_400.css }),
                    (0, e.jsx)(a.E, {
                        variant: "text-xs/normal",
                        color: "text-default",
                        children: E.intl.format(E.t["6Tcdt7"], { number: s }),
                    }),
                    (0, e.jsx)(c.D, { className: k.R5, onClick: d, children: E.intl.string(E.t.rUEjBe) }),
                ],
            });
}
function b(t) {
    let { user: n, showStatus: s, speaker: l, channelId: i } = t,
        c = (0, r.bG)([v.Ay], () => v.Ay.isModerator(n.id, i)),
        o = (0, r.bG)([h.A], () => h.A.isBlocked(n.id)),
        m = null;
    return (
        s && (m = l ? E.intl.string(E.t.LqMmG2) : c ? E.intl.string(E.t.GMZqSi) : E.intl.string(E.t.suRApw)),
        (0, e.jsxs)("div", {
            className: k.kQ,
            children: [
                (0, e.jsx)(
                    j.Ay,
                    {
                        src: n.getAvatarURL(null, 32),
                        size: x._3.SIZE_32,
                        muted: !1,
                        deafen: !1,
                        ringing: !1,
                        renderIcon: l
                            ? function () {
                                  return (0, e.jsx)(d.MicrophoneIcon, {
                                      size: "md",
                                      color: "currentColor",
                                      className: k.Kk,
                                  });
                              }
                            : null,
                    },
                    n.id,
                ),
                (0, e.jsxs)("div", {
                    className: k.eF,
                    children: [
                        (0, e.jsxs)("div", {
                            className: k.Xh,
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
                            className: k.Xh,
                            children: [
                                (0, e.jsx)(a.E, {
                                    variant: "text-xs/normal",
                                    color: o ? "text-feedback-critical" : "text-default",
                                    children: o ? E.intl.string(E.t["4bDptI"]) : E.intl.string(E.t.tFY5Zb),
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
        s = (0, g.mT)(n),
        r = (0, g.Iv)(n);
    return (0, e.jsx)(m.Ip, {
        className: k.kL,
        children: [...s, ...r].map((t) => {
            let { user: s } = t;
            return (0, e.jsx)(b, { user: s, channelId: n }, s.id);
        }),
    });
}
