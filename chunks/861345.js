(n.d(t, {
    p: () => j,
    s: () => v
}),
    n(953529));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    s = n(952683),
    o = n(481060),
    c = n(313201),
    d = n(817460),
    u = n(723047),
    m = n(528027),
    g = n(686807),
    p = n(157018),
    h = n(828656),
    f = n(388032),
    x = n(492606);
function b(e) {
    let { guildId: t, emojiId: n, emojiName: l, title: s, description: c, targetType: d, index: u, dndName: g, onEdit: p, onMove: b, disabled: j = !1 } = e,
        v = i.useRef(null),
        _ = i.useRef(null),
        { drag: O, dragPreview: y, drop: C, isDragging: N } = (0, h.Z)(v, d, u, b);
    return (
        O(_),
        y(C(v)),
        (0, r.jsxs)('div', {
            ref: v,
            className: a()(x.card, {
                [x.cardDragging]: N,
                [x.disabled]: j
            }),
            children: [
                (0, r.jsxs)('div', {
                    className: x.emojiWrapper,
                    children: [
                        (0, r.jsx)(m.Z, {
                            guildId: t,
                            emojiId: n,
                            emojiName: l,
                            className: x.emoji
                        }),
                        !j &&
                            (0, r.jsx)('div', {
                                ref: _,
                                className: x.dragIconWrapper,
                                'data-dnd-name': g,
                                children: (0, r.jsx)(o.Vni, {
                                    size: 'xs',
                                    color: 'currentColor',
                                    className: x.dragIcon
                                })
                            })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: x.cardText,
                    children: [
                        (0, r.jsx)(o.Text, {
                            color: 'header-primary',
                            variant: 'text-md/semibold',
                            children: s
                        }),
                        (0, r.jsx)(o.Text, {
                            color: 'interactive-normal',
                            variant: 'text-sm/normal',
                            children: c
                        })
                    ]
                }),
                (0, r.jsx)('div', {
                    className: x.cardActions,
                    children:
                        !j &&
                        (0, r.jsx)(o.P3F, {
                            className: x.cardActionButton,
                            onClick: j ? void 0 : p,
                            'aria-label': f.intl.string(f.t.Eoo8h4),
                            'aria-disabled': j,
                            children: (0, r.jsx)(o.vdY, {
                                size: 'xs',
                                color: 'currentColor',
                                className: x.cardActionButtonIcon
                            })
                        })
                })
            ]
        })
    );
}
function j(e) {
    let { benefits: t, onEdit: n, onMove: l, guildId: o } = e,
        m = (0, c.Dt)(),
        { isDragging: h } = (0, s.f)((e) => ({ isDragging: e.getItemType() === m })),
        f = (0, u.mY)();
    return 0 === t.length
        ? null
        : (0, r.jsx)('div', {
              className: a()(x.container, { [x.isDragging]: h }),
              children: t.map((e, t) =>
                  (0, r.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              t > 0 ? (0, r.jsx)('div', { className: x.divider }) : null,
                              (0, r.jsx)(b, {
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
                                  disabled: f
                              })
                          ]
                      },
                      (0, d.ab)(e)
                  )
              )
          });
}
function v(e) {
    let { onClick: t, children: n, disabled: i = !1 } = e;
    return (0, r.jsx)(o.P3F, {
        className: x.container,
        onClick: i ? void 0 : t,
        'aria-disabled': i,
        children: (0, r.jsxs)('div', {
            className: a()(x.card, x.addBenefit, { [x.disabled]: i }),
            children: [
                (0, r.jsx)('div', {
                    className: x.emojiWrapper,
                    children: (0, r.jsx)(o.oFk, {
                        size: 'xs',
                        color: 'currentColor',
                        className: x.addBenefitIcon
                    })
                }),
                (0, r.jsx)('div', {
                    className: x.cardText,
                    children: (0, r.jsx)(o.Text, {
                        color: 'header-primary',
                        variant: 'text-md/normal',
                        children: n
                    })
                })
            ]
        })
    });
}
