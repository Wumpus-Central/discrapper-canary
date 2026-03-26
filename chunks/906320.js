n.d(t, { A: () => J }), n(321073);
var i = n(627968),
    a = n(64700),
    l = n(503698),
    r = n.n(l),
    s = n(735438),
    o = n.n(s),
    d = n(158954),
    c = n(311907),
    u = n(827734),
    A = n(990078),
    h = n(582754),
    _ = n(397927),
    m = n(73153),
    g = n(442433),
    p = n(92077),
    E = n(979604),
    I = n(707606),
    f = n(456412),
    C = n(587895),
    T = n(235986),
    N = n(596719),
    S = n(769015),
    x = n(290987),
    v = n(544028),
    b = n(189081),
    y = n(194871),
    O = n(966846),
    L = n(531685),
    R = n(255438),
    P = n(674378),
    D = n(505806),
    M = n(250632),
    j = n(652215),
    w = n(985018),
    U = n(248355);
let G = (e) => {
        let { className: t, children: n, onContextMenu: a, item: l } = e;
        return (0, i.jsx)("div", { className: t, onContextMenu: (e) => a(e, l), children: n });
    },
    k = [u.A.unsafe_rawColors.BLUE_345.css, u.A.colors.INTERACTIVE_TEXT_DEFAULT.css],
    V = (e) => {
        let { tooltip: t, onClick: n, icon: a } = e;
        return (0, i.jsx)(A.m, {
            text: t,
            children: (0, i.jsx)(d.K0, { "aria-label": t, variant: "secondary", icon: a, onClick: n, size: "sm" }),
        });
    };
