n.d(t, {
    p: () => j,
    s: () => v,
}),
    n(953529);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(79116),
    o = n(481060),
    c = n(313201),
    d = n(817460),
    u = n(723047),
    g = n(528027),
    m = n(686807),
    p = n(157018),
    f = n(828656),
    h = n(388032),
    b = n(28742);
function x(e) {
    let {
            guildId: t,
            emojiId: n,
            emojiName: l,
            title: s,
            description: c,
            targetType: d,
            index: u,
            dndName: m,
            onEdit: p,
            onMove: x,
            disabled: j = !1,
        } = e,
        v = i.useRef(null),
        _ = i.useRef(null),
        { drag: C, dragPreview: O, drop: y, isDragging: E } = (0, f.Z)(v, d, u, x);
    return (
        C(_),
        O(y(v)),
        (0, r.jsxs)("div", {
            ref: v,
            className: a()(b.card, {
                [b.cardDragging]: E,
                [b.disabled]: j,
            }),
            children: [
                (0, r.jsxs)("div", {
                    className: b.emojiWrapper,
                    children: [
                        (0, r.jsx)(g.Z, {
                            guildId: t,
                            emojiId: n,
                            emojiName: l,
                            className: b.emoji,
                        }),
                        !j &&
                            (0, r.jsx)("div", {
                                ref: _,
                                className: b.dragIconWrapper,
                                "data-dnd-name": m,
                                children: (0, r.jsx)(o.Vni, {
                                    size: "xs",
                                    color: "currentColor",
                                    className: b.dragIcon,
                                }),
                            }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: b.cardText,
                    children: [
                        (0, r.jsx)(o.Text, {
                            color: "header-primary",
                            variant: "text-md/semibold",
                            children: s,
                        }),
                        (0, r.jsx)(o.Text, {
                            color: "interactive-normal",
                            variant: "text-sm/normal",
                            children: c,
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: b.cardActions,
                    children:
                        !j &&
                        (0, r.jsx)(o.P3F, {
                            className: b.cardActionButton,
                            onClick: j ? void 0 : p,
                            "aria-label": h.intl.string(h.t.Eoo8h6),
                            "aria-disabled": j,
                            children: (0, r.jsx)(o.vdY, {
                                size: "xs",
                                color: "currentColor",
                                className: b.cardActionButtonIcon,
                            }),
                        }),
                }),
            ],
        })
    );
}
function j(e) {
    let { benefits: t, onEdit: n, onMove: l, guildId: o } = e,
        g = (0, c.Dt)(),
        { isDragging: f } = (0, s.f)((e) => ({ isDragging: e.getItemType() === g })),
        h = (0, u.mY)();
    return 0 === t.length
        ? null
        : (0, r.jsx)("div", {
              className: a()(b.container, { [b.isDragging]: f }),
              children: t.map((e, t) =>
                  (0, r.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              t > 0 ? (0, r.jsx)("div", { className: b.divider }) : null,
                              (0, r.jsx)(x, {
                                  guildId: o,
                                  emojiId: e.emoji_id,
                                  emojiName: e.emoji_name,
                                  title: (0, m.Z)(e),
                                  description: e.description,
                                  targetType: g,
                                  index: t,
                                  dndName: (0, p.Z)(e),
                                  onEdit: () => n(t),
                                  onMove: l,
                                  disabled: h,
                              }),
                          ],
                      },
                      (0, d.ab)(e),
                  ),
              ),
          });
}
function v(e) {
    let { onClick: t, children: n, disabled: i = !1 } = e;
    return (0, r.jsx)(o.P3F, {
        className: b.container,
        onClick: i ? void 0 : t,
        "aria-disabled": i,
        children: (0, r.jsxs)("div", {
            className: a()(b.card, b.addBenefit, { [b.disabled]: i }),
            children: [
                (0, r.jsx)("div", {
                    className: b.emojiWrapper,
                    children: (0, r.jsx)(o.oFk, {
                        size: "xs",
                        color: "currentColor",
                        className: b.addBenefitIcon,
                    }),
                }),
                (0, r.jsx)("div", {
                    className: b.cardText,
                    children: (0, r.jsx)(o.Text, {
                        color: "header-primary",
                        variant: "text-md/normal",
                        children: n,
                    }),
                }),
            ],
        }),
    });
}
