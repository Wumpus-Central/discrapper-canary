n.d(t, { k: () => o }), n(388685);
var a = n(951288),
    r = n(647438),
    l = n(481060),
    i = n(295136);
class o extends r.PureComponent {
    componentDidCatch(e, t) {
        console.error("Error rendering component (LocalErrorBoundary): ", e),
            this.setState({
                error: e,
                info: t,
            });
    }
    render() {
        return null != this.state.error
            ? (0, a.jsx)("div", {
                  children: (0, a.jsx)(l.Text, {
                      color: "text-danger",
                      variant: "text-md/normal",
                      className: i.labelSpacing,
                      children: "Error rendering component. Check console for more information on the error.",
                  }),
              })
            : this.props.children;
    }
    constructor(...e) {
        super(...e),
            (function (e, t, n) {
                t in e
                    ? Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (e[t] = n);
            })(this, "state", {
                error: null,
                info: null,
            });
    }
}
