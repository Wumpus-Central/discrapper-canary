n.d(t, { Z: () => f }), n(388685);
var r = n(255367),
    l = n(73800),
    i = n(481060),
    o = n(259580),
    a = n(785717),
    c = n(978369),
    s = n(286957),
    d = n(388032),
    u = n(44258);
function f(e) {
    let { tags: t, isCurrentUser: n, widgetType: i, applicationId: o } = e,
        f = null == t ? void 0 : t.filter((e) => null != (0, s.zK)(e)),
        j = (0, l.useRef)(new Map()),
        y = (0, l.useRef)(null),
        [O, x] = (0, l.useState)(0),
        [h, v] = (0, l.useState)(!1),
        { trackUserProfileAction: _ } = (0, a.KZ)(),
        I = b(y, f, j, x);
    if (
        ((0, l.useEffect)(
            () => (
                I(),
                window.addEventListener("resize", I),
                () => {
                    window.removeEventListener("resize", I);
                }
            ),
            [I, null == f ? void 0 : f.join("")],
        ),
        null == f || 0 === f.length)
    )
        return null;
    let P = h ? f : f.slice(0, f.length - O);
    return (0, r.jsxs)("div", {
        className: u.tagListContainer,
        children: [
            (0, r.jsx)("ul", {
                className: u.tagList,
                "aria-label": d.intl.string(d.t.EfjTi4),
                children: P.map((e) =>
                    (0, r.jsx)(
                        p,
                        {
                            tag: e,
                            ref: (t) => {
                                null != t && j.current.set(e, t);
                            },
                        },
                        e,
                    ),
                ),
            }),
            O > 0 &&
                (h
                    ? (0, r.jsx)(g, {
                          onClick: () => {
                              v(!1), _({ action: "COLLAPSE_GAME_TAGS" });
                          },
                      })
                    : (0, r.jsx)(m, {
                          numHidden: O,
                          onClick: () => {
                              v(!0), _({ action: "EXPAND_GAME_TAGS" });
                          },
                          ref: y,
                      })),
            n &&
                (0, r.jsx)(c.Z, {
                    tags: t,
                    widgetType: i,
                    applicationId: o,
                }),
        ],
    });
}
let p = (e) => {
        let { tag: t, ref: n } = e,
            l = (0, s.zK)(t);
        if (null == l) return null;
        let { getText: o, icon: a } = l;
        return (0, r.jsxs)("li", {
            className: u.tag,
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
    m = (e) => {
        let { numHidden: t, onClick: n, ref: l } = e;
        return (0, r.jsx)(i.DY3, {
            className: u.buttonContainer,
            text: d.intl.string(d.t.mriLXF),
            children: (0, r.jsx)(i.P3F, {
                onClick: n,
                className: u.expandButton,
                innerRef: l,
                "aria-label": d.intl.string(d.t.mriLXF),
                children: (0, r.jsx)(i.Text, {
                    variant: "text-xxs/medium",
                    color: "text-secondary",
                    children: "+".concat(t),
                }),
            }),
        });
    },
    g = (e) => {
        let { onClick: t } = e;
        return (0, r.jsx)(i.DY3, {
            className: u.buttonContainer,
            text: d.intl.string(d.t.z9VPra),
            children: (0, r.jsx)(i.P3F, {
                onClick: t,
                className: u.collapseButton,
                "aria-label": d.intl.string(d.t.z9VPra),
                children: (0, r.jsx)(o.Z, {
                    direction: o.Z.Directions.LEFT,
                    width: 12,
                    height: 12,
                    className: u.caret,
                }),
            }),
        });
    },
    b = (e, t, n, r) =>
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
