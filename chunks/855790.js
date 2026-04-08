"use strict";
n.d(t, { Ay: () => y, q0: () => f });
var i = n(627968),
    s = n(64700),
    a = n(503698),
    l = n.n(a),
    r = n(133977),
    o = n.n(r),
    d = n(990078),
    c = n(397927),
    u = n(652215),
    h = n(17870);
let p = u.UVF.DEFAULT,
    f = 1,
    A = s.createContext({ type: p, opacity: f }),
    _ = s.createContext(void 0),
    g = (e) => {
        let { children: t, className: n, ...s } = e;
        return (0, i.jsx)(A.Consumer, {
            children: (e) => {
                let { type: a } = e;
                return (0, i.jsx)(_.Consumer, {
                    children: (e) =>
                        (0, i.jsx)("div", { className: l()(h.bar, h[o()(a)], n), style: e, ...s, children: t }),
                });
            },
        });
    };
class m extends s.PureComponent {
    static defaultProps = { disableScroll: !1 };
    render() {
        let { disableScroll: e, children: t, className: n } = this.props;
        return (0, i.jsx)(_.Consumer, {
            children: (s) =>
                (0, i.jsx)(A.Consumer, {
                    children: (a) => {
                        let r = l()(h.body, h[o()(a.type)], n);
                        return e
                            ? (0, i.jsx)("div", { className: r, style: s, children: t })
                            : (0, i.jsx)(c.HOs, { fade: !0, className: r, children: t });
                    },
                }),
        });
    }
}
let x = (e) => {
        let { type: t = p, width: n, height: s, children: a, className: r, opacity: d = f, onClick: c } = e;
        return (0, i.jsx)(A.Provider, {
            value: { type: t, opacity: d },
            children: (0, i.jsx)("div", {
                className: l()(h.widget, h[o()(t)], r),
                style: { width: n, height: s },
                onClick: c,
                children: a,
            }),
        });
    },
    E = (e) => {
        let { children: t, className: n, dynamicSize: s = !1 } = e;
        return (0, i.jsx)(_.Consumer, {
            children: (e) =>
                (0, i.jsx)("div", { className: l()(h.content, { [h.staticSize]: !s }, n), style: e, children: t }),
        });
    };
(x.Background = (e) => {
    let { children: t, opacityOverride: n } = e;
    if (null == t) return null;
    let a = [g, m, E];
    return (0, i.jsx)(A.Consumer, {
        children: (e) => {
            let { opacity: l } = e,
                r = { backgroundColor: `rgba(54, 57, 63, ${"" + (n ?? l)})` };
            if ("string" == typeof t.type) return s.cloneElement(t, { style: r });
            {
                if (a.includes(t.type)) return (0, i.jsx)(_.Provider, { value: r, children: t });
                let e = t.type.displayName;
                throw Error(
                    `Widget.Background cannot be wrapped around ${e}. Pass a DOM node or one of ${a.map((e) => "Widget." + e.name).join(",")}`,
                );
            }
        },
    });
}),
    (x.Body = m),
    (x.Content = E),
    (x.Icon = (e) => {
        let {
            ref: t,
            icon: n,
            label: s,
            onClick: a,
            tooltipPosition: r = "top",
            isTutorial: o = !1,
            isActive: u,
            size: p = 20,
        } = e;
        return (0, i.jsx)(d.m, {
            __unsupportedReactNodeAsText: o ? (0, i.jsx)("div", { className: h.tutorialTip, children: s }) : s,
            "aria-label": s,
            position: r,
            forceOpen: o,
            children: (0, i.jsx)(c.DUT, {
                onClick: a,
                className: l()(h.icon, { [h.toggledIconOn]: u }),
                innerRef: t,
                "aria-label": s,
                children: (0, i.jsx)(n, { color: "currentColor", size: "custom", width: p, height: p, role: "img" }),
            }),
        });
    }),
    (x.Bar = g);
let y = x;
