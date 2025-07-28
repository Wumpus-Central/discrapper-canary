(n.d(t, {
    B: () => v,
    Z: () => j
}),
    n(953529),
    n(388685));
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    a = n(392711),
    s = n.n(a),
    o = n(481060),
    c = n(668781),
    d = n(603211),
    u = n(307707),
    m = n(216701),
    g = n(570961),
    p = n(290511),
    h = n(388032),
    f = n(311400);
function x(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function j(e) {
    var t, i, a, c;
    let { guild: j, prompt: v, singleColumn: _, promptIndex: O, option: y, hasError: C, onDragStart: N, onDragComplete: I, onDragReset: E } = e,
        S = null,
        T = s().findIndex(v.options, (e) => e.id === y.id),
        {
            drag: P,
            dragSourcePosition: w,
            drop: R,
            setIsDraggable: Z
        } = (0, d.Z)({
            type: 'ONBOARDING_PROMPT_OPTION_CARD-'.concat(v.id),
            index: T,
            optionId: y.id,
            onDragStart: N,
            onDragComplete: I,
            onDragReset: E
        }),
        { customEmoji: D, unicodeEmoji: A } = (0, u.Z)(null == (t = y.emoji) ? void 0 : t.id, null == (i = y.emoji) ? void 0 : i.name);
    return (
        (0, p.Oq)(y.emoji) || null != D || null != A || (S = h.intl.string(h.t['61wfmp'])),
        (0, r.jsxs)(o.P3F, {
            className: l()(f.optionCard, {
                [f.hasError]: C || null != S,
                [f.dropIndicatorBefore]: null != w && T < w,
                [f.dropIndicatorAfter]: null != w && T > w,
                [f.singleColumn]: _
            }),
            onClick: () =>
                (0, o.ZDy)(async () => {
                    let { default: e } = await n.e('1862').then(n.bind(n, 801001));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            b(x({}, t), {
                                guild: j,
                                prompt: v,
                                option: y,
                                index: O,
                                onSave: (e) => {
                                    (0, g.Kk)(j, v.id, { options: v.options.map((t) => (t.id === y.id ? e : t)) });
                                },
                                onDelete: () => {
                                    (0, g.Kk)(j, v.id, { options: v.options.filter((e) => e.id !== y.id) });
                                }
                            })
                        );
                }),
            onMouseEnter: () => Z(!0),
            onMouseLeave: () => Z(!1),
            innerRef: (e) => {
                P(R(e));
            },
            children: [
                (0, r.jsx)('div', {
                    className: f.dragContainer,
                    children: (0, r.jsx)(o.Vni, {
                        size: 'xs',
                        color: 'currentColor',
                        className: f.__invalid_dragIcon
                    })
                }),
                (0, r.jsxs)('div', {
                    className: f.optionCardRow,
                    children: [
                        (0, r.jsx)('div', {
                            className: f.emoji,
                            children: (0, r.jsx)(m.Z, {
                                emojiId: null == (a = y.emoji) ? void 0 : a.id,
                                emojiName: null == (c = y.emoji) ? void 0 : c.name,
                                defaultComponent: null
                            })
                        }),
                        (0, r.jsxs)('div', {
                            className: f.text,
                            children: [
                                (0, r.jsx)(o.Text, {
                                    variant: 'text-md/medium',
                                    color: 'header-primary',
                                    lineClamp: 1,
                                    children: y.title
                                }),
                                '' !== y.description &&
                                    (0, r.jsx)(o.Text, {
                                        className: f.description,
                                        variant: 'text-xs/normal',
                                        color: 'header-secondary',
                                        children: y.description
                                    })
                            ]
                        })
                    ]
                }),
                null != S &&
                    (0, r.jsx)(o.Text, {
                        variant: 'text-xs/medium',
                        color: 'text-danger',
                        children: S
                    })
            ]
        })
    );
}
function v(e) {
    let { guild: t, prompt: i, promptIndex: a, singleColumn: s } = e,
        d = () => {
            (0, o.ZDy)(async () => {
                let { default: e } = await n.e('1862').then(n.bind(n, 801001));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        b(x({}, n), {
                            guild: t,
                            prompt: i,
                            onSave: (e) =>
                                (0, g.Kk)(t, i.id, {
                                    options: [...i.options, e]
                                }),
                            onDelete: () => {},
                            index: a
                        })
                    );
            });
        };
    return (0, r.jsx)(o.P3F, {
        className: l()(f.optionCard, f.addOptionCard, {
            [f.addFirstOptionCard]: 0 === i.options.length,
            [f.singleColumn]: s
        }),
        onClick: () => {
            i.options.length + 1 === p.fY
                ? c.Z.show({
                      title: h.intl.string(h.t.TggC7u),
                      body: h.intl.formatToPlainString(h.t.kPQKam, { thresholdCount: p.fY }),
                      confirmText: h.intl.string(h.t.BddRzc),
                      cancelText: h.intl.string(h.t['ETE/oK']),
                      onConfirm: d
                  })
                : d();
        },
        children: (0, r.jsxs)('div', {
            className: f.optionCardRow,
            children: [
                (0, r.jsx)(o.oFk, {
                    size: 'md',
                    color: 'currentColor',
                    className: f.plusIcon
                }),
                (0, r.jsx)(o.Text, {
                    variant: 'text-md/medium',
                    color: 'header-primary',
                    children: h.intl.string(h.t.Ty3lgo)
                })
            ]
        })
    });
}
