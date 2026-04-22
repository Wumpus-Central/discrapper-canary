"use strict";
n.d(t, { A: () => T });
var r = n(627968),
    i = n(64700),
    s = n(91871),
    a = n.n(s),
    o = n(477782),
    l = n(691540),
    u = n(97483),
    d = n(241326),
    c = n(583650),
    _ = n(100392),
    f = n(102609),
    E = n(386976),
    h = n(32523),
    p = n(769054),
    m = n(957565),
    g = n(222735),
    A = n(985018);
function I(e) {
    let { id: t, experiment: n, currentBucket: i, system: s } = e,
        a = (0, p.h)(n);
    return (0, r.jsxs)(
        o.Dr,
        {
            id: t.replaceAll("--", "__"),
            label: n.title,
            action: () => (0, f.t$)(s, t, null),
            children: [
                a.map((e) =>
                    (0, r.jsx)(
                        o.sL,
                        {
                            id: `${e.id}`,
                            label: e.label,
                            checked: e.id === i?.variantId,
                            action: () => (0, f.t$)(s, t, e.id),
                        },
                        `${e.id}`,
                    ),
                ),
                (0, r.jsxs)(o.rX, {
                    children: [
                        m.p5 &&
                            (0, r.jsx)(o.Dr, {
                                id: "copy-link",
                                label: "Copy Link",
                                action: () => {
                                    let e = (0, _.yA)(t);
                                    (0, m.C)(e, () => {
                                        (0, l.P0)({
                                            id: "experiment-link-copied",
                                            message: "Copied experiment link",
                                            type: u.Ck.SUCCESS,
                                        });
                                    });
                                },
                            }),
                        null != i &&
                            (0, r.jsx)(o.Dr, {
                                id: "clear-override",
                                label: "Clear Override",
                                color: "danger",
                                icon: d.u,
                                action: () => (0, f.t$)(s, t, null),
                            }),
                    ],
                }),
            ],
        },
        t,
    );
}
function T() {
    let { experiments: e, overridesInfo: t } = (0, h.hI)(),
        { experiments: n, overridesInfo: s } = (0, E.op)(),
        l = i.useMemo(() => {
            let r = { ...e, ...n },
                i = { ...t, ...s };
            return (0, g.R3)((0, g.Fm)(r), i).map((e) => {
                let { id: t, experiment: n } = e;
                return { id: t, experiment: n, currentBucket: i[t], system: n.system };
            });
        }, [e, t, n, s]),
        [u, d] = i.useState(""),
        [_, f] = i.useState([]);
    i.useEffect(() => {
        0 === u.trim().length ? f(l) : f(l.filter((e) => a()(u, e.experiment.title.toLowerCase())));
    }, [l, u]);
    let p = i.useMemo(
            () =>
                l.filter((e) => {
                    let { currentBucket: t } = e;
                    return null != t;
                }),
            [l],
        ),
        m = i.useMemo(
            () =>
                _.filter((e) => {
                    let { currentBucket: t } = e;
                    return null == t;
                }),
            [_],
        ),
        T = i.useMemo(() => p.map(I), [p]),
        S = i.useMemo(() => m.map(I), [m]),
        y = (0, r.jsx)(
            o.aK,
            {
                id: "experiments-search",
                control: (e, t) =>
                    (0, r.jsx)(c.V, { ...e, query: u, onChange: d, ref: t, placeholder: A.intl.string(A.t["5h0QOP"]) }),
            },
            "experiments-search",
        );
    return T.length > 0
        ? [
              (0, r.jsx)(o.rX, { label: "Overridden Experiments", children: T }, "overridden-group"),
              (0, r.jsx)(o.bX, {}, "separator-2"),
              (0, r.jsxs)(
                  o.Dr,
                  { id: "other-experiments", label: "Other Experiments", children: [y, S] },
                  "other-experiments",
              ),
          ]
        : [y, ...S];
}
