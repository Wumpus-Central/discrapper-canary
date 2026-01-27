r.d(t, {
    Ay: () => F,
    Y9: () => L,
    u9: () => N,
}),
    r(896048),
    r(321073);
var n = r(627968),
    l = r(64700),
    s = r(503698),
    a = r.n(s),
    i = r(735438),
    o = r.n(i);
if (21552 == r.j) var c = r(837381);
var u = r(311907),
    d = r(397927),
    h = r(843472),
    p = r(928039),
    f = r(12351),
    g = r(976860),
    S = r(734057),
    E = r(320501),
    y = r(576705),
    _ = r(519057),
    m = r(531685),
    A = r(954571),
    b = r(203982),
    O = r(81437),
    R = r(636922),
    v = r(652215),
    x = r(985018),
    T = r(726195);

function I(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}

function j(e) {
    e.stopPropagation();
}
let L = (e) => {
        let { title: t, icon: r, children: l, className: s } = e;
        return (0, n.jsxs)("div", {
            className: a()(s, T.wx),
            children: [
                (0, n.jsxs)("div", {
                    className: T.gn,
                    children: [
                        null != r
                            ? (0, n.jsx)(r, {
                                  color: d.LU0.colors.INTERACTIVE_TEXT_DEFAULT,
                              })
                            : null,
                        null == t
                            ? null
                            : (0, n.jsx)(d.Text, {
                                  variant: "text-lg/semibold",
                                  color: "interactive-text-active",
                                  children: t,
                              }),
                    ],
                }),
                l,
            ],
        });
    },
    N = (e) => {
        let { msg: t, image: r } = e;
        return (0, n.jsxs)("div", {
            className: T.zC,
            children: [
                (0, n.jsx)("div", {
                    className: T.Sl,
                    style: {
                        backgroundImage: "url(".concat(r, ")"),
                    },
                }),
                (0, n.jsx)("div", {
                    className: T.rf,
                    children: t,
                }),
            ],
        });
    };
class C extends l.PureComponent {
    renderJumpButton() {
        let { jumping: e } = this.props;
        return (0, n.jsx)("div", {
            className: T.UD,
            children: (0, n.jsx)(d.Button, {
                variant: "secondary",
                size: "sm",
                text: x.intl.string(x.t.k5WiPf),
                onClick: this.handleClickJump,
                loading: e,
            }),
        });
    }
    renderCloseButton() {
        let {
            onCloseMessage: e,
            canCloseAllMessages: t,
            canManageMessages: r,
            channel: l,
            closeAriaLabel: s,
        } = this.props;
        return null != e && (t || r || (null != l && l.isPrivate()))
            ? (0, n.jsx)("div", {
                  className: T.UD,
                  children: (0, n.jsx)(d.K0, {
                      icon: d.PGe,
                      size: "sm",
                      variant: "secondary",
                      "aria-label": null != s ? s : x.intl.string(x.t.cpT0Cq),
                      onClick: this.handleClickClose,
                  }),
              })
            : null;
    }
    render() {
        return (0, n.jsxs)("div", {
            className: T.uu,
            children: [this.renderJumpButton(), this.renderCloseButton()],
        });
    }
    constructor(...e) {
        super(...e),
            I(this, "handleClickJump", (e) => {
                let { jumpTo: t, message: r } = this.props;
                t(r, e);
            }),
            I(this, "handleClickClose", (e) => {
                let { onCloseMessage: t, message: r } = this.props;
                null != t && t(r, e);
            });
    }
}
let w = u.Ay.connectStores([y.A], (e) => {
    let { channel: t } = e;
    return {
        canManageMessages: null != t && y.A.can(v.xBc.MANAGE_MESSAGES, t),
    };
})(C);

