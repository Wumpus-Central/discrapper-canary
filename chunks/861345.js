n.d(t, {
    p: () => j,
    s: () => v,
}),
    n(953529);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(323946),
    o = n(481060),
    c = n(313201),
    d = n(817460),
    u = n(723047),
    m = n(528027),
    g = n(686807),
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
            dndName: g,
            onEdit: p,
            onMove: x,
            disabled: j = !1,
        } = e,
        v = i.useRef(null),
        _ = i.useRef(null),
        { drag: O, dragPreview: y, drop: C, isDragging: N } = (0, f.Z)(v, d, u, x);
    return (
        O(_),
        y(C(v)),
        (0, r.jsxs)("div", {
            ref: v,
            className: a()(b.card, {
                [b.cardDragging]: N,
                [b.disabled]: j,
            }),
            children: [
                (0, r.jsxs)("div", {
                    className: b.emojiWrapper,
                    children: [
                        (0, r.jsx)(m.Z, {
                            guildId: t,
                            emojiId: n,
                            emojiName: l,
                            className: b.emoji,
                        }),
                        !j &&
                            (0, r.jsx)("div", {
                                ref: _,
                                className: b.dragIconWrapper,
                                "data-dnd-name": g,
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
                            "aria-label": h.intl.string(h.t.Eoo8h4),
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
        m = (0, c.Dt)(),
        { isDragging: f } = (0, s.f)((e) => ({ isDragging: e.getItemType() === m })),
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
                                  title: (0, g.Z)(e),
                                  description: e.description,
                                  targetType: m,
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