function B(e, t) {
    switch (t) {
        case j.OQC.POST_INSTALL_SCRIPTS:
        case j.OQC.PLANNING:
        case j.OQC.FINALIZING:
        case j.OQC.ALLOCATING_DISK:
            return `${e}`;
        default:
            return (0, R.Xq)(e, { useKibibytes: !0 });
    }
}
let H = {
    [j.WTw.INSTALLING]: {
        [x.pJ.NONE]: (e, t, n, i) => w.intl.formatToPlainString(w.t.JfJt9d, { percent: e, progress: t, total: n }),
        [x.pJ.SECONDS]: (e, t, n, i) =>
            w.intl.formatToPlainString(w.t["1z3c6e"], { percent: e, progress: t, total: n, timeRemaining: i }),
        [x.pJ.MINUTES]: (e, t, n, i) =>
            w.intl.formatToPlainString(w.t.PCX506, { percent: e, progress: t, total: n, timeRemaining: i }),
        [x.pJ.HOURS]: (e, t, n, i) =>
            w.intl.formatToPlainString(w.t["3VG9s1"], { percent: e, progress: t, total: n, timeRemaining: i }),
    },
    [j.WTw.UPDATING]: {
        [x.pJ.NONE]: (e, t, n, i) => w.intl.formatToPlainString(w.t.JsqXXL, { percent: e, progress: t, total: n }),
        [x.pJ.SECONDS]: (e, t, n, i) =>
            w.intl.formatToPlainString(w.t["3BvVec"], { percent: e, progress: t, total: n, timeRemaining: i }),
        [x.pJ.MINUTES]: (e, t, n, i) =>
            w.intl.formatToPlainString(w.t["rwULn+"], { percent: e, progress: t, total: n, timeRemaining: i }),
        [x.pJ.HOURS]: (e, t, n, i) =>
            w.intl.formatToPlainString(w.t.adcitP, { percent: e, progress: t, total: n, timeRemaining: i }),
    },
    [j.WTw.REPAIRING]: {
        [x.pJ.NONE]: (e, t, n, i) => w.intl.formatToPlainString(w.t.JfJt9d, { percent: e, progress: t, total: n }),
        [x.pJ.SECONDS]: (e, t, n, i) =>
            w.intl.formatToPlainString(w.t["1z3c6e"], { percent: e, progress: t, total: n, timeRemaining: i }),
        [x.pJ.MINUTES]: (e, t, n, i) =>
            w.intl.formatToPlainString(w.t.PCX506, { percent: e, progress: t, total: n, timeRemaining: i }),
        [x.pJ.HOURS]: (e, t, n, i) =>
            w.intl.formatToPlainString(w.t["3VG9s1"], { percent: e, progress: t, total: n, timeRemaining: i }),
    },
};
function F(e, t, n, i, a) {
    let l = H[t],
        r = null != l ? Object.keys(l) : [],
        { unit: s, time: o } = (0, x.$l)(null != e ? e / 60 : null, r);
    if (null != l && null != s) {
        let e = l[s];
        return null != e ? e(n, i, a, o) : null;
    }
    return null;
}
function Y(e) {
    let { type: t, stage: n, percent: i, progress: a, total: l, secondsRemaining: r } = e,
        s = B(l, n),
        o = B(a, n);
    switch (n) {
        case j.OQC.QUEUED:
            if (0 === a) return w.intl.string(w.t.RpfBqd);
            return w.intl.formatToPlainString(w.t.uNjCXZ, { percent: i, progress: o, total: s });
        case j.OQC.PLANNING:
            return w.intl.formatToPlainString(w.t.sfuCUb, { percent: i });
        case j.OQC.ALLOCATING_DISK:
            return w.intl.formatToPlainString(w.t.XigoJ9, { percent: i });
        case j.OQC.PATCHING:
            return F(r, t, i, o, s);
        case j.OQC.FINALIZING:
            return w.intl.formatToPlainString(w.t["6PHDUN"], { percent: i });
        case j.OQC.PAUSING:
            return w.intl.formatToPlainString(w.t.vjxhWo, { percent: i, progress: o, total: s });
        case j.OQC.VERIFYING:
            return w.intl.formatToPlainString(w.t.bbilvq, { percent: i, progress: o, total: s });
        case j.OQC.POST_INSTALL_SCRIPTS:
            return w.intl.formatToPlainString(w.t.c5vRUo, { percent: i, progress: o, total: s });
        case j.OQC.REPAIRING:
            if (t === j.WTw.REPAIRING) return F(r, t, i, o, s);
            return w.intl.formatToPlainString(w.t.OCzETT, { percent: i, progress: o, total: s });
    }
    throw Error("Invalid Dispatch stage");
}
class W extends a.PureComponent {
    get isFocused() {
        let { cellProps: e } = this.props;
        return null != e && e.isFocused;
    }
    renderBody(e) {
        let { percent: t, foregroundColor: n, foregroundGradientColor: a, message: l } = e;
        return (0, i.jsxs)(T.A, {
            direction: T.A.Direction.VERTICAL,
            children: [
                (0, i.jsx)(_.iCB, {
                    percent: t,
                    size: _.iCB.Sizes.SMALL,
                    foregroundColor: n,
                    foregroundGradientColor: null != a ? [a[0], a[1]] : void 0,
                    animate: this.isFocused,
                }),
                (0, i.jsx)("div", { className: U.NO, children: null != l ? l : "" }),
            ],
        });
    }
    renderStackedProgress(e) {
        let { percents: t, message: n } = e;
        return (0, i.jsxs)(T.A, {
            direction: T.A.Direction.VERTICAL,
            children: [
                (0, i.jsx)(_.LvI, {
                    percents: t,
                    size: _.LvI.Sizes.SMALL,
                    foregroundColors: k,
                    animate: this.isFocused,
                }),
                (0, i.jsx)("div", { className: U.NO, children: null != n ? n : "" }),
            ],
        });
    }
    renderFinished() {
        let { item: e } = this.props;
        return this.renderBody({
            message: w.intl.format(w.t.z1oxGO, { remove: () => p.Vt(e.applicationId, e.branchId) }),
            foregroundColor: (0, h.qB)(e.theme)
                ? u.A.unsafe_rawColors.PRIMARY_300.css
                : u.A.unsafe_rawColors.PRIMARY_500.css,
            percent: 100,
        });
    }
    renderQueued() {
        let e,
            t,
            {
                item: { state: n, theme: i },
            } = this.props;
        if (null != n) {
            let { progress: i, total: a, stage: l } = n;
            if (null != i && null != a) {
                let n = B(a, l),
                    r = B(i, l),
                    s = Math.floor((t = P.uA(i, a)));
                e =
                    l === j.OQC.PAUSING
                        ? w.intl.formatToPlainString(w.t.vjxhWo, { percent: s, progress: r, total: n })
                        : w.intl.formatToPlainString(w.t.voT3Bi, { percent: s, progress: r, total: n });
            }
        }
        return (
            (null == t || null == e) && ((t = 0), (e = w.intl.string(w.t["qS+iKY"]))),
            this.renderBody({
                percent: t,
                foregroundColor: (0, h.qB)(i)
                    ? u.A.unsafe_rawColors.PRIMARY_300.css
                    : u.A.unsafe_rawColors.PRIMARY_500.css,
                message: e,
            })
        );
    }
    renderPaused() {
        let {
            item: { state: e, theme: t },
        } = this.props;
        if (null == e) return null;
        let { progress: n, total: i } = e;
        if (null == n || null == i) return null;
        let a = P.uA(n, i),
            l = Math.floor(a),
            r =
                0 === n && 1 === i
                    ? w.intl.string(w.t["+pfsFX"])
                    : w.intl.formatToPlainString(w.t["+feX8S"], {
                          percent: l,
                          progress: (0, R.Xq)(n),
                          total: (0, R.Xq)(i),
                      });
        return this.renderBody({
            message: r,
            foregroundColor: (0, h.qB)(t) ? u.A.unsafe_rawColors.PRIMARY_300.css : u.A.unsafe_rawColors.PRIMARY_500.css,
            percent: a,
        });
    }
    renderProgressPatchingBody = (e, t) => {
        let {
            item: { state: n },
        } = this.props;
        if (null == n) return null;
        let { stage: i, progress: a, total: l, type: r, readerProgress: s } = n;
        if (null == a || null == l || null == i) return null;
        let o = P.uA(a, l),
            d = P.uA(s ?? 0, l),
            c = (e[e.length - 1] / t) * 1e3,
            u = l - a,
            A = Y({
                type: r,
                stage: i,
                percent: Math.floor(o),
                progress: a,
                total: l,
                secondsRemaining: 0 !== c ? Math.max(1, u / c) : null,
            });
        return this.renderStackedProgress({ percents: [o, d], message: A });
    };
    renderProgressPatching() {
        return (0, i.jsx)(D.A, {
            getHistoricalTotalBytes: y.A.getHistoricalTotalBytesWritten,
            updateInterval: 5e3,
            children: this.renderProgressPatchingBody,
        });
    }
    renderProgressDefault() {
        let { state: e } = this.props.item;
        if (null == e) return null;
        let { total: t, progress: n, stage: i, type: a } = e;
        if (null == t || null == n || null == i) return null;
        let l = P.uA(n, t),
            r = Math.floor(l);
        return this.renderBody({
            percent: l,
            message: Y({ type: a, stage: i, percent: r, progress: n, total: t }),
            foregroundColor: u.A.unsafe_rawColors.BLUE_345.css,
        });
    }
    renderProgress() {
        let { state: e } = this.props.item;
        switch (null != e ? e.stage : null) {
            case j.OQC.PATCHING:
            case j.OQC.REPAIRING:
                return this.renderProgressPatching();
            default:
                return this.renderProgressDefault();
        }
    }
    render() {
        let { item: e, cellProps: t } = this.props;
        if (e.finished) return this.renderFinished();
        if (e.index > 0) return this.renderQueued();
        if (
            null != e.state &&
            (e.state.type === j.WTw.UPDATING || e.state.type === j.WTw.REPAIRING || e.state.type === j.WTw.INSTALLING)
        )
            if (null != t && t.paused) return this.renderPaused();
            else return this.renderProgress();
        return null;
    }
}
let K = () => (0, i.jsx)(V, { icon: _.udU, tooltip: w.intl.string(w.t.YGm6SZ), onClick: () => p.U() }),
    q = () => (0, i.jsx)(V, { icon: _.E$n, tooltip: w.intl.string(w.t.TVAd5J), onClick: () => p.v7() }),
    z = (e) => {
        let { item: t } = e;
        return (0, i.jsx)(V, {
            icon: _.z$m,
            tooltip: w.intl.string(w.t["Eqb+LN"]),
            onClick: () => p.BO(t.applicationId, t.branchId),
        });
    },
    $ = (e) => {
        let { item: t } = e;
        return (0, i.jsx)(V, {
            icon: _.PGe,
            tooltip: w.intl.string(w.t["0lFmC9"]),
            onClick: () => p.ZT(t.applicationId, t.branchId),
        });
    },
    Q = [
        {
            key: "name",
            cellClassName: U.UQ,
            render: (e) =>
                (0, i.jsxs)(T.A, {
                    align: T.A.Align.CENTER,
                    children: [
                        (0, i.jsx)(S.A, { game: e.application, className: U.__invalid_gameIcon, size: S.M.SMALL }),
                        (0, i.jsx)("div", { className: U.TF, children: e.application.name }),
                    ],
                }),
        },
        {
            key: "progress",
            cellClassName: U.Ay,
            headerCellClassName: U.VD,
            bodyCellClassName: U.so,
            render: (e, t) => (0, i.jsx)(W, { item: e, cellProps: t }),
        },
        {
            key: "actions",
            cellClassName: U.AT,
            render(e, t) {
                let n, a;
                return (
                    e.finished
                        ? (n =
                              null != e.libraryApplication
                                  ? (0, i.jsx)(E.A, {
                                        libraryApplication: e.libraryApplication,
                                        size: "sm",
                                        source: j.ThZ.APPLICATION_LIBRARY_UPDATES,
                                    })
                                  : null)
                        : null != e.state
                          ? e.state.type !== j.WTw.UP_TO_DATE &&
                            ((n =
                                e.index > 0
                                    ? (0, i.jsx)(z, { item: e })
                                    : null != t && t.paused
                                      ? (0, i.jsx)(K, {})
                                      : (0, i.jsx)(q, { item: e })),
                            (a = (0, i.jsx)($, { item: e })))
                          : (a = (0, i.jsx)($, { item: e })),
                    (0, i.jsxs)("div", { className: U.sG, children: [n, a] })
                );
            },
        },
    ];
