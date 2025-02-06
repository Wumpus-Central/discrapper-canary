n.d(t, { Z: () => er }), n(47120), n(411104);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(392711),
    o = n.n(a),
    c = n(268146),
    d = n(442837),
    u = n(692547),
    m = n(481060),
    h = n(570140),
    g = n(661111),
    _ = n(179658),
    x = n(491428),
    p = n(225433),
    E = n(484614),
    C = n(615287),
    f = n(386506),
    T = n(865427),
    N = n(802098),
    I = n(663993),
    S = n(600164),
    b = n(118012),
    v = n(482215),
    j = n(38618),
    A = n(32300),
    O = n(371651),
    R = n(388627),
    P = n(921801),
    D = n(857192),
    Z = n(558724),
    y = n(808506),
    k = n(998502),
    L = n(210887),
    B = n(601948),
    M = n(726985),
    w = n(981631),
    V = n(908442),
    U = n(282535),
    G = n(684309),
    F = n(232186),
    H = n(763971);
function z(e, t, n) {
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
let Y = ['discord_web', 'discord_marketing', 'discord_developers', 'discord_ios', 'discord_android'],
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
        let { project: e, overrideType: t, overrideId: n, disabled: s, error: r } = this.props;
        return (0, i.jsxs)(S.Z, {
            direction: S.Z.Direction.VERTICAL,
            className: l()(U.buildOverrideGroup, F.marginBottom20, G.card, U.row),
            children: [
                (0, i.jsx)(p.Z, {
                    className: l()(U.removeBuildOverride, { [U.removeBuildOverrideDisabled]: s }),
                    onClick: s ? void 0 : this.handleRemoveBuildOverride
                }),
                (0, i.jsxs)(S.Z, {
                    className: F.marginBottom8,
                    children: [
                        (0, i.jsx)(S.Z.Child, {
                            basis: '50%',
                            children: (0, i.jsx)(m.xJW, {
                                title: 'Override Type',
                                className: U.item,
                                children: (0, i.jsx)(m.q4e, {
                                    options: W,
                                    onChange: this.handleOverrideTypeChanged,
                                    value: t,
                                    isDisabled: s
                                })
                            })
                        }),
                        (0, i.jsx)(S.Z.Child, {
                            basis: '50%',
                            children: (0, i.jsx)(m.xJW, {
                                title: 'branch' === t ? 'Branch Name' : 'Commit SHA',
                                className: U.item,
                                children: (0, i.jsx)(m.oil, {
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
                        null != r &&
                            '' !== r &&
                            (0, i.jsx)(m.R94, {
                                className: U.item,
                                style: { color: u.Z.unsafe_rawColors.RED_400.css },
                                type: m.R94.Types.DESCRIPTION,
                                children: r
                            }),
                        (0, i.jsxs)(m.R94, {
                            className: U.item,
                            type: m.R94.Types.DESCRIPTION,
                            children: ['This controls the build that will be served for the ', (0, i.jsx)('code', { children: e }), ' project.']
                        })
                    ]
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            z(this, 'handleRemoveBuildOverride', () => {
                this.props.onBuildOverrideRemoved(this.props.project);
            }),
            z(this, 'handleOverrideIdChanged', (e) => {
                this.props.onBuildOverrideUpdated(this.props.project, { id: e });
            }),
            z(this, 'handleOverrideTypeChanged', (e) => {
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
        let e = await (0, T.Ce)();
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
        return o().without(Y, ...t);
    }
    renderEmpty() {
        return (0, i.jsxs)(m.ubH, {
            theme: L.Z.theme,
            className: l()(F.marginTop40, F.marginBottom20),
            children: [
                (0, i.jsx)(m.oxh, {
                    darkSrc: n(770227),
                    lightSrc: n(398684),
                    width: 294,
                    height: 192
                }),
                (0, i.jsx)(m.OZU, { children: 'You have no build overrides configured.' })
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
                      children: (0, i.jsx)(m.zxk, {
                          onClick: () => location.reload(),
                          color: m.zxk.Colors.PRIMARY,
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
                      children: (0, i.jsx)(m.zxk, {
                          onClick: this.handleLinkGeneration,
                          color: m.zxk.Colors.BRAND,
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
                    children: (0, i.jsx)(m.zxk, {
                        disabled: K(null != t ? t : {}),
                        onClick: this.handleSaveChanges,
                        submitting: e,
                        color: m.zxk.Colors.GREEN,
                        children: 'Save Build Overrides'
                    })
                }),
                (0, i.jsx)(S.Z.Child, {
                    grow: 0,
                    children: (0, i.jsx)(m.zxk, {
                        onClick: this.handleDiscardChanges,
                        disabled: e,
                        color: m.zxk.Colors.RED,
                        children: 'Discard Changes'
                    })
                })
            ]
        });
    }
    render() {
        let e;
        let { loading: t, saving: n, buildOverrides: s } = this.state;
        e = t ? (0, i.jsx)(m.$jN, { className: F.marginTop20 }) : null != s && 0 === Object.keys(s).length ? this.renderEmpty() : this.renderItems();
        let r = !n && !t && this.getAvailableProjects().length > 0,
            l =
                K(null != s ? s : {}) && 'stable' !== window.GLOBAL_ENV.RELEASE_CHANNEL
                    ? (0, i.jsx)(m.Text, {
                          color: 'text-danger',
                          variant: 'text-md/normal',
                          children: 'Mobile build overrides must be generated using the desktop/web stable client for now!'
                      })
                    : null;
        return (0, i.jsx)(P.F, {
            setting: M.s6.DEVELOPER_OPTIONS_BUILD_OVERRIDE,
            children: (0, i.jsxs)(m.hjN, {
                className: F.marginTop60,
                children: [
                    (0, i.jsxs)(S.Z, {
                        className: F.marginBottom20,
                        children: [
                            (0, i.jsx)(S.Z.Child, {
                                children: (0, i.jsx)(m.vwX, {
                                    tag: m.RB0.H1,
                                    children: 'Build Overrides'
                                })
                            }),
                            (0, i.jsx)(S.Z.Child, {
                                grow: 0,
                                children: (0, i.jsx)(m.zxk, {
                                    size: m.PhG.SMALL,
                                    onClick: this.handleAddBuildOverride,
                                    disabled: !r,
                                    children: 'Add Build Override'
                                })
                            })
                        ]
                    }),
                    (0, i.jsx)(m.$i$, {}),
                    (0, i.jsxs)(S.Z, {
                        direction: S.Z.Direction.VERTICAL,
                        children: [
                            l,
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
            z(this, 'state', {
                loading: !0,
                buildOverrides: {},
                loadedBuildOverrides: {},
                errors: {},
                saving: !1,
                didSave: !1
            }),
            z(this, 'handleAddBuildOverride', async () => {
                var e;
                let t = await ((e = this.getAvailableProjects()),
                new Promise((t) => {
                    (0, m.h7j)((n) => {
                        let s = (e) => {
                            n.onClose(), t(e);
                        };
                        return (0, i.jsxs)(m.Y0X, {
                            ...n,
                            'aria-label': 'Choose A Project to Override',
                            children: [
                                (0, i.jsx)(m.xBx, {
                                    separator: !1,
                                    children: (0, i.jsx)(m.X6q, {
                                        variant: 'heading-lg/semibold',
                                        children: 'Choose A Project to Override'
                                    })
                                }),
                                (0, i.jsx)(m.hzk, {
                                    children: (0, i.jsx)('div', {
                                        className: U.buildOverrideList,
                                        children: e.map((e) =>
                                            (0, i.jsx)(
                                                m.zxk,
                                                {
                                                    value: e,
                                                    color: m.zxk.Colors.GREEN,
                                                    onClick: () => s(e),
                                                    children: e
                                                },
                                                e
                                            )
                                        )
                                    })
                                }),
                                (0, i.jsx)(m.mzw, {
                                    children: (0, i.jsx)(m.zxk, {
                                        color: m.zxk.Colors.PRIMARY,
                                        look: m.zxk.Looks.LINK,
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
            z(this, 'handleBuildOverrideUpdated', (e, t) => {
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
            z(this, 'handleBuildOverrideRemoved', (e) => {
                let t = { ...this.state.buildOverrides };
                delete t[e], this.setState({ buildOverrides: t });
            }),
            z(this, 'handleDiscardChanges', () => {
                this.setState({
                    buildOverrides: o().cloneDeep(this.state.loadedBuildOverrides),
                    errors: {},
                    didSave: !1
                });
            }),
            z(this, 'handleSaveChanges', async () => {
                let { buildOverrides: e } = this.state;
                if (null == e) return;
                this.setState({ saving: !0 });
                let t = await (0, f.aD)(e);
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
            z(this, 'handleLinkGeneration', () => {
                let { buildOverrides: e } = this.state;
                (0, m.h7j)((t) =>
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
        let { ttlSeconds: e, releaseChannel: t, userIdEntry: n, userIdEntryError: s, allowedVersions: r, allowedVersionEntry: l, allowedVersionEntryError: a, allowLoggedOut: o, experiments: c, experimentsError: d } = this.state,
            u = V.S6.find((t) => t.value === e),
            h = r.map((e) => ({
                label: e,
                value: e
            }));
        return (0, i.jsxs)(S.Z.Child, {
            basis: '70%',
            children: [
                (0, i.jsx)(m.xJW, {
                    title: 'Expire After',
                    className: F.marginBottom20,
                    children: (0, i.jsx)(m.q4e, {
                        value: null != u ? u.value : null,
                        options: V.S6,
                        onChange: this.handleExpirationChange
                    })
                }),
                this.isMobile()
                    ? null
                    : (0, i.jsx)(m.xJW, {
                          title: 'Release Channel',
                          className: F.marginBottom20,
                          children: (0, i.jsx)(m.q4e, {
                              value: t,
                              options: V.F$,
                              onChange: this.handleReleaseChannelChange
                          })
                      }),
                this.isMobile()
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(m.xJW, {
                                  title: 'Add allowed app version (required)',
                                  className: F.marginBottom20,
                                  children: (0, i.jsxs)(S.Z, {
                                      direction: S.Z.Direction.HORIZONTAL,
                                      children: [
                                          (0, i.jsx)(S.Z.Child, {
                                              wrap: !0,
                                              basis: '90%',
                                              children: (0, i.jsx)(m.oil, {
                                                  autoFocus: !0,
                                                  value: l,
                                                  onKeyPress: this.handleAllowedVersionEnter,
                                                  error: a,
                                                  onChange: this.handleAllowedVersionEntry,
                                                  placeholder: 'Example: 34'
                                              })
                                          }),
                                          (0, i.jsx)(m.zxk, {
                                              onClick: this.handleAddAllowedVersion,
                                              children: 'Add'
                                          })
                                      ]
                                  })
                              }),
                              (0, i.jsx)(m.xJW, {
                                  title: 'Remove allowed app version',
                                  className: F.marginBottom20,
                                  children: (0, i.jsx)(m.q4e, {
                                      value: null,
                                      options: h,
                                      onChange: this.handleRemoveAllowedVersion,
                                      isDisabled: 0 === r.length
                                  })
                              })
                          ]
                      })
                    : null,
                this.isMobile()
                    ? null
                    : (0, i.jsx)(i.Fragment, {
                          children: (0, i.jsxs)(m.xJW, {
                              title: 'Limit to User IDs (optional)',
                              className: F.marginBottom20,
                              children: [
                                  (0, i.jsx)(S.Z, {
                                      direction: S.Z.Direction.HORIZONTAL,
                                      children: (0, i.jsx)(S.Z.Child, {
                                          wrap: !0,
                                          basis: '90%',
                                          children: (0, i.jsx)(m.Kx8, {
                                              value: n,
                                              error: s,
                                              onBlur: () => this.setUserEntryError(''),
                                              onChange: this.handleUserIDEntry
                                          })
                                      })
                                  }),
                                  (0, i.jsx)(m.Text, {
                                      variant: 'text-sm/normal',
                                      color: 'text-muted',
                                      className: F.marginTop8,
                                      children: 'User IDs can be separated by whitespace or commas.'
                                  })
                              ]
                          })
                      }),
                (0, i.jsxs)(m.xJW, {
                    title: 'Client Experiment Override',
                    className: F.marginBottom20,
                    children: [
                        (0, i.jsx)(S.Z, {
                            direction: S.Z.Direction.HORIZONTAL,
                            children: (0, i.jsx)(S.Z.Child, {
                                wrap: !0,
                                basis: '90%',
                                children: (0, i.jsx)(m.Kx8, {
                                    value: c,
                                    error: d,
                                    onChange: this.handleExperiments,
                                    placeholder: '{"2022-01_threads":1}'
                                })
                            })
                        }),
                        (0, i.jsx)(m.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-muted',
                            className: F.marginTop8,
                            children: 'Locally override the given experiments to the given bucket. This ONLY applies locally and WILL NOT affect the server. When the user clears build override, the experiment override is removed as well.'
                        })
                    ]
                }),
                (0, i.jsx)(m.j7V, {
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
            s = (0, i.jsx)(I.GI, {
                createPromise: () => Promise.resolve().then(n.bind(n, 364964)),
                webpackId: 364964,
                renderFallback: t,
                render: (n) => {
                    let s = n.highlight('json', e, !0);
                    return null == s
                        ? t()
                        : (0, i.jsx)('code', {
                              className: 'hljs scroller '.concat(s.language, ' ').concat(H.scrollbarGhost, ' ').concat(U.codebox),
                              dangerouslySetInnerHTML: { __html: s.value }
                          });
                }
            });
        return (0, i.jsx)(S.Z.Child, { children: (0, i.jsx)(m.Zbd, { children: (0, i.jsx)('pre', { children: s }) }) });
    }
    renderLinkForm() {
        let { statusTextColor: e, statusText: t, publicLink: n } = this.state;
        return (0, i.jsxs)('div', {
            children: [
                (0, i.jsx)(m.xJW, {
                    title: 'Signed Link',
                    children: (0, i.jsxs)(S.Z, {
                        children: [
                            (0, i.jsx)(S.Z.Child, {
                                wrap: !0,
                                basis: '75%',
                                children: (0, i.jsx)(E.Z, { value: n })
                            }),
                            (0, i.jsx)(m.zxk, {
                                onClick: this.handleGenerateLink,
                                children: 'Generate Link'
                            })
                        ]
                    })
                }),
                (0, i.jsx)(b.Z, {
                    color: e,
                    className: ''.concat(F.marginBottom8, ' ').concat(F.marginTop8),
                    children: t
                })
            ]
        });
    }
    render() {
        let { onClose: e, transitionState: t } = this.props;
        return (0, i.jsxs)(m.Y0X, {
            size: m.CgR.LARGE,
            transitionState: t,
            'aria-label': 'Generate Public Build Override Link',
            children: [
                (0, i.jsxs)(m.xBx, {
                    justify: S.Z.Justify.BETWEEN,
                    separator: !1,
                    children: [
                        (0, i.jsx)(m.X6q, {
                            variant: 'heading-lg/semibold',
                            children: 'Generate Public Build Override Link'
                        }),
                        (0, i.jsx)(m.olH, { onClick: e })
                    ]
                }),
                (0, i.jsxs)(m.hzk, {
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
            z(this, 'state', {
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
                statusTextColor: b.Z.Colors.STATUS_RED,
                allowLoggedOut: !1
            }),
            z(this, 'setUserEntryError', (e) => {
                this.setState({ userIdEntryError: e });
            }),
            z(this, 'setStatusMessage', (e, t) => {
                this.setState({
                    statusText: e,
                    statusTextColor: null != t ? t : b.Z.Colors.STATUS_RED
                });
            }),
            z(this, 'handleUserIDEntry', (e) => {
                if (!/^[\d\s,]*$/.test(e)) return this.setUserEntryError('User IDs are numbers!');
                let t = new Set(e.split(/[,\s]+/).filter(Boolean));
                this.setState({
                    userIdEntry: e,
                    userIds: t
                });
            }),
            z(this, 'setAllowedVersionError', (e) => {
                this.setState({ allowedVersionEntryError: e });
            }),
            z(this, 'handleAllowedVersionEntry', (e) => {
                this.setState({ allowedVersionEntry: e });
            }),
            z(this, 'handleAllowedVersionEnter', (e) => {
                e.charCode === w.yXg.ENTER && this.handleAddAllowedVersion();
            }),
            z(this, 'handleAddAllowedVersion', () => {
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
            z(this, 'handleRemoveAllowedVersion', (e) => {
                let { allowedVersions: t } = this.state;
                (t = t.filter((t) => t !== e)), this.setState({ allowedVersions: t });
            }),
            z(this, 'handleAllowLoggedOut', (e) => {
                this.setState({ allowLoggedOut: e });
            }),
            z(this, 'handleExpirationChange', (e) => {
                this.setState({ ttlSeconds: e });
            }),
            z(this, 'handleReleaseChannelChange', (e) => {
                this.setState({ releaseChannel: e });
            }),
            z(this, 'handleExperiments', (e) => {
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
            z(this, 'generatePayload', () => ({
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
            z(this, 'handleGenerateLink', async () => {
                if (this.isMobile() && 0 === this.state.allowedVersions.length) {
                    this.setAllowedVersionError('You must add at least one allowed version for iOS');
                    return;
                }
                this.setStatusMessage(null);
                let e = this.generatePayload(),
                    t = await (0, f.M3)(e);
                !1 !== t.error ? this.setStatusMessage(JSON.stringify(t.error), b.Z.Colors.STATUS_RED) : (this.setState({ publicLink: t.url.toString() }), 0 === e.meta.user_ids.length && this.setStatusMessage('Warning! No users added to the whitelist! This link could be used by anyone to override their build.', b.Z.Colors.STATUS_YELLOW));
            });
    }
}
function Q(e) {
    let { layoutDebuggingEnabled: t, cssDebuggingEnabled: n } = e,
        { horizontalSpacing: r, verticalSpacing: l, maxHorizontalSpacing: a, maxVerticalSpacing: o } = (0, v.i)(),
        c = s.useMemo(() => Array.from({ length: a + 1 }, (e, t) => t), [a]),
        d = s.useMemo(() => Array.from({ length: o + 1 }, (e, t) => t), [o]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(m.vwX, {
                tag: m.RB0.H1,
                children: 'Design Tools'
            }),
            (0, i.jsx)(P.F, {
                setting: M.s6.DEVELOPER_OPTIONS_CSS_DEBUGGING,
                children: (0, i.jsx)(m.j7V, {
                    value: n,
                    note: 'Display raw colors as pink. Toggling this will refresh the browser.',
                    onChange: (e) => {
                        (0, _.y)({ cssDebuggingEnabled: e }), setTimeout(() => location.reload(), 500);
                    },
                    children: 'Enable CSS Debugging'
                })
            }),
            (0, i.jsx)(P.F, {
                setting: M.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING,
                children: (0, i.jsx)(m.j7V, {
                    value: t,
                    note: 'Renders a grid on top of the app to help debug layout alignment issues.',
                    onChange: (e) => {
                        (0, _.y)({ layoutDebuggingEnabled: e });
                    },
                    children: 'Enable Layout Debugging'
                })
            }),
            (0, i.jsxs)(P.F, {
                setting: M.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING_OPTIONS,
                children: [
                    (0, i.jsxs)(m.hjN, {
                        className: F.marginBottom20,
                        children: [
                            (0, i.jsx)(m.vwX, { children: 'Horizontal Grid Spacing' }),
                            (0, i.jsx)(m.R94, {
                                className: F.marginBottom20,
                                type: m.geA.DESCRIPTION,
                                children: 'Adjust the spacing between horizontal grid lines. Set to 0 to disable horizontal grid lines.'
                            }),
                            (0, i.jsx)(m.iRW, {
                                initialValue: r,
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
                    (0, i.jsxs)(m.hjN, {
                        className: F.marginBottom20,
                        children: [
                            (0, i.jsx)(m.vwX, { children: 'Vertical Grid Spacing' }),
                            (0, i.jsx)(m.R94, {
                                className: F.marginBottom20,
                                type: m.geA.DESCRIPTION,
                                children: 'Adjust the spacing between vertical grid lines. Set to 0 to disable vertical grid lines.'
                            }),
                            (0, i.jsx)(m.iRW, {
                                initialValue: l,
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
        [n, r] = s.useState(!1),
        [l, a] = s.useState(''),
        o = e || t === C.R5.OUT_OF_PROCESS_V2 || t === C.R5.OUT_OF_PROCESS_V3 || t === C.R5.OUT_OF_PROCESS_V3_LIMITED_INTERACTION;
    return (s.useEffect(() => {
        (async () => {
            a(await (0, y.Y)());
        })();
    }, []),
    n)
        ? {}
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)('div', {
                      className: [U.buttonsContainer, F.marginBottom20].join(' '),
                      children: [
                          (0, i.jsx)(P.F, {
                              setting: M.s6.DEVELOPER_OPTIONS_OVERRIDE_OPEN_OVERLAY,
                              children: o
                                  ? (0, i.jsx)(m.zxk, {
                                        onClick: () => (0, R.fK)(),
                                        children: 'Open Overlay'
                                    })
                                  : (0, i.jsx)(m.zxk, {
                                        onClick: () => window.open(l, '_blank'),
                                        disabled: '' === l,
                                        children: 'Open Overlay'
                                    })
                          }),
                          (0, i.jsx)(P.F, {
                              setting: M.s6.DEVELOPER_OPTIONS_RESET_SOCKET,
                              children: (0, i.jsx)(m.zxk, {
                                  onClick: () => {
                                      j.Z.getSocket().close(), j.Z.getSocket().connect();
                                  },
                                  children: 'Reset Socket'
                              })
                          }),
                          (0, i.jsx)(P.F, {
                              setting: M.s6.DEVELOPER_OPTIONS_CLEAR_CACHES,
                              children: (0, i.jsx)(m.zxk, {
                                  onClick: () => {
                                      h.Z.dispatch({
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
                  (0, i.jsx)(P.F, {
                      setting: M.s6.DEVELOPER_OPTIONS_CRASHES,
                      children: (0, i.jsx)(m.hjN, {
                          title: 'Crashes',
                          tag: m.RB0.H1,
                          children: (0, i.jsxs)('div', {
                              className: U.buttonsContainer,
                              children: [
                                  (0, i.jsx)(m.q4e, {
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
                                      onChange: (e) => null != e && k.ZP.crash(e)
                                  }),
                                  (0, i.jsx)(m.q4e, {
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
                                      onChange: (e) => (null != e ? void k.ZP.triggerJSException(e) : void 0)
                                  }),
                                  (0, i.jsx)(m.zxk, {
                                      onClick: () => r(!0),
                                      children: 'React Crash'
                                  }),
                                  (0, i.jsx)(m.zxk, {
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
let et = d.ZP.connectStores([D.default], () => ({
    isTracingRequests: D.default.isTracingRequests,
    isForcedCanary: D.default.isForcedCanary,
    isLoggingGatewayEvents: D.default.isLoggingGatewayEvents,
    isLoggingOverlayEvents: D.default.isLoggingOverlayEvents,
    isLoggingAnalyticsEvents: D.default.isLoggingAnalyticsEvents,
    isAxeEnabled: D.default.isAxeEnabled,
    cssDebuggingEnabled: D.default.cssDebuggingEnabled,
    layoutDebuggingEnabled: D.default.layoutDebuggingEnabled,
    isSourceMapsEnabled: D.default.sourceMapsEnabled,
    isAnalyticsDebuggerEnabled: D.default.isAnalyticsDebuggerEnabled,
    isIdleStatusIndicatorEnabled: D.default.isIdleStatusIndicatorEnabled,
    onlyShowPreviewAppCollections: D.default.onlyShowPreviewAppCollections,
    disableAppCollectionsCache: D.default.disableAppCollectionsCache,
    preventPopoutClose: D.default.preventPopoutClose
}))((e) => {
    let { isTracingRequests: t, isForcedCanary: n, isLoggingGatewayEvents: s, isLoggingOverlayEvents: r, isLoggingAnalyticsEvents: l, isAxeEnabled: a, cssDebuggingEnabled: o, layoutDebuggingEnabled: c, isSourceMapsEnabled: d, isAnalyticsDebuggerEnabled: u, isIdleStatusIndicatorEnabled: h, onlyShowPreviewAppCollections: g, disableAppCollectionsCache: x, preventPopoutClose: p } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(P.F, {
                setting: M.s6.DEVELOPER_OPTIONS_FLAGS,
                children: (0, i.jsxs)(m.hjN, {
                    title: 'Developer Flags',
                    tag: m.RB0.H1,
                    children: [
                        (0, i.jsx)(P.F, {
                            setting: M.s6.DEVELOPER_OPTIONS_TRACING_REQUESTS,
                            children: (0, i.jsx)(m.j7V, {
                                value: t,
                                note: 'Force trace all client requests with APM',
                                onChange: (e) => (0, _.y)({ trace: e }),
                                children: 'Enable Tracing Requests'
                            })
                        }),
                        (0, i.jsx)(P.F, {
                            setting: M.s6.DEVELOPER_OPTIONS_FORCED_CANARY,
                            children: (0, i.jsx)(m.j7V, {
                                value: n,
                                note: 'Force all API requests to canary instances',
                                onChange: (e) => (0, _.y)({ canary: e }),
                                children: 'Enable Forced Canary'
                            })
                        }),
                        (0, i.jsx)(P.F, {
                            setting: M.s6.DEVELOPER_OPTIONS_GATEWAY_EVENTS_TO_CONSOLE,
                            children: (0, i.jsx)(m.j7V, {
                                value: s,
                                note: 'Logs all incoming and outgoing gateway events to the developer console, enable verbose logging in the developer console to see! This includes all message content.',
                                onChange: (e) => (0, _.y)({ logGatewayEvents: e }),
                                children: 'Enable Logging of Gateway Events to Console'
                            })
                        }),
                        (0, i.jsx)(P.F, {
                            setting: M.s6.DEVELOPER_OPTIONS_OVERLAY_RPC_EVENTS_COMMANDS,
                            children: (0, i.jsx)(m.j7V, {
                                value: r,
                                note: 'Logs all overlay related RPC events. Super noisy if an overlay is connected',
                                onChange: (e) => (0, _.y)({ logOverlayEvents: e }),
                                children: 'Enable Logging of Overlay RPC Events & Commands'
                            })
                        }),
                        (0, i.jsx)(P.F, {
                            setting: M.s6.DEVELOPER_OPTIONS_ANALYTICS_EVENTS_LOGGING,
                            children: (0, i.jsx)(m.j7V, {
                                value: l,
                                note: 'Logs all analytics events to the developer console',
                                onChange: (e) => (0, _.y)({ logAnalyticsEvents: e }),
                                children: 'Enable Logging of Analytics Events'
                            })
                        }),
                        (0, i.jsx)(P.F, {
                            setting: M.s6.DEVELOPER_OPTIONS_SOURCE_MAPS,
                            children: (0, i.jsx)(m.j7V, {
                                value: d,
                                note: 'Only enable on devices you trust.',
                                onChange: (e) => (0, _.y)({ sourceMapsEnabled: e }),
                                children: 'Enable source maps to be loaded on this client'
                            })
                        }),
                        (0, i.jsx)(P.F, {
                            setting: M.s6.DEVELOPER_OPTIONS_ANALYTICS_DEBUGGER_VIEW,
                            children: (0, i.jsx)(m.j7V, {
                                value: u,
                                note: 'Displays a floating debugger with viewed impressions',
                                onChange: (e) => (0, _.y)({ analyticsDebuggerEnabled: e }),
                                children: 'Enable standard analytics debugger view'
                            })
                        }),
                        (0, i.jsx)(P.F, {
                            setting: M.s6.DEVELOPER_OPTIONS_IDLE_STATUS_INDICATOR,
                            children: (0, i.jsx)(m.j7V, {
                                value: h,
                                note: 'Displays a floating idle status indicator',
                                onChange: (e) => (0, _.y)({ idleStatusIndicatorEnabled: e }),
                                children: 'Enable idle status indicator'
                            })
                        }),
                        (0, i.jsx)(P.F, {
                            setting: M.s6.DEVELOPER_OPTIONS_ACCESSIBILITY_AUDITING,
                            children: (0, i.jsx)(m.j7V, {
                                value: a,
                                note: 'Runs Axe auditing for accessibility while using the app. Violations get logged to the console. Only available in development',
                                onChange: (e) => (0, _.y)({ axeEnabled: e }),
                                children: 'Enable Accessibility Auditing'
                            })
                        }),
                        (0, i.jsx)(P.F, {
                            setting: M.s6.DEVELOPER_OPTIONS_PREVENT_POPOUT_CLOSE,
                            children: (0, i.jsx)(m.j7V, {
                                value: p,
                                note: 'This is to enable viewing console logs for popout crashes. This may leave your app/popout in a weird state.',
                                onChange: (e) => (0, _.y)({ preventPopoutClose: e }),
                                children: 'Prevent Popouts From Closing Automatically'
                            })
                        }),
                        (0, i.jsx)(P.F, {
                            setting: M.s6.DEVELOPER_OPTIONS_PREVIEW_UNPUBLISHED_COLLECTIONS,
                            children: (0, i.jsx)(m.j7V, {
                                value: g,
                                note: "Only show application collections (e.g. in App Directory, App Launcher in text) that have the 'preview' active state. This disables application collections cache, too, so you can see collections updates immediately.",
                                onChange: (e) => (0, _.y)({ onlyShowPreviewAppCollections: e }),
                                children: 'Preview unpublished application collections'
                            })
                        }),
                        (0, i.jsx)(P.F, {
                            setting: M.s6.DEVELOPER_OPTIONS_DISABLE_APP_COLLECTIONS_CACHE,
                            children: (0, i.jsx)(m.j7V, {
                                value: x,
                                note: 'Disable application collections cache so that you can see updates to collections immediately.',
                                onChange: (e) => (0, _.y)({ disableAppCollectionsCache: e }),
                                children: 'Disable application collections cache'
                            })
                        }),
                        (0, i.jsxs)(P.F, {
                            setting: M.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
                            children: [
                                (0, i.jsx)('div', {
                                    className: [U.buttonsContainer, F.marginBottom20].join(' '),
                                    children: (0, i.jsx)(B.S, {})
                                }),
                                (0, i.jsx)(m.$i$, { className: U.divider })
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
    let e = (0, d.e7)([Z.Z], () => Z.Z.getSurveyOverride()),
        [t, n] = s.useState(null != e ? e : '');
    return (0, i.jsx)(P.F, {
        setting: M.s6.DEVELOPER_OPTIONS_SURVEY_OVERRIDE,
        children: (0, i.jsxs)(m.hjN, {
            tag: m.RB0.H1,
            title: 'Survey Override',
            className: F.marginTop60,
            children: [
                (0, i.jsx)(m.vwX, { children: 'Copy the ID of the Survey you want to test:' }),
                (0, i.jsxs)('form', {
                    className: U.surveyOverride,
                    onSubmit: (e) => {
                        e.preventDefault(), t.length > 0 ? x.Xq(t) : x.Xq(null);
                    },
                    children: [
                        (0, i.jsx)(m.oil, {
                            className: U.surveyOverrideInput,
                            value: t,
                            onChange: n
                        }),
                        (0, i.jsx)(m.zxk, {
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
    let t = (0, d.e7)([N.Z], () => N.Z.overrideId()),
        [n, r] = s.useState(null !== (e = N.Z.overrideId()) && void 0 !== e ? e : '');
    return (0, i.jsx)(P.F, {
        setting: M.s6.DEVELOPER_OPTIONS_CHANGELOG_OVERRIDE,
        children: (0, i.jsxs)(m.hjN, {
            tag: m.RB0.H1,
            title: 'Changelog Override',
            className: F.marginTop60,
            children: [
                (0, i.jsx)(m.vwX, { children: 'Enter the ID of the changelog you want to test' }),
                (0, i.jsxs)('div', {
                    className: U.surveyOverride,
                    children: [
                        (0, i.jsx)(m.oil, {
                            className: U.surveyOverrideInput,
                            value: n,
                            onChange: r
                        }),
                        (0, i.jsx)(m.zxk, {
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
let er = es;
