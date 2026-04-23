"use strict";
n.d(t, { Wd: () => m, Ay: () => f, J$: () => h });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(340287),
    l = n(621466),
    d = n(508382),
    _ = n(56553);
let u = _.n7;
class c extends r.Component {
    state = { layerContainerElement: null };
    setLayerContainerElement = (e) => {
        this.setState({ layerContainerElement: e });
    };
    getContextValue = (function (e) {
        let t = null,
            n = null;
        return function () {
            for (var i = arguments.length, r = Array(i), s = 0; s < i; s++) r[s] = arguments[s];
            return (
                !(function (e, t) {
                    if (e === t) return !0;
                    if (null == e || null == t || e.length !== t.length) return !1;
                    let n = e.length;
                    for (let i = 0; i < n; i++) if (e[i] !== t[i]) return !1;
                    return !0;
                })(t, r) && (n = e(...r)),
                (t = r),
                n
            );
        };
    })((e) => [e, this.setLayerContainerElement]);
    componentWillUnmount() {
        this.state.layerContainerElement = null;
    }
    render() {
        let { layerContext: e, children: t } = this.props,
            { layerContainerElement: n } = this.state;
        return (0, i.jsx)(e.Provider, { value: this.getContextValue(n), children: t });
    }
}
let E = (e) => {
    let { layerContext: t, className: n } = e,
        [, s] = r.useContext(t),
        o = r.useCallback(
            (e) => {
                s(e);
            },
            [s],
        );
    return (0, i.jsx)("div", { className: a()(u, n), ref: o });
};
function h(e) {
    let t = (0, l.p3)(e, _.n7);
    if ((null == t && (t = (0, l.wB)(e, d.IP)), null == t)) throw Error("Unexpected missing parent container");
    return t;
}
let m = (e) => {
    let { layerContext: t, children: n } = e;
    return (0, i.jsx)(t.Consumer, {
        children: (e) =>
            (function (e, t) {
                let [n] = e;
                return null == n ? null : o.createPortal(r.Children.only(t), n);
            })(e, n),
    });
};
function f(e) {
    let t = r.createContext([null, () => {}]),
        n = {
            LayerProvider: (e) => (0, i.jsx)(c, { layerContext: t, ...e }),
            LayerContainer: (e) => (0, i.jsx)(E, { layerContext: t, ...e }),
            Layer: (e) => (0, i.jsx)(m, { layerContext: t, ...e }),
            layerContext: t,
        };
    return (
        (n.LayerProvider.displayName = `${e}LayerProvider`),
        (n.LayerContainer.displayName = `${e}LayerContainer`),
        (n.Layer.displayName = `${e}Layer`),
        n
    );
}