function P(e) {
    let {
            analyticsName: t,
            items: r,
            hasMore: s,
            loading: i,
            loadMore: h,
            renderHeader: g,
            renderEmptyState: S,
            renderItem: E,
            getProTip: y,
            scrollerClassName: O,
            className: R,
            listName: L,
        } = e,
        N = l.useRef(null),
        C = (0, p.A)(L, N),
        w = (0, u.bG)([_.Ay], () => _.Ay.hasNotice()),
        P = (0, u.bG)([m.A], () => m.A.windowSize());
    l.useEffect(() => {
        A.default.track(v.HAw.OPEN_POPOUT, {
            type: t,
        });
    }, [t]),
        l.useEffect(() => {
            function e() {
                var e;
                null == (e = N.current) ||
                    e.scrollPageUp({
                        animate: !0,
                    });
            }

            function t() {
                var e;
                null == (e = N.current) ||
                    e.scrollPageDown({
                        animate: !0,
                    });
            }
            return (
                b._.subscribe(v.jej.SCROLL_PAGE_DOWN, t),
                b._.subscribe(v.jej.SCROLL_PAGE_UP, e),
                () => {
                    b._.unsubscribe(v.jej.SCROLL_PAGE_DOWN, t), b._.unsubscribe(v.jej.SCROLL_PAGE_UP, e);
                }
            );
        }, []);
    let F = l.useCallback(() => {
            var e;
            let t = null == (e = N.current) ? void 0 : e.getScrollerState();
            null != t && t.scrollHeight - t.scrollTop - t.offsetHeight < 250 && s && !i && (null == h || h());
        }, [s, h, i]),
        k = [],
        M = !0;
    null == r || (i && 0 === r.length)
        ? (k = [
              (0, n.jsx)(
                  "div",
                  {
                      className: a()(T.zC, T.k$),
                      children: (0, n.jsx)(d.y$y, {}),
                  },
                  "spinner",
              ),
          ])
        : 0 === r.length
          ? k.push(
                (0, n.jsx)(
                    l.Fragment,
                    {
                        children: S(),
                    },
                    "empty-state",
                ),
            )
          : ((M = !1),
            (k = []),
            o().each(r, (e) => {
                k.push(...E(e));
            }));
    let W = null;
    null != r &&
        r.length > 0 &&
        null != h &&
        (W = i
            ? (0, n.jsx)(
                  "div",
                  {
                      className: T.sw,
                      children: (0, n.jsx)(d.y$y, {}),
                  },
                  "loading-more-after",
              )
            : s
              ? (0, n.jsx)("div", {
                    className: T.u9,
                    children: (0, n.jsx)(d.Button, {
                        variant: "secondary",
                        size: "sm",
                        fullWidth: !0,
                        text: x.intl.string(x.t.XBlaiC),
                        onClick: h,
                    }),
                })
              : (0, n.jsx)("div", {
                    className: T.lJ,
                    children: S(),
                }));
    let D = null == y ? void 0 : y(),
        H =
            M && null != D
                ? (0, n.jsx)("div", {
                      className: T.qr,
                      children: (0, n.jsx)(f.A, {
                          style: {
                              width: "100%",
                              paddingTop: 10,
                              paddingBottom: 10,
                          },
                          children: D,
                      }),
                  })
                : null,
        U = {
            maxHeight: P.height - 43 - 25 - 48,
        };
    w && (U.maxHeight -= 40);
    let q = null != h && s;
    return (0, n.jsx)("div", {
        className: a()(R, T.KQ),
        style: U,
        onClick: j,
        onDoubleClick: j,
        "aria-label": e["aria-label"],
        children: (0, n.jsxs)(d.Fmo, {
            component: g(),
            children: [
                (0, n.jsxs)(d.T7Y, {
                    className: a()(T.m4, O),
                    onScroll: q ? F : void 0,
                    ref: N,
                    children: [
                        (0, n.jsx)(c.hD, {
                            navigator: C,
                            children: (0, n.jsx)(c.PR, {
                                children: (e) => {
                                    var t, r;
                                    let { ref: l } = e,
                                        s = (function (e, t) {
                                            if (null == e) return {};
                                            var r,
                                                n,
                                                l,
                                                s = {};
                                            if ("u" > typeof Reflect && Reflect.ownKeys) {
                                                for (l = 0, r = Reflect.ownKeys(e); l < r.length; l++)
                                                    (n = r[l]),
                                                        !(t.indexOf(n) >= 0) &&
                                                            Object.prototype.propertyIsEnumerable.call(e, n) &&
                                                            (s[n] = e[n]);
                                                return s;
                                            }
                                            if (
                                                ((s = (function (e, t) {
                                                    if (null == e) return {};
                                                    var r,
                                                        n,
                                                        l = {},
                                                        s = Object.getOwnPropertyNames(e);
                                                    for (n = 0; n < s.length; n++)
                                                        (r = s[n]),
                                                            !(t.indexOf(r) >= 0) &&
                                                                Object.prototype.propertyIsEnumerable.call(e, r) &&
                                                                (l[r] = e[r]);
                                                    return l;
                                                })(e, t)),
                                                Object.getOwnPropertySymbols)
                                            )
                                                for (l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++)
                                                    (n = r[l]),
                                                        !(t.indexOf(n) >= 0) &&
                                                            Object.prototype.propertyIsEnumerable.call(e, n) &&
                                                            (s[n] = e[n]);
                                            return s;
                                        })(e, ["ref"]);
                                    return (0, n.jsx)(
                                        "div",
                                        ((t = (function (e) {
                                            for (var t = 1; t < arguments.length; t++) {
                                                var r = null != arguments[t] ? arguments[t] : {},
                                                    n = Object.keys(r);
                                                "function" == typeof Object.getOwnPropertySymbols &&
                                                    (n = n.concat(
                                                        Object.getOwnPropertySymbols(r).filter(function (e) {
                                                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                                        }),
                                                    )),
                                                    n.forEach(function (t) {
                                                        I(e, t, r[t]);
                                                    });
                                            }
                                            return e;
                                        })(
                                            {
                                                ref: l,
                                            },
                                            s,
                                        )),
                                        (r = r =
                                            {
                                                children: k,
                                            }),
                                        Object.getOwnPropertyDescriptors
                                            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                                            : (function (e, t) {
                                                  var r = Object.keys(e);
                                                  if (Object.getOwnPropertySymbols) {
                                                      var n = Object.getOwnPropertySymbols(e);
                                                      r.push.apply(r, n);
                                                  }
                                                  return r;
                                              })(Object(r)).forEach(function (e) {
                                                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                                              }),
                                        t),
                                    );
                                },
                            }),
                        }),
                        W,
                    ],
                }),
                H,
            ],
        }),
    });
}

