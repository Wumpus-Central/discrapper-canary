n.d(t, { A: () => j, B: () => N });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    r = n(735438),
    a = n.n(r),
    o = n(192308),
    d = n(939249),
    c = n(772838),
    u = n(834730),
    m = n(245604),
    g = n(157559),
    h = n(599119),
    x = n(202027),
    _ = n(111487),
    p = n(107795),
    A = n(539916),
    E = n(985018),
    f = n(114394);
function j(e) {
    let {
            guild: t,
            prompt: l,
            singleColumn: r,
            promptIndex: m,
            option: g,
            hasError: j,
            onDragStart: N,
            onDragComplete: I,
            onDragReset: C,
        } = e,
        b = null,
        v = a().findIndex(l.options, (e) => e.id === g.id),
        {
            drag: S,
            dragSourcePosition: T,
            drop: y,
            setIsDraggable: R,
        } = (0, h.A)({
            type: `ONBOARDING_PROMPT_OPTION_CARD-${l.id}`,
            index: v,
            optionId: g.id,
            onDragStart: N,
            onDragComplete: I,
            onDragReset: C,
        }),
        { customEmoji: L, unicodeEmoji: D } = (0, x.A)(g.emoji?.id, g.emoji?.name);
    return (
        (0, A.hv)(g.emoji) || null != L || null != D || (b = E.intl.string(E.t["61wfmh"])),
        (0, i.jsxs)(d.D, {
            className: s()(f.we, {
                [f.JD]: j || null != b,
                [f.A]: null != T && v < T,
                [f.Ze]: null != T && v > T,
                [f.h7]: r,
            }),
            onClick: () =>
                (0, o.openModalLazy)(async () => {
                    let { default: e } = await n.e("62765").then(n.bind(n, 826204));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            guild: t,
                            prompt: l,
                            option: g,
                            index: m,
                            onSave: (e) => {
                                (0, p.NF)(t, l.id, { options: l.options.map((t) => (t.id === g.id ? e : t)) });
                            },
                            onDelete: () => {
                                (0, p.NF)(t, l.id, { options: l.options.filter((e) => e.id !== g.id) });
                            },
                        });
                }),
            onMouseEnter: () => R(!0),
            onMouseLeave: () => R(!1),
            innerRef: (e) => {
                S(y(e));
            },
            children: [
                (0, i.jsx)("div", {
                    className: f.cK,
                    children: (0, i.jsx)(c.W, { size: "xs", color: "currentColor", className: f.__invalid_dragIcon }),
                }),
                (0, i.jsxs)("div", {
                    className: f.OF,
                    children: [
                        (0, i.jsx)("div", {
                            className: f.Zg,
                            children: (0, i.jsx)(_.A, {
                                emojiId: g.emoji?.id,
                                emojiName: g.emoji?.name,
                                defaultComponent: null,
                            }),
                        }),
                        (0, i.jsxs)("div", {
                            className: f.Qq,
                            children: [
                                (0, i.jsx)(u.E, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    lineClamp: 1,
                                    children: g.title,
                                }),
                                "" !== g.description &&
                                    (0, i.jsx)(u.E, {
                                        className: f.h_,
                                        variant: "text-xs/normal",
                                        color: "text-default",
                                        children: g.description,
                                    }),
                            ],
                        }),
                    ],
                }),
                null != b &&
                    (0, i.jsx)(u.E, { variant: "text-xs/medium", color: "text-feedback-critical", children: b }),
            ],
        })
    );
}
function N(e) {
    let { guild: t, prompt: l, promptIndex: r, singleColumn: a } = e,
        c = () => {
            (0, o.openModalLazy)(async () => {
                let { default: e } = await n.e("62765").then(n.bind(n, 826204));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        guild: t,
                        prompt: l,
                        onSave: (e) => (0, p.NF)(t, l.id, { options: [...l.options, e] }),
                        onDelete: () => {},
                        index: r,
                    });
            });
        };
    return (0, i.jsx)(d.D, {
        className: s()(f.we, f.f, { [f.JS]: 0 === l.options.length, [f.h7]: a }),
        onClick: () => {
            l.options.length + 1 === A.Bu
                ? g.A.show({
                      title: E.intl.string(E.t.TggC7k),
                      body: E.intl.formatToPlainString(E.t.kPQKai, { thresholdCount: A.Bu }),
                      confirmText: E.intl.string(E.t.BddRzS),
                      cancelText: E.intl.string(E.t["ETE/oC"]),
                      onConfirm: c,
                  })
                : c();
        },
        children: (0, i.jsxs)("div", {
            className: f.OF,
            children: [
                (0, i.jsx)(m.U, { size: "md", color: "currentColor", className: f.WW }),
                (0, i.jsx)(u.E, {
                    variant: "text-md/medium",
                    color: "text-strong",
                    children: E.intl.string(E.t.Ty3lgp),
                }),
            ],
        }),
    });
}
