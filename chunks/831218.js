n.d(t, { Z: () => H }), n(388685);
var r,
    i = n(255367),
    l = n(73800),
    o = n(299608),
    s = n.n(o),
    a = n(91192),
    c = n(924826),
    u = n(442837),
    d = n(902704),
    h = n(481060),
    p = n(925549),
    f = n(607070),
    g = n(100527),
    m = n(367907),
    b = n(906732),
    _ = n(453542),
    y = n(702321),
    O = n(46148),
    v = n(82295),
    C = n(313201),
    S = n(540059),
    j = n(860144),
    E = n(214852),
    x = n(518311),
    P = n(355298),
    I = n(869404),
    w = n(333984),
    N = n(210887),
    Z = n(592125),
    T = n(158776),
    A = n(55589),
    R = n(515753),
    D = n(981631),
    L = n(388032),
    k = n(555614);
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
function U(e) {
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
                M(e, t, n[t]);
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
    return (0, i.jsxs)('svg', {
        width: '184',
        height: '428',
        viewBox: '0 0 184 428',
        className: k.empty,
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
class V extends (r = l.Component) {
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
        return (0, i.jsx)(a.SJ, {
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
                            for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                        }
                        return i;
                    })(r, ['ref', 'role']);
                return (0, i.jsx)(h.Wdt, {
                    children: (r) =>
                        (0, i.jsx)(
                            h.aVo,
                            U(
                                {
                                    fade: !0,
                                    innerRole: o,
                                    innerAriaLabel: L.intl.string(L.t.YUU0RE),
                                    innerTag: 'ul',
                                    ref: (e) => {
                                        var t;
                                        (this._list = e), (this.props.listRef.current = e), (l.current = null != (t = null == e ? void 0 : e.getScrollerNode()) ? t : null);
                                    },
                                    onScroll: this.handleScroll,
                                    className: k.scroller,
                                    sectionHeight: this.getSectionHeight,
                                    paddingTop: t,
                                    paddingBottom: 8,
                                    rowHeight: this.getRowHeight,
                                    renderSection: this.renderSection,
                                    renderRow: this.renderRow,
                                    sections: [n, Math.max(e.length, 1)]
                                },
                                s,
                                r
                            )
                        )
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
                let t = null == (e = this._list) ? void 0 : e.getScrollerState();
                if (null == t) return;
                let { privateChannelIds: n, channels: r } = this.props;
                if (0 === n.length) return;
                let i = l.Children.count(this.props.children);
                if (null == t) return;
                let o = Math.round((t.offsetHeight - 44 * i) / 44),
                    s = o > n.length ? n.slice(0, o + 1) : n,
                    a = s.map((e) => (null != r[e] ? r[e].getRecipientId() : null)),
                    c = n.some((e) => (0, y.Z)(e)),
                    u = {
                        num_users_visible: s.length,
                        num_users_visible_with_mobile_indicator: a.filter((e) => null != e && T.Z.isMobileOnline(e)).length
                    };
                (this.hasReportedAnalytics = !0),
                    m.ZP.trackWithMetadata(
                        D.rMx.DM_LIST_VIEWED,
                        G(U({}, u, (0, _.X)()), {
                            visible_user_ids: a.filter((e) => null != e),
                            changelog_dm_visible: c
                        })
                    );
            }),
            M(this, 'getSectionHeight', (e) => {
                let { showDMHeader: t, isVisualRefreshEnabled: n } = this.props;
                return 0 === e ? 0 : t ? (n ? 24 : 40) : 0;
            }),
            M(
                this,
                'handleScroll',
                s()(() => {
                    if (null != this._list) {
                        let e = this._list.getScrollerNode();
                        null != e && p.Z.updateChannelListScroll(D.ME, e.scrollTop);
                    }
                    void 0 !== this.props.onHandleScroll && this.props.onHandleScroll();
                }, 100)
            ),
            M(this, 'renderDM', (e, t) => {
                let { privateChannelIds: n, channels: r, selectedChannelId: l } = this.props,
                    { totalRowCount: o, preRenderedChildren: s } = this.state,
                    a = r[n[t]];
                return null == a
                    ? null
                    : (0, i.jsx)(
                          O.s,
                          {
                              channelId: a.id,
                              selectedChannelId: l,
                              children: (0, i.jsx)(R.ZP, {
                                  channel: a,
                                  selected: a.id === l,
                                  'aria-posinset': s + t + 1,
                                  'aria-setsize': o
                              })
                          },
                          a.id
                      );
            }),
            M(this, 'renderChild', (e) => {
                let { nonNullChildren: t, totalRowCount: n } = this.state,
                    r = t[e];
                return l.isValidElement(r)
                    ? l.cloneElement(r, {
                          'aria-setsize': n,
                          'aria-posinset': e + 1
                      })
                    : r;
            }),
            M(this, 'renderRow', (e) => {
                let { section: t, row: n } = e,
                    { privateChannelIds: r } = this.props;
                return 0 === t ? this.renderChild(n) : 0 === n && 0 === r.length ? (0, i.jsx)(B, {}, 'no-private-channels') : this.renderDM(t, n);
            }),
            M(this, 'renderSection', (e) => {
                let { section: t } = e,
                    { showDMHeader: n, isVisualRefreshEnabled: r } = this.props;
                return 0 !== t && n
                    ? (0, i.jsxs)(
                          v.Z,
                          {
                              className: k.privateChannelsHeaderContainer,
                              children: [
                                  (0, i.jsx)('span', {
                                      className: k.headerText,
                                      children: L.intl.string(L.t.YUU0RE)
                                  }),
                                  (0, i.jsx)(x.Z, {
                                      tooltip: L.intl.string(L.t['6Urw1t']),
                                      tooltipPosition: 'top',
                                      popoutAlign: 'left',
                                      className: k.privateChannelRecipientsInviteButtonIconContainer,
                                      iconClassName: k.privateChannelRecipientsInviteButtonIcon,
                                      icon: r ? h.BRu : h.qJs,
                                      subscribeToGlobalHotkey: !0
                                  })
                              ]
                          },
                          t
                      )
                    : null;
            }),
            M(this, 'getRowHeight', (e, t) => {
                let { privateChannelIds: n, isVisualRefreshEnabled: r, density: i } = this.props,
                    { nonNullChildren: o } = this.state,
                    s = 44;
                if (r)
                    if (0 === e) {
                        let e = o[t];
                        if (l.isValidElement(e)) {
                            var a;
                            s = (null == (a = e.key) ? void 0 : a.startsWith('section-divider')) ? 25 : 'dm-quick-launcher' === e.key ? 67 : 40;
                        }
                    } else s = 'compact' === i ? 40 : 'default' === i ? 44 : 50;
                else if (0 === e) {
                    let e = o[t];
                    l.isValidElement(e) && 'dm-quick-launcher' === e.key && (s = 80);
                }
                return 1 === e && 0 === t && 0 === n.length ? 428 : s;
            });
    }
}
M(V, 'defaultProps', { padding: 8 });
let H = (e) => {
    var t;
    let n = (0, S.Q3)('ConnectedPrivateChannelsList'),
        { density: r } = (0, h.TCT)(),
        { version: o, theme: s, children: d, showDMHeader: p } = e,
        m = l.Children.count(d),
        _ = Z.Z.getMutablePrivateChannels(),
        y = (0, I.k1)(_),
        O = (0, u.Wu)(
            [A.Z, P.Z, w.Z],
            () => {
                let e = A.Z.getPrivateChannelIds();
                return (0, I.tU)(e, [P.Z, w.Z]);
            },
            []
        );
    (0, E.z)(j.R);
    let { analyticsLocations: v } = (0, b.ZP)(g.Z.CONTACTS_LIST),
        x = (0, u.cj)([f.Z, N.Z, Z.Z], () => ({
            theme: N.Z.darkSidebar ? D.BRd.DARK : s,
            keyboardModeEnabled: f.Z.keyboardModeEnabled,
            version: null != o ? ''.concat(o, ':').concat(Z.Z.getPrivateChannelsVersion()) : Z.Z.getPrivateChannelsVersion()
        })),
        T = l.useRef(null),
        R = null != (t = e.listScrollerRef) ? t : T,
        L = l.useCallback(
            (e) => {
                let t = R.current,
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
            [R]
        ),
        k = l.useCallback(
            () =>
                new Promise((e) => {
                    let t = R.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [R]
        ),
        M = l.useCallback(
            () =>
                new Promise((e) => {
                    let t = R.current;
                    if (null == t) return e();
                    t.scrollToBottom({
                        callback() {
                            requestAnimationFrame(() => setTimeout(e, 100));
                        }
                    });
                }),
            [R]
        ),
        B = (0, C.Dt)(),
        H = (0, c.ZP)({
            id: 'private-channels-'.concat(B),
            isEnabled: x.keyboardModeEnabled,
            scrollToStart: k,
            scrollToEnd: M,
            defaultFocused: (m + +!!p).toString(),
            setFocus: L
        });
    return (0, i.jsx)(b.Gt, {
        value: v,
        children: (0, i.jsx)(a.bG, {
            navigator: H,
            children: (0, i.jsx)(
                V,
                U(
                    G(
                        U(
                            {
                                density: r,
                                isVisualRefreshEnabled: n,
                                channels: y,
                                privateChannelIds: O,
                                listRef: R,
                                theme: s,
                                version: o
                            },
                            e
                        ),
                        { children: d }
                    ),
                    x
                )
            )
        })
    });
};
