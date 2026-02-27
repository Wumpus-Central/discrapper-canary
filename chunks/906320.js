n.d(t, { A: () => J }), n(321073);
var i = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(735438),
    o = n.n(s),
    d = n(158954),
    c = n(311907),
    u = n(827734),
    A = n(990078),
    h = n(582754),
    _ = n(397927),
    m = n(73153),
    p = n(442433),
    g = n(92077),
    E = n(979604),
    I = n(707606),
    f = n(456412),
    C = n(587895),
    T = n(235986),
    N = n(596719),
    S = n(769015),
    x = n(290987),
    v = n(544028),
    y = n(189081),
    b = n(194871),
    O = n(966846),
    L = n(531685),
    R = n(255438),
    P = n(674378),
    j = n(505806),
    D = n(250632),
    M = n(652215),
    w = n(985018),
    U = n(59790);
let G = (e) => {
        let { className: t, children: n, onContextMenu: r, item: l } = e;
        return (0, i.jsx)("div", { className: t, onContextMenu: (e) => r(e, l), children: n });
    },
    k = [u.A.unsafe_rawColors.BLUE_345.css, u.A.colors.INTERACTIVE_TEXT_DEFAULT.css],
    V = (e) => {
        let { tooltip: t, onClick: n, icon: r } = e;
        return (0, i.jsx)(A.m, {
            text: t,
            children: (0, i.jsx)(d.K0, { "aria-label": t, variant: "secondary", icon: r, onClick: n, size: "sm" }),
        });
    };
