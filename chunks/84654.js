"use strict";
n.d(t, { A: () => E });
var r = n(627968),
    i = n(64700),
    s = n(91871),
    a = n.n(s),
    o = n(397927),
    l = n(100392),
    u = n(102609),
    c = n(386976),
    d = n(32523),
    _ = n(769054),
    f = n(957565),
    p = n(222735),
    h = n(985018);
function m(e) {
    let { id: t, experiment: n, currentBucket: i, system: s } = e,
        a = (0, _.h)(n);
    return (0, r.jsxs)(
        o.Drp,
        {
            id: t.replaceAll("--", "__"),
            label: n.title,
            action: () => (0, u.t$)(s, t, null),
            children: [
                a.map((e) =>
                    (0, r.jsx)(
                        o.sLh,
                        {
                            id: `${e.id}`,
                            label: e.label,
                            checked: e.id === i?.variantId,
                            action: () => (0, u.t$)(s, t, e.id),
                        },
                        `${e.id}`,
                    ),
                ),
                (0, r.jsxs)(o.rXV, {
                    children: [
                        f.p5 &&
                            (0, r.jsx)(o.Drp, {
                                id: "copy-link",
                                label: "Copy Link",
                                action: () => {
                                    let e = (0, l.yA)(t);
                                    (0, f.C)(e, () => {
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
                                action: () => (0, u.t$)(s, t, null),
                            }),
                    ],
                }),
            ],
        },
        t,
    );
}
function E() {
    let { experiments: e, overridesInfo: t } = (0, d.hI)(),
        { experiments: n, overridesInfo: s } = (0, c.op)(),
        l = i.useMemo(() => {
            let r = { ...e, ...n },
                i = { ...t, ...s };
            return (0, p.R3)((0, p.Fm)(r), i).map((e) => {
                let { id: t, experiment: n } = e;
                return { id: t, experiment: n, currentBucket: i[t], system: n.system };
            });
        }, [e, t, n, s]),
        [u, _] = i.useState(""),
        [f, E] = i.useState([]);
    i.useEffect(() => {
        0 === u.trim().length ? E(l) : E(l.filter((e) => a()(u, e.experiment.title.toLowerCase())));
    }, [l, u]);
    let g = i.useMemo(
            () =>
                l.filter((e) => {
                    let { currentBucket: t } = e;
                    return null != t;
                }),
            [l],
        ),
        A = i.useMemo(
            () =>
                f.filter((e) => {
                    let { currentBucket: t } = e;
                    return null == t;
                }),
            [f],
        ),
        I = i.useMemo(() => g.map(m), [g]),
        T = i.useMemo(() => A.map(m), [A]),
        S = (0, r.jsx)(
            o.aK1,
            {
                id: "experiments-search",
                control: (e, t) =>
                    (0, r.jsx)(o.VPO, {
                        ...e,
                        query: u,
                        onChange: _,
                        ref: t,
                        placeholder: h.intl.string(h.t["5h0QOP"]),
                    }),
            },
            "experiments-search",
        );
    return I.length > 0
        ? [
              (0, r.jsx)(o.rXV, { label: "Overridden Experiments", children: I }, "overridden-group"),
              (0, r.jsx)(o.bXX, {}, "separator-2"),
              (0, r.jsxs)(
                  o.Drp,
                  { id: "other-experiments", label: "Other Experiments", children: [S, T] },
                  "other-experiments",
              ),
          ]
        : [S, ...T];
}
