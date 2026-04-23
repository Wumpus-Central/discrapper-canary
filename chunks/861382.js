"use strict";
n.d(t, { A: () => m });
var i = n(17928),
    r = n(228366),
    s = n(761640),
    a = n(309010),
    o = n(168186);
let l = {};
function d() {
    return (l = {}), !0;
}
function _(e) {
    return (
        e in l ||
            (l[e] = {
                activeCommand: null,
                activeCommandSection: null,
                activeOptionName: null,
                preferredCommandId: null,
                optionStates: {},
                initialValues: {},
                commandOrigin: null,
            }),
        l[e]
    );
}
function u(e) {
    let {
            channelId: t,
            command: n,
            section: i,
            initialValues: r,
            location: s,
            triggerSection: a,
            queryLength: l,
            sectionName: d,
            query: u,
            searchResultsPosition: c,
            source: E,
            commandOrigin: h,
        } = e,
        m = _(t);
    if (n?.id === m.activeCommand?.id) return !1;
    (m.activeCommand = n),
        (m.activeCommandSection = i),
        (m.activeOptionName = null),
        (m.preferredCommandId = null),
        (m.initialValues = r ?? {}),
        (m.commandOrigin = h ?? null),
        (m.source = E);
    let f = {};
    return (
        n?.options != null &&
            n.options.forEach((e) => {
                f[e.name] = { isActive: !1, hasValue: !1, lastValidationResult: null, optionValue: null };
            }),
        (m.optionStates = f),
        null != n &&
            (0, o.my)({
                command: n,
                location: s,
                triggerSection: a,
                queryLength: l,
                sectionName: d,
                query: u,
                searchResultsPosition: c,
                source: E,
            }),
        !0
    );
}
function c(e) {
    let { channelId: t, commandId: n } = e,
        i = _(t);
    return (
        n !== i.preferredCommandId &&
        (null !== i.preferredCommandId || n !== (i.activeCommand?.id ?? null)) &&
        ((i.activeCommand = null), (i.activeOptionName = null), (i.preferredCommandId = n), (i.optionStates = {}), !0)
    );
}
function E(e) {
    let { channelId: t, changedOptionStates: n } = e,
        i = _(t),
        r = { ...i.optionStates };
    for (let [e, t] of Object.entries(n)) {
        if (!(e in i.optionStates)) continue;
        if (!(void 0 !== t.hasValue ? t.hasValue : r[e].hasValue)) {
            (r[e] = {
                hasValue: !1,
                isActive: !1,
                lastValidationResult: null,
                optionValue: null,
                location: void 0,
                length: void 0,
            }),
                i.activeOptionName === e && (i.activeOptionName = null);
            continue;
        }
        let n = r[e];
        (r[e] = {
            hasValue: !0,
            isActive: void 0 !== t.isActive ? t.isActive : n.isActive,
            lastValidationResult: void 0 !== t.lastValidationResult ? t.lastValidationResult : n.lastValidationResult,
            optionValue: t.optionValue ?? n.optionValue,
            location: t.location ?? n.location,
            length: t.length ?? n.length,
        }),
            void 0 !== t.isActive &&
                (t.isActive
                    ? (null != i.activeOptionName &&
                          i.activeOptionName !== e &&
                          ((r[i.activeOptionName] = { ...r[i.activeOptionName] }),
                          (r[i.activeOptionName].isActive = !1)),
                      (i.activeOptionName = e))
                    : e === i.activeOptionName && (i.activeOptionName = null));
    }
    return (i.optionStates = r), !0;
}
class h extends i.Ay.Store {
    static displayName = "ApplicationCommandStore";
    initialize() {
        this.waitFor(s.Ay, a.A),
            s.Ay.addChangeListener(() => {
                let e = a.A.getChannelId();
                if (null == e) return (l = {}), !0;
                let t = s.Ay.getCurrentSidebarChannelId(e);
                if (null != t && t in l) return !1;
                l = e in l ? { [e]: l[e] } : {};
            });
    }
    getActiveCommand(e) {
        return _(e).activeCommand;
    }
    getActiveCommandSection(e) {
        return _(e).activeCommandSection;
    }
    getActiveOptionName(e) {
        return _(e).activeOptionName;
    }
    getActiveOption(e) {
        let t = _(e);
        return t.activeCommand?.options?.find((e) => e.name === t.activeOptionName) ?? null;
    }
    getPreferredCommandId(e) {
        return _(e).preferredCommandId;
    }
    getOptionStates(e) {
        return _(e).optionStates;
    }
    getOptionState(e, t) {
        return _(e).optionStates[t];
    }
    getCommandOrigin(e) {
        return _(e).commandOrigin;
    }
    getSource(e) {
        return _(e).source;
    }
    getOption(e, t) {
        let n = _(e);
        return n.activeCommand?.options?.find((e) => e.name === t);
    }
    getState(e) {
        return { ..._(e) };
    }
}
let m = new h(r.h, {
    CONNECTION_OPEN: d,
    CHANNEL_SELECT: d,
    LOGOUT: d,
    APPLICATION_COMMAND_SET_ACTIVE_COMMAND: u,
    APPLICATION_COMMAND_SET_PREFERRED_COMMAND: c,
    APPLICATION_COMMAND_UPDATE_OPTIONS: E,
    APPLICATION_COMMAND_UPDATE_CHANNEL_STATE: function (e) {
        let { channelId: t, preferredCommandId: n, command: i, section: r, location: s, changedOptionStates: a } = e,
            o = u({
                type: "APPLICATION_COMMAND_SET_ACTIVE_COMMAND",
                channelId: t,
                command: i,
                section: r,
                location: s,
            }),
            l = c({ type: "APPLICATION_COMMAND_SET_PREFERRED_COMMAND", channelId: t, commandId: n }),
            d = E({ type: "APPLICATION_COMMAND_UPDATE_OPTIONS", channelId: t, changedOptionStates: a });
        return o || l || d;
    },
});