function B(e, t) {
    switch (t) {
        case M.OQC.POST_INSTALL_SCRIPTS:
        case M.OQC.PLANNING:
        case M.OQC.FINALIZING:
        case M.OQC.ALLOCATING_DISK:
            return `${e}`;
        default:
            return (0, R.Xq)(e, { useKibibytes: !0 });
    }
}
let H = {
    [M.WTw.INSTALLING]: {
        [x.pJ.NONE]: (e, t, n, i) => w.intl.formatToPlainString(w.t.JfJt9d, { percent: e, progress: t, total: n }),
        [x.pJ.SECONDS]: (e, t, n, i) =>
            w.intl.formatToPlainString(w.t["1z3c6e"], { percent: e, progress: t, total: n, timeRemaining: i }),
        [x.pJ.MINUTES]: (e, t, n, i) =>
            w.intl.formatToPlainString(w.t.PCX506, { percent: e, progress: t, total: n, timeRemaining: i }),
        [x.pJ.HOURS]: (e, t, n, i) =>
            w.intl.formatToPlainString(w.t["3VG9s1"], { percent: e, progress: t, total: n, timeRemaining: i }),
    },
    [M.WTw.UPDATING]: {
        [x.pJ.NONE]: (e, t, n, i) => w.intl.formatToPlainString(w.t.JsqXXL, { percent: e, progress: t, total: n }),
        [x.pJ.SECONDS]: (e, t, n, i) =>
            w.intl.formatToPlainString(w.t["3BvVec"], { percent: e, progress: t, total: n, timeRemaining: i }),
        [x.pJ.MINUTES]: (e, t, n, i) =>
            w.intl.formatToPlainString(w.t["rwULn+"], { percent: e, progress: t, total: n, timeRemaining: i }),
        [x.pJ.HOURS]: (e, t, n, i) =>
            w.intl.formatToPlainString(w.t.adcitP, { percent: e, progress: t, total: n, timeRemaining: i }),
    },
    [M.WTw.REPAIRING]: {
        [x.pJ.NONE]: (e, t, n, i) => w.intl.formatToPlainString(w.t.JfJt9d, { percent: e, progress: t, total: n }),
        [x.pJ.SECONDS]: (e, t, n, i) =>
            w.intl.formatToPlainString(w.t["1z3c6e"], { percent: e, progress: t, total: n, timeRemaining: i }),
        [x.pJ.MINUTES]: (e, t, n, i) =>
            w.intl.formatToPlainString(w.t.PCX506, { percent: e, progress: t, total: n, timeRemaining: i }),
        [x.pJ.HOURS]: (e, t, n, i) =>
            w.intl.formatToPlainString(w.t["3VG9s1"], { percent: e, progress: t, total: n, timeRemaining: i }),
    },
};
function F(e, t, n, i, r) {
    let l = H[t],
        a = null != l ? Object.keys(l) : [],
        { unit: s, time: o } = (0, x.$l)(null != e ? e / 60 : null, a);
    if (null != l && null != s) {
        let e = l[s];
        return null != e ? e(n, i, r, o) : null;
    }
    return null;
}
function Y(e) {
    let { type: t, stage: n, percent: i, progress: r, total: l, secondsRemaining: a } = e,
        s = B(l, n),
        o = B(r, n);
    switch (n) {
        case M.OQC.QUEUED:
            if (0 === r) return w.intl.string(w.t.RpfBqd);
            return w.intl.formatToPlainString(w.t.uNjCXZ, { percent: i, progress: o, total: s });
        case M.OQC.PLANNING:
            return w.intl.formatToPlainString(w.t.sfuCUb, { percent: i });
        case M.OQC.ALLOCATING_DISK:
            return w.intl.formatToPlainString(w.t.XigoJ9, { percent: i });
        case M.OQC.PATCHING:
            return F(a, t, i, o, s);
        case M.OQC.FINALIZING:
            return w.intl.formatToPlainString(w.t["6PHDUN"], { percent: i });
        case M.OQC.PAUSING:
            return w.intl.formatToPlainString(w.t.vjxhWo, { percent: i, progress: o, total: s });
        case M.OQC.VERIFYING:
            return w.intl.formatToPlainString(w.t.bbilvq, { percent: i, progress: o, total: s });
        case M.OQC.POST_INSTALL_SCRIPTS:
            return w.intl.formatToPlainString(w.t.c5vRUo, { percent: i, progress: o, total: s });
        case M.OQC.REPAIRING:
            if (t === M.WTw.REPAIRING) return F(a, t, i, o, s);
            return w.intl.formatToPlainString(w.t.OCzETT, { percent: i, progress: o, total: s });
    }
    throw Error("Invalid Dispatch stage");
}
class q extends r.PureComponent {
    get isFocused() {
        let { cellProps: e } = this.props;
        return null != e && e.isFocused;
    }
    renderBody(e) {
        let { percent: t, foregroundColor: n, foregroundGradientColor: r, message: l } = e;
        return (0, i.jsxs)(T.A, {
            direction: T.A.Direction.VERTICAL,
            children: [
                (0, i.jsx)(_.iCB, {
                    percent: t,
                    size: _.iCB.Sizes.SMALL,
                    foregroundColor: n,
                    foregroundGradientColor: null != r ? [r[0], r[1]] : void 0,
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
            message: w.intl.format(w.t.z1oxGO, { remove: () => g.Vt(e.applicationId, e.branchId) }),
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
            let { progress: i, total: r, stage: l } = n;
            if (null != i && null != r) {
                let n = B(r, l),
                    a = B(i, l),
                    s = Math.floor((t = P.uA(i, r)));
                e =
                    l === M.OQC.PAUSING
                        ? w.intl.formatToPlainString(w.t.vjxhWo, { percent: s, progress: a, total: n })
                        : w.intl.formatToPlainString(w.t.voT3Bi, { percent: s, progress: a, total: n });
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
        let r = P.uA(n, i),
            l = Math.floor(r),
            a =
                0 === n && 1 === i
                    ? w.intl.string(w.t["+pfsFX"])
                    : w.intl.formatToPlainString(w.t["+feX8S"], {
                          percent: l,
                          progress: (0, R.Xq)(n),
                          total: (0, R.Xq)(i),
                      });
        return this.renderBody({
            message: a,
            foregroundColor: (0, h.qB)(t) ? u.A.unsafe_rawColors.PRIMARY_300.css : u.A.unsafe_rawColors.PRIMARY_500.css,
            percent: r,
        });
    }
    renderProgressPatchingBody = (e, t) => {
        let {
            item: { state: n },
        } = this.props;
        if (null == n) return null;
        let { stage: i, progress: r, total: l, type: a, readerProgress: s } = n;
        if (null == r || null == l || null == i) return null;
        let o = P.uA(r, l),
            d = P.uA(s ?? 0, l),
            c = (e[e.length - 1] / t) * 1e3,
            u = l - r,
            A = Y({
                type: a,
                stage: i,
                percent: Math.floor(o),
                progress: r,
                total: l,
                secondsRemaining: 0 !== c ? Math.max(1, u / c) : null,
            });
        return this.renderStackedProgress({ percents: [o, d], message: A });
    };
    renderProgressPatching() {
        return (0, i.jsx)(j.A, {
            getHistoricalTotalBytes: b.A.getHistoricalTotalBytesWritten,
            updateInterval: 5e3,
            children: this.renderProgressPatchingBody,
        });
    }
    renderProgressDefault() {
        let { state: e } = this.props.item;
        if (null == e) return null;
        let { total: t, progress: n, stage: i, type: r } = e;
        if (null == t || null == n || null == i) return null;
        let l = P.uA(n, t),
            a = Math.floor(l);
        return this.renderBody({
            percent: l,
            message: Y({ type: r, stage: i, percent: a, progress: n, total: t }),
            foregroundColor: u.A.unsafe_rawColors.BLUE_345.css,
        });
    }
    renderProgress() {
        let { state: e } = this.props.item;
        switch (null != e ? e.stage : null) {
            case M.OQC.PATCHING:
            case M.OQC.REPAIRING:
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
            (e.state.type === M.WTw.UPDATING || e.state.type === M.WTw.REPAIRING || e.state.type === M.WTw.INSTALLING)
        )
            if (null != t && t.paused) return this.renderPaused();
            else return this.renderProgress();
        return null;
    }
}
let W = () => (0, i.jsx)(V, { icon: _.udU, tooltip: w.intl.string(w.t.YGm6SZ), onClick: () => g.U() }),
    K = () => (0, i.jsx)(V, { icon: _.E$n, tooltip: w.intl.string(w.t.TVAd5J), onClick: () => g.v7() }),
    z = (e) => {
        let { item: t } = e;
        return (0, i.jsx)(V, {
            icon: _.z$m,
            tooltip: w.intl.string(w.t["Eqb+LN"]),
            onClick: () => g.BO(t.applicationId, t.branchId),
        });
    },
    $ = (e) => {
        let { item: t } = e;
        return (0, i.jsx)(V, {
            icon: _.PGe,
            tooltip: w.intl.string(w.t["0lFmC9"]),
            onClick: () => g.ZT(t.applicationId, t.branchId),
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
            render: (e, t) => (0, i.jsx)(q, { item: e, cellProps: t }),
        },
        {
            key: "actions",
            cellClassName: U.AT,
            render(e, t) {
                let n, r;
                return (
                    e.finished
                        ? (n =
                              null != e.libraryApplication
                                  ? (0, i.jsx)(E.A, {
                                        libraryApplication: e.libraryApplication,
                                        size: "sm",
                                        source: M.ThZ.APPLICATION_LIBRARY_UPDATES,
                                    })
                                  : null)
                        : null != e.state
                          ? e.state.type !== M.WTw.UP_TO_DATE &&
                            ((n =
                                e.index > 0
                                    ? (0, i.jsx)(z, { item: e })
                                    : null != t && t.paused
                                      ? (0, i.jsx)(W, {})
                                      : (0, i.jsx)(K, { item: e })),
                            (r = (0, i.jsx)($, { item: e })))
                          : (r = (0, i.jsx)($, { item: e })),
                    (0, i.jsxs)("div", { className: U.sG, children: [n, r] })
                );
            },
        },
    ];
class X extends r.PureComponent {
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
                    g.Vt(e.applicationId, e.branchId);
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
        let { applications: e, paused: t, isFocused: r, theme: l, analyticsContext: s } = this.props;
        return 0 === e.length
            ? null
            : (0, i.jsxs)("div", {
                  className: U.xP,
                  children: [
                      (0, i.jsxs)("div", {
                          className: U.U1,
                          children: [
                              (0, i.jsx)(D.A, {
                                  className: a()(U.e4, U.Eg),
                                  title: w.intl.string(w.t.ytoXKr),
                                  getHistoricalTotalBytes: b.A.getHistoricalTotalBytesDownloaded,
                                  color: u.A.unsafe_rawColors.GREEN_360.resolve({ saturation: 1 }).hex(),
                                  animate: r,
                              }),
                              (0, i.jsx)(D.A, {
                                  className: a()(U.e4, U.pn),
                                  title: w.intl.string(w.t.SjohhI),
                                  getHistoricalTotalBytes: b.A.getHistoricalTotalBytesWritten,
                                  color: u.A.unsafe_rawColors.BLUE_345.resolve({ saturation: 1 }).hex(),
                                  animate: r,
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
                          cellProps: { paused: t, isFocused: r, theme: l },
                          rowProps: {
                              onContextMenu: (e, t) => {
                                  p.L3(e, async () => {
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
    return e.reduce((e, r, l) => {
        let { applicationId: a, branchId: s } = r,
            o = n.getApplication(a),
            d = i.getState(a, s);
        return (
            null != o &&
                e.push({
                    key: `${a}:${s}`,
                    applicationId: a,
                    branchId: s,
                    state: d,
                    application: o,
                    libraryApplication: y.A.getLibraryApplication(a, s),
                    finished: t,
                    index: l,
                }),
            e
        );
    }, []);
}
let J = (0, f.A)(
    c.Ay.connectStores([C.A, b.A, O.A, v.A, L.A], () => ({
        applications: [...Z(O.A.activeItems, !1, C.A, b.A), ...Z(O.A.finishedItems, !0, C.A, b.A)],
        paused: O.A.paused,
        isFocused: L.A.isFocused(),
        theme: v.A.theme,
    }))((0, I.A)(X)),
);
