n.d(t, { A: () => P });
var i = n(627968),
    l = n(64700),
    s = n(985623),
    a = n.n(s),
    r = n(837381),
    o = n(884362),
    d = n(311907),
    c = n(52133),
    u = n(397927),
    h = n(951001),
    A = n(775602),
    g = n(793574),
    m = n(58149),
    p = n(688810),
    _ = n(660387),
    x = n(343328),
    f = n(485947),
    E = n(915089),
    C = n(725323),
    I = n(611924),
    S = n(95550),
    b = n(380335),
    N = n(309199),
    T = n(157550),
    j = n(97469),
    v = n(734057),
    y = n(290863),
    R = n(645959),
    O = n(701363),
    L = n(652215),
    D = n(985018),
    M = n(454198);
let G = l.memo(function () {
    return (0, i.jsxs)("svg", {
        width: "184",
        height: "428",
        viewBox: "0 0 184 428",
        className: M.Ie,
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
class U extends l.Component {
    static getDerivedStateFromProps(e) {
        let { children: t, privateChannelIds: n } = e;
        if (null == t) return { preRenderedChildren: 0, nonNullChildren: [], totalRowCount: n.length };
        {
            let e = t.filter((e) => null != e && !1 !== e),
                i = e.length;
            return { preRenderedChildren: i, nonNullChildren: e, totalRowCount: i + n.length };
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
            i = null != e ? this.props.privateChannelIds.indexOf(e) : -1,
            l = 0;
        i < 0 || null == e
            ? this._list.scrollTo({ to: l })
            : ((l += 44 * (i + n) + t), this._list.scrollIntoViewRect({ start: Math.max(l - 8, 0), end: l + 44 + 8 }));
    }
    reportAnalytics = () => {
        if (this.hasReportedAnalytics) return;
        let e = this._list?.getScrollerState();
        if (null == e) return;
        let { privateChannelIds: t, channels: n } = this.props;
        if (0 === t.length) return;
        let i = l.Children.count(this.props.children);
        if (null == e) return;
        let s = Math.round((e.offsetHeight - 44 * i) / 44),
            a = s > t.length ? t.slice(0, s + 1) : t,
            r = a.map((e) => (null != n[e] ? n[e].getRecipientId() : null)),
            o = t.some((e) => (0, x.A)(e)),
            d = {
                num_users_visible: a.length,
                num_users_visible_with_mobile_indicator: r.filter((e) => null != e && y.A.isMobileOnline(e)).length,
            };
        (this.hasReportedAnalytics = !0),
            m.Ay.trackWithMetadata(L.HAw.DM_LIST_VIEWED, {
                ...d,
                ...(0, _.F)(),
                visible_user_ids: r.filter((e) => null != e),
                changelog_dm_visible: o,
            });
    };
    getSectionHeight = (e) => 24 * (0 !== e);
    handleScroll = a()(() => {
        if (null != this._list) {
            let e = this._list.getScrollerNode();
            null != e && h.A.updateChannelListScroll(L.ME, e.scrollTop);
        }
        void 0 !== this.props.onHandleScroll && this.props.onHandleScroll();
    }, 100);
    renderDM = (e, t) => {
        let { privateChannelIds: n, channels: l, selectedChannelId: s } = this.props,
            { totalRowCount: a, preRenderedChildren: r } = this.state,
            o = l[n[t]];
        return null == o
            ? null
            : (0, i.jsx)(
                  O.Ay,
                  { channel: o, selected: o.id === s, "aria-posinset": r + t + 1, "aria-setsize": a },
                  o.id,
              );
    };
    renderChild = (e) => {
        let { nonNullChildren: t, totalRowCount: n } = this.state,
            i = t[e];
        return l.isValidElement(i) ? l.cloneElement(i, { "aria-setsize": n, "aria-posinset": e + 1 }) : i;
    };
    renderRow = (e) => {
        let { section: t, row: n } = e,
            { privateChannelIds: l } = this.props;
        return 0 === t
            ? this.renderChild(n)
            : 0 === n && 0 === l.length
              ? (0, i.jsx)(G, {}, "no-private-channels")
              : this.renderDM(t, n);
    };
    renderSection = (e) => {
        let { section: t } = e;
        return 0 === t
            ? null
            : (0, i.jsxs)(
                  f.A,
                  {
                      className: M._e,
                      children: [
                          (0, i.jsx)("span", { className: M.TK, children: D.intl.string(D.t.YUU0RF) }),
                          (0, i.jsx)(S.Ay, {
                              tooltip: D.intl.string(D.t["6Urw1t"]),
                              tooltipPosition: "top",
                              className: M.U2,
                              iconClassName: M.Br,
                              icon: u.TIR,
                              subscribeToGlobalHotkey: !0,
                          }),
                      ],
                  },
                  t,
              );
    };
    getRowHeight = (e, t) => {
        let { privateChannelIds: n, density: i } = this.props,
            { nonNullChildren: s } = this.state,
            a = 44;
        if (0 === e) {
            let e = s[t];
            l.isValidElement(e) &&
                (a = e.key?.startsWith("section-divider") ? 25 : "dm-quick-launcher" === e.key ? 67 : 40);
        } else a = "compact" === i ? 40 : "default" === i ? 44 : 50;
        return 1 === e && 0 === t && 0 === n.length ? 428 : a;
    };
    render() {
        let { privateChannelIds: e, padding: t } = this.props,
            { preRenderedChildren: n } = this.state;
        return (0, i.jsx)(r.PR, {
            children: (l) => {
                let { ref: s, role: a, ...r } = l;
                return (0, i.jsx)(u.skg, {
                    children: (l) =>
                        (0, i.jsx)(u.B8B, {
                            fade: !0,
                            innerRole: a,
                            innerAriaLabel: D.intl.string(D.t.YUU0RF),
                            innerTag: "ul",
                            ref: (e) => {
                                (this._list = e),
                                    (this.props.listRef.current = e),
                                    (s.current = e?.getScrollerNode() ?? null);
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
                            ...r,
                            ...l,
                        }),
                });
            },
        });
    }
}
let P = (e) => {
    let { density: t } = (0, u.wRf)(),
        { version: n, theme: s, children: a, listScrollerRef: c } = e,
        h = l.Children.count(a),
        m = v.A.getMutablePrivateChannels(),
        _ = (0, N.uX)(m),
        x = (0, d.yK)([R.A, b.A, T.A], () => {
            let e = R.A.getPrivateChannelIds();
            return (0, N.eh)(e, [b.A, T.A]);
        });
    (0, I.P)(C._);
    let { analyticsLocations: f } = (0, p.Ay)(g.A.CONTACTS_LIST),
        S = (0, j.NC)(),
        { keyboardModeEnabled: y, version: O } = (0, d.cf)([A.A, v.A], () => ({
            keyboardModeEnabled: A.A.keyboardModeEnabled,
            version: null != n ? `${n}:${v.A.getPrivateChannelsVersion()}` : v.A.getPrivateChannelsVersion(),
        })),
        L = l.useRef(null),
        D = c ?? L,
        M = l.useCallback(
            (e) => {
                let t = D.current,
                    n = document.querySelector(e);
                null != t &&
                    null != n &&
                    t.scrollIntoViewNode({
                        node: n,
                        callback: () => {
                            requestAnimationFrame(() => document.querySelector(e)?.focus({ preventScroll: !0 }));
                        },
                    });
            },
            [D],
        ),
        G = l.useCallback(
            () =>
                new Promise((e) => {
                    let t = D.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [D],
        ),
        P = l.useCallback(
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
        k = (0, E.GV)(),
        w = (0, o.Ay)({
            id: `private-channels-${k}`,
            isEnabled: y,
            scrollToStart: G,
            scrollToEnd: P,
            defaultFocused: (h + 1).toString(),
            setFocus: M,
        });
    return (0, i.jsx)(p.f5, {
        value: f,
        children: (0, i.jsx)(r.hD, {
            navigator: w,
            children: (0, i.jsx)(U, {
                ...e,
                density: t,
                channels: _,
                privateChannelIds: x,
                listRef: D,
                theme: S ?? s,
                version: O,
            }),
        }),
    });
};
