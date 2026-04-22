"use strict";
n.d(t, { Ay: () => v, q0: () => A });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(133977),
    o = n.n(r),
    d = n(990078),
    c = n(573613),
    u = n(939249),
    h = n(652215),
    p = n(960063);
let f = h.UVF.DEFAULT,
    A = 1,
    _ = s.createContext({ type: f, opacity: A }),
    g = s.createContext(void 0),
    m = (e) => {
        let { children: t, className: n, ...s } = e;
        return (0, i.jsx)(_.Consumer, {
            children: (e) => {
                let { type: l } = e;
                return (0, i.jsx)(g.Consumer, {
                    children: (e) =>
                        (0, i.jsx)("div", { className: a()(p.bar, p[o()(l)], n), style: e, ...s, children: t }),
                });
            },
        });
    };
class x extends s.PureComponent {
    static defaultProps = { disableScroll: !1 };
    render() {
        let { disableScroll: e, children: t, className: n } = this.props;
        return (0, i.jsx)(g.Consumer, {
            children: (s) =>
                (0, i.jsx)(_.Consumer, {
                    children: (l) => {
                        let r = a()(p.body, p[o()(l.type)], n);
                        return e
                            ? (0, i.jsx)("div", { className: r, style: s, children: t })
                            : (0, i.jsx)(c.Ip, { fade: !0, className: r, children: t });
                    },
                }),
        });
    }
}
let E = (e) => {
        let { type: t = f, width: n, height: s, children: l, className: r, opacity: d = A, onClick: c } = e;
        return (0, i.jsx)(_.Provider, {
            value: { type: t, opacity: d },
            children: (0, i.jsx)("div", {
                className: a()(p.widget, p[o()(t)], r),
                style: { width: n, height: s },
                onClick: c,
                children: l,
            }),
        });
    },
    y = (e) => {
        let { children: t, className: n, dynamicSize: s = !1 } = e;
        return (0, i.jsx)(g.Consumer, {
            children: (e) =>
                (0, i.jsx)("div", { className: a()(p.content, { [p.staticSize]: !s }, n), style: e, children: t }),
        });
    };
(E.Background = (e) => {
    let { children: t, opacityOverride: n } = e;
    if (null == t) return null;
    let l = [m, x, y];
    return (0, i.jsx)(_.Consumer, {
        children: (e) => {
            let { opacity: a } = e,
                r = { backgroundColor: `rgba(54, 57, 63, ${"" + (n ?? a)})` };
            if ("string" == typeof t.type) return s.cloneElement(t, { style: r });
            {
                if (l.includes(t.type)) return (0, i.jsx)(g.Provider, { value: r, children: t });
                let e = t.type.displayName;
                throw Error(
                    `Widget.Background cannot be wrapped around ${e}. Pass a DOM node or one of ${l.map((e) => "Widget." + e.name).join(",")}`,
                );
            }
        },
    });
}),
    (E.Body = x),
    (E.Content = y),
    (E.Icon = (e) => {
        let {
            ref: t,
            icon: n,
            label: s,
            onClick: l,
            tooltipPosition: r = "top",
            isTutorial: o = !1,
            isActive: c,
            size: h = 20,
        } = e;
        return (0, i.jsx)(d.m, {
            __unsupportedReactNodeAsText: o ? (0, i.jsx)("div", { className: p.tutorialTip, children: s }) : s,
            "aria-label": s,
            position: r,
            forceOpen: o,
            children: (0, i.jsx)(u.D, {
                onClick: l,
                className: a()(p.icon, { [p.toggledIconOn]: c }),
                innerRef: t,
                "aria-label": s,
                children: (0, i.jsx)(n, { color: "currentColor", size: "custom", width: h, height: h, role: "img" }),
            }),
        });
    }),
    (E.Bar = m);
let v = E;
