"use strict";
n.d(t, { A: () => es }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(735438),
    o = n.n(a),
    c = n(408278),
    d = n(311907),
    h = n(827734),
    p = n(990078),
    u = n(462887),
    A = n(5373),
    m = n(248530),
    g = n(782134),
    f = n(113494),
    _ = n(872351),
    x = n(789645),
    y = n(73153),
    N = n(442433),
    C = n(92077),
    I = n(979604),
    T = n(707606),
    S = n(456412),
    b = n(587895),
    R = n(235986),
    v = n(596719),
    P = n(769015),
    w = n(290987),
    j = n(544028),
    L = n(189081),
    E = n(194871),
    D = n(966846),
    M = n(531685),
    B = n(255438),
    O = n(674378),
    k = n(505806),
    U = n(250632),
    V = n(652215),
    H = n(985018),
    G = n(692275);
let K = (e) => {
        let { className: t, children: n, onContextMenu: s, item: l } = e;
        return (0, i.jsx)("div", { className: t, onContextMenu: (e) => s(e, l), children: n });
    },
    W = [h.A.unsafe_rawColors.BLUE_345.css, h.A.colors.INTERACTIVE_TEXT_DEFAULT.css],
    F = (e) => {
        let { tooltip: t, onClick: n, icon: s } = e;
        return (0, i.jsx)(p.m, {
            text: t,
            children: (0, i.jsx)(c.K, { "aria-label": t, variant: "secondary", icon: s, onClick: n, size: "sm" }),
        });
    };
function X(e, t) {
    switch (t) {
        case V.OQC.POST_INSTALL_SCRIPTS:
        case V.OQC.PLANNING:
        case V.OQC.FINALIZING:
        case V.OQC.ALLOCATING_DISK:
            return `${e}`;
        default:
            return (0, B.Xq)(e, { useKibibytes: !0 });
    }
}
let z = {
    [V.WTw.INSTALLING]: {
        [w.pJ.NONE]: (e, t, n, i) => H.intl.formatToPlainString(H.t.JfJt9d, { percent: e, progress: t, total: n }),
        [w.pJ.SECONDS]: (e, t, n, i) =>
            H.intl.formatToPlainString(H.t["1z3c6e"], { percent: e, progress: t, total: n, timeRemaining: i }),
        [w.pJ.MINUTES]: (e, t, n, i) =>
            H.intl.formatToPlainString(H.t.PCX506, { percent: e, progress: t, total: n, timeRemaining: i }),
        [w.pJ.HOURS]: (e, t, n, i) =>
            H.intl.formatToPlainString(H.t["3VG9s1"], { percent: e, progress: t, total: n, timeRemaining: i }),
    },
    [V.WTw.UPDATING]: {
        [w.pJ.NONE]: (e, t, n, i) => H.intl.formatToPlainString(H.t.JsqXXL, { percent: e, progress: t, total: n }),
        [w.pJ.SECONDS]: (e, t, n, i) =>
            H.intl.formatToPlainString(H.t["3BvVec"], { percent: e, progress: t, total: n, timeRemaining: i }),
        [w.pJ.MINUTES]: (e, t, n, i) =>
            H.intl.formatToPlainString(H.t["rwULn+"], { percent: e, progress: t, total: n, timeRemaining: i }),
        [w.pJ.HOURS]: (e, t, n, i) =>
            H.intl.formatToPlainString(H.t.adcitP, { percent: e, progress: t, total: n, timeRemaining: i }),
    },
    [V.WTw.REPAIRING]: {
        [w.pJ.NONE]: (e, t, n, i) => H.intl.formatToPlainString(H.t.JfJt9d, { percent: e, progress: t, total: n }),
        [w.pJ.SECONDS]: (e, t, n, i) =>
            H.intl.formatToPlainString(H.t["1z3c6e"], { percent: e, progress: t, total: n, timeRemaining: i }),
        [w.pJ.MINUTES]: (e, t, n, i) =>
            H.intl.formatToPlainString(H.t.PCX506, { percent: e, progress: t, total: n, timeRemaining: i }),
        [w.pJ.HOURS]: (e, t, n, i) =>
            H.intl.formatToPlainString(H.t["3VG9s1"], { percent: e, progress: t, total: n, timeRemaining: i }),
    },
};
function J(e, t, n, i, s) {
    let l = z[t],
        r = null != l ? Object.keys(l) : [],
        { unit: a, time: o } = (0, w.$l)(null != e ? e / 60 : null, r);
    if (null != l && null != a) {
        let e = l[a];
        return null != e ? e(n, i, s, o) : null;
    }
    return null;
}
function Y(e) {
    let { type: t, stage: n, percent: i, progress: s, total: l, secondsRemaining: r } = e,
        a = X(l, n),
        o = X(s, n);
    switch (n) {
        case V.OQC.QUEUED:
            if (0 === s) return H.intl.string(H.t.RpfBqd);
            return H.intl.formatToPlainString(H.t.uNjCXZ, { percent: i, progress: o, total: a });
        case V.OQC.PLANNING:
            return H.intl.formatToPlainString(H.t.sfuCUb, { percent: i });
        case V.OQC.ALLOCATING_DISK:
            return H.intl.formatToPlainString(H.t.XigoJ9, { percent: i });
        case V.OQC.PATCHING:
            return J(r, t, i, o, a);
        case V.OQC.FINALIZING:
            return H.intl.formatToPlainString(H.t["6PHDUN"], { percent: i });
        case V.OQC.PAUSING:
            return H.intl.formatToPlainString(H.t.vjxhWo, { percent: i, progress: o, total: a });
        case V.OQC.VERIFYING:
            return H.intl.formatToPlainString(H.t.bbilvq, { percent: i, progress: o, total: a });
        case V.OQC.POST_INSTALL_SCRIPTS:
            return H.intl.formatToPlainString(H.t.c5vRUo, { percent: i, progress: o, total: a });
        case V.OQC.REPAIRING:
            if (t === V.WTw.REPAIRING) return J(r, t, i, o, a);
            return H.intl.formatToPlainString(H.t.OCzETT, { percent: i, progress: o, total: a });
    }
    throw Error("Invalid Dispatch stage");
}
class Q extends s.PureComponent {
    get isFocused() {
        let { cellProps: e } = this.props;
        return null != e && e.isFocused;
    }
    renderBody(e) {
        let { percent: t, foregroundColor: n, foregroundGradientColor: s, message: l } = e;
        return (0, i.jsxs)(R.A, {
            direction: R.A.Direction.VERTICAL,
            children: [
                (0, i.jsx)(A.i, {
                    percent: t,
                    size: A.i.Sizes.SMALL,
                    foregroundColor: n,
                    foregroundGradientColor: null != s ? [s[0], s[1]] : void 0,
                    animate: this.isFocused,
                }),
                (0, i.jsx)("div", { className: G.NO, children: null != l ? l : "" }),
            ],
        });
    }
    renderStackedProgress(e) {
        let { percents: t, message: n } = e;
        return (0, i.jsxs)(R.A, {
            direction: R.A.Direction.VERTICAL,
            children: [
                (0, i.jsx)(m.L, { percents: t, size: m.L.Sizes.SMALL, foregroundColors: W, animate: this.isFocused }),
                (0, i.jsx)("div", { className: G.NO, children: null != n ? n : "" }),
            ],
        });
    }
    renderFinished() {
        let { item: e } = this.props;
        return this.renderBody({
            message: H.intl.format(H.t.z1oxGO, { remove: () => C.Vt(e.applicationId, e.branchId) }),
            foregroundColor: (0, u.q)(e.theme)
                ? h.A.unsafe_rawColors.PRIMARY_300.css
                : h.A.unsafe_rawColors.PRIMARY_500.css,
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
            let { progress: i, total: s, stage: l } = n;
            if (null != i && null != s) {
                let n = X(s, l),
                    r = X(i, l),
                    a = Math.floor((t = O.uA(i, s)));
                e =
                    l === V.OQC.PAUSING
                        ? H.intl.formatToPlainString(H.t.vjxhWo, { percent: a, progress: r, total: n })
                        : H.intl.formatToPlainString(H.t.voT3Bi, { percent: a, progress: r, total: n });
            }
        }
        return (
            (null == t || null == e) && ((t = 0), (e = H.intl.string(H.t["qS+iKY"]))),
            this.renderBody({
                percent: t,
                foregroundColor: (0, u.q)(i)
                    ? h.A.unsafe_rawColors.PRIMARY_300.css
                    : h.A.unsafe_rawColors.PRIMARY_500.css,
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
        let s = O.uA(n, i),
            l = Math.floor(s),
            r =
                0 === n && 1 === i
                    ? H.intl.string(H.t["+pfsFX"])
                    : H.intl.formatToPlainString(H.t["+feX8S"], {
                          percent: l,
                          progress: (0, B.Xq)(n),
                          total: (0, B.Xq)(i),
                      });
        return this.renderBody({
            message: r,
            foregroundColor: (0, u.q)(t) ? h.A.unsafe_rawColors.PRIMARY_300.css : h.A.unsafe_rawColors.PRIMARY_500.css,
            percent: s,
        });
    }
    renderProgressPatchingBody = (e, t) => {
        let {
            item: { state: n },
        } = this.props;
        if (null == n) return null;
        let { stage: i, progress: s, total: l, type: r, readerProgress: a } = n;
        if (null == s || null == l || null == i) return null;
        let o = O.uA(s, l),
            c = O.uA(a ?? 0, l),
            d = (e[e.length - 1] / t) * 1e3,
            h = l - s,
            p = Y({
                type: r,
                stage: i,
                percent: Math.floor(o),
                progress: s,
                total: l,
                secondsRemaining: 0 !== d ? Math.max(1, h / d) : null,
            });
        return this.renderStackedProgress({ percents: [o, c], message: p });
    };
    renderProgressPatching() {
        return (0, i.jsx)(k.A, {
            getHistoricalTotalBytes: E.A.getHistoricalTotalBytesWritten,
            updateInterval: 5e3,
            children: this.renderProgressPatchingBody,
        });
    }
    renderProgressDefault() {
        let { state: e } = this.props.item;
        if (null == e) return null;
        let { total: t, progress: n, stage: i, type: s } = e;
        if (null == t || null == n || null == i) return null;
        let l = O.uA(n, t),
            r = Math.floor(l);
        return this.renderBody({
            percent: l,
            message: Y({ type: s, stage: i, percent: r, progress: n, total: t }),
            foregroundColor: h.A.unsafe_rawColors.BLUE_345.css,
        });
    }
    renderProgress() {
        let { state: e } = this.props.item;
        switch (null != e ? e.stage : null) {
            case V.OQC.PATCHING:
            case V.OQC.REPAIRING:
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
            (e.state.type === V.WTw.UPDATING || e.state.type === V.WTw.REPAIRING || e.state.type === V.WTw.INSTALLING)
        )
            if (null != t && t.paused) return this.renderPaused();
            else return this.renderProgress();
        return null;
    }
}
let q = () => (0, i.jsx)(F, { icon: g.u, tooltip: H.intl.string(H.t.YGm6SZ), onClick: () => C.U() }),
    Z = () => (0, i.jsx)(F, { icon: f.E, tooltip: H.intl.string(H.t.TVAd5J), onClick: () => C.v7() }),
    $ = (e) => {
        let { item: t } = e;
        return (0, i.jsx)(F, {
            icon: _.z,
            tooltip: H.intl.string(H.t["Eqb+LN"]),
            onClick: () => C.BO(t.applicationId, t.branchId),
        });
    },
    ee = (e) => {
        let { item: t } = e;
        return (0, i.jsx)(F, {
            icon: x.P,
            tooltip: H.intl.string(H.t["0lFmC9"]),
            onClick: () => C.ZT(t.applicationId, t.branchId),
        });
    },
    et = [
        {
            key: "name",
            cellClassName: G.UQ,
            render: (e) =>
                (0, i.jsxs)(R.A, {
                    align: R.A.Align.CENTER,
                    children: [
                        (0, i.jsx)(P.A, { game: e.application, className: G.__invalid_gameIcon, size: P.M.SMALL }),
                        (0, i.jsx)("div", { className: G.TF, children: e.application.name }),
                    ],
                }),
        },
        {
            key: "progress",
            cellClassName: G.Ay,
            headerCellClassName: G.VD,
            bodyCellClassName: G.so,
            render: (e, t) => (0, i.jsx)(Q, { item: e, cellProps: t }),
        },
        {
            key: "actions",
            cellClassName: G.AT,
            render(e, t) {
                let n, s;
                return (
                    e.finished
                        ? (n =
                              null != e.libraryApplication
                                  ? (0, i.jsx)(I.A, {
                                        libraryApplication: e.libraryApplication,
                                        size: "sm",
                                        source: V.ThZ.APPLICATION_LIBRARY_UPDATES,
                                    })
                                  : null)
                        : null != e.state
                          ? e.state.type !== V.WTw.UP_TO_DATE &&
                            ((n =
                                e.index > 0
                                    ? (0, i.jsx)($, { item: e })
                                    : null != t && t.paused
                                      ? (0, i.jsx)(q, {})
                                      : (0, i.jsx)(Z, { item: e })),
                            (s = (0, i.jsx)(ee, { item: e })))
                          : (s = (0, i.jsx)(ee, { item: e })),
                    (0, i.jsxs)("div", { className: G.sG, children: [n, s] })
                );
            },
        },
    ];
class en extends s.PureComponent {
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
                y.h.wait(() => {
                    C.Vt(e.applicationId, e.branchId);
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
        let { applications: e, paused: t, isFocused: s, theme: l, analyticsContext: a } = this.props;
        return 0 === e.length
            ? null
            : (0, i.jsxs)("div", {
                  className: G.xP,
                  children: [
                      (0, i.jsxs)("div", {
                          className: G.U1,
                          children: [
                              (0, i.jsx)(U.A, {
                                  className: r()(G.e4, G.Eg),
                                  title: H.intl.string(H.t.ytoXKr),
                                  getHistoricalTotalBytes: E.A.getHistoricalTotalBytesDownloaded,
                                  color: h.A.unsafe_rawColors.GREEN_360.resolve({ saturation: 1 }).hex(),
                                  animate: s,
                              }),
                              (0, i.jsx)(U.A, {
                                  className: r()(G.e4, G.pn),
                                  title: H.intl.string(H.t.SjohhI),
                                  getHistoricalTotalBytes: E.A.getHistoricalTotalBytesWritten,
                                  color: h.A.unsafe_rawColors.BLUE_345.resolve({ saturation: 1 }).hex(),
                                  animate: s,
                              }),
                          ],
                      }),
                      (0, i.jsx)(v.A, {
                          hasHeader: !1,
                          columns: et,
                          data: e,
                          className: G.tp,
                          rowClassName: G.nM,
                          rowComponent: K,
                          cellProps: { paused: t, isFocused: s, theme: l },
                          rowProps: {
                              onContextMenu: (e, t) => {
                                  N.L3(e, async () => {
                                      let { default: e } = await n.e("881").then(n.bind(n, 163368));
                                      return (n) =>
                                          (0, i.jsx)(e, {
                                              ...n,
                                              applicationId: t.applicationId,
                                              branchId: t.branchId,
                                              analyticsContext: a,
                                          });
                                  });
                              },
                          },
                          bodyCellClassName: G.Hn,
                      }),
                  ],
              });
    }
}
function ei(e, t, n, i) {
    return e.reduce((e, s, l) => {
        let { applicationId: r, branchId: a } = s,
            o = n.getApplication(r),
            c = i.getState(r, a);
        return (
            null != o &&
                e.push({
                    key: `${r}:${a}`,
                    applicationId: r,
                    branchId: a,
                    state: c,
                    application: o,
                    libraryApplication: L.A.getLibraryApplication(r, a),
                    finished: t,
                    index: l,
                }),
            e
        );
    }, []);
}
let es = (0, S.A)(
    d.Ay.connectStores([b.A, E.A, D.A, j.A, M.A], () => ({
        applications: [...ei(D.A.activeItems, !1, b.A, E.A), ...ei(D.A.finishedItems, !0, b.A, E.A)],
        paused: D.A.paused,
        isFocused: M.A.isFocused(),
        theme: j.A.theme,
    }))((0, T.A)(en)),
);
