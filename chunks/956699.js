n.d(t, { Z: () => el }), n(47120), n(411104);
var i = n(200651),
    s = n(192379),
    l = n(120356),
    r = n.n(l),
    a = n(392711),
    o = n.n(a),
    c = n(268146),
    d = n(442837),
    u = n(692547),
    h = n(481060),
    m = n(570140),
    g = n(661111),
    x = n(179658),
    _ = n(491428),
    p = n(225433),
    E = n(484614),
    C = n(615287),
    N = n(386506),
    f = n(865427),
    I = n(802098),
    T = n(663993),
    S = n(600164),
    j = n(118012),
    v = n(482215),
    b = n(38618),
    A = n(32300),
    O = n(371651),
    R = n(388627),
    D = n(921801),
    P = n(857192),
    y = n(558724),
    Z = n(808506),
    L = n(998502),
    k = n(210887),
    B = n(601948),
    M = n(726985),
    V = n(981631),
    w = n(908442),
    U = n(633377),
    G = n(937551),
    F = n(814632),
    z = n(595468);
function Y(e, t, n) {
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
let H = ['discord_web', 'discord_marketing', 'discord_developers', 'discord_ios', 'discord_android'],
    W = [
        {
            value: 'branch',
            label: 'Branch Name'
        },
        {
            value: 'id',
            label: 'Commit SHA'
        }
    ];
function K(e) {
    return 'discord_ios' in e || 'discord_android' in e;
}
class X extends s.Component {
    render() {
        let { project: e, overrideType: t, overrideId: n, disabled: s, error: l } = this.props;
        return (0, i.jsxs)(S.Z, {
            direction: S.Z.Direction.VERTICAL,
            className: r()(U.buildOverrideGroup, F.marginBottom20, G.card, U.row),
            children: [
                (0, i.jsx)(p.Z, {
                    className: r()(U.removeBuildOverride, { [U.removeBuildOverrideDisabled]: s }),
                    onClick: s ? void 0 : this.handleRemoveBuildOverride
                }),
                (0, i.jsxs)(S.Z, {
                    className: F.marginBottom8,
                    children: [
                        (0, i.jsx)(S.Z.Child, {
                            basis: '50%',
                            children: (0, i.jsx)(h.xJW, {
                                title: 'Override Type',
                                className: U.item,
                                children: (0, i.jsx)(h.q4e, {
                                    options: W,
                                    onChange: this.handleOverrideTypeChanged,
                                    value: t,
                                    isDisabled: s
                                })
                            })
                        }),
                        (0, i.jsx)(S.Z.Child, {
                            basis: '50%',
                            children: (0, i.jsx)(h.xJW, {
                                title: 'branch' === t ? 'Branch Name' : 'Commit SHA',
                                className: U.item,
                                children: (0, i.jsx)(h.oil, {
                                    value: n,
                                    onChange: this.handleOverrideIdChanged,
                                    disabled: s
                                })
                            })
                        })
                    ]
                }),
                (0, i.jsxs)(S.Z.Child, {
                    children: [
                        null != l &&
                            '' !== l &&
                            (0, i.jsx)(h.R94, {
                                className: U.item,
                                style: { color: u.Z.unsafe_rawColors.RED_400.css },
                                type: h.R94.Types.DESCRIPTION,
                                children: l
                            }),
                        (0, i.jsxs)(h.R94, {
                            className: U.item,
                            type: h.R94.Types.DESCRIPTION,
                            children: ['This controls the build that will be served for the ', (0, i.jsx)('code', { children: e }), ' project.']
                        })
                    ]
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            Y(this, 'handleRemoveBuildOverride', () => {
                this.props.onBuildOverrideRemoved(this.props.project);
            }),
            Y(this, 'handleOverrideIdChanged', (e) => {
                this.props.onBuildOverrideUpdated(this.props.project, { id: e });
            }),
            Y(this, 'handleOverrideTypeChanged', (e) => {
                this.props.onBuildOverrideUpdated(this.props.project, {
                    type: e,
                    id: ''
                });
            });
    }
}
class q extends s.Component {
    async refreshBuildOverrides() {
        this.setState({ loading: !0 });
        let e = await (0, f.Ce)();
        this.setState({
            loading: !1,
            buildOverrides: e,
            loadedBuildOverrides: o().cloneDeep(e),
            errors: {}
        });
    }
    isDirty() {
        let { buildOverrides: e, loadedBuildOverrides: t } = this.state;
        return !o().isEqual(e, t);
    }
    componentDidMount() {
        this.refreshBuildOverrides();
    }
    getAvailableProjects() {
        let { buildOverrides: e } = this.state;
        if (null == e) return [];
        let t = Object.keys(e);
        return o().without(H, ...t);
    }
    renderEmpty() {
        return (0, i.jsxs)(h.ubH, {
            theme: k.Z.theme,
            className: r()(F.marginTop40, F.marginBottom20),
            children: [
                (0, i.jsx)(h.oxh, {
                    darkSrc: n(770227),
                    lightSrc: n(398684),
                    width: 294,
                    height: 192
                }),
                (0, i.jsx)(h.OZU, { children: 'You have no build overrides configured.' })
            ]
        });
    }
    renderItems() {
        let { buildOverrides: e, saving: t, errors: n } = this.state;
        return null == e
            ? null
            : o().map(e, (e, s) =>
                  (0, i.jsx)(
                      X,
                      {
                          project: s,
                          overrideType: e.type,
                          overrideId: e.id,
                          disabled: t,
                          error: n[s],
                          onBuildOverrideUpdated: this.handleBuildOverrideUpdated,
                          onBuildOverrideRemoved: this.handleBuildOverrideRemoved
                      },
                      s
                  )
              );
    }
    renderRefreshButton() {
        return !this.state.didSave || this.isDirty()
            ? null
            : (0, i.jsx)(S.Z, {
                  grow: 0,
                  direction: S.Z.Direction.HORIZONTAL_REVERSE,
                  children: (0, i.jsx)(S.Z.Child, {
                      grow: 0,
                      children: (0, i.jsx)(h.zxk, {
                          onClick: () => location.reload(),
                          color: h.zxk.Colors.PRIMARY,
                          children: 'Reload App'
                      })
                  })
              });
    }
    renderLinkButton() {
        let { buildOverrides: e } = this.state;
        return null == e || 0 === Object.keys(e).length
            ? null
            : (0, i.jsx)(S.Z, {
                  grow: 0,
                  direction: S.Z.Direction.HORIZONTAL_REVERSE,
                  children: (0, i.jsx)(S.Z.Child, {
                      grow: 0,
                      children: (0, i.jsx)(h.zxk, {
                          onClick: this.handleLinkGeneration,
                          color: h.zxk.Colors.BRAND,
                          children: 'Generate Public Link'
                      })
                  })
              });
    }
    renderSaveButton() {
        if (!this.isDirty()) return null;
        let { saving: e, buildOverrides: t } = this.state;
        return (0, i.jsxs)(S.Z, {
            grow: 0,
            direction: S.Z.Direction.HORIZONTAL_REVERSE,
            children: [
                (0, i.jsx)(S.Z.Child, {
                    grow: 0,
                    children: (0, i.jsx)(h.zxk, {
                        disabled: K(null != t ? t : {}),
                        onClick: this.handleSaveChanges,
                        submitting: e,
                        color: h.zxk.Colors.GREEN,
                        children: 'Save Build Overrides'
                    })
                }),
                (0, i.jsx)(S.Z.Child, {
                    grow: 0,
                    children: (0, i.jsx)(h.zxk, {
                        onClick: this.handleDiscardChanges,
                        disabled: e,
                        color: h.zxk.Colors.RED,
                        children: 'Discard Changes'
                    })
                })
            ]
        });
    }
    render() {
        let e;
        let { loading: t, saving: n, buildOverrides: s } = this.state;
        e = t ? (0, i.jsx)(h.$jN, { className: F.marginTop20 }) : null != s && 0 === Object.keys(s).length ? this.renderEmpty() : this.renderItems();
        let l = !n && !t && this.getAvailableProjects().length > 0,
            r =
                K(null != s ? s : {}) && 'stable' !== window.GLOBAL_ENV.RELEASE_CHANNEL
                    ? (0, i.jsx)(h.Text, {
                          color: 'text-danger',
                          variant: 'text-md/normal',
                          children: 'Mobile build overrides must be generated using the desktop/web stable client for now!'
                      })
                    : null;
        return (0, i.jsx)(D.F, {
            setting: M.s6.DEVELOPER_OPTIONS_BUILD_OVERRIDE,
            children: (0, i.jsxs)(h.hjN, {
                className: F.marginTop60,
                children: [
                    (0, i.jsxs)(S.Z, {
                        className: F.marginBottom20,
                        children: [
                            (0, i.jsx)(S.Z.Child, {
                                children: (0, i.jsx)(h.vwX, {
                                    tag: h.RB0.H1,
                                    children: 'Build Overrides'
                                })
                            }),
                            (0, i.jsx)(S.Z.Child, {
                                grow: 0,
                                children: (0, i.jsx)(h.zxk, {
                                    size: h.PhG.SMALL,
                                    onClick: this.handleAddBuildOverride,
                                    disabled: !l,
                                    children: 'Add Build Override'
                                })
                            })
                        ]
                    }),
                    (0, i.jsx)(h.$i$, {}),
                    (0, i.jsxs)(S.Z, {
                        direction: S.Z.Direction.VERTICAL,
                        children: [
                            r,
                            e,
                            (0, i.jsxs)(S.Z, {
                                grow: 0,
                                direction: S.Z.Direction.HORIZONTAL_REVERSE,
                                children: [this.renderRefreshButton(), this.renderSaveButton(), this.renderLinkButton()]
                            })
                        ]
                    })
                ]
            })
        });
    }
    constructor(...e) {
        super(...e),
            Y(this, 'state', {
                loading: !0,
                buildOverrides: {},
                loadedBuildOverrides: {},
                errors: {},
                saving: !1,
                didSave: !1
            }),
            Y(this, 'handleAddBuildOverride', async () => {
                var e;
                let t = await ((e = this.getAvailableProjects()),
                new Promise((t) => {
                    (0, h.h7j)((n) => {
                        let s = (e) => {
                            n.onClose(), t(e);
                        };
                        return (0, i.jsxs)(h.Y0X, {
                            ...n,
                            'aria-label': 'Choose A Project to Override',
                            children: [
                                (0, i.jsx)(h.xBx, {
                                    separator: !1,
                                    children: (0, i.jsx)(h.X6q, {
                                        variant: 'heading-lg/semibold',
                                        children: 'Choose A Project to Override'
                                    })
                                }),
                                (0, i.jsx)(h.hzk, {
                                    children: (0, i.jsx)('div', {
                                        className: U.buildOverrideList,
                                        children: e.map((e) =>
                                            (0, i.jsx)(
                                                h.zxk,
                                                {
                                                    value: e,
                                                    color: h.zxk.Colors.GREEN,
                                                    onClick: () => s(e),
                                                    children: e
                                                },
                                                e
                                            )
                                        )
                                    })
                                }),
                                (0, i.jsx)(h.mzw, {
                                    children: (0, i.jsx)(h.zxk, {
                                        color: h.zxk.Colors.PRIMARY,
                                        look: h.zxk.Looks.LINK,
                                        onClick: () => s(null),
                                        children: 'Nevermind'
                                    })
                                })
                            ]
                        });
                    });
                }));
                if (null == t) return;
                let n = {
                    ...this.state.buildOverrides,
                    [t]: {
                        type: 'branch',
                        id: ''
                    }
                };
                this.setState({ buildOverrides: n });
            }),
            Y(this, 'handleBuildOverrideUpdated', (e, t) => {
                let { buildOverrides: n } = this.state,
                    i = {
                        ...(null != n ? n[e] : {}),
                        ...t
                    },
                    s = {
                        ...this.state.buildOverrides,
                        [e]: i
                    };
                this.setState({ buildOverrides: s });
            }),
            Y(this, 'handleBuildOverrideRemoved', (e) => {
                let t = { ...this.state.buildOverrides };
                delete t[e], this.setState({ buildOverrides: t });
            }),
            Y(this, 'handleDiscardChanges', () => {
                this.setState({
                    buildOverrides: o().cloneDeep(this.state.loadedBuildOverrides),
                    errors: {},
                    didSave: !1
                });
            }),
            Y(this, 'handleSaveChanges', async () => {
                let { buildOverrides: e } = this.state;
                if (null == e) return;
                this.setState({ saving: !0 });
                let t = await (0, N.aD)(e);
                if (200 === t.status) {
                    let e = t.body;
                    this.setState({
                        buildOverrides: e,
                        loadedBuildOverrides: o().cloneDeep(e),
                        errors: {},
                        didSave: !0,
                        saving: !1
                    });
                } else if (400 === t.status) {
                    let e = t.body;
                    this.setState({
                        errors: e,
                        saving: !1,
                        didSave: !1
                    });
                } else
                    this.setState({
                        saving: !1,
                        didSave: !1
                    });
            }),
            Y(this, 'handleLinkGeneration', () => {
                let { buildOverrides: e } = this.state;
                (0, h.h7j)((t) =>
                    (0, i.jsx)(J, {
                        ...t,
                        buildOverrides: e
                    })
                );
            });
    }
}
class J extends s.Component {
    isMobile() {
        var e;
        return K(null !== (e = this.props.buildOverrides) && void 0 !== e ? e : {});
    }
    renderSettingsForm() {
        let { ttlSeconds: e, releaseChannel: t, userIdEntry: n, userIdEntryError: s, allowedVersions: l, allowedVersionEntry: r, allowedVersionEntryError: a, allowLoggedOut: o, experiments: c, experimentsError: d } = this.state,
            u = w.S6.find((t) => t.value === e),
            m = l.map((e) => ({
                label: e,
                value: e
            }));
        return (0, i.jsxs)(S.Z.Child, {
            basis: '70%',
            children: [
                (0, i.jsx)(h.xJW, {
                    title: 'Expire After',
                    className: F.marginBottom20,
                    children: (0, i.jsx)(h.q4e, {
                        value: null != u ? u.value : null,
                        options: w.S6,
                        onChange: this.handleExpirationChange
                    })
                }),
                this.isMobile()
                    ? null
                    : (0, i.jsx)(h.xJW, {
                          title: 'Release Channel',
                          className: F.marginBottom20,
                          children: (0, i.jsx)(h.q4e, {
                              value: t,
                              options: w.F$,
                              onChange: this.handleReleaseChannelChange
                          })
                      }),
                this.isMobile()
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(h.xJW, {
                                  title: 'Add allowed app version (required)',
                                  className: F.marginBottom20,
                                  children: (0, i.jsxs)(S.Z, {
                                      direction: S.Z.Direction.HORIZONTAL,
                                      children: [
                                          (0, i.jsx)(S.Z.Child, {
                                              wrap: !0,
                                              basis: '90%',
                                              children: (0, i.jsx)(h.oil, {
                                                  autoFocus: !0,
                                                  value: r,
                                                  onKeyPress: this.handleAllowedVersionEnter,
                                                  error: a,
                                                  onChange: this.handleAllowedVersionEntry,
                                                  placeholder: 'Example: 34'
                                              })
                                          }),
                                          (0, i.jsx)(h.zxk, {
                                              onClick: this.handleAddAllowedVersion,
                                              children: 'Add'
                                          })
                                      ]
                                  })
                              }),
                              (0, i.jsx)(h.xJW, {
                                  title: 'Remove allowed app version',
                                  className: F.marginBottom20,
                                  children: (0, i.jsx)(h.q4e, {
                                      value: null,
                                      options: m,
                                      onChange: this.handleRemoveAllowedVersion,
                                      isDisabled: 0 === l.length
                                  })
                              })
                          ]
                      })
                    : null,
                this.isMobile()
                    ? null
                    : (0, i.jsx)(i.Fragment, {
                          children: (0, i.jsxs)(h.xJW, {
                              title: 'Limit to User IDs (optional)',
                              className: F.marginBottom20,
                              children: [
                                  (0, i.jsx)(S.Z, {
                                      direction: S.Z.Direction.HORIZONTAL,
                                      children: (0, i.jsx)(S.Z.Child, {
                                          wrap: !0,
                                          basis: '90%',
                                          children: (0, i.jsx)(h.Kx8, {
                                              value: n,
                                              error: s,
                                              onBlur: () => this.setUserEntryError(''),
                                              onChange: this.handleUserIDEntry
                                          })
                                      })
                                  }),
                                  (0, i.jsx)(h.Text, {
                                      variant: 'text-sm/normal',
                                      color: 'text-muted',
                                      className: F.marginTop8,
                                      children: 'User IDs can be separated by whitespace or commas.'
                                  })
                              ]
                          })
                      }),
                (0, i.jsxs)(h.xJW, {
                    title: 'Client Experiment Override',
                    className: F.marginBottom20,
                    children: [
                        (0, i.jsx)(S.Z, {
                            direction: S.Z.Direction.HORIZONTAL,
                            children: (0, i.jsx)(S.Z.Child, {
                                wrap: !0,
                                basis: '90%',
                                children: (0, i.jsx)(h.Kx8, {
                                    value: c,
                                    error: d,
                                    onChange: this.handleExperiments,
                                    placeholder: '{"2022-01_threads":1}'
                                })
                            })
                        }),
                        (0, i.jsx)(h.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-muted',
                            className: F.marginTop8,
                            children: 'Locally override the given experiments to the given bucket. This ONLY applies locally and WILL NOT affect the server. When the user clears build override, the experiment override is removed as well.'
                        })
                    ]
                }),
                (0, i.jsx)(h.j7V, {
                    onChange: this.handleAllowLoggedOut,
                    value: o,
                    children: 'Allow logged out users'
                })
            ]
        });
    }
    renderPayloadBlock() {
        let e = JSON.stringify(this.generatePayload(), null, 2),
            t = () => e,
            s = (0, i.jsx)(T.GI, {
                createPromise: () => Promise.resolve().then(n.bind(n, 364964)),
                webpackId: 364964,
                renderFallback: t,
                render: (n) => {
                    let s = n.highlight('json', e, !0);
                    return null == s
                        ? t()
                        : (0, i.jsx)('code', {
                              className: 'hljs scroller '.concat(s.language, ' ').concat(z.scrollbarGhost, ' ').concat(U.codebox),
                              dangerouslySetInnerHTML: { __html: s.value }
                          });
                }
            });
        return (0, i.jsx)(S.Z.Child, { children: (0, i.jsx)(h.Zbd, { children: (0, i.jsx)('pre', { children: s }) }) });
    }
    renderLinkForm() {
        let { statusTextColor: e, statusText: t, publicLink: n } = this.state;
        return (0, i.jsxs)('div', {
            children: [
                (0, i.jsx)(h.xJW, {
                    title: 'Signed Link',
                    children: (0, i.jsxs)(S.Z, {
                        children: [
                            (0, i.jsx)(S.Z.Child, {
                                wrap: !0,
                                basis: '75%',
                                children: (0, i.jsx)(E.Z, { value: n })
                            }),
                            (0, i.jsx)(h.zxk, {
                                onClick: this.handleGenerateLink,
                                children: 'Generate Link'
                            })
                        ]
                    })
                }),
                (0, i.jsx)(j.Z, {
                    color: e,
                    className: ''.concat(F.marginBottom8, ' ').concat(F.marginTop8),
                    children: t
                })
            ]
        });
    }
    render() {
        let { onClose: e, transitionState: t } = this.props;
        return (0, i.jsxs)(h.Y0X, {
            size: h.CgR.LARGE,
            transitionState: t,
            'aria-label': 'Generate Public Build Override Link',
            children: [
                (0, i.jsxs)(h.xBx, {
                    justify: S.Z.Justify.BETWEEN,
                    separator: !1,
                    children: [
                        (0, i.jsx)(h.X6q, {
                            variant: 'heading-lg/semibold',
                            children: 'Generate Public Build Override Link'
                        }),
                        (0, i.jsx)(h.olH, { onClick: e })
                    ]
                }),
                (0, i.jsxs)(h.hzk, {
                    children: [
                        (0, i.jsxs)(S.Z, {
                            children: [this.renderSettingsForm(), this.renderPayloadBlock()]
                        }),
                        this.renderLinkForm()
                    ]
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            Y(this, 'state', {
                ttlSeconds: 3600,
                releaseChannel: 'all',
                userIds: new Set(),
                userIdEntry: '',
                userIdEntryError: null,
                allowedVersions: [],
                allowedVersionEntry: '',
                allowedVersionEntryError: null,
                publicLink: ' ',
                statusText: null,
                statusTextColor: j.Z.Colors.STATUS_RED,
                allowLoggedOut: !1
            }),
            Y(this, 'setUserEntryError', (e) => {
                this.setState({ userIdEntryError: e });
            }),
            Y(this, 'setStatusMessage', (e, t) => {
                this.setState({
                    statusText: e,
                    statusTextColor: null != t ? t : j.Z.Colors.STATUS_RED
                });
            }),
            Y(this, 'handleUserIDEntry', (e) => {
                if (!/^[\d\s,]*$/.test(e)) return this.setUserEntryError('User IDs are numbers!');
                let t = new Set(e.split(/[,\s]+/).filter(Boolean));
                this.setState({
                    userIdEntry: e,
                    userIds: t
                });
            }),
            Y(this, 'setAllowedVersionError', (e) => {
                this.setState({ allowedVersionEntryError: e });
            }),
            Y(this, 'handleAllowedVersionEntry', (e) => {
                this.setState({ allowedVersionEntry: e });
            }),
            Y(this, 'handleAllowedVersionEnter', (e) => {
                e.charCode === V.yXg.ENTER && this.handleAddAllowedVersion();
            }),
            Y(this, 'handleAddAllowedVersion', () => {
                let { allowedVersions: e, allowedVersionEntry: t } = this.state;
                return 0 === (t = t.trim()).length
                    ? this.setAllowedVersionError('Enter a valid version number!')
                    : e.indexOf(t) >= 0
                      ? this.setAllowedVersionError('You already added that version!')
                      : void this.setState({
                            allowedVersions: [...e, t],
                            allowedVersionEntry: '',
                            allowedVersionEntryError: ''
                        });
            }),
            Y(this, 'handleRemoveAllowedVersion', (e) => {
                let { allowedVersions: t } = this.state;
                (t = t.filter((t) => t !== e)), this.setState({ allowedVersions: t });
            }),
            Y(this, 'handleAllowLoggedOut', (e) => {
                this.setState({ allowLoggedOut: e });
            }),
            Y(this, 'handleExpirationChange', (e) => {
                this.setState({ ttlSeconds: e });
            }),
            Y(this, 'handleReleaseChannelChange', (e) => {
                this.setState({ releaseChannel: e });
            }),
            Y(this, 'handleExperiments', (e) => {
                if (0 === e.trim().length) {
                    this.setState({ experimentsError: void 0 });
                    return;
                }
                try {
                    let t = JSON.parse(e);
                    for (let e in t) {
                        if (null == e.match(/^[0-9]{4}\-[0-9]{2}_[a-z0-9_]+$/)) {
                            this.setState({ experimentsError: ''.concat(e, ' is an invalid experiment name') });
                            return;
                        }
                        if ('number' != typeof t[e]) {
                            this.setState({ experimentsError: ''.concat(e, ' has an invalid bucket override') });
                            return;
                        }
                    }
                } catch (e) {
                    this.setState({ experimentsError: 'Unable to parse experiments '.concat(e.message) });
                    return;
                }
                this.setState({
                    experiments: e,
                    experimentsError: void 0
                });
            }),
            Y(this, 'generatePayload', () => ({
                overrides: this.props.buildOverrides,
                meta: {
                    release_channel: 'all' === this.state.releaseChannel ? null : this.state.releaseChannel,
                    ttl_seconds: this.state.ttlSeconds,
                    user_ids: Array.from(this.state.userIds),
                    allowed_versions: this.isMobile() ? this.state.allowedVersions : void 0,
                    allow_logged_out: this.state.allowLoggedOut,
                    experiments: null == this.state.experiments ? null : JSON.parse(this.state.experiments)
                }
            })),
            Y(this, 'handleGenerateLink', async () => {
                if (this.isMobile() && 0 === this.state.allowedVersions.length) {
                    this.setAllowedVersionError('You must add at least one allowed version for iOS');
                    return;
                }
                this.setStatusMessage(null);
                let e = this.generatePayload(),
                    t = await (0, N.M3)(e);
                !1 !== t.error ? this.setStatusMessage(JSON.stringify(t.error), j.Z.Colors.STATUS_RED) : (this.setState({ publicLink: t.url.toString() }), 0 === e.meta.user_ids.length && this.setStatusMessage('Warning! No users added to the whitelist! This link could be used by anyone to override their build.', j.Z.Colors.STATUS_YELLOW));
            });
    }
}
function Q(e) {
    let { layoutDebuggingEnabled: t, cssDebuggingEnabled: n } = e,
        { horizontalSpacing: l, verticalSpacing: r, maxHorizontalSpacing: a, maxVerticalSpacing: o } = (0, v.i)(),
        c = s.useMemo(() => Array.from({ length: a + 1 }, (e, t) => t), [a]),
        d = s.useMemo(() => Array.from({ length: o + 1 }, (e, t) => t), [o]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(h.vwX, {
                tag: h.RB0.H1,
                children: 'Design Tools'
            }),
            (0, i.jsx)(D.F, {
                setting: M.s6.DEVELOPER_OPTIONS_CSS_DEBUGGING,
                children: (0, i.jsx)(h.j7V, {
                    value: n,
                    note: 'Display raw colors as pink. Toggling this will refresh the browser.',
                    onChange: (e) => {
                        (0, x.y)({ cssDebuggingEnabled: e }), setTimeout(() => location.reload(), 500);
                    },
                    children: 'Enable CSS Debugging'
                })
            }),
            (0, i.jsx)(D.F, {
                setting: M.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING,
                children: (0, i.jsx)(h.j7V, {
                    value: t,
                    note: 'Renders a grid on top of the app to help debug layout alignment issues.',
                    onChange: (e) => {
                        (0, x.y)({ layoutDebuggingEnabled: e });
                    },
                    children: 'Enable Layout Debugging'
                })
            }),
            (0, i.jsxs)(D.F, {
                setting: M.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING_OPTIONS,
                children: [
                    (0, i.jsxs)(h.hjN, {
                        className: F.marginBottom20,
                        children: [
                            (0, i.jsx)(h.vwX, { children: 'Horizontal Grid Spacing' }),
                            (0, i.jsx)(h.R94, {
                                className: F.marginBottom20,
                                type: h.geA.DESCRIPTION,
                                children: 'Adjust the spacing between horizontal grid lines. Set to 0 to disable horizontal grid lines.'
                            }),
                            (0, i.jsx)(h.iRW, {
                                initialValue: l,
                                minValue: 0,
                                maxValue: a,
                                markers: c,
                                onValueChange: (e) => v.i.getState().setHorizontalSpacing(e),
                                onValueRender: (e) => ''.concat(Math.round(e), 'px'),
                                onMarkerRender: (e) => (e % 4 == 0 ? ''.concat(e) : void 0),
                                equidistant: !0
                            })
                        ]
                    }),
                    (0, i.jsxs)(h.hjN, {
                        className: F.marginBottom20,
                        children: [
                            (0, i.jsx)(h.vwX, { children: 'Vertical Grid Spacing' }),
                            (0, i.jsx)(h.R94, {
                                className: F.marginBottom20,
                                type: h.geA.DESCRIPTION,
                                children: 'Adjust the spacing between vertical grid lines. Set to 0 to disable vertical grid lines.'
                            }),
                            (0, i.jsx)(h.iRW, {
                                initialValue: r,
                                minValue: 0,
                                maxValue: o,
                                markers: d,
                                onValueChange: (e) => v.i.getState().setVerticalSpacing(e),
                                onValueRender: (e) => ''.concat(Math.round(e), 'px'),
                                onMarkerRender: (e) => (e % 4 == 0 ? ''.concat(e) : void 0),
                                equidistant: !0
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
function $() {
    throw Error('Send help');
}
function ee() {
    let e = (0, A.XE)('developer_settings'),
        t = (0, d.e7)([O.Z], () => O.Z.getForcedRenderMode()),
        [n, l] = s.useState(!1),
        [r, a] = s.useState(''),
        o = e || t === C.R5.OUT_OF_PROCESS_V2 || t === C.R5.OUT_OF_PROCESS_V3 || t === C.R5.OUT_OF_PROCESS_V3_LIMITED_INTERACTION;
    return (s.useEffect(() => {
        (async () => {
            a(await (0, Z.Y)());
        })();
    }, []),
    n)
        ? {}
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)('div', {
                      className: [U.buttonsContainer, F.marginBottom20].join(' '),
                      children: [
                          (0, i.jsx)(D.F, {
                              setting: M.s6.DEVELOPER_OPTIONS_OVERRIDE_OPEN_OVERLAY,
                              children: o
                                  ? (0, i.jsx)(h.zxk, {
                                        onClick: () => (0, R.fK)(),
                                        children: 'Open Overlay'
                                    })
                                  : (0, i.jsx)(h.zxk, {
                                        onClick: () => window.open(r, '_blank'),
                                        disabled: '' === r,
                                        children: 'Open Overlay'
                                    })
                          }),
                          (0, i.jsx)(D.F, {
                              setting: M.s6.DEVELOPER_OPTIONS_RESET_SOCKET,
                              children: (0, i.jsx)(h.zxk, {
                                  onClick: () => {
                                      b.Z.getSocket().close(), b.Z.getSocket().connect();
                                  },
                                  children: 'Reset Socket'
                              })
                          }),
                          (0, i.jsx)(D.F, {
                              setting: M.s6.DEVELOPER_OPTIONS_CLEAR_CACHES,
                              children: (0, i.jsx)(h.zxk, {
                                  onClick: () => {
                                      m.Z.dispatch({
                                          type: 'CLEAR_CACHES',
                                          reason: 'Requested by user',
                                          preventWritingCachesAgainThisSession: !0,
                                          resetSocket: !0
                                      });
                                  },
                                  children: 'Clear Caches'
                              })
                          })
                      ]
                  }),
                  (0, i.jsx)(D.F, {
                      setting: M.s6.DEVELOPER_OPTIONS_CRASHES,
                      children: (0, i.jsx)(h.hjN, {
                          title: 'Crashes',
                          tag: h.RB0.H1,
                          children: (0, i.jsxs)('div', {
                              className: U.buttonsContainer,
                              children: [
                                  (0, i.jsx)(h.q4e, {
                                      value: void 0,
                                      options: [
                                          {
                                              value: void 0,
                                              label: 'Native libdiscord crash'
                                          },
                                          {
                                              value: 0,
                                              label: 'Abort()'
                                          },
                                          {
                                              value: 1,
                                              label: 'SIGSEGV()'
                                          },
                                          {
                                              value: 2,
                                              label: 'EXCEPTION_ACCESS_VIOLATION'
                                          },
                                          {
                                              value: 3,
                                              label: 'RaiseFailFastException'
                                          },
                                          {
                                              value: 4,
                                              label: 'Out of Memory'
                                          }
                                      ],
                                      onChange: (e) => null != e && L.ZP.crash(e)
                                  }),
                                  (0, i.jsx)(h.q4e, {
                                      value: void 0,
                                      options: [
                                          {
                                              value: void 0,
                                              label: 'Native JS crash'
                                          },
                                          {
                                              value: c.Xo.RendererProcessDelayed,
                                              label: 'Delayed exception in renderer process'
                                          },
                                          {
                                              value: c.Xo.RendererProcess,
                                              label: 'Exception in renderer process'
                                          },
                                          {
                                              value: c.Xo.MainProcess,
                                              label: 'Exception in main process'
                                          }
                                      ],
                                      onChange: (e) => (null != e ? void L.ZP.triggerJSException(e) : void 0)
                                  }),
                                  (0, i.jsx)(h.zxk, {
                                      onClick: () => l(!0),
                                      children: 'React Crash'
                                  }),
                                  (0, i.jsx)(h.zxk, {
                                      onClick: $,
                                      children: 'onClick Throw'
                                  })
                              ]
                          })
                      })
                  })
              ]
          });
}
let et = d.ZP.connectStores([P.default], () => ({
    isTracingRequests: P.default.isTracingRequests,
    isForcedCanary: P.default.isForcedCanary,
    isLoggingGatewayEvents: P.default.isLoggingGatewayEvents,
    isLoggingOverlayEvents: P.default.isLoggingOverlayEvents,
    isLoggingAnalyticsEvents: P.default.isLoggingAnalyticsEvents,
    isAxeEnabled: P.default.isAxeEnabled,
    cssDebuggingEnabled: P.default.cssDebuggingEnabled,
    layoutDebuggingEnabled: P.default.layoutDebuggingEnabled,
    isSourceMapsEnabled: P.default.sourceMapsEnabled,
    isAnalyticsDebuggerEnabled: P.default.isAnalyticsDebuggerEnabled,
    isIdleStatusIndicatorEnabled: P.default.isIdleStatusIndicatorEnabled,
    onlyShowPreviewAppCollections: P.default.onlyShowPreviewAppCollections,
    disableAppCollectionsCache: P.default.disableAppCollectionsCache,
    preventPopoutClose: P.default.preventPopoutClose
}))((e) => {
    let { isTracingRequests: t, isForcedCanary: n, isLoggingGatewayEvents: s, isLoggingOverlayEvents: l, isLoggingAnalyticsEvents: r, isAxeEnabled: a, cssDebuggingEnabled: o, layoutDebuggingEnabled: c, isSourceMapsEnabled: d, isAnalyticsDebuggerEnabled: u, isIdleStatusIndicatorEnabled: m, onlyShowPreviewAppCollections: g, disableAppCollectionsCache: _, preventPopoutClose: p } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(D.F, {
                setting: M.s6.DEVELOPER_OPTIONS_FLAGS,
                children: (0, i.jsxs)(h.hjN, {
                    title: 'Developer Flags',
                    tag: h.RB0.H1,
                    children: [
                        (0, i.jsx)(D.F, {
                            setting: M.s6.DEVELOPER_OPTIONS_TRACING_REQUESTS,
                            children: (0, i.jsx)(h.j7V, {
                                value: t,
                                note: 'Force trace all client requests with APM',
                                onChange: (e) => (0, x.y)({ trace: e }),
                                children: 'Enable Tracing Requests'
                            })
                        }),
                        (0, i.jsx)(D.F, {
                            setting: M.s6.DEVELOPER_OPTIONS_FORCED_CANARY,
                            children: (0, i.jsx)(h.j7V, {
                                value: n,
                                note: 'Force all API requests to canary instances',
                                onChange: (e) => (0, x.y)({ canary: e }),
                                children: 'Enable Forced Canary'
                            })
                        }),
                        (0, i.jsx)(D.F, {
                            setting: M.s6.DEVELOPER_OPTIONS_GATEWAY_EVENTS_TO_CONSOLE,
                            children: (0, i.jsx)(h.j7V, {
                                value: s,
                                note: 'Logs all incoming and outgoing gateway events to the developer console, enable verbose logging in the developer console to see! This includes all message content.',
                                onChange: (e) => (0, x.y)({ logGatewayEvents: e }),
                                children: 'Enable Logging of Gateway Events to Console'
                            })
                        }),
                        (0, i.jsx)(D.F, {
                            setting: M.s6.DEVELOPER_OPTIONS_OVERLAY_RPC_EVENTS_COMMANDS,
                            children: (0, i.jsx)(h.j7V, {
                                value: l,
                                note: 'Logs all overlay related RPC events. Super noisy if an overlay is connected',
                                onChange: (e) => (0, x.y)({ logOverlayEvents: e }),
                                children: 'Enable Logging of Overlay RPC Events & Commands'
                            })
                        }),
                        (0, i.jsx)(D.F, {
                            setting: M.s6.DEVELOPER_OPTIONS_ANALYTICS_EVENTS_LOGGING,
                            children: (0, i.jsx)(h.j7V, {
                                value: r,
                                note: 'Logs all analytics events to the developer console',
                                onChange: (e) => (0, x.y)({ logAnalyticsEvents: e }),
                                children: 'Enable Logging of Analytics Events'
                            })
                        }),
                        (0, i.jsx)(D.F, {
                            setting: M.s6.DEVELOPER_OPTIONS_SOURCE_MAPS,
                            children: (0, i.jsx)(h.j7V, {
                                value: d,
                                note: 'Only enable on devices you trust.',
                                onChange: (e) => (0, x.y)({ sourceMapsEnabled: e }),
                                children: 'Enable source maps to be loaded on this client'
                            })
                        }),
                        (0, i.jsx)(D.F, {
                            setting: M.s6.DEVELOPER_OPTIONS_ANALYTICS_DEBUGGER_VIEW,
                            children: (0, i.jsx)(h.j7V, {
                                value: u,
                                note: 'Displays a floating debugger with viewed impressions',
                                onChange: (e) => (0, x.y)({ analyticsDebuggerEnabled: e }),
                                children: 'Enable standard analytics debugger view'
                            })
                        }),
                        (0, i.jsx)(D.F, {
                            setting: M.s6.DEVELOPER_OPTIONS_IDLE_STATUS_INDICATOR,
                            children: (0, i.jsx)(h.j7V, {
                                value: m,
                                note: 'Displays a floating idle status indicator',
                                onChange: (e) => (0, x.y)({ idleStatusIndicatorEnabled: e }),
                                children: 'Enable idle status indicator'
                            })
                        }),
                        (0, i.jsx)(D.F, {
                            setting: M.s6.DEVELOPER_OPTIONS_ACCESSIBILITY_AUDITING,
                            children: (0, i.jsx)(h.j7V, {
                                value: a,
                                note: 'Runs Axe auditing for accessibility while using the app. Violations get logged to the console. Only available in development',
                                onChange: (e) => (0, x.y)({ axeEnabled: e }),
                                children: 'Enable Accessibility Auditing'
                            })
                        }),
                        (0, i.jsx)(D.F, {
                            setting: M.s6.DEVELOPER_OPTIONS_PREVENT_POPOUT_CLOSE,
                            children: (0, i.jsx)(h.j7V, {
                                value: p,
                                note: 'This is to enable viewing console logs for popout crashes. This may leave your app/popout in a weird state.',
                                onChange: (e) => (0, x.y)({ preventPopoutClose: e }),
                                children: 'Prevent Popouts From Closing Automatically'
                            })
                        }),
                        (0, i.jsx)(D.F, {
                            setting: M.s6.DEVELOPER_OPTIONS_PREVIEW_UNPUBLISHED_COLLECTIONS,
                            children: (0, i.jsx)(h.j7V, {
                                value: g,
                                note: "Only show application collections (e.g. in App Directory, App Launcher in text) that have the 'preview' active state. This disables application collections cache, too, so you can see collections updates immediately.",
                                onChange: (e) => (0, x.y)({ onlyShowPreviewAppCollections: e }),
                                children: 'Preview unpublished application collections'
                            })
                        }),
                        (0, i.jsx)(D.F, {
                            setting: M.s6.DEVELOPER_OPTIONS_DISABLE_APP_COLLECTIONS_CACHE,
                            children: (0, i.jsx)(h.j7V, {
                                value: _,
                                note: 'Disable application collections cache so that you can see updates to collections immediately.',
                                onChange: (e) => (0, x.y)({ disableAppCollectionsCache: e }),
                                children: 'Disable application collections cache'
                            })
                        }),
                        (0, i.jsxs)(D.F, {
                            setting: M.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
                            children: [
                                (0, i.jsx)('div', {
                                    className: [U.buttonsContainer, F.marginBottom20].join(' '),
                                    children: (0, i.jsx)(B.S, {})
                                }),
                                (0, i.jsx)(h.$i$, { className: U.divider })
                            ]
                        })
                    ]
                })
            }),
            (0, i.jsx)(Q, {
                layoutDebuggingEnabled: c,
                cssDebuggingEnabled: o
            })
        ]
    });
});
function en() {
    let e = (0, d.e7)([y.Z], () => y.Z.getSurveyOverride()),
        [t, n] = s.useState(null != e ? e : '');
    return (0, i.jsx)(D.F, {
        setting: M.s6.DEVELOPER_OPTIONS_SURVEY_OVERRIDE,
        children: (0, i.jsxs)(h.hjN, {
            tag: h.RB0.H1,
            title: 'Survey Override',
            className: F.marginTop60,
            children: [
                (0, i.jsx)(h.vwX, { children: 'Copy the ID of the Survey you want to test:' }),
                (0, i.jsxs)('form', {
                    className: U.surveyOverride,
                    onSubmit: (e) => {
                        e.preventDefault(), t.length > 0 ? _.Xq(t) : _.Xq(null);
                    },
                    children: [
                        (0, i.jsx)(h.oil, {
                            className: U.surveyOverrideInput,
                            value: t,
                            onChange: n
                        }),
                        (0, i.jsx)(h.zxk, {
                            type: 'submit',
                            children: 'Save Override'
                        })
                    ]
                })
            ]
        })
    });
}
function ei() {
    var e;
    let t = (0, d.e7)([I.Z], () => I.Z.overrideId()),
        [n, l] = s.useState(null !== (e = I.Z.overrideId()) && void 0 !== e ? e : '');
    return (0, i.jsx)(D.F, {
        setting: M.s6.DEVELOPER_OPTIONS_CHANGELOG_OVERRIDE,
        children: (0, i.jsxs)(h.hjN, {
            tag: h.RB0.H1,
            title: 'Changelog Override',
            className: F.marginTop60,
            children: [
                (0, i.jsx)(h.vwX, { children: 'Enter the ID of the changelog you want to test' }),
                (0, i.jsxs)('div', {
                    className: U.surveyOverride,
                    children: [
                        (0, i.jsx)(h.oil, {
                            className: U.surveyOverrideInput,
                            value: n,
                            onChange: l
                        }),
                        (0, i.jsx)(h.zxk, {
                            onClick: () => {
                                '' === n ? g.Z.setChangelogOverride(null) : g.Z.setChangelogOverride(n);
                            },
                            disabled: t === n,
                            children: 'Update Changelog'
                        })
                    ]
                })
            ]
        })
    });
}
class es extends s.PureComponent {
    render() {
        return (0, i.jsxs)(s.Fragment, {
            children: [(0, i.jsx)(et, {}), (0, i.jsx)(ee, {}), (0, i.jsx)(en, {}), (0, i.jsx)(ei, {}), (0, i.jsx)(q, {})]
        });
    }
}
let el = es;
