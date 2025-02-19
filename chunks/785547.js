n.d(t, { Z: () => k }), n(411104), n(47120);
var r,
    i,
    a = n(200651),
    o = n(192379),
    l = n(442837),
    s = n(692547),
    c = n(481060),
    d = n(58642),
    u = n(2052),
    p = n(710845),
    m = n(703656),
    f = n(173747),
    h = n(7956),
    g = n(293245),
    _ = n(417363),
    b = n(941128),
    v = n(780570),
    y = n(358085),
    x = n(814225),
    O = n(346329),
    E = n(701560),
    j = n(981631),
    N = n(388032),
    C = n(493118);
function I(e, t, n) {
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
function S(e) {
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
                I(e, t, n[t]);
            });
    }
    return e;
}
function P(e, t) {
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
var T = (((i = T || {}).PLAY = 'play'), (i.NOW_PLAYING = 'now_playing'), (i.INSTALL = 'install'), (i.UPDATE = 'update'), (i.PAUSED = 'paused'), (i.LOCATE = 'locate'), (i.UNINSTALLING = 'uninstalling'), (i.QUEUED = 'queued'), (i.DOWNLOADING = 'downloading'), (i.UNSUPPORTED_OS = 'unsupported_os'), (i.ADD_TO_LIBRARY = 'add_to_library'), (i.PREORDER_WAIT = 'preorder_wait'), i);
let A = Object.freeze({
        [j.apO.PLAY]: 'play',
        [j.apO.INSTALL]: 'install',
        [j.apO.UPDATE]: 'update',
        [j.apO.PAUSE]: 'downloading',
        [j.apO.MOVE_UP]: 'queued',
        [j.apO.RESUME]: 'paused'
    }),
    w = () => [N.NW.string(N.t.r9wmKi), N.NW.string(N.t['6CpimZ']), N.NW.string(N.t.ysbNDQ), N.NW.string(N.t.TLnXx8), N.NW.string(N.t.Qi8mnZ), N.NW.string(N.t.yvMu3d), N.NW.string(N.t.PnNUZ2), N.NW.string(N.t.hU2TEB), N.NW.string(N.t.YyY519), N.NW.string(N.t.PbHJb2)];
class Z extends (r = o.Component) {
    get analyticsLocation() {
        return P(S({}, this.props.analyticsContext.location), { object: j.qAy.BUTTON_CTA });
    }
    getText(e) {
        switch (('uninstalling' !== e && (this._uninstallStringIndex = null), e)) {
            case 'install':
            case 'unsupported_os':
                return N.NW.string(N.t.nL0WvL);
            case 'update':
                return N.NW.string(N.t.tkhwp6);
            case 'paused':
                return N.NW.string(N.t['6EKrh4']);
            case 'locate':
                return N.NW.string(N.t['nIj+a2']);
            case 'uninstalling':
                let t = w();
                return null == this._uninstallStringIndex && (this._uninstallStringIndex = Math.floor(Math.random() * t.length)), t[this._uninstallStringIndex];
            case 'queued':
                return N.NW.string(N.t.TiJg5u);
            case 'downloading':
                return N.NW.string(N.t.Tdhepa);
            case 'preorder_wait':
                return N.NW.string(N.t.xiXyPT);
            case 'add_to_library':
                return N.NW.string(N.t.r3fwub);
            default:
                throw Error('Unexpected button state');
        }
    }
    getButtonState() {
        let { libraryApplication: e, dispatchState: t, actionState: n } = this.props;
        if (e.isHidden()) return 'add_to_library';
        if (e.isPreorder()) return 'preorder_wait';
        let r = null != n ? A[n] : null;
        return null != r ? r : null != t && t.type === j.vxO.UNINSTALLING ? 'uninstalling' : (0, y.isWeb)() ? 'play' : 'unsupported_os';
    }
    renderPlayButton() {
        let { libraryApplication: e, fullWidth: t, size: n, color: r, customDisabledColor: i, isPlayShiny: o, onDropdownOpen: l, onDropdownClose: s, analyticsListSort: c, analyticsListIndex: d } = this.props;
        return (0, a.jsx)(E.Z, {
            applicationId: e.id,
            libraryApplication: e,
            fullWidth: t,
            size: n,
            color: r,
            customDisabledColor: i,
            isShiny: o,
            onDropdownOpen: l,
            onDropdownClose: s,
            analyticsListSort: c,
            analyticsListIndex: d
        });
    }
    renderDisabledButton(e, t) {
        let { className: n, fullWidth: r, size: i, customDisabledColor: o, tooltipPosition: l } = this.props;
        return (0, a.jsxs)('div', {
            className: C.disabledButtonWrapper,
            children: [
                (0, a.jsxs)(c.zxk, {
                    className: n,
                    fullWidth: r,
                    size: i,
                    color: null != o ? o : C.disabledButtonColor,
                    disabled: !0,
                    children: [this.getText(e), this.renderProgressBar()]
                }),
                (0, a.jsx)(c.ua7, {
                    text: t,
                    position: l,
                    children: (e) => (0, a.jsx)('div', S({ className: C.disabledButtonOverlay }, e))
                })
            ]
        });
    }
    renderProgressBar() {
        let { hideProgress: e, dispatchState: t } = this.props;
        if (e) return null;
        let n = v.KJ(t);
        if (null == n) return null;
        let r = n.type === j.vxO.UNINSTALLING ? c.Exd.INDETERMINATE : v.xI(Number(n.progress), Number(n.total));
        return (0, a.jsx)(c.Exd, {
            percent: r,
            size: c.Exd.Sizes.XSMALL,
            foregroundColor: n.paused ? s.Z.unsafe_rawColors.PRIMARY_500.css : s.Z.unsafe_rawColors.GREEN_360.css,
            backgroundColor: s.Z.unsafe_rawColors.TRANSPARENT.css,
            className: C.progress
        });
    }
    renderActionButton(e, t) {
        let { className: n, fullWidth: r, size: i, color: o, isCloudSyncing: l } = this.props;
        return (0, a.jsxs)(c.zxk, {
            className: n,
            fullWidth: r,
            size: i,
            color: null != o ? o : c.zxk.Colors.GREEN,
            submitting: 'uninstalling' === e || l,
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
                    let t = x.en(e.sku);
                    return null != t ? N.NW.formatToPlainString(N.t.Aqe2ZG, { date: t }) : null;
                })(t)
            );
        if ('unsupported_os' === n) return this.renderDisabledButton(n, N.NW.formatToPlainString(N.t.LBm0Aw, { operatingSystem: N.NW.string(N.t['0/xHFB']) }));
        if ('install' === n && e) return this.renderDisabledButton(n, N.NW.string(N.t.QUSQIC));
        let r = this.onClickHandlers[n];
        return null == r ? this.renderDisabledButton(n) : this.renderActionButton(n, r);
    }
    constructor(...e) {
        super(...e),
            I(this, '_uninstallStringIndex', null),
            I(this, 'handleAddToLibrary', async () => {
                try {
                    let { libraryApplication: e } = this.props;
                    await d.h(e.id, e.branchId, e.getFlags() & ~j.eHb.HIDDEN), (0, m.uL)(j.Z5c.APPLICATION_LIBRARY);
                } catch (e) {
                    new p.Z('LibraryApplicationButton').error(e);
                }
            }),
            I(this, 'handleInstall', () => {
                let { libraryApplication: e, source: t } = this.props;
                O.installApplication(e.id, e.branchId, t);
            }),
            I(this, 'handleUpdate', () => {
                let { libraryApplication: e } = this.props;
                O.updateApplication(e.id, e.branchId);
            }),
            I(this, 'onClickHandlers', {
                add_to_library: this.handleAddToLibrary,
                install: this.handleInstall,
                update: this.handleUpdate
            }),
            I(this, 'handleClick', (e, t) => {
                let { onClick: n } = this.props;
                null == n || n(e), t(e);
            });
    }
}
function k(e) {
    let { libraryApplication: t } = e,
        n = (0, u.O)(),
        [r, i] = (0, l.Wu)([_.Z, b.Z], () => [(0, h.i)(t, _.Z, b.Z), _.Z.getState(t.id, t.branchId)], [t]),
        o = (0, l.e7)([g.Z], () => g.Z.isSyncing(t.id, t.branchId), [t]),
        s = (0, l.e7)([f.Z], () => f.Z.hasNoBuild(t.id, t.branchId), [t]);
    return (0, a.jsx)(
        Z,
        P(S({}, e), {
            analyticsContext: n,
            actionState: r,
            dispatchState: i,
            isCloudSyncing: o,
            hasNoBuild: s
        })
    );
}
I(Z, 'defaultProps', {
    fullWidth: !1,
    size: c.zxk.Sizes.LARGE,
    hideProgress: !1,
    isPlayShiny: !1,
    tooltipPosition: 'top'
}),
    I(Z, 'ButtonStates', T);
