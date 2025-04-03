n.d(t, { Z: () => d }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(481060),
    a = n(401190),
    l = n(388032),
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
class d extends i.PureComponent {
    renderErrorMessage() {
        let { hasError: e } = this.state;
        return e
            ? (0, r.jsx)('div', {
                  className: o.error,
                  children: l.NW.string(l.t.UUcECA)
              })
            : null;
    }
    render() {
        let { isRequestPending: e } = this.state,
            { isHypeSquadOnlineMember: t } = this.props;
        return t
            ? (0, r.jsxs)('div', {
                  className: o.leaveActionWrapper,
                  children: [
                      this.renderErrorMessage(),
                      (0, r.jsxs)(s.Text, {
                          variant: 'text-sm/normal',
                          children: [
                              l.NW.string(l.t.ziWmcH),
                              (0, r.jsx)(s.zxk, {
                                  className: o.leaveButton,
                                  color: s.zxk.Colors.LINK,
                                  look: s.zxk.Looks.LINK,
                                  onClick: this.handleLeaveHypeSquadClick,
                                  size: s.zxk.Sizes.NONE,
                                  submitting: e,
                                  children: l.NW.string(l.t['WH+dho'])
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
                    a.Z.leaveHypeSquadOnline()
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
