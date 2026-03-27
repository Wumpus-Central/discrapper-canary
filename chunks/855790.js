"use strict";
i.d(t, { Ay: () => y, q0: () => p });
var n = i(627968),
    s = i(64700),
    a = i(503698),
    l = i.n(a),
    r = i(133977),
    o = i.n(r),
    d = i(990078),
    c = i(397927),
    u = i(652215),
    h = i(17870);
let _ = u.UVF.DEFAULT,
    p = 1,
    f = s.createContext({ type: _, opacity: p }),
    m = s.createContext(void 0),
    g = (e) => {
        let { children: t, className: i, ...s } = e;
        return (0, n.jsx)(f.Consumer, {
            children: (e) => {
                let { type: a } = e;
                return (0, n.jsx)(m.Consumer, {
                    children: (e) =>
                        (0, n.jsx)("div", { className: l()(h.bar, h[o()(a)], i), style: e, ...s, children: t }),
                });
            },
        });
    };
class A extends s.PureComponent {
    static defaultProps = { disableScroll: !1 };
    render() {
        let { disableScroll: e, children: t, className: i } = this.props;
        return (0, n.jsx)(m.Consumer, {
            children: (s) =>
                (0, n.jsx)(f.Consumer, {
                    children: (a) => {
                        let r = l()(h.body, h[o()(a.type)], i);
                        return e
                            ? (0, n.jsx)("div", { className: r, style: s, children: t })
                            : (0, n.jsx)(c.HOs, { fade: !0, className: r, children: t });
                    },
                }),
        });
    }
}
let x = (e) => {
        let { type: t = _, width: i, height: s, children: a, className: r, opacity: d = p, onClick: c } = e;
        return (0, n.jsx)(f.Provider, {
            value: { type: t, opacity: d },
            children: (0, n.jsx)("div", {
                className: l()(h.widget, h[o()(t)], r),
                style: { width: i, height: s },
                onClick: c,
                children: a,
            }),
        });
    },
    v = (e) => {
        let { children: t, className: i, dynamicSize: s = !1 } = e;
        return (0, n.jsx)(m.Consumer, {
            children: (e) =>
                (0, n.jsx)("div", { className: l()(h.content, { [h.staticSize]: !s }, i), style: e, children: t }),
        });
    };
(x.Background = (e) => {
    let { children: t, opacityOverride: i } = e;
    if (null == t) return null;
    let a = [g, A, v];
    return (0, n.jsx)(f.Consumer, {
        children: (e) => {
            let { opacity: l } = e,
                r = { backgroundColor: `rgba(54, 57, 63, ${"" + (i ?? l)})` };
            if ("string" == typeof t.type) return s.cloneElement(t, { style: r });
            {
                if (a.includes(t.type)) return (0, n.jsx)(m.Provider, { value: r, children: t });
                let e = t.type.displayName;
                throw Error(
                    `Widget.Background cannot be wrapped around ${e}. Pass a DOM node or one of ${a.map((e) => "Widget." + e.name).join(",")}`,
                );
            }
        },
    });
}),
    (x.Body = A),
    (x.Content = v),
    (x.Icon = (e) => {
        let {
            ref: t,
            icon: i,
            label: s,
            onClick: a,
            tooltipPosition: r = "top",
            isTutorial: o = !1,
            isActive: u,
            size: _ = 20,
        } = e;
        return (0, n.jsx)(d.m, {
            __unsupportedReactNodeAsText: o ? (0, n.jsx)("div", { className: h.tutorialTip, children: s }) : s,
            "aria-label": s,
            position: r,
            forceOpen: o,
            children: (0, n.jsx)(c.DUT, {
                onClick: a,
                className: l()(h.icon, { [h.toggledIconOn]: u }),
                innerRef: t,
                "aria-label": s,
                children: (0, n.jsx)(i, { color: "currentColor", size: "custom", width: _, height: _, role: "img" }),
            }),
        });
    }),
    (x.Bar = g);
let y = x;
