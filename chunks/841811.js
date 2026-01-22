n.d(t, {
    default: () => E,
    j: () => C,
}),
    n(896048),
    n(228524);
var i = n(627968),
    r = n(64700),
    l = n(158954),
    s = n(311907),
    a = n(397927),
    o = n(702805),
    u = n(198982),
    c = n(155718),
    h = n(845202),
    d = n(86944),
    p = n(734057),
    g = n(71393),
    b = n(488926),
    m = n(233993),
    f = n(737045),
    O = n(985018),
    A = n(138695);

function C(e, t) {
    return {
        id: e,
        type: t,
        deny: b.x3,
        allow: m.QY,
    };
}

function E(e) {
    var t, n;
    let { channelId: b, onClose: E } = e,
        I = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r,
                l = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (r = 0, n = Reflect.ownKeys(e); r < n.length; r++)
                    (i = n[r]),
                        !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (l[i] = e[i]);
                return l;
            }
            if (
                ((l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        r = {},
                        l = Object.getOwnPropertyNames(e);
                    for (i = 0; i < l.length; i++)
                        (n = l[i]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                    return r;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++)
                    (i = n[r]),
                        !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (l[i] = e[i]);
            return l;
        })(e, ["channelId", "onClose"]),
        y = (0, s.bG)([p.A], () => p.A.getChannel(b)),
        v = (0, s.bG)([g.A], () => g.A.getGuild(null == y ? void 0 : y.getGuildId())),
        [S, N] = r.useState(""),
        [x, j] = r.useState({}),
        [T, _] = r.useState(!1),
        [P, G] = r.useState(null),
        w = r.useRef(null),
        { roles: U, members: L, getRichTag: R } = (0, d.K)(v, y, m.QY, S),
        D = h.A.useSections({
            roles: U,
            members: L,
        });
    if (null == y || null == v) return null;
    let M = async () => {
        _(!0);
        try {
            let e;
            await ((e = Object.values(x)
                .filter((e) => {
                    let { row: t } = e;
                    return null != t.id;
                })
                .map((e) => {
                    let { row: t } = e;
                    return t.rowType === f.T6.ROLE ? C(t.id, c.r2.ROLE) : C(t.id, c.r2.MEMBER);
                })),
            (0, o.R$)(y.id, e, !0)),
                E();
        } catch (t) {
            let e = new u.LG(t);
            _(!1), G(e);
        }
    };
    return (0, i.jsx)(h.A.Provider, {
        listRef: w,
        query: S,
        setQuery: N,
        pendingAdditions: x,
        setPendingAdditions: j,
        roles: U,
        members: L,
        getRichTag: R,
        children: (0, i.jsx)(
            l.Modal,
            ((t = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        i = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (i = i.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            }),
                        )),
                        i.forEach(function (t) {
                            var i;
                            (i = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: i,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = i);
                        });
                }
                return e;
            })({}, I)),
            (n = n =
                {
                    title: O.intl.string(O.t.dMJ3Y6),
                    onClose: E,
                    input: (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsxs)(a.Text, {
                                className: A.HA,
                                variant: "text-lg/normal",
                                color: "text-default",
                                children: [
                                    (0, i.jsx)(a.qux, {
                                        className: A.p,
                                        size: "sm",
                                        color: "currentColor",
                                    }),
                                    y.name,
                                ],
                            }),
                            y.isGuildStageVoice() &&
                                (0, i.jsx)(a.Text, {
                                    color: "text-default",
                                    className: A.h_,
                                    variant: "text-sm/normal",
                                    children: O.intl.string(O.t.f7VbhF),
                                }),
                            (0, i.jsx)(h.A.SearchBox, {
                                placeholderText: O.intl.string(O.t.iezLLn),
                            }),
                            (0, i.jsx)(a.Text, {
                                className: A.W$,
                                variant: "text-xs/normal",
                                children: O.intl.string(O.t.rwFx85),
                            }),
                            null != P
                                ? (0, i.jsx)(a.Text, {
                                      className: A.W$,
                                      variant: "text-xs/normal",
                                      color: "text-feedback-critical",
                                      children: P.getAnyErrorMessage(),
                                  })
                                : null,
                        ],
                    }),
                    listProps: {
                        ref: w,
                        sectionHeight: h.A.SECTION_HEIGHT,
                        renderSection: h.A.renderSection,
                        rowHeight: h.A.ROW_HEIGHT,
                        renderRow: h.A.renderRow,
                        sections: D,
                    },
                    actions: [
                        {
                            variant: "secondary",
                            text: O.intl.string(O.t["ETE/oC"]),
                            onClick: E,
                        },
                        {
                            variant: "primary",
                            text: O.intl.string(O.t.OYkgVk),
                            onClick: M,
                            loading: T,
                        },
                    ],
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var i = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, i);
                      }
                      return n;
                  })(Object(n)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                  }),
            t),
        ),
    });
}