function F(e) {
    let {
            analyticsName: t,
            onFetch: r,
            channel: s,
            messages: a,
            hasMore: i,
            loading: o,
            loadMore: c,
            onJump: d,
            canCloseAllMessages: p = !1,
            renderHeader: f,
            renderEmptyState: y,
            renderMessage: _,
            getProTip: m,
            scrollerClassName: A,
            className: b,
            onCloseMessage: x,
            listName: I,
            closeAriaLabel: j,
        } = e,
        L = (0, u.bG)([E.A], () => {
            let e = null != s ? E.A.getMessages(s.id) : null;
            return null != e && null != e.jumpTargetId && e.loadingMore && null == e.get(e.jumpTargetId);
        });

    function N(e, r) {
        let n = () => {
            let { id: n, channel_id: l } = e,
                s = S.A.getChannel(l);
            null != s && (h.A.trackJump(l, n, t), (0, g.pX)(v.BVt.CHANNEL(s.getGuildId(), l, n))), null == d || d(r);
        };
        (0, O.A)(e, n) && !L && n();
    }
    l.useEffect(() => {
        r(s);
    }, [s, r]);
    let C = l.useMemo(
        () =>
            null == a
                ? void 0
                : a.map((e) => ({
                      message: e,
                      channel: s,
                  })),
        [a, s],
    );
    return (0, n.jsx)(P, {
        className: b,
        scrollerClassName: A,
        items: C,
        loading: o,
        analyticsName: t,
        renderEmptyState: y,
        renderHeader: f,
        hasMore: i,
        loadMore: c,
        getProTip: m,
        renderItem: function (e) {
            let { message: t, channel: r } = e;
            if (null == t) return [];
            if (null != _) return _(t, (e) => N(t, e));
            let l = [];
            return null == r
                ? []
                : (l.push(
                      (0, n.jsxs)(
                          "div",
                          {
                              className: T.Uc,
                              children: [
                                  (0, n.jsx)(R.A, {
                                      className: T.i0,
                                      message: t,
                                      channel: r,
                                  }),
                                  (0, n.jsx)(w, {
                                      channel: s,
                                      message: t,
                                      jumping: L,
                                      canCloseAllMessages: p,
                                      jumpTo: N,
                                      onCloseMessage: x,
                                      closeAriaLabel: j,
                                  }),
                              ],
                          },
                          t.id,
                      ),
                  ),
                  l);
        },
        listName: I,
        "aria-label": e["aria-label"],
    });
}
