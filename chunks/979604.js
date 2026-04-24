i.d(n, { A: () => B });
var e,
    l = i(627968),
    s = i(64700),
    r = i(821609),
    a = i(17928),
    o = i(661531),
    d = i(990078),
    u = i(5373),
    c = i(59636),
    p = i(212245),
    h = i(626584),
    g = i(976860),
    A = i(568004),
    b = i(227841),
    y = i(465797),
    x = i(340829),
    f = i(966846),
    N = i(674378),
    L = i(723702),
    _ = i(541830),
    I = i(715671),
    P = i(598429),
    S = i(652215),
    T = i(985018),
    w = i(170677),
    C =
        (((e = C || {}).PLAY = "play"),
        (e.NOW_PLAYING = "now_playing"),
        (e.INSTALL = "install"),
        (e.UPDATE = "update"),
        (e.PAUSED = "paused"),
        (e.LOCATE = "locate"),
        (e.UNINSTALLING = "uninstalling"),
        (e.QUEUED = "queued"),
        (e.DOWNLOADING = "downloading"),
        (e.UNSUPPORTED_OS = "unsupported_os"),
        (e.ADD_TO_LIBRARY = "add_to_library"),
        (e.PREORDER_WAIT = "preorder_wait"),
        e);
let m = Object.freeze({
    [S.Hf6.PLAY]: "play",
    [S.Hf6.INSTALL]: "install",
    [S.Hf6.UPDATE]: "update",
    [S.Hf6.PAUSE]: "downloading",
    [S.Hf6.MOVE_UP]: "queued",
    [S.Hf6.RESUME]: "paused",
});
class v extends s.Component {
    static defaultProps = { fullWidth: !1, size: "md", hideProgress: !1, tooltipPosition: "top" };
    static ButtonStates = C;
    get analyticsLocation() {
        return { ...this.props.analyticsContext.location, object: S.ZSU.BUTTON_CTA };
    }
    _uninstallStringIndex = null;
    getText(t) {
        switch (("uninstalling" !== t && (this._uninstallStringIndex = null), t)) {
            case "install":
            case "unsupported_os":
                return T.intl.string(T.t.nL0WvC);
            case "update":
                return T.intl.string(T.t.tkhwp9);
            case "paused":
                return T.intl.string(T.t["6EKrh4"]);
            case "locate":
                return T.intl.string(T.t["nIj+a0"]);
            case "uninstalling":
                let n = [
                    T.intl.string(T.t.r9wmKn),
                    T.intl.string(T.t["6CpimS"]),
                    T.intl.string(T.t.ysbNDc),
                    T.intl.string(T.t["TLnXx/"]),
                    T.intl.string(T.t.Qi8mne),
                    T.intl.string(T.t.yvMu3S),
                    T.intl.string(T.t["PnNUZ/"]),
                    T.intl.string(T.t.hU2TEJ),
                    T.intl.string(T.t["YyY51/"]),
                    T.intl.string(T.t.PbHJb3),
                ];
                return (
                    null == this._uninstallStringIndex &&
                        (this._uninstallStringIndex = Math.floor(Math.random() * n.length)),
                    n[this._uninstallStringIndex]
                );
            case "queued":
                return T.intl.string(T.t.TiJg5l);
            case "downloading":
                return T.intl.string(T.t.Tdhepf);
            case "preorder_wait":
                return T.intl.string(T.t.xiXyPc);
            case "add_to_library":
                return T.intl.string(T.t.r3fwuQ);
            default:
                throw Error("Unexpected button state");
        }
    }
    handleAddToLibrary = async () => {
        try {
            let { libraryApplication: t } = this.props;
            await c.V(t.id, t.branchId, t.getFlags() & ~S.hM6.HIDDEN), (0, g.pX)(S.BVt.APPLICATION_LIBRARY);
        } catch (t) {
            new h.A("LibraryApplicationButton").error(t);
        }
    };
    handleInstall = () => {
        let { libraryApplication: t, source: n } = this.props;
        I.installApplication(t.id, t.branchId, n);
    };
    handleUpdate = () => {
        let { libraryApplication: t } = this.props;
        I.updateApplication(t.id, t.branchId);
    };
    onClickHandlers = {
        add_to_library: this.handleAddToLibrary,
        install: this.handleInstall,
        update: this.handleUpdate,
    };
    handleClick = (t, n) => {
        let { onClick: i } = this.props;
        i?.(t), n(t);
    };
    getButtonState() {
        let { libraryApplication: t, dispatchState: n, actionState: i } = this.props;
        if (t.isHidden()) return "add_to_library";
        if (t.isPreorder()) return "preorder_wait";
        let e = null != i ? m[i] : null;
        return null != e
            ? e
            : null != n && n.type === S.WTw.UNINSTALLING
              ? "uninstalling"
              : (0, L.isWeb)()
                ? "play"
                : "unsupported_os";
    }
    renderPlayButton() {
        let {
            libraryApplication: t,
            fullWidth: n,
            size: i,
            playButtonVariant: e = "secondary",
            disabledVariant: s,
            onDropdownOpen: r,
            onDropdownClose: a,
            analyticsListSort: o,
            analyticsListIndex: d,
        } = this.props;
        return (0, l.jsx)(P.A, {
            applicationId: t.id,
            libraryApplication: t,
            fullWidth: n,
            size: i,
            variant: e,
            disabledVariant: s,
            onDropdownOpen: r,
            onDropdownClose: a,
            analyticsListSort: o,
            analyticsListIndex: d,
        });
    }
    renderDisabledButton(t, n) {
        let { fullWidth: i, size: e, disabledVariant: s = "secondary", tooltipPosition: a } = this.props,
            o = this.renderProgressBar();
        return (0, l.jsxs)("div", {
            className: null != o ? w.c : void 0,
            children: [
                (0, l.jsxs)("div", {
                    className: w.Yr,
                    children: [
                        (0, l.jsx)(r.$, { text: this.getText(t), fullWidth: i, size: e, variant: s, disabled: !0 }),
                        (0, l.jsx)(d.m, { text: n, position: a, children: (0, l.jsx)("div", { className: w.p5 }) }),
                    ],
                }),
                o,
            ],
        });
    }
    renderProgressBar() {
        let { hideProgress: t, dispatchState: n } = this.props;
        if (t) return null;
        let i = N.z0(n);
        if (null == i) return null;
        let e = i.type === S.WTw.UNINSTALLING ? u.i.INDETERMINATE : N.uA(Number(i.progress), Number(i.total));
        return (0, l.jsx)(u.i, {
            percent: e,
            size: u.i.Sizes.XSMALL,
            foregroundColor: i.paused ? o.A.unsafe_rawColors.PRIMARY_500.css : o.A.unsafe_rawColors.GREEN_360.css,
            backgroundColor: o.A.unsafe_rawColors.TRANSPARENT.css,
            className: w.qB,
        });
    }
    renderActionButton(t, n) {
        let { fullWidth: i, size: e, actionButtonVariant: s = "primary", isCloudSyncing: a } = this.props,
            o = this.renderProgressBar();
        return (0, l.jsxs)("div", {
            className: null != o ? w.c : void 0,
            children: [
                (0, l.jsx)(r.$, {
                    text: this.getText(t),
                    fullWidth: i,
                    size: e,
                    variant: s,
                    loading: "uninstalling" === t || a,
                    onClick: (t) => this.handleClick(t, n),
                }),
                o,
            ],
        });
    }
    render() {
        let { hasNoBuild: t, libraryApplication: n } = this.props,
            i = this.getButtonState();
        if ("play" === i) return this.renderPlayButton();
        if ("preorder_wait" === i) {
            let t;
            return this.renderDisabledButton(
                i,
                null != (t = _.zJ(n.sku)) ? T.intl.formatToPlainString(T.t.Aqe2ZC, { date: t }) : null,
            );
        }
        if ("unsupported_os" === i)
            return this.renderDisabledButton(
                i,
                T.intl.formatToPlainString(T.t.LBm0A4, { operatingSystem: T.intl.string(T.t["0/xHFO"]) }),
            );
        if ("install" === i && t) return this.renderDisabledButton(i, T.intl.string(T.t.QUSQIA));
        let e = this.onClickHandlers[i];
        return null == e ? this.renderDisabledButton(i) : this.renderActionButton(i, e);
    }
}
function B(t) {
    let { libraryApplication: n } = t,
        i = (0, p.p)(),
        [e, s] = (0, a.yK)([x.A, f.A], () => [(0, b.F)(n, x.A, f.A), x.A.getState(n.id, n.branchId)], [n]),
        r = (0, a.bG)([y.A], () => y.A.isSyncing(n.id, n.branchId), [n]),
        o = (0, a.bG)([A.A], () => A.A.hasNoBuild(n.id, n.branchId), [n]);
    return (0, l.jsx)(v, {
        ...t,
        analyticsContext: i,
        actionState: e,
        dispatchState: s,
        isCloudSyncing: r,
        hasNoBuild: o,
    });
}
