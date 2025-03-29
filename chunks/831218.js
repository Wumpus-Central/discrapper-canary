n.d(t, { Z: () => B }), n(47120);
var r,
    i = n(200651),
    o = n(192379),
    l = n(299608),
    a = n.n(l),
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
    v = n(82295),
    y = n(313201),
    _ = n(540059),
    O = n(860144),
    j = n(214852),
    x = n(518311),
    C = n(355298),
    S = n(869404),
    P = n(333984),
    I = n(210887),
    N = n(592125),
    Z = n(158776),
    w = n(55589),
    E = n(515753),
    T = n(981631),
    A = n(388032),
    D = n(217833);
function R(e, t, n) {
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
                R(e, t, n[t]);
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
let M = o.memo(function () {
    return (0, i.jsxs)('svg', {
        width: '184',
        height: '428',
        viewBox: '0 0 184 428',
        className: D.empty,
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
class G extends (r = o.Component) {
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
                var { ref: o, role: l } = r,
                    a = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    i = {},
                                    o = Object.keys(e);
                                for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                                return i;
                            })(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var o = Object.getOwnPropertySymbols(e);
                            for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
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
                                    innerRole: l,
                                    innerAriaLabel: A.NW.string(A.t.YUU0RE),
                                    innerTag: 'ul',
                                    ref: (e) => {
                                        var t;
                                        (this._list = e), (this.props.listRef.current = e), (o.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null);
                                    },
                                    onScroll: this.handleScroll,
                                    className: D.scroller,
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
            R(this, 'state', {
                initialized: !1,
                preRenderedChildren: 0,
                totalRowCount: 0,
                nonNullChildren: []
            }),
            R(this, '_list', null),
            R(this, 'hasReportedAnalytics', !1),
            R(this, 'reportAnalytics', () => {
                var e;
                if (this.hasReportedAnalytics) return;
                let t = null === (e = this._list) || void 0 === e ? void 0 : e.getScrollerState();
                if (null == t) return;
                let { privateChannelIds: n, channels: r } = this.props;
                if (0 === n.length) return;
                let i = o.Children.count(this.props.children);
                if (null == t) return;
                let l = Math.round((t.offsetHeight - 44 * i) / 44),
                    a = l > n.length ? n.slice(0, l + 1) : n,
                    s = a.map((e) => (null != r[e] ? r[e].getRecipientId() : null)),
                    c = n.some((e) => (0, b.Z)(e)),
                    u = {
                        num_users_visible: a.length,
                        num_users_visible_with_mobile_indicator: s.filter((e) => null != e && Z.Z.isMobileOnline(e)).length
                    };
                (this.hasReportedAnalytics = !0),
                    g.ZP.trackWithMetadata(
                        T.rMx.DM_LIST_VIEWED,
                        L(k({}, u, (0, m.X)()), {
                            visible_user_ids: s.filter((e) => null != e),
                            changelog_dm_visible: c
                        })
                    );
            }),
            R(this, 'getSectionHeight', (e) => {
                let { showDMHeader: t, isVisualRefreshEnabled: n } = this.props;
                return 0 === e ? 0 : t ? (n ? 24 : 40) : 0;
            }),
            R(
                this,
                'handleScroll',
                a()(() => {
                    if (null != this._list) {
                        let e = this._list.getScrollerNode();
                        null != e && h.Z.updateChannelListScroll(T.ME, e.scrollTop);
                    }
                    void 0 !== this.props.onHandleScroll && this.props.onHandleScroll();
                }, 100)
            ),
            R(this, 'renderDM', (e, t) => {
                let { privateChannelIds: n, channels: r, selectedChannelId: o } = this.props,
                    { totalRowCount: l, preRenderedChildren: a } = this.state,
                    s = r[n[t]];
                return null == s
                    ? null
                    : (0, i.jsx)(
                          E.ZP,
                          {
                              channel: s,
                              selected: s.id === o,
                              'aria-posinset': a + t + 1,
                              'aria-setsize': l
                          },
                          s.id
                      );
            }),
            R(this, 'renderChild', (e) => {
                let { nonNullChildren: t, totalRowCount: n } = this.state,
                    r = t[e];
                return o.isValidElement(r)
                    ? o.cloneElement(r, {
                          'aria-setsize': n,
                          'aria-posinset': e + 1
                      })
                    : r;
            }),
            R(this, 'renderRow', (e) => {
                let { section: t, row: n } = e,
                    { privateChannelIds: r } = this.props;
                return 0 === t ? this.renderChild(n) : 0 === n && 0 === r.length ? (0, i.jsx)(M, {}, 'no-private-channels') : this.renderDM(t, n);
            }),
            R(this, 'renderSection', (e) => {
                let { section: t } = e,
                    { showDMHeader: n, isVisualRefreshEnabled: r } = this.props;
                return 0 !== t && n
                    ? (0, i.jsxs)(
                          v.Z,
                          {
                              className: D.privateChannelsHeaderContainer,
                              children: [
                                  (0, i.jsx)('span', {
                                      className: D.headerText,
                                      children: A.NW.string(A.t.YUU0RE)
                                  }),
                                  (0, i.jsx)(x.Z, {
                                      tooltip: A.NW.string(A.t['6Urw1t']),
                                      tooltipPosition: 'top',
                                      popoutAlign: 'left',
                                      className: D.privateChannelRecipientsInviteButtonIconContainer,
                                      iconClassName: D.privateChannelRecipientsInviteButtonIcon,
                                      icon: r ? p.BRu : p.qJs,
                                      subscribeToGlobalHotkey: !0
                                  })
                              ]
                          },
                          t
                      )
                    : null;
            }),
            R(this, 'getRowHeight', (e, t) => {
                let { privateChannelIds: n, isVisualRefreshEnabled: r, density: i } = this.props,
                    { nonNullChildren: l } = this.state,
                    a = 44;
                if (r) {
                    if (0 === e) {
                        let e = l[t];
                        if (o.isValidElement(e)) {
                            var s;
                            a = (null === (s = e.key) || void 0 === s ? void 0 : s.startsWith('section-divider')) ? 25 : 'dm-quick-launcher' === e.key ? 67 : 40;
                        }
                    } else a = 'compact' === i ? 40 : 'default' === i ? 44 : 50;
                } else if (0 === e) {
                    let e = l[t];
                    o.isValidElement(e) && 'dm-quick-launcher' === e.key && (a = 80);
                }
                return 1 === e && 0 === t && 0 === n.length ? 428 : a;
            });
    }
}
R(G, 'defaultProps', { padding: 8 });
let B = (e) => {
    var t;
    let n = (0, _.Q3)('ConnectedPrivateChannelsList'),
        { density: r } = (0, p.TCT)(),
        { version: l, theme: a, children: d, showDMHeader: h } = e,
        g = o.Children.count(d),
        m = N.Z.getMutablePrivateChannels(),
        b = (0, S.k1)(m),
        v = (0, u.Wu)(
            [w.Z, C.Z, P.Z],
            () => {
                let e = w.Z.getPrivateChannelIds();
                return (0, S.tU)(e, [C.Z, P.Z]);
            },
            []
        );
    (0, j.z)(O.R);
    let x = (0, u.cj)([f.Z, I.Z, N.Z], () => ({
            theme: I.Z.darkSidebar ? T.BRd.DARK : a,
            keyboardModeEnabled: f.Z.keyboardModeEnabled,
            version: null != l ? ''.concat(l, ':').concat(N.Z.getPrivateChannelsVersion()) : N.Z.getPrivateChannelsVersion()
        })),
        Z = o.useRef(null),
        E = null !== (t = e.listScrollerRef) && void 0 !== t ? t : Z,
        A = o.useCallback(
            (e) => {
                let t = E.current,
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
            },
            [E]
        ),
        D = o.useCallback(
            () =>
                new Promise((e) => {
                    let t = E.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [E]
        ),
        R = o.useCallback(
            () =>
                new Promise((e) => {
                    let t = E.current;
                    if (null == t) return e();
                    t.scrollToBottom({
                        callback() {
                            requestAnimationFrame(() => setTimeout(e, 100));
                        }
                    });
                }),
            [E]
        ),
        M = (0, y.Dt)(),
        B = (0, c.ZP)({
            id: 'private-channels-'.concat(M),
            isEnabled: x.keyboardModeEnabled,
            scrollToStart: D,
            scrollToEnd: R,
            defaultFocused: (g + +!!h).toString(),
            setFocus: A
        });
    return (0, i.jsx)(s.bG, {
        navigator: B,
        children: (0, i.jsx)(
            G,
            k(
                L(
                    k(
                        {
                            density: r,
                            isVisualRefreshEnabled: n,
                            channels: b,
                            privateChannelIds: v,
                            listRef: E,
                            theme: a,
                            version: l
                        },
                        e
                    ),
                    { children: d }
                ),
                x
            )
        )
    });
};
