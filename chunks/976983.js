n.d(t, {
    B: () => _,
    Z: () => j
}),
    n(953529),
    n(388685);
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    s = n(392711),
    a = n.n(s),
    o = n(481060),
    c = n(668781),
    u = n(603211),
    d = n(307707),
    m = n(216701),
    g = n(570961),
    p = n(290511),
    h = n(388032),
    f = n(311400);
function x(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
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
    var t, i, s, c;
    let { guild: j, prompt: _, singleColumn: v, promptIndex: O, option: C, hasError: y, onDragStart: N, onDragComplete: I, onDragReset: E } = e,
        S = null,
        T = a().findIndex(_.options, (e) => e.id === C.id),
        {
            drag: P,
            dragSourcePosition: w,
            drop: R,
            setIsDraggable: Z
        } = (0, u.Z)({
            type: 'ONBOARDING_PROMPT_OPTION_CARD-'.concat(_.id),
            index: T,
            optionId: C.id,
            onDragStart: N,
            onDragComplete: I,
            onDragReset: E
        }),
        { customEmoji: D, unicodeEmoji: k } = (0, d.Z)(null == (t = C.emoji) ? void 0 : t.id, null == (i = C.emoji) ? void 0 : i.name);
    return (
        (0, p.Oq)(C.emoji) || null != D || null != k || (S = h.intl.string(h.t['61wfmp'])),
        (0, r.jsxs)(o.P3F, {
            className: l()(f.optionCard, {
                [f.hasError]: y || null != S,
                [f.dropIndicatorBefore]: null != w && T < w,
                [f.dropIndicatorAfter]: null != w && T > w,
                [f.singleColumn]: v
            }),
            onClick: () =>
                (0, o.ZDy)(async () => {
                    let { default: e } = await n.e('1862').then(n.bind(n, 801001));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            b(x({}, t), {
                                guild: j,
                                prompt: _,
                                option: C,
                                index: O,
                                onSave: (e) => {
                                    (0, g.Kk)(j, _.id, { options: _.options.map((t) => (t.id === C.id ? e : t)) });
                                },
                                onDelete: () => {
                                    (0, g.Kk)(j, _.id, { options: _.options.filter((e) => e.id !== C.id) });
                                }
                            })
                        );
                }),
            onMouseEnter: () => Z(!0),
            onMouseLeave: () => Z(!1),
            innerRef: (e) => P(R(e)),
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
                                emojiId: null == (s = C.emoji) ? void 0 : s.id,
                                emojiName: null == (c = C.emoji) ? void 0 : c.name,
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
                                    children: C.title
                                }),
                                '' !== C.description &&
                                    (0, r.jsx)(o.Text, {
                                        className: f.description,
                                        variant: 'text-xs/normal',
                                        color: 'header-secondary',
                                        children: C.description
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
function _(e) {
    let { guild: t, prompt: i, promptIndex: s, singleColumn: a } = e,
        u = () => {
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
                            index: s
                        })
                    );
            });
        };
    return (0, r.jsx)(o.P3F, {
        className: l()(f.optionCard, f.addOptionCard, {
            [f.addFirstOptionCard]: 0 === i.options.length,
            [f.singleColumn]: a
        }),
        onClick: () => {
            i.options.length + 1 === p.fY
                ? c.Z.show({
                      title: h.intl.string(h.t.TggC7u),
                      body: h.intl.formatToPlainString(h.t.kPQKam, { thresholdCount: p.fY }),
                      confirmText: h.intl.string(h.t.BddRzc),
                      cancelText: h.intl.string(h.t['ETE/oK']),
                      onConfirm: u
                  })
                : u();
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
