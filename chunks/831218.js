n.d(t, { Z: () => V }), n(388685), n(415506);
var r,
    i = n(54381),
    l = n(473749),
    o = n(120356),
    a = n.n(o),
    s = n(299608),
    c = n.n(s),
    u = n(91192),
    d = n(924826),
    p = n(442837),
    f = n(902704),
    h = n(481060),
    g = n(925549),
    m = n(607070),
    b = n(100527),
    _ = n(367907),
    y = n(906732),
    O = n(453542),
    v = n(702321),
    j = n(82295),
    x = n(313201),
    C = n(860144),
    E = n(214852),
    S = n(518311),
    I = n(355298),
    P = n(869404),
    N = n(333984),
    Z = n(984802),
    w = n(592125),
    T = n(158776),
    A = n(55589),
    R = n(515753),
    D = n(981631),
    L = n(388032),
    M = n(777126);
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
                k(e, t, n[t]);
            });
    }
    return e;
}
function U(e, t) {
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
class F extends (r = l.Component) {
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
        return !(0, f.Z)(this.props, e, ["children"]);
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
                    a = (function (e, t) {
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
                return (0, i.jsx)(h.Wdt, {
                    children: (r) =>
                        (0, i.jsx)(
                            h.aVo,
                            G(
                                {
                                    fade: !0,
                                    innerRole: o,
                                    innerAriaLabel: L.intl.string(L.t.YUU0RF),
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
                                a,
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
                    a = o > n.length ? n.slice(0, o + 1) : n,
                    s = a.map((e) => (null != r[e] ? r[e].getRecipientId() : null)),
                    c = n.some((e) => (0, v.Z)(e)),
                    u = {
                        num_users_visible: a.length,
                        num_users_visible_with_mobile_indicator: s.filter((e) => null != e && T.Z.isMobileOnline(e))
                            .length,
                    };
                (this.hasReportedAnalytics = !0),
                    _.ZP.trackWithMetadata(
                        D.rMx.DM_LIST_VIEWED,
                        U(G({}, u, (0, O.X)()), {
                            visible_user_ids: s.filter((e) => null != e),
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
                    { totalRowCount: o, preRenderedChildren: a } = this.state,
                    s = r[n[t]];
                return null == s
                    ? null
                    : (0, i.jsx)(
                          R.ZP,
                          {
                              channel: s,
                              selected: s.id === l,
                              "aria-posinset": a + t + 1,
                              "aria-setsize": o,
                          },
                          s.id,
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
                    { privateChannelIds: r, hideAllDMs: l } = this.props;
                return 0 === t
                    ? this.renderChild(n)
                    : 0 !== n || 0 !== r.length || l
                      ? this.renderDM(t, n)
                      : (0, i.jsx)(B, {}, "no-private-channels");
            }),
            k(this, "renderSection", (e) => {
                let { section: t } = e,
                    { showDMHeader: n, createDMCTAButtonVariant: r } = this.props;
                return 0 !== t && n
                    ? (0, i.jsxs)(
                          j.Z,
                          {
                              className: a()(M.privateChannelsHeaderContainer, { [M.tall]: "side" === r }),
                              children: [
                                  (0, i.jsx)("span", {
                                      className: M.headerText,
                                      children: L.intl.string(L.t.YUU0RF),
                                  }),
                                  null == r &&
                                      (0, i.jsx)(S.Z, {
                                          location: "PrivateChannelsList-CreateDMButton",
                                          tooltip: L.intl.string(L.t["6Urw1t"]),
                                          tooltipPosition: "top",
                                          popoutAlign: "left",
                                          className: M.privateChannelRecipientsInviteButtonIconContainer,
                                          iconClassName: M.privateChannelRecipientsInviteButtonIcon,
                                          icon: h.BRu,
                                          subscribeToGlobalHotkey: !0,
                                      }),
                                  "side" === r &&
                                      (0, i.jsx)(S.l, {
                                          popoutAlign: "left",
                                          icon: h.kL_,
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
                        var a;
                        o = (null == (a = e.key) ? void 0 : a.startsWith("section-divider"))
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
k(F, "defaultProps", { padding: 8 });
let V = (e) => {
    let { density: t } = (0, h.TCT)(),
        {
            version: n,
            theme: r,
            children: o,
            showDMHeader: a,
            listScrollerRef: s,
            createDMCTAButtonVariant: c,
            hideAllDMs: f,
        } = e,
        g = l.Children.count(o),
        _ = w.Z.getMutablePrivateChannels(),
        O = f ? {} : (0, P.k1)(_),
        v = (0, p.Wu)([A.Z, I.Z, N.Z], () => {
            let e = A.Z.getPrivateChannelIds(),
                t = (0, P.tU)(e, [I.Z, N.Z]);
            return f ? [] : t;
        }, [f]);
    (0, E.z)(C.R);
    let { analyticsLocations: j } = (0, y.ZP)(b.Z.CONTACTS_LIST),
        S = (0, Z.Ll)(),
        { keyboardModeEnabled: T, version: R } = (0, p.cj)([m.Z, w.Z], () => ({
            keyboardModeEnabled: m.Z.keyboardModeEnabled,
            version:
                null != n ? "".concat(n, ":").concat(w.Z.getPrivateChannelsVersion()) : w.Z.getPrivateChannelsVersion(),
        })),
        D = l.useRef(null),
        L = null != s ? s : D,
        M = l.useCallback(
            (e) => {
                let t = L.current,
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
            [L],
        ),
        k = l.useCallback(
            () =>
                new Promise((e) => {
                    let t = L.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [L],
        ),
        B = l.useCallback(
            () =>
                new Promise((e) => {
                    let t = L.current;
                    if (null == t) return e();
                    t.scrollToBottom({
                        callback() {
                            requestAnimationFrame(() => setTimeout(e, 100));
                        },
                    });
                }),
            [L],
        ),
        V = (0, x.Dt)(),
        H = (0, d.ZP)({
            id: "private-channels-".concat(V),
            isEnabled: T,
            scrollToStart: k,
            scrollToEnd: B,
            defaultFocused: (g + +!!a).toString(),
            setFocus: M,
        });
    return (0, i.jsx)(y.Gt, {
        value: j,
        children: (0, i.jsx)(u.bG, {
            navigator: H,
            children: (0, i.jsx)(
                F,
                U(G({}, e), {
                    density: t,
                    channels: O,
                    privateChannelIds: v,
                    listRef: L,
                    theme: null != S ? S : r,
                    version: R,
                    createDMCTAButtonVariant: c,
                }),
            ),
        }),
    });
};
