n.d(t, { $: () => I, n: () => C });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(688807),
    o = n(772838),
    d = n(834730),
    c = n(939249),
    u = n(22231),
    m = n(245604),
    g = n(915089),
    h = n(500345),
    x = n(11351),
    _ = n(659612),
    p = n(898612),
    A = n(327325),
    E = n(935206),
    f = n(985018),
    j = n(94792);
function N(e) {
    let {
            guildId: t,
            emojiId: n,
            emojiName: s,
            title: a,
            description: m,
            targetType: g,
            index: h,
            dndName: x,
            onEdit: p,
            onMove: A,
            disabled: N = !1,
        } = e,
        I = l.useRef(null),
        C = l.useRef(null),
        { drag: b, dragPreview: v, drop: S, isDragging: T } = (0, E.A)(I, g, h, A);
    return (
        b(C),
        v(S(I)),
        (0, i.jsxs)("div", {
            ref: I,
            className: r()(j.Nr, { [j.wy]: T, [j.r9]: N }),
            children: [
                (0, i.jsxs)("div", {
                    className: j.kV,
                    children: [
                        (0, i.jsx)(_.A, { guildId: t, emojiId: n, emojiName: s, className: j.Zg }),
                        !N &&
                            (0, i.jsx)("div", {
                                ref: C,
                                className: j.$p,
                                "data-dnd-name": x,
                                children: (0, i.jsx)(o.W, { size: "xs", color: "currentColor", className: j.co }),
                            }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: j.O,
                    children: [
                        (0, i.jsx)(d.E, { color: "text-strong", variant: "text-md/semibold", children: a }),
                        (0, i.jsx)(d.E, { color: "interactive-text-default", variant: "text-sm/normal", children: m }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: j.eB,
                    children:
                        !N &&
                        (0, i.jsx)(c.D, {
                            className: j.xQ,
                            onClick: p,
                            "aria-label": f.intl.string(f.t.Eoo8h6),
                            "aria-disabled": N,
                            children: (0, i.jsx)(u.R, { size: "xs", color: "currentColor", className: j.a2 }),
                        }),
                }),
            ],
        })
    );
}
function I(e) {
    let { benefits: t, onEdit: n, onMove: s, guildId: o } = e,
        d = (0, g.GV)(),
        { isDragging: c } = (0, a.V)((e) => ({ isDragging: e.getItemType() === d })),
        u = (0, x.gN)();
    return 0 === t.length
        ? null
        : (0, i.jsx)("div", {
              className: r()(j.kL, { [j.Id]: c }),
              children: t.map((e, t) =>
                  (0, i.jsxs)(
                      l.Fragment,
                      {
                          children: [
                              t > 0 ? (0, i.jsx)("div", { className: j.yF }) : null,
                              (0, i.jsx)(N, {
                                  guildId: o,
                                  emojiId: e.emoji_id,
                                  emojiName: e.emoji_name,
                                  title: (0, p.A)(e),
                                  description: e.description,
                                  targetType: d,
                                  index: t,
                                  dndName: (0, A.A)(e),
                                  onEdit: () => n(t),
                                  onMove: s,
                                  disabled: u,
                              }),
                          ],
                      },
                      (0, h.nh)(e),
                  ),
              ),
          });
}
function C(e) {
    let { onClick: t, children: n, disabled: l = !1 } = e;
    return (0, i.jsx)(c.D, {
        className: j.kL,
        onClick: l ? void 0 : t,
        "aria-disabled": l,
        children: (0, i.jsxs)("div", {
            className: r()(j.Nr, j.xB, { [j.r9]: l }),
            children: [
                (0, i.jsx)("div", {
                    className: j.kV,
                    children: (0, i.jsx)(m.U, { size: "xs", color: "currentColor", className: j.Ak }),
                }),
                (0, i.jsx)("div", {
                    className: j.O,
                    children: (0, i.jsx)(d.E, { color: "text-strong", variant: "text-md/normal", children: n }),
                }),
            ],
        }),
    });
}
