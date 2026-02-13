"use strict";
n.d(t, { BV: () => Y, Ix: () => H, qh: () => j });
var r,
    i = n(64700),
    a = n(207970);
function s() {
    return (s = Object.assign
        ? Object.assign.bind()
        : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
          }).apply(this, arguments);
}
let o = i.createContext(null),
    l = i.createContext(null),
    u = i.createContext(null),
    c = i.createContext(null),
    d = i.createContext(null),
    _ = i.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
    f = i.createContext(null);
function h() {
    return null != i.useContext(d);
}
function p() {
    return h() || (0, a.Oi)(!1), i.useContext(d).location;
}
function g(e) {
    React.useContext(c).static || React.useLayoutEffect(e);
}
function E() {
    h() || UNSAFE_invariant(!1);
    let e = React.useContext(o),
        { basename: t, future: n, navigator: r } = React.useContext(c),
        { matches: i } = React.useContext(_),
        { pathname: a } = p(),
        s = JSON.stringify(UNSAFE_getResolveToMatches(i, n.v7_relativeSplatPath)),
        l = React.useRef(!1);
    return (
        g(() => {
            l.current = !0;
        }),
        React.useCallback(
            function (n, i) {
                if ((void 0 === i && (i = {}), !l.current)) return;
                if ("number" == typeof n) return void r.go(n);
                let o = resolveTo(n, JSON.parse(s), a, "path" === i.relative);
                null == e && "/" !== t && (o.pathname = "/" === o.pathname ? t : joinPaths([t, o.pathname])),
                    (i.replace ? r.replace : r.push)(o, i.state, i);
            },
            [t, r, s, a, e],
        )
    );
}
let A = null;
function I(e, t) {
    return T(e, t);
}
function T(e, t, n, r) {
    let o;
    h() || (0, a.Oi)(!1);
    let { navigator: l } = i.useContext(c),
        { matches: u } = i.useContext(_),
        f = u[u.length - 1],
        g = f ? f.params : {};
    f && f.pathname;
    let E = f ? f.pathnameBase : "/";
    f && f.route;
    let A = p();
    if (t) {
        var I;
        let e = "string" == typeof t ? (0, a.Rr)(t) : t;
        "/" === E || (null == (I = e.pathname) ? void 0 : I.startsWith(E)) || (0, a.Oi)(!1), (o = e);
    } else o = A;
    let T = o.pathname || "/",
        y = T;
    if ("/" !== E) {
        let e = E.replace(/^\//, "").split("/");
        y = "/" + T.replace(/^\//, "").split("/").slice(e.length).join("/");
    }
    let S = (0, a.ue)(e, { pathname: y }),
        v = b(
            S &&
                S.map((e) =>
                    Object.assign({}, e, {
                        params: Object.assign({}, g, e.params),
                        pathname: (0, a.HS)([E, l.encodeLocation ? l.encodeLocation(e.pathname).pathname : e.pathname]),
                        pathnameBase:
                            "/" === e.pathnameBase
                                ? E
                                : (0, a.HS)([
                                      E,
                                      l.encodeLocation ? l.encodeLocation(e.pathnameBase).pathname : e.pathnameBase,
                                  ]),
                    }),
                ),
            u,
            n,
            r,
        );
    return t && v
        ? i.createElement(
              d.Provider,
              {
                  value: {
                      location: s({ pathname: "/", search: "", hash: "", state: null, key: "default" }, o),
                      navigationType: a.rc.Pop,
                  },
              },
              v,
          )
        : v;
}
function y() {
    let e = x(),
        t = (0, a.pX)(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
        n = e instanceof Error ? e.stack : null,
        r = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
        s = null;
    return i.createElement(
        i.Fragment,
        null,
        i.createElement("h2", null, "Unexpected Application Error!"),
        i.createElement("h3", { style: { fontStyle: "italic" } }, t),
        n ? i.createElement("pre", { style: r }, n) : null,
        s,
    );
}
let S = i.createElement(y, null);
class v extends i.Component {
    constructor(e) {
        super(e), (this.state = { location: e.location, revalidation: e.revalidation, error: e.error });
    }
    static getDerivedStateFromError(e) {
        return { error: e };
    }
    static getDerivedStateFromProps(e, t) {
        return t.location !== e.location || ("idle" !== t.revalidation && "idle" === e.revalidation)
            ? { error: e.error, location: e.location, revalidation: e.revalidation }
            : {
                  error: void 0 !== e.error ? e.error : t.error,
                  location: t.location,
                  revalidation: e.revalidation || t.revalidation,
              };
    }
    componentDidCatch(e, t) {
        console.error("React Router caught the following error during render", e, t);
    }
    render() {
        return void 0 !== this.state.error
            ? i.createElement(
                  _.Provider,
                  { value: this.props.routeContext },
                  i.createElement(f.Provider, { value: this.state.error, children: this.props.component }),
              )
            : this.props.children;
    }
}
function C(e) {
    let { routeContext: t, match: n, children: r } = e,
        a = i.useContext(o);
    return (
        a &&
            a.static &&
            a.staticContext &&
            (n.route.errorElement || n.route.ErrorBoundary) &&
            (a.staticContext._deepestRenderedBoundaryId = n.route.id),
        i.createElement(_.Provider, { value: t }, r)
    );
}
function b(e, t, n, r) {
    var s, o;
    if ((void 0 === t && (t = []), void 0 === n && (n = null), void 0 === r && (r = null), null == e)) {
        if (!n) return null;
        if (n.errors) e = n.matches;
        else {
            if (null == (o = r) || !o.v7_partialHydration || 0 !== t.length || n.initialized || !(n.matches.length > 0))
                return null;
            e = n.matches;
        }
    }
    let l = e,
        u = null == (s = n) ? void 0 : s.errors;
    if (null != u) {
        let e = l.findIndex((e) => e.route.id && (null == u ? void 0 : u[e.route.id]) !== void 0);
        e >= 0 || (0, a.Oi)(!1), (l = l.slice(0, Math.min(l.length, e + 1)));
    }
    let c = !1,
        d = -1;
    if (n && r && r.v7_partialHydration)
        for (let e = 0; e < l.length; e++) {
            let t = l[e];
            if (((t.route.HydrateFallback || t.route.hydrateFallbackElement) && (d = e), t.route.id)) {
                let { loaderData: e, errors: r } = n,
                    i = t.route.loader && void 0 === e[t.route.id] && (!r || void 0 === r[t.route.id]);
                if (t.route.lazy || i) {
                    (c = !0), (l = d >= 0 ? l.slice(0, d + 1) : [l[0]]);
                    break;
                }
            }
        }
    return l.reduceRight((e, r, a) => {
        let s,
            o = !1,
            _ = null,
            f = null;
        n &&
            ((s = u && r.route.id ? u[r.route.id] : void 0),
            (_ = r.route.errorElement || S),
            c &&
                (d < 0 && 0 === a
                    ? (U(
                          "route-fallback",
                          !1,
                          "No `HydrateFallback` element provided to render during initial hydration",
                      ),
                      (o = !0),
                      (f = null))
                    : d === a && ((o = !0), (f = r.route.hydrateFallbackElement || null))));
        let h = t.concat(l.slice(0, a + 1)),
            p = () => {
                let t;
                return (
                    (t = s
                        ? _
                        : o
                          ? f
                          : r.route.Component
                            ? i.createElement(r.route.Component, null)
                            : r.route.element
                              ? r.route.element
                              : e),
                    i.createElement(C, {
                        match: r,
                        routeContext: { outlet: e, matches: h, isDataRoute: null != n },
                        children: t,
                    })
                );
            };
        return n && (r.route.ErrorBoundary || r.route.errorElement || 0 === a)
            ? i.createElement(v, {
                  location: n.location,
                  revalidation: n.revalidation,
                  component: _,
                  error: s,
                  children: p(),
                  routeContext: { outlet: null, matches: h, isDataRoute: !0 },
              })
            : p();
    }, null);
}
var N = null,
    R = (function (e) {
        return (
            (e.UseBlocker = "useBlocker"),
            (e.UseLoaderData = "useLoaderData"),
            (e.UseActionData = "useActionData"),
            (e.UseRouteError = "useRouteError"),
            (e.UseNavigation = "useNavigation"),
            (e.UseRouteLoaderData = "useRouteLoaderData"),
            (e.UseMatches = "useMatches"),
            (e.UseRevalidator = "useRevalidator"),
            (e.UseNavigateStable = "useNavigate"),
            (e.UseRouteId = "useRouteId"),
            e
        );
    })(R || {});
function O(e) {
    let t = React.useContext(o);
    return t || UNSAFE_invariant(!1), t;
}
function D(e) {
    let t = i.useContext(l);
    return t || (0, a.Oi)(!1), t;
}
function L(e) {
    let t = i.useContext(_);
    return t || (0, a.Oi)(!1), t;
}
function w(e) {
    let t = L(e),
        n = t.matches[t.matches.length - 1];
    return n.route.id || (0, a.Oi)(!1), n.route.id;
}
function x() {
    var e;
    let t = i.useContext(f),
        n = D(R.UseRouteError),
        r = w(R.UseRouteError);
    return void 0 !== t ? t : null == (e = n.errors) ? void 0 : e[r];
}
function P() {
    let e = React.useContext(u);
    return null == e ? void 0 : e._data;
}
function M() {
    let { router: e } = O(N.UseNavigateStable),
        t = w(R.UseNavigateStable),
        n = React.useRef(!1);
    return (
        g(() => {
            n.current = !0;
        }),
        React.useCallback(
            function (r, i) {
                void 0 === i && (i = {}),
                    n.current && ("number" == typeof r ? e.navigate(r) : e.navigate(r, s({ fromRouteId: t }, i)));
            },
            [e, t],
        )
    );
}
let k = {};
function U(e, t, n) {
    t || k[e] || (k[e] = !0);
}
let G = null;
function F(e, t) {
    G[t] || ((G[t] = !0), console.warn(t));
}
let V = (e, t, n) =>
        F(
            e,
            "⚠️ React Router Future Flag Warning: " +
                t +
                ". You can use the `" +
                e +
                "` future flag to opt-in early. For more information, see " +
                n +
                ".",
        ),
    B = "startTransition";
(r || (r = n.t(i, 2)))[B];
function j(e) {
    (0, a.Oi)(!1);
}
function H(e) {
    let {
        basename: t = "/",
        children: n = null,
        location: r,
        navigationType: o = a.rc.Pop,
        navigator: l,
        static: u = !1,
        future: _,
    } = e;
    h() && (0, a.Oi)(!1);
    let f = t.replace(/^\/*/, "/"),
        p = i.useMemo(
            () => ({ basename: f, navigator: l, static: u, future: s({ v7_relativeSplatPath: !1 }, _) }),
            [f, _, l, u],
        );
    "string" == typeof r && (r = (0, a.Rr)(r));
    let { pathname: g = "/", search: E = "", hash: A = "", state: I = null, key: T = "default" } = r,
        y = i.useMemo(() => {
            let e = (0, a.pb)(g, f);
            return null == e
                ? null
                : { location: { pathname: e, search: E, hash: A, state: I, key: T }, navigationType: o };
        }, [f, g, E, A, I, T, o]);
    return null == y
        ? null
        : i.createElement(c.Provider, { value: p }, i.createElement(d.Provider, { children: n, value: y }));
}
function Y(e) {
    let { children: t, location: n } = e;
    return I($(t), n);
}
var W = (function (e) {
    return (e[(e.pending = 0)] = "pending"), (e[(e.success = 1)] = "success"), (e[(e.error = 2)] = "error"), e;
})(W || {});
let K = new Promise(() => {});
i.Component;
function $(e, t) {
    void 0 === t && (t = []);
    let n = [];
    return (
        i.Children.forEach(e, (e, r) => {
            if (!i.isValidElement(e)) return;
            let s = [...t, r];
            if (e.type === i.Fragment) return void n.push.apply(n, $(e.props.children, s));
            e.type !== j && (0, a.Oi)(!1), e.props.index && e.props.children && (0, a.Oi)(!1);
            let o = {
                id: e.props.id || s.join("-"),
                caseSensitive: e.props.caseSensitive,
                element: e.props.element,
                Component: e.props.Component,
                index: e.props.index,
                path: e.props.path,
                loader: e.props.loader,
                action: e.props.action,
                errorElement: e.props.errorElement,
                ErrorBoundary: e.props.ErrorBoundary,
                hasErrorBoundary: null != e.props.ErrorBoundary || null != e.props.errorElement,
                shouldRevalidate: e.props.shouldRevalidate,
                handle: e.props.handle,
                lazy: e.props.lazy,
            };
            e.props.children && (o.children = $(e.props.children, s)), n.push(o);
        }),
        n
    );
}
