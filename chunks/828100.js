l.d(t, { A: () => P });
var i = l(627968),
    r = l(64700),
    s = l(985623),
    n = l.n(s),
    a = l(837381),
    h = l(884362),
    o = l(311907),
    c = l(52133),
    d = l(499373),
    u = l(312138),
    p = l(475825),
    x = l(38021),
    g = l(951001),
    v = l(775602),
    m = l(793574),
    y = l(58149),
    w = l(688810),
    A = l(660387),
    f = l(343328),
    C = l(485947),
    j = l(915089),
    _ = l(725323),
    R = l(611924),
    T = l(95550),
    Z = l(380335),
    M = l(309199),
    N = l(157550),
    b = l(97469),
    E = l(734057),
    I = l(290863),
    S = l(645959),
    k = l(701363),
    H = l(652215),
    V = l(985018),
    D = l(958847);
let F = r.memo(function () {
    return (0, i.jsxs)("svg", {
        width: "184",
        height: "428",
        viewBox: "0 0 184 428",
        className: D.Ie,
        children: [
            (0, i.jsx)("rect", { x: 40, y: 6, width: 144, height: 20, rx: 10 }),
            (0, i.jsx)("circle", { cx: 16, cy: 16, r: 16 }),
            (0, i.jsx)("rect", { x: 40, y: 50, width: 144, height: 20, rx: 10, opacity: 0.9 }),
            (0, i.jsx)("circle", { cx: 16, cy: 60, r: 16, opacity: 0.9 }),
            (0, i.jsx)("rect", { x: 40, y: 94, width: 144, height: 20, rx: 10, opacity: 0.8 }),
            (0, i.jsx)("circle", { cx: 16, cy: 104, r: 16, opacity: 0.8 }),
            (0, i.jsx)("rect", { x: 40, y: 138, width: 144, height: 20, rx: 10, opacity: 0.7 }),
            (0, i.jsx)("circle", { cx: 16, cy: 148, r: 16, opacity: 0.7 }),
            (0, i.jsx)("rect", { x: 40, y: 182, width: 144, height: 20, rx: 10, opacity: 0.6 }),
            (0, i.jsx)("circle", { cx: 16, cy: 192, r: 16, opacity: 0.6 }),
            (0, i.jsx)("rect", { x: 40, y: 226, width: 144, height: 20, rx: 10, opacity: 0.5 }),
            (0, i.jsx)("circle", { cx: 16, cy: 236, r: 16, opacity: 0.5 }),
            (0, i.jsx)("rect", { x: 40, y: 270, width: 144, height: 20, rx: 10, opacity: 0.4 }),
            (0, i.jsx)("circle", { cx: 16, cy: 280, r: 16, opacity: 0.4 }),
            (0, i.jsx)("rect", { x: 40, y: 314, width: 144, height: 20, rx: 10, opacity: 0.3 }),
            (0, i.jsx)("circle", { cx: 16, cy: 324, r: 16, opacity: 0.3 }),
            (0, i.jsx)("rect", { x: 40, y: 358, width: 144, height: 20, rx: 10, opacity: 0.2 }),
            (0, i.jsx)("circle", { cx: 16, cy: 368, r: 16, opacity: 0.2 }),
            (0, i.jsx)("rect", { x: 40, y: 402, width: 144, height: 20, rx: 10, opacity: 0.1 }),
            (0, i.jsx)("circle", { cx: 16, cy: 412, r: 16, opacity: 0.1 }),
        ],
    });
});
class L extends r.Component {
    static getDerivedStateFromProps(e) {
        let { children: t, privateChannelIds: l } = e;
        if (null == t) return { preRenderedChildren: 0, nonNullChildren: [], totalRowCount: l.length };
        {
            let e = t.filter((e) => null != e && !1 !== e),
                i = e.length;
            return { preRenderedChildren: i, nonNullChildren: e, totalRowCount: i + l.length };
        }
    }
    static defaultProps = { padding: 8 };
    state = { initialized: !1, preRenderedChildren: 0, totalRowCount: 0, nonNullChildren: [] };
    _list = null;
    hasReportedAnalytics = !1;
    componentDidMount() {
        let { selectedChannelId: e, homeLink: t } = this.props;
        null != e && null != t && t.indexOf(e) >= 0 && this.scrollToChannel(e), this.reportAnalytics();
    }
    shouldComponentUpdate(e) {
        return !(0, c.A)(this.props, e, ["children"]);
    }
    componentDidUpdate(e) {
        let { selectedChannelId: t, homeLink: l } = this.props;
        null != t && t !== e.selectedChannelId
            ? this.scrollToChannel(t)
            : null == t && l !== e.homeLink && this.scrollToChannel(null),
            this.reportAnalytics();
    }
    scrollToChannel(e) {
        if (null == this._list) return;
        let { padding: t } = this.props,
            { preRenderedChildren: l } = this.state,
            i = null != e ? this.props.privateChannelIds.indexOf(e) : -1,
            r = 0;
        i < 0 || null == e
            ? this._list.scrollTo({ to: r })
            : ((r += 44 * (i + l) + t), this._list.scrollIntoViewRect({ start: Math.max(r - 8, 0), end: r + 44 + 8 }));
    }
    reportAnalytics = () => {
        if (this.hasReportedAnalytics) return;
        let e = this._list?.getScrollerState();
        if (null == e) return;
        let { privateChannelIds: t, channels: l } = this.props;
        if (0 === t.length) return;
        let i = r.Children.count(this.props.children);
        if (null == e) return;
        let s = Math.round((e.offsetHeight - 44 * i) / 44),
            n = s > t.length ? t.slice(0, s + 1) : t,
            a = n.map((e) => (null != l[e] ? l[e].getRecipientId() : null)),
            h = t.some((e) => (0, f.A)(e)),
            o = {
                num_users_visible: n.length,
                num_users_visible_with_mobile_indicator: a.filter((e) => null != e && I.A.isMobileOnline(e)).length,
            };
        (this.hasReportedAnalytics = !0),
            y.Ay.trackWithMetadata(H.HAw.DM_LIST_VIEWED, {
                ...o,
                ...(0, A.F)(),
                visible_user_ids: a.filter((e) => null != e),
                changelog_dm_visible: h,
            });
    };
    getSectionHeight = (e) => 24 * (0 !== e);
    handleScroll = n()(() => {
        if (null != this._list) {
            let e = this._list.getScrollerNode();
            null != e && g.A.updateChannelListScroll(H.ME, e.scrollTop);
        }
        void 0 !== this.props.onHandleScroll && this.props.onHandleScroll();
    }, 100);
    renderDM = (e, t) => {
        let { privateChannelIds: l, channels: r, selectedChannelId: s } = this.props,
            { totalRowCount: n, preRenderedChildren: a } = this.state,
            h = r[l[t]];
        return null == h
            ? null
            : (0, i.jsx)(
                  k.Ay,
                  { channel: h, selected: h.id === s, "aria-posinset": a + t + 1, "aria-setsize": n },
                  h.id,
              );
    };
    renderChild = (e) => {
        let { nonNullChildren: t, totalRowCount: l } = this.state,
            i = t[e];
        return r.isValidElement(i) ? r.cloneElement(i, { "aria-setsize": l, "aria-posinset": e + 1 }) : i;
    };
    renderRow = (e) => {
        let { section: t, row: l } = e,
            { privateChannelIds: r } = this.props;
        return 0 === t
            ? this.renderChild(l)
            : 0 === l && 0 === r.length
              ? (0, i.jsx)(F, {}, "no-private-channels")
              : this.renderDM(t, l);
    };
    renderSection = (e) => {
        let { section: t } = e;
        return 0 === t
            ? null
            : (0, i.jsxs)(
                  C.A,
                  {
                      className: D._e,
                      children: [
                          (0, i.jsx)("span", { className: D.TK, children: V.intl.string(V.t.YUU0RF) }),
                          (0, i.jsx)(T.Ay, {
                              tooltip: V.intl.string(V.t.bA875g),
                              tooltipPosition: "top",
                              className: D.U2,
                              iconClassName: D.Br,
                              icon: d.T,
                              subscribeToGlobalHotkey: !0,
                          }),
                      ],
                  },
                  t,
              );
    };
    getRowHeight = (e, t) => {
        let { privateChannelIds: l, density: i } = this.props,
            { nonNullChildren: s } = this.state,
            n = 44;
        if (0 === e) {
            let e = s[t];
            r.isValidElement(e) &&
                (n = e.key?.startsWith("section-divider") ? 25 : "dm-quick-launcher" === e.key ? 67 : 40);
        } else n = "compact" === i ? 40 : "default" === i ? 44 : 50;
        return 1 === e && 0 === t && 0 === l.length ? 428 : n;
    };
    render() {
        let { privateChannelIds: e, padding: t } = this.props,
            { preRenderedChildren: l } = this.state;
        return (0, i.jsx)(a.PR, {
            children: (r) => {
                let { ref: s, role: n, ...a } = r;
                return (0, i.jsx)(u.sk, {
                    children: (r) =>
                        (0, i.jsx)(p.OZ, {
                            fade: !0,
                            innerRole: n,
                            innerAriaLabel: V.intl.string(V.t.YUU0RF),
                            innerTag: "ul",
                            ref: (e) => {
                                (this._list = e),
                                    (this.props.listRef.current = e),
                                    (s.current = e?.getScrollerNode() ?? null);
                            },
                            onScroll: this.handleScroll,
                            className: D.XG,
                            sectionHeight: this.getSectionHeight,
                            paddingTop: t,
                            paddingBottom: 8,
                            rowHeight: this.getRowHeight,
                            renderSection: this.renderSection,
                            renderRow: this.renderRow,
                            sections: [l, Math.max(e.length, 1)],
                            ...a,
                            ...r,
                        }),
                });
            },
        });
    }
}
let P = (e) => {
    let { density: t } = (0, x.wR)(),
        { version: l, theme: s, children: n, listScrollerRef: c } = e,
        d = r.Children.count(n),
        u = E.A.getMutablePrivateChannels(),
        p = (0, M.uX)(u),
        g = (0, o.yK)([S.default, Z.A, N.A], () => {
            let e = S.default.getPrivateChannelIds();
            return (0, M.eh)(e, [Z.A, N.A]);
        });
    (0, R.P)(_._);
    let { analyticsLocations: y } = (0, w.Ay)(m.A.CONTACTS_LIST),
        A = (0, b.NC)(),
        { keyboardModeEnabled: f, version: C } = (0, o.cf)([v.A, E.A], () => ({
            keyboardModeEnabled: v.A.keyboardModeEnabled,
            version: null != l ? `${l}:${E.A.getPrivateChannelsVersion()}` : E.A.getPrivateChannelsVersion(),
        })),
        T = r.useRef(null),
        I = c ?? T,
        k = r.useCallback(
            (e) => {
                let t = I.current,
                    l = document.querySelector(e);
                null != t &&
                    null != l &&
                    t.scrollIntoViewNode({
                        node: l,
                        callback: () => {
                            requestAnimationFrame(() => document.querySelector(e)?.focus({ preventScroll: !0 }));
                        },
                    });
            },
            [I],
        ),
        H = r.useCallback(
            () =>
                new Promise((e) => {
                    let t = I.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [I],
        ),
        V = r.useCallback(
            () =>
                new Promise((e) => {
                    let t = I.current;
                    if (null == t) return e();
                    t.scrollToBottom({
                        callback() {
                            requestAnimationFrame(() => setTimeout(e, 100));
                        },
                    });
                }),
            [I],
        ),
        D = (0, j.GV)(),
        F = (0, h.Ay)({
            id: `private-channels-${D}`,
            isEnabled: f,
            scrollToStart: H,
            scrollToEnd: V,
            defaultFocused: (d + 1).toString(),
            setFocus: k,
        });
    return (0, i.jsx)(w.f5, {
        value: y,
        children: (0, i.jsx)(a.hD, {
            navigator: F,
            children: (0, i.jsx)(L, {
                ...e,
                density: t,
                channels: p,
                privateChannelIds: g,
                listRef: I,
                theme: A ?? s,
                version: C,
            }),
        }),
    });
};
