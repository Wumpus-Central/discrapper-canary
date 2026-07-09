"use strict";
n.d(t, { Q: () => N, Y: () => S });
var i,
    r,
    a = n(627968),
    s = n(64700),
    l = n(289873),
    o = n(964486),
    d = n(453903),
    c = n(503698),
    u = n.n(c),
    _ = n(844222),
    E = n(451988),
    A = n(242057),
    h = (((i = h || {})[(i.TRANSLATE = 1)] = "TRANSLATE"), (i[(i.SCALE = 2)] = "SCALE"), (i[(i.FADE = 3)] = "FADE"), i);
let I = Object.freeze({ 1: A.Tl, 2: A.hs, 3: A.Rv }),
    f = Object.freeze({ top: A.ZR, bottom: A.XI, left: A.Hn, right: A.sS, center: A.pm, window_center: A.pm });
function p(e) {
    let { position: t, type: n, children: i } = e,
        { reducedMotion: r } = s.useContext(_.C),
        l = r.enabled ? 3 : n,
        [o, d] = s.useState(null != t),
        [c] = s.useState(() => new E.Ep()),
        [h, p] = s.useState(!0),
        T = s.useRef(null);
    return (
        s.useLayoutEffect(() => {
            T.current?.addEventListener("transitionend", () => {
                p(!1);
            }),
                setTimeout(() => {
                    p(!1);
                }, 200);
        }, []),
        s.useEffect(() => () => c.stop(), [c]),
        s.useEffect(() => {
            null != t && c.start(10, () => d(!0));
        }, [t, c]),
        (0, a.jsx)("div", {
            "data-popout-animating": h,
            className: u()(null != t ? f[t] : null, { [I[l]]: null != t, [A.Wr]: o }),
            children: i,
        })
    );
}
p.Types = h;
var T = n(783755),
    m = (((r = m || {}).NONE = "1"), (r.TRANSLATE = "2"), (r.SCALE = "3"), (r.FADE = "4"), r);
let g = Object.freeze({ 2: p.Types.TRANSLATE, 3: p.Types.SCALE, 4: p.Types.FADE });
class S extends s.Component {
    static Animation = m;
    ref = s.createRef();
    render() {
        let {
            children: e,
            shouldShow: t,
            onRequestOpen: n,
            onRequestClose: i,
            align: r,
            fixed: s,
            useRawTargetDimensions: l,
            onShiftClick: o,
            positionKey: c,
            popoutKey: u,
            preload: _,
            loadingComponent: E,
            disablePointerEvents: A,
            ignoreModalClicks: h,
            scrollBehavior: I,
            useMouseEnter: f,
            renderPopout: p,
            layerContext: T,
            position: m = "right",
            autoInvert: g = !0,
            nudgeAlignIntoViewport: S = !0,
            avoidancePadding: N,
            spacing: C = 8,
            clickTrap: R = !1,
        } = this.props;
        return (0, a.jsx)(d.$, {
            ref: this.ref,
            targetElementRef: this.props.targetElementRef,
            preload: _,
            loadingComponent: E,
            position: m,
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
                      })(m),
            autoInvert: g,
            fixed: s,
            nudgeAlignIntoViewport: S,
            avoidancePadding: N,
            useRawTargetDimensions: l,
            renderPopout: this.renderPopout,
            spacing: C,
            shouldShow: null != p && t,
            onRequestOpen: n,
            onRequestClose: i,
            onShiftClick: o,
            positionKey: c,
            popoutKey: u,
            disablePointerEvents: A,
            ignoreModalClicks: h,
            scrollBehavior: I,
            useMouseEnter: f,
            layerContext: T,
            clickTrap: R,
            children: e,
        });
    }
    renderPopout = (e) => {
        let { renderPopout: t, animation: n = "2", animationPosition: i } = this.props;
        switch ((null != i && null != e.position && (e.position = i), n)) {
            case "2":
            case "3":
            case "4":
                return (0, a.jsx)(p, { position: e.position, type: g[n], children: t(e) });
            case "1":
                return t(e);
        }
        throw Error(`Unsupported animation config: ${JSON.stringify(n)}`);
    };
}
function N(e) {
    let { renderPopout: t, ...n } = e,
        i = s.useRef(null),
        [r, d] = s.useState(0);
    function c() {
        return _(), (0, a.jsx)(a.Fragment, {});
    }
    s.useLayoutEffect(() => {
        r > 0 && i.current?.ref?.current?.layerRef?.current?.updatePosition();
    }, [r]),
        (0, o.Ay)(() => {
            let e = setTimeout(t, 20 + 20 * Math.random());
            return () => clearTimeout(e);
        });
    let u = s.useRef(!1);
    async function _() {
        if (!u.current) {
            u.current = !0;
            let e = setTimeout(() => {
                    h(() => E), d((e) => e + 1);
                }, 300),
                n = await t();
            h(() => n), d((e) => e + 1), clearTimeout(e);
        }
    }
    function E() {
        let e = i.current?.ref?.current?.domElementRef?.current,
            t = Math.max(100, null == e ? 100 : e.offsetWidth - 20);
        return (0, a.jsx)("div", { className: T.w, style: { width: t }, children: (0, a.jsx)(l.y, {}) });
    }
    let [A, h] = s.useState(() => c),
        I = s.useRef(c);
    return (
        s.useEffect(() => {
            I.current = c;
        }),
        s.useEffect(() => {
            u.current
                ? t().then((e) => {
                      h(() => e), d((e) => e + 1);
                  })
                : h(() => I.current);
        }, [t]),
        (0, a.jsx)(S, { ref: i, ...n, renderPopout: A })
    );
}
N.Animation = m;
