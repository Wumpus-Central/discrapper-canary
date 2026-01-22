n.d(t, {
    A: () => b,
}),
    n(896048);
var r,
    i = n(311907),
    a = n(73153),
    s = n(761640),
    o = n(309010),
    l = n(168186);

function c(e, t, n) {
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

function u(e) {
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
                c(e, t, n[t]);
            });
    }
    return e;
}
let d = {};

function f() {
    return (d = {}), !0;
}

function p(e) {
    return (
        e in d ||
            (d[e] = {
                activeCommand: null,
                activeCommandSection: null,
                activeOptionName: null,
                preferredCommandId: null,
                optionStates: {},
                initialValues: {},
                commandOrigin: null,
            }),
        d[e]
    );
}

function _(e) {
    var t;
    let {
            channelId: n,
            command: r,
            section: i,
            initialValues: a,
            location: s,
            triggerSection: o,
            queryLength: c,
            sectionName: u,
            query: d,
            searchResultsPosition: f,
            source: _,
            commandOrigin: h,
        } = e,
        m = p(n);
    if ((null == r ? void 0 : r.id) === (null == (t = m.activeCommand) ? void 0 : t.id)) return !1;
    (m.activeCommand = r),
        (m.activeCommandSection = i),
        (m.activeOptionName = null),
        (m.preferredCommandId = null),
        (m.initialValues = null != a ? a : {}),
        (m.commandOrigin = null != h ? h : null),
        (m.source = _);
    let g = {};
    return (
        (null == r ? void 0 : r.options) != null &&
            r.options.forEach((e) => {
                g[e.name] = {
                    isActive: !1,
                    hasValue: !1,
                    lastValidationResult: null,
                    optionValue: null,
                };
            }),
        (m.optionStates = g),
        null != r &&
            (0, l.my)({
                command: r,
                location: s,
                triggerSection: o,
                queryLength: c,
                sectionName: u,
                query: d,
                searchResultsPosition: f,
                source: _,
            }),
        !0
    );
}

function h(e) {
    var t, n;
    let { channelId: r, commandId: i } = e,
        a = p(r);
    return (
        i !== a.preferredCommandId &&
        (null !== a.preferredCommandId ||
            i !== (null != (t = null == (n = a.activeCommand) ? void 0 : n.id) ? t : null)) &&
        ((a.activeCommand = null), (a.activeOptionName = null), (a.preferredCommandId = i), (a.optionStates = {}), !0)
    );
}

function m(e) {
    let { channelId: t, changedOptionStates: n } = e,
        r = p(t),
        i = u({}, r.optionStates);
    for (let [e, t] of Object.entries(n)) {
        var a, s, o;
        if (!(e in r.optionStates)) continue;
        if (!(void 0 !== t.hasValue ? t.hasValue : i[e].hasValue)) {
            (i[e] = {
                hasValue: !1,
                isActive: !1,
                lastValidationResult: null,
                optionValue: null,
                location: void 0,
                length: void 0,
            }),
                r.activeOptionName === e && (r.activeOptionName = null);
            continue;
        }
        let n = i[e];
        (i[e] = {
            hasValue: !0,
            isActive: void 0 !== t.isActive ? t.isActive : n.isActive,
            lastValidationResult: void 0 !== t.lastValidationResult ? t.lastValidationResult : n.lastValidationResult,
            optionValue: null != (a = t.optionValue) ? a : n.optionValue,
            location: null != (s = t.location) ? s : n.location,
            length: null != (o = t.length) ? o : n.length,
        }),
            void 0 !== t.isActive &&
                (t.isActive
                    ? (null != r.activeOptionName &&
                          r.activeOptionName !== e &&
                          ((i[r.activeOptionName] = u({}, i[r.activeOptionName])),
                          (i[r.activeOptionName].isActive = !1)),
                      (r.activeOptionName = e))
                    : e === r.activeOptionName && (r.activeOptionName = null));
    }
    return (r.optionStates = i), !0;
}

function g(e) {
    let { channelId: t, preferredCommandId: n, command: r, section: i, location: a, changedOptionStates: s } = e,
        o = _({
            type: "APPLICATION_COMMAND_SET_ACTIVE_COMMAND",
            channelId: t,
            command: r,
            section: i,
            location: a,
        }),
        l = h({
            type: "APPLICATION_COMMAND_SET_PREFERRED_COMMAND",
            channelId: t,
            commandId: n,
        }),
        c = m({
            type: "APPLICATION_COMMAND_UPDATE_OPTIONS",
            channelId: t,
            changedOptionStates: s,
        });
    return o || l || c;
}
class E extends (r = i.Ay.Store) {
    initialize() {
        this.waitFor(s.Ay, o.A),
            s.Ay.addChangeListener(() => {
                let e = o.A.getChannelId();
                if (null == e) return (d = {}), !0;
                let t = s.Ay.getCurrentSidebarChannelId(e);
                if (null != t && t in d) return !1;
                d =
                    e in d
                        ? {
                              [e]: d[e],
                          }
                        : {};
            });
    }
    getActiveCommand(e) {
        return p(e).activeCommand;
    }
    getActiveCommandSection(e) {
        return p(e).activeCommandSection;
    }
    getActiveOptionName(e) {
        return p(e).activeOptionName;
    }
    getActiveOption(e) {
        var t, n, r;
        let i = p(e);
        return null !=
            (t =
                null == (r = i.activeCommand) || null == (n = r.options)
                    ? void 0
                    : n.find((e) => e.name === i.activeOptionName))
            ? t
            : null;
    }
    getPreferredCommandId(e) {
        return p(e).preferredCommandId;
    }
    getOptionStates(e) {
        return p(e).optionStates;
    }
    getOptionState(e, t) {
        return p(e).optionStates[t];
    }
    getCommandOrigin(e) {
        return p(e).commandOrigin;
    }
    getSource(e) {
        return p(e).source;
    }
    getOption(e, t) {
        var n, r;
        return null == (r = p(e).activeCommand) || null == (n = r.options) ? void 0 : n.find((e) => e.name === t);
    }
    getState(e) {
        return u({}, p(e));
    }
}
c(E, "displayName", "ApplicationCommandStore");
let b = new E(a.h, {
    CONNECTION_OPEN: f,
    CHANNEL_SELECT: f,
    LOGOUT: f,
    APPLICATION_COMMAND_SET_ACTIVE_COMMAND: _,
    APPLICATION_COMMAND_SET_PREFERRED_COMMAND: h,
    APPLICATION_COMMAND_UPDATE_OPTIONS: m,
    APPLICATION_COMMAND_UPDATE_CHANNEL_STATE: g,
});
