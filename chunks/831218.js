n(47120);
var i,
    l,
    r,
    a = n(200651),
    o = n(192379),
    s = n(299608),
    c = n.n(s),
    u = n(91192),
    d = n(924826),
    h = n(442837),
    p = n(902704),
    f = n(481060),
    m = n(925549),
    g = n(607070),
    v = n(367907),
    C = n(453542),
    x = n(702321),
    I = n(82295),
    _ = n(313201),
    Z = n(540059),
    b = n(860144),
    S = n(214852),
    N = n(518311),
    E = n(355298),
    y = n(869404),
    j = n(333984),
    T = n(210887),
    P = n(592125),
    A = n(158776),
    w = n(55589),
    M = n(515753),
    L = n(981631),
    R = n(388032),
    D = n(312565);
function G(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
((r = i || (i = {}))[(r.PAGES = 0)] = 'PAGES'), (r[(r.DMS = 1)] = 'DMS');
let B = o.memo(function () {
    return (0, a.jsxs)('svg', {
        width: '184',
        height: '428',
        viewBox: '0 0 184 428',
        className: D.empty,
        children: [
            (0, a.jsx)('rect', {
                x: 40,
                y: 6,
                width: 144,
                height: 20,
                rx: 10
            }),
            (0, a.jsx)('circle', {
                cx: 16,
                cy: 16,
                r: 16
            }),
            (0, a.jsx)('rect', {
                x: 40,
                y: 50,
                width: 144,
                height: 20,
                rx: 10,
                opacity: 0.9
            }),
            (0, a.jsx)('circle', {
                cx: 16,
                cy: 60,
                r: 16,
                opacity: 0.9
            }),
            (0, a.jsx)('rect', {
                x: 40,
                y: 94,
                width: 144,
                height: 20,
                rx: 10,
                opacity: 0.8
            }),
            (0, a.jsx)('circle', {
                cx: 16,
                cy: 104,
                r: 16,
                opacity: 0.8
            }),
            (0, a.jsx)('rect', {
                x: 40,
                y: 138,
                width: 144,
                height: 20,
                rx: 10,
                opacity: 0.7
            }),
            (0, a.jsx)('circle', {
                cx: 16,
                cy: 148,
                r: 16,
                opacity: 0.7
            }),
            (0, a.jsx)('rect', {
                x: 40,
                y: 182,
                width: 144,
                height: 20,
                rx: 10,
                opacity: 0.6
            }),
            (0, a.jsx)('circle', {
                cx: 16,
                cy: 192,
                r: 16,
                opacity: 0.6
            }),
            (0, a.jsx)('rect', {
                x: 40,
                y: 226,
                width: 144,
                height: 20,
                rx: 10,
                opacity: 0.5
            }),
            (0, a.jsx)('circle', {
                cx: 16,
                cy: 236,
                r: 16,
                opacity: 0.5
            }),
            (0, a.jsx)('rect', {
                x: 40,
                y: 270,
                width: 144,
                height: 20,
                rx: 10,
                opacity: 0.4
            }),
            (0, a.jsx)('circle', {
                cx: 16,
                cy: 280,
                r: 16,
                opacity: 0.4
            }),
            (0, a.jsx)('rect', {
                x: 40,
                y: 314,
                width: 144,
                height: 20,
                rx: 10,
                opacity: 0.3
            }),
            (0, a.jsx)('circle', {
                cx: 16,
                cy: 324,
                r: 16,
                opacity: 0.3
            }),
            (0, a.jsx)('rect', {
                x: 40,
                y: 358,
                width: 144,
                height: 20,
                rx: 10,
                opacity: 0.2
            }),
            (0, a.jsx)('circle', {
                cx: 16,
                cy: 368,
                r: 16,
                opacity: 0.2
            }),
            (0, a.jsx)('rect', {
                x: 40,
                y: 402,
                width: 144,
                height: 20,
                rx: 10,
                opacity: 0.1
            }),
            (0, a.jsx)('circle', {
                cx: 16,
                cy: 412,
                r: 16,
                opacity: 0.1
            })
        ]
    });
});
class k extends (l = o.Component) {
    static getDerivedStateFromProps(e) {
        let { children: t, privateChannelIds: n } = e;
        if (null == t)
            return {
                preRenderedChildren: 0,
                nonNullChildren: [],
                totalRowCount: n.length
            };
        {
            let e = t.filter((e) => null != e),
                i = e.length;
            return {
                preRenderedChildren: i,
                nonNullChildren: e,
                totalRowCount: i + n.length
            };
        }
    }
    componentDidMount() {
        let { selectedChannelId: e, homeLink: t } = this.props;
        null != e && null != t && t.indexOf(e) >= 0 && this.scrollToChannel(e), this.reportAnalytics();
    }
    shouldComponentUpdate(e) {
        return !(0, p.Z)(this.props, e, ['children']);
    }
    componentDidUpdate(e) {
        let { selectedChannelId: t, homeLink: n } = this.props;
        null != t && t !== e.selectedChannelId ? this.scrollToChannel(t) : null == t && n !== e.homeLink && this.scrollToChannel(null), this.reportAnalytics();
    }
    scrollToChannel(e) {
        if (null == this._list) return;
        let { padding: t } = this.props,
            { preRenderedChildren: n } = this.state,
            i = null != e ? this.props.privateChannelIds.indexOf(e) : -1,
            l = 0;
        i < 0 || null == e
            ? this._list.scrollTo({ to: l })
            : ((l += 44 * (i + n) + t),
              this._list.scrollIntoViewRect({
                  start: Math.max(l - 8, 0),
                  end: l + 44 + 8
              }));
    }
    render() {
        let { privateChannelIds: e, padding: t } = this.props,
            { preRenderedChildren: n } = this.state;
        return (0, a.jsx)(u.SJ, {
            children: (i) => {
                let { ref: l, role: r, ...o } = i;
                return (0, a.jsx)(f.FocusJumpSection, {
                    children: (i) =>
                        (0, a.jsx)(f.List, {
                            fade: !0,
                            innerRole: r,
                            innerAriaLabel: R.intl.string(R.t.YUU0RE),
                            innerTag: 'ul',
                            ref: (e) => {
                                var t;
                                (this._list = e), (this.props.listRef.current = e), (l.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null);
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
                            ...o,
                            ...i
                        })
                });
            }
        });
    }
    constructor(...e) {
        super(...e),
            G(this, 'state', {
                initialized: !1,
                preRenderedChildren: 0,
                totalRowCount: 0,
                nonNullChildren: []
            }),
            G(this, '_list', null),
            G(this, 'hasReportedAnalytics', !1),
            G(this, 'reportAnalytics', () => {
                var e;
                if (this.hasReportedAnalytics) return;
                let t = null === (e = this._list) || void 0 === e ? void 0 : e.getScrollerState();
                if (null == t) return;
                let { privateChannelIds: n, channels: i } = this.props;
                if (0 === n.length) return;
                let l = o.Children.count(this.props.children);
                if (null == t) return;
                let r = Math.round((t.offsetHeight - 44 * l) / 44),
                    a = r > n.length ? n.slice(0, r + 1) : n,
                    s = a.map((e) => (null != i[e] ? i[e].getRecipientId() : null)),
                    c = n.some((e) => (0, x.Z)(e)),
                    u = {
                        num_users_visible: a.length,
                        num_users_visible_with_mobile_indicator: s.filter((e) => null != e && A.Z.isMobileOnline(e)).length
                    };
                (this.hasReportedAnalytics = !0),
                    v.ZP.trackWithMetadata(L.rMx.DM_LIST_VIEWED, {
                        ...u,
                        ...(0, C.X)(),
                        visible_user_ids: s.filter((e) => null != e),
                        changelog_dm_visible: c
                    });
            }),
            G(this, 'getSectionHeight', (e) => {
                let { showDMHeader: t, isVisualRefreshEnabled: n } = this.props;
                return 0 === e ? 0 : t ? (n ? 24 : 40) : 0;
            }),
            G(
                this,
                'handleScroll',
                c()(() => {
                    if (null != this._list) {
                        let e = this._list.getScrollerNode();
                        null != e && m.Z.updateChannelListScroll(L.ME, e.scrollTop);
                    }
                }, 100)
            ),
            G(this, 'renderDM', (e, t) => {
                let { privateChannelIds: n, channels: i, selectedChannelId: l } = this.props,
                    { totalRowCount: r, preRenderedChildren: o } = this.state,
                    s = i[n[t]];
                return null == s
                    ? null
                    : (0, a.jsx)(
                          M.ZP,
                          {
                              channel: s,
                              selected: s.id === l,
                              'aria-posinset': o + t + 1,
                              'aria-setsize': r
                          },
                          s.id
                      );
            }),
            G(this, 'renderChild', (e) => {
                let { nonNullChildren: t, totalRowCount: n } = this.state,
                    i = t[e];
                return o.isValidElement(i)
                    ? o.cloneElement(i, {
                          'aria-setsize': n,
                          'aria-posinset': e + 1
                      })
                    : i;
            }),
            G(this, 'renderRow', (e) => {
                let { section: t, row: n } = e,
                    { privateChannelIds: i } = this.props;
                return 0 === t ? this.renderChild(n) : 0 === n && 0 === i.length ? (0, a.jsx)(B, {}, 'no-private-channels') : this.renderDM(t, n);
            }),
            G(this, 'renderSection', (e) => {
                let { section: t } = e,
                    { showDMHeader: n } = this.props;
                return 0 !== t && n
                    ? (0, a.jsxs)(
                          I.Z,
                          {
                              className: D.privateChannelsHeaderContainer,
                              children: [
                                  (0, a.jsx)('span', {
                                      className: D.headerText,
                                      children: R.intl.string(R.t.YUU0RE)
                                  }),
                                  (0, a.jsx)(N.Z, {
                                      tooltip: R.intl.string(R.t['6Urw1t']),
                                      tooltipPosition: 'top',
                                      popoutAlign: 'left',
                                      iconClassName: D.privateChannelRecipientsInviteButtonIcon,
                                      icon: f.PlusSmallIcon,
                                      subscribeToGlobalHotkey: !0
                                  })
                              ]
                          },
                          t
                      )
                    : null;
            }),
            G(this, 'getRowHeight', (e, t) => {
                let { privateChannelIds: n, isVisualRefreshEnabled: i, density: l } = this.props,
                    { nonNullChildren: r } = this.state,
                    a = 44;
                if (i) {
                    if (0 === e) {
                        let e = r[t];
                        if (o.isValidElement(e)) {
                            var s;
                            a = (null === (s = e.key) || void 0 === s ? void 0 : s.startsWith('section-divider')) ? 25 : 'dm-quick-launcher' === e.key ? 67 : 'compact' === l ? 32 : 40;
                        }
                    } else a = 'compact' === l ? 44 : 50;
                } else if (0 === e) {
                    let e = r[t];
                    o.isValidElement(e) && 'dm-quick-launcher' === e.key && (a = 80);
                }
                return 1 === e && 0 === t && 0 === n.length ? 428 : a;
            });
    }
}
G(k, 'defaultProps', { padding: 8 });
t.Z = (e) => {
    let t = (0, Z.Q3)('ConnectedPrivateChannelsList'),
        { density: n } = (0, f.useThemeContext)(),
        { version: i, theme: l, children: r, showDMHeader: s } = e,
        c = o.Children.count(r),
        p = P.Z.getMutablePrivateChannels(),
        m = (0, y.k1)(p),
        v = (0, h.Wu)(
            [w.Z, E.Z, j.Z],
            () => {
                let e = w.Z.getPrivateChannelIds();
                return (0, y.tU)(e, [E.Z, j.Z]);
            },
            []
        );
    (0, S.z)(b.R);
    let C = (0, h.cj)([g.Z, T.Z, P.Z], () => ({
            theme: T.Z.darkSidebar ? L.BRd.DARK : l,
            keyboardModeEnabled: g.Z.keyboardModeEnabled,
            version: null != i ? ''.concat(i, ':').concat(P.Z.getPrivateChannelsVersion()) : P.Z.getPrivateChannelsVersion()
        })),
        x = o.useRef(null),
        I = o.useCallback((e) => {
            let t = x.current,
                n = document.querySelector(e);
            null != t &&
                null != n &&
                t.scrollIntoViewNode({
                    node: n,
                    callback: () => {
                        requestAnimationFrame(() => {
                            var t;
                            return null === (t = document.querySelector(e)) || void 0 === t ? void 0 : t.focus({ preventScroll: !0 });
                        });
                    }
                });
        }, []),
        N = o.useCallback(
            () =>
                new Promise((e) => {
                    let t = x.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            []
        ),
        A = o.useCallback(
            () =>
                new Promise((e) => {
                    let t = x.current;
                    if (null == t) return e();
                    t.scrollToBottom({
                        callback() {
                            requestAnimationFrame(() => setTimeout(e, 100));
                        }
                    });
                }),
            []
        ),
        M = (0, _.Dt)(),
        R = (0, d.ZP)({
            id: 'private-channels-'.concat(M),
            isEnabled: C.keyboardModeEnabled,
            scrollToStart: N,
            scrollToEnd: A,
            defaultFocused: (c + (s ? 1 : 0)).toString(),
            setFocus: I
        });
    return (0, a.jsx)(u.bG, {
        navigator: R,
        children: (0, a.jsx)(k, {
            density: n,
            isVisualRefreshEnabled: t,
            channels: m,
            privateChannelIds: v,
            listRef: x,
            theme: l,
            version: i,
            ...e,
            children: r,
            ...C
        })
    });
};
