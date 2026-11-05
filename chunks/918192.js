var t = r(477900);
r(582128);
var l = r(855986),
    e = r(646514),
    i = r(428678),
    a = r(834730),
    c = r(939249),
    o = r(952270),
    d = r(831544),
    m = r(778712),
    x = r(95362),
    u = r(442433),
    j = r(85448),
    h = r(994500),
    b = r(427262),
    f = r(312006),
    v = r(366098),
    g = r(792996),
    y = r(494392);
function E(n) {
    let { channelId: s } = n,
        r = (0, v.D3)(s),
        l = (0, v.Xk)(s);
    if (0 === r && 0 === l) return null;
    function d(n) {
        (0, u.jA)(n, (n) => (0, t.jsx)(p, { ...n, channelId: s }), { position: "left", align: "bottom" });
    }
    return r > 0 && l > 0
        ? (0, t.jsxs)("div", {
              className: y.jC,
              children: [
                  (0, t.jsx)(i.DenyIcon, { size: "lg", color: e.A.unsafe_rawColors.RED_400.css }),
                  (0, t.jsx)(a.E, {
                      variant: "body-xs/normal",
                      color: "text-default",
                      children: g.intl.string(g.t["P/KFXz"]),
                  }),
                  (0, t.jsx)(c.D, { className: y.R5, onClick: d, children: g.intl.string(g.t.rUEjBe) }),
              ],
          })
        : l > 0
          ? (0, t.jsxs)("div", {
                className: y.jC,
                children: [
                    (0, t.jsx)(o.EyeSlashIcon, { size: "lg" }),
                    (0, t.jsx)(a.E, {
                        variant: "body-xs/normal",
                        color: "text-default",
                        children: g.intl.format(g.t.Ri3o33, { number: l }),
                    }),
                    (0, t.jsx)(c.D, { className: y.R5, onClick: d, children: g.intl.string(g.t.rUEjBe) }),
                ],
            })
          : (0, t.jsxs)("div", {
                className: y.jC,
                children: [
                    (0, t.jsx)(i.DenyIcon, { size: "lg", color: e.A.unsafe_rawColors.RED_400.css }),
                    (0, t.jsx)(a.E, {
                        variant: "body-xs/normal",
                        color: "text-default",
                        children: g.intl.format(g.t["6Tcdt7"], { number: r }),
                    }),
                    (0, t.jsx)(c.D, { className: y.R5, onClick: d, children: g.intl.string(g.t.rUEjBe) }),
                ],
            });
}
function k(n) {
    let { user: s, showStatus: r, speaker: e, channelId: i } = n,
        c = (0, l.bG)([f.Ay], () => f.Ay.isModerator(s.id, i)),
        o = (0, l.bG)([h.A], () => h.A.isBlocked(s.id)),
        x = null;
    return (
        r && (x = e ? g.intl.string(g.t.LqMmG2) : c ? g.intl.string(g.t.GMZqSi) : g.intl.string(g.t.suRApw)),
        (0, t.jsxs)("div", {
            className: y.kQ,
            children: [
                (0, t.jsx)(
                    j.Ay,
                    {
                        src: s.getAvatarURL(null, 32),
                        size: m._3.SIZE_32,
                        muted: !1,
                        deafen: !1,
                        ringing: !1,
                        renderIcon: e
                            ? function () {
                                  return (0, t.jsx)(d.MicrophoneIcon, {
                                      size: "md",
                                      color: "currentColor",
                                      className: y.Kk,
                                  });
                              }
                            : null,
                    },
                    s.id,
                ),
                (0, t.jsxs)("div", {
                    className: y.eF,
                    children: [
                        (0, t.jsxs)("div", {
                            className: y.Xh,
                            children: [
                                (0, t.jsx)(a.E, {
                                    variant: r ? "body-md/normal" : "body-sm/normal",
                                    children: b.Ay.getName(s),
                                }),
                                (0, t.jsx)(a.E, {
                                    variant: r ? "body-md/normal" : "body-sm/normal",
                                    color: "text-subtle",
                                    children: `#${s.discriminator}`,
                                }),
                            ],
                        }),
                        (0, t.jsxs)("div", {
                            className: y.Xh,
                            children: [
                                (0, t.jsx)(a.E, {
                                    variant: "body-xs/normal",
                                    color: o ? "text-feedback-critical" : "text-default",
                                    children: o ? g.intl.string(g.t["4bDptI"]) : g.intl.string(g.t.tFY5Zb),
                                }),
                                (0, t.jsxs)(a.E, {
                                    variant: "body-xs/normal",
                                    color: "text-muted",
                                    children: ["| ", x],
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
}
function p(n) {
    let { channelId: s } = n,
        r = (0, v.mT)(s),
        l = (0, v.Iv)(s);
    return (0, t.jsx)(x.Ip, {
        className: y.kL,
        children: [...r, ...l].map((n) => {
            let { user: r } = n;
            return (0, t.jsx)(k, { user: r, channelId: s }, r.id);
        }),
    });
}
r.d(
    s,
    {},
    {
        Bw: function (n) {
            let { channelId: s } = n;
            return (0, t.jsx)(E, { channelId: s });
        },
        ld: k,
    },
);
