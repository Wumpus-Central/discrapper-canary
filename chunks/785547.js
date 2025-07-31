(n.d(t, { Z: () => D }), n(415506), n(388685));
var r,
    i,
    l = n(255367),
    a = n(73800),
    o = n(442837),
    s = n(692547),
    c = n(755721),
    u = n(481060),
    d = n(58642),
    p = n(2052),
    m = n(710845),
    f = n(703656),
    g = n(173747),
    _ = n(7956),
    h = n(293245),
    b = n(417363),
    E = n(941128),
    C = n(780570),
    v = n(358085),
    O = n(814225),
    x = n(346329),
    y = n(701560),
    I = n(981631),
    j = n(388032),
    S = n(207178);
function T(e, t, n) {
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
function N(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                T(e, t, n[t]);
            }));
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
var A = (((i = A || {}).PLAY = 'play'), (i.NOW_PLAYING = 'now_playing'), (i.INSTALL = 'install'), (i.UPDATE = 'update'), (i.PAUSED = 'paused'), (i.LOCATE = 'locate'), (i.UNINSTALLING = 'uninstalling'), (i.QUEUED = 'queued'), (i.DOWNLOADING = 'downloading'), (i.UNSUPPORTED_OS = 'unsupported_os'), (i.ADD_TO_LIBRARY = 'add_to_library'), (i.PREORDER_WAIT = 'preorder_wait'), i);
let w = Object.freeze({
        [I.apO.PLAY]: 'play',
        [I.apO.INSTALL]: 'install',
        [I.apO.UPDATE]: 'update',
        [I.apO.PAUSE]: 'downloading',
        [I.apO.MOVE_UP]: 'queued',
        [I.apO.RESUME]: 'paused'
    }),
    Z = () => [j.intl.string(j.t.r9wmKi), j.intl.string(j.t['6CpimZ']), j.intl.string(j.t.ysbNDQ), j.intl.string(j.t.TLnXx8), j.intl.string(j.t.Qi8mnZ), j.intl.string(j.t.yvMu3d), j.intl.string(j.t.PnNUZ2), j.intl.string(j.t.hU2TEB), j.intl.string(j.t.YyY519), j.intl.string(j.t.PbHJb2)];
