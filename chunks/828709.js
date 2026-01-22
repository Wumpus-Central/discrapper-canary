n.d(t, {
    A: () => j,
    B: () => O,
}),
    n(228524),
    n(896048);
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    s = n(735438),
    a = n.n(s),
    c = n(397927),
    o = n(157559),
    d = n(599119),
    u = n(202027),
    f = n(111487),
    g = n(107795),
    b = n(539916),
    m = n(985018),
    p = n(313109);
function x(e) {
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
function h(e, t) {
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
    var t, i, s, o;
    let {
            guild: j,
            prompt: O,
            singleColumn: y,
            promptIndex: v,
            option: A,
            hasError: E,
            onDragStart: N,
            onDragComplete: _,
            onDragReset: S,
        } = e,
        T = null,
        I = a().findIndex(O.options, (e) => e.id === A.id),
        {
            drag: C,
            dragSourcePosition: P,
            drop: w,
            setIsDraggable: R,
        } = (0, d.A)({
            type: "ONBOARDING_PROMPT_OPTION_CARD-".concat(O.id),
            index: I,
            optionId: A.id,
            onDragStart: N,
            onDragComplete: _,
            onDragReset: S,
        }),
        { customEmoji: D, unicodeEmoji: G } = (0, u.A)(
            null == (t = A.emoji) ? void 0 : t.id,
            null == (i = A.emoji) ? void 0 : i.name,
        );
    return (
        (0, b.hv)(A.emoji) || null != D || null != G || (T = m.intl.string(m.t["61wfmh"])),
        (0, r.jsxs)(c.DUT, {
            className: l()(p.we, {
                [p.JD]: E || null != T,
                [p.A]: null != P && I < P,
                [p.Ze]: null != P && I > P,
                [p.h7]: y,
            }),
            onClick: () =>
                (0, c.mMO)(async () => {
                    let { default: e } = await n.e("62765").then(n.bind(n, 826204));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            h(x({}, t), {
                                guild: j,
                                prompt: O,
                                option: A,
                                index: v,
                                onSave: (e) => {
                                    (0, g.NF)(j, O.id, { options: O.options.map((t) => (t.id === A.id ? e : t)) });
                                },
                                onDelete: () => {
                                    (0, g.NF)(j, O.id, { options: O.options.filter((e) => e.id !== A.id) });
                                },
                            }),
                        );
                }),
            onMouseEnter: () => R(!0),
            onMouseLeave: () => R(!1),
            innerRef: (e) => {
                C(w(e));
            },
            children: [
                (0, r.jsx)("div", {
                    className: p.cK,
                    children: (0, r.jsx)(c.WP0, {
                        size: "xs",
                        color: "currentColor",
                        className: p.__invalid_dragIcon,
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: p.OF,
                    children: [
                        (0, r.jsx)("div", {
                            className: p.Zg,
                            children: (0, r.jsx)(f.A, {
                                emojiId: null == (s = A.emoji) ? void 0 : s.id,
                                emojiName: null == (o = A.emoji) ? void 0 : o.name,
                                defaultComponent: null,
                            }),
                        }),
                        (0, r.jsxs)("div", {
                            className: p.Qq,
                            children: [
                                (0, r.jsx)(c.Text, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    lineClamp: 1,
                                    children: A.title,
                                }),
                                "" !== A.description &&
                                    (0, r.jsx)(c.Text, {
                                        className: p.h_,
                                        variant: "text-xs/normal",
                                        color: "text-default",
                                        children: A.description,
                                    }),
                            ],
                        }),
                    ],
                }),
                null != T &&
                    (0, r.jsx)(c.Text, {
                        variant: "text-xs/medium",
                        color: "text-feedback-critical",
                        children: T,
                    }),
            ],
        })
    );
}
function O(e) {
    let { guild: t, prompt: i, promptIndex: s, singleColumn: a } = e,
        d = () => {
            (0, c.mMO)(async () => {
                let { default: e } = await n.e("62765").then(n.bind(n, 826204));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        h(x({}, n), {
                            guild: t,
                            prompt: i,
                            onSave: (e) =>
                                (0, g.NF)(t, i.id, {
                                    options: [...i.options, e],
                                }),
                            onDelete: () => {},
                            index: s,
                        }),
                    );
            });
        };
    return (0, r.jsx)(c.DUT, {
        className: l()(p.we, p.f, {
            [p.JS]: 0 === i.options.length,
            [p.h7]: a,
        }),
        onClick: () => {
            i.options.length + 1 === b.Bu
                ? o.A.show({
                      title: m.intl.string(m.t.TggC7k),
                      body: m.intl.formatToPlainString(m.t.kPQKai, { thresholdCount: b.Bu }),
                      confirmText: m.intl.string(m.t.BddRzS),
                      cancelText: m.intl.string(m.t["ETE/oC"]),
                      onConfirm: d,
                  })
                : d();
        },
        children: (0, r.jsxs)("div", {
            className: p.OF,
            children: [
                (0, r.jsx)(c.U1e, {
                    size: "md",
                    color: "currentColor",
                    className: p.WW,
                }),
                (0, r.jsx)(c.Text, {
                    variant: "text-md/medium",
                    color: "text-strong",
                    children: m.intl.string(m.t.Ty3lgp),
                }),
            ],
        }),
    });
}
