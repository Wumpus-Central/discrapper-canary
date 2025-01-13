n.d(t, {
    Z: function () {
        return L;
    }
}),
    n(411104),
    n(47120);
var i,
    r,
    l,
    a = n(200651),
    o = n(192379),
    s = n(442837),
    c = n(692547),
    d = n(481060),
    u = n(58642),
    m = n(2052),
    h = n(710845),
    f = n(703656),
    p = n(173747),
    _ = n(7956),
    g = n(293245),
    E = n(417363),
    C = n(941128),
    I = n(780570),
    x = n(358085),
    N = n(814225),
    v = n(346329),
    T = n(701560),
    S = n(981631),
    A = n(388032),
    b = n(416573);
function j(e, t, n) {
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
((l = i || (i = {})).PLAY = 'play'), (l.NOW_PLAYING = 'now_playing'), (l.INSTALL = 'install'), (l.UPDATE = 'update'), (l.PAUSED = 'paused'), (l.LOCATE = 'locate'), (l.UNINSTALLING = 'uninstalling'), (l.QUEUED = 'queued'), (l.DOWNLOADING = 'downloading'), (l.UNSUPPORTED_OS = 'unsupported_os'), (l.ADD_TO_LIBRARY = 'add_to_library'), (l.PREORDER_WAIT = 'preorder_wait');
let R = Object.freeze({
        [S.apO.PLAY]: 'play',
        [S.apO.INSTALL]: 'install',
        [S.apO.UPDATE]: 'update',
        [S.apO.PAUSE]: 'downloading',
        [S.apO.MOVE_UP]: 'queued',
        [S.apO.RESUME]: 'paused'
    }),
    Z = () => [A.intl.string(A.t.r9wmKi), A.intl.string(A.t['6CpimZ']), A.intl.string(A.t.ysbNDQ), A.intl.string(A.t.TLnXx8), A.intl.string(A.t.Qi8mnZ), A.intl.string(A.t.yvMu3d), A.intl.string(A.t.PnNUZ2), A.intl.string(A.t.hU2TEB), A.intl.string(A.t.YyY519), A.intl.string(A.t.PbHJb2)];
class P extends (r = o.Component) {
    get analyticsLocation() {
        return {
            ...this.props.analyticsContext.location,
            object: S.qAy.BUTTON_CTA
        };
    }
    getText(e) {
        switch (('uninstalling' !== e && (this._uninstallStringIndex = null), e)) {
            case 'install':
            case 'unsupported_os':
                return A.intl.string(A.t.nL0WvL);
            case 'update':
                return A.intl.string(A.t.tkhwp6);
            case 'paused':
                return A.intl.string(A.t['6EKrh4']);
            case 'locate':
                return A.intl.string(A.t['nIj+a2']);
            case 'uninstalling':
                let t = Z();
                return null == this._uninstallStringIndex && (this._uninstallStringIndex = Math.floor(Math.random() * t.length)), t[this._uninstallStringIndex];
            case 'queued':
                return A.intl.string(A.t.TiJg5u);
            case 'downloading':
                return A.intl.string(A.t.Tdhepa);
            case 'preorder_wait':
                return A.intl.string(A.t.xiXyPT);
            case 'add_to_library':
                return A.intl.string(A.t.r3fwub);
            default:
                throw Error('Unexpected button state');
        }
    }
    getButtonState() {
        let { libraryApplication: e, dispatchState: t, actionState: n } = this.props;
        if (e.isHidden()) return 'add_to_library';
        if (e.isPreorder()) return 'preorder_wait';
        let i = null != n ? R[n] : null;
        return null != i ? i : null != t && t.type === S.vxO.UNINSTALLING ? 'uninstalling' : (0, x.isWeb)() ? 'play' : 'unsupported_os';
    }
    renderPlayButton() {
        let { libraryApplication: e, fullWidth: t, size: n, color: i, customDisabledColor: r, isPlayShiny: l, onDropdownOpen: o, onDropdownClose: s, analyticsListSort: c, analyticsListIndex: d } = this.props;
        return (0, a.jsx)(T.Z, {
            applicationId: e.id,
            libraryApplication: e,
            fullWidth: t,
            size: n,
            color: i,
            customDisabledColor: r,
            isShiny: l,
            onDropdownOpen: o,
            onDropdownClose: s,
            analyticsListSort: c,
            analyticsListIndex: d
        });
    }
    renderDisabledButton(e, t) {
        let { className: n, fullWidth: i, size: r, customDisabledColor: l, tooltipPosition: o } = this.props;
        return (0, a.jsxs)('div', {
            className: b.disabledButtonWrapper,
            children: [
                (0, a.jsxs)(d.Button, {
                    className: n,
                    fullWidth: i,
                    size: r,
                    color: null != l ? l : b.disabledButtonColor,
                    disabled: !0,
                    children: [this.getText(e), this.renderProgressBar()]
                }),
                (0, a.jsx)(d.Tooltip, {
                    text: t,
                    position: o,
                    children: (e) =>
                        (0, a.jsx)('div', {
                            className: b.disabledButtonOverlay,
                            ...e
                        })
                })
            ]
        });
    }
    renderProgressBar() {
        let { hideProgress: e, dispatchState: t } = this.props;
        if (e) return null;
        let n = I.KJ(t);
        if (null == n) return null;
        let i = n.type === S.vxO.UNINSTALLING ? d.Progress.INDETERMINATE : I.xI(Number(n.progress), Number(n.total));
        return (0, a.jsx)(d.Progress, {
            percent: i,
            size: d.Progress.Sizes.XSMALL,
            foregroundColor: n.paused ? c.Z.unsafe_rawColors.PRIMARY_500.css : c.Z.unsafe_rawColors.GREEN_360.css,
            backgroundColor: c.Z.unsafe_rawColors.TRANSPARENT.css,
            className: b.progress
        });
    }
    renderActionButton(e, t) {
        let { className: n, fullWidth: i, size: r, color: l, isCloudSyncing: o } = this.props;
        return (0, a.jsxs)(d.Button, {
            className: n,
            fullWidth: i,
            size: r,
            color: null != l ? l : d.Button.Colors.GREEN,
            submitting: 'uninstalling' === e || o,
            onClick: (e) => this.handleClick(e, t),
            children: [this.getText(e), this.renderProgressBar()]
        });
    }
    render() {
        let { hasNoBuild: e, libraryApplication: t } = this.props,
            n = this.getButtonState();
        if ('play' === n) return this.renderPlayButton();
        if ('preorder_wait' === n)
            return this.renderDisabledButton(
                n,
                (function (e) {
                    let t = N.en(e.sku);
                    return null != t ? A.intl.formatToPlainString(A.t.Aqe2ZG, { date: t }) : null;
                })(t)
            );
        if ('unsupported_os' === n) return this.renderDisabledButton(n, A.intl.formatToPlainString(A.t.LBm0Aw, { operatingSystem: A.intl.string(A.t['0/xHFB']) }));
        if ('install' === n && e) return this.renderDisabledButton(n, A.intl.string(A.t.QUSQIC));
        let i = this.onClickHandlers[n];
        return null == i ? this.renderDisabledButton(n) : this.renderActionButton(n, i);
    }
    constructor(...e) {
        super(...e),
            j(this, '_uninstallStringIndex', null),
            j(this, 'handleAddToLibrary', async () => {
                try {
                    let { libraryApplication: e } = this.props;
                    await u.h(e.id, e.branchId, e.getFlags() & ~S.eHb.HIDDEN), (0, f.uL)(S.Z5c.APPLICATION_LIBRARY);
                } catch (e) {
                    new h.Z('LibraryApplicationButton').error(e);
                }
            }),
            j(this, 'handleInstall', () => {
                let { libraryApplication: e, source: t } = this.props;
                v.installApplication(e.id, e.branchId, t);
            }),
            j(this, 'handleUpdate', () => {
                let { libraryApplication: e } = this.props;
                v.updateApplication(e.id, e.branchId);
            }),
            j(this, 'onClickHandlers', {
                add_to_library: this.handleAddToLibrary,
                install: this.handleInstall,
                update: this.handleUpdate
            }),
            j(this, 'handleClick', (e, t) => {
                let { onClick: n } = this.props;
                null == n || n(e), t(e);
            });
    }
}
function L(e) {
    let { libraryApplication: t } = e,
        n = (0, m.O)(),
        [i, r] = (0, s.Wu)([E.Z, C.Z], () => [(0, _.i)(t, E.Z, C.Z), E.Z.getState(t.id, t.branchId)], [t]),
        l = (0, s.e7)([g.Z], () => g.Z.isSyncing(t.id, t.branchId), [t]),
        o = (0, s.e7)([p.Z], () => p.Z.hasNoBuild(t.id, t.branchId), [t]);
    return (0, a.jsx)(P, {
        ...e,
        analyticsContext: n,
        actionState: i,
        dispatchState: r,
        isCloudSyncing: l,
        hasNoBuild: o
    });
}
j(P, 'defaultProps', {
    fullWidth: !1,
    size: d.Button.Sizes.LARGE,
    hideProgress: !1,
    isPlayShiny: !1,
    tooltipPosition: 'top'
}),
    j(P, 'ButtonStates', i);
