n.d(t, { Z: () => d }), n(47120);
var i = n(200651),
    s = n(192379),
    l = n(481060),
    r = n(401190),
    a = n(388032),
    o = n(469991);
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
class d extends s.PureComponent {
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
                      (0, i.jsxs)(l.Text, {
                          variant: 'text-sm/normal',
                          children: [
                              a.intl.string(a.t.ziWmcH),
                              (0, i.jsx)(l.zxk, {
                                  className: o.leaveButton,
                                  color: l.zxk.Colors.LINK,
                                  look: l.zxk.Looks.LINK,
                                  onClick: this.handleLeaveHypeSquadClick,
                                  size: l.zxk.Sizes.NONE,
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
                    r.Z.leaveHypeSquadOnline()
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
