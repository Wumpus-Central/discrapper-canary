"use strict";
n.d(t, { Q: () => y, Y: () => S });
var i,
    r,
    s = n(627968),
    a = n(64700),
    o = n(289873),
    l = n(964486),
    u = n(453903),
    c = n(503698),
    d = n.n(c),
    _ = n(844222),
    h = n(451988),
    f = n(10185),
    p = (((i = p || {})[(i.TRANSLATE = 1)] = "TRANSLATE"), (i[(i.SCALE = 2)] = "SCALE"), (i[(i.FADE = 3)] = "FADE"), i);
let E = Object.freeze({ 1: f.Tl, 2: f.hs, 3: f.Rv }),
    m = Object.freeze({ top: f.ZR, bottom: f.XI, left: f.Hn, right: f.sS, center: f.pm, window_center: f.pm });
function g(e) {
    let { position: t, type: n, children: i } = e,
        { reducedMotion: r } = a.useContext(_.C),
        o = r.enabled ? 3 : n,
        [l, u] = a.useState(null != t),
        [c] = a.useState(() => new h.Ep()),
        [p, g] = a.useState(!0),
        A = a.useRef(null);
    return (
        a.useLayoutEffect(() => {
            A.current?.addEventListener("transitionend", () => {
                g(!1);
            }),
                setTimeout(() => {
                    g(!1);
                }, 200);
        }, []),
        a.useEffect(() => () => c.stop(), [c]),
        a.useEffect(() => {
            null != t && c.start(10, () => u(!0));
        }, [t, c]),
        (0, s.jsx)("div", {
            "data-popout-animating": p,
            className: d()(null != t ? m[t] : null, { [E[o]]: null != t, [f.Wr]: l }),
            children: i,
        })
    );
}
g.Types = p;
var A = n(677771),
    I = (((r = I || {}).NONE = "1"), (r.TRANSLATE = "2"), (r.SCALE = "3"), (r.FADE = "4"), r);
let T = Object.freeze({ 2: g.Types.TRANSLATE, 3: g.Types.SCALE, 4: g.Types.FADE });
class S extends a.Component {
    static Animation = I;
    ref = a.createRef();
    render() {
        let {
            children: e,
            shouldShow: t,
            onRequestOpen: n,
            onRequestClose: i,
            align: r,
            fixed: a,
            useRawTargetDimensions: o,
            onShiftClick: l,
            positionKey: c,
            popoutKey: d,
            preload: _,
            loadingComponent: h,
            disablePointerEvents: f,
            ignoreModalClicks: p,
            scrollBehavior: E,
            useMouseEnter: m,
            renderPopout: g,
            layerContext: A,
            position: I = "right",
            autoInvert: T = !0,
            nudgeAlignIntoViewport: S = !0,
            avoidancePadding: y,
            spacing: N = 8,
            clickTrap: v = !1,
        } = this.props;
        return (0, s.jsx)(u.$, {
            ref: this.ref,
            targetElementRef: this.props.targetElementRef,
            preload: _,
            loadingComponent: h,
            position: I,
            align:
                null != r
                    ? r
                    : (function (e) {
                          switch (e) {
                              case "top":
                              case "bottom":
                                  return "left";
                              case "left":
                              case "right":
                                  return "top";
                              case "center":
                              case "window_center":
                                  return "center";
                          }
                          throw Error(`Unexpected position: ${e}`);
                      })(I),
            autoInvert: T,
            fixed: a,
            nudgeAlignIntoViewport: S,
            avoidancePadding: y,
            useRawTargetDimensions: o,
            renderPopout: this.renderPopout,
            spacing: N,
            shouldShow: null != g && t,
            onRequestOpen: n,
            onRequestClose: i,
            onShiftClick: l,
            positionKey: c,
            popoutKey: d,
            disablePointerEvents: f,
            ignoreModalClicks: p,
            scrollBehavior: E,
            useMouseEnter: m,
            layerContext: A,
            clickTrap: v,
            children: e,
        });
    }
    renderPopout = (e) => {
        let { renderPopout: t, animation: n = "2", animationPosition: i } = this.props;
        switch ((null != i && null != e.position && (e.position = i), n)) {
            case "2":
            case "3":
            case "4":
                return (0, s.jsx)(g, { position: e.position, type: T[n], children: t(e) });
            case "1":
                return t(e);
        }
        throw Error(`Unsupported animation config: ${JSON.stringify(n)}`);
    };
}
function y(e) {
    let { renderPopout: t, ...n } = e,
        i = a.useRef(null),
        [r, u] = a.useState(0);
    function c() {
        return _(), (0, s.jsx)(s.Fragment, {});
    }
    a.useLayoutEffect(() => {
        r > 0 && i.current?.ref?.current?.layerRef?.current?.updatePosition();
    }, [r]),
        (0, l.Ay)(() => {
            let e = setTimeout(t, 20 + 20 * Math.random());
            return () => clearTimeout(e);
        });
    let d = a.useRef(!1);
    async function _() {
        if (!d.current) {
            d.current = !0;
            let e = setTimeout(() => {
                    p(() => h), u((e) => e + 1);
                }, 300),
                n = await t();
            p(() => n), u((e) => e + 1), clearTimeout(e);
        }
    }
    function h() {
        let e = i.current?.ref?.current?.domElementRef?.current,
            t = Math.max(100, null == e ? 100 : e.offsetWidth - 20);
        return (0, s.jsx)("div", { className: A.w, style: { width: t }, children: (0, s.jsx)(o.y, {}) });
    }
    let [f, p] = a.useState(() => c),
        E = a.useRef(c);
    return (
        a.useEffect(() => {
            E.current = c;
        }),
        a.useEffect(() => {
            d.current
                ? t().then((e) => {
                      p(() => e), u((e) => e + 1);
                  })
                : p(() => E.current);
        }, [t]),
        (0, s.jsx)(S, { ref: i, ...n, renderPopout: f })
    );
}
y.Animation = I;
