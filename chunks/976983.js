n.d(t, {
    B: () => f,
    Z: () => C
}),
    n(47120);
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    s = n(392711),
    a = n.n(s),
    o = n(481060),
    c = n(668781),
    d = n(603211),
    u = n(107862),
    m = n(307707),
    h = n(216701),
    g = n(570961),
    x = n(290511),
    p = n(388032),
    _ = n(439217);
function C(e) {
    var t, r, s, c;
    let { guild: u, prompt: C, singleColumn: f, promptIndex: v, option: N, hasError: j, onDragStart: I, onDragComplete: E, onDragReset: b } = e,
        T = null,
        S = a().findIndex(C.options, (e) => e.id === N.id),
        {
            drag: R,
            dragSourcePosition: Z,
            drop: y,
            setIsDraggable: A
        } = (0, d.Z)({
            type: 'ONBOARDING_PROMPT_OPTION_CARD-'.concat(C.id),
            index: S,
            optionId: N.id,
            onDragStart: I,
            onDragComplete: E,
            onDragReset: b
        }),
        { customEmoji: L, unicodeEmoji: D } = (0, m.Z)(null === (t = N.emoji) || void 0 === t ? void 0 : t.id, null === (r = N.emoji) || void 0 === r ? void 0 : r.name);
    return (
        (0, x.Oq)(N.emoji) || null != L || null != D || (T = p.intl.string(p.t['61wfmp'])),
        (0, i.jsxs)(o.P3F, {
            className: l()(_.optionCard, {
                [_.hasError]: j || null != T,
                [_.dropIndicatorBefore]: null != Z && S < Z,
                [_.dropIndicatorAfter]: null != Z && S > Z,
                [_.singleColumn]: f
            }),
            onClick: () =>
                (0, o.ZDy)(async () => {
                    let { default: e } = await n.e('1862').then(n.bind(n, 801001));
                    return (t) =>
                        (0, i.jsx)(e, {
                            ...t,
                            guild: u,
                            prompt: C,
                            option: N,
                            index: v,
                            onSave: (e) => {
                                (0, g.Kk)(u, C.id, { options: C.options.map((t) => (t.id === N.id ? e : t)) });
                            },
                            onDelete: () => {
                                (0, g.Kk)(u, C.id, { options: C.options.filter((e) => e.id !== N.id) });
                            }
                        });
                }),
            onMouseEnter: () => A(!0),
            onMouseLeave: () => A(!1),
            innerRef: (e) => R(y(e)),
            children: [
                (0, i.jsx)('div', {
                    className: _.dragContainer,
                    children: (0, i.jsx)(o.Vni, {
                        size: 'xs',
                        color: 'currentColor',
                        className: _.__invalid_dragIcon
                    })
                }),
                (0, i.jsxs)('div', {
                    className: _.optionCardRow,
                    children: [
                        (0, i.jsx)('div', {
                            className: _.emoji,
                            children: (0, i.jsx)(h.Z, {
                                emojiId: null === (s = N.emoji) || void 0 === s ? void 0 : s.id,
                                emojiName: null === (c = N.emoji) || void 0 === c ? void 0 : c.name,
                                defaultComponent: null
                            })
                        }),
                        (0, i.jsxs)('div', {
                            className: _.text,
                            children: [
                                (0, i.jsx)(o.Text, {
                                    variant: 'text-md/medium',
                                    color: 'header-primary',
                                    lineClamp: 1,
                                    children: N.title
                                }),
                                '' !== N.description &&
                                    (0, i.jsx)(o.Text, {
                                        className: _.description,
                                        variant: 'text-xs/normal',
                                        color: 'header-secondary',
                                        children: N.description
                                    })
                            ]
                        })
                    ]
                }),
                null != T &&
                    (0, i.jsx)(o.Text, {
                        variant: 'text-xs/medium',
                        color: 'text-danger',
                        children: T
                    })
            ]
        })
    );
}
function f(e) {
    let { guild: t, prompt: r, promptIndex: s, singleColumn: a } = e,
        { dropdownsAllowed: d } = (0, u.Ug)(t.id),
        m = () => {
            (0, o.ZDy)(async () => {
                let { default: e } = await n.e('1862').then(n.bind(n, 801001));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        guild: t,
                        prompt: r,
                        onSave: (e) =>
                            (0, g.Kk)(t, r.id, {
                                options: [...r.options, e]
                            }),
                        onDelete: () => {},
                        index: s
                    });
            });
        };
    return (0, i.jsx)(o.P3F, {
        className: l()(_.optionCard, _.addOptionCard, {
            [_.addFirstOptionCard]: 0 === r.options.length,
            [_.singleColumn]: a
        }),
        onClick: () => {
            d && r.options.length + 1 === x.fY
                ? c.Z.show({
                      title: p.intl.string(p.t.TggC7u),
                      body: p.intl.formatToPlainString(p.t.kPQKam, { thresholdCount: x.fY }),
                      confirmText: p.intl.string(p.t.BddRzc),
                      cancelText: p.intl.string(p.t['ETE/oK']),
                      onConfirm: m
                  })
                : m();
        },
        children: (0, i.jsxs)('div', {
            className: _.optionCardRow,
            children: [
                (0, i.jsx)(o.oFk, {
                    size: 'md',
                    color: 'currentColor',
                    className: _.plusIcon
                }),
                (0, i.jsx)(o.Text, {
                    variant: 'text-md/medium',
                    color: 'header-primary',
                    children: p.intl.string(p.t.Ty3lgo)
                })
            ]
        })
    });
}
