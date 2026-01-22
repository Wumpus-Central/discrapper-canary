n.d(t, { A: () => ee }), n(65821), n(896048), n(321073);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(735438),
    o = n.n(s),
    c = n(311907),
    u = n(827734),
    d = n(990078),
    p = n(582754),
    f = n(421380),
    h = n(397927),
    A = n(73153),
    g = n(442433),
    m = n(92077),
    b = n(979604),
    _ = n(707606),
    E = n(456412),
    O = n(587895),
    y = n(235986),
    I = n(596719),
    v = n(769015),
    S = n(290987),
    C = n(544028),
    N = n(189081),
    T = n(194871),
    j = n(966846),
    x = n(531685),
    P = n(255438),
    w = n(674378),
    L = n(505806),
    R = n(250632),
    D = n(652215),
    M = n(985018),
    k = n(59790);
function U(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let G = (e) => {
        let { className: t, children: n, onContextMenu: i, item: l } = e;
        return (0, r.jsx)("div", {
            className: t,
            onContextMenu: (e) => i(e, l),
            children: n,
        });
    },
    V = [u.A.unsafe_rawColors.BLUE_345.css, u.A.colors.INTERACTIVE_TEXT_DEFAULT.css],
    B = (e) => {
        let { tooltip: t, onClick: n, icon: i } = e;
        return (0, r.jsx)(d.m, {
            text: t,
            children: (0, r.jsx)(f.$n, {
                "aria-label": t,
                className: k.hP,
                innerClassName: k.DX,
                color: f.$n.Colors.PRIMARY,
                onClick: n,
                size: f.$n.Sizes.ICON,
                children: (0, r.jsx)(i, { className: k.gE }),
            }),
        });
    };
function H(e, t) {
    switch (t) {
        case D.OQC.POST_INSTALL_SCRIPTS:
        case D.OQC.PLANNING:
        case D.OQC.FINALIZING:
        case D.OQC.ALLOCATING_DISK:
            return "".concat(e);
        default:
            return (0, P.Xq)(e, { useKibibytes: !0 });
    }
}
let F = {
    [D.WTw.INSTALLING]: {
        [S.pJ.NONE]: (e, t, n, r) =>
            M.intl.formatToPlainString(M.t.JfJt9d, {
                percent: e,
                progress: t,
                total: n,
            }),
        [S.pJ.SECONDS]: (e, t, n, r) =>
            M.intl.formatToPlainString(M.t["1z3c6e"], {
                percent: e,
                progress: t,
                total: n,
                timeRemaining: r,
            }),
        [S.pJ.MINUTES]: (e, t, n, r) =>
            M.intl.formatToPlainString(M.t.PCX506, {
                percent: e,
                progress: t,
                total: n,
                timeRemaining: r,
            }),
        [S.pJ.HOURS]: (e, t, n, r) =>
            M.intl.formatToPlainString(M.t["3VG9s1"], {
                percent: e,
                progress: t,
                total: n,
                timeRemaining: r,
            }),
    },
    [D.WTw.UPDATING]: {
        [S.pJ.NONE]: (e, t, n, r) =>
            M.intl.formatToPlainString(M.t.JsqXXL, {
                percent: e,
                progress: t,
                total: n,
            }),
        [S.pJ.SECONDS]: (e, t, n, r) =>
            M.intl.formatToPlainString(M.t["3BvVec"], {
                percent: e,
                progress: t,
                total: n,
                timeRemaining: r,
            }),
        [S.pJ.MINUTES]: (e, t, n, r) =>
            M.intl.formatToPlainString(M.t["rwULn+"], {
                percent: e,
                progress: t,
                total: n,
                timeRemaining: r,
            }),
        [S.pJ.HOURS]: (e, t, n, r) =>
            M.intl.formatToPlainString(M.t.adcitP, {
                percent: e,
                progress: t,
                total: n,
                timeRemaining: r,
            }),
    },
    [D.WTw.REPAIRING]: {
        [S.pJ.NONE]: (e, t, n, r) =>
            M.intl.formatToPlainString(M.t.JfJt9d, {
                percent: e,
                progress: t,
                total: n,
            }),
        [S.pJ.SECONDS]: (e, t, n, r) =>
            M.intl.formatToPlainString(M.t["1z3c6e"], {
                percent: e,
                progress: t,
                total: n,
                timeRemaining: r,
            }),
        [S.pJ.MINUTES]: (e, t, n, r) =>
            M.intl.formatToPlainString(M.t.PCX506, {
                percent: e,
                progress: t,
                total: n,
                timeRemaining: r,
            }),
        [S.pJ.HOURS]: (e, t, n, r) =>
            M.intl.formatToPlainString(M.t["3VG9s1"], {
                percent: e,
                progress: t,
                total: n,
                timeRemaining: r,
            }),
    },
};
function Y(e, t, n, r, i) {
    let l = F[t],
        a = null != l ? Object.keys(l) : [],
        { unit: s, time: o } = (0, S.$l)(null != e ? e / 60 : null, a);
    if (null != l && null != s) {
        let e = l[s];
        return null != e ? e(n, r, i, o) : null;
    }
    return null;
}
function K(e) {
    let { type: t, stage: n, percent: r, progress: i, total: l, secondsRemaining: a } = e,
        s = H(l, n),
        o = H(i, n);
    switch (n) {
        case D.OQC.QUEUED:
            if (0 === i) return M.intl.string(M.t.RpfBqd);
            return M.intl.formatToPlainString(M.t.uNjCXZ, {
                percent: r,
                progress: o,
                total: s,
            });
        case D.OQC.PLANNING:
            return M.intl.formatToPlainString(M.t.sfuCUb, { percent: r });
        case D.OQC.ALLOCATING_DISK:
            return M.intl.formatToPlainString(M.t.XigoJ9, { percent: r });
        case D.OQC.PATCHING:
            return Y(a, t, r, o, s);
        case D.OQC.FINALIZING:
            return M.intl.formatToPlainString(M.t["6PHDUN"], { percent: r });
        case D.OQC.PAUSING:
            return M.intl.formatToPlainString(M.t.vjxhWo, {
                percent: r,
                progress: o,
                total: s,
            });
        case D.OQC.VERIFYING:
            return M.intl.formatToPlainString(M.t.bbilvq, {
                percent: r,
                progress: o,
                total: s,
            });
        case D.OQC.POST_INSTALL_SCRIPTS:
            return M.intl.formatToPlainString(M.t.c5vRUo, {
                percent: r,
                progress: o,
                total: s,
            });
        case D.OQC.REPAIRING:
            if (t === D.WTw.REPAIRING) return Y(a, t, r, o, s);
            return M.intl.formatToPlainString(M.t.OCzETT, {
                percent: r,
                progress: o,
                total: s,
            });
    }
    throw Error("Invalid Dispatch stage");
}
class z extends i.PureComponent {
    get isFocused() {
        let { cellProps: e } = this.props;
        return null != e && e.isFocused;
    }
    renderBody(e) {
        let { percent: t, foregroundColor: n, foregroundGradientColor: i, message: l } = e;
        return (0, r.jsxs)(y.A, {
            direction: y.A.Direction.VERTICAL,
            children: [
                (0, r.jsx)(h.kej, {
                    percent: t,
                    size: h.kej.Sizes.SMALL,
                    foregroundColor: n,
                    foregroundGradientColor: null != i ? [i[0], i[1]] : void 0,
                    animate: this.isFocused,
                }),
                (0, r.jsx)("div", {
                    className: k.NO,
                    children: null != l ? l : "",
                }),
            ],
        });
    }
    renderStackedProgress(e) {
        let { percents: t, message: n } = e;
        return (0, r.jsxs)(y.A, {
            direction: y.A.Direction.VERTICAL,
            children: [
                (0, r.jsx)(h.LvI, {
                    percents: t,
                    size: h.LvI.Sizes.SMALL,
                    foregroundColors: V,
                    animate: this.isFocused,
                }),
                (0, r.jsx)("div", {
                    className: k.NO,
                    children: null != n ? n : "",
                }),
            ],
        });
    }
    renderFinished() {
        let { item: e } = this.props;
        return this.renderBody({
            message: M.intl.format(M.t.z1oxGO, { remove: () => m.Vt(e.applicationId, e.branchId) }),
            foregroundColor: (0, p.qB)(e.theme)
                ? u.A.unsafe_rawColors.PRIMARY_300.css
                : u.A.unsafe_rawColors.PRIMARY_500.css,
            percent: 100,
        });
    }
    renderQueued() {
        let e,
            t,
            {
                item: { state: n, theme: r },
            } = this.props;
        if (null != n) {
            let { progress: r, total: i, stage: l } = n;
            if (null != r && null != i) {
                let n = H(i, l),
                    a = H(r, l),
                    s = Math.floor((t = w.uA(r, i)));
                e =
                    l === D.OQC.PAUSING
                        ? M.intl.formatToPlainString(M.t.vjxhWo, {
                              percent: s,
                              progress: a,
                              total: n,
                          })
                        : M.intl.formatToPlainString(M.t.voT3Bi, {
                              percent: s,
                              progress: a,
                              total: n,
                          });
            }
        }
        return (
            (null == t || null == e) && ((t = 0), (e = M.intl.string(M.t["qS+iKY"]))),
            this.renderBody({
                percent: t,
                foregroundColor: (0, p.qB)(r)
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
        let { progress: n, total: r } = e;
        if (null == n || null == r) return null;
        let i = w.uA(n, r),
            l = Math.floor(i),
            a =
                0 === n && 1 === r
                    ? M.intl.string(M.t["+pfsFX"])
                    : M.intl.formatToPlainString(M.t["+feX8S"], {
                          percent: l,
                          progress: (0, P.Xq)(n),
                          total: (0, P.Xq)(r),
                      });
        return this.renderBody({
            message: a,
            foregroundColor: (0, p.qB)(t) ? u.A.unsafe_rawColors.PRIMARY_300.css : u.A.unsafe_rawColors.PRIMARY_500.css,
            percent: i,
        });
    }
    renderProgressPatching() {
        return (0, r.jsx)(L.A, {
            getHistoricalTotalBytes: T.A.getHistoricalTotalBytesWritten,
            updateInterval: 5000,
            children: this.renderProgressPatchingBody,
        });
    }
    renderProgressDefault() {
        let { state: e } = this.props.item;
        if (null == e) return null;
        let { total: t, progress: n, stage: r, type: i } = e;
        if (null == t || null == n || null == r) return null;
        let l = w.uA(n, t),
            a = Math.floor(l);
        return this.renderBody({
            percent: l,
            message: K({
                type: i,
                stage: r,
                percent: a,
                progress: n,
                total: t,
            }),
            foregroundColor: u.A.unsafe_rawColors.BLUE_345.css,
        });
    }
    renderProgress() {
        let { state: e } = this.props.item;
        switch (null != e ? e.stage : null) {
            case D.OQC.PATCHING:
            case D.OQC.REPAIRING:
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
            (e.state.type === D.WTw.UPDATING || e.state.type === D.WTw.REPAIRING || e.state.type === D.WTw.INSTALLING)
        )
            if (null != t && t.paused) return this.renderPaused();
            else return this.renderProgress();
        return null;
    }
    constructor(...e) {
        super(...e),
            U(this, "renderProgressPatchingBody", (e, t) => {
                let {
                    item: { state: n },
                } = this.props;
                if (null == n) return null;
                let { stage: r, progress: i, total: l, type: a, readerProgress: s } = n;
                if (null == i || null == l || null == r) return null;
                let o = w.uA(i, l),
                    c = w.uA(null != s ? s : 0, l),
                    u = (e[e.length - 1] / t) * 1000,
                    d = l - i,
                    p = K({
                        type: a,
                        stage: r,
                        percent: Math.floor(o),
                        progress: i,
                        total: l,
                        secondsRemaining: 0 !== u ? Math.max(1, d / u) : null,
                    });
                return this.renderStackedProgress({
                    percents: [o, c],
                    message: p,
                });
            });
    }
}
let W = () =>
        (0, r.jsx)(B, {
            icon: h.udU,
            tooltip: M.intl.string(M.t.YGm6SZ),
            onClick: () => m.U(),
        }),
    q = () =>
        (0, r.jsx)(B, {
            icon: h.E$n,
            tooltip: M.intl.string(M.t.TVAd5J),
            onClick: () => m.v7(),
        }),
    Q = (e) => {
        let { item: t } = e;
        return (0, r.jsx)(B, {
            icon: h.z$m,
            tooltip: M.intl.string(M.t["Eqb+LN"]),
            onClick: () => m.BO(t.applicationId, t.branchId),
        });
    },
    X = (e) => {
        let { item: t } = e;
        return (0, r.jsx)(B, {
            icon: h.PGe,
            tooltip: M.intl.string(M.t["0lFmC9"]),
            onClick: () => m.ZT(t.applicationId, t.branchId),
        });
    },
    Z = [
        {
            key: "name",
            cellClassName: k.UQ,
            render: (e) =>
                (0, r.jsxs)(y.A, {
                    align: y.A.Align.CENTER,
                    children: [
                        (0, r.jsx)(v.A, {
                            game: e.application,
                            className: k.__invalid_gameIcon,
                            size: v.M.SMALL,
                        }),
                        (0, r.jsx)("div", {
                            className: k.TF,
                            children: e.application.name,
                        }),
                    ],
                }),
        },
        {
            key: "progress",
            cellClassName: k.Ay,
            headerCellClassName: k.VD,
            bodyCellClassName: k.so,
            render: (e, t) =>
                (0, r.jsx)(z, {
                    item: e,
                    cellProps: t,
                }),
        },
        {
            key: "actions",
            cellClassName: k.AT,
            render(e, t) {
                let n, i;
                return (
                    e.finished
                        ? (n =
                              null != e.libraryApplication
                                  ? (0, r.jsx)(b.A, {
                                        libraryApplication: e.libraryApplication,
                                        size: "sm",
                                        source: D.ThZ.APPLICATION_LIBRARY_UPDATES,
                                    })
                                  : null)
                        : null != e.state
                          ? e.state.type !== D.WTw.UP_TO_DATE &&
                            ((n =
                                e.index > 0
                                    ? (0, r.jsx)(Q, { item: e })
                                    : null != t && t.paused
                                      ? (0, r.jsx)(W, {})
                                      : (0, r.jsx)(q, { item: e })),
                            (i = (0, r.jsx)(X, { item: e })))
                          : (i = (0, r.jsx)(X, { item: e })),
                    (0, r.jsxs)(y.A, {
                        justify: y.A.Justify.END,
                        children: [n, i],
                    })
                );
            },
        },
    ];
class J extends i.PureComponent {
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
                A.h.wait(() => {
                    m.Vt(e.applicationId, e.branchId);
                });
        }),
            window.removeEventListener("resize", this.throttledUpdateHeight),
            (this.isUnmounted = !0);
    }
    render() {
        let { applications: e, paused: t, isFocused: i, theme: l, analyticsContext: s } = this.props;
        return 0 === e.length
            ? null
            : (0, r.jsxs)("div", {
                  className: k.xP,
                  children: [
                      (0, r.jsxs)("div", {
                          className: k.U1,
                          children: [
                              (0, r.jsx)(R.A, {
                                  className: a()(k.e4, k.Eg),
                                  title: M.intl.string(M.t.ytoXKr),
                                  getHistoricalTotalBytes: T.A.getHistoricalTotalBytesDownloaded,
                                  color: u.A.unsafe_rawColors.GREEN_360.resolve({ saturation: 1 }).hex(),
                                  animate: i,
                              }),
                              (0, r.jsx)(R.A, {
                                  className: a()(k.e4, k.pn),
                                  title: M.intl.string(M.t.SjohhI),
                                  getHistoricalTotalBytes: T.A.getHistoricalTotalBytesWritten,
                                  color: u.A.unsafe_rawColors.BLUE_345.resolve({ saturation: 1 }).hex(),
                                  animate: i,
                              }),
                          ],
                      }),
                      (0, r.jsx)(I.A, {
                          hasHeader: !1,
                          columns: Z,
                          data: e,
                          className: k.tp,
                          rowClassName: k.nM,
                          rowComponent: G,
                          cellProps: {
                              paused: t,
                              isFocused: i,
                              theme: l,
                          },
                          rowProps: {
                              onContextMenu: (e, t) => {
                                  g.L3(e, async () => {
                                      let { default: e } = await n.e("881").then(n.bind(n, 163368));
                                      return (n) => {
                                          var i, l;
                                          return (0, r.jsx)(
                                              e,
                                              ((i = (function (e) {
                                                  for (var t = 1; t < arguments.length; t++) {
                                                      var n = null != arguments[t] ? arguments[t] : {},
                                                          r = Object.keys(n);
                                                      "function" == typeof Object.getOwnPropertySymbols &&
                                                          (r = r.concat(
                                                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                  return Object.getOwnPropertyDescriptor(n, e)
                                                                      .enumerable;
                                                              }),
                                                          )),
                                                          r.forEach(function (t) {
                                                              U(e, t, n[t]);
                                                          });
                                                  }
                                                  return e;
                                              })({}, n)),
                                              (l = l =
                                                  {
                                                      applicationId: t.applicationId,
                                                      branchId: t.branchId,
                                                      analyticsContext: s,
                                                  }),
                                              Object.getOwnPropertyDescriptors
                                                  ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                                                  : (function (e, t) {
                                                        var n = Object.keys(e);
                                                        if (Object.getOwnPropertySymbols) {
                                                            var r = Object.getOwnPropertySymbols(e);
                                                            n.push.apply(n, r);
                                                        }
                                                        return n;
                                                    })(Object(l)).forEach(function (e) {
                                                        Object.defineProperty(
                                                            i,
                                                            e,
                                                            Object.getOwnPropertyDescriptor(l, e),
                                                        );
                                                    }),
                                              i),
                                          );
                                      };
                                  });
                              },
                          },
                          bodyCellClassName: k.Hn,
                      }),
                  ],
              });
    }
    constructor(...e) {
        super(...e),
            U(this, "isUnmounted", !1),
            U(this, "isTallerThanHalfViewport", !1),
            U(
                this,
                "throttledUpdateHeight",
                o().throttle(() => {
                    if (this.isUnmounted) return;
                    let { height: e, onHeightTallerThanHalfViewportChange: t } = this.props,
                        n = e > window.innerHeight / 2;
                    this.isTallerThanHalfViewport !== n && ((this.isTallerThanHalfViewport = n), t(n));
                }, 1000),
            );
    }
}
function $(e, t, n, r) {
    return e.reduce((e, i, l) => {
        let { applicationId: a, branchId: s } = i,
            o = n.getApplication(a),
            c = r.getState(a, s);
        return (
            null != o &&
                e.push({
                    key: "".concat(a, ":").concat(s),
                    applicationId: a,
                    branchId: s,
                    state: c,
                    application: o,
                    libraryApplication: N.A.getLibraryApplication(a, s),
                    finished: t,
                    index: l,
                }),
            e
        );
    }, []);
}
let ee = (0, E.A)(
    c.Ay.connectStores([O.A, T.A, j.A, C.A, x.A], () => ({
        applications: [...$(j.A.activeItems, !1, O.A, T.A), ...$(j.A.finishedItems, !0, O.A, T.A)],
        paused: j.A.paused,
        isFocused: x.A.isFocused(),
        theme: C.A.theme,
    }))((0, _.A)(J)),
);
