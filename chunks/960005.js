n.d(t, { A: () => u });
var i = n(627968),
    s = n(64700),
    a = n(503698),
    l = n.n(a),
    r = n(40153),
    o = n(397927),
    c = n(180022),
    d = n(915693);
let u = (e) => {
    let { cards: t, className: n, cardType: a } = e,
        u = () => (window.innerWidth < 910 ? 1 : window.innerWidth < 1400 ? 2 : 3),
        [_, m] = s.useState(0),
        [A, g] = s.useState(u()),
        h = t.length;
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
            m((e) => (h > A && e > h - A ? h - A : h <= A ? 0 : e));
        }, [h, A]);
    let x = _ > 0,
        p = s.useCallback((e) => ({ x: (e - _) * 100 }), [_]),
        [E, C] = (0, o.mX6)(t.length, p);
    return (
        s.useEffect(() => {
            C(p);
        }, [C, p]),
        (0, i.jsx)("div", {
            className: n,
            children: (0, i.jsxs)("div", {
                className: d.Ui,
                children: [
                    h > A &&
                        (0, i.jsx)(o.DUT, {
                            onClick: x
                                ? () => {
                                      m((e) => (0 === e ? h - A : e - 1));
                                  }
                                : void 0,
                            className: l()({ [d.v5]: x, [d.$T]: !x }),
                            children: (0, i.jsx)(o.rJJ, { className: d.D6, colorClass: d.D6 }),
                        }),
                    (0, i.jsx)("div", {
                        className: d.C8,
                        children: E.map((e, n) => {
                            let { x: s } = e;
                            return (0, i.jsx)(
                                r.animated.div,
                                {
                                    className: d.Nr,
                                    style: { transform: s?.to((e) => `translate3d(${e}%,0,0)`) },
                                    children: (0, i.jsx)(c.A, { ...t[n], cardType: a }, `${t[n].name}_${n}_perks_card`),
                                },
                                `${t[n].name}_${n}_animated_div`,
                            );
                        }),
                    }),
                    h > A &&
                        (0, i.jsx)(o.DUT, {
                            onClick: () => {
                                m((e) => (e >= h - A ? 0 : e + 1));
                            },
                            className: d.Ox,
                            children: (0, i.jsx)(o.EdP, { className: d.D6, colorClass: d.D6 }),
                        }),
                    h > A &&
                        (0, i.jsx)("div", {
                            className: d.$$,
                            children: t.map((e, t) => {
                                if (!(t > h - A))
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