class R extends (r = a.Component) {
    get analyticsLocation() {
        return P(N({}, this.props.analyticsContext.location), { object: I.qAy.BUTTON_CTA });
    }
    getText(e) {
        switch (('uninstalling' !== e && (this._uninstallStringIndex = null), e)) {
            case 'install':
            case 'unsupported_os':
                return j.intl.string(j.t.nL0WvL);
            case 'update':
                return j.intl.string(j.t.tkhwp6);
            case 'paused':
                return j.intl.string(j.t['6EKrh4']);
            case 'locate':
                return j.intl.string(j.t['nIj+a2']);
            case 'uninstalling':
                let t = Z();
                return (null == this._uninstallStringIndex && (this._uninstallStringIndex = Math.floor(Math.random() * t.length)), t[this._uninstallStringIndex]);
            case 'queued':
                return j.intl.string(j.t.TiJg5u);
            case 'downloading':
                return j.intl.string(j.t.Tdhepa);
            case 'preorder_wait':
                return j.intl.string(j.t.xiXyPT);
            case 'add_to_library':
                return j.intl.string(j.t.r3fwub);
            default:
                throw Error('Unexpected button state');
        }
    }
    getButtonState() {
        let { libraryApplication: e, dispatchState: t, actionState: n } = this.props;
        if (e.isHidden()) return 'add_to_library';
        if (e.isPreorder()) return 'preorder_wait';
        let r = null != n ? w[n] : null;
        return null != r ? r : null != t && t.type === I.vxO.UNINSTALLING ? 'uninstalling' : (0, v.isWeb)() ? 'play' : 'unsupported_os';
    }
    renderPlayButton() {
        let { libraryApplication: e, fullWidth: t, size: n, color: r, customDisabledColor: i, isPlayShiny: a, onDropdownOpen: o, onDropdownClose: s, analyticsListSort: c, analyticsListIndex: u } = this.props;
        return (0, l.jsx)(y.Z, {
            applicationId: e.id,
            libraryApplication: e,
            fullWidth: t,
            size: n,
            color: r,
            customDisabledColor: i,
            isShiny: a,
            onDropdownOpen: o,
            onDropdownClose: s,
            analyticsListSort: c,
            analyticsListIndex: u
        });
    }
    renderDisabledButton(e, t) {
        let { className: n, fullWidth: r, size: i, customDisabledColor: a, tooltipPosition: o } = this.props;
        return (0, l.jsxs)('div', {
            className: S.disabledButtonWrapper,
            children: [
                (0, l.jsxs)(c.zx, {
                    className: n,
                    fullWidth: r,
                    size: i,
                    color: null != a ? a : S.disabledButtonColor,
                    disabled: !0,
                    children: [this.getText(e), this.renderProgressBar()]
                }),
                (0, l.jsx)(u.ua7, {
                    text: t,
                    position: o,
                    children: (e) => (0, l.jsx)('div', N({ className: S.disabledButtonOverlay }, e))
                })
            ]
        });
    }
    renderProgressBar() {
        let { hideProgress: e, dispatchState: t } = this.props;
        if (e) return null;
        let n = C.KJ(t);
        if (null == n) return null;
        let r = n.type === I.vxO.UNINSTALLING ? u.Exd.INDETERMINATE : C.xI(Number(n.progress), Number(n.total));
        return (0, l.jsx)(u.Exd, {
            percent: r,
            size: u.Exd.Sizes.XSMALL,
            foregroundColor: n.paused ? s.Z.unsafe_rawColors.PRIMARY_500.css : s.Z.unsafe_rawColors.GREEN_360.css,
            backgroundColor: s.Z.unsafe_rawColors.TRANSPARENT.css,
            className: S.progress
        });
    }
    renderActionButton(e, t) {
        let { className: n, fullWidth: r, size: i, color: a, isCloudSyncing: o } = this.props;
        return (0, l.jsxs)(c.zx, {
            className: n,
            fullWidth: r,
            size: i,
            color: null != a ? a : c.zx.Colors.GREEN,
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
                    let t = O.en(e.sku);
                    return null != t ? j.intl.formatToPlainString(j.t.Aqe2ZG, { date: t }) : null;
                })(t)
            );
        if ('unsupported_os' === n) return this.renderDisabledButton(n, j.intl.formatToPlainString(j.t.LBm0Aw, { operatingSystem: j.intl.string(j.t['0/xHFB']) }));
        if ('install' === n && e) return this.renderDisabledButton(n, j.intl.string(j.t.QUSQIC));
        let r = this.onClickHandlers[n];
        return null == r ? this.renderDisabledButton(n) : this.renderActionButton(n, r);
    }
    constructor(...e) {
        (super(...e),
            T(this, '_uninstallStringIndex', null),
            T(this, 'handleAddToLibrary', async () => {
                try {
                    let { libraryApplication: e } = this.props;
                    (await d.h(e.id, e.branchId, e.getFlags() & ~I.eHb.HIDDEN), (0, f.uL)(I.Z5c.APPLICATION_LIBRARY));
                } catch (e) {
                    new m.Z('LibraryApplicationButton').error(e);
                }
            }),
            T(this, 'handleInstall', () => {
                let { libraryApplication: e, source: t } = this.props;
                x.installApplication(e.id, e.branchId, t);
            }),
            T(this, 'handleUpdate', () => {
                let { libraryApplication: e } = this.props;
                x.updateApplication(e.id, e.branchId);
            }),
            T(this, 'onClickHandlers', {
                add_to_library: this.handleAddToLibrary,
                install: this.handleInstall,
                update: this.handleUpdate
            }),
            T(this, 'handleClick', (e, t) => {
                let { onClick: n } = this.props;
                (null == n || n(e), t(e));
            }));
    }
}
function D(e) {
    let { libraryApplication: t } = e,
        n = (0, p.O)(),
        [r, i] = (0, o.Wu)([b.Z, E.Z], () => [(0, _.i)(t, b.Z, E.Z), b.Z.getState(t.id, t.branchId)], [t]),
        a = (0, o.e7)([h.Z], () => h.Z.isSyncing(t.id, t.branchId), [t]),
        s = (0, o.e7)([g.Z], () => g.Z.hasNoBuild(t.id, t.branchId), [t]);
    return (0, l.jsx)(
        R,
        P(N({}, e), {
            analyticsContext: n,
            actionState: r,
            dispatchState: i,
            isCloudSyncing: a,
            hasNoBuild: s
        })
    );
}
(T(R, 'defaultProps', {
    fullWidth: !1,
    size: c.zx.Sizes.LARGE,
    hideProgress: !1,
    isPlayShiny: !1,
    tooltipPosition: 'top'
}),
    T(R, 'ButtonStates', A));
