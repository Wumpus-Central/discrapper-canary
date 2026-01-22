n.d(t, {
    A: () => F,
}),
    n(896048),
    n(65821);
var r,
    l = n(627968),
    i = n(64700),
    a = n(985623),
    s = n.n(a),
    o = n(837381),
    c = n(884362),
    u = n(311907),
    d = n(52133),
    f = n(397927),
    p = n(951001),
    h = n(775602),
    b = n(793574),
    g = n(58149),
    m = n(688810),
    A = n(660387),
    y = n(343328),
    O = n(485947),
    j = n(915089),
    v = n(725323),
    x = n(611924),
    E = n(95550),
    _ = n(380335),
    C = n(309199),
    S = n(157550),
    I = n(97469),
    N = n(734057),
    T = n(290863),
    P = n(645959),
    w = n(701363),
    R = n(652215),
    D = n(985018),
    M = n(454198);

function L(e, t, n) {
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

function G(e) {
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
                L(e, t, n[t]);
            });
    }
    return e;
}

function k(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let U = i.memo(function () {
    return (0, l.jsxs)("svg", {
        width: "184",
        height: "428",
        viewBox: "0 0 184 428",
        className: M.Ie,
        children: [
            (0, l.jsx)("rect", {
                x: 40,
                y: 6,
                width: 144,
                height: 20,
                rx: 10,
            }),
            (0, l.jsx)("circle", {
                cx: 16,
                cy: 16,
                r: 16,
            }),
            (0, l.jsx)("rect", {
                x: 40,
                y: 50,
                width: 144,
                height: 20,
                rx: 10,
                opacity: 0.9,
            }),
            (0, l.jsx)("circle", {
                cx: 16,
                cy: 60,
                r: 16,
                opacity: 0.9,
            }),
            (0, l.jsx)("rect", {
                x: 40,
                y: 94,
                width: 144,
                height: 20,
                rx: 10,
                opacity: 0.8,
            }),
            (0, l.jsx)("circle", {
                cx: 16,
                cy: 104,
                r: 16,
                opacity: 0.8,
            }),
            (0, l.jsx)("rect", {
                x: 40,
                y: 138,
                width: 144,
                height: 20,
                rx: 10,
                opacity: 0.7,
            }),
            (0, l.jsx)("circle", {
                cx: 16,
                cy: 148,
                r: 16,
                opacity: 0.7,
            }),
            (0, l.jsx)("rect", {
                x: 40,
                y: 182,
                width: 144,
                height: 20,
                rx: 10,
                opacity: 0.6,
            }),
            (0, l.jsx)("circle", {
                cx: 16,
                cy: 192,
                r: 16,
                opacity: 0.6,
            }),
            (0, l.jsx)("rect", {
                x: 40,
                y: 226,
                width: 144,
                height: 20,
                rx: 10,
                opacity: 0.5,
            }),
            (0, l.jsx)("circle", {
                cx: 16,
                cy: 236,
                r: 16,
                opacity: 0.5,
            }),
            (0, l.jsx)("rect", {
                x: 40,
                y: 270,
                width: 144,
                height: 20,
                rx: 10,
                opacity: 0.4,
            }),
            (0, l.jsx)("circle", {
                cx: 16,
                cy: 280,
                r: 16,
                opacity: 0.4,
            }),
            (0, l.jsx)("rect", {
                x: 40,
                y: 314,
                width: 144,
                height: 20,
                rx: 10,
                opacity: 0.3,
            }),
            (0, l.jsx)("circle", {
                cx: 16,
                cy: 324,
                r: 16,
                opacity: 0.3,
            }),
            (0, l.jsx)("rect", {
                x: 40,
                y: 358,
                width: 144,
                height: 20,
                rx: 10,
                opacity: 0.2,
            }),
            (0, l.jsx)("circle", {
                cx: 16,
                cy: 368,
                r: 16,
                opacity: 0.2,
            }),
            (0, l.jsx)("rect", {
                x: 40,
                y: 402,
                width: 144,
                height: 20,
                rx: 10,
                opacity: 0.1,
            }),
            (0, l.jsx)("circle", {
                cx: 16,
                cy: 412,
                r: 16,
                opacity: 0.1,
            }),
        ],
    });
});
class V extends (r = i.Component) {
    static getDerivedStateFromProps(e) {
        let { children: t, privateChannelIds: n } = e;
        if (null == t)
            return {
                preRenderedChildren: 0,
                nonNullChildren: [],
                totalRowCount: n.length,
            };
        {
            let e = t.filter((e) => null != e && !1 !== e),
                r = e.length;
            return {
                preRenderedChildren: r,
                nonNullChildren: e,
                totalRowCount: r + n.length,
            };
        }
    }
    componentDidMount() {
        let { selectedChannelId: e, homeLink: t } = this.props;
        null != e && null != t && t.indexOf(e) >= 0 && this.scrollToChannel(e), this.reportAnalytics();
    }
    shouldComponentUpdate(e) {
        return !(0, d.A)(this.props, e, ["children"]);
    }
    componentDidUpdate(e) {
        let { selectedChannelId: t, homeLink: n } = this.props;
        null != t && t !== e.selectedChannelId
            ? this.scrollToChannel(t)
            : null == t && n !== e.homeLink && this.scrollToChannel(null),
            this.reportAnalytics();
    }
    scrollToChannel(e) {
        if (null == this._list) return;
        let { padding: t } = this.props,
            { preRenderedChildren: n } = this.state,
            r = null != e ? this.props.privateChannelIds.indexOf(e) : -1,
            l = 0;
        r < 0 || null == e
            ? this._list.scrollTo({
                  to: l,
              })
            : ((l += 44 * (r + n) + t),
              this._list.scrollIntoViewRect({
                  start: Math.max(l - 8, 0),
                  end: l + 44 + 8,
              }));
    }
    render() {
        let { privateChannelIds: e, padding: t } = this.props,
            { preRenderedChildren: n } = this.state;
        return (0, l.jsx)(o.PR, {
            children: (r) => {
                let { ref: i, role: a } = r,
                    s = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            l,
                            i = {};
                        if ("u" > typeof Reflect && Reflect.ownKeys) {
                            for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++)
                                (r = n[l]),
                                    !(t.indexOf(r) >= 0) &&
                                        Object.prototype.propertyIsEnumerable.call(e, r) &&
                                        (i[r] = e[r]);
                            return i;
                        }
                        if (
                            ((i = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    l = {},
                                    i = Object.getOwnPropertyNames(e);
                                for (r = 0; r < i.length; r++)
                                    (n = i[r]),
                                        !(t.indexOf(n) >= 0) &&
                                            Object.prototype.propertyIsEnumerable.call(e, n) &&
                                            (l[n] = e[n]);
                                return l;
                            })(e, t)),
                            Object.getOwnPropertySymbols)
                        )
                            for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++)
                                (r = n[l]),
                                    !(t.indexOf(r) >= 0) &&
                                        Object.prototype.propertyIsEnumerable.call(e, r) &&
                                        (i[r] = e[r]);
                        return i;
                    })(r, ["ref", "role"]);
                return (0, l.jsx)(f.skg, {
                    children: (r) =>
                        (0, l.jsx)(
                            f.B8B,
                            G(
                                {
                                    fade: !0,
                                    innerRole: a,
                                    innerAriaLabel: D.intl.string(D.t.YUU0RF),
                                    innerTag: "ul",
                                    ref: (e) => {
                                        var t;
                                        (this._list = e),
                                            (this.props.listRef.current = e),
                                            (i.current =
                                                null != (t = null == e ? void 0 : e.getScrollerNode()) ? t : null);
                                    },
                                    onScroll: this.handleScroll,
                                    className: M.XG,
                                    sectionHeight: this.getSectionHeight,
                                    paddingTop: t,
                                    paddingBottom: 8,
                                    rowHeight: this.getRowHeight,
                                    renderSection: this.renderSection,
                                    renderRow: this.renderRow,
                                    sections: [n, Math.max(e.length, 1)],
                                },
                                s,
                                r,
                            ),
                        ),
                });
            },
        });
    }
    constructor(...e) {
        super(...e),
            L(this, "state", {
                initialized: !1,
                preRenderedChildren: 0,
                totalRowCount: 0,
                nonNullChildren: [],
            }),
            L(this, "_list", null),
            L(this, "hasReportedAnalytics", !1),
            L(this, "reportAnalytics", () => {
                var e;
                if (this.hasReportedAnalytics) return;
                let t = null == (e = this._list) ? void 0 : e.getScrollerState();
                if (null == t) return;
                let { privateChannelIds: n, channels: r } = this.props;
                if (0 === n.length) return;
                let l = i.Children.count(this.props.children);
                if (null == t) return;
                let a = Math.round((t.offsetHeight - 44 * l) / 44),
                    s = a > n.length ? n.slice(0, a + 1) : n,
                    o = s.map((e) => (null != r[e] ? r[e].getRecipientId() : null)),
                    c = n.some((e) => (0, y.A)(e)),
                    u = {
                        num_users_visible: s.length,
                        num_users_visible_with_mobile_indicator: o.filter((e) => null != e && T.A.isMobileOnline(e))
                            .length,
                    };
                (this.hasReportedAnalytics = !0),
                    g.Ay.trackWithMetadata(
                        R.HAw.DM_LIST_VIEWED,
                        k(G({}, u, (0, A.F)()), {
                            visible_user_ids: o.filter((e) => null != e),
                            changelog_dm_visible: c,
                        }),
                    );
            }),
            L(this, "getSectionHeight", (e) => 24 * (0 !== e)),
            L(
                this,
                "handleScroll",
                s()(() => {
                    if (null != this._list) {
                        let e = this._list.getScrollerNode();
                        null != e && p.A.updateChannelListScroll(R.ME, e.scrollTop);
                    }
                    void 0 !== this.props.onHandleScroll && this.props.onHandleScroll();
                }, 100),
            ),
            L(this, "renderDM", (e, t) => {
                let { privateChannelIds: n, channels: r, selectedChannelId: i } = this.props,
                    { totalRowCount: a, preRenderedChildren: s } = this.state,
                    o = r[n[t]];
                return null == o
                    ? null
                    : (0, l.jsx)(
                          w.Ay,
                          {
                              channel: o,
                              selected: o.id === i,
                              "aria-posinset": s + t + 1,
                              "aria-setsize": a,
                          },
                          o.id,
                      );
            }),
            L(this, "renderChild", (e) => {
                let { nonNullChildren: t, totalRowCount: n } = this.state,
                    r = t[e];
                return i.isValidElement(r)
                    ? i.cloneElement(r, {
                          "aria-setsize": n,
                          "aria-posinset": e + 1,
                      })
                    : r;
            }),
            L(this, "renderRow", (e) => {
                let { section: t, row: n } = e,
                    { privateChannelIds: r } = this.props;
                return 0 === t
                    ? this.renderChild(n)
                    : 0 === n && 0 === r.length
                      ? (0, l.jsx)(U, {}, "no-private-channels")
                      : this.renderDM(t, n);
            }),
            L(this, "renderSection", (e) => {
                let { section: t } = e;
                return 0 === t
                    ? null
                    : (0, l.jsxs)(
                          O.A,
                          {
                              className: M._e,
                              children: [
                                  (0, l.jsx)("span", {
                                      className: M.TK,
                                      children: D.intl.string(D.t.YUU0RF),
                                  }),
                                  (0, l.jsx)(E.A, {
                                      tooltip: D.intl.string(D.t["6Urw1t"]),
                                      tooltipPosition: "top",
                                      className: M.U2,
                                      iconClassName: M.Br,
                                      icon: f.TIR,
                                      subscribeToGlobalHotkey: !0,
                                  }),
                              ],
                          },
                          t,
                      );
            }),
            L(this, "getRowHeight", (e, t) => {
                let { privateChannelIds: n, density: r } = this.props,
                    { nonNullChildren: l } = this.state,
                    a = 44;
                if (0 === e) {
                    let e = l[t];
                    if (i.isValidElement(e)) {
                        var s;
                        a = (null == (s = e.key) ? void 0 : s.startsWith("section-divider"))
                            ? 25
                            : "dm-quick-launcher" === e.key
                              ? 67
                              : 40;
                    }
                } else a = "compact" === r ? 40 : "default" === r ? 44 : 50;
                return 1 === e && 0 === t && 0 === n.length ? 428 : a;
            });
    }
}
L(V, "defaultProps", {
    padding: 8,
});
let F = (e) => {
    let { density: t } = (0, f.wRf)(),
        { version: n, theme: r, children: a, listScrollerRef: s } = e,
        d = i.Children.count(a),
        p = N.A.getMutablePrivateChannels(),
        g = (0, C.uX)(p),
        A = (0, u.yK)([P.A, _.A, S.A], () => {
            let e = P.A.getPrivateChannelIds();
            return (0, C.eh)(e, [_.A, S.A]);
        });
    (0, x.P)(v._);
    let { analyticsLocations: y } = (0, m.Ay)(b.A.CONTACTS_LIST),
        O = (0, I.NC)(),
        { keyboardModeEnabled: E, version: T } = (0, u.cf)([h.A, N.A], () => ({
            keyboardModeEnabled: h.A.keyboardModeEnabled,
            version:
                null != n ? "".concat(n, ":").concat(N.A.getPrivateChannelsVersion()) : N.A.getPrivateChannelsVersion(),
        })),
        w = i.useRef(null),
        R = null != s ? s : w,
        D = i.useCallback(
            (e) => {
                let t = R.current,
                    n = document.querySelector(e);
                null != t &&
                    null != n &&
                    t.scrollIntoViewNode({
                        node: n,
                        callback: () => {
                            requestAnimationFrame(() => {
                                var t;
                                return null == (t = document.querySelector(e))
                                    ? void 0
                                    : t.focus({
                                          preventScroll: !0,
                                      });
                            });
                        },
                    });
            },
            [R],
        ),
        M = i.useCallback(
            () =>
                new Promise((e) => {
                    let t = R.current;
                    if (null == t) return e();
                    t.scrollToTop({
                        callback: () => requestAnimationFrame(() => e()),
                    });
                }),
            [R],
        ),
        L = i.useCallback(
            () =>
                new Promise((e) => {
                    let t = R.current;
                    if (null == t) return e();
                    t.scrollToBottom({
                        callback() {
                            requestAnimationFrame(() => setTimeout(e, 100));
                        },
                    });
                }),
            [R],
        ),
        U = (0, j.GV)(),
        F = (0, c.Ay)({
            id: "private-channels-".concat(U),
            isEnabled: E,
            scrollToStart: M,
            scrollToEnd: L,
            defaultFocused: (d + 1).toString(),
            setFocus: D,
        });
    return (0, l.jsx)(m.f5, {
        value: y,
        children: (0, l.jsx)(o.hD, {
            navigator: F,
            children: (0, l.jsx)(
                V,
                k(G({}, e), {
                    density: t,
                    channels: g,
                    privateChannelIds: A,
                    listRef: R,
                    theme: null != O ? O : r,
                    version: T,
                }),
            ),
        }),
    });
};
