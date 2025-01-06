n.d(t, {
    B: function () {
        return v;
    },
    Z: function () {
        return C;
    }
}),
    n(47120);
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    a = n(392711),
    s = n.n(a),
    o = n(481060),
    c = n(668781),
    d = n(603211),
    u = n(107862),
    m = n(307707),
    h = n(216701),
    g = n(570961),
    x = n(290511),
    p = n(388032),
    f = n(439217);
function C(e) {
    var t, r, a, c;
    let { guild: u, prompt: C, singleColumn: v, promptIndex: _, option: I, hasError: N, onDragStart: T, onDragComplete: j, onDragReset: b } = e,
        S = null,
        E = s().findIndex(C.options, (e) => e.id === I.id),
        {
            drag: R,
            dragSourcePosition: y,
            drop: A,
            setIsDraggable: Z
        } = (0, d.Z)({
            type: 'ONBOARDING_PROMPT_OPTION_CARD-'.concat(C.id),
            index: E,
            optionId: I.id,
            onDragStart: T,
            onDragComplete: j,
            onDragReset: b
        }),
        { customEmoji: L, unicodeEmoji: D } = (0, m.Z)(null === (t = I.emoji) || void 0 === t ? void 0 : t.id, null === (r = I.emoji) || void 0 === r ? void 0 : r.name);
    return (
        !((0, x.Oq)(I.emoji) || null != L || null != D) && (S = p.intl.string(p.t['61wfmp'])),
        (0, i.jsxs)(o.Clickable, {
            className: l()(f.optionCard, {
                [f.hasError]: N || null != S,
                [f.dropIndicatorBefore]: null != y && E < y,
                [f.dropIndicatorAfter]: null != y && E > y,
                [f.singleColumn]: v
            }),
            onClick: () =>
                (0, o.openModalLazy)(async () => {
                    let { default: e } = await n.e('1862').then(n.bind(n, 801001));
                    return (t) =>
                        (0, i.jsx)(e, {
                            ...t,
                            guild: u,
                            prompt: C,
                            option: I,
                            index: _,
                            onSave: (e) => {
                                (0, g.Kk)(u, C.id, { options: C.options.map((t) => (t.id === I.id ? e : t)) });
                            },
                            onDelete: () => {
                                (0, g.Kk)(u, C.id, { options: C.options.filter((e) => e.id !== I.id) });
                            }
                        });
                }),
            onMouseEnter: () => Z(!0),
            onMouseLeave: () => Z(!1),
            innerRef: (e) => R(A(e)),
            children: [
                (0, i.jsx)('div', {
                    className: f.dragContainer,
                    children: (0, i.jsx)(o.DragIcon, {
                        size: 'xs',
                        color: 'currentColor',
                        className: f.__invalid_dragIcon
                    })
                }),
                (0, i.jsxs)('div', {
                    className: f.optionCardRow,
                    children: [
                        (0, i.jsx)('div', {
                            className: f.emoji,
                            children: (0, i.jsx)(h.Z, {
                                emojiId: null === (a = I.emoji) || void 0 === a ? void 0 : a.id,
                                emojiName: null === (c = I.emoji) || void 0 === c ? void 0 : c.name,
                                defaultComponent: null
                            })
                        }),
                        (0, i.jsxs)('div', {
                            className: f.text,
                            children: [
                                (0, i.jsx)(o.Text, {
                                    variant: 'text-md/medium',
                                    color: 'header-primary',
                                    lineClamp: 1,
                                    children: I.title
                                }),
                                '' !== I.description &&
                                    (0, i.jsx)(o.Text, {
                                        className: f.description,
                                        variant: 'text-xs/normal',
                                        color: 'header-secondary',
                                        children: I.description
                                    })
                            ]
                        })
                    ]
                }),
                null != S &&
                    (0, i.jsx)(o.Text, {
                        variant: 'text-xs/medium',
                        color: 'text-danger',
                        children: S
                    })
            ]
        })
    );
}
function v(e) {
    let { guild: t, prompt: r, promptIndex: a, singleColumn: s } = e,
        { dropdownsAllowed: d } = (0, u.Ug)(t.id),
        m = () => {
            (0, o.openModalLazy)(async () => {
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
                        index: a
                    });
            });
        };
    return (0, i.jsx)(o.Clickable, {
        className: l()(f.optionCard, f.addOptionCard, {
            [f.addFirstOptionCard]: 0 === r.options.length,
            [f.singleColumn]: s
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
            className: f.optionCardRow,
            children: [
                (0, i.jsx)(o.CirclePlusIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: f.plusIcon
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
