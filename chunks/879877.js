n.d(t, { Z: () => f }), n(361932), n(187205), n(49124), n(388685), n(539854);
var r = n(255367),
    l = n(73800),
    o = n(481060),
    i = n(259580),
    a = n(785717),
    c = n(286957),
    s = n(388032),
    d = n(300695);
let u = (e) => {
    if (null == e) return 0;
    let { width: t } = e.getBoundingClientRect();
    return t > 0 ? t + 4 : 0;
};
function f(e) {
    let { tags: t } = e,
        n = l.useRef({}),
        f = (e, t) => {
            null != t ? (n.current[e] = t) : delete n.current[e];
        },
        p = l.useMemo(
            () =>
                null == t || 0 === t.length
                    ? []
                    : t.flatMap((e) => {
                          let t = (0, c.z)(e);
                          return null != t
                              ? [
                                    {
                                        tag: e,
                                        metadata: t,
                                    },
                                ]
                              : [];
                      }),
            [JSON.stringify(t)],
        ),
        [m, g] = l.useState([]),
        [b, j] = l.useState(296),
        [h, y] = l.useState(!1),
        x = l.useRef(null),
        O = l.useRef(0);
    l.useLayoutEffect(() => {
        O.current = 0;
    }, [JSON.stringify(t)]);
    let v = l.useRef(null);
    l.useLayoutEffect(() => {
        if (h || null == v.current) return;
        let e = new ResizeObserver(() => {
            let e = u(x.current),
                t = [],
                r = 296 - e;
            for (let e = 0; e < 2; e++) {
                let l = 1 === e ? r : 296;
                for (let e = 0, r = t.length; r < p.length; r++) {
                    let o = p[r],
                        i = n.current[o.tag];
                    if (null == i) {
                        0 === O.current && t.push(o);
                        continue;
                    }
                    let a = Math.min(i.getBoundingClientRect().width, l);
                    if (e + a > l) break;
                    (e += a + 4), t.push(o);
                }
            }
            g(t.length === m.length ? m : t), j(r), O.current++;
        });
        return (
            e.observe(v.current),
            () => {
                e.disconnect();
            }
        );
    }, [p, m, h]);
    let { trackUserProfileAction: _ } = (0, a.KZ)(),
        I = l.useCallback(() => {
            y(!0), _({ action: "EXPAND_GAME_TAGS" });
        }, [_]),
        P = l.useCallback(() => {
            y(!1), _({ action: "COLLAPSE_GAME_TAGS" });
        }, [_]);
    if (0 === p.length) return null;
    let E = h ? p : m;
    return (0, r.jsxs)("div", {
        className: d.tagListContainer,
        children: [
            (0, r.jsx)("ul", {
                ref: v,
                className: d.tagList,
                "aria-label": "Game Tags",
                children: E.map((e, t) => {
                    let { tag: n, metadata: l } = e,
                        { text: i, icon: a } = l;
                    return (0, r.jsxs)(
                        "li",
                        {
                            className: d.tag,
                            ref: (e) => f(n, e),
                            style: { maxWidth: h || t !== m.length - 1 ? 296 : b },
                            children: [
                                (0, r.jsx)(a, { size: "xxs" }),
                                (0, r.jsx)(o.Text, {
                                    variant: "text-xxs/medium",
                                    color: "text-secondary",
                                    children: i,
                                }),
                            ],
                        },
                        n,
                    );
                }),
            }),
            m.length < p.length
                ? h
                    ? (0, r.jsx)(o.DY3, {
                          className: d.buttonContainer,
                          text: s.intl.string(s.t.z9VPra),
                          children: (0, r.jsx)(o.P3F, {
                              onClick: P,
                              className: d.collapseButton,
                              children: (0, r.jsx)(i.Z, {
                                  direction: i.Z.Directions.LEFT,
                                  width: 12,
                                  height: 12,
                                  className: d.caret,
                              }),
                          }),
                      })
                    : (0, r.jsx)(o.DY3, {
                          className: d.buttonContainer,
                          text: s.intl.string(s.t.mriLXF),
                          children: (0, r.jsx)(o.P3F, {
                              innerRef: x,
                              onClick: I,
                              className: d.expandButton,
                              children: (0, r.jsx)(o.Text, {
                                  variant: "text-xxs/medium",
                                  color: "text-secondary",
                                  children: "+".concat(p.length - m.length),
                              }),
                          }),
                      })
                : null,
        ],
    });
}
