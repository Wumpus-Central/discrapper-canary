n.d(t, {
    p: () => j,
    s: () => N
}),
    n(953529);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(676062),
    o = n(481060),
    c = n(313201),
    d = n(817460),
    u = n(723047),
    m = n(528027),
    g = n(686807),
    p = n(157018),
    h = n(828656),
    f = n(388032),
    x = n(683384);
function b(e) {
    let { guildId: t, emojiId: n, emojiName: s, title: a, description: c, targetType: d, index: u, dndName: g, onEdit: p, onMove: b, disabled: j = !1 } = e,
        N = i.useRef(null),
        _ = i.useRef(null),
        { drag: v, dragPreview: O, drop: C, isDragging: y } = (0, h.Z)(N, d, u, b);
    return (
        v(_),
        O(C(N)),
        (0, r.jsxs)('div', {
            ref: N,
            className: l()(x.card, {
                [x.cardDragging]: y,
                [x.disabled]: j
            }),
            children: [
                (0, r.jsxs)('div', {
                    className: x.emojiWrapper,
                    children: [
                        (0, r.jsx)(m.Z, {
                            guildId: t,
                            emojiId: n,
                            emojiName: s,
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
                            children: a
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
                            'aria-label': f.NW.string(f.t.Eoo8h4),
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
    let { benefits: t, onEdit: n, onMove: s, guildId: o } = e,
        m = (0, c.Dt)(),
        { isDragging: h } = (0, a.f)((e) => ({ isDragging: e.getItemType() === m })),
        f = (0, u.mY)();
    return 0 === t.length
        ? null
        : (0, r.jsx)('div', {
              className: l()(x.container, { [x.isDragging]: h }),
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
                                  onMove: s,
                                  disabled: f
                              })
                          ]
                      },
                      (0, d.ab)(e)
                  )
              )
          });
}
function N(e) {
    let { onClick: t, children: n, disabled: i = !1 } = e;
    return (0, r.jsx)(o.P3F, {
        className: x.container,
        onClick: i ? void 0 : t,
        'aria-disabled': i,
        children: (0, r.jsxs)('div', {
            className: l()(x.card, x.addBenefit, { [x.disabled]: i }),
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
