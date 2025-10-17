n.d(t, {
    B: () => v,
    Z: () => j,
}),
    n(953529),
    n(388685);
var r = n(951288);
n(647438);
var i = n(120356),
    l = n.n(i),
    a = n(392711),
    s = n.n(a),
    o = n(481060),
    c = n(668781),
    d = n(603211),
    u = n(307707),
    g = n(216701),
    m = n(570961),
    p = n(290511),
    f = n(388032),
    h = n(900492);
function b(e) {
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
            singleColumn: _,
            promptIndex: C,
            option: O,
            hasError: y,
            onDragStart: E,
            onDragComplete: N,
            onDragReset: I,
        } = e,
        S = null,
        T = s().findIndex(v.options, (e) => e.id === O.id),
        {
            drag: P,
            dragSourcePosition: w,
            drop: Z,
            setIsDraggable: R,
        } = (0, d.Z)({
            type: "ONBOARDING_PROMPT_OPTION_CARD-".concat(v.id),
            index: T,
            optionId: O.id,
            onDragStart: E,
            onDragComplete: N,
            onDragReset: I,
        }),
        { customEmoji: D, unicodeEmoji: A } = (0, u.Z)(
            null == (t = O.emoji) ? void 0 : t.id,
            null == (i = O.emoji) ? void 0 : i.name,
        );
    return (
        (0, p.Oq)(O.emoji) || null != D || null != A || (S = f.intl.string(f.t["61wfmp"])),
        (0, r.jsxs)(o.P3F, {
            className: l()(h.optionCard, {
                [h.hasError]: y || null != S,
                [h.dropIndicatorBefore]: null != w && T < w,
                [h.dropIndicatorAfter]: null != w && T > w,
                [h.singleColumn]: _,
            }),
            onClick: () =>
                (0, o.ZDy)(async () => {
                    let { default: e } = await n.e("1862").then(n.bind(n, 801001));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            x(b({}, t), {
                                guild: j,
                                prompt: v,
                                option: O,
                                index: C,
                                onSave: (e) => {
                                    (0, m.Kk)(j, v.id, { options: v.options.map((t) => (t.id === O.id ? e : t)) });
                                },
                                onDelete: () => {
                                    (0, m.Kk)(j, v.id, { options: v.options.filter((e) => e.id !== O.id) });
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
                    className: h.dragContainer,
                    children: (0, r.jsx)(o.Vni, {
                        size: "xs",
                        color: "currentColor",
                        className: h.__invalid_dragIcon,
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: h.optionCardRow,
                    children: [
                        (0, r.jsx)("div", {
                            className: h.emoji,
                            children: (0, r.jsx)(g.Z, {
                                emojiId: null == (a = O.emoji) ? void 0 : a.id,
                                emojiName: null == (c = O.emoji) ? void 0 : c.name,
                                defaultComponent: null,
                            }),
                        }),
                        (0, r.jsxs)("div", {
                            className: h.text,
                            children: [
                                (0, r.jsx)(o.Text, {
                                    variant: "text-md/medium",
                                    color: "header-primary",
                                    lineClamp: 1,
                                    children: O.title,
                                }),
                                "" !== O.description &&
                                    (0, r.jsx)(o.Text, {
                                        className: h.description,
                                        variant: "text-xs/normal",
                                        color: "header-secondary",
                                        children: O.description,
                                    }),
                            ],
                        }),
                    ],
                }),
                null != S &&
                    (0, r.jsx)(o.Text, {
                        variant: "text-xs/medium",
                        color: "text-danger",
                        children: S,
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
                        x(b({}, n), {
                            guild: t,
                            prompt: i,
                            onSave: (e) =>
                                (0, m.Kk)(t, i.id, {
                                    options: [...i.options, e],
                                }),
                            onDelete: () => {},
                            index: a,
                        }),
                    );
            });
        };
    return (0, r.jsx)(o.P3F, {
        className: l()(h.optionCard, h.addOptionCard, {
            [h.addFirstOptionCard]: 0 === i.options.length,
            [h.singleColumn]: s,
        }),
        onClick: () => {
            i.options.length + 1 === p.fY
                ? c.Z.show({
                      title: f.intl.string(f.t.TggC7u),
                      body: f.intl.formatToPlainString(f.t.kPQKam, { thresholdCount: p.fY }),
                      confirmText: f.intl.string(f.t.BddRzc),
                      cancelText: f.intl.string(f.t["ETE/oK"]),
                      onConfirm: d,
                  })
                : d();
        },
        children: (0, r.jsxs)("div", {
            className: h.optionCardRow,
            children: [
                (0, r.jsx)(o.oFk, {
                    size: "md",
                    color: "currentColor",
                    className: h.plusIcon,
                }),
                (0, r.jsx)(o.Text, {
                    variant: "text-md/medium",
                    color: "header-primary",
                    children: f.intl.string(f.t.Ty3lgo),
                }),
            ],
        }),
    });
}
