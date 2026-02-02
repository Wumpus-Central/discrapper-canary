n.d(t, {
    A: () => m,
}),
    n(65821),
    n(228524);
var i = n(627968),
    r = n(64700),
    l = n(136722),
    a = n(435371),
    s = n(397927),
    o = n(225419),
    c = n(268199),
    d = n(90430),
    u = n(644020);
class p extends r.PureComponent {
    getOverwriteValue(e) {
        let { allow: t, deny: n } = this.props;
        if (null == t || null == n) throw Error("PermissionsForm.getOverwriteValue: Invalid allow or deny props");
        return l.zy(t, e) ? c.A.ALLOW : l.zy(n, e) ? c.A.DENY : c.A.PASSTHROUGH;
    }
    getPermissionValue(e, t) {
        return l.zy(t, e);
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
                children: (0, i.jsx)(s.KTN, {
                    size: "sm",
                    color: "currentColor",
                    className: u.Kk,
                }),
            }),
        });
    }
    renderComponent(e, t) {
        let { title: n, description: r, flag: l } = e,
            { permissions: a, locked: c, permissionRender: u, guildId: p } = this.props,
            m = null == u ? void 0 : u(l),
            g = !!(c || m),
            b = "string" == typeof m && "" !== m ? s.KTN : void 0,
            f =
                null == a
                    ? (0, i.jsx)(
                          d.A,
                          {
                              label: n,
                              description: (0, o.Nk)(r),
                              icon: b,
                              disabled: g,
                              value: this.getOverwriteValue(l),
                              onChange: (e) => this.handleChange(l, e),
                          },
                          String(l),
                      )
                    : (0, i.jsx)(
                          s.dOG,
                          {
                              label: n,
                              description: (0, o.Nk)(r),
                              icon: b,
                              disabled: g,
                              checked: this.getPermissionValue(l, a),
                              onChange: (e) => this.handleChange(l, e),
                          },
                          String(l),
                      ),
            h = (0, o.x3)(l, p);
        return (0, i.jsxs)(i.Fragment, {
            children: [
                t > 0 && (0, i.jsx)(s.cGx, {}),
                (0, i.jsxs)(s.BJc, {
                    gap: 8,
                    children: [
                        f,
                        null != h &&
                            (0, i.jsx)(s.po8, {
                                messageType: s.YCn.WARNING,
                                children: h,
                            }),
                        "string" == typeof m &&
                            "" !== m &&
                            (0, i.jsx)(s.Text, {
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
        var e;
        let { spec: t, className: n } = this.props;
        return (0, i.jsx)("div", {
            className: n,
            children: (0, i.jsx)(s.nVY, {
                label: t.title,
                description: null != (e = (0, o.Nk)(t.description)) ? e : void 0,
                children: t.permissions.map(this.renderComponent, this),
            }),
        });
    }
}
let m = p;
