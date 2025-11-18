n.d(t, { Z: () => ey }), n(388685), n(35282), n(781311), n(49124), n(415506);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n.n(s),
    c = n(793030),
    u = n(268146),
    d = n(442837),
    f = n(433517),
    _ = n(681715),
    p = n(481060),
    h = n(570140),
    m = n(661111),
    g = n(179658),
    E = n(491428),
    b = n(225433),
    y = n(484614),
    O = n(386506),
    v = n(865427),
    I = n(802098),
    T = n(600164),
    S = n(482215),
    A = n(581612),
    C = n(580747),
    N = n(38618),
    R = n(375657),
    P = n(171393),
    D = n(837268),
    w = n(32300),
    L = n(371651),
    x = n(398269),
    M = n(921801),
    j = n(857192),
    k = n(558724),
    U = n(808506),
    G = n(626135),
    B = n(709054),
    Z = n(998502),
    F = n(210887),
    V = n(695346),
    H = n(306052),
    Y = n(10298),
    W = n(526156),
    K = n(202858),
    z = n(726985),
    q = n(981631),
    X = n(908442),
    Q = n(670873),
    J = n(504401),
    $ = n(10198);
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
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                ee(e, t, n[t]);
            });
    }
    return e;
}
function en(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function er(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : en(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let ei = ["discord_web", "discord_marketing", "discord_developers", "discord_ios", "discord_android"],
    ea = [
        {
            value: "branch",
            label: "Branch Name",
        },
        {
            value: "id",
            label: "Commit SHA",
        },
    ];
function eo(e) {
    return "discord_ios" in e || "discord_android" in e;
}
class es extends i.Component {
    render() {
        let { project: e, overrideType: t, overrideId: n, disabled: i, error: a } = this.props,
            s = "branch" === t ? "Branch Name" : "Commit SHA";
        return (0, r.jsxs)(T.Z, {
            direction: T.Z.Direction.VERTICAL,
            className: o()(Q.buildOverrideGroup, $.marginBottom20, J.card, Q.row),
            children: [
                (0, r.jsx)(b.Z, {
                    className: o()(Q.removeBuildOverride, { [Q.removeBuildOverrideDisabled]: i }),
                    onClick: i ? void 0 : this.handleRemoveBuildOverride,
                }),
                (0, r.jsxs)(T.Z, {
                    className: $.marginBottom8,
                    children: [
                        (0, r.jsx)(T.Z.Child, {
                            basis: "50%",
                            children: (0, r.jsx)(p.q4e, {
                                label: "Override Type",
                                className: Q.item,
                                options: ea,
                                onChange: this.handleOverrideTypeChanged,
                                value: t,
                                isDisabled: i,
                            }),
                        }),
                        (0, r.jsx)(T.Z.Child, {
                            wrap: !0,
                            basis: "50%",
                            children: (0, r.jsx)(p.oil, {
                                label: s,
                                value: n,
                                onChange: this.handleOverrideIdChanged,
                                disabled: i,
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)(T.Z.Child, {
                    children: [
                        null != a &&
                            "" !== a &&
                            (0, r.jsx)(p.Text, {
                                className: Q.item,
                                color: "text-feedback-critical",
                                variant: "text-sm/normal",
                                children: a,
                            }),
                        (0, r.jsxs)(p.Text, {
                            variant: "text-sm/normal",
                            className: Q.item,
                            children: [
                                "This controls the build that will be served for the ",
                                (0, r.jsx)("code", { children: e }),
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
class el extends i.Component {
    async refreshBuildOverrides() {
        this.setState({ loading: !0 });
        let e = await (0, v.Ce)();
        this.setState({
            loading: !1,
            buildOverrides: e,
            loadedBuildOverrides: l().cloneDeep(e),
            errors: {},
        });
    }
    isDirty() {
        let { buildOverrides: e, loadedBuildOverrides: t } = this.state;
        return !l().isEqual(e, t);
    }
    componentDidMount() {
        this.refreshBuildOverrides();
    }
    getAvailableProjects() {
        let { buildOverrides: e } = this.state;
        if (null == e) return [];
        let t = Object.keys(e);
        return l().without(ei, ...t);
    }
    renderEmpty() {
        return (0, r.jsx)(p.ubH, {
            theme: F.Z.theme,
            className: o()($.marginTop40, $.marginBottom20),
            children: (0, r.jsx)(p.OZU, { children: "You have no build overrides configured." }),
        });
    }
    renderItems() {
        let { buildOverrides: e, saving: t, errors: n } = this.state;
        return null == e
            ? null
            : l().map(e, (e, i) =>
                  (0, r.jsx)(
                      es,
                      {
                          project: i,
                          overrideType: e.type,
                          overrideId: e.id,
                          disabled: t,
                          error: n[i],
                          onBuildOverrideUpdated: this.handleBuildOverrideUpdated,
                          onBuildOverrideRemoved: this.handleBuildOverrideRemoved,
                      },
                      i,
                  ),
              );
    }
    renderRefreshButton() {
        return !this.state.didSave || this.isDirty()
            ? null
            : (0, r.jsx)(p.Button, {
                  variant: "secondary",
                  text: "Reload App",
                  onClick: () => location.reload(),
              });
    }
    renderLinkButton() {
        let { buildOverrides: e } = this.state;
        return null == e || 0 === Object.keys(e).length
            ? null
            : (0, r.jsx)(_.u, {
                  text: "Generate Public Link",
                  children: (0, r.jsx)(p.hU, {
                      variant: "secondary",
                      icon: p.xPt,
                      "aria-label": "Generate Public Link",
                      onClick: this.handleLinkGeneration,
                  }),
              });
    }
    renderSaveButton() {
        if (!this.isDirty()) return null;
        let { saving: e, buildOverrides: t } = this.state;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(p.Button, {
                    variant: "critical-primary",
                    text: "Discard Changes",
                    onClick: this.handleDiscardChanges,
                    disabled: e,
                }),
                (0, r.jsx)(p.Button, {
                    variant: "primary",
                    text: "Save Build Overrides",
                    disabled: eo(null != t ? t : {}),
                    onClick: this.handleSaveChanges,
                    loading: e,
                }),
            ],
        });
    }
    render() {
        let e,
            { loading: t, saving: n, buildOverrides: i } = this.state;
        e = t
            ? (0, r.jsx)(p.$jN, { className: $.marginTop20 })
            : null != i && 0 === Object.keys(i).length
              ? this.renderEmpty()
              : this.renderItems();
        let a = !n && !t && this.getAvailableProjects().length > 0,
            o =
                eo(null != i ? i : {}) && "stable" !== window.GLOBAL_ENV.RELEASE_CHANNEL
                    ? (0, r.jsx)(p.Text, {
                          color: "text-danger",
                          variant: "text-md/normal",
                          children:
                              "Mobile build overrides must be generated using the desktop/web stable client for now!",
                      })
                    : null;
        return (0, r.jsx)(M.F, {
            setting: z.s6.DEVELOPER_OPTIONS_BUILD_OVERRIDE,
            children: (0, r.jsx)(p.C3N, {
                label: "Build Overrides",
                children: (0, r.jsxs)(p.Kqy, {
                    gap: 16,
                    children: [
                        (0, r.jsx)(p.q4e, {
                            label: "Add Build Override",
                            placeholder: "discord_project",
                            description: "Select a project to create a build override for.",
                            value: null,
                            options: this.getAvailableProjects().map((e) => ({
                                label: e,
                                value: e,
                            })),
                            onChange: this.handleAddBuildOverride,
                            isDisabled: !a,
                        }),
                        o,
                        e,
                        (0, r.jsxs)(p.ButtonGroup, {
                            justify: "end",
                            children: [this.renderRefreshButton(), this.renderLinkButton(), this.renderSaveButton()],
                        }),
                    ],
                }),
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
            ee(this, "handleAddBuildOverride", (e) => {
                if (null == e) return;
                let t = er(et({}, this.state.buildOverrides), {
                    [e]: {
                        type: "branch",
                        id: "",
                    },
                });
                this.setState({ buildOverrides: t });
            }),
            ee(this, "handleBuildOverrideUpdated", (e, t) => {
                let { buildOverrides: n } = this.state,
                    r = et({}, null != n ? n[e] : {}, t),
                    i = er(et({}, this.state.buildOverrides), { [e]: r });
                this.setState({ buildOverrides: i });
            }),
            ee(this, "handleBuildOverrideRemoved", (e) => {
                let t = et({}, this.state.buildOverrides);
                delete t[e], this.setState({ buildOverrides: t });
            }),
            ee(this, "handleDiscardChanges", () => {
                this.setState({
                    buildOverrides: l().cloneDeep(this.state.loadedBuildOverrides),
                    errors: {},
                    didSave: !1,
                });
            }),
            ee(this, "handleSaveChanges", async () => {
                let { buildOverrides: e } = this.state;
                if (null == e) return;
                this.setState({ saving: !0 });
                let t = await (0, O.aD)(e);
                if (200 === t.status) {
                    let e = t.body;
                    this.setState({
                        buildOverrides: e,
                        loadedBuildOverrides: l().cloneDeep(e),
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
                (0, p.h7j)((t) => (0, r.jsx)(ec, er(et({}, t), { buildOverrides: e })));
            });
    }
}
class ec extends i.Component {
    isMobile() {
        var e;
        return eo(null != (e = this.props.buildOverrides) ? e : {});
    }
    renderSettingsForm() {
        let {
                ttlSeconds: e,
                releaseChannel: t,
                userIdEntry: n,
                userIdEntryError: i,
                allowedVersions: a,
                allowedVersionEntry: o,
                allowedVersionEntryError: s,
                allowLoggedOut: l,
                experiments: c,
                experimentsError: u,
            } = this.state,
            d = X.S6.find((t) => t.value === e),
            f = a.map((e) => ({
                label: e,
                value: e,
            }));
        return (0, r.jsxs)(p.Kqy, {
            gap: 20,
            children: [
                (0, r.jsx)(p.q4e, {
                    label: "Expire After",
                    value: null != d ? d.value : null,
                    options: X.S6,
                    onChange: this.handleExpirationChange,
                }),
                this.isMobile()
                    ? null
                    : (0, r.jsx)(p.q4e, {
                          label: "Release Channel",
                          value: t,
                          options: X.F$,
                          onChange: this.handleReleaseChannelChange,
                      }),
                this.isMobile()
                    ? (0, r.jsxs)(p.Kqy, {
                          gap: 20,
                          children: [
                              (0, r.jsx)(p.oil, {
                                  label: "Add allowed app version (required)",
                                  autoFocus: !0,
                                  value: o,
                                  onKeyDown: this.handleAllowedVersionEnter,
                                  error: s,
                                  onChange: this.handleAllowedVersionEntry,
                                  placeholder: "Example: 34",
                                  trailing: {
                                      icon: p.qJs,
                                      onClick: this.handleAddAllowedVersion,
                                      "aria-label": "Add",
                                  },
                              }),
                              (0, r.jsx)(p.q4e, {
                                  label: "Remove allowed app version",
                                  value: null,
                                  options: f,
                                  onChange: this.handleRemoveAllowedVersion,
                                  isDisabled: 0 === a.length,
                              }),
                          ],
                      })
                    : null,
                this.isMobile()
                    ? null
                    : (0, r.jsx)(p.Kx8, {
                          label: "Limit to User IDs (optional)",
                          helperText: "User IDs can be separated by whitespace or commas.",
                          value: n,
                          error: i,
                          onBlur: () => this.setUserEntryError(""),
                          onChange: this.handleUserIDEntry,
                      }),
                (0, r.jsx)(p.Kx8, {
                    label: "Client Experiment Override",
                    description:
                        "Locally override the given experiments to the given bucket. This ONLY applies locally and WILL NOT affect the server. When the user clears build override, the experiment override is removed as well.",
                    value: c,
                    error: u,
                    onChange: this.handleExperiments,
                    placeholder: '{"2022-01_threads":1}',
                }),
                (0, r.jsx)(p.rsf, {
                    label: "Allow logged out users",
                    checked: l,
                    onChange: this.handleAllowLoggedOut,
                }),
            ],
        });
    }
    renderHelpMessage() {
        let { statusText: e, status: t } = this.state;
        if (null == e) return (0, r.jsx)("div", {});
        let n = p.QYI.INFO;
        switch (t) {
            case 0:
                n = p.QYI.ERROR;
                break;
            case 1:
                n = p.QYI.WARNING;
        }
        return (0, r.jsx)(p.Wn, {
            messageType: n,
            children: e,
        });
    }
    render() {
        let { onClose: e, transitionState: t } = this.props,
            { publicLink: n } = this.state;
        return (0, r.jsx)(c.Modal, {
            title: "Generate Public Build Override Link",
            input: this.renderHelpMessage(),
            actionBarInput: (0, r.jsx)(y.Z, { value: n }),
            transitionState: t,
            "aria-label": "Generate Public Build Override Link",
            actions: [
                {
                    variant: "primary",
                    text: "Generate Link",
                    onClick: this.handleGenerateLink,
                },
            ],
            onClose: e,
            children: this.renderSettingsForm(),
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
                e.charCode === q.yXg.ENTER && this.handleAddAllowedVersion();
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
                        if (null == e.match(/^[0-9]{4}\-[0-9]{2}(-|_)[a-z0-9_-]+$/))
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
                    t = await (0, O.M3)(e);
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
function eu() {
    let { horizontalSpacing: e, verticalSpacing: t, maxHorizontalSpacing: n, maxVerticalSpacing: a } = (0, S.i)(),
        o = i.useMemo(() => Array.from({ length: n + 1 }, (e, t) => t), [n]),
        s = i.useMemo(() => Array.from({ length: a + 1 }, (e, t) => t), [a]),
        { cssDebuggingEnabled: l, layoutDebuggingEnabled: c } = (0, d.cj)([j.default], () => ({
            cssDebuggingEnabled: j.default.cssDebuggingEnabled,
            layoutDebuggingEnabled: j.default.layoutDebuggingEnabled,
        })),
        u = (0, C.Z)("highlight_void_toggleables"),
        f = (0, C.Z)("highlight_mana_components");
    return (0, r.jsxs)(p.C3N, {
        label: "Design Tools",
        children: [
            (0, r.jsx)(M.F, {
                setting: z.s6.DEVELOPER_OPTIONS_CSS_DEBUGGING,
                children: (0, r.jsx)(p.rsf, {
                    label: "Enable CSS Debugging",
                    description: "Display raw colors as pink. Toggling this will refresh the browser.",
                    checked: l,
                    onChange: (e) => {
                        (0, g.y)({ cssDebuggingEnabled: e }), setTimeout(() => location.reload(), 500);
                    },
                }),
            }),
            (0, r.jsx)(M.F, {
                setting: z.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING,
                children: (0, r.jsx)(p.rsf, {
                    label: "Enable Layout Debugging",
                    description: "Renders a grid on top of the app to help debug layout alignment issues.",
                    checked: c,
                    onChange: (e) => {
                        (0, g.y)({ layoutDebuggingEnabled: e });
                    },
                }),
            }),
            (0, r.jsxs)(M.F, {
                setting: z.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING_OPTIONS,
                children: [
                    (0, r.jsx)(p.iRW, {
                        label: "Horizontal Grid Spacing",
                        description:
                            "Adjust the spacing between horizontal grid lines. Set to 0 to disable horizontal grid lines.",
                        initialValue: e,
                        minValue: 0,
                        maxValue: n,
                        markers: o,
                        onValueChange: (e) => S.i.getState().setHorizontalSpacing(e),
                        onValueRender: (e) => "".concat(Math.round(e), "px"),
                        onMarkerRender: (e) => (e % 4 == 0 ? "".concat(e) : void 0),
                        equidistant: !0,
                    }),
                    (0, r.jsx)(p.iRW, {
                        label: "Vertical Grid Spacing",
                        description:
                            "Adjust the spacing between vertical grid lines. Set to 0 to disable vertical grid lines.",
                        initialValue: t,
                        minValue: 0,
                        maxValue: a,
                        markers: s,
                        onValueChange: (e) => S.i.getState().setVerticalSpacing(e),
                        onValueRender: (e) => "".concat(Math.round(e), "px"),
                        onMarkerRender: (e) => (e % 4 == 0 ? "".concat(e) : void 0),
                        equidistant: !0,
                    }),
                ],
            }),
            (0, r.jsx)(M.F, {
                setting: z.s6.DEVELOPER_OPTIONS_HIGHLIGHT_MANA_COMPONENTS,
                children: (0, r.jsx)(p.rsf, {
                    label: "Highlight Mana Components",
                    description: "Highlights all Mana design system components for easier debugging",
                    checked: f,
                    onChange: (e) => (0, A.Z)("highlight_mana_components", e),
                }),
            }),
            (0, r.jsx)(M.F, {
                setting: z.s6.DEVELOPER_OPTIONS_HIGHLIGHT_VOID_TOGGLEABLES,
                children: (0, r.jsx)(p.rsf, {
                    label: "Highlight Void Toggleable Components",
                    description:
                        "Highlights deprecated toggleable components: VoidCheckbox (green), VoidRadioGroup (yellow), VoidSwitch (blue)",
                    checked: u,
                    onChange: (e) => (0, A.Z)("highlight_void_toggleables", e),
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
            isSourceMapsEnabled: i,
            isIdleStatusIndicatorEnabled: a,
            onlyShowPreviewAppCollections: o,
            disableAppCollectionsCache: s,
            preventPopoutClose: l,
            logKeyboardMismatches: c,
        } = (0, d.cj)([j.default], () => ({
            isTracingRequests: j.default.isTracingRequests,
            isForcedCanary: j.default.isForcedCanary,
            isAxeEnabled: j.default.isAxeEnabled,
            isSourceMapsEnabled: j.default.sourceMapsEnabled,
            isIdleStatusIndicatorEnabled: j.default.isIdleStatusIndicatorEnabled,
            onlyShowPreviewAppCollections: j.default.onlyShowPreviewAppCollections,
            disableAppCollectionsCache: j.default.disableAppCollectionsCache,
            preventPopoutClose: j.default.preventPopoutClose,
            logKeyboardMismatches: j.default.logKeyboardMismatches,
        })),
        u = (0, P.Z)("go_back_to_regular_input"),
        f = V.zY.useSetting();
    return (0, r.jsxs)(p.C3N, {
        label: "Developer Flags",
        children: [
            (0, r.jsx)(M.F, {
                setting: z.s6.DEVELOPER_OPTIONS_TRACING_REQUESTS,
                children: (0, r.jsx)(p.rsf, {
                    label: "Enable Tracing Requests",
                    description: "Force trace all client requests with APM",
                    checked: e,
                    onChange: (e) => (0, g.y)({ trace: e }),
                }),
            }),
            (0, r.jsx)(M.F, {
                setting: z.s6.DEVELOPER_OPTIONS_FORCED_CANARY,
                children: (0, r.jsx)(p.rsf, {
                    label: "Enable Forced Canary",
                    description: "Force all API requests to canary instances",
                    checked: t,
                    onChange: (e) => (0, g.y)({ canary: e }),
                }),
            }),
            (0, r.jsx)(M.F, {
                setting: z.s6.DEVELOPER_OPTIONS_ALWAYS_DELIVER,
                children: (0, r.jsx)(p.rsf, {
                    label: "Ads auto-targeting",
                    description: "Make user targetable for all active ads",
                    checked: f,
                    onChange: (e) => V.zY.updateSetting(e),
                }),
            }),
            (0, r.jsx)(M.F, {
                setting: z.s6.DEVELOPER_OPTIONS_SOURCE_MAPS,
                children: (0, r.jsx)(p.rsf, {
                    label: "Enable source maps to be loaded on this client",
                    description: "Only enable on devices you trust.",
                    checked: i,
                    onChange: (e) => (0, g.y)({ sourceMapsEnabled: e }),
                }),
            }),
            (0, r.jsx)(M.F, {
                setting: z.s6.DEVELOPER_OPTIONS_IDLE_STATUS_INDICATOR,
                children: (0, r.jsx)(p.rsf, {
                    label: "Enable idle status indicator",
                    description: "Displays a floating idle status indicator",
                    checked: a,
                    onChange: (e) => (0, g.y)({ idleStatusIndicatorEnabled: e }),
                }),
            }),
            (0, r.jsx)(M.F, {
                setting: z.s6.DEVELOPER_OPTIONS_ACCESSIBILITY_AUDITING,
                children: (0, r.jsx)(p.rsf, {
                    label: "Enable Accessibility Auditing",
                    description:
                        "Runs Axe auditing for accessibility while using the app. Violations get logged to the console. Only available in development",
                    checked: n,
                    onChange: (e) => (0, g.y)({ axeEnabled: e }),
                }),
            }),
            (0, r.jsx)(M.F, {
                setting: z.s6.DEVELOPER_OPTIONS_PREVENT_POPOUT_CLOSE,
                children: (0, r.jsx)(p.rsf, {
                    label: "Prevent Popouts From Closing Automatically",
                    description:
                        "This is to enable viewing console logs for popout crashes. This may leave your app/popout in a weird state.",
                    checked: l,
                    onChange: (e) => (0, g.y)({ preventPopoutClose: e }),
                }),
            }),
            (0, r.jsx)(M.F, {
                setting: z.s6.DEVELOPER_OPTIONS_LOG_KEYBOARD_MISMATCHES,
                children: (0, r.jsx)(p.rsf, {
                    label: "Enable Logging of Keyboard Mismatches",
                    description: "Logs mismatches in detected keyboard codes to the console",
                    checked: c,
                    onChange: (e) => (0, g.y)({ logKeyboardMismatches: e }),
                }),
            }),
            (0, r.jsx)(M.F, {
                setting: z.s6.DEVELOPER_OPTIONS_PREVIEW_UNPUBLISHED_COLLECTIONS,
                children: (0, r.jsx)(p.rsf, {
                    label: "Preview unpublished application collections",
                    description:
                        "Only show application collections (e.g. in App Directory, App Launcher in text) that have the 'preview' active state. This disables application collections cache, too, so you can see collections updates immediately.",
                    checked: o,
                    onChange: (e) => (0, g.y)({ onlyShowPreviewAppCollections: e }),
                }),
            }),
            (0, r.jsx)(M.F, {
                setting: z.s6.DEVELOPER_OPTIONS_DISABLE_APP_COLLECTIONS_CACHE,
                children: (0, r.jsx)(p.rsf, {
                    label: "Disable application collections cache",
                    description:
                        "Disable application collections cache so that you can see updates to collections immediately.",
                    checked: s,
                    onChange: (e) => (0, g.y)({ disableAppCollectionsCache: e }),
                }),
            }),
            (0, r.jsx)(M.F, {
                setting: z.s6.DEVELOPER_OPTIONS_DISABLE_ALIGN_CHAT_INPUT,
                children: (0, r.jsx)(p.rsf, {
                    label: "Disable aligning chat input to the bottom of the screen",
                    description: "Disable aligning chat input to the bottom of the screen",
                    checked: u,
                    onChange: (e) => {
                        G.default.track(q.rMx.GUILD_JOIN_FEEDBACK, {
                            reason: "disable-align-chat-input",
                            rating: e ? "yes" : "no",
                        }),
                            (0, R.s)("go_back_to_regular_input", { enabled: e });
                    },
                }),
            }),
        ],
    });
}
function ef() {
    let {
        isLoggingGatewayEvents: e,
        isLoggingOverlayEvents: t,
        isLoggingAnalyticsEvents: n,
        isAnalyticsDebuggerEnabled: i,
    } = (0, d.cj)([j.default], () => ({
        isLoggingGatewayEvents: j.default.isLoggingGatewayEvents,
        isLoggingOverlayEvents: j.default.isLoggingOverlayEvents,
        isLoggingAnalyticsEvents: j.default.isLoggingAnalyticsEvents,
        isAnalyticsDebuggerEnabled: j.default.isAnalyticsDebuggerEnabled,
    }));
    return (0, r.jsx)(M.F, {
        setting: z.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
        children: (0, r.jsxs)(p.C3N, {
            label: "Logging",
            children: [
                (0, r.jsx)(M.F, {
                    setting: z.s6.DEVELOPER_OPTIONS_GATEWAY_EVENTS_TO_CONSOLE,
                    children: (0, r.jsx)(p.rsf, {
                        label: "Enable Logging of Gateway Events to Console",
                        description:
                            "Logs all incoming and outgoing gateway events to the developer console, enable verbose logging in the developer console to see! This includes all message content.",
                        checked: e,
                        onChange: (e) => (0, g.y)({ logGatewayEvents: e }),
                    }),
                }),
                (0, r.jsx)(M.F, {
                    setting: z.s6.DEVELOPER_OPTIONS_OVERLAY_RPC_EVENTS_COMMANDS,
                    children: (0, r.jsx)(p.rsf, {
                        label: "Enable Logging of Overlay RPC Events & Commands",
                        description: "Logs all overlay related RPC events. Super noisy if an overlay is connected",
                        checked: t,
                        onChange: (e) => (0, g.y)({ logOverlayEvents: e }),
                    }),
                }),
                (0, r.jsx)(M.F, {
                    setting: z.s6.DEVELOPER_OPTIONS_ANALYTICS_EVENTS_LOGGING,
                    children: (0, r.jsx)(p.rsf, {
                        label: "Enable Logging of Analytics Events",
                        description: "Logs all analytics events to the developer console",
                        checked: n,
                        onChange: (e) => (0, g.y)({ logAnalyticsEvents: e }),
                    }),
                }),
                (0, r.jsx)(M.F, {
                    setting: z.s6.DEVELOPER_OPTIONS_ANALYTICS_DEBUGGER_VIEW,
                    children: (0, r.jsx)(p.rsf, {
                        label: "Enable standard analytics debugger view",
                        description: "Displays a floating debugger with viewed impressions",
                        checked: i,
                        onChange: (e) => (0, g.y)({ analyticsDebuggerEnabled: e }),
                    }),
                }),
            ],
        }),
    });
}
function e_() {
    throw Error("Send help");
}
function ep(e) {
    Z.ZP.triggerJSException(e);
}
function eh() {
    let e = (0, w.XE)("developer_settings"),
        t = (0, d.e7)([L.default], () => L.default.getForcedRenderMode()),
        [n, a] = i.useState(!1),
        [o, s] = i.useState(""),
        l = e || t === D.R5.OUT_OF_PROCESS_V3 || t === D.R5.OUT_OF_PROCESS_V3_LIMITED_INTERACTION;
    return (i.useEffect(() => {
        (async () => {
            s(await (0, U.getOverlayURL)());
        })();
    }, []),
    n)
        ? {}
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)("div", {
                      className: [Q.buttonsContainer, $.marginBottom20].join(" "),
                      children: [
                          (0, r.jsx)(M.F, {
                              setting: z.s6.DEVELOPER_OPTIONS_OVERRIDE_OPEN_OVERLAY,
                              children: l
                                  ? (0, r.jsx)(p.Button, {
                                        variant: "primary",
                                        text: "Open Overlay",
                                        onClick: () => (0, x.f)(),
                                    })
                                  : (0, r.jsx)(p.Button, {
                                        variant: "primary",
                                        text: "Open Overlay",
                                        onClick: () => window.open(o, "_blank"),
                                        disabled: "" === o,
                                    }),
                          }),
                          (0, r.jsx)(M.F, {
                              setting: z.s6.DEVELOPER_OPTIONS_RESET_SOCKET,
                              children: (0, r.jsx)(p.Button, {
                                  variant: "primary",
                                  text: "Reset Socket",
                                  onClick: () => {
                                      N.Z.getSocket().close(), N.Z.getSocket().connect();
                                  },
                              }),
                          }),
                          (0, r.jsx)(M.F, {
                              setting: z.s6.DEVELOPER_OPTIONS_CLEAR_CACHES,
                              children: (0, r.jsx)(p.Button, {
                                  variant: "primary",
                                  text: "Clear Caches",
                                  onClick: () => {
                                      h.Z.dispatch({
                                          type: "CLEAR_CACHES",
                                          reason: "Requested by user",
                                          preventWritingCachesAgainThisSession: !0,
                                          resetSocket: !0,
                                      });
                                  },
                              }),
                          }),
                          (0, r.jsx)(M.F, {
                              setting: z.s6.DEVELOPER_OPTIONS_SHOW_TOTP_SUCCESS,
                              children: (0, r.jsx)(p.Button, {
                                  variant: "primary",
                                  text: "Show TOTP Success",
                                  onClick: () => (0, K.Yn)(!0),
                              }),
                          }),
                      ],
                  }),
                  (0, r.jsx)(M.F, {
                      setting: z.s6.DEVELOPER_OPTIONS_CRASHES,
                      children: (0, r.jsx)(p.C3N, {
                          label: "Crashes",
                          children: (0, r.jsxs)("div", {
                              className: Q.buttonsContainer,
                              children: [
                                  (0, r.jsx)(p.q4e, {
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
                                      onChange: (e) => null != e && Z.ZP.crash(e),
                                  }),
                                  (0, r.jsx)(p.q4e, {
                                      value: void 0,
                                      options: [
                                          {
                                              value: void 0,
                                              label: "Native JS crash",
                                          },
                                          {
                                              value: u.Xo.RendererProcessDelayed,
                                              label: "Delayed exception in renderer process",
                                          },
                                          {
                                              value: u.Xo.RendererProcess,
                                              label: "Exception in renderer process",
                                          },
                                          {
                                              value: u.Xo.MainProcess,
                                              label: "Exception in main process",
                                          },
                                      ],
                                      onChange: (e) => (null != e ? ep(e) : void 0),
                                  }),
                                  (0, r.jsx)(p.Button, {
                                      variant: "primary",
                                      text: "React Crash",
                                      onClick: () => a(!0),
                                  }),
                                  (0, r.jsx)(p.Button, {
                                      variant: "primary",
                                      text: "onClick Throw",
                                      onClick: e_,
                                  }),
                              ],
                          }),
                      }),
                  }),
              ],
          });
}
function em() {
    let e = (0, d.e7)([k.Z], () => k.Z.getSurveyOverride()),
        [t, n] = i.useState(null != e ? e : ""),
        a = (e) => {
            e.preventDefault(), t.length > 0 ? E.Xq(t) : E.Xq(null);
        };
    return (0, r.jsx)(M.F, {
        setting: z.s6.DEVELOPER_OPTIONS_SURVEY_OVERRIDE,
        children: (0, r.jsx)("form", {
            className: Q.surveyOverride,
            onSubmit: a,
            children: (0, r.jsx)(p.C3N, {
                label: "Survey Override",
                description: "Copy the ID of the Survey you want to test:",
                children: (0, r.jsxs)(p.Kqy, {
                    direction: "horizontal",
                    gap: 8,
                    children: [
                        (0, r.jsx)(p.oil, {
                            fullWidth: !0,
                            value: t,
                            onChange: n,
                        }),
                        (0, r.jsx)(p.Button, {
                            variant: "primary",
                            text: "Save Override",
                            type: "submit",
                        }),
                    ],
                }),
            }),
        }),
    });
}
function eg() {
    var e;
    let t = (0, d.e7)([I.Z], () => I.Z.overrideId()),
        [n, a] = i.useState(null != (e = I.Z.overrideId()) ? e : ""),
        o = () => {
            "" === n ? m.Z.setChangelogOverride(null) : m.Z.setChangelogOverride(n);
        },
        s = () => {
            let e = new Date("2018-01-01");
            V.l4.updateSetting(B.default.fromTimestamp(e.getTime())), f.K.set("lastChangeLogDate", e);
        };
    return (0, r.jsx)(M.F, {
        setting: z.s6.DEVELOPER_OPTIONS_CHANGELOG_OVERRIDE,
        children: (0, r.jsxs)(p.C3N, {
            label: "Changelog",
            children: [
                (0, r.jsxs)(p.Kqy, {
                    direction: "horizontal",
                    gap: 8,
                    align: "end",
                    children: [
                        (0, r.jsx)(p.oil, {
                            label: "Changelog Override",
                            description:
                                "Enter the ID of the changelog you want to test This will override the changelog that is shown to the user.",
                            fullWidth: !0,
                            value: n,
                            onChange: a,
                        }),
                        (0, r.jsx)(p.Button, {
                            variant: "primary",
                            text: "Update Changelog",
                            onClick: o,
                            disabled: t === n,
                        }),
                    ],
                }),
                (0, r.jsx)(c.gNt, {
                    label: "Reset Changelog",
                    description: "This will reset the changelog, so it will show again on the next startup.",
                    children: (0, r.jsx)(p.Button, {
                        variant: "primary",
                        text: "Reset Changelog",
                        onClick: s,
                    }),
                }),
            ],
        }),
    });
}
function eE() {
    return (0, r.jsx)(M.F, {
        setting: z.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
        children: (0, r.jsx)(p.C3N, {
            label: "Client-Side Overrides",
            children: (0, r.jsx)(H.g, {}),
        }),
    });
}
function eb() {
    return (0, r.jsxs)(p.Kqy, {
        gap: 24,
        children: [
            (0, r.jsx)(el, {}),
            (0, r.jsx)(c.izJ, {}),
            (0, r.jsx)(em, {}),
            (0, r.jsx)(c.izJ, {}),
            (0, r.jsx)(eg, {}),
            (0, r.jsx)(c.izJ, {}),
            (0, r.jsx)(eE, {}),
        ],
    });
}
let ey = function () {
    return (0, r.jsx)(Y.N, {
        header: "Developer Options",
        children: (0, r.jsx)(W.Z, {
            parentSetting: z.s6.DEVELOPER_OPTIONS,
            settingsSection: q.oAB.DEVELOPER_OPTIONS,
            tabs: [
                {
                    title: "Overrides",
                    component: eb,
                    setting: z.s6.DEVELOPER_OPTIONS_OVERRIDES_TAB,
                },
                {
                    title: "Manual Triggers",
                    component: eh,
                    setting: z.s6.DEVELOPER_OPTIONS_MANUAL_TRIGGERS_TAB,
                },
                {
                    title: "Developer Flags",
                    component: ed,
                    setting: z.s6.DEVELOPER_OPTIONS_FLAGS_TAB,
                },
                {
                    title: "Logging",
                    component: ef,
                    setting: z.s6.DEVELOPER_OPTIONS_LOGGING_TAB,
                },
                {
                    title: "Design Tools",
                    component: eu,
                    setting: z.s6.DEVELOPER_OPTIONS_DESIGN_TOOLS_TAB,
                },
            ],
        }),
    });
};
