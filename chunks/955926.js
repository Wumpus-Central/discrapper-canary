n.d(t, { k: () => s }), n(388685);
var a = n(951288),
    r = n(647438),
    i = n(481060),
    l = n(88510);
class s extends r.PureComponent {
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
                  children: (0, a.jsx)(i.Text, {
                      color: "text-danger",
                      variant: "text-md/normal",
                      className: l.labelSpacing,
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
