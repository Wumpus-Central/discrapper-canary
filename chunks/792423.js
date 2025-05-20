n.d(t, { Z: () => d }), n(388685);
var i = n(255367),
    r = n(73800),
    s = n(481060),
    l = n(401190),
    a = n(388032),
    o = n(585777);
function c(e, t, n) {
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
class d extends r.PureComponent {
    renderErrorMessage() {
        let { hasError: e } = this.state;
        return e
            ? (0, i.jsx)('div', {
                  className: o.error,
                  children: a.intl.string(a.t.UUcECA)
              })
            : null;
    }
    render() {
        let { isRequestPending: e } = this.state,
            { isHypeSquadOnlineMember: t } = this.props;
        return t
            ? (0, i.jsxs)('div', {
                  className: o.leaveActionWrapper,
                  children: [
                      this.renderErrorMessage(),
                      (0, i.jsxs)(s.Text, {
                          variant: 'text-sm/normal',
                          children: [
                              a.intl.string(a.t.ziWmcH),
                              (0, i.jsx)(s.zxk, {
                                  className: o.leaveButton,
                                  color: s.zxk.Colors.LINK,
                                  look: s.zxk.Looks.LINK,
                                  onClick: this.handleLeaveHypeSquadClick,
                                  size: s.zxk.Sizes.NONE,
                                  submitting: e,
                                  children: a.intl.string(a.t['WH+dho'])
                              })
                          ]
                      })
                  ]
              })
            : null;
    }
    constructor(...e) {
        super(...e),
            c(this, 'state', {
                isRequestPending: !1,
                hasError: !1
            }),
            c(this, 'handleLeaveHypeSquadError', () => {
                this.setState({ hasError: !0 });
            }),
            c(this, 'handleLeaveHypeSquadClick', () => {
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
            });
    }
}
