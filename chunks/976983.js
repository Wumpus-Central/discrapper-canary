n.d(t, {
    B: () => v,
    Z: () => j,
}),
    n(953529),
    n(388685);
var r = n(54381);
n(473749);
var i = n(120356),
    l = n.n(i),
    a = n(392711),
    s = n.n(a),
    o = n(481060),
    c = n(668781),
    d = n(603211),
    u = n(307707),
    g = n(216701),
    f = n(570961),
    m = n(290511),
    b = n(388032),
    p = n(762524);
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function x(e, t) {
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
    let {
            guild: j,
            prompt: v,
            singleColumn: O,
            promptIndex: C,
            option: y,
            hasError: N,
            onDragStart: E,
            onDragComplete: I,
            onDragReset: S,
        } = e,
        _ = null,
        T = s().findIndex(v.options, (e) => e.id === y.id),
        {
            drag: P,
            dragSourcePosition: w,
            drop: Z,
            setIsDraggable: R,
        } = (0, d.Z)({
            type: "ONBOARDING_PROMPT_OPTION_CARD-".concat(v.id),
            index: T,
            optionId: y.id,
            onDragStart: E,
            onDragComplete: I,
            onDragReset: S,
        }),
        { customEmoji: D, unicodeEmoji: A } = (0, u.Z)(
            null == (t = y.emoji) ? void 0 : t.id,
            null == (i = y.emoji) ? void 0 : i.name,
        );
    return (
        (0, m.Oq)(y.emoji) || null != D || null != A || (_ = b.intl.string(b.t["61wfmh"])),
        (0, r.jsxs)(o.P3F, {
            className: l()(p.optionCard, {
                [p.hasError]: N || null != _,
                [p.dropIndicatorBefore]: null != w && T < w,
                [p.dropIndicatorAfter]: null != w && T > w,
                [p.singleColumn]: O,
            }),
            onClick: () =>
                (0, o.ZDy)(async () => {
                    let { default: e } = await n.e("1862").then(n.bind(n, 801001));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            x(h({}, t), {
                                guild: j,
                                prompt: v,
                                option: y,
                                index: C,
                                onSave: (e) => {
                                    (0, f.Kk)(j, v.id, { options: v.options.map((t) => (t.id === y.id ? e : t)) });
                                },
                                onDelete: () => {
                                    (0, f.Kk)(j, v.id, { options: v.options.filter((e) => e.id !== y.id) });
                                },
                            }),
                        );
                }),
            onMouseEnter: () => R(!0),
            onMouseLeave: () => R(!1),
            innerRef: (e) => {
                P(Z(e));
            },
            children: [
                (0, r.jsx)("div", {
                    className: p.dragContainer,
                    children: (0, r.jsx)(o.Vni, {
                        size: "xs",
                        color: "currentColor",
                        className: p.__invalid_dragIcon,
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: p.optionCardRow,
                    children: [
                        (0, r.jsx)("div", {
                            className: p.emoji,
                            children: (0, r.jsx)(g.Z, {
                                emojiId: null == (a = y.emoji) ? void 0 : a.id,
                                emojiName: null == (c = y.emoji) ? void 0 : c.name,
                                defaultComponent: null,
                            }),
                        }),
                        (0, r.jsxs)("div", {
                            className: p.text,
                            children: [
                                (0, r.jsx)(o.Text, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    lineClamp: 1,
                                    children: y.title,
                                }),
                                "" !== y.description &&
                                    (0, r.jsx)(o.Text, {
                                        className: p.description,
                                        variant: "text-xs/normal",
                                        color: "text-default",
                                        children: y.description,
                                    }),
                            ],
                        }),
                    ],
                }),
                null != _ &&
                    (0, r.jsx)(o.Text, {
                        variant: "text-xs/medium",
                        color: "text-feedback-critical",
                        children: _,
                    }),
            ],
        })
    );
}
function v(e) {
    let { guild: t, prompt: i, promptIndex: a, singleColumn: s } = e,
        d = () => {
            (0, o.ZDy)(async () => {
                let { default: e } = await n.e("1862").then(n.bind(n, 801001));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        x(h({}, n), {
                            guild: t,
                            prompt: i,
                            onSave: (e) =>
                                (0, f.Kk)(t, i.id, {
                                    options: [...i.options, e],
                                }),
                            onDelete: () => {},
                            index: a,
                        }),
                    );
            });
        };
    return (0, r.jsx)(o.P3F, {
        className: l()(p.optionCard, p.addOptionCard, {
            [p.addFirstOptionCard]: 0 === i.options.length,
            [p.singleColumn]: s,
        }),
        onClick: () => {
            i.options.length + 1 === m.fY
                ? c.Z.show({
                      title: b.intl.string(b.t.TggC7k),
                      body: b.intl.formatToPlainString(b.t.kPQKai, { thresholdCount: m.fY }),
                      confirmText: b.intl.string(b.t.BddRzS),
                      cancelText: b.intl.string(b.t["ETE/oC"]),
                      onConfirm: d,
                  })
                : d();
        },
        children: (0, r.jsxs)("div", {
            className: p.optionCardRow,
            children: [
                (0, r.jsx)(o.oFk, {
                    size: "md",
                    color: "currentColor",
                    className: p.plusIcon,
                }),
                (0, r.jsx)(o.Text, {
                    variant: "text-md/medium",
                    color: "text-strong",
                    children: b.intl.string(b.t.Ty3lgp),
                }),
            ],
        }),
    });
}
