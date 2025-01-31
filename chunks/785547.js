n.d(t, { Z: () => L }), n(411104), n(47120);
var i,
    l,
    a = n(200651),
    r = n(192379),
    s = n(442837),
    o = n(692547),
    c = n(481060),
    d = n(58642),
    u = n(2052),
    m = n(710845),
    h = n(703656),
    _ = n(173747),
    p = n(7956),
    g = n(293245),
    f = n(417363),
    x = n(941128),
    E = n(780570),
    C = n(358085),
    v = n(814225),
    I = n(346329),
    N = n(701560),
    S = n(981631),
    T = n(388032),
    b = n(416573);
function A(e, t, n) {
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
var j = (((l = j || {}).PLAY = 'play'), (l.NOW_PLAYING = 'now_playing'), (l.INSTALL = 'install'), (l.UPDATE = 'update'), (l.PAUSED = 'paused'), (l.LOCATE = 'locate'), (l.UNINSTALLING = 'uninstalling'), (l.QUEUED = 'queued'), (l.DOWNLOADING = 'downloading'), (l.UNSUPPORTED_OS = 'unsupported_os'), (l.ADD_TO_LIBRARY = 'add_to_library'), (l.PREORDER_WAIT = 'preorder_wait'), l);
let y = Object.freeze({
        [S.apO.PLAY]: 'play',
        [S.apO.INSTALL]: 'install',
        [S.apO.UPDATE]: 'update',
        [S.apO.PAUSE]: 'downloading',
        [S.apO.MOVE_UP]: 'queued',
        [S.apO.RESUME]: 'paused'
    }),
    Z = () => [T.intl.string(T.t.r9wmKi), T.intl.string(T.t['6CpimZ']), T.intl.string(T.t.ysbNDQ), T.intl.string(T.t.TLnXx8), T.intl.string(T.t.Qi8mnZ), T.intl.string(T.t.yvMu3d), T.intl.string(T.t.PnNUZ2), T.intl.string(T.t.hU2TEB), T.intl.string(T.t.YyY519), T.intl.string(T.t.PbHJb2)];
class R extends (i = r.Component) {
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
                return T.intl.string(T.t.nL0WvL);
            case 'update':
                return T.intl.string(T.t.tkhwp6);
            case 'paused':
                return T.intl.string(T.t['6EKrh4']);
            case 'locate':
                return T.intl.string(T.t['nIj+a2']);
            case 'uninstalling':
                let t = Z();
                return null == this._uninstallStringIndex && (this._uninstallStringIndex = Math.floor(Math.random() * t.length)), t[this._uninstallStringIndex];
            case 'queued':
                return T.intl.string(T.t.TiJg5u);
            case 'downloading':
                return T.intl.string(T.t.Tdhepa);
            case 'preorder_wait':
                return T.intl.string(T.t.xiXyPT);
            case 'add_to_library':
                return T.intl.string(T.t.r3fwub);
            default:
                throw Error('Unexpected button state');
        }
    }
    getButtonState() {
        let { libraryApplication: e, dispatchState: t, actionState: n } = this.props;
        if (e.isHidden()) return 'add_to_library';
        if (e.isPreorder()) return 'preorder_wait';
        let i = null != n ? y[n] : null;
        return null != i ? i : null != t && t.type === S.vxO.UNINSTALLING ? 'uninstalling' : (0, C.isWeb)() ? 'play' : 'unsupported_os';
    }
    renderPlayButton() {
        let { libraryApplication: e, fullWidth: t, size: n, color: i, customDisabledColor: l, isPlayShiny: r, onDropdownOpen: s, onDropdownClose: o, analyticsListSort: c, analyticsListIndex: d } = this.props;
        return (0, a.jsx)(N.Z, {
            applicationId: e.id,
            libraryApplication: e,
            fullWidth: t,
            size: n,
            color: i,
            customDisabledColor: l,
            isShiny: r,
            onDropdownOpen: s,
            onDropdownClose: o,
            analyticsListSort: c,
            analyticsListIndex: d
        });
    }
    renderDisabledButton(e, t) {
        let { className: n, fullWidth: i, size: l, customDisabledColor: r, tooltipPosition: s } = this.props;
        return (0, a.jsxs)('div', {
            className: b.disabledButtonWrapper,
            children: [
                (0, a.jsxs)(c.zxk, {
                    className: n,
                    fullWidth: i,
                    size: l,
                    color: null != r ? r : b.disabledButtonColor,
                    disabled: !0,
                    children: [this.getText(e), this.renderProgressBar()]
                }),
                (0, a.jsx)(c.ua7, {
                    text: t,
                    position: s,
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
        let n = E.KJ(t);
        if (null == n) return null;
        let i = n.type === S.vxO.UNINSTALLING ? c.Exd.INDETERMINATE : E.xI(Number(n.progress), Number(n.total));
        return (0, a.jsx)(c.Exd, {
            percent: i,
            size: c.Exd.Sizes.XSMALL,
            foregroundColor: n.paused ? o.Z.unsafe_rawColors.PRIMARY_500.css : o.Z.unsafe_rawColors.GREEN_360.css,
            backgroundColor: o.Z.unsafe_rawColors.TRANSPARENT.css,
            className: b.progress
        });
    }
    renderActionButton(e, t) {
        let { className: n, fullWidth: i, size: l, color: r, isCloudSyncing: s } = this.props;
        return (0, a.jsxs)(c.zxk, {
            className: n,
            fullWidth: i,
            size: l,
            color: null != r ? r : c.zxk.Colors.GREEN,
            submitting: 'uninstalling' === e || s,
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
                    let t = v.en(e.sku);
                    return null != t ? T.intl.formatToPlainString(T.t.Aqe2ZG, { date: t }) : null;
                })(t)
            );
        if ('unsupported_os' === n) return this.renderDisabledButton(n, T.intl.formatToPlainString(T.t.LBm0Aw, { operatingSystem: T.intl.string(T.t['0/xHFB']) }));
        if ('install' === n && e) return this.renderDisabledButton(n, T.intl.string(T.t.QUSQIC));
        let i = this.onClickHandlers[n];
        return null == i ? this.renderDisabledButton(n) : this.renderActionButton(n, i);
    }
    constructor(...e) {
        super(...e),
            A(this, '_uninstallStringIndex', null),
            A(this, 'handleAddToLibrary', async () => {
                try {
                    let { libraryApplication: e } = this.props;
                    await d.h(e.id, e.branchId, e.getFlags() & ~S.eHb.HIDDEN), (0, h.uL)(S.Z5c.APPLICATION_LIBRARY);
                } catch (e) {
                    new m.Z('LibraryApplicationButton').error(e);
                }
            }),
            A(this, 'handleInstall', () => {
                let { libraryApplication: e, source: t } = this.props;
                I.installApplication(e.id, e.branchId, t);
            }),
            A(this, 'handleUpdate', () => {
                let { libraryApplication: e } = this.props;
                I.updateApplication(e.id, e.branchId);
            }),
            A(this, 'onClickHandlers', {
                add_to_library: this.handleAddToLibrary,
                install: this.handleInstall,
                update: this.handleUpdate
            }),
            A(this, 'handleClick', (e, t) => {
                let { onClick: n } = this.props;
                null == n || n(e), t(e);
            });
    }
}
function L(e) {
    let { libraryApplication: t } = e,
        n = (0, u.O)(),
        [i, l] = (0, s.Wu)([f.Z, x.Z], () => [(0, p.i)(t, f.Z, x.Z), f.Z.getState(t.id, t.branchId)], [t]),
        r = (0, s.e7)([g.Z], () => g.Z.isSyncing(t.id, t.branchId), [t]),
        o = (0, s.e7)([_.Z], () => _.Z.hasNoBuild(t.id, t.branchId), [t]);
    return (0, a.jsx)(R, {
        ...e,
        analyticsContext: n,
        actionState: i,
        dispatchState: l,
        isCloudSyncing: r,
        hasNoBuild: o
    });
}
A(R, 'defaultProps', {
    fullWidth: !1,
    size: c.zxk.Sizes.LARGE,
    hideProgress: !1,
    isPlayShiny: !1,
    tooltipPosition: 'top'
}),
    A(R, 'ButtonStates', j);
