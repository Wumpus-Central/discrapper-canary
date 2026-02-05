n.d(t, { A: () => J }), n(321073);
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(735438),
    o = n.n(s),
    d = n(311907),
    c = n(827734),
    u = n(990078),
    A = n(582754),
    h = n(421380),
    _ = n(397927),
    m = n(73153),
    p = n(442433),
    g = n(92077),
    E = n(979604),
    f = n(707606),
    I = n(456412),
    C = n(587895),
    N = n(235986),
    T = n(596719),
    S = n(769015),
    x = n(290987),
    v = n(544028),
    b = n(189081),
    y = n(194871),
    L = n(966846),
    O = n(531685),
    R = n(255438),
    P = n(674378),
    j = n(505806),
    D = n(250632),
    w = n(652215),
    M = n(985018),
    U = n(59790);
let G = (e) => {
        let { className: t, children: n, onContextMenu: r, item: a } = e;
        return (0, i.jsx)("div", { className: t, onContextMenu: (e) => r(e, a), children: n });
    },
    k = [c.A.unsafe_rawColors.BLUE_345.css, c.A.colors.INTERACTIVE_TEXT_DEFAULT.css],
    V = (e) => {
        let { tooltip: t, onClick: n, icon: r } = e;
        return (0, i.jsx)(u.m, {
            text: t,
            children: (0, i.jsx)(h.$n, {
                "aria-label": t,
                className: U.hP,
                innerClassName: U.DX,
                color: h.$n.Colors.PRIMARY,
                onClick: n,
                size: h.$n.Sizes.ICON,
                children: (0, i.jsx)(r, { className: U.gE }),
            }),
        });
    };
