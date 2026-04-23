"use strict";
n.d(t, { Q: () => N, Y: () => S });
var i,
    r,
    s = n(627968),
    a = n(64700),
    o = n(289873),
    l = n(964486),
    d = n(453903),
    _ = n(503698),
    u = n.n(_),
    c = n(844222),
    E = n(451988),
    h = n(10185),
    m = (((i = m || {})[(i.TRANSLATE = 1)] = "TRANSLATE"), (i[(i.SCALE = 2)] = "SCALE"), (i[(i.FADE = 3)] = "FADE"), i);
let f = Object.freeze({ 1: h.Tl, 2: h.hs, 3: h.Rv }),
    g = Object.freeze({ top: h.ZR, bottom: h.XI, left: h.Hn, right: h.sS, center: h.pm, window_center: h.pm });
function p(e) {
    let { position: t, type: n, children: i } = e,
        { reducedMotion: r } = a.useContext(c.C),
        o = r.enabled ? 3 : n,
        [l, d] = a.useState(null != t),
        [_] = a.useState(() => new E.Ep()),
        [m, p] = a.useState(!0),
        A = a.useRef(null);
    return (
        a.useLayoutEffect(() => {
            A.current?.addEventListener("transitionend", () => {
                p(!1);
            }),
                setTimeout(() => {
                    p(!1);
                }, 200);
        }, []),
        a.useEffect(() => () => _.stop(), [_]),
        a.useEffect(() => {
            null != t && _.start(10, () => d(!0));
        }, [t, _]),
        (0, s.jsx)("div", {
            "data-popout-animating": m,
            className: u()(null != t ? g[t] : null, { [f[o]]: null != t, [h.Wr]: l }),
            children: i,
        })
    );
}
p.Types = m;
var A = n(677771),
    I = (((r = I || {}).NONE = "1"), (r.TRANSLATE = "2"), (r.SCALE = "3"), (r.FADE = "4"), r);
let T = Object.freeze({ 2: p.Types.TRANSLATE, 3: p.Types.SCALE, 4: p.Types.FADE });
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
            positionKey: _,
            popoutKey: u,
            preload: c,
            loadingComponent: E,
            disablePointerEvents: h,
            ignoreModalClicks: m,
            scrollBehavior: f,
            useMouseEnter: g,
            renderPopout: p,
            layerContext: A,
            position: I = "right",
            autoInvert: T = !0,
            nudgeAlignIntoViewport: S = !0,
            spacing: N = 8,
            clickTrap: C = !1,
        } = this.props;
        return (0, s.jsx)(d.$, {
            ref: this.ref,
            targetElementRef: this.props.targetElementRef,
            preload: c,
            loadingComponent: E,
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
            useRawTargetDimensions: o,
            renderPopout: this.renderPopout,
            spacing: N,
            shouldShow: null != p && t,
            onRequestOpen: n,
            onRequestClose: i,
            onShiftClick: l,
            positionKey: _,
            popoutKey: u,
            disablePointerEvents: h,
            ignoreModalClicks: m,
            scrollBehavior: f,
            useMouseEnter: g,
            layerContext: A,
            clickTrap: C,
            children: e,
        });
    }
    renderPopout = (e) => {
        let { renderPopout: t, animation: n = "2", animationPosition: i } = this.props;
        switch ((null != i && null != e.position && (e.position = i), n)) {
            case "2":
            case "3":
            case "4":
                return (0, s.jsx)(p, { position: e.position, type: T[n], children: t(e) });
            case "1":
                return t(e);
        }
        throw Error(`Unsupported animation config: ${JSON.stringify(n)}`);
    };
}
function N(e) {
    let { renderPopout: t, ...n } = e,
        i = a.useRef(null),
        [r, d] = a.useState(0);
    function _() {
        return c(), (0, s.jsx)(s.Fragment, {});
    }
    a.useLayoutEffect(() => {
        r > 0 && i.current?.ref?.current?.layerRef?.current?.updatePosition();
    }, [r]),
        (0, l.Ay)(() => {
            let e = setTimeout(t, 20 + 20 * Math.random());
            return () => clearTimeout(e);
        });
    let u = a.useRef(!1);
    async function c() {
        if (!u.current) {
            u.current = !0;
            let e = setTimeout(() => {
                    m(() => E), d((e) => e + 1);
                }, 300),
                n = await t();
            m(() => n), d((e) => e + 1), clearTimeout(e);
        }
    }
    function E() {
        let e = i.current?.ref?.current?.domElementRef?.current,
            t = Math.max(100, null == e ? 100 : e.offsetWidth - 20);
        return (0, s.jsx)("div", { className: A.w, style: { width: t }, children: (0, s.jsx)(o.y, {}) });
    }
    let [h, m] = a.useState(() => _),
        f = a.useRef(_);
    return (
        a.useEffect(() => {
            f.current = _;
        }),
        a.useEffect(() => {
            u.current
                ? t().then((e) => {
                      m(() => e), d((e) => e + 1);
                  })
                : m(() => f.current);
        }, [t]),
        (0, s.jsx)(S, { ref: i, ...n, renderPopout: h })
    );
}
N.Animation = I;
