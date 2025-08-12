n.d(t, { Z: () => F }), n(388685);
var r,
    i = n(255367),
    l = n(73800),
    o = n(120356),
    s = n.n(o),
    a = n(299608),
    c = n.n(a),
    u = n(91192),
    d = n(924826),
    h = n(442837),
    p = n(902704),
    f = n(481060),
    g = n(925549),
    m = n(607070),
    b = n(100527),
    O = n(367907),
    _ = n(906732),
    y = n(453542),
    C = n(702321),
    v = n(46148),
    j = n(82295),
    E = n(313201),
    S = n(860144),
    x = n(214852),
    I = n(518311),
    P = n(355298),
    N = n(869404),
    w = n(333984),
    Z = n(984802),
    T = n(592125),
    A = n(158776),
    R = n(55589),
    D = n(981631),
    L = n(388032),
    M = n(228308);
function k(e, t, n) {
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
function U(e) {
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
                k(e, t, n[t]);
            });
    }
    return e;
}
function G(e, t) {
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
let B = l.memo(function () {
    return (0, i.jsxs)("svg", {
        width: "184",
        height: "428",
        viewBox: "0 0 184 428",
        className: M.empty,
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
class V extends (r = l.Component) {
    static getDerivedStateFromProps(e) {
        let { children: t, privateChannelIds: n } = e;
        if (null == t)
            return {
                preRenderedChildren: 0,
                nonNullChildren: [],
                totalRowCount: n.length,
            };
        {
            let e = t.filter((e) => null != e),
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
        return !(0, p.Z)(this.props, e, ["children"]);
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
        return (0, i.jsx)(u.SJ, {
            children: (r) => {
                var { ref: l, role: o } = r,
                    s = (function (e, t) {
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
                return (0, i.jsx)(f.Wdt, {
                    children: (r) =>
                        (0, i.jsx)(
                            f.aVo,
                            U(
                                {
                                    fade: !0,
                                    innerRole: o,
                                    innerAriaLabel: L.intl.string(L.t.YUU0RE),
                                    innerTag: "ul",
                                    ref: (e) => {
                                        var t;
                                        (this._list = e),
                                            (this.props.listRef.current = e),
                                            (l.current =
                                                null != (t = null == e ? void 0 : e.getScrollerNode()) ? t : null);
                                    },
                                    onScroll: this.handleScroll,
                                    className: M.scroller,
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
            k(this, "state", {
                initialized: !1,
                preRenderedChildren: 0,
                totalRowCount: 0,
                nonNullChildren: [],
            }),
            k(this, "_list", null),
            k(this, "hasReportedAnalytics", !1),
            k(this, "reportAnalytics", () => {
                var e;
                if (this.hasReportedAnalytics) return;
                let t = null == (e = this._list) ? void 0 : e.getScrollerState();
                if (null == t) return;
                let { privateChannelIds: n, channels: r } = this.props;
                if (0 === n.length) return;
                let i = l.Children.count(this.props.children);
                if (null == t) return;
                let o = Math.round((t.offsetHeight - 44 * i) / 44),
                    s = o > n.length ? n.slice(0, o + 1) : n,
                    a = s.map((e) => (null != r[e] ? r[e].getRecipientId() : null)),
                    c = n.some((e) => (0, C.Z)(e)),
                    u = {
                        num_users_visible: s.length,
                        num_users_visible_with_mobile_indicator: a.filter((e) => null != e && A.Z.isMobileOnline(e))
                            .length,
                    };
                (this.hasReportedAnalytics = !0),
                    O.ZP.trackWithMetadata(
                        D.rMx.DM_LIST_VIEWED,
                        G(U({}, u, (0, y.X)()), {
                            visible_user_ids: a.filter((e) => null != e),
                            changelog_dm_visible: c,
                        }),
                    );
            }),
            k(this, "getSectionHeight", (e) => {
                let { showDMHeader: t } = this.props;
                return 0 === e ? 0 : 24 * !!t;
            }),
            k(
                this,
                "handleScroll",
                c()(() => {
                    if (null != this._list) {
                        let e = this._list.getScrollerNode();
                        null != e && g.Z.updateChannelListScroll(D.ME, e.scrollTop);
                    }
                    void 0 !== this.props.onHandleScroll && this.props.onHandleScroll();
                }, 100),
            ),
            k(this, "renderDM", (e, t) => {
                let { privateChannelIds: n, channels: r, selectedChannelId: l } = this.props,
                    { totalRowCount: o, preRenderedChildren: s } = this.state,
                    a = r[n[t]];
                return null == a
                    ? null
                    : (0, i.jsx)(
                          v.W,
                          {
                              channel: a,
                              selected: a.id === l,
                              "aria-posinset": s + t + 1,
                              "aria-setsize": o,
                          },
                          a.id,
                      );
            }),
            k(this, "renderChild", (e) => {
                let { nonNullChildren: t, totalRowCount: n } = this.state,
                    r = t[e];
                return l.isValidElement(r)
                    ? l.cloneElement(r, {
                          "aria-setsize": n,
                          "aria-posinset": e + 1,
                      })
                    : r;
            }),
            k(this, "renderRow", (e) => {
                let { section: t, row: n } = e,
                    { privateChannelIds: r } = this.props;
                return 0 === t
                    ? this.renderChild(n)
                    : 0 === n && 0 === r.length
                      ? (0, i.jsx)(B, {}, "no-private-channels")
                      : this.renderDM(t, n);
            }),
            k(this, "renderSection", (e) => {
                let { section: t } = e,
                    { showDMHeader: n, createDMCTAButtonVariant: r } = this.props;
                return 0 !== t && n
                    ? (0, i.jsxs)(
                          j.Z,
                          {
                              className: s()(M.privateChannelsHeaderContainer, { [M.tall]: "side" === r }),
                              children: [
                                  (0, i.jsx)("span", {
                                      className: M.headerText,
                                      children: L.intl.string(L.t.YUU0RE),
                                  }),
                                  null == r &&
                                      (0, i.jsx)(I.Z, {
                                          location: "PrivateChannelsList-CreateDMButton",
                                          tooltip: L.intl.string(L.t["6Urw1t"]),
                                          tooltipPosition: "top",
                                          popoutAlign: "left",
                                          className: M.privateChannelRecipientsInviteButtonIconContainer,
                                          iconClassName: M.privateChannelRecipientsInviteButtonIcon,
                                          icon: f.BRu,
                                          subscribeToGlobalHotkey: !0,
                                      }),
                                  "side" === r &&
                                      (0, i.jsx)(I.l, {
                                          popoutAlign: "left",
                                          icon: f.kL_,
                                          text: L.intl.string(L.t["6Urw1t"]),
                                          size: "sm",
                                          subscribeToGlobalHotkey: !0,
                                      }),
                              ],
                          },
                          t,
                      )
                    : null;
            }),
            k(this, "getRowHeight", (e, t) => {
                let { privateChannelIds: n, density: r } = this.props,
                    { nonNullChildren: i } = this.state,
                    o = 44;
                if (0 === e) {
                    let e = i[t];
                    if (l.isValidElement(e)) {
                        var s;
                        o = (null == (s = e.key) ? void 0 : s.startsWith("section-divider"))
                            ? 25
                            : "dm-quick-launcher" === e.key
                              ? 67
                              : 40;
                    }
                } else o = "compact" === r ? 40 : "default" === r ? 44 : 50;
                return 1 === e && 0 === t && 0 === n.length ? 428 : o;
            });
    }
}
k(V, "defaultProps", { padding: 8 });
let F = (e) => {
    let { density: t } = (0, f.TCT)(),
        { version: n, theme: r, children: o, showDMHeader: s, listScrollerRef: a, createDMCTAButtonVariant: c } = e,
        p = l.Children.count(o),
        g = T.Z.getMutablePrivateChannels(),
        O = (0, N.k1)(g),
        y = (0, h.Wu)([R.Z, P.Z, w.Z], () => {
            let e = R.Z.getPrivateChannelIds();
            return (0, N.tU)(e, [P.Z, w.Z]);
        }, []);
    (0, x.z)(S.R);
    let { analyticsLocations: C } = (0, _.ZP)(b.Z.CONTACTS_LIST),
        v = (0, Z.Ll)(),
        { keyboardModeEnabled: j, version: I } = (0, h.cj)([m.Z, T.Z], () => ({
            keyboardModeEnabled: m.Z.keyboardModeEnabled,
            version:
                null != n ? "".concat(n, ":").concat(T.Z.getPrivateChannelsVersion()) : T.Z.getPrivateChannelsVersion(),
        })),
        A = l.useRef(null),
        D = null != a ? a : A,
        L = l.useCallback(
            (e) => {
                let t = D.current,
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
            [D],
        ),
        M = l.useCallback(
            () =>
                new Promise((e) => {
                    let t = D.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [D],
        ),
        k = l.useCallback(
            () =>
                new Promise((e) => {
                    let t = D.current;
                    if (null == t) return e();
                    t.scrollToBottom({
                        callback() {
                            requestAnimationFrame(() => setTimeout(e, 100));
                        },
                    });
                }),
            [D],
        ),
        B = (0, E.Dt)(),
        F = (0, d.ZP)({
            id: "private-channels-".concat(B),
            isEnabled: j,
            scrollToStart: M,
            scrollToEnd: k,
            defaultFocused: (p + +!!s).toString(),
            setFocus: L,
        });
    return (0, i.jsx)(_.Gt, {
        value: C,
        children: (0, i.jsx)(u.bG, {
            navigator: F,
            children: (0, i.jsx)(
                V,
                G(U({}, e), {
                    density: t,
                    channels: O,
                    privateChannelIds: y,
                    listRef: D,
                    theme: null != v ? v : r,
                    version: I,
                    createDMCTAButtonVariant: c,
                }),
            ),
        }),
    });
};