class X extends a.PureComponent {
    isUnmounted = !1;
    isTallerThanHalfViewport = !1;
    componentDidMount() {
        window.addEventListener("resize", this.throttledUpdateHeight);
    }
    componentDidUpdate(e) {
        this.props.height !== e.height && this.throttledUpdateHeight();
    }
    componentWillUnmount() {
        let { applications: e } = this.props;
        e.forEach((e) => {
            e.finished &&
                m.h.wait(() => {
                    p.Vt(e.applicationId, e.branchId);
                });
        }),
            window.removeEventListener("resize", this.throttledUpdateHeight),
            (this.isUnmounted = !0);
    }
    throttledUpdateHeight = o().throttle(() => {
        if (this.isUnmounted) return;
        let { height: e, onHeightTallerThanHalfViewportChange: t } = this.props,
            n = e > window.innerHeight / 2;
        this.isTallerThanHalfViewport !== n && ((this.isTallerThanHalfViewport = n), t(n));
    }, 1e3);
    render() {
        let { applications: e, paused: t, isFocused: a, theme: l, analyticsContext: s } = this.props;
        return 0 === e.length
            ? null
            : (0, i.jsxs)("div", {
                  className: U.xP,
                  children: [
                      (0, i.jsxs)("div", {
                          className: U.U1,
                          children: [
                              (0, i.jsx)(M.A, {
                                  className: r()(U.e4, U.Eg),
                                  title: w.intl.string(w.t.ytoXKr),
                                  getHistoricalTotalBytes: y.A.getHistoricalTotalBytesDownloaded,
                                  color: u.A.unsafe_rawColors.GREEN_360.resolve({ saturation: 1 }).hex(),
                                  animate: a,
                              }),
                              (0, i.jsx)(M.A, {
                                  className: r()(U.e4, U.pn),
                                  title: w.intl.string(w.t.SjohhI),
                                  getHistoricalTotalBytes: y.A.getHistoricalTotalBytesWritten,
                                  color: u.A.unsafe_rawColors.BLUE_345.resolve({ saturation: 1 }).hex(),
                                  animate: a,
                              }),
                          ],
                      }),
                      (0, i.jsx)(N.A, {
                          hasHeader: !1,
                          columns: Q,
                          data: e,
                          className: U.tp,
                          rowClassName: U.nM,
                          rowComponent: G,
                          cellProps: { paused: t, isFocused: a, theme: l },
                          rowProps: {
                              onContextMenu: (e, t) => {
                                  g.L3(e, async () => {
                                      let { default: e } = await n.e("881").then(n.bind(n, 163368));
                                      return (n) =>
                                          (0, i.jsx)(e, {
                                              ...n,
                                              applicationId: t.applicationId,
                                              branchId: t.branchId,
                                              analyticsContext: s,
                                          });
                                  });
                              },
                          },
                          bodyCellClassName: U.Hn,
                      }),
                  ],
              });
    }
}
function Z(e, t, n, i) {
    return e.reduce((e, a, l) => {
        let { applicationId: r, branchId: s } = a,
            o = n.getApplication(r),
            d = i.getState(r, s);
        return (
            null != o &&
                e.push({
                    key: `${r}:${s}`,
                    applicationId: r,
                    branchId: s,
                    state: d,
                    application: o,
                    libraryApplication: b.A.getLibraryApplication(r, s),
                    finished: t,
                    index: l,
                }),
            e
        );
    }, []);
}
let J = (0, f.A)(
    c.Ay.connectStores([C.A, y.A, O.A, v.A, L.A], () => ({
        applications: [...Z(O.A.activeItems, !1, C.A, y.A), ...Z(O.A.finishedItems, !0, C.A, y.A)],
        paused: O.A.paused,
        isFocused: L.A.isFocused(),
        theme: v.A.theme,
    }))((0, I.A)(X)),
);
