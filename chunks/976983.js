n.d(t, {
    B: () => v,
    Z: () => _
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
    d = n(107862),
    m = n(307707),
    g = n(216701),
    p = n(570961),
    h = n(290511),
    f = n(388032),
    x = n(311400);
function b(e) {
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
function j(e, t) {
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
function _(e) {
    var t, i, s, c;
    let { guild: d, prompt: _, singleColumn: v, promptIndex: O, option: C, hasError: y, onDragStart: N, onDragComplete: I, onDragReset: E } = e,
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
        { customEmoji: D, unicodeEmoji: k } = (0, m.Z)(null == (t = C.emoji) ? void 0 : t.id, null == (i = C.emoji) ? void 0 : i.name);
    return (
        (0, h.Oq)(C.emoji) || null != D || null != k || (S = f.intl.string(f.t['61wfmp'])),
        (0, r.jsxs)(o.P3F, {
            className: l()(x.optionCard, {
                [x.hasError]: y || null != S,
                [x.dropIndicatorBefore]: null != w && T < w,
                [x.dropIndicatorAfter]: null != w && T > w,
                [x.singleColumn]: v
            }),
            onClick: () =>
                (0, o.ZDy)(async () => {
                    let { default: e } = await n.e('1862').then(n.bind(n, 801001));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            j(b({}, t), {
                                guild: d,
                                prompt: _,
                                option: C,
                                index: O,
                                onSave: (e) => {
                                    (0, p.Kk)(d, _.id, { options: _.options.map((t) => (t.id === C.id ? e : t)) });
                                },
                                onDelete: () => {
                                    (0, p.Kk)(d, _.id, { options: _.options.filter((e) => e.id !== C.id) });
                                }
                            })
                        );
                }),
            onMouseEnter: () => Z(!0),
            onMouseLeave: () => Z(!1),
            innerRef: (e) => P(R(e)),
            children: [
                (0, r.jsx)('div', {
                    className: x.dragContainer,
                    children: (0, r.jsx)(o.Vni, {
                        size: 'xs',
                        color: 'currentColor',
                        className: x.__invalid_dragIcon
                    })
                }),
                (0, r.jsxs)('div', {
                    className: x.optionCardRow,
                    children: [
                        (0, r.jsx)('div', {
                            className: x.emoji,
                            children: (0, r.jsx)(g.Z, {
                                emojiId: null == (s = C.emoji) ? void 0 : s.id,
                                emojiName: null == (c = C.emoji) ? void 0 : c.name,
                                defaultComponent: null
                            })
                        }),
                        (0, r.jsxs)('div', {
                            className: x.text,
                            children: [
                                (0, r.jsx)(o.Text, {
                                    variant: 'text-md/medium',
                                    color: 'header-primary',
                                    lineClamp: 1,
                                    children: C.title
                                }),
                                '' !== C.description &&
                                    (0, r.jsx)(o.Text, {
                                        className: x.description,
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
function v(e) {
    let { guild: t, prompt: i, promptIndex: s, singleColumn: a } = e,
        { dropdownsAllowed: u } = (0, d.Ug)(t.id),
        m = () => {
            (0, o.ZDy)(async () => {
                let { default: e } = await n.e('1862').then(n.bind(n, 801001));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        j(b({}, n), {
                            guild: t,
                            prompt: i,
                            onSave: (e) =>
                                (0, p.Kk)(t, i.id, {
                                    options: [...i.options, e]
                                }),
                            onDelete: () => {},
                            index: s
                        })
                    );
            });
        };
    return (0, r.jsx)(o.P3F, {
        className: l()(x.optionCard, x.addOptionCard, {
            [x.addFirstOptionCard]: 0 === i.options.length,
            [x.singleColumn]: a
        }),
        onClick: () => {
            u && i.options.length + 1 === h.fY
                ? c.Z.show({
                      title: f.intl.string(f.t.TggC7u),
                      body: f.intl.formatToPlainString(f.t.kPQKam, { thresholdCount: h.fY }),
                      confirmText: f.intl.string(f.t.BddRzc),
                      cancelText: f.intl.string(f.t['ETE/oK']),
                      onConfirm: m
                  })
                : m();
        },
        children: (0, r.jsxs)('div', {
            className: x.optionCardRow,
            children: [
                (0, r.jsx)(o.oFk, {
                    size: 'md',
                    color: 'currentColor',
                    className: x.plusIcon
                }),
                (0, r.jsx)(o.Text, {
                    variant: 'text-md/medium',
                    color: 'header-primary',
                    children: f.intl.string(f.t.Ty3lgo)
                })
            ]
        })
    });
}
