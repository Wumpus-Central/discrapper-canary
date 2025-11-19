n.d(t, { k: () => l }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(776524);
function s(e, t, n) {
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
class l extends i.PureComponent {
    componentDidCatch(e, t) {
        console.error("Error rendering component (LocalErrorBoundary): ", e),
            this.setState({
                error: e,
                info: t,
            });
    }
    render() {
        return null != this.state.error
            ? (0, r.jsx)("div", {
                  children: (0, r.jsx)(a.Text, {
                      color: "text-danger",
                      variant: "text-md/normal",
                      className: o.labelSpacing,
                      children: "Error rendering component. Check console for more information on the error.",
                  }),
              })
            : this.props.children;
    }
    constructor(...e) {
        super(...e),
            s(this, "state", {
                error: null,
                info: null,
            });
    }
}
