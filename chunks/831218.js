n.d(t, { Z: () => U }), n(47120);
var r,
    i = n(200651),
    l = n(192379),
    o = n(299608),
    a = n.n(o),
    s = n(91192),
    c = n(924826),
    u = n(442837),
    d = n(902704),
    p = n(481060),
    h = n(925549),
    f = n(607070),
    g = n(367907),
    m = n(453542),
    b = n(702321),
    y = n(46148),
    _ = n(82295),
    v = n(313201),
    O = n(540059),
    j = n(860144),
    x = n(214852),
    C = n(518311),
    S = n(355298),
    P = n(869404),
    I = n(333984),
    N = n(210887),
    Z = n(592125),
    w = n(158776),
    E = n(55589),
    T = n(515753),
    A = n(981631),
    D = n(388032),
    R = n(555614);
function L(e, t, n) {
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
function k(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                L(e, t, n[t]);
            });
    }
    return e;
}
function M(e, t) {
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
let G = l.memo(function () {
    return (0, i.jsxs)('svg', {
        width: '184',
        height: '428',
        viewBox: '0 0 184 428',
        className: R.empty,
        children: [
            (0, i.jsx)('rect', {
                x: 40,
                y: 6,
                width: 144,
                height: 20,
                rx: 10
            }),
            (0, i.jsx)('circle', {
                cx: 16,
                cy: 16,
                r: 16
            }),
            (0, i.jsx)('rect', {
                x: 40,
                y: 50,
                width: 144,
                height: 20,
                rx: 10,
                opacity: 0.9
            }),
            (0, i.jsx)('circle', {
                cx: 16,
                cy: 60,
                r: 16,
                opacity: 0.9
            }),
            (0, i.jsx)('rect', {
                x: 40,
                y: 94,
                width: 144,
                height: 20,
                rx: 10,
                opacity: 0.8
            }),
            (0, i.jsx)('circle', {
                cx: 16,
                cy: 104,
                r: 16,
                opacity: 0.8
            }),
            (0, i.jsx)('rect', {
                x: 40,
                y: 138,
                width: 144,
                height: 20,
                rx: 10,
                opacity: 0.7
            }),
            (0, i.jsx)('circle', {
                cx: 16,
                cy: 148,
                r: 16,
                opacity: 0.7
            }),
            (0, i.jsx)('rect', {
                x: 40,
                y: 182,
                width: 144,
                height: 20,
                rx: 10,
                opacity: 0.6
            }),
            (0, i.jsx)('circle', {
                cx: 16,
                cy: 192,
                r: 16,
                opacity: 0.6
            }),
            (0, i.jsx)('rect', {
                x: 40,
                y: 226,
                width: 144,
                height: 20,
                rx: 10,
                opacity: 0.5
            }),
            (0, i.jsx)('circle', {
                cx: 16,
                cy: 236,
                r: 16,
                opacity: 0.5
            }),
            (0, i.jsx)('rect', {
                x: 40,
                y: 270,
                width: 144,
                height: 20,
                rx: 10,
                opacity: 0.4
            }),
            (0, i.jsx)('circle', {
                cx: 16,
                cy: 280,
                r: 16,
                opacity: 0.4
            }),
            (0, i.jsx)('rect', {
                x: 40,
                y: 314,
                width: 144,
                height: 20,
                rx: 10,
                opacity: 0.3
            }),
            (0, i.jsx)('circle', {
                cx: 16,
                cy: 324,
                r: 16,
                opacity: 0.3
            }),
            (0, i.jsx)('rect', {
                x: 40,
                y: 358,
                width: 144,
                height: 20,
                rx: 10,
                opacity: 0.2
            }),
            (0, i.jsx)('circle', {
                cx: 16,
                cy: 368,
                r: 16,
                opacity: 0.2
            }),
            (0, i.jsx)('rect', {
                x: 40,
                y: 402,
                width: 144,
                height: 20,
                rx: 10,
                opacity: 0.1
            }),
            (0, i.jsx)('circle', {
                cx: 16,
                cy: 412,
                r: 16,
                opacity: 0.1
            })
        ]
    });
});
class B extends (r = l.Component) {
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
                r = e.length;
            return {
                preRenderedChildren: r,
                nonNullChildren: e,
                totalRowCount: r + n.length
            };
        }
    }
    componentDidMount() {
        let { selectedChannelId: e, homeLink: t } = this.props;
        null != e && null != t && t.indexOf(e) >= 0 && this.scrollToChannel(e), this.reportAnalytics();
    }
    shouldComponentUpdate(e) {
        return !(0, d.Z)(this.props, e, ['children']);
    }
    componentDidUpdate(e) {
        let { selectedChannelId: t, homeLink: n } = this.props;
        null != t && t !== e.selectedChannelId ? this.scrollToChannel(t) : null == t && n !== e.homeLink && this.scrollToChannel(null), this.reportAnalytics();
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
                  end: i + 44 + 8
              }));
    }
    render() {
        let { privateChannelIds: e, padding: t } = this.props,
            { preRenderedChildren: n } = this.state;
        return (0, i.jsx)(s.SJ, {
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
                            for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                        }
                        return i;
                    })(r, ['ref', 'role']);
                return (0, i.jsx)(p.Wdt, {
                    children: (r) =>
                        (0, i.jsx)(
                            p.aVo,
                            k(
                                {
                                    fade: !0,
                                    innerRole: o,
                                    innerAriaLabel: D.NW.string(D.t.YUU0RE),
                                    innerTag: 'ul',
                                    ref: (e) => {
                                        var t;
                                        (this._list = e), (this.props.listRef.current = e), (l.current = null != (t = null == e ? void 0 : e.getScrollerNode()) ? t : null);
                                    },
                                    onScroll: this.handleScroll,
                                    className: R.scroller,
                                    sectionHeight: this.getSectionHeight,
                                    paddingTop: t,
                                    paddingBottom: 8,
                                    rowHeight: this.getRowHeight,
                                    renderSection: this.renderSection,
                                    renderRow: this.renderRow,
                                    sections: [n, Math.max(e.length, 1)]
                                },
                                a,
                                r
                            )
                        )
                });
            }
        });
    }
    constructor(...e) {
        super(...e),
            L(this, 'state', {
                initialized: !1,
                preRenderedChildren: 0,
                totalRowCount: 0,
                nonNullChildren: []
            }),
            L(this, '_list', null),
            L(this, 'hasReportedAnalytics', !1),
            L(this, 'reportAnalytics', () => {
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
                    c = n.some((e) => (0, b.Z)(e)),
                    u = {
                        num_users_visible: a.length,
                        num_users_visible_with_mobile_indicator: s.filter((e) => null != e && w.Z.isMobileOnline(e)).length
                    };
                (this.hasReportedAnalytics = !0),
                    g.ZP.trackWithMetadata(
                        A.rMx.DM_LIST_VIEWED,
                        M(k({}, u, (0, m.X)()), {
                            visible_user_ids: s.filter((e) => null != e),
                            changelog_dm_visible: c
                        })
                    );
            }),
            L(this, 'getSectionHeight', (e) => {
                let { showDMHeader: t, isVisualRefreshEnabled: n } = this.props;
                return 0 === e ? 0 : t ? (n ? 24 : 40) : 0;
            }),
            L(
                this,
                'handleScroll',
                a()(() => {
                    if (null != this._list) {
                        let e = this._list.getScrollerNode();
                        null != e && h.Z.updateChannelListScroll(A.ME, e.scrollTop);
                    }
                    void 0 !== this.props.onHandleScroll && this.props.onHandleScroll();
                }, 100)
            ),
            L(this, 'renderDM', (e, t) => {
                let { privateChannelIds: n, channels: r, selectedChannelId: l } = this.props,
                    { totalRowCount: o, preRenderedChildren: a } = this.state,
                    s = r[n[t]];
                return null == s
                    ? null
                    : (0, i.jsx)(
                          y.s,
                          {
                              channelId: s.id,
                              selectedChannelId: l,
                              children: (0, i.jsx)(T.ZP, {
                                  channel: s,
                                  selected: s.id === l,
                                  'aria-posinset': a + t + 1,
                                  'aria-setsize': o
                              })
                          },
                          s.id
                      );
            }),
            L(this, 'renderChild', (e) => {
                let { nonNullChildren: t, totalRowCount: n } = this.state,
                    r = t[e];
                return l.isValidElement(r)
                    ? l.cloneElement(r, {
                          'aria-setsize': n,
                          'aria-posinset': e + 1
                      })
                    : r;
            }),
            L(this, 'renderRow', (e) => {
                let { section: t, row: n } = e,
                    { privateChannelIds: r } = this.props;
                return 0 === t ? this.renderChild(n) : 0 === n && 0 === r.length ? (0, i.jsx)(G, {}, 'no-private-channels') : this.renderDM(t, n);
            }),
            L(this, 'renderSection', (e) => {
                let { section: t } = e,
                    { showDMHeader: n, isVisualRefreshEnabled: r } = this.props;
                return 0 !== t && n
                    ? (0, i.jsxs)(
                          _.Z,
                          {
                              className: R.privateChannelsHeaderContainer,
                              children: [
                                  (0, i.jsx)('span', {
                                      className: R.headerText,
                                      children: D.NW.string(D.t.YUU0RE)
                                  }),
                                  (0, i.jsx)(C.Z, {
                                      tooltip: D.NW.string(D.t['6Urw1t']),
                                      tooltipPosition: 'top',
                                      popoutAlign: 'left',
                                      className: R.privateChannelRecipientsInviteButtonIconContainer,
                                      iconClassName: R.privateChannelRecipientsInviteButtonIcon,
                                      icon: r ? p.BRu : p.qJs,
                                      subscribeToGlobalHotkey: !0
                                  })
                              ]
                          },
                          t
                      )
                    : null;
            }),
            L(this, 'getRowHeight', (e, t) => {
                let { privateChannelIds: n, isVisualRefreshEnabled: r, density: i } = this.props,
                    { nonNullChildren: o } = this.state,
                    a = 44;
                if (r)
                    if (0 === e) {
                        let e = o[t];
                        if (l.isValidElement(e)) {
                            var s;
                            a = (null == (s = e.key) ? void 0 : s.startsWith('section-divider')) ? 25 : 'dm-quick-launcher' === e.key ? 67 : 40;
                        }
                    } else a = 'compact' === i ? 40 : 'default' === i ? 44 : 50;
                else if (0 === e) {
                    let e = o[t];
                    l.isValidElement(e) && 'dm-quick-launcher' === e.key && (a = 80);
                }
                return 1 === e && 0 === t && 0 === n.length ? 428 : a;
            });
    }
}
L(B, 'defaultProps', { padding: 8 });
let U = (e) => {
    var t;
    let n = (0, O.Q3)('ConnectedPrivateChannelsList'),
        { density: r } = (0, p.TCT)(),
        { version: o, theme: a, children: d, showDMHeader: h } = e,
        g = l.Children.count(d),
        m = Z.Z.getMutablePrivateChannels(),
        b = (0, P.k1)(m),
        y = (0, u.Wu)(
            [E.Z, S.Z, I.Z],
            () => {
                let e = E.Z.getPrivateChannelIds();
                return (0, P.tU)(e, [S.Z, I.Z]);
            },
            []
        );
    (0, x.z)(j.R);
    let _ = (0, u.cj)([f.Z, N.Z, Z.Z], () => ({
            theme: N.Z.darkSidebar ? A.BRd.DARK : a,
            keyboardModeEnabled: f.Z.keyboardModeEnabled,
            version: null != o ? ''.concat(o, ':').concat(Z.Z.getPrivateChannelsVersion()) : Z.Z.getPrivateChannelsVersion()
        })),
        C = l.useRef(null),
        w = null != (t = e.listScrollerRef) ? t : C,
        T = l.useCallback(
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
                                return null == (t = document.querySelector(e)) ? void 0 : t.focus({ preventScroll: !0 });
                            });
                        }
                    });
            },
            [w]
        ),
        D = l.useCallback(
            () =>
                new Promise((e) => {
                    let t = w.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [w]
        ),
        R = l.useCallback(
            () =>
                new Promise((e) => {
                    let t = w.current;
                    if (null == t) return e();
                    t.scrollToBottom({
                        callback() {
                            requestAnimationFrame(() => setTimeout(e, 100));
                        }
                    });
                }),
            [w]
        ),
        L = (0, v.Dt)(),
        G = (0, c.ZP)({
            id: 'private-channels-'.concat(L),
            isEnabled: _.keyboardModeEnabled,
            scrollToStart: D,
            scrollToEnd: R,
            defaultFocused: (g + +!!h).toString(),
            setFocus: T
        });
    return (0, i.jsx)(s.bG, {
        navigator: G,
        children: (0, i.jsx)(
            B,
            k(
                M(
                    k(
                        {
                            density: r,
                            isVisualRefreshEnabled: n,
                            channels: b,
                            privateChannelIds: y,
                            listRef: w,
                            theme: a,
                            version: o
                        },
                        e
                    ),
                    { children: d }
                ),
                _
            )
        )
    });
};
