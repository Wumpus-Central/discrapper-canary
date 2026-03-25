n.d(t, { A: () => g });
var i = n(627968),
    l = n(64700),
    s = n(136722),
    a = n(435371),
    r = n(397927),
    o = n(225419),
    d = n(268199),
    c = n(90430),
    u = n(644020);
class m extends l.PureComponent {
    getOverwriteValue(e) {
        let { allow: t, deny: n } = this.props;
        if (null == t || null == n) throw Error("PermissionsForm.getOverwriteValue: Invalid allow or deny props");
        return s.zy(t, e) ? d.A.ALLOW : s.zy(n, e) ? d.A.DENY : d.A.PASSTHROUGH;
    }
    getPermissionValue(e, t) {
        return s.zy(t, e);
    }
    handleChange(e, t) {
        let { onChange: n } = this.props;
        n(e, t);
    }
    renderDisabledIndicator(e) {
        return (0, i.jsx)(a.m_, {
            text: e,
            position: "top",
            children: (0, i.jsx)("span", {
                children: (0, i.jsx)(r.KTN, { size: "sm", color: "currentColor", className: u.Kk }),
            }),
        });
    }
    renderComponent(e, t) {
        let { title: n, description: l, flag: s } = e,
            { permissions: a, locked: d, permissionRender: u } = this.props,
            m = u?.(s),
            g = !!(d || m),
            x = "string" == typeof m && "" !== m ? r.KTN : void 0,
            h =
                null == a
                    ? (0, i.jsx)(
                          c.A,
                          {
                              label: n,
                              description: (0, o.Nk)(l),
                              icon: x,
                              disabled: g,
                              value: this.getOverwriteValue(s),
                              onChange: (e) => this.handleChange(s, e),
                          },
                          String(s),
                      )
                    : (0, i.jsx)(
                          r.dOG,
                          {
                              label: n,
                              description: (0, o.Nk)(l),
                              icon: x,
                              disabled: g,
                              checked: this.getPermissionValue(s, a),
                              onChange: (e) => this.handleChange(s, e),
                          },
                          String(s),
                      );
        return (0, i.jsxs)(i.Fragment, {
            children: [
                t > 0 && (0, i.jsx)(r.cGx, {}),
                (0, i.jsxs)(r.BJc, {
                    gap: 8,
                    children: [
                        h,
                        "string" == typeof m &&
                            "" !== m &&
                            (0, i.jsx)(r.Text, {
                                variant: "text-xs/medium",
                                color: "text-feedback-critical",
                                children: m,
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
            children: (0, i.jsx)(r.nVY, {
                label: e.title,
                description: (0, o.Nk)(e.description) ?? void 0,
                children: e.permissions.map(this.renderComponent, this),
            }),
        });
    }
}
let g = m;
