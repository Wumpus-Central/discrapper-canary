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
    f = n(439217);
function C(e) {
    var t, r, s, c;
    let { guild: u, prompt: C, singleColumn: v, promptIndex: N, option: _, hasError: I, onDragStart: T, onDragComplete: j, onDragReset: b } = e,
        E = null,
        S = a().findIndex(C.options, (e) => e.id === _.id),
        {
            drag: R,
            dragSourcePosition: y,
            drop: A,
            setIsDraggable: Z
        } = (0, d.Z)({
            type: 'ONBOARDING_PROMPT_OPTION_CARD-'.concat(C.id),
            index: S,
            optionId: _.id,
            onDragStart: T,
            onDragComplete: j,
            onDragReset: b
        }),
        { customEmoji: L, unicodeEmoji: D } = (0, m.Z)(null === (t = _.emoji) || void 0 === t ? void 0 : t.id, null === (r = _.emoji) || void 0 === r ? void 0 : r.name);
    return (
        !((0, x.Oq)(_.emoji) || null != L || null != D) && (E = p.intl.string(p.t['61wfmp'])),
        (0, i.jsxs)(o.Clickable, {
            className: l()(f.optionCard, {
                [f.hasError]: I || null != E,
                [f.dropIndicatorBefore]: null != y && S < y,
                [f.dropIndicatorAfter]: null != y && S > y,
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
                            option: _,
                            index: N,
                            onSave: (e) => {
                                (0, g.Kk)(u, C.id, { options: C.options.map((t) => (t.id === _.id ? e : t)) });
                            },
                            onDelete: () => {
                                (0, g.Kk)(u, C.id, { options: C.options.filter((e) => e.id !== _.id) });
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
                                emojiId: null === (s = _.emoji) || void 0 === s ? void 0 : s.id,
                                emojiName: null === (c = _.emoji) || void 0 === c ? void 0 : c.name,
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
                                    children: _.title
                                }),
                                '' !== _.description &&
                                    (0, i.jsx)(o.Text, {
                                        className: f.description,
                                        variant: 'text-xs/normal',
                                        color: 'header-secondary',
                                        children: _.description
                                    })
                            ]
                        })
                    ]
                }),
                null != E &&
                    (0, i.jsx)(o.Text, {
                        variant: 'text-xs/medium',
                        color: 'text-danger',
                        children: E
                    })
            ]
        })
    );
}
function v(e) {
    let { guild: t, prompt: r, promptIndex: s, singleColumn: a } = e,
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
                        index: s
                    });
            });
        };
    return (0, i.jsx)(o.Clickable, {
        className: l()(f.optionCard, f.addOptionCard, {
            [f.addFirstOptionCard]: 0 === r.options.length,
            [f.singleColumn]: a
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
