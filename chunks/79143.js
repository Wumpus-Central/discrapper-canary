"use strict";
n.d(t, { $: () => f, n: () => j });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(688807),
    o = n(397927),
    d = n(915089),
    c = n(500345),
    u = n(11351),
    m = n(659612),
    g = n(898612),
    x = n(327325),
    h = n(935206),
    _ = n(985018),
    p = n(19737);
function A(e) {
    let {
            guildId: t,
            emojiId: n,
            emojiName: l,
            title: a,
            description: d,
            targetType: c,
            index: u,
            dndName: g,
            onEdit: x,
            onMove: A,
            disabled: f = !1,
        } = e,
        j = s.useRef(null),
        N = s.useRef(null),
        { drag: E, dragPreview: C, drop: T, isDragging: I } = (0, h.A)(j, c, u, A);
    return (
        E(N),
        C(T(j)),
        (0, i.jsxs)("div", {
            ref: j,
            className: r()(p.Nr, { [p.wy]: I, [p.r9]: f }),
            children: [
                (0, i.jsxs)("div", {
                    className: p.kV,
                    children: [
                        (0, i.jsx)(m.A, { guildId: t, emojiId: n, emojiName: l, className: p.Zg }),
                        !f &&
                            (0, i.jsx)("div", {
                                ref: N,
                                className: p.$p,
                                "data-dnd-name": g,
                                children: (0, i.jsx)(o.WP0, { size: "xs", color: "currentColor", className: p.co }),
                            }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: p.O,
                    children: [
                        (0, i.jsx)(o.Text, { color: "text-strong", variant: "text-md/semibold", children: a }),
                        (0, i.jsx)(o.Text, {
                            color: "interactive-text-default",
                            variant: "text-sm/normal",
                            children: d,
                        }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: p.eB,
                    children:
                        !f &&
                        (0, i.jsx)(o.DUT, {
                            className: p.xQ,
                            onClick: x,
                            "aria-label": _.intl.string(_.t.Eoo8h6),
                            "aria-disabled": f,
                            children: (0, i.jsx)(o.R2l, { size: "xs", color: "currentColor", className: p.a2 }),
                        }),
                }),
            ],
        })
    );
}
function f(e) {
    let { benefits: t, onEdit: n, onMove: l, guildId: o } = e,
        m = (0, d.GV)(),
        { isDragging: h } = (0, a.V)((e) => ({ isDragging: e.getItemType() === m })),
        _ = (0, u.gN)();
    return 0 === t.length
        ? null
        : (0, i.jsx)("div", {
              className: r()(p.kL, { [p.Id]: h }),
              children: t.map((e, t) =>
                  (0, i.jsxs)(
                      s.Fragment,
                      {
                          children: [
                              t > 0 ? (0, i.jsx)("div", { className: p.yF }) : null,
                              (0, i.jsx)(A, {
                                  guildId: o,
                                  emojiId: e.emoji_id,
                                  emojiName: e.emoji_name,
                                  title: (0, g.A)(e),
                                  description: e.description,
                                  targetType: m,
                                  index: t,
                                  dndName: (0, x.A)(e),
                                  onEdit: () => n(t),
                                  onMove: l,
                                  disabled: _,
                              }),
                          ],
                      },
                      (0, c.nh)(e),
                  ),
              ),
          });
}
function j(e) {
    let { onClick: t, children: n, disabled: s = !1 } = e;
    return (0, i.jsx)(o.DUT, {
        className: p.kL,
        onClick: s ? void 0 : t,
        "aria-disabled": s,
        children: (0, i.jsxs)("div", {
            className: r()(p.Nr, p.xB, { [p.r9]: s }),
            children: [
                (0, i.jsx)("div", {
                    className: p.kV,
                    children: (0, i.jsx)(o.U1e, { size: "xs", color: "currentColor", className: p.Ak }),
                }),
                (0, i.jsx)("div", {
                    className: p.O,
                    children: (0, i.jsx)(o.Text, { color: "text-strong", variant: "text-md/normal", children: n }),
                }),
            ],
        }),
    });
}
