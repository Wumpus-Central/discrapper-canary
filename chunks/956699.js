n.d(t, { Z: () => ex }), n(388685), n(49124), n(35282), n(781311), n(415506);
var i = n(951288),
    r = n(647438),
    s = n(120356),
    a = n.n(s),
    l = n(392711),
    o = n.n(l),
    c = n(268146),
    d = n(442837),
    u = n(433517),
    m = n(692547),
    p = n(481060),
    g = n(570140),
    h = n(661111),
    f = n(179658),
    b = n(491428),
    x = n(225433),
    _ = n(484614),
    j = n(386506),
    E = n(865427),
    C = n(802098),
    O = n(663993),
    v = n(600164),
    S = n(482215),
    T = n(581612),
    N = n(580747),
    I = n(38618),
    y = n(375657),
    A = n(171393),
    P = n(837268),
    R = n(32300),
    D = n(371651),
    Z = n(398269),
    w = n(921801),
    k = n(857192),
    L = n(558724),
    B = n(808506),
    M = n(626135),
    U = n(709054),
    V = n(998502),
    G = n(210887),
    F = n(695346),
    H = n(306052),
    z = n(10298),
    W = n(526156),
    Y = n(726985),
    K = n(981631),
    q = n(908442),
    X = n(674336),
    J = n(620842),
    Q = n(197571),
    $ = n(154257);