function B(e, t) {
    switch (t) {
        case w.OQC.POST_INSTALL_SCRIPTS:
        case w.OQC.PLANNING:
        case w.OQC.FINALIZING:
        case w.OQC.ALLOCATING_DISK:
            return `${e}`;
        default:
            return (0, R.Xq)(e, { useKibibytes: !0 });
    }
}
let H = {
    [w.WTw.INSTALLING]: {
        [x.pJ.NONE]: (e, t, n, i) => M.intl.formatToPlainString(M.t.JfJt9d, { percent: e, progress: t, total: n }),
        [x.pJ.SECONDS]: (e, t, n, i) =>
            M.intl.formatToPlainString(M.t["1z3c6e"], { percent: e, progress: t, total: n, timeRemaining: i }),
        [x.pJ.MINUTES]: (e, t, n, i) =>
            M.intl.formatToPlainString(M.t.PCX506, { percent: e, progress: t, total: n, timeRemaining: i }),
        [x.pJ.HOURS]: (e, t, n, i) =>
            M.intl.formatToPlainString(M.t["3VG9s1"], { percent: e, progress: t, total: n, timeRemaining: i }),
    },
    [w.WTw.UPDATING]: {
        [x.pJ.NONE]: (e, t, n, i) => M.intl.formatToPlainString(M.t.JsqXXL, { percent: e, progress: t, total: n }),
        [x.pJ.SECONDS]: (e, t, n, i) =>
            M.intl.formatToPlainString(M.t["3BvVec"], { percent: e, progress: t, total: n, timeRemaining: i }),
        [x.pJ.MINUTES]: (e, t, n, i) =>
            M.intl.formatToPlainString(M.t["rwULn+"], { percent: e, progress: t, total: n, timeRemaining: i }),
        [x.pJ.HOURS]: (e, t, n, i) =>
            M.intl.formatToPlainString(M.t.adcitP, { percent: e, progress: t, total: n, timeRemaining: i }),
    },
    [w.WTw.REPAIRING]: {
        [x.pJ.NONE]: (e, t, n, i) => M.intl.formatToPlainString(M.t.JfJt9d, { percent: e, progress: t, total: n }),
        [x.pJ.SECONDS]: (e, t, n, i) =>
            M.intl.formatToPlainString(M.t["1z3c6e"], { percent: e, progress: t, total: n, timeRemaining: i }),
        [x.pJ.MINUTES]: (e, t, n, i) =>
            M.intl.formatToPlainString(M.t.PCX506, { percent: e, progress: t, total: n, timeRemaining: i }),
        [x.pJ.HOURS]: (e, t, n, i) =>
            M.intl.formatToPlainString(M.t["3VG9s1"], { percent: e, progress: t, total: n, timeRemaining: i }),
    },
};
function F(e, t, n, i, r) {
    let a = H[t],
        l = null != a ? Object.keys(a) : [],
        { unit: s, time: o } = (0, x.$l)(null != e ? e / 60 : null, l);
    if (null != a && null != s) {
        let e = a[s];
        return null != e ? e(n, i, r, o) : null;
    }
    return null;
}
function Y(e) {
    let { type: t, stage: n, percent: i, progress: r, total: a, secondsRemaining: l } = e,
        s = B(a, n),
        o = B(r, n);
    switch (n) {
        case w.OQC.QUEUED:
            if (0 === r) return M.intl.string(M.t.RpfBqd);
            return M.intl.formatToPlainString(M.t.uNjCXZ, { percent: i, progress: o, total: s });
        case w.OQC.PLANNING:
            return M.intl.formatToPlainString(M.t.sfuCUb, { percent: i });
        case w.OQC.ALLOCATING_DISK:
            return M.intl.formatToPlainString(M.t.XigoJ9, { percent: i });
        case w.OQC.PATCHING:
            return F(l, t, i, o, s);
        case w.OQC.FINALIZING:
            return M.intl.formatToPlainString(M.t["6PHDUN"], { percent: i });
        case w.OQC.PAUSING:
            return M.intl.formatToPlainString(M.t.vjxhWo, { percent: i, progress: o, total: s });
        case w.OQC.VERIFYING:
            return M.intl.formatToPlainString(M.t.bbilvq, { percent: i, progress: o, total: s });
        case w.OQC.POST_INSTALL_SCRIPTS:
            return M.intl.formatToPlainString(M.t.c5vRUo, { percent: i, progress: o, total: s });
        case w.OQC.REPAIRING:
            if (t === w.WTw.REPAIRING) return F(l, t, i, o, s);
            return M.intl.formatToPlainString(M.t.OCzETT, { percent: i, progress: o, total: s });
    }
    throw Error("Invalid Dispatch stage");
}
class W extends r.PureComponent {
    get isFocused() {
        let { cellProps: e } = this.props;
        return null != e && e.isFocused;
    }
    renderBody(e) {
        let { percent: t, foregroundColor: n, foregroundGradientColor: r, message: a } = e;
        return (0, i.jsxs)(N.A, {
            direction: N.A.Direction.VERTICAL,
            children: [
                (0, i.jsx)(_.iCB, {
                    percent: t,
                    size: _.iCB.Sizes.SMALL,
                    foregroundColor: n,
                    foregroundGradientColor: null != r ? [r[0], r[1]] : void 0,
                    animate: this.isFocused,
                }),
                (0, i.jsx)("div", { className: U.NO, children: null != a ? a : "" }),
            ],
        });
    }
    renderStackedProgress(e) {
        let { percents: t, message: n } = e;
        return (0, i.jsxs)(N.A, {
            direction: N.A.Direction.VERTICAL,
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
            message: M.intl.format(M.t.z1oxGO, { remove: () => g.Vt(e.applicationId, e.branchId) }),
            foregroundColor: (0, A.qB)(e.theme)
                ? c.A.unsafe_rawColors.PRIMARY_300.css
                : c.A.unsafe_rawColors.PRIMARY_500.css,
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
            let { progress: i, total: r, stage: a } = n;
            if (null != i && null != r) {
                let n = B(r, a),
                    l = B(i, a),
                    s = Math.floor((t = P.uA(i, r)));
                e =
                    a === w.OQC.PAUSING
                        ? M.intl.formatToPlainString(M.t.vjxhWo, { percent: s, progress: l, total: n })
                        : M.intl.formatToPlainString(M.t.voT3Bi, { percent: s, progress: l, total: n });
            }
        }
        return (
            (null == t || null == e) && ((t = 0), (e = M.intl.string(M.t["qS+iKY"]))),
            this.renderBody({
                percent: t,
                foregroundColor: (0, A.qB)(i)
                    ? c.A.unsafe_rawColors.PRIMARY_300.css
                    : c.A.unsafe_rawColors.PRIMARY_500.css,
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
            a = Math.floor(r),
            l =
                0 === n && 1 === i
                    ? M.intl.string(M.t["+pfsFX"])
                    : M.intl.formatToPlainString(M.t["+feX8S"], {
                          percent: a,
                          progress: (0, R.Xq)(n),
                          total: (0, R.Xq)(i),
                      });
        return this.renderBody({
            message: l,
            foregroundColor: (0, A.qB)(t) ? c.A.unsafe_rawColors.PRIMARY_300.css : c.A.unsafe_rawColors.PRIMARY_500.css,
            percent: r,
        });
    }
    renderProgressPatchingBody = (e, t) => {
        let {
            item: { state: n },
        } = this.props;
        if (null == n) return null;
        let { stage: i, progress: r, total: a, type: l, readerProgress: s } = n;
        if (null == r || null == a || null == i) return null;
        let o = P.uA(r, a),
            d = P.uA(s ?? 0, a),
            c = (e[e.length - 1] / t) * 1e3,
            u = a - r,
            A = Y({
                type: l,
                stage: i,
                percent: Math.floor(o),
                progress: r,
                total: a,
                secondsRemaining: 0 !== c ? Math.max(1, u / c) : null,
            });
        return this.renderStackedProgress({ percents: [o, d], message: A });
    };
    renderProgressPatching() {
        return (0, i.jsx)(j.A, {
            getHistoricalTotalBytes: y.A.getHistoricalTotalBytesWritten,
            updateInterval: 5e3,
            children: this.renderProgressPatchingBody,
        });
    }
    renderProgressDefault() {
        let { state: e } = this.props.item;
        if (null == e) return null;
        let { total: t, progress: n, stage: i, type: r } = e;
        if (null == t || null == n || null == i) return null;
        let a = P.uA(n, t),
            l = Math.floor(a);
        return this.renderBody({
            percent: a,
            message: Y({ type: r, stage: i, percent: l, progress: n, total: t }),
            foregroundColor: c.A.unsafe_rawColors.BLUE_345.css,
        });
    }
    renderProgress() {
        let { state: e } = this.props.item;
        switch (null != e ? e.stage : null) {
            case w.OQC.PATCHING:
            case w.OQC.REPAIRING:
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
            (e.state.type === w.WTw.UPDATING || e.state.type === w.WTw.REPAIRING || e.state.type === w.WTw.INSTALLING)
        )
            if (null != t && t.paused) return this.renderPaused();
            else return this.renderProgress();
        return null;
    }
}
let q = () => (0, i.jsx)(V, { icon: _.udU, tooltip: M.intl.string(M.t.YGm6SZ), onClick: () => g.U() }),
    z = () => (0, i.jsx)(V, { icon: _.E$n, tooltip: M.intl.string(M.t.TVAd5J), onClick: () => g.v7() }),
    K = (e) => {
        let { item: t } = e;
        return (0, i.jsx)(V, {
            icon: _.z$m,
            tooltip: M.intl.string(M.t["Eqb+LN"]),
            onClick: () => g.BO(t.applicationId, t.branchId),
        });
    },
    $ = (e) => {
        let { item: t } = e;
        return (0, i.jsx)(V, {
            icon: _.PGe,
            tooltip: M.intl.string(M.t["0lFmC9"]),
            onClick: () => g.ZT(t.applicationId, t.branchId),
        });
    },
    Q = [
        {
            key: "name",
            cellClassName: U.UQ,
            render: (e) =>
                (0, i.jsxs)(N.A, {
                    align: N.A.Align.CENTER,
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
                let n, r;
                return (
                    e.finished
                        ? (n =
                              null != e.libraryApplication
                                  ? (0, i.jsx)(E.A, {
                                        libraryApplication: e.libraryApplication,
                                        size: "sm",
                                        source: w.ThZ.APPLICATION_LIBRARY_UPDATES,
                                    })
                                  : null)
                        : null != e.state
                          ? e.state.type !== w.WTw.UP_TO_DATE &&
                            ((n =
                                e.index > 0
                                    ? (0, i.jsx)(K, { item: e })
                                    : null != t && t.paused
                                      ? (0, i.jsx)(q, {})
                                      : (0, i.jsx)(z, { item: e })),
                            (r = (0, i.jsx)($, { item: e })))
                          : (r = (0, i.jsx)($, { item: e })),
                    (0, i.jsxs)(N.A, { justify: N.A.Justify.END, children: [n, r] })
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
        let { applications: e, paused: t, isFocused: r, theme: a, analyticsContext: s } = this.props;
        return 0 === e.length
            ? null
            : (0, i.jsxs)("div", {
                  className: U.xP,
                  children: [
                      (0, i.jsxs)("div", {
                          className: U.U1,
                          children: [
                              (0, i.jsx)(D.A, {
                                  className: l()(U.e4, U.Eg),
                                  title: M.intl.string(M.t.ytoXKr),
                                  getHistoricalTotalBytes: y.A.getHistoricalTotalBytesDownloaded,
                                  color: c.A.unsafe_rawColors.GREEN_360.resolve({ saturation: 1 }).hex(),
                                  animate: r,
                              }),
                              (0, i.jsx)(D.A, {
                                  className: l()(U.e4, U.pn),
                                  title: M.intl.string(M.t.SjohhI),
                                  getHistoricalTotalBytes: y.A.getHistoricalTotalBytesWritten,
                                  color: c.A.unsafe_rawColors.BLUE_345.resolve({ saturation: 1 }).hex(),
                                  animate: r,
                              }),
                          ],
                      }),
                      (0, i.jsx)(T.A, {
                          hasHeader: !1,
                          columns: Q,
                          data: e,
                          className: U.tp,
                          rowClassName: U.nM,
                          rowComponent: G,
                          cellProps: { paused: t, isFocused: r, theme: a },
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
    return e.reduce((e, r, a) => {
        let { applicationId: l, branchId: s } = r,
            o = n.getApplication(l),
            d = i.getState(l, s);
        return (
            null != o &&
                e.push({
                    key: `${l}:${s}`,
                    applicationId: l,
                    branchId: s,
                    state: d,
                    application: o,
                    libraryApplication: b.A.getLibraryApplication(l, s),
                    finished: t,
                    index: a,
                }),
            e
        );
    }, []);
}
let J = (0, I.A)(
    d.Ay.connectStores([C.A, y.A, L.A, v.A, O.A], () => ({
        applications: [...Z(L.A.activeItems, !1, C.A, y.A), ...Z(L.A.finishedItems, !0, C.A, y.A)],
        paused: L.A.paused,
        isFocused: O.A.isFocused(),
        theme: v.A.theme,
    }))((0, f.A)(X)),
);
