n.d(t, { Z: () => u }), n(388685);
var r = n(255367),
    l = n(73800),
    i = n(481060),
    o = n(259580),
    a = n(785717),
    c = n(286957),
    s = n(388032),
    d = n(8902);
function u(e) {
    let { tags: t } = e,
        n = null == t ? void 0 : t.filter((e) => null != (0, c.z)(e)),
        i = (0, l.useRef)(new Map()),
        o = (0, l.useRef)(null),
        [s, u] = (0, l.useState)(0),
        [b, j] = (0, l.useState)(!1),
        { trackUserProfileAction: y } = (0, a.KZ)(),
        x = g(o, n, i, u);
    if (
        ((0, l.useEffect)(
            () => (
                x(),
                window.addEventListener("resize", x),
                () => {
                    window.removeEventListener("resize", x);
                }
            ),
            [x, null == n ? void 0 : n.join("")],
        ),
        null == n || 0 === n.length)
    )
        return null;
    let h = b ? n : n.slice(0, n.length - s);
    return (0, r.jsxs)("div", {
        className: d.tagListContainer,
        children: [
            h.map((e) =>
                (0, r.jsx)(
                    f,
                    {
                        tag: e,
                        ref: (t) => {
                            null != t && i.current.set(e, t);
                        },
                    },
                    e,
                ),
            ),
            s > 0 &&
                (b
                    ? (0, r.jsx)(m, {
                          onClick: () => {
                              j(!1), y({ action: "COLLAPSE_GAME_TAGS" });
                          },
                      })
                    : (0, r.jsx)(p, {
                          numHidden: s,
                          onClick: () => {
                              j(!0), y({ action: "EXPAND_GAME_TAGS" });
                          },
                          ref: o,
                      })),
        ],
    });
}
let f = (e) => {
        let { tag: t, ref: n } = e,
            l = (0, c.z)(t);
        if (null == l) return null;
        let { getText: o, icon: a } = l;
        return (0, r.jsxs)("div", {
            className: d.tag,
            ref: n,
            children: [
                (0, r.jsx)(a, { size: "xxs" }),
                (0, r.jsx)(i.Text, {
                    variant: "text-xxs/medium",
                    color: "text-secondary",
                    children: o(),
                }),
            ],
        });
    },
    p = (e) => {
        let { numHidden: t, onClick: n, ref: l } = e;
        return (0, r.jsx)(i.DY3, {
            className: d.buttonContainer,
            text: s.intl.string(s.t.mriLXF),
            children: (0, r.jsx)(i.P3F, {
                onClick: n,
                className: d.expandButton,
                innerRef: l,
                "aria-label": s.intl.string(s.t.mriLXF),
                children: (0, r.jsx)(i.Text, {
                    variant: "text-xxs/medium",
                    color: "text-secondary",
                    children: "+".concat(t),
                }),
            }),
        });
    },
    m = (e) => {
        let { onClick: t } = e;
        return (0, r.jsx)(i.DY3, {
            className: d.buttonContainer,
            text: s.intl.string(s.t.z9VPra),
            children: (0, r.jsx)(i.P3F, {
                onClick: t,
                className: d.collapseButton,
                "aria-label": s.intl.string(s.t.z9VPra),
                children: (0, r.jsx)(o.Z, {
                    direction: o.Z.Directions.LEFT,
                    width: 12,
                    height: 12,
                    className: d.caret,
                }),
            }),
        });
    },
    g = (e, t, n, r) =>
        (0, l.useCallback)(() => {
            var l, i;
            if (null == t) return void r(0);
            let o = null != (i = null == (l = e.current) ? void 0 : l.getBoundingClientRect().width) ? i : 0,
                a = 0,
                c = 0,
                s = n.current;
            for (let e = 0; e < t.length; e++) {
                let n = s.get(t[e]);
                if (null != n) {
                    if ((c += n.offsetWidth + 4) > 296) break;
                    a++;
                }
            }
            c = 0;
            for (let e = a; e < t.length; e++) {
                let n = s.get(t[e]);
                if (null != n) {
                    if ((c += n.offsetWidth + 4) > 296 - o) break;
                    a++;
                }
            }
            r(t.length - a);
        }, [e, null == t ? void 0 : t.join(""), n, r]);
