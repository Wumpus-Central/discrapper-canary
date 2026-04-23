a.d(t, { default: () => h });
var n = a(627968);
a(64700);
var r = a(821609),
    i = a(43594),
    s = a(523084),
    o = a(722523),
    l = a(490557),
    d = a(772707),
    c = a(834730),
    u = a(503852),
    p = a(689906),
    m = a(743569),
    _ = a(568065),
    f = a(853513),
    x = a(985018);
function v(e) {
    let { guildId: t, powerup: a, onClose: r, ...i } = e,
        s = _.HO.has(a.skuId),
        o = (0, p.A)(t, a);
    (0, u.Z)(t, a, u.q.DETAIL);
    let l =
            a.type === _.o9.LEVEL
                ? { type: "rive", rive: m.T[a.skuId], aspectRatio: "16/9" }
                : { type: "image", src: a.animatedImageUrl ?? a.staticImageUrl ?? "", aspectRatio: "16/9" },
        v = x.intl.formatToPlainString(f.default.lFuOFF, { perkName: a.title }),
        g = s
            ? [
                  {
                      text: x.intl.string(f.default.g5Ds69),
                      variant: "primary",
                      size: "md",
                      onClick: (e) => {
                          o?.(e), r();
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
    return (0, n.jsx)(d.k, {
        graphic: l,
        title: v,
        actions: g,
        onClose: r,
        ...i,
        children:
            s &&
            (0, n.jsx)(c.E, {
                variant: "text-md/normal",
                children: x.intl.formatToPlainString(f.default.y3wHot, { perkName: a.title }),
            }),
    });
}
var g = a(372165);
function h(e) {
    let { guildId: t, powerup: a, ...d } = e;
    if ("control" === (0, i.D)("GuildPowerupActivateModalExperimentWrapper")) {
        let e = _.HO.has(a.skuId),
            i = e ? x.intl.formatToPlainString(f.default.y3wHot, { perkName: a.title }) : void 0;
        return (0, n.jsx)(s.A, {
            title: x.intl.formatToPlainString(f.default.lFuOFF, { perkName: a.title }),
            description: i,
            image: (0, n.jsx)(l.l, { className: g.Sl, powerup: a }),
            button: e
                ? (0, n.jsx)(o.GU, { className: g.x6, guildId: t, powerup: a, onClick: d.onClose })
                : (0, n.jsx)("div", {
                      "data-button-hoisted-classname-wrapper": !0,
                      className: g.x6,
                      children: (0, n.jsx)(r.$, {
                          variant: "primary",
                          text: x.intl.string(x.t.cpT0Cq),
                          onClick: d.onClose,
                      }),
                  }),
            ...d,
        });
    }
    return (0, n.jsx)(v, { guildId: t, powerup: a, ...d });
}
