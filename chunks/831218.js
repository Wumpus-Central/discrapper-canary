n.d(t, { Z: () => k }), n(47120);
var i,
    l = n(200651),
    r = n(192379),
    o = n(299608),
    a = n.n(o),
    s = n(91192),
    c = n(924826),
    d = n(442837),
    u = n(902704),
    h = n(481060),
    p = n(925549),
    m = n(607070),
    g = n(367907),
    f = n(453542),
    _ = n(702321),
    v = n(82295),
    C = n(313201),
    x = n(540059),
    I = n(860144),
    Z = n(214852),
    b = n(518311),
    S = n(355298),
    N = n(869404),
    E = n(333984),
    j = n(210887),
    y = n(592125),
    T = n(158776),
    A = n(55589),
    P = n(515753),
    R = n(981631),
    w = n(388032),
    L = n(714355);
function M(e, t, n) {
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
let D = r.memo(function () {
    return (0, l.jsxs)('svg', {
        width: '184',
        height: '428',
        viewBox: '0 0 184 428',
        className: L.empty,
        children: [
            (0, l.jsx)('rect', {
                x: 40,
                y: 6,
                width: 144,
                height: 20,
                rx: 10
            }),
            (0, l.jsx)('circle', {
                cx: 16,
                cy: 16,
                r: 16
            }),
            (0, l.jsx)('rect', {
                x: 40,
                y: 50,
                width: 144,
                height: 20,
                rx: 10,
                opacity: 0.9
            }),
            (0, l.jsx)('circle', {
                cx: 16,
                cy: 60,
                r: 16,
                opacity: 0.9
            }),
            (0, l.jsx)('rect', {
                x: 40,
                y: 94,
                width: 144,
                height: 20,
                rx: 10,
                opacity: 0.8
            }),
            (0, l.jsx)('circle', {
                cx: 16,
                cy: 104,
                r: 16,
                opacity: 0.8
            }),
            (0, l.jsx)('rect', {
                x: 40,
                y: 138,
                width: 144,
                height: 20,
                rx: 10,
                opacity: 0.7
            }),
            (0, l.jsx)('circle', {
                cx: 16,
                cy: 148,
                r: 16,
                opacity: 0.7
            }),
            (0, l.jsx)('rect', {
                x: 40,
                y: 182,
                width: 144,
                height: 20,
                rx: 10,
                opacity: 0.6
            }),
            (0, l.jsx)('circle', {
                cx: 16,
                cy: 192,
                r: 16,
                opacity: 0.6
            }),
            (0, l.jsx)('rect', {
                x: 40,
                y: 226,
                width: 144,
                height: 20,
                rx: 10,
                opacity: 0.5
            }),
            (0, l.jsx)('circle', {
                cx: 16,
                cy: 236,
                r: 16,
                opacity: 0.5
            }),
            (0, l.jsx)('rect', {
                x: 40,
                y: 270,
                width: 144,
                height: 20,
                rx: 10,
                opacity: 0.4
            }),
            (0, l.jsx)('circle', {
                cx: 16,
                cy: 280,
                r: 16,
                opacity: 0.4
            }),
            (0, l.jsx)('rect', {
                x: 40,
                y: 314,
                width: 144,
                height: 20,
                rx: 10,
                opacity: 0.3
            }),
            (0, l.jsx)('circle', {
                cx: 16,
                cy: 324,
                r: 16,
                opacity: 0.3
            }),
            (0, l.jsx)('rect', {
                x: 40,
                y: 358,
                width: 144,
                height: 20,
                rx: 10,
                opacity: 0.2
            }),
            (0, l.jsx)('circle', {
                cx: 16,
                cy: 368,
                r: 16,
                opacity: 0.2
            }),
            (0, l.jsx)('rect', {
                x: 40,
                y: 402,
                width: 144,
                height: 20,
                rx: 10,
                opacity: 0.1
            }),
            (0, l.jsx)('circle', {
                cx: 16,
                cy: 412,
                r: 16,
                opacity: 0.1
            })
        ]
    });
});
class G extends (i = r.Component) {
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
        return !(0, u.Z)(this.props, e, ['children']);
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
        return (0, l.jsx)(s.SJ, {
            children: (i) => {
                let { ref: r, role: o, ...a } = i;
                return (0, l.jsx)(h.Wdt, {
                    children: (i) =>
                        (0, l.jsx)(h.aVo, {
                            fade: !0,
                            innerRole: o,
                            innerAriaLabel: w.intl.string(w.t.YUU0RE),
                            innerTag: 'ul',
                            ref: (e) => {
                                var t;
                                (this._list = e), (this.props.listRef.current = e), (r.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null);
                            },
                            onScroll: this.handleScroll,
                            className: L.scroller,
                            sectionHeight: this.getSectionHeight,
                            paddingTop: t,
                            paddingBottom: 8,
                            rowHeight: this.getRowHeight,
                            renderSection: this.renderSection,
                            renderRow: this.renderRow,
                            sections: [n, Math.max(e.length, 1)],
                            ...a,
                            ...i
                        })
                });
            }
        });
    }
    constructor(...e) {
        super(...e),
            M(this, 'state', {
                initialized: !1,
                preRenderedChildren: 0,
                totalRowCount: 0,
                nonNullChildren: []
            }),
            M(this, '_list', null),
            M(this, 'hasReportedAnalytics', !1),
            M(this, 'reportAnalytics', () => {
                var e;
                if (this.hasReportedAnalytics) return;
                let t = null === (e = this._list) || void 0 === e ? void 0 : e.getScrollerState();
                if (null == t) return;
                let { privateChannelIds: n, channels: i } = this.props;
                if (0 === n.length) return;
                let l = r.Children.count(this.props.children);
                if (null == t) return;
                let o = Math.round((t.offsetHeight - 44 * l) / 44),
                    a = o > n.length ? n.slice(0, o + 1) : n,
                    s = a.map((e) => (null != i[e] ? i[e].getRecipientId() : null)),
                    c = n.some((e) => (0, _.Z)(e)),
                    d = {
                        num_users_visible: a.length,
                        num_users_visible_with_mobile_indicator: s.filter((e) => null != e && T.Z.isMobileOnline(e)).length
                    };
                (this.hasReportedAnalytics = !0),
                    g.ZP.trackWithMetadata(R.rMx.DM_LIST_VIEWED, {
                        ...d,
                        ...(0, f.X)(),
                        visible_user_ids: s.filter((e) => null != e),
                        changelog_dm_visible: c
                    });
            }),
            M(this, 'getSectionHeight', (e) => {
                let { showDMHeader: t, isVisualRefreshEnabled: n } = this.props;
                return 0 === e ? 0 : t ? (n ? 24 : 40) : 0;
            }),
            M(
                this,
                'handleScroll',
                a()(() => {
                    if (null != this._list) {
                        let e = this._list.getScrollerNode();
                        null != e && p.Z.updateChannelListScroll(R.ME, e.scrollTop);
                    }
                }, 100)
            ),
            M(this, 'renderDM', (e, t) => {
                let { privateChannelIds: n, channels: i, selectedChannelId: r } = this.props,
                    { totalRowCount: o, preRenderedChildren: a } = this.state,
                    s = i[n[t]];
                return null == s
                    ? null
                    : (0, l.jsx)(
                          P.ZP,
                          {
                              channel: s,
                              selected: s.id === r,
                              'aria-posinset': a + t + 1,
                              'aria-setsize': o
                          },
                          s.id
                      );
            }),
            M(this, 'renderChild', (e) => {
                let { nonNullChildren: t, totalRowCount: n } = this.state,
                    i = t[e];
                return r.isValidElement(i)
                    ? r.cloneElement(i, {
                          'aria-setsize': n,
                          'aria-posinset': e + 1
                      })
                    : i;
            }),
            M(this, 'renderRow', (e) => {
                let { section: t, row: n } = e,
                    { privateChannelIds: i } = this.props;
                return 0 === t ? this.renderChild(n) : 0 === n && 0 === i.length ? (0, l.jsx)(D, {}, 'no-private-channels') : this.renderDM(t, n);
            }),
            M(this, 'renderSection', (e) => {
                let { section: t } = e,
                    { showDMHeader: n } = this.props;
                return 0 !== t && n
                    ? (0, l.jsxs)(
                          v.Z,
                          {
                              className: L.privateChannelsHeaderContainer,
                              children: [
                                  (0, l.jsx)('span', {
                                      className: L.headerText,
                                      children: w.intl.string(w.t.YUU0RE)
                                  }),
                                  (0, l.jsx)(b.Z, {
                                      tooltip: w.intl.string(w.t['6Urw1t']),
                                      tooltipPosition: 'top',
                                      popoutAlign: 'left',
                                      iconClassName: L.privateChannelRecipientsInviteButtonIcon,
                                      icon: h.qJs,
                                      subscribeToGlobalHotkey: !0
                                  })
                              ]
                          },
                          t
                      )
                    : null;
            }),
            M(this, 'getRowHeight', (e, t) => {
                let { privateChannelIds: n, isVisualRefreshEnabled: i, density: l } = this.props,
                    { nonNullChildren: o } = this.state,
                    a = 44;
                if (i) {
                    if (0 === e) {
                        let e = o[t];
                        if (r.isValidElement(e)) {
                            var s;
                            a = (null === (s = e.key) || void 0 === s ? void 0 : s.startsWith('section-divider')) ? 25 : 'dm-quick-launcher' === e.key ? 67 : 40;
                        }
                    } else a = 'compact' === l ? 44 : 50;
                } else if (0 === e) {
                    let e = o[t];
                    r.isValidElement(e) && 'dm-quick-launcher' === e.key && (a = 80);
                }
                return 1 === e && 0 === t && 0 === n.length ? 428 : a;
            });
    }
}
M(G, 'defaultProps', { padding: 8 });
let k = (e) => {
    let t = (0, x.Q3)('ConnectedPrivateChannelsList'),
        { density: n } = (0, h.TCT)(),
        { version: i, theme: o, children: a, showDMHeader: u } = e,
        p = r.Children.count(a),
        g = y.Z.getMutablePrivateChannels(),
        f = (0, N.k1)(g),
        _ = (0, d.Wu)(
            [A.Z, S.Z, E.Z],
            () => {
                let e = A.Z.getPrivateChannelIds();
                return (0, N.tU)(e, [S.Z, E.Z]);
            },
            []
        );
    (0, Z.z)(I.R);
    let v = (0, d.cj)([m.Z, j.Z, y.Z], () => ({
            theme: j.Z.darkSidebar ? R.BRd.DARK : o,
            keyboardModeEnabled: m.Z.keyboardModeEnabled,
            version: null != i ? ''.concat(i, ':').concat(y.Z.getPrivateChannelsVersion()) : y.Z.getPrivateChannelsVersion()
        })),
        b = r.useRef(null),
        T = r.useCallback((e) => {
            let t = b.current,
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
        P = r.useCallback(
            () =>
                new Promise((e) => {
                    let t = b.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            []
        ),
        w = r.useCallback(
            () =>
                new Promise((e) => {
                    let t = b.current;
                    if (null == t) return e();
                    t.scrollToBottom({
                        callback() {
                            requestAnimationFrame(() => setTimeout(e, 100));
                        }
                    });
                }),
            []
        ),
        L = (0, C.Dt)(),
        M = (0, c.ZP)({
            id: 'private-channels-'.concat(L),
            isEnabled: v.keyboardModeEnabled,
            scrollToStart: P,
            scrollToEnd: w,
            defaultFocused: (p + (u ? 1 : 0)).toString(),
            setFocus: T
        });
    return (0, l.jsx)(s.bG, {
        navigator: M,
        children: (0, l.jsx)(G, {
            density: n,
            isVisualRefreshEnabled: t,
            channels: f,
            privateChannelIds: _,
            listRef: b,
            theme: o,
            version: i,
            ...e,
            children: a,
            ...v
        })
    });
};
