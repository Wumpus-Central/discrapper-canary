n.d(t, { A: () => u });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    l = n(92674),
    o = n(397927),
    c = n(180022),
    d = n(915693);
let u = (e) => {
    let { cards: t, className: n, cardType: r } = e,
        u = () => (window.innerWidth < 910 ? 1 : window.innerWidth < 1400 ? 2 : 3),
        [_, m] = s.useState(0),
        [A, g] = s.useState(u()),
        E = t.length;
    s.useEffect(() => {
        let e = () => {
            g(u());
        };
        return (
            window.addEventListener("resize", e),
            () => {
                window.removeEventListener("resize", e);
            }
        );
    }, []),
        s.useEffect(() => {
            m((e) => (E > A && e > E - A ? E - A : E <= A ? 0 : e));
        }, [E, A]);
    let h = _ > 0,
        p = s.useCallback((e) => ({ x: (e - _) * 100 }), [_]),
        [C, x] = (0, o.mX6)(t.length, p);
    return (
        s.useEffect(() => {
            x(p);
        }, [x, p]),
        (0, i.jsx)("div", {
            className: n,
            children: (0, i.jsxs)("div", {
                className: d.Ui,
                children: [
                    E > A &&
                        (0, i.jsx)(o.DUT, {
                            onClick: h
                                ? () => {
                                      m((e) => (0 === e ? E - A : e - 1));
                                  }
                                : void 0,
                            className: a()({ [d.v5]: h, [d.$T]: !h }),
                            children: (0, i.jsx)(o.rJJ, { className: d.D6, colorClass: d.D6 }),
                        }),
                    (0, i.jsx)("div", {
                        className: d.C8,
                        children: C.map((e, n) => {
                            let { x: s } = e;
                            return (0, i.jsx)(
                                l.animated.div,
                                {
                                    className: d.Nr,
                                    style: { transform: s?.to((e) => `translate3d(${e}%,0,0)`) },
                                    children: (0, i.jsx)(c.A, { ...t[n], cardType: r }, `${t[n].name}_${n}_perks_card`),
                                },
                                `${t[n].name}_${n}_animated_div`,
                            );
                        }),
                    }),
                    E > A &&
                        (0, i.jsx)(o.DUT, {
                            onClick: () => {
                                m((e) => (e >= E - A ? 0 : e + 1));
                            },
                            className: d.Ox,
                            children: (0, i.jsx)(o.EdP, { className: d.D6, colorClass: d.D6 }),
                        }),
                    E > A &&
                        (0, i.jsx)("div", {
                            className: d.$$,
                            children: t.map((e, t) => {
                                if (!(t > E - A))
                                    return (0, i.jsx)(
                                        "div",
                                        { className: t === _ ? d.fc : d.Om },
                                        `progress_bar_dot_${t}`,
                                    );
                            }),
                        }),
                ],
            }),
        })
    );
};
