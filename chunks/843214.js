i.d(e, { default: () => v });
var a = i(627968);
i(64700);
var r = i(821609),
    l = i(43594),
    n = i(523084),
    s = i(722523),
    o = i(490557),
    p = i(772707),
    d = i(834730),
    c = i(503852),
    u = i(689906),
    m = i(743569),
    k = i(568065),
    g = i(853513),
    x = i(375708);
function f(t) {
    let { guildId: e, powerup: i, onClose: r, ...l } = t,
        n = k.HO.has(i.skuId),
        s = (0, u.A)(e, i);
    (0, c.Z)(e, i, c.q.DETAIL);
    let o =
            i.type === k.o9.LEVEL
                ? { type: "rive", rive: m.T[i.skuId], aspectRatio: "16/9" }
                : { type: "image", src: i.animatedImageUrl ?? i.staticImageUrl ?? "", aspectRatio: "16/9" },
        f = x.intl.formatToPlainString(g.default.lFuOFF, { perkName: i.title }),
        h = n
            ? [
                  {
                      text: x.intl.string(g.default.g5Ds69),
                      variant: "primary",
                      size: "md",
                      onClick: (t) => {
                          s?.(t), r();
                      },
                  },
              ]
            : [
                  {
                      text: x.intl.string(x.t.cpT0Cq),
                      variant: "primary",
                      size: "md",
                      onClick: () => {
                          r();
                      },
                  },
              ];
    return (0, a.jsx)(p.k, {
        graphic: o,
        title: f,
        actions: h,
        onClose: r,
        ...l,
        children:
            n &&
            (0, a.jsx)(d.E, {
                variant: "text-md/normal",
                children: x.intl.formatToPlainString(g.default.y3wHot, { perkName: i.title }),
            }),
    });
}
var h = i(372165);
function v(t) {
    let { guildId: e, powerup: i, ...p } = t;
    if ("control" === (0, l.D)("GuildPowerupActivateModalExperimentWrapper")) {
        let t = k.HO.has(i.skuId),
            l = t ? x.intl.formatToPlainString(g.default.y3wHot, { perkName: i.title }) : void 0;
        return (0, a.jsx)(n.A, {
            title: x.intl.formatToPlainString(g.default.lFuOFF, { perkName: i.title }),
            description: l,
            image: (0, a.jsx)(o.l, { className: h.Sl, powerup: i }),
            button: t
                ? (0, a.jsx)(s.GU, { className: h.x6, guildId: e, powerup: i, onClick: p.onClose })
                : (0, a.jsx)("div", {
                      "data-button-hoisted-classname-wrapper": !0,
                      className: h.x6,
                      children: (0, a.jsx)(r.$, {
                          variant: "primary",
                          text: x.intl.string(x.t.cpT0Cq),
                          onClick: p.onClose,
                      }),
                  }),
            ...p,
        });
    }
    return (0, a.jsx)(f, { guildId: e, powerup: i, ...p });
}
