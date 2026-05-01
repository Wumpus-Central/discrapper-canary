i.d(n, { A: () => D });
var e,
    s = i(627968),
    r = i(64700),
    l = i(821609),
    a = i(17928),
    o = i(661531),
    d = i(990078),
    u = i(5373),
    p = i(59636),
    c = i(212245),
    h = i(626584),
    g = i(976860),
    A = i(568004),
    b = i(227841),
    y = i(465797),
    x = i(340829),
    L = i(966846),
    f = i(674378),
    N = i(723702),
    _ = i(541830),
    I = i(113673),
    P = i(598429),
    S = i(652215),
    C = i(375708),
    T = i(170677),
    w =
        (((e = w || {}).PLAY = "play"),
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
class B extends r.Component {
    static defaultProps = { fullWidth: !1, size: "md", hideProgress: !1, tooltipPosition: "top" };
    static ButtonStates = w;
    get analyticsLocation() {
        return { ...this.props.analyticsContext.location, object: S.ZSU.BUTTON_CTA };
    }
    _uninstallStringIndex = null;
    getText(t) {
        switch (("uninstalling" !== t && (this._uninstallStringIndex = null), t)) {
            case "install":
            case "unsupported_os":
                return C.intl.string(C.t.nL0WvC);
            case "update":
                return C.intl.string(C.t.tkhwp9);
            case "paused":
                return C.intl.string(C.t["6EKrh4"]);
            case "locate":
                return C.intl.string(C.t["nIj+a0"]);
            case "uninstalling":
                let n = [
                    C.intl.string(C.t.r9wmKn),
                    C.intl.string(C.t["6CpimS"]),
                    C.intl.string(C.t.ysbNDc),
                    C.intl.string(C.t["TLnXx/"]),
                    C.intl.string(C.t.Qi8mne),
                    C.intl.string(C.t.yvMu3S),
                    C.intl.string(C.t["PnNUZ/"]),
                    C.intl.string(C.t.hU2TEJ),
                    C.intl.string(C.t["YyY51/"]),
                    C.intl.string(C.t.PbHJb3),
                ];
                return (
                    null == this._uninstallStringIndex &&
                        (this._uninstallStringIndex = Math.floor(Math.random() * n.length)),
                    n[this._uninstallStringIndex]
                );
            case "queued":
                return C.intl.string(C.t.TiJg5l);
            case "downloading":
                return C.intl.string(C.t.Tdhepf);
            case "preorder_wait":
                return C.intl.string(C.t.xiXyPc);
            case "add_to_library":
                return C.intl.string(C.t.r3fwuQ);
            default:
                throw Error("Unexpected button state");
        }
    }
    handleAddToLibrary = async () => {
        try {
            let { libraryApplication: t } = this.props;
            await p.V(t.id, t.branchId, t.getFlags() & ~S.hM6.HIDDEN), (0, g.pX)(S.BVt.APPLICATION_LIBRARY);
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
              : (0, N.isWeb)()
                ? "play"
                : "unsupported_os";
    }
    renderPlayButton() {
        let {
            libraryApplication: t,
            fullWidth: n,
            size: i,
            playButtonVariant: e = "secondary",
            disabledVariant: r,
            onDropdownOpen: l,
            onDropdownClose: a,
            analyticsListSort: o,
            analyticsListIndex: d,
        } = this.props;
        return (0, s.jsx)(P.A, {
            applicationId: t.id,
            libraryApplication: t,
            fullWidth: n,
            size: i,
            variant: e,
            disabledVariant: r,
            onDropdownOpen: l,
            onDropdownClose: a,
            analyticsListSort: o,
            analyticsListIndex: d,
        });
    }
    renderDisabledButton(t, n) {
        let { fullWidth: i, size: e, disabledVariant: r = "secondary", tooltipPosition: a } = this.props,
            o = this.renderProgressBar();
        return (0, s.jsxs)("div", {
            className: null != o ? T.c : void 0,
            children: [
                (0, s.jsxs)("div", {
                    className: T.Yr,
                    children: [
                        (0, s.jsx)(l.$, { text: this.getText(t), fullWidth: i, size: e, variant: r, disabled: !0 }),
                        (0, s.jsx)(d.m, { text: n, position: a, children: (0, s.jsx)("div", { className: T.p5 }) }),
                    ],
                }),
                o,
            ],
        });
    }
    renderProgressBar() {
        let { hideProgress: t, dispatchState: n } = this.props;
        if (t) return null;
        let i = f.z0(n);
        if (null == i) return null;
        let e = i.type === S.WTw.UNINSTALLING ? u.i.INDETERMINATE : f.uA(Number(i.progress), Number(i.total));
        return (0, s.jsx)(u.i, {
            percent: e,
            size: u.i.Sizes.XSMALL,
            foregroundColor: i.paused ? o.A.unsafe_rawColors.PRIMARY_500.css : o.A.unsafe_rawColors.GREEN_360.css,
            backgroundColor: o.A.unsafe_rawColors.TRANSPARENT.css,
            className: T.qB,
        });
    }
    renderActionButton(t, n) {
        let { fullWidth: i, size: e, actionButtonVariant: r = "primary", isCloudSyncing: a } = this.props,
            o = this.renderProgressBar();
        return (0, s.jsxs)("div", {
            className: null != o ? T.c : void 0,
            children: [
                (0, s.jsx)(l.$, {
                    text: this.getText(t),
                    fullWidth: i,
                    size: e,
                    variant: r,
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
                null != (t = _.zJ(n.sku)) ? C.intl.formatToPlainString(C.t.Aqe2ZC, { date: t }) : null,
            );
        }
        if ("unsupported_os" === i)
            return this.renderDisabledButton(
                i,
                C.intl.formatToPlainString(C.t.LBm0A4, { operatingSystem: C.intl.string(C.t["0/xHFO"]) }),
            );
        if ("install" === i && t) return this.renderDisabledButton(i, C.intl.string(C.t.QUSQIA));
        let e = this.onClickHandlers[i];
        return null == e ? this.renderDisabledButton(i) : this.renderActionButton(i, e);
    }
}
function D(t) {
    let { libraryApplication: n } = t,
        i = (0, c.p)(),
        [e, r] = (0, a.yK)([x.A, L.A], () => [(0, b.F)(n, x.A, L.A), x.A.getState(n.id, n.branchId)], [n]),
        l = (0, a.bG)([y.A], () => y.A.isSyncing(n.id, n.branchId), [n]),
        o = (0, a.bG)([A.A], () => A.A.hasNoBuild(n.id, n.branchId), [n]);
    return (0, s.jsx)(B, {
        ...t,
        analyticsContext: i,
        actionState: e,
        dispatchState: r,
        isCloudSyncing: l,
        hasNoBuild: o,
    });
}
