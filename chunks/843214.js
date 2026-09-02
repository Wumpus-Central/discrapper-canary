a.d(t, { default: () => v });
var i = a(477900);
a(582128);
var r = a(821609),
    n = a(43594),
    l = a(523084),
    o = a(722523),
    s = a(490557),
    u = a(772707),
    d = a(834730),
    p = a(503852),
    c = a(689906),
    m = a(743569),
    f = a(568065),
    g = a(25525),
    k = a(375708);
function I(e) {
    let { guildId: t, powerup: a, onClose: r, ...n } = e,
        l = f.HO.has(a.skuId),
        o = (0, c.A)(t, a);
    (0, p.Z)(t, a, p.q.DETAIL);
    let s =
            a.type === f.o9.LEVEL
                ? { type: "rive", rive: m.T[a.skuId], aspectRatio: "16/9" }
                : { type: "image", src: a.animatedImageUrl ?? a.staticImageUrl ?? "", aspectRatio: "16/9" },
        I = k.intl.formatToPlainString(g.default.lFuOFF, { perkName: a.title }),
        h = l
            ? [
                  {
                      text: k.intl.string(g.default.g5Ds69),
                      variant: "primary",
                      size: "md",
                      onClick: (e) => {
                          o?.(e), r();
                      },
                  },
              ]
            : [
                  {
                      text: k.intl.string(k.t.cpT0Cq),
                      variant: "primary",
                      size: "md",
                      onClick: () => {
                          r();
                      },
                  },
              ];
    return (0, i.jsx)(u.k, {
        graphic: s,
        title: I,
        actions: h,
        onClose: r,
        ...n,
        children:
            l &&
            (0, i.jsx)(d.E, {
                variant: "text-md/normal",
                children: k.intl.formatToPlainString(g.default.y3wHot, { perkName: a.title }),
            }),
    });
}
var h = a(823980);
function v(e) {
    let { guildId: t, powerup: a, ...u } = e;
    if ("control" === (0, n.D)("GuildPowerupActivateModalExperimentWrapper")) {
        let e = f.HO.has(a.skuId),
            n = e ? k.intl.formatToPlainString(g.default.y3wHot, { perkName: a.title }) : void 0;
        return (0, i.jsx)(l.A, {
            title: k.intl.formatToPlainString(g.default.lFuOFF, { perkName: a.title }),
            description: n,
            image: (0, i.jsx)(s.l, { className: h.Sl, powerup: a }),
            button: e
                ? (0, i.jsx)(o.GU, { className: h.x6, guildId: t, powerup: a, onClick: u.onClose })
                : (0, i.jsx)("div", {
                      "data-button-hoisted-classname-wrapper": !0,
                      className: h.x6,
                      children: (0, i.jsx)(r.$, {
                          variant: "primary",
                          text: k.intl.string(k.t.cpT0Cq),
                          onClick: u.onClose,
                      }),
                  }),
            ...u,
        });
    }
    return (0, i.jsx)(I, { guildId: t, powerup: a, ...u });
}
