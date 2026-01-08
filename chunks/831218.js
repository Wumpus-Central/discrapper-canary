n.d(t, { Z: () => B }), n(388685), n(415506);
var r,
    i = n(54381),
    l = n(473749),
    a = n(299608),
    o = n.n(a),
    s = n(91192),
    c = n(924826),
    u = n(442837),
    d = n(902704),
    p = n(481060),
    f = n(925549),
    h = n(607070),
    g = n(100527),
    m = n(367907),
    b = n(906732),
    y = n(453542),
    v = n(702321),
    O = n(82295),
    j = n(313201),
    x = n(860144),
    C = n(214852),
    E = n(518311),
    S = n(355298),
    _ = n(869404),
    I = n(333984),
    P = n(984802),
    Z = n(592125),
    N = n(158776),
    T = n(55589),
    A = n(515753),
    w = n(981631),
    R = n(388032),
    D = n(668626);
function M(e, t, n) {
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
function k(e) {
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
                M(e, t, n[t]);
            });
    }
    return e;
}
function L(e, t) {
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
let U = l.memo(function () {
    return (0, i.jsxs)("svg", {
        width: "184",
        height: "428",
        viewBox: "0 0 184 428",
        className: D.empty,
        children: [
            (0, i.jsx)("rect", {
                x: 40,
                y: 6,
                width: 144,
                height: 20,
                rx: 10,
            }),
            (0, i.jsx)("circle", {
                cx: 16,
                cy: 16,
                r: 16,
            }),
            (0, i.jsx)("rect", {
                x: 40,
                y: 50,
                width: 144,
                height: 20,
                rx: 10,
                opacity: 0.9,
            }),
            (0, i.jsx)("circle", {
                cx: 16,
                cy: 60,
                r: 16,
                opacity: 0.9,
            }),
            (0, i.jsx)("rect", {
                x: 40,
                y: 94,
                width: 144,
                height: 20,
                rx: 10,
                opacity: 0.8,
            }),
            (0, i.jsx)("circle", {
                cx: 16,
                cy: 104,
                r: 16,
                opacity: 0.8,
            }),
            (0, i.jsx)("rect", {
                x: 40,
                y: 138,
                width: 144,
                height: 20,
                rx: 10,
                opacity: 0.7,
            }),
            (0, i.jsx)("circle", {
                cx: 16,
                cy: 148,
                r: 16,
                opacity: 0.7,
            }),
            (0, i.jsx)("rect", {
                x: 40,
                y: 182,
                width: 144,
                height: 20,
                rx: 10,
                opacity: 0.6,
            }),
            (0, i.jsx)("circle", {
                cx: 16,
                cy: 192,
                r: 16,
                opacity: 0.6,
            }),
            (0, i.jsx)("rect", {
                x: 40,
                y: 226,
                width: 144,
                height: 20,
                rx: 10,
                opacity: 0.5,
            }),
            (0, i.jsx)("circle", {
                cx: 16,
                cy: 236,
                r: 16,
                opacity: 0.5,
            }),
            (0, i.jsx)("rect", {
                x: 40,
                y: 270,
                width: 144,
                height: 20,
                rx: 10,
                opacity: 0.4,
            }),
            (0, i.jsx)("circle", {
                cx: 16,
                cy: 280,
                r: 16,
                opacity: 0.4,
            }),
            (0, i.jsx)("rect", {
                x: 40,
                y: 314,
                width: 144,
                height: 20,
                rx: 10,
                opacity: 0.3,
            }),
            (0, i.jsx)("circle", {
                cx: 16,
                cy: 324,
                r: 16,
                opacity: 0.3,
            }),
            (0, i.jsx)("rect", {
                x: 40,
                y: 358,
                width: 144,
                height: 20,
                rx: 10,
                opacity: 0.2,
            }),
            (0, i.jsx)("circle", {
                cx: 16,
                cy: 368,
                r: 16,
                opacity: 0.2,
            }),
            (0, i.jsx)("rect", {
                x: 40,
                y: 402,
                width: 144,
                height: 20,
                rx: 10,
                opacity: 0.1,
            }),
            (0, i.jsx)("circle", {
                cx: 16,
                cy: 412,
                r: 16,
                opacity: 0.1,
            }),
        ],
    });
});
class G extends (r = l.Component) {
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
        return !(0, d.Z)(this.props, e, ["children"]);
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
            i = 0;
        r < 0 || null == e
            ? this._list.scrollTo({ to: i })
            : ((i += 44 * (r + n) + t),
              this._list.scrollIntoViewRect({
                  start: Math.max(i - 8, 0),
                  end: i + 44 + 8,
              }));
    }
    render() {
        let { privateChannelIds: e, padding: t } = this.props,
            { preRenderedChildren: n } = this.state;
        return (0, i.jsx)(s.SJ, {
            children: (r) => {
                var { ref: l, role: a } = r,
                    o = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    i = {},
                                    l = Object.keys(e);
                                for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                                return i;
                            })(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var l = Object.getOwnPropertySymbols(e);
                            for (r = 0; r < l.length; r++)
                                (n = l[r]),
                                    !(t.indexOf(n) >= 0) &&
                                        Object.prototype.propertyIsEnumerable.call(e, n) &&
                                        (i[n] = e[n]);
                        }
                        return i;
                    })(r, ["ref", "role"]);
                return (0, i.jsx)(p.Wdt, {
                    children: (r) =>
                        (0, i.jsx)(
                            p.aVo,
                            k(
                                {
                                    fade: !0,
                                    innerRole: a,
                                    innerAriaLabel: R.intl.string(R.t.YUU0RF),
                                    innerTag: "ul",
                                    ref: (e) => {
                                        var t;
                                        (this._list = e),
                                            (this.props.listRef.current = e),
                                            (l.current =
                                                null != (t = null == e ? void 0 : e.getScrollerNode()) ? t : null);
                                    },
                                    onScroll: this.handleScroll,
                                    className: D.scroller,
                                    sectionHeight: this.getSectionHeight,
                                    paddingTop: t,
                                    paddingBottom: 8,
                                    rowHeight: this.getRowHeight,
                                    renderSection: this.renderSection,
                                    renderRow: this.renderRow,
                                    sections: [n, Math.max(e.length, 1)],
                                },
                                o,
                                r,
                            ),
                        ),
                });
            },
        });
    }
    constructor(...e) {
        super(...e),
            M(this, "state", {
                initialized: !1,
                preRenderedChildren: 0,
                totalRowCount: 0,
                nonNullChildren: [],
            }),
            M(this, "_list", null),
            M(this, "hasReportedAnalytics", !1),
            M(this, "reportAnalytics", () => {
                var e;
                if (this.hasReportedAnalytics) return;
                let t = null == (e = this._list) ? void 0 : e.getScrollerState();
                if (null == t) return;
                let { privateChannelIds: n, channels: r } = this.props;
                if (0 === n.length) return;
                let i = l.Children.count(this.props.children);
                if (null == t) return;
                let a = Math.round((t.offsetHeight - 44 * i) / 44),
                    o = a > n.length ? n.slice(0, a + 1) : n,
                    s = o.map((e) => (null != r[e] ? r[e].getRecipientId() : null)),
                    c = n.some((e) => (0, v.Z)(e)),
                    u = {
                        num_users_visible: o.length,
                        num_users_visible_with_mobile_indicator: s.filter((e) => null != e && N.Z.isMobileOnline(e))
                            .length,
                    };
                (this.hasReportedAnalytics = !0),
                    m.ZP.trackWithMetadata(
                        w.rMx.DM_LIST_VIEWED,
                        L(k({}, u, (0, y.X)()), {
                            visible_user_ids: s.filter((e) => null != e),
                            changelog_dm_visible: c,
                        }),
                    );
            }),
            M(this, "getSectionHeight", (e) => 24 * (0 !== e)),
            M(
                this,
                "handleScroll",
                o()(() => {
                    if (null != this._list) {
                        let e = this._list.getScrollerNode();
                        null != e && f.Z.updateChannelListScroll(w.ME, e.scrollTop);
                    }
                    void 0 !== this.props.onHandleScroll && this.props.onHandleScroll();
                }, 100),
            ),
            M(this, "renderDM", (e, t) => {
                let { privateChannelIds: n, channels: r, selectedChannelId: l } = this.props,
                    { totalRowCount: a, preRenderedChildren: o } = this.state,
                    s = r[n[t]];
                return null == s
                    ? null
                    : (0, i.jsx)(
                          A.ZP,
                          {
                              channel: s,
                              selected: s.id === l,
                              "aria-posinset": o + t + 1,
                              "aria-setsize": a,
                          },
                          s.id,
                      );
            }),
            M(this, "renderChild", (e) => {
                let { nonNullChildren: t, totalRowCount: n } = this.state,
                    r = t[e];
                return l.isValidElement(r)
                    ? l.cloneElement(r, {
                          "aria-setsize": n,
                          "aria-posinset": e + 1,
                      })
                    : r;
            }),
            M(this, "renderRow", (e) => {
                let { section: t, row: n } = e,
                    { privateChannelIds: r } = this.props;
                return 0 === t
                    ? this.renderChild(n)
                    : 0 === n && 0 === r.length
                      ? (0, i.jsx)(U, {}, "no-private-channels")
                      : this.renderDM(t, n);
            }),
            M(this, "renderSection", (e) => {
                let { section: t } = e;
                return 0 === t
                    ? null
                    : (0, i.jsxs)(
                          O.Z,
                          {
                              className: D.privateChannelsHeaderContainer,
                              children: [
                                  (0, i.jsx)("span", {
                                      className: D.headerText,
                                      children: R.intl.string(R.t.YUU0RF),
                                  }),
                                  (0, i.jsx)(E.Z, {
                                      tooltip: R.intl.string(R.t["6Urw1t"]),
                                      tooltipPosition: "top",
                                      className: D.privateChannelRecipientsInviteButtonIconContainer,
                                      iconClassName: D.privateChannelRecipientsInviteButtonIcon,
                                      icon: p.BRu,
                                      subscribeToGlobalHotkey: !0,
                                  }),
                              ],
                          },
                          t,
                      );
            }),
            M(this, "getRowHeight", (e, t) => {
                let { privateChannelIds: n, density: r } = this.props,
                    { nonNullChildren: i } = this.state,
                    a = 44;
                if (0 === e) {
                    let e = i[t];
                    if (l.isValidElement(e)) {
                        var o;
                        a = (null == (o = e.key) ? void 0 : o.startsWith("section-divider"))
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
M(G, "defaultProps", { padding: 8 });
let B = (e) => {
    let { density: t } = (0, p.TCT)(),
        { version: n, theme: r, children: a, listScrollerRef: o } = e,
        d = l.Children.count(a),
        f = Z.Z.getMutablePrivateChannels(),
        m = (0, _.k1)(f),
        y = (0, u.Wu)([T.Z, S.Z, I.Z], () => {
            let e = T.Z.getPrivateChannelIds();
            return (0, _.tU)(e, [S.Z, I.Z]);
        });
    (0, C.z)(x.R);
    let { analyticsLocations: v } = (0, b.ZP)(g.Z.CONTACTS_LIST),
        O = (0, P.Ll)(),
        { keyboardModeEnabled: E, version: N } = (0, u.cj)([h.Z, Z.Z], () => ({
            keyboardModeEnabled: h.Z.keyboardModeEnabled,
            version:
                null != n ? "".concat(n, ":").concat(Z.Z.getPrivateChannelsVersion()) : Z.Z.getPrivateChannelsVersion(),
        })),
        A = l.useRef(null),
        w = null != o ? o : A,
        R = l.useCallback(
            (e) => {
                let t = w.current,
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
                                    : t.focus({ preventScroll: !0 });
                            });
                        },
                    });
            },
            [w],
        ),
        D = l.useCallback(
            () =>
                new Promise((e) => {
                    let t = w.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [w],
        ),
        M = l.useCallback(
            () =>
                new Promise((e) => {
                    let t = w.current;
                    if (null == t) return e();
                    t.scrollToBottom({
                        callback() {
                            requestAnimationFrame(() => setTimeout(e, 100));
                        },
                    });
                }),
            [w],
        ),
        U = (0, j.Dt)(),
        B = (0, c.ZP)({
            id: "private-channels-".concat(U),
            isEnabled: E,
            scrollToStart: D,
            scrollToEnd: M,
            defaultFocused: (d + 1).toString(),
            setFocus: R,
        });
    return (0, i.jsx)(b.Gt, {
        value: v,
        children: (0, i.jsx)(s.bG, {
            navigator: B,
            children: (0, i.jsx)(
                G,
                L(k({}, e), {
                    density: t,
                    channels: m,
                    privateChannelIds: y,
                    listRef: w,
                    theme: null != O ? O : r,
                    version: N,
                }),
            ),
        }),
    });
};
