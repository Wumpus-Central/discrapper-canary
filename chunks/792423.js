n.d(t, { Z: () => d }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(755721),
    o = n(481060),
    s = n(401190),
    l = n(388032),
    c = n(919047);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
class d extends i.PureComponent {
    renderErrorMessage() {
        let { hasError: e } = this.state;
        return e
            ? (0, r.jsx)("div", {
                  className: c.error,
                  children: l.intl.string(l.t.UUcECA),
              })
            : null;
    }
    render() {
        let { isRequestPending: e } = this.state,
            { isHypeSquadOnlineMember: t } = this.props;
        return t
            ? (0, r.jsxs)("div", {
                  className: c.leaveActionWrapper,
                  children: [
                      this.renderErrorMessage(),
                      (0, r.jsxs)(o.Text, {
                          variant: "text-sm/normal",
                          children: [
                              l.intl.string(l.t.ziWmcH),
                              (0, r.jsx)(a.zx, {
                                  className: c.leaveButton,
                                  color: a.zx.Colors.LINK,
                                  look: a.zx.Looks.LINK,
                                  onClick: this.handleLeaveHypeSquadClick,
                                  size: a.zx.Sizes.NONE,
                                  submitting: e,
                                  children: l.intl.string(l.t["WH+dho"]),
                              }),
                          ],
                      }),
                  ],
              })
            : null;
    }
    constructor(...e) {
        super(...e),
            u(this, "state", {
                isRequestPending: !1,
                hasError: !1,
            }),
            u(this, "handleLeaveHypeSquadError", () => {
                this.setState({ hasError: !0 });
            }),
            u(this, "handleLeaveHypeSquadClick", () => {
                this.setState({ isRequestPending: !0 }, () => {
                    s.Z.leaveHypeSquadOnline()
                        .then(() => {
                            this.setState({ isRequestPending: !1 });
                        })
                        .catch(() => {
                            this.setState({
                                hasError: !0,
                                isRequestPending: !1,
                            });
                        });
                });
            });
    }
}
