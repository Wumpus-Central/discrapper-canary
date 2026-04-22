"use strict";
n.d(t, { A: () => h });
var r = n(311907),
    i = n(73153),
    s = n(761640),
    a = n(309010),
    o = n(168186);
let l = {};
function u() {
    return (l = {}), !0;
}
function d(e) {
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
function c(e) {
    let {
            channelId: t,
            command: n,
            section: r,
            initialValues: i,
            location: s,
            triggerSection: a,
            queryLength: l,
            sectionName: u,
            query: c,
            searchResultsPosition: _,
            source: f,
            commandOrigin: E,
        } = e,
        h = d(t);
    if (n?.id === h.activeCommand?.id) return !1;
    (h.activeCommand = n),
        (h.activeCommandSection = r),
        (h.activeOptionName = null),
        (h.preferredCommandId = null),
        (h.initialValues = i ?? {}),
        (h.commandOrigin = E ?? null),
        (h.source = f);
    let p = {};
    return (
        n?.options != null &&
            n.options.forEach((e) => {
                p[e.name] = { isActive: !1, hasValue: !1, lastValidationResult: null, optionValue: null };
            }),
        (h.optionStates = p),
        null != n &&
            (0, o.my)({
                command: n,
                location: s,
                triggerSection: a,
                queryLength: l,
                sectionName: u,
                query: c,
                searchResultsPosition: _,
                source: f,
            }),
        !0
    );
}
function _(e) {
    let { channelId: t, commandId: n } = e,
        r = d(t);
    return (
        n !== r.preferredCommandId &&
        (null !== r.preferredCommandId || n !== (r.activeCommand?.id ?? null)) &&
        ((r.activeCommand = null), (r.activeOptionName = null), (r.preferredCommandId = n), (r.optionStates = {}), !0)
    );
}
function f(e) {
    let { channelId: t, changedOptionStates: n } = e,
        r = d(t),
        i = { ...r.optionStates };
    for (let [e, t] of Object.entries(n)) {
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
            optionValue: t.optionValue ?? n.optionValue,
            location: t.location ?? n.location,
            length: t.length ?? n.length,
        }),
            void 0 !== t.isActive &&
                (t.isActive
                    ? (null != r.activeOptionName &&
                          r.activeOptionName !== e &&
                          ((i[r.activeOptionName] = { ...i[r.activeOptionName] }),
                          (i[r.activeOptionName].isActive = !1)),
                      (r.activeOptionName = e))
                    : e === r.activeOptionName && (r.activeOptionName = null));
    }
    return (r.optionStates = i), !0;
}
class E extends r.Ay.Store {
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
        return d(e).activeCommand;
    }
    getActiveCommandSection(e) {
        return d(e).activeCommandSection;
    }
    getActiveOptionName(e) {
        return d(e).activeOptionName;
    }
    getActiveOption(e) {
        let t = d(e);
        return t.activeCommand?.options?.find((e) => e.name === t.activeOptionName) ?? null;
    }
    getPreferredCommandId(e) {
        return d(e).preferredCommandId;
    }
    getOptionStates(e) {
        return d(e).optionStates;
    }
    getOptionState(e, t) {
        return d(e).optionStates[t];
    }
    getCommandOrigin(e) {
        return d(e).commandOrigin;
    }
    getSource(e) {
        return d(e).source;
    }
    getOption(e, t) {
        let n = d(e);
        return n.activeCommand?.options?.find((e) => e.name === t);
    }
    getState(e) {
        return { ...d(e) };
    }
}
let h = new E(i.h, {
    CONNECTION_OPEN: u,
    CHANNEL_SELECT: u,
    LOGOUT: u,
    APPLICATION_COMMAND_SET_ACTIVE_COMMAND: c,
    APPLICATION_COMMAND_SET_PREFERRED_COMMAND: _,
    APPLICATION_COMMAND_UPDATE_OPTIONS: f,
    APPLICATION_COMMAND_UPDATE_CHANNEL_STATE: function (e) {
        let { channelId: t, preferredCommandId: n, command: r, section: i, location: s, changedOptionStates: a } = e,
            o = c({
                type: "APPLICATION_COMMAND_SET_ACTIVE_COMMAND",
                channelId: t,
                command: r,
                section: i,
                location: s,
            }),
            l = _({ type: "APPLICATION_COMMAND_SET_PREFERRED_COMMAND", channelId: t, commandId: n }),
            u = f({ type: "APPLICATION_COMMAND_UPDATE_OPTIONS", channelId: t, changedOptionStates: a });
        return o || l || u;
    },
});
