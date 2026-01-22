n.d(t, { A: () => j }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(837381),
    l = n(311907),
    c = n(397927),
    u = n(811024),
    d = n(933958),
    f = n(969151),
    p = n(580424),
    _ = n(579940),
    h = n(915089),
    m = n(750506),
    g = n(513609),
    E = n(71393),
    b = n(374803),
    y = n(105330),
    O = n(638897),
    A = n(5867),
    v = n(130139);
function S(e, t, n) {
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
function I(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                S(e, t, n[t]);
            });
    }
    return e;
}
function T(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function C(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : T(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function N(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = R(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function R(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let w = 490,
    P = 490,
    D = 245,
    x = 200,
    L = 120,
    j = i.forwardRef(function (e, t) {
        var n, a, S, T, R, j, M, k, U;
        let { channel: G, type: V, editorHeight: F, onVisibilityChange: B, editorScrollerRef: H, barsHeight: Y } = e,
            W = (0, h.GV)(),
            K = (0, l.bG)([E.A], () => {
                var e;
                return null != (e = E.A.getGuild(G.guild_id)) ? e : null;
            }, [G.guild_id]),
            z = i.useRef(null),
            [q, X, Z] = (0, O.A)(C(I({}, e), { guild: K }), t, z),
            Q = (null == (S = V.autocomplete) ? void 0 : S.forceChatLayer) ? g.Ay : m.Ay,
            $ = (0, p.aI)(q.selectedIndex);
        (0, _.gf)(W, q.isVisible, $);
        let J = (0, y.l)({
                editorHeight: F,
                type: V,
                state: q,
            }),
            ee = (0, l.bG)([d.Ay], () => {
                let e = d.Ay.getSelfEmbeddedActivityForChannel(G.id),
                    t = d.Ay.getActivityPanelMode();
                return (0, u.AX)(G) && null != e && (0, f.H)(e.location) === G.id && t === A.Gd.PANEL;
            }, [G]),
            et = i.useMemo(
                () =>
                    (null == J ? void 0 : J.top) == null &&
                    (null == J ? void 0 : J.left) == null &&
                    (null == J ? void 0 : J.bottom) == null &&
                    (null == J ? void 0 : J.right) == null
                        ? ""
                        : String(Date.now()),
                [
                    null == J ? void 0 : J.top,
                    null == J ? void 0 : J.left,
                    null == J ? void 0 : J.bottom,
                    null == J ? void 0 : J.right,
                ],
            );
        if (
            (i.useEffect(() => {
                var e, t;
                B(q.isVisible, null != (e = null == (t = q.query) ? void 0 : t.type) ? e : null);
            }, [B, q.isVisible, null == (T = q.query) ? void 0 : T.type]),
            !q.isVisible || null == q.query || void 0 === J)
        )
            return null;
        let en =
            null !=
            (n = q.query.typeInfo.renderResults({
                results: q.query.results,
                selectedIndex: q.selectedIndex,
                channel: G,
                guild: K,
                query: q.query.queryText,
                options: q.query.options,
                onHover: (e) => X.onResultHover(e),
                onClick: (e) => X.onResultClick(e),
            }))
                ? n
                : null;
        if (null == en) return null;
        let er = {
                [v.pK]: null == J,
                [v.YB]: null != J,
                [v.sQ]: null == J && "bottom" === e.position,
                [v.mO]: ee,
                [v.Wi]: (null == (R = q.query) ? void 0 : R.type) === b.DB.MENTION_SUGGESTIONS,
            },
            ei = w;
        null != J &&
            (ei = (null == (M = V.autocomplete) ? void 0 : M.small)
                ? x
                : (null == (k = q.query) ? void 0 : k.type) === b.DB.EMOJIS_AND_STICKERS
                  ? P
                  : D);
        let ea = Math.max(F, null != (a = null == H || null == (j = H.current) ? void 0 : j.clientHeight) ? a : 0),
            es = Math.min(0.5 * window.innerHeight, ea);
        ei = Math.min(window.innerHeight - L - es - (null != Y ? Y : 0), ei);
        let eo = (0, r.jsx)(p.Ay, {
            id: W,
            className: s()(v.nx, er),
            innerClassName: v.Fv,
            onMouseDown: (e) => e.preventDefault(),
            children: (0, r.jsx)(o.hD, {
                navigator: Z,
                children: (0, r.jsx)(o.PR, {
                    children: (e) => {
                        let { ref: t } = e,
                            n = N(e, ["ref"]);
                        return (0, r.jsx)(
                            c.ChK,
                            C(
                                I(
                                    {
                                        id: W,
                                        ref: (e) => {
                                            var n;
                                            (t.current =
                                                null != (n = null == e ? void 0 : e.getScrollerNode()) ? n : null),
                                                (z.current = e);
                                        },
                                        orientation: "vertical",
                                        overflow: "auto",
                                    },
                                    n,
                                ),
                                {
                                    className: v.XG,
                                    style: { maxHeight: ei },
                                    role: "listbox",
                                    "aria-labelledby": (0, p.Sz)(W),
                                    children: en,
                                },
                            ),
                        );
                    },
                }),
            }),
        });
        return null != J
            ? (0, r.jsx)(Q, {
                  children: (0, r.jsx)(c.QCO, {
                      targetRef: e.targetRef,
                      overrideTargetRect: J,
                      positionKey: et,
                      position: null != (U = e.position) ? U : "top",
                      align: "left",
                      spacing: 8,
                      autoInvert: !0,
                      nudgeAlignIntoViewport: !0,
                      children: () => eo,
                  }),
              })
            : eo;
    });
