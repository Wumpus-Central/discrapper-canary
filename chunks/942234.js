n.d(t, { A: () => b });
var i = n(627968),
    l = n(64700),
    s = n(136722),
    a = n(990078),
    r = n(428678),
    o = n(243721),
    d = n(404778),
    c = n(331322),
    u = n(834730),
    m = n(270003),
    g = n(225419),
    h = n(268199),
    x = n(90430),
    p = n(492289);
class A extends l.PureComponent {
    getOverwriteValue(e) {
        let { allow: t, deny: n } = this.props;
        if (null == t || null == n) throw Error("PermissionsForm.getOverwriteValue: Invalid allow or deny props");
        return s.zy(t, e) ? h.A.ALLOW : s.zy(n, e) ? h.A.DENY : h.A.PASSTHROUGH;
    }
    getPermissionValue(e, t) {
        return s.zy(t, e);
    }
    handleChange(e, t) {
        let { onChange: n } = this.props;
        n(e, t);
    }
    renderDisabledIndicator(e) {
        return (0, i.jsx)(a.m, {
            text: e,
            position: "top",
            children: (0, i.jsx)("span", {
                children: (0, i.jsx)(r.K, { size: "sm", color: "currentColor", className: p.Kk }),
            }),
        });
    }
    renderComponent(e, t) {
        let { title: n, description: l, flag: s } = e,
            { permissions: a, locked: m, permissionRender: h } = this.props,
            p = h?.(s),
            A = !!(m || p),
            b = "string" == typeof p && "" !== p ? r.K : void 0,
            f =
                null == a
                    ? (0, i.jsx)(
                          x.A,
                          {
                              label: n,
                              description: (0, g.Nk)(l),
                              icon: b,
                              disabled: A,
                              value: this.getOverwriteValue(s),
                              onChange: (e) => this.handleChange(s, e),
                          },
                          String(s),
                      )
                    : (0, i.jsx)(
                          o.d,
                          {
                              label: n,
                              description: (0, g.Nk)(l),
                              icon: b,
                              disabled: A,
                              checked: this.getPermissionValue(s, a),
                              onChange: (e) => this.handleChange(s, e),
                          },
                          String(s),
                      );
        return (0, i.jsxs)(i.Fragment, {
            children: [
                t > 0 && (0, i.jsx)(d.c, {}),
                (0, i.jsxs)(c.B, {
                    gap: 8,
                    children: [
                        f,
                        "string" == typeof p &&
                            "" !== p &&
                            (0, i.jsx)(u.E, {
                                variant: "text-xs/medium",
                                color: "text-feedback-critical",
                                children: p,
                            }),
                    ],
                }),
            ],
        });
    }
    render() {
        let { spec: e, className: t } = this.props;
        return (0, i.jsx)("div", {
            className: t,
            children: (0, i.jsx)(m.n, {
                label: e.title,
                description: (0, g.Nk)(e.description) ?? void 0,
                children: e.permissions.map(this.renderComponent, this),
            }),
        });
    }
}
let b = A;
