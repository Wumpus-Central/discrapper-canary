n.d(t, { A: () => w });
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
    m = n(793574),
    p = n(58149),
    g = n(688810),
    _ = n(660387),
    f = n(343328),
    x = n(485947),
    C = n(915089),
    E = n(725323),
    I = n(611924),
    b = n(392135),
    N = n(95550),
    S = n(380335),
    T = n(309199),
    v = n(157550),
    y = n(97469),
    j = n(734057),
    R = n(290863),
    O = n(645959),
    L = n(701363),
    M = n(652215),
    D = n(985018),
    G = n(454198);
let U = l.memo(function () {
    return (0, i.jsxs)("svg", {
        width: "184",
        height: "428",
        viewBox: "0 0 184 428",
        className: G.Ie,
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
class P extends l.Component {
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
            o = t.some((e) => (0, f.A)(e)),
            d = {
                num_users_visible: a.length,
                num_users_visible_with_mobile_indicator: r.filter((e) => null != e && R.A.isMobileOnline(e)).length,
            };
        (this.hasReportedAnalytics = !0),
            p.Ay.trackWithMetadata(M.HAw.DM_LIST_VIEWED, {
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
            null != e && h.A.updateChannelListScroll(M.ME, e.scrollTop);
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
                  L.Ay,
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
              ? (0, i.jsx)(U, {}, "no-private-channels")
              : this.renderDM(t, n);
    };
    renderSection = (e) => {
        let { section: t } = e;
        if (0 === t) return null;
        let { isGdmCopyExperimentEnabled: n } = this.props;
        return (0, i.jsxs)(
            x.A,
            {
                className: G._e,
                children: [
                    (0, i.jsx)("span", { className: G.TK, children: D.intl.string(D.t.YUU0RF) }),
                    (0, i.jsx)(N.Ay, {
                        tooltip: D.intl.string(n ? D.t.bA875g : D.t["6Urw1t"]),
                        tooltipPosition: "top",
                        className: G.U2,
                        iconClassName: G.Br,
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
                            className: G.XG,
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
let w = (e) => {
    let { density: t } = (0, u.wRf)(),
        { version: n, theme: s, children: a, listScrollerRef: c } = e,
        h = l.Children.count(a),
        p = b.A.useConfig({ location: "PrivateChannelsList" }).enabled,
        _ = j.A.getMutablePrivateChannels(),
        f = (0, T.uX)(_),
        x = (0, d.yK)([O.default, S.A, v.A], () => {
            let e = O.default.getPrivateChannelIds();
            return (0, T.eh)(e, [S.A, v.A]);
        });
    (0, I.P)(E._);
    let { analyticsLocations: N } = (0, g.Ay)(m.A.CONTACTS_LIST),
        R = (0, y.NC)(),
        { keyboardModeEnabled: L, version: M } = (0, d.cf)([A.A, j.A], () => ({
            keyboardModeEnabled: A.A.keyboardModeEnabled,
            version: null != n ? `${n}:${j.A.getPrivateChannelsVersion()}` : j.A.getPrivateChannelsVersion(),
        })),
        D = l.useRef(null),
        G = c ?? D,
        U = l.useCallback(
            (e) => {
                let t = G.current,
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
            [G],
        ),
        w = l.useCallback(
            () =>
                new Promise((e) => {
                    let t = G.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [G],
        ),
        k = l.useCallback(
            () =>
                new Promise((e) => {
                    let t = G.current;
                    if (null == t) return e();
                    t.scrollToBottom({
                        callback() {
                            requestAnimationFrame(() => setTimeout(e, 100));
                        },
                    });
                }),
            [G],
        ),
        V = (0, C.GV)(),
        B = (0, o.Ay)({
            id: `private-channels-${V}`,
            isEnabled: L,
            scrollToStart: w,
            scrollToEnd: k,
            defaultFocused: (h + 1).toString(),
            setFocus: U,
        });
    return (0, i.jsx)(g.f5, {
        value: N,
        children: (0, i.jsx)(r.hD, {
            navigator: B,
            children: (0, i.jsx)(P, {
                ...e,
                density: t,
                channels: f,
                privateChannelIds: x,
                listRef: G,
                theme: R ?? s,
                version: M,
                isGdmCopyExperimentEnabled: p,
            }),
        }),
    });
};
