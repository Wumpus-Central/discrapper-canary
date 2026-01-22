n.d(t, {
    A: () => O,
}),
    n(747238),
    n(812715),
    n(866193),
    n(896048),
    n(733351);
var r = n(627968),
    i = n(64700),
    a = n(91871),
    s = n.n(a),
    o = n(397927),
    l = n(100392),
    c = n(102609),
    u = n(386976),
    d = n(32523),
    f = n(769054),
    p = n(957565),
    _ = n(222735),
    h = n(985018);

function m(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function g(e) {
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
                m(e, t, n[t]);
            });
    }
    return e;
}

function E(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function y(e) {
    let { id: t, experiment: n, currentBucket: i, system: a } = e,
        s = (0, f.h)(n);
    return (0, r.jsxs)(
        o.Drp,
        {
            id: t.replaceAll("--", "__"),
            label: n.title,
            action: () => (0, c.t$)(a, t, null),
            children: [
                s.map((e) =>
                    (0, r.jsx)(
                        o.sLh,
                        {
                            id: "".concat(e.id),
                            label: e.shortLabel,
                            checked: e.id === (null == i ? void 0 : i.variantId),
                            action: () => (0, c.t$)(a, t, e.id),
                        },
                        "".concat(e.id),
                    ),
                ),
                (0, r.jsxs)(o.rXV, {
                    children: [
                        p.p5 &&
                            (0, r.jsx)(o.Drp, {
                                id: "copy-link",
                                label: "Copy Link",
                                action: () => {
                                    let e = (0, l.yA)(t);
                                    (0, p.C)(e, () => {
                                        (0, o.showToast)({
                                            id: "experiment-link-copied",
                                            message: "Copied experiment link",
                                            type: o.ToastType.SUCCESS,
                                        });
                                    });
                                },
                            }),
                        null != i &&
                            (0, r.jsx)(o.Drp, {
                                id: "clear-override",
                                label: "Clear Override",
                                color: "danger",
                                icon: o.ucK,
                                action: () => (0, c.t$)(a, t, null),
                            }),
                    ],
                }),
            ],
        },
        t,
    );
}

function O() {
    let { experiments: e, overridesInfo: t } = (0, d.hI)(),
        { experiments: n, overridesInfo: a } = (0, u.op)(),
        l = i.useMemo(() => {
            let r = g({}, e, n),
                i = g({}, t, a);
            return (0, _.R3)((0, _.Fm)(r), i).map((e) => {
                let { id: t, experiment: n } = e;
                return {
                    id: t,
                    experiment: n,
                    currentBucket: i[t],
                    system: n.system,
                };
            });
        }, [e, t, n, a]),
        [c, f] = i.useState(""),
        [p, m] = i.useState([]);
    i.useEffect(() => {
        0 === c.trim().length ? m(l) : m(l.filter((e) => s()(c, e.experiment.title.toLowerCase())));
    }, [l, c]);
    let E = i.useMemo(
            () =>
                l.filter((e) => {
                    let { currentBucket: t } = e;
                    return null != t;
                }),
            [l],
        ),
        O = i.useMemo(
            () =>
                p.filter((e) => {
                    let { currentBucket: t } = e;
                    return null == t;
                }),
            [p],
        ),
        A = i.useMemo(() => E.map(y), [E]),
        v = i.useMemo(() => O.map(y), [O]),
        S = (0, r.jsx)(
            o.aK1,
            {
                id: "experiments-search",
                control: (e, t) =>
                    (0, r.jsx)(
                        o.VPO,
                        b(g({}, e), {
                            query: c,
                            onChange: f,
                            ref: t,
                            placeholder: h.intl.string(h.t["5h0QOP"]),
                        }),
                    ),
            },
            "experiments-search",
        );
    return A.length > 0
        ? [
              (0, r.jsx)(
                  o.rXV,
                  {
                      label: "Overridden Experiments",
                      children: A,
                  },
                  "overridden-group",
              ),
              (0, r.jsx)(o.bXX, {}, "separator-2"),
              (0, r.jsxs)(
                  o.Drp,
                  {
                      id: "other-experiments",
                      label: "Other Experiments",
                      children: [S, v],
                  },
                  "other-experiments",
              ),
          ]
        : [S, ...v];
}
