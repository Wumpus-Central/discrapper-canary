n.d(t, {
    p: () => j,
    s: () => v,
}),
    n(953529);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(85707),
    o = n(481060),
    c = n(313201),
    d = n(817460),
    u = n(723047),
    g = n(528027),
    f = n(686807),
    m = n(157018),
    b = n(828656),
    p = n(388032),
    h = n(851132);
function x(e) {
    let {
            guildId: t,
            emojiId: n,
            emojiName: l,
            title: s,
            description: c,
            targetType: d,
            index: u,
            dndName: f,
            onEdit: m,
            onMove: x,
            disabled: j = !1,
        } = e,
        v = i.useRef(null),
        O = i.useRef(null),
        { drag: C, dragPreview: y, drop: N, isDragging: E } = (0, b.Z)(v, d, u, x);
    return (
        C(O),
        y(N(v)),
        (0, r.jsxs)("div", {
            ref: v,
            className: a()(h.card, {
                [h.cardDragging]: E,
                [h.disabled]: j,
            }),
            children: [
                (0, r.jsxs)("div", {
                    className: h.emojiWrapper,
                    children: [
                        (0, r.jsx)(g.Z, {
                            guildId: t,
                            emojiId: n,
                            emojiName: l,
                            className: h.emoji,
                        }),
                        !j &&
                            (0, r.jsx)("div", {
                                ref: O,
                                className: h.dragIconWrapper,
                                "data-dnd-name": f,
                                children: (0, r.jsx)(o.Vni, {
                                    size: "xs",
                                    color: "currentColor",
                                    className: h.dragIcon,
                                }),
                            }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: h.cardText,
                    children: [
                        (0, r.jsx)(o.Text, {
                            color: "text-strong",
                            variant: "text-md/semibold",
                            children: s,
                        }),
                        (0, r.jsx)(o.Text, {
                            color: "interactive-text-default",
                            variant: "text-sm/normal",
                            children: c,
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: h.cardActions,
                    children:
                        !j &&
                        (0, r.jsx)(o.P3F, {
                            className: h.cardActionButton,
                            onClick: j ? void 0 : m,
                            "aria-label": p.intl.string(p.t.Eoo8h6),
                            "aria-disabled": j,
                            children: (0, r.jsx)(o.vdY, {
                                size: "xs",
                                color: "currentColor",
                                className: h.cardActionButtonIcon,
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
        { isDragging: b } = (0, s.f)((e) => ({ isDragging: e.getItemType() === g })),
        p = (0, u.mY)();
    return 0 === t.length
        ? null
        : (0, r.jsx)("div", {
              className: a()(h.container, { [h.isDragging]: b }),
              children: t.map((e, t) =>
                  (0, r.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              t > 0 ? (0, r.jsx)("div", { className: h.divider }) : null,
                              (0, r.jsx)(x, {
                                  guildId: o,
                                  emojiId: e.emoji_id,
                                  emojiName: e.emoji_name,
                                  title: (0, f.Z)(e),
                                  description: e.description,
                                  targetType: g,
                                  index: t,
                                  dndName: (0, m.Z)(e),
                                  onEdit: () => n(t),
                                  onMove: l,
                                  disabled: p,
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
        className: h.container,
        onClick: i ? void 0 : t,
        "aria-disabled": i,
        children: (0, r.jsxs)("div", {
            className: a()(h.card, h.addBenefit, { [h.disabled]: i }),
            children: [
                (0, r.jsx)("div", {
                    className: h.emojiWrapper,
                    children: (0, r.jsx)(o.oFk, {
                        size: "xs",
                        color: "currentColor",
                        className: h.addBenefitIcon,
                    }),
                }),
                (0, r.jsx)("div", {
                    className: h.cardText,
                    children: (0, r.jsx)(o.Text, {
                        color: "text-strong",
                        variant: "text-md/normal",
                        children: n,
                    }),
                }),
            ],
        }),
    });
}
