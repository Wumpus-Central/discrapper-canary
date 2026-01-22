l.d(t, { A: () => S }), l(896048);
var r = l(627968),
    n = l(64700),
    i = l(503698),
    s = l.n(i),
    o = l(158954),
    a = l(827734),
    u = l(397927),
    d = l(210273),
    c = l(998418),
    f = l(890942),
    p = l(722523),
    m = l(634925),
    v = l(744201),
    A = l(867060),
    g = l(568065),
    x = l(652215),
    b = l(508155),
    h = l(333354),
    j = l(985018),
    _ = l(876380),
    E = l(206188);
function y(e) {
    let t,
        { active: l, nextActive: n, position: i } = e;
    return (
        (t = l && !1 !== n ? g.z0.FULL : l && !1 === n ? g.z0.HALF : g.z0.NONE),
        (0, r.jsxs)("div", {
            className: E.progressContainer,
            children: [
                (0, r.jsx)("div", { className: s()(E.progress, E[i], E[t]) }),
                (0, r.jsx)("div", {
                    className: s()(E.boostContainer, _.JD, {
                        [E.boostContainerActive]: l,
                        [_.vu]: l,
                    }),
                    children: (0, r.jsx)(u._Jp, {
                        size: "sm",
                        color: a.A.colors.ICON_STRONG,
                    }),
                }),
            ],
        })
    );
}
function I(e) {
    let { isActive: t, index: l } = e,
        { textColor: i, iconColor: s } = (0, v.A)(t),
        a = n.useMemo(() => {
            let e = b.t[l];
            if (null == e) return [];
            let t = e.tier === x.TVA.TIER_3 ? e.perks.slice(0, -1) : e.perks;
            return null == t
                ? void 0
                : t.map((e, t) => {
                      let n = (0, d.X)(e.perkIcon);
                      return (0, r.jsxs)(
                          "div",
                          {
                              className: E.perkRow,
                              children: [
                                  (0, r.jsx)(n, {
                                      color: s,
                                      size: "sm",
                                  }),
                                  (0, r.jsx)(o.EYj, {
                                      className: E.perkText,
                                      color: i,
                                      variant: "text-sm/medium",
                                      children: e.getCopy(),
                                  }),
                              ],
                          },
                          "perk-".concat(l, "-").concat(t),
                      );
                  });
        }, [l, s, i]);
    return (0, r.jsxs)("div", {
        className: E.perkRowContainer,
        children: [
            a,
            (0, r.jsx)("div", {
                className: E.perkRow,
                children: (0, r.jsx)(o.EYj, {
                    color: i,
                    variant: "text-sm/medium",
                    children: j.intl.string(h.default.nIj3LZ),
                }),
            }),
        ],
    });
}
function S(e) {
    let t,
        { guildId: l, index: i, powerup: s, nextPowerup: o } = e,
        a = (0, c.Ay)(l, s),
        u = (0, c.Ay)(l, o),
        d = a.type !== g.b_.INACTIVE,
        x = u.type !== g.b_.INACTIVE,
        b = a.type === g.b_.TIER_OVERRIDE_ACTIVATED,
        [h, j] = n.useState(void 0);
    (0, A.A)(h), (t = 0 === i ? g.At.START : null == o ? g.At.END : g.At.MIDDLE);
    let { textColor: _ } = (0, v.A)(d);
    return (0, r.jsxs)(m.h, {
        guildId: l,
        powerup: s,
        className: E.card,
        children: [
            (0, r.jsx)(y, {
                position: t,
                active: d,
                nextActive: null != o ? x : void 0,
            }),
            (0, r.jsx)(f.Ft, {
                title: s.title,
                textColor: _,
                footer:
                    !b &&
                    (0, r.jsx)(m.A, {
                        className: E.footer,
                        guildId: l,
                        powerup: s,
                    }),
                children: (0, r.jsx)(I, {
                    isActive: d,
                    index: i,
                }),
            }),
            !b &&
                (0, r.jsx)(f.kd, {
                    children: (0, r.jsx)(p.Ay, {
                        guildId: l,
                        powerup: s,
                        onError: j,
                    }),
                }),
        ],
    });
}
