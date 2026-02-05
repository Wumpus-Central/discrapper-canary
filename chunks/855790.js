"use strict";
n.d(t, { Ay: () => y, q0: () => A });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(133977),
    o = n.n(r),
    d = n(990078),
    c = n(397927),
    u = n(652215),
    h = n(484932);
let p = u.UVF.DEFAULT,
    A = 1,
    f = s.createContext({ type: p, opacity: A }),
    g = s.createContext(void 0),
    _ = (e) => {
        let { children: t, className: n, ...s } = e;
        return (0, i.jsx)(f.Consumer, {
            children: (e) => {
                let { type: l } = e;
                return (0, i.jsx)(g.Consumer, {
                    children: (e) =>
                        (0, i.jsx)("div", { className: a()(h.bar, h[o()(l)], n), style: e, ...s, children: t }),
                });
            },
        });
    };
class m extends s.PureComponent {
    static defaultProps = { disableScroll: !1 };
    render() {
        let { disableScroll: e, children: t, className: n } = this.props;
        return (0, i.jsx)(g.Consumer, {
            children: (s) =>
                (0, i.jsx)(f.Consumer, {
                    children: (l) => {
                        let r = a()(h.body, h[o()(l.type)], n);
                        return e
                            ? (0, i.jsx)("div", { className: r, style: s, children: t })
                            : (0, i.jsx)(c.HOs, { fade: !0, className: r, children: t });
                    },
                }),
        });
    }
}
let E = (e) => {
        let { type: t = p, width: n, height: s, children: l, className: r, opacity: d = A, onClick: c } = e;
        return (0, i.jsx)(f.Provider, {
            value: { type: t, opacity: d },
            children: (0, i.jsx)("div", {
                className: a()(h.widget, h[o()(t)], r),
                style: { width: n, height: s },
                onClick: c,
                children: l,
            }),
        });
    },
    x = (e) => {
        let { children: t, className: n, dynamicSize: s = !1 } = e;
        return (0, i.jsx)(g.Consumer, {
            children: (e) =>
                (0, i.jsx)("div", { className: a()(h.content, { [h.staticSize]: !s }, n), style: e, children: t }),
        });
    };
(E.Background = (e) => {
    let { children: t, opacityOverride: n } = e;
    if (null == t) return null;
    let l = [_, m, x];
    return (0, i.jsx)(f.Consumer, {
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
    (E.Body = m),
    (E.Content = x),
    (E.Icon = (e) => {
        let {
            ref: t,
            icon: n,
            label: s,
            onClick: l,
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
                onClick: l,
                className: a()(h.icon, { [h.toggledIconOn]: u }),
                innerRef: t,
                "aria-label": s,
                children: (0, i.jsx)(n, { color: "currentColor", size: "custom", width: p, height: p, role: "img" }),
            }),
        });
    }),
    (E.Bar = _);
let y = E;