function ee(e, t, n) {
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
function et(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                ee(e, t, n[t]);
            });
    }
    return e;
}
function en(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let ei = ["discord_web", "discord_marketing", "discord_developers", "discord_ios", "discord_android"],
    er = [
        {
            value: "branch",
            label: "Branch Name",
        },
        {
            value: "id",
            label: "Commit SHA",
        },
    ];
function es(e) {
    return "discord_ios" in e || "discord_android" in e;
}
class ea extends r.Component {
    render() {
        let { project: e, overrideType: t, overrideId: n, disabled: r, error: s } = this.props;
        return (0, i.jsxs)(v.Z, {
            direction: v.Z.Direction.VERTICAL,
            className: a()(X.buildOverrideGroup, Q.marginBottom20, J.card, X.row),
            children: [
                (0, i.jsx)(x.Z, {
                    className: a()(X.removeBuildOverride, { [X.removeBuildOverrideDisabled]: r }),
                    onClick: r ? void 0 : this.handleRemoveBuildOverride,
                }),
                (0, i.jsxs)(v.Z, {
                    className: Q.marginBottom8,
                    children: [
                        (0, i.jsx)(v.Z.Child, {
                            basis: "50%",
                            children: (0, i.jsx)(p.xJW, {
                                title: "Override Type",
                                className: X.item,
                                children: (0, i.jsx)(p.q4e, {
                                    options: er,
                                    onChange: this.handleOverrideTypeChanged,
                                    value: t,
                                    isDisabled: r,
                                }),
                            }),
                        }),
                        (0, i.jsx)(v.Z.Child, {
                            basis: "50%",
                            children: (0, i.jsx)(p.xJW, {
                                title: "branch" === t ? "Branch Name" : "Commit SHA",
                                className: X.item,
                                children: (0, i.jsx)(p.oil, {
                                    value: n,
                                    onChange: this.handleOverrideIdChanged,
                                    disabled: r,
                                }),
                            }),
                        }),
                    ],
                }),
                (0, i.jsxs)(v.Z.Child, {
                    children: [
                        null != s &&
                            "" !== s &&
                            (0, i.jsx)(p.R94, {
                                className: X.item,
                                style: { color: m.Z.unsafe_rawColors.RED_400.css },
                                type: p.R94.Types.DESCRIPTION,
                                children: s,
                            }),
                        (0, i.jsxs)(p.R94, {
                            className: X.item,
                            type: p.R94.Types.DESCRIPTION,
                            children: [
                                "This controls the build that will be served for the ",
                                (0, i.jsx)("code", { children: e }),
                                " project.",
                            ],
                        }),
                    ],
                }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            ee(this, "handleRemoveBuildOverride", () => {
                this.props.onBuildOverrideRemoved(this.props.project);
            }),
            ee(this, "handleOverrideIdChanged", (e) => {
                this.props.onBuildOverrideUpdated(this.props.project, { id: e });
            }),
            ee(this, "handleOverrideTypeChanged", (e) => {
                this.props.onBuildOverrideUpdated(this.props.project, {
                    type: e,
                    id: "",
                });
            });
    }
}
class el extends r.Component {
    async refreshBuildOverrides() {
        this.setState({ loading: !0 });
        let e = await (0, E.Ce)();
        this.setState({
            loading: !1,
            buildOverrides: e,
            loadedBuildOverrides: o().cloneDeep(e),
            errors: {},
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
        return o().without(ei, ...t);
    }
    renderEmpty() {
        return (0, i.jsx)(p.ubH, {
            theme: G.Z.theme,
            className: a()(Q.marginTop40, Q.marginBottom20),
            children: (0, i.jsx)(p.OZU, { children: "You have no build overrides configured." }),
        });
    }
    renderItems() {
        let { buildOverrides: e, saving: t, errors: n } = this.state;
        return null == e
            ? null
            : o().map(e, (e, r) =>
                  (0, i.jsx)(
                      ea,
                      {
                          project: r,
                          overrideType: e.type,
                          overrideId: e.id,
                          disabled: t,
                          error: n[r],
                          onBuildOverrideUpdated: this.handleBuildOverrideUpdated,
                          onBuildOverrideRemoved: this.handleBuildOverrideRemoved,
                      },
                      r,
                  ),
              );
    }
    renderRefreshButton() {
        return !this.state.didSave || this.isDirty()
            ? null
            : (0, i.jsx)(v.Z, {
                  grow: 0,
                  direction: v.Z.Direction.HORIZONTAL_REVERSE,
                  children: (0, i.jsx)(v.Z.Child, {
                      grow: 0,
                      children: (0, i.jsx)(p.zxk, {
                          variant: "secondary",
                          text: "Reload App",
                          onClick: () => location.reload(),
                      }),
                  }),
              });
    }
    renderLinkButton() {
        let { buildOverrides: e } = this.state;
        return null == e || 0 === Object.keys(e).length
            ? null
            : (0, i.jsx)(v.Z, {
                  grow: 0,
                  direction: v.Z.Direction.HORIZONTAL_REVERSE,
                  children: (0, i.jsx)(v.Z.Child, {
                      grow: 0,
                      children: (0, i.jsx)(p.zxk, {
                          variant: "primary",
                          text: "Generate Public Link",
                          onClick: this.handleLinkGeneration,
                      }),
                  }),
              });
    }
    renderSaveButton() {
        if (!this.isDirty()) return null;
        let { saving: e, buildOverrides: t } = this.state;
        return (0, i.jsxs)(v.Z, {
            grow: 0,
            direction: v.Z.Direction.HORIZONTAL_REVERSE,
            children: [
                (0, i.jsx)(v.Z.Child, {
                    grow: 0,
                    children: (0, i.jsx)(p.zxk, {
                        variant: "active",
                        text: "Save Build Overrides",
                        disabled: es(null != t ? t : {}),
                        onClick: this.handleSaveChanges,
                        loading: e,
                    }),
                }),
                (0, i.jsx)(v.Z.Child, {
                    grow: 0,
                    children: (0, i.jsx)(p.zxk, {
                        variant: "critical-primary",
                        text: "Discard Changes",
                        onClick: this.handleDiscardChanges,
                        disabled: e,
                    }),
                }),
            ],
        });
    }
    render() {
        let e,
            { loading: t, saving: n, buildOverrides: r } = this.state;
        e = t
            ? (0, i.jsx)(p.$jN, { className: Q.marginTop20 })
            : null != r && 0 === Object.keys(r).length
              ? this.renderEmpty()
              : this.renderItems();
        let s = !n && !t && this.getAvailableProjects().length > 0,
            a =
                es(null != r ? r : {}) && "stable" !== window.GLOBAL_ENV.RELEASE_CHANNEL
                    ? (0, i.jsx)(p.Text, {
                          color: "text-danger",
                          variant: "text-md/normal",
                          children:
                              "Mobile build overrides must be generated using the desktop/web stable client for now!",
                      })
                    : null;
        return (0, i.jsx)(w.F, {
            setting: Y.s6.DEVELOPER_OPTIONS_BUILD_OVERRIDE,
            children: (0, i.jsxs)(p.hjN, {
                className: Q.marginTop60,
                children: [
                    (0, i.jsxs)(v.Z, {
                        className: Q.marginBottom20,
                        children: [
                            (0, i.jsx)(v.Z.Child, {
                                children: (0, i.jsx)(p.vwX, {
                                    tag: p.RB0.H1,
                                    children: "Build Overrides",
                                }),
                            }),
                            (0, i.jsx)(v.Z.Child, {
                                grow: 0,
                                children: (0, i.jsx)(p.zxk, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Add Build Override",
                                    onClick: this.handleAddBuildOverride,
                                    disabled: !s,
                                }),
                            }),
                        ],
                    }),
                    (0, i.jsxs)(v.Z, {
                        direction: v.Z.Direction.VERTICAL,
                        children: [
                            a,
                            e,
                            (0, i.jsxs)(v.Z, {
                                grow: 0,
                                direction: v.Z.Direction.HORIZONTAL_REVERSE,
                                children: [
                                    this.renderRefreshButton(),
                                    this.renderSaveButton(),
                                    this.renderLinkButton(),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    }
    constructor(...e) {
        super(...e),
            ee(this, "state", {
                loading: !0,
                buildOverrides: {},
                loadedBuildOverrides: {},
                errors: {},
                saving: !1,
                didSave: !1,
            }),
            ee(this, "handleAddBuildOverride", async () => {
                var e;
                let t = await ((e = this.getAvailableProjects()),
                new Promise((t) => {
                    (0, p.h7j)((n) => {
                        let r = (e) => {
                            n.onClose(), t(e);
                        };
                        return (0, i.jsxs)(
                            p.Y0X,
                            en(et({}, n), {
                                "aria-label": "Choose A Project to Override",
                                parentComponent: "UserSettingsDeveloperOptions",
                                children: [
                                    (0, i.jsx)(p.xBx, {
                                        separator: !1,
                                        children: (0, i.jsx)(p.X6q, {
                                            variant: "heading-lg/semibold",
                                            children: "Choose A Project to Override",
                                        }),
                                    }),
                                    (0, i.jsx)(p.hzk, {
                                        children: (0, i.jsx)("div", {
                                            className: X.buildOverrideList,
                                            children: e.map((e) =>
                                                (0, i.jsx)(
                                                    p.zxk,
                                                    {
                                                        variant: "active",
                                                        text: e,
                                                        value: e,
                                                        onClick: () => r(e),
                                                    },
                                                    e,
                                                ),
                                            ),
                                        }),
                                    }),
                                    (0, i.jsx)(p.mzw, {
                                        children: (0, i.jsx)(p.zxk, {
                                            variant: "secondary",
                                            text: "Nevermind",
                                            onClick: () => r(null),
                                        }),
                                    }),
                                ],
                            }),
                        );
                    });
                }));
                if (null == t) return;
                let n = en(et({}, this.state.buildOverrides), {
                    [t]: {
                        type: "branch",
                        id: "",
                    },
                });
                this.setState({ buildOverrides: n });
            }),
            ee(this, "handleBuildOverrideUpdated", (e, t) => {
                let { buildOverrides: n } = this.state,
                    i = et({}, null != n ? n[e] : {}, t),
                    r = en(et({}, this.state.buildOverrides), { [e]: i });
                this.setState({ buildOverrides: r });
            }),
            ee(this, "handleBuildOverrideRemoved", (e) => {
                let t = et({}, this.state.buildOverrides);
                delete t[e], this.setState({ buildOverrides: t });
            }),
            ee(this, "handleDiscardChanges", () => {
                this.setState({
                    buildOverrides: o().cloneDeep(this.state.loadedBuildOverrides),
                    errors: {},
                    didSave: !1,
                });
            }),
            ee(this, "handleSaveChanges", async () => {
                let { buildOverrides: e } = this.state;
                if (null == e) return;
                this.setState({ saving: !0 });
                let t = await (0, j.aD)(e);
                if (200 === t.status) {
                    let e = t.body;
                    this.setState({
                        buildOverrides: e,
                        loadedBuildOverrides: o().cloneDeep(e),
                        errors: {},
                        didSave: !0,
                        saving: !1,
                    });
                } else if (400 === t.status) {
                    let e = t.body;
                    this.setState({
                        errors: e,
                        saving: !1,
                        didSave: !1,
                    });
                } else
                    this.setState({
                        saving: !1,
                        didSave: !1,
                    });
            }),
            ee(this, "handleLinkGeneration", () => {
                let { buildOverrides: e } = this.state;
                (0, p.h7j)((t) => (0, i.jsx)(eo, en(et({}, t), { buildOverrides: e })));
            });
    }
}
class eo extends r.Component {
    isMobile() {
        var e;
        return es(null != (e = this.props.buildOverrides) ? e : {});
    }
    renderSettingsForm() {
        let {
                ttlSeconds: e,
                releaseChannel: t,
                userIdEntry: n,
                userIdEntryError: r,
                allowedVersions: s,
                allowedVersionEntry: a,
                allowedVersionEntryError: l,
                allowLoggedOut: o,
                experiments: c,
                experimentsError: d,
            } = this.state,
            u = q.S6.find((t) => t.value === e),
            m = s.map((e) => ({
                label: e,
                value: e,
            }));
        return (0, i.jsxs)(v.Z.Child, {
            basis: "70%",
            children: [
                (0, i.jsx)(p.xJW, {
                    title: "Expire After",
                    className: Q.marginBottom20,
                    children: (0, i.jsx)(p.q4e, {
                        value: null != u ? u.value : null,
                        options: q.S6,
                        onChange: this.handleExpirationChange,
                    }),
                }),
                this.isMobile()
                    ? null
                    : (0, i.jsx)(p.xJW, {
                          title: "Release Channel",
                          className: Q.marginBottom20,
                          children: (0, i.jsx)(p.q4e, {
                              value: t,
                              options: q.F$,
                              onChange: this.handleReleaseChannelChange,
                          }),
                      }),
                this.isMobile()
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(p.xJW, {
                                  title: "Add allowed app version (required)",
                                  className: Q.marginBottom20,
                                  children: (0, i.jsxs)(v.Z, {
                                      direction: v.Z.Direction.HORIZONTAL,
                                      children: [
                                          (0, i.jsx)(v.Z.Child, {
                                              wrap: !0,
                                              basis: "90%",
                                              children: (0, i.jsx)(p.oil, {
                                                  autoFocus: !0,
                                                  value: a,
                                                  onKeyDown: this.handleAllowedVersionEnter,
                                                  error: l,
                                                  onChange: this.handleAllowedVersionEntry,
                                                  placeholder: "Example: 34",
                                              }),
                                          }),
                                          (0, i.jsx)(p.zxk, {
                                              variant: "primary",
                                              text: "Add",
                                              onClick: this.handleAddAllowedVersion,
                                          }),
                                      ],
                                  }),
                              }),
                              (0, i.jsx)(p.xJW, {
                                  title: "Remove allowed app version",
                                  className: Q.marginBottom20,
                                  children: (0, i.jsx)(p.q4e, {
                                      value: null,
                                      options: m,
                                      onChange: this.handleRemoveAllowedVersion,
                                      isDisabled: 0 === s.length,
                                  }),
                              }),
                          ],
                      })
                    : null,
                this.isMobile()
                    ? null
                    : (0, i.jsxs)(p.xJW, {
                          title: "Limit to User IDs (optional)",
                          className: Q.marginBottom20,
                          children: [
                              (0, i.jsx)(v.Z, {
                                  direction: v.Z.Direction.HORIZONTAL,
                                  children: (0, i.jsx)(v.Z.Child, {
                                      wrap: !0,
                                      basis: "90%",
                                      children: (0, i.jsx)(p.Kx8, {
                                          value: n,
                                          error: r,
                                          onBlur: () => this.setUserEntryError(""),
                                          onChange: this.handleUserIDEntry,
                                      }),
                                  }),
                              }),
                              (0, i.jsx)(p.Text, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  className: Q.marginTop8,
                                  children: "User IDs can be separated by whitespace or commas.",
                              }),
                          ],
                      }),
                (0, i.jsxs)(p.xJW, {
                    title: "Client Experiment Override",
                    className: Q.marginBottom20,
                    children: [
                        (0, i.jsx)(v.Z, {
                            direction: v.Z.Direction.HORIZONTAL,
                            children: (0, i.jsx)(v.Z.Child, {
                                wrap: !0,
                                basis: "90%",
                                children: (0, i.jsx)(p.Kx8, {
                                    value: c,
                                    error: d,
                                    onChange: this.handleExperiments,
                                    placeholder: '{"2022-01_threads":1}',
                                }),
                            }),
                        }),
                        (0, i.jsx)(p.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            className: Q.marginTop8,
                            children:
                                "Locally override the given experiments to the given bucket. This ONLY applies locally and WILL NOT affect the server. When the user clears build override, the experiment override is removed as well.",
                        }),
                    ],
                }),
                (0, i.jsx)(p.j7V, {
                    onChange: this.handleAllowLoggedOut,
                    value: o,
                    children: "Allow logged out users",
                }),
            ],
        });
    }
    renderPayloadBlock() {
        let e = JSON.stringify(this.generatePayload(), null, 2),
            t = () => e,
            r = (0, i.jsx)(O.GI, {
                createPromise: () => Promise.resolve().then(n.bind(n, 364964)),
                webpackId: 364964,
                renderFallback: t,
                render: (n) => {
                    let r = n.highlight("json", e, !0);
                    return null == r
                        ? t()
                        : (0, i.jsx)("code", {
                              className: "hljs scroller "
                                  .concat(r.language, " ")
                                  .concat($.scrollbarGhost, " ")
                                  .concat(X.codebox),
                              dangerouslySetInnerHTML: { __html: r.value },
                          });
                },
            });
        return (0, i.jsx)(v.Z.Child, { children: (0, i.jsx)(p.Zbd, { children: (0, i.jsx)("pre", { children: r }) }) });
    }
    renderLinkForm() {
        let { status: e, statusText: t, publicLink: n } = this.state,
            r = "text-default";
        switch (e) {
            case 0:
                r = "text-feedback-critical";
                break;
            case 1:
                r = "text-feedback-warning";
        }
        return (0, i.jsxs)("div", {
            children: [
                (0, i.jsx)(p.xJW, {
                    title: "Signed Link",
                    children: (0, i.jsxs)(v.Z, {
                        children: [
                            (0, i.jsx)(v.Z.Child, {
                                wrap: !0,
                                basis: "75%",
                                children: (0, i.jsx)(_.Z, { value: n }),
                            }),
                            (0, i.jsx)(p.zxk, {
                                variant: "primary",
                                text: "Generate Link",
                                onClick: this.handleGenerateLink,
                            }),
                        ],
                    }),
                }),
                (0, i.jsx)(p.Text, {
                    variant: "text-md/normal",
                    color: r,
                    className: a()(Q.marginBottom8, Q.marginTop8),
                    children: t,
                }),
            ],
        });
    }
    render() {
        let { onClose: e, transitionState: t } = this.props;
        return (0, i.jsxs)(p.Y0X, {
            size: p.CgR.LARGE,
            transitionState: t,
            "aria-label": "Generate Public Build Override Link",
            parentComponent: "UserSettingsDeveloperOptions",
            children: [
                (0, i.jsxs)(p.xBx, {
                    justify: v.Z.Justify.BETWEEN,
                    separator: !1,
                    children: [
                        (0, i.jsx)(p.X6q, {
                            variant: "heading-lg/semibold",
                            children: "Generate Public Build Override Link",
                        }),
                        (0, i.jsx)(p.olH, { onClick: e }),
                    ],
                }),
                (0, i.jsxs)(p.hzk, {
                    children: [
                        (0, i.jsxs)(v.Z, {
                            children: [this.renderSettingsForm(), this.renderPayloadBlock()],
                        }),
                        this.renderLinkForm(),
                    ],
                }),
            ],
        });
    }
    constructor(...e) {
        var t;
        super(...e),
            (t = this),
            ee(this, "state", {
                ttlSeconds: 3600,
                releaseChannel: "all",
                userIds: new Set(),
                userIdEntry: "",
                userIdEntryError: null,
                allowedVersions: [],
                allowedVersionEntry: "",
                allowedVersionEntryError: null,
                publicLink: " ",
                statusText: null,
                status: 0,
                allowLoggedOut: !1,
            }),
            ee(this, "setUserEntryError", (e) => {
                this.setState({ userIdEntryError: e });
            }),
            ee(this, "setStatusMessage", function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                t.setState({
                    statusText: e,
                    status: n,
                });
            }),
            ee(this, "handleUserIDEntry", (e) => {
                if (!/^[\d\s,]*$/.test(e)) return this.setUserEntryError("User IDs are numbers!");
                let t = new Set(e.split(/[,\s]+/).filter(Boolean));
                this.setState({
                    userIdEntry: e,
                    userIds: t,
                });
            }),
            ee(this, "setAllowedVersionError", (e) => {
                this.setState({ allowedVersionEntryError: e });
            }),
            ee(this, "handleAllowedVersionEntry", (e) => {
                this.setState({ allowedVersionEntry: e });
            }),
            ee(this, "handleAllowedVersionEnter", (e) => {
                e.charCode === K.yXg.ENTER && this.handleAddAllowedVersion();
            }),
            ee(this, "handleAddAllowedVersion", () => {
                let { allowedVersions: e, allowedVersionEntry: t } = this.state;
                return 0 === (t = t.trim()).length
                    ? this.setAllowedVersionError("Enter a valid version number!")
                    : e.indexOf(t) >= 0
                      ? this.setAllowedVersionError("You already added that version!")
                      : void this.setState({
                            allowedVersions: [...e, t],
                            allowedVersionEntry: "",
                            allowedVersionEntryError: "",
                        });
            }),
            ee(this, "handleRemoveAllowedVersion", (e) => {
                let { allowedVersions: t } = this.state;
                (t = t.filter((t) => t !== e)), this.setState({ allowedVersions: t });
            }),
            ee(this, "handleAllowLoggedOut", (e) => {
                this.setState({ allowLoggedOut: e });
            }),
            ee(this, "handleExpirationChange", (e) => {
                this.setState({ ttlSeconds: e });
            }),
            ee(this, "handleReleaseChannelChange", (e) => {
                this.setState({ releaseChannel: e });
            }),
            ee(this, "handleExperiments", (e) => {
                if (0 === e.trim().length) return void this.setState({ experimentsError: void 0 });
                try {
                    let t = JSON.parse(e);
                    for (let e in t) {
                        if (null == e.match(/^[0-9]{4}\-[0-9]{2}_[a-z0-9_]+$/))
                            return void this.setState({
                                experimentsError: "".concat(e, " is an invalid experiment name"),
                            });
                        if ("number" != typeof t[e])
                            return void this.setState({
                                experimentsError: "".concat(e, " has an invalid bucket override"),
                            });
                    }
                } catch (e) {
                    this.setState({ experimentsError: "Unable to parse experiments ".concat(e.message) });
                    return;
                }
                this.setState({
                    experiments: e,
                    experimentsError: void 0,
                });
            }),
            ee(this, "generatePayload", () => ({
                overrides: this.props.buildOverrides,
                meta: {
                    release_channel: "all" === this.state.releaseChannel ? null : this.state.releaseChannel,
                    ttl_seconds: this.state.ttlSeconds,
                    user_ids: Array.from(this.state.userIds),
                    allowed_versions: this.isMobile() ? this.state.allowedVersions : void 0,
                    allow_logged_out: this.state.allowLoggedOut,
                    experiments: null == this.state.experiments ? null : JSON.parse(this.state.experiments),
                },
            })),
            ee(this, "handleGenerateLink", async () => {
                if (this.isMobile() && 0 === this.state.allowedVersions.length)
                    return void this.setAllowedVersionError("You must add at least one allowed version for iOS");
                this.setStatusMessage(null);
                let e = this.generatePayload(),
                    t = await (0, j.M3)(e);
                !1 !== t.error
                    ? this.setStatusMessage(JSON.stringify(t.error), 0)
                    : (this.setState({ publicLink: t.url.toString() }),
                      0 === e.meta.user_ids.length &&
                          this.setStatusMessage(
                              "Warning! No users added to the whitelist! This link could be used by anyone to override their build.",
                              1,
                          ));
            });
    }
}
function ec() {
    let { horizontalSpacing: e, verticalSpacing: t, maxHorizontalSpacing: n, maxVerticalSpacing: s } = (0, S.i)(),
        a = r.useMemo(() => Array.from({ length: n + 1 }, (e, t) => t), [n]),
        l = r.useMemo(() => Array.from({ length: s + 1 }, (e, t) => t), [s]),
        { cssDebuggingEnabled: o, layoutDebuggingEnabled: c } = (0, d.cj)([k.default], () => ({
            cssDebuggingEnabled: k.default.cssDebuggingEnabled,
            layoutDebuggingEnabled: k.default.layoutDebuggingEnabled,
        })),
        u = (0, N.Z)("highlight_void_toggleables");
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(w.F, {
                setting: Y.s6.DEVELOPER_OPTIONS_CSS_DEBUGGING,
                children: (0, i.jsx)(p.j7V, {
                    value: o,
                    note: "Display raw colors as pink. Toggling this will refresh the browser.",
                    onChange: (e) => {
                        (0, f.y)({ cssDebuggingEnabled: e }), setTimeout(() => location.reload(), 500);
                    },
                    children: "Enable CSS Debugging",
                }),
            }),
            (0, i.jsx)(w.F, {
                setting: Y.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING,
                children: (0, i.jsx)(p.j7V, {
                    value: c,
                    note: "Renders a grid on top of the app to help debug layout alignment issues.",
                    onChange: (e) => {
                        (0, f.y)({ layoutDebuggingEnabled: e });
                    },
                    children: "Enable Layout Debugging",
                }),
            }),
            (0, i.jsxs)(w.F, {
                setting: Y.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING_OPTIONS,
                children: [
                    (0, i.jsxs)(p.hjN, {
                        className: Q.marginBottom20,
                        children: [
                            (0, i.jsx)(p.vwX, { children: "Horizontal Grid Spacing" }),
                            (0, i.jsx)(p.R94, {
                                className: Q.marginBottom20,
                                type: p.geA.DESCRIPTION,
                                children:
                                    "Adjust the spacing between horizontal grid lines. Set to 0 to disable horizontal grid lines.",
                            }),
                            (0, i.jsx)(p.iRW, {
                                initialValue: e,
                                minValue: 0,
                                maxValue: n,
                                markers: a,
                                onValueChange: (e) => S.i.getState().setHorizontalSpacing(e),
                                onValueRender: (e) => "".concat(Math.round(e), "px"),
                                onMarkerRender: (e) => (e % 4 == 0 ? "".concat(e) : void 0),
                                equidistant: !0,
                            }),
                        ],
                    }),
                    (0, i.jsxs)(p.hjN, {
                        className: Q.marginBottom20,
                        children: [
                            (0, i.jsx)(p.vwX, { children: "Vertical Grid Spacing" }),
                            (0, i.jsx)(p.R94, {
                                className: Q.marginBottom20,
                                type: p.geA.DESCRIPTION,
                                children:
                                    "Adjust the spacing between vertical grid lines. Set to 0 to disable vertical grid lines.",
                            }),
                            (0, i.jsx)(p.iRW, {
                                initialValue: t,
                                minValue: 0,
                                maxValue: s,
                                markers: l,
                                onValueChange: (e) => S.i.getState().setVerticalSpacing(e),
                                onValueRender: (e) => "".concat(Math.round(e), "px"),
                                onMarkerRender: (e) => (e % 4 == 0 ? "".concat(e) : void 0),
                                equidistant: !0,
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(w.F, {
                setting: Y.s6.DEVELOPER_OPTIONS_HIGHLIGHT_VOID_TOGGLEABLES,
                children: (0, i.jsx)(p.j7V, {
                    value: u,
                    note: "Highlights toggleable components: Checkbox (green), RadioGroup (yellow), Switch (blue)",
                    onChange: (e) => (0, T.Z)("highlight_void_toggleables", e),
                    children: "Highlight Toggleable Components",
                }),
            }),
        ],
    });
}
function ed() {
    let {
            isTracingRequests: e,
            isForcedCanary: t,
            isAxeEnabled: n,
            isSourceMapsEnabled: r,
            isIdleStatusIndicatorEnabled: s,
            onlyShowPreviewAppCollections: a,
            disableAppCollectionsCache: l,
            preventPopoutClose: o,
            logKeyboardMismatches: c,
        } = (0, d.cj)([k.default], () => ({
            isTracingRequests: k.default.isTracingRequests,
            isForcedCanary: k.default.isForcedCanary,
            isAxeEnabled: k.default.isAxeEnabled,
            isSourceMapsEnabled: k.default.sourceMapsEnabled,
            isIdleStatusIndicatorEnabled: k.default.isIdleStatusIndicatorEnabled,
            onlyShowPreviewAppCollections: k.default.onlyShowPreviewAppCollections,
            disableAppCollectionsCache: k.default.disableAppCollectionsCache,
            preventPopoutClose: k.default.preventPopoutClose,
            logKeyboardMismatches: k.default.logKeyboardMismatches,
        })),
        u = (0, A.Z)("go_back_to_regular_input"),
        m = F.zY.useSetting();
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(w.F, {
                setting: Y.s6.DEVELOPER_OPTIONS_TRACING_REQUESTS,
                children: (0, i.jsx)(p.j7V, {
                    value: e,
                    note: "Force trace all client requests with APM",
                    onChange: (e) => (0, f.y)({ trace: e }),
                    children: "Enable Tracing Requests",
                }),
            }),
            (0, i.jsx)(w.F, {
                setting: Y.s6.DEVELOPER_OPTIONS_FORCED_CANARY,
                children: (0, i.jsx)(p.j7V, {
                    value: t,
                    note: "Force all API requests to canary instances",
                    onChange: (e) => (0, f.y)({ canary: e }),
                    children: "Enable Forced Canary",
                }),
            }),
            (0, i.jsx)(w.F, {
                setting: Y.s6.DEVELOPER_OPTIONS_ALWAYS_DELIVER,
                children: (0, i.jsx)(p.j7V, {
                    value: m,
                    note: "Make user targetable for all active ads",
                    onChange: (e) => F.zY.updateSetting(e),
                    children: "Ads auto-targeting",
                }),
            }),
            (0, i.jsx)(w.F, {
                setting: Y.s6.DEVELOPER_OPTIONS_SOURCE_MAPS,
                children: (0, i.jsx)(p.j7V, {
                    value: r,
                    note: "Only enable on devices you trust.",
                    onChange: (e) => (0, f.y)({ sourceMapsEnabled: e }),
                    children: "Enable source maps to be loaded on this client",
                }),
            }),
            (0, i.jsx)(w.F, {
                setting: Y.s6.DEVELOPER_OPTIONS_IDLE_STATUS_INDICATOR,
                children: (0, i.jsx)(p.j7V, {
                    value: s,
                    note: "Displays a floating idle status indicator",
                    onChange: (e) => (0, f.y)({ idleStatusIndicatorEnabled: e }),
                    children: "Enable idle status indicator",
                }),
            }),
            (0, i.jsx)(w.F, {
                setting: Y.s6.DEVELOPER_OPTIONS_ACCESSIBILITY_AUDITING,
                children: (0, i.jsx)(p.j7V, {
                    value: n,
                    note: "Runs Axe auditing for accessibility while using the app. Violations get logged to the console. Only available in development",
                    onChange: (e) => (0, f.y)({ axeEnabled: e }),
                    children: "Enable Accessibility Auditing",
                }),
            }),
            (0, i.jsx)(w.F, {
                setting: Y.s6.DEVELOPER_OPTIONS_PREVENT_POPOUT_CLOSE,
                children: (0, i.jsx)(p.j7V, {
                    value: o,
                    note: "This is to enable viewing console logs for popout crashes. This may leave your app/popout in a weird state.",
                    onChange: (e) => (0, f.y)({ preventPopoutClose: e }),
                    children: "Prevent Popouts From Closing Automatically",
                }),
            }),
            (0, i.jsx)(w.F, {
                setting: Y.s6.DEVELOPER_OPTIONS_LOG_KEYBOARD_MISMATCHES,
                children: (0, i.jsx)(p.j7V, {
                    value: c,
                    note: "Logs mismatches in detected keyboard codes to the console",
                    onChange: (e) => (0, f.y)({ logKeyboardMismatches: e }),
                    children: "Enable Logging of Keyboard Mismatches",
                }),
            }),
            (0, i.jsx)(w.F, {
                setting: Y.s6.DEVELOPER_OPTIONS_PREVIEW_UNPUBLISHED_COLLECTIONS,
                children: (0, i.jsx)(p.j7V, {
                    value: a,
                    note: "Only show application collections (e.g. in App Directory, App Launcher in text) that have the 'preview' active state. This disables application collections cache, too, so you can see collections updates immediately.",
                    onChange: (e) => (0, f.y)({ onlyShowPreviewAppCollections: e }),
                    children: "Preview unpublished application collections",
                }),
            }),
            (0, i.jsx)(w.F, {
                setting: Y.s6.DEVELOPER_OPTIONS_DISABLE_APP_COLLECTIONS_CACHE,
                children: (0, i.jsx)(p.j7V, {
                    value: l,
                    note: "Disable application collections cache so that you can see updates to collections immediately.",
                    onChange: (e) => (0, f.y)({ disableAppCollectionsCache: e }),
                    children: "Disable application collections cache",
                }),
            }),
            (0, i.jsx)(w.F, {
                setting: Y.s6.DEVELOPER_OPTIONS_DISABLE_ALIGN_CHAT_INPUT,
                children: (0, i.jsx)(p.j7V, {
                    value: u,
                    note: "Disable aligning chat input to the bottom of the screen",
                    onChange: (e) => {
                        M.default.track(K.rMx.GUILD_JOIN_FEEDBACK, {
                            reason: "disable-align-chat-input",
                            rating: e ? "yes" : "no",
                        }),
                            (0, y.s)("go_back_to_regular_input", { enabled: e });
                    },
                    children: "Disable aligning chat input to the bottom of the screen",
                }),
            }),
        ],
    });
}
function eu() {
    let {
        isLoggingGatewayEvents: e,
        isLoggingOverlayEvents: t,
        isLoggingAnalyticsEvents: n,
        isAnalyticsDebuggerEnabled: r,
    } = (0, d.cj)([k.default], () => ({
        isLoggingGatewayEvents: k.default.isLoggingGatewayEvents,
        isLoggingOverlayEvents: k.default.isLoggingOverlayEvents,
        isLoggingAnalyticsEvents: k.default.isLoggingAnalyticsEvents,
        isAnalyticsDebuggerEnabled: k.default.isAnalyticsDebuggerEnabled,
    }));
    return (0, i.jsxs)(w.F, {
        setting: Y.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
        children: [
            (0, i.jsx)(w.F, {
                setting: Y.s6.DEVELOPER_OPTIONS_GATEWAY_EVENTS_TO_CONSOLE,
                children: (0, i.jsx)(p.j7V, {
                    value: e,
                    note: "Logs all incoming and outgoing gateway events to the developer console, enable verbose logging in the developer console to see! This includes all message content.",
                    onChange: (e) => (0, f.y)({ logGatewayEvents: e }),
                    children: "Enable Logging of Gateway Events to Console",
                }),
            }),
            (0, i.jsx)(w.F, {
                setting: Y.s6.DEVELOPER_OPTIONS_OVERLAY_RPC_EVENTS_COMMANDS,
                children: (0, i.jsx)(p.j7V, {
                    value: t,
                    note: "Logs all overlay related RPC events. Super noisy if an overlay is connected",
                    onChange: (e) => (0, f.y)({ logOverlayEvents: e }),
                    children: "Enable Logging of Overlay RPC Events & Commands",
                }),
            }),
            (0, i.jsx)(w.F, {
                setting: Y.s6.DEVELOPER_OPTIONS_ANALYTICS_EVENTS_LOGGING,
                children: (0, i.jsx)(p.j7V, {
                    value: n,
                    note: "Logs all analytics events to the developer console",
                    onChange: (e) => (0, f.y)({ logAnalyticsEvents: e }),
                    children: "Enable Logging of Analytics Events",
                }),
            }),
            (0, i.jsx)(w.F, {
                setting: Y.s6.DEVELOPER_OPTIONS_ANALYTICS_DEBUGGER_VIEW,
                children: (0, i.jsx)(p.j7V, {
                    value: r,
                    note: "Displays a floating debugger with viewed impressions",
                    onChange: (e) => (0, f.y)({ analyticsDebuggerEnabled: e }),
                    children: "Enable standard analytics debugger view",
                }),
            }),
        ],
    });
}
function em() {
    throw Error("Send help");
}
function ep() {
    let e = (0, R.XE)("developer_settings"),
        t = (0, d.e7)([D.default], () => D.default.getForcedRenderMode()),
        [n, s] = r.useState(!1),
        [a, l] = r.useState(""),
        o = e || t === P.R5.OUT_OF_PROCESS_V3 || t === P.R5.OUT_OF_PROCESS_V3_LIMITED_INTERACTION;
    return (r.useEffect(() => {
        (async () => {
            l(await (0, B.getOverlayURL)());
        })();
    }, []),
    n)
        ? {}
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)("div", {
                      className: [X.buttonsContainer, Q.marginBottom20].join(" "),
                      children: [
                          (0, i.jsx)(w.F, {
                              setting: Y.s6.DEVELOPER_OPTIONS_OVERRIDE_OPEN_OVERLAY,
                              children: o
                                  ? (0, i.jsx)(p.zxk, {
                                        variant: "primary",
                                        text: "Open Overlay",
                                        onClick: () => (0, Z.f)(t),
                                    })
                                  : (0, i.jsx)(p.zxk, {
                                        variant: "primary",
                                        text: "Open Overlay",
                                        onClick: () => window.open(a, "_blank"),
                                        disabled: "" === a,
                                    }),
                          }),
                          (0, i.jsx)(w.F, {
                              setting: Y.s6.DEVELOPER_OPTIONS_RESET_SOCKET,
                              children: (0, i.jsx)(p.zxk, {
                                  variant: "primary",
                                  text: "Reset Socket",
                                  onClick: () => {
                                      I.Z.getSocket().close(), I.Z.getSocket().connect();
                                  },
                              }),
                          }),
                          (0, i.jsx)(w.F, {
                              setting: Y.s6.DEVELOPER_OPTIONS_CLEAR_CACHES,
                              children: (0, i.jsx)(p.zxk, {
                                  variant: "primary",
                                  text: "Clear Caches",
                                  onClick: () => {
                                      g.Z.dispatch({
                                          type: "CLEAR_CACHES",
                                          reason: "Requested by user",
                                          preventWritingCachesAgainThisSession: !0,
                                          resetSocket: !0,
                                      });
                                  },
                              }),
                          }),
                      ],
                  }),
                  (0, i.jsx)(w.F, {
                      setting: Y.s6.DEVELOPER_OPTIONS_CRASHES,
                      children: (0, i.jsx)(p.hjN, {
                          title: "Crashes",
                          tag: p.RB0.H1,
                          children: (0, i.jsxs)("div", {
                              className: X.buttonsContainer,
                              children: [
                                  (0, i.jsx)(p.q4e, {
                                      value: void 0,
                                      options: [
                                          {
                                              value: void 0,
                                              label: "Native libdiscord crash",
                                          },
                                          {
                                              value: 0,
                                              label: "Abort()",
                                          },
                                          {
                                              value: 1,
                                              label: "SIGSEGV()",
                                          },
                                          {
                                              value: 2,
                                              label: "EXCEPTION_ACCESS_VIOLATION",
                                          },
                                          {
                                              value: 3,
                                              label: "RaiseFailFastException",
                                          },
                                          {
                                              value: 4,
                                              label: "Out of Memory",
                                          },
                                      ],
                                      onChange: (e) => null != e && V.ZP.crash(e),
                                  }),
                                  (0, i.jsx)(p.q4e, {
                                      value: void 0,
                                      options: [
                                          {
                                              value: void 0,
                                              label: "Native JS crash",
                                          },
                                          {
                                              value: c.Xo.RendererProcessDelayed,
                                              label: "Delayed exception in renderer process",
                                          },
                                          {
                                              value: c.Xo.RendererProcess,
                                              label: "Exception in renderer process",
                                          },
                                          {
                                              value: c.Xo.MainProcess,
                                              label: "Exception in main process",
                                          },
                                      ],
                                      onChange: (e) => (null != e ? void V.ZP.triggerJSException(e) : void 0),
                                  }),
                                  (0, i.jsx)(p.zxk, {
                                      variant: "primary",
                                      text: "React Crash",
                                      onClick: () => s(!0),
                                  }),
                                  (0, i.jsx)(p.zxk, {
                                      variant: "primary",
                                      text: "onClick Throw",
                                      onClick: em,
                                  }),
                              ],
                          }),
                      }),
                  }),
              ],
          });
}
function eg() {
    let e = (0, d.e7)([L.Z], () => L.Z.getSurveyOverride()),
        [t, n] = r.useState(null != e ? e : "");
    return (0, i.jsx)(w.F, {
        setting: Y.s6.DEVELOPER_OPTIONS_SURVEY_OVERRIDE,
        children: (0, i.jsxs)(p.hjN, {
            tag: p.RB0.H1,
            title: "Survey Override",
            className: Q.marginTop60,
            children: [
                (0, i.jsx)(p.vwX, { children: "Copy the ID of the Survey you want to test:" }),
                (0, i.jsx)("form", {
                    className: X.surveyOverride,
                    onSubmit: (e) => {
                        e.preventDefault(), t.length > 0 ? b.Xq(t) : b.Xq(null);
                    },
                    children: (0, i.jsxs)(p.Kqy, {
                        direction: "horizontal",
                        gap: 8,
                        children: [
                            (0, i.jsx)(p.oil, {
                                fullWidth: !0,
                                value: t,
                                onChange: n,
                            }),
                            (0, i.jsx)(p.zxk, {
                                variant: "primary",
                                text: "Save Override",
                                type: "submit",
                            }),
                        ],
                    }),
                }),
            ],
        }),
    });
}
function eh() {
    var e;
    let t = (0, d.e7)([C.Z], () => C.Z.overrideId()),
        [n, s] = r.useState(null != (e = C.Z.overrideId()) ? e : "");
    return (0, i.jsx)(w.F, {
        setting: Y.s6.DEVELOPER_OPTIONS_CHANGELOG_OVERRIDE,
        children: (0, i.jsx)(p.hjN, {
            tag: p.RB0.H1,
            title: "Changelog",
            className: Q.marginTop60,
            children: (0, i.jsxs)(p.Kqy, {
                gap: 16,
                children: [
                    (0, i.jsxs)(p.Kqy, {
                        gap: 8,
                        children: [
                            (0, i.jsx)(p.vwX, { children: "Changelog Override" }),
                            (0, i.jsx)(p.R94, {
                                children:
                                    "Enter the ID of the changelog you want to test This will override the changelog that is shown to the user.",
                            }),
                            (0, i.jsxs)(p.Kqy, {
                                direction: "horizontal",
                                gap: 8,
                                children: [
                                    (0, i.jsx)(p.oil, {
                                        fullWidth: !0,
                                        value: n,
                                        onChange: s,
                                    }),
                                    (0, i.jsx)(p.zxk, {
                                        variant: "primary",
                                        text: "Update Changelog",
                                        onClick: () => {
                                            "" === n ? h.Z.setChangelogOverride(null) : h.Z.setChangelogOverride(n);
                                        },
                                        disabled: t === n,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, i.jsxs)(p.Kqy, {
                        gap: 8,
                        children: [
                            (0, i.jsx)(p.vwX, { children: "Reset Changelog" }),
                            (0, i.jsx)(p.R94, {
                                children: "This will reset the changelog, so it will show again on the next startup.",
                            }),
                            (0, i.jsx)(p.zxk, {
                                variant: "primary",
                                text: "Reset Changelog",
                                onClick: () => {
                                    let e = new Date("2018-01-01");
                                    F.l4.updateSetting(U.default.fromTimestamp(e.getTime())),
                                        u.K.set("lastChangeLogDate", e);
                                },
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
function ef() {
    return (0, i.jsx)(w.F, {
        setting: Y.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
        children: (0, i.jsx)(p.hjN, {
            tag: p.RB0.H1,
            title: "Client-Side Overrides",
            className: Q.marginTop60,
            children: (0, i.jsx)(p.Kqy, {
                gap: 16,
                children: (0, i.jsx)("div", {
                    className: [X.buttonsContainer, Q.marginBottom20].join(" "),
                    children: (0, i.jsx)(H.g, {}),
                }),
            }),
        }),
    });
}
function eb() {
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(el, {}), (0, i.jsx)(eg, {}), (0, i.jsx)(eh, {}), (0, i.jsx)(ef, {})],
    });
}
let ex = function () {
    return (0, i.jsx)(z.N, {
        header: "Developer Options",
        children: (0, i.jsx)(W.Z, {
            parentSetting: Y.s6.DEVELOPER_OPTIONS,
            settingsSection: K.oAB.DEVELOPER_OPTIONS,
            tabs: [
                {
                    title: "Overrides",
                    component: eb,
                    setting: Y.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                },
                {
                    title: "Manual Triggers",
                    component: ep,
                    setting: Y.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
                },
                {
                    title: "Developer Flags",
                    component: ed,
                    setting: Y.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                },
                {
                    title: "Logging",
                    component: eu,
                    setting: Y.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                },
                {
                    title: "Design Tools",
                    component: ec,
                    setting: Y.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                },
            ],
        }),
    });
};
