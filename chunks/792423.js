(n.d(t, { Z: () => u }), n(388685));
var i = n(255367),
    r = n(73800),
    s = n(755721),
    a = n(481060),
    l = n(401190),
    o = n(388032),
    c = n(585777);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class u extends r.PureComponent {
    renderErrorMessage() {
        let { hasError: e } = this.state;
        return e
            ? (0, i.jsx)('div', {
                  className: c.error,
                  children: o.intl.string(o.t.UUcECA)
              })
            : null;
    }
    render() {
        let { isRequestPending: e } = this.state,
            { isHypeSquadOnlineMember: t } = this.props;
        return t
            ? (0, i.jsxs)('div', {
                  className: c.leaveActionWrapper,
                  children: [
                      this.renderErrorMessage(),
                      (0, i.jsxs)(a.Text, {
                          variant: 'text-sm/normal',
                          children: [
                              o.intl.string(o.t.ziWmcH),
                              (0, i.jsx)(s.zx, {
                                  className: c.leaveButton,
                                  color: s.zx.Colors.LINK,
                                  look: s.zx.Looks.LINK,
                                  onClick: this.handleLeaveHypeSquadClick,
                                  size: s.zx.Sizes.NONE,
                                  submitting: e,
                                  children: o.intl.string(o.t['WH+dho'])
                              })
                          ]
                      })
                  ]
              })
            : null;
    }
    constructor(...e) {
        (super(...e),
            d(this, 'state', {
                isRequestPending: !1,
                hasError: !1
            }),
            d(this, 'handleLeaveHypeSquadError', () => {
                this.setState({ hasError: !0 });
            }),
            d(this, 'handleLeaveHypeSquadClick', () => {
                this.setState({ isRequestPending: !0 }, () => {
                    l.Z.leaveHypeSquadOnline()
                        .then(() => {
                            this.setState({ isRequestPending: !1 });
                        })
                        .catch(() => {
                            this.setState({
                                hasError: !0,
                                isRequestPending: !1
                            });
                        });
                });
            }));
    }
}
